import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Users,
  CalendarCheck,
  ClipboardCheck,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Phone,
  Clock,
  Star,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Brush,
  Droplets,
  HardHat,
  Car,
  Trash2,
  Sun,
  ShowerHead,
  KeyRound,
  Landmark,
  Banknote,
  Hotel,
  Dumbbell,
  HeartPulse,
  Warehouse,
  DollarSign,
  ListChecks
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScopeAccordion } from "@/components/services/ScopeAccordion";
import { IndustryCarousel } from "@/components/industries/IndustryCarousel";
import { siteConfig, serviceAreas } from "@/lib/site";
import { industries } from "@/lib/industries";

const SITE_URL = "https://cleaningfromtheheartllc.com";

export const metadata: Metadata = {
  title: "Commercial Cleaning in Seattle, WA | Cleaning From The Heart",
  description:
    "Commercial cleaning in Seattle for offices, schools, restaurants, retail, and managed properties. Customized cleaning plans, consistent crews, and free quotes.",
  alternates: {
    canonical: "/services/commercial-cleaning"
  },
  openGraph: {
    title: "Commercial Cleaning in Seattle, WA | Cleaning From The Heart",
    description:
      "Commercial cleaning in Seattle for offices, schools, restaurants, retail, and managed properties. Customized cleaning plans, consistent crews, and free quotes.",
    url: `${SITE_URL}/services/commercial-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Commercial cleaning in Seattle — Cleaning From The Heart LLC"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cleaning in Seattle, WA | Cleaning From The Heart",
    description:
      "Commercial cleaning in Seattle for offices, schools, restaurants, retail, and managed properties. Customized cleaning plans, consistent crews, and free quotes.",
    images: ["/services/hero/hero-cleaning-team.png"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const heroStats = [
  { value: "30+", label: "Years in Seattle" },
  { value: "200+", label: "Properties Served" },
  { value: "5.0★", label: "Average Rating" },
  { value: "Free", label: "Quote & Estimate" }
];

const jumpLinks = [
  { label: "What's Included", href: "#included" },
  { label: "Industries", href: "#industries" },
  { label: "Services", href: "#services" },
  { label: "Plans & Schedules", href: "#plans" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Service Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" }
];

const introTrustPoints = [
  "Customized Cleaning Plans",
  "Flexible Service Schedules",
  "Single Point of Contact",
  "Quality Checks & Documentation"
];

const trustByTypes = [
  { label: "Schools & Educational Facilities", Icon: GraduationCap },
  { label: "Offices & Corporate Buildings", Icon: Building2 },
  { label: "Property Management Companies", Icon: KeyRound },
  { label: "Commercial Facilities & Warehouses", Icon: Warehouse },
  { label: "Financial Institutions", Icon: Banknote },
  { label: "Government & Public Buildings", Icon: Landmark },
  { label: "Auto Dealerships", Icon: Car },
  { label: "Fitness Centers", Icon: Dumbbell },
  { label: "Hospitality Properties", Icon: Hotel },
  { label: "Healthcare Facilities", Icon: HeartPulse }
];

// Duplicated for a seamless CSS marquee loop — both halves must stay identical and in order.
const marqueeTrustByTypes = [...trustByTypes, ...trustByTypes];

// ─── Commercial Cleaning Solutions (grouped services) ─────────────────────
interface ServiceCardData {
  Icon: typeof Building2;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
}

const facilityCleaningGroup: ServiceCardData[] = [
  {
    Icon: Building2,
    title: "Office Cleaning",
    description:
      "Recurring cleaning for corporate offices, small businesses, and professional suites, covering desks, common areas, restrooms, and kitchen spaces.",
    href: "/contact#quote-form",
    ctaLabel: "Request a Quote"
  },
  {
    Icon: ClipboardCheck,
    title: "Janitorial Maintenance",
    description:
      "Routine, recurring upkeep, trash removal, restroom checks, dusting, and surface cleaning, on a schedule built around your building.",
    href: "/contact#quote-form",
    ctaLabel: "Request a Quote"
  },
  {
    Icon: GraduationCap,
    title: "School & Educational Facility Cleaning",
    description:
      "Structured janitorial service for K-12 schools and educational facilities: classrooms, hallways, restrooms, and staff areas.",
    href: "/services/school-facility-cleaning",
    ctaLabel: "View School Cleaning"
  },
  {
    Icon: ShowerHead,
    title: "Restroom & Common-Area Cleaning",
    description:
      "Focused sanitation of restrooms, breakrooms, and shared common areas, the highest-touch, highest-priority zones in any facility.",
    href: "/contact#quote-form",
    ctaLabel: "Request a Quote"
  },
  {
    Icon: CalendarCheck,
    title: "Recurring Facility Cleaning",
    description:
      "Ongoing janitorial service for warehouses, community centers, and multi-use commercial facilities on a consistent schedule.",
    href: "/contact#quote-form",
    ctaLabel: "Request a Quote"
  }
];

const floorAndSurfaceGroup: ServiceCardData[] = [
  {
    Icon: Brush,
    title: "Carpet Cleaning",
    description:
      "Deep extraction cleaning that lifts embedded dirt, stains, and odor from office and commercial carpet beyond what vacuuming removes.",
    href: "/services/carpet-cleaning",
    ctaLabel: "Learn About Carpet Cleaning"
  },
  {
    Icon: Layers,
    title: "Floor Care & Strip/Wax",
    description:
      "Hard floor maintenance including stripping old buildup and applying a fresh, durable finish that extends floor life in high-traffic areas.",
    href: "/services/strip-and-wax",
    ctaLabel: "See Floor Stripping and Waxing"
  },
  {
    Icon: Sparkles,
    title: "Window & Glass Cleaning",
    description:
      "Streak-free interior glass cleaning for storefronts, entry doors, partitions, and office windows that improves natural light and curb appeal.",
    href: "/services/window-glass-cleaning",
    ctaLabel: "Explore Window Cleaning"
  }
];

const specialtyGroup: ServiceCardData[] = [
  {
    Icon: Zap,
    title: "Commercial Deep Cleaning",
    description:
      "A full top-to-bottom reset for spaces that need intensive attention, ideal for new accounts, post-event recovery, or long-overdue facilities.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "Explore Commercial Deep Cleaning"
  },
  {
    Icon: Droplets,
    title: "Pressure Washing",
    description:
      "Exterior pressure washing that lifts dirt, algae, and buildup from concrete, walkways, entrances, and building exteriors.",
    href: "/services/pressure-washing",
    ctaLabel: "View Pressure Washing"
  },
  {
    Icon: HardHat,
    title: "Post-Construction & Renovation Cleanup",
    description:
      "Detailed cleanup that clears dust, debris, and residue from floors, fixtures, and surfaces so finished spaces are ready for handoff.",
    href: "/services/post-construction-renovation-cleanup",
    ctaLabel: "Explore Post-Construction Cleanup"
  },
  {
    Icon: Car,
    title: "Parking Lot & Exterior Maintenance",
    description:
      "Routine upkeep for parking lots, entryways, and perimeter zones that keeps your property presentable from the curb inward.",
    href: "/services/parking-lot-exterior-maintenance",
    ctaLabel: "See Exterior Maintenance"
  },
  {
    Icon: Trash2,
    title: "Junk Removal",
    description:
      "Fast removal of old furniture, equipment, and non-hazardous debris so your commercial space is cleared and ready to use.",
    href: "/services/junk-removal",
    ctaLabel: "View Junk Removal"
  },
  {
    Icon: Sun,
    title: "Solar Panel Cleaning",
    description:
      "Careful exterior cleaning that removes dust, pollen, and debris from rooftop and ground-mounted panel arrays on commercial properties.",
    href: "/services/solar-panel-cleaning",
    ctaLabel: "Learn About Solar Panel Cleaning"
  }
];

// Industries We Serve section now sources its data from lib/industries.ts —
// the same config also powers /industries, the nav dropdown, and each
// /industries/[slug] page. See that file for the full industry list.

// ─── Customized Cleaning Plan factors ──────────────────────────────────────
const planFactors = [
  "Square footage and layout",
  "Facility type and industry",
  "Foot traffic and customer volume",
  "Number of employees and shifts",
  "Operating hours and access windows",
  "Number of restrooms",
  "Breakrooms and kitchen areas",
  "Flooring types and condition",
  "High-touch and priority areas",
  "Existing property condition",
  "Cleaning frequency needed",
  "Budget and cleaning priorities"
];

// ─── Cleaning Schedules ────────────────────────────────────────────────────
const scheduleOptions = [
  { title: "Daily Service", description: "For high-traffic, customer-facing facilities that need attention every business day." },
  { title: "Multiple Visits Per Week", description: "A middle-ground schedule for busier offices, schools, and shared facilities." },
  { title: "Weekly Cleaning", description: "The standard cadence for most offices and lower-traffic commercial spaces." },
  { title: "One-Time or Project Cleaning", description: "A single deep clean for new accounts, events, or facilities needing a reset." },
  { title: "Before-Opening or After-Hours", description: "Service scheduled around your hours so cleaning never interrupts operations." },
  { title: "Weekend Cleaning", description: "Available for facilities that prefer service outside the standard workweek." }
];

const scheduleGuidance = [
  "Lower-traffic offices often do well with weekly or bi-weekly service.",
  "Busy, customer-facing facilities like retail and hospitality may need daily attention.",
  "Restaurants, fitness centers, and schools often need more frequent service in priority areas like restrooms and high-touch surfaces.",
  "Floor and carpet care is typically scheduled periodically, alongside routine janitorial cleaning."
];

// ─── Process ────────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Facility Walkthrough",
    description:
      "We walk your property, assess scope, identify priorities, and understand your specific access and scheduling requirements before a single quote is written.",
    detail: "No obligation · Free assessment"
  },
  {
    number: "02",
    title: "Customized Scope & Quote",
    description:
      "Based on your facility type, size, and traffic patterns, we build a written cleaning scope with the tasks, frequency, and pricing specific to your property.",
    detail: "Written scope & transparent pricing"
  },
  {
    number: "03",
    title: "Scheduled Cleaning Begins",
    description:
      "Your dedicated team arrives on schedule, follows the agreed scope, and handles your property with the same care and consistency on every visit.",
    detail: "Same crew · Structured checklist"
  },
  {
    number: "04",
    title: "Ongoing Quality Follow-Up",
    description:
      "We check in regularly, address any concerns immediately, and adjust the scope as your facility's needs change over time.",
    detail: "Accountable · Responsive"
  }
];

// ─── Quality & Consistency ─────────────────────────────────────────────────
const qualityItems = [
  {
    Icon: ClipboardCheck,
    title: "Written Scope of Work",
    description: "Every account starts with a written cleaning scope specific to your facility, so expectations are clear from day one."
  },
  {
    Icon: Users,
    title: "Consistent Crew",
    description: "The same team services your property visit after visit, learning your layout and standards instead of starting over each time."
  },
  {
    Icon: MessageCircle,
    title: "Direct Communication",
    description: "Issues get reported and addressed quickly through a direct line to the team, not a call center or voicemail loop."
  },
  {
    Icon: CalendarCheck,
    title: "Scope Adjustments Over Time",
    description: "As your facility's needs change, your cleaning scope and schedule can be adjusted rather than locked in place."
  }
];

// ─── Why Choose Us ──────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: Users,
    title: "Consistent Staffing",
    description:
      "The same professional crew serves your property every visit. Your team learns your standards, your layout, and your preferences so results are predictable without you repeating yourself."
  },
  {
    Icon: CalendarCheck,
    title: "Reliable Schedules",
    description:
      "We show up when we say we will. No last-minute cancellations, no scheduling gaps. Your facility is cleaned on time, on the agreed day, every time."
  },
  {
    Icon: ClipboardCheck,
    title: "High Accountability",
    description:
      "Every job follows a written checklist specific to your space. If anything falls short, we return and correct it. No lengthy back-and-forth."
  },
  {
    Icon: ShieldCheck,
    title: "30+ Years of Seattle Experience",
    description:
      "Decades of hands-on commercial cleaning experience across Seattle offices, schools, and facilities. A consistent crew that knows your standards and delivers results you don't need to follow up on."
  },
  {
    Icon: MessageCircle,
    title: "Direct Communication",
    description:
      "No voicemail loops, no chasing updates. You reach a real person, get a real answer, and any issue is handled the same day it's raised."
  },
  {
    Icon: MapPin,
    title: "Seattle-Local, Not a Franchise",
    description:
      "We're locally owned and accountable to this community. We know Seattle properties and serve Seattle clients with the consistency a national chain can't deliver."
  }
];

const resultsBenefits = [
  "Reduced sick days through consistent high-touch surface cleaning",
  "Stronger client and visitor first impressions from a well-maintained space",
  "Lower long-term maintenance costs from proper floor and surface care",
  "Higher staff productivity and morale in a clean, organized environment",
  "A presentation-ready facility for schools, offices, and public-facing businesses",
  "Peace of mind: knowing it's handled, every week, without follow-up"
];

const authorityStats = [
  { value: "30+", label: "Years in Business", detail: "Family-owned, Seattle-rooted" },
  { value: "200+", label: "Properties Served", detail: "Offices, schools & facilities" },
  { value: "Free", label: "Quotes & Estimates", detail: "No obligation, written proposal" },
  { value: "5.0★", label: "Client Rating", detail: "Consistent 5-star performance" }
];

// ─── Real project proof (from the results gallery) ─────────────────────────
const proofImages = [
  {
    src: "/images/gallery/gallery-20.jpg",
    alt: "Commercial office floor care result in the Seattle area",
    caption: "Office floor care, Seattle commercial property"
  },
  {
    src: "/images/gallery/gallery-06.jpeg",
    alt: "Commercial glass cleaning with a water-fed pole in Seattle",
    caption: "Commercial glass cleaning, water-fed pole system"
  },
  {
    src: "/images/gallery/gallery-12.jpeg",
    alt: "Strip and wax floor result on commercial tile in Seattle",
    caption: "Strip and wax result, commercial tile flooring"
  },
  {
    src: "/images/gallery/gallery-13.jpeg",
    alt: "Polished commercial floor care result in the Seattle area",
    caption: "Polished floor finish, commercial facility"
  }
];

// ─── Pricing factors ────────────────────────────────────────────────────────
const pricingFactors = [
  "Property size and square footage",
  "Facility type and industry",
  "Cleaning frequency",
  "Number of restrooms",
  "Floor type and current condition",
  "Foot traffic and occupancy",
  "Requested tasks and specialty services",
  "Supplies and equipment needs",
  "Access requirements and timing",
  "One-time versus recurring service"
];

// ─── FAQ ────────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is included in commercial cleaning services?",
    answer:
      "Commercial cleaning typically includes office and workspace cleaning, restroom sanitation, breakroom cleaning, common-area and hallway maintenance, trash removal, and floor care. The exact scope is customized to your facility type, size, and priorities during a walkthrough, and confirmed in a written cleaning scope before service begins."
  },
  {
    question: "How often should a commercial building be cleaned?",
    answer:
      "For most offices and commercial facilities, weekly or bi-weekly cleaning is the standard. High-traffic environments like schools, restaurants, and retail spaces may benefit from daily or multi-weekly service. We assess your space, foot traffic, and usage patterns during the initial walkthrough and recommend the frequency that maintains your standard without over-servicing."
  },
  {
    question: "How much does commercial cleaning cost in Seattle?",
    answer:
      "Commercial cleaning pricing depends on your property's size, facility type, cleaning frequency, floor types, restroom count, and any specialty services requested. Because every facility is different, we don't publish flat rates. We provide a free, no-obligation walkthrough and a written quote based on your specific property."
  },
  {
    question: "What is the difference between commercial cleaning and janitorial services?",
    answer:
      "Janitorial services generally refer to recurring, routine tasks such as restroom cleaning, trash removal, vacuuming, and common-area maintenance. Commercial cleaning is the broader category, which includes janitorial work plus specialty services like carpet cleaning, floor stripping and waxing, window cleaning, and periodic deep cleaning. Many facilities need both."
  },
  {
    question: "Do you provide cleaning supplies and equipment?",
    answer:
      "Yes. We bring professional-grade cleaning products and commercial equipment for every job. If your facility has specific product requirements or preferences, let us know during the walkthrough and we'll accommodate them."
  },
  {
    question: "Can cleaning be scheduled after business hours?",
    answer:
      "Yes. We regularly schedule commercial cleaning during off-hours, evenings, early mornings, and weekends, to eliminate disruption to your team, tenants, or customers. We schedule around your business, not ours."
  },
  {
    question: "Do you create customized cleaning checklists?",
    answer:
      "Yes. Every commercial account starts with a written cleaning scope built around your facility's layout, priorities, and schedule. That scope functions as the checklist our crew follows on every visit, and it can be adjusted as your needs change."
  },
  {
    question: "What types of commercial facilities do you clean?",
    answer:
      "We clean offices, schools and educational facilities, retail stores, restaurants, property-managed buildings, auto dealerships, fitness centers, places of worship, and warehouses, among other commercial facility types. If you don't see your facility type listed, reach out and we'll confirm availability."
  },
  {
    question: "Do you offer one-time and recurring commercial cleaning?",
    answer:
      "Yes. Most commercial clients are on recurring weekly or bi-weekly plans, but we also handle one-time deep cleans, post-construction cleanup, and project-based service for facilities that need a single visit rather than an ongoing schedule."
  },
  {
    question: "Do you clean restaurants and commercial kitchens?",
    answer:
      "Yes, for front-of-house areas such as dining rooms, entrances, waiting areas, customer restrooms, and seating surroundings. Back-of-house kitchen scope varies significantly by layout and equipment, so it's confirmed during a walkthrough rather than sold as a standard package."
  },
  {
    question: "How do I request a commercial cleaning quote?",
    answer:
      "Use the quote form on this page or call us directly. We'll ask a few questions about your facility, discuss priorities and schedule, and follow up with a walkthrough and a written, no-obligation quote."
  },
  {
    question: "Which Seattle-area cities do you serve?",
    answer:
      "We serve Seattle and the greater metro area, including Bellevue, Renton, Kent, Tukwila, Everett, Shoreline, Federal Way, Kirkland, Tacoma, and Bothell. If you're unsure whether we serve your area, reach out and we'll confirm availability."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────

const commercialCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/commercial-cleaning#service`,
      name: "Commercial Cleaning Seattle",
      serviceType: "Commercial Cleaning",
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
        "Professional commercial cleaning services in Seattle for offices, schools, restaurants, retail, and managed commercial properties. Customized cleaning plans, consistent staffing, and 30+ years of Seattle experience.",
      url: `${SITE_URL}/services/commercial-cleaning`
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/services/commercial-cleaning#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Commercial Cleaning", item: `${SITE_URL}/services/commercial-cleaning` }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services/commercial-cleaning#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function CommercialCleaningLandingPage() {
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

        <div className="absolute inset-0 bg-ink/65" aria-hidden />
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 to-transparent" aria-hidden />
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell">
          <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
                <span className="text-xs font-semibold text-accent">Serving Seattle since 1995</span>
              </div>

              <p className="eyebrow-light">Professional Commercial Cleaning Services in Seattle, WA</p>

              <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-[3.75rem]">
                Commercial Cleaning in Seattle That Actually Stays Consistent
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Seattle business owners deserve better than one-size-fits-all cleaning. True commercial
                cleaning brings insured crews, transparent pricing, and a free walkthrough across King
                County. From office cleaning to industrial facilities, a customized cleaning plan built
                around your schedule delivers thorough results without disrupting daily operations
                earning genuine trust factors every time.
              </p>

              <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                {[
                  "Same crew, every visit",
                  "Written scope on every job",
                  "Response within 2 hours",
                  "Free quote, no obligation"
                ].map((point) => (
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

              <div className="mt-7 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>Seattle-Owned Local Business</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Clock className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>Professional Trained Crew</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Star className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>30+ Years Serving Seattle</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-col lg:gap-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-[148px] flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm"
                >
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="mt-1 text-xs text-white/55">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
            {heroStats.map((stat) => (
              <div
                key={`m-${stat.label}`}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-center"
              >
                <span className="text-xl font-bold text-white">{stat.value}</span>
                <span className="mt-0.5 text-[11px] text-white/55">{stat.label}</span>
              </div>
            ))}
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
          BREADCRUMBS + JUMP NAV (desktop only)
          ───────────────────────────────────────────────────────────────────── */}
      <div className="hidden border-b border-brand-100 bg-white md:block">
        <Container className="flex items-center justify-between gap-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden />
            <Link href="/services" className="hover:text-brand-700">Services</Link>
            <ChevronRight className="h-3 w-3" aria-hidden />
            <span className="font-medium text-ink">Commercial Cleaning</span>
          </nav>
        </Container>
      </div>
      <div className="sticky top-16 z-30 hidden border-b border-brand-100 bg-white/95 backdrop-blur-md md:block">
        <Container>
          <div className="flex items-center gap-5 overflow-x-auto py-2.5 text-xs font-semibold text-muted [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {jumpLinks.map((link) => (
              <a key={link.href} href={link.href} className="shrink-0 whitespace-nowrap transition-colors hover:text-brand-700">
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          2. WHO WE ARE & WHAT WE DO
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white" aria-labelledby="commercial-intro-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[46%_1fr] lg:gap-14">
            <div className="relative order-2 lg:order-1">
              {/*
                INTRO IMAGE (vertical)
                ──────────────────────────────────────────────────────────
                Paste your PNG here: /public/services/commercial-cleaning/intro-photo.png
                Recommended size: 760 x 950px (a 4:5 portrait crop works best).
                Update the `alt` text below to describe the new photo.
                ──────────────────────────────────────────────────────────
              */}
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-brand-100 shadow-card lg:max-w-none">
                <Image
                  src="/services/commercial-cleaning/intro-photo.png"
                  alt="Commercial cleaning crew member servicing a Seattle office facility"
                  width={760}
                  height={950}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 -right-5 hidden rounded-2xl border border-brand-100 bg-white px-5 py-4 shadow-card sm:block">
                <p className="text-2xl font-bold text-brand-700">30+</p>
                <p className="text-xs font-medium text-muted">Years serving Seattle</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="eyebrow">WHO WE ARE &amp; WHAT WE DO</span>
              <h2 id="commercial-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Best Commercial Cleaning Solutions for Seattle Businesses and Facilities
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Cleaning From The Heart LLC provides professional commercial cleaning for businesses and facilities
                throughout Seattle and the surrounding Puget Sound area. We work directly with the property managers,
                facility managers, and business owners responsible for commercial offices, medical facilities, retail
                spaces, restaurants, warehouses, and other professional buildings, each with its own layout, foot
                traffic, and priorities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Services can include routine janitorial services, dusting and surface cleaning, restroom cleaning,
                trash removal and recycling, and high-touch surface cleaning, along with carpet cleaning or
                extraction, hard-surface floor care, high dusting, disinfection cleaning, and other specialty
                commercial cleaning. Not every service applies to every facility; the final scope depends on your
                building and the cleaning plan we agree on together.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Before service begins, we build a customized scope of work around your facility type, square
                footage, foot traffic, occupancy, and specific cleaning requirements, along with the service
                frequency and business hours that fit how your building actually operates. Cleaning can be
                scheduled daily, weekly, in the evening, after-hours, or on weekends. Every account gets a single
                point of contact, responsive communication, regular quality checks, and before/after documentation,
                so you always know what was done and when, and the plan can be adjusted as your facility's needs
                change.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-3">
                {introTrustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 rounded-xl border border-brand-100 bg-surface px-3.5 py-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span className="text-xs font-medium leading-snug text-ink">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">Get a Free Quote</Link>
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
          TRUST BAR
          ───────────────────────────────────────────────────────────────────── */}
      <div className="border-y border-white/5 bg-brand-950">
        <div className="py-7">
          <Container>
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Trusted by businesses across Seattle
            </p>
          </Container>
          <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="marquee-track flex w-max gap-3">
              {marqueeTrustByTypes.map(({ label, Icon }, index) => (
                <div
                  key={`${label}-${index}`}
                  aria-hidden={index >= trustByTypes.length ? true : undefined}
                  className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span className="text-xs font-medium text-white/70">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          3. WHAT'S INCLUDED — cleaning scope by facility area
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What Is Included in Our Commercial Cleaning Services?"
            description="Every commercial cleaning scope depends on the facility type, size, hours of operation, foot traffic, flooring, number of restrooms, and cleaning priorities. The five areas below outline what a typical commercial cleaning visit can include, from offices and entrances to restrooms, breakrooms, and common areas."
          />

          <div className="mt-10">
            <ScopeAccordion />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Every facility is different, and the areas above reflect common inclusions rather than a fixed
              checklist. The final scope, schedule, and service frequency are confirmed after a walkthrough of your
              property.
            </p>
            <p className="mt-3 text-sm font-medium text-ink">
              Ready to see what a customized scope looks like for your building?
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">Get a Free Quote</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          4. INDUSTRIES WE SERVE
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="industries">
        <Container>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Commercial Cleaning for Seattle Businesses Across Multiple Industries"
            description="Cleaning plans are customized around your facility type, traffic patterns, operating schedule, and priorities, not sold as one package for every business. Browse the industries below, or explore the full directory for a closer look."
          />

          <div className="mt-10">
            <IndustryCarousel industries={industries} />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">Request a Customized Cleaning Plan</Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          5. COMMERCIAL CLEANING SOLUTIONS — grouped services
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="services">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Commercial Cleaning Solutions Built for Your Facility"
            description="From daily janitorial upkeep to specialty floor care and project-based cleanup, here is the full range of commercial cleaning services we provide across Seattle and the greater metro area."
          />

          <div className="mt-10 space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600">Ongoing Facility Cleaning</h3>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {facilityCleaningGroup.map(({ Icon, title, description, href, ctaLabel }, index) => (
                  <Reveal key={title} delay={index * 0.06}>
                    <ServiceCard Icon={Icon} title={title} description={description} href={href} ctaLabel={ctaLabel} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600">Floor & Surface Care</h3>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {floorAndSurfaceGroup.map(({ Icon, title, description, href, ctaLabel }, index) => (
                  <Reveal key={title} delay={index * 0.06}>
                    <ServiceCard Icon={Icon} title={title} description={description} href={href} ctaLabel={ctaLabel} />
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-brand-600">Specialty Commercial Services</h3>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {specialtyGroup.map(({ Icon, title, description, href, ctaLabel }, index) => (
                  <Reveal key={title} delay={index * 0.06}>
                    <ServiceCard Icon={Icon} title={title} description={description} href={href} ctaLabel={ctaLabel} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">Get a Free Quote</Link>
            <Link href="/services" className="cta-secondary">View All Services</Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          7 & 8. CUSTOMIZED PLANS + SCHEDULES
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="plans">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div>
                <span className="eyebrow">Customized Plans</span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  A Commercial Cleaning Plan Built Around Your Property
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Commercial cleaning is not sold as an identical package for every facility. Your plan is shaped
                  by the specifics of your property.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {planFactors.map((factor) => (
                    <div key={factor} className="flex items-start gap-2 rounded-xl border border-brand-100 bg-surface px-3.5 py-3">
                      <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span className="text-xs font-medium text-ink">{factor}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/contact#quote-form" className="cta-primary">Schedule a Facility Walkthrough</Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <span className="eyebrow">Cleaning Schedules</span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  Daily, Weekly, and Customized Schedules
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {scheduleOptions.map((option) => (
                    <div key={option.title} className="rounded-xl border border-brand-100 bg-surface p-4">
                      <p className="text-sm font-semibold text-ink">{option.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{option.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                  <p className="text-sm font-semibold text-ink">General guidance, not a fixed rule</p>
                  <ul className="mt-3 space-y-2">
                    {scheduleGuidance.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact#quote-form" className="cta-secondary">Discuss Your Cleaning Schedule</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          9. PROCESS
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="From the First Walkthrough to Reliable Ongoing Cleaning"
            description="No complicated onboarding, no vague timelines. A clear four-step process that takes you from initial inquiry to consistent, professional cleaning results."
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
            <Link href="/contact#quote-form" className="cta-primary">Start With a Free Inspection</Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          10. QUALITY & CONSISTENCY
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Quality Control"
            title="How We Help Maintain Consistent Cleaning Quality"
            description="Consistency isn't a slogan here, it comes from a few specific operational habits applied to every account."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {qualityItems.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <div className="card flex h-full flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="text-xs leading-relaxed text-muted">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          11. COMMERCIAL CLEANING VS. JANITORIAL SERVICES
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">A Common Question</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Commercial Cleaning vs. Janitorial Services: What Is the Difference?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Janitorial services generally refer to recurring, routine tasks: restroom cleaning, trash removal,
              vacuuming, mopping, and common-area maintenance performed on a set schedule. Commercial cleaning is
              the broader category, covering janitorial work plus specialty services like carpet cleaning, floor
              stripping and waxing, window cleaning, pressure washing, and periodic deep cleaning. Most facilities
              need both: routine janitorial upkeep to maintain the space day to day, and scheduled specialty
              cleaning to handle the tasks routine service doesn't cover.
            </p>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          12. WHY CHOOSE US
          ───────────────────────────────────────────────────────────────────── */}
      <section className="relative section-shell overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow-light">Why Seattle Businesses Choose Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Seattle Offices, Schools &amp; Facilities Choose Cleaning From The Heart
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                Consistency, accountability, and communication. Most cleaning vendors fail on at least one.
                We&apos;ve made all three non-negotiable, because Seattle businesses deserve better.
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
                <Link href="/contact#quote-form" className="cta-gold">Get a Free Quote</Link>
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
          13. RESULTS / PROOF
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <span className="eyebrow">Real Results</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  Commercial Cleaning Results From Real Seattle-Area Properties
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  A professionally maintained facility isn&apos;t just cleaner. It performs better. Staff operate
                  in a healthier environment, clients form stronger first impressions, and facilities hold
                  their condition significantly longer with proper professional care.
                </p>
                <ul className="mt-6 space-y-3">
                  {resultsBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                      <span className="text-sm leading-relaxed text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/gallery" className="cta-primary">View Our Work Results</Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {proofImages.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-2xl border border-brand-100 shadow-card">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={400}
                      className="aspect-square w-full object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <p className="border-t border-brand-100 bg-surface px-3 py-2 text-xs font-medium text-ink">
                      {image.caption}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center rounded-2xl border border-brand-100 bg-surface px-6 py-6 lg:px-8">
            <div>
              <p className="text-sm font-semibold text-ink">Our Service Promise</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                If any area doesn&apos;t meet the agreed scope, we return and correct it. Every time, no lengthy
                back-and-forth.
              </p>
            </div>
            <Link href="/gallery" className="cta-secondary">See More Results</Link>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          14. PRICING FACTORS
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface scroll-mt-24" id="pricing">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
              <DollarSign className="h-6 w-6 text-brand-700" aria-hidden />
            </div>
            <span className="eyebrow mt-5 inline-block">Pricing</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How Much Does Commercial Cleaning Cost in Seattle?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We don&apos;t publish flat commercial cleaning rates, because facilities vary too much for a single
              number to be accurate. Instead, pricing is based on your property&apos;s specifics.
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
            <p className="text-sm font-semibold text-ink">
              The most accurate way to price commercial cleaning is through a walkthrough and a written scope
              based on your facility.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">Get Pricing for Your Facility</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          15. SERVICE AREAS
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white scroll-mt-24" id="areas">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Seattle&apos;s Commercial Cleaning Partner</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Serving Businesses Across Seattle and the Greater Metro Area
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Cleaning From The Heart LLC provides commercial cleaning throughout Seattle and the surrounding
              metro area. Service availability can depend on the project, schedule, and cleaning scope, so if
              you&apos;re unsure whether we cover your address, reach out and we&apos;ll confirm.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">Check Availability in Your Area</Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-medium text-ink">
                <MapPin className="h-3 w-3 text-brand-600" aria-hidden />
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          16. FAQ
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Commercial Cleaning Questions From Seattle Businesses
              </h2>
              <p className="mt-4 text-base text-muted">
                Answers to what Seattle businesses and property managers ask us most before getting started.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5">
                <p className="text-sm font-semibold text-ink">Have a specific question?</p>
                <p className="mt-1 text-sm text-muted">
                  Call or message us and we&apos;ll answer anything specific to your property, facility, or
                  schedule, same day.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/contact#quote-form" className="cta-primary px-4 py-2 text-xs">Ask Us Directly</Link>
                  <Link href={siteConfig.phoneHref} className="cta-secondary px-4 py-2 text-xs">Call Now</Link>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq) => (
                <details key={faq.question} className="group overflow-hidden rounded-2xl border border-brand-100 bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink transition-colors hover:text-brand-700">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180" aria-hidden />
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
          17. FINAL CTA
          ───────────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5">
                  <Clock className="h-3.5 w-3.5 text-accent" aria-hidden />
                  <span className="text-xs font-semibold text-accent">Limited availability this month</span>
                </div>

                <p className="eyebrow-light">Get Reliable Commercial Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Get a Commercial Cleaning Plan Built for Your Facility
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us about your facility and priorities. We&apos;ll walk your property, confirm scope and
                  pricing, and send a written proposal within 24 hours. No vague estimates, no surprise charges,
                  no obligation.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {[
                    "Written quote within 24 hours",
                    "Flexible one-time or recurring service",
                    "30+ Years of Seattle cleaning experience"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CalendarCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
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

            <p className="relative mt-8 text-xs text-white/30">
              Serving Seattle, Bellevue, Renton, Kent, Tukwila, Tacoma &amp; surrounding areas.
            </p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialCleaningSchema) }}
      />
    </>
  );
}

// ─── Shared service card ────────────────────────────────────────────────────
function ServiceCard({ Icon, title, description, href, ctaLabel }: ServiceCardData) {
  return (
    <article className="card-hover flex h-full flex-col gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
        <Icon className="h-6 w-6 text-brand-700" aria-hidden />
      </div>
      <div className="flex-1">
        <h4 className="text-base font-semibold leading-snug">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      </div>
      <div className="border-t border-brand-50 pt-3">
        <Link href={href} className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900">
          {ctaLabel}
          <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
