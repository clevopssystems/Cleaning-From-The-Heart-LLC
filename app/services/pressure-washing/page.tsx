import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Car,
  CheckCircle2,
  ChevronDown,
  Church,
  ClipboardList,
  CloudRain,
  DoorOpen,
  Droplets,
  Footprints,
  Fuel,
  Gauge,
  GraduationCap,
  Hotel,
  House,
  Key,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  Repeat,
  Search,
  ShieldCheck,
  SprayCan,
  Store,
  Trash2,
  TreePine,
  Truck,
  Users,
  Utensils,
  Warehouse,
  Waves
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const PAGE_PATH = "/services/pressure-washing";

const PAGE_TITLE = "Pressure Washing Seattle | Cleaning From The Heart";
const PAGE_DESCRIPTION =
  "Pressure washing in Seattle for driveways, concrete, sidewalks, patios, storefronts and parking areas at homes, businesses and managed properties. Free quote.";

// Stock photograph, not a company project photo. It is used because it shows
// flat-surface concrete cleaning accurately; the caption never presents it as
// our work. Real company photos are used in the results section further down.
const INTRO_IMAGE = "/home/services/pressure-wash.jpg";

// Portrait stock photograph beside the introduction copy. Rendered at its own
// ratio so the wand and spray fan are not cropped out of frame.
const OVERVIEW_IMAGE = "/services/pressure-washing-intro.png";

export const metadata: Metadata = {
  // `absolute` bypasses the layout title template, which would otherwise append
  // the brand a second time. The brand is written into PAGE_TITLE here instead
  // so this page leads with the primary term and still names the company.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    // Primary
    "pressure washing Seattle",
    "pressure washing services Seattle",
    "Seattle pressure washing",
    "pressure washing company Seattle",
    "professional pressure washing Seattle",
    "power washing Seattle",
    "power washing services Seattle",
    // Residential cluster
    "residential pressure washing Seattle",
    "driveway pressure washing Seattle",
    "driveway cleaning Seattle",
    "concrete pressure washing Seattle",
    "sidewalk pressure washing Seattle",
    "walkway pressure washing Seattle",
    "patio pressure washing Seattle",
    "residential concrete cleaning Seattle",
    "exterior surface cleaning Seattle",
    // Commercial cluster
    "commercial pressure washing Seattle",
    "commercial power washing Seattle",
    "commercial concrete cleaning Seattle",
    "storefront pressure washing Seattle",
    "commercial sidewalk cleaning Seattle",
    "parking garage pressure washing Seattle",
    "loading dock pressure washing Seattle",
    "pressure washing for property managers Seattle"
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
        url: INTRO_IMAGE,
        alt: "A rotary surface cleaner running across a concrete surface during pressure washing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [INTRO_IMAGE]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const jumpLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Surfaces", href: "#surfaces" },
  { label: "Seattle Weather", href: "#seattle" },
  { label: "Residential", href: "#residential" },
  { label: "Driveways", href: "#driveways" },
  { label: "Concrete", href: "#concrete" },
  { label: "Patios", href: "#patios" },
  { label: "Commercial", href: "#commercial" },
  { label: "Parking", href: "#parking" },
  { label: "Properties", href: "#properties" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faq" }
];

const glanceItems = [
  "Driveways, concrete, sidewalks, walkways, patios and entries",
  "Storefronts, parking areas, loading docks and service areas",
  "Surfaces assessed before the pressure is set",
  "One-time cleanups or recurring exterior maintenance"
];

const trustStripItems = [
  { Icon: House, label: "Homes, businesses & managed properties" },
  { Icon: ClipboardList, label: "Free written quote before we book" },
  { Icon: CalendarClock, label: "Weekday, weekend & after-hours work" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// ─── Surfaces ─────────────────────────────────────────────────────────────
// Deliberately mixed: the first four categories are shared by houses and
// businesses, the next three are commercial-specific, and the last is the
// catch-all for surfaces that only get cleaned after an on-site assessment.
const surfaceCategories = [
  {
    Icon: Car,
    title: "Driveways & Concrete",
    description:
      "Residential driveways, parking aprons, garage approaches and the flat concrete around a building. Surface cleaners cover open slabs evenly so the finish stays consistent, and edges, joints and corners are worked by hand."
  },
  {
    Icon: Footprints,
    title: "Sidewalks & Walkways",
    description:
      "Front paths, side returns, public sidewalk frontage, pedestrian routes between buildings and shared walkways through a property. Constant foot traffic, permanent weather exposure, and the first surface anyone stands on."
  },
  {
    Icon: TreePine,
    title: "Patios & Outdoor Hard Surfaces",
    description:
      "Concrete and paver patios, flagstone areas, courtyards, seating areas and breezeways. Shaded corners on these hold organic growth longest, which is why they are the most common residential request here."
  },
  {
    Icon: DoorOpen,
    title: "Entrances, Steps & Porches",
    description:
      "Entry pads, exterior stairs and landings, porch concrete, thresholds and ramp approaches. Small areas that take far more traffic per square foot than anything around them, so they show wear first."
  },
  {
    Icon: Store,
    title: "Storefronts & Commercial Frontage",
    description:
      "The concrete directly outside a shop, restaurant or office entrance, plus the frontage below display glass and any outdoor seating or queue space beside the door."
  },
  {
    Icon: Building2,
    title: "Parking Areas & Garages",
    description:
      "Garage floors, drive lanes, ramps, stair and elevator approaches, and selected surfaces in open parking areas. Enclosed structures need drainage and containment planned before anyone starts."
  },
  {
    Icon: Truck,
    title: "Loading & Service Areas",
    description:
      "Dock aprons, delivery bays, service entrances, back-of-building concrete and the dumpster pads and waste-enclosure floors behind them. Usually the dirtiest area on a property and the least often cleaned."
  },
  {
    Icon: Layers,
    title: "Other Appropriate Exterior Surfaces",
    description:
      "Ground-level exterior wall surfaces, column bases, planter walls and hard landscaping. Brick, masonry, painted finishes and older mortar are assessed first, because material and condition decide whether pressure is appropriate at all."
  }
];

// ─── Buildup types ────────────────────────────────────────────────────────
const buildupTypes = [
  {
    Icon: Droplets,
    title: "Dirt, Silt & General Grime",
    description: "Airborne dust, tracked-in soil and road grit that dulls concrete evenly until nobody notices how dark it has gone."
  },
  {
    Icon: Waves,
    title: "Moss, Algae & Organic Growth",
    description: "The green and black film that forms on damp, shaded hard surfaces, and the moss that establishes in joints and low spots."
  },
  {
    Icon: Footprints,
    title: "Gum & Traffic Residue",
    description: "Compacted gum, scuffing and the dark traffic lanes that develop on a front path or a walkway where everyone walks the same line."
  },
  {
    Icon: TreePine,
    title: "Leaf, Tannin & Planting Marks",
    description: "Dark tannin staining where leaves have broken down on concrete, and the silt that washes onto paths from beds, borders and lawns."
  },
  {
    Icon: Fuel,
    title: "Oil & Grease Staining",
    description: "Drips on a driveway or in a parking area, grease around dock doors, and kitchen exhaust residue that settles on nearby ground surfaces."
  },
  {
    Icon: Car,
    title: "Tire Marks & Vehicle Grime",
    description: "Rubber deposits, brake dust and road film left on driveways, garage floors, drive lanes and dock aprons by daily vehicle movement."
  },
  {
    Icon: CloudRain,
    title: "Weather & Runoff Staining",
    description: "Rain-carried dirt, downspout runoff trails and the streaking that gathers on concrete below gutters, roof edges and overhangs."
  },
  {
    Icon: Utensils,
    title: "Food, Drink & Waste Residue",
    description: "Spills around outdoor seating and back doors, plus the leakage on dumpster pads and enclosure floors behind restaurants and retail."
  }
];

// ─── Residential ──────────────────────────────────────────────────────────
// Scope here is deliberately limited to durable exterior hard surfaces at
// ground level, which is what lib/site.ts documents (driveways, sidewalks,
// exterior surfaces) and what the real gallery photographs show. Roof washing,
// deck and fence washing are not claimed anywhere on this site, so they are
// not claimed here either.
const residentialAreas = [
  "Driveways, parking aprons and garage approaches",
  "Front paths, side returns and garden walkways",
  "Public sidewalk frontage outside the property",
  "Concrete and paver patios and seating areas",
  "Entry steps, landings, porches and thresholds",
  "Courtyards and other durable outdoor hard surfaces"
];

const residentialReasons = [
  {
    Icon: House,
    title: "Curb appeal that has slipped without anyone noticing",
    description:
      "Concrete darkens slowly and evenly, so the change never registers day to day. The line where a cleaned section meets an uncleaned one is usually the first time a homeowner sees how far it had gone."
  },
  {
    Icon: Key,
    title: "Selling, listing or letting a property",
    description:
      "Exterior hard surfaces photograph badly when they are green or grey, and the driveway and front path are in almost every listing photo. This is commonly booked in the week before photography or a first viewing."
  },
  {
    Icon: CloudRain,
    title: "A wet season that got the better of a surface",
    description:
      "After a Seattle autumn and winter, shaded paths and north-facing patios carry a season of organic growth. A single spring clean resets them, and shaded areas often move to a repeating visit."
  },
  {
    Icon: Gauge,
    title: "A surface that needs judgement, not force",
    description:
      "Pavers with sand joints, older brick, soft mortar and painted steps all need a different approach from a sound concrete slab. Which category a surface falls into is settled at the assessment, before any work is quoted."
  }
];

// ─── Driveways ────────────────────────────────────────────────────────────
const drivewayBuildup = [
  {
    title: "Dirt, silt and general grime",
    description:
      "Road grit, airborne dust and soil washed down from beds and lawns. This is the layer that dulls a driveway uniformly, and it is also the one that lifts most completely."
  },
  {
    title: "Moss, algae and organic growth",
    description:
      "The green film and dark patches that establish on damp concrete, plus moss rooted into control joints, expansion gaps and the low spots where water sits after rain."
  },
  {
    title: "Tire marks and traffic residue",
    description:
      "Rubber deposits and brake dust where cars turn and park, and the darker wheel tracks that develop along the line vehicles use every day."
  },
  {
    title: "Oil and fluid staining",
    description:
      "Drips under a parking spot. Recent marks sitting on the surface usually improve considerably. Oil that has soaked into porous concrete over years has stained the slab itself, and cleaning improves those areas rather than erasing them."
  },
  {
    title: "Leaf and tannin marks",
    description:
      "Dark staining left where leaves have sat and broken down on the concrete, common under trees and along the edges of a driveway."
  },
  {
    title: "Runoff trails and weather streaking",
    description:
      "The dirt lines that form where water runs off a roof edge, a downspout or a slope and crosses the driveway on the same path every time it rains."
  }
];

// ─── Patios ───────────────────────────────────────────────────────────────
const patioSurfaces = [
  {
    title: "Poured concrete patios",
    description:
      "The most straightforward surface on this list. Sound concrete tolerates a surface cleaner well and cleans up evenly across a large area."
  },
  {
    title: "Paver and flagstone areas",
    description:
      "Cleaned with the joints in mind. Sand-filled joints can be disturbed by careless work, so pressure and angle are adjusted, and you will be told if joint sand is likely to need topping up afterwards."
  },
  {
    title: "Courtyards and shared outdoor areas",
    description:
      "Seating areas, breezeways and the hard surfaces between buildings on condominium, apartment and office properties, where shaded corners hold growth longest."
  },
  {
    title: "Steps, edging and surrounds",
    description:
      "The exterior stairs, kerbs, low walls and hard edging around a patio, worked by hand so the finish matches the open area rather than stopping at it."
  }
];

// ─── Properties and industries served ─────────────────────────────────────
const residentialProperties = [
  {
    Icon: House,
    title: "Houses & Townhomes",
    description:
      "Driveways, front paths, patios, porches and entry steps at single-family homes and townhomes across the Seattle area.",
    href: "/services/residential-cleaning",
    linkLabel: "Residential cleaning"
  },
  {
    Icon: Users,
    title: "Condominium & HOA Common Areas",
    description:
      "Shared walkways, breezeways, entry courtyards and garage levels, quoted for the association or the managing agent.",
    href: "/industries/property-management",
    linkLabel: "Property management cleaning"
  },
  {
    Icon: Key,
    title: "Rental & Investment Properties",
    description:
      "Exterior hard surfaces cleaned between tenancies, often alongside the interior turnover clean so the whole property is handled in one visit.",
    href: "/services/move-in-move-out-cleaning",
    linkLabel: "Move-in / move-out cleaning"
  }
];

const propertiesServed = [
  {
    Icon: Building2,
    title: "Office Buildings",
    description: "Entry plazas, walkways, exterior stairs and the concrete that every tenant and visitor crosses on the way in.",
    href: "/industries/offices-commercial-buildings",
    linkLabel: "Office & commercial building cleaning"
  },
  {
    Icon: Store,
    title: "Retail & Storefronts",
    description: "Entry areas, shared shopping-centre walkways and the sidewalk frontage a customer judges before opening the door.",
    href: "/industries/retail-stores",
    linkLabel: "Retail store cleaning"
  },
  {
    Icon: Utensils,
    title: "Restaurants & Cafés",
    description: "Patio and entry concrete, back-door service areas and dumpster surrounds, where spills and grease collect fastest.",
    href: "/services/restaurant-cleaning",
    linkLabel: "Restaurant cleaning"
  },
  {
    Icon: GraduationCap,
    title: "Schools & Educational Facilities",
    description: "Entrances, covered walkways, courtyards and play-adjacent hard surfaces, cleaned in breaks and outside school hours.",
    href: "/services/school-facility-cleaning",
    linkLabel: "School facility cleaning"
  },
  {
    Icon: Users,
    title: "Apartments & Condominiums",
    description: "Shared walkways, breezeways, entry courtyards, garage levels and waste-enclosure pads across managed residential properties.",
    href: "/industries/property-management",
    linkLabel: "Property management cleaning"
  },
  {
    Icon: Warehouse,
    title: "Warehouses & Industrial Sites",
    description: "Dock aprons, delivery bays, yard-adjacent concrete and the service routes that take the heaviest vehicle traffic.",
    href: "/industries/warehouses-industrial-facilities",
    linkLabel: "Warehouse & industrial cleaning"
  },
  {
    Icon: Hotel,
    title: "Hospitality Properties",
    description: "Arrival areas, entry canopy concrete, guest walkways and service yards, scheduled around occupancy and check-in times.",
    href: "/industries/hospitality-properties",
    linkLabel: "Hospitality property cleaning"
  },
  {
    Icon: Church,
    title: "Churches & Places of Worship",
    description: "Entry steps, accessible ramps and connecting paths, usually cleaned midweek so weekend services are unaffected.",
    href: "/industries/places-of-worship",
    linkLabel: "Places of worship cleaning"
  },
  {
    Icon: Car,
    title: "Auto Dealerships",
    description: "Display concrete, customer walkways and service-bay approaches, where oil marks and tire residue are constant.",
    href: "/industries/auto-dealerships",
    linkLabel: "Auto dealership cleaning"
  }
];

// ─── Sidewalk detail ──────────────────────────────────────────────────────
const sidewalkPoints = [
  "Public sidewalk frontage along a building or retail unit",
  "Pedestrian paths connecting buildings, parking and entrances",
  "Shared walkways through apartment and office campuses",
  "Covered walkways and breezeways that stay damp in shade",
  "Exterior stairs, landings and ramp approaches",
  "Bus stop, bike rack and seating-area surrounds"
];

const sidewalkProblems = [
  "Dark traffic lanes worn into the middle of a walkway",
  "Gum compacted flat by foot traffic",
  "Moss and algae in joints, edges and low spots",
  "Spilled drinks and food residue near entrances and seating",
  "Leaf and tannin staining under trees and planters",
  "Mud and silt tracked across from planting beds or works"
];

// ─── Storefront detail ────────────────────────────────────────────────────
const storefrontPoints = [
  {
    title: "Entry Concrete & Thresholds",
    description:
      "The two or three metres directly outside a door take more foot traffic per square foot than anything else on a property, and it shows first."
  },
  {
    title: "Frontage Along the Glass",
    description:
      "Ground surfaces below display windows collect splash marks, drips and street grit. Cleaning them the same week as the glass makes both look intentional rather than accidental."
  },
  {
    title: "Seating & Queue Areas",
    description:
      "Outdoor seating, waiting areas and queue space next to an entrance pick up drink rings, food residue and cigarette marks."
  },
  {
    title: "Shared Retail Frontage",
    description:
      "In a strip or centre, one dirty section drags down the whole run. Multi-unit frontage is usually cleaned in a single visit for that reason."
  }
];

// ─── Parking detail ───────────────────────────────────────────────────────
const parkingAreas = [
  "Parking garage floors, level by level",
  "Drive lanes and turning areas",
  "Ramps between levels and at garage entrances",
  "Garage entrances and exit aprons",
  "Stairwell and elevator lobby approaches",
  "Pedestrian routes and crosswalk paths inside a structure",
  "Selected surface-lot concrete and pathway areas",
  "Concrete pads, islands and walkway strips within a lot"
];

const parkingConsiderations = [
  {
    title: "Drainage decides the plan",
    description:
      "Enclosed structures collect water rather than shed it. Where drains run, where water pools and how runoff is managed are settled before a machine is switched on."
  },
  {
    title: "Levels get cleaned in sections",
    description:
      "Garages rarely close. Work is normally staged level by level or bay by bay, overnight or on weekends, so a section is emptied, cleaned and released while the rest of the structure stays in use."
  },
  {
    title: "Vehicle staining is assessed, not promised",
    description:
      "Fresh drips usually lift. Oil that has soaked into porous concrete over years has stained it, and the honest answer is that cleaning will improve it rather than erase it."
  }
];

// ─── Loading dock detail ──────────────────────────────────────────────────
const loadingAreas = [
  "Dock aprons and the concrete in front of roll-up doors",
  "Delivery bays and truck manoeuvring areas",
  "Service entrances and staff back doors",
  "Ramps, kerbs and dock-leveller surrounds",
  "Back-of-building concrete and service corridors",
  "Compactor and baler surrounds",
  "Waste enclosure floors and dumpster pads",
  "Yard-adjacent hard surfaces around a warehouse"
];

const loadingBuildup = [
  "Mud and silt dragged in on truck tires",
  "Grease and oil around dock doors and equipment",
  "Spilled product, packaging residue and pallet debris",
  "Compacted dirt in the low spots along a dock face",
  "Waste leakage on and around dumpster pads",
  "Tire marks across the apron and turning area"
];

// ─── Surface-appropriate cleaning ─────────────────────────────────────────
const assessmentFactors = [
  {
    Icon: Layers,
    title: "Material",
    description:
      "Poured concrete, pavers, brick, masonry, tile and painted surfaces each behave differently. Sound concrete tolerates a great deal; older brick, soft mortar and painted finishes do not."
  },
  {
    Icon: Search,
    title: "Condition & Age",
    description:
      "Cracking, spalling, loose mortar, failing sealer or flaking paint change the answer. A surface already breaking down is not made better by force."
  },
  {
    Icon: Droplets,
    title: "Type of Buildup",
    description:
      "Loose surface dirt, embedded organic growth and oil that has soaked into the slab are three different problems. Pre-treatment and dwell time often matter more than raw pressure."
  },
  {
    Icon: MapPin,
    title: "Location & Surroundings",
    description:
      "Nearby glass, signage, joinery, planting, parked vehicles, air intakes and pedestrian routes all shape how an area is worked and what gets protected first."
  },
  {
    Icon: Waves,
    title: "Water & Drainage",
    description:
      "Water supply, where runoff goes and which drains it reaches are checked during the site visit. On enclosed or sloped sites this often sets the schedule."
  },
  {
    Icon: ShieldCheck,
    title: "Access & Safety",
    description:
      "Live traffic, deliveries, pedestrians and working hours decide when an area can be closed off, and closing it off properly is part of the job."
  }
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: House,
    title: "Homes and Commercial Properties Alike",
    description:
      "A driveway and front path at a house, and the frontage, walkways and service areas across a managed portfolio, are both normal work here. Scope is written against your property rather than a fixed package."
  },
  {
    Icon: Gauge,
    title: "Surface-Conscious Cleaning",
    description:
      "The surface is assessed before the pressure is set. Where a material or its condition makes aggressive cleaning a bad idea, you will hear that before the work rather than after it."
  },
  {
    Icon: CalendarClock,
    title: "Scheduling That Fits Operations",
    description:
      "Early mornings, evenings, weekends and quiet trading periods. Areas are worked in sections so a walkway, dock or garage level is out of use for as short a time as possible."
  },
  {
    Icon: Repeat,
    title: "One-Time or Recurring",
    description:
      "A single cleanup before an event or inspection, or a repeating schedule that keeps entrances and high-traffic concrete from getting away from you."
  },
  {
    Icon: ClipboardList,
    title: "One Vendor, Several Services",
    description:
      "Pressure washing can sit alongside house cleaning, window cleaning, commercial janitorial, floor care and junk removal under one point of contact instead of four."
  },
  {
    Icon: MessageCircle,
    title: "Straight Answers on Results",
    description:
      "If a stain has permanently discoloured concrete, or an area needs a different approach entirely, we say so at the quote stage. Nobody benefits from a surprise on the day."
  }
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Property & Surface Assessment",
    description:
      "We look at the areas you want cleaned: surface material, condition, the type and depth of buildup, square footage, access, water supply and where runoff will go."
  },
  {
    number: "02",
    title: "Cleaning Plan & Written Quote",
    description:
      "The approach, the areas included, the timing and anything we would advise against are set out in writing. Realistic expectations for stained areas are part of that conversation."
  },
  {
    number: "03",
    title: "Pressure Washing the Agreed Areas",
    description:
      "Areas are prepared and cordoned as needed, pre-treated where the buildup calls for it, then cleaned with the method and pressure matched to the surface, edges and corners included."
  },
  {
    number: "04",
    title: "Final Rinse & Review",
    description:
      "Cleaned areas are rinsed down, the site is left clear, and the work is reviewed against the agreed scope with you or your on-site contact."
  }
];

// ─── Recurring service ────────────────────────────────────────────────────
const oneTimeUses = [
  "A driveway, patio or property that has not been cleaned in years",
  "Preparing a home for listing photography or a first viewing",
  "Preparing for a leasing tour, inspection or event",
  "After construction, renovation or exterior repair work",
  "Tenant turnover on a rental or a commercial unit",
  "Clearing a specific problem: a mossy path, a stained dock, a dirty garage level"
];

const recurringUses = [
  "Driveways, front paths and patios cleaned each spring",
  "Entrances and storefront concrete on a regular cycle",
  "Seasonal cleaning as wet-weather buildup accumulates",
  "Sidewalks and shared walkways across a managed property",
  "Dock aprons and waste-enclosure pads on a set rotation",
  "Exterior work coordinated with an existing cleaning schedule"
];

const frequencyFactors = [
  "How much foot and vehicle traffic the surface takes",
  "Exposure: shaded, damp areas hold organic growth far longer",
  "Whether food, waste or vehicles are part of the picture",
  "Trees, planting and runoff patterns nearby",
  "The surface material and how porous it is",
  "The standard the property is presented to"
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Residential Window Cleaning",
    description: "Glass, frames, sills and screens at a house. Booked with a driveway or patio wash when the whole exterior is being reset.",
    href: "/services/residential-window-cleaning",
    ctaLabel: "See residential window cleaning"
  },
  {
    title: "Residential Cleaning",
    description: "Recurring interior house cleaning, quoted alongside exterior work when a property is being handled in one visit.",
    href: "/services/residential-cleaning",
    ctaLabel: "View residential cleaning"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Turnover cleans for homes and rentals, where the driveway, path and patio are often washed in the same booking.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "See move-in / move-out cleaning"
  },
  {
    title: "Commercial Cleaning",
    description: "Recurring interior janitorial service for offices, retail and facilities, with exterior work quoted alongside it.",
    href: "/services/commercial-cleaning",
    ctaLabel: "See commercial cleaning"
  },
  {
    title: "Commercial Window Cleaning",
    description: "Glass, frames and entry doors. Frontage looks finished when the concrete and the windows are done together.",
    href: "/services/commercial-window-cleaning",
    ctaLabel: "View commercial window cleaning"
  },
  {
    title: "Parking Lot & Exterior Maintenance",
    description: "Litter, debris and routine upkeep across lots, entries and perimeter areas between pressure washing visits.",
    href: "/services/parking-lot-exterior-maintenance",
    ctaLabel: "Explore exterior maintenance"
  },
  {
    title: "Post-Construction & Renovation Cleanup",
    description: "Dust and debris removal after a build or remodel, including the exterior surfaces the work left behind.",
    href: "/services/post-construction-renovation-cleanup",
    ctaLabel: "View post-construction cleanup"
  },
  {
    title: "Junk Removal",
    description: "Non-hazardous items cleared from yards, garages and service areas, best done before the concrete gets cleaned.",
    href: "/services/junk-removal",
    ctaLabel: "See junk removal"
  },
  {
    title: "Solar Panel Cleaning",
    description: "Panel washing for residential and commercial roof and ground arrays, where soiling reduces output.",
    href: "/services/solar-panel-cleaning",
    ctaLabel: "Explore solar panel cleaning"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What surfaces can you pressure wash?",
    answer:
      "Durable exterior hard surfaces at ground level: driveways, concrete sidewalks and walkways, front paths, patios and paver areas, entry pads, porches, exterior stairs, courtyards, concrete pads, parking structure floors and ramps, dock aprons and dumpster pads. Brick, masonry, older mortar and painted surfaces are assessed individually, because the material and its condition decide whether pressure washing is appropriate at all and at what pressure. If a surface should not be cleaned this way, we will tell you rather than take the risk."
  },
  {
    question: "Do you provide residential pressure washing in Seattle?",
    answer:
      "Yes. Driveways, front paths and walkways, patios, porches, entry steps and other durable exterior hard surfaces at houses, townhomes and condominium properties are all regular work. Homeowners usually book it as a spring reset after a wet season, before listing a property, or when a shaded path has gone green. Quotes are free and given in writing after we have seen the surfaces involved."
  },
  {
    question: "Do you provide commercial pressure washing in Seattle?",
    answer:
      "Yes. Commercial exterior surface cleaning is regular work for us across Seattle and the surrounding cities, for business owners, property managers and facility managers. Typical jobs are entrances and storefront concrete, sidewalks and shared walkways, courtyards, parking structures, dock aprons and waste-enclosure pads. Work is quoted per property after we have seen the surfaces and the access."
  },
  {
    question: "Can you pressure wash driveways?",
    answer:
      "Yes, and it is one of the most requested jobs on the residential side. A driveway collects road grit, tire marks and traffic residue at the same time as moss and algae establish in the joints and low spots, so it usually needs both an even pass with a surface cleaner and hand work along the edges and control joints. Sound concrete handles this well. Where a driveway is cracking, spalling or has a failing sealer, we will say so before quoting rather than force pressure into it."
  },
  {
    question: "Can pressure washing remove moss and algae from concrete?",
    answer:
      "It usually improves the surface considerably. Moss and algae grow on damp, shaded hard surfaces throughout the year here, and washing lifts the growth along with the organic film underneath it. Growth rooted into cracks and joints can leave marking behind, and shaded areas will start to regrow, which is why properties with north-facing or tree-covered walkways often move to a repeating schedule rather than a one-off clean."
  },
  {
    question: "Can pressure washing remove oil and grease stains?",
    answer:
      "Sometimes fully, often partially. Recent drips sitting on the surface generally come up. Oil that has soaked into porous concrete over months or years has stained the slab itself, and no amount of pressure changes that. We assess the staining first and give you a realistic expectation before quoting, rather than promising a result the surface cannot deliver."
  },
  {
    question: "Can you clean sidewalks and walkways?",
    answer:
      "Yes. Front paths and side returns at a house, public sidewalk frontage, connecting paths between buildings, shared walkways across a managed property and covered breezeways are all part of this service. They collect traffic grime, gum, spills and organic growth, and a walkway usually develops a dark central lane where everyone walks. Public-facing sidewalks are normally cleaned early morning or after hours, with the section cordoned while it is worked and rinsed."
  },
  {
    question: "Can you pressure wash patios and outdoor hard surfaces?",
    answer:
      "Yes, on durable surfaces. Concrete patios, paver areas, flagstone, courtyards and the steps and edging around them are all cleaned regularly, and shaded patios are where organic growth shows worst in this climate. Pavers are worked with the joints in mind, because careless pressure disturbs joint sand, and we will tell you if it is likely to need topping up afterwards. Not every outdoor material belongs under high pressure, so the surface is assessed before the method is set."
  },
  {
    question: "Do you clean parking garages and parking areas?",
    answer:
      "Yes. Garage floors, drive lanes, ramps, entrances, stair and elevator approaches and selected surface-lot areas. Enclosed structures need planning around drainage, runoff and traffic, so the work is normally staged level by level or bay by bay, overnight or at weekends, keeping the rest of the structure open. If what you need is routine litter and debris upkeep rather than washing, our parking lot and exterior maintenance service covers that."
  },
  {
    question: "Do you pressure wash loading docks and service areas?",
    answer:
      "Yes. Dock aprons, delivery bays, service entrances, back-of-building concrete, compactor surrounds and dumpster pads are all part of this service. These areas take mud, grease, spilled product and waste residue, and they are usually the last part of a property to get attention. Scheduling is built around delivery windows so a dock is not out of use when trucks are due."
  },
  {
    question: "Can pressure washing be scheduled around business hours?",
    answer:
      "Yes, and for most commercial work it has to be. Early mornings, evenings, weekends and quiet trading periods are all normal. Areas are worked in sections so a walkway, entrance, dock or garage level is closed off for the shortest time possible. Surfaces stay wet for a period afterwards, so the timing is planned with that in mind rather than handing a soaked entrance back at opening."
  },
  {
    question: "How often should exterior concrete be pressure washed?",
    answer:
      "There is no universal schedule, and anyone quoting one has not looked at the property. Frequency depends on foot and vehicle traffic, how exposed or shaded the surfaces are, whether food, waste or vehicles are involved, nearby trees and runoff, the surface material, and the standard you want it kept to. Many Seattle homeowners find an annual spring clean handles a driveway and front path, while a shaded north-facing patio may want it more often. A busy restaurant entrance and a quiet office courtyard sit at opposite ends of the same range. We suggest a realistic interval after seeing the site."
  },
  {
    question: "How do you decide the right pressure for a surface?",
    answer:
      "It is settled on site, before anything is switched on. We look at the material, its age and condition, the type and depth of the buildup, what is around the area that needs protecting, and where the water will run. Sound concrete tolerates a great deal. Aged brick, soft or failing mortar, painted finishes and anything already cracking or spalling do not, and forcing them causes damage rather than a better result. On stubborn organic growth a pre-treatment and dwell time usually achieve more than turning the machine up, so some surfaces are deliberately cleaned at lower pressure. Where a surface should not be pressure washed at all, we say so at the quote."
  },
  {
    question: "Do you provide recurring pressure washing?",
    answer:
      "Yes, as a one-time clean or on a repeating cycle. Homeowners commonly set an annual or seasonal visit for a driveway, path and patio. Commercial and managed properties more often run a rolling schedule: entrances and storefront concrete on a regular cycle, shared walkways across a portfolio, dock aprons and waste-enclosure pads on a set rotation, and parking structure levels staged across the year. Where a property already has a cleaning schedule with us, exterior work is normally folded into the same calendar."
  },
  {
    question: "Do you provide pressure washing for property managers?",
    answer:
      "Yes. Managed office buildings, retail centres, apartment and condominium properties and mixed-use sites are a large part of this work. Scope can be standardised across a portfolio so each property is cleaned to the same specification, exterior work can be scheduled alongside existing cleaning, and everything runs through one point of contact. Access is arranged with your on-site staff or through the building's usual procedure."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// so it is intentionally not repeated in this @graph. The LocalBusiness
// entity lives at /#business and is referenced by @id, never redefined.
// ─────────────────────────────────────────────────────────────────────────

const pressureWashingSchema = {
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
      // pressure washing are described inside it rather than split into
      // competing entities, because /services/pressure-washing is the single
      // umbrella page for both.
      "@type": "Service",
      "@id": `${SITE_URL}${PAGE_PATH}#service`,
      name: "Pressure Washing Services in Seattle",
      serviceType: "Pressure Washing",
      alternateName: ["Power Washing", "Exterior Surface Cleaning"],
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area homeowners, residents, business owners, property managers, facility managers, building owners and commercial tenants"
      },
      description:
        "Residential and commercial pressure washing in Seattle. Exterior hard-surface cleaning for driveways, concrete, sidewalks and walkways, patios and paver areas, entrances, steps and porches, storefronts and commercial frontage, parking garages and parking areas, loading docks, service areas, dumpster pads and outdoor common areas. Available as one-time exterior cleaning or on a recurring maintenance schedule, with the method and pressure matched to the surface after an on-site assessment.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pressure Washing Surfaces",
        itemListElement: surfaceCategories.map((surface) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${surface.title} Pressure Washing`,
            description: surface.description
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

export default function PressureWashingPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-transparent" aria-hidden />
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Pressure Washing", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Pressure Washing</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Pressure Washing Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Professional pressure washing for residential and commercial properties across Seattle: driveways,
                concrete, sidewalks and walkways, patios, entrances and steps, storefronts, parking areas and other
                durable exterior surfaces. The method and the pressure are matched to the surface after we have
                looked at it, and the schedule is built around how the property is actually used.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  {siteConfig.primaryCta}
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
                <a
                  href="#surfaces"
                  className="inline-flex items-center px-1 py-3 text-sm font-semibold text-accent underline underline-offset-4 transition-colors hover:text-white"
                >
                  See the surfaces we clean
                  <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                </a>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Locally owned and family-operated · Free written quotes · {siteConfig.businessHours}
              </p>
            </div>

            <div className="card-dark flex h-full flex-col justify-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <SprayCan className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <h2 className="mt-4 text-base font-semibold text-white">The Common Problem</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Exterior concrete darkens slowly. Dirt, traffic residue, moss and algae, spills and weather
                  staining accumulate over months until a driveway, front path, entrance or walkway looks
                  neglected, and by then nobody can remember what it used to look like.
                </p>
                <h2 className="mt-5 text-base font-semibold text-white">How We Help</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  We assess the surface, the buildup and the access first, then clean with an approach suited to
                  that specific area, scheduled so a home is not disrupted and a business keeps its entrances and
                  service routes usable.
                </p>
              </div>
              <ul className="mt-6 grid gap-3 border-t border-white/10 pt-6">
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
              href="/contact#quote-form"
              className="ml-auto shrink-0 whitespace-nowrap text-brand-700 transition-colors hover:text-brand-900"
            >
              Get a Quote
            </Link>
          </nav>
        </Container>
      </div>

      {/* ── DIRECT-ANSWER INTRODUCTION ──────────────────────────────────── */}
      <section className="section-shell-tight scroll-mt-28 bg-white" id="overview" aria-labelledby="overview-heading">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <span className="eyebrow">What This Service Is</span>
              <h2 id="overview-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Pressure Washing for Homes, Businesses &amp; Managed Properties
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Cleaning From The Heart LLC provides professional pressure washing and exterior hard-surface
                cleaning throughout Seattle, for homeowners, business owners and property managers alike. The work
                covers the exterior surfaces people actually use: driveways and concrete, sidewalks, front paths
                and walkways, patios and paver areas, entry pads, porches and exterior steps, storefront frontage,
                courtyards and shared outdoor areas, parking structure floors and ramps, loading docks and service
                entrances, and the waste-enclosure pads behind a building.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                On the residential side, most calls are about a driveway, a front path or a patio that has quietly
                gone green or grey over a wet season, often before listing a house or ahead of the summer. On the
                commercial side, they come from property managers, facility managers, building owners and business
                owners who have watched a surface get gradually worse and want it dealt with properly rather than
                hosed down. Both are normal work here, and both are quoted the same way.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Some of it is a single cleanup on a property that has gone years without one. Some of it is a
                recurring schedule for driveways, entrances and walkways that will not stay clean on their own.
                Every quote follows a look at the actual surfaces, because material, condition and the type of
                buildup change the job more than square footage does.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                If you have been searching for power washing rather than pressure washing, this is the same
                service. The two terms are used interchangeably in Seattle, and what matters far more than the
                label is that the pressure, the water and any pre-treatment are chosen to suit the surface in
                front of us.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Exterior work is often quoted alongside other services when a property is being handled in one
                visit, whether that is{" "}
                <Link
                  href="/services/residential-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  residential cleaning
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/residential-window-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  residential window cleaning
                </Link>{" "}
                at a house, or{" "}
                <Link
                  href="/services/commercial-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  commercial cleaning
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/commercial-window-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  commercial window cleaning
                </Link>{" "}
                across a business or managed property.
              </p>
            </div>

            <div className="lg:sticky lg:top-32">
              <ServiceImagePanel
                src={OVERVIEW_IMAGE}
                alt="A pressure washer wand spraying a concrete walkway, lifting dirt out of the surface"
                width={1060}
                height={1484}
                sizes="(max-width: 1023px) 100vw, 42vw"
                aspect="none"
                caption="Pressure washing pulls dirt out of the pores in concrete rather than rinsing across the top of it."
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── SURFACES ────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="surfaces">
        <Container>
          <SectionHeading
            eyebrow="Scope of Work"
            title="Exterior Surfaces We Pressure Wash"
            description="The durable exterior hard surfaces at a house or a business: what people walk on, what vehicles drive over, and the areas out of sight that nobody looks at until they become a problem."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {surfaceCategories.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
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

          <div className="mx-auto mt-10 max-w-[900px] rounded-3xl border border-brand-100 bg-white px-7 py-7 md:px-10">
            <h3 className="text-base font-semibold text-ink">Not every material belongs under full pressure</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Sound concrete tolerates a great deal. Aged brick, soft or failing mortar, painted finishes, some
              tile and anything already cracking or spalling do not, and forcing them only causes damage. Those
              surfaces are assessed on site, cleaned at a reduced pressure where that is appropriate, and left
              alone where it is not. You will be told which category a surface falls into before the quote is
              agreed.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              This service is focused on durable exterior hard surfaces at ground level. Roof washing is not
              something we offer, and timber decking, fencing and delicate cladding are handled case by case after
              an assessment rather than assumed to be suitable. If a surface falls outside what we do, we will say
              so plainly instead of taking the job on.
            </p>
          </div>
        </Container>
      </section>

      {/* ── BUILDUP ─────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="buildup">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <span className="eyebrow">What It Addresses</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Pressure Washing for Dirt, Moss, Algae &amp; Exterior Buildup
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Exterior surfaces rarely get dirty in one identifiable event. They collect several kinds of buildup
                at once, and each one responds differently: some lifts with water and pressure alone, some needs
                pre-treatment and dwell time, and some has already changed the colour of the concrete permanently.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Knowing which is which before starting is most of the job. It decides the method, the time an area
                takes, and what we tell you to expect.
              </p>

              <div className="mt-8 rounded-2xl border border-brand-200 bg-surface px-6 py-6">
                <h3 className="text-sm font-semibold text-ink">A realistic word on results</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Results vary with the surface, its age and the type of staining. Concrete is porous, and
                  something that has been soaking into it for years, oil, rust, tannin, has stained the material
                  rather than sat on top of it. Cleaning improves those areas; it does not reset them. We assess
                  the buildup before agreeing an approach and tell you plainly which parts will come up and which
                  will only get better.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {buildupTypes.map(({ Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-brand-100 bg-surface p-5">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── SEATTLE CLIMATE ─────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="seattle">
        <Container>
          <ServiceEditorialSplit
            src="/images/gallery/gallery-18.jpg"
            alt="Before and after views of a paver patio and flagstone path with moss and organic growth removed"
            width={1080}
            height={1080}
            sizes="(max-width: 1023px) 100vw, 45vw"
            aspect="none"
            caption="Organic growth lifted from paver and flagstone surfaces at a Seattle-area property."
            imagePosition="right"
            columns="lg:grid-cols-[1fr_0.9fr]"
            align="start"
          >
            <span className="eyebrow">Local Conditions</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Pressure Washing for Seattle&apos;s Wet Climate
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Seattle does not get dramatic rainfall so much as persistent rainfall. Surfaces stay damp for long
              stretches through autumn, winter and spring, and damp concrete is where moss and algae establish
              themselves. It is the single most common reason a property here books this service, whether that is
              a house with a shaded front path or an office block with a north-facing courtyard.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Where it shows first is predictable. North-facing driveways and walkways that never catch direct sun.
              Concrete under a canopy, an overhang or a stairwell. Paths beside planting beds, under trees, or
              along a fence line. Low spots where water sits after it stops raining. Those areas go green, then
              dark, and start looking neglected long before the open, sunlit parts of the same property do.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Wet weather also carries dirt around. Runoff traces dark lines below downspouts and roof edges,
              leaves break down on hard surfaces and leave tannin marks, and silt washes across walkways from
              planting beds and construction nearby. None of it is remarkable on its own, but a season of it
              changes how a building reads from the street.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The practical consequence is that exterior cleaning here is a cycle rather than a one-time fix, and
              that timing matters. Work is planned around dry-enough windows and around when the property can
              spare the area. For most homes that lands as a spring clean once the worst of the wet season has
              passed; for commercial sites it usually becomes a standing schedule rather than an emergency call.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── RESIDENTIAL ─────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="residential">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Residential</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Residential Pressure Washing in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Residential pressure washing is the fastest visible improvement most homeowners can make to the
              outside of a house, and it is usually the cheapest. A driveway, a front path and a patio are the
              three surfaces a visitor crosses before they reach the door, and all three darken so gradually that
              the change is invisible until a cleaned section sits next to an uncleaned one.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We clean the durable exterior hard surfaces at a property: driveways and parking aprons, front paths
              and side returns, sidewalk frontage, concrete and paver patios, entry steps, landings and porches,
              and courtyards. The work is the same care we bring to a commercial site, scaled to a house and
              scheduled so it takes a morning rather than a weekend.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              What matters more than raw power is knowing what a surface can take. A sound concrete driveway, a
              sand-jointed paver patio, older brick edging and a painted set of steps are four different jobs, and
              treating them as one is how exteriors get damaged. Every surface is assessed before the method and
              the pressure are set, and anything we would not recommend cleaning this way is flagged at the quote.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <House className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Areas we clean at a home</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {residentialAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-100 pt-5 text-xs leading-relaxed text-muted">
                Roof washing is not a service we offer, and timber decking, fencing and delicate cladding are
                assessed individually rather than assumed to suit high pressure.
              </p>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {residentialReasons.map(({ Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-brand-100 bg-surface p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted">
            Exterior work at a house is often booked with{" "}
            <Link
              href="/services/residential-window-cleaning"
              className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
            >
              residential window cleaning
            </Link>{" "}
            or a{" "}
            <Link
              href="/services/move-in-move-out-cleaning"
              className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
            >
              move-in / move-out clean
            </Link>
            , so the inside and the outside of the property are handled in the same visit.
          </p>
        </Container>
      </section>

      {/* ── DRIVEWAYS ───────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="driveways">
        <Container>
          <ServiceEditorialSplit
            src="/images/gallery/gallery-19.jpg"
            alt="Before and after views of a driveway being pre-treated and then cleaned by pressure washing"
            width={1080}
            height={1080}
            sizes="(max-width: 1023px) 100vw, 45vw"
            aspect="none"
            caption="Driveway pressure washing at a Seattle-area property: pre-treatment applied, and the same surface after washing and rinsing."
            imagePosition="left"
            columns="lg:grid-cols-[0.9fr_1fr]"
            align="start"
          >
            <span className="eyebrow">Driveways</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Driveway Pressure Washing in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A driveway is the largest single piece of concrete on most properties and the one that takes the most
              punishment. It carries vehicles, collects everything that washes down off the roof and the garden,
              and sits exposed to the weather year round. It is also the first thing anyone sees from the street,
              which is why driveway cleaning is the most requested residential job on this page.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Driveways rarely have one problem. A typical Seattle driveway carries a layer of general grime, moss
              and algae in the joints and along the shaded edge, tire marks where the car turns, tannin staining
              under a tree, and often an oil mark or two. Each of those responds differently, so an even pass with
              a surface cleaner is only half the work. Joints, control gaps, edges and the apron at the pavement
              are worked separately, and heavier organic buildup is pre-treated and given time to break down before
              it is washed off.
            </p>
            <p className="mt-6 text-base font-semibold text-ink">What we typically find on a driveway:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {drivewayBuildup.map(({ title, description }) => (
                <article key={title} className="rounded-2xl border border-brand-100 bg-white p-5">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-brand-200 bg-white px-6 py-5">
              <h3 className="text-sm font-semibold text-ink">On oil stains, plainly</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We do not promise complete oil stain removal, and you should be wary of anyone who does. Concrete
                is porous. A fresh drip sitting on the surface usually lifts. Oil that has been soaking into the
                slab for years has stained the material itself, and cleaning will improve how it looks without
                erasing it. How much comes up depends on the stain, its age and the surface, and we will give you a
                realistic view of your driveway before you agree to anything.
              </p>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── CONCRETE ────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="concrete">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <span className="eyebrow">Concrete</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Concrete Pressure Washing in Seattle
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Concrete is the default surface at almost every property, residential and commercial alike, and it
                hides its condition well. Because it darkens uniformly and slowly, a slab can lose most of its
                original tone before anyone registers that it has changed. The contrast at the edge of a cleaned
                section is usually what makes the point.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                It is also porous, which is the fact that governs this work. Water, oil, tannin and organic growth
                all move into the surface rather than resting on it, so cleaning concrete properly means lifting
                what has penetrated the top layer, not just rinsing across the top of it. Open areas are covered
                with a surface cleaner for an even result, edges, corners and joints are worked separately, and
                heavier buildup gets pre-treated and given time to break down before it is washed.
              </p>
              <div className="mt-8 rounded-2xl border border-brand-200 bg-surface px-6 py-6">
                <h3 className="text-sm font-semibold text-ink">Cleaning does not repair concrete</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Where a slab is cracking, spalling or has a failing sealer, we will say so during the assessment.
                  Pushing pressure into damaged concrete makes it worse rather than better, and a surface already
                  breaking down needs a repair conversation, not a washing one.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <article className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                    <House className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-ink">Residential concrete</h3>
                </div>
                <ul className="mt-6 grid gap-2.5">
                  {[
                    "Driveways and parking aprons",
                    "Front paths and side returns",
                    "Sidewalk frontage at the kerb",
                    "Patio slabs and seating areas",
                    "Entry pads, porches and steps",
                    "Garage approaches and thresholds"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="card">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                    <Building2 className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-ink">Commercial concrete</h3>
                </div>
                <ul className="mt-6 grid gap-2.5">
                  {[
                    "Sidewalks and entry aprons",
                    "Walkways and connecting paths",
                    "Exterior stairs and landings",
                    "Courtyards and plaza areas",
                    "Loading and delivery aprons",
                    "Concrete pads and equipment bases",
                    "Parking structure floors and ramps",
                    "Bin pads and enclosure floors"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SIDEWALKS ───────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="sidewalks">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Sidewalks</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Sidewalk &amp; Walkway Pressure Washing
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Sidewalks take the most concentrated foot traffic on a property and get the least maintenance
              attention, because sweeping them is easy and nobody looks closely at what sweeping leaves behind. Over
              a year or two a walkway develops a dark central lane where everyone walks, and the difference between
              that lane and the untrodden edges is the clearest sign a surface is overdue.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              It is the same job at a house and at a business, only the scale changes. A front path and the
              sidewalk frontage at the kerb wear exactly the way a shared campus walkway does, and both are cleaned
              here. This is presentation work more than anything else: a visitor forms an impression on the
              approach, before the door, and shared walkways across an apartment complex or office campus are the
              part of a property residents and tenants see every single day. We clean these areas so they look
              maintained. We do not claim that cleaning makes a walkway safe or prevents accidents, which depends
              on the surface, the weather and the property&apos;s own maintenance.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Footprints className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Areas typically included</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {sidewalkPoints.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Droplets className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">What we usually find on them</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {sidewalkProblems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted">
            Public-facing sidewalks are usually cleaned early morning or after hours, with the section cordoned
            while it is being worked and rinsed, so pedestrian routes are disrupted as little as possible.
          </p>
        </Container>
      </section>

      {/* ── PATIOS ──────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="patios">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div>
              <span className="eyebrow">Patios</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Patio &amp; Outdoor Surface Pressure Washing
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Patios sit still. Unlike a driveway or a path, nothing crosses them for months at a time in the wet
                part of the year, so organic growth settles in undisturbed and a surface that looked fine in
                September can be green by March. Shaded patios, north-facing seating areas and anything under a
                tree or an overhang show it first.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Patio cleaning is worth doing before the season rather than during it. A patio that has been washed
                and rinsed in spring is usable straight away, and the difference between a cleaned paver area and
                the state it was in is normally the most dramatic before-and-after on a residential property.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Outdoor hard surfaces are not interchangeable, though, and this is where surface assessment earns
                its place. Poured concrete, pavers with sand joints, flagstone, tile and timber all behave
                differently under pressure. We work out what a surface is and what condition it is in before
                deciding the method, and anything that should not be pressure washed is identified at the quote
                rather than discovered afterwards.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {patioSurfaces.map(({ title, description }) => (
                <article key={title} className="rounded-2xl border border-brand-100 bg-surface p-6">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
              <div className="rounded-2xl border border-brand-200 bg-surface p-6 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <TreePine className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">Timber decking is a separate conversation</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Softwood decking is easy to damage with a pressure washer: too much force raises the grain,
                      furs the timber and strips finish unevenly. We do not treat decking as a standard part of
                      this service. If you have one, tell us and we will look at it, but we will only take it on
                      where the condition of the timber makes it sensible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MID-PAGE CTA ────────────────────────────────────────────────── */}
      <section className="bg-surface pt-14 md:pt-20">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-white px-7 py-8 md:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-lg font-semibold text-ink">Know which areas need cleaning?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Send the property type, the surfaces involved, roughly how much area, and when the work would
                  need to happen. Photographs of the worst areas tell us more than a description does, and the
                  quote comes back in writing with no obligation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  {siteConfig.primaryCta}
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-secondary">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── COMMERCIAL ──────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="commercial">
        <Container>
          <SectionHeading
            eyebrow="Commercial"
            title="Commercial Pressure Washing in Seattle"
            description="The other half of this service. Commercial pressure washing covers business frontage, facility exteriors and managed property, and it is a different job from cleaning a driveway — larger areas, live operations, and access that has to be planned."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <p className="text-base leading-relaxed text-muted">
                Commercial power washing is regular work for us across Seattle for business owners, property
                managers, facility managers and building owners. The surfaces are the ones a property runs on:
                entrances and storefront concrete, public sidewalk frontage, shared walkways and courtyards,
                parking structures and drive lanes, dock aprons and service entrances, and the waste-enclosure
                pads at the back that nobody looks at until they smell.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                What changes at commercial scale is not the cleaning so much as everything around it. A business
                cannot close its entrance for a day, a garage cannot empty every level at once, and a dock cannot
                be out of use when trucks are booked. So the work is staged, cordoned and scheduled: early
                mornings, evenings, weekends and quiet trading periods, with areas released back into use section
                by section as they are finished.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                For managed portfolios, scope can be standardised so each property is cleaned to the same
                specification, and exterior work can run on the same calendar as an existing{" "}
                <Link
                  href="/services/commercial-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  commercial cleaning
                </Link>{" "}
                schedule, through one point of contact. The sections below cover the three commercial areas we are
                asked about most.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  Icon: Store,
                  title: "Storefronts & entrances",
                  description:
                    "The highest-return area on any business frontage, and a short enough job to fit before opening."
                },
                {
                  Icon: Car,
                  title: "Parking garages & parking areas",
                  description:
                    "Floors, drive lanes, ramps and approaches, staged level by level so the structure stays open."
                },
                {
                  Icon: Truck,
                  title: "Loading docks & service areas",
                  description:
                    "Dock aprons, delivery bays, back-of-building concrete and dumpster pads, planned around delivery windows."
                },
                {
                  Icon: Building2,
                  title: "Managed property portfolios",
                  description:
                    "One specification applied across multiple sites, coordinated with on-site staff and existing schedules."
                }
              ].map(({ Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-brand-100 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/*
        ─── IMAGE SLOT ──────────────────────────────────────────────────────
        Storefront section. No storefront pressure-washing photograph exists in
        /public yet. When one is available, drop it in here as:

        <ServiceImagePanel
          src="/images/services/pressure-washing/storefront-entrance.webp"
          alt="Pressure washing the concrete entry area outside a Seattle storefront"
          width={...} height={...}
          sizes="(max-width: 1023px) 100vw, 45vw"
          aspect="aspect-[4/3]"
          caption="..."
        />

        Wanted shot: a crew member cleaning the concrete immediately outside a
        retail or restaurant entrance, ideally a before/after pair.
        ─────────────────────────────────────────────────────────────────────
      */}
      {/* ── STOREFRONTS ─────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="storefronts">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <span className="eyebrow">Storefronts</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Storefront &amp; Entrance Pressure Washing
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                An entrance is a small area doing a disproportionate amount of work. Everyone who visits crosses
                the same few square metres, so it accumulates buildup several times faster than the concrete twenty
                feet away, and it is the part of the property a customer is closest to.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                For retail, restaurants and any business with walk-in trade, this is the highest-return area on the
                whole property to keep clean. It is also the easiest to schedule: entry concrete is a short job,
                so it can be done before opening without affecting a day&apos;s trading.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Frontage tends to be cleaned as a set. Concrete, entry steps and thresholds come first; if the{" "}
                <Link
                  href="/services/commercial-window-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  glass is being cleaned
                </Link>{" "}
                in the same period, doing both together is what makes a storefront look deliberately maintained
                rather than partially done.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {storefrontPoints.map(({ title, description }) => (
                <article key={title} className="rounded-2xl border border-brand-100 bg-surface p-6">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/*
        ─── IMAGE SLOT ──────────────────────────────────────────────────────
        Parking section. No parking-garage photograph exists in /public yet.
        Wanted shot: a garage level or drive lane mid-clean, or a before/after
        pair showing a cleaned bay against an uncleaned one. Add it beside the
        text column here using <ServiceEditorialSplit> like the concrete section.
        ─────────────────────────────────────────────────────────────────────
      */}
      {/* ── PARKING ─────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="parking">
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow">Parking</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Parking Garage &amp; Parking Area Pressure Washing
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Parking structures collect a specific kind of dirt. Vehicles bring in road film, brake dust and
              rubber, tires lay marks down in the turning areas, and because most of a garage never sees rain or
              sun, none of it washes off or dries out. It compounds year after year, and the lower and older
              levels usually show it worst.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              This matters more than a garage&apos;s status as a back-of-house area suggests. For an office building,
              apartment property or hotel, the garage is where tenants, staff and guests arrive, so it is the first
              impression the property actually makes, whatever the lobby looks like. Cleaning also makes level
              markings, bay lines and signage read clearly again.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Car className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Areas we clean</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {parkingAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className="grid gap-4">
              {parkingConsiderations.map(({ title, description }) => (
                <article key={title} className="rounded-2xl border border-brand-100 bg-white p-6">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </article>
              ))}
              <p className="text-sm leading-relaxed text-muted">
                Washing a structure is different work from keeping an open lot tidy. If what a property needs is
                routine litter, debris and perimeter upkeep between washes, that sits under{" "}
                <Link
                  href="/services/parking-lot-exterior-maintenance"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  parking lot and exterior maintenance
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LOADING DOCKS ───────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-ink text-white" id="loading">
        <Container>
          <SectionHeading
            light
            eyebrow="Service Areas"
            title="Loading Dock & Service Area Pressure Washing"
            description="The back of a commercial building takes the heaviest use on the property and gets cleaned the least. It is also where buildup starts causing problems rather than just looking bad."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="text-base leading-relaxed text-white/70">
                Dock aprons take truck traffic, pallet jacks, dropped product and whatever the weather drags in
                behind it. Mud packs into the low spots along the dock face, grease works its way out from around
                the doors and equipment, and spills get run over until they are part of the surface. For
                warehouses, restaurants and distribution-side operations, this area is doing real work every day
                and shows it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Timing is the constraint that shapes the job. Docks cannot be out of use when trucks are booked, so
                work is planned around delivery windows, generally early, late or at weekends, and staged bay by
                bay where a site cannot give up the whole dock at once.
              </p>

              <h3 className="mt-10 text-lg font-semibold text-white">Dumpster Pad &amp; Waste Enclosure Cleaning</h3>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                Waste areas are part of the same run. Concrete pads under and around bins, enclosure floors and the
                surrounding hard surfaces collect leakage and residue that is usually the real source of a
                persistent smell behind a building, particularly at restaurants, retail centres and apartment
                properties.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                This is surface cleaning, not sanitising or disinfection, and we describe it that way deliberately.
                Washing the pad lifts residue and buildup off the concrete, which reduces what the smell is coming
                from. It does not treat the bins themselves.
              </p>
            </div>

            <div className="grid gap-5">
              <article className="card-dark">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Truck className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-white">Areas covered</h3>
                </div>
                <ul className="mt-6 grid gap-2.5">
                  {loadingAreas.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="card-dark">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Trash2 className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-white">Typical buildup</h3>
                </div>
                <ul className="mt-6 grid gap-2.5">
                  {loadingBuildup.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROPERTIES SERVED ───────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="properties">
        <Container>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Properties We Pressure Wash in Seattle"
            description="Different properties wear their exteriors out in different ways. These are the ones that book this service most, each linked to what we do for that sector."
          />

          <div className="mt-10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100">
                <House className="h-4 w-4 text-brand-700" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-ink">Residential Properties</h3>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {residentialProperties.map(({ Icon, title, description, href, linkLabel }, index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <article className="card flex h-full flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <h4 className="text-sm font-semibold text-ink">{title}</h4>
                    <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>
                    <Link
                      href={href}
                      className="inline-flex items-center text-xs font-semibold text-brand-700 transition-colors hover:text-brand-900"
                    >
                      {linkLabel}
                      <ArrowRight className="ml-1 h-3 w-3 shrink-0" aria-hidden />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-100">
                <Building2 className="h-4 w-4 text-brand-700" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-ink">Commercial &amp; Managed Properties</h3>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {propertiesServed.map(({ Icon, title, description, href, linkLabel }, index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <article className="card flex h-full flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <h4 className="text-sm font-semibold text-ink">{title}</h4>
                    <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>
                    <Link
                      href={href}
                      className="inline-flex items-center text-xs font-semibold text-brand-700 transition-colors hover:text-brand-900"
                    >
                      {linkLabel}
                      <ArrowRight className="ml-1 h-3 w-3 shrink-0" aria-hidden />
                    </Link>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
            Property types beyond these are covered too, see{" "}
            <Link
              href="/industries-we-serve"
              className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
            >
              all the industries we serve
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* ── SURFACE-APPROPRIATE CLEANING ────────────────────────────────── */}
      <section className="section-shell bg-white" id="approach">
        <Container>
          <SectionHeading
            eyebrow="Method"
            title="The Right Pressure for the Right Surface"
            description="Pressure washing is not one setting applied everywhere. What actually gets decided on site is how much pressure a surface can take, what it needs beyond water, and what has to be protected while the work happens."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {assessmentFactors.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
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

          <div className="mx-auto mt-10 max-w-[900px] rounded-3xl border border-brand-100 bg-surface px-7 py-7 md:px-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                <Gauge className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">More pressure is not a better clean</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  On stubborn organic buildup, letting a pre-treatment do its work usually achieves more than
                  turning the machine up, and it does so without etching the surface, stripping mortar or driving
                  water where it should not go. Some surfaces get cleaned at a deliberately lower pressure for that
                  reason. Where a material or its condition means it should not be cleaned this way at all, that
                  is a conversation we have at the assessment rather than a discovery you make afterwards.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="section-shell bg-surface" id="why-us">
        <Container>
          <SectionHeading
            eyebrow="Why Us"
            title="Why Seattle Property Owners Choose Cleaning From The Heart"
            description="A locally owned, family-operated company with 30+ years of hands-on experience across Seattle-area residential and commercial properties."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
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

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Pressure Washing Process"
            description="Four steps from first call to finished surfaces, the same at a house as at a commercial site. Everything that affects the price or the schedule is settled before a date is held."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
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
              Get a Pressure Washing Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ── ONE-TIME & RECURRING ────────────────────────────────────────── */}
      <section className="section-shell bg-surface" id="recurring">
        <Container>
          <SectionHeading
            eyebrow="Scheduling"
            title="One-Time & Recurring Pressure Washing"
            description="Some properties need one thorough cleanup. Others need the entrances and walkways kept from sliding back, which is a different arrangement."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <DoorOpen className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">One-Time Exterior Cleaning</h3>
                  <p className="mt-0.5 text-sm text-muted">A single visit with a defined scope and end point.</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {oneTimeUses.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Repeat className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">Recurring Exterior Maintenance</h3>
                  <p className="mt-0.5 text-sm text-muted">A repeating cycle set against how the property is used.</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {recurringUses.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-7 py-8 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
              <div>
                <h3 className="text-lg font-semibold text-ink">There is no standard frequency</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We do not prescribe an interval before seeing a property, because the same schedule would be
                  wasteful on one site and inadequate on another. A restaurant entrance and a quiet office
                  courtyard sit at opposite ends of that range. After the assessment we will suggest a realistic
                  cycle, and where a property already has a{" "}
                  <Link
                    href="/services/commercial-cleaning"
                    className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                  >
                    commercial cleaning schedule
                  </Link>
                  , exterior work is usually folded into the same calendar.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">What determines how often:</p>
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
          </div>
        </Container>
      </section>

      {/*
        ─── IMAGE NOTES ─────────────────────────────────────────────────────
        Every real pressure-washing photograph on this site is a residential
        exterior job, which is why they now sit in the residential half of the
        page: gallery-19 (a driveway) in the driveway section, gallery-18 (a
        paver/flagstone area) in the Seattle-climate section, and the two below.
        The captions describe them for exactly what they are and never imply a
        commercial site. All four come from `galleryItems` in lib/site.ts, which
        is what feeds /gallery.

        When commercial pressure-washing photos exist, add them to
        /public/images/services/pressure-washing/ plus matching `galleryItems`
        entries, and place them in the commercial half of the page (the
        storefront and parking sections carry IMAGE SLOT notes). Priority shots:
          1. Storefront or building entrance, before/after pair
          2. Commercial concrete sidewalk, before/after pair
          3. Parking garage level or drive lane, before/after pair
          4. Loading dock apron or dumpster pad, before/after pair
        Note: these gallery files are before/after composites, so they must
        stay at aspect="none" — cropping them slices a panel in half.
        ─────────────────────────────────────────────────────────────────────
      */}
      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white" id="results">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="Pressure Washing Before &amp; After Results"
            description="Exterior surface cleaning at Seattle-area properties. Both of these show residential hard surfaces that had carried years of weather and organic buildup before the visit."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ServiceImagePanel
              src="/images/gallery/gallery-16.jpg"
              alt="Before and after views of a large hardscaped patio cleaned with pressure washing at a waterfront property"
              width={1080}
              height={1080}
              sizes="(max-width: 767px) 100vw, 46vw"
              aspect="none"
              caption="A hardscaped patio at a Seattle-area waterfront property, before and after washing."
            />
            <ServiceImagePanel
              src="/images/gallery/gallery-17.jpg"
              alt="Pressure washing in progress on a patio surface, shown alongside the finished result"
              width={1080}
              height={1080}
              sizes="(max-width: 767px) 100vw, 46vw"
              aspect="none"
              caption="The same job in progress. A surface cleaner keeps the finish even across a large flat area."
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/gallery" className="cta-secondary">
              See before &amp; after results
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
            <p className="text-sm text-muted">
              More exterior cleaning, floor care and window cleaning photos from properties across the Seattle
              area.
            </p>
          </div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface" id="related">
        <Container>
          <SectionHeading
            eyebrow="Related Services"
            title="Services Booked Alongside Pressure Washing"
            description="Pressure washing covers the exterior hard surfaces. These are the services homes and commercial properties most often run alongside it, usually on the same schedule and the same quote."
          />
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

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white" id="service-area">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-surface px-7 py-9 md:px-12 md:py-11">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Pressure Washing in Seattle &amp; Nearby Areas
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Seattle is where most of this work happens, and the surrounding cities below are served from the
                  same schedule. Water access, drainage and parking all get confirmed when we quote, so if your
                  property sits toward the edge of the areas listed, a quick call will settle whether we can cover
                  it properly.
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
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Pressure Washing FAQs
              </h2>
              <p className="mt-4 text-base text-muted">
                What homeowners, business owners and property managers ask most before booking exterior surface
                cleaning in Seattle.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5">
                <p className="text-sm font-semibold text-ink">Question about your own property?</p>
                <p className="mt-1 text-sm text-muted">
                  Send the surfaces involved, roughly how much area and a photo of the worst of it, and we will
                  tell you what is realistic.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/contact#quote-form" className="cta-primary px-4 py-2 text-xs">
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
                <p className="eyebrow-light">Pressure Washing in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Need Pressure Washing for Your Seattle Property?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us the property type, which exterior surfaces are involved, roughly how much area, and when
                  the work needs to happen. Homeowners, business owners and property managers all get a written
                  scope back with a realistic view of what each surface will look like afterwards.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Free written quote", "One-time or recurring", "Scheduled around your operations"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-gold w-full justify-center">
                    {siteConfig.primaryCta}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pressureWashingSchema) }}
      />
    </>
  );
}
