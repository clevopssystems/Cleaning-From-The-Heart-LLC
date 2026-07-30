import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Armchair,
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Coffee,
  ConciergeBell,
  Croissant,
  DoorOpen,
  Handshake,
  Images,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Repeat,
  Sandwich,
  ShowerHead,
  Sparkles,
  Store,
  Sunrise,
  Users,
  UtensilsCrossed,
  Wine
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { siteConfig, serviceAreas } from "@/lib/site";

// Temporary stock photography, used to show the intended visual direction.
// Replace with original Cleaning From The Heart photography when available.
// Sources are recorded in docs/temporary-restaurant-image-sources.md.
const IMG = "/images/services/restaurant-cleaning";

const SITE_URL = "https://cleaningfromtheheartllc.com";

const PAGE_TITLE = "Restaurant Cleaning Services in Seattle | Cleaning From The Heart";
const PAGE_DESCRIPTION =
  "Restaurant cleaning in Seattle for dining rooms, entrances, bars, customer restrooms, and staff areas. Recurring janitorial plans or one-time service, scheduled around your hours.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/restaurant-cleaning"
  },
  keywords: [
    "restaurant cleaning services Seattle",
    "Seattle restaurant cleaning",
    "commercial restaurant cleaning",
    "restaurant janitorial services Seattle",
    "dining room cleaning Seattle",
    "front of house restaurant cleaning",
    "cafe and bar cleaning Seattle",
    "one-time restaurant cleaning Seattle"
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/services/restaurant-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Restaurant cleaning service in the Seattle area"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/services/hero/hero-cleaning-team.png"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Dining rooms, entrances, bars, and host stations",
  "Customer and staff restrooms in the agreed scope",
  "Staff areas, corridors, floors, and trash removal",
  "Kitchen work can be added to the same plan"
];

const trustStripItems = [
  { Icon: CalendarCheck, label: "Service between close and open" },
  { Icon: ClipboardList, label: "Written, room-by-room scope" },
  { Icon: MessageCircle, label: "Direct line to the owner" },
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" }
];

// What a guest actually notices when they walk in.
const guestImpressionPoints = [
  {
    Icon: DoorOpen,
    title: "The First Ten Feet",
    description:
      "Entry glass, door handles, the mat, and the host stand are read before anyone looks at a menu. They also take the most weather in a Seattle winter."
  },
  {
    Icon: Armchair,
    title: "The Table They Sit At",
    description:
      "Table bases, chair legs, booth sides, and the floor underneath are what a seated guest sees at eye level for the next ninety minutes."
  },
  {
    Icon: ShowerHead,
    title: "The Restroom",
    description:
      "The one room a guest visits alone, and the one they use to draw conclusions about the rest of the building. Condition here carries disproportionate weight."
  },
  {
    Icon: Sparkles,
    title: "The Details Behind the Detail",
    description:
      "Ledges, window sills, light switches, chair rails, and the strip of floor along the wall. Nobody lists them, but a room reads differently when they are handled."
  }
];

// ─── Scope of work, grouped by area of the restaurant ─────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Armchair",
    title: "Dining Room & Customer Seating",
    summary: "Tables, chairs, booth exteriors, accessible shelving & customer-facing surfaces.",
    intro:
      "The dining room is the largest single surface area in most restaurants and the one guests spend the longest looking at. Work here goes past wiping table tops. Bases, legs, and the floor line underneath are where a room starts looking tired. Tasks are performed according to the approved scope.",
    tasks: [
      "Table tops, edges, and table bases",
      "Chair seats, backs, legs, and rungs",
      "Booth exteriors and accessible side panels",
      "Accessible shelving, ledges, and dividers",
      "Customer-facing surfaces and condiment stations",
      "Spot cleaning of visible marks and spills"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Entrances, Lobby & Host Station",
    summary: "Entry doors, interior glass, push plates, waiting areas & host counters.",
    intro:
      "Entrances take the weather, the foot traffic, and the first impression all at once. In a Seattle winter the entry area collects rain, grit, and leaf debris faster than any other part of the floor plan, and it needs planned attention rather than an occasional pass.",
    tasks: [
      "Entry doors, frames, and kick plates",
      "Interior entry glass and door lites",
      "Push plates, handles, and pull bars",
      "Host stand, reception counter, and podium surfaces",
      "Waiting-area seating and accessible ledges",
      "Entry mats, walk-off areas, and lobby floors"
    ]
  },
  {
    iconName: "Wine",
    title: "Bar & Service Counters",
    summary: "Exterior bar surfaces, service counters, stools, floors & visible fixtures.",
    intro:
      "Bars stay busy after the kitchen has slowed and generate their own residue: sticky counter edges, floor rings under stools, and splash on the front of the service counter. Bar cleaning covers the customer-facing exterior; the beverage program's own equipment and product handling stay with your team.",
    tasks: [
      "Exterior bar surfaces and counter fronts",
      "Service counters and accessible back-bar faces",
      "Bar stools, rails, and footrests",
      "Bar floor areas, edges, and stool surrounds",
      "High-touch points and reachable fixtures",
      "Visible glass and shelving faces where included"
    ]
  },
  {
    iconName: "ShowerHead",
    title: "Customer & Staff Restrooms",
    summary: "Toilets, sinks, mirrors, fixtures, floors, trash & high-touch surfaces.",
    intro:
      "Restrooms fall behind faster than any other room in a restaurant, and they are the room a guest is most likely to mention afterward. They follow the same repeatable routine every visit rather than getting whatever time is left at the end.",
    tasks: [
      "Toilets, urinals, and sinks",
      "Faucets, mirrors, and fixtures",
      "Partitions, doors, handles, and push plates",
      "Floors, corners, and behind-fixture areas",
      "Trash removal and liner replacement",
      "Restocking dispensers where supplies and scope are agreed"
    ]
  },
  {
    iconName: "Coffee",
    title: "Staff Areas & Supporting Spaces",
    summary: "Break rooms, offices, hallways, staff restrooms & storage access paths.",
    intro:
      "The parts of the building guests never see still set the tone for the people working there. Break rooms, the manager's office, the corridor to the back door, and staff restrooms are written into the scope when you want them covered.",
    tasks: [
      "Break-room tables, counters, and seating",
      "Office desks and accessible surfaces",
      "Hallways, service corridors, and stairwells",
      "Staff restrooms on the same routine as customer restrooms",
      "Storage-area access paths and doorways",
      "Trash removal from staff and back-of-building areas"
    ]
  },
  {
    iconName: "Footprints",
    title: "Floor Care & High-Touch Surfaces",
    summary: "Sweeping, vacuuming, mopping, edges, touchpoints & interior glass.",
    intro:
      "Floors and touchpoints run through every room on this list, so they are handled as their own track rather than being split across areas. Dining-room floor edges and the line along the wall are where restaurants most often fall behind.",
    tasks: [
      "Sweeping and vacuuming across dining and entry areas",
      "Mopping hard floors, including edges and corners",
      "Spot attention on visible floor marks and spills",
      "Door handles, switches, rails, and shared touchpoints",
      "Interior glass, partitions, and customer-facing windows",
      "Trash and recycling removal from covered areas"
    ]
  }
];

// ─── Restaurant cleaning vs restaurant kitchen cleaning ───────────────────
const comparison = [
  {
    Icon: Store,
    label: "This page",
    title: "Restaurant Cleaning",
    description:
      "The whole facility, weighted toward the areas guests see and use. The default choice when you want one plan covering the building.",
    image: {
      src: `${IMG}/restaurant-front-of-house-bar.webp`,
      alt: "Restaurant front of house with a bar, service counter, stools and tiled floor",
      width: 1300,
      height: 813
    },
    items: [
      "Dining rooms and customer seating",
      "Entrances, lobbies, and host stations",
      "Bars and service counters",
      "Customer and staff restrooms",
      "Staff areas, offices, and corridors",
      "Floor care, trash removal, and interior glass",
      "Kitchen cleaning can be included in the scope"
    ],
    href: null,
    ctaLabel: null
  },
  {
    Icon: UtensilsCrossed,
    label: "Separate page",
    title: "Restaurant Kitchen Cleaning",
    description:
      "The back of house in detail. The right starting point when the kitchen is the pressure point and the dining room is already handled.",
    image: {
      src: `${IMG}/commercial-kitchen-comparison.webp`,
      alt: "Commercial kitchen service pass with stainless-steel surfaces and heat lamps",
      width: 1300,
      height: 813
    },
    items: [
      "Food-preparation areas and prep counters",
      "Backsplashes, sinks, and accessible fixtures",
      "Kitchen floors, edges, and corners",
      "Grease-prone areas and spot degreasing",
      "Equipment exteriors and control-area surfaces",
      "Reachable wall splash and high-touch points",
      "Dish, storage, and supporting back-of-house areas"
    ],
    href: "/services/restaurant-kitchen-cleaning",
    ctaLabel: "See kitchen cleaning in detail"
  }
];

// ─── Restaurant types ─────────────────────────────────────────────────────
const restaurantTypes = [
  {
    Icon: UtensilsCrossed,
    title: "Full-Service Restaurants",
    description:
      "Dining rooms with table service, a bar, customer restrooms, and staff areas that all need covering on the same overnight window."
  },
  {
    Icon: Sandwich,
    title: "Fast-Casual & Counter-Service",
    description:
      "High-turnover seating areas, self-serve stations, and entry zones that take heavy traffic through a long service day."
  },
  {
    Icon: Coffee,
    title: "Cafés & Coffee Shops",
    description:
      "Compact rooms where seating, counters, and the entry are all within a few steps of each other and show wear quickly."
  },
  {
    Icon: Wine,
    title: "Bars & Lounges",
    description:
      "Late closing times, a floor that takes more than most, and restrooms under sustained pressure through the evening."
  },
  {
    Icon: Croissant,
    title: "Bakeries & Small Food-Service Spaces",
    description:
      "Display cases, counter fronts, small seating areas, and entryways that open early and need service before opening."
  },
  {
    Icon: Building2,
    title: "Independent Restaurants & Groups",
    description:
      "Single-location owners and multi-site groups that want the same written standard applied consistently across each room."
  }
];

// ─── Scheduling ───────────────────────────────────────────────────────────
const scheduleOptions = [
  {
    Icon: Moon,
    title: "Overnight, After the Last Cover",
    description:
      "The room is worked once the last guest leaves and the floor has been cleared, so the dining room is ready before the opening shift arrives."
  },
  {
    Icon: Sunrise,
    title: "Before Doors Open",
    description:
      "Morning service for rooms that close late or run private events, timed so the last thing done to the space is the cleaning."
  },
  {
    Icon: Repeat,
    title: "Recurring Janitorial Plans",
    description:
      "Nightly through to bi-weekly, chosen from covers per week, seating count, and how quickly the floor and restrooms show it."
  },
  {
    Icon: CalendarCheck,
    title: "One-Time & Seasonal",
    description:
      "A single detailed cleaning ahead of reopening, a private booking, a change of operator, or the start of a recurring plan."
  }
];

const schedulingNotes = [
  "The window is set against your closing and opening routine and how the building is accessed.",
  "A defined break between lunch and dinner service can work as a cleaning window for some rooms.",
  "Patio season and the holiday stretch are not the same workload, and frequency can move with them.",
  "What we can cover is agreed in the written plan rather than promised as open availability."
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardList,
    title: "Scope Written Room by Room",
    description:
      "Dining room, entry, bar, restrooms, staff areas. Each one is listed with what is included before you commit, so nothing depends on a verbal understanding."
  },
  {
    Icon: Moon,
    title: "Worked Between Close and Open",
    description:
      "Your service team should not be finishing the floor at one in the morning. The crew takes the agreed window so closing duties end when service does."
  },
  {
    Icon: ConciergeBell,
    title: "Weighted to Guest-Facing Areas",
    description:
      "Entry glass, seating, restrooms, and floor edges are the details guests register first. They sit at the front of the priority list, not the end of the shift."
  },
  {
    Icon: Users,
    title: "A Team That Knows the Room",
    description:
      "Sending the same people means they learn your floor plan, your alarm and key routine, and which corners of the room you care about most."
  },
  {
    Icon: Handshake,
    title: "One Plan, Both Sides of the Building",
    description:
      "Front of house and back of house can run on a single written scope and one schedule, or stay separate if that suits how you operate."
  },
  {
    Icon: MessageCircle,
    title: "You Reach the Owner",
    description:
      "Joshua Alexander runs the company and answers for it. Added seating, a shifted closing time, or a room that needs more attention gets sorted in one conversation."
  }
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Tell Us About the Room",
    description:
      "Seating count, service style, how late you run, and the parts of the building your closing routine keeps having to skip."
  },
  {
    number: "02",
    title: "Restaurant Walkthrough",
    description:
      "We walk the building: dining room, entry, bar, restrooms, staff areas, corridors, floor types, and whether the kitchen should be part of the plan."
  },
  {
    number: "03",
    title: "Written Scope & Quote",
    description:
      "A room-by-room list of what is covered, how often, in what window, who holds keys, what is quoted separately, and what it costs."
  },
  {
    number: "04",
    title: "First Service",
    description:
      "The crew takes the agreed window and works the scope in order, so the opening shift walks into a room that is already done."
  },
  {
    number: "05",
    title: "Review & Adjust",
    description:
      "Seating changes, hours move, volume shifts. Scope and frequency get revisited when they do, and any change is confirmed in writing rather than assumed."
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What areas are included in restaurant cleaning?",
    answer:
      "A restaurant cleaning plan typically covers the dining room and customer seating, entrances and interior glass, the host station, bars and service counters, customer and staff restrooms, staff areas and back corridors, floor care throughout, high-touch surfaces, and trash removal. Which of those apply to your building is documented room by room in the written scope after a walkthrough, so the plan matches your layout rather than a template."
  },
  {
    question: "Can the kitchen be included in a restaurant cleaning plan?",
    answer:
      "Yes. Back-of-house work can be added to the same plan and run on the same schedule. Detailed kitchen work, covering food-preparation surfaces, kitchen floors and edges, grease-prone areas, and equipment exteriors, is handled more thoroughly on our restaurant kitchen cleaning page, and it is worth reading before deciding how much of the back of house belongs in your scope."
  },
  {
    question: "Do you clean dining rooms after the restaurant closes?",
    answer:
      "That is the usual arrangement. Service starts once the last guest has left and the room has been broken down, so the dining room, entry, and restrooms are reset before opening. Early-morning service before doors open is the other common option and suits restaurants that close late. The exact window is agreed during the walkthrough based on your closing routine and building access."
  },
  {
    question: "Can restrooms and staff areas be included?",
    answer:
      "Yes. Customer restrooms are part of most restaurant plans, and staff restrooms, break rooms, offices, hallways, and storage access paths can all be written into the scope. Restocking soap, paper, and liners can also be included where the supplies and responsibility for them are agreed in advance."
  },
  {
    question: "Do you offer recurring restaurant janitorial cleaning?",
    answer:
      "Yes. Recurring plans run from several nights a week for high-volume rooms to weekly or bi-weekly service for smaller operations, with a periodic detailed cleaning available on top of a lighter routine. Frequency is chosen from covers, seating count, floor type, and how quickly the room shows wear, and it can be adjusted as the season changes."
  },
  {
    question: "Can service be scheduled around our operating hours?",
    answer:
      "Yes. The schedule is built from your hours rather than ours. After close and before open are the two most common windows, and restaurants with a clear break between lunch and dinner sometimes use that gap instead. Scheduling is confirmed according to staffing, building access, and the agreed service plan, so what is committed to is what can actually be delivered."
  },
  {
    question: "Do you provide one-time restaurant cleaning?",
    answer:
      "Yes. One-time service works well before reopening, after a heavy seasonal stretch, ahead of a private booking, between operators, or as a reset before starting a recurring plan. It is scoped the same way as recurring work: a walkthrough first, then a written list of the rooms and tasks included."
  },
  {
    question: "How is restaurant cleaning priced?",
    answer:
      "Quotes are built per restaurant rather than from a published rate. The inputs are square footage and layout, seating count, restroom count, floor types, how often service runs, the length of the window available, the room's current condition, which areas are included, and whether the kitchen is part of the plan. The walkthrough turns those into a written scope and a number, with no obligation attached."
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Seattle and the greater Puget Sound area, including Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Bothell, Tacoma, and the communities around them. Coverage depends as much on your service window as on distance, so if you are on the edge of that range it is worth a call to check whether we can commit to the schedule you need."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Restaurant Kitchen Cleaning",
    description: "Back-of-house detail: prep areas, kitchen floors, grease-prone surfaces, equipment exteriors.",
    href: "/services/restaurant-kitchen-cleaning",
    ctaLabel: "See kitchen cleaning"
  },
  {
    title: "Commercial Cleaning",
    description: "The wider janitorial category this service sits under, for offices, retail, and facilities.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    description: "A one-time detailed reset for a room that needs more than a routine visit can deliver.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "Explore deep cleaning"
  },
  {
    title: "Carpet Cleaning",
    description: "Extraction cleaning for carpeted dining areas, private rooms, and entry runners.",
    href: "/services/carpet-cleaning",
    ctaLabel: "Explore carpet cleaning"
  },
  {
    title: "Window & Glass Cleaning",
    description: "Storefront glass, entry doors, and dining-room windows, inside and out.",
    href: "/services/window-glass-cleaning",
    ctaLabel: "View window & glass cleaning"
  },
  {
    title: "Pressure Washing",
    description: "Patios, entry walkways, and hard exterior surfaces around the building.",
    href: "/services/pressure-washing",
    ctaLabel: "See pressure washing"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// so it is intentionally not repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const restaurantCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/restaurant-cleaning#service`,
      name: "Restaurant Cleaning Services in Seattle",
      serviceType: "Restaurant Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area restaurant owners, general managers, café and bar operators, and multi-location restaurant groups"
      },
      description:
        "Whole-restaurant cleaning in Seattle covering dining rooms and customer seating, entrances and interior glass, host stations, bars and service counters, customer and staff restrooms, staff areas, floor care, and trash removal. Available as recurring restaurant janitorial service or one-time cleaning, with back-of-house kitchen work available within the agreed scope.",
      url: `${SITE_URL}/services/restaurant-cleaning`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Restaurant Cleaning Scope",
        itemListElement: scopeGroups.map((group) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${group.title} Cleaning`,
            description: group.summary
          }
        }))
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services/restaurant-cleaning#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function RestaurantCleaningPage() {
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
              { label: "Restaurant Cleaning" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Restaurant Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Restaurant Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning for the whole restaurant: dining rooms and seating, entrances and interior glass, host
                stations, bars and service counters, customer and staff restrooms, staff areas, floors, and trash
                removal. Recurring janitorial plans or one-time service, worked into the window between close and
                open on a scope written for your building.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Restaurant Walkthrough
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>

            <ServiceImagePanel
              src={`${IMG}/restaurant-cleaning-hero.webp`}
              alt="Clean restaurant dining room with set tables, chairs and a wood floor"
              width={1600}
              height={1200}
              sizes="(max-width: 1023px) 100vw, 46vw"
              aspect="aspect-[4/3]"
              variant="dark"
              priority
            />
          </div>

          {/* Problem panel — sits under the hero split so neither column gets crowded. */}
          <div className="card-dark mt-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <ConciergeBell className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <h2 className="mt-4 text-base font-semibold text-white">Where Restaurants Fall Behind</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  A closing crew that has been on the floor since eleven gets the table tops and the obvious floor.
                  What waits is chair legs, booth sides, entry glass, restroom detail, and the floor line along the
                  wall. Those are the parts guests notice from a seat.
                </p>
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
      <section className="section-shell-tight bg-white" aria-labelledby="restaurant-intro-heading">
        <Container>
          <ServiceEditorialSplit
            src={`${IMG}/restaurant-dining-room.webp`}
            alt="Restaurant dining area with tables, chairs and a clean hard floor"
            width={1400}
            height={1050}
            sizes="(max-width: 1023px) 100vw, 45vw"
            aspect="aspect-[4/3]"
            imagePosition="right"
            columns="lg:grid-cols-[1.05fr_0.95fr]"
          >
            <span className="eyebrow">What This Service Is</span>
            <h2
              id="restaurant-intro-heading"
              className="text-3xl font-bold leading-tight tracking-tight md:text-4xl"
            >
              What Restaurant Cleaning Covers
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Restaurant cleaning is scheduled cleaning of the restaurant as a facility: the dining room and
              customer seating, entrances and interior glass, the host station, bars and service counters,
              customer and staff restrooms, staff areas and corridors, floor care throughout, high-touch
              surfaces, and trash removal. Kitchen work can be included in the same plan when you want the whole
              building on one scope.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              It is built for restaurant owners and general managers who need the room reset properly between
              close and open, rather than relying on a service team that has already worked a full shift. A
              recurring plan holds the standard week to week; one-time cleaning resets a room that has drifted,
              whether that is before reopening, after a busy season, ahead of a handover, or before a recurring
              plan starts.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The final scope depends on the building, and that is why it starts with a walkthrough rather than a
              price list.
            </p>
          </ServiceEditorialSplit>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guestImpressionPoints.map(({ Icon, title, description }, index) => (
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Get a Restaurant Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ── SCOPE OF WORK ───────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What a Restaurant Cleaning Plan Includes"
            description="The groups below cover a typical restaurant floor plan. Tasks are performed according to the approved scope, so your plan may include every area here or a focused subset, decided at the walkthrough."
          />

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-5 py-2 md:px-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Restocking, specialty floor restoration, and window work outside routine interior glass are quoted
              separately from a recurring plan rather than assumed inside it.
            </p>
          </div>
        </Container>
      </section>

      {/* ── KITCHEN AVAILABILITY + COMPARISON ───────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="kitchen">
        <Container>
          <SectionHeading
            eyebrow="Front of House & Back of House"
            title="Restaurant Cleaning vs. Restaurant Kitchen Cleaning"
            description="Both services exist because they are different jobs. This page is the facility; the kitchen page is the back of house in detail. Many restaurants book both on one plan."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {comparison.map(({ Icon, label, title, description, image, items, href, ctaLabel }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 1023px) 100vw, 46vw"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-4 p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                        <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                        {label}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                    </div>
                    <ul className="mt-1 grid flex-1 gap-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-ink">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {href && ctaLabel ? (
                      <Link
                        href={href}
                        className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                      >
                        {ctaLabel}
                        <ArrowRight className="ml-1 h-4 w-4 shrink-0" aria-hidden />
                      </Link>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-6 rounded-3xl border border-brand-200 bg-brand-50 px-7 py-8 md:px-10 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div>
              <h3 className="text-base font-semibold text-ink">Adding the kitchen to a restaurant plan</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Back-of-house cleaning can be folded into a broader restaurant plan and run on the same schedule.
                The detailed grease-prone and food-preparation-area work, covering prep counters, kitchen floors
                and edges, equipment exteriors, and wall splash, is set out more thoroughly on the{" "}
                <Link
                  href="/services/restaurant-kitchen-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  restaurant kitchen cleaning page
                </Link>
                , and it is worth reading before you decide how much of the kitchen belongs in your scope.
              </p>
            </div>
            <Link href="/services/restaurant-kitchen-cleaning" className="cta-primary shrink-0">
              View Kitchen Cleaning
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── RESTAURANT TYPES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Who We Clean For"
            title="Restaurants This Service Is Built For"
            description="Plans can be customized for the operations below. Seating, hours, and floor plan differ enough between them that the scope is always written per restaurant."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {restaurantTypes.map(({ Icon, title, description }, index) => (
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

      {/* ── SCHEDULING ──────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <span className="eyebrow">Frequency & Timing</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                When Restaurant Cleaning Happens
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                A restaurant has a narrow gap between the last guest and the first delivery, and it looks
                different in every operation. Scheduling is confirmed according to staffing, building access,
                your operating hours, and the agreed service plan, so the window that gets committed to is one
                that can actually be worked.
              </p>
              <ul className="mt-6 grid gap-2.5">
                {schedulingNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {scheduleOptions.map(({ Icon, title, description }, index) => (
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
          </div>

          {/* Wide supporting photograph closes the section without leaving a column short. */}
          <ServiceImagePanel
            src={`${IMG}/restaurant-dining-area-cleaning.webp`}
            alt="Cleaning staff wiping tables and seating in a closed restaurant dining area"
            width={1600}
            height={900}
            sizes="(max-width: 1279px) 100vw, 1152px"
            aspect="aspect-[16/10] md:aspect-[16/9]"
            caption="Front-of-house cleaning can be planned around restaurant operating hours."
            className="mt-12"
          />
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
                <span className="eyebrow-light">Why Restaurants Work With Us</span>
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

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-10">
              <div className="flex flex-col items-start gap-1">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Restaurant Walkthrough
                </Link>
                <span className="pl-1 text-[11px] text-white/35">Takes 60 seconds · No obligation</span>
              </div>
              <Link href="/services/commercial-cleaning" className="cta-ghost">
                Explore Commercial Cleaning
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How Restaurant Cleaning Gets Set Up"
            description="From the first call to a restaurant on a steady routine. Everything that matters, from what is covered to how often and who has access, is settled in writing before the first visit."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Request a Restaurant Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Restaurant
            </Link>
          </div>
        </Container>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <ServiceEditorialSplit
            src={`${IMG}/restaurant-cafe-dining-area.webp`}
            alt="Café dining area with seating, a service counter and a tiled floor"
            width={1300}
            height={867}
            sizes="(max-width: 1023px) 100vw, 40vw"
            aspect="aspect-[3/2]"
            caption="Reference image showing the kind of room this service is built around — dining areas, counters, and floors each carry their own priority."
            imagePosition="left"
            columns="lg:grid-cols-[0.85fr_1fr]"
          >
            <div className="rounded-3xl border border-brand-100 bg-white px-7 py-9 md:px-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
                <Images className="h-7 w-7 text-brand-700" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                See Our Work Before You Book
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Every photo in the gallery is from a real Seattle-area job. Floor work, restored hard surfaces,
                and streak-free glass are the closest read available on the standard a dining room, entry, and
                restroom would be held to here.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/gallery" className="cta-secondary">
                  View the Results Gallery
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Restaurant Cleaning Questions</h2>
              <p className="mt-4 text-base text-muted">
                What owners and general managers ask us most before putting a restaurant on a cleaning plan.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Have a question about your restaurant?</p>
                <p className="mt-1 text-sm text-muted">
                  Send us your hours and seating count, tell us which rooms matter most, and we&apos;ll say
                  plainly what we can commit to.
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
          <SectionHeading eyebrow="Related Services" title="Services Restaurants Book Alongside Cleaning" />
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
                <p className="eyebrow-light">Restaurant Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Let&apos;s Walk Your Restaurant
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Nothing is committed until we have walked the building with you and talked through how you
                  operate: which rooms are in, how often the crew comes, what time they can be in the space,
                  whether the kitchen belongs in the plan, and what is better quoted on its own. Then it goes in
                  writing.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Scope written room by room", "Service between close and open", "Recurring or one-time"].map(
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
                    Request a Restaurant Walkthrough
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Takes 60 seconds · No obligation</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-ghost w-full justify-center">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Mon-Sat · 7 AM - 7 PM</span>
                </div>
              </div>
            </div>

            <p className="relative mt-8 text-xs text-white/30">{siteConfig.serviceAreaSummary}</p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantCleaningSchema) }}
      />
    </>
  );
}
