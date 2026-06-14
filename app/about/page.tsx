import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartHandshake,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
  Phone,
  CheckCircle2,
  Quote
} from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Seattle Cleaning Company",
  description:
    "Learn about Cleaning From The Heart LLC, a locally owned, family-operated Seattle cleaning company with 30+ years of experience in commercial, residential, office, school, and property cleaning.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Cleaning From The Heart LLC | Seattle Cleaning Company",
    description:
      "A locally owned, family-operated Seattle cleaning company with 30+ years of experience serving offices, schools, commercial properties, and homes.",
    url: "https://cleaningfromtheheartllc.com/about",
    type: "website"
  }
};

const credibility = [
  { value: "30+", label: "Years of Experience" },
  { value: "200+", label: "Properties Served" },
  { value: "14", label: "Seattle Service Areas" },
  { value: "Free", label: "Quote & Estimate" }
];

const values = [
  {
    icon: HeartHandshake,
    title: "People Come First",
    description:
      "Every client relationship is built on respect, communication, and trust. We treat each property like it matters, because it does."
  },
  {
    icon: ClipboardCheck,
    title: "Consistent, Verifiable Quality",
    description:
      "Every job follows a clear standard. We focus on dependable results, honest service, and work clients can feel confident about."
  },
  {
    icon: MapPin,
    title: "Locally Owned and Accountable",
    description:
      "We are not a faceless chain or call center. When you work with us, you work with a local Seattle-area team that stands behind the work."
  }
];

const aboutFaqs = [
  {
    question: "Who is Cleaning From The Heart LLC?",
    answer:
      "Cleaning From The Heart LLC is a locally owned, family-operated cleaning company serving Seattle and surrounding areas, with more than 30 years of hands-on cleaning experience. The company is owned by Joshua Alexander."
  },
  {
    question: "Where does Cleaning From The Heart LLC provide service?",
    answer:
      "We serve Seattle and the greater metro area, including Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Tacoma, and Bothell. Contact us with your location and we will confirm availability."
  },
  {
    question: "What cleaning services do you provide?",
    answer:
      "We provide commercial cleaning, residential cleaning, office cleaning, school and educational facility cleaning, window and glass cleaning, pressure washing, carpet cleaning, floor care, move-in and move-out cleaning, deep cleaning, solar panel cleaning, and post-construction cleaning."
  },
  {
    question: "Are you locally owned and family-operated?",
    answer:
      "Yes. Cleaning From The Heart LLC is a locally owned, family-operated Seattle-area business. We are not a national franchise or call center, so you work directly with the local team that stands behind the work."
  },
  {
    question: "How much experience do you have?",
    answer:
      "Cleaning From The Heart LLC is built on more than 30 years of hands-on cleaning experience across offices, schools, commercial properties, and homes throughout the Seattle area."
  },
  {
    question: "How do I request a quote?",
    answer:
      "Request a free quote through the contact form or call us directly. We will ask a few questions about your space, service type, and schedule, then provide a clear, no-obligation estimate."
  }
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://cleaningfromtheheartllc.com/about#aboutpage",
      url: "https://cleaningfromtheheartllc.com/about",
      name: "About Cleaning From The Heart LLC",
      description:
        "Cleaning From The Heart LLC is a locally owned, family-operated cleaning company serving Seattle and surrounding areas, with 30+ years of experience in commercial, residential, office, school, and property cleaning. The company is owned by Joshua Alexander.",
      about: { "@id": "https://cleaningfromtheheartllc.com/#business" },
      mainEntity: { "@id": "https://cleaningfromtheheartllc.com/#business" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://cleaningfromtheheartllc.com/about#faq",
      mainEntity: aboutFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="A Family-Owned Cleaning Company Serving Seattle for Over 30 Years"
        description="Cleaning From The Heart LLC is locally owned, family-operated, and built on a simple standard: show up, do the work right, and treat every client with care."
      />

      {/* ─── Founder Story ─────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

            {/* Story text */}
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Started With Purpose. Built on Trust.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted">
                Cleaning From The Heart LLC was built on more than 30 years of hands-on cleaning experience.
                What started as local cleaning work in the Seattle area grew into a trusted service for offices,
                schools, commercial properties, and homeowners across the region.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted">
                Today, Joshua Alexander carries that same standard forward. The team and the services have grown
                over the years, but the foundation has not changed: honest work, reliable service, and treating
                every client with care.
              </p>

              {/* Pull quote */}
              <blockquote className="my-8 rounded-2xl border-l-4 border-brand-500 bg-surface p-6">
                <div className="flex gap-4">
                  <Quote className="h-5 w-5 shrink-0 text-brand-400 mt-0.5" aria-hidden />
                  <p className="text-base font-medium leading-relaxed text-ink">
                    "Cleaning has always been about more than making a space look good. It is about trust, care,
                    and doing the job the right way."
                  </p>
                </div>
                <cite className="mt-4 block pl-9 text-sm font-semibold not-italic text-brand-700">
                  Joshua Alexander
                </cite>
              </blockquote>

              <p className="text-base leading-relaxed text-muted">
                We stay rooted in Seattle and the greater metro area, serving the same kinds of clients we always
                have: businesses, schools, property managers, and homeowners who want a cleaning team they can
                count on. Same values. Same work ethic. Same commitment to every client.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Family-owned and operated since founding",
                  "Same crew assignments every visit, no strangers",
                  "Direct line to the people doing the work",
                  "Serving Seattle offices, schools, and properties for 30+ years"
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Owner image */}
            <aside className="sticky top-24 space-y-4">
              <div className="overflow-hidden rounded-2xl border border-brand-100 bg-surface shadow-card">
                {/*
                  OWNER / TEAM PHOTO
                  ──────────────────────────────────────────────────────
                  Upload: /public/about/owner/owner.jpg
                  Recommended size: 640×800px (4:5 portrait)
                  ──────────────────────────────────────────────────────
                */}
                <img
                  src="/about/owner/owner.jpg"
                  alt="Joshua Alexander, owner of Cleaning From The Heart LLC"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="border-t border-brand-100 px-5 py-4">
                  <p className="text-sm font-semibold text-ink">Joshua Alexander</p>
                  <p className="mt-0.5 text-xs text-muted">Owner, Cleaning From The Heart LLC</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Second generation, carrying forward the same standard of care built over 30+ years in Seattle.
                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="flex items-center gap-3 rounded-xl border border-brand-100 bg-surface px-4 py-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                <div>
                  <p className="text-xs font-semibold text-ink">Seattle Local Business</p>
                  <p className="text-xs text-muted">Owner-operated, serving the Seattle area</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ─── Credibility Strip ─────────────────────────────────── */}
      <div className="border-y border-white/5 bg-brand-950">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-white/5 lg:grid-cols-4">
            {credibility.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06}>
                <div className="flex flex-col items-start px-6 py-10 sm:px-8 lg:px-10">
                  <span className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {item.value}
                  </span>
                  <span className="mt-2 text-sm font-semibold text-accent">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── Values ────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              The Principles Behind Every Job We Take
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              These are not aspirational statements. They describe how we actually operate: on every job,
              with every client, across every service we provide.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <article className="card-hover flex h-full flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                    <value.icon className="h-6 w-6 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Mission Statement ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-600 py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />
        <Container className="relative text-center">
          <Reveal>
            <Quote className="mx-auto mb-6 h-8 w-8 text-white/30" aria-hidden />
            <p className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-snug tracking-tight text-white md:text-4xl">
              We do not just clean spaces. We take care of them the way you take care of your business.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65">
              Our mission is to build long-term relationships by delivering dependable cleaning services with
              integrity, pride, and care. That is the name on the door, and the standard we hold ourselves to.
            </p>
            <p className="mt-5 text-sm font-semibold text-accent">Joshua Alexander, Owner</p>
          </Reveal>
        </Container>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Common Questions</span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              About Our Seattle Cleaning Company
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Quick answers about who we are, where we work, and the cleaning services we provide across Seattle
              and the surrounding area.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {aboutFaqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.05}>
                <article className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                  <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-surface px-8 py-14 md:px-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="eyebrow">Work With Us</span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  Ready to Work With a Cleaning Team You Can Count On?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Request a quote for your Seattle property. We respond clearly, show up when we say we will,
                  and make the next step simple.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[200px]">
                <div className="flex flex-col items-start gap-1">
                  <Link
                    href="/contact"
                    className="cta-primary w-full justify-center"
                  >
                    Get a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-muted">Free quote · No obligation.</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-secondary w-full justify-center">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    Call Now
                  </Link>
                  <span className="pl-1 text-[11px] text-muted">{siteConfig.phoneDisplay} · Mon-Sat, 7 AM to 7 PM</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </>
  );
}
