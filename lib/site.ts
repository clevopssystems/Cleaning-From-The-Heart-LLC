export type ServiceSlug =
  | "commercial-cleaning"
  | "carpet-cleaning"
  | "strip-and-wax"
  | "school-facility-cleaning"
  | "window-glass-cleaning"
  | "pressure-washing"
  | "junk-removal"
  | "parking-lot-exterior-maintenance"
  | "post-construction-renovation-cleanup"
  | "move-in-move-out-cleaning";

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
  phoneDisplay: "206-850-8484",
  phoneHref: "tel:+12068508484",
  whatsappHref: "https://wa.me/12068508484?text=Hi%2C%20I%20want%20to%20get%20a%20quote%20for%20your%20service.",
  email: "hello@cleaningfromtheheartllc.com",
  address: "PO BOX 135, Renton, WA 98057",
  primaryCta: "Get a Free Quote",
  secondaryCta: "Call Now",
  serviceAreaSummary: "Serving Seattle, Bellevue, Renton & Surrounding Areas",
  businessHours: "Mon-Sat: 7 AM - 7 PM"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Results" },
  { href: "/contact", label: "Get a Quote" }
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
    seoTitle: "Commercial Cleaning Services in Seattle, WA",
    seoDescription:
      "Professional commercial cleaning in Seattle for offices, retail, and facilities. Dependable scheduling, vetted staff, satisfaction backed. Get a quote from Cleaning From The Heart LLC.",
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
      "Deep carpet cleaning that removes embedded dirt, stains, and odors, restoring a fresh, professional appearance to offices, rentals, and commercial spaces.",
    problem:
      "Carpets accumulate dust, allergens, stains, and odor over time, making spaces feel worn, unhealthy, and unprofessional to clients and staff alike.",
    solution:
      "Our carpet cleaning service uses thorough extraction methods to remove what regular vacuuming misses, improving both appearance and indoor air quality.",
    benefits: [
      "Removes embedded dirt, allergens, and odor from high-traffic carpet",
      "Targeted pre-treatment for stubborn spots and ground-in debris",
      "Improves indoor air quality and overall freshness throughout the space",
      "Ideal for offices, rental units, and move-in/move-out transitions",
      "Helps extend carpet lifespan and delays costly replacement",
      "Available as a one-time service or as part of a recurring maintenance schedule"
    ],
    process: [
      "Carpet assessment, we evaluate condition, identify stain areas, and discuss priorities",
      "Pre-treatment, deep extraction cleaning, and targeted spot treatment",
      "Final walkthrough and drying guidance to protect your floor investment"
    ],
    seoTitle: "Carpet Cleaning in Seattle, WA",
    seoDescription:
      "Professional carpet cleaning in Seattle for offices, rentals, and commercial spaces. Remove stains, embedded dirt, and odors with Cleaning From The Heart LLC.",
    keywords: [
      "Seattle carpet cleaning",
      "deep carpet cleaning Seattle",
      "commercial carpet cleaning Seattle",
      "carpet stain removal Seattle",
      "office carpet cleaning Seattle WA"
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
      "Professional strip and wax floor services in Seattle for long-lasting shine and protection. Restore commercial hard floors with Cleaning From The Heart LLC.",
    keywords: [
      "strip and wax Seattle",
      "floor waxing Seattle",
      "commercial floor stripping Seattle",
      "floor restoration Seattle WA",
      "strip wax floors Seattle"
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
    slug: "window-glass-cleaning",
    title: "Window & Glass Cleaning",
    shortDescription:
      "Professional window and glass cleaning for commercial properties that improves visibility, appearance, and first impressions.",
    problem:
      "Smudged, dusty, and water-spotted windows make your property look neglected and reduce natural light quality for staff and visitors.",
    solution:
      "We clean interior and exterior glass surfaces using professional tools and methods for a streak-free finish and a cleaner overall look.",
    benefits: [
      "Streak-free cleaning for windows, entry doors, and glass partitions",
      "Improved curb appeal and a brighter, more professional interior",
      "Regular maintenance options for storefronts and office buildings",
      "Attention to smudges, fingerprints, and hard-water spots",
      "Safer and more efficient process using proper equipment",
      "Service tailored to your property access and business hours"
    ],
    process: [
      "Walkthrough to identify glass surfaces, access points, and scheduling needs",
      "Interior and exterior glass cleaning with detail pass on frames and edges",
      "Final quality check for streak-free results and customer approval"
    ],
    seoTitle: "Commercial Window & Glass Cleaning in Seattle, WA",
    seoDescription:
      "Commercial window and glass cleaning in Seattle for offices and storefronts. Streak-free results, reliable service, and flexible scheduling.",
    keywords: [
      "window cleaning Seattle",
      "commercial glass cleaning Seattle",
      "storefront window cleaning Seattle",
      "office window cleaning Seattle WA",
      "streak free window cleaning Seattle"
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
    seoTitle: "Commercial Pressure Washing in Seattle, WA",
    seoDescription:
      "Commercial pressure washing in Seattle for sidewalks, entries, and exterior surfaces. Remove buildup and improve curb appeal with reliable service.",
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
      "Comprehensive move-in and move-out cleaning for offices and properties to prepare spaces for new occupants and professional handoff.",
    problem:
      "Property transitions often leave behind dust, residue, and overlooked areas that can delay move-ins and impact client or tenant expectations.",
    solution:
      "We deliver detail-focused transition cleaning that prepares units and commercial spaces for move-in, move-out, and final inspections.",
    benefits: [
      "Deep cleaning for vacant units and transition-ready commercial spaces",
      "Focus on kitchens, restrooms, floors, and high-touch areas",
      "Supports property managers, landlords, and business transitions",
      "Improves presentation for inspections and new occupancy",
      "Flexible scheduling aligned with turnover timelines",
      "Reliable service with clear scope and communication"
    ],
    process: [
      "Walkthrough to assess condition, timeline, and service priorities",
      "Detailed move-in or move-out cleaning across agreed areas",
      "Final inspection pass to confirm readiness"
    ],
    seoTitle: "Move-In / Move-Out Cleaning in Seattle, WA",
    seoDescription:
      "Move-in and move-out cleaning in Seattle for commercial and rental spaces. Detail-focused turnover cleaning with flexible scheduling.",
    keywords: [
      "move in move out cleaning Seattle",
      "turnover cleaning Seattle",
      "vacant unit cleaning Seattle",
      "property transition cleaning Seattle WA",
      "commercial move out cleaning Seattle"
    ]
  }
];

// Home page service showcase — 6 cards including extended services
// To add a photo to any card: set image to "/media/services/{name}.jpg"
// Upload photos to /public/media/services/ — recommended size: 800×450px (16:9)
export const homeServiceCards = [
  {
    title: "Commercial Cleaning",
    description:
      "Consistent, scheduled cleaning for offices, retail locations, and commercial facilities. Your space stays client-ready without you having to think about it.",
    href: "/services/commercial-cleaning",
    iconName: "Building2",
    image: "/media/services/commercial-cleaning.jpg"
  },
  {
    title: "Carpet Cleaning",
    description:
      "Deep extraction cleaning that lifts embedded dirt, stains, and odors. Ideal for high-traffic offices, rental units, and move-in/move-out transitions.",
    href: "/services/carpet-cleaning",
    iconName: "Layers",
    image: "/media/services/carpet-cleaning.jpg"
  },
  {
    title: "Strip & Wax",
    description:
      "Full floor restoration, strip old buildup, prep the surface, and apply a fresh protective finish. Restores shine and extends the life of commercial floors.",
    href: "/services/strip-and-wax",
    iconName: "Sparkles",
    image: "/media/services/strip-wax.jpg"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description:
      "Detail-focused cleaning for rental units, condos, and commercial spaces during tenant transitions. Consistently meets property manager standards.",
    href: "/services/move-in-move-out-cleaning",
    iconName: "Home",
    image: "/media/services/move-in-cleaning.jpg"
  },
  {
    title: "Deep Cleaning",
    description:
      "A comprehensive top-to-bottom cleaning for spaces that need a full reset, ideal post-renovation, seasonal refresh, or for new accounts starting fresh.",
    href: siteConfig.whatsappHref,
    iconName: "Zap",
    image: "/media/services/deep-cleaning.jpg"
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Dust, debris, and construction residue cleared thoroughly after remodeling or build-out. We handle the detail work so your space is ready for occupancy.",
    href: "/services/post-construction-renovation-cleanup",
    iconName: "HardHat",
    image: "/media/services/post-construction.jpg"
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
    title: "Fully Insured, Vetted Staff",
    description:
      "Every team member is background-checked, trained before their first job, and covered under our insurance. You're not just getting clean results. You're getting peace of mind when you hand over access to your property.",
    iconName: "ShieldCheck"
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
    question: "Are you insured?",
    answer:
      "Yes. We carry appropriate insurance coverage for all services. Proof of insurance is available upon request as part of the quoting process."
  }
];

export const serviceAreas = [
  "Downtown Seattle",
  "Capitol Hill",
  "South Lake Union",
  "Queen Anne",
  "Ballard",
  "West Seattle",
  "Beacon Hill",
  "Fremont",
  "Bellevue",
  "Renton",
  "Kent",
  "Tukwila",
  "Tacoma",
  "Kirkland"
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

export const beforeAfterItems = [
  {
    title: "Office Common Area",
    description: "High-traffic workspace refreshed with thorough surface cleaning and floor maintenance.",
    service: "Commercial Cleaning",
    before: "/images/before-after-office-before.svg",
    after: "/media/work/work-office-seattle.png"
  },
  {
    title: "Commercial Carpet",
    description: "Heavily used office carpet restored with professional deep extraction cleaning.",
    service: "Carpet Cleaning",
    before: "/images/before-after-carpet-before.png",
    after: "/images/before-after-carpet-after.svg"
  },
  {
    title: "Hard Floor Restoration",
    description: "Vinyl commercial flooring stripped, prepped, and finished to a clean, protective shine.",
    service: "Strip & Wax",
    before: "/images/before-after-floor-before.svg",
    after: "/media/work/work-floor-renton.jpg"
  }
];

// ─── WORK GALLERY ────────────────────────────────────────────────────────────
// Shown in "See Our Work in Action" section on the homepage.
// Replace each image path with a real project photo before launch.
// Recommended image size: 800×600px (4:3 ratio)
// Naming convention: work-{service}-{city}.jpg
// Upload location: /public/media/work/
export const workGalleryItems = [
  {
    title: "Office Deep Clean",
    location: "Seattle, WA",
    service: "Commercial Cleaning",
    // Replace with: /public/media/work/work-office-seattle.jpg
    image: "/media/work/work-office-seattle.png"
  },
  {
    title: "Carpet Restoration",
    location: "Bellevue, WA",
    service: "Carpet Cleaning",
    image: "/images/before-after-carpet-before.png"
  },
  {
    title: "Floor Strip & Wax",
    location: "Renton, WA",
    service: "Strip & Wax",
    // Replace with: /public/media/work/work-floor-renton.jpg
    image: "/media/work/work-floor-renton.jpg"
  },
  {
    title: "Move-In Detail Clean",
    location: "Kirkland, WA",
    service: "Move-In / Move-Out",
    // Replace with: /public/media/work/work-movein-kirkland.jpg
    image: "/media/work/work-movein-kirkland.svg"
  }
];

// ─── TEAM MEDIA ───────────────────────────────────────────────────────────────
// Shown in the "Professional Team. Real Results." section.
// Replace each image with a real team, equipment, or work-in-progress photo.
// Recommended image size: 600×600px (square crop)
// Upload location: /public/media/team/
export const teamMediaItems = [
  {
    // Replace with: /public/media/team/team-1.jpg — team member on the job
    image: "/media/team/team-1.svg",
    alt: "Professional cleaning team member preparing for a commercial job",
    caption: "Vetted & Insured Staff"
  },
  {
    // Replace with: /public/media/team/team-2.jpg — professional equipment/supplies
    image: "/media/team/team-2.svg",
    alt: "Commercial-grade cleaning equipment and professional supplies",
    caption: "Professional-Grade Equipment"
  },
  {
    // Replace with: /public/media/team/team-3.jpg — team at work in a commercial space
    image: "/media/team/team-3.svg",
    alt: "Team performing detailed office cleaning with structured checklist process",
    caption: "Detail-Oriented Process"
  },
  {
    // Replace with: /public/media/team/team-4.jpg — completed, spotless result
    image: "/media/team/team-4.svg",
    alt: "Completed commercial cleaning result, spotless and client-ready",
    caption: "Consistent Results"
  }
];

// ─── VIDEO FEATURES ───────────────────────────────────────────────────────────
// Shown in "Watch How We Transform Spaces" section.
// Replace thumbnail images with real stills, and video paths with uploaded footage.
// Thumbnail recommended size: 1280×720px (16:9)
// Video recommended format: MP4 (H.264), 1080p, < 30MB
// Upload location: /public/media/videos/
export const videoFeatures = [
  {
    title: "Office Transformation",
    description:
      "Watch our team restore a commercial office space from cluttered and dusty to spotless and client-ready in a single session.",
    // Replace thumbnail with: /public/media/videos/video-thumb-1.jpg
    thumbnail: "/media/videos/video-thumb-1.svg",
    // Replace video with: /public/media/videos/office-transformation.mp4
    videoSrc: "/media/videos/office-transformation.mp4",
    duration: "2:30"
  },
  {
    title: "Floor Strip & Wax Process",
    description:
      "See the full commercial floor restoration process, from stripping old wax buildup to applying a fresh, durable protective finish.",
    // Replace thumbnail with: /public/media/videos/video-thumb-2.jpg
    thumbnail: "/media/videos/video-thumb-2.svg",
    // Replace video with: /public/media/videos/floor-strip-wax.mp4
    videoSrc: "/media/videos/floor-strip-wax.mp4",
    duration: "3:15"
  }
];

// homeStats is retained for backward compatibility — not currently rendered as numbers.
// Update with real data before using on the site.
export const homeStats = [
  { value: "Fully Insured", label: "Licensed, bonded & insured for every job" },
  { value: "Satisfaction Backed", label: "We make it right every time" },
  { value: "Commercial-Grade", label: "Professional equipment & structured process" },
  { value: "Seattle Local", label: "Rooted in Seattle, focused on the greater metro" }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
