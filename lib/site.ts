export type ServiceSlug = "commercial-cleaning" | "carpet-cleaning" | "strip-and-wax";

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
  email: "hello@cleaningfromtheheartllc.com",
  address: "PO BOX 135, Renton, WA 98057",
  primaryCta: "Get a Free Quote",
  secondaryCta: "Call Now",
  serviceAreaSummary: "Serving Seattle, Bellevue, Renton & Surrounding Areas",
  businessHours: "Mon–Sat: 7 AM – 7 PM"
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
      "Reliable, scheduled cleaning for offices, retail spaces, and commercial facilities throughout Seattle — delivered consistently by a team you can count on.",
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
      "Direct communication — no answering machines, no runaround"
    ],
    process: [
      "Facility walkthrough to assess scope, priorities, and access requirements",
      "Written quote with agreed service frequency, scope, and pricing",
      "Recurring service begins — with check-ins to maintain quality and adjust as needed"
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
      "Deep carpet cleaning that removes embedded dirt, stains, and odors — restoring a fresh, professional appearance to offices, rentals, and commercial spaces.",
    problem:
      "Carpets accumulate dust, allergens, stains, and odor over time — making spaces feel worn, unhealthy, and unprofessional to clients and staff alike.",
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
      "Carpet assessment — we evaluate condition, identify stain areas, and discuss priorities",
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
      "Professional floor stripping and waxing that restores a polished, durable finish to commercial hard floors — protecting your investment and improving first impressions.",
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
      "Floor assessment — type, condition, square footage, and special requirements",
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
    image: null // Set to "/media/services/commercial-cleaning.jpg" when ready
  },
  {
    title: "Carpet Cleaning",
    description:
      "Deep extraction cleaning that lifts embedded dirt, stains, and odors. Ideal for high-traffic offices, rental units, and move-in/move-out transitions.",
    href: "/services/carpet-cleaning",
    iconName: "Layers",
    image: null // Set to "/media/services/carpet-cleaning.jpg" when ready
  },
  {
    title: "Strip & Wax",
    description:
      "Full floor restoration — strip old buildup, prep the surface, and apply a fresh protective finish. Restores shine and extends the life of commercial floors.",
    href: "/services/strip-and-wax",
    iconName: "Sparkles",
    image: null // Set to "/media/services/strip-wax.jpg" when ready
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description:
      "Detail-focused cleaning for rental units, condos, and commercial spaces during tenant transitions. Consistently meets property manager standards.",
    href: "/contact",
    iconName: "Home",
    image: null // Set to "/media/services/move-in-cleaning.jpg" when ready
  },
  {
    title: "Deep Cleaning",
    description:
      "A comprehensive top-to-bottom cleaning for spaces that need a full reset — ideal post-renovation, seasonal refresh, or for new accounts starting fresh.",
    href: "/contact",
    iconName: "Zap",
    image: null // Set to "/media/services/deep-cleaning.jpg" when ready
  },
  {
    title: "Post-Construction Cleaning",
    description:
      "Dust, debris, and construction residue cleared thoroughly after remodeling or build-out. We handle the detail work so your space is ready for occupancy.",
    href: "/contact",
    iconName: "HardHat",
    image: null // Set to "/media/services/post-construction.jpg" when ready
  }
];

export const whyChooseUs = [
  {
    title: "Consistent, Accountable Teams",
    description:
      "You get the same professional crew each visit — trained to your facility's standards and fully accountable for the result on every job.",
    iconName: "Users"
  },
  {
    title: "Commercial-Grade Standards",
    description:
      "We apply the same thoroughness to a single office as we do to a full facility. Structured checklists, professional products, and a consistent process every time.",
    iconName: "ClipboardCheck"
  },
  {
    title: "Flexible Scheduling",
    description:
      "Early mornings, evenings, weekends — we work around your operations, not the other way around. One-time or recurring, we fit your schedule.",
    iconName: "CalendarCheck"
  },
  {
    title: "Responsive Communication",
    description:
      "Questions get answered promptly. If something needs attention, we address it fast. You won't spend time chasing us down for a reply.",
    iconName: "MessageCircle"
  },
  {
    title: "Locally Based in Seattle",
    description:
      "We're not a franchise. We're a locally rooted team that knows Seattle properties, neighborhoods, and the standards local businesses expect.",
    iconName: "MapPin"
  },
  {
    title: "Insured & Vetted Staff",
    description:
      "Our team is insured, vetted, and trained before they set foot in your property. Your space and your people are in professional, trustworthy hands.",
    iconName: "ShieldCheck"
  }
];

export const faqs = [
  {
    question: "What types of properties do you clean?",
    answer:
      "We work primarily with commercial properties — offices, retail locations, medical facilities, and property management accounts throughout Seattle. We also handle move-in/move-out cleaning and post-construction cleaning for both residential and commercial spaces."
  },
  {
    question: "Do you serve Seattle and surrounding areas?",
    answer:
      "Yes. We serve Seattle and the greater metro area including Bellevue, Renton, Kent, Tukwila, and Tacoma. Contact us with your location and we will confirm availability for your area."
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the quote request form on this page or call us directly. We'll ask a few questions about your space, service type, and schedule — then provide a clear, written estimate with no obligation."
  },
  {
    question: "Do you bring your own cleaning supplies and equipment?",
    answer:
      "Yes. We supply professional-grade cleaning products and commercial equipment for all jobs. If your facility has specific product requirements or preferences, we can accommodate those as well."
  },
  {
    question: "Can you work after hours or on weekends?",
    answer:
      "Yes. We regularly schedule cleaning during off-hours — evenings, early mornings, or weekends — to minimize disruption to your team, tenants, or customers."
  },
  {
    question: "Do you offer recurring cleaning contracts?",
    answer:
      "Yes. Most of our commercial clients are on recurring weekly or bi-weekly plans. We establish a consistent routine for your facility and maintain the same crew each visit when possible."
  },
  {
    question: "How much does commercial cleaning cost?",
    answer:
      "Pricing depends on the size and type of your space, the services required, and the cleaning frequency. We provide free, no-obligation estimates — contact us and we will give you a straightforward quote based on your specific situation."
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

// PLACEHOLDER: Replace all three testimonials with real client reviews before launch.
// Recommended sources: Google Business Profile, direct client feedback, or verified review platforms.
export const testimonialPlaceholders = [
  {
    quote:
      "Replace this with a real client review — ideally from Google — about the quality and consistency of recurring commercial cleaning service.",
    name: "Client Name",
    role: "Property Manager, Seattle",
    initials: "PM"
  },
  {
    quote:
      "Replace this with a real testimonial about carpet cleaning results, turnaround time, or how the team communicated throughout the job.",
    name: "Client Name",
    role: "Office Manager, South Lake Union",
    initials: "OM"
  },
  {
    quote:
      "Replace this with a real testimonial about move-in/move-out cleaning quality, reliability, or a specific detail that impressed the client.",
    name: "Client Name",
    role: "Commercial Tenant, Bellevue",
    initials: "CT"
  }
];

export const beforeAfterItems = [
  {
    title: "Office Common Area",
    description: "High-traffic workspace refreshed with thorough surface cleaning and floor maintenance.",
    service: "Commercial Cleaning",
    before: "/images/before-after-office-before.svg",
    after: "/images/before-after-office-after.svg"
  },
  {
    title: "Commercial Carpet",
    description: "Heavily used office carpet restored with professional deep extraction cleaning.",
    service: "Carpet Cleaning",
    before: "/images/before-after-carpet-before.svg",
    after: "/images/before-after-carpet-after.svg"
  },
  {
    title: "Hard Floor Restoration",
    description: "Vinyl commercial flooring stripped, prepped, and finished to a clean, protective shine.",
    service: "Strip & Wax",
    before: "/images/before-after-floor-before.svg",
    after: "/images/before-after-floor-after.svg"
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
    image: "/media/work/work-office-seattle.svg"
  },
  {
    title: "Carpet Restoration",
    location: "Bellevue, WA",
    service: "Carpet Cleaning",
    // Replace with: /public/media/work/work-carpet-bellevue.jpg
    image: "/media/work/work-carpet-bellevue.svg"
  },
  {
    title: "Floor Strip & Wax",
    location: "Renton, WA",
    service: "Strip & Wax",
    // Replace with: /public/media/work/work-floor-renton.jpg
    image: "/media/work/work-floor-renton.svg"
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
    alt: "Completed commercial cleaning result — spotless and client-ready",
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
      "See the full commercial floor restoration process — from stripping old wax buildup to applying a fresh, durable protective finish.",
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
  { value: "Satisfaction Backed", label: "We make it right — every time" },
  { value: "Commercial-Grade", label: "Professional equipment & structured process" },
  { value: "Seattle Local", label: "Rooted in Seattle, focused on the greater metro" }
];

export function getServiceBySlug(slug: ServiceSlug) {
  return services.find((service) => service.slug === slug);
}
