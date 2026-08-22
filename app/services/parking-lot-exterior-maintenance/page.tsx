import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  CloudRain,
  Coffee,
  DoorOpen,
  Droplets,
  Dumbbell,
  Footprints,
  GraduationCap,
  Hand,
  Key,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Repeat,
  Search,
  ShieldCheck,
  Signpost,
  Sparkles,
  Store,
  Trash2,
  Truck,
  Warehouse,
  Wind
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { siteConfig, serviceAreas } from "@/lib/site";
import { quoteHrefForService } from "@/lib/quote-form";

// Quote CTAs on this page preselect this service in the quote form.
const QUOTE_HREF = quoteHrefForService("parking-lot-exterior-maintenance");

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const PAGE_PATH = "/services/parking-lot-exterior-maintenance";

const PAGE_TITLE = "Parking Lot Cleaning Seattle | Exterior Maintenance Services";
const PAGE_DESCRIPTION =
  "Commercial parking lot cleaning and exterior maintenance in Seattle for offices, retail, apartments and managed properties. One-time or recurring. Free quote.";

// ─────────────────────────────────────────────────────────────────────────
// IMAGES
//
// No parking lot or commercial exterior photography exists in /public yet.
// Every image used below is either (a) a real company job photo already in
// `galleryItems` (lib/site.ts), captioned honestly as the residential
// exterior work it actually is, or (b) a stock photograph whose caption never
// presents it as our work. Nothing here invents a file path. See the IMAGE
// NOTES block above the results section for the shots still needed.
// ─────────────────────────────────────────────────────────────────────────
const OVERVIEW_IMAGE = "/home/services/pressure-wash.jpg"; // stock, flat exterior concrete
const CREW_IMAGE = "/home/work/work-office-seattle.png"; // real company photo, Seattle commercial job

export const metadata: Metadata = {
  // `absolute` bypasses the layout title template, which would otherwise append
  // the brand a second time and push the title past a usable length.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    // Primary
    "parking lot cleaning Seattle",
    "commercial parking lot cleaning Seattle",
    "parking lot cleaning services Seattle",
    "parking lot cleaners Seattle",
    "Seattle parking lot cleaning company",
    "parking lot maintenance Seattle",
    "parking area cleaning Seattle",
    // Exterior maintenance cluster
    "exterior property cleaning Seattle",
    "commercial exterior cleaning Seattle",
    "exterior maintenance services Seattle",
    "commercial property exterior maintenance Seattle",
    "commercial property maintenance Seattle",
    // Intent variants
    "parking lot debris removal Seattle",
    "parking lot litter removal Seattle",
    "retail parking lot cleaning Seattle",
    "apartment parking lot cleaning Seattle",
    "office parking lot cleaning Seattle",
    "shopping center parking lot cleaning Seattle",
    "commercial sidewalk cleaning Seattle",
    "dumpster area cleaning Seattle"
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
        url: OVERVIEW_IMAGE,
        alt: "Exterior concrete surface being cleaned at a commercial property"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OVERVIEW_IMAGE]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
//
// SCOPE BOUNDARY, READ BEFORE EDITING COPY ON THIS PAGE:
//
// This page owns parking lot cleaning and routine exterior property upkeep:
// litter, leaves, loose debris and general presentation across lots, walkways,
// entrances, curbs and perimeter areas. It is dry, hand-performed debris work.
//
// It deliberately does NOT target pressure washing intent (washing concrete,
// removing stains, grease, algae growth or ground-in buildup), which belongs
// to /services/pressure-washing. That page already links here for "routine
// litter, debris and perimeter upkeep between washes", and this page links
// back for anything that needs water and pressure. Keep the split intact.
//
// CAPABILITY LIMITS, none of the following are claimed anywhere on this site
// and none may be added here without confirmation from the business:
//   - mechanical/power sweeping, street sweepers, vacuum sweeper trucks
//   - line striping, sealcoating, asphalt repair, snow or ice services
//   - landscaping, mowing, pruning or green-waste contracts
//   - biohazard, hazardous-waste or chemical remediation
//   - pest control or graffiti removal
//
// Claims used below are limited to what the site documents elsewhere: locally
// owned and family-operated, licensed and insured, 30+ years of Seattle
// cleaning experience, Mon-Sat 7 AM-7 PM, same crew, written scope, free
// quotes, direct communication with the owner. No pricing, no response-time
// promises, no safety guarantees.
// ─────────────────────────────────────────────────────────────────────────

const jumpLinks = [
  { label: "Overview", href: "#overview" },
  { label: "What We Cover", href: "#scope" },
  { label: "Problems", href: "#problems" },
  { label: "Seattle Climate", href: "#climate" },
  { label: "Properties", href: "#properties" },
  { label: "Property Managers", href: "#property-managers" },
  { label: "Frequency", href: "#frequency" },
  { label: "Pressure Washing", href: "#pressure-washing" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faq" }
];

const glanceItems = [
  "Parking lots, sidewalks, entrances, curbs and perimeter areas",
  "Offices, retail, restaurants, apartments and managed portfolios",
  "One-time exterior cleanups or a recurring schedule",
  "Written scope agreed before the first visit"
];

const trustStripItems = [
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" },
  { Icon: ClipboardList, label: "Written scope and free quote first" },
  { Icon: ShieldCheck, label: "Licensed, insured, locally owned" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// ─── What the service can cover ───────────────────────────────────────────
const scopeAreas = [
  {
    Icon: Car,
    title: "Parking Lots",
    description:
      "The core of the service. Litter, leaves, cups, packaging and loose debris cleared from parking bays, drive lanes, islands, and the edges where wind pushes everything. Lots are worked area by area rather than skimmed, because the debris that matters is rarely in the middle."
  },
  {
    Icon: Footprints,
    title: "Sidewalks & Walkways",
    description:
      "Pedestrian approaches, connecting paths between buildings, sidewalk frontage and shared exterior routes. These carry every visitor on the property, collect the most tracked-in grit, and are the surfaces people actually look at while they walk."
  },
  {
    Icon: DoorOpen,
    title: "Building Entrances",
    description:
      "Entry approaches, door surrounds, covered entryways and the arrival area immediately outside. A few square metres of ground that set the impression before anyone reaches reception, and the first place debris gathers out of the wind."
  },
  {
    Icon: Signpost,
    title: "Curbs & Perimeter Areas",
    description:
      "Curb lines, corners, fence lines, planter edges and the boundary strip along the property line. Debris migrates to edges and stays there, so perimeter work is usually what separates a lot that looks maintained from one that does not."
  },
  {
    Icon: Store,
    title: "Storefront & Frontage Areas",
    description:
      "The customer-facing ground in front of a shop, restaurant or office suite, including the frontage below display glass and any outdoor seating or queue space beside the door. Kept tidy because it is the part of the property a passer-by judges."
  },
  {
    Icon: Trash2,
    title: "Dumpster & Trash Areas",
    description:
      "Loose litter and windblown debris around bins, enclosures and exterior waste collection points, plus the ground immediately surrounding them. This is exterior tidying only, not sanitising, and not handling of hazardous or regulated waste."
  },
  {
    Icon: Truck,
    title: "Loading & Service Areas",
    description:
      "Delivery bays, back-of-building approaches, service entrances and the routes staff and suppliers use daily. Usually the busiest ground on a commercial property and the last part of it anyone thinks to include in a scope."
  },
  {
    Icon: Building2,
    title: "Parking Structures & Covered Parking",
    description:
      "Debris and litter upkeep across garage levels, ramps, stair approaches and covered parking bays. Structures never get rained on, so nothing clears itself, and what lands there stays until someone picks it up."
  }
];

// ─── How the work is actually performed, kept deliberately honest ─────────
const methodIncluded = [
  "Hand collection of litter, leaves and loose debris",
  "Manual sweeping of walkways, entries and curb lines",
  "Clearing debris out of corners, edges and planter surrounds",
  "Tidying around exterior bins and waste collection points",
  "Bagging and removal of the collected debris",
  "A walk of the agreed areas at the end of each visit"
];

const methodExcluded = [
  {
    label: "Mechanical or power sweeping",
    note: "We do not operate street sweepers or vacuum sweeper trucks."
  },
  {
    label: "Line striping, sealcoating and asphalt repair",
    note: "Paving and marking work needs a paving contractor."
  },
  {
    label: "Snow and ice services",
    note: "Not part of this or any of our service lines."
  },
  {
    label: "Landscaping and green-waste contracts",
    note: "We clear fallen debris, we do not mow, prune or plant."
  },
  {
    label: "Hazardous or regulated waste",
    note: "Chemicals, medical and biohazard material need a licensed provider."
  }
];

// ─── Seattle exterior problems ────────────────────────────────────────────
const exteriorProblems = [
  {
    Icon: Leaf,
    title: "Leaves & Organic Debris",
    description:
      "Mature trees line a great many Seattle commercial sites, and what falls from them lands on the lot, packs into curb lines, gathers against wheel stops and blows into entryways. Landscaped edges hold it longest, because that is where the wind stops."
  },
  {
    Icon: Wind,
    title: "Dirt & General Exterior Buildup",
    description:
      "Vehicles carry road grit onto a lot every day, foot traffic drags it toward the doors, and weather redistributes it. On a busy site the accumulation is gradual enough that nobody notices it until a photograph or an inspection makes it obvious."
  },
  {
    Icon: Trash2,
    title: "Litter",
    description:
      "Customer-facing properties collect cups, wrappers, receipts and packaging without anyone being at fault. Retail frontage, restaurant exteriors and shared lots generate it fastest, and it is the single most visible thing on a property."
  },
  {
    Icon: CloudRain,
    title: "Wet-Weather Debris",
    description:
      "Rain does not clear a lot, it pins things down. Wet leaves mat into curb lines and drain grates instead of blowing through, dirt turns to a film that gets walked indoors, and debris that would have moved on in dry weather simply stays."
  },
  {
    Icon: Droplets,
    title: "Moss & Algae",
    description:
      "Damp, shaded exterior concrete in this region grows green. Routine debris clearing keeps organic matter from sitting on the surface and feeding it, but established growth needs washing rather than sweeping, which is a pressure washing job."
  },
  {
    Icon: CalendarClock,
    title: "Seasonal Cleanup",
    description:
      "Autumn leaf fall, winter storm debris, spring blossom and pollen, and the higher foot traffic that comes with longer days all change what lands on a property. Most sites need more attention in some months than in others."
  }
];

// ─── Frequency factors ────────────────────────────────────────────────────
const frequencyFactors = [
  "Vehicle traffic through the lot",
  "Pedestrian volume across walkways and entries",
  "Trees and landscaping around the property",
  "How the building is used day to day",
  "Season and current weather conditions",
  "Property and lot size",
  "Exposure to wind and open frontage",
  "Neighbouring businesses and shared access",
  "The presentation standard you want held"
];

const frequencyTiers = [
  {
    Icon: Store,
    title: "High-Traffic Properties",
    description:
      "Retail centres, restaurants, mixed-use buildings and anywhere customers arrive all day. These generate litter continuously and are judged on appearance constantly, so they often benefit from weekly or more frequent attention."
  },
  {
    Icon: Building2,
    title: "Moderate-Traffic Properties",
    description:
      "Office buildings, professional suites, medical offices and similar commercial facilities. Debris accumulates predictably rather than constantly, so weekly, biweekly or a custom interval usually holds the standard without over-servicing."
  },
  {
    Icon: Warehouse,
    title: "Lower-Traffic Properties",
    description:
      "Warehouses, light-industrial sites and properties with limited public access. Some hold up well on a monthly or periodic visit, with extra attention booked around deliveries, events or an upcoming inspection."
  },
  {
    Icon: Leaf,
    title: "Seasonal Adjustments",
    description:
      "Leaf fall, storms, nearby construction and busier trading periods all raise the debris load temporarily. Frequency can step up for those weeks and step back down afterwards rather than staying fixed all year."
  }
];

// ─── Commercial property types ────────────────────────────────────────────
// `href` points only at routes that exist. Schools and restaurants have no
// /industries page (hasPage: false in lib/industries.ts), so they link to the
// matching service page instead.
const propertyTypes = [
  {
    Icon: Building2,
    title: "Office Buildings",
    description:
      "Tenant and visitor parking, entry approaches and the walkways between buildings on a campus or business park.",
    href: "/industries/offices-commercial-buildings"
  },
  {
    Icon: Store,
    title: "Retail Stores & Shopping Centres",
    description:
      "Customer lots, storefront frontage and shared walkways, where litter is generated fastest and noticed first.",
    href: "/industries/retail-stores"
  },
  {
    Icon: Coffee,
    title: "Restaurants & Food Service",
    description:
      "Entrances, outdoor seating surrounds, customer parking and the back-of-building waste areas behind them.",
    href: "/services/restaurant-cleaning"
  },
  {
    Icon: Key,
    title: "Apartments & Condominiums",
    description:
      "Resident parking, walkways between blocks, mail and bin areas, and the common exterior ground residents cross daily.",
    href: "/industries/property-management"
  },
  {
    Icon: ClipboardList,
    title: "Property Management Portfolios",
    description:
      "Multiple buildings coordinated through one point of contact, with scope and frequency set per address.",
    href: "/industries/property-management"
  },
  {
    Icon: Warehouse,
    title: "Warehouses & Industrial Facilities",
    description:
      "Yard approaches, dock surrounds, staff parking and the service routes that take the heaviest daily use.",
    href: "/industries/warehouses-industrial-facilities"
  },
  {
    Icon: GraduationCap,
    title: "Schools & Educational Facilities",
    description:
      "Staff and visitor parking, drop-off zones and pedestrian approaches, scheduled around the school day.",
    href: "/services/school-facility-cleaning"
  },
  {
    Icon: Car,
    title: "Auto Dealerships",
    description:
      "Display lots, customer parking and service-department approaches, where presentation is part of the product.",
    href: "/industries/auto-dealerships"
  },
  {
    Icon: Dumbbell,
    title: "Fitness Centres",
    description:
      "Member parking and entrance approaches at properties with long opening hours and constant arrivals.",
    href: "/industries/fitness-centers"
  },
  {
    Icon: Building2,
    title: "Places of Worship",
    description:
      "Congregation parking and entry paths, cleared ahead of services, events and weekend gatherings.",
    href: "/industries/places-of-worship"
  },
  {
    Icon: ShieldCheck,
    title: "Medical & Healthcare Offices",
    description:
      "Patient parking, accessible routes and entrance approaches at properties where presentation carries weight.",
    href: "/industries/healthcare-facilities"
  },
  {
    Icon: Sparkles,
    title: "Mixed-Use & Hospitality Properties",
    description:
      "Shared lots and exterior common areas serving residential, retail and guest use in the same building.",
    href: "/industries/hospitality-properties"
  }
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Property Walkthrough",
    description:
      "We walk the exterior with you and look at the areas you want covered, plus the ones that quietly cause the most trouble: curb lines, corners, bin surrounds and whichever edge the wind loads up."
  },
  {
    number: "02",
    title: "Scope & Frequency",
    description:
      "Which areas are included, what is deliberately left out, and how often we come. Put in writing before anything is booked, so nobody is guessing what a visit covers."
  },
  {
    number: "03",
    title: "Scheduled Service",
    description:
      "The agreed exterior areas are worked on the agreed schedule, timed around your opening hours, deliveries or resident activity where the site needs it."
  },
  {
    number: "04",
    title: "Quality Review",
    description:
      "The serviced areas are walked at the end of the visit. Recurring problem zones, the spot that fills up every week, get flagged rather than quietly re-cleaned forever."
  },
  {
    number: "05",
    title: "Ongoing Adjustments",
    description:
      "Scope and frequency change with the property. Leaf season, a new tenant, a busier trading period, or an area that no longer needs the same attention. We adjust the plan, not just the invoice."
  }
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardList,
    title: "Scope Built Around Your Property",
    description:
      "No fixed packages. The areas covered are the ones you point at during the walkthrough, written down so a visit means the same thing every time."
  },
  {
    Icon: Repeat,
    title: "One-Time or Recurring",
    description:
      "A single cleanup before an inspection or event, or a standing schedule. Neither is treated as the lesser job, and there is no minimum commitment to get a quote."
  },
  {
    Icon: Building2,
    title: "Interior and Exterior Through One Company",
    description:
      "The same company that cleans inside the building can maintain the ground outside it. One point of contact, one arrangement, instead of coordinating two vendors."
  },
  {
    Icon: MapPin,
    title: "A Local Seattle Company",
    description:
      "Locally owned and family-operated, licensed and insured, with 30+ years of Seattle cleaning work behind the name. Not a franchise routing your call somewhere else."
  },
  {
    Icon: CalendarClock,
    title: "Frequency That Follows Conditions",
    description:
      "Leaf season needs more than August does. Schedules are reviewed against what the property is actually producing rather than left on the setting they started at."
  },
  {
    Icon: MessageCircle,
    title: "Straight Communication",
    description:
      "You reach the people doing the work. Scope changes, seasonal adjustments and problem areas get discussed directly, not filed through a ticket queue."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Pressure Washing",
    description:
      "Where debris clearing stops and washing starts. Concrete, walkways, entries, dumpster pads and parking surfaces with ground-in buildup, stains or organic growth.",
    href: "/services/pressure-washing",
    ctaLabel: "Explore pressure washing"
  },
  {
    title: "Commercial Window Cleaning",
    description:
      "Storefront, entry and lobby glass. The exterior ground and the glass above it are what a customer sees on approach, and they show neglect at the same rate.",
    href: "/services/commercial-window-cleaning",
    ctaLabel: "View commercial window cleaning"
  },
  {
    title: "Junk Removal",
    description:
      "Larger items beyond routine litter pickup: dumped furniture, abandoned equipment, pallets and non-hazardous bulk material left on a lot or in a service area.",
    href: "/services/junk-removal",
    ctaLabel: "See junk removal"
  },
  {
    title: "Commercial Cleaning",
    description:
      "Recurring janitorial service inside the building, scheduled alongside the exterior work so the whole property runs on one plan.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Post-Construction & Renovation Cleanup",
    description:
      "Dust, residue and construction debris after a build or remodel, including the exterior ground and approaches the work left behind.",
    href: "/services/post-construction-renovation-cleanup",
    ctaLabel: "View post-construction cleanup"
  },
  {
    title: "Property Management Cleaning",
    description:
      "Common areas, corridors and unit turnovers across single buildings or full portfolios, coordinated through the same point of contact as the exterior work.",
    href: "/industries/property-management",
    ctaLabel: "See property management cleaning"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
// These twelve questions are the single source for both the visible accordion
// and the FAQPage schema below. Never add one to only half of that pair.
const faqItems = [
  {
    question: "What does commercial parking lot cleaning include?",
    answer:
      "Clearing litter, leaves and loose debris from parking bays, drive lanes, islands, curb lines and the perimeter, then bagging and removing what is collected. Most scopes extend past the lot itself to the sidewalks, walkways and building entrances around it, because those are the areas people actually walk through. The exact list of areas is agreed at the walkthrough and written into the scope before the first visit."
  },
  {
    question: "Do you provide parking lot cleaning throughout Seattle?",
    answer:
      "Yes. We serve Seattle and the surrounding Puget Sound area, including Renton, Bellevue, Kent, Tukwila, Shoreline, Kirkland, Federal Way, Everett, Bothell and Tacoma. Availability is confirmed against your actual address and property type when we quote rather than assumed from a map, so it is worth a quick call if you are toward the edge of that range."
  },
  {
    question: "How often should a commercial parking lot be cleaned?",
    answer:
      "There is no universal answer, and anyone offering one has not seen the property. High-traffic retail and restaurant sites often need weekly or more frequent attention. Office buildings commonly sit at weekly or biweekly. Lower-traffic properties can hold up on a monthly visit. Traffic volume, surrounding trees, lot size, season and the standard you want to hold all move the answer, which is why frequency is set after the walkthrough."
  },
  {
    question: "Do you offer recurring exterior maintenance?",
    answer:
      "Yes. Recurring service is the most common way this is booked, on weekly, biweekly, monthly or a custom interval built around your property. Frequency is not locked for the year: leaf season and busier trading periods usually justify stepping it up temporarily, and quieter months justify stepping it back. Availability for a specific day or time is confirmed when we quote."
  },
  {
    question: "Can you clean sidewalks and building entrances too?",
    answer:
      "Yes, and most scopes include them. Sidewalks, connecting walkways, entry approaches and covered entrances take the heaviest foot traffic on a property and are the surfaces visitors look at most closely. They are usually the areas that make the biggest visible difference, so they are worth including rather than treating the lot in isolation."
  },
  {
    question: "Do you use mechanical parking lot sweeping equipment?",
    answer:
      "No. We do not operate street sweepers or vacuum sweeper trucks. This is hand-performed exterior cleaning: litter and debris collected manually, walkways and curb lines swept by hand, and the collected material bagged and removed. For most commercial properties that is what keeps a lot presentable between visits, and it reaches the corners, edges and planter surrounds a machine drives past."
  },
  {
    question: "Do you provide pressure washing for parking lots and exterior concrete?",
    answer:
      "Yes, as a separate service. Routine exterior maintenance handles loose debris; pressure washing handles what is bonded to the surface, such as ground-in dirt, stains, grease and organic growth on concrete, sidewalks, entries and dumpster pads. Many properties run both, with washing on a longer cycle than the debris visits. Full details are on our pressure washing page."
  },
  {
    question: "Do you clean dumpster and trash enclosure areas?",
    answer:
      "We clear loose litter and windblown debris around exterior bins, enclosures and waste collection points as part of routine exterior maintenance. Washing the pad or enclosure floor itself is pressure washing work and is quoted separately. This is surface tidying and cleaning, not sanitising, and it does not include hazardous, medical or regulated waste, which needs a licensed disposal provider."
  },
  {
    question: "Do you work with apartment buildings and property managers?",
    answer:
      "Yes. Apartment communities, condominium associations and property management portfolios are a core part of this service. Resident parking, walkways between blocks, mail and bin areas and building entrances are the areas most often included. Multiple buildings can be coordinated through one point of contact, with scope and frequency set separately for each address rather than applied as a blanket contract."
  },
  {
    question: "Can exterior cleaning be combined with commercial janitorial service?",
    answer:
      "Yes, and it is usually simpler that way. We already provide recurring commercial cleaning inside offices, retail spaces and facilities, so the exterior work can run on the same arrangement and the same point of contact. Interior and exterior scopes stay separate in writing, but you deal with one company rather than coordinating two vendors on one property."
  },
  {
    question: "Do you offer one-time exterior property cleanup?",
    answer:
      "Yes. One-time cleanups are common before a property inspection, a lease handover, an event, a tenant turnover, or after a storm or a stretch of neglect has left more debris than usual. There is no requirement to commit to a recurring schedule, and a one-time visit is quoted the same way: a walkthrough, a written scope, and a date."
  },
  {
    question: "How does Seattle weather affect exterior maintenance needs?",
    answer:
      "Frequent rain and damp conditions mean debris tends to stay put rather than blow through. Wet leaves mat into curb lines and drain grates, dirt turns into a film that gets tracked indoors, and shaded concrete stays damp long enough for organic growth to take hold. Autumn leaf fall is the sharpest seasonal change, and many properties step frequency up through it and back down afterwards."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component, and
// Organization / LocalBusiness live in app/layout.tsx under
// `${SITE_URL}/#business`. Neither is repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const parkingLotSchema = {
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
      name: "Commercial Parking Lot Cleaning & Exterior Maintenance in Seattle",
      serviceType: "Parking Lot Cleaning & Commercial Exterior Maintenance",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area business owners, facility managers, property managers, retail operators and commercial property owners"
      },
      description:
        "Commercial parking lot cleaning and routine exterior property maintenance in Seattle. Hand-performed clearing of litter, leaves and loose debris across parking lots, sidewalks, walkways, building entrances, curbs, perimeter areas, storefront frontage, exterior waste areas, loading areas and parking structures. Available as a one-time exterior cleanup or on a recurring schedule. Mechanical street sweeping, paving, striping, landscaping and hazardous-waste handling are outside this service.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Parking Lot & Exterior Maintenance Options",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Parking Lot Cleaning",
              description:
                "Clearing litter, leaves and loose debris from parking bays, drive lanes, islands, curb lines and lot perimeters at Seattle commercial properties."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sidewalk & Walkway Cleaning",
              description:
                "Debris clearing across pedestrian approaches, connecting walkways, sidewalk frontage and shared exterior routes."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Building Entrance & Storefront Frontage Upkeep",
              description:
                "Routine exterior tidying of entry approaches, covered entryways, storefront frontage and customer-facing arrival areas."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Curb & Perimeter Debris Clearing",
              description:
                "Clearing debris from curb lines, corners, fence lines, planter edges and property boundary areas where debris collects."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Waste & Loading Area Tidying",
              description:
                "Clearing loose litter and windblown debris around exterior bins, waste enclosures, delivery bays and service entrances. Non-hazardous material only."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Recurring Exterior Property Maintenance",
              description:
                "Weekly, biweekly, monthly or custom-frequency exterior cleaning schedules for Seattle commercial properties, adjusted for season and conditions."
            }
          }
        ]
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

export default function ParkingLotExteriorMaintenancePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <div className="absolute inset-0 opacity-20 surface-grid" aria-hidden />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Parking Lot & Exterior Maintenance", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="eyebrow-light">Seattle Parking Lot Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Commercial Parking Lot Cleaning &amp; Exterior Maintenance in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Routine exterior cleaning for Seattle parking lots, sidewalks, walkways, building entrances, curb
                lines and the perimeter areas around them. Booked as a one-time cleanup or on a recurring
                schedule, with the areas covered agreed in writing before the first visit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={QUOTE_HREF} className="cta-gold">
                  Get a Free Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  Call {siteConfig.phoneDisplay}
                </Link>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Locally owned and family-operated · Licensed and insured · {siteConfig.businessHours}
              </p>
            </div>

            <aside className="card-dark">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Car className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">The Common Problem</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Litter, leaves and loose debris build up across a commercial lot faster than anyone plans for. It
                collects along curbs, packs into corners, gathers at entrances and settles on the frontage
                customers walk past, until a property that is well run starts looking like one that is not.
              </p>
              <h2 className="mt-5 text-base font-semibold text-white">How We Help</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Recurring or one-time exterior cleaning across the areas you nominate. It helps reduce debris
                buildup, supports cleaner walking areas, and helps maintain a property&apos;s appearance at the
                point where tenants, customers and inspectors actually form an opinion of it.
              </p>
              <ul className="mt-5 grid gap-2.5 border-t border-white/10 pt-5 sm:grid-cols-2">
                {glanceItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
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

      {/* ── DIRECT-ANSWER INTRODUCTION ──────────────────────────────────── */}
      <section className="section-shell-tight scroll-mt-28 bg-white" id="overview" aria-labelledby="overview-heading">
        <Container>
          <ServiceEditorialSplit
            src={OVERVIEW_IMAGE}
            alt="Flat exterior concrete surface at a commercial property being cleaned"
            width={1200}
            height={800}
            sizes="(max-width: 1023px) 100vw, 44vw"
            aspect="aspect-[4/3]"
            imagePosition="right"
            align="center"
            columns="lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]"
            caption="Exterior hard-surface cleaning. Stock photograph, shown to illustrate the surfaces involved."
          >
            <span className="eyebrow">What This Service Is</span>
            <h2 id="overview-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Parking Lot Cleaning Services for Seattle Commercial Properties
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Cleaning From The Heart LLC provides commercial parking lot cleaning and exterior property cleaning
              across Seattle and the surrounding area. The work is straightforward: litter, leaves and loose
              debris cleared from the outdoor areas of a commercial property, then bagged and taken away.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Most scopes run wider than the lot itself. Sidewalks, connecting walkways, building entrances, curb
              lines, storefront frontage, exterior waste areas, loading approaches and parking structures are all
              areas we are asked to cover, and they are usually where the visible difference is largest.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The properties are offices, retail centres, restaurants, apartment communities, warehouses, schools
              and managed portfolios. Some book a single exterior cleanup ahead of an inspection or an event.
              Others put commercial exterior maintenance on a weekly, biweekly or monthly schedule and adjust it
              through the seasons.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Nothing here is a fixed package. You tell us which areas matter, we walk the property, and the scope
              is written down before a date is set.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── WHAT WE COVER ───────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="scope">
        <Container>
          <SectionHeading
            eyebrow="Scope of Work"
            title="What Our Exterior Maintenance Service Can Cover"
            description="Eight exterior areas account for nearly every scope we are asked to quote. You choose which of them apply to your property, and the list is written into the agreement rather than left to interpretation."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {scopeAreas.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05} className="h-full">
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
            <Link href={QUOTE_HREF} className="cta-primary">
              Get a Free Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call Now
            </Link>
          </div>
        </Container>
      </section>

      {/* ── HOW THE WORK IS DONE ────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <SectionHeading
            eyebrow="How It Is Done"
            title="Hand-Performed Exterior Cleaning, Not Mechanical Sweeping"
            description="Worth being clear about up front, because the two are often searched for interchangeably and they are not the same service."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <Hand className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">What a visit involves</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Debris is collected by hand and by manual sweeping, which reaches the corners, curb lines,
                  planter edges and bin surrounds where most of it actually sits.
                </p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {methodIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <div className="card flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <ShieldCheck className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">What this service does not include</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We would rather name these than let a quote request go in on the wrong assumption.
                </p>
                <ul className="mt-5 grid flex-1 gap-4">
                  {methodExcluded.map(({ label, note }) => (
                    <li key={label}>
                      <p className="text-sm font-semibold text-ink">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{note}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-brand-100 pt-5 text-sm leading-relaxed text-muted">
                  Buildup that is bonded to the surface rather than lying on it is a washing job.{" "}
                  <Link
                    href="/services/pressure-washing"
                    className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                  >
                    Pressure washing
                  </Link>{" "}
                  covers that, and the two are often scheduled on different cycles for the same property.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── COMMON PROBLEMS ─────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="problems">
        <Container>
          <SectionHeading
            eyebrow="What We Deal With"
            title="Common Exterior Cleaning Problems We Handle"
            description="Six recurring conditions account for most of what a Seattle commercial exterior actually produces between visits."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {exteriorProblems.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05} className="h-full">
                <article className="card flex h-full flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
            Established moss or algae on concrete needs washing rather than clearing.{" "}
            <Link
              href="/services/pressure-washing"
              className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
            >
              See our pressure washing service
            </Link>{" "}
            for exterior hard surfaces that have gone past what routine maintenance can hold.
          </p>
        </Container>
      </section>

      {/* ── SEATTLE CLIMATE ─────────────────────────────────────────────── */}
      <section className="relative section-shell scroll-mt-28 overflow-hidden bg-brand-950 text-white" id="climate">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div
          className="absolute -right-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl"
          aria-hidden
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <span className="eyebrow-light">Local Conditions</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                Exterior Property Maintenance for Seattle&apos;s Wet Climate
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Exterior maintenance behaves differently here than it does in a dry climate, and the difference is
                less about the amount of rain than about what rain does to debris. In dry conditions a lot partly
                clears itself: wind moves leaves and litter along, dirt dries out and gets blown off. Damp
                conditions stop that. Wet leaves mat into curb lines and drain grates and stay there, litter
                sticks to the surface instead of travelling, and dirt turns into a film that gets carried indoors
                on shoes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Shade compounds it. A lot with mature trees along one edge, a covered walkway, or a building that
                keeps one side out of the sun holds moisture far longer than the open bays do. Those are the areas
                that stay damp, hold organic debris and eventually grow green, and they are almost always the
                areas a property owner notices last.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Seasonal leaf fall is the sharpest change in the year. A property that is comfortable on a monthly
                visit through the summer can generate more debris in three autumn weeks than it did in the
                previous three months. Entrances are the pressure point, because damp organic debris tracked
                through a doorway becomes an interior cleaning problem within a day.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                None of this points to one correct schedule. It points to reviewing the schedule against what the
                property is actually producing, which is why frequency here is a conversation rather than a number
                on a price list.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={QUOTE_HREF} className="cta-gold">
                  Request a Free Quote
                </Link>
                <Link href="/services/pressure-washing" className="cta-ghost">
                  Explore Pressure Washing
                </Link>
              </div>
            </div>

            <div className="card-dark">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <CloudRain className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-white">What changes the right frequency</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Two commercial properties on the same street can need very different schedules. These are the
                factors we weigh at the walkthrough.
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {frequencyFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2 text-sm text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/45">
                Serving Seattle and the surrounding Puget Sound area, {siteConfig.businessHours}.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROPERTIES WE SERVE ─────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="properties">
        <Container>
          <SectionHeading
            eyebrow="Property Types"
            title="Commercial Properties We Serve"
            description="The work is the same; what changes is which exterior areas matter most and how quickly they fill up. These are the property types that book it most often."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map(({ Icon, title, description, href }, index) => (
              <Reveal key={title} delay={index * 0.04} className="h-full">
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
                    Cleaning for this property type
                    <ArrowRight className="ml-1 h-3 w-3 shrink-0" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROPERTY MANAGERS ───────────────────────────────────────────── */}
      <section className="relative section-shell scroll-mt-28 overflow-hidden bg-ink text-white" id="property-managers">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div
          className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl"
          aria-hidden
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <span className="eyebrow-light">For Property Managers</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                Parking Lot &amp; Exterior Maintenance for Seattle Property Managers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Exterior common areas are the part of a property everyone sees and nobody is specifically
                responsible for. Tenants notice a lot that has not been touched in a fortnight. Residents notice
                the walkway between their door and their car. Owners notice it on the inspection photographs,
                which is usually the least convenient moment for everyone.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                A recurring exterior schedule takes that off the list. Parking areas, walkways between blocks,
                mail and bin surrounds, and building entrances get worked on an agreed cycle, so curb appeal is
                maintained continuously rather than fixed in a rush before a walkthrough.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Scope changes are handled directly. If a building starts generating more debris, if a new tenant
                changes how an area is used, or if leaf season needs a temporary step up, that is a conversation
                and a written adjustment rather than a contract renegotiation. Multiple addresses can run through
                one point of contact, each with its own scope and frequency instead of a blanket arrangement
                applied across the portfolio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={QUOTE_HREF} className="cta-gold">
                  Quote My Property
                </Link>
                <Link href="/industries/property-management" className="cta-ghost">
                  Property Management Cleaning
                </Link>
              </div>
            </div>

            <ServiceImagePanel
              src={CREW_IMAGE}
              alt="Cleaning From The Heart crew working across an open-plan Seattle commercial floor"
              width={1268}
              height={701}
              sizes="(max-width: 1023px) 100vw, 44vw"
              aspect="aspect-[16/10]"
              variant="dark"
              caption="Our crew on a Seattle commercial job. Exterior maintenance is quoted for the same properties we clean inside."
            />
          </div>
        </Container>
      </section>

      {/* ── ONE-TIME VS RECURRING ───────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            eyebrow="How It Is Booked"
            title="One-Time & Recurring Exterior Maintenance"
            description="Both are quoted the same way, and neither requires committing to the other."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <article className="card flex h-full flex-col gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Sparkles className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-ink">One-Time Exterior Cleanup</h3>
                <p className="text-sm leading-relaxed text-muted">
                  A single visit, usually because something is coming up or something has built up. No ongoing
                  commitment attached, and no obligation to convert it into a schedule afterwards.
                </p>
                <ul className="mt-1 grid gap-2.5">
                  {[
                    "Seasonal cleanup after leaf fall or a storm",
                    "Preparing a property for sale, lease or handover",
                    "Clearing debris that has accumulated over months",
                    "Ahead of an event, opening or site visit",
                    "Before a property inspection or walkthrough",
                    "Tenant turnover and exterior common-area resets"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <article className="card flex h-full flex-col gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Repeat className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-ink">Recurring Exterior Maintenance</h3>
                <p className="text-sm leading-relaxed text-muted">
                  A standing schedule, so the property never gets far from where you want it. Frequency is
                  proposed after the walkthrough and confirmed against availability rather than promised up front.
                </p>
                <ul className="mt-1 grid gap-2.5">
                  {[
                    "Weekly service for high-traffic customer-facing sites",
                    "Biweekly service for steadier commercial properties",
                    "Monthly service where the debris load is lighter",
                    "Custom intervals built around your operating pattern",
                    "Seasonal step-ups through leaf fall and storm months",
                    "Coordinated with interior cleaning on the same account"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── FREQUENCY ───────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="frequency">
        <Container>
          <SectionHeading
            eyebrow="Planning"
            title="How Often Should a Commercial Parking Lot Be Cleaned?"
            description="There is no single correct interval, and we do not pretend otherwise. What follows is how the answer usually falls out by property type, as a starting point for the walkthrough rather than a rule."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {frequencyTiers.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.06} className="h-full">
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

          <div className="mt-8 rounded-3xl border border-brand-100 bg-surface px-7 py-7 md:px-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                <Search className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">On pricing, plainly</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We do not publish rates for exterior maintenance, because the same figure would be wrong for
                  most properties. A quote is built from lot and property size, which exterior areas are included,
                  how often we come, the current level of buildup, access and timing constraints, and whether
                  other services are running alongside it. The walkthrough and the written quote are free, and
                  there is no obligation attached to either.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PRESSURE WASHING SUPPORT ────────────────────────────────────── */}
      <section className="section-shell-tight scroll-mt-28 bg-surface" id="pressure-washing">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
            <div>
              <span className="eyebrow">Complementary Service</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Pressure Washing for Parking Lots &amp; Exterior Areas
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Routine maintenance clears what is lying on a surface. Pressure washing removes what has bonded to
                it: ground-in dirt, weathered staining, spills and the organic growth that damp shaded concrete
                develops over time. A lot can be perfectly clear of debris and still look tired, and that is the
                point where washing does something sweeping cannot.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The two usually run on different cycles for the same property, with debris visits frequent and
                washing periodic on the surfaces that need it. Concrete walkways, entry pads, storefront frontage,
                dumpster pads and parking surfaces are the areas most often combined into one arrangement.
              </p>
              <div className="mt-8">
                <Link href="/services/pressure-washing" className="cta-primary">
                  Learn More About Our Pressure Washing Services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>

            <ServiceImagePanel
              src="/images/gallery/gallery-19.jpg"
              alt="Before and after views of a driveway surface cleaned by pressure washing at a Seattle-area property"
              width={1080}
              height={1080}
              sizes="(max-width: 1023px) 100vw, 38vw"
              aspect="none"
              caption="Pressure washing on a Seattle-area driveway. Our exterior washing photos are residential work; commercial sets are still being added."
            />
          </div>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Parking Lot & Exterior Maintenance Process"
            description="Five steps, none of them complicated. The point of writing them down is that a recurring service only stays consistent if everyone agrees what a visit means."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06} className="h-full">
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
            <div className="flex flex-col items-start gap-1">
              <Link href={QUOTE_HREF} className="cta-primary">
                Get a Free Quote
              </Link>
              <span className="pl-1 text-[11px] text-muted">Takes 60 seconds · No obligation</span>
            </div>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call Now
            </Link>
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
                  Why Seattle Businesses Choose Cleaning From The Heart LLC
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                A local commercial cleaning company holding the outside of a property to the same standard as the
                inside.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.07} className="h-full">
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

      {/*
        ─── IMAGE NOTES ─────────────────────────────────────────────────────
        No parking lot or commercial exterior photography exists in /public, and
        nothing in `galleryItems` (lib/site.ts) is tagged for it. The two photos
        used below are real company jobs, but they are RESIDENTIAL exterior
        washing, and the captions say so rather than passing them off as
        commercial lot work. They are before/after composites, so they must stay
        at aspect="none" — cropping slices a panel in half.

        Shots needed, in priority order. Add them to
        /public/images/services/parking-lot-exterior-maintenance/ plus matching
        `galleryItems` entries, then replace the panels below:
          1. Commercial parking lot before/after (litter and leaves cleared)
          2. Commercial sidewalk or walkway frontage, before/after pair
          3. Building entrance / arrival area after an exterior visit
          4. Curb line or perimeter strip cleared of leaves and debris
          5. Crew working a lot or entrance, debris bagged
        ─────────────────────────────────────────────────────────────────────
      */}
      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white" id="results">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="See Our Exterior Cleaning Results"
            description="Every photo in our Results gallery comes from a real Seattle-area job. Commercial parking lot sets are still being added, so rather than borrow images from elsewhere, these show the exterior hard-surface work already documented there."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ServiceImagePanel
              src="/images/gallery/gallery-16.jpg"
              alt="Before and after views of a large hardscaped patio cleaned at a Seattle-area waterfront property"
              width={1080}
              height={1080}
              sizes="(max-width: 767px) 100vw, 46vw"
              aspect="none"
              caption="Exterior hard surfaces at a Seattle-area property, before and after. Residential work, shown for the standard rather than the setting."
            />
            <ServiceImagePanel
              src="/images/gallery/gallery-18.jpg"
              alt="Before and after views of a paver area cleaned at a Seattle-area property"
              width={1080}
              height={1080}
              sizes="(max-width: 767px) 100vw, 46vw"
              aspect="none"
              caption="A paver area cleared and washed. Commercial parking lot and frontage photo sets are in progress."
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/gallery" className="cta-secondary">
              View the Results Gallery
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
            title="Combine Exterior Maintenance With Other Property Services"
            description="Exterior maintenance keeps the ground clear. These are the services most often run alongside it, usually on the same account and through the same point of contact."
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

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Parking Lot Cleaning FAQs</h2>
              <p className="mt-4 text-base text-muted">
                What business owners, facility managers and property managers ask most before booking exterior
                maintenance in Seattle.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Not sure what your property needs?</p>
                <p className="mt-1 text-sm text-muted">
                  Describe the site and the areas that cause the most trouble, and we&apos;ll tell you plainly
                  what falls inside this service and what does not.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={QUOTE_HREF} className="cta-primary px-4 py-2 text-xs">
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

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <span className="eyebrow">Where We Work</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Serving Commercial Properties Across Seattle
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                We are based in Renton and serve commercial properties throughout Seattle and the greater Puget
                Sound area, from downtown office buildings and retail frontage to suburban business parks,
                apartment communities and industrial sites.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Recurring exterior work is more sensitive to location than one-time work, because a schedule has
                to be practical week after week. Availability is confirmed against your actual address and the
                frequency you want when we quote, rather than assumed from a service-area map.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={QUOTE_HREF} className="cta-primary">
                  Check Availability for Your Property
                </Link>
                <Link href="/industries-we-serve" className="cta-secondary">
                  Industries We Serve
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
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

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow-light">Parking Lot Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Request a Parking Lot Cleaning Quote in Seattle
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us the property, which exterior areas you want covered, and roughly how often. The quote is
                  built around lot and property size, the areas included, the frequency, the current condition of
                  the site, and any other services you want running alongside it. Free walkthrough, written scope,
                  no obligation.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link href={QUOTE_HREF} className="cta-gold w-full justify-center">
                    Get a Free Quote
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

            <p className="relative mt-8 text-xs text-white/30">{siteConfig.serviceAreaSummary}</p>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parkingLotSchema) }}
      />
    </>
  );
}
