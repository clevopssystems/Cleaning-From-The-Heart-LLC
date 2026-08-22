import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bird,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Church,
  ClipboardList,
  CloudRain,
  Droplets,
  Eye,
  Flower2,
  Gauge,
  GraduationCap,
  House,
  Layers,
  Leaf,
  MapPin,
  MessageCircle,
  PanelTop,
  Phone,
  Repeat,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Store,
  Sun,
  TreePine,
  Trees,
  Users,
  Warehouse,
  Wind
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { siteConfig, serviceAreas } from "@/lib/site";
import { quoteHrefForService } from "@/lib/quote-form";

// Quote CTAs on this page preselect this service in the quote form.
const QUOTE_HREF = quoteHrefForService("solar-panel-cleaning");

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const PAGE_PATH = "/services/solar-panel-cleaning";

const PAGE_TITLE = "Solar Panel Cleaning Seattle, WA | Cleaning From The Heart";
const PAGE_DESCRIPTION =
  "Solar panel cleaning in Seattle for homes and commercial properties. We remove pollen, dust, bird droppings, leaves and outdoor buildup. Free quote.";

// ─────────────────────────────────────────────────────────────────────────
// IMAGERY
// Every photograph on this page is a temporary royalty-free stock image used
// to establish the visual direction. None of it is Cleaning From The Heart
// work and no caption or alt text presents it as a company project. Sources,
// photographers and licenses are recorded in
// docs/temporary-solar-panel-image-sources.md (dev-only, never linked).
// Replace with original photography when solar jobs have been photographed.
// ─────────────────────────────────────────────────────────────────────────
const IMG_DIR = "/images/services/solar-panel-cleaning";
const HERO_IMAGE = `${IMG_DIR}/solar-panel-cleaning-hero.webp`;
const SURFACE_IMAGE = `${IMG_DIR}/solar-panel-surface-detail.webp`;
const ROOFTOP_IMAGE = `${IMG_DIR}/rooftop-solar-array-tile-roof.webp`;
const OVERCAST_IMAGE = `${IMG_DIR}/solar-panels-overcast-weather.webp`;
const ARRAY_ANGLE_IMAGE = `${IMG_DIR}/solar-panel-array-angle.webp`;
const COMMERCIAL_IMAGE = `${IMG_DIR}/commercial-rooftop-solar-array.webp`;
const BRUSH_IMAGE = `${IMG_DIR}/solar-panel-brush-cleaning.webp`;
const CREW_IMAGE = `${IMG_DIR}/solar-panel-cleaning-crew.webp`;

export const metadata: Metadata = {
  // `absolute` bypasses the layout title template, which would otherwise append
  // the brand a second time. The brand is written into PAGE_TITLE instead.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    // Primary
    "solar panel cleaning Seattle",
    "solar panel cleaning Seattle WA",
    "Seattle solar panel cleaning",
    "solar panel cleaning service Seattle",
    "solar panel cleaners Seattle",
    "professional solar panel cleaning Seattle",
    "solar panel cleaning company Seattle",
    // Residential cluster
    "residential solar panel cleaning Seattle",
    "home solar panel cleaning Seattle",
    "rooftop solar panel cleaning Seattle",
    // Commercial cluster
    "commercial solar panel cleaning Seattle",
    "business solar panel cleaning Seattle",
    "solar array cleaning Seattle",
    // Service and maintenance
    "solar panel maintenance Seattle",
    "solar panel washing Seattle",
    "solar panel debris removal",
    "bird droppings on solar panels",
    "pollen removal solar panels",
    // Pricing intent
    "solar panel cleaning cost Seattle",
    "solar panel cleaning quote Seattle",
    // Adjacent
    "exterior cleaning Seattle WA",
    "solar panel and window cleaning Seattle"
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
        url: HERO_IMAGE,
        alt: "Rooftop solar panels on a house surrounded by trees and neighboring rooftops"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [HERO_IMAGE]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const jumpLinks = [
  { label: "Overview", href: "#overview" },
  { label: "What Builds Up", href: "#buildup" },
  { label: "Seattle Rain", href: "#rain" },
  { label: "Residential", href: "#residential" },
  { label: "Commercial", href: "#commercial" },
  { label: "Systems", href: "#systems" },
  { label: "Method", href: "#method" },
  { label: "How Often", href: "#frequency" },
  { label: "Cost", href: "#cost" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQs", href: "#faq" }
];

const glanceItems = [
  "Rooftop and accessible ground-mounted arrays",
  "Homes, businesses and managed properties",
  "Access and safety confirmed before we book",
  "One-time cleaning or a repeating schedule"
];

const trustStripItems = [
  { Icon: House, label: "Homes, businesses & managed properties" },
  { Icon: ClipboardList, label: "Free quote before anything is booked" },
  { Icon: CalendarClock, label: "One-time or seasonal scheduling" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// ─── What builds up on panel glass ────────────────────────────────────────
// Everything listed here is ordinary outdoor surface soiling. Nothing about
// roof moss treatment, panel repair or electrical work is claimed anywhere.
const buildupTypes = [
  {
    Icon: Flower2,
    title: "Seasonal Pollen",
    description:
      "From late winter through early summer, alder, birch, cedar and grass pollen settles on everything outdoors. On panel glass it dries into a fine yellow-green film that spreads evenly rather than in patches, which is exactly why it is easy to miss from the ground."
  },
  {
    Icon: Bird,
    title: "Bird Droppings",
    description:
      "Panels sit on the highest, warmest surface on a property, so gulls, crows and pigeons use them. Droppings dry quickly, bond hard to the glass, and are one of the few kinds of soiling a whole winter of rain will not reliably lift."
  },
  {
    Icon: Leaf,
    title: "Leaves & Evergreen Debris",
    description:
      "Fir and cedar needles are the local specialty. They slide down a sloped array and pack into the bottom edge, along frame rails and under the panel lip, where they hold moisture against the frame and start breaking down."
  },
  {
    Icon: Wind,
    title: "Dust & Airborne Dirt",
    description:
      "Road grit, brake dust, landscaping soil and construction dust travel further than most people expect. Properties near arterials, active building sites or gravel driveways collect a noticeably grubbier film than a quiet residential block does."
  },
  {
    Icon: TreePine,
    title: "Tree Sap & Organic Residue",
    description:
      "A conifer directly above an array drops more than needles. Sap and resin land as small sticky spots that catch dust and hold onto it, and they stay put through weather that would rinse ordinary dirt straight off."
  },
  {
    Icon: Droplets,
    title: "Water Spotting & Dried Residue",
    description:
      "Rain and sprinkler overspray both carry dissolved minerals. Where water sits on glass and evaporates instead of running off, it leaves rings and a dulled haze behind, most visibly on low-pitch panels where runoff is slow."
  },
  {
    Icon: Layers,
    title: "Cobwebs & Light Organic Buildup",
    description:
      "Webbing gathers along frame edges, in corners and around mounting hardware, then traps needles and dust. In damp, shaded positions a thin organic film can develop on frames and the roof surfaces around a system as well."
  },
  {
    Icon: CloudRain,
    title: "Damp-Weather Grime",
    description:
      "Long wet spells keep panels damp for days at a time. Dust that lands on a wet surface sticks instead of blowing off, so a grey film builds through autumn and winter that a dry-climate property never accumulates."
  }
];

// Compact summary chips reused inside the buildup section.
const buildupChips = [
  "Pollen",
  "Bird droppings",
  "Fir & cedar needles",
  "Leaves",
  "Dust & road film",
  "Tree sap",
  "Water spotting",
  "Cobwebs"
];

// ─── Residential ──────────────────────────────────────────────────────────
const residentialProperties = [
  "Single-family homes with roof-mounted arrays",
  "Townhomes and attached homes where access is suitable",
  "Garage, carport and detached-structure arrays",
  "Accessory dwelling units and workshops",
  "Accessible ground-mounted panels in a yard",
  "Homes being prepared for sale or handover"
];

const residentialReasons = [
  {
    Icon: Trees,
    title: "Tree Cover Over the Roof",
    description:
      "Seattle is a city of mature conifers and street trees. Needles, leaves, sap and shade all arrive with them, and a house with a fir on the south side collects far more on its panels than a neighbor two doors down."
  },
  {
    Icon: Bird,
    title: "Regular Bird Activity",
    description:
      "Roof-mounted arrays attract perching. Where droppings collect in the same few spots visit after visit, they are usually the reason a homeowner starts looking for a cleaner in the first place."
  },
  {
    Icon: Flower2,
    title: "Spring Pollen Season",
    description:
      "The pollen film that coats cars, windows and patio furniture lands on panel glass at exactly the same time, and it is the single most common trigger for a spring booking."
  },
  {
    Icon: CalendarClock,
    title: "Seasonal Exterior Upkeep",
    description:
      "Plenty of homeowners simply add the array to the same visit as the windows or a driveway wash, so the whole exterior gets dealt with in one appointment rather than three."
  }
];

// ─── Commercial ───────────────────────────────────────────────────────────
const commercialProperties = [
  {
    Icon: Building2,
    title: "Office & Mixed-Use Buildings",
    description:
      "Roof-mounted arrays on offices and mixed-use buildings, scheduled outside working hours wherever roof access allows it."
  },
  {
    Icon: Store,
    title: "Retail & Storefront Properties",
    description:
      "Panels on retail buildings and smaller commercial premises, often cleaned alongside the glass and frontage when both are being handled."
  },
  {
    Icon: GraduationCap,
    title: "Schools & Educational Facilities",
    description:
      "Arrays on school buildings and campus structures, planned around term dates, breaks and the site access rules already in place."
  },
  {
    Icon: Church,
    title: "Places of Worship",
    description:
      "Roof arrays on churches and community buildings, scheduled around services, events and volunteer availability."
  },
  {
    Icon: Users,
    title: "Apartment & Multifamily Properties",
    description:
      "Building-mounted arrays across apartment and multifamily properties, coordinated through the property manager or on-site staff."
  },
  {
    Icon: Warehouse,
    title: "Warehouses & Facilities",
    description:
      "Larger building-mounted arrays where the roof layout, the access route and a safe working area can all be confirmed in advance."
  }
];

// ─── Panel system types ───────────────────────────────────────────────────
const systemTypes = [
  {
    Icon: House,
    title: "Rooftop Solar Panels",
    summary: "The most common request, on houses and commercial buildings alike.",
    points: [
      "Pitched residential roofs and low-slope commercial roofs",
      "Garage, carport and detached-structure mounts",
      "Access route, roof pitch and panel position confirmed first",
      "Work planned so nobody needs to walk across the panels"
    ]
  },
  {
    Icon: PanelTop,
    title: "Ground-Mounted Solar Panels",
    summary: "Yard and frame-mounted arrays that can be reached safely from the ground.",
    points: [
      "Residential ground mounts and accessible garden arrays",
      "Panels on frames at a workshop, barn or outbuilding",
      "Usually the most straightforward layout to clean thoroughly",
      "Surrounding vegetation and footing checked before we start"
    ]
  },
  {
    Icon: Building2,
    title: "Commercial Solar Arrays",
    summary: "Larger building-mounted systems on commercial and managed properties.",
    points: [
      "Multi-row arrays on commercial and institutional roofs",
      "Scope agreed by panel count, rows and safely reachable area",
      "Scheduling worked around tenants, staff and operating hours",
      "Site induction and existing roof access rules respected"
    ]
  }
];

// ─── What we remove / what is out of scope ────────────────────────────────
const removalItems = [
  "Dust and airborne dirt film",
  "Seasonal pollen",
  "Bird droppings on panel glass",
  "Leaves and loose plant matter",
  "Fir, cedar and pine needles",
  "Tree debris caught at panel edges",
  "General outdoor grime",
  "Cobwebs on frames and hardware",
  "Dried water spotting and residue",
  "Sap spotting and organic marks",
  "Seasonal debris along panel rails",
  "Light surface buildup on frames"
];

const outOfScopeItems = [
  "Damaged, cracked or delaminated panel glass",
  "Wiring, connectors, inverters and electrical faults",
  "Mounting hardware repairs or re-seating an array",
  "Monitoring, output testing and system diagnostics",
  "Roof repairs, flashing work and established roof moss treatment"
];

// ─── Method ───────────────────────────────────────────────────────────────
// Deliberately written without naming a specific water system or chemical.
// Nothing on this site documents deionised water, a specific brush type or a
// pole system, so the copy stays at the level of what is actually confirmed:
// the surface is assessed, and the approach is matched to it.
const methodSteps = [
  {
    Icon: Search,
    title: "Property & Panel Assessment",
    description:
      "We confirm the number of panels, where the system sits, how it can be reached, what condition the glass and frames are in, and what has actually built up. Anything that looks like damage rather than soiling gets flagged to you rather than cleaned around quietly."
  },
  {
    Icon: ClipboardList,
    title: "Cleaning Plan & Access Decision",
    description:
      "The approach is chosen for that specific system: what can be reached from the ground, what needs roof access, where a technician can stand, and which areas are not safe to attempt. If part of an array cannot be cleaned safely, you hear that before the visit, not after it."
  },
  {
    Icon: SprayCan,
    title: "Surface Cleaning",
    description:
      "Loose debris comes off the glass and the frame edges first, then the surface film is loosened and lifted with panel-appropriate methods selected for the condition of the glass. High-pressure washing is not treated as the default approach for panel surfaces."
  },
  {
    Icon: Sparkles,
    title: "Detail Attention",
    description:
      "Bird droppings, sap spotting and dried residue need working rather than rinsing. These get individual attention where the panel is reachable and the surface allows it, along with debris packed into the bottom edge and along frame rails."
  },
  {
    Icon: Eye,
    title: "Final Visual Check",
    description:
      "Accessible panel surfaces are looked over in the light, the surrounding roof or ground area is cleared of anything we brought down, and anything worth telling you about, such as heavy debris at the roof edge, gets mentioned."
  },
  {
    Icon: CheckCircle2,
    title: "Completion & Handover",
    description:
      "We confirm the agreed scope has been completed, note anything that was not reachable, and, where you want it, set a rough timeframe for coming back before the next pollen or leaf season."
  }
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: MapPin,
    title: "Local Seattle Service",
    description:
      "A Seattle-area cleaning company serving the city and the surrounding cities listed further down this page, not a national brand routing calls to a local subcontractor."
  },
  {
    Icon: House,
    title: "Residential & Commercial",
    description:
      "Homes, businesses and managed properties are all normal work here, and both are quoted the same way: on panel count, access and condition."
  },
  {
    Icon: ShieldCheck,
    title: "Careful Surface Cleaning",
    description:
      "The point is to remove outdoor buildup without treating panel glass like a driveway. Method is matched to the surface, and anything that is not safe to attempt is left alone and reported."
  },
  {
    Icon: PanelTop,
    title: "Rooftop & Ground-Mounted",
    description:
      "Roof-mounted and accessible ground-mounted arrays, subject to what the access assessment supports at your particular property."
  },
  {
    Icon: CalendarClock,
    title: "Flexible Scheduling",
    description:
      "One-time cleaning, a seasonal visit after pollen or leaf drop, or a repeating schedule for a property that is already on a maintenance calendar."
  },
  {
    Icon: Layers,
    title: "Exterior Work Bundled",
    description:
      "Panels are often quoted alongside window cleaning or pressure washing, which keeps one crew and one visit on the property instead of three."
  },
  {
    Icon: ClipboardList,
    title: "Free Property-Specific Quote",
    description:
      "The quote reflects your panel count, your roof and your access, not a generic per-panel figure applied to every property in the city."
  },
  {
    Icon: Users,
    title: "Experienced Property Cleaning Team",
    description:
      "Cleaning From The Heart LLC is locally owned and family-operated, built on more than 30 years of hands-on cleaning experience across homes, offices, schools and commercial properties."
  }
];

// ─── Frequency ────────────────────────────────────────────────────────────
const frequencyFactors = [
  "How much tree cover sits above the array",
  "Bird activity on and around the roof",
  "Roof pitch and the angle the panels sit at",
  "Proximity to arterials, gravel roads or building sites",
  "How much pollen the property catches in spring",
  "Leaf and needle drop through autumn",
  "Whether the system is shaded or exposed",
  "Property type and how it is used",
  "How the array can be reached safely"
];

const cleaningTriggers = [
  "Visible bird droppings are still sitting on the glass",
  "A pollen film is noticeable from the ground or a window",
  "Leaves and needles have collected along the panel edges",
  "The panels look visibly dull or grey compared with last year",
  "Nearby construction or landscaping has thrown up unusual dust",
  "A seasonal exterior maintenance visit is already being planned"
];

// ─── Seasonal timing ──────────────────────────────────────────────────────
const seasonalTiming = [
  {
    Icon: Flower2,
    title: "After Heavy Spring Pollen",
    description:
      "Once the worst of the pollen has finished dropping, usually late spring, a clean removes the whole season's film at once instead of chasing it week by week."
  },
  {
    Icon: Sun,
    title: "During Drier Summer Weather",
    description:
      "Summer gives the longest run of dry, settled days, which makes access easier to plan and is when most homeowners schedule exterior work anyway."
  },
  {
    Icon: TreePine,
    title: "After Significant Tree Debris",
    description:
      "A storm, a windy week or a nearby tree being cut back can put more on an array in two days than a quiet month does. Those are worth dealing with when they happen."
  },
  {
    Icon: Leaf,
    title: "Around Fall Leaf Season",
    description:
      "Late autumn, once leaf and needle drop has largely finished, clears debris off the panels before the long wet stretch sets in and holds it there."
  },
  {
    Icon: Eye,
    title: "Whenever Buildup Becomes Visible",
    description:
      "The most reliable signal is simply what you can see. Visible droppings, a dulled surface or debris along the edges beat any date on a calendar."
  }
];

// ─── Cost factors ─────────────────────────────────────────────────────────
const quoteFactors = [
  { Icon: Gauge, label: "Number of panels" },
  { Icon: PanelTop, label: "Rooftop or ground-mounted" },
  { Icon: Building2, label: "Building height and stories" },
  { Icon: Ruler, label: "Roof pitch and panel angle" },
  { Icon: Layers, label: "Array layout and row spacing" },
  { Icon: ShieldCheck, label: "Access and safe working area" },
  { Icon: Wind, label: "Amount and type of buildup" },
  { Icon: House, label: "Residential or commercial property" },
  { Icon: CalendarClock, label: "Scheduling and site restrictions" },
  { Icon: Sparkles, label: "Other exterior services in the same visit" }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Window Cleaning",
    description:
      "Glass, frames and sills at homes and commercial properties. The most common pairing with a panel clean, since both are glass and both are reached the same way.",
    href: "/services/window-cleaning",
    ctaLabel: "Window cleaning services"
  },
  {
    title: "Residential Window Cleaning",
    description:
      "Interior and exterior house glass, quoted alongside a rooftop array when the whole exterior is being handled in one visit.",
    href: "/services/residential-window-cleaning",
    ctaLabel: "Residential window cleaning"
  },
  {
    title: "Commercial Window Cleaning",
    description:
      "Storefront, office and facility glass on a one-time or recurring schedule, often booked on the same calendar as a commercial array.",
    href: "/services/commercial-window-cleaning",
    ctaLabel: "Commercial window cleaning"
  },
  {
    title: "Pressure Washing",
    description:
      "A separate exterior service for driveways, concrete, walkways and patios. Ground surfaces, not panel glass, but frequently the same site visit.",
    href: "/services/pressure-washing",
    ctaLabel: "Pressure washing services"
  },
  {
    title: "Parking Lot & Exterior Maintenance",
    description:
      "Routine upkeep across lots, entries and perimeter areas at commercial and managed properties, between the larger exterior cleaning visits.",
    href: "/services/parking-lot-exterior-maintenance",
    ctaLabel: "Exterior property maintenance"
  },
  {
    title: "Commercial Cleaning",
    description:
      "Recurring janitorial service for offices, retail and facilities. Where a property already has a schedule, exterior work folds into the same calendar.",
    href: "/services/commercial-cleaning",
    ctaLabel: "Seattle commercial cleaning"
  }
];

// ─── Seattle neighborhoods ────────────────────────────────────────────────
// Seattle neighborhoods only. The city itself is confirmed in `serviceAreas`;
// these are areas within it, not additional cities. Surrounding cities are
// rendered from `serviceAreas` further down so the two never drift apart.
const seattleNeighborhoods = [
  "West Seattle",
  "Ballard",
  "Queen Anne",
  "Magnolia",
  "Wallingford",
  "Green Lake",
  "Capitol Hill",
  "Beacon Hill",
  "Rainier Valley",
  "Columbia City",
  "Northgate",
  "University District"
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    title: "Request a Quote",
    description:
      "Send your property location, roughly how many panels you have, where the array sits, and how it can be reached. A photo from the ground helps more than a paragraph of description."
  },
  {
    title: "Review the Scope",
    description:
      "We look at panel placement, visible condition, roof or ground access, and what your schedule needs to work around, then come back with the scope and the next steps."
  },
  {
    title: "Confirm the Details",
    description:
      "Scope, timing, access arrangements and any other exterior services in the same visit are agreed before the date is booked. Nothing gets added on the day without asking."
  },
  {
    title: "Complete the Cleaning",
    description:
      "Panel surfaces are cleaned to the agreed scope, with debris cleared from panel edges and frame rails and stubborn spotting given individual attention where it is safe to reach."
  },
  {
    title: "Final Check & Handover",
    description:
      "Accessible panels and the surrounding work area get a final visual review, anything that could not be reached is reported, and a return timeframe is set if you want one."
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "Does rain clean solar panels in Seattle?",
    answer:
      "Partly. Steady rain rinses loose dust and light surface particles off panel glass, which is why panels here rarely look as bad as they would in a dry, dusty climate. What rain does not reliably remove is anything that has bonded to the surface: bird droppings, tree sap, sticky pollen, dried mineral spotting and organic residue. Rain also carries its own dirt, and where water sits on a low-pitch panel and evaporates rather than running off, it can leave spotting behind rather than take it away."
  },
  {
    question: "How often should solar panels be cleaned in Seattle?",
    answer:
      "There is no single correct interval, and any company quoting one before seeing your property is guessing. Some owners book annually, some twice a year, and some simply call when buildup becomes visible. What actually drives it is tree cover, bird activity, panel angle, how exposed the property is, and how much pollen and leaf drop it catches. A shaded house under mature firs and an open array on a commercial roof are genuinely different situations."
  },
  {
    question: "Can dirty solar panels affect energy production?",
    answer:
      "Heavy buildup physically sits between sunlight and the panel surface, so keeping glass clear means dirt is not unnecessarily obstructing it. We will not put a percentage on the difference, because actual electricity production depends on far more than surface cleanliness: system design, panel orientation, shading, weather, seasonal daylight and equipment condition all matter. If output has dropped noticeably and the panels are not visibly dirty, that is a question for a qualified solar technician rather than a cleaning company."
  },
  {
    question: "Can you pressure wash solar panels?",
    answer:
      "High-pressure washing is not treated as the default method for panel glass. Panels are a sealed assembly of glass, frame, gaskets and wiring, and forcing water at pressure into seals and junctions is not an appropriate way to remove surface dirt. Pressure washing is offered here as a separate exterior service for durable ground surfaces such as driveways, concrete and walkways. Panel cleaning uses an approach suited to the panel surface, the condition of the system and the manufacturer considerations that apply to it."
  },
  {
    question: "Is professional solar panel cleaning safe?",
    answer:
      "It depends on doing the assessment first. Roof pitch, how the array can be reached, the condition of the glass and frames, and what the manufacturer expects all shape whether and how a system should be cleaned. Where an array or part of one cannot be reached safely, we say so rather than attempting it. That is also the honest answer to why some quotes come back covering only part of a system."
  },
  {
    question: "What do you use to clean solar panels?",
    answer:
      "We use panel-appropriate cleaning methods selected according to the surface condition, the type of buildup and how the system can be accessed. Loose debris comes off first, then surface film is loosened and lifted rather than blasted. High pressure is not treated as the default approach for panel glass, and nothing is applied to a system without first considering the condition of the glass, seals and frames."
  },
  {
    question: "Do you clean rooftop solar panels?",
    answer:
      "Yes, where access and safety allow. Rooftop arrays on houses, garages, and commercial and institutional buildings are the most common request. The access route, the roof pitch and where a technician can safely work are all confirmed during the quote, and the scope reflects what can genuinely be reached at your property."
  },
  {
    question: "Do you clean ground-mounted solar panels?",
    answer:
      "Yes, for accessible ground-mounted arrays. Panels on frames in a yard, at a workshop or beside an outbuilding are usually the most straightforward systems to clean thoroughly, because the whole surface can be worked from stable ground. We check the surrounding vegetation and footing before starting."
  },
  {
    question: "Do you provide commercial solar panel cleaning in Seattle?",
    answer:
      "Yes. Building-mounted arrays on offices, retail properties, schools, places of worship, apartment and multifamily buildings, warehouses and managed properties are all within scope, subject to roof access and a safe working area. Larger sites are quoted on panel count, row layout and reachable area, and scheduled around tenants, staff and operating hours."
  },
  {
    question: "How long does solar panel cleaning take?",
    answer:
      "It varies more than people expect, so we will not put a fixed figure on it before seeing the system. Panel count is only part of it: access, roof pitch, array layout, how much has built up and what the property allows on the day all change the timing. A small ground-mounted array and a multi-row commercial roof are not comparable jobs. The quote will tell you what to expect for your property."
  },
  {
    question: "How much does solar panel cleaning cost in Seattle?",
    answer:
      "Pricing is quoted per property rather than published as a flat rate, because the same panel count can be an easy job or a difficult one depending on access. The main factors are panel count, rooftop versus ground-mounted, building height, roof pitch, array layout, how much buildup there is, whether the property is residential or commercial, any scheduling restrictions, and whether other exterior services are being done in the same visit. Send us the details and the quote is free."
  },
  {
    question: "Can solar panel cleaning be combined with window cleaning?",
    answer:
      "Yes, and it is the most common pairing we see. Both are glass, both are exterior work, and both are usually reached the same way, so combining them keeps one crew and one visit on the property. Pressure washing for driveways and walkways is often added to the same booking as well. Ask for both in the same quote request and they will be scoped together."
  },
  {
    question: "Do you remove bird droppings and pollen from panels?",
    answer:
      "Yes. Both fall squarely within normal surface cleaning, and between them they are the reason for most of the calls we get about panels. Droppings need individual attention rather than a rinse because they bond to the glass, and pollen is dealt with as a film across the whole surface rather than spot by spot."
  },
  {
    question: "What areas around Seattle do you serve?",
    answer:
      "Seattle is where most of this work happens, across neighborhoods including West Seattle, Ballard, Queen Anne, Magnolia, Wallingford, Green Lake, Capitol Hill, Beacon Hill, Rainier Valley, Columbia City, Northgate and the University District. The surrounding cities we serve include Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Bothell, Mill Creek, North Lynnwood and Tacoma. If your property sits toward the edge of that, a quick call will settle it."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// SCHEMA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component, so
// it is intentionally not repeated in this @graph. The LocalBusiness entity
// lives at /#business and is referenced by @id, never redefined here.
// No Review or AggregateRating is emitted: no verified reviews exist.
// ─────────────────────────────────────────────────────────────────────────

const solarPanelCleaningSchema = {
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
      // One Service entity covers the whole page. Residential and commercial
      // panel cleaning are described inside it rather than split into
      // competing entities, because this is the single page for both.
      "@type": "Service",
      "@id": `${SITE_URL}${PAGE_PATH}#service`,
      name: "Solar Panel Cleaning Services in Seattle",
      serviceType: "Solar Panel Cleaning",
      alternateName: ["Solar Array Cleaning", "Solar Panel Washing", "Photovoltaic Panel Cleaning"],
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area homeowners, residents, business owners, property managers, facility managers and building owners with rooftop or ground-mounted solar panel systems"
      },
      description:
        "Residential and commercial solar panel cleaning in Seattle. Exterior surface cleaning for rooftop and accessible ground-mounted photovoltaic arrays, removing pollen, dust, bird droppings, leaves, evergreen needles, tree debris, cobwebs and dried outdoor residue from panel glass and frames. Available as one-time cleaning or on a seasonal schedule, with the method matched to the panel surface and the scope set by an access and safety assessment.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Solar Panel Systems Cleaned",
        itemListElement: systemTypes.map((system) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${system.title} Cleaning`,
            description: system.summary
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

export default function SolarPanelCleaningPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60" aria-hidden />
        {/* Second flat layer: the hero photograph is a bright, sunlit scene, so the
            directional gradient alone leaves the glance card low-contrast on mobile. */}
        <div className="absolute inset-0 bg-ink/25" aria-hidden />
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Solar Panel Cleaning", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="eyebrow-light">Seattle Solar Panel Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Solar Panel Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Panel cleaning for homes, businesses and managed properties across Seattle. We clear pollen,
                dust, bird droppings, leaves, needles and dried outdoor residue off panel surfaces using methods
                matched to the glass in front of us, on rooftop and accessible ground-mounted arrays, with access
                and safety confirmed before anything is booked.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href={QUOTE_HREF} className="cta-gold">
                  {siteConfig.primaryCta}
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  Call {siteConfig.phoneDisplay}
                </Link>
                <a
                  href="#buildup"
                  className="inline-flex items-center px-1 py-3 text-sm font-semibold text-accent underline underline-offset-4 transition-colors hover:text-white"
                >
                  What builds up on panels here
                  <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                </a>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Locally owned and family-operated · Free quotes · {siteConfig.businessHours}
              </p>
            </div>

            <div className="card-dark">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Sun className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">The Common Problem</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Panels sit where nobody looks. Pollen settles across the glass in spring, birds treat the array
                as the best perch on the property, and needles, leaves and tree debris collect along the bottom
                edge through autumn. It builds gradually enough that most owners only notice from a ladder or a
                neighbor&apos;s upstairs window.
              </p>
              <h2 className="mt-5 text-base font-semibold text-white">How We Help</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                We assess the system, the buildup and the access first, then clean the panel surfaces carefully
                and clear the debris caught around them, so the array is maintained the same way the rest of the
                property&apos;s exterior is, rather than left to whatever the weather does.
              </p>
              <ul className="mt-5 grid gap-2.5 border-t border-white/10 pt-5">
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

      {/* ── STICKY JUMP NAV (desktop only) ──────────────────────────────── */}
      <div className="sticky top-16 z-30 hidden border-y border-brand-100 bg-white/95 backdrop-blur-md md:block">
        <Container>
          <nav
            aria-label="On this page"
            className="flex items-center gap-5 overflow-x-auto py-2.5 text-xs font-semibold text-muted [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 whitespace-nowrap transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={QUOTE_HREF}
              className="ml-auto shrink-0 whitespace-nowrap text-brand-700 transition-colors hover:text-brand-900"
            >
              Get a Quote
            </Link>
          </nav>
        </Container>
      </div>

      {/* ── LOCAL INTRODUCTION ──────────────────────────────────────────── */}
      <section className="section-shell-tight scroll-mt-28 bg-white" id="overview" aria-labelledby="overview-heading">
        <Container>
          <ServiceEditorialSplit
            src={SURFACE_IMAGE}
            alt="Close-up of photovoltaic panel glass showing a dulled film across the cell surface"
            width={1200}
            height={800}
            sizes="(max-width: 1023px) 100vw, 44vw"
            aspect="aspect-[3/2]"
            caption="Reference image. Surface film spreads evenly across panel glass, which is why it is difficult to judge from the ground."
            imagePosition="right"
            columns="lg:grid-cols-[1.1fr_0.9fr]"
            align="start"
          >
            <span className="eyebrow">What This Service Is</span>
            <h2 id="overview-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Professional Solar Panel Cleaning in Seattle, WA
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Cleaning From The Heart LLC cleans solar panels for homeowners, business owners and property
              managers throughout Seattle. The work is exterior surface cleaning: pollen, dust, bird droppings,
              leaves, evergreen needles, tree residue, cobwebs and the dried outdoor film that collects on panel
              glass and along frame edges over a season.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Panels here get dirty for reasons that are specific to this city rather than universal. Seattle
              properties sit under mature firs, cedars and street trees, which means needles, leaves and sap
              land on roofs all year. Spring brings a pollen load heavy enough to coat every outdoor surface at
              once. Rooftop arrays are the highest perch on most properties, so bird activity concentrates there.
              And the long damp stretches from October onward keep panels wet for days, so dust that lands sticks
              instead of blowing away.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Rain does real work on all of that, and we are not going to pretend otherwise. It rinses loose dust
              and light particles off the glass continuously through the wet season. What it does not do is
              remove material that has bonded to the surface. Droppings, sap, sticky pollen, mineral spotting and
              organic residue survive rainfall that carries ordinary dirt straight off, and on low-pitch panels
              where water pools and evaporates, rain can leave spotting behind rather than take it away.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              That is the gap this service fills. Not every array needs cleaning on a fixed schedule, and any
              company telling you otherwise before looking at your property is guessing. What we do is assess the
              system, tell you what is actually on it, and clean what can be reached safely.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── WHAT BUILDS UP ──────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="buildup">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-14">
            <div>
              <span className="eyebrow">Local Conditions</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                What Builds Up on Solar Panels in Seattle?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Almost all of it is ordinary outdoor material, and almost all of it arrives from something
                growing, flying or driving nearby. Which of these dominates at your property depends far more on
                what is directly around the roof than on anything about the panels themselves.
              </p>
              <div className="mt-7 rounded-2xl border border-brand-100 bg-white p-6">
                <p className="text-sm font-semibold text-ink">Common Seattle panel buildup</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {buildupChips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border border-brand-100 bg-surface px-3 py-1.5 text-xs font-medium text-ink"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ServiceImagePanel
              src={ROOFTOP_IMAGE}
              alt="Rooftop solar panels installed across a tiled roof beside skylights"
              width={1400}
              height={933}
              sizes="(max-width: 1023px) 100vw, 40vw"
              aspect="aspect-[3/2]"
              caption="Reference image. Panel edges, frame rails and the tile courses beside them are where debris collects first."
            />
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {buildupTypes.map(({ Icon, title, description }) => (
              <article key={title} className="card h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── DOES SEATTLE RAIN CLEAN PANELS ──────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-ink text-white" id="rain">
        <Container>
          <ServiceEditorialSplit
            src={OVERCAST_IMAGE}
            alt="Solar panels on a residential roof under a grey overcast sky"
            width={1300}
            height={867}
            sizes="(max-width: 1023px) 100vw, 44vw"
            aspect="aspect-[3/2]"
            variant="dark"
            caption="Reference image. Overcast, damp conditions keep panels wet for long stretches, which changes how dirt behaves on the glass."
            imagePosition="left"
            columns="lg:grid-cols-[0.9fr_1.1fr]"
            align="start"
          >
            <span className="eyebrow-light">The Question Everyone Asks</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Does Seattle Rain Clean Solar Panels?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Partly, and more than it would in most of the country. A city that gets rain this consistently does
              keep loose dust and light surface particles moving off panel glass without anyone doing anything.
              Panels in Seattle genuinely do not develop the thick dust crust that arrays in dry, dusty regions
              build up between storms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              The limitation is what rain cannot shift. Water running down a sloped surface lifts what is sitting
              loose on top of it. It does not lift material that has bonded to the glass, and that covers most of
              the things people actually call about.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                "Bird droppings",
                "Tree sap and resin spotting",
                "Sticky, dried-on pollen",
                "Dried organic residue",
                "Compacted dirt in frame channels",
                "Mineral spotting from evaporation"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              How much rain helps also depends on the system. A steeply pitched array sheds water fast and stays
              cleaner than a shallow one where water pools and evaporates in place. A panel under a fir catches
              debris faster than rain can carry it off. An exposed array on an open roof does better than one
              tucked beside a chimney or a parapet where runoff slows and dirt collects.
            </p>
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-white">On production claims, plainly</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Keeping panel surfaces free of heavy buildup means dirt is not unnecessarily obstructing the
                glass. We will not attach a percentage to that. Actual electricity production depends on system
                design, panel orientation, shading, weather, seasonal daylight and equipment condition, and
                anyone promising you a specific efficiency gain from a wash is selling rather than explaining.
              </p>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── RESIDENTIAL ─────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="residential">
        <Container>
          <ServiceEditorialSplit
            src={ARRAY_ANGLE_IMAGE}
            alt="Angled solar panel array mounted on a residential roof against a partly cloudy sky"
            width={1200}
            height={800}
            sizes="(max-width: 1023px) 100vw, 44vw"
            aspect="aspect-[3/2]"
            caption="Reference image. Panel angle changes how much water and debris a roof array sheds on its own."
            imagePosition="right"
            columns="lg:grid-cols-[1.05fr_0.95fr]"
            align="start"
          >
            <span className="eyebrow">Residential</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Residential Solar Panel Cleaning in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Most residential calls follow the same pattern. A homeowner notices the array looks dull from an
              upstairs window, or spots droppings that have been there since summer, or has just had the gutters
              done and been told there are needles packed along the bottom row of panels. Roof-mounted arrays on
              single-family homes are the bulk of this work, along with garage and carport mounts, panels on
              detached structures and accessory dwellings, and ground-mounted arrays that can be reached safely
              from level ground.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Access is assessed before anything is confirmed. Roof pitch, the condition of the roof surface
              itself, where the array sits relative to the eaves, and whether the panels can be worked without
              anyone standing on them all shape what we quote. If part of a system is not safely reachable at
              your property, you will be told that up front rather than discovering it in an invoice.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {residentialProperties.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={QUOTE_HREF} className="cta-primary">
                Get a Free Quote
              </Link>
              <Link
                href="/services/residential-window-cleaning"
                className="inline-flex items-center text-sm font-semibold text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-900"
              >
                Add residential window cleaning
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
              </Link>
            </div>
          </ServiceEditorialSplit>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {residentialReasons.map(({ Icon, title, description }) => (
              <article key={title} className="card h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COMMERCIAL ──────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="commercial">
        <Container>
          <ServiceEditorialSplit
            src={COMMERCIAL_IMAGE}
            alt="Aerial view of a large rooftop solar array across a commercial building roof"
            width={1400}
            height={1050}
            sizes="(max-width: 1023px) 100vw, 44vw"
            aspect="aspect-[4/3]"
            caption="Reference image. Commercial arrays are quoted on panel count, row layout and the area that can be worked safely."
            imagePosition="left"
            columns="lg:grid-cols-[0.95fr_1.05fr]"
            align="start"
          >
            <span className="eyebrow">Commercial</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Commercial Solar Panel Cleaning in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              On the commercial side the driver is usually appearance and routine upkeep rather than a single
              visible problem. A building with a visible array wants it looking maintained, and a facility or
              property manager running an exterior maintenance calendar wants the panels on it alongside the
              glass, the walkways and the parking areas rather than sitting outside every schedule.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Larger systems are quoted on panel count, row layout and the area that can be worked safely, and
              scheduled around how the property actually runs: outside trading hours for retail, around term
              dates for schools, around services for places of worship, and through the property manager for
              multifamily buildings. Existing roof access rules, permits and site inductions are followed, not
              worked around. Very large ground-based solar farms are outside what we take on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Where a property already has a{" "}
              <Link
                href="/services/commercial-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                Seattle commercial cleaning
              </Link>{" "}
              schedule with us, panel cleaning folds into the same calendar, as does{" "}
              <Link
                href="/services/commercial-window-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                commercial window cleaning
              </Link>
              . Managed portfolios are handled the same way as the rest of the exterior work in our{" "}
              <Link
                href="/industries/property-management"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                property management cleaning
              </Link>{" "}
              programs.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={QUOTE_HREF} className="cta-primary">
                Request a Commercial Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </ServiceEditorialSplit>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commercialProperties.map(({ Icon, title, description }) => (
              <article key={title} className="card h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PANEL SYSTEM TYPES ──────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="systems">
        <Container>
          <SectionHeading
            eyebrow="Scope of Work"
            title="Solar Panel Systems We Clean"
            description="Rooftop, ground-mounted and larger building-mounted arrays at homes, businesses and managed properties across the Seattle area."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {systemTypes.map(({ Icon, title, summary, points }) => (
              <article key={title} className="card flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
                  <Icon className="h-6 w-6 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{summary}</p>
                <ul className="mt-5 grid flex-1 gap-2.5 border-t border-brand-100 pt-5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-brand-100 bg-surface px-6 py-5 text-sm leading-relaxed text-muted">
            Final scope always depends on access, panel condition, property layout and safety considerations. Two
            properties with the same number of panels can end up with genuinely different quotes, and occasionally
            with different answers about how much of a system can be cleaned at all.
          </p>
        </Container>
      </section>

      {/* ── MID-PAGE CTA BAND ───────────────────────────────────────────── */}
      <section className="bg-ink text-white">
        <Container className="section-shell-tight">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
                Not sure whether your array needs cleaning yet?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/65">
                Send a photo from the ground, roughly how many panels you have and your property location. We
                will tell you honestly whether it is worth booking now or waiting until after the next season.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={QUOTE_HREF} className="cta-gold">
                Get a Free Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-ghost">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHAT WE REMOVE ──────────────────────────────────────────────── */}
      <section className="section-shell bg-white" id="removed">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
            <div>
              <span className="eyebrow">Included</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                What We Remove From Solar Panel Surfaces
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Everything below is ordinary exterior soiling on panel glass, frames and the debris caught around
                them. It is what accumulates on a Seattle roof over a season, and it is what a panel clean is
                actually for.
              </p>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {removalItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-surface p-7 md:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <AlertTriangle className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">What panel cleaning does not cover</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Solar panel cleaning addresses surface buildup. It is not an inspection, a repair or a
                performance service, and treating it as one would be misleading. Electrical faults, damaged
                panels, mounting problems and system performance issues should be handled by a qualified solar
                technician.
              </p>
              <ul className="mt-6 grid gap-2.5 border-t border-brand-100 pt-6">
                {outOfScopeItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                If something on your array looks like damage rather than dirt, we will point it out and leave it
                to a solar specialist rather than clean around it and say nothing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── HOW WE CLEAN ────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="method">
        <Container>
          <ServiceEditorialSplit
            src={BRUSH_IMAGE}
            alt="A soft brush head being worked across wet solar panel glass during cleaning"
            width={1300}
            height={867}
            sizes="(max-width: 1023px) 100vw, 42vw"
            aspect="aspect-[3/2]"
            caption="Reference image. Panel surfaces are worked rather than blasted, with the method chosen for the glass and its condition."
            imagePosition="right"
            columns="lg:grid-cols-[1.1fr_0.9fr]"
            align="start"
          >
            <span className="eyebrow">Our Method</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How We Clean Solar Panels
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A panel is not a window and it is not a driveway. It is a sealed assembly of glass, frame, gaskets
              and wiring sitting somewhere awkward to reach, so the sequence matters more than the equipment
              does. What follows is how the work actually runs, from the first look at the property to the point
              where the scope is signed off.
            </p>
            <div className="mt-7 rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-start gap-3">
                <Droplets className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-ink">About pressure washing and panels</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Pressure washing is a separate exterior cleaning service we offer for durable ground surfaces
                    such as driveways, concrete and walkways. High-pressure washing is not treated as the default
                    approach for panel glass. Panels need a cleaning approach suited to the panel surface, the
                    condition of the system and the manufacturer considerations that apply to it. If you want
                    both done, they are quoted together and carried out differently.
                  </p>
                  <Link
                    href="/services/pressure-washing"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-900"
                  >
                    Pressure washing services
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
          </ServiceEditorialSplit>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {methodSteps.map(({ Icon, title, description }, index) => (
              <li key={title} className="card h-full">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="section-shell bg-white" id="why-us">
        <Container>
          <SectionHeading
            eyebrow="Why Us"
            title="Why Choose Cleaning From The Heart LLC for Solar Panel Cleaning?"
            description="A locally owned, family-operated Seattle cleaning company that treats panel cleaning as part of maintaining a property's exterior, not as a specialty upsell."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseItems.map(({ Icon, title, description }) => (
              <article key={title} className="card h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FREQUENCY ───────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="frequency">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <span className="eyebrow">Scheduling</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                How Often Should Solar Panels Be Cleaned in Seattle?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                There is no universal answer here, and we would rather say that than invent a schedule. Some
                property owners book annually, usually in late spring once pollen has finished. Others go twice a
                year, after pollen and again after leaf drop. Plenty simply call when the panels start looking
                dull or when droppings have obviously been sitting there a while. All three are reasonable.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                What tips a property toward more frequent cleaning is almost always its surroundings rather than
                its system. A house under mature firs with regular bird activity on the roof will need attention
                more often than an exposed array on an open lot half a mile away. Panel angle matters too:
                steeper panels shed water and debris on their own, shallower ones hold both.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Commercial properties tend to settle into a rhythm faster, because the panels get added to an
                exterior maintenance calendar that already exists and the interval gets adjusted after the first
                couple of visits based on what actually turns up on the glass. That is the honest way to arrive
                at a frequency: start from the property, not from a rule.
              </p>

              <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-6">
                <p className="text-sm font-semibold text-ink">What determines how often</p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {frequencyFactors.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-brand-100 bg-white p-7 md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Eye className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  You may want to consider cleaning when
                </h3>
                <ul className="mt-5 grid gap-3">
                  {cleaningTriggers.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-brand-100 bg-white p-7 md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Repeat className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">One-time or repeating</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A single visit works for a property that has gone a few years without one, or where a house is
                  being prepared for sale. A repeating schedule suits properties where the same conditions come
                  back every year and where the panels are already part of a wider exterior maintenance plan.
                </p>
                <Link
                  href={QUOTE_HREF}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-900"
                >
                  Ask what makes sense for your property
                  <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SEASONAL TIMING ─────────────────────────────────────────────── */}
      <section className="section-shell bg-white" id="timing">
        <Container>
          <SectionHeading
            eyebrow="Timing"
            title="When Is the Best Time to Clean Solar Panels in Seattle?"
            description="No single month is universally right. Weather and what is actually on the panels matter far more than a date, but these are the points in the year when it most often makes sense."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {seasonalTiming.map(({ Icon, title, description }) => (
              <article key={title} className="card h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 rounded-2xl border border-brand-100 bg-surface px-6 py-5 text-sm leading-relaxed text-muted">
            In practice the weather decides the day rather than the calendar. Work gets planned around dry enough
            conditions and safe access, which in Seattle means a certain amount of flexibility on both sides. If
            a date has to move because a roof is not safe to work on that morning, it moves.
          </p>
        </Container>
      </section>

      {/* ── COST ────────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-ink text-white" id="cost">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div>
              <span className="eyebrow-light">Pricing</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                How Much Does Solar Panel Cleaning Cost in Seattle?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                We do not publish a flat rate, because the same panel count can be a straightforward job at one
                property and a genuinely difficult one at another. A twelve-panel array on a single-story
                ground-accessible roof and a twelve-panel array high on a steep pitch behind a chimney are not
                the same piece of work, and pricing either from a table would mean overcharging one of them.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                What a quote is built from is listed opposite. Access and safety usually move the number more
                than panel count does, which is why the assessment comes first and the price comes second.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Tell us roughly how many panels you have, where they are located on the property, and your
                property location. We can review the scope and give you the next steps. Quotes are free and there
                is no obligation attached to asking.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href={QUOTE_HREF} className="cta-gold">
                  Get a Free Solar Panel Cleaning Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <ClipboardList className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">What the quote is based on</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {quoteFactors.map(({ Icon, label }) => (
                  <li key={label} className="flex items-start gap-2.5 text-sm text-white/70">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span className="leading-relaxed">{label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/45">
                Combining panel cleaning with window cleaning or pressure washing in the same visit is quoted as
                one job. We do not advertise package discounts we have not set.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── COMBINED EXTERIOR SERVICES ──────────────────────────────────── */}
      <section className="section-shell bg-white" id="related">
        <Container>
          <SectionHeading
            eyebrow="Related Services"
            title="Combine Solar Panel Cleaning With Other Exterior Services"
            description="Panels are one part of a property's exterior. Booking the surrounding work in the same visit means one crew, one schedule and one quote instead of three separate appointments."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map(({ title, description, href, ctaLabel }) => (
              <article key={title} className="card flex h-full flex-col gap-3">
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>
                <Link
                  href={href}
                  className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
                >
                  {ctaLabel}
                  <ArrowRight className="ml-1.5 h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted">
            Not sure what belongs in the same visit? The full list of{" "}
            <Link
              href="/services"
              className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
            >
              cleaning services we offer in Seattle
            </Link>{" "}
            covers interior and exterior work for homes, businesses and managed properties, and anything on it
            can be scoped into a single quote.
          </p>
        </Container>
      </section>

      {/*
        ─── IMAGE NOTES ─────────────────────────────────────────────────────
        No Cleaning From The Heart solar panel photography exists yet, so this
        section deliberately does NOT present a before/after pair. The stock
        photograph below is captioned as a reference image, and the real
        Results Gallery CTA is kept in its own visually separate card.

        When genuine solar jobs have been photographed, add the files to
        /public/images/services/solar-panel-cleaning/ plus matching
        `galleryItems` entries in lib/site.ts, and swap the reference panel
        below for a real before/after pair. Priority shots:
          1. Rooftop residential array, before/after pair
          2. Bird-dropping or pollen buildup close-up, before/after pair
          3. Ground-mounted array, before/after pair
          4. Commercial roof array, wide shot
        Gallery before/after files in this repo are composites, so any that get
        used here must stay at aspect="none" — cropping slices a panel in half.
        ─────────────────────────────────────────────────────────────────────
      */}
      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface" id="results">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="Solar Panel Cleaning Results"
            description="Our photographed before-and-after work currently covers exterior surfaces, floor care and window cleaning at Seattle-area properties. Solar jobs will be added to the same gallery as they are photographed."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <ServiceImagePanel
              src={CREW_IMAGE}
              alt="Technicians using extension poles with brush heads to clean a row of rooftop solar panels"
              width={1400}
              height={933}
              sizes="(max-width: 1023px) 100vw, 52vw"
              aspect="aspect-[3/2]"
              caption="Reference image, not a Cleaning From The Heart project. It shows the kind of pole-and-brush access commonly used where panels cannot be reached by hand."
            />

            <div className="flex flex-col justify-center rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                <Sparkles className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">See our real before &amp; after work</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The results gallery holds genuine photographs from Seattle-area properties: exterior surface
                cleaning, window cleaning, floor care and commercial work, shown before and after. Every image in
                it is our own. Nothing on this page is presented as a company project unless it appears there.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/gallery" className="cta-primary">
                  See Before &amp; After Results
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── OUR PROCESS ─────────────────────────────────────────────────── */}
      <section className="section-shell bg-white" id="process">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How Booking Solar Panel Cleaning Works"
            description="Five steps from the first message to a completed visit, with the scope confirmed before the date is booked rather than negotiated on the roof."
          />

          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(({ title, description }, index) => (
              <li key={title} className="card h-full">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                  Step {index + 1}
                </span>
                <h3 className="mt-3 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href={QUOTE_HREF} className="cta-primary">
              {siteConfig.primaryCta}
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call {siteConfig.phoneDisplay}
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center px-1 py-3 text-sm font-semibold text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-900"
            >
              See Before &amp; After Results
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── SEATTLE NEIGHBORHOODS ───────────────────────────────────────── */}
      <section className="section-shell bg-surface" id="neighborhoods">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <span className="eyebrow">Across the City</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Solar Panel Cleaning Across Seattle
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Conditions on a roof change noticeably from one part of the city to another, and it shows up on
                panel glass. Properties in the older, heavily wooded neighborhoods sit under mature conifers and
                deciduous street trees, so needles, leaves and sap dominate what collects on an array. Shade from
                the same trees keeps roofs damp longer, which is why dust sticks rather than blows off.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Closer to the arterials and denser commercial blocks, the mix shifts toward road film, brake dust
                and airborne grit, with construction dust added wherever a site has opened up nearby. Exposed
                ridges and west-facing slopes catch more weather and more wind-carried debris, while lower, more
                sheltered pockets hold moisture. Roof pitch and how much of the array sits in open sun then
                decide how much of that rain moves on its own.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                None of it changes the work fundamentally. It does change how often a property is worth
                revisiting, and it is part of what gets discussed when a quote is put together rather than
                treated as background noise.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">Seattle neighborhoods we work in</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {seattleNeighborhoods.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-brand-100 bg-surface px-3.5 py-2 text-sm font-medium text-ink"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-100 pt-5 text-sm leading-relaxed text-muted">
                Elsewhere in the city too. If you are not sure whether your address is covered, call and we will
                tell you straight away.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SURROUNDING SERVICE AREAS ───────────────────────────────────── */}
      <section className="section-shell-tight scroll-mt-28 bg-white" id="service-area">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-surface px-7 py-9 md:px-12 md:py-11">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Solar Panel Cleaning Near Seattle
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Seattle is where most of this work happens, and the surrounding cities below are served from
                  the same schedule. Panel count, access and safe working area are all confirmed when we quote,
                  so if your property sits toward the edge of these areas, a quick call will settle whether we
                  can cover it properly.
                </p>
              </div>
              <div>
                <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
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
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Solar Panel Cleaning FAQs</h2>
              <p className="mt-4 text-base text-muted">
                What homeowners, business owners and property managers ask most before booking panel cleaning in
                Seattle.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5">
                <p className="text-sm font-semibold text-ink">Question about your own system?</p>
                <p className="mt-1 text-sm text-muted">
                  Send your panel count, where the array sits and a photo from the ground, and we will tell you
                  what is realistic at your property.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={QUOTE_HREF} className="cta-primary px-4 py-2 text-xs">
                    Ask Us Directly
                  </Link>
                  <Link href={siteConfig.phoneHref} className="cta-secondary px-4 py-2 text-xs">
                    {siteConfig.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {faqItems.map((faq) => (
                <details
                  key={faq.question}
                  className="group overflow-hidden rounded-2xl border border-brand-100 bg-white"
                >
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

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow-light">Solar Panel Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Need Solar Panel Cleaning in Seattle?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Request a free quote for residential or commercial panel cleaning in Seattle and the
                  surrounding service areas. Tell us about your property, roughly how many panels you have and
                  where the array sits, and we will work out the appropriate scope with you.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Free property-specific quote", "One-time or seasonal service", "Access and safety assessed first"].map(
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
                  <Link href={QUOTE_HREF} className="cta-gold w-full justify-center">
                    {siteConfig.primaryCta}
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Takes 60 seconds · No obligation</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-ghost w-full justify-center">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    Call {siteConfig.phoneDisplay}
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">{siteConfig.businessHours}</span>
                </div>
              </div>
            </div>

            <p className="relative mt-8 text-xs text-white/30">
              Residential · Commercial · Seattle &amp; surrounding areas
            </p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solarPanelCleaningSchema) }}
      />
    </>
  );
}
