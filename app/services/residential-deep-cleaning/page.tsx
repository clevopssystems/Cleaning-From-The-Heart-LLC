import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Sparkles,
  PackageOpen,
  PackageCheck,
  Repeat,
  PartyPopper,
  CalendarClock,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ClipboardList,
  MessageCircle,
  MapPin,
  ShieldCheck,
  ListChecks
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { siteConfig } from "@/lib/site";

const SITE_URL = "https://cleaningfromtheheartllc.com";

export const metadata: Metadata = {
  title: { absolute: "Residential Deep Cleaning Seattle | Cleaning From The Heart LLC" },
  description:
    "Residential deep cleaning in Seattle for houses, apartments, condos, and townhomes. Detailed home cleaning with a scope customized to your property. Free quotes.",
  alternates: {
    canonical: "/services/residential-deep-cleaning"
  },
  keywords: [
    "residential deep cleaning Seattle",
    "residential deep cleaning services Seattle",
    "house deep cleaning Seattle",
    "home deep cleaning services",
    "apartment deep cleaning Seattle",
    "detailed home cleaning"
  ],
  openGraph: {
    title: "Residential Deep Cleaning Seattle | Cleaning From The Heart LLC",
    description:
      "Residential deep cleaning in Seattle for houses, apartments, condos, and townhomes. Detailed home cleaning with a scope customized to your property.",
    url: `${SITE_URL}/services/residential-deep-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/home/services/deep-cleaning-service.jpg",
        alt: "Residential deep cleaning in progress at a Seattle-area home — Cleaning From The Heart LLC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Deep Cleaning Seattle | Cleaning From The Heart LLC",
    description:
      "Residential deep cleaning in Seattle for houses, apartments, condos, and townhomes. Detailed home cleaning with a scope customized to your property.",
    images: ["/home/services/deep-cleaning-service.jpg"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Detailed kitchen & bathroom attention",
  "Baseboard, trim & fixture cleaning",
  "Suited to houses, apartments, condos & townhomes",
  "Scope confirmed in writing before service begins"
];

const trustStripItems = [
  { Icon: ClipboardList, label: "Scope customized to your home" },
  { Icon: MessageCircle, label: "Clear communication before service" },
  { Icon: Repeat, label: "One-time or before recurring service" },
  { Icon: MapPin, label: "Seattle-area availability" }
];

// ─── What may be included — grouped by room/area ───────────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "UtensilsCrossed",
    title: "Kitchen",
    summary: "Countertops, cabinet fronts, appliance exteriors & floor edges.",
    intro:
      "Kitchen deep cleaning goes beyond daily wiping to address buildup on surfaces and fixtures that routine visits tend to move past.",
    tasks: [
      "Countertop and accessible surface detailing",
      "Cabinet front cleaning",
      "Appliance exterior cleaning",
      "Backsplash wiping",
      "Sink and faucet detailing",
      "Floor edge and baseboard attention"
    ]
  },
  {
    iconName: "ShowerHead",
    title: "Bathroom",
    summary: "Fixtures, tile, grout attention & detailed surface cleaning.",
    intro:
      "Bathrooms get focused attention on fixtures and tile surfaces where grime builds up between regular cleanings.",
    tasks: [
      "Toilet, sink & fixture detailing",
      "Tub or shower cleaning",
      "Tile surface cleaning, with grout attention where appropriate",
      "Mirror cleaning",
      "High-touch surface cleaning",
      "Floor detailing"
    ]
  },
  {
    iconName: "Sofa",
    title: "Bedrooms & Living Areas",
    summary: "Detailed dusting, baseboards, window sills & accessible surfaces.",
    intro:
      "Bedrooms and living areas get detailed dusting and floor-edge attention that routine visits often move past quickly.",
    tasks: [
      "Detailed dusting of accessible surfaces",
      "Baseboard cleaning",
      "Window sill wiping",
      "Door and door-frame wiping",
      "Detailed vacuuming and mopping",
      "Corner and edge attention"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Whole-Home Details",
    summary: "Light fixtures, switch plates, door handles & cobweb removal.",
    intro: "These detail tasks run throughout the home rather than belonging to a single room.",
    tasks: [
      "Light fixture dusting where safely accessible",
      "Switch plate and door handle cleaning",
      "Trim and baseboard detailing",
      "Cobweb removal",
      "Detailed vacuuming and mopping throughout",
      "Surface sanitizing where appropriate"
    ]
  }
];

// ─── Deep cleaning vs. recurring residential cleaning ──────────────────────
const comparisonColumns = [
  {
    title: "Recurring Residential Cleaning",
    points: [
      "Maintains cleanliness on an ongoing schedule",
      "Focuses on routine household cleaning tasks",
      "Helps prevent buildup between visits"
    ],
    href: "/services/residential-cleaning",
    ctaLabel: "View Recurring Residential Cleaning"
  },
  {
    title: "Residential Deep Cleaning",
    points: [
      "Provides more detailed, one-time attention",
      "Addresses neglected or less frequently cleaned areas",
      "Often completed before recurring service begins"
    ],
    href: "#included",
    ctaLabel: "See What May Be Included"
  }
];

// ─── When homeowners book a deep clean ──────────────────────────────────────
const whenToBookItems = [
  { Icon: Sparkles, title: "Seasonal Reset", description: "A thorough refresh between the routine visits your home already gets." },
  { Icon: PackageOpen, title: "Moving Into a Home", description: "A whole-home clean before belongings and daily life move in." },
  { Icon: PackageCheck, title: "Preparing to Move Out", description: "Detailed cleaning ahead of a handoff, inspection, or turnover." },
  { Icon: Repeat, title: "Before Recurring Service", description: "A reset that recurring residential cleaning can then maintain." },
  { Icon: PartyPopper, title: "Before Guests or Events", description: "Extra attention before hosting family, guests, or an occasion." },
  { Icon: CalendarClock, title: "Long-Overdue Cleaning", description: "For a home that hasn't had professional attention in a while." }
];

// ─── Customized scope factors ──────────────────────────────────────────────
const scopeFactors = [
  "Property size",
  "Number of rooms",
  "Current condition",
  "Occupied or vacant status",
  "Priority areas",
  "Surface types",
  "Access",
  "Add-on requests",
  "Desired timing"
];

// ─── Why choose us ──────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardList,
    title: "Scope Customized to Your Home",
    description: "No two homes get the same checklist. Scope and priorities are confirmed for your specific property before service begins."
  },
  {
    Icon: ListChecks,
    title: "Written Scope Confirmed Before Service",
    description: "The agreed scope is confirmed in writing during the estimate, so expectations are clear before your deep clean begins."
  },
  {
    Icon: Home,
    title: "Residential and Commercial Experience",
    description: "We clean homes and businesses across the Seattle area, bringing the same structured approach to every property."
  },
  {
    Icon: MessageCircle,
    title: "Direct Communication",
    description: "No voicemail loops, no chasing updates. Questions about scope, scheduling, or pricing get a direct answer."
  },
  {
    Icon: MapPin,
    title: "Seattle-Rooted, Not a Franchise",
    description: "A locally owned business serving Seattle-area homes, not a national chain with a local phone number."
  },
  {
    Icon: ShieldCheck,
    title: "30+ Years of Seattle Cleaning Experience",
    description: "Decades of hands-on cleaning experience across Seattle-area homes, apartments, and rental properties."
  }
];

// ─── Process ────────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Home",
    description: "Share your property type, size, current condition, and priority areas so we understand your starting point."
  },
  {
    number: "02",
    title: "Receive a Customized Scope",
    description: "We confirm the scope of work, schedule, and pricing specific to your home before anything is booked."
  },
  {
    number: "03",
    title: "We Deep Clean Your Home",
    description: "Our team follows the agreed scope from top to bottom on the scheduled date."
  },
  {
    number: "04",
    title: "Final Review",
    description: "We review the completed work against the agreed scope, and you can reach out with any follow-up questions."
  }
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is the difference between regular cleaning and deep cleaning?",
    answer:
      "Recurring residential cleaning maintains a home that's already in generally kept-up condition, kitchens, bathrooms, floors, and dusting on a repeating schedule. Residential deep cleaning is a more thorough, one-time service for homes that need extra attention, baseboards, fixtures, and areas that build up between regular visits."
  },
  {
    question: "How long does residential deep cleaning take?",
    answer:
      "It depends on your home's size, current condition, the scope requested, and the number of cleaners assigned. We can give you a closer estimate once we know more about your property during the quote."
  },
  {
    question: "Do I need to leave the home during the cleaning?",
    answer:
      "It's your choice. Some clients stay home during the visit and others prefer to be away. Access arrangements are confirmed during scheduling."
  },
  {
    question: "Can I request specific priority areas?",
    answer:
      "Yes. You can share priority rooms or tasks when requesting a quote, and they're confirmed as part of the agreed scope before service begins."
  },
  {
    question: "Is deep cleaning available for apartments and townhomes?",
    answer:
      "Yes. We provide residential deep cleaning for houses, apartments, condominiums, and townhomes throughout our Seattle-area service area."
  },
  {
    question: "Can deep cleaning be scheduled before recurring cleaning starts?",
    answer:
      "Yes. Many clients schedule a deep clean first, then move into a recurring residential cleaning schedule to maintain the results afterward."
  },
  {
    question: "Is move-in or move-out cleaning the same as deep cleaning?",
    answer:
      "They overlap but aren't identical. Move-in and move-out cleaning is timed around a property transition, while residential deep cleaning is also used for seasonal resets and other one-time needs. See our move-in / move-out cleaning page for that specific service."
  },
  {
    question: "Are appliance interiors included?",
    answer:
      "It depends on the agreed scope. Appliance interior cleaning isn't assumed as standard, so let us know during the quote if you'd like it included."
  }
];

// ─── Related services (only routes that exist) ─────────────────────────────
const relatedServices = [
  {
    title: "Residential Cleaning",
    description: "Ongoing recurring cleaning for homes already in generally maintained condition.",
    href: "/services/residential-cleaning"
  },
  {
    title: "Deep Cleaning Hub",
    description: "Compare residential and commercial deep cleaning to find the right fit.",
    href: "/services/deep-cleaning"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Turnover-ready cleaning for residences changing hands or getting ready for a new chapter.",
    href: "/services/move-in-move-out-cleaning"
  },
  {
    title: "Carpet Cleaning",
    description: "Deep extraction cleaning that lifts embedded dirt, stains, and odor from home carpet.",
    href: "/services/carpet-cleaning"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────

const residentialDeepCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/residential-deep-cleaning#service`,
      name: "Residential Deep Cleaning Seattle",
      serviceType: "Residential Deep Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "City", name: "Seattle" },
        { "@type": "City", name: "Renton" },
        { "@type": "City", name: "Bellevue" },
        { "@type": "City", name: "Kent" },
        { "@type": "City", name: "Everett" },
        { "@type": "City", name: "Tukwila" },
        { "@type": "City", name: "Shoreline" },
        { "@type": "City", name: "Federal Way" },
        { "@type": "City", name: "Kirkland" },
        { "@type": "City", name: "Tacoma" },
        { "@type": "City", name: "Bothell" }
      ],
      description:
        "Residential deep cleaning in Seattle for houses, apartments, condos, and townhomes. Detailed cleaning with a scope customized to the home.",
      url: `${SITE_URL}/services/residential-deep-cleaning`
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/services/residential-deep-cleaning#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Deep Cleaning", item: `${SITE_URL}/services/deep-cleaning` },
        {
          "@type": "ListItem",
          position: 4,
          name: "Residential Deep Cleaning",
          item: `${SITE_URL}/services/residential-deep-cleaning`
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services/residential-deep-cleaning#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function ResidentialDeepCleaningPage() {
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
              { label: "Deep Cleaning", href: "/services/deep-cleaning" },
              { label: "Residential Deep Cleaning" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Residential Deep Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Residential Deep Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning From The Heart LLC provides residential deep cleaning for houses, apartments, condos,
                and townhomes across the Seattle area. It&apos;s a more thorough, one-time service for homes
                that need extra attention, before a recurring routine begins, during a seasonal reset, or
                around a move. Scope is confirmed to your home before we start.
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
                <Home className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">Residential Deep Cleaning at a Glance</h2>
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

      {/* ── COMPACT TRUST STRIP ─────────────────────────────────────────── */}
      <section className="bg-white py-6">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustStripItems.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                <span className="text-xs font-medium leading-snug text-ink sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── DIRECT-ANSWER INTRODUCTION ──────────────────────────────────── */}
      <section className="section-shell-tight bg-white" aria-labelledby="residential-deep-intro-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[46%_1fr] lg:gap-14">
            <div className="relative order-2 lg:order-1">
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-brand-100 shadow-card lg:max-w-none">
                <Image
                  src="/home/services/deep-cleaning-service.jpg"
                  alt="Residential deep cleaning in progress at a Seattle-area home"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  priority
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="eyebrow">What Residential Deep Cleaning Covers</span>
              <h2 id="residential-deep-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                A More Thorough Clean for Houses, Apartments, Condos & Townhomes
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Residential deep cleaning is a more thorough, top-to-bottom service for homes that need more
                attention than routine upkeep provides. It targets built-up grime, baseboards, fixtures, and
                the detailed surfaces that get skipped between regular visits.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                It&apos;s commonly requested for a seasonal reset, before or after a move, before starting a
                recurring cleaning schedule, or when a home hasn&apos;t had professional cleaning in a while.
                Homes can be occupied or vacant, and the exact scope is confirmed to your property&apos;s size,
                condition, and priorities during the estimate.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Get a Free Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-secondary">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHAT MAY BE INCLUDED ────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What May Be Included in Residential Deep Cleaning?"
            description="Depending on the agreed scope, residential deep cleaning may include the tasks below. The exact scope depends on your home's size, current condition, surface types, and priorities, confirmed during the estimate."
          />

          <div className="mt-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Appliance interiors, cabinet interiors, and high exterior windows are confirmed separately during
              the estimate rather than assumed as standard inclusions.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── DEEP CLEANING VS. RECURRING RESIDENTIAL CLEANING ────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading
            eyebrow="A Common Question"
            title="Deep Cleaning vs. Recurring Residential Cleaning"
            description="Both keep your home clean, but they serve different purposes. Recurring cleaning maintains a home that's already in kept-up condition; deep cleaning provides a more detailed, one-time reset."
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

      {/* ── WHEN HOMEOWNERS BOOK A DEEP CLEAN ───────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading eyebrow="When It Helps" title="When Homeowners Book Residential Deep Cleaning" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whenToBookItems.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="card flex h-full flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CUSTOMIZED SCOPE ─────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white scroll-mt-24" id="scope">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
              <ListChecks className="h-6 w-6 text-brand-700" aria-hidden />
            </div>
            <span className="eyebrow mt-5 inline-block">Customized Scope</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Every Deep Cleaning Scope Is Built Around Your Home
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We don&apos;t publish flat residential deep cleaning rates, because homes vary too much for a
              single number to be accurate. The factors below shape the scope and estimate for your specific
              home.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {scopeFactors.map((factor) => (
              <div key={factor} className="rounded-xl border border-brand-100 bg-surface px-3.5 py-3 text-center">
                <span className="text-xs font-medium text-ink">{factor}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-brand-100 bg-surface p-6 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Request a Customized Estimate
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="relative section-shell overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow-light">Why Seattle Homeowners Choose Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Seattle Homeowners Choose Cleaning From The Heart
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                A deep cleaning scope built around your home, not a one-size-fits-all package.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <div className="card-dark-hover flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-10">
              <div className="flex flex-col items-start gap-1">
                <Link href="/contact#quote-form" className="cta-gold">
                  Get a Free Quote
                </Link>
                <span className="pl-1 text-[11px] text-white/35">Takes 60 seconds · No obligation</span>
              </div>
              <Link href={siteConfig.phoneHref} className="cta-ghost">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How Residential Deep Cleaning Works"
            description="A clear four-step process from your first message to a cleaned, reviewed home."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.09}>
                <article className="card flex h-full flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                      <span className="text-sm font-bold text-brand-700">{step.number}</span>
                    </div>
                    <span className="select-none text-4xl font-bold text-brand-100" aria-hidden>
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Request a Residential Deep Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Home
            </Link>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Residential Deep Cleaning FAQs</h2>
              <p className="mt-4 text-base text-muted">
                Answers to what Seattle-area homeowners ask us most before booking a deep clean.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5">
                <p className="text-sm font-semibold text-ink">Have a specific question?</p>
                <p className="mt-1 text-sm text-muted">
                  Call or message us and we&apos;ll answer anything specific to your home or schedule.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/contact#quote-form" className="cta-primary px-4 py-2 text-xs">
                    Ask Us Directly
                  </Link>
                  <Link href={siteConfig.phoneHref} className="cta-secondary px-4 py-2 text-xs">
                    Call Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq) => (
                <details key={faq.question} className="group overflow-hidden rounded-2xl border border-brand-100 bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">
                    <span>{faq.question}</span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="border-t border-brand-100 bg-surface px-5 py-4">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
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
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow-light">Get Reliable Residential Deep Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Ready for a Detailed Home Reset?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us about your property, current condition, and priorities. Cleaning From The Heart LLC
                  will follow up with a customized residential deep cleaning estimate.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Scope customized to your home", "One-time or before recurring service", "30+ years of Seattle cleaning experience"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-gold w-full justify-center">
                    Get a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Takes 60 seconds · No obligation</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-ghost w-full justify-center">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Mon–Sat · 7 AM – 7 PM</span>
                </div>
              </div>
            </div>

            <p className="relative mt-8 text-xs text-white/30">{siteConfig.serviceAreaSummary}</p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialDeepCleaningSchema) }}
      />
    </>
  );
}
