import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Church,
  Droplets,
  Dumbbell,
  Eye,
  Gauge,
  GraduationCap,
  Handshake,
  Images,
  Layers,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Repeat,
  Ruler,
  Sparkles,
  Sparkle,
  Stethoscope,
  Store,
  Sun,
  Users,
  Wallet,
  Warehouse
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

const PAGE_TITLE = "Strip and Wax Floor Services in Seattle | Commercial Floor Stripping & Waxing";
const PAGE_DESCRIPTION =
  "Commercial strip and wax floor services in Seattle. We strip old finish from VCT, vinyl, and tile floors, neutralize, and lay fresh coats for a durable shine. After-hours scheduling, free walkthrough.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/services/strip-and-wax"
  },
  keywords: [
    "strip and wax Seattle",
    "floor stripping and waxing Seattle",
    "commercial floor stripping Seattle",
    "floor waxing services Seattle",
    "VCT strip and wax Seattle",
    "commercial floor waxing company Seattle WA",
    "floor restoration Seattle",
    "scrub and recoat Seattle",
    "vinyl tile floor waxing Seattle",
    "after hours floor waxing Seattle"
  ],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/services/strip-and-wax`,
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/gallery/gallery-12.jpeg",
        alt: "Strip and wax floor result on commercial tile in Seattle"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/images/gallery/gallery-12.jpeg"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "VCT, vinyl, linoleum, and sealed hard floors",
  "Old finish stripped, not just cleaned over",
  "Rinsed and pH-neutralized before any coat goes down",
  "Multiple finish coats with dry time between each"
];

const trustStripItems = [
  { Icon: Moon, label: "Nights, weekends & school breaks" },
  { Icon: Ruler, label: "Quoted from a measured walkthrough" },
  { Icon: MessageCircle, label: "Direct line to the owner" },
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" }
];

// ─── Signs a floor is due ─────────────────────────────────────────────────
const warningSigns = [
  {
    Icon: Eye,
    title: "It Looks Yellow or Grey",
    description:
      "Old acrylic finish ambers as it ages, and dirt caught between coats reads as a dull grey haze. Neither of them mops out, because the problem is under the surface rather than on it."
  },
  {
    Icon: Layers,
    title: "Buildup at the Edges and Corners",
    description:
      "Finish collects along baseboards, in corners, and under furniture where the machine never reaches. You can usually see the ridge line where the buildup stops and the traffic lane begins."
  },
  {
    Icon: Gauge,
    title: "Black Traffic Lanes",
    description:
      "Main walkways, doorways, and the path between a counter and a back room wear down first. When the lane is visibly darker than the floor either side of it, the finish there is largely gone."
  },
  {
    Icon: Sparkle,
    title: "No Shine After Mopping",
    description:
      "A floor that goes dull again as soon as it dries has run out of finish for a mop or a burnisher to work with. More cleaning will not bring gloss back at that point."
  },
  {
    Icon: AlertTriangle,
    title: "Bare Tile Showing Through",
    description:
      "Once the finish wears through, the tile itself starts taking the abrasion and the staining. That is the point where the job stops being cosmetic and starts protecting the floor you own."
  },
  {
    Icon: Droplets,
    title: "Powdering, Peeling, or Streaks",
    description:
      "White powder along the edges, coats lifting in sheets, or streaks that reappear after every mopping usually trace back to a previous job that was not rinsed and neutralized properly."
  }
];

// ─── Scope of work, ordered as the job actually runs ──────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "ClipboardList",
    title: "Assessment, Measurement & Protection",
    summary: "Floor type, condition, square footage, furniture plan & protecting everything that is not floor.",
    intro:
      "The setup decides how the rest of the job goes. We identify the floor material, judge how many layers of old finish are on it, measure the area, and agree what gets moved and what stays. Everything that is not being stripped is protected before any solution is opened.",
    tasks: [
      "Floor type identification and condition assessment",
      "Square footage measured and zones mapped for the work window",
      "Furniture, fixtures, and equipment moved or worked around per the agreed plan",
      "Baseboards, thresholds, walls, and fixed equipment protected",
      "Wet-floor signage, barriers, and safe routes for anyone still in the building",
      "Dust mopping and removal of loose debris before wet work begins"
    ]
  },
  {
    iconName: "Layers",
    title: "Stripping the Old Finish",
    summary: "Stripper application, dwell time, machine agitation, edge work & slurry removal.",
    intro:
      "This is the part of a strip and wax that cannot be rushed. Stripper is applied at the correct dilution and given time to break down the old coats before the machine touches it. Edges, corners, and the areas under furniture are worked separately because a floor machine cannot reach them.",
    tasks: [
      "Stripping solution applied at the dilution the floor and buildup call for",
      "Dwell time allowed so the old finish is softened rather than scraped",
      "Machine agitation with stripping pads across open floor areas",
      "Hand and edge work along baseboards, corners, thresholds, and tight spots",
      "Detail attention to built-up ridges and areas the machine cannot reach",
      "Slurry picked up with a wet vacuum or auto scrubber, not spread around"
    ]
  },
  {
    iconName: "Droplets",
    title: "Rinsing, Neutralizing & Drying",
    summary: "Clean-water rinse, pH neutralizing, inspection & full dry before any finish is applied.",
    intro:
      "Stripper residue and a high surface pH are the two things most likely to make a new finish fail. The floor is rinsed, neutralized, inspected under light, and left to dry completely. If a section still shows old finish, it gets stripped again before anything else happens.",
    tasks: [
      "Clean-water rinse to lift remaining stripper residue",
      "pH-neutralizing rinse so fresh finish can bond to the surface",
      "Inspection under light for remaining finish, haze, or missed edges",
      "Re-stripping of any area that has not come back to bare surface",
      "Full drying time before the first coat, with airflow used where it helps",
      "Final debris and lint check across the whole prepared area"
    ]
  },
  {
    iconName: "Sparkles",
    title: "Sealer & Finish Coats",
    summary: "Sealer where the floor calls for it, multiple thin finish coats & dry time between each.",
    intro:
      "Depth of shine comes from the number of coats and how evenly they are laid, not from how much product goes down at once. Porous floors get sealer first so the finish is not absorbed straight into the tile. Each coat is allowed to dry before the next one goes on.",
    tasks: [
      "Sealer applied first on porous floors that need it",
      "Multiple thin, even coats of commercial floor finish",
      "Dry time observed between every coat rather than compressed",
      "Edges and corners coated to match the open floor",
      "Coat count set by floor type, traffic level, and the finish specified",
      "Final inspection for coverage, streaking, and missed areas"
    ]
  },
  {
    iconName: "ShieldCheck",
    title: "Reset, Cure Guidance & Handover",
    summary: "Furniture returned, area reopened, cure guidance & written care instructions.",
    intro:
      "A new finish is soft for longer than it looks. We put the space back the way it was, tell you plainly when it is safe to return furniture, mats, and rolling loads, and leave written guidance so your own team does not undo the job in its first week.",
    tasks: [
      "Furniture and equipment returned to their marked positions",
      "Work area cleared, signage removed, and the space reopened",
      "Guidance on when light foot traffic can return",
      "Guidance on when mats, rolling loads, and heavy furniture can return",
      "Written care instructions for daily dust mopping and damp mopping",
      "Walkthrough with you before we leave the building"
    ]
  },
  {
    iconName: "CalendarCheck",
    title: "Ongoing Floor Maintenance",
    summary: "Scrub and recoat, burnishing, and scheduled strip cycles that protect the work.",
    intro:
      "A stripped and waxed floor is a starting point, not a finished job. Interim maintenance keeps the finish thick enough that the next full strip is further away, and it is far less disruptive than doing nothing until the floor fails again.",
    tasks: [
      "Scrub and recoat to rebuild worn coats without a full strip",
      "Burnishing to bring gloss back up on burnishable finishes",
      "Traffic-lane attention before wear reaches the tile",
      "Routine dust mopping and damp mopping within a janitorial plan",
      "Scheduled review of when the next full strip is actually due",
      "Coordination with the rest of your cleaning schedule"
    ]
  }
];

// ─── Service comparison ───────────────────────────────────────────────────
const floorCareLevels = [
  {
    Icon: Layers,
    label: "Full reset",
    title: "Strip & Wax",
    description:
      "Every coat of old finish is removed down to the tile, the floor is neutralized, and fresh sealer and finish are built back up.",
    bestFor: "Yellowed floors, heavy edge buildup, bare tile in traffic lanes, or a finish that has failed.",
    frequency: "Typically once a year for most commercial floors, and more often where traffic is heavy.",
    downtime: "The longest of the three. Usually an overnight, a weekend, or a scheduled closure."
  },
  {
    Icon: Repeat,
    label: "Interim",
    title: "Scrub & Recoat",
    description:
      "The top layers are machine-scrubbed off and one or two fresh coats go back on, leaving the sound base coats in place.",
    bestFor: "Floors with a decent finish base that have gone dull or scuffed in the walkways.",
    frequency: "Two to four times a year between full strips, depending on the traffic the floor takes.",
    downtime: "Shorter. Often a single evening for a zone, with faster return to service."
  },
  {
    Icon: Sparkles,
    label: "Upkeep",
    title: "Burnishing & Polishing",
    description:
      "High-speed pad work that lifts gloss on an existing burnishable finish. It restores shine but adds no new protection.",
    bestFor: "Floors with enough finish left, where the issue is appearance rather than wear.",
    frequency: "Monthly to quarterly, or built into a recurring janitorial plan.",
    downtime: "The least. It fits inside a normal cleaning visit for most spaces."
  }
];

// ─── Floor types ──────────────────────────────────────────────────────────
const floorTypes = [
  {
    title: "VCT (Vinyl Composition Tile)",
    description:
      "The classic strip and wax floor and still the most common one we work on across Seattle schools, clinics, offices, and back-of-house areas."
  },
  {
    title: "Vinyl Sheet & Commercial Vinyl",
    description:
      "Sheet vinyl in corridors, restrooms, and service areas takes finish well and benefits from the protection in wet-weather months."
  },
  {
    title: "Linoleum",
    description:
      "Genuine linoleum needs a gentler stripping approach and pH care, so it is identified at the walkthrough rather than assumed to be vinyl."
  },
  {
    title: "Sealed Concrete",
    description:
      "Sealed concrete in warehouses, workshops, and back-of-house areas can be stripped and refinished where the existing sealer allows it."
  },
  {
    title: "Terrazzo",
    description:
      "Terrazzo in older schools and civic buildings can carry a maintainable finish. Condition and the existing coating decide the approach."
  },
  {
    title: "Commercial Tile Flooring",
    description:
      "Hard tile floors that have been kept under a maintainable finish are stripped and recoated as part of the same programme."
  }
];

const floorTypeExclusions = [
  "Hardwood and gym floors are refinished with a screen-and-recoat process, not stripped and waxed, and are quoted separately.",
  "Laminate and many luxury vinyl planks carry a factory wear layer that manufacturers do not want coated.",
  "Unsealed natural stone and polished concrete are maintained by polishing rather than by applying floor finish.",
  "If we do not think a floor should be waxed, we will tell you at the walkthrough rather than sell you the job."
];

// ─── Facilities ───────────────────────────────────────────────────────────
const facilityTypes = [
  {
    Icon: GraduationCap,
    title: "Schools & Educational Facilities",
    description:
      "Classrooms, corridors, cafeterias, and multipurpose rooms, worked through summer break, winter break, or mid-year closures."
  },
  {
    Icon: Building2,
    title: "Offices & Professional Buildings",
    description:
      "Lobbies, break rooms, corridors, and back-of-house areas where the floor is the first thing a visitor reads about the building."
  },
  {
    Icon: Stethoscope,
    title: "Medical & Dental Clinics",
    description:
      "Waiting rooms, treatment corridors, and staff areas where a clean, sealed floor is part of how the practice presents itself."
  },
  {
    Icon: Store,
    title: "Retail & Storefronts",
    description:
      "Sales floors, aisles, and entry zones that take constant foot traffic and Seattle weather straight off the sidewalk."
  },
  {
    Icon: Warehouse,
    title: "Warehouses & Industrial Spaces",
    description:
      "Break rooms, offices, and sealed traffic areas inside larger facilities, scheduled around shifts and equipment movement."
  },
  {
    Icon: Church,
    title: "Churches & Community Buildings",
    description:
      "Fellowship halls, classrooms, and shared spaces where the floor gets heavy weekend use and quiet weekdays to work in."
  },
  {
    Icon: Dumbbell,
    title: "Gyms & Recreation Facilities",
    description:
      "Locker rooms, corridors, and hard-floor areas around the court. Hardwood playing surfaces are handled as separate refinishing work."
  },
  {
    Icon: Handshake,
    title: "Property Management & Common Areas",
    description:
      "Lobbies, laundry rooms, corridors, and shared spaces across a portfolio, coordinated so tenants are given notice before the work."
  }
];

// ─── Scheduling ───────────────────────────────────────────────────────────
const scheduleOptions = [
  {
    Icon: Moon,
    title: "Overnight & After Hours",
    description:
      "The most common arrangement. The crew starts once the building empties and the floor is back in service before the first shift arrives."
  },
  {
    Icon: Sun,
    title: "Weekends & Closures",
    description:
      "A Friday-night-to-Sunday window gives finish coats proper dry and cure time before Monday, which is why larger areas usually run on a weekend."
  },
  {
    Icon: GraduationCap,
    title: "School Breaks & Shutdowns",
    description:
      "Summer, winter, and mid-year breaks are the natural window for classrooms and corridors, and they book up early in the Seattle area."
  },
  {
    Icon: Repeat,
    title: "Phased by Zone",
    description:
      "Buildings that cannot close work section by section, so one area is out of service at a time and the rest of the operation keeps running."
  }
];

const schedulingNotes = [
  "Return-to-service timing is confirmed on site, because floor type, coat count, temperature, and airflow all move it.",
  "Light foot traffic usually comes back well before mats, rolling loads, and heavy furniture do.",
  "Larger areas are split into zones so the whole building is never out of use at once.",
  "Scheduling is confirmed according to staffing, building access, and the agreed service plan."
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: Ruler,
    title: "Quoted From a Real Walkthrough",
    description:
      "Square footage, floor type, how many layers of old finish are on it, and how much edge and furniture work is involved. All of it measured before a number is given, not estimated over the phone."
  },
  {
    Icon: Droplets,
    title: "We Do Not Skip the Neutralizing",
    description:
      "The rinse and neutralize step is invisible on the day and decides whether the finish is still sound in six months. It is written into the scope rather than treated as optional."
  },
  {
    Icon: Moon,
    title: "Worked Around Your Operation",
    description:
      "Nights, weekends, school breaks, and phased zones. The point of after-hours floor work is that your people walk in to a finished floor rather than around a closed-off one."
  },
  {
    Icon: Users,
    title: "A Team That Knows Your Building",
    description:
      "Sending the same crew means they learn your floor plan, your access and alarm routine, and which rooms cannot be out of service on a given day."
  },
  {
    Icon: CalendarCheck,
    title: "A Plan Past the First Job",
    description:
      "Scrub and recoat, burnishing, and a realistic strip cycle, so the floor is maintained on a schedule instead of being rescued once it has already failed."
  },
  {
    Icon: MessageCircle,
    title: "You Reach the Owner",
    description:
      "Joshua Alexander runs the company and answers for it. A changed window, an added room, or a floor that needs a second look gets sorted in one conversation."
  }
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Tell Us About the Floor",
    description:
      "Floor type if you know it, roughly how large the area is, when it was last stripped, and when the building can be handed over."
  },
  {
    number: "02",
    title: "On-Site Walkthrough",
    description:
      "We measure, identify the material, judge how much old finish is on it, and look at edges, furniture, thresholds, and access."
  },
  {
    number: "03",
    title: "Written Scope & Quote",
    description:
      "Areas included, coat count, what gets moved, the work window, expected return-to-service timing, and what it costs. In writing."
  },
  {
    number: "04",
    title: "The Work Window",
    description:
      "Protect, strip, rinse, neutralize, dry, seal where needed, coat, and reset. Worked in the agreed window, in that order."
  },
  {
    number: "05",
    title: "Walkthrough & Maintenance Plan",
    description:
      "We walk the finished floor with you, hand over care guidance, and agree when scrub and recoat or the next strip should be scheduled."
  }
];

// ─── Pricing factors ──────────────────────────────────────────────────────
const pricingFactors = [
  "Total square footage and how the area is broken up into rooms",
  "Floor type and how it reacts to stripping",
  "How many layers of old finish are on the floor and their condition",
  "Number of sealer and finish coats specified",
  "Furniture, fixtures, and equipment that need moving and replacing",
  "Amount of edge, corner, and detail work the layout demands",
  "Access, the length of the available window, and after-hours or weekend timing",
  "Whether the work is one area, a whole building, or a phased programme"
];

// ─── Real job photos from the gallery ─────────────────────────────────────
const workPhotos = [
  {
    src: "/images/gallery/gallery-14.jpg",
    alt: "School gymnasium floor refinishing in the Seattle area",
    caption: "Gymnasium floor refinishing"
  },
  {
    src: "/images/gallery/gallery-13.jpeg",
    alt: "Polished commercial floor care result in the Seattle area",
    caption: "Polished commercial finish"
  },
  {
    src: "/images/gallery/gallery-11.jpeg",
    alt: "Floor scrubbing service in a Seattle-area school hallway",
    caption: "Corridor floor scrubbing"
  },
  {
    src: "/images/gallery/gallery-20.jpg",
    alt: "Commercial office floor care result in the Seattle area",
    caption: "Office floor care"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What is strip and wax floor service?",
    answer:
      "Strip and wax is a full reset of a hard floor's protective coating. The old layers of floor finish are dissolved with a stripping solution, agitated off with a floor machine and by hand at the edges, and removed as slurry. The floor is then rinsed, pH-neutralized so the new product can bond, and dried completely. Sealer is applied where the floor is porous, and several thin coats of commercial floor finish are built up with drying time between each one. The result is a bright, uniform surface with a sacrificial protective layer that takes the wear instead of the tile."
  },
  {
    question: "What is the difference between strip and wax and scrub and recoat?",
    answer:
      "A strip and wax removes every coat of old finish and rebuilds the floor from bare tile. A scrub and recoat machine-scrubs off only the worn top layers and adds one or two fresh coats over the sound base underneath. Scrub and recoat is faster, cheaper, and less disruptive, and it is the right choice when the floor is dull or scuffed but the finish base is still good. Once the floor has yellowed, built up heavily at the edges, or worn through to bare tile in the walkways, recoating just seals that condition in, and a full strip is the honest answer."
  },
  {
    question: "How often should commercial floors be stripped and waxed?",
    answer:
      "Most commercial floors in the Seattle area are stripped and waxed about once a year, with scrub and recoat work two to four times in between. High-traffic buildings such as schools, clinics, and busy retail may need it more often, while a low-traffic office can go longer. Traffic volume, entry-mat coverage, wet weather, and how consistently the floor is dust mopped and damp mopped matter more than the calendar. The most reliable approach is a scheduled maintenance programme, so the strip happens because the floor is due rather than because it has already failed."
  },
  {
    question: "How long does a strip and wax take, and when can we walk on the floor?",
    answer:
      "The wet work on a typical room or corridor runs a few hours, and larger areas are split into zones or scheduled across a weekend. Timing is driven by dry time as much as labour: the floor has to be fully dry after neutralizing, and every finish coat has to dry before the next goes on. Light foot traffic can usually return once the last coat has dried, but the finish keeps hardening for a good while after that. Mats, rolling loads, and heavy furniture wait longer. We confirm the exact return-to-service timing on site, because floor type, coat count, temperature, and airflow all change it."
  },
  {
    question: "Which floor types can be stripped and waxed?",
    answer:
      "VCT (vinyl composition tile) is the most common, along with sheet vinyl, commercial vinyl, linoleum, sealed concrete, terrazzo, and hard tile floors that have been kept under a maintainable finish. Hardwood and gym floors use a screen-and-recoat refinishing process instead and are quoted separately. Laminate and many luxury vinyl planks carry a factory wear layer that manufacturers do not want coated, and unsealed natural stone and polished concrete are maintained by polishing rather than by applying floor finish. If a floor should not be waxed, we say so at the walkthrough."
  },
  {
    question: "How much does strip and wax cost in Seattle?",
    answer:
      "Commercial floor stripping and waxing is quoted per building rather than from a published rate, because two floors of the same size can be very different jobs. The inputs are square footage and layout, floor type, how many layers of old finish are on it and what condition they are in, the number of sealer and finish coats specified, how much furniture has to be moved, how much edge and detail work the layout demands, the access and length of the work window, and whether it is one area or a phased programme across a building. The walkthrough turns those into a written scope and a number, with no obligation attached."
  },
  {
    question: "Do you work after hours, overnight, or on weekends?",
    answer:
      "Yes, and for most buildings that is the only sensible way to do it. Overnight is the usual arrangement for single rooms and corridors. Larger areas typically run over a weekend, which gives the finish proper dry and cure time before Monday. Schools are usually scheduled into summer, winter, or mid-year breaks, and those windows book up early. Buildings that cannot close at all are worked zone by zone. Scheduling is confirmed according to staffing, building access, and the agreed service plan."
  },
  {
    question: "Do you move furniture and equipment?",
    answer:
      "Furniture handling is agreed in the written scope before the job. In classrooms and offices we commonly move desks, chairs, and light furnishings, work the floor, and return them to their marked positions. Heavy, fixed, sensitive, or specialist equipment is normally left in place and worked around, or moved by your own team ahead of the work. Anything we cannot safely move is identified at the walkthrough so there are no surprises on the night."
  },
  {
    question: "Will the new finish be slippery?",
    answer:
      "Commercial floor finishes are formulated with slip resistance in mind, and a properly stripped, neutralized, and evenly coated floor should not behave like a hazard. What causes problems in practice is water tracked in from a Seattle winter, residue from an improper strip, or an over-flooded coat that never cured. Good entry matting, prompt attention to wet spots, and consistent daily cleaning do more for floor safety than any single product choice."
  },
  {
    question: "Can you just wax the floor without stripping it first?",
    answer:
      "Only when the existing finish is genuinely sound. Adding coats over old, yellowed, or dirt-loaded finish locks that discoloration in permanently, and adding them over a failing base means the new coats peel with the old ones. If the base is in good shape, a scrub and recoat is the right and cheaper answer, and we will recommend it. If it is not, a full strip is the only way to get a result that lasts."
  },
  {
    question: "Can strip and wax be combined with a regular cleaning contract?",
    answer:
      "Yes, and it usually should be. Floor restoration and daily cleaning work against each other when they are split across two providers with different standards. Running both together means the daily dust mopping and damp mopping actually protects the finish, interim scrub and recoat work is scheduled before wear reaches the tile, and the full strip cycle is planned rather than reactive. It can be added to a commercial cleaning or school facility cleaning plan on one written scope."
  },
  {
    question: "Which areas do you serve for floor stripping and waxing?",
    answer:
      "Seattle and the greater Puget Sound area, including Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Kirkland, Bothell, Tacoma, and the surrounding communities. Because floor work runs in tight after-hours windows, availability depends on the schedule as much as the distance, so it is worth calling to check whether we can commit to the window your building needs."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Commercial Cleaning",
    description: "The recurring janitorial plan that keeps a newly finished floor protected week to week.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "School & Facility Cleaning",
    description: "Campus cleaning plans with floor care scheduled into summer, winter, and mid-year breaks.",
    href: "/services/school-facility-cleaning",
    ctaLabel: "See school cleaning"
  },
  {
    title: "Carpet Cleaning",
    description: "Extraction cleaning for the carpeted areas that sit either side of your hard floors.",
    href: "/services/carpet-cleaning",
    ctaLabel: "Explore carpet cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    description: "A one-time detailed reset of a whole facility, often booked alongside floor restoration.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "Explore deep cleaning"
  },
  {
    title: "Post-Construction Cleanup",
    description: "Final-phase cleanup on new and renovated spaces, where floors are finished before handover.",
    href: "/services/post-construction-renovation-cleanup",
    ctaLabel: "See post-construction cleanup"
  },
  {
    title: "Window & Glass Cleaning",
    description: "Entry glass and interior partitions, commonly booked with a floor project on the same visit.",
    href: "/services/window-glass-cleaning",
    ctaLabel: "View window & glass cleaning"
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// so it is intentionally not repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const stripAndWaxSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/strip-and-wax#service`,
      name: "Strip and Wax Floor Services in Seattle",
      serviceType: "Commercial Floor Stripping and Waxing",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area facility managers, school and district maintenance staff, office and retail operators, clinic managers, and property managers"
      },
      description:
        "Commercial strip and wax floor services in Seattle. Old floor finish is stripped from VCT, vinyl, linoleum, sealed concrete, terrazzo, and commercial tile, then the floor is rinsed, pH-neutralized, dried, sealed where required, and rebuilt with multiple coats of commercial floor finish. Scrub and recoat, burnishing, and scheduled floor maintenance programmes are available, with work run overnight, on weekends, or during facility closures.",
      url: `${SITE_URL}/services/strip-and-wax`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Strip and Wax Scope of Work",
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
      "@type": "HowTo",
      "@id": `${SITE_URL}/services/strip-and-wax#howto`,
      name: "How a Commercial Strip and Wax Is Performed",
      description:
        "The sequence a commercial strip and wax follows, from protecting the space through stripping, neutralizing, coating, and returning the floor to service.",
      step: [
        {
          "@type": "HowToStep",
          name: "Assess and protect",
          text: "Identify the floor type, measure the area, move or work around furniture per the agreed plan, protect baseboards and fixtures, set out signage, and dust mop the floor."
        },
        {
          "@type": "HowToStep",
          name: "Strip the old finish",
          text: "Apply stripping solution at the correct dilution, allow dwell time, agitate with a floor machine and stripping pads, hand-work the edges and corners, and remove the slurry with a wet vacuum or auto scrubber."
        },
        {
          "@type": "HowToStep",
          name: "Rinse and neutralize",
          text: "Rinse with clean water, apply a pH-neutralizing rinse so fresh finish can bond, inspect for remaining finish, re-strip any area that needs it, and allow the floor to dry completely."
        },
        {
          "@type": "HowToStep",
          name: "Seal and apply finish coats",
          text: "Apply sealer where the floor is porous, then build up multiple thin, even coats of commercial floor finish, allowing each coat to dry before the next is applied."
        },
        {
          "@type": "HowToStep",
          name: "Reset and hand over",
          text: "Return furniture to its marked positions, reopen the area, and provide guidance on when foot traffic, mats, rolling loads, and heavy furniture can return, along with written care instructions."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services/strip-and-wax#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function StripAndWaxPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/services/strip-and-wax-hero.png')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-950/80 via-brand-950/65 to-brand-950/45"
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
              { label: "Strip & Wax", href: "/services/strip-and-wax" }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Commercial Floor Care</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Strip and Wax Floor Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Commercial floor stripping and waxing for VCT, vinyl, linoleum, sealed concrete, and tile. We take
                the old finish off down to the surface, rinse and neutralize the floor, and build the shine back
                with fresh sealer and finish coats. Worked overnight, on weekends, or during a scheduled closure so
                your building keeps running.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Get a Free Floor Assessment
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>

            <div className="card-dark flex h-full flex-col justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Layers className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">Why Floors Stop Coming Clean</h2>
              <p className="mt-3 leading-relaxed text-white/70">
                A hard floor that looks grey, yellow, or permanently dull is rarely dirty. Years of floor finish
                have gone down over each other with dirt trapped in between, built up along the baseboards, and
                worn through in the walkways. No amount of mopping reaches that, because the problem is under the
                surface rather than on it.
              </p>
            </div>
          </div>

          {/* Problem panel — sits under the hero split so neither column gets crowded. */}
          <div className="card-dark mt-10">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {glanceItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
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
      <section className="section-shell-tight bg-white" aria-labelledby="strip-wax-intro-heading">
        <Container>
          <span className="eyebrow">What This Service Is</span>
          <ServiceEditorialSplit
            src="/services/strip-and-wax-intro.png"
            alt="Glossy vinyl composition tile corridor in a commercial building after floor finish has been applied"
            width={941}
            height={1441}
            sizes="(max-width: 1024px) 100vw, 45vw"
            aspect="fill"
            unoptimized
            imagePosition="right"
            columns="lg:grid-cols-[1.05fr_0.95fr]"
            align="stretch"
            imageClassName="min-h-[22rem] sm:min-h-[28rem] lg:min-h-0"
          >
            <h2
              id="strip-wax-intro-heading"
              className="text-3xl font-bold leading-tight tracking-tight md:text-4xl"
            >
              What Is Strip and Wax Floor Care?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Strip and wax is a full reset of the protective coating on a hard floor. The old layers of floor
              finish are dissolved with a stripping solution, agitated off with a floor machine and by hand at the
              edges, and removed as slurry. The floor is then rinsed, pH-neutralized so new product can bond to it,
              and dried completely before sealer and several thin coats of commercial floor finish are built back
              up.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The coating is meant to be sacrificial. It takes the scuffs, grit, and rolling loads so the tile
              underneath does not, and once it has worn through or discoloured past the point of recovery, it is
              replaced rather than cleaned. That is the whole logic of commercial floor waxing: keep the wear on a
              layer that can be renewed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Not every dull floor needs a full strip, and we say so when it does not. Sometimes the honest answer
              is a scrub and recoat at a fraction of the cost and disruption, which is why every job starts with a
              walkthrough rather than a price list.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Strip and Wax Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── WARNING SIGNS ───────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            center
            eyebrow="When It Is Due"
            title="Signs Your Floors Need Stripping and Waxing"
            description="Most facility managers know the floor looks tired long before they know why. These are the conditions that mean cleaning has stopped being the answer."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map(({ Icon, title, description }, index) => (
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

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              If you are seeing two or more of these, the floor is past what a mop can fix. A walkthrough will tell
              you whether it needs a full strip or an interim recoat.
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
            title="What a Strip and Wax Job Includes"
            description="The stages below are the order the work actually runs in. Tasks are performed according to the approved scope, so your project may include every stage here or a focused subset, decided at the walkthrough."
          />

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-5 py-2 md:px-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-sm leading-relaxed text-muted">
              Carpet extraction, hardwood and gym floor refinishing, and specialty stone polishing are quoted
              separately from a strip and wax rather than assumed inside it.
            </p>
          </div>
        </Container>
      </section>

      {/* ── STRIP & WAX VS SCRUB & RECOAT VS BURNISHING ─────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="compare">
        <Container>
          <SectionHeading
            eyebrow="Choosing the Right Level"
            title="Strip and Wax vs. Scrub and Recoat vs. Burnishing"
            description="Three different jobs that all end with a shinier floor. Booking the wrong one either wastes money or locks a problem in, so this is the first thing we work out on site."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {floorCareLevels.map(({ Icon, label, title, description, bestFor, frequency, downtime }, index) => (
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
                  <dl className="mt-1 grid flex-1 gap-3 border-t border-brand-100 pt-4">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                        Best for
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted">{bestFor}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                        Typical frequency
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted">{frequency}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                        Downtime
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted">{downtime}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-6 rounded-3xl border border-brand-200 bg-brand-50 px-7 py-8 md:px-10 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div>
              <h3 className="text-base font-semibold text-ink">The cheapest job is the one you plan for</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A floor kept on interim scrub and recoat work needs a full strip far less often than one that is
                left until it fails. Floor care sits naturally inside a{" "}
                <Link
                  href="/services/commercial-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  commercial cleaning plan
                </Link>
                , where the daily dust mopping and damp mopping is actually protecting the finish rather than
                working against it.
              </p>
            </div>
            <Link href="/contact#quote-form" className="cta-primary shrink-0">
              Ask Which One You Need
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── FLOOR TYPES ─────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <span className="eyebrow">Surfaces</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Floor Types We Strip and Wax
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Floor finish belongs on some surfaces and does real damage on others. Identifying the material
                correctly is the first thing that happens at a walkthrough, because the stripping method, the
                dilution, and the coat count all follow from it.
              </p>
              <div className="mt-8 border-t border-brand-100 pt-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-brand-700" aria-hidden />
                  Floors we will not wax
                </h3>
                <ul className="mt-3 grid gap-2.5">
                  {floorTypeExclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="divide-y divide-brand-100 border-y border-brand-100">
              {floorTypes.map(({ title, description }, index) => (
                <Reveal key={title} delay={index * 0.06} className="py-5">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── FACILITIES ──────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Who We Clean For"
            title="Facilities We Provide Commercial Floor Waxing For"
            description="Floor plans, traffic, and available windows differ enough between these that the scope and schedule are always written per building."
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
        </Container>
      </section>

      {/* ── SCHEDULING ──────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <span className="eyebrow">Timing & Downtime</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Scheduling Floor Work Around Your Operation
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Strip and wax is the most disruptive service in commercial cleaning, and almost all of the
                disruption is dry time rather than labour. The floor has to be fully dry after neutralizing, and
                every coat has to dry before the next one goes down, which is why the window matters more than the
                crew size.
              </p>
              <ul className="mt-6 grid gap-2.5">
                {schedulingNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
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
                <span className="eyebrow-light">Why Facilities Work With Us</span>
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
                  Get a Free Floor Assessment
                </Link>
                <span className="pl-1 text-[11px] text-white/35">Takes 60 seconds · No obligation</span>
              </div>
              <Link href="/services/commercial-cleaning" className="cta-ghost">
                Explore Commercial Cleaning
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
            title="How a Strip and Wax Project Runs"
            description="From the first call to a finished floor and a maintenance plan. Scope, coat count, window, and cost are all settled in writing before anyone opens a container of stripper."
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
              Book a Floor Walkthrough
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Floors
            </Link>
          </div>
        </Container>
      </section>

      {/* ── PRICING FACTORS ─────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface scroll-mt-24" id="pricing">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
                <Wallet className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                What Affects Strip and Wax Cost
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Commercial floor stripping and waxing is quoted per building rather than from a published rate,
                because two floors of the same size can be very different jobs. A room stripped last year and a
                room carrying eight years of finish take completely different amounts of work to bring back.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The walkthrough turns the factors on the right into a written scope and a number, with no
                obligation attached. If a scrub and recoat would get you most of the result for a fraction of the
                cost, that is what we will quote.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Request a Written Quote
                </Link>
              </div>
            </div>

            <ul className="grid gap-2.5 rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              {pricingFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-2 text-sm leading-relaxed text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="eyebrow">Our Work</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Floor Care Results From Seattle-Area Jobs
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                Every photo below is from a real job. Restored hard floors are the clearest read available on the
                standard your building would be held to, so it is worth looking before you book anyone.
              </p>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-100 lg:mb-2">
              <Images className="h-7 w-7 text-brand-700" aria-hidden />
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-white px-7 py-9 md:px-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
              <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
            </div>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              Commercial Floor Stripping and Waxing Across the Seattle Area
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              We provide strip and wax floor services throughout Seattle and the greater Puget Sound region.
              Because the work runs in tight after-hours windows, availability depends on the schedule as much as
              the distance, so it is worth a call to confirm we can commit to the window your building needs.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-brand-100 bg-surface px-3.5 py-1.5 text-xs font-medium text-ink"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">{siteConfig.serviceAreaSummary}</p>
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Strip and Wax Questions</h2>
              <p className="mt-4 text-base text-muted">
                What facility managers and building owners ask us most before booking commercial floor
                restoration.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Not sure what your floor needs?</p>
                <p className="mt-1 text-sm text-muted">
                  Send us a photo and rough square footage and we&apos;ll tell you plainly whether it is a full
                  strip or a recoat.
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

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading eyebrow="Related Services" title="Services Booked Alongside Floor Restoration" />
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
                <p className="eyebrow-light">Strip &amp; Wax in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Let&apos;s Look at Your Floors
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Nothing is committed until we have walked the building, identified the floor, measured the area,
                  and worked out whether it genuinely needs a full strip. Then you get a written scope with the
                  coat count, the work window, the return-to-service timing, and the cost.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Free on-site floor assessment", "Overnight & weekend windows", "Written scope before we start"].map(
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
                    Get a Free Floor Assessment
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(stripAndWaxSchema) }} />
    </>
  );
}
