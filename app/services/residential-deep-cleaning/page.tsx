import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Sparkles,
  PackageOpen,
  Hammer,
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
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

const PAGE_TITLE = "Residential Deep Cleaning Seattle | Cleaning From The Heart";
const PAGE_DESCRIPTION =
  "Residential deep cleaning in Seattle for houses, apartments, condos, and townhomes. Detailed kitchen, bathroom, and baseboard work, scoped to your home. Free quote.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/residential-deep-cleaning"
  },
  keywords: [
    "residential deep cleaning Seattle",
    "home deep cleaning services in Seattle",
    "house deep cleaning Seattle",
    "one-time deep cleaning Seattle",
    "whole-house deep cleaning Seattle",
    "apartment deep cleaning Seattle",
    "condo deep cleaning Seattle",
    "townhome deep cleaning Seattle",
    "detailed house cleaning Seattle"
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/home/services/deep-cleaning-service.jpg"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Detailed kitchen & bathroom work",
  "Baseboards, trim, fixtures & door frames",
  "Houses, apartments, condos & townhomes",
  "Scope confirmed in writing before we start"
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
    summary: "Counters, cabinet fronts, backsplash, appliance exteriors & floor edges.",
    intro:
      "Kitchen deep cleaning targets the grease and buildup that routine wiping leaves behind, on cabinet faces, backsplash tile, appliance exteriors, and the floor edges around them.",
    tasks: [
      "Countertop and accessible surface detailing",
      "Cabinet front and handle cleaning",
      "Appliance exterior cleaning, including reachable refrigerator sides and top",
      "Backsplash scrubbing and grease removal",
      "Sink and faucet scrubbing and polishing",
      "Floor edges, corners, and baseboards"
    ]
  },
  {
    iconName: "ShowerHead",
    title: "Bathroom",
    summary: "Tubs, showers, tile with grout attention, fixtures & mirrors.",
    intro:
      "Bathrooms get focused work on soap scum, hard-water marks, and the tile and grout lines where buildup collects between regular cleanings.",
    tasks: [
      "Toilets cleaned inside and out",
      "Tub and shower scrubbing, including shower doors and tracks",
      "Tile cleaning, with grout-line attention where appropriate",
      "Sink, vanity, and fixture detailing",
      "Streak-free mirror cleaning",
      "Floor detailing, including edges and behind the door"
    ]
  },
  {
    iconName: "Sofa",
    title: "Bedrooms & Living Areas",
    summary: "Hand-wiped dusting, baseboards, window sills & floor detail.",
    intro:
      "Bedrooms and living areas get hand-wiped detail work and floor attention that a routine visit usually covers more quickly.",
    tasks: [
      "Detailed dusting of accessible surfaces and furniture",
      "Baseboard and trim cleaning",
      "Window sill and ledge wiping",
      "Door and door-frame wiping",
      "Vacuuming and mopping, including edges and under reachable furniture",
      "Corner and cobweb attention"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Whole-Home Details",
    summary: "High dusting, light fixtures, switch plates, handles & vent covers.",
    intro: "These detail tasks run throughout the home rather than belonging to a single room.",
    tasks: [
      "High dusting and cobweb removal",
      "Light fixture dusting where safely accessible",
      "Switch plate, outlet cover, and door handle cleaning",
      "Accessible vent cover dusting",
      "Railing and banister wiping",
      "High-touch surface cleaning throughout"
    ]
  },
  {
    iconName: "Layers",
    title: "Optional Add-Ons",
    summary: "Quoted separately during the estimate rather than assumed as standard.",
    intro:
      "These tasks take noticeably more time, so they're priced as add-ons instead of being included by default. Tell us which ones you want when you request your quote and they'll be built into your scope.",
    tasks: [
      "Oven interior cleaning",
      "Refrigerator interior cleaning",
      "Cabinet and drawer interiors",
      "Interior window cleaning",
      "Blind dusting or cleaning",
      "Second kitchens, finished basements, and other extra rooms"
    ]
  }
];

// ─── Deep cleaning vs. recurring residential cleaning ──────────────────────
const comparisonColumns = [
  {
    title: "Recurring House Cleaning",
    points: [
      "Keeps an already-clean home maintained on a weekly, biweekly, or monthly rhythm",
      "Covers routine kitchen, bathroom, floor, and dusting work",
      "Keeps buildup from returning between visits"
    ],
    href: "/services/residential-cleaning",
    ctaLabel: "Explore recurring residential cleaning"
  },
  {
    title: "Residential Deep Cleaning",
    points: [
      "A more detailed, one-time reset for built-up dust and grime",
      "Reaches overlooked and hard-to-reach areas room by room",
      "Often the right starting point before recurring service begins"
    ],
    href: "#included",
    ctaLabel: "See what a deep clean includes"
  }
];

// ─── When homeowners book a deep clean ──────────────────────────────────────
const whenToBookItems = [
  {
    Icon: CalendarClock,
    title: "Cleaning Is Overdue",
    description: "For a home that hasn't had a detailed cleaning in months, one visit brings every room back to a clean baseline."
  },
  {
    Icon: Repeat,
    title: "Before Recurring Service",
    description: "Many households start here. One deep clean sets the baseline, then recurring visits hold it there in less time."
  },
  {
    Icon: Sparkles,
    title: "Seasonal Reset",
    description: "A spring or fall reset that clears the dust, cobwebs, and buildup a normal cleaning routine leaves behind over a season."
  },
  {
    Icon: PartyPopper,
    title: "Before Guests or Holidays",
    description: "Extra attention in kitchens, bathrooms, and living areas before family visits, a holiday, or an event at home."
  },
  {
    Icon: Hammer,
    title: "After a Home Project",
    description: "Fine dust travels far after a renovation, a painting job, or a big reorganization. A deep clean clears it from surfaces and edges."
  },
  {
    Icon: PackageOpen,
    title: "Around a Move",
    description: "A whole-home clean before belongings arrive, or once rooms are empty and the usually blocked areas are finally reachable."
  }
];

// ─── Customized scope factors ──────────────────────────────────────────────
const scopeFactors = [
  "Home size",
  "Bedrooms & bathrooms",
  "Current condition",
  "Occupied or vacant",
  "Priority rooms",
  "Surface & floor types",
  "Pets in the home",
  "Access & parking",
  "Add-ons selected"
];

// ─── Why choose us ──────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardList,
    title: "Scope Built Around Your Home",
    description: "No two homes get the same checklist. Priority rooms, current condition, and any add-ons are confirmed for your property before service begins."
  },
  {
    Icon: ListChecks,
    title: "Written Scope Confirmed Before Service",
    description: "The agreed scope goes in writing during the estimate, so you know exactly what's covered before the deep clean starts."
  },
  {
    Icon: Home,
    title: "Experience Across Home Types",
    description: "Houses, apartments, condos, townhomes, and rentals across the Seattle area, from lightly used homes to ones needing heavier detail work."
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
    title: "Request a Quote",
    description: "Send us your property type, home size, current condition, and the rooms that matter most. No cost, no obligation."
  },
  {
    number: "02",
    title: "Confirm Scope and Date",
    description: "We put the agreed scope, any add-ons, the schedule, and pricing in writing for your home before anything is booked."
  },
  {
    number: "03",
    title: "We Deep Clean Your Home",
    description: "Our team works room by room against the agreed scope, from high dusting and detail work down to the floors."
  },
  {
    number: "04",
    title: "Final Review",
    description: "We check the finished work against the agreed scope, and you can reach out directly with any follow-up."
  }
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is residential deep cleaning?",
    answer:
      "Residential deep cleaning is a detailed, top-to-bottom cleaning of a home that goes beyond routine upkeep. It targets built-up dust and grime, kitchen and bathroom detail work, baseboards and trim, fixtures, door frames, and the hard-to-reach areas a normal visit passes over. Cleaning From The Heart LLC provides it for houses, apartments, condos, and townhomes in Seattle."
  },
  {
    question: "What is the difference between regular cleaning and deep cleaning?",
    answer:
      "Regular cleaning maintains a home that's already in kept-up condition: kitchens, bathrooms, floors, and dusting on a repeating schedule. Deep cleaning is a more thorough, one-time reset that addresses buildup and the areas routine visits move past, such as baseboards, trim, fixtures, tile and grout, and beneath reachable furniture. Many homes get one deep clean, then stay on top of it with recurring service."
  },
  {
    question: "Can residential deep cleaning be booked as a one-time service?",
    answer:
      "Yes. A deep clean can be booked on its own, with no recurring commitment. Some households book a single reset each season or before hosting, and others use the deep clean as the starting point for a weekly, biweekly, or monthly schedule. You can decide about recurring service after the deep clean is finished."
  },
  {
    question: "How long does a residential deep clean take?",
    answer:
      "It depends on your home's size, its current condition, the scope requested, and how many cleaners are assigned. A lightly used two-bedroom condo takes far less time than a larger house that hasn't had a detailed cleaning in months. We give you a closer time estimate once we know more about your property during the quote."
  },
  {
    question: "How is residential deep cleaning priced?",
    answer:
      "Pricing is based on your home rather than a flat rate. Home size, number of bedrooms and bathrooms, current condition, priority rooms, surface types, access, and any add-ons all affect how long a deep clean takes, and time is what drives the estimate. Share those details and we'll follow up with a customized quote."
  },
  {
    question: "Are appliance interiors included?",
    answer:
      "Not by default. Oven, refrigerator, and other appliance interiors take significant extra time, so they're quoted as add-ons rather than assumed as standard. The same applies to cabinet and drawer interiors, interior windows, and blinds. Tell us which of these you want when you request a quote and they'll be priced into your scope."
  },
  {
    question: "Do I need to be home during the deep cleaning?",
    answer:
      "That's your choice. Some clients stay home during the visit, and others share access instructions and go about their day. Either works. Access details, parking, and any rooms you'd rather we skip are confirmed during scheduling, so the team knows what to expect before arriving."
  },
  {
    question: "How should I prepare my home for a deep clean?",
    answer:
      "A little preparation sends more of the visit toward cleaning rather than sorting. Consolidate clutter from counters and floors, secure valuables and fragile items, and let us know about pets and any rooms to leave alone. Pointing out delicate surfaces or problem areas in advance helps us plan the visit as well."
  },
  {
    question: "Is deep cleaning available for apartments, condos, and townhomes?",
    answer:
      "Yes. We provide residential deep cleaning for single-family houses, apartments, condominiums, townhomes, and rental homes throughout our Seattle-area service area. Smaller units generally take less time, but the detail work is the same: kitchens, bathrooms, baseboards, fixtures, floors, and the reachable areas in between."
  },
  {
    question: "Can recurring cleaning start after a deep clean?",
    answer:
      "Yes, and it's a common sequence. The deep clean brings a home to a clean baseline, and recurring residential cleaning holds it there on a weekly, biweekly, or monthly schedule. Maintenance visits usually take less time than the initial deep clean, because the buildup has already been dealt with."
  },
  {
    question: "Is move-in or move-out cleaning the same as deep cleaning?",
    answer:
      "They overlap but aren't identical. Move-in and move-out cleaning is timed around a property transition and an empty home, often with an inspection or handoff attached. Residential deep cleaning is also used for seasonal resets, pre-holiday cleaning, and overdue homes that are still lived in. See our move-in / move-out cleaning page for that specific service."
  }
];

// ─── Related services (only routes that exist) ─────────────────────────────
const relatedServices = [
  {
    title: "Residential Cleaning",
    description: "Ongoing recurring cleaning for homes already in generally maintained condition.",
    href: "/services/residential-cleaning",
    ctaLabel: "Explore recurring residential cleaning"
  },
  {
    title: "Deep Cleaning",
    description: "Compare residential and commercial deep cleaning to find the right fit.",
    href: "/services/deep-cleaning",
    ctaLabel: "Compare deep cleaning options"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Turnover-ready cleaning timed around a move, an inspection, or a handoff.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "View move-in and move-out cleaning"
  },
  {
    title: "Carpet Cleaning",
    description: "Deep extraction cleaning that lifts embedded dirt, stains, and odor from home carpet.",
    href: "/services/carpet-cleaning",
    ctaLabel: "See our carpet cleaning service"
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
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: { "@type": "Audience", audienceType: "Seattle homeowners and renters" },
      description:
        "Residential deep cleaning in Seattle for houses, apartments, condos, and townhomes. Detailed, one-time cleaning of kitchens, bathrooms, bedrooms, living areas, baseboards, and high-touch surfaces, with a scope customized to the home.",
      url: `${SITE_URL}/services/residential-deep-cleaning`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Residential Deep Cleaning Scope",
        itemListElement: scopeGroups.map((group) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name:
              group.title === "Optional Add-Ons" ? "Optional Deep Cleaning Add-Ons" : `${group.title} Deep Cleaning`,
            description: group.summary
          }
        }))
      }
    },
    // NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component below,
    // so it is intentionally not repeated here.
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
              { label: "Residential Deep Cleaning", href: "/services/residential-deep-cleaning" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Home Deep Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Residential Deep Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Residential deep cleaning is a detailed, top-to-bottom clean that reaches the buildup and
                overlooked areas routine visits move past. Cleaning From The Heart LLC provides it for houses,
                apartments, condos, and townhomes across Seattle, as a one-time reset, a seasonal catch-up, or
                the first clean before recurring service begins. Your scope is confirmed before we start.
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
                A More Detailed Clean for Seattle Houses, Apartments, Condos & Townhomes
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                A residential deep clean goes further than routine upkeep. It targets built-up grime in
                kitchens and bathrooms, baseboards and trim, fixtures, door frames, and the hard-to-reach spots
                a regular visit passes over on a normal schedule.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Seattle homeowners and renters usually book one for a seasonal reset, before hosting, after a
                home project, or when a house hasn&apos;t had professional cleaning in a while. Homes can be
                occupied or vacant. The scope depends on your home&apos;s size, current condition, priority
                rooms, accessible areas, and any add-ons you select, all confirmed during the estimate.
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
            title="What Is Included in Residential Deep Cleaning?"
            description="A residential deep clean may include the room-by-room work below. The exact scope depends on your home's size, current condition, surface types, priority rooms, and any add-ons you select, and it's confirmed during the estimate."
          />

          <div className="mt-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Add-ons such as appliance interiors, cabinet interiors, interior windows, and blinds are quoted
              separately rather than assumed as standard. Tell us which ones matter when you request a quote.
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
            title="Deep Cleaning vs. Recurring House Cleaning"
            description="Both keep a home clean, but they do different jobs. Recurring cleaning maintains a home that's already in kept-up condition. Deep cleaning resets the home first, which is why many households book one before starting a recurring schedule."
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
          <SectionHeading
            eyebrow="When It Helps"
            title="When Should Homeowners Schedule a Deep Clean?"
            description="Homeowners usually schedule a deep clean when routine upkeep has fallen behind, before a date on the calendar, or as the first step into a recurring routine."
          />
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
              We don&apos;t publish flat residential deep cleaning rates, because a two-bedroom condo and a
              four-bedroom house on the same street need very different amounts of time. The factors below
              shape the scope and the estimate for your home.
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
            title="How Our Residential Deep Cleaning Process Works"
            description="Four steps from your first message to a finished home, with the scope agreed in writing before anyone starts cleaning."
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
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Residential Deep Cleaning Questions</h2>
              <p className="mt-4 text-base text-muted">
                What Seattle-area homeowners and renters ask us most before booking a deep clean.
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
          <SectionHeading eyebrow="Related Services" title="Related Home Cleaning Services" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map(({ title, description, href, ctaLabel }) => (
              <div key={title} className="card flex h-full flex-col gap-3">
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <p className="flex-1 text-xs leading-relaxed text-muted">{description}</p>
                <Link
                  href={href}
                  className="inline-flex items-center text-xs font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  {ctaLabel}
                  <ArrowRight className="ml-1 h-3 w-3 shrink-0" aria-hidden />
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
                <p className="eyebrow-light">Book Residential Deep Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Ready for a Detailed Home Reset?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us your home&apos;s size, its current condition, and the rooms that matter most.
                  Cleaning From The Heart LLC will follow up with a customized residential deep cleaning quote
                  for your Seattle home.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Scope confirmed before we start", "One-time or before recurring service", "30+ years of Seattle cleaning experience"].map(
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
