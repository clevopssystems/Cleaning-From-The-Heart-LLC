import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  CloudRain,
  DoorOpen,
  Droplets,
  Home,
  Images,
  MapPin,
  MessageCircle,
  Phone,
  Repeat,
  Sparkles,
  SunMedium,
  Wind
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const PAGE_PATH = "/services/window-cleaning";

const PAGE_TITLE = "Window Cleaning Services Seattle, WA | Cleaning From The Heart";
const PAGE_DESCRIPTION =
  "Professional window cleaning for Seattle homes, businesses, storefronts, offices, and managed properties. Compare residential and commercial service and request a free quote.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    "window cleaning Seattle",
    "window cleaning services Seattle",
    "professional window cleaners Seattle",
    "window washing Seattle",
    "window cleaning company Seattle",
    "interior and exterior window cleaning Seattle",
    "Seattle window cleaners",
    "local window cleaning company"
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/home/services/window-cleaning.jpg",
        alt: "Window cleaning service in the Seattle area"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/home/services/window-cleaning.jpg"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Interior glass, exterior glass, or both",
  "Homes, offices, storefronts, and managed properties",
  "Frames, sills, and glass edges detailed with the panes",
  "One-time seasonal service or a recurring schedule"
];

const trustStripItems = [
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" },
  { Icon: ClipboardList, label: "Scope and price agreed in writing" },
  { Icon: Repeat, label: "One-time or recurring service" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// What Seattle glass actually collects, used under the direct-answer intro.
const whatGlassCollects = [
  {
    Icon: CloudRain,
    title: "Rain Spotting & Runoff",
    description:
      "Nine months of Pacific Northwest weather leaves streaked runoff marks down exterior panes, worst on the weather-facing side of any building."
  },
  {
    Icon: Wind,
    title: "Pollen, Dust & Road Film",
    description:
      "Spring pollen and the grey film thrown up from nearby roads settle on glass and dull it long before anyone would call the window dirty."
  },
  {
    Icon: DoorOpen,
    title: "Handprints & Smudges",
    description:
      "Entry doors, sliders, and any pane at child or dog height take contact all day. Interior glass is nearly always about touch, not weather."
  },
  {
    Icon: Sparkles,
    title: "Cobwebs & Corner Debris",
    description:
      "Frames, sill corners, and the underside of window ledges collect webbing and grit that stays put no matter how well the glass itself is done."
  }
];

// ─── The two category paths this hub exists to route people into ──────────
const categoryPaths = [
  {
    Icon: Building2,
    eyebrow: "For businesses & property managers",
    title: "Commercial Window Cleaning",
    description:
      "Customer-facing and interior glass for offices, storefronts, retail spaces, restaurants, schools, places of worship, and managed properties. Built around recurring schedules, building access, and how the space is used during the day.",
    served: [
      "Offices, suites, and corporate buildings",
      "Storefronts, retail, and street-facing display glass",
      "Restaurants, cafés, and hospitality properties",
      "Schools, places of worship, and public buildings",
      "Apartment, condo, and managed property common areas"
    ],
    href: "/services/commercial-window-cleaning",
    ctaLabel: "Explore Commercial Window Cleaning",
    image: {
      src: "/images/gallery/gallery-06.jpeg",
      alt: "Water-fed pole and filtered-water system set up beside a multi-pane commercial window",
      width: 1320,
      height: 1744
    }
  },
  {
    Icon: Home,
    eyebrow: "For homeowners & renters",
    title: "Residential Window Cleaning",
    description:
      "House glass inside, outside, or both, including patio doors, sliders, and the upper-floor panes most households skip. Booked as a one-time seasonal clean or on a repeating schedule that fits how the house is used.",
    served: [
      "Single-family houses and multi-story homes",
      "Townhomes and condominiums",
      "Apartments and rental properties",
      "Homes being prepared for sale or listing photos",
      "Move-in and move-out properties"
    ],
    href: "/services/residential-window-cleaning",
    ctaLabel: "Explore Residential Window Cleaning",
    image: {
      src: "/images/gallery/gallery-09.jpeg",
      alt: "Technician cleaning upper-floor exterior windows at a Seattle-area home using an extension pole",
      width: 1320,
      height: 2251
    }
  }
];

// ─── Standard scope vs optional work ──────────────────────────────────────
const standardScope = [
  "Interior glass on the windows in the agreed scope",
  "Exterior glass that can be reached safely from the ground or a ladder",
  "Entry-door glass, sidelights, and door lites",
  "Patio-door and slider glass",
  "Interior glass partitions and office panels",
  "A wipe of the accessible frames, sills, and glass edges",
  "Cobweb clearing around reachable exterior window areas"
];

const optionalScope = [
  "Screen removal, washing, and refitting",
  "Detailed track cleaning beyond a routine wipe",
  "French-door and divided-lite panes, which are priced per pane",
  "Interior glass railings, mirrors, and display glass",
  "Skylights and other overhead glass, subject to a look at the property",
  "Hard-water and mineral spotting, assessed on site before anything is promised"
];

// ─── Practical reasons people book ────────────────────────────────────────
const bookingReasons = [
  {
    Icon: SunMedium,
    title: "The Seasonal Reset",
    description:
      "Most Seattle properties get cleaned in spring, once the worst of the winter runoff has stopped, and again in early autumn before the rain returns. Twice a year is the pattern we see most often on both houses and low-rise commercial buildings. A single spring clean is a perfectly reasonable place to start if you have never had it done professionally."
  },
  {
    Icon: CalendarCheck,
    title: "Before Something Happens in the Space",
    description:
      "A listing photo shoot, an open house, a family event, a board meeting, an inspection, a grand reopening. Glass is one of the few things in a building that visibly improves within a single visit, which is why it tends to get booked in the last two weeks before a date that matters."
  },
  {
    Icon: DoorOpen,
    title: "Move-In and Move-Out",
    description:
      "Vacant is the easiest a property will ever be to clean, and interior glass, tracks, and sills are on almost every turnover checklist. Window work slots naturally alongside a move-in or move-out clean, and doing both in one visit avoids paying twice for the same trip."
  },
  {
    Icon: Building2,
    title: "Routine Storefront and Office Upkeep",
    description:
      "Businesses with glass the public touches rarely wait for a season. Entry doors and display windows are usually on a weekly, biweekly, or monthly cycle, because the standard slips within days rather than months once foot traffic is involved."
  },
  {
    Icon: Droplets,
    title: "After Outdoor Work Nearby",
    description:
      "Pressure washing, gutter work, roof work, landscaping, or a renovation all end with something on the glass. Window cleaning is normally the last thing scheduled on a property, after the messy work is finished, rather than the first."
  },
  {
    Icon: Repeat,
    title: "It Has Simply Been Too Long",
    description:
      "Plenty of calls start with someone admitting they cannot remember the last time. That is a normal starting point, not a problem. Glass left for several years takes longer and sometimes shows spotting that will not fully clear, and we would rather say so before we quote than after."
  }
];

// ─── Interior / exterior / both ───────────────────────────────────────────
const serviceModes = [
  {
    Icon: Home,
    title: "Interior Only",
    summary: "Everything you see from inside the room.",
    description:
      "Interior work is about contact rather than weather: fingerprints, palm marks on sliders, cooking film in a kitchen, dust settled along the sill. It is the cheaper half of the job on most properties, it needs someone to let us in, and it is the usual choice for offices, rentals between tenants, and homes where only the inside has gone.",
    points: ["Fingerprints, smudges, and everyday film", "Interior sills, frames, and glass edges", "Patio doors, sliders, and interior partitions"]
  },
  {
    Icon: CloudRain,
    title: "Exterior Only",
    summary: "The weather side, including panes you cannot reach.",
    description:
      "Exterior glass carries rain runoff, pollen, road film, and cobwebs. It does not usually need anyone inside the building, so it is the easier half to schedule. Reachable upper-floor panes are cleaned from the ground with a water-fed pole where the property allows it, and anything genuinely out of safe reach is identified before we quote rather than after.",
    points: ["Rain spotting, pollen, and road film", "Cobwebs around reachable window areas", "Ground-level and reachable upper-floor panes"]
  },
  {
    Icon: Sparkles,
    title: "Inside and Out",
    summary: "The complete job, and the one most people mean.",
    description:
      "Doing both sides in one visit is the only way to know which side a mark was on, and it is what most homeowners want from a seasonal clean. It costs more than either half and takes longer, but it is a single trip, a single access arrangement, and a result that reads as finished from both directions.",
    points: ["Both faces of every pane in scope", "Frames, sills, and edges detailed once", "One visit, one access arrangement"]
  }
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us the property type, roughly how many windows, and whether you want interior, exterior, or both. A photo of the building helps more than an exact count."
  },
  {
    number: "02",
    title: "Confirm Details and Scope",
    description:
      "We check access, reachability, storey height, and any optional work such as screens or tracks, then set out what is included and what is quoted separately."
  },
  {
    number: "03",
    title: "Schedule the Service",
    description:
      "A date and arrival window are agreed, along with who lets us in, where we can park, and whether the work happens during or outside operating hours."
  },
  {
    number: "04",
    title: "Clean the Glass",
    description:
      "Panes are cleaned inside, outside, or both, with the accessible frames, sills, and edges wiped as part of the same pass rather than left for a second visit."
  },
  {
    number: "05",
    title: "Final Check",
    description:
      "We walk the glass before leaving, in daylight where possible, and correct what needs correcting on the spot rather than asking you to call about it later."
  }
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: MapPin,
    title: "A Local Seattle Company",
    description:
      "Locally owned and family-operated, not a national brand with a Seattle phone number. The person who quotes your property is the person accountable for the work on it."
  },
  {
    Icon: Building2,
    title: "Both Sides of the Market",
    description:
      "We clean glass for offices, storefronts, schools, and managed properties as well as for houses and condos, which is why the two categories have separate pages instead of one generic quote."
  },
  {
    Icon: ClipboardList,
    title: "Scope Agreed Before the Visit",
    description:
      "What is included, what is optional, and what is priced separately are settled in writing first. Screens, deep track work, and specialty glass are named rather than assumed."
  },
  {
    Icon: Sparkles,
    title: "Frames and Sills, Not Just Panes",
    description:
      "A clean pane sitting in a dirty frame still reads as a dirty window. Accessible frames, sills, and glass edges are part of the standard pass on every job."
  },
  {
    Icon: CalendarCheck,
    title: "Flexible Scheduling",
    description:
      "Monday to Saturday, 7 AM to 7 PM, with commercial work arranged around opening hours where the site allows it. One-time and recurring plans both available."
  },
  {
    Icon: Repeat,
    title: "One Provider for the Property",
    description:
      "Window cleaning sits alongside pressure washing, carpet cleaning, floor care, and full commercial or residential cleaning, so one visit can cover more than the glass."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Commercial Cleaning",
    description: "Recurring janitorial service for offices, retail spaces, and commercial facilities.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Residential Cleaning",
    description: "Whole-home cleaning for Seattle-area houses, apartments, and rental properties.",
    href: "/services/residential-cleaning",
    ctaLabel: "View residential cleaning"
  },
  {
    title: "Deep Cleaning",
    description: "A detailed reset for homes and facilities, with separate residential and commercial plans.",
    href: "/services/deep-cleaning",
    ctaLabel: "Compare deep cleaning"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Turnover cleaning for rentals, condos, and commercial units, where interior glass matters most.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "See turnover cleaning"
  },
  {
    title: "Pressure Washing",
    description: "Siding, walkways, patios, and hard exterior surfaces, usually done before the glass.",
    href: "/services/pressure-washing",
    ctaLabel: "Explore pressure washing"
  },
  {
    title: "Solar Panel Cleaning",
    description: "Panel surfaces cleared of dust, pollen, and debris, often booked on the same visit as windows.",
    href: "/services/solar-panel-cleaning",
    ctaLabel: "See solar panel cleaning"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "Do you clean both the inside and the outside of windows?",
    answer:
      "Yes. You can book interior only, exterior only, or both. Exterior-only work is the simplest to schedule because nobody needs to be inside the building, while interior work needs access to each room. Most homeowners booking a seasonal clean choose both, because it is the only way to be certain which side a mark was on. Which option suits you is one of the first things we confirm when quoting."
  },
  {
    question: "Do you offer both residential and commercial window cleaning?",
    answer:
      "Yes, and they are quoted differently. Residential window cleaning covers houses, condos, townhomes, and apartments, usually as a seasonal or twice-yearly job. Commercial window cleaning covers offices, storefronts, retail, restaurants, schools, and managed properties, usually on a repeating schedule built around foot traffic and opening hours. Each has its own page with the detail specific to it."
  },
  {
    question: "Are frames, sills, and glass edges included?",
    answer:
      "A wipe of the accessible frames, sills, and glass edges is part of the standard pass, because a clean pane in a dirty frame still looks like a dirty window. What is separate is detailed restoration work: sills with paint, adhesive, construction residue, or mineral damage need more than a wipe, and we will tell you that at the quote stage rather than after the visit."
  },
  {
    question: "Do you clean window screens and window tracks?",
    answer:
      "Screen washing and detailed track cleaning are treated as optional add-ons rather than automatic inclusions, and they need to be confirmed before the visit so the time is allowed for. Tracks get a routine wipe as part of interior work where they are accessible; a deep track clean on a house full of sliders is a different job. Damaged or brittle screens are pointed out rather than handled, since we do not repair screens."
  },
  {
    question: "Can I schedule recurring window cleaning?",
    answer:
      "Yes. Weekly, biweekly, monthly, quarterly, and seasonal schedules are all workable, and the right frequency depends on the property rather than a package. Storefront and entry glass with public traffic generally needs the shortest cycle. Offices and managed common areas usually sit on a monthly or quarterly rhythm. Houses are most often twice a year. Recurring service can be adjusted or paused as the seasons change."
  },
  {
    question: "Do you clean apartment and condominium windows?",
    answer:
      "Yes, within what can be reached safely. Individual unit interiors, ground-floor and low-rise exterior glass, lobby glass, and common-area windows are all normal work. What is not offered is high-rise exterior work requiring rope access, suspended platforms, or boom lifts. If your building needs that, we will say so at the quote stage instead of quoting for something we do not do."
  },
  {
    question: "How often should windows be professionally cleaned?",
    answer:
      "For a Seattle home, twice a year is the common pattern: once in spring after the winter runoff, once in early autumn before the rain sets in. Once a year is enough for sheltered properties or where budget is the deciding factor. Commercial glass with public contact needs far more, often weekly or monthly. Exposure matters more than the calendar, so a waterfront or roadside property will always need it sooner than a sheltered one."
  },
  {
    question: "Do you provide window cleaning throughout Seattle?",
    answer:
      "We serve Seattle and the surrounding Puget Sound area, including Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Bothell, Tacoma, and the communities around them. Availability depends on the location, property type, access, and the scope required, so if you are toward the edge of that range it is worth a quick call to confirm before planning around a date."
  },
  {
    question: "How is window cleaning priced?",
    answer:
      "Quotes are built per property rather than from a published rate. The main factors are the number of panes, how many storeys they sit on, whether the work is interior, exterior, or both, how the glass is reached, the current condition, any optional screen or track work, and whether the service is one-time or recurring. Estimates are free and carry no obligation."
  },
  {
    question: "Does someone need to be there during the service?",
    answer:
      "For interior work, yes, or at least someone to provide access at the start. Exterior work usually only needs gate access, a water source, and somewhere to park, so many customers are not home for it. For commercial sites the arrangement is agreed in advance, whether that means a key, a code, a staff member on site, or a set arrival window before opening."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// so it is intentionally not repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const windowCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      about: { "@id": `${SITE_URL}${PAGE_PATH}#service` },
      isPartOf: { "@id": `${SITE_URL}/#business` }
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PAGE_PATH}#service`,
      name: "Window Cleaning Services in Seattle",
      serviceType: "Window Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area homeowners, renters, business owners, office managers, facility managers, and property managers"
      },
      description:
        "Professional window cleaning in Seattle covering interior glass, exterior glass, entry and patio-door glass, interior partitions, and a detail pass on accessible frames, sills, and glass edges. Available for homes, offices, storefronts, schools, and managed properties as one-time or recurring service.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Window Cleaning Options",
        itemListElement: categoryPaths.map((path) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: path.title,
            description: path.description,
            url: `${SITE_URL}${path.href}`
          }
        }))
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}${PAGE_PATH}#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function WindowCleaningPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Window Cleaning", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Window Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Professional Window Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Interior and exterior window cleaning for homes, offices, storefronts, and managed properties
                across Seattle and the surrounding Puget Sound area. Choose inside, outside, or both, book it as a
                seasonal one-time clean or on a repeating schedule, and get the scope and price in writing before
                anything is booked.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Window Cleaning Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Locally owned and family-operated, with 30+ years of cleaning experience in the Seattle area.
              </p>
            </div>

            <ServiceImagePanel
              src="/home/services/window-cleaning.jpg"
              alt="Squeegee drawing a clean line down a soapy window pane"
              width={4928}
              height={3264}
              sizes="(max-width: 1023px) 100vw, 46vw"
              aspect="aspect-[4/3]"
              variant="dark"
              priority
            />
          </div>

          {/* Category routing panel, the main job of this hub page. */}
          <div className="card-dark mt-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Sparkles className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <h2 className="mt-4 text-base font-semibold text-white">Start With the Right Service</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Business glass and house glass are different jobs with different access, scheduling, and
                  pricing, so each has its own page. Pick the one that matches your property and you will land on
                  the detail that actually applies to it.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href="/services/commercial-window-cleaning" className="cta-gold px-4 py-2.5 text-xs">
                    Commercial
                  </Link>
                  <Link href="/services/residential-window-cleaning" className="cta-ghost px-4 py-2.5 text-xs">
                    Residential
                  </Link>
                </div>
              </div>
              <ul className="grid gap-2.5 border-t border-white/10 pt-5 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
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

      {/* ── TRUST STRIP ─────────────────────────────────────────────────── */}
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
      <section className="section-shell-tight bg-white" aria-labelledby="window-intro-heading">
        <Container>
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">What This Service Is</span>
            <h2 id="window-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              What Professional Window Cleaning Covers
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Cleaning From The Heart LLC cleans windows for homes, offices, storefronts, schools, and managed
              properties across Seattle and the surrounding area. The work covers interior glass, exterior glass,
              or both, along with a detail pass over the accessible frames, sills, and edges that surround each
              pane.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Most jobs take one of two shapes. A business needs its customer-facing glass held to a standard on a
              repeating schedule. A homeowner wants the whole house done once or twice a year, inside and out,
              including the upper-floor panes nobody wants to climb to. Those are genuinely different jobs, which
              is why each has its own page rather than sharing one generic quote.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every estimate starts from the same few questions: what kind of property, roughly how many windows,
              inside or outside or both, and how the glass is reached. There is no published rate card, because a
              two-storey house and a ground-floor storefront are not the same piece of work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatGlassCollects.map(({ Icon, title, description }, index) => (
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

      {/* ── COMMERCIAL / RESIDENTIAL CATEGORY CARDS ─────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="choose">
        <Container>
          <SectionHeading
            center
            eyebrow="Choose Your Service"
            title="Commercial or Residential Window Cleaning"
            description="The two paths below are where the real detail lives, what is included, how it is scheduled, and how each is priced. Pick the one that matches your property."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {categoryPaths.map(({ Icon, eyebrow, title, description, served, href, ctaLabel, image }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 1023px) 100vw, 46vw"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                    style={{ objectPosition: "50% 45%" }}
                  />
                  <div className="flex flex-1 flex-col gap-5 p-7 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                        <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                        {eyebrow}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-ink">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                    </div>
                    <ul className="grid flex-1 gap-2">
                      {served.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={href} className="cta-primary w-full justify-center">
                      {ctaLabel}
                      <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Not sure which one applies? A mixed-use building, a live-work unit, or a rental you own but do not
            live in can sit either side of the line. Call and describe it, and we will point you at the right
            one.
          </p>
        </Container>
      </section>

      {/* ── STANDARD SCOPE VS OPTIONAL ──────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            eyebrow="Scope of Work"
            title="What Is Standard and What Is Optional"
            description="Window cleaning quotes go wrong when the extras were assumed rather than agreed. Here is the honest split between what comes as standard and what needs to be confirmed and priced before the visit."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <CheckCircle2 className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">Standard on a window cleaning visit</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Included on the windows named in your scope, on whichever faces you have booked.
                </p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {standardScope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <ClipboardList className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">Optional, confirmed before booking</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Real work we can often do, but never assumed inside a standard quote. Ask and we will price it.
                </p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {optionalScope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 rounded-3xl border border-brand-100 bg-surface px-7 py-7 md:px-10">
            <h3 className="text-base font-semibold text-ink">What we do not offer</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We do not provide high-rise window cleaning, rope-access or bosun-chair work, suspended
              scaffolding, or large boom-lift operations. Our window work is ground-level, ladder-height, and
              water-fed-pole reach on low-rise buildings and houses. Glass restoration, grinding or polishing out
              scratches and etched mineral damage, is a specialist trade and is not part of this service either.
              If your building needs any of that, we will tell you at the quote stage rather than take the job.
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHEN PEOPLE BOOK ────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Timing"
            title="When Seattle Customers Book Window Cleaning"
            description="Six patterns account for most of the calls we take. Recognising which one you are in usually answers the question of how soon to book and how often to repeat it."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {bookingReasons.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="card flex h-full gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Request a Window Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ── INTERIOR / EXTERIOR / BOTH ──────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="inside-outside">
        <Container>
          <SectionHeading
            eyebrow="Interior, Exterior, or Both"
            title="Which Faces of the Glass You Actually Need Done"
            description="This is the single biggest factor in what a window cleaning job costs and how long it takes, and it is worth deciding before you ask anyone for a price."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {serviceModes.map(({ Icon, title, summary, description, points }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className="card flex h-full flex-col gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-700">{summary}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                  <ul className="mt-auto grid gap-2 border-t border-brand-100 pt-4">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-brand-100 bg-surface px-7 py-7 md:px-10">
            <h3 className="text-base font-semibold text-ink">A note on what glass will and will not do</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Cleaning removes dirt, film, smudges, and surface residue. It does not remove damage. Glass that has
              spent years under a sprinkler head, sat behind a leaking gutter, or been etched by hard water can
              come up clean and still hold a visible haze or spotting, and scratches from construction work or a
              previous scraper are permanent. Where we can see that in advance we will say so before quoting; where
              it only shows once the dirt is off, we will tell you what it is rather than keep scrubbing at it.
            </p>
          </div>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Window Cleaning Process"
            description="Five steps from first contact to finished glass. Nothing is committed until the scope, the access arrangement, and the price are agreed."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.07}>
                <article className="card flex h-full flex-col gap-3 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <span className="text-sm font-bold text-brand-700">{step.number}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="relative section-shell overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div
          className="absolute -right-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl"
          aria-hidden
        />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow-light">Why Work With Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Choose Cleaning From The Heart
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                Locally owned and family-operated, not a franchise with a Seattle phone number.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <div className="card-dark-hover flex h-full flex-col gap-4">
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

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-10">
              <div className="flex flex-col items-start gap-1">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Window Cleaning Quote
                </Link>
                <span className="pl-1 text-[11px] text-white/35">Takes 60 seconds · No obligation</span>
              </div>
              <Link href="/gallery" className="cta-ghost">
                See Window Cleaning Results
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <span className="eyebrow">Where We Work</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Window Cleaning Across Seattle and the Surrounding Area
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                We are based in Renton and work throughout Seattle and the greater Puget Sound area. Weather
                exposure varies enormously across the region, a waterfront property in Shoreline and a sheltered
                inland street in Kent will not need the same schedule, and that shows up in how often glass
                actually needs attention.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Availability depends on your location, the property type, how the glass is accessed, and the scope
                required, so coverage is confirmed when we quote rather than assumed from a map. Commercial sites
                near the edge of the range are worth a call before you plan around a date.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Check Availability for Your Address
                </Link>
                <Link href="/industries-we-serve" className="cta-secondary">
                  Industries We Serve
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-surface p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Areas we regularly serve</h3>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-100 pt-5 text-xs leading-relaxed text-muted">
                {siteConfig.serviceAreaSummary}. Business hours {siteConfig.businessHours}.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-white px-7 py-9 md:px-12 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
                  <Images className="h-7 w-7 text-brand-700" aria-hidden />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  See the Glass Before You Book
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  The Results gallery has a window cleaning filter, and every photo under it is from a real
                  Seattle-area job, houses, waterfront glass, and commercial panes, with the equipment that was
                  actually used on site. It is the most honest read available on the standard your property would
                  be held to.
                </p>
              </div>
              <Link href="/gallery" className="cta-secondary shrink-0">
                View the Results Gallery
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Window Cleaning Questions</h2>
              <p className="mt-4 text-base text-muted">
                The questions homeowners and business owners ask most before booking glass work in Seattle.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Question about your own property?</p>
                <p className="mt-1 text-sm text-muted">
                  Send us the property type and a rough window count, and we&apos;ll tell you plainly what we can
                  and cannot reach.
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
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-brand-100 bg-surface"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">
                    <span>{faq.question}</span>
                    <ChevronDown
                      className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="border-t border-brand-100 bg-white px-5 py-4">
                    <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading eyebrow="Related Services" title="Services Booked Alongside Window Cleaning" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow-light">Window Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Get a Quote for Your Glass
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us the property type, roughly how many windows, and whether you want inside, outside, or
                  both. We will confirm what can be reached, what is optional, and what it costs, in writing,
                  with no obligation attached.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/services/commercial-window-cleaning"
                    className="inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-white"
                  >
                    I run a business or manage a property
                    <ArrowRight className="ml-1.5 h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                  <Link
                    href="/services/residential-window-cleaning"
                    className="inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-white sm:ml-8"
                  >
                    I need my home&apos;s windows done
                    <ArrowRight className="ml-1.5 h-4 w-4 shrink-0" aria-hidden />
                  </Link>
                </div>
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
                  <span className="pl-1 text-[11px] text-white/40">{siteConfig.businessHours}</span>
                </div>
              </div>
            </div>

            <p className="relative mt-8 text-xs text-white/30">{siteConfig.serviceAreaSummary}</p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(windowCleaningSchema) }}
      />
    </>
  );
}
