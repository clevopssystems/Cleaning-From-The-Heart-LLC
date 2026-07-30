import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Building2,
  Phone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ClipboardList,
  CalendarClock,
  RefreshCcw,
  DoorOpen,
  PartyPopper,
  TrendingUp,
  SearchCheck
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

export const metadata: Metadata = {
  title: { absolute: "Deep Cleaning Services in Seattle | Cleaning From The Heart LLC" },
  description:
    "Deep cleaning in Seattle for homes and businesses. Compare residential and commercial deep cleaning, see what's included, and request a free quote.",
  alternates: {
    canonical: "/services/deep-cleaning"
  },
  keywords: [
    "deep cleaning Seattle",
    "residential deep cleaning Seattle",
    "commercial deep cleaning Seattle",
    "detailed cleaning service Seattle",
    "top to bottom cleaning Seattle"
  ],
  openGraph: {
    title: "Deep Cleaning Services in Seattle | Cleaning From The Heart LLC",
    description:
      "Deep cleaning in Seattle for homes and businesses. Compare residential and commercial deep cleaning, see what's included, and request a free quote.",
    url: `${SITE_URL}/services/deep-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/home/services/deep-cleaning-service.jpg",
        alt: "Deep cleaning in progress at a Seattle-area property — Cleaning From The Heart LLC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Cleaning Services in Seattle | Cleaning From The Heart LLC",
    description:
      "Deep cleaning in Seattle for homes and businesses. Compare residential and commercial deep cleaning, see what's included, and request a free quote.",
    images: ["/home/services/deep-cleaning-service.jpg"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Targets buildup, overlooked areas & high-touch surfaces",
  "Scope customized to your property's condition",
  "Available for homes and businesses",
  "Often scheduled before recurring cleaning begins"
];

interface SelectionCard {
  Icon: typeof Home;
  eyebrow: string;
  title: string;
  description: string;
  examples: string[];
  ctaLabel: string;
  href: string;
}

const selectionCards: SelectionCard[] = [
  {
    Icon: Home,
    eyebrow: "For Homes",
    title: "Residential Deep Cleaning",
    description:
      "For houses, apartments, condos, and townhomes that need more attention than routine upkeep, whether that's a move-in, a move-out, a seasonal reset, or a home that hasn't had professional cleaning in a while.",
    examples: ["Houses, apartments & condos", "Townhomes & rentals", "Move-in / move-out situations", "Seasonal resets"],
    ctaLabel: "Explore Residential Deep Cleaning",
    href: "/services/residential-deep-cleaning"
  },
  {
    Icon: Building2,
    eyebrow: "For Businesses",
    title: "Commercial Deep Cleaning",
    description:
      "For offices, schools, retail spaces, restaurants, and facilities that need detailed attention beyond routine janitorial service, before recurring service begins, after heavy use, or ahead of an important date.",
    examples: ["Offices & retail spaces", "Schools & facilities", "Restaurants & warehouses", "Before recurring janitorial service"],
    ctaLabel: "Explore Commercial Deep Cleaning",
    href: "/services/commercial-deep-cleaning"
  }
];

interface ComparisonColumn {
  title: string;
  points: string[];
  href: string;
  ctaLabel: string;
}

const comparisonColumns: ComparisonColumn[] = [
  {
    title: "Residential Deep Cleaning",
    points: [
      "Designed around rooms and household living areas",
      "Often used for seasonal resets, move-related cleaning, or a neglected space",
      "Focuses on kitchens, bathrooms, bedrooms, living areas, and detailed surfaces"
    ],
    href: "/services/residential-deep-cleaning",
    ctaLabel: "View Residential Deep Cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    points: [
      "Designed around business operations and facility needs",
      "Often scheduled periodically, before reopening, after heavy use, or alongside ongoing janitorial service",
      "Focuses on workspaces, restrooms, break rooms, floors, and high-touch surfaces"
    ],
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "View Commercial Deep Cleaning"
  }
];

const whenHelpfulItems = [
  { Icon: RefreshCcw, text: "Before starting a recurring cleaning schedule" },
  { Icon: CalendarClock, text: "After a period without professional cleaning" },
  { Icon: Sparkles, text: "During a seasonal reset" },
  { Icon: DoorOpen, text: "Before or after an occupancy change" },
  { Icon: PartyPopper, text: "Before reopening or an important event" },
  { Icon: TrendingUp, text: "When routine cleaning is no longer keeping up" },
  { Icon: SearchCheck, text: "For detailed attention to frequently overlooked areas" }
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us About the Property",
    description: "Share your property type, size, current condition, and priorities so we understand your starting point."
  },
  {
    number: "02",
    title: "Receive a Customized Scope",
    description: "We confirm the scope of work, schedule, and pricing specific to your home or facility, no generic packages."
  },
  {
    number: "03",
    title: "Schedule the Deep Cleaning",
    description: "Service is scheduled for a date and time that works for your household or business operations."
  },
  {
    number: "04",
    title: "Review the Completed Work",
    description: "We review the completed work against the agreed scope, and you can follow up with any questions directly."
  }
];

const relatedServices = [
  {
    title: "Residential Cleaning",
    description: "Ongoing recurring cleaning for homes that are already in generally maintained condition.",
    href: "/services/residential-cleaning"
  },
  {
    title: "Commercial Cleaning",
    description: "Recurring janitorial and facility cleaning for offices, schools, and commercial properties.",
    href: "/services/commercial-cleaning"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Turnover-ready cleaning timed around a residential or commercial property transition.",
    href: "/services/move-in-move-out-cleaning"
  },
  {
    title: "Post-Construction & Renovation Cleanup",
    description: "Detailed cleanup that clears dust, debris, and residue after a construction or renovation project.",
    href: "/services/post-construction-renovation-cleanup"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────

const deepCleaningHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/deep-cleaning#service`,
      name: "Deep Cleaning Seattle",
      serviceType: "Deep Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "City", name: "Seattle" },
        { "@type": "City", name: "Renton" },
        { "@type": "City", name: "Bellevue" },
        { "@type": "City", name: "Kent" },
        { "@type": "City", name: "Everett" }
      ],
      description:
        "Detailed, top-to-bottom cleaning for homes and businesses in Seattle that need more than routine maintenance. Choose residential or commercial deep cleaning.",
      url: `${SITE_URL}/services/deep-cleaning`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Deep Cleaning Options",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Residential Deep Cleaning", url: `${SITE_URL}/services/residential-deep-cleaning` }
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Commercial Deep Cleaning", url: `${SITE_URL}/services/commercial-deep-cleaning` }
          }
        ]
      }
    }
    // BreadcrumbList is emitted once by the shared <Breadcrumbs> component below,
    // so it is intentionally not duplicated in this @graph.
  ]
};

export default function DeepCleaningHubPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <div className="absolute inset-0 opacity-20 surface-grid" aria-hidden />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Deep Cleaning", href: "/services/deep-cleaning" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Deep Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Deep Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning From The Heart LLC provides detailed, top-to-bottom cleaning for homes, offices,
                businesses, and facilities that need more attention than routine maintenance. Homes and
                businesses have different layouts and priorities, so deep cleaning is offered as two dedicated
                services below.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Get a Free Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>

            <div className="card-dark hidden h-fit lg:block">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <ClipboardList className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">Deep Cleaning at a Glance</h2>
              <ul className="mt-3 space-y-2.5">
                {glanceItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── DIRECT-ANSWER INTRODUCTION ──────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading
            center
            eyebrow="What Deep Cleaning Covers"
            title="A More Detailed Clean, Customized to Your Property"
            description="Deep cleaning targets built-up dirt, overlooked areas, high-touch surfaces, detailed edges, and fixtures that routine maintenance may not fully address. The exact scope depends on the property type, its current condition, and the priorities you share with us. Homes and businesses are cleaned differently, so choose the service that matches your property below."
          />
        </Container>
      </section>

      {/* ── TWO PRIMARY SELECTION CARDS ─────────────────────────────────── */}
      <section className="section-shell bg-surface" id="choose">
        <Container>
          <SectionHeading eyebrow="Choose Your Deep Cleaning" title="Residential or Commercial Deep Cleaning" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {selectionCards.map(({ Icon, eyebrow, title, description, examples, ctaLabel, href }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="card-hover flex h-full flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100">
                      <Icon className="h-6 w-6 text-brand-700" aria-hidden />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">{eyebrow}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-xs font-medium text-ink">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden />
                        {example}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto border-t border-brand-50 pt-4">
                    <Link href={href} className="cta-primary w-full justify-center">
                      {ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RESIDENTIAL VS. COMMERCIAL COMPARISON ───────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading
            eyebrow="A Common Question"
            title="How Residential and Commercial Deep Cleaning Differ"
            description="Both services provide detailed, top-to-bottom attention, but the scope is built differently around a home versus a business. Every scope is customized, not every item below applies to every property."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {comparisonColumns.map((column) => (
              <article key={column.title} className="card flex h-full flex-col gap-4">
                <h3 className="text-base font-bold text-ink">{column.title}</h3>
                <ul className="flex-1 space-y-3">
                  {column.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-brand-50 pt-3">
                  <Link
                    href={column.href}
                    className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                  >
                    {column.ctaLabel}
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHEN DEEP CLEANING MAY BE HELPFUL ───────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading eyebrow="When It Helps" title="When Deep Cleaning May Be Helpful" center />
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {whenHelpfulItems.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3 rounded-xl border border-brand-100 bg-white px-4 py-3.5">
                <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                <span className="text-sm font-medium text-ink">{text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading eyebrow="How It Works" title="A Simple, Four-Step Process" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.title} className="card flex h-full flex-col gap-3">
                <span className="text-3xl font-bold text-brand-100" aria-hidden>
                  {step.number}
                </span>
                <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading eyebrow="Related Services" title="Related Cleaning Services" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map(({ title, description, href }) => (
              <div key={title} className="card flex h-full flex-col gap-3">
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <p className="flex-1 text-xs leading-relaxed text-muted">{description}</p>
                <Link
                  href={href}
                  className="inline-flex items-center text-xs font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 text-center md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow-light">Get Started</span>
              <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                Ready for a Deep Cleaning Quote?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                Tell us about your home or business and we&apos;ll follow up with a customized deep cleaning
                scope and a free, no-obligation quote.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Get a Free Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-white/10 pt-6 text-sm">
                <Link href="/services/residential-deep-cleaning" className="font-semibold text-white/70 hover:text-white">
                  Residential Deep Cleaning →
                </Link>
                <Link href="/services/commercial-deep-cleaning" className="font-semibold text-white/70 hover:text-white">
                  Commercial Deep Cleaning →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(deepCleaningHubSchema) }} />
    </>
  );
}
