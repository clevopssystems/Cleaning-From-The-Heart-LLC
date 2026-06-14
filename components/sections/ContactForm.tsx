"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";
import {
  quoteServiceOptions,
  propertyTypeOptions,
  cleaningFrequencyOptions,
  contactMethodOptions
} from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  frequency: string;
  contactMethod: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  propertyType: "",
  frequency: "",
  contactMethod: "",
  message: ""
};

const FALLBACK_ERROR =
  "Something went wrong while sending your request. Please try again or call us at (206) 850-8484.";

// Honeypot: a hidden field real users never see or fill.
// Bots that auto-fill all fields will populate it, and the server rejects them.
const HONEYPOT_STYLE: React.CSSProperties = {
  position: "absolute",
  left: "-9999px",
  width: "1px",
  height: "1px",
  opacity: 0,
  pointerEvents: "none"
};

const INPUT_CLASS =
  "w-full rounded-xl border border-surface bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [honeypot, setHoneypot] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot })
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? FALLBACK_ERROR);
      }

      setStatus("success");
      setForm(INITIAL_STATE);
      setHoneypot("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : FALLBACK_ERROR);
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h2 className="text-xl font-semibold text-ink">Quote Request Sent</h2>
        <p className="max-w-sm text-sm text-muted">
          Thank you. Your quote request has been sent. We will review your details and follow up
          with clear next steps, usually within 2 business hours during Mon-Sat 7 AM-7 PM.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-lg border border-brand-200 px-4 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-50"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form id="quote-form" onSubmit={handleSubmit} noValidate className="card space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-ink">Request a Free Quote</h2>
        <p className="mt-1 text-sm text-muted">
          Share a few details and we will follow up with a clear quote and scheduling options.
        </p>
      </div>

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
            className={INPUT_CLASS}
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
            className={INPUT_CLASS}
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
            placeholder="Your phone number"
            value={form.phone}
            onChange={handleChange}
            className={INPUT_CLASS}
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
            className={INPUT_CLASS}
          >
            <option value="">Select a service…</option>
            {quoteServiceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Property Type + Frequency */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="propertyType" className="block text-sm font-medium text-ink">
            Property Type <span className="text-muted text-xs">(optional)</span>
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className={INPUT_CLASS}
          >
            <option value="">Select a property type…</option>
            {propertyTypeOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="frequency" className="block text-sm font-medium text-ink">
            Cleaning Frequency <span className="text-muted text-xs">(optional)</span>
          </label>
          <select
            id="frequency"
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className={INPUT_CLASS}
          >
            <option value="">Select a frequency…</option>
            {cleaningFrequencyOptions.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preferred Contact Method */}
      <fieldset className="space-y-1.5">
        <legend className="block text-sm font-medium text-ink">
          Preferred Contact Method <span className="text-muted text-xs">(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {contactMethodOptions.map((method) => {
            const selected = form.contactMethod === method;
            return (
              <button
                key={method}
                type="button"
                aria-pressed={selected}
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    contactMethod: prev.contactMethod === method ? "" : method
                  }))
                }
                className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
                  selected
                    ? "border-brand-400 bg-brand-50 text-brand-700"
                    : "border-surface bg-white text-muted hover:border-brand-200 hover:text-ink"
                }`}
              >
                {method}
              </button>
            );
          })}
        </div>
      </fieldset>

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
          placeholder="Tell us about your space, schedule, service needs, square footage, or anything we should know."
          value={form.message}
          onChange={handleChange}
          className={`resize-none ${INPUT_CLASS}`}
        />
        <p className="text-right text-xs text-muted">{form.message.length} / 2000</p>
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

      {/* Error message */}
      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
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
            Get a Free Quote
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted">
        Protected from spam. Your information stays private.
      </p>
      <p className="text-center text-xs text-muted">
        We respond within 2 business hours · Mon-Sat 7 AM-7 PM
      </p>
    </form>
  );
}
