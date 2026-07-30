import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  ClipboardList,
  Clock,
  Coffee,
  Croissant,
  Flame,
  Footprints,
  Images,
  Layers,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Repeat,
  Ruler,
  Sandwich,
  ShieldAlert,
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
const IMG = "/images/services/restaurant-kitchen-cleaning";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

const PAGE_TITLE = "Restaurant Kitchen Cleaning Seattle | Cleaning From The Heart";
const PAGE_DESCRIPTION =
  "Commercial kitchen cleaning in Seattle for food-preparation surfaces, kitchen floors, grease-prone areas, and equipment exteriors. Recurring or one-time service, scheduled after hours.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/restaurant-kitchen-cleaning"
  },
  keywords: [
    "restaurant kitchen cleaning services Seattle",
    "commercial kitchen cleaning Seattle",
    "Seattle restaurant kitchen cleaning",
    "commercial kitchen floor cleaning",
    "food preparation area cleaning Seattle",
    "recurring restaurant kitchen cleaning",
    "after hours kitchen cleaning Seattle",
    "grease-prone kitchen cleaning"
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/services/restaurant-kitchen-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Commercial kitchen cleaning in the Seattle area"
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
  "Prep surfaces, sinks, floors, and equipment exteriors",
  "Grease-prone areas, floor edges, and splash zones",
  "After-hours, overnight, or pre-open service windows",
  "Recurring, periodic, or one-time kitchen cleaning"
];

const trustStripItems = [
  { Icon: Moon, label: "Cleaning after service ends" },
  { Icon: ClipboardList, label: "Written, kitchen-specific scope" },
  { Icon: MessageCircle, label: "Direct line to the owner" },
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" }
];

// What actually decides the scope of a kitchen quote.
const scopeFactors = [
  "Kitchen square footage",
  "Line & prep layout",
  "Equipment on site",
  "Cleaning frequency",
  "Operating schedule",
  "Current buildup level",
  "Priority areas",
  "What is safely accessible",
  "Floor & wall surfaces",
  "Dish & storage areas",
  "Add-ons selected",
  "Access & closing procedures"
];

// ─── Scope of work, grouped by area of the kitchen ────────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Utensils",
    title: "Food-Preparation Surfaces",
    summary: "Prep counters, backsplashes, sinks, faucets, accessible fixtures & handles.",
    intro:
      "The line and prep area carry the most repeated contact in the building. Work here concentrates on the surfaces a crew touches every shift and the splash areas immediately behind them. Tasks are performed according to the approved scope, and your kitchen staff keep responsibility for food-contact sanitizing during service.",
    tasks: [
      "Accessible prep counters and work surfaces",
      "Backsplashes and adjacent splash areas",
      "Non-food-contact exterior surfaces",
      "Sinks, faucets, and drain surrounds",
      "Accessible fixtures and reachable shelving",
      "Handles, edges, and high-touch points"
    ]
  },
  {
    iconName: "Footprints",
    title: "Kitchen Floors & Grease-Prone Areas",
    summary: "Sweeping, mopping, spot degreasing, edges, corners & workstation surrounds.",
    intro:
      "Kitchen floors are where the shift ends up. Grease travels from the cook line outward, and the places that get missed first are the edges, the corners, and the strip behind the line where a mop head does not reach on a rushed close.",
    tasks: [
      "Sweeping or vacuuming loose debris",
      "Mopping with attention to grout lines and drains",
      "Spot degreasing of grease-prone floor areas",
      "Floor edges, corners, and baseboard lines",
      "Accessible areas around and between workstations",
      "Spill, food-debris, and under-mat attention",
      "Areas beneath movable equipment where safe and agreed"
    ]
  },
  {
    iconName: "Refrigerator",
    title: "Equipment Exteriors",
    summary: "Reachable appliance sides, stainless detailing, handles & control-area exteriors.",
    intro:
      "Equipment is cleaned from the outside in. Reachable exterior panels, sides, and handles are covered in routine service; anything that requires moving heavy equipment, breaking down units, or opening interiors is handled only when it has been prearranged and written into the scope.",
    tasks: [
      "Exterior surfaces of refrigerators, freezers, and ovens",
      "Reachable equipment sides and front panels",
      "Prep-equipment exteriors and stands",
      "Handles, latches, and pull points",
      "Control-area exteriors and reachable trim",
      "Stainless-steel exterior detailing where appropriate"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Walls, Doors & High-Touch Points",
    summary: "Reachable wall splash, doors, push plates, switches & entry points.",
    intro:
      "Wall film is the part of a kitchen most people stop noticing. Reachable splash areas behind the line and around sinks, plus the doors and switches the crew hits with full hands all night, are cleaned on the routine schedule rather than saved for a deep clean.",
    tasks: [
      "Reachable wall splash areas behind the line and sinks",
      "Doors, frames, and kick plates",
      "Push plates, handles, and pull bars",
      "Light switches and reachable control plates",
      "Walk-in and storage entry points",
      "Accessible trim, ledges, and corner guards"
    ]
  },
  {
    iconName: "Warehouse",
    title: "Dish, Storage & Supporting Back-of-House Areas",
    summary: "Dish pits, dry-storage access, staff areas, service corridors & trash points.",
    intro:
      "A kitchen does not end at the pass. The dish area, the walk-in approach, and the corridor to the back door collect their own residue, and they are written into the scope when you want them covered.",
    tasks: [
      "Dishwashing-area floors, surrounds, and splash areas",
      "Dry-storage access paths and accessible shelving faces",
      "Staff areas and break rooms when included",
      "Restrooms when included in the written scope",
      "Service corridors and back-door approaches",
      "Trash-area touchpoints, lids, and surrounds"
    ]
  }
];

// ─── Standard scope vs. quoted add-ons ────────────────────────────────────
const serviceTiers = [
  {
    Icon: Repeat,
    label: "Routine scope",
    title: "Standard Kitchen Cleaning",
    description:
      "The work that repeats on every visit, sized to your frequency and the areas listed in your written scope.",
    items: [
      "Prep surfaces, sinks, and accessible fixtures",
      "Kitchen floors, edges, corners, and spot degreasing",
      "Equipment exteriors and reachable panels",
      "Reachable wall splash, doors, and high-touch points",
      "Trash removal and liner replacement in covered areas",
      "Dish-area and supporting spaces when included"
    ]
  },
  {
    Icon: Layers,
    label: "Available when quoted",
    title: "Optional Detailed Add-Ons",
    description:
      "Detail work that needs extra time, cooled equipment, or prearranged access. Each is available when quoted and included in the written scope, not assumed.",
    items: [
      "Interior oven, refrigerator, and freezer cleaning",
      "Interior cabinet and drawer cleaning",
      "Detailed floor degreasing and machine floor scrubbing",
      "Detailed wall washing beyond routine splash areas",
      "Interior and exterior window cleaning",
      "Pressure washing of exterior service areas",
      "Cleaning beneath heavy equipment when safely accessible and prearranged"
    ]
  }
];

// ─── Kitchen types ────────────────────────────────────────────────────────
const kitchenTypes = [
  {
    Icon: UtensilsCrossed,
    title: "Full-Service Restaurants",
    description:
      "A working line, prep area, dish pit, and walk-in approach, cleaned in the window between last table and first delivery."
  },
  {
    Icon: Sandwich,
    title: "Fast-Casual & Counter-Service",
    description:
      "Compact kitchens where the same surfaces turn over constantly and floor edges around the assembly line take the most residue."
  },
  {
    Icon: Coffee,
    title: "Cafés & Coffee Shops",
    description:
      "Espresso stations, back-bar surfaces, small prep areas, and the sticky splash zones that come with syrup and milk."
  },
  {
    Icon: Croissant,
    title: "Bakeries & Pastry Kitchens",
    description:
      "Flour-heavy environments where dust settles on ledges and equipment exteriors well beyond the mixing area."
  },
  {
    Icon: Wine,
    title: "Bars & Lounges with Food Service",
    description:
      "Smaller back kitchens attached to a bar program, usually cleaned late and around a different closing schedule."
  },
  {
    Icon: ChefHat,
    title: "Catering, Commissary & Institutional Kitchens",
    description:
      "Production kitchens, shared commissary spaces, and school or facility kitchens with fixed access windows and their own supervision."
  }
];

// ─── Scheduling ───────────────────────────────────────────────────────────
const scheduleOptions = [
  {
    Icon: Moon,
    title: "After Close",
    description:
      "The most common window. Service starts once the kitchen is shut down and the line is broken down for the night."
  },
  {
    Icon: Sunrise,
    title: "Before Open",
    description:
      "Early-morning service for kitchens that close late, run private events, or prefer their crew out of the building first."
  },
  {
    Icon: Repeat,
    title: "Recurring Schedules",
    description:
      "Daily, several visits per week, weekly, or bi-weekly, depending on volume, menu, and how much the floor takes."
  },
  {
    Icon: CalendarClock,
    title: "One-Time & Periodic",
    description:
      "A single detailed cleaning before reopening, after an event stretch, ahead of a handover, or between seasons."
  }
];

const schedulingNotes = [
  "Service windows are confirmed against your closing routine, not assumed from a standard shift.",
  "Overnight and pre-open work depends on staffing and building access, so it is agreed before the first visit.",
  "Quieter mid-day periods can work for kitchens with a defined break between services.",
  "Frequency can change with the season, since patio months and holiday stretches are not the same workload."
];

// ─── Why a kitchen needs its own plan ─────────────────────────────────────
const kitchenChallenges = [
  {
    Icon: Flame,
    title: "Grease Migrates",
    description:
      "Aerosolized cooking oil settles well past the cook line: onto wall splash, equipment sides, floor edges, and the tops of things nobody looks at during service."
  },
  {
    Icon: Footprints,
    title: "Constant Foot Traffic",
    description:
      "The same three-foot path between the line, the pass, and the dish pit gets walked hundreds of times a night, and it wears and soils faster than the rest of the floor."
  },
  {
    Icon: Ruler,
    title: "Tight, Fixed Layouts",
    description:
      "Equipment is bolted, plumbed, or too heavy to shift. What can be reached safely defines the scope, and pretending otherwise leads to promises nobody can keep."
  },
  {
    Icon: Clock,
    title: "A Short Service Window",
    description:
      "There is a limited stretch between the last cover and the first delivery. The plan has to fit that window and finish inside it, every time."
  },
  {
    Icon: Layers,
    title: "Many Surface Types at Once",
    description:
      "Stainless, quarry tile, sealed concrete, painted wall board, and rubber matting all sit within a few feet of each other and none of them want the same treatment."
  },
  {
    Icon: Repeat,
    title: "Buildup Returns Fast",
    description:
      "A kitchen does not hold a clean the way an office does. Frequency matters more here than anywhere else in a commercial building."
  }
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardList,
    title: "Scope Confirmed After a Walkthrough",
    description:
      "Nothing is quoted from a phone call and a square-foot number. We walk the kitchen, look at the equipment and the floor, and write down what is actually included before you commit."
  },
  {
    Icon: Moon,
    title: "Scheduled Around Service",
    description:
      "Cleaning is fitted to your closing routine and prep schedule rather than to ours. The window is agreed up front so your crew is never working around a mop."
  },
  {
    Icon: Flame,
    title: "Priority on Grease-Prone Areas",
    description:
      "Floor edges, the strip behind the line, splash walls, and equipment sides are the areas that get skipped at close. They are treated as core scope, not extras."
  },
  {
    Icon: Users,
    title: "Consistent Crew, Consistent Priorities",
    description:
      "The same team learns your layout, your access routine, and which areas you care about most, so quality does not restart from zero every visit."
  },
  {
    Icon: Repeat,
    title: "Recurring or One-Time",
    description:
      "Some kitchens want service several nights a week. Others want one detailed cleaning before reopening. Both are normal, and neither requires committing to the other."
  },
  {
    Icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Owner Joshua Alexander stays reachable. When the scope needs to change, whether that is a new piece of equipment, a busier season, or an area that needs more attention, you talk to someone who can decide."
  }
];

const scopeSafetyNotes = [
  "Restroom and staff-area cleaning can be included in the written service scope.",
  "Equipment interiors are add-ons, quoted and scheduled rather than assumed.",
  "Work beneath heavy equipment happens only where it is safe to reach and prearranged.",
  "Anything outside the written scope is discussed before it is performed, not billed afterward."
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Initial Conversation",
    description:
      "A short call about the restaurant: kitchen size, service style, how often you want cleaning, and what your current routine is not covering."
  },
  {
    number: "02",
    title: "Kitchen Walkthrough",
    description:
      "We walk the back of house: line, prep, dish, storage, floors, wall surfaces, equipment placement, buildup level, and what can be safely reached."
  },
  {
    number: "03",
    title: "Written Scope & Quote",
    description:
      "You get the included areas, cleaning frequency, service window, access plan, optional add-ons, and pricing in writing before anything is scheduled."
  },
  {
    number: "04",
    title: "Service Begins",
    description:
      "The assigned crew works the agreed window, follows the scope area by area, and leaves the kitchen ready for the next prep shift."
  },
  {
    number: "05",
    title: "Ongoing Review",
    description:
      "Scope and frequency get revisited as volume, menu, or equipment changes. Adjustments are made in writing rather than absorbed silently."
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What does restaurant kitchen cleaning include?",
    answer:
      "Back-of-house cleaning covers accessible food-preparation surfaces, backsplashes, sinks and faucets, kitchen floors including edges and corners, spot degreasing of grease-prone areas, equipment exteriors, reachable wall splash areas, doors, and high-touch points. Dish areas, dry-storage access paths, staff areas, and restrooms can be added to the written scope. What applies to your kitchen is documented area by area before the first visit rather than sold as a fixed package."
  },
  {
    question: "Can cleaning be scheduled after the restaurant closes?",
    answer:
      "Yes, and that is how most kitchens run. Service typically starts once the line is broken down and the kitchen is shut down for the night. Early-morning service before prep begins is the other common option, and it suits kitchens that close late or host private events. Overnight and pre-open windows depend on staffing and building access, so the exact window is agreed during the walkthrough."
  },
  {
    question: "Do you offer recurring commercial kitchen cleaning?",
    answer:
      "Yes. Recurring plans range from several visits a week for high-volume kitchens to weekly or bi-weekly service for smaller operations, and periodic detailed cleaning can sit on top of a lighter routine. Frequency is chosen from your volume, menu, floor condition, and how quickly buildup returns, and it can be adjusted as the season changes."
  },
  {
    question: "Are equipment interiors included in the standard scope?",
    answer:
      "No. Routine service covers equipment exteriors: reachable sides, front panels, handles, and control-area surfaces. Interior oven, refrigerator, freezer, cabinet, and drawer cleaning is available as an add-on when quoted and included in the written scope, because it needs additional time and, in most cases, cooled or emptied equipment."
  },
  {
    question: "Do you clean beneath kitchen equipment?",
    answer:
      "Areas beneath movable equipment can be cleaned where it is safe to reach them and that has been agreed in advance. Heavy, plumbed, or fixed equipment is not moved as part of routine service. During the walkthrough we identify what can genuinely be reached so the scope reflects the kitchen as it is rather than an ideal version of it."
  },
  {
    question: "Do you provide hood and exhaust-system cleaning?",
    answer:
      "We can clean visible hood and vent exterior surfaces when they are included in the scope. Internal duct work, exhaust fans, filters beyond accessible exteriors, fire-suppression systems, and certified exhaust-system cleaning are specialist regulated services and are not part of what we provide. Those should be booked with a certified kitchen exhaust contractor."
  },
  {
    question: "Can dining rooms, restrooms, and staff areas be added?",
    answer:
      "Yes. Restrooms, staff areas, break rooms, and service corridors can be written into the same scope as the kitchen. If the front of house is the larger part of what you need, meaning the dining room, entrance, bar, host station, and customer restrooms, our restaurant cleaning page covers that side of the building in detail, and both can run on one plan."
  },
  {
    question: "How is restaurant kitchen cleaning priced?",
    answer:
      "There is no flat per-kitchen rate. Pricing comes from kitchen square footage, layout, the equipment on site, cleaning frequency, your operating schedule, current buildup level, priority areas, what is safely accessible, and any add-ons selected. A walkthrough turns those into a written scope and a number, with no obligation attached."
  },
  {
    question: "Which Seattle-area communities do you serve?",
    answer:
      "We work with kitchens across Seattle, Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Bothell, Tacoma, and surrounding communities. If your restaurant sits just outside that range, call and ask. We will tell you honestly whether we can serve it well on the schedule you need."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Restaurant Cleaning",
    description: "The guest-facing side of the building: dining room, entrance, bar, restrooms, and staff areas.",
    href: "/services/restaurant-cleaning",
    ctaLabel: "See whole-restaurant cleaning"
  },
  {
    title: "Commercial Cleaning",
    description: "Recurring janitorial service for offices, retail, and commercial facilities across Seattle.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    description: "A detailed one-time reset for a facility before reopening or after a heavy stretch.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "Explore deep cleaning"
  },
  {
    title: "Strip & Wax",
    description: "Hard-floor restoration for dining rooms and service areas with waxed floor surfaces.",
    href: "/services/strip-and-wax",
    ctaLabel: "See floor stripping & waxing"
  },
  {
    title: "Pressure Washing",
    description: "Exterior service areas, back-door approaches, patios, and hard surfaces around the building.",
    href: "/services/pressure-washing",
    ctaLabel: "View pressure washing"
  },
  {
    title: "Window & Glass Cleaning",
    description: "Interior and exterior glass for storefronts, entry doors, and dining-room windows.",
    href: "/services/window-glass-cleaning",
    ctaLabel: "Explore window cleaning"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// so it is intentionally not repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const kitchenCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/restaurant-kitchen-cleaning#service`,
      name: "Restaurant Kitchen Cleaning Seattle",
      serviceType: "Commercial Kitchen Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area restaurant owners, kitchen managers, café and bakery operators, and food-service facility managers"
      },
      description:
        "Back-of-house cleaning for commercial kitchens in Seattle: food-preparation surfaces, sinks and fixtures, kitchen floors and grease-prone areas, equipment exteriors, reachable wall surfaces, and supporting back-of-house spaces. Recurring, periodic, and one-time service scheduled after hours, with detailed add-ons available when quoted.",
      url: `${SITE_URL}/services/restaurant-kitchen-cleaning`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Commercial Kitchen Cleaning Scope",
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
      "@id": `${SITE_URL}/services/restaurant-kitchen-cleaning#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function RestaurantKitchenCleaningPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Restaurant Kitchen Cleaning", href: "/services/restaurant-kitchen-cleaning" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Commercial Kitchen Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Restaurant Kitchen Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Back-of-house cleaning for commercial kitchens across the Seattle area: food-preparation
                surfaces, sinks and accessible fixtures, kitchen floors and their edges, grease-prone areas,
                equipment exteriors, and reachable wall splash. Service runs after close or before prep, on a
                written scope built from a walkthrough of your kitchen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Kitchen Walkthrough
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>

            <ServiceImagePanel
              src={`${IMG}/restaurant-kitchen-cleaning-hero.webp`}
              alt="Stainless-steel commercial kitchen with a dish area, prep trolleys and a sealed floor"
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
                  <ChefHat className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <h2 className="mt-4 text-base font-semibold text-white">The Problem in Most Kitchens</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Closing duties get the visible surfaces. What slips is the strip behind the line, the floor
                  edges, the equipment sides, and the wall splash. Those are the areas that take the longest and
                  are hardest to reach at the end of a fourteen-hour day.
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
      <section className="section-shell-tight bg-white" aria-labelledby="kitchen-intro-heading">
        <Container>
          <ServiceEditorialSplit
            src={`${IMG}/commercial-kitchen-prep-surfaces.webp`}
            alt="Stainless-steel prep tables, a tray rack and equipment exteriors in a commercial kitchen"
            width={1200}
            height={1500}
            sizes="(max-width: 1023px) 100vw, 42vw"
            aspect="aspect-[4/5]"
            imagePosition="right"
            columns="lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div>
              <span className="eyebrow">What This Service Is</span>
              <h2
                id="kitchen-intro-heading"
                className="text-3xl font-bold leading-tight tracking-tight md:text-4xl"
              >
                What Restaurant Kitchen Cleaning Covers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Restaurant kitchen cleaning is scheduled cleaning of the back of house: the food-preparation
                areas, sinks, kitchen floors, grease-prone surfaces, equipment exteriors, and reachable wall and
                high-touch surfaces that a closing crew rarely has time to do properly. It is built for
                restaurant owners, kitchen managers, café and bakery operators, and food-service facilities that
                need the back of house handled on a schedule instead of squeezed into the last twenty minutes of
                a shift.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Recurring service keeps a kitchen from drifting: the same areas are covered on the same cycle, so
                buildup never gets a head start. One-time cleaning is a reset: before reopening, after a heavy
                run of events, ahead of a handover, or when a kitchen has gone a while without a detailed pass.
                Most restaurants end up using both, with a periodic detail sitting on top of a lighter routine.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The final scope is not something we can guess from a phone call. A walkthrough is where it gets
                decided, because what a crew can safely reach in your kitchen is specific to your kitchen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Get a Kitchen Cleaning Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-secondary">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>
          </ServiceEditorialSplit>

          {/* Scope factors sit full width below the split so the chips don't crowd the photograph. */}
          <div className="card mt-12">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
                  <ClipboardList className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">What Decides Your Scope</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  These are the factors that shape what is included, how long a visit takes, and what a quote
                  comes back at.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {scopeFactors.map((factor) => (
                  <div
                    key={factor}
                    className="rounded-xl border border-brand-100 bg-surface px-3 py-2.5 text-center"
                  >
                    <span className="text-xs font-medium text-ink">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SCOPE OF WORK ───────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What Is Included in Commercial Kitchen Cleaning?"
            description="The groups below cover a typical back of house. Tasks are performed according to the approved scope, so your written plan may include all of these areas or a focused subset, depending on the walkthrough."
          />

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-5 py-2 md:px-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Food-contact sanitizing during service stays with your kitchen staff. Our work is the surrounding
              cleaning that keeps the space maintainable between shifts.
            </p>
          </div>
        </Container>
      </section>

      {/* ── STANDARD SCOPE VS ADD-ONS ───────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <SectionHeading
            eyebrow="Scope & Add-Ons"
            title="Standard Service and Optional Detail Work"
            description="Routine scope and detailed add-ons are kept separate on purpose, so nobody is surprised by what a visit does or does not cover."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {serviceTiers.map(({ Icon, label, title, description, items }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="card flex h-full flex-col gap-4">
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
                  <ul className="mt-1 grid gap-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Supporting photograph between the two tiers and the hood clarification. */}
          <ServiceImagePanel
            src={`${IMG}/commercial-kitchen-floor-and-equipment.webp`}
            alt="Commercial kitchen floor beside a stainless-steel cook line and equipment exteriors"
            width={1600}
            height={1000}
            sizes="(max-width: 1279px) 100vw, 1152px"
            aspect="aspect-[16/10] sm:aspect-[16/9]"
            caption="Detailed kitchen scope depends on layout, accessibility, and priority areas. Accessibility and safety determine final scope, and what is covered is set out in the written scope."
            className="mt-8"
          />

          {/* Hood & exhaust clarification */}
          <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white">
                <ShieldAlert className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">
                  Hoods, Vents and Exhaust Systems: What We Do and Do Not Handle
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Visible hood and vent <strong className="font-semibold text-ink">exterior surfaces</strong> can
                  be cleaned when they are included in your written scope. Internal duct work, exhaust fans, fire
                  suppression systems, and certified exhaust-system cleaning are specialist regulated services
                  that we do not provide. Those belong with a certified kitchen exhaust contractor. We would
                  rather tell you that up front than leave it ambiguous in a quote.
                </p>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {scopeSafetyNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2 rounded-xl border border-brand-100 bg-surface px-4 py-3 text-sm text-ink"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── KITCHEN TYPES ───────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Kitchens We Can Work In"
            title="Commercial Kitchens This Service Is Built For"
            description="Service can be customized for the kitchen types below. Layout, equipment, and closing routine differ enough between them that the scope is always written per site."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kitchenTypes.map(({ Icon, title, description }, index) => (
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
                When Kitchen Cleaning Happens
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                A kitchen has a narrow window, and it is different in every restaurant. Some close at ten and
                want the crew in at eleven; others run late and prefer service before the first prep cook
                arrives. Scheduling is confirmed according to staffing, building access, your operating hours,
                and the agreed service plan, not promised as blanket availability.
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
        </Container>
      </section>

      {/* ── WHY A KITCHEN NEEDS ITS OWN PLAN ────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <ServiceEditorialSplit
            src={`${IMG}/commercial-kitchen-work-area.webp`}
            alt="Commercial kitchen work area with ductwork, a tiled wall and stainless-steel prep surfaces"
            width={1400}
            height={933}
            sizes="(max-width: 1023px) 100vw, 45vw"
            aspect="aspect-[3/2]"
            imagePosition="right"
            columns="lg:grid-cols-[1fr_0.9fr]"
          >
            <SectionHeading
              eyebrow="Why It Is Different"
              title="Why a Commercial Kitchen Needs Its Own Cleaning Plan"
              description="A kitchen is not a smaller version of an office. These are the practical conditions that decide how the work has to be organized."
            />
          </ServiceEditorialSplit>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kitchenChallenges.map(({ Icon, title, description }, index) => (
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

      {/* ── FRONT OF HOUSE CROSS-LINK ───────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="grid items-center gap-8 rounded-3xl border border-brand-100 bg-surface px-7 py-9 md:px-10 lg:grid-cols-[1fr_0.42fr] lg:gap-12">
            <div>
              <span className="eyebrow">The Rest of the Building</span>
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                Need the Dining Room Covered Too?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                This page is the back of house. If you also need the guest-facing side handled, meaning the
                dining room, tables and chairs, entrance and interior glass, host station, bar, customer
                restrooms, and staff areas, that is covered on our{" "}
                <Link
                  href="/services/restaurant-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  restaurant cleaning page
                </Link>
                . Both sides of the building can run on a single written scope and one schedule.
              </p>
              <div className="mt-6">
                <Link href="/services/restaurant-cleaning" className="cta-primary">
                  View Restaurant Cleaning
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <ServiceImagePanel
              src={`${IMG}/restaurant-dining-room-front-of-house.webp`}
              alt="Restaurant dining room with tables and chairs on the guest-facing side of the building"
              width={1300}
              height={867}
              sizes="(max-width: 1023px) 100vw, 28vw"
              aspect="aspect-[3/2]"
            />
          </div>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="relative section-shell overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div
          className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl"
          aria-hidden
        />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow-light">Why Kitchens Work With Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Choose Cleaning From The Heart
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                A locally owned, family-operated company with more than 30 years of cleaning work across the
                Seattle area.
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
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How Kitchen Cleaning Gets Set Up"
            description="Five steps from the first call to a kitchen on a steady routine, with the scope, frequency, and access agreed in writing before anyone starts."
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
              Request a Kitchen Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Kitchen
            </Link>
          </div>
        </Container>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <ServiceEditorialSplit
            src={`${IMG}/commercial-kitchen-back-of-house.webp`}
            alt="Back-of-house kitchen area with stainless-steel shelving, stacked plates and folded linen"
            width={1400}
            height={933}
            sizes="(max-width: 1023px) 100vw, 40vw"
            aspect="aspect-[3/2]"
            caption="Reference image showing back-of-house conditions — dish, storage, and supporting areas are written into the scope when you want them covered."
            imagePosition="left"
            columns="lg:grid-cols-[0.85fr_1fr]"
          >
            <div className="rounded-3xl border border-brand-100 bg-white px-7 py-9 md:px-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
                <Images className="h-7 w-7 text-brand-700" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                See the Standard Before You Book
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Our results gallery holds real photos from Seattle-area jobs: commercial floor care, machine
                scrubbing, hard-surface restoration, and glass work. Those are the same techniques and the same
                crew standard applied to a kitchen floor and its edges.
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
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Commercial Kitchen Cleaning Questions
              </h2>
              <p className="mt-4 text-base text-muted">
                What restaurant owners and kitchen managers ask us most before booking a first visit.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Have a question about your kitchen?</p>
                <p className="mt-1 text-sm text-muted">
                  Call or message us with your layout, hours, and what you need covered, and we&apos;ll tell you
                  what is realistic.
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
          <SectionHeading eyebrow="Related Services" title="Services Restaurants Book Alongside Kitchen Cleaning" />
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
                <p className="eyebrow-light">Commercial Kitchen Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Let&apos;s Walk Your Kitchen
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  The final scope is confirmed after we see the space and talk through your closing routine:
                  which areas are included, how often service runs, what can be safely reached, which add-ons are
                  worth quoting, and what time the crew can be in the building. You get it back in writing before
                  anything is booked.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Written scope, area by area", "After-hours service windows", "Recurring or one-time"].map(
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
                    Request a Kitchen Walkthrough
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kitchenCleaningSchema) }}
      />
    </>
  );
}
