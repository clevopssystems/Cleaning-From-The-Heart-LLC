import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import {
  validateQuoteSubmission,
  firstQuoteError,
  isUrgentTimeline,
  type QuoteSubmission
} from "@/lib/quote-form";

// ---------------------------------------------------------------------------
// Rate limiter, Upstash Redis (shared across every Vercel serverless instance).
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
// Field validation lives in lib/quote-form.ts and is shared with the contact
// form component, so the options a visitor can pick and the values this route
// accepts are generated from the same lists and can never drift apart.
// Every select field is optional, so "" is always allowed; any other value
// must appear in the canonical option list or the request is rejected.
// ---------------------------------------------------------------------------

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

  // Reject arrays, strings, numbers, null, must be a plain object.
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
  // Every field is coerced to a string first, so a non-string (or missing)
  // value becomes "" rather than reaching the validator or the email body.
  const field = (key: keyof QuoteSubmission): string =>
    typeof body[key] === "string" ? (body[key] as string) : "";

  const submission: QuoteSubmission = {
    name: field("name"),
    email: field("email"),
    phone: field("phone"),
    contactMethod: field("contactMethod"),
    service: field("service"),
    propertyType: field("propertyType"),
    frequency: field("frequency"),
    timeline: field("timeline"),
    message: field("message"),
  };

  // ── 8. Input validation ───────────────────────────────────────────────────
  // Same validator the form component runs client-side. It enforces the length
  // limits, the email and phone formats, the required service selection, the
  // select-field whitelists, and the conditional rule that a phone number is
  // required when the visitor asks to be contacted by phone call or text message.
  const validationErrors = validateQuoteSubmission(submission);
  const validationError = firstQuoteError(validationErrors);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  // ── 9. Send email ─────────────────────────────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY);

  const safeName = sanitize(submission.name);
  const safeEmail = sanitize(submission.email);
  const safePhone = sanitize(submission.phone);
  const safeContactMethod = sanitize(submission.contactMethod);
  const safeService = sanitize(submission.service);
  const safePropertyType = sanitize(submission.propertyType);
  const safeFrequency = sanitize(submission.frequency);
  const safeTimeline = sanitize(submission.timeline);
  const safeMessagePlain = sanitize(submission.message);
  const safeMessage = safeMessagePlain.replace(/\n/g, "<br>");
  const urgent = isUrgentTimeline(submission.timeline);
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    dateStyle: "full",
    timeStyle: "short",
  });

  const NOT_PROVIDED = "Not provided";

  // Lead details in scan order. Contact details first, then what they need,
  // then scheduling, so the whole lead reads top to bottom without hunting.
  const rows: { label: string; value: string; strong?: boolean }[] = [
    { label: "Name", value: safeName },
    { label: "Email", value: safeEmail },
    { label: "Phone", value: safePhone || NOT_PROVIDED },
    { label: "Preferred Contact", value: safeContactMethod || "No preference given" },
    { label: "Service", value: safeService, strong: true },
    { label: "Property Type", value: safePropertyType || NOT_PROVIDED },
    { label: "Frequency", value: safeFrequency || NOT_PROVIDED },
    { label: "Needed", value: safeTimeline || NOT_PROVIDED, strong: urgent },
  ];

  const rowsHtml = rows
    .map((row, index) => {
      const background = index % 2 === 0 ? "#eff6ff" : "#ffffff";
      const value =
        row.label === "Email"
          ? `<a href="mailto:${safeEmail}" style="color:#1e40af;text-decoration:none;">${safeEmail}</a>`
          : row.strong
            ? `<strong>${row.value}</strong>`
            : row.value;
      return `
            <tr style="background:${background};">
              <td style="padding:12px 16px;font-weight:700;color:#374151;width:170px;font-size:14px;">${row.label}</td>
              <td style="padding:12px 16px;color:#111827;font-size:14px;">${value}</td>
            </tr>`;
    })
    .join("");

  // Plain-text alternative, mirrors the HTML for clients that prefer text.
  const textBody = [
    urgent ? "TIME-SENSITIVE LEAD" : null,
    "NEW QUOTE REQUEST",
    "",
    ...rows.map((row) => `${row.label}:\n${row.value}`),
    "",
    `Message:\n${safeMessagePlain || NOT_PROVIDED}`,
    "",
    `Submitted ${submittedAt} (Pacific Time) via cleaningfromtheheartllc.com`,
  ]
    .filter((line) => line !== null)
    .join("\n\n");

  const subjectParts = ["New Quote Request"];
  if (safeService) subjectParts.push(safeService);
  if (safeName) subjectParts.push(safeName);
  if (urgent && safeTimeline) subjectParts.push(safeTimeline);

  console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
  console.log("Sending email via Resend...");

  try {
    // This sends each new quote request to both the business owner and internal admin inbox.
    const { data, error } = await resend.emails.send({
      from: "Quotes <quotes@clevops.co>",
      to: ["Cleanfromtheheartllc@gmail.com"],
      replyTo: safeEmail,
      subject: subjectParts.join(" · "),
      text: textBody,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:32px;border-radius:12px;">
          <div style="margin-bottom:24px;">
            <h1 style="margin:0 0 4px;color:#1e40af;font-size:22px;">New Quote Request</h1>
            <p style="margin:0;color:#6b7280;font-size:14px;">Cleaning From The Heart LLC · Website quote form</p>
          </div>
${
  urgent
    ? `
          <div style="margin-bottom:20px;background:#fef3c7;border-left:4px solid #d97706;border-radius:8px;padding:12px 16px;">
            <p style="margin:0;color:#92400e;font-size:14px;font-weight:700;">Time-sensitive: this lead needs service ${safeTimeline.toLowerCase()}.</p>
          </div>`
    : ""
}
          <table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">${rowsHtml}
          </table>

          <div style="margin-top:20px;background:#ffffff;border-radius:8px;padding:16px 20px;border-left:4px solid #1e40af;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
            <p style="margin:0 0 8px;font-weight:700;color:#374151;font-size:14px;">Message</p>
            <p style="margin:0;color:#374151;line-height:1.7;font-size:14px;">${safeMessage || NOT_PROVIDED}</p>
          </div>

          <p style="margin-top:24px;color:#9ca3af;font-size:12px;border-top:1px solid #e5e7eb;padding-top:16px;">
            Submitted on ${submittedAt} (Pacific Time) · cleaningfromtheheartllc.com
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
          "Failed to send your message. Please call us directly at (206) 850-8484 or try again later.",
      },
      { status: 500 }
    );
  }
}
