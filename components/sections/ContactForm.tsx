"use client";

import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { CheckCircle, Loader2, Send, AlertTriangle } from "lucide-react";

// ---------------------------------------------------------------------------
// Read the site key once at module level.
// NEXT_PUBLIC_* vars are inlined at build time — if this is undefined the var
// was never set.  We log a warning so it's easy to spot in the console.
// ---------------------------------------------------------------------------
const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? "";

if (!HCAPTCHA_SITE_KEY) {
  console.warn(
    "[ContactForm] NEXT_PUBLIC_HCAPTCHA_SITE_KEY is not set.\n" +
      "  • Development : add it to .env.local\n" +
      "  • Production  : add it in Vercel → Settings → Environment Variables\n" +
      "  hCaptcha widget will be hidden and captcha validation will be skipped."
  );
}

const SERVICE_OPTIONS = [
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
];

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

// Honeypot: a hidden field real users never see or fill.
// Bots that auto-fill all fields will populate it, and the server rejects them.
const HONEYPOT_STYLE: React.CSSProperties = {
  position: "absolute",
  left: "-9999px",
  width: "1px",
  height: "1px",
  opacity: 0,
  pointerEvents: "none",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [honeypot, setHoneypot] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const captchaRef = useRef<HCaptcha>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    // Only enforce captcha when the widget is actually rendered
    if (HCAPTCHA_SITE_KEY && !captchaToken) {
      setErrorMessage("Please complete the CAPTCHA verification before submitting.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captchaToken, website: honeypot }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(INITIAL_STATE);
      setHoneypot("");
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      captchaRef.current?.resetCaptcha();
      setCaptchaToken("");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-semibold text-ink">Message Sent!</h3>
        <p className="max-w-sm text-sm text-muted">
          Thank you! We&apos;ll review your request and get back to you as soon as possible —
          usually within 2 business hours during Mon–Sat 7 AM–7 PM.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-lg border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-50"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card space-y-5">
      <h2 className="text-xl font-semibold text-ink">Request a Free Quote</h2>

      {/* Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-ink">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-surface bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-surface bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-medium text-ink">
            Phone <span className="text-muted text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="206-555-0100"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-surface bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="service" className="block text-sm font-medium text-ink">
            Service Needed <span className="text-muted text-xs">(optional)</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-surface bg-white px-4 py-2.5 text-sm text-ink focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          >
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your space, square footage, frequency, or any specific needs…"
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-surface bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
        />
        <p className="text-right text-xs text-muted">
          {form.message.length} / 2000
        </p>
      </div>

      {/* Honeypot — visually hidden, never filled by real users */}
      <div aria-hidden="true" style={HONEYPOT_STYLE}>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {/* hCaptcha — only renders when the site key is available */}
      {HCAPTCHA_SITE_KEY ? (
        <div>
          <HCaptcha
            sitekey={HCAPTCHA_SITE_KEY}
            onVerify={(token) => {
              setCaptchaToken(token);
              setErrorMessage("");
            }}
            onExpire={() => setCaptchaToken("")}
            ref={captchaRef}
          />
        </div>
      ) : process.env.NODE_ENV === "development" ? (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            <strong>Dev only:</strong> hCaptcha is disabled.{" "}
            Add <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_HCAPTCHA_SITE_KEY</code>{" "}
            to <code className="rounded bg-amber-100 px-1">.env.local</code> to enable it.
          </span>
        </div>
      ) : null}

      {/* Error message */}
      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMessage}
        </div>
      )}

      {/* Client-side captcha prompt (shown before submit, not after server error) */}
      {status === "idle" && errorMessage && (
        <div
          role="alert"
          className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="cta-primary flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted">
        We respond within 2 business hours · Mon–Sat 7 AM–7 PM
      </p>
    </form>
  );
}
