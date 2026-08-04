import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
  ShoppingBag,
  ChefHat,
  Dumbbell,
  Banknote,
  Car,
  Church,
  KeyRound,
  Warehouse,
  Hotel,
  Landmark,
  HeartPulse,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ClipboardList,
  MessageCircle,
  MapPin,
  ShieldCheck,
  ListChecks,
  Users,
  CalendarCheck
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { siteConfig } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

export const metadata: Metadata = {
  title: { absolute: "Commercial Deep Cleaning Seattle | Cleaning From The Heart LLC" },
  description:
    "Commercial deep cleaning in Seattle for offices, schools, retail, and facilities. Detailed cleaning scheduled around your business. Free quotes.",
  alternates: {
    canonical: "/services/commercial-deep-cleaning"
  },
  keywords: [
    "commercial deep cleaning Seattle",
    "commercial deep cleaning services Seattle",
    "business deep cleaning Seattle",
    "office deep cleaning services",
    "facility deep cleaning Seattle",
    "periodic deep cleaning for businesses"
  ],
  openGraph: {
    title: "Commercial Deep Cleaning Seattle | Cleaning From The Heart LLC",
    description:
      "Commercial deep cleaning in Seattle for offices, schools, retail, and facilities. Detailed cleaning scheduled around your business.",
    url: `${SITE_URL}/services/commercial-deep-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Commercial deep cleaning in progress at a Seattle-area facility, Cleaning From The Heart LLC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Deep Cleaning Seattle | Cleaning From The Heart LLC",
    description:
      "Commercial deep cleaning in Seattle for offices, schools, retail, and facilities. Detailed cleaning scheduled around your business.",
    images: ["/services/hero/hero-cleaning-team.png"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Detailed attention to workspaces & restrooms",
  "Scope built around your facility type",
  "Scheduling coordinated around business hours",
  "Often used before recurring janitorial service"
];

const trustStripItems = [
  { Icon: ClipboardList, label: "Scope built around your facility" },
  { Icon: MessageCircle, label: "Clear communication before service" },
  { Icon: CalendarCheck, label: "Coordinated around business hours" },
  { Icon: MapPin, label: "Seattle-area availability" }
];

// ─── Commercial properties served (verified routes only) ──────────────────
interface PropertyLink {
  Icon: LucideIcon;
  label: string;
  href: string;
}

const propertiesServed: PropertyLink[] = [
  { Icon: Building2, label: "Offices", href: "/industries/offices-commercial-buildings" },
  { Icon: GraduationCap, label: "Schools & Educational Facilities", href: "/services/school-facility-cleaning" },
  { Icon: ShoppingBag, label: "Retail Spaces", href: "/industries/retail-stores" },
  { Icon: ChefHat, label: "Restaurants", href: "/services/restaurant-kitchen-cleaning" },
  { Icon: Dumbbell, label: "Fitness Centers", href: "/industries/fitness-centers" },
  { Icon: Banknote, label: "Financial Institutions", href: "/industries/financial-institutions" },
  { Icon: Car, label: "Auto Dealerships", href: "/industries/auto-dealerships" },
  { Icon: Church, label: "Places of Worship", href: "/industries/places-of-worship" },
  { Icon: KeyRound, label: "Property-Managed Buildings", href: "/industries/property-management" },
  { Icon: Warehouse, label: "Warehouses & Facilities", href: "/industries/warehouses-industrial-facilities" },
  { Icon: Hotel, label: "Hospitality Spaces", href: "/industries/hospitality-properties" },
  { Icon: Landmark, label: "Government & Public Facilities", href: "/industries/government-public-buildings" },
  { Icon: HeartPulse, label: "Healthcare-Adjacent Facilities", href: "/industries/healthcare-facilities" }
];

// ─── What may be included, grouped by facility area ───────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Building2",
    title: "Workspaces & Offices",
    summary: "Desks, high-touch points, doors & floor edges.",
    intro:
      "Office and workspace cleaning addresses reachable surfaces and high-touch points that build up between routine janitorial visits.",
    tasks: [
      "Desk and reachable surface detailing",
      "High-touch point cleaning",
      "Door and door-frame wiping",
      "Baseboard attention",
      "Floor and edge cleaning",
      "Interior glass spot cleaning where applicable"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Lobbies & Common Areas",
    summary: "Reception areas, entry doors, seating & shared surfaces.",
    intro:
      "Lobbies and common areas see steady traffic from staff, tenants, and visitors, so shared surfaces get focused attention.",
    tasks: [
      "Reception area detailing",
      "Seating-area surface cleaning",
      "Entry door and high-touch surface cleaning",
      "Floor cleaning",
      "Corner and edge attention",
      "Detailed dusting"
    ]
  },
  {
    iconName: "Coffee",
    title: "Break Rooms & Kitchens",
    summary: "Countertops, cabinet exteriors, sinks & appliance exteriors.",
    intro: "Shared break rooms and kitchenettes see heavy daily use, so counters and appliance exteriors need detailed attention.",
    tasks: [
      "Countertop detailing",
      "Cabinet exterior cleaning",
      "Appliance exterior cleaning",
      "Sink and fixture cleaning",
      "Table cleaning",
      "Floor and high-touch surface cleaning"
    ]
  },
  {
    iconName: "ShowerHead",
    title: "Restrooms",
    summary: "Toilets, sinks, mirrors, partitions & dispensers.",
    intro: "Restrooms are one of the highest-priority areas in any facility, so fixtures and high-touch points get detailed attention.",
    tasks: [
      "Toilet and urinal cleaning",
      "Sink and fixture cleaning",
      "Mirror cleaning",
      "Partition cleaning",
      "Dispenser wiping",
      "Floor and high-touch point cleaning"
    ]
  },
  {
    iconName: "Layers",
    title: "Floor & Surface Attention",
    summary: "Detailed vacuuming, mopping & edge cleaning.",
    intro: "Floor and surface care addresses buildup that routine daily cleaning doesn't fully remove.",
    tasks: [
      "Detailed vacuuming",
      "Mopping",
      "Edge and corner cleaning",
      "Surface buildup attention",
      "Baseboard cleaning",
      "Machine floor services available as a separate quote where needed"
    ]
  },
  {
    iconName: "Warehouse",
    title: "Warehouses & Back-of-House Areas",
    summary: "Offices, break areas, restrooms & entryways within the facility.",
    intro:
      "Within warehouses and industrial sites, scope covers office and employee-facing spaces rather than production or machinery areas.",
    tasks: [
      "Office area cleaning",
      "Break area cleaning",
      "Restroom cleaning",
      "Entryway dust and debris removal",
      "Floor cleaning appropriate to the space",
      "Shared touchpoint cleaning"
    ]
  }
];

// ─── Commercial deep cleaning vs. recurring janitorial service ────────────
const comparisonColumns = [
  {
    title: "Recurring Commercial Cleaning",
    points: [
      "Supports ongoing facility maintenance",
      "Follows a recurring schedule",
      "Handles routine cleaning priorities"
    ],
    href: "/services/commercial-cleaning",
    ctaLabel: "View Recurring Commercial Cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    points: [
      "Provides more detailed, periodic attention",
      "Targets buildup and overlooked areas",
      "Can support transitions, reopening, events, or facility resets"
    ],
    href: "#included",
    ctaLabel: "See What May Be Included"
  }
];

// ─── Scheduling & operational considerations ───────────────────────────────
const schedulingFactors = [
  "Business hours",
  "Access requirements",
  "Facility occupancy",
  "Priority areas",
  "Security procedures",
  "Service frequency",
  "Operational disruptions",
  "Site-specific requirements"
];

// ─── Customized commercial scope factors ───────────────────────────────────
const scopeFactors = [
  "Square footage",
  "Facility type",
  "Number of restrooms",
  "Number of offices or workspaces",
  "Floor types",
  "Current condition",
  "Cleaning frequency",
  "Access",
  "Occupancy",
  "Priority areas",
  "Optional maintenance services"
];

// ─── Why choose us ──────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: Users,
    title: "Consistent Staffing",
    description: "The same professional crew handles your deep cleaning, familiar with commercial facilities across Seattle."
  },
  {
    Icon: ClipboardList,
    title: "Written Scope Confirmed Before Service",
    description: "The agreed scope is confirmed in writing after a walkthrough, so expectations are clear before service begins."
  },
  {
    Icon: CalendarCheck,
    title: "Scheduling Built Around Operations",
    description: "Timing is coordinated around your business hours, access requirements, and occupancy."
  },
  {
    Icon: MessageCircle,
    title: "Direct Communication",
    description: "No voicemail loops, no chasing updates. Questions about scope, scheduling, or pricing get a direct answer."
  },
  {
    Icon: MapPin,
    title: "Seattle-Local, Not a Franchise",
    description: "A locally owned business serving Seattle-area facilities, not a national chain with a local phone number."
  },
  {
    Icon: ShieldCheck,
    title: "30+ Years of Seattle Cleaning Experience",
    description: "Decades of hands-on commercial cleaning experience across Seattle offices, schools, and facilities."
  }
];

// ─── Process ────────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Discuss the Facility",
    description: "Tell us about your facility type, size, condition, and priorities so we understand your starting point."
  },
  {
    number: "02",
    title: "Build the Cleaning Scope",
    description: "We confirm a written scope of work, schedule, and pricing specific to your facility."
  },
  {
    number: "03",
    title: "Schedule Around Operations",
    description: "Service is scheduled to fit your business hours, access requirements, and operational needs."
  },
  {
    number: "04",
    title: "Complete and Review the Service",
    description: "The agreed scope is completed area by area, then reviewed with you against what was confirmed."
  }
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is commercial deep cleaning?",
    answer:
      "A more detailed, often periodic cleaning service for offices, schools, retail spaces, and facilities that need more attention than routine janitorial service provides. Scope is built around your facility's condition and priorities."
  },
  {
    question: "How is it different from routine janitorial service?",
    answer:
      "Routine janitorial service maintains a facility on a recurring schedule. Commercial deep cleaning provides more detailed, periodic attention to buildup and overlooked areas, often before recurring service begins or after heavy use."
  },
  {
    question: "What types of commercial properties do you clean?",
    answer:
      "Offices, schools, retail spaces, restaurants, fitness centers, financial institutions, auto dealerships, places of worship, property-managed buildings, warehouses, and other commercial facilities. See the properties served above, and reach out if yours isn't listed."
  },
  {
    question: "Can commercial deep cleaning be scheduled outside business hours?",
    answer:
      "Often, yes. Scheduling is coordinated around your business hours, access requirements, and operational needs, confirmed during the walkthrough."
  },
  {
    question: "Can we customize the scope by area?",
    answer:
      "Yes. Scope is confirmed by area, workspaces, restrooms, break rooms, common areas, and floors, based on your facility's priorities."
  },
  {
    question: "Is floor maintenance included?",
    answer:
      "Detailed vacuuming, mopping, and edge cleaning may be included depending on the agreed scope. Machine floor services such as stripping and waxing are handled as a separate service; see our floor care page."
  },
  {
    question: "Can deep cleaning be completed before recurring service begins?",
    answer:
      "Yes. Many clients schedule a deep clean first, then move into a recurring commercial cleaning schedule to maintain the results."
  },
  {
    question: "How is commercial deep-cleaning pricing determined?",
    answer:
      "Pricing depends on square footage, facility type, current condition, number of restrooms and workspaces, and the scope you request. We don't publish flat rates; a walkthrough and written quote confirm pricing for your facility."
  }
];

// ─── Related services (only routes that exist) ─────────────────────────────
const relatedServices = [
  {
    title: "Commercial Cleaning",
    description: "Recurring janitorial and facility cleaning for offices, schools, and commercial properties.",
    href: "/services/commercial-cleaning"
  },
  {
    title: "Deep Cleaning Hub",
    description: "Compare residential and commercial deep cleaning to find the right fit.",
    href: "/services/deep-cleaning"
  },
  {
    title: "Floor Care & Strip/Wax",
    description: "Hard floor stripping and waxing for facilities that need a restored, protected finish.",
    href: "/services/strip-and-wax"
  },
  {
    title: "Restaurant Kitchen Cleaning",
    description: "Scheduled cleaning for dining areas, food-prep surfaces, and grease-prone kitchen zones.",
    href: "/services/restaurant-kitchen-cleaning"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────

const commercialDeepCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/commercial-deep-cleaning#service`,
      name: "Commercial Deep Cleaning Seattle",
      serviceType: "Commercial Deep Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "City", name: "Seattle" },
        { "@type": "City", name: "Bellevue" },
        { "@type": "City", name: "Renton" },
        { "@type": "City", name: "Kent" },
        { "@type": "City", name: "Tukwila" },
        { "@type": "City", name: "Everett" },
        { "@type": "City", name: "Shoreline" },
        { "@type": "City", name: "Federal Way" },
        { "@type": "City", name: "Kirkland" },
        { "@type": "City", name: "Tacoma" },
        { "@type": "City", name: "Bothell" }
      ],
      description:
        "Commercial deep cleaning in Seattle for offices, schools, retail spaces, and facilities. Detailed cleaning with a scope customized to the facility and service plan.",
      url: `${SITE_URL}/services/commercial-deep-cleaning`
    },
    // BreadcrumbList is emitted once by the shared <Breadcrumbs> component below,
    // so it is intentionally not duplicated in this @graph.
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services/commercial-deep-cleaning#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function CommercialDeepCleaningPage() {
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
              { label: "Commercial Deep Cleaning", href: "/services/commercial-deep-cleaning" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Commercial Deep Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Commercial Deep Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning From The Heart LLC provides commercial deep cleaning for offices, schools, retail
                spaces, restaurants, and facilities across the Seattle area. It provides detailed attention
                beyond routine janitorial maintenance, before recurring service begins, after heavy use, or
                ahead of an important date, with the scope built around your facility.
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
                <Building2 className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">Commercial Deep Cleaning at a Glance</h2>
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
      <section className="section-shell-tight bg-white" aria-labelledby="commercial-deep-intro-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[46%_1fr] lg:gap-14">
            <div className="relative order-2 lg:order-1">
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-brand-100 shadow-card lg:max-w-none">
                <Image
                  src="/services/commercial-cleaning/intro-photo.png"
                  alt="Commercial deep cleaning in progress at a Seattle-area facility"
                  width={760}
                  height={950}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  priority
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="eyebrow">What Commercial Deep Cleaning Covers</span>
              <h2 id="commercial-deep-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Detailed Attention Beyond Routine Janitorial Service
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Commercial deep cleaning may be suitable before starting recurring janitorial service, after
                heavy facility use, after a period without professional cleaning, or before reopening,
                inspections, events, or tenant transitions. It also works as periodic support alongside
                recurring commercial cleaning.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Scope is built around your facility type, condition, and priorities, not sold as one generic
                package. It doesn&apos;t imply regulatory compliance or a guaranteed inspection result, it
                addresses the buildup and overlooked areas that routine service tends to move past.
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

      {/* ── COMMERCIAL PROPERTIES SERVED ────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            center
            eyebrow="Properties We Serve"
            title="Commercial Properties We Clean"
            description="Cleaning plans are customized around your facility type and priorities. Browse a few of the property types below, or explore the full industries directory."
          />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
            {propertiesServed.map(({ Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2.5 rounded-xl border border-brand-100 bg-white px-3.5 py-3 text-xs font-medium text-ink transition-colors hover:border-brand-300 hover:bg-brand-50 sm:text-sm"
              >
                <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                {label}
              </Link>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted">
            Healthcare-adjacent facilities are served for general commercial cleaning only, not medical-grade
            disinfection or clinical sanitation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/industries-we-serve" className="cta-secondary">
              View All Industries
            </Link>
          </div>
        </Container>
      </section>

      {/* ── WHAT MAY BE INCLUDED ────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What May Be Included in Commercial Deep Cleaning?"
            description="Depending on the facility and agreed service plan, commercial deep cleaning may include the tasks below. The exact scope depends on facility type, condition, and priorities, confirmed during the walkthrough."
          />

          <div className="mt-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Pressure washing, floor stripping and waxing, carpet extraction, exterior window cleaning,
              grease-hood cleaning, and hazardous-material cleanup are not included and may require a separate
              quote.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── COMMERCIAL DEEP CLEANING VS. RECURRING JANITORIAL SERVICE ──── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="A Common Question"
            title="Commercial Deep Cleaning vs. Recurring Janitorial Service"
            description="Both keep your facility clean, but they serve different purposes. Recurring service maintains a facility on a set schedule; deep cleaning provides more detailed, periodic attention."
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

      {/* ── SCHEDULING & OPERATIONAL CONSIDERATIONS ─────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="eyebrow">Scheduling</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Scheduling Built Around Your Operations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Commercial deep cleaning is planned around how your facility actually operates. Scheduling can
                often be arranged before or after business hours to minimize disruption, confirmed during the
                walkthrough.
              </p>
              <div className="mt-6">
                <Link href="/contact#quote-form" className="cta-primary">
                  Discuss Scheduling for Your Facility
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {schedulingFactors.map((factor) => (
                <div key={factor} className="flex items-start gap-2 rounded-xl border border-brand-100 bg-surface px-3.5 py-3">
                  <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span className="text-xs font-medium text-ink">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CUSTOMIZED COMMERCIAL SCOPE ─────────────────────────────────── */}
      <section className="section-shell-tight bg-surface scroll-mt-24" id="scope">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
              <ListChecks className="h-6 w-6 text-brand-700" aria-hidden />
            </div>
            <span className="eyebrow mt-5 inline-block">Customized Scope</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Every Commercial Deep Cleaning Scope Is Built Around Your Facility
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We don&apos;t publish flat commercial deep cleaning rates, because facilities vary too much for a
              single number to be accurate. The factors below shape the scope and quote for your facility.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            {scopeFactors.map((factor) => (
              <div key={factor} className="rounded-xl border border-brand-100 bg-white px-3.5 py-3 text-center">
                <span className="text-xs font-medium text-ink">{factor}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-brand-100 bg-white p-6 text-center">
            <p className="text-sm font-semibold text-ink">
              The most accurate way to price commercial deep cleaning is through a walkthrough and a written
              scope based on your facility.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get Pricing for Your Facility
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How Commercial Deep Cleaning Works"
            description="A clear four-step process from your first message to a completed, reviewed service."
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
              Request a Commercial Deep Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Facility
            </Link>
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
                <span className="eyebrow-light">Why Seattle Businesses Choose Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Seattle Facilities Choose Cleaning From The Heart
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                A deep cleaning scope built around how your facility operates, not a one-size-fits-all package.
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

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Commercial Deep Cleaning FAQs</h2>
              <p className="mt-4 text-base text-muted">
                Answers to what Seattle business owners and facility managers ask us most before booking.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5">
                <p className="text-sm font-semibold text-ink">Have a specific question?</p>
                <p className="mt-1 text-sm text-muted">
                  Call or message us and we&apos;ll answer anything specific to your facility or schedule.
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
                <p className="eyebrow-light">Get Reliable Commercial Deep Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Get a Commercial Deep Cleaning Plan Built for Your Facility
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us about your facility and priorities. Cleaning From The Heart LLC will confirm scope and
                  pricing and follow up with a written, no-obligation quote.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Scope built around your facility", "Scheduling around business hours", "30+ years of Seattle cleaning experience"].map(
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
                    Request a Free Quote
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialDeepCleaningSchema) }}
      />
    </>
  );
}
