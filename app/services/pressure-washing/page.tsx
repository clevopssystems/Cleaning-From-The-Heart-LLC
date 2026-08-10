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

const PAGE_TITLE = "Commercial Pressure Washing Seattle | Free Quote";
const PAGE_DESCRIPTION =
  "Commercial pressure washing in Seattle for concrete, sidewalks, storefronts, parking areas, loading docks and managed properties. Request a free quote.";

// Stock photograph, not a company project photo. It is used because it shows
// flat-surface concrete cleaning accurately; the caption never presents it as
// our work. Real company photos are used in the results section further down.
const INTRO_IMAGE = "/home/services/pressure-wash.jpg";

// Portrait stock photograph beside the introduction copy. Rendered at its own
// ratio so the wand and spray fan are not cropped out of frame.
const OVERVIEW_IMAGE = "/services/pressure-washing-intro.png";

export const metadata: Metadata = {
  // Brand is intentionally omitted from <title> so the search result leads with
  // the service and city, matching the other rebuilt service pages. It stays in
  // the JSON-LD WebPage name below.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    "commercial pressure washing Seattle",
    "pressure washing Seattle",
    "pressure washing services Seattle",
    "pressure washing company Seattle",
    "commercial power washing Seattle",
    "power washing Seattle",
    "commercial exterior cleaning Seattle",
    "concrete pressure washing Seattle",
    "sidewalk pressure washing Seattle",
    "storefront pressure washing Seattle",
    "parking garage pressure washing Seattle",
    "loading dock pressure washing Seattle"
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
  { label: "Buildup", href: "#buildup" },
  { label: "Seattle Weather", href: "#seattle" },
  { label: "Properties", href: "#properties" },
  { label: "Concrete", href: "#concrete" },
  { label: "Parking", href: "#parking" },
  { label: "Loading Docks", href: "#loading" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faq" }
];

const glanceItems = [
  "Concrete, sidewalks, entrances, parking and service areas",
  "Surfaces assessed before the pressure is set",
  "Scheduled around trading hours, deliveries and weather",
  "One-time cleanups or recurring exterior maintenance"
];

const trustStripItems = [
  { Icon: Building2, label: "Commercial & managed properties" },
  { Icon: ClipboardList, label: "Written scope before we book" },
  { Icon: CalendarClock, label: "After-hours & weekend scheduling" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// ─── Surfaces ─────────────────────────────────────────────────────────────
const surfaceCategories = [
  {
    Icon: Layers,
    title: "Concrete & Hard Surfaces",
    description:
      "Flat exterior concrete is the bulk of commercial pressure washing: entry pads, courtyards, exterior stairs, concrete aprons and the slabs around a building that nobody cleans until they look grey. Surface cleaners cover open concrete evenly, and edges and corners are finished by hand."
  },
  {
    Icon: Footprints,
    title: "Sidewalks & Walkways",
    description:
      "Public-facing sidewalks, pedestrian paths between buildings and shared walkways through a property. These take constant foot traffic, sit exposed to weather and are the first surface a visitor stands on."
  },
  {
    Icon: Store,
    title: "Storefronts & Entrances",
    description:
      "The concrete directly outside a shop, restaurant or office entrance, plus thresholds, entry steps and the approach a customer walks. Small in area, disproportionate in what it says about a business."
  },
  {
    Icon: Building2,
    title: "Ground-Level Building Exteriors",
    description:
      "Reachable exterior wall surfaces, column bases, planter walls and hard landscaping at ground level. Masonry, brick and painted finishes are assessed first, because material and condition decide whether pressure is appropriate at all."
  },
  {
    Icon: Car,
    title: "Parking Garages & Parking Areas",
    description:
      "Garage floors, drive lanes, ramps, stair and elevator approaches, and selected surfaces in open parking areas. Enclosed structures need drainage and containment planned before anyone starts."
  },
  {
    Icon: Truck,
    title: "Loading Docks & Service Areas",
    description:
      "Dock aprons, delivery bays, service entrances and the back-of-building concrete that takes trucks, pallet jacks and spills. Usually the dirtiest area on a commercial property and the least often cleaned."
  },
  {
    Icon: Trash2,
    title: "Dumpster Pads & Waste Enclosures",
    description:
      "Concrete pads under and around bins, enclosure floors and the surrounding hard surfaces. This is cleaning, not sanitising: the aim is to lift residue and reduce odour-causing buildup on the concrete."
  },
  {
    Icon: Waves,
    title: "Courtyards & Outdoor Common Areas",
    description:
      "Shared patios, seating areas, breezeways and the hard surfaces between buildings on apartment, condominium and office campuses. Shaded corners here tend to hold organic growth longest."
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
    description: "Compacted gum, scuffing and the dark traffic lanes that develop where everyone walks the same line into a building."
  },
  {
    Icon: Utensils,
    title: "Food & Beverage Spills",
    description: "Drink spills, dropped food and the residue trailing out of a restaurant, café or break-area door onto the concrete outside."
  },
  {
    Icon: Fuel,
    title: "Oil & Grease Staining",
    description: "Drips in parking areas, grease around dock doors and kitchen exhaust residue that settles on nearby ground surfaces."
  },
  {
    Icon: Car,
    title: "Tire Marks & Vehicle Grime",
    description: "Rubber deposits, brake dust and road film left on garage floors, drive lanes and dock aprons by daily vehicle movement."
  },
  {
    Icon: CloudRain,
    title: "Weather & Runoff Staining",
    description: "Rain-carried dirt, downspout runoff trails, leaf tannin marks and the streaking that gathers below gutters and roof edges."
  },
  {
    Icon: Trash2,
    title: "Waste-Area Residue",
    description: "Leakage and buildup on dumpster pads and enclosure floors, which is usually what a persistent back-of-building smell is coming from."
  }
];

// ─── Properties and industries served ─────────────────────────────────────
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
    Icon: Building2,
    title: "Built Around Commercial Properties",
    description:
      "Most of this work is business frontage, managed property and facility exteriors. Scope is written against the areas that matter to a property manager, not against a residential price list."
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
      "Pressure washing can sit alongside commercial cleaning, window cleaning, floor care and junk removal under one point of contact instead of four."
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
  "A property that has not had its exteriors cleaned in years",
  "Preparing for a leasing tour, inspection or photography",
  "After construction, renovation or exterior repair work",
  "Before an event, opening or seasonal trading period",
  "Tenant turnover on a commercial unit",
  "Clearing a specific problem: a stained dock, a mossy walkway, a dirty garage level"
];

const recurringUses = [
  "Entrances and storefront concrete on a regular cycle",
  "Seasonal cleaning as wet-weather buildup accumulates",
  "Sidewalks and shared walkways across a managed property",
  "Dock aprons and waste-enclosure pads on a set rotation",
  "Parking structure levels staged across the year",
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
    description: "Non-hazardous items cleared from service areas and yards, best done before the concrete gets cleaned.",
    href: "/services/junk-removal",
    ctaLabel: "See junk removal"
  },
  {
    title: "Solar Panel Cleaning",
    description: "Panel washing for commercial roof and ground arrays, where soiling reduces output.",
    href: "/services/solar-panel-cleaning",
    ctaLabel: "Explore solar panel cleaning"
  },
  {
    title: "Strip & Wax",
    description: "Interior hard-floor stripping, waxing and refinishing, the indoor counterpart to exterior surface work.",
    href: "/services/strip-and-wax",
    ctaLabel: "View strip and wax"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "Do you provide commercial pressure washing in Seattle?",
    answer:
      "Yes. Commercial exterior surface cleaning is regular work for us across Seattle and the surrounding cities, for business owners, property managers and facility managers. Typical jobs are entrances and storefront concrete, sidewalks and shared walkways, courtyards, parking structures, dock aprons and waste-enclosure pads. Work is quoted per property after we have seen the surfaces and the access."
  },
  {
    question: "What surfaces can you pressure wash?",
    answer:
      "Exterior hard surfaces at ground level: concrete sidewalks, walkways, entry areas, courtyards, exterior stairs, concrete pads, pavers, parking structure floors, ramps, dock aprons and dumpster pads. Brick, masonry and painted surfaces are assessed individually, because the material and its condition decide whether pressure washing is appropriate and at what pressure. If a surface should not be cleaned this way, we will tell you rather than take the risk."
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
    question: "Do you clean parking garages and parking areas?",
    answer:
      "Yes. Garage floors, drive lanes, ramps, entrances, stair and elevator approaches and selected surface-lot areas. Enclosed structures need planning around drainage, runoff and traffic, so the work is normally staged level by level or bay by bay, overnight or at weekends, keeping the rest of the structure open. If what you need is routine litter and debris upkeep rather than washing, our parking lot and exterior maintenance service covers that."
  },
  {
    question: "Can you pressure wash commercial sidewalks and walkways?",
    answer:
      "Yes, and it is one of the most requested areas on commercial properties. Sidewalk frontage, connecting paths, shared walkways and covered breezeways all collect traffic grime, gum, spills and organic growth. Public-facing sidewalks are usually cleaned early morning or after hours so pedestrian routes are affected as little as possible, with the area cordoned while it is worked and rinsed."
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
    question: "How often should a commercial property be pressure washed?",
    answer:
      "There is no universal schedule, and anyone quoting one has not looked at your property. Frequency depends on foot and vehicle traffic, how exposed or shaded the surfaces are, whether food, waste or vehicles are involved, nearby trees and runoff, the surface material, and the standard you present the property to. A busy restaurant entrance and a quiet office courtyard genuinely do not need the same cycle. We will suggest a realistic interval after seeing the site."
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
      name: `${PAGE_TITLE} | Cleaning From The Heart`,
      description: PAGE_DESCRIPTION,
      about: { "@id": `${SITE_URL}${PAGE_PATH}#service` },
      isPartOf: { "@id": `${SITE_URL}/#business` }
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PAGE_PATH}#service`,
      name: "Commercial Pressure Washing in Seattle",
      serviceType: "Commercial Pressure Washing",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area property managers, facility managers, building owners, business owners and commercial tenants"
      },
      description:
        "Commercial pressure washing and exterior hard-surface cleaning in Seattle for concrete, sidewalks, walkways, storefronts and entrances, ground-level building exteriors, parking garages and parking areas, loading docks, service areas, dumpster pads and outdoor common areas. Available as one-time exterior cleaning or on a recurring maintenance schedule, with the method and pressure matched to the surface after an on-site assessment.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Commercial Pressure Washing Surfaces",
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
              <span className="eyebrow-light">Seattle Commercial Pressure Washing</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Commercial Pressure Washing Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Exterior surface cleaning for commercial buildings, concrete, sidewalks, storefronts and entrances,
                parking areas, loading zones and managed properties across Seattle. The pressure and the method are
                matched to the surface, and the schedule is built around how your property actually operates.
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
                  staining accumulate over months until an entrance, walkway or dock area looks neglected, and by
                  then nobody on site can remember what it used to look like.
                </p>
                <h2 className="mt-5 text-base font-semibold text-white">How We Help</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  We assess the surface, the buildup and the access first, then clean with an approach suited to
                  that specific area, working around your operating hours so entrances and service routes stay
                  usable.
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
                Professional Pressure Washing for Seattle Commercial Properties
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Cleaning From The Heart LLC provides commercial pressure washing and exterior hard-surface cleaning
                for businesses, commercial buildings, facilities and managed properties throughout Seattle. The work
                covers the exterior surfaces people actually use: concrete sidewalks and walkways, entry areas and
                exterior stairs, storefront frontage, courtyards and shared outdoor areas, parking structure floors
                and ramps, loading docks and service entrances, and the waste-enclosure pads at the back of a
                building.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Most enquiries come from property managers, facility managers, building owners and business owners
                who have watched a surface get gradually worse and want it dealt with properly rather than hosed
                down. Some of it is a single cleanup on a property that has gone years without one. Some of it is a
                recurring schedule for entrances and walkways that will not stay clean on their own.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Every quote follows a look at the actual surfaces, because material, condition and the type of
                buildup change the job more than square footage does. Exterior work is also quoted alongside{" "}
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
                when a property wants its exterior handled as one job.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Residential exterior work, driveways, patios and walkways on a house, is part of what we do as well,
                and several of the photographs on this page come from that work. The service described here is
                built around commercial and managed properties.
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
            title="Commercial Surfaces We Pressure Wash"
            description="The exterior hard surfaces that carry a commercial property: what visitors walk on, what vehicles drive over and what sits behind the building where nobody looks until it becomes a problem."
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
              themselves. It is the single most common reason a commercial property books this service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Where it shows first is predictable. North-facing walkways that never catch direct sun. Concrete
              under a canopy, an overhang or a stairwell. Paths beside planting beds, under trees, or along a fence
              line. Low spots where water sits after it stops raining. Those areas go green, then dark, and start
              looking neglected long before the open, sunlit parts of the same property do.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Wet weather also carries dirt around. Runoff traces dark lines below downspouts and roof edges,
              leaves break down on hard surfaces and leave tannin marks, and silt washes across walkways from
              planting beds and construction nearby. None of it is remarkable on its own, but a season of it
              changes how a building reads from the street.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The practical consequence for maintenance planning is that exterior cleaning here is a cycle rather
              than a one-time fix, and that timing matters. Work is planned around dry-enough windows and around
              when the property can spare the area, which is why exterior cleaning for commercial sites is usually
              set up as a schedule rather than an emergency call.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── PROPERTIES SERVED ───────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="properties">
        <Container>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Pressure Washing for Seattle Businesses & Managed Properties"
            description="Different property types wear their exteriors out in different ways. These are the ones that book this service most, each linked to what we do for that sector."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {propertiesServed.map(({ Icon, title, description, href, linkLabel }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="card flex h-full flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
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

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
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

      {/* ── CONCRETE ────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="concrete">
        <Container>
          <ServiceEditorialSplit
            src="/images/gallery/gallery-19.jpg"
            alt="Before and after views of a large concrete drive area being pre-treated and then cleaned"
            width={1080}
            height={1080}
            sizes="(max-width: 1023px) 100vw, 45vw"
            aspect="none"
            caption="Pre-treatment applied to a large concrete area, and the same surface after washing and rinsing."
            imagePosition="left"
            columns="lg:grid-cols-[0.9fr_1fr]"
            align="start"
          >
            <span className="eyebrow">Concrete</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Concrete Pressure Washing in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Concrete is the default surface on almost every commercial property, and it hides its condition well.
              Because it darkens uniformly and slowly, a slab can lose most of its original tone before anyone
              registers that it has changed. The contrast at the edge of a cleaned section is usually what makes
              the point.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              It is also porous, which is the fact that governs this work. Water, oil, tannin and organic growth
              all move into the surface rather than resting on it, so cleaning concrete properly means lifting what
              has penetrated the top layer, not just rinsing the top of it. Open areas are covered with a surface
              cleaner for an even result, edges, corners and joints are worked separately, and heavier buildup gets
              pre-treated and given time to break down before it is washed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Commercial concrete we clean includes:
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
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
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Where a slab is cracking, spalling or has a failing sealer, we will say so during the assessment.
              Cleaning does not repair concrete, and pushing pressure into damaged areas makes them worse rather
              than better.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── SIDEWALKS ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-white" id="sidewalks">
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
              This is presentation work more than anything else. A visitor forms an impression of a building on the
              approach, before the door, and shared walkways across an apartment complex or office campus are the
              part of the property tenants see every single day. We clean these areas so they look maintained, we
              do not claim that cleaning makes a walkway safe or prevents accidents, which depends on the surface,
              the weather and the property&apos;s own maintenance.
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
      <section className="section-shell bg-surface" id="storefronts">
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
                <article key={title} className="rounded-2xl border border-brand-100 bg-white p-6">
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
      <section className="section-shell scroll-mt-28 bg-white" id="parking">
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
                <article key={title} className="rounded-2xl border border-brand-100 bg-surface p-6">
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
            title="Why Seattle Businesses Choose Cleaning From The Heart"
            description="A locally owned, family-operated company with 30+ years of hands-on experience across Seattle-area commercial and residential properties."
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
            title="Our Commercial Pressure Washing Process"
            description="Four steps from first call to finished surfaces. Everything that affects the price or the schedule is settled before a date is held."
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
        The two photographs below are genuine company work, but both are from
        residential exterior jobs (a hardscaped patio and a paver/flagstone
        area), so the captions describe them for exactly what they are and
        never imply a commercial site. They also come from `galleryItems` in
        lib/site.ts, which is what feeds /gallery.

        When commercial pressure-washing photos exist, add them to
        /public/images/services/pressure-washing/ plus matching `galleryItems`
        entries, and swap them in here. Priority shots:
          1. Commercial concrete sidewalk, before/after pair
          2. Storefront or building entrance, before/after pair
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
            title="Pressure Washing Results"
            description="Exterior surface cleaning from Seattle-area properties. Both of these show hard surfaces that had years of weather and organic buildup on them before the visit."
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
            title="Complete Exterior Property Cleaning"
            description="Pressure washing covers the hard surfaces. These are the services properties most often run alongside it, usually on the same schedule and the same quote."
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
                  Commercial Pressure Washing in Seattle &amp; Nearby Areas
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
                Commercial Pressure Washing FAQs
              </h2>
              <p className="mt-4 text-base text-muted">
                What property managers, facility managers and business owners ask most before booking exterior
                surface cleaning.
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
                <p className="eyebrow-light">Commercial Pressure Washing in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Need Pressure Washing for Your Seattle Property?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us the property type, which exterior surfaces are involved, roughly how much area, and when
                  the work needs to happen. Business owners, property managers and facility managers get a written
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
