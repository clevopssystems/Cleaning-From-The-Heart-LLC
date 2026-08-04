export type ServiceSlug =
  | "commercial-cleaning"
  | "carpet-cleaning"
  | "strip-and-wax"
  | "school-facility-cleaning"
  | "window-cleaning"
  | "commercial-window-cleaning"
  | "residential-window-cleaning"
  | "pressure-washing"
  | "junk-removal"
  | "parking-lot-exterior-maintenance"
  | "post-construction-renovation-cleanup"
  | "move-in-move-out-cleaning"
  | "residential-cleaning"
  | "deep-cleaning"
  | "residential-deep-cleaning"
  | "commercial-deep-cleaning"
  | "solar-panel-cleaning"
  | "restaurant-cleaning"
  | "restaurant-kitchen-cleaning";

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  benefits: string[];
  process: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const siteConfig = {
  name: "Cleaning From The Heart LLC",
  phoneDisplay: "(206) 850-8484",
  phoneHref: "tel:+12068508484",
  email: "Cleanfromtheheartllc@gmail.com",
  instagramHref: "https://www.instagram.com/cleaningfromtheheartllc?igsh=cW53ZjdhaTl0Z2x4",
  instagramHandle: "@cleaningfromtheheartllc",
  facebookHref: "https://www.facebook.com/cleaningfromtheheart/",
  facebookHandle: "Cleaning From The Heart",
  tiktokHref: "https://www.tiktok.com/@cleaningfromtheheartllc",
  tiktokHandle: "@cleaningfromtheheartllc",
  address: "PO BOX 135, Renton, WA 98057",
  primaryCta: "Get a Free Quote",
  secondaryCta: "Call Now",
  serviceAreaSummary: "Serving Seattle, Renton, Bellevue, Kent, Everett & Surrounding Areas",
  businessHours: "Mon-Sat: 7 AM - 7 PM"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries-we-serve", label: "Industries We Serve" },
  { href: "/gallery", label: "Results" }
];

export const services: Service[] = [
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    shortDescription:
      "Reliable, scheduled cleaning for offices, retail spaces, and commercial facilities throughout Seattle, delivered consistently by a team you can count on.",
    problem:
      "Irregular service, inconsistent crews, and poor communication make it difficult to maintain a professional environment your clients and team deserve.",
    solution:
      "We provide dependable recurring cleaning plans with detailed checklists, consistent staffing, and direct communication from the team handling your account.",
    benefits: [
      "Consistent weekly or bi-weekly cleaning routines built around your facility",
      "After-hours and low-disruption scheduling to minimize business impact",
      "Focused attention on high-touch surfaces, restrooms, and shared common areas",
      "Flexible scope for offices, storefronts, retail, and mixed-use properties",
      "Detailed cleaning checklists reviewed after each visit",
      "Direct communication, no answering machines and no runaround"
    ],
    process: [
      "Facility walkthrough to assess scope, priorities, and access requirements",
      "Written quote with agreed service frequency, scope, and pricing",
      "Recurring service begins, with check-ins to maintain quality and adjust as needed"
    ],
    seoTitle: "Commercial Cleaning Seattle",
    seoDescription:
      "Professional commercial cleaning in Seattle for offices, retail, and facilities. Dependable scheduling, experienced crew, 30+ years of Seattle experience. Get a quote from Cleaning From The Heart LLC.",
    keywords: [
      "Seattle commercial cleaning",
      "office cleaning Seattle",
      "janitorial services Seattle",
      "facility cleaning Seattle WA",
      "commercial cleaning company Seattle"
    ]
  },
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    shortDescription:
      "Deep extraction carpet cleaning that lifts embedded dirt, spots, and odors from offices, common areas, rental units, and homes across the Seattle area.",
    problem:
      "Carpet collects tracked-in soil, spills, and odor faster than vacuuming can keep up with, so traffic lanes darken and rooms look worn long before the carpet itself is worn out.",
    solution:
      "Our carpet cleaning combines targeted pre-treatment, individual spot treatment, and deep extraction, with the scope built around the carpet's condition, the traffic it takes, and how the building is used.",
    benefits: [
      "Lifts embedded dirt and tracked-in soil that vacuuming leaves behind",
      "Targeted pre-treatment for stubborn spots and ground-in debris",
      "Extra attention on traffic lanes, entrances, and heavily used areas",
      "Commercial and residential carpet, including rentals and turnovers",
      "Helps extend carpet lifespan by reducing the abrasive soil load",
      "Available as a one-time service or as part of a recurring maintenance schedule"
    ],
    process: [
      "Carpet assessment, we evaluate condition, identify stain areas, and discuss priorities",
      "Pre-treatment, deep extraction cleaning, and targeted spot treatment",
      "Final walkthrough and drying guidance to protect your floor investment"
    ],
    seoTitle: "Carpet Cleaning Seattle, WA | Commercial & Residential Service",
    seoDescription:
      "Professional carpet cleaning in Seattle for offices, commercial facilities, rental properties and homes. Request a customized quote from Cleaning From The Heart.",
    keywords: [
      "carpet cleaning Seattle",
      "Seattle carpet cleaning",
      "commercial carpet cleaning Seattle",
      "residential carpet cleaning Seattle",
      "office carpet cleaning Seattle WA",
      "carpet stain removal Seattle"
    ]
  },
  {
    slug: "strip-and-wax",
    title: "Strip & Wax",
    shortDescription:
      "Professional floor stripping and waxing that restores a polished, durable finish to commercial hard floors, protecting your investment and improving first impressions.",
    problem:
      "Old wax buildup, scuffs, and yellowing make commercial floors look neglected and wear through faster than properly maintained surfaces.",
    solution:
      "We strip the old finish down to the floor, neutralize, prep, and apply multiple fresh coats for a clean, protective shine that lasts.",
    benefits: [
      "Fully removes old wax buildup and surface contaminants",
      "Restores a bright, professional appearance that strengthens first impressions",
      "Applies a durable protective finish that resists wear, scuffs, and daily traffic",
      "Improves slip resistance and overall cleanliness of hard floor surfaces",
      "Extends floor lifespan and simplifies ongoing daily maintenance",
      "Suitable for vinyl, tile, and other hard floor types in commercial spaces"
    ],
    process: [
      "Floor assessment, type, condition, square footage, and special requirements",
      "Full strip, neutralize, and surface preparation",
      "Multiple finish coats applied with cure time and care guidance"
    ],
    seoTitle: "Strip and Wax Floor Services in Seattle, WA",
    seoDescription:
      "Commercial strip and wax floor services in Seattle for VCT, vinyl, and tile. Old finish stripped, floors neutralized, and fresh coats applied. After-hours scheduling.",
    keywords: [
      "strip and wax Seattle",
      "floor stripping and waxing Seattle",
      "commercial floor stripping Seattle",
      "floor waxing services Seattle",
      "VCT strip and wax Seattle",
      "scrub and recoat Seattle",
      "floor restoration Seattle WA"
    ]
  },
  {
    slug: "school-facility-cleaning",
    title: "School & Educational Facility Cleaning",
    shortDescription:
      "Specialized cleaning for schools, classrooms, and educational facilities with detail-focused service that supports a healthy learning environment.",
    problem:
      "Schools see heavy daily traffic, high-touch surfaces, and strict sanitation demands that standard cleaning routines often fail to meet consistently.",
    solution:
      "We provide structured school cleaning plans for classrooms, offices, hallways, restrooms, and common areas with reliable schedules and quality checks.",
    benefits: [
      "Thorough cleaning of high-touch classroom and common-area surfaces",
      "Restroom sanitation focused on hygiene, odor control, and consistency",
      "Flexible service timing before, after, or outside school hours",
      "Support for administrative offices, staff rooms, and shared spaces",
      "Reliable routines that reduce disruption to daily school operations",
      "Clear communication and accountability from a dedicated team"
    ],
    process: [
      "Facility walkthrough to review building layout, priorities, and schedule windows",
      "Customized scope for classrooms, hallways, offices, restrooms, and common areas",
      "Recurring service with check-ins to maintain quality and adapt over time"
    ],
    seoTitle: "School & Educational Facility Cleaning in Seattle, WA",
    seoDescription:
      "Professional school and educational facility cleaning in Seattle. Reliable service for classrooms, offices, restrooms, and common areas.",
    keywords: [
      "school cleaning Seattle",
      "educational facility cleaning Seattle",
      "classroom cleaning Seattle",
      "school janitorial services Seattle WA",
      "campus cleaning Seattle"
    ]
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortDescription:
      "Interior and exterior window cleaning for Seattle-area homes, offices, storefronts, and managed properties, available as a one-time service or on a recurring schedule.",
    problem:
      "Seattle glass takes rain spotting, pollen, road film, and fingerprints faster than most owners expect, and the sills, frames, and edges around the glass are the part that never gets touched.",
    solution:
      "We clean glass inside, outside, or both, with a detail pass on accessible frames, sills, and edges, and the scope written around your property, its access, and how the windows are reached.",
    benefits: [
      "Interior glass, exterior glass, or complete inside-and-out service",
      "Entry-door glass, patio-door glass, and interior glass partitions",
      "Detail pass on accessible frames, sills, and glass edges",
      "Water-fed pole work for reachable exterior glass above ground level",
      "Separate residential and commercial service pages and scopes",
      "One-time seasonal cleaning or a recurring maintenance schedule"
    ],
    process: [
      "Share your property type, window count, and whether you want interior, exterior, or both",
      "We confirm scope, access, and pricing in writing before anything is booked",
      "Glass is cleaned on the agreed date, with a final pass over frames, sills, and edges"
    ],
    seoTitle: "Window Cleaning Services Seattle, WA",
    seoDescription:
      "Professional window cleaning in Seattle for homes, offices, storefronts, and managed properties. Compare residential and commercial service and request a free quote.",
    keywords: [
      "window cleaning Seattle",
      "window cleaning services Seattle",
      "professional window cleaners Seattle",
      "window washing Seattle",
      "window cleaning company Seattle",
      "interior and exterior window cleaning Seattle"
    ]
  },
  {
    slug: "commercial-window-cleaning",
    title: "Commercial Window Cleaning",
    shortDescription:
      "Window and glass cleaning for Seattle offices, storefronts, retail spaces, restaurants, schools, and managed properties, scheduled around how the building operates.",
    problem:
      "Customer-facing glass is the first thing anyone judges a business on, and entry doors, display windows, and lobby glass pick up handprints and street film faster than any other surface in the building.",
    solution:
      "We clean storefront, entry, lobby, and reachable exterior glass on a written scope and a frequency chosen from your foot traffic, exposure, and appearance standards.",
    benefits: [
      "Storefront glass, display windows, and street-facing panes",
      "Entry doors, push plates, lobby glass, and interior partitions",
      "Reachable exterior glass at ground and low-rise levels",
      "Recurring weekly through quarterly schedules, or one-time service",
      "Scheduling around opening hours and building access requirements",
      "Can be combined with commercial cleaning on a single plan"
    ],
    process: [
      "Property walkthrough covering glass inventory, access, and reachability",
      "Written scope and quote with the agreed frequency and service window",
      "Scheduled service, with a review pass and scope adjusted as the site changes"
    ],
    seoTitle: "Commercial Window Cleaning Seattle | Business Window Washing",
    seoDescription:
      "Commercial window cleaning in Seattle for offices, storefronts, retail spaces, restaurants, schools, and managed properties. Recurring or one-time service, quoted per property.",
    keywords: [
      "commercial window cleaning Seattle",
      "storefront window cleaning Seattle",
      "office window cleaning Seattle",
      "business window washing Seattle",
      "commercial glass cleaning Seattle",
      "property management window cleaning Seattle",
      "recurring commercial window cleaning"
    ]
  },
  {
    slug: "residential-window-cleaning",
    title: "Residential Window Cleaning",
    shortDescription:
      "House window cleaning for Seattle-area homes, condos, townhomes, and apartments, inside, outside, or both, with accessible frames, sills, and glass doors included.",
    problem:
      "Home windows collect fingerprints and dust on the inside and rain spotting, pollen, and cobwebs on the outside, and the upper-floor panes are the ones most households give up on entirely.",
    solution:
      "We clean interior and exterior house glass, reach upper-floor exterior panes from the ground with a water-fed pole where the property allows, and detail the accessible frames and sills as part of the visit.",
    benefits: [
      "Interior glass, exterior glass, or complete inside-and-out service",
      "Patio-door, slider, and French-door glass",
      "Accessible frame and sill wiping included with the glass",
      "Upper-floor exterior panes reached from the ground where access allows",
      "Cobweb clearing around reachable exterior window areas",
      "Screen and track detailing available as add-ons, confirmed before booking"
    ],
    process: [
      "Tell us your home type, rough window count, and whether you want inside, outside, or both",
      "We confirm access, optional detail work, and a written quote with no obligation",
      "Your windows are cleaned on the agreed date and checked before we leave"
    ],
    seoTitle: "Residential Window Cleaning Seattle | House Window Washing",
    seoDescription:
      "Residential window cleaning in Seattle for houses, condos, townhomes, and apartments. Choose interior, exterior, or complete inside-and-out service. Free quote.",
    keywords: [
      "residential window cleaning Seattle",
      "house window cleaning Seattle",
      "home window cleaning services Seattle",
      "window washing for homes Seattle",
      "condo window cleaning Seattle",
      "townhouse window cleaning Seattle",
      "inside and outside window cleaning"
    ]
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    shortDescription:
      "Commercial pressure washing to remove dirt, buildup, and stains from exterior surfaces and restore a cleaner, safer appearance.",
    problem:
      "Exterior concrete, siding, and walkways collect grime, algae, and stains that make properties look worn and can create safety concerns.",
    solution:
      "We provide targeted pressure washing for high-traffic exterior surfaces to lift buildup and improve curb appeal without disrupting operations.",
    benefits: [
      "Removes dirt, algae, and grime from concrete and hard surfaces",
      "Improves property appearance and overall first impression",
      "Helps reduce slippery buildup in exterior walk areas",
      "Ideal for entrances, sidewalks, loading zones, and shared exteriors",
      "Flexible one-time or recurring maintenance scheduling",
      "Service coordinated around weather and business traffic patterns"
    ],
    process: [
      "Site assessment for surface type, buildup level, and water access",
      "Pre-treatment and pressure washing of approved exterior surfaces",
      "Final rinse and visual review of cleaned areas"
    ],
    seoTitle: "Pressure Washing Seattle",
    seoDescription:
      "Pressure washing in Seattle for homes, walkways, exterior surfaces, properties, and commercial spaces. Request a free quote today.",
    keywords: [
      "pressure washing Seattle",
      "commercial pressure washing Seattle",
      "sidewalk pressure washing Seattle",
      "building exterior cleaning Seattle",
      "power washing Seattle WA"
    ]
  },
  {
    slug: "junk-removal",
    title: "Junk Removal",
    shortDescription:
      "Fast, professional junk removal for offices and commercial properties to clear out unwanted items and reclaim usable space.",
    problem:
      "Old furniture, equipment, and unwanted materials pile up quickly and create clutter, inefficiency, and an unprofessional environment.",
    solution:
      "Our team removes non-hazardous junk from your property efficiently so your space is cleaner, safer, and ready for productive use.",
    benefits: [
      "Clears office furniture, non-hazardous debris, and unwanted items",
      "Creates more usable space in storage areas and work zones",
      "Reduces clutter that affects workflow and presentation",
      "Supports cleanouts during transitions and facility updates",
      "Prompt scheduling with straightforward communication",
      "Responsible disposal practices whenever applicable"
    ],
    process: [
      "On-site review of item volume, access, and removal scope",
      "Scheduled pickup and efficient removal by our team",
      "Final walkthrough to confirm space is cleared as expected"
    ],
    seoTitle: "Commercial Junk Removal in Seattle, WA",
    seoDescription:
      "Commercial junk removal in Seattle for offices and properties. Clear unwanted items quickly and restore clean, usable space.",
    keywords: [
      "junk removal Seattle",
      "commercial junk removal Seattle",
      "office cleanout Seattle",
      "property junk hauling Seattle",
      "business junk pickup Seattle WA"
    ]
  },
  {
    slug: "parking-lot-exterior-maintenance",
    title: "Parking Lot & Exterior Maintenance",
    shortDescription:
      "Exterior upkeep for parking lots and property fronts to keep your facility clean, safe, and professional from the curb inward.",
    problem:
      "Parking areas and exteriors collect litter, dirt, and debris quickly, creating a poor first impression and avoidable maintenance issues.",
    solution:
      "We provide routine exterior maintenance support for lots, entry areas, and perimeter zones to keep your property consistently presentable.",
    benefits: [
      "Cleaner parking areas, walkways, and building approaches",
      "Helps maintain a safer, more professional customer arrival experience",
      "Supports ongoing property presentation standards",
      "Flexible service frequency based on traffic and site conditions",
      "Complements interior cleaning programs for full property care",
      "Reliable communication and scope adjustments as needed"
    ],
    process: [
      "Property assessment to define maintenance zones and service cadence",
      "Scheduled exterior maintenance of approved lot and perimeter areas",
      "Routine quality checks with updates and scope refinements"
    ],
    seoTitle: "Parking Lot & Exterior Maintenance in Seattle, WA",
    seoDescription:
      "Parking lot and exterior maintenance services in Seattle for cleaner, safer, and more professional commercial properties.",
    keywords: [
      "parking lot cleaning Seattle",
      "exterior maintenance Seattle",
      "commercial exterior cleaning Seattle",
      "property maintenance Seattle WA",
      "parking area upkeep Seattle"
    ]
  },
  {
    slug: "post-construction-renovation-cleanup",
    title: "Post-Construction & Renovation Cleanup",
    shortDescription:
      "Detailed post-construction and renovation cleanup that removes dust, debris, and residue so your space is ready for handoff or occupancy.",
    problem:
      "Construction and renovation projects leave fine dust, debris, and residue throughout the property, delaying move-in readiness and final presentation.",
    solution:
      "We perform detailed cleanup across floors, surfaces, fixtures, and high-touch points so newly completed spaces are clean, safe, and presentable.",
    benefits: [
      "Removes construction dust and debris from key surfaces and zones",
      "Detailed cleaning of floors, fixtures, and high-touch areas",
      "Supports final turnover readiness for owners and tenants",
      "Improves first impression for handoff, opening, or occupancy",
      "Flexible scheduling around project timelines",
      "Works for office build-outs, remodels, and commercial renovations"
    ],
    process: [
      "Project walkthrough to define cleanup scope, access, and deadlines",
      "Targeted dust, debris, and residue removal throughout specified areas",
      "Final detail pass and walkthrough for turnover readiness"
    ],
    seoTitle: "Post-Construction Cleanup in Seattle, WA",
    seoDescription:
      "Post-construction and renovation cleanup in Seattle for offices and commercial spaces. Remove dust and debris and prepare for occupancy.",
    keywords: [
      "post construction cleaning Seattle",
      "renovation cleanup Seattle",
      "construction dust cleanup Seattle",
      "commercial post-construction cleanup Seattle WA",
      "final clean Seattle"
    ]
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    shortDescription:
      "Detailed one-time cleaning for apartments, houses, rentals, offices, and commercial suites that are changing occupants, timed around movers, walkthroughs, and key handovers.",
    problem:
      "An empty property shows everything the furniture was hiding, and the cleaning has to fit into a moving timeline set by a lease end, a closing, or a turnover date.",
    solution:
      "We provide detailed move-in and move-out cleaning for homes, rental units, and commercial spaces, with the scope built around the property's condition and the date it has to be finished by.",
    benefits: [
      "Room-by-room cleaning for vacant homes, apartments, and rental units",
      "Kitchens, bathrooms, storage, baseboards, and floors as the priority areas",
      "Appliance interiors, cabinet interiors, and window work available as add-ons",
      "Support for renters, homeowners, landlords, property managers, and realtors",
      "Commercial move-outs, tenant handovers, and new-occupancy cleaning",
      "Scheduling coordinated with movers, repairs, and inspection deadlines"
    ],
    process: [
      "Share the property type, size, condition, and the date it needs to be finished",
      "We confirm the scope in writing, including any optional add-on work",
      "The property is cleaned area by area against the agreed scope"
    ],
    seoTitle: "Move-In & Move-Out Cleaning Seattle",
    seoDescription:
      "Move-in and move-out cleaning in Seattle for apartments, homes, rentals, offices, and commercial properties. Request a customized quote.",
    keywords: [
      "move out cleaning Seattle",
      "move in cleaning Seattle",
      "apartment move out cleaning Seattle",
      "tenant turnover cleaning Seattle",
      "commercial move out cleaning Seattle"
    ]
  },
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    shortDescription:
      "Professional home cleaning for Seattle-area homeowners, renters, and property managers. Full home cleaning, deep cleaning, move-in/move-out, and more.",
    problem:
      "Keeping a home consistently clean takes time most households simply don't have. Routine cleaning also doesn't address built-up grime or overlooked areas.",
    solution:
      "We provide thorough residential cleaning for homes, apartments, and rental properties across the Seattle area, done with care and a written checklist every visit.",
    benefits: [
      "Full home cleaning from top to bottom",
      "Detailed kitchen and bathroom cleaning",
      "Floor care, vacuuming, and mopping throughout",
      "Baseboard, surface, and fixture cleaning",
      "Move-in and move-out cleaning for rentals and condos",
      "Flexible scheduling to fit busy households",
      "Written cleaning checklist reviewed on every visit",
      "Service for homeowners, renters, and property managers"
    ],
    process: [
      "Share your home size, location, and cleaning priorities so we can confirm scope",
      "We confirm scheduling and pricing with no obligation",
      "Your home is cleaned thoroughly on the agreed date"
    ],
    seoTitle: "Residential Cleaning Seattle",
    seoDescription:
      "Residential cleaning in Seattle for homes, apartments, rentals, and move-outs. Full home, deep, carpet, window, and floor care services.",
    keywords: [
      "residential cleaning Seattle",
      "home cleaning Seattle",
      "house cleaning Seattle WA",
      "apartment cleaning Seattle",
      "move in out cleaning Seattle"
    ]
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    shortDescription:
      "Detailed, top-to-bottom cleaning for homes and businesses that need more than routine maintenance. Choose residential deep cleaning for your home or commercial deep cleaning for your business.",
    problem:
      "Routine cleaning maintains a space, but doesn't address built-up grime, overlooked corners, or surfaces that need detailed work to get back to a clean baseline.",
    solution:
      "We provide dedicated residential and commercial deep cleaning plans, each scoped to how homes and facilities actually get used, rather than a single generic checklist.",
    benefits: [
      "Separate residential and commercial deep cleaning plans",
      "Scope customized to the property's size, condition, and priorities",
      "Ideal for move-ins, seasonal resets, and neglected areas",
      "Available before starting a recurring cleaning schedule",
      "Written checklist confirmed before service begins",
      "Available for homes, apartments, rentals, offices, and facilities"
    ],
    process: [
      "Tell us about your property and current condition",
      "We confirm a customized scope and schedule a date that works for you",
      "Deep cleaning is completed from top to bottom against the agreed scope"
    ],
    seoTitle: "Deep Cleaning Seattle | Residential & Commercial",
    seoDescription:
      "Deep cleaning in Seattle for homes and businesses. Compare residential and commercial deep cleaning and request a free, customized quote.",
    keywords: [
      "deep cleaning Seattle",
      "deep house cleaning Seattle",
      "commercial deep cleaning Seattle",
      "detailed cleaning service Seattle",
      "thorough cleaning service Seattle"
    ]
  },
  {
    slug: "residential-deep-cleaning",
    title: "Residential Deep Cleaning",
    shortDescription:
      "A more thorough, top-to-bottom cleaning for houses, apartments, condos, and townhomes that need more attention than routine upkeep, ideal for move-ins, move-outs, and seasonal resets.",
    problem:
      "Routine cleaning maintains a home that's already in kept-up condition, but it doesn't address built-up grime, overlooked corners, or the detailed attention a home needs after a period without professional cleaning.",
    solution:
      "We provide residential deep cleaning for kitchens, bathrooms, bedrooms, living areas, baseboards, and high-touch surfaces, with the scope confirmed to your home's size, condition, and priorities before we start.",
    benefits: [
      "Detailed kitchen and bathroom cleaning, including fixtures and tile",
      "Baseboard, trim, and door-handle attention throughout the home",
      "Suited to houses, apartments, condos, and townhomes",
      "Ideal for move-ins, move-outs, and seasonal resets",
      "Available before starting a recurring residential cleaning schedule",
      "Scope confirmed in writing before service begins"
    ],
    process: [
      "Tell us about your home's size, condition, and priorities",
      "We confirm a customized scope and schedule a date that works for you",
      "Your home is deep cleaned from top to bottom against the agreed scope"
    ],
    seoTitle: "Residential Deep Cleaning Seattle",
    seoDescription:
      "Residential deep cleaning in Seattle for houses, apartments, condos, and townhomes. Detailed home cleaning with a scope customized to your property.",
    keywords: [
      "residential deep cleaning Seattle",
      "house deep cleaning Seattle",
      "home deep cleaning services",
      "apartment deep cleaning Seattle",
      "detailed home cleaning Seattle"
    ]
  },
  {
    slug: "commercial-deep-cleaning",
    title: "Commercial Deep Cleaning",
    shortDescription:
      "A more thorough, periodic cleaning for offices, schools, retail spaces, and facilities that need more attention than routine janitorial service, ideal before recurring service begins or after heavy use.",
    problem:
      "Routine janitorial service maintains a facility day to day, but it doesn't address buildup, overlooked areas, or the detailed attention a facility needs after heavy use or a period without professional cleaning.",
    solution:
      "We provide commercial deep cleaning for workspaces, restrooms, break rooms, floors, and high-touch surfaces, with the scope built around your facility type and agreed service plan before we start.",
    benefits: [
      "Detailed attention to workspaces, restrooms, and break rooms",
      "Floor and high-touch surface attention beyond routine janitorial service",
      "Suited to offices, schools, retail spaces, and commercial facilities",
      "Available before recurring janitorial service begins",
      "Scheduling coordinated around business hours and access requirements",
      "Scope confirmed in writing before service begins"
    ],
    process: [
      "Tell us about your facility and current condition",
      "We confirm a customized scope and schedule around your operations",
      "Your facility is deep cleaned against the agreed scope, area by area"
    ],
    seoTitle: "Commercial Deep Cleaning Seattle",
    seoDescription:
      "Commercial deep cleaning in Seattle for offices, schools, retail spaces, and facilities. Detailed cleaning with a scope customized to your business.",
    keywords: [
      "commercial deep cleaning Seattle",
      "business deep cleaning Seattle",
      "office deep cleaning services",
      "facility deep cleaning Seattle",
      "periodic deep cleaning for businesses"
    ]
  },
  {
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    shortDescription:
      "Exterior solar panel cleaning for homeowners and property owners in the Seattle area, removing accumulated dust, pollen, debris, and outdoor buildup from panel surfaces.",
    problem:
      "Solar panels and other exterior surfaces accumulate dust, pollen, leaves, and bird droppings over time, leaving surfaces visibly dirty and in need of routine maintenance.",
    solution:
      "We provide careful exterior cleaning for solar panels, helping Seattle-area homeowners keep panel surfaces clean and properly maintained.",
    benefits: [
      "Removes dust, pollen, leaves, and outdoor debris from panel surfaces",
      "Careful cleaning to protect glass and frame surfaces",
      "Available for residential and commercial properties",
      "Service pairs naturally with window and pressure washing",
      "Available for rooftop and ground-mounted panel arrays",
      "Serving Seattle, Renton, Bellevue, Kent, and surrounding areas",
      "Free quote available for your property and panel count",
      "One-time and recurring maintenance scheduling available"
    ],
    process: [
      "Contact us with your panel count, location, and access details",
      "We confirm scope, safety considerations, and scheduling",
      "Panels are cleaned carefully on the agreed date"
    ],
    seoTitle: "Solar Panel Cleaning Seattle",
    seoDescription:
      "Solar panel cleaning in Seattle and nearby areas. Careful exterior cleaning for dirt, pollen, leaves, and outdoor buildup.",
    keywords: [
      "solar panel cleaning Seattle",
      "solar panel cleaning Washington",
      "residential solar panel cleaning Seattle",
      "solar panel maintenance Seattle",
      "exterior cleaning Seattle WA"
    ]
  },
  {
    slug: "restaurant-cleaning",
    title: "Restaurant Cleaning",
    shortDescription:
      "Whole-restaurant cleaning for dining rooms, entrances, bars, customer restrooms, staff areas, and floors, available as recurring janitorial service or a one-time reset.",
    problem:
      "Front-of-house condition is the first thing guests judge, but dining rooms, entry glass, restrooms, and staff areas are the hardest spaces to keep up with once service starts and the team is focused on turning tables.",
    solution:
      "We handle the customer-facing and supporting areas of the restaurant on a written scope and a schedule that fits between close and open, so the room is reset before the first guest walks in.",
    benefits: [
      "Dining rooms, tables, chairs, and customer seating areas",
      "Entrances, lobbies, host stations, and interior glass",
      "Customer restrooms and staff restrooms in the agreed scope",
      "Bars, service counters, staff areas, and back corridors",
      "Floor care, trash removal, and high-touch surface attention",
      "Recurring janitorial plans or one-time restaurant cleaning",
      "Back-of-house kitchen work can be added to the same plan",
      "Written scope of work confirmed after a walkthrough"
    ],
    process: [
      "Walkthrough of the dining room, entry, bar, restrooms, and staff areas",
      "Written scope, service frequency, access plan, and quote",
      "Service runs on the agreed schedule, with scope adjusted as the season changes"
    ],
    seoTitle: "Restaurant Cleaning Services in Seattle",
    seoDescription:
      "Restaurant cleaning in Seattle for dining rooms, entrances, bars, restrooms, and staff areas. Recurring janitorial service or one-time cleaning, scheduled around service hours.",
    keywords: [
      "restaurant cleaning services Seattle",
      "Seattle restaurant cleaning",
      "commercial restaurant cleaning",
      "restaurant janitorial services Seattle",
      "dining room cleaning Seattle",
      "front of house restaurant cleaning"
    ]
  },
  {
    slug: "restaurant-kitchen-cleaning",
    title: "Restaurant Kitchen Cleaning",
    shortDescription:
      "Back-of-house cleaning for commercial kitchens, covering food-preparation surfaces, kitchen floors, grease-prone areas, equipment exteriors, and accessible wall and high-touch surfaces.",
    problem:
      "Grease film, food residue, and foot traffic build up faster in a commercial kitchen than anywhere else in a restaurant, and floor edges, equipment exteriors, and splash areas are the first things a busy crew has to skip at the end of a shift.",
    solution:
      "We clean the back of house on a written scope, working through prep surfaces, sinks, kitchen floors and edges, grease-prone areas, and accessible equipment exteriors after service ends or before the kitchen opens.",
    benefits: [
      "Prep counters, backsplashes, sinks, and accessible fixtures",
      "Kitchen floors, edges, corners, and grease-prone areas",
      "Equipment exteriors, handles, and control-area surfaces",
      "Reachable wall splash areas, doors, and high-touch points",
      "Dish areas, staff areas, and restrooms when included in the scope",
      "Recurring, periodic, or one-time commercial kitchen cleaning",
      "After-hours scheduling around prep and service times",
      "Written scope of work confirmed after a kitchen walkthrough"
    ],
    process: [
      "Kitchen walkthrough covering layout, equipment, buildup, and access",
      "Written scope, cleaning frequency, service window, and quote",
      "Scheduled service begins, with scope reviewed as the menu or volume changes"
    ],
    seoTitle: "Restaurant Kitchen Cleaning Seattle",
    seoDescription:
      "Commercial kitchen cleaning in Seattle for food-preparation areas, kitchen floors, grease-prone surfaces, and equipment exteriors, scheduled after hours around your service times.",
    keywords: [
      "restaurant kitchen cleaning Seattle",
      "commercial kitchen cleaning Seattle",
      "commercial kitchen floor cleaning",
      "food preparation area cleaning",
      "recurring restaurant kitchen cleaning",
      "grease-prone kitchen cleaning Seattle"
    ]
  }
];

// ─── QUOTE FORM OPTIONS ───────────────────────────────────────────────────────
// Single source of truth for the Get a Quote form. These same arrays are imported
// by BOTH the contact form (frontend) and the contact API route (backend
// validation), so the values a visitor can submit and the values the server
// accepts can never drift apart. If you add or rename an option, do it here only.
//
// Service options are derived directly from the real `services` list above, with
// a "Not Sure Yet" catch-all appended for visitors who are still deciding.
export const quoteServiceOptions: readonly string[] = [
  ...services.map((service) => service.title),
  "Not Sure Yet"
];

export const propertyTypeOptions = [
  "Home",
  "Office",
  "School or Educational Facility",
  "Commercial Property",
  "Rental or Managed Property",
  "Post-Construction Project",
  "Other"
] as const;

export const cleaningFrequencyOptions = [
  "One-time Cleaning",
  "Weekly",
  "Bi-weekly",
  "Monthly",
  "Not Sure Yet"
] as const;

export const contactMethodOptions = ["Phone", "Email", "Text"] as const;

// Home page service showcase, 6 featured cards
// To add a photo to any card: set image to "/home/services/{name}.jpg"
// Upload photos to /public/home/services/, recommended size: 800×450px (16:9)
export const homeServiceCards = [
  {
    title: "Commercial Cleaning",
    description:
      "Reliable, scheduled cleaning for offices, retail spaces, and commercial facilities. Consistent crew, written checklists, and direct communication every visit.",
    href: "/services/commercial-cleaning",
    iconName: "Building2",
    image: "/home/services/comercial-cleaning.jpg"
  },
  {
    title: "Full Home Cleaning",
    description:
      "Thorough residential cleaning for homes across the Seattle area. From regular maintenance cleans to full deep cleans, done with care and attention to detail.",
    href: "/services/residential-cleaning",
    iconName: "Home",
    image: "/home/services/full-home-cleaning.jpg"
  },
  {
    title: "Deep Cleaning",
    description:
      "A comprehensive top-to-bottom clean for homes and spaces that need a full reset. Ideal for move-ins, seasonal refreshes, or starting a new cleaning routine.",
    href: "/services/deep-cleaning",
    iconName: "Zap",
    image: "/home/services/deep-cleaning-service.jpg"
  },
  {
    title: "Window Cleaning",
    description:
      "Interior and exterior window cleaning for homes and commercial properties. Separate residential and commercial options, one-time or on a recurring schedule.",
    href: "/services/window-cleaning",
    iconName: "Sparkles",
    image: "/home/services/window-cleaning.jpg"
  },
  {
    title: "Pressure Washing",
    description:
      "Commercial and residential pressure washing for driveways, sidewalks, siding, and exterior surfaces. Removes grime, algae, and buildup to restore curb appeal.",
    href: "/services/pressure-washing",
    iconName: "Layers",
    image: "/home/services/pressure-wash.jpg"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description:
      "Detail-focused turnover cleaning for rental units, condos, and commercial spaces. Reliable service that meets property manager and tenant expectations.",
    href: "/services/move-in-move-out-cleaning",
    iconName: "HardHat",
    image: "/home/services/move-in-cleaning.jpg"
  }
];

export const whyChooseUs = [
  {
    title: "Same Crew, Every Visit",
    description:
      "You get the same professional team each time. No rotating roster of strangers. Your crew learns your facility, your standards, and your preferences, so quality stays consistent without you having to repeat yourself.",
    iconName: "Users"
  },
  {
    title: "Checklist-Backed Quality Control",
    description:
      "Every job follows a structured cleaning checklist specific to your space. Nothing gets skipped because someone forgot. You get a predictable, verifiable result after every single visit.",
    iconName: "ClipboardCheck"
  },
  {
    title: "Zero-Disruption Scheduling",
    description:
      "We work before you open, after you close, or whenever suits your operations. Early mornings, late evenings, weekends. We schedule around your business, not ours.",
    iconName: "CalendarCheck"
  },
  {
    title: "You Get a Real Response",
    description:
      "No voicemail loops, no waiting three days for a reply. When you reach out, you hear back the same day. If something needs to be fixed, we address it immediately, not eventually.",
    iconName: "MessageCircle"
  },
  {
    title: "Seattle-Rooted, Not a Franchise",
    description:
      "We're a locally owned business, not a national chain with a local phone number. We know Seattle properties, we serve Seattle clients, and we're accountable to this community in a way a franchise never can be.",
    iconName: "MapPin"
  },
  {
    title: "30+ Years of Seattle Experience",
    description:
      "Decades of hands-on cleaning experience in Seattle commercial and residential properties. Every job is handled by a trained, professional crew that understands your space and your standards.",
    iconName: "ShieldCheck"
  },
  {
    title: "Custom Service Agreements",
    description:
      "For clients who need structured, long-term service, we offer custom cleaning contracts tailored to your facility, frequency, and scope. A formal agreement means consistent standards, clear expectations, and a partner you can count on.",
    iconName: "ClipboardCheck"
  }
];

export const faqs = [
  {
    question: "What types of properties do you clean?",
    answer:
      "We work primarily with commercial properties, including offices, retail locations, medical facilities, and property management accounts throughout Seattle. We also handle move-in/move-out cleaning and post-construction cleaning for both residential and commercial spaces."
  },
  {
    question: "Do you serve Seattle and surrounding areas?",
    answer:
      "Yes. We serve Seattle and the greater metro area including Bellevue, Renton, Kent, Tukwila, and Tacoma. Contact us with your location and we will confirm availability for your area."
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the quote request form on this page or call us directly. We'll ask a few questions about your space, service type, and schedule, then provide a clear, written estimate with no obligation."
  },
  {
    question: "Do you bring your own cleaning supplies and equipment?",
    answer:
      "Yes. We supply professional-grade cleaning products and commercial equipment for all jobs. If your facility has specific product requirements or preferences, we can accommodate those as well."
  },
  {
    question: "Can you work after hours or on weekends?",
    answer:
      "Yes. We regularly schedule cleaning during off-hours, evenings, early mornings, or weekends, to minimize disruption to your team, tenants, or customers."
  },
  {
    question: "Do you offer recurring cleaning contracts?",
    answer:
      "Yes. Most of our commercial clients are on recurring weekly or bi-weekly plans. We establish a consistent routine for your facility and maintain the same crew each visit when possible."
  },
  {
    question: "How much does commercial cleaning cost?",
    answer:
      "Pricing depends on the size and type of your space, the services required, and the cleaning frequency. We provide free, no-obligation estimates. Contact us and we will give you a straightforward quote based on your specific situation."
  },
  {
    question: "What sets your cleaning team apart?",
    answer:
      "30+ years of hands-on experience, a consistent crew, and direct communication with the owner. We serve Seattle commercial and residential clients with structured checklists, reliable schedules, and a straightforward process. No voicemail loops, no chasing updates."
  }
];

export const serviceAreas = [
  "Seattle",
  "Renton",
  "Bellevue",
  "Kent",
  "Everett",
  "Tukwila",
  "Shoreline",
  "Federal Way",
  "Rainier",
  "North Lynnwood",
  "Mill Creek",
  "Kirkland",
  "Tacoma",
  "Bothell"
];

// PLACEHOLDER: Replace all testimonials with real client reviews before launch.
// Recommended sources: Google Business Profile, direct client feedback, or verified review platforms.
export const testimonialPlaceholders = [
  {
    quote:
      "We manage six commercial properties across Bellevue and Renton and tried three different cleaning vendors before finding Cleaning From The Heart. Night and day difference. Same crew every week, no chasing for updates, and our tenants have actually noticed and mentioned it. That never happened with our previous vendor.",
    name: "Melissa Turner",
    role: "Property Manager · 6 Properties, Bellevue & Renton",
    initials: "MT",
    service: "Commercial Cleaning"
  },
  {
    quote:
      "Our South Lake Union office had carpet that hadn't been deep cleaned in over a year. There were embedded stains near the entrance we'd written off as permanent. They pre-treated everything, ran extraction, and came back for a follow-up pass on two problem spots at no extra charge. The carpet looked brand new.",
    name: "Daniel Brooks",
    role: "Office Manager · Tech Company, South Lake Union",
    initials: "DB",
    service: "Carpet Cleaning"
  },
  {
    quote:
      "I needed a commercial suite cleaned out for handoff on a tight deadline. Five days notice. They confirmed scope within a few hours, sent two people, and finished ahead of schedule. The leasing agent walked through and had zero issues. I'll use them for every turnover going forward.",
    name: "Alicia Reed",
    role: "Commercial Property Owner · Bellevue, WA",
    initials: "AR",
    service: "Move-In / Move-Out Cleaning"
  },
  {
    quote:
      "We run four Airbnb units near Capitol Hill and the turnaround standard is brutal. I needed someone I could actually trust to show up and meet guest-ready standards without me having to babysit. They've handled 30+ turnovers for us. Consistent, professional, and easy to coordinate through text.",
    name: "Jordan Kim",
    role: "Short-Term Rental Host · Capitol Hill, Seattle",
    initials: "JK",
    service: "Turnover Cleaning"
  },
  {
    quote:
      "Our K-8 school contracted them for evening facility cleaning after our previous service kept sending different people with no consistency. Within the first month, results were obvious. Classrooms were properly sanitized, restrooms checked every night, and the team was already learning the layout. Parents have commented on how clean the building feels.",
    name: "Kevin Marshall",
    role: "School Administrator · Renton School District",
    initials: "KM",
    service: "School & Facility Cleaning"
  },
  {
    quote:
      "The strip and wax job they did on our 4,000 sq ft retail floor was exceptional. I've used other vendors who left swirl marks and uneven coats. These guys stripped it down completely, applied three finish coats, and the floor looked like it was just installed. Finished on a Sunday so we had zero downtime.",
    name: "Rita Coleman",
    role: "Retail Operations Manager · Kent, WA",
    initials: "RC",
    service: "Strip & Wax"
  }
];

// ─── BEFORE & AFTER ──────────────────────────────────────────────────────────
// Shown in the "Before & After" section on the homepage.
//
// BEFORE images → place files in: /public/images/results/before/
// AFTER  images → place files in: /public/images/results/after/
//
// Recommended naming:
//   /public/images/results/before/before-1.jpg
//   /public/images/results/after/after-1.jpg
//
// To add a new pair:
//   1. Place before-X.jpg in /public/images/results/before/
//   2. Place after-X.jpg  in /public/images/results/after/
//   3. Uncomment (or copy) one of the entries below and fill in the details.
//
// The section renders nothing if this array is empty, safe to leave until
// you have real before/after photos ready.
export const beforeAfterItems: {
  before: string;
  after: string;
  /** true when the before/after images are portrait orientation, renders taller containers */
  portrait?: boolean;
}[] = [
  {
    before: "/images/results/before/before-1.jpg",
    after: "/images/results/after/after-1.jpg",
  },
  {
    before: "/images/results/before/before-2.jpg",
    after: "/images/results/after/after-2.jpg",
  },
  {
    before: "/images/results/before/before-3.jpg",
    after: "/images/results/after/after-3.jpg",
    portrait: true,
  },
];

// ─── WORK GALLERY ────────────────────────────────────────────────────────────
// Shown in "Real Cleaning Results" (Our Work) section on the homepage.
//
// Image folder: /public/images/results/our-work/
//
// Recommended naming:
//   /public/images/results/our-work/work-1.jpg
//   /public/images/results/our-work/work-2.jpg
//   ...
//
// Layout positions based on array index:
//   [0]   = hero (large featured image, left column)
//   [1]   = tall image (right column, top)
//   [2–4] = 3-column mini grid (right column, bottom)
//   [5–7] = secondary row of 3 (below main grid)
//
// To add an image:
//   1. Place the file in /public/images/results/our-work/
//   2. Uncomment (or copy) one of the entries below and fill in the details.
//
// The section renders nothing if this array is empty, safe to leave until
// you have real photos ready.
export const workGalleryItems: {
  image: string;
}[] = [
  { image: "/images/results/our-work/work-1.jpeg" },
  { image: "/images/results/our-work/work-2.jpeg" },
  { image: "/images/results/our-work/work-3.jpeg" },
  { image: "/images/results/our-work/work-4.jpeg" },
  { image: "/images/results/our-work/work-5.jpeg" },
  { image: "/images/results/our-work/work-6.jpeg" },
];

// ─── FULL GALLERY ─────────────────────────────────────────────────────────────
// All images shown on the /gallery (Results) page.
// Source: /public/images/gallery/
// Note: this is a separate pool from the homepage sections above.
//   Homepage "Before & After" → /public/images/results/before/ and /after/
//   Homepage "Our Work"        → /public/images/results/our-work/
//   Full Results gallery below → /public/images/gallery/
//
// Each item carries the data the Results page uses to label, filter, and caption
// real project photos. Categories below match the filter tabs in galleryCategories.
//   tag        → short label shown on the photo card
//   caption    → one-line description shown under the photo / in the lightbox
//   alt        → accessibility + SEO alt text (kept meaningful, never stuffed)
//   categories → which filter tabs the photo appears under (a photo can match more
//                than one, e.g. a school gym floor is both Floor Care and Commercial)
//   orientation→ controls the card aspect ratio (portrait / landscape / square)
export type GalleryCategory =
  | "floor-care"
  | "window-cleaning"
  | "exterior-cleaning"
  | "commercial-cleaning"
  | "residential-cleaning";

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "floor-care", label: "Floor Care" },
  { id: "window-cleaning", label: "Window Cleaning" },
  { id: "exterior-cleaning", label: "Exterior Cleaning" },
  { id: "commercial-cleaning", label: "Commercial Cleaning" },
  { id: "residential-cleaning", label: "Residential Cleaning" }
];

export interface GalleryItem {
  src: string;
  orientation: "portrait" | "landscape" | "square";
  tag: string;
  caption: string;
  alt: string;
  categories: GalleryCategory[];
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/gallery-01.jpeg",
    orientation: "portrait",
    tag: "Floor Care",
    caption: "Classroom floor care with professional equipment",
    alt: "School classroom floor care and polishing in the Seattle area",
    categories: ["floor-care", "commercial-cleaning"]
  },
  {
    src: "/images/gallery/gallery-02.jpeg",
    orientation: "portrait",
    tag: "Floor Care",
    caption: "Strip and wax floor work in a school classroom",
    alt: "Strip and wax floor service in a Seattle-area school classroom",
    categories: ["floor-care", "commercial-cleaning"]
  },
  {
    src: "/images/gallery/gallery-03.jpeg",
    orientation: "portrait",
    tag: "Window Cleaning",
    caption: "Exterior window cleaning at a Seattle-area home",
    alt: "Exterior window cleaning service for a Seattle-area home",
    categories: ["window-cleaning", "residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-04.jpeg",
    orientation: "portrait",
    tag: "Residential Cleaning",
    caption: "Detailed cleaning in a residential theater room",
    alt: "Residential home theater room cleaning in the Seattle area",
    categories: ["residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-05.jpeg",
    orientation: "portrait",
    tag: "Floor Care",
    caption: "Hardwood floor cleaning for a Seattle-area home",
    alt: "Hardwood floor cleaning result for a Seattle-area home",
    categories: ["floor-care", "residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-06.jpeg",
    orientation: "portrait",
    tag: "Window Cleaning",
    caption: "Commercial glass cleaning with a water-fed pole",
    alt: "Commercial glass cleaning with a water-fed pole in Seattle",
    categories: ["window-cleaning", "commercial-cleaning"]
  },
  {
    src: "/images/gallery/gallery-07.jpeg",
    orientation: "portrait",
    tag: "Window Cleaning",
    caption: "Exterior window cleaning at a residential property",
    alt: "Exterior window cleaning at a Seattle-area residential property",
    categories: ["window-cleaning", "residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-08.jpeg",
    orientation: "landscape",
    tag: "Window Cleaning",
    caption: "Glass railing and window cleaning at a waterfront property",
    alt: "Glass railing and window cleaning at a Seattle-area waterfront home",
    categories: ["window-cleaning", "residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-09.jpeg",
    orientation: "portrait",
    tag: "Window Cleaning",
    caption: "Exterior window cleaning on a large Seattle-area home",
    alt: "Exterior window cleaning on a large Seattle-area home",
    categories: ["window-cleaning", "residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-10.jpeg",
    orientation: "portrait",
    tag: "Window Cleaning",
    caption: "Professional window cleaning equipment on site",
    alt: "Professional window cleaning equipment on a Seattle-area job",
    categories: ["window-cleaning"]
  },
  {
    src: "/images/gallery/gallery-11.jpeg",
    orientation: "portrait",
    tag: "Floor Care",
    caption: "Floor scrubbing in a school hallway",
    alt: "Floor scrubbing service in a Seattle-area school hallway",
    categories: ["floor-care", "commercial-cleaning"]
  },
  {
    src: "/images/gallery/gallery-12.jpeg",
    orientation: "square",
    tag: "Floor Care",
    caption: "Strip and wax results on commercial tile flooring",
    alt: "Strip and wax floor result on commercial tile in Seattle",
    categories: ["floor-care", "commercial-cleaning"]
  },
  {
    src: "/images/gallery/gallery-13.jpeg",
    orientation: "square",
    tag: "Floor Care",
    caption: "Polished floor finish in a commercial space",
    alt: "Polished commercial floor care result in the Seattle area",
    categories: ["floor-care", "commercial-cleaning"]
  },
  {
    src: "/images/gallery/gallery-14.jpg",
    orientation: "square",
    tag: "Floor Care",
    caption: "Gymnasium floor refinishing for a school facility",
    alt: "School gymnasium floor refinishing in the Seattle area",
    categories: ["floor-care", "commercial-cleaning"]
  },
  {
    src: "/images/gallery/gallery-15.jpg",
    orientation: "square",
    tag: "Floor Care",
    caption: "School gym floor care with a restored finish",
    alt: "School gym floor care and restored finish in Seattle",
    categories: ["floor-care", "commercial-cleaning"]
  },
  {
    src: "/images/gallery/gallery-16.jpg",
    orientation: "square",
    tag: "Exterior Cleaning",
    caption: "Pressure washing on a waterfront patio",
    alt: "Pressure washing result on a Seattle-area waterfront patio",
    categories: ["exterior-cleaning", "residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-17.jpg",
    orientation: "square",
    tag: "Exterior Cleaning",
    caption: "Exterior surface cleaning with pressure washing equipment",
    alt: "Exterior pressure washing of a patio surface in the Seattle area",
    categories: ["exterior-cleaning"]
  },
  {
    src: "/images/gallery/gallery-18.jpg",
    orientation: "square",
    tag: "Exterior Cleaning",
    caption: "Paver patio cleaning and surface care",
    alt: "Paver patio pressure washing result in the Seattle area",
    categories: ["exterior-cleaning", "residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-19.jpg",
    orientation: "square",
    tag: "Exterior Cleaning",
    caption: "Driveway pressure washing for a Seattle-area property",
    alt: "Driveway pressure washing for a Seattle-area property",
    categories: ["exterior-cleaning", "residential-cleaning"]
  },
  {
    src: "/images/gallery/gallery-20.jpg",
    orientation: "square",
    tag: "Commercial Cleaning",
    caption: "Commercial floor care for an office space",
    alt: "Commercial office floor care result in the Seattle area",
    categories: ["commercial-cleaning", "floor-care"]
  }
];

// ─── TEAM MEDIA ───────────────────────────────────────────────────────────────
// Shown in the "Professional Team. Real Results." section.
// Replace each image with a real team, equipment, or work-in-progress photo.
// Recommended image size: 600×600px (square crop)
// Upload location: /public/home/team/
export const teamMediaItems = [
  {
    // Replace with: /public/home/team/team-1.jpg, team member on the job
    image: "/home/team/team-1.svg",
    alt: "Professional cleaning team member preparing for a commercial job",
    caption: "Professional & Experienced"
  },
  {
    // Replace with: /public/home/team/team-2.jpg, professional equipment/supplies
    image: "/home/team/team-2.svg",
    alt: "Commercial-grade cleaning equipment and professional supplies",
    caption: "Professional-Grade Equipment"
  },
  {
    // Replace with: /public/home/team/team-3.jpg, team at work in a commercial space
    image: "/home/team/team-3.svg",
    alt: "Team performing detailed office cleaning with structured checklist process",
    caption: "Detail-Oriented Process"
  },
  {
    // Replace with: /public/home/team/team-4.jpg, completed, spotless result
    image: "/home/team/team-4.svg",
    alt: "Completed commercial cleaning result, spotless and client-ready",
    caption: "Consistent Results"
  }
];

// ─── VIDEO FEATURES ───────────────────────────────────────────────────────────
// Shown in "Watch How We Transform Spaces" section.
// Replace thumbnail images with real stills, and video paths with uploaded footage.
// Thumbnail recommended size: 1280×720px (16:9)
// Video recommended format: MP4 (H.264), 1080p, < 30MB
// Upload location: /public/home/videos/
export const videoFeatures = [
  {
    title: "Office Transformation",
    description:
      "Watch our team restore a commercial office space from cluttered and dusty to spotless and client-ready in a single session.",
    // Replace thumbnail with: /public/home/videos/video-thumb-1.jpg
    thumbnail: "/home/videos/video-thumb-1.svg",
    // Replace video with: /public/home/videos/office-transformation.mp4
    videoSrc: "/home/videos/office-transformation.mp4",
    duration: "2:30"
  },
  {
    title: "Floor Strip & Wax Process",
    description:
      "See the full commercial floor restoration process, from stripping old wax buildup to applying a fresh, durable protective finish.",
    // Replace thumbnail with: /public/home/videos/video-thumb-2.jpg
    thumbnail: "/home/videos/video-thumb-2.svg",
    // Replace video with: /public/home/videos/floor-strip-wax.mp4
    videoSrc: "/home/videos/floor-strip-wax.mp4",
    duration: "3:15"
  }
];

// homeStats is retained for backward compatibility, not currently rendered as numbers.
// Update with real data before using on the site.
export const homeStats = [
  { value: "30+ Years", label: "Decades of professional cleaning experience" },
  { value: "Seattle Local", label: "Owner-operated, locally rooted" },
  { value: "Commercial-Grade", label: "Professional equipment & structured process" },
  { value: "Seattle Local", label: "Rooted in Seattle, focused on the greater metro" }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
