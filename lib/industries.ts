import type { ServiceSlug } from "@/lib/site";

// ─── INDUSTRIES WE SERVE — central configuration ───────────────────────────
// Single source of truth for:
//   - The "Industries We Serve" nav dropdown (Header.tsx)
//   - The /industries hub page (directory grid)
//   - The compact carousel on /services/commercial-cleaning
//   - Individual /industries/[slug] pages
//
// Schools & Educational Facilities intentionally has hasPage: false — a
// dedicated /services/school-facility-cleaning page already covers this
// topic in lib/site.ts. Building a second page at /industries/schools-...
// would duplicate that page's intent, so every card/link for this industry
// points straight at the existing service page instead.

export type IndustryNavGroup =
  | "Business & Property"
  | "Education & Community"
  | "Customer-Facing Facilities"
  | "Health, Wellness & Industrial";

export interface IndustryPriority {
  title: string;
  description: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryAreaGroup {
  title: string;
  items: string[];
}

export interface IndustryServiceGroup {
  title: string;
  description: string;
  items: string[];
}

export interface IndustryPageContent {
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  h1: string;
  heroIntro: string;
  directAnswer: string;
  priorities: IndustryPriority[];
  /** Optional — property/facility types this page's cleaning plans support. Only shown when provided. */
  propertyTypes?: IndustryPriority[];
  areasIncluded: string[];
  /** Optional — categorized version of areasIncluded (e.g. interior common areas vs. exterior). Renders instead of the flat areasIncluded grid when provided. */
  areaGroups?: IndustryAreaGroup[];
  scheduleNote: string;
  /** Optional — recurring vs. periodic/project cleaning services described for this industry. */
  cleaningServiceGroups?: IndustryServiceGroup[];
  relatedServiceSlugs: ServiceSlug[];
  relatedIndustrySlugs: string[];
  faqs: IndustryFaq[];
}

export interface Industry {
  slug: string;
  name: string;
  navGroup: IndustryNavGroup;
  iconName: string;
  hasPage: boolean;
  /** Resolved link target — an /industries/{slug} route, or an existing /services/{slug} page when hasPage is false. */
  href: string;
  /** ~25-40 words — used on the commercial-cleaning page carousel card. */
  carouselDescription: string;
  carouselLinkLabel: string;
  /** ~35-60 words — used on the /industries hub directory grid card. */
  hubDescription: string;
  page?: IndustryPageContent;
}

export const industryNavGroupOrder: IndustryNavGroup[] = [
  "Business & Property",
  "Education & Community",
  "Customer-Facing Facilities",
  "Health, Wellness & Industrial"
];

export const industries: Industry[] = [
  {
    slug: "offices-commercial-buildings",
    name: "Offices & Commercial Buildings",
    navGroup: "Business & Property",
    iconName: "Building2",
    hasPage: true,
    href: "/industries/offices-commercial-buildings",
    carouselDescription:
      "Workstations, meeting rooms, and shared breakrooms wear differently depending on desk density and daily foot traffic. Office cleaning plans are scheduled before or after business hours so service never competes with meetings or deadlines.",
    carouselLinkLabel: "Explore Office & Commercial Building Cleaning",
    hubDescription:
      "From single-suite offices to multi-floor headquarters, cleaning plans cover workstations, meeting rooms, breakrooms, and shared restrooms. Service is scheduled before or after business hours so cleaning never competes with meetings, calls, or deadlines, and scope adjusts to your office's size and layout.",
    page: {
      metaTitle: "Office & Commercial Building Cleaning in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle offices and commercial buildings — workstations, meeting rooms, breakrooms, and shared restrooms cleaned on a schedule built around your business hours.",
      heroLabel: "OFFICE & COMMERCIAL BUILDING CLEANING",
      h1: "Commercial Cleaning for Offices & Commercial Buildings in Seattle",
      heroIntro:
        "Office cleaning at Cleaning From The Heart LLC is built for how a Seattle workplace actually operates, not a generic checklist. Whether you manage a single-suite office or a multi-floor building, we look at desk density, meeting room turnover, and breakroom traffic before recommending a schedule. Most offices land on weekly or bi-weekly service, timed after hours or before the workday starts. Request a walkthrough and we'll confirm scope and pricing in writing.",
      directAnswer:
        "Cleaning Support Built Around Your Facility means we start with how your office is actually used, not a standard package applied to every suite. A single-tenant office with a handful of desks has different priorities than a multi-floor building with several departments and shared amenities. During your walkthrough, we look at desk count, meeting room frequency, breakroom traffic, and restroom count, then build a written scope around those specifics. Scheduling is set around your business hours from the start, so cleaning happens before the workday begins, after it ends, or during a quiet stretch that works for your team, never in the middle of a meeting or a deadline.",
      priorities: [
        {
          title: "Workstations & Desks",
          description:
            "Desks, keyboards, and shared workstation surfaces accumulate dust and hand contact throughout the day; routine wiping and floor care keep them from becoming a distraction."
        },
        {
          title: "Meeting Rooms",
          description:
            "Conference tables, chairs, and shared electronics get reset between bookings so back-to-back meetings don't inherit the last group's clutter."
        },
        {
          title: "Reception & Lobby Areas",
          description:
            "The first space clients see gets extra attention to glass, flooring, and seating so the office presents well from the moment someone walks in."
        },
        {
          title: "Breakrooms & Kitchenettes",
          description:
            "Shared counters, sinks, and appliance exteriors see heavy daily use and need more frequent attention than a private office."
        },
        {
          title: "Shared Touchpoints",
          description:
            "Door handles, light switches, and shared equipment are treated as priority surfaces rather than an afterthought."
        },
        {
          title: "After-Hours Scheduling",
          description:
            "Cleaning is scheduled before or after business hours so it never interrupts calls, meetings, or focused work."
        }
      ],
      areasIncluded: [
        "Workstations & desks",
        "Conference & meeting rooms",
        "Reception & lobby",
        "Breakrooms & kitchenettes",
        "Restrooms",
        "Hallways & shared corridors",
        "Trash removal",
        "Entrance glass"
      ],
      scheduleNote:
        "Most offices run on weekly or bi-weekly service; higher-density floors or offices with heavier visitor traffic sometimes move to twice-weekly. The right cadence depends on desk count, foot traffic, and how the space is used day to day, confirmed during your walkthrough.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning", "carpet-cleaning"],
      relatedIndustrySlugs: ["property-management", "financial-institutions", "government-public-buildings"],
      faqs: [
        {
          question: "Can office cleaning be scheduled entirely after hours?",
          answer:
            "Yes. Most office accounts are cleaned before opening or after close specifically so cleaning never overlaps with meetings, calls, or focused work."
        },
        {
          question: "Do you clean individual workstations and desks?",
          answer:
            "Desk and workstation surfaces are wiped as part of routine service. Personal items and paperwork are left in place; we clean around what's already on the desk."
        },
        {
          question: "What if our conference rooms are booked back-to-back?",
          answer:
            "We coordinate timing with your office manager so conference rooms are reset between the cleaning visit and your first meeting of the day."
        },
        {
          question: "Do you handle multi-floor or multi-suite office buildings?",
          answer:
            "Yes, from single-suite offices to multi-floor buildings. Scope and staffing are adjusted to match the size and layout of your space."
        },
        {
          question: "How is pricing determined for office cleaning?",
          answer:
            "Pricing depends on square footage, number of workstations, restroom count, and how often you want service. We provide a written quote after a walkthrough."
        }
      ]
    }
  },
  {
    slug: "property-management",
    name: "Property Management",
    navGroup: "Business & Property",
    iconName: "KeyRound",
    hasPage: true,
    href: "/industries/property-management",
    carouselDescription:
      "Common areas, entrances, and stairwells carry traffic from every unit in the building, and turnover schedules rarely wait. Cleaning plans cover shared spaces across single buildings or full portfolios, coordinated with your leasing calendar.",
    carouselLinkLabel: "View Property Management Cleaning",
    hubDescription:
      "Shared lobbies, corridors, stairwells, and leasing offices are maintained across single buildings or full portfolios, with turnover cleaning coordinated around move-out and move-in dates. Multi-property accounts get one consistent point of contact instead of separate arrangements for every address.",
    page: {
      metaTitle: "Commercial Cleaning for Property Managers in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle property managers and building owners — common areas, offices, restrooms, and unit turnovers on a customized recurring schedule. Request a walkthrough.",
      heroLabel: "PROPERTY MANAGEMENT CLEANING",
      h1: "Commercial Cleaning for Property Managers in Seattle",
      heroIntro:
        "Cleaning From The Heart LLC provides commercial cleaning for property managers, building owners, landlords, and commercial property management firms across Seattle. We maintain shared common areas, entrances, and tenant or unit turnovers for office buildings, multi-tenant properties, retail centers, and apartment communities, with cleaning schedules built around your leasing calendar and access requirements. Multi-property portfolios are coordinated through a single point of contact instead of separate arrangements for every address. Request a property walkthrough and we'll confirm scope, schedule, and pricing in writing.",
      directAnswer:
        "Property managers are responsible for keeping shared spaces presentable, coordinating access across multiple tenants or units, and holding a consistent standard whether they oversee one building or a full portfolio. Cleaning From The Heart LLC supports that by treating recurring common-area cleaning and unit or suite turnover cleaning as two related but separately scheduled parts of the same account. Lobbies, corridors, and stairwells go on a recurring weekly schedule that keeps shared spaces presentable for every tenant or resident in the building. Turnover cleaning is scheduled against your actual move-out and move-in dates rather than a fixed weekly slot, so units and suites are ready without gaps in your leasing calendar. For portfolios with more than one address, everything runs through a single point of contact, so you're not re-explaining your standards to a different crew or coordinator for each property.",
      priorities: [
        {
          title: "Common-Area Cleaning",
          description:
            "Lobbies, corridors, and elevator landings carry traffic from every tenant or resident in the building and need consistent attention to stay presentable."
        },
        {
          title: "Building Entrances & Curb Appeal",
          description:
            "Entry glass, door hardware, and walkways are a prospective tenant's first impression when touring the property."
        },
        {
          title: "Leasing & Management Offices",
          description: "Leasing and management offices are kept client-ready for tours, appointments, and move-in day."
        },
        {
          title: "Stairwells & Corridors",
          description:
            "Stairwells and back corridors often go overlooked between unit cleanings but see steady foot traffic and need their own place on the schedule."
        },
        {
          title: "Turnover Coordination",
          description:
            "Unit and suite turnover cleaning is scheduled around move-out and move-in dates so spaces are ready without gaps in your leasing calendar."
        },
        {
          title: "Multi-Property Communication",
          description:
            "Portfolios with more than one address get one consistent point of contact instead of separate conversations for every property."
        }
      ],
      propertyTypes: [
        {
          title: "Multi-Tenant Office Buildings",
          description:
            "Class A, B, and C office buildings with shared lobbies, corridors, and restrooms cleaned to a consistent standard across every tenant floor."
        },
        {
          title: "Mixed-Use Developments",
          description:
            "Ground-floor retail paired with office or residential space above, where common areas serve tenants on different schedules and needs."
        },
        {
          title: "Retail Centers & Strip Malls",
          description:
            "Shared walkways, entrances, and common areas serving multiple retail tenants under one property manager."
        },
        {
          title: "Apartment & Multifamily Communities",
          description:
            "Shared lobbies, corridors, mailrooms, and leasing offices, with unit turnover cleaning coordinated around move-in and move-out dates."
        },
        {
          title: "Professional & Medical Office Suites",
          description:
            "Tenant suites cleaned as part of a building's common-area and suite cleaning plan, using the same general commercial cleaning scope as any other tenant space."
        },
        {
          title: "Commercial Property Portfolios",
          description:
            "Multiple buildings or addresses managed under one account, with consistent scope and a single point of contact across the portfolio."
        }
      ],
      areasIncluded: [
        "Lobbies & common areas",
        "Building entrances",
        "Leasing & management offices",
        "Stairwells & elevator landings",
        "Shared restrooms",
        "Turnover / unit cleaning",
        "Trash & recycling areas",
        "Parking area walkways"
      ],
      areaGroups: [
        {
          title: "Interior Common Areas",
          items: [
            "Lobbies & reception areas",
            "Hallways & corridors",
            "Elevators & elevator landings",
            "Stairwells",
            "Shared restrooms",
            "Break rooms & kitchenettes",
            "Mail & package areas",
            "Leasing & management offices"
          ]
        },
        {
          title: "Tenant & Unit Areas",
          items: [
            "Tenant suites & offices (where included in scope)",
            "Unit turnover cleaning",
            "Interior glass & partitions",
            "Floor care in common and leased spaces",
            "Trash & recycling collection points"
          ]
        },
        {
          title: "Exterior-Facing & Support Areas",
          items: [
            "Building entrances",
            "Sidewalks & walkways",
            "Loading areas",
            "Parking area walkways",
            "Dumpster & waste enclosure areas"
          ]
        }
      ],
      scheduleNote:
        "Common areas are typically cleaned weekly, with higher-traffic lobbies and entrances sometimes moved to twice-weekly service. Turnover cleaning is scheduled against individual move-out and move-in dates rather than a fixed slot, and portfolios with multiple properties can stagger service across a shared weekly calendar coordinated through one point of contact.",
      cleaningServiceGroups: [
        {
          title: "Recurring Common-Area Cleaning",
          description: "Ongoing service that keeps shared spaces consistent week after week.",
          items: [
            "Common-area & lobby cleaning",
            "Restroom cleaning & restocking",
            "Floor care (vacuuming, mopping, and routine floor cleaning)",
            "Trash & recycling collection",
            "Interior glass spot cleaning",
            "Multi-property portfolio scheduling"
          ]
        },
        {
          title: "Turnover & Periodic Cleaning",
          description: "Scheduled around specific dates rather than a fixed weekly visit.",
          items: [
            "Move-in & move-out turnover cleaning",
            "Periodic deep cleaning for common areas",
            "Post-construction & tenant-improvement cleanup",
            "Pressure washing for entrances & walkways",
            "Carpet care for lobbies & shared corridors"
          ]
        }
      ],
      relatedServiceSlugs: ["commercial-cleaning", "commercial-deep-cleaning", "move-in-move-out-cleaning", "pressure-washing"],
      relatedIndustrySlugs: ["offices-commercial-buildings", "retail-stores", "hospitality-properties"],
      faqs: [
        {
          question: "What types of commercial properties do you clean for property managers?",
          answer:
            "We clean multi-tenant office buildings, mixed-use developments, retail centers, apartment and multifamily communities, and professional or medical office suites. Cleaning plans cover shared common areas and, where agreed, individual tenant suites or units."
        },
        {
          question: "Can you clean both common areas and individual tenant suites?",
          answer:
            "Yes. Common-area cleaning and tenant suite or unit cleaning are scoped as separate line items, since they usually run on different schedules. A written scope after the walkthrough spells out exactly which areas are included."
        },
        {
          question: "Can the cleaning schedule be adjusted for different areas of the property?",
          answer:
            "Yes. Lobbies and entrances can run on a different cadence than back-of-house corridors or leasing offices, based on foot traffic and how the space is used."
        },
        {
          question: "Do you offer after-hours or before-hours commercial cleaning?",
          answer:
            "Yes, service is commonly scheduled before or after business hours, or during quieter access windows, so cleaning doesn't interfere with tenants, staff, or leasing appointments."
        },
        {
          question: "Can you support more than one managed property under a single account?",
          answer:
            "Yes. Multi-property and portfolio accounts are common and are coordinated through a single point of contact, so you're not managing separate arrangements or standards for every address."
        },
        {
          question: "What is typically included in a property management cleaning plan?",
          answer:
            "Most plans cover common-area cleaning, restrooms, entrances, and trash and recycling areas on a recurring schedule, plus turnover cleaning scheduled around move-out and move-in dates. Exact scope depends on your property and is confirmed during the walkthrough."
        },
        {
          question: "How is pricing determined for property management cleaning?",
          answer:
            "Pricing depends on square footage, the number of common areas and restrooms, how many properties are included, and your preferred cleaning frequency. We provide a written quote after a walkthrough rather than a flat rate."
        },
        {
          question: "How do we get started with a cleaning plan for our property or portfolio?",
          answer:
            "Request a walkthrough through our contact form or by phone. We'll review your property, confirm scope and schedule, and follow up with a written, no-obligation proposal."
        }
      ]
    }
  },
  {
    slug: "financial-institutions",
    name: "Financial Institutions",
    navGroup: "Business & Property",
    iconName: "Banknote",
    hasPage: true,
    href: "/industries/financial-institutions",
    carouselDescription:
      "Customer-facing counters, waiting areas, and interior glass need a polished, consistent look, while controlled-access areas call for discreet scheduling. Plans are built around your branch hours and security procedures.",
    carouselLinkLabel: "Learn About Financial Institution Cleaning",
    hubDescription:
      "Teller counters, waiting areas, offices, and interior glass are cleaned with a polished, professional standard, while controlled-access and back-office areas are handled according to your branch's security procedures. Scheduling is discreet and coordinated around customer hours.",
    page: {
      metaTitle: "Financial Institution Cleaning in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle banks and credit unions — customer areas, offices, and interior glass cleaned discreetly around your branch hours and security procedures.",
      heroLabel: "FINANCIAL INSTITUTION CLEANING",
      h1: "Commercial Cleaning for Financial Institutions in Seattle",
      heroIntro:
        "Banks and credit unions balance a polished customer-facing presentation with controlled-access back-office areas. Our cleaning plans cover teller surroundings, waiting areas, offices, and interior glass, scheduled discreetly around branch hours and any access or security procedures your location requires. Consistent staffing means the same crew becomes familiar with your layout and access protocols instead of relearning them every visit. Request a walkthrough to confirm scope for your branch or office.",
      directAnswer:
        "Cleaning Support Built Around Your Facility at a bank or credit union means recognizing that not every square foot is treated the same way. Customer-facing counters, waiting seating, and interior glass are cleaned to a visible, polished standard since they shape how customers experience the branch. Private offices, back-office areas, and any vault or controlled-access zones are handled according to whatever access and escort procedures your branch already has in place, confirmed with you before the first visit. Scheduling is set discreetly, most often before opening or after closing, so cleaning never overlaps with customer transactions or staff working at their desks.",
      priorities: [
        {
          title: "Customer-Facing Counters",
          description:
            "Teller counters and customer service areas are kept presentable throughout the business day, not just at opening."
        },
        {
          title: "Offices",
          description:
            "Private and shared offices are cleaned with attention to shared surfaces without disturbing paperwork or workstations."
        },
        {
          title: "Waiting Spaces",
          description: "Customer waiting areas and seating are wiped down and kept tidy for a professional first impression."
        },
        {
          title: "Interior Glass",
          description: "Teller partitions, interior windows, and entry glass are cleaned to a streak-free standard."
        },
        {
          title: "Controlled-Access Areas",
          description:
            "Vaults, back-office areas, and other restricted zones are serviced according to your branch's access and escort procedures."
        },
        {
          title: "Discreet Scheduling",
          description:
            "Service is scheduled before or after hours, or coordinated with staff on-site, to fit your security requirements."
        }
      ],
      areasIncluded: [
        "Customer-facing counters",
        "Private & shared offices",
        "Waiting & seating areas",
        "Interior glass & partitions",
        "Restrooms",
        "Entrances",
        "Break areas",
        "Controlled-access zones (per your protocol)"
      ],
      scheduleNote:
        "Branch locations typically run on weekly service scheduled outside customer hours. Access and escort requirements for controlled areas are confirmed during the initial walkthrough and built into every visit.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning"],
      relatedIndustrySlugs: ["offices-commercial-buildings", "government-public-buildings", "retail-stores"],
      faqs: [
        {
          question: "Can cleaning staff work within our security and access procedures?",
          answer:
            "Yes. Access requirements, escort procedures, and restricted areas are confirmed during the walkthrough and followed on every visit."
        },
        {
          question: "Is service scheduled during or outside customer hours?",
          answer:
            "Most branches prefer service scheduled before opening or after closing to avoid any overlap with customer-facing hours."
        },
        {
          question: "Do you clean teller partitions and interior glass?",
          answer: "Yes, interior glass and partitions are cleaned to a streak-free standard as part of routine service."
        },
        {
          question: "Can the same crew be assigned to our branch every visit?",
          answer:
            "Yes, consistent staffing is standard so your crew becomes familiar with your layout and access procedures over time."
        },
        {
          question: "Do you service multiple branch locations under one account?",
          answer: "Yes, multi-branch accounts are coordinated through a single point of contact with consistent scope across locations."
        }
      ]
    }
  },
  {
    slug: "government-public-buildings",
    name: "Government & Public Buildings",
    navGroup: "Business & Property",
    iconName: "Landmark",
    hasPage: true,
    href: "/industries/government-public-buildings",
    carouselDescription:
      "Public-facing lobbies, administrative offices, and meeting rooms serve a steady flow of visitors and staff. Schedules are built around your building's hours, access rules, and public meeting calendar.",
    carouselLinkLabel: "See Government & Public Building Cleaning",
    hubDescription:
      "Public lobbies, administrative offices, and meeting or hearing rooms are cleaned on a dependable schedule that respects published building hours, access procedures, and public meeting calendars, with restrooms and entrances given extra attention on high-visitor days.",
    page: {
      metaTitle: "Government & Public Building Cleaning in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle government and public buildings — lobbies, offices, and meeting rooms cleaned on a dependable schedule that respects public hours and access rules.",
      heroLabel: "GOVERNMENT & PUBLIC BUILDING CLEANING",
      h1: "Commercial Cleaning for Government & Public Buildings in Seattle",
      heroIntro:
        "Public buildings serve a wide mix of staff, residents, and visitors, often on a published schedule of hours and meetings. We clean public-facing lobbies, administrative offices, meeting rooms, restrooms, and entrances on a dependable schedule, with access and timing coordinated around your facility's operating rules. A consistent crew and written scope keep expectations clear for building managers who answer to their own oversight requirements. Request a walkthrough to discuss your facility's schedule and access procedures.",
      directAnswer:
        "Cleaning Support Built Around Your Facility for a government or public building starts with your published hours and access rules, since those rarely bend. Public-facing lobbies and counters are cleaned to stay presentable throughout open hours, while administrative offices are cleaned on a recurring schedule that doesn't interrupt ongoing casework. Meeting and hearing rooms are reset between sessions rather than left for the next public gathering to inherit. Any sign-in, escort, or security procedures your facility requires are confirmed during the walkthrough and followed on every visit, so building managers aren't left explaining the same requirements more than once.",
      priorities: [
        {
          title: "Public-Facing Spaces",
          description: "Lobbies and public counters see a steady flow of visitors and are kept presentable throughout open hours."
        },
        {
          title: "Administrative Offices",
          description: "Staff offices and workstations are cleaned on a recurring schedule without disrupting ongoing casework."
        },
        {
          title: "Meeting & Hearing Rooms",
          description: "Public meeting spaces are reset between sessions so the room is ready for the next scheduled use."
        },
        {
          title: "Restrooms & Entrances",
          description: "High-traffic restrooms and building entrances get consistent attention given the volume of daily visitors."
        },
        {
          title: "Access Coordination",
          description: "Timing and access are coordinated with building security or facilities staff according to your procedures."
        },
        {
          title: "Dependable Scheduling",
          description: "Service runs on a fixed, dependable schedule that fits published building hours and public meeting calendars."
        }
      ],
      areasIncluded: [
        "Public lobbies & counters",
        "Administrative offices",
        "Meeting & hearing rooms",
        "Restrooms",
        "Entrances & corridors",
        "Break areas",
        "Stairwells",
        "Shared equipment areas"
      ],
      scheduleNote:
        "Most public buildings run on a weekly schedule, with additional attention around public meetings or high-visitor days. Access windows and security sign-in procedures are confirmed during the walkthrough.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning", "pressure-washing"],
      relatedIndustrySlugs: ["offices-commercial-buildings", "financial-institutions", "places-of-worship"],
      faqs: [
        {
          question: "Can you work around public meeting schedules?",
          answer: "Yes, meeting and hearing rooms are cleaned and reset around your published meeting calendar."
        },
        {
          question: "Do you follow building security sign-in procedures?",
          answer: "Yes, our crew follows whatever access, sign-in, or escort procedures your facility requires."
        },
        {
          question: "Can service be scheduled outside public operating hours?",
          answer: "Yes, most public buildings prefer service before opening or after the building closes to the public."
        },
        {
          question: "Do you clean administrative offices separately from public areas?",
          answer:
            "Yes, administrative offices are cleaned on the same recurring schedule as public-facing areas, with scope confirmed during your walkthrough."
        },
        {
          question: "How do you handle high-visitor days like public meetings?",
          answer: "We can adjust restroom and lobby attention around known high-visitor days once we know your meeting calendar."
        }
      ]
    }
  },
  {
    slug: "schools-educational-facilities",
    name: "Schools & Educational Facilities",
    navGroup: "Education & Community",
    iconName: "GraduationCap",
    hasPage: false,
    href: "/services/school-facility-cleaning",
    carouselDescription:
      "Classrooms, hallways, and shared restrooms see heavy daily traffic tied to the school-day schedule. Cleaning is timed before or after school hours so instructional time is never disrupted.",
    carouselLinkLabel: "View School & Facility Cleaning",
    hubDescription:
      "Classrooms, administrative offices, hallways, and restrooms all follow the rhythm of the school day. We clean campuses before or after instructional hours, with attention to high-touch surfaces and shared spaces that see heavy daily use from students and staff alike."
  },
  {
    slug: "places-of-worship",
    name: "Places of Worship",
    navGroup: "Education & Community",
    iconName: "Church",
    hasPage: true,
    href: "/industries/places-of-worship",
    carouselDescription:
      "Worship spaces, seating areas, and community rooms see different traffic patterns depending on service times and events. Cleaning is scheduled around your congregation's calendar, not a fixed weekday routine.",
    carouselLinkLabel: "Explore Cleaning for Places of Worship",
    hubDescription:
      "Worship spaces, seating areas, classrooms, kitchens, and restrooms are cleaned around your service times and event calendar rather than a fixed weekday routine, with added visits available around larger community gatherings.",
    page: {
      metaTitle: "Cleaning Services for Places of Worship in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Cleaning for Seattle-area churches, mosques, synagogues, and worship centers — scheduled around service times and community events, not a fixed weekday routine.",
      heroLabel: "PLACES OF WORSHIP CLEANING",
      h1: "Commercial Cleaning for Places of Worship in Seattle",
      heroIntro:
        "Places of worship have a cleaning rhythm built around service times, weekly programs, and community events rather than a standard business-hours schedule. We clean worship spaces, seating areas, community and classroom rooms, kitchens, entrances, and restrooms on a schedule that respects your calendar. Whether your building sees one weekly service or daily programming, scope and timing are confirmed with your facilities coordinator before service begins. Request a walkthrough to discuss your congregation's schedule.",
      directAnswer:
        "Cleaning Support Built Around Your Facility for a place of worship means the calendar comes first. A congregation with one weekly service has different needs than one running daily programming, youth groups, and rented community space, so we start by mapping out your actual schedule of services and events. Worship spaces and seating are cleaned so they're ready ahead of your main gathering, not on a generic weekday. Community rooms, classrooms, and kitchens used for events are scoped based on how often they're actually in use rather than assumed to need the same attention every week. Additional visits can be added around weddings, funerals, or larger community gatherings once we know they're coming.",
      priorities: [
        {
          title: "Worship Spaces & Seating",
          description: "Sanctuaries and seating areas are cleaned between services so the space is ready for the next gathering."
        },
        {
          title: "Community & Classroom Rooms",
          description:
            "Rooms used for youth programs, classes, or community events are cleaned according to how often they're actually in use."
        },
        {
          title: "Kitchens",
          description: "Shared kitchen spaces used for events and gatherings get attention to counters, sinks, and appliance exteriors."
        },
        {
          title: "Entrances & Lobbies",
          description: "Entryways are kept welcoming for congregants and visitors attending services or events."
        },
        {
          title: "Restrooms",
          description: "Restrooms are serviced around service times and larger community events when traffic is highest."
        },
        {
          title: "Calendar-Based Scheduling",
          description: "Cleaning is scheduled around your service times and event calendar rather than a fixed weekday routine."
        }
      ],
      areasIncluded: [
        "Worship space & seating",
        "Community & classroom rooms",
        "Kitchens",
        "Entrances & lobbies",
        "Restrooms",
        "Offices",
        "Hallways",
        "Event / fellowship spaces"
      ],
      scheduleNote:
        "Scheduling varies more than most facility types since it follows your service times and event calendar. Weekly cleaning ahead of your main service is common, with added visits around larger events.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning"],
      relatedIndustrySlugs: ["government-public-buildings", "schools-educational-facilities", "property-management"],
      faqs: [
        {
          question: "Can cleaning be scheduled around our service times instead of a fixed weekday?",
          answer: "Yes, scheduling is built around your service times and event calendar rather than a standard weekday routine."
        },
        {
          question: "Do you clean classrooms and community rooms used for youth programs?",
          answer: "Yes, these rooms are included in scope and cleaned according to how frequently they're used."
        },
        {
          question: "Can you add extra visits around larger community events?",
          answer: "Yes, additional visits can be scheduled around weddings, funerals, or larger gatherings as needed."
        },
        {
          question: "Do you clean kitchens used for fellowship events?",
          answer:
            "Shared kitchen spaces used for events are included, with attention to counters, sinks, and appliance exteriors."
        },
        {
          question: "Is there a minimum cleaning frequency for a place of worship?",
          answer: "No fixed minimum. Frequency is confirmed based on your service schedule, room usage, and priorities during the walkthrough."
        }
      ]
    }
  },
  {
    slug: "retail-stores",
    name: "Retail Stores",
    navGroup: "Customer-Facing Facilities",
    iconName: "ShoppingBag",
    hasPage: true,
    href: "/industries/retail-stores",
    carouselDescription:
      "Sales floors, fitting rooms, and checkout counters need to be presentation-ready before doors open, without interrupting stocking or merchandising. Cleaning is scheduled outside customer hours to keep the store ready at open.",
    carouselLinkLabel: "Discover Retail Store Cleaning",
    hubDescription:
      "Sales floors, entry glass, fitting rooms, and checkout areas are cleaned before opening or overnight after close, so the store is presentation-ready at open without cleaning crews competing with stocking or merchandising resets.",
    page: {
      metaTitle: "Retail Store Cleaning Services in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle retail stores — sales floors, fitting rooms, and checkout areas cleaned before opening or overnight so your store is ready at open.",
      heroLabel: "RETAIL STORE CLEANING",
      h1: "Commercial Cleaning for Retail Stores in Seattle",
      heroIntro:
        "Retail stores need to look presentation-ready the moment doors open, without cleaning crews getting in the way of stocking or merchandising. We clean sales floors, entry glass, fitting rooms, checkout areas, employee spaces, and restrooms outside customer hours, typically overnight or before opening. Scope is built around your store's layout and traffic patterns, whether it's a single storefront or a multi-location retail account. Request a walkthrough to confirm scope and scheduling for your store.",
      directAnswer:
        "Cleaning Support Built Around Your Facility for a retail store means working entirely around your merchandising and staffing schedule, not just your cleaning needs. Sales floor cleaning is timed for overnight or before opening so it's finished well before the first customer arrives, and never overlaps with overnight stocking crews resetting displays. Fitting rooms, checkout areas, and entry glass get focused attention since they see the heaviest customer contact during the day. For multi-location retail accounts, scope and standards stay consistent across stores, coordinated through a single point of contact instead of a separate conversation for every address.",
      priorities: [
        {
          title: "Sales Floors",
          description:
            "Sales floor flooring and displays are cleaned to be presentation-ready at opening, without disrupting overnight merchandising resets."
        },
        {
          title: "Entry Glass",
          description:
            "Entrance glass and storefront windows are kept streak-free since they're the first thing customers see from outside."
        },
        {
          title: "Fitting Rooms",
          description:
            "Fitting rooms are cleaned and reset as part of each visit, an area that sees constant use during business hours."
        },
        {
          title: "Checkout Areas",
          description: "Checkout counters and queue areas are wiped down given the volume of customer contact they see daily."
        },
        {
          title: "Employee Spaces",
          description: "Breakrooms and stockroom-adjacent employee areas are kept clean separately from the customer-facing floor."
        },
        {
          title: "Before/After-Hours Scheduling",
          description: "Cleaning is scheduled outside store hours so it never overlaps with customers or merchandising resets."
        }
      ],
      areasIncluded: [
        "Sales floor",
        "Entry glass & storefront windows",
        "Fitting rooms",
        "Checkout areas",
        "Employee break areas",
        "Restrooms",
        "Stockroom-adjacent areas",
        "Entrances"
      ],
      scheduleNote:
        "Retail cleaning is almost always scheduled before opening or overnight after close. Frequency depends on foot traffic and store size, from a few nights a week to daily service.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning", "strip-and-wax"],
      relatedIndustrySlugs: ["auto-dealerships", "hospitality-properties", "property-management"],
      faqs: [
        {
          question: "Will cleaning interfere with overnight stocking or merchandising?",
          answer:
            "We coordinate timing with your store manager so cleaning and merchandising crews don't overlap on the same floor at the same time."
        },
        {
          question: "Do you clean fitting rooms between customers?",
          answer:
            "Fitting rooms are cleaned as part of each visit; reset between individual customers during business hours is a staffing decision on your end."
        },
        {
          question: "Can you service multiple retail locations under one account?",
          answer: "Yes, multi-location retail accounts are coordinated through a single point of contact with consistent scope across stores."
        },
        {
          question: "Is cleaning done during store hours or after close?",
          answer:
            "Almost always outside customer hours, either overnight or before opening, so the store is ready for staff and customers at open."
        },
        {
          question: "How is retail cleaning priced?",
          answer:
            "Pricing depends on square footage, foot traffic, and how many nights per week you need service. We confirm scope and pricing after a walkthrough."
        }
      ]
    }
  },
  {
    slug: "auto-dealerships",
    name: "Auto Dealerships",
    navGroup: "Customer-Facing Facilities",
    iconName: "Car",
    hasPage: true,
    href: "/industries/auto-dealerships",
    carouselDescription:
      "Showroom floors and interior glass are under constant customer view, while service waiting rooms and offices need the same high-visibility standard. Plans keep every customer-facing space presentation-ready.",
    carouselLinkLabel: "View Auto Dealership Cleaning",
    hubDescription:
      "Showroom floors, interior glass, sales offices, and service waiting rooms are held to a consistent, high-visibility standard, with daily or multi-weekly attention common for showroom flooring given constant customer traffic.",
    page: {
      metaTitle: "Auto Dealership Cleaning Services in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle auto dealerships — showroom floors, interior glass, and service waiting rooms held to a consistent, high-visibility standard.",
      heroLabel: "AUTO DEALERSHIP CLEANING",
      h1: "Commercial Cleaning for Auto Dealerships in Seattle",
      heroIntro:
        "Dealership showrooms live under constant customer view, and every surface from the showroom floor to the service waiting room reflects on the sale. We clean showroom floors, interior glass, customer lounges, sales offices, reception areas, service waiting rooms, and restrooms to a consistent, high-visibility standard. Scheduling works around your sales floor hours and service department traffic so cleaning supports the customer experience instead of interrupting it. Request a walkthrough to confirm scope for your showroom and service areas.",
      directAnswer:
        "Cleaning Support Built Around Your Facility at a dealership means treating the showroom floor as the highest-visibility surface on the property. Showroom flooring and interior glass are cleaned to a standard that holds up under showroom lighting throughout the day, with daily or multiple-times-weekly visits common given constant customer traffic. The service department waiting room usually sees a different traffic pattern than the showroom, so it can run on its own schedule rather than being lumped in automatically. Sales offices and reception areas are cleaned around appointment traffic, keeping the entire customer-facing footprint, not just the showroom, at the same presentation-ready standard.",
      priorities: [
        {
          title: "Showroom Floors",
          description: "Showroom flooring is kept to a high-visibility shine standard since it's on display under showroom lighting all day."
        },
        {
          title: "Interior Glass",
          description:
            "Showroom glass and interior partitions are cleaned streak-free given how much natural and showroom lighting passes through them."
        },
        {
          title: "Customer Lounges",
          description: "Waiting and lounge areas for customers are kept tidy throughout the day, not just at opening."
        },
        {
          title: "Sales Offices",
          description: "Sales offices are cleaned on a recurring schedule around appointment traffic."
        },
        {
          title: "Service Waiting Rooms",
          description: "Service department waiting areas see different traffic patterns than the showroom and are scheduled accordingly."
        },
        {
          title: "High-Visibility Standard",
          description: "Every customer-facing space is held to the same visible, presentation-ready standard as the showroom floor."
        }
      ],
      areasIncluded: [
        "Showroom floors",
        "Interior glass & partitions",
        "Customer lounges",
        "Sales offices",
        "Service waiting rooms",
        "Restrooms",
        "Reception areas",
        "Employee break areas"
      ],
      scheduleNote:
        "Showroom floors are often cleaned daily or several times a week given constant customer traffic, while offices and back areas may run on a weekly schedule. Exact cadence is confirmed during your walkthrough.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning", "strip-and-wax"],
      relatedIndustrySlugs: ["retail-stores", "hospitality-properties", "warehouses-industrial-facilities"],
      faqs: [
        {
          question: "Can showroom floors be cleaned daily?",
          answer: "Yes, daily or multiple-times-per-week service is common for showroom floors given constant customer traffic and visibility."
        },
        {
          question: "Do you clean the service department waiting room separately from the showroom?",
          answer: "Yes, service waiting rooms often see different traffic patterns than the showroom and can be scheduled on their own cadence."
        },
        {
          question: "Can cleaning be scheduled around sales floor hours?",
          answer: "Yes, timing is coordinated with your sales floor and service department hours so cleaning doesn't interrupt customer visits."
        },
        {
          question: "Do you clean interior showroom glass?",
          answer: "Yes, interior glass and partitions are cleaned to a streak-free standard as part of routine service."
        },
        {
          question: "How is dealership cleaning priced?",
          answer:
            "Pricing depends on showroom square footage, service department size, and how many visits per week you need. We confirm scope after a walkthrough."
        }
      ]
    }
  },
  {
    slug: "hospitality-properties",
    name: "Hospitality Properties",
    navGroup: "Customer-Facing Facilities",
    iconName: "Hotel",
    hasPage: true,
    href: "/industries/hospitality-properties",
    carouselDescription:
      "Lobbies, corridors, and guest-facing common areas carry steady foot traffic throughout the day and evening. Plans are built for properties where guests are present around the clock, not just during business hours.",
    carouselLinkLabel: "Explore Hospitality Property Cleaning",
    hubDescription:
      "Lobbies, corridors, event spaces, and guest-facing common areas are cleaned on a schedule built around occupancy and your booking calendar, since guests move through these spaces at all hours, not just during business hours.",
    page: {
      metaTitle: "Hospitality Property Cleaning in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle hospitality properties — lobbies, corridors, and guest-facing common areas cleaned on a schedule built around occupancy and events.",
      heroLabel: "HOSPITALITY PROPERTY CLEANING",
      h1: "Commercial Cleaning for Hospitality Properties in Seattle",
      heroIntro:
        "Hospitality properties see guests moving through lobbies, corridors, and common areas at all hours, which calls for a different cleaning rhythm than a typical office. We clean lobbies, corridors, event areas, public restrooms, entrances, staff spaces, and guest-facing common areas on a consistent schedule built around your property's occupancy and event calendar. Timing is coordinated so cleaning supports the guest experience instead of getting in the way of it. Request a walkthrough to confirm scope for your property.",
      directAnswer:
        "Cleaning Support Built Around Your Facility at a hospitality property means working around occupancy rather than a fixed business-hours block. Lobbies, corridors, and public restrooms often need daily attention since guests are present around the clock, not just nine to five. Event and meeting spaces are cleaned and reset around your actual booking calendar rather than a generic weekly slot, so a space booked for a morning event is ready before guests arrive. Staff break areas and back-of-house corridors are cleaned separately from guest-facing zones, keeping employee spaces maintained without extra crews crossing through areas guests are actively using.",
      priorities: [
        {
          title: "Lobbies & Corridors",
          description:
            "Guest lobbies and hallways see steady foot traffic throughout the day and need attention that keeps pace with occupancy."
        },
        {
          title: "Event Areas",
          description: "Event and meeting spaces are cleaned and reset around your booking calendar."
        },
        {
          title: "Public Restrooms",
          description: "Guest-facing restrooms are serviced more frequently given continuous use compared to a standard office restroom."
        },
        {
          title: "Entrances",
          description: "Entrances and drop-off areas make the first impression for arriving guests."
        },
        {
          title: "Staff Spaces",
          description: "Employee break areas and back-of-house spaces are cleaned separately from guest-facing zones."
        },
        {
          title: "Guest-Facing Common Areas",
          description:
            "Shared common areas are maintained on a schedule that accounts for steady foot traffic rather than fixed business hours."
        }
      ],
      areasIncluded: [
        "Lobbies & corridors",
        "Event & meeting spaces",
        "Public restrooms",
        "Entrances & drop-off areas",
        "Staff break areas",
        "Guest-facing common areas",
        "Elevator landings",
        "Back-of-house corridors"
      ],
      scheduleNote:
        "Properties with steady occupancy often need daily attention to lobbies and public restrooms, with event spaces cleaned around your booking calendar. Frequency is confirmed based on occupancy and event volume.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning", "carpet-cleaning"],
      relatedIndustrySlugs: ["retail-stores", "fitness-centers", "property-management"],
      faqs: [
        {
          question: "Can cleaning happen around guest occupancy instead of fixed hours?",
          answer: "Yes, schedules are built around your occupancy patterns rather than a fixed business-hours routine."
        },
        {
          question: "Do you clean event and meeting spaces between bookings?",
          answer: "Yes, event areas are cleaned and reset around your booking calendar as part of scope."
        },
        {
          question: "How often are public restrooms serviced?",
          answer: "More frequently than a typical office restroom, given continuous guest use. Exact frequency is confirmed during the walkthrough."
        },
        {
          question: "Can you coordinate with our front desk or property management team?",
          answer: "Yes, we work with whoever manages day-to-day operations to coordinate timing and any property-specific requirements."
        },
        {
          question: "Do you clean staff areas separately from guest-facing spaces?",
          answer:
            "Yes, employee break areas and back-of-house spaces are cleaned separately from lobbies and guest-facing common areas."
        }
      ]
    }
  },
  {
    slug: "restaurants-commercial-kitchens",
    name: "Restaurants & Commercial Kitchens",
    navGroup: "Customer-Facing Facilities",
    iconName: "ChefHat",
    hasPage: false,
    href: "/services/restaurant-kitchen-cleaning",
    carouselDescription:
      "Dining areas, commercial kitchens, and food-preparation surfaces need focused attention to floors, grease-prone areas, and high-touch points. Cleaning plans are scheduled around service hours so food-service operations are never disrupted.",
    carouselLinkLabel: "Explore Restaurant & Kitchen Cleaning",
    hubDescription:
      "Specialized cleaning for dining areas, commercial kitchens, food-preparation surfaces, floors, grease-prone areas, restrooms, and high-touch points. Cleaning plans are tailored around operating hours, food-service environments, and sanitation requirements."
  },
  {
    slug: "fitness-centers",
    name: "Fitness Centers",
    navGroup: "Health, Wellness & Industrial",
    iconName: "Dumbbell",
    hasPage: true,
    href: "/industries/fitness-centers",
    carouselDescription:
      "Equipment touchpoints, locker rooms, and high-traffic flooring see heavy use throughout the day. Plans focus on the shared surfaces members touch most, on a schedule built around your peak hours.",
    carouselLinkLabel: "Learn About Fitness Center Cleaning",
    hubDescription:
      "Equipment touchpoints, locker rooms, restrooms, and high-traffic flooring see heavy daily use across long operating hours. Cleaning is scheduled around your peak hours, with locker rooms and restrooms often serviced daily.",
    page: {
      metaTitle: "Fitness Center Cleaning Services in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle fitness centers and gyms — equipment touchpoints, locker rooms, and restrooms cleaned around your peak operating hours.",
      heroLabel: "FITNESS CENTER CLEANING",
      h1: "Commercial Cleaning for Fitness Centers in Seattle",
      heroIntro:
        "Fitness centers see constant contact with shared equipment, flooring, and locker rooms, often across long operating hours with multiple peak periods a day. We clean exercise areas, equipment touchpoints, locker rooms, restrooms, reception areas, and high-traffic flooring on a schedule built around your peak hours rather than a single daily visit. Consistent attention to shared surfaces supports a cleaner-feeling gym floor between staff wipe-downs. Request a walkthrough to confirm scope and scheduling for your facility.",
      directAnswer:
        "Cleaning Support Built Around Your Facility at a fitness center means recognizing that a single overnight visit isn't enough for a space with multiple daily peak periods. Equipment touchpoints, handles, and shared machine surfaces are treated as priority points given how much hand contact they get throughout the day. Locker rooms and restrooms typically need daily or near-daily attention since they see continuous use tied to member traffic rather than a fixed office schedule. Reception areas and the exercise floor itself round out the scope, scheduled around your busiest hours so cleaning supports the member experience instead of competing with it.",
      priorities: [
        {
          title: "Exercise Areas",
          description: "Open floor space and equipment areas are cleaned with attention to the surfaces members contact most during workouts."
        },
        {
          title: "Equipment Touchpoints",
          description: "Handles, machine surfaces, and shared equipment are treated as priority points given constant hand contact."
        },
        {
          title: "Locker Rooms",
          description: "Locker rooms and changing areas are cleaned with attention to benches, lockers, and floor surfaces."
        },
        {
          title: "Restrooms",
          description: "Restrooms and shower areas see heavy daily use and are scheduled for more frequent attention."
        },
        {
          title: "Reception Areas",
          description: "Front desk and reception areas are kept presentable for members checking in throughout the day."
        },
        {
          title: "High-Traffic Flooring",
          description: "Gym flooring is cleaned to manage the wear and buildup that comes with daily foot traffic and equipment use."
        }
      ],
      areasIncluded: [
        "Exercise floor & equipment areas",
        "Locker rooms",
        "Restrooms & showers",
        "Reception area",
        "Hallways",
        "Employee areas",
        "Entrances",
        "Mirrors & glass partitions"
      ],
      scheduleNote:
        "Fitness centers often need daily or near-daily attention to locker rooms and restrooms given continuous use, with the exercise floor cleaned around your peak hours. Exact frequency is confirmed during the walkthrough.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning"],
      relatedIndustrySlugs: ["healthcare-facilities", "hospitality-properties", "retail-stores"],
      faqs: [
        {
          question: "Can cleaning be scheduled around peak workout hours?",
          answer: "Yes, scheduling is built around your peak hours so cleaning doesn't compete with your busiest times of day."
        },
        {
          question: "Do you clean shared equipment touchpoints?",
          answer: "Yes, handles, machine surfaces, and other shared equipment are included as priority touchpoints in routine service."
        },
        {
          question: "How often are locker rooms and restrooms cleaned?",
          answer: "Often daily or near-daily given continuous use. Exact frequency is confirmed based on your membership volume and hours."
        },
        {
          question: "Can you service a facility with extended or 24-hour access?",
          answer: "Yes, scope and timing are built around your actual operating hours, whichever those are."
        },
        {
          question: "Do you clean mirrors and glass partitions in the workout area?",
          answer: "Yes, mirrors and glass partitions are included as part of routine cleaning."
        }
      ]
    }
  },
  {
    slug: "healthcare-facilities",
    name: "Healthcare Facilities",
    navGroup: "Health, Wellness & Industrial",
    iconName: "HeartPulse",
    hasPage: true,
    href: "/industries/healthcare-facilities",
    carouselDescription:
      "Waiting areas, administrative offices, and restrooms need reliable, consistent attention. Scope covers general commercial cleaning for healthcare-adjacent spaces, confirmed in detail during your walkthrough.",
    carouselLinkLabel: "See Healthcare Facility Cleaning",
    hubDescription:
      "Waiting areas, administrative offices, restrooms, and common spaces are cleaned on a reliable schedule. Scope covers general commercial cleaning only, not medical-grade disinfection or clinical sanitation, with exact boundaries confirmed in writing before service begins.",
    page: {
      metaTitle: "Healthcare Facility Cleaning in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "General commercial cleaning for Seattle healthcare-adjacent facilities — waiting areas, offices, and restrooms cleaned on a reliable schedule, with scope confirmed in writing.",
      heroLabel: "HEALTHCARE FACILITY CLEANING",
      h1: "Commercial Cleaning for Healthcare Facilities in Seattle",
      heroIntro:
        "Healthcare-adjacent facilities need a dependable cleaning partner for their non-clinical spaces. We clean waiting areas, reception spaces, administrative offices, restrooms, and common areas on a reliable recurring schedule. Our scope covers general commercial cleaning, not medical-grade disinfection or clinical sanitation, and exact boundaries are confirmed in writing during your walkthrough so there's no ambiguity about what is and isn't included. Request a walkthrough to discuss your facility's specific scope.",
      directAnswer:
        "Cleaning Support Built Around Your Facility for a healthcare-adjacent facility starts with drawing a clear line around scope. Waiting areas, reception spaces, and administrative offices are cleaned on a reliable recurring schedule, since they see steady traffic from patients, visitors, and staff throughout the day. Restrooms in particular get consistent attention given visitor volume. What we don't do is medical-grade disinfection or clinical sanitation, and any treatment-adjacent common areas are only included when explicitly agreed in writing beforehand. That written scope, confirmed after your walkthrough, is what both sides work from, so there's no ambiguity about where general commercial cleaning ends.",
      priorities: [
        {
          title: "Waiting Areas",
          description: "Patient and visitor waiting areas are kept clean and presentable throughout operating hours."
        },
        {
          title: "Administrative Spaces",
          description: "Front-office and administrative areas are cleaned on a recurring schedule around appointment traffic."
        },
        {
          title: "Restrooms",
          description: "Restrooms receive consistent attention given the volume of daily visitors and patients."
        },
        {
          title: "Touchpoints",
          description: "Door handles, chair arms, and other shared surfaces in common areas are treated as priority points."
        },
        {
          title: "Treatment-Room Support (Where Confirmed)",
          description: "Support cleaning for treatment-adjacent common areas is scoped individually and only where explicitly agreed."
        },
        {
          title: "Facility-Specific Instructions",
          description: "Any facility-specific cleaning instructions or product requirements are documented and followed on every visit."
        }
      ],
      areasIncluded: [
        "Waiting & reception areas",
        "Administrative offices",
        "Restrooms",
        "Common hallways",
        "Break areas",
        "Entrances",
        "Shared touchpoints",
        "Treatment-adjacent support areas (scope confirmed individually)"
      ],
      scheduleNote:
        "Waiting areas and restrooms often benefit from daily or several-times-weekly attention given visitor volume, while administrative offices may run weekly. Scope and frequency are confirmed in writing before service begins.",
      relatedServiceSlugs: ["commercial-cleaning", "window-glass-cleaning"],
      relatedIndustrySlugs: ["fitness-centers", "government-public-buildings", "offices-commercial-buildings"],
      faqs: [
        {
          question: "Do you provide medical-grade disinfection or clinical sanitation?",
          answer:
            "No. Our scope covers general commercial cleaning for non-clinical spaces. Any specialized clinical cleaning needs should be confirmed as excluded during the walkthrough."
        },
        {
          question: "What areas of a healthcare facility do you clean?",
          answer:
            "Typically waiting areas, reception, administrative offices, restrooms, and common hallways. Treatment-adjacent areas are scoped individually and only where explicitly agreed in writing."
        },
        {
          question: "Can cleaning be scheduled around patient appointment hours?",
          answer: "Yes, timing is coordinated around your appointment schedule and highest-traffic periods."
        },
        {
          question: "Do you follow facility-specific product or procedure requirements?",
          answer: "Yes, any specific product requirements or cleaning instructions your facility provides are documented and followed on every visit."
        },
        {
          question: "How is the exact scope defined before service starts?",
          answer: "Scope is confirmed in writing after a walkthrough, so both sides have a clear, documented understanding of what is and isn't included."
        }
      ]
    }
  },
  {
    slug: "warehouses-industrial-facilities",
    name: "Warehouses & Industrial Facilities",
    navGroup: "Health, Wellness & Industrial",
    iconName: "Warehouse",
    hasPage: true,
    href: "/industries/warehouses-industrial-facilities",
    carouselDescription:
      "Offices, employee areas, and entryways inside a warehouse or industrial facility still need consistent cleaning, scheduled around shift changes and safety procedures rather than a typical office day.",
    carouselLinkLabel: "Explore Warehouse & Industrial Cleaning",
    hubDescription:
      "Offices, employee break areas, restrooms, and entryways within industrial sites are cleaned on a schedule coordinated around shift changes and site safety procedures. Scope excludes machinery, chemical handling, and hazardous-material work.",
    page: {
      metaTitle: "Warehouse & Industrial Facility Cleaning in Seattle | Cleaning From The Heart LLC",
      metaDescription:
        "Commercial cleaning for Seattle warehouses and industrial sites — offices, employee areas, and entryways cleaned around shift changes and site safety procedures.",
      heroLabel: "WAREHOUSE & INDUSTRIAL FACILITY CLEANING",
      h1: "Commercial Cleaning for Warehouses & Industrial Facilities in Seattle",
      heroIntro:
        "Warehouses and industrial facilities have office and employee spaces that need the same reliable cleaning as any commercial building, scheduled around shift changes, safety procedures, and site access rules. We clean offices, employee break areas, restrooms, entryways, and hard-surface floors within these facilities. Scope covers general facility cleaning; it does not include machinery, chemical handling, or hazardous-material work. Request a walkthrough to confirm scope and access requirements for your site.",
      directAnswer:
        "Cleaning Support Built Around Your Facility at a warehouse or industrial site means fitting into a shift-based operation, not a standard nine-to-five office. On-site offices are cleaned on a recurring schedule like any commercial office, while employee break areas and restrooms are timed around shift changes so cleaning doesn't collide with a crew rotation. Entryways and mudrooms get attention to manage dirt and debris tracked in from the facility floor, and any site-specific safety or access procedures are confirmed during the walkthrough before the first visit. Scope is limited to general facility cleaning; production areas, machinery, and hazardous-material work stay outside what we offer.",
      priorities: [
        {
          title: "Offices",
          description: "On-site offices within the facility are cleaned on a recurring schedule like any commercial office space."
        },
        {
          title: "Employee Areas",
          description: "Breakrooms and employee gathering areas are kept clean given shift-based use throughout the day."
        },
        {
          title: "Restrooms",
          description: "Restrooms serving warehouse staff are cleaned on a schedule that accounts for shift changes."
        },
        {
          title: "Entryways",
          description: "Entry areas and mudrooms are cleaned to manage dirt and debris tracked in from the facility floor."
        },
        {
          title: "Hard-Surface Floors",
          description: "Non-production hard-surface flooring in offices and common areas is cleaned separately from the warehouse floor itself."
        },
        {
          title: "Safety-Sensitive Scheduling",
          description: "Timing and access are coordinated around your site's safety procedures and shift schedule."
        }
      ],
      areasIncluded: [
        "Offices",
        "Employee break areas",
        "Restrooms",
        "Entryways & mudrooms",
        "Hallways",
        "Reception (if applicable)",
        "Hard-surface flooring in common areas",
        "Shared touchpoints"
      ],
      scheduleNote:
        "Office and employee areas within industrial facilities are typically cleaned weekly, coordinated around shift changes and any site safety procedures. Frequency is confirmed during your walkthrough.",
      relatedServiceSlugs: ["commercial-cleaning", "pressure-washing", "junk-removal"],
      relatedIndustrySlugs: ["auto-dealerships", "property-management", "retail-stores"],
      faqs: [
        {
          question: "Do you clean the warehouse floor or production areas?",
          answer: "No. Scope covers offices, employee areas, restrooms, and entryways, not machinery, production areas, or hazardous-material zones."
        },
        {
          question: "Can cleaning be scheduled around shift changes?",
          answer: "Yes, timing is coordinated around your shift schedule and site access procedures."
        },
        {
          question: "Do your crews follow facility safety procedures?",
          answer: "Yes, any site-specific safety or access procedures are confirmed during the walkthrough and followed on every visit."
        },
        {
          question: "What is excluded from warehouse cleaning scope?",
          answer: "Machinery, chemical handling, and hazardous-material work are excluded. Scope is limited to general office, employee-area, and entryway cleaning."
        },
        {
          question: "Can you service multiple industrial sites under one account?",
          answer: "Yes, multi-site accounts are coordinated through a single point of contact with consistent scope across locations."
        }
      ]
    }
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug && industry.hasPage);
}

export function getIndustryPageSlugs(): string[] {
  return industries.filter((industry) => industry.hasPage).map((industry) => industry.slug);
}

export function getIndustryByAnySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

// 4-step process shown on every individual industry page — generic and
// intentionally identical in structure to the process already used on
// /services/commercial-cleaning, just condensed to four steps.
export const industryProcessSteps = [
  { title: "Discuss Facility Requirements", description: "Tell us about your facility type, size, and priorities so we understand your starting point." },
  { title: "Complete a Property Walkthrough", description: "We walk the property to confirm scope, access, and scheduling requirements in person." },
  { title: "Prepare a Customized Scope & Quote", description: "You receive a written scope of work and pricing specific to your facility, no generic packages." },
  { title: "Begin the Approved Cleaning Schedule", description: "Service begins on the agreed schedule, with the same crew returning visit after visit." }
];
