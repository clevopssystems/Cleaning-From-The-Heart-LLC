import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  Briefcase,
  Building2,
  CalendarClock,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  DoorOpen,
  Home,
  Key,
  KeyRound,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Ruler,
  Search,
  Sofa,
  Sparkles,
  Store,
  Truck,
  Users,
  Warehouse
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const PAGE_PATH = "/services/move-in-move-out-cleaning";

const PAGE_TITLE = "Move-In & Move-Out Cleaning Seattle | Free Quote";
const PAGE_DESCRIPTION =
  "Professional move-in and move-out cleaning in Seattle for apartments, homes, rentals, offices, and commercial properties. Request a customized quote.";

// Hero photograph is stock imagery, not a company project photo. See the
// IMAGE NOTES block near the results section for the real photos to swap in.
const HERO_IMAGE = "/home/services/move-in-cleaning.jpg";

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
    "move out cleaning Seattle",
    "move in cleaning Seattle",
    "move in move out cleaning Seattle",
    "apartment move out cleaning Seattle",
    "end of lease cleaning Seattle",
    "tenant turnover cleaning Seattle",
    "vacant apartment cleaning Seattle",
    "rental turnover cleaning Seattle",
    "house move out cleaning Seattle",
    "condo move out cleaning Seattle",
    "commercial move out cleaning Seattle",
    "office move in cleaning Seattle"
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
        alt: "Cleaning supplies set out in an empty living room before a move cleaning appointment"
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
  { label: "Move-Out Cleaning", href: "#move-out" },
  { label: "Move-In Cleaning", href: "#move-in" },
  { label: "Cleaning Checklist", href: "#checklist" },
  { label: "Property Types", href: "#properties" },
  { label: "Commercial", href: "#commercial" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" }
];

const glanceItems = [
  "Apartments, houses, condos, and commercial suites",
  "One end of the move or both, on separate dates",
  "Scope set by the property, not a fixed package",
  "Timed around movers, walkthroughs, and key handover"
];

const trustStripItems = [
  { Icon: Home, label: "Homes, rentals & commercial spaces" },
  { Icon: ClipboardList, label: "Written scope agreed before we book" },
  { Icon: CalendarClock, label: "Scheduled to your handover date" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// What an empty property actually shows once the furniture is gone.
const whatEmptyReveals = [
  {
    Icon: Sofa,
    title: "The Line Behind the Furniture",
    description:
      "Dust settles against anything that has not moved in years. Pull a couch off a wall or slide a dresser out and the outline it left is the first thing anyone notices about the room."
  },
  {
    Icon: Boxes,
    title: "Cabinets, Drawers and Closets",
    description:
      "Crumbs in the drawer runners, a sticky ring on a shelf liner, dust along closet rails and the top shelf nobody could see standing up. Storage is emptied at the very end of a move, so it is usually the least cleaned part of the property."
  },
  {
    Icon: Sparkles,
    title: "Kitchen Grease and Bathroom Buildup",
    description:
      "The two rooms every checklist starts with. Grease film above the range, splatter on the backsplash, soap and mineral buildup in the shower, and the grout lines that a routine wipe never touched."
  },
  {
    Icon: DoorOpen,
    title: "Baseboards, Doors and Switch Plates",
    description:
      "Scuffs at ankle height, marks around handles, dust on door frames and the top edge of every door. Invisible in a furnished home, obvious in an empty one with the light on."
  }
];

// ─── Who move-out cleaning is for ─────────────────────────────────────────
const moveOutAudiences = [
  "Tenants working toward a final walkthrough at the end of a lease",
  "Homeowners preparing a house for photos, showings, or closing",
  "Landlords getting a vacant unit ready to show and re-let",
  "Property managers running turnovers between tenants",
  "Families cleaning up once the furniture and boxes are out",
  "Businesses handing leased premises back to a landlord"
];

// ─── Move-in coverage ─────────────────────────────────────────────────────
const moveInCoverage = [
  "Kitchens cleaned before a single box is unpacked into them",
  "Bathrooms, fixtures, tubs, and showers detailed before first use",
  "Cabinet, drawer, and closet interiors wiped when included in the quote",
  "Shelving and storage areas cleared of dust and previous-occupant residue",
  "Floors cleaned edge to edge while the rooms are still empty",
  "Handles, switch plates, railings, and other frequently touched surfaces"
];

// ─── Move-out vs move-in comparison ───────────────────────────────────────
const comparisonColumns = [
  {
    Icon: Truck,
    label: "Move-Out Cleaning",
    tagline: "Leaving the property ready for whoever inspects it next.",
    rows: [
      { label: "Purpose", value: "Hand the property over in presentable condition for a walkthrough, inspection, or listing." },
      { label: "Best timing", value: "After the movers are finished and the rooms are empty, before the keys change hands." },
      { label: "Driven by", value: "A lease end date, a closing date, or a property manager's turnover schedule." },
      { label: "Usually booked by", value: "Renters, home sellers, landlords, property managers, and departing commercial tenants." },
      { label: "Where the time goes", value: "Kitchen, bathrooms, appliance interiors when requested, cabinets, closets, baseboards, and floors." }
    ]
  },
  {
    Icon: KeyRound,
    label: "Move-In Cleaning",
    tagline: "Starting from a clean baseline instead of inheriting one.",
    rows: [
      { label: "Purpose", value: "Prepare a property for the people about to live or work in it." },
      { label: "Best timing", value: "After repairs and any construction work, before furniture, boxes, and occupants arrive." },
      { label: "Driven by", value: "The date you get access, and how long the property sat vacant beforehand." },
      { label: "Usually booked by", value: "New renters, buyers, homeowners, landlords staging a unit, and businesses taking new space." },
      { label: "Where the time goes", value: "Kitchen and bathrooms first, then storage, shelving, floors, and high-touch surfaces." }
    ]
  }
];

// ─── Room-by-room scope ───────────────────────────────────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Refrigerator",
    title: "Kitchen",
    summary: "The room that takes the longest and gets looked at the hardest.",
    intro:
      "Kitchens carry more buildup than any other room in a home, and they are where a walkthrough usually starts. Appliance interiors and the insides of cabinets and drawers are real work in their own right, so they are confirmed in the quote rather than assumed.",
    tasks: [
      "Countertops and accessible surfaces",
      "Sink, faucet, and drain surround",
      "Backsplash and splash zones",
      "Cabinet and drawer fronts, handles included",
      "Cabinet and drawer interiors when included in the quote",
      "Appliance exteriors, including sides and handles",
      "Inside the oven when requested",
      "Inside the refrigerator and freezer when requested",
      "Microwave inside and out where one is present",
      "Range hood exterior and accessible filter housing",
      "Accessible shelving and pantry surfaces",
      "Doors, frames, handles, and light switches",
      "Baseboards and floor edges",
      "Vacuuming and mopping the floor"
    ]
  },
  {
    iconName: "ShowerHead",
    title: "Bathrooms",
    summary: "Fixtures, tile, glass, and the buildup routine cleaning leaves behind.",
    intro:
      "Bathrooms are the second thing anyone checks and the fastest room to lose points on. Work covers the fixtures and the surfaces around them, including the tile and accessible grout lines where soap and mineral buildup collects.",
    tasks: [
      "Toilet inside, outside, base, and behind the seat hinges",
      "Sinks, faucets, and drain surrounds",
      "Countertops and vanity surfaces",
      "Vanity and cabinet fronts",
      "Mirrors and accessible glass",
      "Bathtubs, showers, and shower pans",
      "Shower doors, frames, and tracks",
      "Tile surfaces and accessible grout lines",
      "Fixtures, handles, and towel bars",
      "Shelving and accessible storage",
      "Doors, handles, and light switches",
      "Baseboards and floor edges",
      "Accessible exhaust vent exteriors",
      "Floor cleaning throughout"
    ]
  },
  {
    iconName: "Sofa",
    title: "Bedrooms & Living Areas",
    summary: "Empty rooms, cleaned edge to edge while there is nothing in the way.",
    intro:
      "With the furniture out, these rooms come down to surfaces, edges, and storage. This is where an empty property earns its reputation for being easy to clean well, everything is reachable, and nothing has to be worked around.",
    tasks: [
      "Dusting accessible surfaces throughout",
      "Empty shelving and built-in units",
      "Closet interiors, rails, and shelves",
      "Window sills and ledges",
      "Window tracks when included in the quote",
      "Interior window glass when included in the quote",
      "Doors, door frames, and handles",
      "Baseboards and trim",
      "Light switches and outlet plates",
      "Accessible light fixtures and ceiling fan blades",
      "Cobweb removal from reachable corners",
      "Vacuuming carpet, including edges and closet floors",
      "Mopping hard floors, corners included",
      "High-touch surfaces throughout"
    ]
  },
  {
    iconName: "Footprints",
    title: "Hallways, Entryways & Stairs",
    summary: "The route everyone walks, and the first surface a visitor touches.",
    intro:
      "Circulation space takes the most contact and gets the least attention while a property is occupied. On a handover it matters more than usual, because it is the first and last thing anyone sees.",
    tasks: [
      "Entry doors, inside and accessible outside face",
      "Door frames, thresholds, and handles",
      "Stair treads, risers, and edges",
      "Railings, spindles, and newel posts",
      "Baseboards along the full run",
      "Switch plates and intercom or thermostat surrounds",
      "Accessible ledges, niches, and shelving",
      "Interior glass spot cleaning when included in the quote",
      "Hard-floor cleaning throughout",
      "Vacuuming carpeted runs and landings",
      "Cobweb removal from ceiling corners",
      "Coat closets and entry storage"
    ]
  },
  {
    iconName: "Building2",
    title: "Office & Commercial Areas",
    summary: "Vacated suites, new tenant spaces, and everything between the two.",
    intro:
      "Commercial scopes are built area by area rather than room by room, because a suite being handed back and a suite about to be occupied need different priorities. Furniture removal, contractor schedules, and building access all get factored in before a date is held.",
    tasks: [
      "Reception and waiting areas",
      "Private offices and open workstation zones",
      "Conference and meeting rooms",
      "Break rooms, kitchenettes, and appliance exteriors",
      "Restrooms, fixtures, partitions, and dispensers",
      "Corridors, lobbies, and elevator surrounds",
      "Storage rooms, server closets, and utility areas",
      "Interior glass, partitions, and entry doors",
      "Desks and work surfaces once they are cleared",
      "Hard-floor cleaning and carpet vacuuming",
      "Removal of bagged waste to the designated collection point",
      "Frequently touched surfaces throughout the suite"
    ]
  }
];

// ─── Standard scope vs optional work ──────────────────────────────────────
const standardScope = [
  "General dusting of accessible surfaces",
  "Kitchen surfaces, sink, and appliance exteriors",
  "Full bathroom cleaning",
  "Vacuuming carpet and rugs",
  "Mopping hard floors",
  "Baseboards and trim",
  "Doors, frames, and handles",
  "Empty closets, shelving, and storage",
  "Light switches and high-touch points",
  "Bagged waste taken to the designated collection point"
];

const optionalScope = [
  { item: "Inside the oven", note: "Time-intensive, and priced by condition" },
  { item: "Inside the refrigerator or freezer", note: "Needs to be emptied and unplugged in advance" },
  { item: "Inside cabinets and drawers", note: "Must be completely cleared first" },
  { item: "Interior window glass, sills, and tracks", note: "See window cleaning" },
  { item: "Exterior window cleaning", note: "Subject to access and property height" },
  { item: "Carpet cleaning and extraction", note: "Booked as its own service" },
  { item: "Upholstery cleaning", note: "Quoted separately from carpet work" },
  { item: "Spot cleaning of walls and marks", note: "Where the paint finish allows it" },
  { item: "Heavy debris or leftover items", note: "Assessed first, then quoted" },
  { item: "Junk removal", note: "Non-hazardous items only" },
  { item: "Pressure washing", note: "Patios, walkways, and driveways" },
  { item: "Strip and wax or machine floor scrubbing", note: "Commercial hard floors" },
  { item: "Post-construction and renovation cleanup", note: "After a remodel or build-out" }
];

// ─── Property types ───────────────────────────────────────────────────────
const propertyTypes = [
  {
    Icon: Building2,
    title: "Apartments",
    description:
      "The most common move clean we take. Compact kitchens and bathrooms carry most of the work, and building logistics matter as much as the unit: elevator bookings, loading-zone windows, and a front desk that needs notice before anyone gets upstairs."
  },
  {
    Icon: Warehouse,
    title: "Condominiums",
    description:
      "Similar scope to an apartment, different rules. Owner-occupied units often have upgraded finishes worth handling carefully, and HOA buildings tend to have set hours for contractor access that are worth checking before you pick a date."
  },
  {
    Icon: Home,
    title: "Houses",
    description:
      "More rooms, more floor area, and usually more storage than a unit. Garages, basements, utility rooms, and stair runs are the parts people forget to mention when they ask for a price, so they get named up front instead."
  },
  {
    Icon: Ruler,
    title: "Townhomes",
    description:
      "Vertical layouts with stairs between every level. Landings, railings, and the narrow runs between floors take real time, and the top floor is nearly always the dustiest part of the property."
  },
  {
    Icon: Key,
    title: "Rental Homes",
    description:
      "Cleaned to whatever standard the lease and the landlord set. If you have a written checklist from the property, send it with the quote request and the scope gets built around it rather than around a generic list."
  },
  {
    Icon: Package,
    title: "Vacant Units",
    description:
      "An empty unit is the best possible starting point: nothing to move, every surface reachable, and no scheduling around a household. It is also where neglect shows most, which is why vacant work is quoted on condition rather than square footage alone."
  },
  {
    Icon: Camera,
    title: "Homes Being Sold",
    description:
      "Timed to the listing rather than the move. Clean floors, clear glass, and detailed kitchens and bathrooms photograph well and hold up at a showing, which is why sellers usually book before the photographer rather than after the offer."
  },
  {
    Icon: Sparkles,
    title: "Newly Purchased Homes",
    description:
      "The gap between closing and moving day is short and worth using. Cleaning an empty house before the truck arrives costs less time than working around boxes, and it is the only chance to reach the backs of cabinets and closets easily."
  },
  {
    Icon: Briefcase,
    title: "Offices",
    description:
      "Suites being vacated after a relocation, or fitted out for a new tenant. Work is arranged around furniture removal, IT decommissioning, and whatever access window the building manager will give us."
  },
  {
    Icon: Store,
    title: "Retail & Commercial Suites",
    description:
      "Storefronts, service suites, and small commercial spaces between tenants. Interior glass, back-of-house storage, staff restrooms, and hard floors carry most of the scope, and after-hours work is normal."
  }
];

// ─── Audience sections ────────────────────────────────────────────────────
const audienceGroups = [
  {
    Icon: Users,
    title: "Renters and Tenants",
    intro:
      "The end of a lease runs on somebody else's calendar. What helps most is having the cleaning slotted into that calendar properly rather than squeezed in the night before.",
    points: [
      "Cleaning scheduled after the movers, once the rooms are actually empty",
      "Work built around the checklist your landlord or property manager provided",
      "Attention on kitchens, bathrooms, appliance interiors, and storage, the areas those checklists name most often",
      "A finished property ahead of the final walkthrough and key handover"
    ]
  },
  {
    Icon: ClipboardList,
    title: "Landlords and Property Managers",
    intro:
      "Turnover time is money, and inconsistency between units causes more problems than any single clean. Repeatable scope is the point.",
    points: [
      "Vacant-unit cleaning between tenants, scoped the same way each time",
      "Coordination with maintenance, painters, and flooring crews so nobody works over anyone",
      "Access handled through lockboxes, codes, or an on-site manager without you attending",
      "Recurring turnover work across multiple units or a portfolio",
      "Add-on carpet, window, or floor care quoted alongside the unit clean"
    ]
  },
  {
    Icon: Camera,
    title: "Realtors and Home Sellers",
    intro:
      "A vacant listing is judged entirely on detail, because there is nothing else in the room to look at.",
    points: [
      "Cleaning timed to listing photography, open houses, or a closing date",
      "Detailed work on vacant interiors where every surface is visible",
      "Kitchens, bathrooms, and floors prioritised, the rooms buyers photograph and remember",
      "Coordination with staging, painting, and repair schedules"
    ]
  }
];

// ─── Commercial move cleaning ─────────────────────────────────────────────
const commercialPoints = [
  "Office relocations, in either direction, worked around your move-out date",
  "Tenant move-outs and lease handovers back to a landlord or building owner",
  "New tenant occupancy cleaning before staff and equipment arrive",
  "Retail and commercial suites between tenants",
  "Break rooms, restrooms, conference rooms, and reception areas",
  "Interior glass, partitions, and entry doors",
  "Hard-floor cleaning and carpet vacuuming across the suite",
  "Cleaning after furniture, fixtures, and equipment have been removed",
  "Scheduling coordinated with facility managers, landlords, and contractors"
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Tell Us About the Property",
    description:
      "Property type, approximate size, bedroom and bathroom count, location, current condition, and the date it needs to be finished by. Photos of the kitchen and bathrooms tell us more than a paragraph does."
  },
  {
    number: "02",
    title: "Confirm the Cleaning Scope",
    description:
      "We agree what is standard, what is optional, and what is out of scope. If you have a landlord or property-manager checklist, this is when to send it so the work is built around it."
  },
  {
    number: "03",
    title: "Schedule Around the Move",
    description:
      "Move-out work is booked after the property is empty, move-in work before anything arrives. We fit around movers, repairs, elevator reservations, and the inspection or handover deadline."
  },
  {
    number: "04",
    title: "Complete the Detailed Cleaning",
    description:
      "The crew works through the agreed scope area by area, with kitchens and bathrooms getting the largest share of the time, and floors finished last so nothing is walked back over."
  },
  {
    number: "05",
    title: "Review the Finished Work",
    description:
      "The completed job is reviewed against the scope that was agreed. If something in that scope needs a second pass, tell us and we will sort it out."
  }
];

// ─── Timing ───────────────────────────────────────────────────────────────
const timingGuides = [
  {
    Icon: Truck,
    title: "Booking Move-Out Cleaning",
    points: [
      "After the movers have taken furniture and belongings out",
      "After any repairs, painting, or maintenance work is finished",
      "Before the final walkthrough or inspection, not the same hour as it",
      "Before keys, fobs, or access cards are handed back"
    ],
    note: "Leaving a full day between the clean and the walkthrough is the single easiest way to avoid a stressful morning."
  },
  {
    Icon: KeyRound,
    title: "Booking Move-In Cleaning",
    points: [
      "Once you have access to the property, even if the move is weeks away",
      "After construction, renovation, or contractor work has finished",
      "Before furniture, appliances, and boxes are delivered",
      "Before anyone starts unpacking into cabinets and closets"
    ],
    note: "The empty window between getting keys and the truck arriving is short. It is also the only time the property will be this easy to clean."
  }
];

// ─── Preparation ──────────────────────────────────────────────────────────
const preparationPoints = [
  "Remove personal belongings and anything not staying with the property",
  "Empty cabinets and drawers completely if you want the interiors cleaned",
  "Empty the refrigerator and unplug it in advance if the interior is in scope",
  "Keep electricity and running water connected until after the appointment",
  "Confirm parking, loading zones, and how the crew gets into the building",
  "Share gate codes, elevator booking rules, lockbox details, or front-desk instructions",
  "Send the landlord or property-manager checklist if you were given one",
  "Point out the areas you are most concerned about being judged on",
  "Mention pets, damage, smoke, or heavy buildup before the visit rather than on the day",
  "Book after the movers where the timing allows it",
  "Tell us the walkthrough, inspection, or handover deadline you are working toward"
];

// ─── Pricing factors ──────────────────────────────────────────────────────
const pricingFactors = [
  {
    title: "The Property Itself",
    items: [
      "Residential or commercial",
      "Property type and layout",
      "Approximate square footage",
      "Number of bedrooms and bathrooms",
      "Stairs, levels, and separate storage areas"
    ]
  },
  {
    title: "Current Condition",
    items: [
      "How much buildup is present",
      "Whether the property is vacant or still furnished",
      "Pet hair and lingering odours",
      "Leftover debris or discarded items",
      "How long the property has sat empty"
    ]
  },
  {
    title: "Scope and Access",
    items: [
      "Appliance interiors, cabinets, and drawers",
      "Carpet cleaning, window cleaning, or floor care",
      "Floor types across the property",
      "Parking, elevators, and building access rules",
      "The deadline the work has to be finished by"
    ]
  }
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: CalendarClock,
    title: "Built Around Your Move Date",
    description:
      "The scope follows the property and the deadline, not a fixed package. A well-kept two-bedroom and a rental nobody has cleaned in three years are quoted as the different jobs they are."
  },
  {
    Icon: Home,
    title: "Residential and Commercial",
    description:
      "The same company handles the apartment you are leaving and the office suite your business is taking on. One point of contact for both ends of a move."
  },
  {
    Icon: ClipboardList,
    title: "Scope Agreed in Writing",
    description:
      "What is included, what costs extra, and what we will not be doing are settled before a date is held. Nothing appears on the invoice that was not discussed first."
  },
  {
    Icon: Search,
    title: "Attention Where It Gets Checked",
    description:
      "Kitchens, bathrooms, appliance interiors, storage, baseboards, and floors take the bulk of the time, because those are the areas walkthroughs and checklists consistently name."
  },
  {
    Icon: Sparkles,
    title: "Related Work Under One Quote",
    description:
      "Carpet cleaning, window cleaning, pressure washing, junk removal, and commercial floor care can be quoted alongside the move clean instead of chased down separately."
  },
  {
    Icon: MessageCircle,
    title: "Straight Answers",
    description:
      "If a stain will not come out, if a property needs more time than the deadline allows, or if what you actually need is a different service, you hear that before the job rather than after it."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Residential Cleaning",
    description: "Ongoing home cleaning once you are settled into the new place.",
    href: "/services/residential-cleaning",
    ctaLabel: "View residential cleaning"
  },
  {
    title: "Residential Deep Cleaning",
    description: "A detailed reset for a home you already live in, with no move attached.",
    href: "/services/residential-deep-cleaning",
    ctaLabel: "Explore deep cleaning"
  },
  {
    title: "Commercial Cleaning",
    description: "Recurring janitorial service for the new premises once you have occupied them.",
    href: "/services/commercial-cleaning",
    ctaLabel: "See commercial cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    description: "Periodic detailed cleaning for facilities, useful before a new tenant takes over.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "View commercial deep cleaning"
  },
  {
    title: "Carpet Cleaning",
    description: "Extraction for carpet that a vacuum cannot fix, common on rental turnovers.",
    href: "/services/carpet-cleaning",
    ctaLabel: "Explore carpet cleaning"
  },
  {
    title: "Window Cleaning",
    description: "Interior and exterior glass, easiest to do while the property is still empty.",
    href: "/services/window-cleaning",
    ctaLabel: "See window cleaning"
  },
  {
    title: "Post-Construction & Renovation Cleanup",
    description: "Dust and debris removal after a remodel, before a move-in clean makes sense.",
    href: "/services/post-construction-renovation-cleanup",
    ctaLabel: "View post-construction cleanup"
  },
  {
    title: "Strip & Wax",
    description: "Commercial hard-floor restoration, often timed to a tenant changeover.",
    href: "/services/strip-and-wax",
    ctaLabel: "Explore strip and wax"
  },
  {
    title: "Pressure Washing",
    description: "Driveways, walkways, and patios, worth pairing with a move-out on a house.",
    href: "/services/pressure-washing",
    ctaLabel: "See pressure washing"
  },
  {
    title: "Junk Removal",
    description: "Non-hazardous items left behind after a move, cleared before the cleaning starts.",
    href: "/services/junk-removal",
    ctaLabel: "View junk removal"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is included in move-out cleaning?",
    answer:
      "A standard move-out clean covers the kitchen, bathrooms, bedrooms, living areas, hallways, and entry, including surfaces, cabinet and drawer fronts, appliance exteriors, doors and frames, baseboards, switch plates, empty closets and shelving, and full floor cleaning. Appliance interiors, cabinet and drawer interiors, window glass and tracks, and carpet cleaning are available but confirmed in the quote rather than assumed, because each one adds meaningful time. The exact list depends on the property, its condition, and the scope you approve."
  },
  {
    question: "What is included in move-in cleaning?",
    answer:
      "The same room-by-room work, with the priorities reversed. Kitchens and bathrooms come first because those are the rooms you use on day one, followed by storage, shelving, closets, floors, and frequently touched surfaces such as handles, railings, and switch plates. The aim is a clean starting point before boxes and furniture arrive, so residue and dust left by previous occupants or contractors is dealt with while every surface is still reachable."
  },
  {
    question: "How is move-out cleaning different from a regular clean?",
    answer:
      "Routine cleaning maintains a property that is being lived in and works around furniture and belongings. Move cleaning happens once, in an empty property, and deals with everything that furniture was hiding: the dust line behind a couch, the inside of cabinets, the closet shelves, the baseboards, the floor edges. It also runs to a deadline set by someone else, usually a walkthrough or a handover date, which changes how it gets scheduled. If your home is furnished and simply needs a thorough reset, residential deep cleaning is the closer fit."
  },
  {
    question: "Should the cleaning happen before or after the movers?",
    answer:
      "After, for a move-out. An empty property can be cleaned properly in one visit, and anything cleaned before the furniture leaves gets undone the moment a couch is dragged across the floor. For a move-in the logic reverses: book it before the delivery truck arrives, while cabinets, closets, and floors are still clear. Where a move happens in stages, tell us the sequence and we will pick the slot that gives the best result rather than the earliest one."
  },
  {
    question: "Can you follow my landlord's or property manager's checklist?",
    answer:
      "Yes, and it is the most useful thing you can send us. Send it with the quote request and we will build the scope around it, flag anything on it that falls outside cleaning, such as repairs, painting, or carpet replacement, and confirm which items carry an additional cost. We cannot commit to another company's inspection standard on their behalf, but working from the actual document beats guessing at what a property manager expects."
  },
  {
    question: "Will move-out cleaning get my security deposit back?",
    answer:
      "No cleaning company can promise that, and you should be cautious of one that does. A deposit decision rests with the landlord or property manager and takes in wear, damage, unpaid rent, and their own inspection standard, not cleanliness alone. What a thorough move-out clean does is remove cleaning from the list of things that could be held against you, and following the checklist you were given is the most direct way to address the expectations that were actually set."
  },
  {
    question: "Do you clean inside cabinets and drawers?",
    answer:
      "Yes, when it is included in the approved quote. Cabinet and drawer interiors are one of the more time-consuming parts of a move clean, so they are priced rather than assumed. They also have to be completely empty before the appointment, we do not remove or store personal belongings, and a cabinet with items still in it gets cleaned around rather than properly cleaned out."
  },
  {
    question: "Do you clean inside the oven and refrigerator?",
    answer:
      "Both are available as add-ons and both need mentioning when you request the quote, because they can add a significant amount of time depending on condition. Refrigerators should be emptied and, ideally, unplugged in advance so the interior is not still cold and wet when we arrive. Heavy baked-on oven buildup is assessed on site; we will tell you honestly what is likely to lift and what is stained permanently rather than promising an outcome we cannot deliver."
  },
  {
    question: "Do you handle apartment and rental turnovers for landlords?",
    answer:
      "Yes. Vacant-unit and tenant turnover cleaning is regular work for us across the Seattle area, for individual landlords and for property managers running multiple units. Access is usually arranged through a lockbox, a code, or an on-site manager, so nobody has to meet us there. Where you are turning several units, the scope can be standardised so each one is cleaned to the same specification, and carpet cleaning or floor care can be quoted alongside it."
  },
  {
    question: "Can carpet cleaning be added to a move clean?",
    answer:
      "Yes, and an empty property is the best time for it, since nothing has to be moved and the carpet has room to dry. It is quoted as its own service rather than folded into the cleaning price, because extraction is separate work with its own equipment and drying time. Mention it when you request the quote so both visits can be sequenced correctly: carpet work is done after the general cleaning, not before it. See our carpet cleaning page for what that service covers."
  },
  {
    question: "Can window cleaning be added?",
    answer:
      "Yes. Interior glass, sills, and tracks are a common addition to a move clean, and exterior glass can be included where the property and access allow it. Both are quoted separately from the standard scope. An empty property makes the job considerably easier, since sills are clear, sliders open fully, and nothing has to be moved away from the glass first."
  },
  {
    question: "Do you clean offices and commercial spaces during a relocation?",
    answer:
      "Yes. Commercial move-in and move-out cleaning covers vacated office suites, spaces being prepared for a new tenant, retail units between occupants, and property handovers back to a landlord. Work is arranged around furniture removal, contractor schedules, and building access, and after-hours or weekend scheduling is normal. Once you are settled, recurring janitorial service for the new premises is quoted separately."
  },
  {
    question: "How long does move-in or move-out cleaning take?",
    answer:
      "It varies enough that any fixed number would be misleading. A compact one-bedroom apartment in reasonable condition is a different job from a four-bedroom house that has been rented out for years, and appliance interiors, cabinet interiors, and carpet work each add time. Once we know the property type, size, condition, and the scope you want, we will give you a realistic estimate of the appointment length along with the written quote."
  },
  {
    question: "How is the quote calculated, and how far ahead should I book?",
    answer:
      "Quotes are based on the property type, size, bedroom and bathroom count, current condition, whether it is vacant, the optional work you want included, and access details such as parking and elevators. Estimates are free and carry no obligation. On timing, get in touch as early as you have a date, even a provisional one. Month ends and the last few days before a lease expires are the busiest slots in the calendar, and availability is confirmed when you book rather than assumed."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// so it is intentionally not repeated in this @graph. The LocalBusiness
// entity lives at /#business and is referenced by @id, never redefined.
// ─────────────────────────────────────────────────────────────────────────

const moveCleaningSchema = {
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
      name: "Move-In and Move-Out Cleaning in Seattle",
      serviceType: "Move-In / Move-Out Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area renters, homeowners, home sellers, landlords, property managers, realtors, and commercial tenants"
      },
      description:
        "Move-in and move-out cleaning in Seattle for apartments, houses, condos, townhomes, rental units, offices, and commercial suites. Detailed one-time cleaning of kitchens, bathrooms, bedrooms, living areas, hallways, and commercial areas, timed around movers, final walkthroughs, tenant turnovers, and property handovers, with appliance interiors, cabinet interiors, window cleaning, and carpet cleaning available as optional additions.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Move-In and Move-Out Cleaning Scope",
        itemListElement: scopeGroups.map((group) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${group.title} Move Cleaning`,
            description: group.summary
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

export default function MoveInMoveOutCleaningPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
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
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Move-In / Move-Out Cleaning", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Move-In &amp; Move-Out Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Move-In and Move-Out Cleaning Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Detailed cleaning for apartments, homes, rental properties, offices, and commercial spaces across
                the Seattle area. We prepare vacant properties for new occupants, final walkthroughs, inspections,
                and key handovers, with the scope set by the property rather than a fixed package.
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
                  href="#checklist"
                  className="inline-flex items-center px-1 py-3 text-sm font-semibold text-accent underline underline-offset-4 transition-colors hover:text-white"
                >
                  View the cleaning checklist
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
                  <Boxes className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <h2 className="mt-4 text-base font-semibold text-white">Cleaning Timed to the Move</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Every move runs on a date somebody else set: a lease ending, a closing, a handover. The cleaning
                  has to fit into that, which is why the appointment is planned around your moving timeline and the
                  scope is confirmed before anything is booked.
                </p>
              </div>
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
                What Move-In and Move-Out Cleaning Covers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Move cleaning is the detailed one-time service booked when a property changes hands. It runs to a
                date rather than a routine: a lease ending, a closing, a walkthrough, a set of keys going back.
                The property is usually empty or close to it by the time we arrive, and that is what makes the work
                different from an ordinary visit.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                An empty room shows everything. Slide a refrigerator out of its recess or pull a couch off a wall
                and you find the dust line behind it, the crumbs along the cabinet toe-kick, the scuff on the
                baseboard, the ring left on a closet shelf by something that sat there for two years. None of it
                was reachable while the place was lived in. All of it is visible to whoever walks through next.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Cleaning From The Heart LLC does this work for renters finishing a lease, homeowners preparing a
                house for sale or occupancy, landlords and property managers turning units between tenants, and
                businesses moving into or out of leased premises. Homes and rentals make up most of it. Commercial
                relocations get their own section further down the page.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Scope is confirmed in writing before a date is held. A well-kept two-bedroom apartment and a rental
                that has not had a proper clean in three years are not the same job, and quoting them as though
                they were is how people end up surprised by an invoice.
              </p>
            </div>

            <div className="lg:sticky lg:top-32">
              <ServiceImagePanel
                src="/services/moveout-into.png"
                alt="Cleaning supplies and a flat mop staged on the floor of an empty apartment with moving boxes and a step ladder in the background"
                width={1122}
                height={1402}
                sizes="(max-width: 1023px) 100vw, 42vw"
                aspect="none"
                caption="Move cleaning is done while the property is empty, before the next occupant walks through."
              />
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatEmptyReveals.map(({ Icon, title, description }, index) => (
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

      {/* ── MOVE-OUT CLEANING ───────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="move-out">
        <Container>
          <div className="grid gap-x-10 gap-y-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-x-14">
            <div>
              <span className="eyebrow">Move-Out</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Move-Out Cleaning for Homes, Apartments and Rental Properties
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Move-out cleaning is done once the property is yours in name only. The boxes are gone, the rooms
                echo, and what is left is a list of surfaces that somebody else is about to look at closely. The
                job is to work through that list properly, in the window between the movers leaving and the keys
                going back.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Most of the time goes into the kitchen and the bathrooms, because that is where buildup collects
                and where checklists start. After that it is storage, baseboards, doors, switch plates, window
                sills, and floors cleaned to the edges rather than to the furniture line. Pet hair, dust in
                closets, and marks exposed once something heavy was moved all get handled in the same pass.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-200 bg-white px-6 py-6 lg:col-span-2 lg:row-start-2">
              <h3 className="text-sm font-semibold text-ink">About deposits and inspections</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We will not tell you that cleaning guarantees a deposit back or a passed inspection, because that
                decision belongs to a landlord or property manager and takes in wear, damage, and their own standard.
                What we can do is prepare the property for the walkthrough, cover the areas those checklists
                consistently name, and work to your landlord&apos;s written list when you provide one.
              </p>
            </div>

            <div className="self-start rounded-3xl border border-brand-100 bg-white p-7 md:p-9 lg:col-start-2 lg:row-start-1">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Truck className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Who books move-out cleaning</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {moveOutAudiences.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-100 pt-5 text-sm leading-relaxed text-muted">
                Cleaning a home you are still living in, with no move involved? That is{" "}
                <Link
                  href="/services/residential-deep-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  residential deep cleaning
                </Link>{" "}
                instead.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MOVE-IN CLEANING ────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="move-in">
        <Container>
          <ServiceEditorialSplit
            src="/home/services/full-home-cleaning.jpg"
            alt="Living room and staircase in a clean, prepared home ready for new occupants"
            width={4000}
            height={2667}
            sizes="(max-width: 1023px) 100vw, 45vw"
            aspect="aspect-[4/3]"
            imagePosition="right"
            columns="lg:grid-cols-[1fr_0.95fr]"
          >
            <span className="eyebrow">Move-In</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Move-In Cleaning Before You Settle Into Your New Space
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              There is a short window between getting access to a property and the moment a delivery truck fills it
              up. That window is the easiest the place will ever be to clean, and the only chance to reach the
              backs of cabinets, the tops of closets, and the floor under where the bed is about to go.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A move-in clean deals with what the previous occupants left and what a vacant period added: dust from
              weeks of standing empty, residue in kitchen cabinets and bathroom vanities, fine grit left by
              contractors after repairs or painting. Kitchens and bathrooms come first, because those are the two
              rooms you use on the first night.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We will not claim a property comes back sterile or germ-free, and nobody honest should. What you get
              is a thorough clean of the surfaces you are about to live with, done before your own belongings are
              in the way of it.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {moveInCoverage.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── COMPARISON ──────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            center
            eyebrow="Side by Side"
            title="Move-Out and Move-In Cleaning Compared"
            description="Same room-by-room work, two different reasons for booking it. Which one you need is usually decided by whether you are handing keys over or receiving them."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {comparisonColumns.map(({ Icon, label, tagline, rows }, index) => (
              <Reveal key={label} delay={index * 0.08}>
                <article className="card flex h-full flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{label}</h3>
                      <p className="mt-0.5 text-sm text-muted">{tagline}</p>
                    </div>
                  </div>
                  <dl className="grid gap-4 border-t border-brand-100 pt-5">
                    {rows.map((row) => (
                      <div key={row.label}>
                        <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{row.label}</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-ink">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
            Moving out of one property and into another on the same week is common, and both cleans can be quoted
            together as two appointments on separate dates.
          </p>
        </Container>
      </section>

      {/* ── ROOM-BY-ROOM CHECKLIST ──────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="checklist">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What Is Included in Move-In and Move-Out Cleaning?"
            description="The room-by-room checklist below is what a move clean is built from. Open each area to see the tasks it covers."
          />

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-5 py-2 md:px-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] rounded-3xl border border-brand-100 bg-surface px-7 py-7 md:px-10">
            <h3 className="text-base font-semibold text-ink">The exact checklist depends on the property</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Nothing on this page is a promise that every listed task belongs to every appointment. The final
              scope is set by the property, its condition, and the quote you approve, and several of the items
              above, appliance interiors, cabinet interiors, window glass and tracks, are confirmed individually
              rather than assumed. Anything genuinely outside cleaning, such as repairs, painting, pest control, or
              mould remediation, is a different trade and we will say so rather than take it on.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Get a Move Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ── STANDARD SCOPE VS OPTIONAL ──────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            center
            eyebrow="Included and Optional"
            title="Standard Cleaning and Optional Add-On Services"
            description="Knowing which side of this line a task falls on is the difference between a quote that holds and one that changes on the day."
          />

          {/* The two sides are weighted deliberately: the included list is the shorter,
              higher-contrast panel, the add-ons get the wider tile grid because each one
              carries a qualifier that needs its own line. */}
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              {/* Sticky on large screens: the included list is the shorter column, so it stays
                  beside the add-on grid instead of leaving dead space under itself. */}
              <div className="rounded-3xl bg-brand-600 p-7 text-white shadow-card-lg md:p-9 lg:sticky lg:top-32">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <CheckCircle2 className="h-5 w-5 text-brand-200" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-200">
                      Included
                    </p>
                    <h3 className="mt-0.5 font-heading text-lg font-semibold text-white">
                      Part of the agreed scope
                    </h3>
                  </div>
                </div>

                <ul className="mt-7 space-y-3">
                  {standardScope.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-300" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/60">
                  These are quoted as one price for the property rather than line by line.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-3" delay={0.08}>
              <div className="rounded-3xl border border-brand-100 bg-white p-7 shadow-card md:p-9">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <Sparkles className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-600">
                      Optional
                    </p>
                    <h3 className="mt-0.5 font-heading text-lg font-semibold text-ink">
                      Available, quoted separately
                    </h3>
                  </div>
                </div>

                {/* Tiles rather than rows: the qualifier sits under the task name instead of
                    being pushed to a cramped right-hand column. */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {optionalScope.map(({ item, note }) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-brand-100 bg-surface p-4 transition-colors duration-200 last:odd:sm:col-span-2 hover:border-brand-200"
                    >
                      <p className="text-sm font-semibold leading-snug text-ink">{item}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">{note}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-7 border-t border-brand-100 pt-5 text-xs leading-relaxed text-muted">
                  Each of these adds real time, so none of them is folded into a standard price by default. Name the
                  ones you want when you request a quote and they are costed in from the start.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── PROPERTY TYPES ──────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="properties">
        <Container>
          <SectionHeading
            eyebrow="Properties We Clean"
            title="Move Cleaning for Different Seattle Property Types"
            description="Layout, storage, and building access change the job far more than square footage does. Here is how each property type usually runs."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.04}>
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
        </Container>
      </section>

      {/* ── RENTERS, LANDLORDS & PROPERTY MANAGERS ──────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Cleaning Support for Renters, Landlords and Property Managers"
            description="The same property, three different sets of priorities depending on which side of the handover you are standing on."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {audienceGroups.map(({ Icon, title, intro, points }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className="card flex h-full flex-col gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{intro}</p>
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
        </Container>
      </section>

      {/* ── COMMERCIAL MOVE CLEANING ────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="commercial">
        <Container>
          <ServiceEditorialSplit
            src="/images/gallery/gallery-13.jpeg"
            alt="Hard-floor cleaning and finishing work in an empty commercial room in the Seattle area"
            width={1320}
            height={1313}
            sizes="(max-width: 1023px) 100vw, 42vw"
            aspect="none"
            caption="Hard-floor work in a vacated commercial room, Seattle area."
            imagePosition="left"
            columns="lg:grid-cols-[0.85fr_1fr]"
            align="start"
          >
            <span className="eyebrow">Commercial</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Commercial Move-In and Move-Out Cleaning in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A business relocation has more moving parts than a household one. Furniture removal, IT
              decommissioning, contractor schedules, building access hours, and a landlord expecting the suite back
              in a particular condition all land in the same week. The cleaning has to slot into that sequence
              rather than compete with it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We clean vacated office suites, spaces being prepared for an incoming tenant, retail units between
              occupants, and premises being handed back at the end of a lease. Scope is built area by area with the
              facility manager, landlord, or business owner, and after-hours or weekend scheduling is normal rather
              than an exception.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {commercialPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Larger transitions often need more than cleaning alone. Depending on the space, that can mean{" "}
              <Link
                href="/services/carpet-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                commercial carpet extraction
              </Link>
              ,{" "}
              <Link
                href="/services/strip-and-wax"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                hard-floor strip and wax
              </Link>
              ,{" "}
              <Link
                href="/services/commercial-window-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                commercial window cleaning
              </Link>
              , or{" "}
              <Link
                href="/services/post-construction-renovation-cleanup"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                post-construction cleanup
              </Link>{" "}
              after a build-out. Once your team is settled in the new premises,{" "}
              <Link
                href="/services/commercial-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                recurring commercial cleaning
              </Link>{" "}
              is quoted as its own service.
            </p>
          </ServiceEditorialSplit>
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
                  Why Choose Cleaning From The Heart for Move Cleaning?
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                Locally owned and family-operated, with 30+ years of Seattle cleaning experience behind the work.
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
      <section className="section-shell scroll-mt-28 bg-white" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Move-In and Move-Out Cleaning Process"
            description="Five steps from first message to finished property. Everything that affects the price is settled before a date is held."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        </Container>
      </section>

      {/* ── TIMING ──────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Timing"
            title="When Should You Schedule Move Cleaning?"
            description="Booking the right slot matters almost as much as the cleaning itself. The wrong one means paying for work that gets undone an hour later."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {timingGuides.map(({ Icon, title, points, note }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="card flex h-full flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  </div>
                  <ul className="grid gap-2.5">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto border-t border-brand-100 pt-4 text-sm leading-relaxed text-muted">{note}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
            Availability depends on the calendar, and month ends fill up first because that is when most leases
            turn over. Request a quote as soon as you have a date, even a provisional one, and we will tell you
            plainly what we can hold.
          </p>
        </Container>
      </section>

      {/* ── PREPARATION ─────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <ServiceEditorialSplit
            src="/images/gallery/gallery-04.jpeg"
            alt="Detailed interior cleaning of a carpeted living space in a Seattle-area home"
            width={1320}
            height={1752}
            sizes="(max-width: 1023px) 100vw, 40vw"
            aspect="aspect-[4/5]"
            caption="Interior detail cleaning at a Seattle-area home."
            imagePosition="right"
            columns="lg:grid-cols-[1fr_0.8fr]"
            align="start"
          >
            <span className="eyebrow">Before We Arrive</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How to Prepare for Your Move Cleaning
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              None of this takes long, and each item either saves time on the day or prevents something going
              wrong. The two that matter most are having the property genuinely empty and having the utilities
              still connected.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {preparationPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              If something on that list is a problem, the power is already off, the movers are running late, a
              cabinet cannot be emptied in time, tell us in advance rather than on the day. Nearly all of it can be
              worked around with notice.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── PRICING FACTORS ─────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="pricing">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="What Affects the Cost of Move-In and Move-Out Cleaning?"
            description="Move cleans are quoted per property rather than from a price list, because condition changes the work more than size does. These are the factors that move the number."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pricingFactors.map(({ title, items }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className="card flex h-full flex-col gap-4">
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <ul className="grid gap-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-7 py-8 md:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-ink">Every quote is written for the property</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  We do not publish fixed prices, because a vacant studio and a four-bedroom rental with pets and
                  three years of buildup would both be wrong at the same number. Send the property type, size,
                  condition, location, and the date it needs finishing by, and you will get a straightforward
                  estimate with no obligation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Request a Customized Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-secondary">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/*
        ─── IMAGE NOTES ─────────────────────────────────────────────────────
        The photographs below are genuine company work, but none of them was
        taken on a move-in or move-out job specifically, so the captions
        describe them for what they are. When real move cleaning photos are
        available, replace them here and add matching entries to `galleryItems`
        in lib/site.ts so they also appear on /gallery. Recommended shots are
        listed in the handover notes: empty apartment kitchen (before/after),
        oven interior, vacant living room floor, empty office suite.
        ─────────────────────────────────────────────────────────────────────
      */}
      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="Move Cleaning Results"
            description="Detail work from Seattle-area homes and commercial properties. Empty rooms, hard floors, and the surfaces that only get attention when a space is between occupants."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ServiceImagePanel
              src="/images/gallery/gallery-05.jpeg"
              alt="Hard-floor cleaning across the main living areas of a Seattle-area home"
              width={1320}
              height={2333}
              sizes="(max-width: 767px) 100vw, 46vw"
              aspect="none"
              caption="Hard-floor cleaning through the living areas of a Seattle-area home."
            />
            <ServiceImagePanel
              src="/images/gallery/gallery-12.jpeg"
              alt="Restored hard-floor finish in an empty commercial room after floor care work"
              width={1320}
              height={1319}
              sizes="(max-width: 767px) 100vw, 46vw"
              aspect="none"
              caption="Commercial hard-floor care in a vacant room between occupants."
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/gallery" className="cta-secondary">
              View our cleaning results
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
            <p className="text-sm text-muted">
              More photos from homes, schools, and commercial properties across the Seattle area.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-white px-7 py-9 md:px-12 md:py-11">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Move-In and Move-Out Cleaning Across the Seattle Area
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Most of this work happens in apartments and rental homes around Seattle and the surrounding
                  cities, where turnover dates, elevator bookings, and loading-zone access shape the schedule as
                  much as the cleaning does. Coverage is confirmed when we quote rather than assumed, so if your
                  property sits toward the edge of the areas listed, a quick call will settle it.
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
      <section className="section-shell scroll-mt-28 bg-white" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Move-In and Move-Out Cleaning FAQs
              </h2>
              <p className="mt-4 text-base text-muted">
                What renters, homeowners, landlords, and business tenants ask most before booking a move clean.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Question about your own move?</p>
                <p className="mt-1 text-sm text-muted">
                  Send the property type, size, condition, and the date you need it finished by, and we will tell
                  you what the job involves.
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

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Related Services"
            title="Related Cleaning Services"
            description="Work that often runs alongside a move, either as part of the same quote or as a separate visit."
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

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow-light">Move Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Need Your Property Cleaned Before a Move, Inspection or Handover?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us the property type, approximate size, condition, location, and the date it has to be
                  finished by. We will put together a move-in or move-out scope that fits the property and the
                  timeline, in writing, with no obligation.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Free written quote", "Residential & commercial", "Add-ons priced up front"].map((item) => (
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moveCleaningSchema) }}
      />
    </>
  );
}
