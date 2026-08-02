import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Armchair,
  Boxes,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  DoorOpen,
  Droplets,
  Eye,
  Footprints,
  Gauge,
  GraduationCap,
  Handshake,
  KeyRound,
  Layers,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Repeat,
  Ruler,
  Sofa,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  Wind
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const IMG = "/images/services/carpet-cleaning";

const PAGE_TITLE = "Carpet Cleaning Seattle, WA | Commercial & Residential Service";
const PAGE_DESCRIPTION =
  "Professional carpet cleaning in Seattle for offices, commercial facilities, rental properties and homes. Extraction cleaning, spot treatment and high-traffic attention. Request a customized quote from Cleaning From The Heart.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/carpet-cleaning"
  },
  keywords: [
    "carpet cleaning Seattle",
    "carpet cleaning services Seattle",
    "Seattle carpet cleaning",
    "carpet cleaners Seattle",
    "professional carpet cleaning Seattle",
    "commercial carpet cleaning Seattle",
    "office carpet cleaning Seattle",
    "residential carpet cleaning Seattle",
    "apartment building carpet cleaning Seattle",
    "property management carpet cleaning Seattle",
    "move out carpet cleaning Seattle",
    "carpet cleaning Seattle WA"
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/services/carpet-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${IMG}/carpet-cleaning-hero.webp`,
        alt: "Commercial carpet tile in an office lounge and corridor"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${IMG}/carpet-cleaning-hero.webp`]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Commercial and residential carpet",
  "Targeted pre-treatment and spot treatment",
  "One-time cleaning or recurring maintenance",
  "Scope and quote set after we see the carpet"
];

const trustStripItems = [
  { Icon: ClipboardList, label: "Scope built around your carpet, not a package" },
  { Icon: Footprints, label: "Traffic lanes and entry areas prioritized" },
  { Icon: Repeat, label: "One-time projects and recurring plans" },
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" }
];

// ─── Common carpet problems ───────────────────────────────────────────────
const carpetProblems = [
  {
    Icon: Layers,
    title: "Embedded Dirt & Tracked-In Soil",
    description:
      "Grit walked in off a Seattle sidewalk works down past the tips of the pile and sits at the base of the fibers, where a vacuum head has limited reach and abrasion quietly continues."
  },
  {
    Icon: Droplets,
    title: "Spills, Spots & Discoloration",
    description:
      "Coffee at a desk, a spill in a break room, something dropped in a hallway. Left alone, spots set into the fiber, and older marks respond differently than fresh ones."
  },
  {
    Icon: Footprints,
    title: "High-Traffic Lanes",
    description:
      "Entrances, corridors, the path between a desk and a printer. Traffic lanes darken and flatten first, which is why a room can look tired while the edges still look fine."
  },
  {
    Icon: Wind,
    title: "Lingering Carpet Odors",
    description:
      "Damp shoes, spills that soaked in, or a unit left closed up between tenants. Odor sits in the fiber and pad, and surface freshening rarely holds for long."
  },
  {
    Icon: Eye,
    title: "Dull, Flattened-Looking Carpet",
    description:
      "Crushed pile and soil loading scatter light differently, so carpet reads grey and worn even where the fiber itself still has plenty of life in it."
  },
  {
    Icon: KeyRound,
    title: "Move-In & Move-Out Buildup",
    description:
      "A vacated unit shows every mark the furniture was hiding. Turnover carpet cleaning is usually about presentation and inspection readiness on a tight schedule."
  },
  {
    Icon: Building2,
    title: "Neglected Commercial Carpet",
    description:
      "Facilities that vacuum nightly but have not had extraction cleaning in years accumulate soil evenly across the floor, so the decline is gradual and easy to miss."
  },
  {
    Icon: CalendarCheck,
    title: "No Maintenance Rhythm",
    description:
      "Carpet cleaned only when it looks bad is always being rescued. A planned interval keeps the appearance steadier and the work smaller each time."
  }
];

// ─── Scope of work ────────────────────────────────────────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "ClipboardList",
    title: "Inspection & Preparation",
    summary: "Carpet condition, traffic lanes, visible spots, access, and how the space gets prepared.",
    intro:
      "The walkthrough decides the rest of the job. We look at what the carpet actually is, how heavily it is soiled, which marks are likely to respond and which may not, and how we get in and out of the building without disrupting whoever is using it.",
    tasks: [
      "Carpet condition, fiber type where identifiable, and overall soil level assessed",
      "High-traffic lanes, entrances, and heavily used zones identified",
      "Visible spots and stains reviewed with you, including realistic expectations",
      "Rooms, areas, and priorities confirmed so nothing is assumed",
      "Furniture handling agreed in advance: what moves and what we work around",
      "Building access, parking, elevator, and timing requirements confirmed"
    ]
  },
  {
    iconName: "Droplets",
    title: "Cleaning & Treatment",
    summary: "Pre-vacuuming, pre-treatment, spot work, extraction cleaning, and traffic-lane attention.",
    intro:
      "Carpet cleaning is mostly preparation. Loose soil comes out dry, treatment is given time to work on what is bonded to the fiber, and only then does the extraction pass happen. Rushing the order is the usual reason a carpet looks clean wet and disappointing dry.",
    tasks: [
      "Pre-vacuuming to lift dry soil where it is part of the agreed scope",
      "Targeted pre-treatment applied to soiled areas and traffic lanes",
      "Spot treatment matched to the mark rather than one product for everything",
      "Deep extraction cleaning across the agreed areas",
      "Extra passes on entrances, walkways, and the most heavily used zones",
      "Attention to edges, corners, and the carpet along baseboards",
      "Odor treatment where it is offered and included in the written scope"
    ]
  },
  {
    iconName: "ShieldCheck",
    title: "Finishing & Review",
    summary: "Treated-area checks, final walkthrough, drying guidance, and maintenance recommendations.",
    intro:
      "Carpet keeps changing as it dries, so the handover matters. We check the areas we treated, tell you plainly what we expect to improve further and what may not, and leave guidance that protects the result rather than a vague thumbs up.",
    tasks: [
      "Treated spots and traffic lanes checked before we pack up",
      "Second pass on anything that has not responded as expected",
      "Final walkthrough with you or the site contact",
      "Drying and airflow guidance for the specific space",
      "Advice on when furniture and normal use can return",
      "Recommendations on vacuuming, entry matting, and a sensible cleaning interval"
    ]
  }
];

const commercialSpaces = [
  { Icon: Building2, label: "Offices and workstation areas" },
  { Icon: DoorOpen, label: "Lobbies, receptions, and entries" },
  { Icon: Footprints, label: "Corridors and hallways" },
  { Icon: Users, label: "Conference and meeting rooms" },
  { Icon: Sofa, label: "Break rooms and lounge areas" },
  { Icon: Boxes, label: "Common areas in managed buildings" }
];

const commercialPoints = [
  {
    Icon: Clock,
    title: "Worked Around Your Operation",
    description:
      "Evenings, weekends, and quiet periods are the norm for occupied buildings. Larger floors are split into zones so one area is out of use at a time rather than the whole space."
  },
  {
    Icon: Handshake,
    title: "Property Management & Turnovers",
    description:
      "Common areas, corridors, and unit carpet across a portfolio, coordinated so tenants get notice. Turnover work is scheduled against your leasing dates rather than ours."
  },
  {
    Icon: Repeat,
    title: "Recurring Carpet Maintenance",
    description:
      "High-traffic facilities benefit from a set interval with traffic lanes handled more often than the full floor. The interval is agreed from how the building is actually used."
  },
  {
    Icon: Gauge,
    title: "One-Time Restorative Projects",
    description:
      "Carpet that has gone years without extraction is a bigger job than a maintenance visit, and it is quoted that way. We will tell you honestly what a single visit can and cannot recover."
  }
];

const residentialSpaces = [
  "Living rooms, family rooms, and dens",
  "Bedrooms and hallways",
  "Stairs, where the carpet and layout allow",
  "Apartments, condos, and townhomes",
  "Rental units between tenants",
  "Whole-home cleaning or a few rooms only"
];

// ─── Properties we serve ──────────────────────────────────────────────────
const propertyGroups = [
  {
    Icon: Building2,
    label: "Workplaces",
    items: [
      "Offices and corporate buildings",
      "Open-plan and cubicle areas",
      "Conference and meeting rooms",
      "Reception and waiting areas",
      "Break rooms and staff lounges"
    ]
  },
  {
    Icon: GraduationCap,
    label: "Public & Community",
    items: [
      "Schools and classrooms",
      "Libraries and resource rooms",
      "Churches and fellowship halls",
      "Community and meeting spaces",
      "Administrative offices"
    ]
  },
  {
    Icon: Store,
    label: "Customer-Facing",
    items: [
      "Retail stores and showrooms",
      "Restaurants and carpeted dining areas",
      "Hotels and hospitality corridors",
      "Dealerships and sales floors",
      "Medical and dental office suites"
    ]
  },
  {
    Icon: Handshake,
    label: "Managed & Residential",
    items: [
      "Apartment buildings and condominiums",
      "Rental units and tenant turnovers",
      "Lobbies, corridors, and common areas",
      "Houses, townhomes, and condos",
      "Fitness and recreation facilities"
    ]
  }
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us the property type, roughly how much carpeted area is involved, which rooms matter most, and whether this is one-time or recurring."
  },
  {
    number: "02",
    title: "Carpet Assessment",
    description:
      "We look at soil level, traffic lanes, visible spots, carpet condition, furniture, and access, and flag anything that may not fully respond."
  },
  {
    number: "03",
    title: "Preparation & Pre-Treatment",
    description:
      "Areas are prepared and protected, dry soil is lifted where pre-vacuuming is in scope, and targeted treatment is applied where it is needed."
  },
  {
    number: "04",
    title: "Carpet Cleaning",
    description:
      "Extraction cleaning across the agreed areas, with additional attention on entrances, walkways, and the zones that take the most use."
  },
  {
    number: "05",
    title: "Final Review & Aftercare",
    description:
      "We check the treated areas, walk the space with you, and hand over drying, access, and maintenance guidance before we leave."
  }
];

const stainRealities = [
  "Different marks need different treatment. A drink spill, an oily mark, and a dye-based stain do not respond to the same approach.",
  "Age matters. A spot treated within days behaves very differently from one that has been walked over for a year.",
  "Carpet fiber and construction change the outcome, and some fibers hold colour from a spill more readily than others.",
  "Products used before we arrive can set a stain or leave residue that attracts soil back to the same spot.",
  "Bleaching, dye loss, wear, and permanent discoloration are damage rather than soil, and cleaning does not reverse them.",
  "We will tell you before we start which marks we expect to improve and which are likely to remain visible."
];

// ─── One-time vs recurring ────────────────────────────────────────────────
const serviceModes = [
  {
    Icon: Sparkles,
    label: "One-time",
    title: "A Single Carpet Cleaning",
    description:
      "A standalone visit, usually driven by a date on a calendar or carpet that has visibly drifted past acceptable.",
    items: [
      "Move-in and move-out cleaning",
      "Tenant turnover before a new lease",
      "A seasonal reset after a wet Seattle winter",
      "Before or after an event or open house",
      "Visible buildup, spots, or traffic lanes",
      "Property presentation ahead of a sale or inspection"
    ]
  },
  {
    Icon: Repeat,
    label: "Recurring",
    title: "Scheduled Carpet Maintenance",
    description:
      "A set interval agreed from how the building is actually used, so carpet is maintained rather than rescued.",
    items: [
      "Offices and professional buildings",
      "Lobbies, corridors, and hallways",
      "Schools and community facilities",
      "Property-managed buildings and common areas",
      "High-traffic customer-facing spaces",
      "Frequency customized per area, not per building"
    ]
  }
];

const scheduleSignals = [
  "Traffic lanes are visible from across the room",
  "Carpet no longer looks refreshed after vacuuming",
  "Spots keep reappearing, or an odor has settled in",
  "A unit is turning over between tenants",
  "You are preparing a space for customers, staff, or new occupants",
  "Seasonal maintenance after a stretch of wet weather",
  "Fine dust has settled after construction or a renovation nearby",
  "An inspection, walkthrough, or event is coming up",
  "Carpet care is part of a wider facility-maintenance plan"
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardList,
    title: "Scoped to Your Carpet",
    description:
      "Room count, soil level, traffic lanes, spots, stairs, and furniture all change the job. The scope is written from what is actually there rather than a standard package applied to every floor."
  },
  {
    Icon: Building2,
    title: "Commercial & Managed Property Work",
    description:
      "Offices, common areas, schools, and portfolios of managed buildings are a large part of what we do, so access planning, tenant notice, and out-of-hours windows are normal rather than exceptional."
  },
  {
    Icon: Footprints,
    title: "Traffic Lanes Get Real Attention",
    description:
      "The walkways are what people actually see. Entrances, corridors, and heavily used zones get additional attention instead of the same single pass as a quiet corner of a room."
  },
  {
    Icon: MessageCircle,
    title: "Straight Answers About Results",
    description:
      "If a stain is unlikely to come out, we say so before the work rather than after it. Setting the expectation correctly is worth more than a promise nobody can keep."
  },
  {
    Icon: Repeat,
    title: "One-Time or Ongoing",
    description:
      "Book a single visit with no commitment, or set an interval that keeps the carpet steady. Both are quoted the same way and neither one requires the other."
  },
  {
    Icon: Sparkles,
    title: "Cleaning Beyond the Carpet",
    description:
      "Carpet work sits alongside janitorial, deep cleaning, floor care, and window cleaning, so a whole property can run on one scope and one point of contact."
  }
];

// ─── Preparation ──────────────────────────────────────────────────────────
const preparationSteps = [
  {
    Icon: Eye,
    title: "Point Out the Priority Spots",
    description:
      "Walk us to the marks that bother you most and tell us what caused them if you know. It changes how they are treated and how honestly we can set expectations."
  },
  {
    Icon: Boxes,
    title: "Clear Small and Fragile Items",
    description:
      "Floor lamps, plant pots, toys, cables, and anything breakable are best moved off the carpet beforehand so nothing has to be worked around or set aside."
  },
  {
    Icon: Armchair,
    title: "Agree Furniture Handling Early",
    description:
      "Tell us what you want moved before the visit. Some pieces we can move and return, heavy or delicate items are usually worked around, and both get written into the scope."
  },
  {
    Icon: PawPrint,
    title: "Plan for Pets",
    description:
      "Doors open, equipment runs, and floors stay damp for a while. A closed room or a few hours elsewhere keeps pets comfortable and out of the work area."
  },
  {
    Icon: Truck,
    title: "Confirm Access and Parking",
    description:
      "Entry codes, alarm routines, loading zones, elevator bookings, and where the crew can park. In managed buildings this is usually the part that needs the most lead time."
  },
  {
    Icon: Wind,
    title: "Protect the Drying Period",
    description:
      "Keep cleaned areas clear, avoid walking through in outdoor shoes, and follow whatever airflow guidance we leave. Most disappointing results trace back to this window."
  }
];

const pricingFactors = [
  "Total carpeted area and how it breaks up into rooms",
  "Property type: commercial floor, managed building, or home",
  "Carpet condition and how long since the last cleaning",
  "Overall soil level and the depth of the traffic lanes",
  "Number and severity of spots needing individual treatment",
  "Stairs, landings, and areas that have to be worked by hand",
  "Furniture to be moved and how much can be worked around",
  "Access, parking, elevators, and after-hours or weekend timing",
  "One-time service or a recurring maintenance interval",
  "Optional treatments added to the written scope"
];

// ─── Seattle service area ─────────────────────────────────────────────────
const seattleNeighborhoods = [
  "Downtown Seattle",
  "Belltown",
  "South Lake Union",
  "Capitol Hill",
  "First Hill",
  "Queen Anne",
  "Magnolia",
  "Ballard",
  "Fremont",
  "Wallingford",
  "Green Lake",
  "Greenwood",
  "Northgate",
  "University District",
  "Beacon Hill",
  "Columbia City",
  "Rainier Valley",
  "Georgetown",
  "SODO",
  "West Seattle"
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What does professional carpet cleaning include?",
    answer:
      "A visit normally runs in three stages. First an assessment of carpet condition, soil level, traffic lanes, and visible spots, along with access and furniture decisions. Then the cleaning itself: pre-vacuuming where it is in scope, targeted pre-treatment, individual spot treatment, and deep extraction cleaning with extra attention on entrances and walkways. Finally a check of the treated areas, a walkthrough with you, and drying and aftercare guidance. The exact scope is confirmed in writing before we start."
  },
  {
    question: "Do you provide commercial carpet cleaning in Seattle?",
    answer:
      "Yes. Commercial carpet cleaning is a core part of what we do, covering offices, lobbies, corridors, conference rooms, break rooms, and shared common areas. Work is normally scheduled for evenings, weekends, or quiet periods so the space stays usable, and larger floors are split into zones rather than closing everything at once. Both one-time restorative projects and recurring carpet maintenance are available, with the interval set from how the building is actually used."
  },
  {
    question: "Do you clean carpet in offices and apartment buildings?",
    answer:
      "Yes to both. Offices, workstation areas, meeting rooms, and reception spaces are regular work, as are the lobbies, corridors, laundry rooms, and common areas of apartment buildings and condominiums. For managed properties we coordinate scheduling so residents and tenants get notice, and unit carpet is commonly handled at turnover alongside the rest of the make-ready work."
  },
  {
    question: "Can you treat carpet stains and high-traffic areas?",
    answer:
      "Yes. Spots are treated individually rather than with one product across the whole floor, because a drink spill, an oily mark, and a dye-based stain each behave differently. Traffic lanes, entrances, and heavily used walkways get targeted pre-treatment and additional cleaning passes, since those areas hold far more soil than the quiet parts of a room. What we expect to improve is discussed with you during the assessment."
  },
  {
    question: "Can every carpet stain be removed?",
    answer:
      "No, and anyone promising otherwise is guessing. Results depend on what caused the mark, how long it has been there, the carpet fiber, and what was used on it before we arrived. Many spots improve substantially or disappear. Others, particularly bleaching, dye loss, and heavy wear, are damage to the fiber rather than soil sitting on it, and cleaning does not reverse that. We flag the likely outcomes before starting, not afterwards."
  },
  {
    question: "Do you offer carpet odor treatment?",
    answer:
      "Odor is discussed at the assessment and treatment can be included in the written scope. How much improves depends on the source and how deep it has gone: something on the surface of the fiber responds far better than a spill that reached the backing or the pad underneath. Where the source sits below the carpet, cleaning the carpet alone will not resolve it, and we will say so rather than repeat the visit."
  },
  {
    question: "How long does carpet take to dry?",
    answer:
      "It varies, and a fixed number would be misleading. Drying depends on the cleaning approach used, the carpet type and pile depth, how heavily soiled it was, airflow through the space, temperature, and humidity, which in Seattle changes a great deal between a dry summer week and a wet November. We give you realistic guidance for your specific space at the walkthrough and suggest how to help it along with ventilation and airflow."
  },
  {
    question: "Should furniture be moved before carpet cleaning?",
    answer:
      "Some of it, and it is agreed before the visit rather than improvised on the day. Small items, floor lamps, plant pots, cables, and anything fragile are best cleared beforehand. Movable furniture can often be shifted and returned as part of the job, while heavy, fixed, delicate, or electronic items are normally worked around. Whatever is decided is written into the scope so there are no surprises."
  },
  {
    question: "Can I book a one-time carpet cleaning?",
    answer:
      "Yes. A single visit with no ongoing commitment is completely normal for move-ins and move-outs, tenant turnovers, a seasonal reset, preparing a property for sale or inspection, or simply carpet that has drifted past acceptable. One-time work is quoted the same way as recurring service, and choosing it does not commit you to anything afterwards."
  },
  {
    question: "Do you offer recurring carpet maintenance?",
    answer:
      "Yes, and for high-traffic buildings it is usually the cheaper approach over time. A recurring plan sets an interval per area rather than per building, so entrances and corridors can be handled more frequently than quieter rooms. It can run on its own or sit inside a wider commercial cleaning plan, where daily vacuuming and entry matting are actually protecting the carpet between visits."
  },
  {
    question: "What affects the price of carpet cleaning?",
    answer:
      "Total carpeted area and how it divides into rooms, the property type, carpet condition and how long since it was last cleaned, overall soil level, the number and severity of spots, stairs and hand-worked areas, how much furniture has to be moved, access and parking, whether the work is after hours, and whether it is a one-time visit or a recurring interval. We quote from the walkthrough rather than a published rate, because two floors of the same size are often very different jobs."
  },
  {
    question: "Do you provide move-in and move-out carpet cleaning?",
    answer:
      "Yes. Turnover carpet cleaning is common work for us across rentals, condos, apartments, and commercial suites, and it usually runs to a fixed date. An empty unit is also the easiest carpet to clean well, since there is no furniture to work around and the whole floor is accessible. It pairs naturally with move-in and move-out cleaning when the whole unit needs to be inspection-ready."
  },
  {
    question: "Which Seattle neighborhoods and nearby cities do you serve?",
    answer:
      "We work throughout Seattle, including Downtown, Belltown, South Lake Union, Capitol Hill, Queen Anne, Ballard, Fremont, Wallingford, Green Lake, the University District, Beacon Hill, Columbia City, West Seattle, Georgetown, and SODO. Outside the city we serve Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Bothell, Mill Creek, Tacoma, and the surrounding communities. Tell us the address and we will confirm availability."
  },
  {
    question: "How do I request a carpet cleaning quote?",
    answer:
      "Use the quote form or call (206) 850-8484. It helps to have the property type, roughly how much carpeted area is involved, which rooms matter most, any spots or odors you want looked at, your preferred timing, and whether you want one-time or recurring service. For commercial properties we usually follow up with a walkthrough before putting the scope and price in writing. There is no obligation attached."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Commercial Cleaning",
    description: "The recurring janitorial plan that keeps carpet protected between extraction visits.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Residential Cleaning",
    description: "Whole-home cleaning for houses, apartments, and condos across the Seattle area.",
    href: "/services/residential-cleaning",
    ctaLabel: "See residential cleaning"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Turnover cleaning for rentals and commercial suites, commonly booked with carpet work.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "Explore turnover cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    description: "A one-time detailed reset of a facility, often scheduled alongside carpet extraction.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "View commercial deep cleaning"
  },
  {
    title: "Residential Deep Cleaning",
    description: "Detailed top-to-bottom home cleaning for move-ins, move-outs, and seasonal resets.",
    href: "/services/residential-deep-cleaning",
    ctaLabel: "See residential deep cleaning"
  },
  {
    title: "Strip & Wax Floor Care",
    description: "Hard-floor restoration for the VCT, vinyl, and tile areas either side of your carpet.",
    href: "/services/strip-and-wax",
    ctaLabel: "Explore strip and wax"
  },
  {
    title: "School & Facility Cleaning",
    description: "Campus cleaning plans with classroom and office carpet extraction scheduled into breaks.",
    href: "/services/school-facility-cleaning",
    ctaLabel: "See school cleaning"
  },
  {
    title: "Restaurant Cleaning",
    description: "Front-of-house cleaning for dining rooms, including carpeted seating and private areas.",
    href: "/services/restaurant-cleaning",
    ctaLabel: "View restaurant cleaning"
  },
  {
    title: "Results Gallery",
    description: "Real photos from Seattle-area jobs, filterable by the type of cleaning work.",
    href: "/gallery",
    ctaLabel: "Browse our results"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component, and
// the LocalBusiness entity lives in the root layout; neither is repeated
// here. `provider` points at that single business @id.
// ─────────────────────────────────────────────────────────────────────────

const carpetCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/carpet-cleaning#service`,
      name: "Carpet Cleaning Services in Seattle",
      serviceType: "Carpet Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area office and facility managers, property managers and landlords, school and community facility staff, retail and hospitality operators, and homeowners and renters"
      },
      description:
        "Professional carpet cleaning in Seattle for commercial and residential properties. Extraction cleaning with targeted pre-treatment, individual spot treatment, and additional attention on traffic lanes and entrances, across offices, lobbies, corridors, conference rooms, common areas, schools, retail spaces, rental units, apartments, condominiums, and homes. Available as a one-time project or on a recurring maintenance interval, with the scope confirmed in writing after an assessment.",
      url: `${SITE_URL}/services/carpet-cleaning`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Carpet Cleaning Scope of Work",
        itemListElement: scopeGroups.map((group) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: group.title,
            description: group.summary
          }
        }))
      }
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services/carpet-cleaning#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function CarpetCleaningPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/services/carpet-cleaning-hero-background.jpg")' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/75 to-ink/70"
          aria-hidden
        />
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Carpet Cleaning", href: "/services/carpet-cleaning" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Carpet Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Professional Carpet Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning From The Heart provides carpet cleaning in Seattle for commercial properties and homes. We
                lift embedded dirt, tracked-in soil, spots, and stale carpet odors from offices, common areas,
                rental units, and living spaces, then hand the room back with clear aftercare. Every job is scoped
                to the carpet in front of us rather than a fixed package.
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

            <div className="card-dark">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Layers className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                Why Carpet Stops Looking Clean
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                Vacuuming lifts what is sitting on top of the pile. What stays behind is the grit walked down to
                the base of the fiber, the residue from old spills, and the soil loading in the walkways. That is
                what makes a floor read dull and worn long before the carpet is genuinely worn out.
              </p>
              <ul className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
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
      <section className="section-shell-tight bg-white" aria-labelledby="carpet-intro-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
            <div className="order-1 min-w-0">
            <span className="eyebrow">What This Service Is</span>
            <h2 id="carpet-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Seattle Carpet Cleaning for Cleaner, Better-Maintained Spaces
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Vacuuming does the job it was designed for: removing loose, dry soil from the surface of the pile. It
              was never going to reach what is bonded to the fiber further down: the fine grit tracked in off wet
              Seattle sidewalks, the residue left where a spill was blotted, the film that builds gradually across a
              walkway. Extraction cleaning is what addresses that layer, which is why a carpet that gets vacuumed
              every night can still look tired.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A professional carpet cleaning does two things at once. It improves appearance now, and it removes the
              abrasive soil that grinds against the fiber every time someone walks across it. Keeping that soil load
              down is the most practical thing anyone can do for carpet lifespan, and it is a great deal cheaper
              than premature replacement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              There is no single correct method or scope. Carpet condition, fiber, soil level, and how the building
              is used all change what is appropriate, and a commercial floor adds a scheduling problem on top: the
              work has to fit into a window that does not disrupt the people using the space. That is why every job
              starts with an assessment rather than a price list.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Carpet Cleaning Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
            </div>

            <div className="order-2">
              <div
                role="img"
                aria-label="Professional carpet cleaning service"
                className="mx-auto aspect-[4/5] w-full max-w-[36rem] rounded-3xl border border-brand-100 bg-surface bg-cover bg-center shadow-card"
                style={{ backgroundImage: 'url("/services/carpet-cleaning-intro-vertical.png")' }}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── COMMON CARPET PROBLEMS ──────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            center
            eyebrow="What We Fix"
            title="Carpet Problems We Are Called In For"
            description="Most calls come down to one of these. Knowing which one you are dealing with is what decides the approach and the realistic outcome."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {carpetProblems.map(({ Icon, title, description }, index) => (
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

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Cleaning addresses soil. It does not reverse fiber damage, dye loss, or wear, and we will tell you
              which one you are looking at before any work is booked.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SCOPE OF WORK ───────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What Our Carpet Cleaning Service Can Include"
            description="The three stages below are the order a carpet job actually runs in. Tasks are performed according to the approved scope, so your project may include everything here or a focused subset."
          />

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-5 py-2 md:px-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Final scope depends on carpet type and condition, site access, and the service you select. Upholstery,
              rug work off site, hard-floor restoration, and subfloor or pad issues are quoted separately rather
              than assumed inside a carpet cleaning.
            </p>
          </div>
        </Container>
      </section>

      {/* ── COMMERCIAL CARPET CLEANING ──────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="commercial">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
            <div className="order-1 min-w-0 lg:order-2">
            <span className="eyebrow">For Businesses & Facilities</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Commercial Carpet Cleaning for Seattle Businesses
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Commercial carpet takes more traffic in a week than most household carpet takes in a year, and it
              takes it in the same narrow lanes every day. Office carpet cleaning in Seattle is largely a question
              of managing that: keeping walkways, entries, and shared areas from becoming the part of the building
              everyone notices.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The other half of the job is access. Work is planned around your operation rather than dropped into
              the middle of it, which usually means an evening, a weekend, or a phased approach where one zone is
              out of service at a time. In property-managed buildings that also means coordinating notice so
              tenants and residents are not surprised by equipment in the corridor.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {commercialSpaces.map(({ Icon, label }) => (
                <li key={label} className="flex items-start gap-2 text-sm leading-relaxed text-ink">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
            </div>

            <div className="order-2 lg:order-1">
              <ServiceImagePanel
                src="/services/commercial-carpet-cleaning-vertical.png"
                alt="Technician using carpet extraction equipment"
                width={941}
                height={1458}
                sizes="(max-width: 1023px) 100vw, 36vw"
                aspect="none"
                className="mx-auto w-full max-w-[28rem]"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commercialPoints.map(({ Icon, title, description }, index) => (
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

          <div className="mt-8 grid items-center gap-6 rounded-3xl border border-brand-200 bg-brand-50 px-7 py-8 md:px-10 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div>
              <h3 className="text-base font-semibold text-ink">Carpet care works best inside a wider plan</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Nightly vacuuming, decent entry matting, and prompt attention to fresh spills do more for commercial
                carpet than any single extraction visit. Carpet work sits naturally inside a{" "}
                <Link
                  href="/services/commercial-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  commercial cleaning plan
                </Link>
                , where the day-to-day routine is protecting the carpet between visits rather than working against
                it.
              </p>
            </div>
            <Link href="/contact#quote-form" className="cta-primary shrink-0">
              Plan Your Carpet Schedule
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── RESIDENTIAL CARPET CLEANING ─────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="residential">
        <Container>
          <ServiceEditorialSplit
            src={`${IMG}/residential-carpet-bedroom.webp`}
            alt="Bedroom with wall-to-wall carpet running through to the hallway"
            width={1400}
            height={933}
            sizes="(max-width: 1023px) 100vw, 45vw"
            aspect="aspect-[3/2]"
            imagePosition="right"
            columns="lg:grid-cols-[1.05fr_0.95fr]"
          >
            <span className="eyebrow">For Homes & Rentals</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Residential Carpet Cleaning for Seattle Homes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Home carpet cleaning is usually about a handful of specific rooms rather than a whole floor plan.
              Living areas that take daily use, bedrooms that have never been done, a hallway that shows the route
              everyone walks, or stairs that carry the most concentrated wear in the house.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We work in houses, apartments, condos, and townhomes across the Seattle area, on one-time visits and
              at move-in and move-out. Households with pets and young children tend to book more often, and that is
              a reasonable read because those homes accumulate spots and soil faster than the vacuum can keep up with.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {residentialSpaces.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Booking a whole-home reset? Carpet work pairs naturally with{" "}
              <Link
                href="/services/residential-deep-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                residential deep cleaning
              </Link>{" "}
              and with{" "}
              <Link
                href="/services/move-in-move-out-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                move-in and move-out cleaning
              </Link>{" "}
              on the same visit.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── PROPERTIES & AREAS ──────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Properties We Serve"
            title="Properties and Areas We Clean Carpet In"
            description="Floor plans, traffic, and available access windows differ enough between these that scope and scheduling are written per property."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {propertyGroups.map(({ Icon, label, items }, index) => (
              <Reveal key={label} delay={index * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-7 shadow-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-[11px] font-bold uppercase tracking-widest text-brand-700">{label}</h3>
                  <ul className="mt-4 grid gap-2.5 border-t border-brand-100 pt-4">
                    {items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-[900px] text-center text-sm leading-relaxed text-muted">
            Carpet in a lobby, a classroom, a hotel corridor, and a bedroom all wear differently and all get
            different attention. If your property is not on this list, it is worth asking rather than assuming.
          </p>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How a Carpet Cleaning Job Runs"
            description="From the first call to a finished floor and a maintenance recommendation. Scope, timing, and cost are settled before anyone opens a piece of equipment."
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
              Book a Carpet Assessment
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Carpet
            </Link>
          </div>
        </Container>
      </section>

      {/* ── STAINS & ODORS ──────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="stains">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
            <div>
              <span className="eyebrow">Honest Expectations</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Treatment for Carpet Spots, Stains and Odors
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Spot work is the part of carpet cleaning where promises get made that nobody can keep. A stain is
                not one problem with one solution. What caused it, how long it has been sitting, what the carpet is
                made of, and what has already been applied to it all pull the outcome in different directions.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                So we treat spots individually, use pre-treatment where it earns its place, and tell you what we
                expect before we start. Some marks disappear. Some improve enough that you stop noticing them. A few
                are permanent, and you deserve to know which is which while you are still deciding whether the job
                is worth booking.
              </p>
            </div>

            <ul className="grid gap-2.5 rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              {stainRealities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
              <li className="mt-3 border-t border-brand-100 pt-5 text-sm leading-relaxed text-muted">
                Odor treatment is discussed at the assessment and written into the scope when it is included. Where
                the source has reached the backing or the pad beneath the carpet, cleaning the carpet alone will not
                resolve it, and that is worth knowing before the visit rather than after.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* ── ONE-TIME VS RECURRING ───────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="frequency">
        <Container>
          <SectionHeading
            eyebrow="How Often"
            title="One-Time Carpet Cleaning or Recurring Maintenance"
            description="Both are normal, and one does not commit you to the other. The difference is whether you are fixing a condition or preventing one."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {serviceModes.map(({ Icon, label, title, description, items }, index) => (
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
                  <ul className="mt-1 grid flex-1 gap-2.5 border-t border-brand-100 pt-4 sm:grid-cols-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-[900px] text-center text-sm leading-relaxed text-muted">
            We do not publish fixed intervals or package prices. How often carpet should be cleaned depends on the
            traffic it takes, the entry matting in place, and the standard the space is held to. All of that is
            worked out per property.
          </p>
        </Container>
      </section>

      {/* ── WHEN TO SCHEDULE ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
                <CalendarCheck className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                When to Schedule Carpet Cleaning
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Carpet rarely announces that it is due. It fades gradually, and the people in the building every day
                are the last to notice. These are the practical signals worth acting on.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                If two or three of them apply, it is worth a call. Cleaning carpet before the soil load gets heavy is
                a smaller job than restoring it afterwards.
              </p>
            </div>

            <ul className="grid gap-2.5 rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              {scheduleSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
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
                <span className="eyebrow-light">Why Clients Work With Us</span>
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
                  Get a Free Quote
                </Link>
                <span className="pl-1 text-[11px] text-white/35">Takes 60 seconds · No obligation</span>
              </div>
              <Link href="/gallery" className="cta-ghost">
                See Our Results
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── SEATTLE SERVICE AREA ────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-surface px-7 py-9 md:px-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
              <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
            </div>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              Carpet Cleaning Across Seattle
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              Seattle is where most of our carpet work happens, from downtown office floors and South Lake Union
              workspaces to houses and rentals in the north-end and south-end neighborhoods. Access shapes the job
              as much as the carpet does. A tower suite, a walk-up apartment building, and a single-family home each
              need a different plan for parking, equipment, and timing, and all of that is worked out before the
              visit rather than on the day.
            </p>

            <h3 className="mt-8 text-[11px] font-bold uppercase tracking-widest text-brand-700">
              Seattle neighborhoods we work in
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {seattleNeighborhoods.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-medium text-ink"
                >
                  {area}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-[11px] font-bold uppercase tracking-widest text-brand-700">
              Nearby cities we serve
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {serviceAreas
                .filter((area) => area !== "Seattle")
                .map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-medium text-ink"
                  >
                    {area}
                  </li>
                ))}
            </ul>

            <p className="mt-6 text-sm text-muted">
              Not on the list? Send us the address and we will confirm availability before quoting.
            </p>
          </div>
        </Container>
      </section>

      {/* ── PREPARATION GUIDE ───────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="prepare">
        <Container>
          <SectionHeading
            eyebrow="Before We Arrive"
            title="How to Prepare for Your Carpet Cleaning Appointment"
            description="None of this is heavy lifting. It is the handful of things that let the crew start immediately and give the carpet the best chance of drying well."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {preparationSteps.map(({ Icon, title, description }, index) => (
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

      {/* ── QUOTE FACTORS ───────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white scroll-mt-24" id="pricing">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
                <Wallet className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                What Affects a Carpet Cleaning Quote?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Carpet cleaning is quoted per property rather than from a published per-room rate, because two
                floors of the same size are often completely different jobs. A lightly used office cleaned last year
                and a rental unit that has not been touched in five take very different amounts of work to bring
                back.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We would rather look first and quote accurately than publish a starting price that changes the
                moment we walk in. The factors on the right are what move the number.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Request a Written Quote
                </Link>
              </div>
            </div>

            <ul className="grid gap-2.5 rounded-3xl border border-brand-100 bg-surface p-7 md:p-9">
              {pricingFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-2 text-sm leading-relaxed text-ink">
                  <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Carpet Cleaning Questions</h2>
              <p className="mt-4 text-base text-muted">
                What facility managers, property managers, and homeowners ask us most before booking carpet
                cleaning in Seattle.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5">
                <p className="text-sm font-semibold text-ink">Not sure what your carpet needs?</p>
                <p className="mt-1 text-sm text-muted">
                  Send a photo of the room and the spots you are worried about and we&apos;ll tell you plainly what
                  we think is realistic.
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

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading eyebrow="Related Services" title="Services Booked Alongside Carpet Cleaning" />
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
                <p className="eyebrow-light">Carpet Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Request a Carpet Cleaning Quote in Seattle
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us the property type, roughly how much carpeted area is involved, any spots or odors you want
                  looked at, when you would like the work done, and whether you need a one-time visit or a recurring
                  schedule. We will come back with a scope and a price, and nothing is committed until you say so.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Free, no-obligation quote", "Commercial & residential carpet", "One-time or recurring"].map(
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carpetCleaningSchema) }}
      />
    </>
  );
}
