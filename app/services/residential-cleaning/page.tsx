import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Repeat,
  Zap,
  PackageOpen,
  PackageCheck,
  CheckCircle2,
  Phone,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Users,
  ClipboardCheck,
  CalendarCheck,
  MessageCircle,
  MapPin,
  ShieldCheck,
  DollarSign,
  ListChecks,
  ShieldQuestion,
  ClipboardList
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResidentialScopeAccordion } from "@/components/services/ResidentialScopeAccordion";
import { siteConfig, serviceAreas, galleryItems } from "@/lib/site";

const SITE_URL = "https://cleaningfromtheheartllc.com";

export const metadata: Metadata = {
  title: { absolute: "Residential Cleaning Services Seattle, WA | Cleaning From The Heart LLC" },
  description:
    "Professional residential cleaning in Seattle for houses, apartments, condos, and rental properties. Customized cleaning plans and free quotes.",
  alternates: {
    canonical: "/services/residential-cleaning"
  },
  keywords: [
    "residential cleaning Seattle",
    "house cleaning Seattle",
    "home cleaning services Seattle",
    "apartment cleaning Seattle",
    "condo cleaning Seattle",
    "recurring house cleaning",
    "move in cleaning Seattle",
    "move out cleaning Seattle",
    "residential cleaners Seattle"
  ],
  openGraph: {
    title: "Residential Cleaning Services Seattle, WA | Cleaning From The Heart",
    description:
      "Professional residential cleaning in Seattle for houses, apartments, condos, and rental properties. Customized cleaning plans and free quotes.",
    url: `${SITE_URL}/services/residential-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/home/services/full-home-cleaning.jpg",
        alt: "Residential cleaning in a Seattle-area home — Cleaning From The Heart LLC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Cleaning Services Seattle, WA | Cleaning From The Heart",
    description:
      "Professional residential cleaning in Seattle for houses, apartments, condos, and rental properties. Customized cleaning plans and free quotes.",
    images: ["/home/services/full-home-cleaning.jpg"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const heroTrustPoints = [
  "Customized cleaning plans",
  "One-time and recurring options",
  "Written checklist reviewed every visit",
  "Flexible scheduling"
];

const glanceItems = [
  "Houses, apartments, condos, townhomes & rentals",
  "Weekly, biweekly, monthly, or one-time visits",
  "Kitchen, bathroom, bedroom & living-area care",
  "Customized room-by-room priorities"
];

const trustStripItems = [
  { Icon: ClipboardList, label: "Customized scope for every home" },
  { Icon: MessageCircle, label: "Clear communication before service" },
  { Icon: Repeat, label: "One-time or recurring service" },
  { Icon: MapPin, label: "Seattle-area availability" }
];

// ─── Residential Cleaning Options ──────────────────────────────────────────
interface OptionCardData {
  Icon: typeof Home;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

const cleaningOptions: OptionCardData[] = [
  {
    Icon: Repeat,
    title: "Recurring House Cleaning",
    description:
      "A weekly, biweekly, or monthly rhythm for homes that just need ongoing upkeep, dusting, vacuuming, mopping, kitchen and bathroom surface cleaning, and trash removal, on the same repeating cycle.",
    href: "/contact#quote-form",
    ctaLabel: "Request Recurring Cleaning"
  },
  {
    Icon: Zap,
    title: "Deep Home Cleaning",
    description:
      "A more thorough, one-time reset for homes that need extra attention, baseboards, fixtures, detailed bathroom tile and grout, oven and refrigerator exteriors, cabinet fronts, and surfaces routine cleaning tends to skip.",
    href: "/services/deep-cleaning",
    ctaLabel: "Explore Deep Cleaning"
  },
  {
    Icon: PackageOpen,
    title: "Move-In Cleaning",
    description:
      "A whole-home reset for a vacant or newly occupied residence before belongings arrive, so you're settling in to a space that starts clean from day one.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "View Move-In Cleaning"
  },
  {
    Icon: PackageCheck,
    title: "Move-Out Cleaning",
    description:
      "Helps tenants, owners, landlords, and property managers prepare a residence for turnover or inspection, so keys can be handed back with the property left in agreed condition.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "View Move-Out Cleaning"
  }
];

// ─── Standard vs. Deep vs. Move-In vs. Move-Out ────────────────────────────
interface ComparisonCard {
  title: string;
  bestFor: string;
  condition: string;
  focus: string;
  nextStepLabel: string;
  nextStepHref: string;
}

const comparisonCards: ComparisonCard[] = [
  {
    title: "Recurring / Standard Cleaning",
    bestFor: "Homes already in generally maintained condition",
    condition: "Regularly lived-in, routine upkeep needed",
    focus: "Kitchens, bathrooms, floors, dusting, trash",
    nextStepLabel: "Request Recurring Cleaning",
    nextStepHref: "/contact#quote-form"
  },
  {
    title: "Deep Cleaning",
    bestFor: "Homes needing a more thorough reset",
    condition: "Build-up, overlooked areas, or a first-time visit",
    focus: "Baseboards, fixtures, cabinet fronts, detailed kitchens and bathrooms with tile and grout attention",
    nextStepLabel: "Explore Deep Cleaning",
    nextStepHref: "/services/deep-cleaning"
  },
  {
    title: "Move-In Cleaning",
    bestFor: "Homes about to be occupied",
    condition: "Vacant or recently vacated",
    focus: "Whole-home cleaning before belongings and daily life move in",
    nextStepLabel: "View Move-In Cleaning",
    nextStepHref: "/services/move-in-move-out-cleaning"
  },
  {
    title: "Move-Out Cleaning",
    bestFor: "Tenants, owners & property managers preparing for turnover",
    condition: "Vacant, packed, or nearly vacated",
    focus: "Turnover-ready cleaning ahead of inspection or handoff",
    nextStepLabel: "View Move-Out Cleaning",
    nextStepHref: "/services/move-in-move-out-cleaning"
  }
];

// ─── Properties & customers served ─────────────────────────────────────────
const propertyTypesServed = [
  "Single-family homes",
  "Apartments",
  "Condominiums",
  "Townhomes",
  "Rental properties",
  "Vacant or move-in-ready residences",
  "Managed residential properties"
];

const audiencesServed = [
  "Homeowners",
  "Renters",
  "Landlords",
  "Property managers",
  "Real estate professionals",
  "Families preparing to move"
];

// ─── Why Choose Us ──────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardCheck,
    title: "Cleaning Scope Customized Per Home",
    description:
      "No two homes get the same checklist. Scope, priorities, and pricing are confirmed for your specific property before service begins."
  },
  {
    Icon: ListChecks,
    title: "Written Checklist Reviewed Every Visit",
    description:
      "Every visit follows a written cleaning checklist that's reviewed each time, so priorities stay consistent from one visit to the next."
  },
  {
    Icon: CalendarCheck,
    title: "One-Time and Recurring Options",
    description:
      "Book a single deep clean, a move-in or move-out visit, or set up a recurring schedule so cleaning is one less thing on your to-do list."
  },
  {
    Icon: MessageCircle,
    title: "Direct Communication",
    description:
      "No voicemail loops, no chasing updates. Questions about scope, scheduling, or pricing get a direct answer from a real person."
  },
  {
    Icon: MapPin,
    title: "Seattle-Rooted, Not a Franchise",
    description:
      "A locally owned business serving Seattle-area homes, not a national chain with a local phone number."
  },
  {
    Icon: ShieldCheck,
    title: "30+ Years of Seattle Cleaning Experience",
    description:
      "Decades of hands-on cleaning experience across Seattle-area homes, apartments, and rental properties."
  }
];

// ─── Real residential proof (from the results gallery) ────────────────────
const residentialProofImages = galleryItems
  .filter((item) => item.categories.includes("residential-cleaning"))
  .slice(0, 4);

// ─── Process ────────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Home",
    description:
      "Share your property type, approximate size, location, current condition, preferred timing, and any priority rooms or tasks that matter most to you.",
    detail: "No obligation · Free to request"
  },
  {
    number: "02",
    title: "Receive a Customized Estimate",
    description:
      "We review the scope, schedule, service type, access, and pricing factors specific to your home and confirm the estimate with you.",
    detail: "Written scope & transparent pricing"
  },
  {
    number: "03",
    title: "We Clean the Agreed Areas",
    description:
      "Our team follows the confirmed room-by-room priorities and service scope on the agreed date.",
    detail: "Checklist followed on every visit"
  },
  {
    number: "04",
    title: "Final Review and Follow-Up",
    description:
      "We review completed work against the agreed scope, and you can reach out directly with any follow-up questions.",
    detail: "Direct, responsive communication"
  }
];

// ─── Preparation guidance ───────────────────────────────────────────────────
const preparationItems = [
  "Share your priority rooms or tasks in advance",
  "Secure valuables, fragile items, and personal documents",
  "Reduce clutter where possible so surfaces are accessible",
  "Let us know about pets or any restricted rooms",
  "Point out delicate materials or special surfaces",
  "Confirm parking or building access instructions",
  "Let us know whether someone will be home or access will be arranged another way",
  "Share supply preferences so arrangements can be confirmed in the estimate"
];

// ─── Pricing factors ────────────────────────────────────────────────────────
const pricingFactors = [
  "Home size",
  "Number of bedrooms and bathrooms",
  "Current condition",
  "Cleaning type requested",
  "Cleaning frequency",
  "Flooring and surface types",
  "Occupied or vacant condition",
  "Special priorities",
  "Access and parking",
  "Estimated labor time"
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is included in residential cleaning?",
    answer:
      "Residential cleaning may include dusting, vacuuming, mopping, kitchen and bathroom cleaning, trash removal, accessible surface wiping, and fixture cleaning. The exact scope depends on the home's size, condition, and requested priorities, and it's confirmed during the estimate."
  },
  {
    question: "What is the difference between regular and deep cleaning?",
    answer:
      "Regular or recurring cleaning maintains a home that's already in generally kept-up condition, kitchens, bathrooms, floors, and dusting on a repeating schedule. Deep cleaning is a more thorough, one-time service for homes that need extra attention, baseboards, fixtures, detailed bathroom tile and grout, and areas routine cleaning tends to skip."
  },
  {
    question: "How often should a home be professionally cleaned?",
    answer:
      "It depends on the household. Common options include one-time cleaning, weekly, biweekly, and monthly service. If you're not sure what fits, we can help you decide based on your home and routine during the estimate."
  },
  {
    question: "Do you clean apartments and condos?",
    answer:
      "Yes. We clean apartments, condominiums, townhomes, single-family homes, and rental properties throughout our approved Seattle-area service area."
  },
  {
    question: "Do you offer move-in and move-out cleaning?",
    answer:
      "Yes. Move-in cleaning prepares a residence before you settle in, and move-out cleaning helps tenants, owners, and property managers prepare a residence for turnover or inspection."
  },
  {
    question: "Can I request specific rooms or priorities?",
    answer:
      "Yes. You can share priority rooms or tasks when requesting a quote, and they're confirmed as part of the written cleaning checklist reviewed on every visit."
  },
  {
    question: "Does someone need to be home during the cleaning?",
    answer:
      "It depends on the property access arranged for your service. Some clients provide access instructions and others prefer to be home. This is confirmed during scheduling."
  },
  {
    question: "How should I prepare my home?",
    answer:
      "Sharing priority areas, securing valuables and fragile items, reducing clutter where possible, and communicating about pets or restricted rooms all help the visit go smoothly. See the preparation guidance on this page for the full list."
  },
  {
    question: "Are cleaning supplies and equipment provided?",
    answer:
      "Supply and equipment arrangements are confirmed during the estimate based on your preferences and the agreed service scope."
  },
  {
    question: "How is residential cleaning priced?",
    answer:
      "Pricing depends on factors like home size and square footage, number of bedrooms and bathrooms, current condition, cleaning type and frequency, and requested priorities. Cleaning From The Heart LLC provides an accurate, customized estimate based on your home rather than a flat rate."
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve Seattle and the greater metro area, including Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Tacoma, and Bothell. If you're unsure whether we cover your address, reach out and we'll confirm."
  },
  {
    question: "How can I request an estimate?",
    answer:
      "Use the quote form on this page or call us directly. We'll ask about your property, requested service, and priorities, then follow up with a customized residential cleaning estimate."
  }
];

// ─── Related services (only routes that exist) ─────────────────────────────
const relatedServices = [
  {
    title: "Deep Cleaning",
    description: "A more thorough top-to-bottom cleaning for homes that need extra attention.",
    href: "/services/deep-cleaning",
    ctaLabel: "Explore our deep cleaning service"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Turnover-ready cleaning for residences changing hands or getting ready for a new chapter.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "View move-in and move-out cleaning"
  },
  {
    title: "Carpet Cleaning",
    description: "Deep extraction cleaning that lifts embedded dirt, stains, and odor from home carpet.",
    href: "/services/carpet-cleaning",
    ctaLabel: "Learn about our carpet cleaning service"
  },
  {
    title: "Window & Glass Cleaning",
    description: "Streak-free interior and exterior glass cleaning for Seattle-area homes.",
    href: "/services/window-glass-cleaning",
    ctaLabel: "See our window and glass cleaning service"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────

const residentialCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/residential-cleaning#service`,
      name: "Residential Cleaning Seattle",
      serviceType: "Residential Cleaning",
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
        "Professional residential cleaning services in Seattle for homes, apartments, condos, and rental properties. Customized cleaning plans for routine, deep, move-in, and move-out cleaning.",
      url: `${SITE_URL}/services/residential-cleaning`
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/services/residential-cleaning#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Residential Cleaning", item: `${SITE_URL}/services/residential-cleaning` }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services/residential-cleaning#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function ResidentialCleaningPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────────
          1. HERO
          ───────────────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-ink text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero-video absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/home/hero/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-ink/70" aria-hidden />
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 to-transparent" aria-hidden />
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow-light">Seattle Residential Cleaning</p>

              <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[3.75rem]">
                Residential Cleaning Services in Seattle, WA
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning From The Heart LLC provides professional house cleaning for single-family homes,
                apartments, condos, townhomes, and rental properties throughout its Seattle-area service area.
                Choose a recurring schedule, a one-time deep clean, or move-in and move-out cleaning, and we&apos;ll
                confirm the room-by-room priorities before we start.
              </p>

              <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {heroTrustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-white/75">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-gold w-full sm:w-auto">
                    Get a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-white/45">Takes 60 seconds · No obligation</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-ghost w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </Link>
                  <span className="pl-1 text-[11px] text-white/45">Mon–Sat · 7 AM – 7 PM</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-[300px] rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  Residential Cleaning at a Glance
                </h2>
                <ul className="mt-4 space-y-3">
                  {glanceItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 lg:hidden">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white">
              Residential Cleaning at a Glance
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {glanceItems.map((item) => (
                <li key={`m-${item}`} className="flex items-start gap-2 text-xs text-white/70">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <div className="border-t border-white/10 bg-black/20">
          <Container className="flex flex-wrap items-center justify-between gap-3 py-3.5 text-xs text-white/60 sm:text-sm">
            <span className="font-semibold text-white">{siteConfig.name}</span>
            <span>{siteConfig.serviceAreaSummary}</span>
            <span>{siteConfig.businessHours}</span>
          </Container>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          BREADCRUMBS
          ───────────────────────────────────────────────────────────────────── */}
      <div className="border-b border-brand-100 bg-white">
        <Container className="py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden />
            <Link href="/services" className="hover:text-brand-700">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden />
            <span aria-current="page" className="font-medium text-ink">
              Residential Cleaning
            </span>
          </nav>
        </Container>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          COMPACT TRUST STRIP
          ───────────────────────────────────────────────────────────────────── */}
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

      {/* ─────────────────────────────────────────────────────────────────────
          2. DIRECT-ANSWER INTRODUCTION
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white" aria-labelledby="residential-intro-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[46%_1fr] lg:gap-14">
            <div className="relative order-2 lg:order-1">
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-brand-100 shadow-card lg:max-w-none">
                <Image
                  src="/home/services/full-home-cleaning.jpg"
                  alt="Residential home cleaning in progress at a Seattle-area house"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  priority
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="eyebrow">Professional Home Cleaning Built Around Your Property</span>
              <h2 id="residential-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                What Residential Cleaning Includes and Who It&apos;s For
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Residential cleaning is a room-by-room service that helps restore order to kitchens, bathrooms,
                bedrooms, living areas, floors, and accessible household surfaces according to an agreed
                checklist, whether the home is occupied every day or sitting vacant between residents.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                It&apos;s built for Seattle-area homeowners, renters, landlords, property managers, and real
                estate professionals who need a single-family home, apartment, condo, or townhome cleaned to a
                consistent standard, whether that&apos;s an ongoing routine, a one-time deep clean, or
                a move-in or move-out visit. The cleaning scope is customized around the property, its current
                condition, and the priorities you share with us, and the final tasks are confirmed during the
                estimate.
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

      {/* ─────────────────────────────────────────────────────────────────────
          3. RESIDENTIAL CLEANING OPTIONS
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="options">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Choose the Right Residential Cleaning Service"
            description="From ongoing upkeep to a full reset before or after a move, here are the residential cleaning options available across Seattle and the surrounding area."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {cleaningOptions.map(({ Icon, title, description, href, ctaLabel }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="card-hover flex h-full flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
                    <Icon className="h-6 w-6 text-brand-700" aria-hidden />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold leading-snug">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                  <div className="border-t border-brand-50 pt-3">
                    <Link
                      href={href}
                      className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                    >
                      {ctaLabel}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          4. WHAT IS INCLUDED — room-by-room scope
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What Is Included in Residential Cleaning?"
            description="Residential cleaning may include dusting, vacuuming, mopping, kitchen and bathroom cleaning, trash removal, accessible surface wiping, fixture cleaning, and other tasks confirmed in the agreed cleaning checklist. The final scope depends on home size, current condition, requested service, surface types, priority areas, and whether the property is occupied or vacant."
          />

          <div className="mt-10">
            <ResidentialScopeAccordion />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Final tasks are confirmed during the estimate because every residence has different surfaces,
              conditions, access requirements, and cleaning priorities.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          5. STANDARD VS. DEEP VS. MOVE-IN VS. MOVE-OUT
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface scroll-mt-24" id="compare">
        <Container>
          <SectionHeading
            eyebrow="A Common Question"
            title="Do You Need Standard Cleaning or Deep Cleaning?"
            description="Standard cleaning maintains a home that's already in kept-up condition. Deep cleaning is a more thorough service for homes that need extra attention. Move-in and move-out cleaning are timed around a property transition. Here's a quick comparison to help you decide."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {comparisonCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06}>
                <article className="card flex h-full flex-col gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-brand-700">{card.title}</h3>
                  <dl className="flex-1 space-y-3">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">Best for</dt>
                      <dd className="mt-0.5 text-sm text-ink">{card.bestFor}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                        Typical condition
                      </dt>
                      <dd className="mt-0.5 text-sm text-ink">{card.condition}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted">Main focus</dt>
                      <dd className="mt-0.5 text-sm text-ink">{card.focus}</dd>
                    </div>
                  </dl>
                  <div className="border-t border-brand-50 pt-3">
                    <Link
                      href={card.nextStepHref}
                      className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                    >
                      {card.nextStepLabel}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          6. PROPERTIES & CUSTOMERS SERVED
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Properties We Clean</span>
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                Residential Properties We Clean
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {propertyTypesServed.map((type) => (
                  <span
                    key={type}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-surface px-3.5 py-1.5 text-xs font-medium text-ink"
                  >
                    <Home className="h-3 w-3 text-brand-600" aria-hidden />
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow">Who We Work With</span>
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                Homeowners, Renters & Property Managers
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {audiencesServed.map((audience) => (
                  <span
                    key={audience}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-surface px-3.5 py-1.5 text-xs font-medium text-ink"
                  >
                    <Users className="h-3 w-3 text-brand-600" aria-hidden />
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          7. WHY CHOOSE US
          ───────────────────────────────────────────────────────────────────── */}
      <section className="relative section-shell overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow-light">Why Seattle Residents Choose Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Seattle Residents Choose Cleaning From The Heart
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                A cleaning plan built around your home, not a one-size-fits-all package.
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

      {/* ─────────────────────────────────────────────────────────────────────
          8. RESULTS / PROOF
          ───────────────────────────────────────────────────────────────────── */}
      {residentialProofImages.length > 0 ? (
        <section className="section-shell bg-white">
          <Container>
            <SectionHeading
              eyebrow="Real Results"
              title="Residential Cleaning Results You Can See"
              description="A look at completed residential work from the results gallery. Visit the full gallery to see more."
            />

            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {residentialProofImages.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-2xl border border-brand-100 shadow-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={500}
                    className="aspect-[4/5] w-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <p className="border-t border-brand-100 bg-surface px-3 py-2 text-xs font-medium text-ink">
                    {image.caption}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/gallery" className="cta-primary">
                View Full Results Gallery
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      {/* ─────────────────────────────────────────────────────────────────────
          9. PROCESS
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How Our Residential Cleaning Process Works"
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
                  <div className="mt-auto border-t border-brand-50 pt-3">
                    <p className="text-xs font-semibold text-brand-600">{step.detail}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Request a Residential Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Home
            </Link>
            <Link href="/gallery" className="cta-secondary">
              View Before and After Results
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          10. PREPARATION, ACCESS & EXPECTATIONS
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <span className="eyebrow">Getting Ready</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                How to Prepare for Your Residential Cleaning
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                A little preparation helps the visit go smoothly and keeps the focus on the areas that matter
                most to you.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {preparationItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5 rounded-xl border border-brand-100 bg-surface px-3.5 py-3">
                  <ShieldQuestion className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span className="text-xs font-medium leading-snug text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          11. PRICING FACTORS
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface scroll-mt-24" id="pricing">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
              <DollarSign className="h-6 w-6 text-brand-700" aria-hidden />
            </div>
            <span className="eyebrow mt-5 inline-block">Pricing</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How Residential Cleaning Prices Are Determined
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We don&apos;t publish flat residential cleaning rates, because homes vary too much for a single
              number to be accurate. Cleaning From The Heart LLC reviews your home&apos;s size, condition, and
              requested scope to put together an accurate, customized estimate.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {pricingFactors.map((factor) => (
              <div key={factor} className="rounded-xl border border-brand-100 bg-white px-3.5 py-3 text-center">
                <span className="text-xs font-medium text-ink">{factor}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-brand-100 bg-white p-6 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Request a Customized Residential Cleaning Estimate
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          12. LOCAL SERVICE AREA
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white scroll-mt-24" id="areas">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Serving Seattle Homes</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Residential Cleaning in Seattle and Nearby Communities
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Cleaning From The Heart LLC provides residential cleaning throughout Seattle neighborhoods and the
              surrounding metro area shown below. Availability depends on your property&apos;s location,
              requested service, and cleaning scope, so if you&apos;re unsure whether your address falls within
              our service radius, reach out and we&apos;ll confirm.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Check Availability in Your Area
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-medium text-ink"
              >
                <MapPin className="h-3 w-3 text-brand-600" aria-hidden />
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          13. FAQ
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Residential Cleaning FAQs</h2>
              <p className="mt-4 text-base text-muted">
                Answers to what Seattle-area homeowners and renters ask us most before getting started.
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

      {/* ─────────────────────────────────────────────────────────────────────
          14. RELATED SERVICES
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading eyebrow="Related Services" title="Related Cleaning Services" />
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
                  <ArrowRight className="ml-1 h-3 w-3" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          15. FINAL CTA
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow-light">Get Reliable Residential Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Ready for a Cleaner, More Comfortable Home?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us about your property, preferred schedule, and cleaning priorities. Cleaning From The
                  Heart LLC will review the details and follow up with a customized residential cleaning
                  estimate for your home.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Customized cleaning plans", "One-time or recurring service", "30+ years of Seattle cleaning experience"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                        <CalendarCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialCleaningSchema) }}
      />
    </>
  );
}
