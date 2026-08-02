import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Church,
  Landmark,
  Building2,
  GraduationCap,
  Baby,
  Users,
  BookOpen,
  HeartHandshake,
  UserCheck,
  ListChecks,
  ClipboardList,
  MessageCircle,
  MapPin,
  CalendarClock,
  CalendarDays,
  Repeat,
  Layers,
  ShieldCheck,
  Footprints,
  Droplets,
  Sparkles,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const PAGE_PATH = "/industries/places-of-worship";

// This dedicated route replaces the generic /industries/[slug] template render
// for this industry. The URL is unchanged so no redirect is needed — the
// `places-of-worship` entry in lib/industries.ts still supplies the nav,
// hub-grid, carousel, and sitemap data for it.
const PAGE_TITLE = "Church Cleaning Services Seattle | Places of Worship";
const PAGE_DESCRIPTION =
  "Professional church cleaning services in Seattle for sanctuaries, fellowship halls, nurseries, classrooms, offices and restrooms. Request a facility walkthrough.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    "church cleaning services Seattle",
    "places of worship cleaning Seattle",
    "church cleaning company Seattle",
    "church janitorial services Seattle",
    "religious facility cleaning Seattle",
    "sanctuary cleaning services Seattle",
    "mosque cleaning services Seattle",
    "synagogue cleaning services Seattle",
    "temple cleaning services Seattle",
    "chapel cleaning services Seattle",
    "fellowship hall cleaning Seattle",
    "church event cleaning Seattle"
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Cleaning From The Heart LLC commercial cleaning team in the Seattle area"
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
  "Sanctuaries and worship spaces",
  "Fellowship and community halls",
  "Nurseries and classrooms",
  "Offices and meeting rooms",
  "Restrooms",
  "Entrances and lobbies"
];

const trustStripItems = [
  { Icon: CalendarClock, label: "Scheduled around services & events" },
  { Icon: ClipboardList, label: "Written, building-specific scope" },
  { Icon: MessageCircle, label: "Direct line to the owner" },
  { Icon: MapPin, label: "Seattle & nearby King County communities" }
];

// ─── Facility types served ────────────────────────────────────────────────
const facilityTypes = [
  {
    Icon: Church,
    title: "Churches & Cathedrals",
    description:
      "Sanctuary seating, aisles, platforms, entries, and the wings that fill up after the service ends. Larger buildings usually need the worship space ready on a fixed day and the rest of the building on its own rhythm."
  },
  {
    Icon: Landmark,
    title: "Mosques & Masjids",
    description:
      "Carpeted prayer halls, shoe storage and entry areas, ablution and restroom facilities, and community rooms. Visits are timed around daily prayer and Friday congregational prayer so the hall is not occupied when we work."
  },
  {
    Icon: BookOpen,
    title: "Synagogues",
    description:
      "Sanctuary, social hall, classrooms, offices, and kitchen areas. If your kitchen operates under kosher supervision, the house rules and what our team may and may not touch are written into the scope before the first visit."
  },
  {
    Icon: Sparkles,
    title: "Temples & Worship Centers",
    description:
      "Shoe-free halls, carpeted gathering areas, community dining rooms, and shared restrooms. Floor care and entry-area attention carry most of the workload in buildings where people gather at floor level."
  },
  {
    Icon: HeartHandshake,
    title: "Chapels & Parish Buildings",
    description:
      "Smaller footprints where one room serves as worship space, meeting room, and event hall in the same week. Scope is written for that overlap rather than treating each area as if it were used once."
  },
  {
    Icon: Building2,
    title: "Ministry & Administrative Offices",
    description:
      "Parish and ministry offices, reception areas, workrooms, and meeting rooms that run on weekday hours and can be cleaned on a standard office schedule, separate from the worship building."
  },
  {
    Icon: GraduationCap,
    title: "Religious Schools & Classrooms",
    description:
      "Weekday preschools, religious education rooms, and youth spaces attached to a worship facility. Larger campuses are usually scoped alongside our school facility cleaning work."
  },
  {
    Icon: Users,
    title: "Faith-Based Community Centers",
    description:
      "Multipurpose halls, gyms, food-program kitchens, and meeting rooms used by outside groups through the week. Rented space is scoped by how often it turns over, not by square footage alone."
  }
];

// ─── Cleaning priorities ──────────────────────────────────────────────────
const priorities = [
  {
    Icon: Church,
    title: "Sanctuaries & Worship Spaces",
    description:
      "The worship space carries the whole congregation through in a short window. Floors, seating areas, aisles, entry doors, and accessible surfaces need attention on a cycle that lands before your main gathering, not after it."
  },
  {
    Icon: Footprints,
    title: "Entrances & Lobbies",
    description:
      "Entryways take the weather and the first impression at the same time. Mats, entry glass, handles, and hard floors here show wear faster than anywhere else in the building through a Seattle winter."
  },
  {
    Icon: Users,
    title: "Fellowship & Community Halls",
    description:
      "A hall used for coffee hour on Sunday, a meeting on Tuesday, and a rented event on Saturday needs floors, tables, and waste stations reset between uses rather than once a week."
  },
  {
    Icon: Droplets,
    title: "Restrooms",
    description:
      "Restroom condition changes by the hour on a service day and is the first thing visitors notice. These follow the same repeatable routine every visit instead of getting whatever time is left."
  },
  {
    Icon: Baby,
    title: "Nurseries & Children's Areas",
    description:
      "Nursery rooms concentrate floor-level contact and shared surfaces into a small space. Floors, accessible surfaces, touch points, and waste are handled consistently, with toys and equipment left to your volunteers unless the scope says otherwise."
  },
  {
    Icon: BookOpen,
    title: "Classrooms & Religious Education Rooms",
    description:
      "Education rooms may be used once a week or five days a week. Frequency is set by actual use so a room that hosts a weekday preschool is not on the same cycle as one used for a single class."
  },
  {
    Icon: Building2,
    title: "Offices & Meeting Rooms",
    description:
      "Ministry offices, workrooms, and meeting spaces are cleaned around paperwork, files, and equipment left in place, on the weekday schedule that suits your staff."
  },
  {
    Icon: ClipboardList,
    title: "Kitchens & Serving Areas",
    description:
      "Shared kitchens used for community meals need floors, sinks, counters, and appliance exteriors handled to the agreed scope. Commercial hood, exhaust, and heavy degreasing work is not part of this service."
  },
  {
    Icon: Layers,
    title: "Hallways & Shared Circulation",
    description:
      "Corridors, stairwells, and connecting spaces carry traffic between every other area of the building and are where tracked-in soil ends up if entrances are not managed."
  }
];

// ─── Scope of work, grouped by area ───────────────────────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Armchair",
    title: "Worship & Gathering Areas",
    summary: "Sanctuary floors, seating areas, aisles, accessible surfaces, entry doors & waste.",
    intro:
      "The worship space is scheduled so it is ready ahead of your main gathering. Seating and platform areas are cleaned to the agreed scope. Altars, ritual objects, instruments, artwork, and historic finishes are left to your own staff unless something specific is written into the plan.",
    tasks: [
      "Vacuum carpeted areas and traffic aisles",
      "Sweep, dust mop, and wet mop hard floors",
      "Dust accessible horizontal surfaces and ledges",
      "Clean pew and seating areas as agreed in the scope",
      "Empty waste receptacles and replace liners",
      "Spot-clean entry doors and interior glass"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Entrances, Lobbies & Hallways",
    summary: "Entry glass, mats, high-touch points, corridors, stairwells & tracked-in soil.",
    intro:
      "Entrances decide how the rest of the building looks by midweek. Walk-off mats, entry glass, and handles are handled on every visit, with extra attention through the wet months when grit and moisture travel straight down the corridors.",
    tasks: [
      "Floor care matched to the surface: vacuum, sweep, or mop",
      "Vacuum and reset walk-off mats and entry rugs",
      "Clean entrance door glass, push plates, and handles",
      "Wipe high-touch surfaces such as handles, rails, and switches",
      "Remove trash and address visible debris",
      "Remove reachable cobwebs and spot-clean walls and frames"
    ]
  },
  {
    iconName: "ShowerHead",
    title: "Restrooms",
    summary: "Fixtures, partitions, mirrors, floors, touch points & dispenser restocking.",
    intro:
      "Restrooms follow the same routine every visit. Where restocking is part of the plan, dispensers are filled from the supply agreed in your scope, whether that comes from your own storeroom or is added to the service.",
    tasks: [
      "Clean and sanitize toilets, urinals, and fixtures",
      "Clean sinks, counters, and surrounding surfaces",
      "Clean mirrors and polish bright work",
      "Wipe partitions, handles, and push plates",
      "Mop floors with attention to grout and drain areas",
      "Restock soap, towel, and tissue dispensers where included"
    ]
  },
  {
    iconName: "Coffee",
    title: "Fellowship Halls & Community Rooms",
    summary: "Hall floors, tables and chairs, waste stations, touch points & post-event reset.",
    intro:
      "Halls are scoped around how often they actually turn over. A room that hosts coffee hour, a weeknight meeting, and a Saturday rental is a different job from one used twice a month, and the plan says which it is.",
    tasks: [
      "Sweep, mop, or vacuum hall floors according to surface",
      "Wipe table tops, edges, and chair surfaces as agreed",
      "Clean serving counters and shared surfaces",
      "Empty and wipe trash and recycling stations",
      "Wipe high-touch points including doors and light switches",
      "Post-event reset where it is included in the plan"
    ]
  },
  {
    iconName: "Sofa",
    title: "Nurseries & Classrooms",
    summary: "Floors, accessible surfaces, touch points, waste & cleaning around furniture.",
    intro:
      "Nursery and classroom work concentrates on floors, accessible surfaces, and the touch points that get used by every group passing through. Toys, learning materials, and personal items stay where your volunteers left them unless the scope states otherwise.",
    tasks: [
      "Vacuum carpet and mop hard floors, including under and around furniture",
      "Clean accessible tables, counters, and shared surfaces",
      "Wipe door handles, light switches, and frequently touched points",
      "Empty waste receptacles and replace liners",
      "Spot-clean walls, doors, and interior glass within reach",
      "Clean sinks and counter areas in rooms that have them"
    ]
  },
  {
    iconName: "Building2",
    title: "Offices & Meeting Rooms",
    summary: "Desks, reception, meeting tables, interior glass, floors & break areas.",
    intro:
      "Ministry and administrative offices are cleaned like any other professional workspace, discreetly and around whatever is left on the desks. Break areas are included where they form part of the office suite.",
    tasks: [
      "Vacuum office floors and spot-clean traffic areas",
      "Dust accessible surfaces, sills, and furniture",
      "Wipe desk surfaces around papers and equipment left in place",
      "Clean reception counters and meeting-room tables",
      "Spot-clean interior glass and partitions",
      "Empty waste and clean break-area counters, sinks, and appliance exteriors"
    ]
  },
  {
    iconName: "UtensilsCrossed",
    title: "Kitchen & Food-Service Areas",
    summary: "Floors, sinks, counters, accessible appliance exteriors & waste removal.",
    intro:
      "Church and community kitchens are cleaned as shared facility space, not as a commercial kitchen contract. Hood and exhaust cleaning and heavy kitchen degreasing are outside this scope, and we say so upfront rather than after the walkthrough.",
    tasks: [
      "Sweep and mop kitchen and serving-area floors",
      "Clean sinks, faucets, and surrounding counters",
      "Wipe accessible exterior surfaces of appliances and cabinetry",
      "Clean tables and serving counters used for community meals",
      "Remove trash and recycling and replace liners",
      "General cleaning of the kitchen area to the agreed scope"
    ]
  },
  {
    iconName: "Layers",
    title: "Floor, Carpet & Glass Care",
    summary: "Routine floor work on every visit; restorative work quoted as its own project.",
    intro:
      "Routine floor care happens on the recurring schedule. Machine and extraction work needs the building free and time to dry, so it is scoped, scheduled, and priced on its own rather than folded into a weekly rate.",
    tasks: [
      "Vacuum traffic lanes, sanctuary aisles, offices, and classrooms",
      "Sweep, dust mop, wet mop, and spot mop hard surfaces",
      "Spot-treat fresh carpet marks as they appear",
      "Spot-clean entrance and interior glass",
      "Carpet extraction and hard-floor strip and wax (quoted separately)",
      "Complete interior and exterior window cleaning (quoted separately)"
    ]
  }
];

// ─── Scheduling ───────────────────────────────────────────────────────────
const scheduleFactors = [
  "Number of weekly services",
  "Attendance & foot traffic",
  "Building size & layout",
  "Children's programs",
  "Weekday school or daycare use",
  "Community meals",
  "Event & rental calendar",
  "Office activity",
  "Restroom count & usage",
  "Floor & surface types",
  "Volunteer cleaning already in place",
  "Seasonal and holiday demand"
];

const scheduleOptions = [
  {
    Icon: CalendarClock,
    title: "Daily Janitorial Service",
    description:
      "For campuses running weekday programs, a school, or office hours alongside worship, where restrooms and common areas cannot wait for a weekly visit."
  },
  {
    Icon: Repeat,
    title: "Several Visits Per Week",
    description:
      "A middle cadence for buildings with midweek activities, youth nights, or rented space that fills between weekend services."
  },
  {
    Icon: CalendarDays,
    title: "Weekly Cleaning Before Your Main Service",
    description:
      "The most common arrangement. The building is cleaned on a set day so the worship space, restrooms, and entries are ready ahead of your largest gathering."
  },
  {
    Icon: Users,
    title: "Before- or After-Service Cleaning",
    description:
      "Service timed immediately around your gathering, either to prepare the building beforehand or to reset it once the last group has left."
  },
  {
    Icon: Sparkles,
    title: "Event & Post-Event Cleaning",
    description:
      "One-time visits scheduled around weddings, funerals, holiday services, and community events, arranged in advance around your confirmed calendar."
  },
  {
    Icon: Layers,
    title: "Periodic Deep Cleaning & Floor Care",
    description:
      "Carpet extraction, hard-floor restoration, and detailed resets scheduled into quieter weeks rather than squeezed into a routine visit."
  }
];

// ─── Event support ────────────────────────────────────────────────────────
const eventSupportItems = [
  "Weddings and receptions held on site",
  "Funerals and memorial gatherings",
  "Holiday and high-attendance services",
  "Community meals, potlucks, and coffee hours",
  "Conferences, retreats, and guest speakers",
  "Youth events and youth group nights",
  "Classes, workshops, and volunteer workdays",
  "Fundraisers, rummage sales, and outside rentals"
];

// ─── Floor care tracks ────────────────────────────────────────────────────
const floorCareTracks = [
  {
    Icon: Repeat,
    label: "Included in recurring service",
    title: "Routine Floor & Carpet Maintenance",
    description:
      "Handled on every scheduled visit across sanctuary aisles, halls, corridors, entrances, offices, and classrooms.",
    items: [
      "Vacuuming carpeted worship spaces, aisles, and traffic lanes",
      "Sweeping and dust mopping hard floors",
      "Wet mopping and spot mopping",
      "Fresh-mark spot attention on carpet",
      "Walk-off mat and entry-area care"
    ]
  },
  {
    Icon: Layers,
    label: "Scheduled and quoted separately",
    title: "Periodic & Restorative Floor Care",
    description:
      "Machine work that needs an empty building and drying time. It sits outside recurring pricing and is usually timed to a quiet week between events.",
    items: [
      "Carpet extraction in sanctuaries, halls, and classrooms",
      "Hard-floor strip and wax and scrub-and-recoat restoration",
      "Machine scrubbing and burnishing of corridors and halls",
      "Complete interior and exterior window cleaning",
      "Entrance and walkway pressure washing"
    ]
  }
];

const workPhotos = [
  {
    src: "/images/gallery/gallery-20.jpg",
    alt: "Commercial office floor care result in the Seattle area",
    caption: "Commercial floor care"
  },
  {
    src: "/images/gallery/gallery-13.jpeg",
    alt: "Polished commercial floor care result in the Seattle area",
    caption: "Polished hard-floor finish"
  },
  {
    src: "/images/gallery/gallery-11.jpeg",
    alt: "Floor scrubbing service in a Seattle-area school hallway",
    caption: "Corridor floor scrubbing"
  },
  {
    src: "/images/gallery/gallery-06.jpeg",
    alt: "Commercial glass cleaning with a water-fed pole in Seattle",
    caption: "Commercial glass cleaning"
  }
];

// ─── Scope factors ────────────────────────────────────────────────────────
const scopeFactors = [
  "Building square footage",
  "Sanctuary size & seating",
  "Number of restrooms",
  "Classroom & nursery count",
  "Fellowship hall use",
  "Kitchen involvement",
  "Office areas",
  "Floor & surface types",
  "Service frequency",
  "Cleaning window available",
  "Event & rental calendar",
  "Consumables & dispensers",
  "Specialty services included",
  "Access & key procedures",
  "Volunteer tasks already covered",
  "Current condition & priorities"
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: UserCheck,
    title: "Direct Owner Oversight",
    description:
      "Joshua Alexander stays involved in walkthroughs, communication, and follow-up. When a facilities coordinator or church administrator raises something, they reach the person who can decide what happens next."
  },
  {
    Icon: Users,
    title: "Same Crew, Every Visit",
    description:
      "The same team returns rather than a rotating roster. In a building with quiet areas, stored equipment, and volunteer routines, familiarity matters more than it does in an ordinary office."
  },
  {
    Icon: CalendarClock,
    title: "Scheduling Around Worship, Not Around Us",
    description:
      "Early mornings, evenings, and weekends are all workable. Service is timed so cleaning never competes with a gathering, a class, a prayer time, or a scheduled event."
  },
  {
    Icon: ListChecks,
    title: "Written Scope, Area by Area",
    description:
      "Every included area and task is documented before the first visit, so your board, council, or committee can see exactly what is covered and what is quoted as separate work."
  },
  {
    Icon: HeartHandshake,
    title: "Locally Owned, 30+ Years in Seattle",
    description:
      "A family-founded company with decades of hands-on work across Seattle-area commercial and institutional buildings, now run by the founder's son. Not a franchise routing your building through a regional office."
  },
  {
    Icon: ShieldCheck,
    title: "Licensed, Insured & Contract-Ready",
    description:
      "Cleaning From The Heart LLC is licensed and insured, and custom service agreements are available for congregations that need a formal, long-term arrangement with fixed standards."
  }
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Request a Walkthrough",
    description:
      "A short conversation about your building, your weekly schedule, the areas that matter most, and what volunteers already handle. Call or send the quote form and we arrange a time that suits your office hours."
  },
  {
    number: "02",
    title: "Review the Facility & Schedule",
    description:
      "We walk the building with you: worship space, halls, restrooms, nursery and classrooms, offices, kitchen, floor types, entrances, access and key procedures, and the service and event calendar we need to work around."
  },
  {
    number: "03",
    title: "Receive a Customized Cleaning Scope",
    description:
      "You get the included areas, task frequency, cleaning window, anything quoted as separate project work, and pricing in writing. No obligation, and nothing packaged before the building has been seen."
  },
  {
    number: "04",
    title: "Begin Service on the Agreed Plan",
    description:
      "The assigned crew is oriented on site, service starts on the agreed schedule, and the scope is reviewed as your calendar changes through the year rather than left to go stale."
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is included in church cleaning services?",
    answer:
      "A typical plan covers the worship space and seating areas, entrances and lobbies, restrooms, fellowship or community halls, nurseries and classrooms, offices, hallways, and kitchen areas where they are used. Tasks include floor care, dusting accessible surfaces, high-touch point cleaning, trash removal, restroom cleaning, and interior glass spot cleaning. Your exact scope is documented area by area after the walkthrough."
  },
  {
    question: "How often should a church be professionally cleaned?",
    answer:
      "Most congregations land on weekly cleaning ahead of their main service. Buildings with weekday programs, a preschool, daily prayer, community meals, or frequent rentals often need several visits a week or daily janitorial service. The recommended frequency is determined after reviewing your facility, weekly activities, restroom use, high-traffic areas, and what volunteers already handle."
  },
  {
    question: "Can cleaning be scheduled around worship services?",
    answer:
      "Yes. Scheduling is built around your service times, prayer times, classes, and event calendar rather than a fixed weekday route. Early morning, evening, and weekend windows are all workable, and the timing is agreed during the walkthrough so cleaning never overlaps with a gathering or a program in progress."
  },
  {
    question: "Do you clean mosques, synagogues, temples, and other religious facilities?",
    answer:
      "Yes. We provide places of worship cleaning in Seattle for churches, mosques and masjids, synagogues, temples, chapels, parish and ministry buildings, religious schools, and faith-based community centers. Building-specific requirements, such as shoe-free areas, prayer times, or kitchen house rules, are confirmed in writing before service begins and followed on every visit."
  },
  {
    question: "Can you clean fellowship halls, nurseries, and classrooms?",
    answer:
      "Yes. Fellowship halls, community rooms, nurseries, and religious education classrooms are commonly included. Work focuses on floors, accessible surfaces, tables and chairs as agreed, high-touch points, and waste removal. Toys, learning materials, and personal items are left where your volunteers keep them unless something specific is written into the scope."
  },
  {
    question: "Do you provide church event and post-event cleaning?",
    answer:
      "Yes, on a scheduled basis. Weddings, funerals, holiday services, community meals, conferences, youth events, and outside rentals can all be scoped as before-service or after-service visits. Availability is confirmed against your calendar in advance, so both sides know which spaces are covered, when the work happens, and how it is billed."
  },
  {
    question: "Are carpet and hard-floor services available for churches?",
    answer:
      "Yes. Routine vacuuming, sweeping, and mopping are part of recurring service. Carpet extraction, hard-floor strip and wax, machine scrubbing, and complete window cleaning are quoted and scheduled separately because they need an empty building and drying time. Those projects are usually timed to a quieter week between events."
  },
  {
    question: "How much do church cleaning services in Seattle cost?",
    answer:
      "There is no flat per-building rate. Pricing depends on square footage, the number of restrooms, classrooms and halls in scope, floor and surface types, service frequency, the cleaning window available, event demand, consumables, and the building's current condition. A walkthrough turns those factors into a written scope and a no-obligation quote."
  },
  {
    question: "Can we customize the cleaning checklist for our facility?",
    answer:
      "Yes, and most congregations do. Many buildings already have volunteers handling part of the work, so the checklist is built around what is genuinely needed rather than a standard package. Areas, tasks, and frequencies can be adjusted as your programs and event calendar change through the year."
  },
  {
    question: "How do we request a church cleaning walkthrough?",
    answer:
      `Call ${siteConfig.phoneDisplay} or send the quote form on our contact page with your building type, weekly schedule, and priority areas. We arrange a walkthrough at a time that suits your office hours, then send a written scope and price. We serve Seattle, Renton, Bellevue, Kent, Everett, and surrounding communities.`
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Commercial Cleaning",
    description: "Recurring janitorial service for offices, facilities, and commercial buildings across Seattle.",
    href: "/services/commercial-cleaning",
    ctaLabel: "Explore commercial cleaning services"
  },
  {
    title: "Carpet Cleaning",
    description: "Extraction cleaning for sanctuary aisles, fellowship halls, and carpeted classrooms.",
    href: "/services/carpet-cleaning",
    ctaLabel: "View Seattle carpet cleaning services"
  },
  {
    title: "Strip & Wax",
    description: "Hard-floor restoration for halls, corridors, and entry areas scheduled between events.",
    href: "/services/strip-and-wax",
    ctaLabel: "Learn about hard-floor care"
  },
  {
    title: "Window & Glass Cleaning",
    description: "Interior and exterior window service for worship buildings, entries, and offices.",
    href: "/services/window-glass-cleaning",
    ctaLabel: "See window and glass cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    description: "A detailed building reset before a holiday season or after heavy community use.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "View commercial deep cleaning"
  },
  {
    title: "School Facility Cleaning",
    description: "Programs for attached preschools, religious schools, and larger education campuses.",
    href: "/services/school-facility-cleaning",
    ctaLabel: "Review school facility cleaning services"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// BreadcrumbList is emitted by the shared <Breadcrumbs> component below, so
// it is intentionally not repeated in this graph.
// ─────────────────────────────────────────────────────────────────────────

const worshipCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: `${SITE_URL}${PAGE_PATH}`,
      about: { "@id": `${SITE_URL}/#business` },
      isPartOf: { "@type": "WebSite", url: SITE_URL, name: siteConfig.name }
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PAGE_PATH}#service`,
      name: "Church Cleaning Services Seattle",
      serviceType: "Church Cleaning and Places of Worship Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area church administrators, facility coordinators, and leadership of churches, mosques, synagogues, temples, and faith-based community facilities"
      },
      description:
        "Church cleaning and places of worship cleaning in Seattle for sanctuaries, fellowship halls, nurseries, classrooms, offices, restrooms, entrances, and kitchen areas. Recurring janitorial plans are scheduled around worship services and events, with carpet and hard-floor restoration quoted separately.",
      url: `${SITE_URL}${PAGE_PATH}`,
      mainEntityOfPage: { "@id": `${SITE_URL}${PAGE_PATH}#webpage` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Places of Worship Cleaning Scope",
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
      "@id": `${SITE_URL}${PAGE_PATH}#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function PlacesOfWorshipCleaningPage() {
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
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 to-transparent" aria-hidden />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries We Serve", href: "/industries-we-serve" },
              { label: "Churches & Places of Worship Cleaning", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Church &amp; Religious Facility Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Church Cleaning Services for Places of Worship in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning From The Heart LLC provides church cleaning services in Seattle for churches, mosques,
                synagogues, temples, chapels, and other faith-based facilities. Sanctuaries, fellowship halls,
                nurseries, classrooms, offices, and restrooms are covered under a written scope, on a schedule built
                around worship services, classes, and your event calendar rather than a fixed weekday route.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Church Cleaning Walkthrough
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>

            <div className="card-dark hidden h-fit lg:block">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Church className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">Areas Commonly Included</h2>
              <ul className="mt-3 space-y-2.5">
                {glanceItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-white/40">
                Areas and tasks are confirmed for your building during the walkthrough.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── COMPACT TRUST STRIP ─────────────────────────────────────────── */}
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
      <section className="section-shell-tight bg-white" aria-labelledby="worship-intro-heading">
        <Container>
          <span className="eyebrow">Our Approach</span>
          <ServiceEditorialSplit
            src="/services/church.jpg"
            alt="Interior of a church sanctuary with wooden pews and a central aisle"
            width={1365}
            height={2048}
            sizes="(max-width: 1024px) 100vw, 45vw"
            aspect="fill"
            priority
            imagePosition="right"
            columns="lg:grid-cols-[1.05fr_0.95fr]"
            align="stretch"
            imageClassName="min-h-[22rem] sm:min-h-[28rem] lg:min-h-0"
          >
            <h2 id="worship-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Cleaning Support Built Around Your Worship Schedule
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Places of worship do not run on business hours. A building may be full on a Sunday morning, quiet
              through Monday, busy again for a Wednesday class or a Friday prayer, and booked on Saturday for a
              wedding or a community meal. Cleaning has to fit into the gaps in that calendar, which is why places
              of worship cleaning in Seattle rarely works on a standard weekday route.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A congregation with one weekly gathering needs something different from one running a preschool,
              daily prayer, youth programs, and rented hall space. Shared areas carry the difference. Restrooms,
              entrances, halls, and children&apos;s rooms take the traffic, so those get the consistent attention while
              rooms used once a month sit on a lighter cycle.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Most buildings also have volunteers already handling part of the work. The walkthrough sorts out what
              is genuinely needed from us, what stays with your team, what frequency makes sense, and which items
              belong in a separate project quote. That becomes a written scope before the first visit.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Customized Cleaning Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── FACILITIES SERVED ───────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            center
            eyebrow="Facilities We Serve"
            title="Cleaning for Churches and Other Religious Facilities"
            description="Religious facility cleaning in Seattle covers a wide range of buildings, from a single chapel to a campus with a school, offices, and a rented community hall. The scope changes with the building; the approach does not."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilityTypes.map(({ Icon, title, description }, index) => (
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

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-brand-100 bg-white p-6">
            <h3 className="text-sm font-semibold text-ink">What stays with your own team</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Our work is facility cleaning. Altars, ritual objects, instruments, artwork, and historic or delicate
              finishes are left to the people who care for them, unless a specific task is agreed and written into
              the scope. If your building has areas that require particular handling or restricted access, that is
              settled at the walkthrough rather than assumed.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CLEANING PRIORITIES ─────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading
            eyebrow="What We Focus On"
            title="Cleaning Priorities for Churches and Places of Worship"
            description="A worship building does not wear evenly. These are the areas that decide how the facility feels to a visitor arriving for a service, a class, or an event."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {priorities.map(({ Icon, title, description }, index) => (
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

      {/* ── SCOPE OF WORK ───────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="Areas and Tasks That May Be Included"
            description="Your cleaning plan may include the following areas and tasks, based on the walkthrough, the building's requirements, service frequency, and the agreed scope. Nothing below is assumed for every facility."
          />

          <div className="mt-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Routine cleaning covers the recurring visits. Periodic deep cleaning, carpet extraction, hard-floor
              restoration, and complete window cleaning are quoted as separate scheduled work, and commercial hood
              and exhaust cleaning is not a service we provide.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Discuss Your Facility&apos;s Cleaning Needs
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SCHEDULES ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <SectionHeading
            eyebrow="Scheduling"
            title="Church Cleaning Schedules Built Around Your Facility"
            description="There is no standard cadence for a worship building. The recommended frequency is determined after reviewing your facility, weekly activities, high-traffic areas, and expectations."
          />

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {scheduleFactors.map((factor) => (
              <div key={factor} className="rounded-xl border border-brand-100 bg-surface px-3.5 py-3">
                <span className="text-xs font-medium text-ink">{factor}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-brand-100 bg-surface p-6">
            <p className="text-sm leading-relaxed text-muted">
              Recurring plans and one-time visits are both available. Church janitorial services in Seattle can be
              set up as a daily, weekly, or several-times-weekly routine, or booked as a single deep clean before a
              holiday season. Frequency can also change through the year, since a building running summer programs
              is not the same building in February.
            </p>
          </div>
        </Container>
      </section>

      {/* ── EVENTS ──────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <span className="eyebrow">Events</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Cleaning Support Before and After Church Events
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Events change what a building needs. A wedding fills the entries, restrooms, and hall in a few
                hours. A funeral reception leaves a kitchen and community room in a different state than a normal
                Tuesday. A holiday service brings in visitors who never see the building the rest of the year.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Before-service and after-service cleaning can be scheduled around your confirmed calendar, either as
                part of a recurring plan or as one-time visits. Availability and scope are agreed in advance so
                everyone knows which spaces are covered, when the work happens, and how it is billed.
              </p>
            </div>

            <div className="card">
              <h3 className="text-sm font-semibold text-ink">Commonly scoped event support</h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {eventSupportItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-muted">
                Event visits are booked ahead against your calendar. We do not advertise same-day or around-the-clock
                availability we cannot promise.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FLOOR & CARPET CARE ─────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <SectionHeading
            eyebrow="Floor & Carpet Care"
            title="Floor Care for Worship Buildings"
            description="Carpeted sanctuaries and classrooms, hard-floor halls and corridors, and tiled restrooms and kitchens each need different handling. Routine upkeep and restorative work are scoped and priced separately."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {floorCareTracks.map(({ Icon, label, title, description, items }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="card flex h-full flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">{label}</span>
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

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workPhotos.map(({ src, alt, caption }) => (
              <figure key={src} className="overflow-hidden rounded-2xl border border-brand-100 bg-surface">
                <Image
                  src={src}
                  alt={alt}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <figcaption className="px-4 py-3 text-xs font-medium text-muted">{caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            Floor-care and glass work from school, office, and commercial jobs in the Seattle area. The same crews and
            equipment handle halls, corridors, and entries in worship buildings.
          </p>
          <div className="mt-6">
            <Link
              href="/gallery"
              className="inline-flex items-center text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              See more before &amp; after floor care results
              <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── HOW A QUOTE IS BUILT ────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface scroll-mt-24" id="scope">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
              <ListChecks className="h-6 w-6 text-brand-700" aria-hidden />
            </div>
            <span className="eyebrow mt-5 inline-block">Customized Scope</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How a Church Cleaning Quote Is Built
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We do not publish a flat rate, because a chapel with one weekly service and a campus with a preschool,
              a hall, and a full office wing are different buildings. These are the factors that shape the scope and
              the number.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {scopeFactors.map((factor) => (
              <div key={factor} className="rounded-xl border border-brand-100 bg-white px-3.5 py-3 text-center">
                <span className="text-xs font-medium text-ink">{factor}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Request a Customized Estimate
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ── WHY CLEANING FROM THE HEART LLC ─────────────────────────────── */}
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
                <span className="eyebrow-light">Why Choose Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Cleaning From The Heart LLC
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                Congregations rarely change cleaners over one bad visit. They change over inconsistency.
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
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Church Cleaning Walkthrough
                </Link>
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

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Getting Started"
            description="Four steps from your first call to a building on a steady routine, with the scope, schedule, and pricing agreed in writing before anyone starts cleaning."
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
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
                <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Church Cleaning Services in Seattle and Nearby Communities
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Seattle is our primary service area, and we work with facilities throughout the surrounding King
                County communities listed here. If your building sits just outside that list, call and ask. We will
                tell you honestly whether we can serve it well on the schedule you need.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Check Availability for Your Building
                </Link>
                <Link href="/industries-we-serve" className="cta-secondary">
                  Browse all industries we serve
                </Link>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 rounded-xl border border-brand-100 bg-white px-3.5 py-3 text-sm text-ink"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Church Cleaning Questions</h2>
              <p className="mt-4 text-base text-muted">
                What church administrators, facility coordinators, and committee members ask us most before booking a
                walkthrough.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Have a specific question?</p>
                <p className="mt-1 text-sm text-muted">
                  Call or message us and we&apos;ll answer anything specific to your building, your weekly schedule,
                  or your event calendar.
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
                <details key={faq.question} className="group overflow-hidden rounded-2xl border border-brand-100 bg-surface">
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
          <SectionHeading eyebrow="Related Services" title="Services Congregations Book Alongside Cleaning" />
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
                <p className="eyebrow-light">Get Started</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Request a Church Cleaning Walkthrough in Seattle
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us about your building, your worship schedule, the areas that take the most traffic, and the
                  cleaning priorities your team cares about. We will walk the facility with you and put a practical
                  scope, frequency, and price in writing.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Scope written area by area", "Scheduled around your services", "Free, no-obligation quote"].map(
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(worshipCleaningSchema) }} />
    </>
  );
}
