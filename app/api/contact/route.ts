import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ---------------------------------------------------------------------------
// Rate limiter — Upstash Redis (shared across every Vercel serverless instance).
//
// If the Upstash env vars are absent (local dev) we skip rate limiting and log
// a warning.  In production, missing vars means NO rate limiting, which is why
// we surface a loud console.error there.
// ---------------------------------------------------------------------------
function createRatelimiter(): Ratelimit | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[contact] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set. " +
          "Rate limiting is DISABLED in production. Add them to your Vercel env vars."
      );
    }
    return null;
  }
  return new Ratelimit({
    redis: Redis.fromEnv(),
    // Sliding window: max 3 submissions per 60-second window per IP.
    limiter: Ratelimit.slidingWindow(3, "60 s"),
    analytics: false,
    prefix: "rl:contact",
  });
}

const ratelimiter = createRatelimiter();

// ---------------------------------------------------------------------------
// Allowed service values — anything outside this set is rejected.
// Keep in sync with SERVICE_OPTIONS in ContactForm.tsx.
// ---------------------------------------------------------------------------
const ALLOWED_SERVICES = new Set([
  "",
  "Commercial Cleaning",
  "Carpet Cleaning",
  "Strip and Wax",
  "Move-In / Move-Out Cleaning",
  "Post-Construction Cleanup",
  "School / Facility Cleaning",
  "Window & Glass Cleaning",
  "Pressure Washing",
  "Junk Removal",
  "Parking Lot & Exterior Maintenance",
  "Other / Not Sure",
]);

// 16 KB is more than enough for a contact form.
const MAX_BODY_BYTES = 16 * 1024;

// Allowed origins: production domain (with and without www) + localhost for dev.
const ALLOWED_ORIGINS: ReadonlySet<string> =
  process.env.NODE_ENV === "production"
    ? new Set([
        "https://cleaningfromtheheartllc.com",
        "https://www.cleaningfromtheheartllc.com",
        "https://cleaningfromtheheartllc.vercel.app",
      ])
    : new Set(["http://localhost:3000", "http://localhost:3001"]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

async function verifyHCaptcha(token: string): Promise<boolean> {
  const secret = process.env.HCAPTCHA_SECRET_KEY;
  if (!secret) {
    console.error("[contact] HCAPTCHA_SECRET_KEY is not set.");
    return false;
  }
  const res = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `response=${encodeURIComponent(token)}&secret=${encodeURIComponent(secret)}`,
  });
  const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
  console.log("[contact] hCaptcha verify result:", JSON.stringify(data));
  return data.success === true;
}

// Strip < and > to prevent HTML injection in the email body.
function sanitize(str: string): string {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}

// ---------------------------------------------------------------------------
// Next.js App Router automatically returns 405 + correct Allow header for any
// method not exported here, so we only need to export POST.
// ---------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  // ── 1. Content-Type guard ──────────────────────────────────────────────────
  // Reject anything that isn't JSON before reading the body.
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json." },
      { status: 415 }
    );
  }

  // ── 2. Origin guard ───────────────────────────────────────────────────────
  // The `origin` header is always set by browsers on cross-origin fetch.
  // A same-origin fetch from the contact page sets it to our own domain.
  // Missing origin (e.g. server-to-server curl with no origin) is allowed so
  // that legitimate integrations aren't blocked; the combination of CAPTCHA +
  // rate limiting handles those cases.
  const origin = req.headers.get("origin");
  console.log("[contact] Request origin:", origin);
  if (origin !== null && !ALLOWED_ORIGINS.has(origin)) {
    console.error("[contact] Blocked origin:", origin);
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  // ── 3. Payload size guard ─────────────────────────────────────────────────
  // Check the Content-Length header first (fast, no I/O) then verify the
  // actual body size after reading, since Content-Length can be absent or
  // spoofed.
  const contentLength = req.headers.get("content-length");
  if (contentLength !== null && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ error: "Failed to read request body." }, { status: 400 });
  }

  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  // ── 4. JSON parsing + strict type check ───────────────────────────────────
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Reject arrays, strings, numbers, null — must be a plain object.
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const body = parsed as Record<string, unknown>;

  // ── 5. Honeypot ───────────────────────────────────────────────────────────
  // The form renders a visually-hidden `website` field that real users never
  // fill. Bots that blindly fill all fields will populate it.
  // Return 200 (not 4xx) so the bot doesn't know it was caught.
  const honeypot = typeof body.website === "string" ? body.website : "";
  if (honeypot !== "") {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // ── 6. Rate limiting (Upstash Redis) ──────────────────────────────────────
  if (ratelimiter) {
    const ip = getClientIp(req);
    const { success: allowed } = await ratelimiter.limit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a minute and try again." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }
  }

  // ── 7. Field extraction ───────────────────────────────────────────────────
  const name = typeof body.name === "string" ? body.name : "";
  const email = typeof body.email === "string" ? body.email : "";
  const phone = typeof body.phone === "string" ? body.phone : "";
  const service = typeof body.service === "string" ? body.service : "";
  const message = typeof body.message === "string" ? body.message : "";
  const captchaToken = typeof body.captchaToken === "string" ? body.captchaToken : "";

  // ── 8. Input validation ───────────────────────────────────────────────────
  if (!name.trim() || name.trim().length < 2 || name.trim().length > 100) {
    return NextResponse.json(
      { error: "Name must be between 2 and 100 characters." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.trim() || !emailRegex.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!message.trim() || message.trim().length < 10 || message.trim().length > 2000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 2000 characters." },
      { status: 400 }
    );
  }

  if (phone.trim() && !/^[\d\s()\-+.]{7,20}$/.test(phone.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  // Reject service values not in the known list — prevents arbitrary strings
  // from being injected into the email even after sanitization.
  if (!ALLOWED_SERVICES.has(service)) {
    return NextResponse.json({ error: "Invalid service selection." }, { status: 400 });
  }

  // ── 9. CAPTCHA verification ───────────────────────────────────────────────
  console.log("HCAPTCHA_SECRET_KEY exists:", !!process.env.HCAPTCHA_SECRET_KEY);
  console.log("[contact] Captcha token received:", captchaToken ? `${captchaToken.substring(0, 20)}…` : "(empty)");
  if (!captchaToken) {
    return NextResponse.json(
      { error: "Please complete the CAPTCHA verification." },
      { status: 400 }
    );
  }
  const captchaOk = await verifyHCaptcha(captchaToken);
  if (!captchaOk) {
    return NextResponse.json(
      { error: "CAPTCHA verification failed. Please try again." },
      { status: 400 }
    );
  }

  // ── 10. Send email ────────────────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY);

  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safePhone = sanitize(phone);
  const safeService = sanitize(service);
  const safeMessage = sanitize(message).replace(/\n/g, "<br>");
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "full",
    timeStyle: "short",
  });

  console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
  console.log("Sending email via Resend...");

  try {
    const { data, error } = await resend.emails.send({
      from: "Website Lead <onboarding@resend.dev>",
      to: ["clevops.systems@gmail.com"],
      replyTo: safeEmail,
      subject: "New Lead Test",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:24px;border-radius:12px;">
          <h2 style="margin:0 0 20px;color:#1e40af;font-size:22px;border-bottom:2px solid #1e40af;padding-bottom:12px;">
            New Quote Request
          </h2>
          <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;">
            <tr style="background:#eff6ff;">
              <td style="padding:10px 16px;font-weight:700;color:#374151;width:130px;">Name</td>
              <td style="padding:10px 16px;color:#111827;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding:10px 16px;font-weight:700;color:#374151;">Email</td>
              <td style="padding:10px 16px;color:#111827;">
                <a href="mailto:${safeEmail}" style="color:#1e40af;">${safeEmail}</a>
              </td>
            </tr>
            ${safePhone ? `
            <tr style="background:#eff6ff;">
              <td style="padding:10px 16px;font-weight:700;color:#374151;">Phone</td>
              <td style="padding:10px 16px;color:#111827;">${safePhone}</td>
            </tr>` : ""}
            ${safeService ? `
            <tr ${!safePhone ? 'style="background:#eff6ff;"' : ""}>
              <td style="padding:10px 16px;font-weight:700;color:#374151;">Service</td>
              <td style="padding:10px 16px;color:#111827;">${safeService}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top:20px;background:white;border-radius:8px;padding:16px;border-left:4px solid #1e40af;">
            <p style="margin:0 0 10px;font-weight:700;color:#374151;">Message</p>
            <p style="margin:0;color:#374151;line-height:1.6;">${safeMessage}</p>
          </div>
          <p style="margin-top:20px;color:#9ca3af;font-size:12px;">
            Submitted via cleaningfromtheheartllc.com on ${submittedAt} (Pacific Time)
          </p>
        </div>
      `,
    });

    console.log("Resend response:", data);
    console.log("Resend error:", error);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      {
        error:
          "Failed to send your message. Please call us directly at 206-850-8484 or try again later.",
      },
      { status: 500 }
    );
  }
}
