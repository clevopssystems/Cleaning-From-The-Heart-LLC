import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Phone,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ClipboardList,
  MessageCircle,
  MapPin,
  ShieldCheck,
  ListChecks,
  CalendarClock,
  Sun,
  Moon,
  Snowflake,
  Backpack,
  Users,
  Baby,
  Library,
  Building2,
  Trophy,
  Footprints,
  Droplets,
  CloudRain,
  UserCheck,
  HeartHandshake,
  Repeat,
  Layers
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://cleaningfromtheheartllc.com";

const PAGE_TITLE = "School Cleaning Services Seattle | Cleaning From The Heart";
const PAGE_DESCRIPTION =
  "School and educational facility cleaning in Seattle — classrooms, restrooms, common areas, athletic spaces, daytime support, evening custodial service, and school floor care.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/school-facility-cleaning"
  },
  keywords: [
    "school cleaning services Seattle",
    "educational facility cleaning Seattle",
    "school janitorial services Seattle WA",
    "school custodial services Seattle",
    "classroom cleaning Seattle",
    "campus cleaning Seattle",
    "day porter services for schools",
    "evening custodial cleaning Seattle",
    "school floor care Seattle",
    "athletic facility cleaning Seattle",
    "preschool and daycare cleaning Seattle",
    "summer break school cleaning Seattle"
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/services/school-facility-cleaning`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/gallery/gallery-01.jpeg",
        alt: "Classroom floor care in a Seattle-area school building"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/images/gallery/gallery-01.jpeg"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Daytime campus support and evening custodial options",
  "Classrooms, restrooms, common areas, offices & athletics",
  "Scope, frequency, and staffing set per campus",
  "Direct owner oversight and routine walkthroughs"
];

const trustStripItems = [
  { Icon: CalendarClock, label: "Daytime & evening service options" },
  { Icon: ClipboardList, label: "Written, campus-specific scope" },
  { Icon: MessageCircle, label: "Direct line to the owner" },
  { Icon: MapPin, label: "Greater Seattle, King & Pierce County" }
];

// ─── Daytime vs. evening coverage ─────────────────────────────────────────
const coverageModels = [
  {
    Icon: Sun,
    label: "While the building is occupied",
    title: "Daytime Campus Support",
    intro:
      "A daytime presence handles what cannot wait until the building empties, working around instruction rather than through it.",
    items: [
      "Restroom checks and attention throughout the day",
      "Spill response and urgent cleanup requests",
      "Trash monitoring in cafeterias, corridors, and high-use areas",
      "Entrance, lobby, and reception presentation",
      "Common-area and high-touch-point attention",
      "Restocking approved supplies and consumables",
      "Reporting maintenance observations and safety concerns",
      "Support around school functions already in progress"
    ]
  },
  {
    Icon: Moon,
    label: "After the last bell",
    title: "Evening Custodial Cleaning",
    intro:
      "The evening shift is where the detailed work happens: a structured reset that leaves the campus ready for the next school day.",
    items: [
      "Classroom, office, and faculty-area cleaning",
      "Detailed restroom cleaning and fixture disinfection",
      "Trash and recycling collection and removal",
      "Vacuuming, sweeping, dust mopping, and wet mopping",
      "Surface cleaning and high-touch-point attention",
      "Hallway, stairwell, and entrance care",
      "Locker-room and athletic-area cleaning where included",
      "Final walkthrough before the building is secured"
    ]
  }
];

// ─── What school cleaning covers, grouped by area of the building ──────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Building2",
    title: "Classrooms & Learning Spaces",
    summary: "Desks, shared surfaces, high-touch points, whiteboard trays, floors & waste.",
    intro:
      "Classrooms concentrate the day's traffic: the same desks, door handles, and light switches touched by every group that passes through, plus whatever gets tracked in from outside. Consistent attention here does more for a building's overall condition than anywhere else on campus. Tasks are selected according to the approved scope.",
    tasks: [
      "Empty waste and recycling, replace liners",
      "Dust accessible horizontal surfaces and furniture",
      "Clean included desks, tables, and shared work surfaces",
      "Spot-clean doors, frames, and light switches",
      "Vacuum carpeted areas; sweep and mop hard floors",
      "Address visible floor spots, debris, and whiteboard ledges"
    ]
  },
  {
    iconName: "ShowerHead",
    title: "Restrooms & Locker Rooms",
    summary: "Fixtures, partitions, mirrors, floors, touchpoints & dispenser restocking.",
    intro:
      "Restrooms are the fastest area on a campus to fall behind and the first thing families and staff notice. They follow the same repeatable routine every visit rather than receiving whatever time is left at the end of the shift.",
    tasks: [
      "Clean toilets, urinals, and sinks",
      "Clean mirrors and disinfect fixtures",
      "Wipe partitions, handles, and push plates",
      "Mop floors with attention to grout lines and drain areas",
      "Replace waste liners and address odor sources",
      "Refill approved soap, towel, and tissue dispensers where included"
    ]
  },
  {
    iconName: "Coffee",
    title: "Offices & Faculty Areas",
    summary: "Front office, administrative suites, staff lounges, workrooms & meeting spaces.",
    intro:
      "The front office is a school's public face and the staff lounge is where the team resets. Both are cleaned discreetly around the paperwork, files, and personal items that live there, to the same standard as instructional space.",
    tasks: [
      "Reception counters, waiting seating, and sign-in areas",
      "Desk surface wiping around papers and equipment left in place",
      "Vacuum office floors and empty waste receptacles",
      "Dust accessible surfaces and spot-clean interior glass",
      "Staff lounge counters, tables, sinks, and appliance exteriors",
      "Conference and workroom tables, chairs, and floors"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Hallways, Entrances & Common Areas",
    summary: "Corridors, lobbies, lockers, stairwells, entry glass & drinking fountains.",
    intro:
      "Corridors and entries carry the whole building's foot traffic and set the impression a visitor forms in the first ten seconds. Entry mats, glass, and fountain surfaces get specific attention rather than a pass-through.",
    tasks: [
      "Sweep, dust mop, or wet mop corridors according to surface type",
      "Remove tracked-in soil, grit, and debris",
      "Wipe locker exteriors and bank ends",
      "Spot-clean entrance glass, push bars, and handles",
      "Clean drinking fountains and common-area touchpoints",
      "Stairwell treads, landings, handrails, and entry mat care"
    ]
  },
  {
    iconName: "UtensilsCrossed",
    title: "Cafeterias & Break Areas",
    summary: "Tables, seating, counters, serving-line exteriors, floors & waste stations.",
    intro:
      "Cafeterias turn over hundreds of students in a couple of hours, then get folded back into assemblies and after-school use. Cleaning targets the dropped food and sticky residue that otherwise builds into a floor and odor problem by midweek.",
    tasks: [
      "Wipe table tops, edges, and folding-table frames",
      "Clean bench and chair seating",
      "Clean counters, sinks, and serving-line exteriors",
      "Clean microwaves and drinking fountains where included",
      "Sweep and mop floors, including under tables and along walls",
      "Empty and wipe trash and recycling stations"
    ]
  },
  {
    iconName: "Warehouse",
    title: "Gymnasiums & Athletic Facilities",
    summary: "Gym floors, locker rooms, athletic restrooms, spectator areas & event resets.",
    intro:
      "Athletic spaces run on their own calendar of practices, games, and evening use. They can sit on the recurring route, be scheduled around your activity calendar, or both, depending on how the facility is used.",
    tasks: [
      "Gymnasium floor care according to the approved scope",
      "Locker-room cleaning and waste removal",
      "Athletic restroom cleaning and restocking where included",
      "Bleacher, mat, and equipment-area wiping where accessible",
      "Entrance and spectator-area attention where included",
      "Post-event reset after games, tournaments, and assemblies"
    ]
  },
  {
    iconName: "Layers",
    title: "Floor & Carpet Care",
    summary: "Routine vacuuming and mopping, with machine work quoted as a separate project.",
    intro:
      "Routine floor work happens on every visit. Restorative work needs an empty building and cure time, so it is scoped and quoted separately and usually scheduled into a school break.",
    tasks: [
      "Vacuum traffic lanes, entrances, classrooms, and offices",
      "Sweep, dust mop, wet mop, and spot mop hard surfaces",
      "Spot-remove fresh carpet stains as they appear",
      "Machine scrubbing and burnishing of main corridors (quoted separately)",
      "Carpet extraction and strip-and-wax restoration (quoted separately)",
      "Gymnasium floor maintenance and hardwood refinishing (quoted separately)"
    ]
  },
  {
    iconName: "AppWindow",
    title: "Glass & Detail Cleaning",
    summary: "Entrance and interior glass on the route, with full window service quoted separately.",
    intro:
      "Glass at entrances and interior partitions is spot-cleaned as part of routine service. Complete interior and exterior window cleaning is a separate scheduled service.",
    tasks: [
      "Spot-clean entrance glass and door lites",
      "Spot-clean interior glass and partitions",
      "Dust vents, baseboards, window frames, and blinds on a periodic cycle",
      "Detail high ledges and remove cobwebs",
      "Complete interior window cleaning (quoted separately)",
      "Exterior window cleaning and entrance pressure washing (quoted separately)"
    ]
  }
];

// ─── Practical scenarios where school cleaning carries the most weight ─────
const pressurePoints = [
  {
    Icon: Backpack,
    title: "Daily Classroom Readiness",
    description:
      "Rooms have to be usable the moment the first group walks in. Waste, floors, and shared surfaces are handled on a repeating cycle so teachers are not starting the day by cleaning up."
  },
  {
    Icon: Footprints,
    title: "High-Traffic Corridors & Entrances",
    description:
      "Hallways, lobbies, and stairwells absorb every trip between classes. They show wear and soil faster than any other surface in the building and need attention on the recurring route, not once a month."
  },
  {
    Icon: Droplets,
    title: "Restrooms Through the School Day",
    description:
      "Restroom condition changes by the hour on a busy campus. Daytime checks catch supply and cleanliness issues between the evening cleanings that do the detailed work."
  },
  {
    Icon: Trophy,
    title: "Practices, Games & Tournaments",
    description:
      "Athletic use puts locker rooms, gym floors, restrooms, and spectator areas under load in a short window. Affected spaces are restored so the facility is ready for its next scheduled use."
  },
  {
    Icon: Users,
    title: "Assemblies, Performances & Open Houses",
    description:
      "Events bring families and visitors into parts of the building they rarely see. Entrances, restrooms, and common areas can be scoped ahead of the event and reset afterward."
  },
  {
    Icon: Snowflake,
    title: "Break & Summer Resets",
    description:
      "Winter, spring, and summer breaks are when detail work and floor restoration actually fit. An empty building makes room for projects that cannot happen between a Friday dismissal and a Monday morning."
  }
];

// ─── Facility types ────────────────────────────────────────────────────────
const facilityTypes = [
  {
    Icon: Building2,
    title: "Public K-12 Schools",
    description:
      "Elementary, middle, and high school buildings with classrooms, restrooms, cafeterias, gyms, and administrative wings covered on one coordinated schedule."
  },
  {
    Icon: GraduationCap,
    title: "Private, Charter & Independent Schools",
    description:
      "Campuses that manage their own facilities budget and want a vendor who will scope honestly and communicate directly instead of through a call center."
  },
  {
    Icon: Baby,
    title: "Preschools & Early Learning Centers",
    description:
      "Smaller buildings where floor-level surfaces, play areas, and shared restrooms carry most of the traffic and need consistent daily attention."
  },
  {
    Icon: Library,
    title: "Colleges, Universities & Libraries",
    description:
      "Classroom buildings, lecture rooms, labs, media centers, campus offices, and dormitory common areas on schedules that run later than a typical K-12 day."
  },
  {
    Icon: Users,
    title: "Tutoring, Enrichment & After-School Programs",
    description:
      "Leased suites and program spaces that fill up in the afternoon and need cleaning either before opening or after the last session ends."
  },
  {
    Icon: ClipboardList,
    title: "District Offices & Campus Support Buildings",
    description:
      "Administrative offices, athletic and recreation buildings, and support facilities that sit outside the school-day schedule entirely."
  }
];

// ─── Event & athletic support ─────────────────────────────────────────────
const eventSupportItems = [
  "Basketball games, tournaments, and athletic events",
  "Assemblies, performances, and auditorium use",
  "Graduation ceremonies and end-of-year functions",
  "Parent meetings, conferences, and open houses",
  "Community events and evening facility use",
  "Gymnasium, locker-room, and athletic restroom resets",
  "Entrance, lobby, and spectator-area attention",
  "Pre-event preparation and post-event cleanup"
];

// ─── Floor care: routine vs. project work ─────────────────────────────────
const floorCareTracks = [
  {
    Icon: Repeat,
    label: "Included in recurring service",
    title: "Routine Floor Maintenance",
    description:
      "Handled on the regular schedule across carpeted classrooms and offices, hard-surface corridors, entrances, restrooms, and break areas.",
    items: [
      "Vacuuming traffic lanes, entrances, classrooms, and offices",
      "Sweeping and dust mopping hard surfaces",
      "Wet mopping and spot mopping",
      "Fresh-stain spot attention on carpet",
      "Entry mat and walk-off area care"
    ]
  },
  {
    Icon: Layers,
    label: "Scheduled and quoted separately",
    title: "Periodic & Restorative Floor Care",
    description:
      "Machine work that needs an empty building and cure time. These services are not part of recurring janitorial pricing and are timed to breaks or low-use periods.",
    items: [
      "Carpet extraction in classrooms, libraries, and offices",
      "Machine scrubbing and floor burnishing",
      "Strip-and-wax and scrub-and-recoat restoration",
      "Gymnasium floor maintenance and hardwood refinishing",
      "Interior and exterior window cleaning; entrance pressure washing"
    ]
  }
];

// ─── Seattle weather & entrance care ──────────────────────────────────────
const weatherPoints = [
  "Wet entryways and damp entry mats",
  "Mud, grit, and leaf debris tracked into lobbies",
  "Standing moisture on corridor hard floors",
  "Seasonal walk-off mat and entrance planning"
];

// ─── Scope factors ─────────────────────────────────────────────────────────
const scopeFactors = [
  "Campus square footage",
  "Number & type of buildings",
  "Classroom count",
  "Restroom count & fixtures",
  "Offices & common areas",
  "Athletic facilities",
  "Floor & surface types",
  "Service frequency",
  "Daytime staffing needs",
  "Evening cleaning window",
  "School-year & summer schedules",
  "Event & athletic calendar",
  "Consumables & dispensers",
  "Specialty services included",
  "Access & security procedures",
  "Priority areas & current condition"
];

// ─── Why choose us ─────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: UserCheck,
    title: "Direct Owner Oversight",
    description:
      "Joshua Alexander stays involved in communication, walkthroughs, team support, and corrective follow-through. When something needs attention, you reach the person who can decide what happens next."
  },
  {
    Icon: HeartHandshake,
    title: "Family-Founded, Second Generation",
    description:
      "A locally owned company with more than 30 years of continuous work across the Seattle area, now run by the founder's son. Not a franchise, and not a national chain routing your building through a regional office."
  },
  {
    Icon: ClipboardList,
    title: "Customized Staffing & Scope",
    description:
      "Coverage is built for the campus. Some buildings need a daytime presence plus an evening crew; others are served well by evening service alone. Nothing is packaged before we have walked the building."
  },
  {
    Icon: Users,
    title: "Professional Conduct on Campus",
    description:
      "Staff are expected to work respectfully around students, teachers, and visitors, follow access and key-control procedures, respect restricted areas, and keep disruption to instruction to a minimum."
  },
  {
    Icon: ListChecks,
    title: "Consistent Quality Control",
    description:
      "Task checklists, routine inspections, a direct channel for feedback, and documented follow-up when something needs correcting. Consistency is the part most vendors lose after month three."
  },
  {
    Icon: ShieldCheck,
    title: "Licensed, Insured & Vetted Staff",
    description:
      "Cleaning From The Heart LLC is licensed and insured, and employees are background-checked and trained for professional commercial and institutional environments before they are assigned to a campus."
  }
];

// ─── Training & safety ─────────────────────────────────────────────────────
const trainingPoints = [
  "Role-specific instruction and onsite orientation before service begins",
  "Proper product use and manufacturer directions",
  "Chemical labeling, handling, storage, and Safety Data Sheet awareness",
  "Personal protective equipment and wet-floor signage",
  "Safe equipment operation, inspection, and storage",
  "Cross-contamination awareness and spill response",
  "Key, access, and janitorial-closet security procedures",
  "Reporting unsafe conditions, damage, and restricted-area protocols"
];

// ─── Quality assurance cycle ──────────────────────────────────────────────
const qualitySteps = [
  "Agree on the scope, priority areas, and access procedures",
  "Assign responsibilities between daytime and evening staff",
  "Complete scheduled service against a task checklist",
  "Conduct routine walkthroughs and inspections",
  "Receive feedback directly from your designated contact",
  "Correct the identified issue, then verify and follow up"
];

// ─── Process ───────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Facility Conversation",
    description:
      "A short call about the campus, your school hours, the areas that matter most, what your current arrangement is missing, and where the schedule has to bend around instruction and events."
  },
  {
    number: "02",
    title: "Onsite Walkthrough",
    description:
      "We walk the building with you: classrooms, restrooms, offices, corridors, the cafeteria, athletic spaces, floor types, traffic patterns, and your access and alarm procedures."
  },
  {
    number: "03",
    title: "Customized Scope & Quote",
    description:
      "You get the included areas, service frequency, staffing plan, division of responsibilities, optional specialty services, and pricing in writing before anything is committed."
  },
  {
    number: "04",
    title: "Service Launch & Review",
    description:
      "The assigned team is oriented onsite, service begins on the agreed schedule, and quality is reviewed as the year moves so the scope changes with the campus instead of going stale."
  }
];

// ─── FAQ ───────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is included in school cleaning services?",
    answer:
      "A school cleaning program typically combines classroom and office cleaning, restroom care, waste and recycling removal, high-touch-point attention, hallway and entrance upkeep, and routine floor maintenance, plus athletic areas where they are part of the scope. Restorative work such as carpet extraction, strip and wax, gym floor maintenance, and complete window cleaning is quoted separately. What applies to your campus is documented area by area before the first visit."
  },
  {
    question: "Can cleaning be scheduled after classes end?",
    answer:
      "Yes, and that is how most campuses run. Evening service starts once the building empties and covers classrooms, offices, restrooms, corridors, and athletic spaces without interrupting instruction. Early-morning service before first bell works better for buildings with heavy evening use from athletics, rentals, or community programs. The cleaning window is set with you during the walkthrough."
  },
  {
    question: "Do you provide daytime porter support during school hours?",
    answer:
      "Daytime support is available and scoped per campus. It covers restroom checks, spill response, trash monitoring, entrance and common-area presentation, restocking approved supplies, and reporting maintenance concerns while students and staff are present. Whether your building needs a daytime presence, evening service, or both depends on campus size, traffic, and operating hours, so it is decided during the walkthrough rather than sold as a fixed package."
  },
  {
    question: "Do you clean gymnasiums, locker rooms, and athletic restrooms?",
    answer:
      "Yes, where they are included in the approved scope. Gym floor care follows the surface and the manufacturer's requirements, and locker rooms, athletic restrooms, and spectator areas can sit on the recurring route or be scheduled around your activity calendar. Hardwood gymnasium floor maintenance and refinishing are handled as separate scheduled projects rather than recurring work."
  },
  {
    question: "Can you support school events and athletic programs?",
    answer:
      "Yes. Games, tournaments, assemblies, performances, graduations, conferences, and open houses all create extra demand on restrooms, entrances, common areas, and athletic spaces. Event support is scheduled and scoped according to the facility and your confirmed calendar, so both sides know in advance which spaces are covered, when the work happens, and how it is billed."
  },
  {
    question: "Can the cleaning plan follow our school calendar?",
    answer:
      "That is the point of building it per campus. Frequency, staffing, and priority areas can shift between the academic year and summer operations, and break periods can carry a different scope than a regular school week. Calendar changes, added events, and schedule adjustments are handled through your direct contact rather than a ticket queue."
  },
  {
    question: "Do you clean during summer and school breaks?",
    answer:
      "Yes, and breaks are usually the most productive stretch of the year. With the building empty, work that cannot fit into an evening window becomes possible: detailed classroom cleaning, corridor and classroom floor restoration, carpet extraction, gym floor maintenance, and whole-building preparation before students return. Break and summer work can be part of an ongoing plan or booked on its own."
  },
  {
    question: "Do you clean preschools, private schools, and colleges?",
    answer:
      "Yes. We can build cleaning programs for public and private K-12 schools, charter and independent schools, preschools and early learning centers, tutoring and enrichment programs, colleges and universities, campus offices, libraries, and athletic and recreation buildings. Each gets a scope weighted toward how that building is actually used rather than a template."
  },
  {
    question: "How is a school cleaning quote calculated?",
    answer:
      "There is no flat per-school rate, because a six-room early learning center and a multi-building campus with a gym need very different amounts of time. Pricing comes from square footage, building count, classroom and restroom counts, common and athletic areas, floor types, service frequency, daytime and evening staffing, the school-year and summer schedules, consumables, specialty services, and access requirements. A walkthrough turns those into a written scope and number."
  },
  {
    question: "Are floor care and carpet cleaning available for schools?",
    answer:
      "Yes. Routine vacuuming, sweeping, dust mopping, and wet mopping are part of recurring service. Carpet extraction, machine scrubbing, burnishing, strip and wax, floor restoration, and gymnasium floor maintenance are separate scheduled services quoted on their own, because they need an empty building and cure time. Floor and glass work makes up a meaningful share of our commercial experience."
  },
  {
    question: "Do you provide cleaning supplies and restroom consumables?",
    answer:
      "Labor, supervision, standard cleaning products, and the tools and equipment needed to perform the agreed routine scope are included. Restroom consumables such as soap, paper towels, tissue, and liners are either drawn from your existing supply or added to the scope, depending on what your school or district prefers. That is confirmed during the walkthrough so there is no gap on day one."
  },
  {
    question: "How do you handle a service concern or a missed area?",
    answer:
      "You report it to your direct contact. We review the affected area, communicate with the assigned team, complete the necessary correction, and follow up to confirm the issue has been addressed. Recurring concerns are treated as a scope or training problem rather than a one-time fix, and are raised at the next service review."
  },
  {
    question: "How do your cleaners work around students and staff?",
    answer:
      "Staff assigned to a campus receive site orientation and role-specific instruction covering product use, equipment safety, wet-floor signage, spill response, and cross-contamination awareness. On campus, they follow approved access and key-control procedures, respect restricted areas, keep exits and emergency routes clear, report unsafe conditions, and keep disruption to classes and school activities to a minimum."
  },
  {
    question: "Which Seattle-area communities do you serve?",
    answer:
      "We serve schools, campuses, and educational facilities across Seattle, Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Bothell, Tacoma, and surrounding communities in King and Pierce counties. If your building sits just outside that list, call and ask. We will tell you honestly whether we can serve it well on your schedule."
  }
];

// ─── Related services ──────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Commercial Cleaning",
    description: "Recurring janitorial service for offices, facilities, and commercial buildings.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Strip & Wax",
    description: "Classroom and corridor floor restoration timed to school breaks.",
    href: "/services/strip-and-wax",
    ctaLabel: "See floor stripping & waxing"
  },
  {
    title: "Carpet Cleaning",
    description: "Extraction cleaning for classroom, library, and office carpet.",
    href: "/services/carpet-cleaning",
    ctaLabel: "Explore carpet cleaning"
  },
  {
    title: "Window & Glass Cleaning",
    description: "Interior and exterior window service for school buildings and entrances.",
    href: "/services/window-glass-cleaning",
    ctaLabel: "View window & glass cleaning"
  },
  {
    title: "Pressure Washing",
    description: "Entrances, walkways, and hard exterior surfaces around the campus.",
    href: "/services/pressure-washing",
    ctaLabel: "See pressure washing"
  },
  {
    title: "Commercial Deep Cleaning",
    description: "A detailed reset for a whole building before a term or after heavy use.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "View commercial deep cleaning"
  }
];

// ─── Campus work photos (real jobs from the gallery) ──────────────────────
const workPhotos = [
  {
    src: "/images/gallery/gallery-02.jpeg",
    alt: "Strip and wax floor service in a Seattle-area school classroom",
    caption: "Classroom strip & wax"
  },
  {
    src: "/images/gallery/gallery-11.jpeg",
    alt: "Machine floor scrubbing in a Seattle-area school hallway",
    caption: "Corridor floor scrubbing"
  },
  {
    src: "/images/gallery/gallery-14.jpg",
    alt: "School gymnasium floor refinishing in the Seattle area",
    caption: "Gym floor refinishing"
  },
  {
    src: "/images/gallery/gallery-15.jpg",
    alt: "School gym floor care with a restored hardwood finish",
    caption: "Restored gym floor finish"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────

const schoolCleaningSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/school-facility-cleaning#service`,
      name: "School & Educational Facility Cleaning Seattle",
      serviceType: "School and Educational Facility Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area school administrators, facility managers, districts, campuses, and early learning centers"
      },
      description:
        "School and educational facility cleaning in Seattle for classrooms, restrooms, offices, hallways, cafeterias, gymnasiums, and athletic spaces. Programs combine daytime campus support and evening custodial service on a customized scope, with periodic floor care and restorative work quoted separately.",
      url: `${SITE_URL}/services/school-facility-cleaning`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "School Cleaning Scope",
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
    // NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component below,
    // so it is intentionally not repeated here.
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services/school-facility-cleaning#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function SchoolFacilityCleaningPage() {
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
              { label: "Services", href: "/services" },
              { label: "School & Educational Facility Cleaning" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle School & Campus Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                School &amp; Educational Facility Cleaning in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Cleaning From The Heart LLC builds janitorial programs for schools and educational facilities
                across the Greater Seattle area. Classrooms, restrooms, offices, hallways, common areas, and
                athletic spaces are covered under a scope written for your campus, with daytime support and
                evening custodial service scheduled around how the building is actually used and direct
                oversight from owner Joshua Alexander.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a School Walkthrough
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>

            <div className="card-dark hidden h-fit lg:block">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <GraduationCap className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">School Cleaning at a Glance</h2>
              <ul className="mt-3 space-y-2.5">
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
      <section className="section-shell-tight bg-white" aria-labelledby="school-intro-heading">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[46%_1fr] lg:gap-14">
            <div className="relative order-2 lg:order-1">
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-brand-100 shadow-card lg:max-w-none">
                <Image
                  src="/services/school-cleaning-intro.jpg"
                  alt="Professional cleaning in a school classroom"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  priority
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="eyebrow">What School Cleaning Involves</span>
              <h2 id="school-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                More Than the Same Checklist Every Evening
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                School cleaning is recurring janitorial work for an active educational building. A campus in
                session needs dependable classroom care, restroom attention through the day, waste removal,
                floor maintenance in the corridors and entrances that absorb the most traffic, and a structured
                reset before students return the next morning.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We build each program around the campus instead of a standard route. Building layout and square
                footage, school hours, student and visitor traffic, athletic programs, event calendars, cleaning
                frequency, priority areas, and the approved scope of work all shape what gets cleaned, when it
                happens, and how many people are assigned. That plan is written down before the first visit and
                revisited as the school year changes.
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
            </div>
          </div>
        </Container>
      </section>

      {/* ── DAYTIME VS EVENING COVERAGE ─────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            center
            eyebrow="Built Around the School Day"
            title="Daytime Campus Support and Evening Custodial Cleaning"
            description="Most campuses need two different kinds of coverage: someone available while the building is busy, and a detailed reset after it empties. They can run together or be scoped separately."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {coverageModels.map(({ Icon, label, title, intro, items }, index) => (
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
                    <p className="mt-2 text-sm leading-relaxed text-muted">{intro}</p>
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

          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-brand-100 bg-white p-6">
            <h3 className="text-sm font-semibold text-ink">Staffing is scoped, not standard</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              How many people work your campus, and on which shifts, is decided at the walkthrough. Some
              buildings need a daytime presence plus an evening crew. Others are served well by evening service
              alone, or by a few days a week. Staffing and service schedules are customized around campus size,
              operating hours, daily traffic, event schedules, and the approved scope of work.
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
            title="What Is Included in School & Educational Facility Cleaning?"
            description="The groups below cover a typical school building. Services are selected according to the approved scope, and your actual plan depends on square footage, room counts, floor types, service frequency, and the cleaning window available."
          />

          <div className="mt-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Restorative work such as strip and wax, gym floor maintenance, carpet extraction, complete window
              cleaning, and pressure washing is quoted separately from recurring janitorial service and
              scheduled into breaks or low-use periods.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Discuss Your Campus Cleaning Needs
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHEN SCHOOL CLEANING MATTERS MOST ───────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Where It Counts"
            title="When School Cleaning Matters Most"
            description="A school building does not wear evenly. These are the moments that decide whether a campus feels maintained by Wednesday afternoon."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pressurePoints.map(({ Icon, title, description }, index) => (
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

      {/* ── FACILITY TYPES ──────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading
            eyebrow="Who We Clean For"
            title="Educational Facilities We Serve Across the Seattle Area"
            description="We can build cleaning programs for single-building schools and multi-building campuses alike. The scope changes with the building; the approach does not."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilityTypes.map(({ Icon, title, description }, index) => (
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

      {/* ── ATHLETIC & EVENT SUPPORT ────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
            <div>
              <span className="eyebrow">Athletics & Events</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Support for Games, Assemblies and School Functions
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Campus activity does not stop at dismissal. A home game fills the gym, locker rooms, and
                athletic restrooms in a two-hour window. A performance or open house brings families through
                entrances and common areas they rarely see. Both leave the building in a different condition
                than a normal weekday evening.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Event support is scheduled and scoped according to the facility and your confirmed athletic and
                event calendar, so the affected spaces are prepared beforehand and restored for their next
                scheduled use. Coverage is agreed in advance rather than improvised the morning after.
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
            </div>
          </div>
        </Container>
      </section>

      {/* ── FLOOR CARE ──────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <SectionHeading
            eyebrow="Floor Care"
            title="Floor Care for School Buildings"
            description="Carpeted classrooms and offices, hard-surface corridors, entrances, restrooms, break areas, and gymnasium floors each need different handling. Routine upkeep and restorative work are scoped and priced separately."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {floorCareTracks.map(({ Icon, label, title, description, items }, index) => (
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
          <div className="mt-8">
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

      {/* ── SEATTLE WEATHER & ENTRANCES ─────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
                <CloudRain className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                Seattle Weather and Entrance Care
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                For most of the school year, the biggest variable in a Seattle building is what comes in on
                shoes. Rain, mud, grit, and leaf debris collect at entrances and then travel down the corridors
                on the first passing period. Entrance and walk-off areas get planned attention through the wet
                season rather than being treated as an afterthought.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {weatherPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-ink"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── CUSTOMIZED SCOPE ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white scroll-mt-24" id="scope">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
              <ListChecks className="h-6 w-6 text-brand-700" aria-hidden />
            </div>
            <span className="eyebrow mt-5 inline-block">Customized Scope</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              How a School Cleaning Quote Is Built
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              We do not publish a flat per-school rate, because a six-room early learning center and a
              multi-building campus with a gymnasium and full-service cafeteria are different buildings
              entirely. These are the factors that shape the scope and the number.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {scopeFactors.map((factor) => (
              <div key={factor} className="rounded-xl border border-brand-100 bg-surface px-3.5 py-3 text-center">
                <span className="text-xs font-medium text-ink">{factor}</span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-brand-100 bg-surface p-6 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Request a Customized Estimate
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="relative section-shell overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

        <Container className="relative">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <span className="eyebrow-light">Why Schools Choose Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Schools Choose Cleaning From The Heart
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                The vendor problem in school cleaning is rarely effort. It&apos;s consistency.
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
                  Request a School Walkthrough
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

      {/* ── TRAINING, SAFETY & QUALITY ASSURANCE ────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <SectionHeading
            eyebrow="Standards & Accountability"
            title="Training, Campus Safety and Quality Assurance"
            description="Working inside an occupied school takes more than cleaning ability. Staff have to follow procedures, work safely around students, protect school property, and communicate through the right channel."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="card flex h-full flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                <ShieldCheck className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">Training & Campus Readiness</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Team members assigned to a campus receive role-specific instruction and onsite orientation
                  before service begins, with ongoing coaching as the scope or schedule changes.
                </p>
              </div>
              <ul className="mt-1 grid gap-2">
                {trainingPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card flex h-full flex-col gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                <ListChecks className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink">Quality Assurance & Issue Resolution</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Quality control here is a routine, not software. When a concern is reported, we review the
                  affected area, communicate with the assigned team, complete the necessary correction, and
                  follow up to confirm the issue has been addressed.
                </p>
              </div>
              <ol className="mt-1 grid gap-2">
                {qualitySteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-[11px] font-bold text-brand-700">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How Service Starts at a School"
            description="Four steps from your first call to a campus on a steady routine, with the scope, schedule, and staffing agreed in writing before anyone starts cleaning."
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

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Request a School Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Campus
            </Link>
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">School Cleaning Questions</h2>
              <p className="mt-4 text-base text-muted">
                What administrators, facility managers, and school office staff ask us most before changing
                vendors.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Have a specific question?</p>
                <p className="mt-1 text-sm text-muted">
                  Call or message us and we&apos;ll answer anything specific to your campus, schedule, or
                  district requirements.
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
          <SectionHeading eyebrow="Related Services" title="Services Schools Book Alongside Cleaning" />
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
                <p className="eyebrow-light">School Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Let&apos;s Walk Your School Building
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  A walkthrough is how the plan gets built. We cover the areas to be cleaned, the service
                  frequency, what school-hour support you need versus evening cleaning, your event and athletic
                  calendar, floor-care requirements, access procedures, and which optional services are worth
                  scheduling separately. You get it back in writing.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {[
                    "Scope written area by area",
                    "Daytime & evening options",
                    "Direct owner oversight"
                  ].map((item) => (
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
                    Request a School Walkthrough
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolCleaningSchema) }}
      />
    </>
  );
}
