import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock3,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  PhoneCall,
  BadgeCheck,
  Timer,
  Building2,
  ClipboardList,
  Search,
  MessageSquareReply
} from "lucide-react";
import { TikTokIcon } from "@/components/shared/TikTokIcon";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

export const metadata: Metadata = {
  title: { absolute: "Request a Cleaning Quote | Cleaning From The Heart LLC Seattle" },
  description:
    "Request a free cleaning quote from Cleaning From The Heart LLC for commercial cleaning, residential cleaning, office cleaning, school cleaning, deep cleaning, window cleaning, pressure washing, and more across Seattle and surrounding areas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Cleaning Quote | Cleaning From The Heart LLC Seattle",
    description:
      "Request a free cleaning quote for commercial, residential, office, school, deep, window, and pressure washing services across Seattle and surrounding areas.",
    url: `${SITE_URL}/contact`,
    type: "website"
  }
};

// Trust points shown directly under the hero, near the form.
const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Free quote",
    body: "No obligation. Tell us what you need and we will respond clearly."
  },
  {
    icon: Timer,
    title: "Fast response",
    body: "We typically respond within 2 business hours during Mon-Sat business hours."
  },
  {
    icon: Building2,
    title: "Local Seattle service",
    body: "Cleaning support for homes, offices, schools, commercial properties, and managed spaces."
  }
];

// "What Happens Next" steps shown beside the form.
const nextSteps = [
  {
    icon: ClipboardList,
    title: "Send your request",
    body: "Tell us about your property, service needs, and preferred schedule."
  },
  {
    icon: Search,
    title: "We review the details",
    body: "We look at the service type, property needs, and any notes you share."
  },
  {
    icon: MessageSquareReply,
    title: "You get a clear follow-up",
    body: "We contact you with quote details, questions if needed, and scheduling options."
  }
];

const contactFaqs = [
  {
    question: "Is the cleaning quote free?",
    answer:
      "Yes. You can request a free quote for your cleaning needs. We will review the details and follow up with clear next steps."
  },
  {
    question: "How fast do you respond?",
    answer:
      "We typically respond within 2 business hours during Mon-Sat business hours."
  },
  {
    question: "What cleaning services can I request?",
    answer:
      "You can request commercial cleaning, residential cleaning, office cleaning, school cleaning, carpet cleaning, strip and wax, window cleaning, pressure washing, move-in and move-out cleaning, deep cleaning, solar panel cleaning, junk removal, and post-construction cleanup."
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Yes. Depending on your property and schedule, we can discuss weekly, bi-weekly, monthly, or custom recurring cleaning options."
  },
  {
    question: "What areas do you serve?",
    answer:
      "Cleaning From The Heart LLC serves Seattle and surrounding areas for homes, offices, schools, commercial spaces, and managed properties."
  },
  {
    question: "Can I call instead of filling out the form?",
    answer:
      "Yes. You can call Cleaning From The Heart LLC directly at (206) 850-8484."
  }
];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact#webpage`,
      url: `${SITE_URL}/contact`,
      name: "Request a Cleaning Quote",
      description:
        "Request a free cleaning quote from Cleaning From The Heart LLC for commercial, residential, office, school, and specialty cleaning across Seattle and surrounding areas.",
      about: { "@id": `${SITE_URL}/#business` },
      isPartOf: { "@id": `${SITE_URL}/#business` },
      mainEntity: { "@id": `${SITE_URL}/contact#faq` }
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/contact#faq`,
      mainEntity: contactFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get a Quote"
        title="Request a Free Cleaning Quote in Seattle"
        description="Tell us about your property and cleaning needs. We will review the details and follow up with a clear quote and scheduling options."
      />

      {/* ── Trust strip ─────────────────────────────────────────────────────── */}
      <section className="border-b border-brand-100 bg-surface">
        <Container>
          <ul className="grid gap-4 py-8 sm:grid-cols-3">
            {trustPoints.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white p-5 shadow-card"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Form + contact info ─────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_380px]">
            {/* Left: contact form */}
            <ContactForm />

            {/* Right: contact info */}
            <aside className="space-y-4">
              <article className="card">
                <h2 className="text-lg font-semibold">Prefer to Call?</h2>
                <p className="mt-2 text-sm text-muted">
                  Call Cleaning From The Heart LLC directly if you would rather talk through your
                  cleaning needs.
                </p>
                <Link
                  href={siteConfig.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
                >
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </Link>
              </article>

              <article className="card">
                <h2 className="text-lg font-semibold">Business Details</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {siteConfig.address}
                  </li>
                  <li className="flex gap-2">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {siteConfig.businessHours}
                  </li>
                  <li className="flex gap-2">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <Link href={`mailto:${siteConfig.email}`} className="hover:text-brand-700">
                      {siteConfig.email}
                    </Link>
                  </li>
                  <li className="flex gap-2">
                    <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <Link
                      href={siteConfig.instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram: ${siteConfig.instagramHandle}`}
                      className="hover:text-brand-700"
                    >
                      <span className="font-medium text-ink">Instagram</span>{" "}
                      <span className="text-muted">{siteConfig.instagramHandle}</span>
                    </Link>
                  </li>
                  <li className="flex gap-2">
                    <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <Link
                      href={siteConfig.facebookHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Facebook: ${siteConfig.facebookHandle}`}
                      className="hover:text-brand-700"
                    >
                      <span className="font-medium text-ink">Facebook</span>{" "}
                      <span className="text-muted">{siteConfig.facebookHandle}</span>
                    </Link>
                  </li>
                  <li className="flex gap-2">
                    <TikTokIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <Link
                      href={siteConfig.tiktokHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`TikTok: ${siteConfig.tiktokHandle}`}
                      className="hover:text-brand-700"
                    >
                      <span className="font-medium text-ink">TikTok</span>{" "}
                      <span className="text-muted">{siteConfig.tiktokHandle}</span>
                    </Link>
                  </li>
                </ul>
              </article>

              <article className="card">
                <h2 className="text-lg font-semibold">Response Time</h2>
                <p className="mt-2 text-sm text-muted">
                  We typically respond within 2 business hours during Mon-Sat 7 AM-7 PM Pacific.
                </p>
              </article>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── What Happens Next ───────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">After You Submit</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              What Happens Next
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A simple, no-pressure process from your first message to a clear quote.
            </p>
          </div>

          <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {nextSteps.map(({ icon: Icon, title, body }, index) => (
              <li
                key={title}
                className="relative rounded-2xl border border-brand-100 bg-white p-6 shadow-card"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <Icon className="h-5 w-5 text-brand-600" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Common Questions</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              Questions About Requesting a Cleaning Quote
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Quick answers about the quote process, response time, and the services you can request
              across Seattle and surrounding areas.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {contactFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-brand-100 bg-surface p-6 shadow-card"
              >
                <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="#quote-form" className="cta-primary w-full sm:w-auto">
              Get a Free Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary w-full sm:w-auto">
              <PhoneCall className="mr-2 h-4 w-4" aria-hidden />
              Call {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </>
  );
}
