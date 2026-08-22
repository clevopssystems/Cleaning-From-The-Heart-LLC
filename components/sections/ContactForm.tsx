"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Loader2, Send } from "lucide-react";
import {
  quoteServiceGroups,
  propertyTypeOptions,
  cleaningFrequencyOptions,
  serviceTimelineOptions,
  contactMethodOptions,
  contactMethodRequiresPhone,
  resolveServiceParam,
  resolvePropertyParam,
  validateQuoteSubmission,
  QUOTE_FIELD_ORDER,
  MESSAGE_MIN_LENGTH,
  MESSAGE_MAX_LENGTH,
  NAME_MAX_LENGTH,
  type QuoteSubmission,
  type QuoteFieldErrors,
  type QuoteFieldName
} from "@/lib/quote-form";

type FormStatus = "idle" | "submitting" | "success" | "error";

const INITIAL_STATE: QuoteSubmission = {
  name: "",
  email: "",
  phone: "",
  contactMethod: "",
  service: "",
  propertyType: "",
  frequency: "",
  timeline: "",
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
const INPUT_ERROR_CLASS = "border-red-400 focus:border-red-400 focus:ring-red-100";
// Extra right padding keeps long option labels clear of the native chevron.
const SELECT_CLASS = `${INPUT_CLASS} pr-9`;

function RequiredMark() {
  return (
    <>
      {" "}
      <span className="text-red-500" aria-hidden>
        *
      </span>
      <span className="sr-only">(required)</span>
    </>
  );
}

function OptionalMark() {
  return <span className="text-muted text-xs"> (optional)</span>;
}

/** Inline, screen-reader-linked error text for a single field. */
function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs font-medium text-red-600">
      {message}
    </p>
  );
}

/**
 * The quote form. Prefill values come from the query string via the
 * `ContactForm` wrapper below and are only used as INITIAL state, so a
 * visitor's own selection is never overwritten afterwards.
 */
function QuoteForm({
  initialService,
  initialPropertyType
}: {
  initialService: string;
  initialPropertyType: string;
}) {
  const [form, setForm] = useState<QuoteSubmission>(() => ({
    ...INITIAL_STATE,
    service: initialService,
    propertyType: initialPropertyType
  }));
  const [honeypot, setHoneypot] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  // Errors only appear after the first submit attempt, so the form never
  // shows red before the visitor has had a chance to fill it in.
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const phoneRequired = contactMethodRequiresPhone(form.contactMethod);
  const messageLength = form.message.trim().length;

  // Nothing is flagged until the visitor has tried to submit once. After that
  // we re-validate on every keystroke so errors clear themselves as they type.
  const shownErrors: QuoteFieldErrors = useMemo(
    () => (submitAttempted ? validateQuoteSubmission(form) : {}),
    [submitAttempted, form]
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name as QuoteFieldName]: value }));
  }

  function selectContactMethod(method: string) {
    setForm((prev) => ({
      ...prev,
      contactMethod: prev.contactMethod === method ? "" : method
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");
    setSubmitAttempted(true);

    // Same validator the API route runs, so the two can never disagree.
    const errors = validateQuoteSubmission(form);
    if (Object.keys(errors).length > 0) {
      setStatus("idle");
      // Move focus to the first invalid control, in visual field order, for
      // keyboard and screen-reader users.
      const firstField = QUOTE_FIELD_ORDER.find((name) => errors[name]);
      const el = formRef.current?.querySelector<HTMLElement>(`[name="${firstField}"]`);
      el?.focus();
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

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
      setSubmitAttempted(false);
    } catch (err) {
      // Entered data is deliberately preserved so nothing is retyped.
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
    <form
      id="quote-form"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="card space-y-5"
    >
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
            Full Name
            <RequiredMark />
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={NAME_MAX_LENGTH}
            autoComplete="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            aria-invalid={shownErrors.name ? true : undefined}
            aria-describedby={shownErrors.name ? "name-error" : undefined}
            className={`${INPUT_CLASS} ${shownErrors.name ? INPUT_ERROR_CLASS : ""}`}
          />
          <FieldError id="name-error" message={shownErrors.name} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-ink">
            Email Address
            <RequiredMark />
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
            aria-invalid={shownErrors.email ? true : undefined}
            aria-describedby={shownErrors.email ? "email-error" : undefined}
            className={`${INPUT_CLASS} ${shownErrors.email ? INPUT_ERROR_CLASS : ""}`}
          />
          <FieldError id="email-error" message={shownErrors.email} />
        </div>
      </div>

      {/* Phone + Preferred Contact Method */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-sm font-medium text-ink">
            Phone
            {phoneRequired ? <RequiredMark /> : <OptionalMark />}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required={phoneRequired}
            autoComplete="tel"
            placeholder="(206) 555-1234"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={shownErrors.phone ? true : undefined}
            aria-describedby={shownErrors.phone ? "phone-error" : undefined}
            className={`${INPUT_CLASS} ${shownErrors.phone ? INPUT_ERROR_CLASS : ""}`}
          />
          <FieldError id="phone-error" message={shownErrors.phone} />
        </div>

        <fieldset className="space-y-1.5">
          <legend className="block text-sm font-medium text-ink">
            Preferred Contact Method
            <OptionalMark />
          </legend>
          <div className="flex flex-wrap gap-2">
            {contactMethodOptions.map((method) => {
              const selected = form.contactMethod === method;
              return (
                <button
                  key={method}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => selectContactMethod(method)}
                  className={`min-h-11 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
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
      </div>

      {/* Service + Property Type */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="service" className="block text-sm font-medium text-ink">
            Service Needed
            <RequiredMark />
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            aria-invalid={shownErrors.service ? true : undefined}
            aria-describedby={shownErrors.service ? "service-error" : undefined}
            className={`${SELECT_CLASS} ${shownErrors.service ? INPUT_ERROR_CLASS : ""}`}
          >
            <option value="">Select a service…</option>
            {quoteServiceGroups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <FieldError id="service-error" message={shownErrors.service} />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="propertyType" className="block text-sm font-medium text-ink">
            Property Type
            <OptionalMark />
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={form.propertyType}
            onChange={handleChange}
            className={SELECT_CLASS}
          >
            <option value="">Select a property type…</option>
            {propertyTypeOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Frequency + Timeline */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="frequency" className="block text-sm font-medium text-ink">
            Cleaning Frequency
            <OptionalMark />
          </label>
          <select
            id="frequency"
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className={SELECT_CLASS}
          >
            <option value="">Select a frequency…</option>
            {cleaningFrequencyOptions.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="timeline" className="block text-sm font-medium text-ink">
            When do you need service?
            <OptionalMark />
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={SELECT_CLASS}
          >
            <option value="">Select a timeframe…</option>
            {serviceTimelineOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Tell Us About Your Cleaning Needs
          <RequiredMark />
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={MESSAGE_MIN_LENGTH}
          maxLength={MESSAGE_MAX_LENGTH}
          placeholder="Tell us about your space, schedule, service needs, square footage, or anything we should know."
          value={form.message}
          onChange={handleChange}
          aria-invalid={shownErrors.message ? true : undefined}
          aria-describedby={shownErrors.message ? "message-error" : "message-hint"}
          className={`resize-none ${INPUT_CLASS} ${shownErrors.message ? INPUT_ERROR_CLASS : ""}`}
        />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p id="message-hint" className="text-xs text-muted">
            At least {MESSAGE_MIN_LENGTH} characters.
          </p>
          <p className="text-xs text-muted">
            {messageLength} / {MESSAGE_MAX_LENGTH.toLocaleString("en-US")}
          </p>
        </div>
        <FieldError id="message-error" message={shownErrors.message} />
      </div>

      {/* Honeypot, visually hidden, never filled by real users */}
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

      {/* Server / network error */}
      {status === "error" && errorMessage && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {errorMessage}
        </div>
      )}

      {/* Summary shown when client-side validation blocks the submit */}
      {submitAttempted && Object.keys(shownErrors).length > 0 && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          Please check the highlighted fields above and try again.
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

/**
 * Reads the optional `?service=` / `?property=` prefill parameters. Both are
 * untrusted input, so they are mapped against the canonical option lists and
 * anything unrecognised falls back to an empty selection.
 */
function QuoteFormWithPrefill() {
  const searchParams = useSearchParams();
  return (
    <QuoteForm
      initialService={resolveServiceParam(searchParams.get("service"))}
      initialPropertyType={resolvePropertyParam(searchParams.get("property"))}
    />
  );
}

export function ContactForm() {
  // useSearchParams() opts its subtree into client-side rendering, so the
  // Suspense fallback renders the identical, unprefilled form. Same markup,
  // same height, no layout shift.
  return (
    <Suspense fallback={<QuoteForm initialService="" initialPropertyType="" />}>
      <QuoteFormWithPrefill />
    </Suspense>
  );
}
