import { services, type ServiceSlug } from "@/lib/site";

// ───────────────────────────────────────────────────────────────────────────
// QUOTE FORM CONFIGURATION, single source of truth.
//
// Everything the quote form renders and everything /api/contact validates is
// derived from this file, so the frontend options and the backend whitelist
// can never drift apart.
//
// Service labels are NOT re-typed here. They are resolved from the canonical
// services[] array in lib/site.ts by slug, so renaming a service there
// automatically renames it in the dropdown and in the backend whitelist.
// This file only decides how those services are GROUPED for presentation.
// ───────────────────────────────────────────────────────────────────────────

export const NOT_SURE_SERVICE = "Not Sure Yet";

/**
 * Presentation grouping for the service dropdown, defined by slug.
 * A service appears in exactly one group. Any service added to services[]
 * later but not listed here is automatically appended to the fallback group
 * (see buildServiceGroups), so a new service can never silently disappear
 * from the quote form.
 */
const SERVICE_GROUP_DEFS: readonly { label: string; slugs: readonly ServiceSlug[] }[] = [
  {
    label: "Residential Services",
    slugs: [
      "residential-cleaning",
      "residential-deep-cleaning",
      "move-in-move-out-cleaning",
      "residential-window-cleaning"
    ]
  },
  {
    label: "Commercial Services",
    slugs: [
      "commercial-cleaning",
      "commercial-deep-cleaning",
      "commercial-window-cleaning",
      "school-facility-cleaning",
      "restaurant-cleaning",
      "restaurant-kitchen-cleaning",
      "strip-and-wax"
    ]
  },
  {
    label: "Specialty, Floor & Exterior Services",
    slugs: [
      "carpet-cleaning",
      "pressure-washing",
      "solar-panel-cleaning",
      "junk-removal",
      "parking-lot-exterior-maintenance",
      "post-construction-renovation-cleanup",
      "window-cleaning",
      "deep-cleaning"
    ]
  }
];

/** The group uncategorised services fall into, keeps the form self-healing. */
const FALLBACK_GROUP_LABEL = "Specialty, Floor & Exterior Services";

export interface QuoteServiceGroup {
  label: string;
  options: readonly string[];
}

function buildServiceGroups(): QuoteServiceGroup[] {
  const titleBySlug = new Map<string, string>(services.map((s) => [s.slug, s.title]));
  const claimed = new Set<string>();

  const groups: QuoteServiceGroup[] = SERVICE_GROUP_DEFS.map((def) => {
    const options: string[] = [];
    for (const slug of def.slugs) {
      const title = titleBySlug.get(slug);
      // A slug listed here but removed from services[] is skipped rather than
      // rendering an option the backend would reject.
      if (!title) continue;
      claimed.add(slug);
      options.push(title);
    }
    return { label: def.label, options };
  });

  // Self-healing: any canonical service not placed in a group above still
  // shows up, appended to the fallback group.
  const orphans = services.filter((s) => !claimed.has(s.slug));
  if (orphans.length > 0) {
    const fallback =
      groups.find((g) => g.label === FALLBACK_GROUP_LABEL) ?? groups[groups.length - 1];
    fallback.options = [...fallback.options, ...orphans.map((s) => s.title)];
  }

  return [
    ...groups.filter((g) => g.options.length > 0),
    { label: "Unsure", options: [NOT_SURE_SERVICE] }
  ];
}

export const quoteServiceGroups: readonly QuoteServiceGroup[] = buildServiceGroups();

/** Flat list of every valid service value, used for validation. */
export const quoteServiceOptions: readonly string[] = quoteServiceGroups.flatMap((g) => g.options);

export const propertyTypeOptions = [
  "House / Single-Family Home",
  "Apartment / Condo",
  "Office / Corporate Facility",
  "Retail Store",
  "Restaurant / Commercial Kitchen",
  "School / Educational Facility",
  "Healthcare / Medical Facility",
  "Fitness Center / Gym",
  "Hotel / Hospitality Property",
  "Warehouse / Industrial Facility",
  "Property Management / Multi-Unit Property",
  "Auto Dealership",
  "Financial Institution",
  "Government / Public Facility",
  "Place of Worship",
  "Other Commercial Property",
  "Not Sure"
] as const;

export type PropertyTypeOption = (typeof propertyTypeOptions)[number];

export const cleaningFrequencyOptions = [
  "One-Time Service",
  "Daily",
  "Multiple Times Per Week",
  "Weekly",
  "Biweekly / Every Two Weeks",
  "Monthly",
  "Quarterly",
  "Seasonal",
  "Annually",
  "Not Sure Yet"
] as const;

export const serviceTimelineOptions = [
  "As Soon As Possible",
  "Within 1-3 Days",
  "Within a Week",
  "Within 2 Weeks",
  "This Month",
  "Flexible / Planning Ahead"
] as const;

/** Timelines that mark a lead as time-sensitive in the notification email. */
const URGENT_TIMELINES: readonly string[] = ["As Soon As Possible", "Within 1-3 Days"];

export function isUrgentTimeline(timeline: string): boolean {
  return URGENT_TIMELINES.includes(timeline);
}

export const contactMethodOptions = [
  "Phone Call",
  "Text Message",
  "Email",
  "No Preference"
] as const;

export type ContactMethodOption = (typeof contactMethodOptions)[number];

/** Contact methods that make the phone number a required field. */
const PHONE_REQUIRED_METHODS: readonly string[] = ["Phone Call", "Text Message"];

export function contactMethodRequiresPhone(method: string): boolean {
  return PHONE_REQUIRED_METHODS.includes(method);
}

// ─── Field limits, shared by the input attributes and both validators ──────
export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 2000;
export const NAME_MIN_LENGTH = 2;
export const NAME_MAX_LENGTH = 100;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[\d\s()\-+.]{7,20}$/;

// ─── Submission shape + validation ─────────────────────────────────────────

export interface QuoteSubmission {
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  service: string;
  propertyType: string;
  frequency: string;
  timeline: string;
  message: string;
}

export type QuoteFieldName = keyof QuoteSubmission;
export type QuoteFieldErrors = Partial<Record<QuoteFieldName, string>>;

/** Field order used when reducing the error map to a single message. */
export const QUOTE_FIELD_ORDER: readonly QuoteFieldName[] = [
  "name",
  "email",
  "phone",
  "contactMethod",
  "service",
  "propertyType",
  "frequency",
  "timeline",
  "message"
];

/** Optional select fields: "" always allowed, anything else must be known. */
function checkOption(
  value: string,
  allowed: readonly string[],
  errorMessage: string
): string | undefined {
  if (value === "") return undefined;
  return allowed.includes(value) ? undefined : errorMessage;
}

/**
 * The one and only set of quote-form rules. The client calls this before
 * submitting (for inline errors) and the API route calls it again on the
 * server, so the two can never disagree.
 */
export function validateQuoteSubmission(input: QuoteSubmission): QuoteFieldErrors {
  const errors: QuoteFieldErrors = {};

  const name = input.name.trim();
  if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    errors.name = `Please enter your name (${NAME_MIN_LENGTH}-${NAME_MAX_LENGTH} characters).`;
  }

  const email = input.email.trim();
  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const phone = input.phone.trim();
  const contactMethod = input.contactMethod;
  if (contactMethodRequiresPhone(contactMethod) && phone === "") {
    errors.phone = `Add a phone number so we can reach you by ${contactMethod.toLowerCase()}.`;
  } else if (phone !== "" && !PHONE_PATTERN.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  // Service is the one select the visitor has to answer. "Not Sure Yet" is a
  // valid choice, so this never blocks someone who is still deciding.
  const service = input.service;
  if (service === "") {
    errors.service = "Please choose the service you need.";
  } else if (!quoteServiceOptions.includes(service)) {
    errors.service = "Please choose a valid service.";
  }

  const optionErrors: QuoteFieldErrors = {
    contactMethod: checkOption(
      contactMethod,
      contactMethodOptions,
      "Please choose a valid contact method."
    ),
    propertyType: checkOption(
      input.propertyType,
      propertyTypeOptions,
      "Please choose a valid property type."
    ),
    frequency: checkOption(
      input.frequency,
      cleaningFrequencyOptions,
      "Please choose a valid cleaning frequency."
    ),
    timeline: checkOption(
      input.timeline,
      serviceTimelineOptions,
      "Please choose a valid timeframe."
    )
  };
  for (const [field, message] of Object.entries(optionErrors)) {
    if (message) errors[field as QuoteFieldName] = message;
  }

  const message = input.message.trim();
  if (message.length < MESSAGE_MIN_LENGTH) {
    errors.message = `Please add a little more detail (at least ${MESSAGE_MIN_LENGTH} characters).`;
  } else if (message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Please keep your message under ${MESSAGE_MAX_LENGTH.toLocaleString("en-US")} characters.`;
  }

  return errors;
}

/** First error in field order, used for the API's single-message response. */
export function firstQuoteError(errors: QuoteFieldErrors): string | undefined {
  for (const field of QUOTE_FIELD_ORDER) {
    const message = errors[field];
    if (message) return message;
  }
  return undefined;
}

// ─── Prefill: query parameters are untrusted input ─────────────────────────

/**
 * Maps an arbitrary ?service= value to a valid option, or "" if it is not a
 * known service. Matching is case- and whitespace-insensitive so links stay
 * readable, but the returned value is always one of quoteServiceOptions.
 */
export function resolveServiceParam(raw: string | null | undefined): string {
  return matchOption(raw, quoteServiceOptions);
}

/** Same contract as resolveServiceParam, for the ?property= value. */
export function resolvePropertyParam(raw: string | null | undefined): string {
  return matchOption(raw, propertyTypeOptions);
}

function matchOption(raw: string | null | undefined, allowed: readonly string[]): string {
  if (typeof raw !== "string") return "";
  const needle = normalise(raw);
  if (needle === "") return "";
  return allowed.find((option) => normalise(option) === needle) ?? "";
}

function normalise(value: string): string {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

// ─── Link builders used by service and industry page CTAs ──────────────────

export interface QuotePrefill {
  /** Must be a canonical service title, or omitted. */
  service?: string;
  /** Must be one of propertyTypeOptions, or omitted. */
  property?: PropertyTypeOption;
}

/**
 * Builds a /contact?...#quote-form URL. Values are percent-encoded, and the
 * contact page's canonical stays /contact, so these parameters are a UX
 * convenience only and never create indexable duplicates.
 */
export function quoteHref(prefill: QuotePrefill = {}): string {
  const parts: string[] = [];
  if (prefill.service) parts.push(`service=${encodeURIComponent(prefill.service)}`);
  if (prefill.property) parts.push(`property=${encodeURIComponent(prefill.property)}`);
  return parts.length > 0 ? `/contact?${parts.join("&")}#quote-form` : "/contact#quote-form";
}

/**
 * CTA link for a service page. The label is resolved from services[], so a
 * renamed service updates every CTA without touching the pages.
 */
export function quoteHrefForService(slug: ServiceSlug, property?: PropertyTypeOption): string {
  const service = services.find((s) => s.slug === slug);
  return quoteHref({ service: service?.title, property });
}
