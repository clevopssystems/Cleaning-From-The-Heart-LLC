import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  Brush,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Cog,
  Droplets,
  HardHat,
  Home,
  Key,
  Layers,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Utensils,
  Wind,
  Wrench
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { GroupedScopeAccordion, type GroupedScopeItem } from "@/components/services/GroupedScopeAccordion";
import { siteConfig, serviceAreas } from "@/lib/site";
import { quoteHrefForService } from "@/lib/quote-form";

// Quote CTAs on this page preselect this service in the quote form.
const QUOTE_HREF = quoteHrefForService("post-construction-renovation-cleanup");

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const PAGE_PATH = "/services/post-construction-renovation-cleanup";

const PAGE_TITLE = "Post-Construction Cleaning Seattle | Renovation Cleanup";
const PAGE_DESCRIPTION =
  "Post-construction and renovation cleaning in Seattle for new builds, remodels, tenant improvements and build-outs. Fine construction dust removed. Free quote.";

// ─────────────────────────────────────────────────────────────────────────
// IMAGES
//
// One real asset already existed for this service (`/home/services/
// post-construction.jpg`, used on the home page service card). Everything
// else below is a temporary royalty-free stock photograph committed under
// /public/images/services/post-construction-renovation-cleanup/ and
// documented in docs/temporary-post-construction-image-sources.md.
//
// No caption or alt text on this page presents any of it as Cleaning From
// The Heart work or as a Seattle client property. See the IMAGE NOTES block
// above the gallery CTA for the shots still needed from the business.
// ─────────────────────────────────────────────────────────────────────────
const IMG_DIR = "/images/services/post-construction-renovation-cleanup";
const OVERVIEW_IMAGE = `${IMG_DIR}/residential-renovation-cleanup.webp`;
const DUST_IMAGE = `${IMG_DIR}/construction-dust-detail.webp`;
const REMODEL_IMAGE = `${IMG_DIR}/kitchen-renovation-cleanup.webp`;
const COMMERCIAL_IMAGE = `${IMG_DIR}/commercial-buildout-cleanup.webp`;
const NEW_BUILD_IMAGE = `${IMG_DIR}/new-construction-interior.webp`;
const DETAIL_IMAGE = `${IMG_DIR}/trim-and-floor-detail.webp`;
const HANDOVER_IMAGE = `${IMG_DIR}/finished-kitchen-handover.webp`;
const ROUGH_CLEAN_IMAGE = "/home/services/post-construction.jpg";

export const metadata: Metadata = {
  // `absolute` bypasses the layout title template, which would otherwise
  // append the brand a second time and push the title past a usable length.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    // Primary
    "post construction cleaning Seattle",
    "post construction cleaning Seattle WA",
    "post construction cleaning services Seattle",
    "construction cleanup Seattle",
    "construction cleaning Seattle",
    "construction site cleanup Seattle",
    // Renovation / remodel cluster
    "post renovation cleaning Seattle",
    "renovation cleaning Seattle",
    "renovation cleanup Seattle",
    "after construction cleaning Seattle",
    "final construction cleaning Seattle",
    "post remodel cleaning Seattle",
    "remodeling cleanup Seattle",
    // Commercial intent
    "commercial post construction cleaning Seattle",
    "construction cleanup company Seattle",
    "post construction cleaning contractors Seattle",
    "builder cleanup services Seattle",
    "construction turnover cleaning Seattle",
    "tenant improvement cleaning Seattle",
    "office build out cleaning Seattle",
    "retail build out cleaning Seattle",
    // Residential intent
    "residential post construction cleaning Seattle",
    "home renovation cleaning Seattle",
    "new construction house cleaning Seattle",
    "kitchen remodel cleaning Seattle",
    "bathroom remodel cleaning Seattle",
    "condo renovation cleaning Seattle",
    "apartment renovation cleaning Seattle"
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
        alt: "Vacuum and broom on newly installed flooring in a home at the end of a renovation"
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
// This page owns post-construction, post-renovation and post-remodel
// CLEANING: fine construction dust, residue, film, adhesive and label
// removal, and the detail work that gets a finished space ready for
// walkthrough, handover, opening or occupancy.
//
// It deliberately does NOT target:
//   - junk hauling / cleanout intent  -> /services/junk-removal
//     (that page already links here and states the split; keep it intact)
//   - standalone full window cleaning -> /services/window-cleaning
//   - carpet extraction               -> /services/carpet-cleaning
//   - floor stripping and waxing      -> /services/strip-and-wax
//   - exterior washing                -> /services/pressure-washing
//   - recurring maintenance cleaning  -> /services/commercial-cleaning
//   - occupancy-change cleaning       -> /services/move-in-move-out-cleaning
//
// CAPABILITY LIMITS. None of the following is claimed anywhere on this site
// and none may be added here without confirmation from the business:
//   - asbestos, lead, mold, biohazard or hazardous-waste work of any kind
//   - HEPA filtration, air scrubbing, negative air, or any named equipment
//   - demolition, debris hauling of regulated construction material
//     (drywall, lumber, concrete), dumpster service or site waste disposal
//   - wall washing, paint touch-up, refinishing or surface restoration
//   - certifications, contractor partnerships, project counts, crew counts
//   - pricing, square-foot rates, turnaround or response-time promises
//
// Claims used below are limited to what the site documents elsewhere:
// locally owned and family-operated, licensed and insured, 30+ years of
// Seattle cleaning experience, Mon-Sat 7 AM-7 PM, consistent crew, written
// scope agreed before work starts, free quotes, direct line to the owner.
// ─────────────────────────────────────────────────────────────────────────

// Order mirrors the section order on the page.
const jumpLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Who We Help", href: "#who" },
  { label: "What's Included", href: "#scope" },
  { label: "Cleaning Stages", href: "#stages" },
  { label: "Commercial", href: "#commercial" },
  { label: "Residential", href: "#residential" },
  { label: "Remodels", href: "#renovation" },
  { label: "Timing", href: "#scheduling" },
  { label: "Quotes", href: "#quote" },
  { label: "FAQs", href: "#faq" }
];

const glanceItems = [
  "New builds, remodels, build-outs and tenant improvements",
  "Residential and commercial projects across Seattle",
  "Fine dust, residue, adhesive, labels and job-site film",
  "Scope agreed in writing before the crew is booked"
];

const trustStripItems = [
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" },
  { Icon: ClipboardList, label: "Written scope and free quote first" },
  { Icon: ShieldCheck, label: "Licensed, insured, locally owned" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// ─── Who the service is for ───────────────────────────────────────────────
const audiences = [
  {
    Icon: HardHat,
    title: "General Contractors",
    description:
      "Final cleaning at the end of a build, scheduled against your own build schedule rather than ours. Most contractors bring us in once the dust-producing trades are off site and the punch list is closing, so the space presents properly at the owner walkthrough."
  },
  {
    Icon: Home,
    title: "Home Builders",
    description:
      "Detailed cleaning of a newly completed house before the buyer or occupant sees it. New builds carry a specific residue mix, sawdust, drywall dust, label adhesive and manufacturing film, and none of it comes off with a routine clean."
  },
  {
    Icon: Wrench,
    title: "Remodeling Contractors",
    description:
      "Cleanup after kitchens, bathrooms, additions, basement conversions and whole-property renovations. Remodels are the hardest for dust, because the client is usually still living around the work and notices every surface it reached."
  },
  {
    Icon: Key,
    title: "Property Managers",
    description:
      "Cleaning after unit renovations, common-area improvements and building upgrades, timed against a leasing or re-occupancy date. Multiple units or addresses can be coordinated through one point of contact."
  },
  {
    Icon: Building2,
    title: "Developers & Owners",
    description:
      "Presentation cleaning before leasing, sale, listing photography or handoff. When a space is being shown rather than used, the finish standard is set by what a camera and a prospective tenant will notice first."
  },
  {
    Icon: Store,
    title: "Business Owners",
    description:
      "Retail units, restaurants, clinics and offices coming out of a fit-out and heading toward an opening date. Front-of-house surfaces, glass and floors carry most of the visible weight on day one."
  },
  {
    Icon: Cog,
    title: "Facility Managers",
    description:
      "Cleaning after in-building work: a floor refurbishment, a partition change, a restroom upgrade, an HVAC or lighting project. Usually with occupied areas nearby that have to stay usable throughout."
  },
  {
    Icon: Sparkles,
    title: "Homeowners",
    description:
      "The most common residential call. The builders have finished, the house is technically done, and it is unlivable until someone deals with the fine grey film sitting on every horizontal surface in it."
  }
];

// ─── What is included, grouped scope accordion ────────────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Sparkles",
    title: "Construction Dust & Fine Debris",
    summary: "The core of the service, dust removal from every accessible surface in the agreed areas.",
    intro:
      "Construction dust is the reason this service exists, and it never stays in the room the work happened in. We work top down and room by room, so dust knocked loose from high surfaces is picked up on the way through rather than left on the floor behind us.",
    tasks: [
      "Fine drywall, plaster and sanding dust removal",
      "Sawdust and cutting debris from framing and trim work",
      "Dust on ledges, sills, ledgers and shelf edges",
      "Corners, edges and the tops of door frames",
      "Vacuuming of accessible surfaces and floor areas",
      "Light leftover job-site debris and packaging remnants",
      "Dust in adjoining rooms it has migrated into",
      "A second dust pass where settling continues after the first"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Walls, Doors, Trim & Baseboards",
    summary: "Doors, frames, baseboards, molding, switches, outlets and the edges dust settles into.",
    intro:
      "Trim carries more construction residue than anything else in a finished room. Baseboards collect dust along their top edge, door frames hold it on every ledge, and new switch and outlet plates almost always carry installation marks. This is detail wiping and dust removal on accessible surfaces, not wall washing or paint touch-up.",
    tasks: [
      "Door faces, edges, frames and casings",
      "Baseboards, molding and trim",
      "Window sills, ledges and interior casings",
      "Light switch plates and outlet covers",
      "Handrails, railings and stair trim",
      "Spot removal of accessible paint specks and marks",
      "Adhesive residue and label removal where the surface allows",
      "Accessible wall spot-cleaning around handled areas"
    ]
  },
  {
    iconName: "AppWindow",
    title: "Windows, Glass & Mirrors",
    summary: "Interior glass detailing, frames, tracks, sills and the labels left on new units.",
    intro:
      "New glass arrives with manufacturer labels, adhesive and a film of construction dust, and the tracks below it collect grit that would otherwise get ground in the first time a sash moves. This is post-construction glass detailing on accessible interior glass. A full inside-and-out window service is quoted separately.",
    tasks: [
      "Interior window glass and glazed partitions",
      "Manufacturer labels and sticker adhesive on new units",
      "Window frames, sills and reveals",
      "Window and slider tracks cleared of grit and dust",
      "Glass doors, entry glass and interior screens",
      "Mirrors, backsplash glass and glazed cabinet fronts",
      "Shower and bath glass on new installs",
      "Exterior glass and upper-floor panes quoted as an add-on"
    ]
  },
  {
    iconName: "Utensils",
    title: "Kitchens & Cabinetry",
    summary: "Cabinet exteriors and interiors, counters, backsplashes, sinks and appliance faces.",
    intro:
      "New cabinetry is the surface clients inspect most closely and the one most likely to still carry sawdust inside it. Empty cabinets and drawers are cleaned inside as well as out, because a kitchen that looks finished on the doors and is still gritty in the drawer boxes is not a finished kitchen.",
    tasks: [
      "Cabinet and drawer exteriors, doors and edges",
      "Empty cabinet interiors, drawer boxes and shelves",
      "Countertops and backsplashes",
      "Sinks, faucets, drains and surrounds",
      "Appliance exteriors, fronts, handles and edges",
      "Cabinet hardware, knobs and pulls",
      "Toe kicks, cabinet undersides and cabinet tops",
      "Pantry and utility shelving"
    ]
  },
  {
    iconName: "ShowerHead",
    title: "Bathrooms",
    summary: "New fixtures, tiling, grout haze, glass and vanities brought to a usable finish.",
    intro:
      "Newly finished bathrooms carry grout haze, sealant residue, tile dust and protective film from the new fixtures. Everything comes out of the room before it becomes a functioning bathroom, so this is a full detail rather than a routine bathroom clean.",
    tasks: [
      "Basins, toilets, cisterns and vanity units",
      "Bathtubs, shower pans and enclosures",
      "Tiled walls and floors, and accessible grout lines",
      "Grout haze and installation film on new tiling",
      "Mirrors, cabinets and shower glass",
      "Faucets, showerheads, rails and fixtures",
      "Exhaust fan covers and accessible vents",
      "Protective film and labels on new fixtures"
    ]
  },
  {
    iconName: "Footprints",
    title: "Floors & Newly Installed Flooring",
    summary: "Vacuuming, mopping and edge detailing across new hard floors and carpet.",
    intro:
      "New flooring holds the last of the fine dust, and it is also the surface most easily marked by the wrong method. Hard floors are vacuumed before anything wet touches them, so grit is lifted rather than dragged across a new finish, and the products used are matched to the floor that was actually installed.",
    tasks: [
      "Vacuuming of hard floors, carpet and transitions",
      "Mopping of sealed hard floors with a suitable method",
      "Edge and perimeter detailing where dust collects",
      "Corners, thresholds and door transitions",
      "Stair treads, risers and stair edges",
      "Removal of protective floor coverings where agreed",
      "Adhesive spots and installation marks on accessible floor areas",
      "Carpet extraction and floor finishing quoted separately"
    ]
  },
  {
    iconName: "Frame",
    title: "Fixtures, Vents & Detail Areas",
    summary: "Hardware, vent covers, light fixtures, rails, shelving and high-touch detail points.",
    intro:
      "The detail points are what separate a final clean from a general one. Vent and register faces collect dust throughout the build and push it back into the room the first time the system runs. Hardware and fixtures carry handling marks from every trade that passed through.",
    tasks: [
      "Door and cabinet hardware, handles and pulls",
      "Accessible vent covers, registers and return-air grilles",
      "Light fixture exteriors and accessible shades",
      "Switch plates, outlets and control panels",
      "Handrails, rails and accessible ledges",
      "Built-in shelving and storage interiors",
      "Radiators, trims and accessible fixture surrounds",
      "Final fingerprint and smudge pass on high-touch points"
    ]
  }
];

// ─── The three stages ─────────────────────────────────────────────────────
const cleaningStages = [
  {
    Icon: Truck,
    step: "Stage One",
    title: "Rough Construction Cleaning",
    description:
      "The early clear-down, booked while work is still ongoing or between trades. The focus is coarse: loose debris, packaging remnants, cut-off scraps, heavy surface dust and general job-site untidiness, cleared so the following trades work in a usable space and the property is ready for detailing later.",
    points: [
      "Loose debris and packaging cleared from work areas",
      "Coarse dust knocked down and vacuumed",
      "Access routes, stairs and thresholds made usable",
      "Regulated construction waste stays with your site disposal"
    ]
  },
  {
    Icon: Sparkles,
    step: "Stage Two",
    title: "Final Construction Cleaning",
    description:
      "The main event, and what most people mean when they ask for post-construction cleaning. Comprehensive dust removal top to bottom across the agreed areas, then detail work through trim, glass, cabinetry, bathrooms, fixtures and floors until the space reads as finished rather than recently built.",
    points: [
      "Full top-down dust removal across the agreed areas",
      "Detail work on trim, glass, cabinetry and bathrooms",
      "Labels, adhesive residue and installation film removed",
      "Floors vacuumed, detailed and cleaned by method"
    ]
  },
  {
    Icon: Brush,
    step: "Stage Three",
    title: "Touch-Up & Handover Cleaning",
    description:
      "A lighter pass just before the space is seen or used. Dust keeps settling for days after the last power tool goes quiet, and any trade returning to finish punch-list work brings more in with them. A touch-up clears the residual film, fingerprints and smudges so the property presents at its best on the day that matters.",
    points: [
      "Residual settled dust cleared from key surfaces",
      "Fingerprints and smudges off glass and hardware",
      "Detail pass on the areas that will be looked at first",
      "Timed to the walkthrough, opening or move-in date"
    ]
  }
];

// ─── Renovation and remodel project cards ─────────────────────────────────
const renovationTypes = [
  {
    Icon: Utensils,
    title: "Kitchen Remodel Cleanup",
    description:
      "The densest cleaning job in a house. New cabinetry has to be cleaned inside and out, countertops and backsplashes carry sealant and installation residue, appliance faces arrive under protective film, and sawdust ends up in every drawer box. Kitchens also sit at the center of a home, so their dust reaches everywhere else."
  },
  {
    Icon: Droplets,
    title: "Bathroom Remodel Cleanup",
    description:
      "Small rooms with a high concentration of new finishes. Grout haze across fresh tile, sealant residue along edges, protective film on faucets and shower glass, tile dust in the shower pan, and a fixture list that all needs detailing before the room can actually be used."
  },
  {
    Icon: Home,
    title: "Whole-Home Renovation Cleanup",
    description:
      "Multi-room projects where nothing was untouched and dust has had weeks to migrate. Cleaning runs room by room in a fixed order rather than as one sweep, because the only way to finish a whole-house clean is to close rooms off behind you as they are done."
  },
  {
    Icon: Building2,
    title: "Office Renovation Cleanup",
    description:
      "Partition changes, ceiling and lighting works, new flooring and refreshed restrooms, often in a building that stayed occupied throughout. Glass partitions, workstation surfaces and carpet edges carry the visible residue, and the cleaning usually has to fit outside working hours."
  },
  {
    Icon: Store,
    title: "Retail & Restaurant Fit-Out Cleanup",
    description:
      "Spaces heading toward an opening date, where the customer-facing finish is the whole point. Display glass, storefronts, new counters, front-of-house floors and restrooms carry the weight. Back-of-house kitchen equipment cleaning is a separate specialty with its own page."
  },
  {
    Icon: Key,
    title: "Apartment & Condo Renovation Cleanup",
    description:
      "Unit renovations in buildings with shared corridors, elevators and access rules. The cleaning scope usually extends past the front door into the common areas the work dirtied, and the date is set by a leasing or completion deadline rather than by the trades."
  }
];

// ─── Commercial property types ────────────────────────────────────────────
const commercialProjectTypes = [
  "Office fit-outs and refurbishments",
  "Tenant improvement projects",
  "Retail units and storefront build-outs",
  "Restaurant and café front-of-house fit-outs",
  "Multi-tenant and mixed-use buildings",
  "Apartment and condo unit renovations",
  "Common-area and lobby improvements",
  "School and educational facility works",
  "Warehouse and light industrial upgrades",
  "Partition, ceiling and lighting works"
];

// ─── Residential project types ────────────────────────────────────────────
const residentialProjectTypes = [
  "Newly built houses and townhouses",
  "Kitchen and bathroom remodels",
  "Home additions and bump-outs",
  "Basement conversions and finishing",
  "Attic conversions",
  "Flooring replacement projects",
  "Interior painting projects",
  "Condo and apartment renovations",
  "Whole-home renovations",
  "Garage and utility conversions"
];

// ─── Newly installed finishes ─────────────────────────────────────────────
const finishTypes = [
  {
    title: "Hardwood & Engineered Floors",
    note: "Vacuumed before anything wet, then cleaned with a method suited to a new factory or site-applied finish. Standing water and aggressive products stay away from new wood."
  },
  {
    title: "Luxury Vinyl Plank & Laminate",
    note: "Grit lifted first so it is not dragged across the wear layer, then a damp clean rather than a wet one. Seams and edges get the detail, because that is where installation dust sits."
  },
  {
    title: "Tile & Grout",
    note: "Grout haze and tile dust cleared from the surface and the joint lines. Fresh grout and sealant are treated as still curing unless the installer has confirmed otherwise."
  },
  {
    title: "Natural Stone & Quartz",
    note: "Cleaned with pH-appropriate methods rather than general-purpose products. Acidic and abrasive cleaners are kept off stone, and any specialist sealing stays with the installer."
  },
  {
    title: "Stainless Steel",
    note: "Protective film and adhesive removed, then cleaned with the grain so the finish stays even. Appliance faces, backsplashes and hardware all show handling marks until this pass is done."
  },
  {
    title: "Glass & Mirrors",
    note: "Labels, adhesive and construction film off first, then the glass itself. Frames, tracks and edges are detailed at the same time so grit is not left to be pushed back onto clean glass."
  },
  {
    title: "Painted Walls & Trim",
    note: "Dust removed and accessible marks addressed with a light touch. New paint stays fragile for weeks, so this is dust and spot work, not wall washing or scrubbing."
  },
  {
    title: "New Cabinetry & Millwork",
    note: "Inside and out, including drawer boxes, shelves, toe kicks and cabinet tops. Finishes vary widely between painted, veneered and lacquered work, so the method is matched to what was installed."
  },
  {
    title: "Countertops & Worktops",
    note: "Installation residue, sealant smears and film cleared from the surface, edges and undersides. Cut-outs around sinks and cooktops hold the most debris and get checked directly."
  },
  {
    title: "Fixtures & Hardware",
    note: "Faucets, handles, rails, lighting and switch plates cleaned of handling marks and dust. Plated and brushed finishes mark easily, so they get cloth and care rather than anything abrasive."
  }
];

// ─── Readiness checklist ──────────────────────────────────────────────────
const readinessChecklist = [
  "Sanding, cutting, grinding and drilling are finished",
  "Painting is complete or nearly complete",
  "Flooring is installed and any protective covering can come up",
  "Cabinetry, fixtures and hardware are in place",
  "Bulk construction waste and materials have left the property",
  "Power and water are on and accessible in the work areas",
  "The property is clear enough for a crew to work through it",
  "You have a date for the walkthrough, handover or occupancy"
];

// ─── Quote factors ────────────────────────────────────────────────────────
const quoteFactors = [
  {
    Icon: Ruler,
    title: "Size and room count",
    description:
      "Total floor area and how it is divided. Ten small rooms take longer than one large one, because every room adds its own trim, corners, door frames and edges."
  },
  {
    Icon: HardHat,
    title: "Project type and stage",
    description:
      "A single-room remodel, a whole-house renovation and a commercial fit-out are different jobs. So is a property mid-build versus one where the last trade left a week ago."
  },
  {
    Icon: Wind,
    title: "How much dust is present",
    description:
      "The single biggest variable. Heavy drywall sanding leaves a different job from a project that was mostly assembly work, even at identical square footage."
  },
  {
    Icon: Layers,
    title: "Surfaces and finishes involved",
    description:
      "Cabinetry, tiling, stone, stainless and extensive glazing all take detail time. A space with a lot of new finishes takes longer than one with painted walls and a floor."
  },
  {
    Icon: Boxes,
    title: "Glass, cabinetry and floor types",
    description:
      "Window and glass count, how many cabinets need interior cleaning, and what the floors actually are. Each changes the method and the time before it changes anything else."
  },
  {
    Icon: Paintbrush,
    title: "Residue and marks left behind",
    description:
      "Label adhesive, protective film, paint specks and installation marks are slow, hand-worked jobs. How much of it is present is worth telling us up front."
  },
  {
    Icon: Truck,
    title: "Access and site conditions",
    description:
      "Stairs, elevators, parking, security, building access hours and whether the property still has materials stored in it all affect how the visit runs."
  },
  {
    Icon: CalendarClock,
    title: "Timing and stages required",
    description:
      "Whether you need one final clean or a rough, final and touch-up sequence, and whether it has to happen out of hours or against a fixed handover date."
  }
];

const quotePrepPoints = [
  "Property type, address area and approximate size",
  "What the project was, and what stage it has reached",
  "How many rooms, bathrooms and kitchens are involved",
  "Rough window and glass count, and whether exterior glass is wanted",
  "What the new flooring is, and whether carpet is involved",
  "Whether cabinets and drawers need cleaning inside",
  "Whether any bulk construction waste is still on site",
  "The date of the walkthrough, handover, opening or move-in"
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardList,
    title: "Scope in writing first",
    description:
      "The areas, the surfaces and the add-on work are agreed before anything is booked, along with anything that falls outside the service. No assumptions on either side at handover."
  },
  {
    Icon: Sparkles,
    title: "Built for fine dust",
    description:
      "Construction cleaning is a different job from routine cleaning, and it is planned that way: top down, room by room, with the ledges, edges and corners that ordinary cleaning skips."
  },
  {
    Icon: Layers,
    title: "Residential and commercial",
    description:
      "New builds, home remodels, office fit-outs, retail build-outs and unit renovations. The same standard applied to whichever type of project you are finishing."
  },
  {
    Icon: CalendarClock,
    title: "Worked around your schedule",
    description:
      "The cleaning scope is coordinated around the project timeline, including after-hours work where a building stays occupied. Mon-Sat, 7 AM to 7 PM."
  },
  {
    Icon: MessageCircle,
    title: "Direct communication",
    description:
      "You talk to the people doing the work, and to the owner. No call center, no ticket queue, no chasing an account manager for an answer about your own project."
  },
  {
    Icon: ShieldCheck,
    title: "Local, licensed and insured",
    description:
      "Locally owned and family-operated, licensed and insured, with 30+ years of Seattle cleaning work behind the name. Not a franchise routing your call somewhere else."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Junk Removal",
    description:
      "Furniture, clutter and eligible non-hazardous items taken off the property. Often booked alongside a renovation cleanup when the project also left things behind that need hauling.",
    href: "/services/junk-removal",
    ctaLabel: "View junk removal"
  },
  {
    title: "Window Cleaning",
    description:
      "Full interior and exterior glass service, including upper-floor panes. Post-construction glass detailing covers accessible interior glass, this covers the rest of the property.",
    href: "/services/window-cleaning",
    ctaLabel: "View window cleaning"
  },
  {
    title: "Carpet Cleaning",
    description:
      "Deep extraction for carpet that has taken construction traffic and fine dust. Vacuuming is part of the construction clean, extraction is a separate service.",
    href: "/services/carpet-cleaning",
    ctaLabel: "View carpet cleaning"
  },
  {
    title: "Strip & Wax",
    description:
      "Stripping and refinishing of commercial hard floors. Useful where a fit-out has left an existing VCT or vinyl floor needing more than cleaning to look new again.",
    href: "/services/strip-and-wax",
    ctaLabel: "View strip and wax"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description:
      "Detailed cleaning for a property changing occupants. The natural next step when a renovated unit goes straight into a lease or a sale.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "View move cleaning"
  },
  {
    title: "Commercial Cleaning",
    description:
      "Recurring janitorial service once the space is open and in use. Many commercial fit-out clients move straight from the final clean onto a maintenance schedule.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Pressure Washing",
    description:
      "Exterior hard surfaces around a completed project: driveways, walkways, patios and entrances that took the traffic and mess of the build.",
    href: "/services/pressure-washing",
    ctaLabel: "View pressure washing"
  },
  {
    title: "Commercial Deep Cleaning",
    description:
      "A one-time deep clean for a commercial space that is in use rather than newly built. The right service when there is no construction involved at all.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "View deep cleaning"
  }
];

// ─── FAQs ─────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What does post-construction cleaning include?",
    answer:
      "Removal of fine construction dust from every accessible surface in the agreed areas, then detail work through the property: doors, frames, baseboards and trim, interior glass, window frames, sills and tracks, cabinetry inside and out, countertops, sinks and appliance exteriors, bathrooms and newly installed fixtures, accessible vent covers, light fixture exteriors, switch plates, hardware and rails, and finally the floors. Manufacturer labels, sticker adhesive and protective film on new fixtures come off as part of it. The exact list is written into your quote, because a single-room remodel and a full building fit-out are not the same scope."
  },
  {
    question: "Do you clean both residential and commercial construction projects in Seattle?",
    answer:
      "Yes, both, throughout Seattle and the surrounding Puget Sound area. On the residential side that means new builds, kitchen and bathroom remodels, additions, basement conversions, flooring replacement and whole-home renovations, which are some of the most common calls we get. On the commercial side it means office fit-outs, tenant improvements, retail and restaurant build-outs, common-area work, unit renovations in managed buildings and facility upgrades. The work is the same in principle, but the scope, the access arrangements and the deadline pressure usually differ, so the two are quoted separately. Availability for a specific address and date is confirmed when we quote rather than assumed from a service-area map."
  },
  {
    question: "Can you remove drywall dust and fine construction dust?",
    answer:
      "Yes, that is the core of the service. Drywall dust is extremely fine, it stays airborne long after the sanding stops, and it settles on every horizontal surface including ones nobody thinks to look at: the tops of door frames, cabinet tops, ledges, sills, shelf edges and vent covers. We work top down so dust disturbed from high surfaces is collected on the way through, and on dustier projects a second pass is often worth planning for, because settling continues for days."
  },
  {
    question: "Do you clean paint splatter, adhesive residue and stickers?",
    answer:
      "Yes, within reason. Manufacturer labels, sticker adhesive, protective film and installation residue on new glass, fixtures and appliances are a standard part of a final construction clean. Accessible paint specks and marks on hard surfaces are addressed where the surface allows it. What we will not do is anything that risks the finish underneath, so heavy paint on delicate surfaces, refinishing and paint touch-up stay with the contractor who applied it."
  },
  {
    question: "Do you clean windows after construction?",
    answer:
      "Interior glass detailing is part of the final clean: the glass itself, plus labels and adhesive on new units, frames, sills, reveals and the tracks underneath. If you want the full property done inside and out, including upper-floor exterior panes, that is our dedicated window cleaning service and it is quoted as an add-on or booked separately. It is worth deciding which you want before the quote, because it changes the time on site."
  },
  {
    question: "Do you clean inside cabinets after construction?",
    answer:
      "Yes, when the cabinets are empty. Empty cabinet interiors, drawer boxes and shelves are cleaned as part of a kitchen or bathroom in the scope, because new cabinetry almost always still holds sawdust and drilling debris inside it. Cabinets that are already full are cleaned on the outside only, since we do not unpack or move a client's belongings."
  },
  {
    question: "What is the difference between post-construction cleaning and deep cleaning?",
    answer:
      "Deep cleaning deals with accumulated dirt in a space that has been lived in or used: grease, soap scum, built-up grime and neglected areas. Post-construction cleaning deals with what building work leaves behind: fine dust, grout haze, adhesive, labels, protective film and installation residue, on surfaces that are brand new and easily marked. The dust is finer, it is everywhere rather than concentrated, and the surfaces need method choices a routine deep clean never has to make. If your space has no construction involved, our deep cleaning service is the right one."
  },
  {
    question: "When should post-construction cleaning be scheduled?",
    answer:
      "Usually once the dust-producing trades have substantially finished, sanding, cutting, grinding and drilling in particular, and before furniture, stock or occupants arrive. Cleaning too early means paying to clean surfaces that will be dusty again within a day. Cleaning too late means the mess gets pushed into a turnover date with no room to move. If trades are still working through the punch list, a rough clean now and a touch-up closer to the date is usually the more practical split."
  },
  {
    question: "How long does post-construction cleaning take?",
    answer:
      "It depends far more on dust levels and detail work than on floor area. A single-room remodel can be a few hours. A whole-house renovation or a commercial fit-out is usually a full day or several, sometimes split across stages. Windows, cabinetry interiors, extensive tiling and heavy label and adhesive removal are the things that most often extend a visit. We give you a realistic expectation with the written quote rather than a number over the phone before anyone has seen the space."
  },
  {
    question: "What affects post-construction cleaning cost in Seattle?",
    answer:
      "Property size and room count, project type and the stage it is at, how much fine dust is actually present, how many new finishes need detail work, window and glass count, whether cabinets need cleaning inside, floor types, how much label and adhesive residue is left, site access, and whether you need one visit or a staged rough-final-touch-up sequence. We do not publish square-foot rates, because two projects of identical size routinely need very different amounts of work. Every quote is free, in writing, and specific to the property."
  },
  {
    question: "Can you work with contractors and clean before a walkthrough, opening or move-in?",
    answer:
      "Yes on both counts. Contractors, builders, remodelers, developers and property management companies are a regular part of this work, and owner walkthroughs, final inspections, tenant handovers, move-in dates, listing photography and opening days are what most of these jobs are timed against. The cleaning scope is coordinated around your build schedule, including multiple visits at different stages and after-hours work where a building stays occupied, and multiple units or addresses can run through one point of contact. Tell us the date when you request the quote and the scope is planned backwards from it. What we will not do is promise a date before we have seen what the job involves."
  },
  {
    question: "Do you remove construction debris and building waste?",
    answer:
      "Light job-site debris and packaging remnants in the areas we are cleaning are part of the work. Bulk construction waste is not: drywall sheets, lumber, cut-offs, concrete, tile waste, pallets and treated material need your site disposal arrangements or a licensed disposal provider, and they sit outside both this service and our junk removal service. We also do not handle asbestos, lead, mold or any other hazardous or regulated material, and we would tell you so plainly rather than take the booking."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component, and
// Organization / LocalBusiness live in app/layout.tsx under
// `${SITE_URL}/#business`. Neither is repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const postConstructionSchema = {
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
      name: "Post-Construction & Renovation Cleaning in Seattle",
      serviceType: "Post-Construction Cleaning & Renovation Cleanup",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area general contractors, home builders, remodeling contractors, property managers, developers, business owners, facility managers and homeowners"
      },
      description:
        "Post-construction, post-renovation and post-remodel cleaning in Seattle for new builds, home remodels, commercial build-outs and tenant improvements. Fine construction dust removal across accessible surfaces, plus detail cleaning of trim, doors, interior glass, window frames and tracks, cabinetry inside and out, countertops, bathrooms, fixtures, vent covers and floors, including label, adhesive and protective film removal on new installations. Available as a rough clear-down, a final construction clean, a touch-up before handover, or any combination. Bulk construction waste disposal, demolition and hazardous or regulated material are outside this service.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Post-Construction & Renovation Cleaning Options",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rough Construction Cleaning",
              description:
                "Early-stage clear-down of loose debris, packaging remnants and coarse dust so following trades work in a usable space and the property is ready for detailed cleaning later."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Final Construction Cleaning",
              description:
                "Comprehensive top-down dust removal and detail cleaning across trim, doors, interior glass, cabinetry, bathrooms, fixtures and floors at the end of a Seattle build or renovation."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Touch-Up & Handover Cleaning",
              description:
                "A light final pass clearing settled dust, fingerprints and smudges immediately before an owner walkthrough, inspection, opening day, move-in or tenant occupancy."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Post-Construction & Remodel Cleaning",
              description:
                "Construction and renovation cleaning for Seattle homes, condos and townhouses after new builds, kitchen and bathroom remodels, additions, basement conversions and flooring replacement."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Post-Construction & Build-Out Cleaning",
              description:
                "Construction cleaning for Seattle offices, retail units, restaurants, schools and managed properties after fit-outs, tenant improvements, common-area works and facility upgrades."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Construction Dust & Residue Detailing",
              description:
                "Fine drywall and sanding dust removal plus label, sticker adhesive, protective film and installation residue removal from newly installed glass, cabinetry, fixtures and hardware."
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

export default function PostConstructionRenovationCleanupPage() {
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
              { label: "Post-Construction & Renovation Cleanup", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="eyebrow-light">Seattle Post-Construction Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Post-Construction &amp; Renovation Cleanup Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Construction cleaning for Seattle new builds, home remodels, commercial build-outs and tenant
                improvements. We clear the fine construction dust, drywall and sanding residue, sawdust, adhesive,
                labels and job-site film that ordinary cleaning leaves behind, so the space is ready for
                inspection, handoff, opening or occupancy.
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
                <HardHat className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">The Common Problem</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                The build is finished and the property still is not usable. Fine dust has settled on every
                horizontal surface and traveled into rooms nobody worked in, new glass and fixtures are covered in
                labels and film, and the trades have left the space technically complete but visibly unfinished.
              </p>
              <h2 className="mt-5 text-base font-semibold text-white">How We Help</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                A construction clean planned top down and room by room, working the ledges, edges, trim, glass,
                cabinetry and floors that routine cleaning skips, with the scope written down before the crew is
                booked and the timing built around the date you have to be ready.
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
            alt="Vacuum and broom on newly installed flooring in a home at the end of a renovation"
            width={1200}
            height={1800}
            sizes="(max-width: 1023px) 100vw, 40vw"
            aspect="aspect-[3/4]"
            imagePosition="right"
            align="center"
            columns="lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
            caption="Reference image. Post-construction cleaning at the end of a residential renovation."
          >
            <span className="eyebrow">What This Service Is</span>
            <h2 id="overview-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Post-Construction Cleaning in Seattle for New Builds, Remodels &amp; Renovations
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Post-construction cleaning is the detailed clean that happens after building work finishes and before
              anyone moves in, opens up or signs off. It is not a bigger version of a regular clean. The material
              is different, the surfaces are brand new, and the places it has to reach are the ones routine
              cleaning has no reason to touch.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Construction leaves a specific mix behind: fine drywall and plaster dust from sanding, sawdust from
              cutting and trim work, grout and tile dust, silicone and sealant residue, paint specks, manufacturer
              labels and sticker adhesive on new glass and fixtures, protective film on appliances and hardware,
              and a grey film of settled particulate on cabinetry, ledges, sills, vent covers and floors. Some of
              it wipes off. Most of it does not, and the wrong product on a new finish makes it worse.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We clean after new construction, kitchen and bathroom remodels, whole-home renovations, office and
              retail fit-outs, tenant improvements, apartment and condo unit works, and facility upgrades across
              Seattle and the surrounding area. Some projects need one final clean. Others run as a rough
              clear-down, a final construction clean and a light touch-up before the date they are handed over.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Nothing here is a fixed package. You tell us the project, the stage and the date it has to be ready
              by, and the scope is written down before anything is booked.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={QUOTE_HREF} className="cta-primary">
                Tell Us About Your Project
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                Call Now
              </Link>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── WHO WE HELP ─────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="who">
        <Container>
          <SectionHeading
            eyebrow="Who It Is For"
            title="Who Our Seattle Construction Cleanup Service Is For"
            description="Construction cleaning gets booked by the person carrying the deadline, and that is a different person on every project. These are the eight who call most often, and what each of them is usually trying to reach."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={(index % 4) * 0.05} className="h-full">
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

      {/* ── WHAT IS INCLUDED ────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="scope">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What's Included in Our Post-Construction Cleaning?"
            description="Seven groups cover almost every construction clean we quote. Open each one to see what the work actually involves, then tell us which apply to your project."
          />

          <div className="mt-12">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-12 max-w-[900px] rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
              <ClipboardList className="h-5 w-5 text-brand-700" aria-hidden />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">Where the scope ends, stated plainly</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Everything above is cleaning work on accessible surfaces. Deep carpet extraction is our{" "}
              <Link
                href="/services/carpet-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                carpet cleaning
              </Link>{" "}
              service, hard-floor stripping and refinishing is{" "}
              <Link
                href="/services/strip-and-wax"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                strip and wax
              </Link>
              , full inside-and-out glass is{" "}
              <Link
                href="/services/window-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                window cleaning
              </Link>
              , and exterior hard surfaces around the property are{" "}
              <Link
                href="/services/pressure-washing"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                pressure washing
              </Link>
              . Any of them can be added to a construction clean, they are simply priced as what they are rather
              than folded in silently. Paint touch-up, surface refinishing and repair work stay with your
              contractor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={QUOTE_HREF} className="cta-primary">
                Request a Post-Construction Cleaning Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── THREE STAGES ────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="stages">
        <Container>
          <SectionHeading
            eyebrow="How Projects Are Structured"
            title="The Three Stages of Construction Cleaning"
            description="Rough, final and touch-up are the three stages a construction clean is usually built from. They are not packages you have to buy in sequence, and plenty of projects need only the middle one. What matters is knowing which your project actually calls for."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {cleaningStages.map(({ Icon, step, title, description, points }, index) => (
              <Reveal key={title} delay={index * 0.07} className="h-full">
                <article className="card flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">{step}</p>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>
                  <ul className="mt-5 grid gap-2.5 border-t border-brand-100 pt-5">
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

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ServiceImagePanel
              src={ROUGH_CLEAN_IMAGE}
              alt="Workers clearing rubble and coarse debris from a floor with an industrial vacuum during a rough construction clean"
              width={1536}
              height={1024}
              sizes="(max-width: 767px) 100vw, 46vw"
              aspect="aspect-[3/2]"
              caption="Reference image. The rough stage deals in coarse debris and heavy dust, not detail work."
            />
            <ServiceImagePanel
              src={DETAIL_IMAGE}
              alt="Newly installed baseboard trim resting on a new floor at the end of a build"
              width={1100}
              height={1650}
              sizes="(max-width: 767px) 100vw, 46vw"
              aspect="aspect-[3/2]"
              objectPosition="center 70%"
              caption="Reference image. The final stage is where trim, edges and floors get the detail."
            />
          </div>
        </Container>
      </section>

      {/* ── COMMERCIAL ──────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="commercial">
        <Container>
          <ServiceEditorialSplit
            src={COMMERCIAL_IMAGE}
            alt="Commercial office interior mid-refurbishment with ceiling debris on the floor behind glass partitions"
            width={1100}
            height={1467}
            sizes="(max-width: 1023px) 100vw, 38vw"
            aspect="aspect-[3/4]"
            imagePosition="left"
            align="center"
            columns="lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]"
            caption="Reference image. Commercial refurbishment work ahead of a turnover clean."
          >
            <span className="eyebrow">Commercial Projects</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Commercial Post-Construction Cleaning in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Commercial construction cleaning is rarely about the cleaning alone. It sits at the end of a
              project schedule, between the last trade and a date that has already been committed to someone else: an
              owner walkthrough, a lease start, a tenant move-in, a reopening or an opening day. That is why the
              scope on a commercial job gets written more tightly than on a residential one.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We work with general contractors, developers, property managers, facility managers and business
              owners across Seattle on fit-outs, tenant improvements, build-outs and refurbishments. Work can be
              staged across multiple visits, run after hours where a building stays occupied, and
              coordinated across several units or addresses through a single point of contact.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We will coordinate the cleaning scope around the project timeline, and we will tell you honestly
              whether a date is realistic once we have seen what the job involves. What we will not do is agree to
              a turnaround before that, because a construction clean promised without a look at the space is a
              promise about somebody else&apos;s dust.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Once the space is open and in use, the same team can move it onto a recurring{" "}
              <Link
                href="/services/commercial-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                commercial cleaning
              </Link>{" "}
              schedule, so the building is not handed to a second vendor a week after handover.
            </p>

            <div className="mt-8 rounded-2xl border border-brand-100 bg-surface p-6">
              <p className="text-sm font-semibold text-ink">Commercial project types we clean</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {commercialProjectTypes.map((type) => (
                  <li key={type} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={QUOTE_HREF} className="cta-primary">
                Request a Commercial Cleanup Quote
              </Link>
              <Link href="/industries-we-serve" className="cta-secondary">
                Industries We Serve
              </Link>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── RESIDENTIAL ─────────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-surface" id="residential">
        <Container>
          <ServiceEditorialSplit
            src={NEW_BUILD_IMAGE}
            alt="Unfinished interior of a new build with bare concrete floors and freshly plastered walls"
            width={1100}
            height={1650}
            sizes="(max-width: 1023px) 100vw, 38vw"
            aspect="aspect-[3/4]"
            imagePosition="right"
            align="center"
            columns="lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
            caption="Reference image. A new build before finishes go in and before construction cleaning begins."
          >
            <span className="eyebrow">Homes &amp; Residential Projects</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Residential Post-Construction Cleaning in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Homeowners are usually surprised by the same thing: the dust is not in the room the work happened in.
              A kitchen remodel puts fine particulate in the bedrooms upstairs. A bathroom remodel leaves a film on
              the living room shelves. Sealing off a work zone slows dust down, it does not stop it, and once the
              plastic comes down everything behind it needs cleaning too.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              That is why residential construction cleaning is quoted by what the dust actually reached rather than
              by the size of the project. A single-bathroom remodel in a small condo and the same remodel in a
              three-story house are not the same job, even though the work was identical.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              New builds are a different problem again. There is no accumulated household dirt, but there is
              sawdust in every drawer box, labels on every window and appliance, protective film on the hardware,
              grout haze across new tiling and a fine grey layer over the whole property. Everything is new, which
              means everything marks, and none of it has been cleaned even once.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              If the property is going straight into a sale or a lease rather than back to you, our{" "}
              <Link
                href="/services/move-in-move-out-cleaning"
                className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
              >
                move-in and move-out cleaning
              </Link>{" "}
              service often runs alongside the construction clean.
            </p>

            <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-6">
              <p className="text-sm font-semibold text-ink">Residential projects we clean after</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {residentialProjectTypes.map((type) => (
                  <li key={type} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={QUOTE_HREF} className="cta-primary">
                Get a Home Cleanup Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                Call Now
              </Link>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── RENOVATION & REMODEL ────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="renovation">
        <Container>
          <SectionHeading
            eyebrow="Remodels & Renovations"
            title="Seattle Post-Renovation & Remodel Cleaning"
            description="Renovation cleanup is usually harder than new-build cleanup, because the dust has spread into finished, furnished parts of a property rather than an empty shell. Each project type leaves its own problem behind."
          />

          <div className="mt-10">
            <ServiceImagePanel
              src={REMODEL_IMAGE}
              alt="Room mid-renovation with new tiling, protective floor sheeting, a step ladder and exposed wiring"
              width={1400}
              height={933}
              sizes="(max-width: 1279px) 100vw, 1200px"
              aspect="aspect-[16/9]"
              caption="Reference image. A remodel in progress, before the stage where construction cleaning begins."
            />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {renovationTypes.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={(index % 3) * 0.06} className="h-full">
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
            Restaurant projects sit across two services. Front-of-house fit-out cleaning is covered here, while
            back-of-house equipment and kitchen degreasing is handled by our{" "}
            <Link
              href="/services/restaurant-kitchen-cleaning"
              className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
            >
              restaurant kitchen cleaning
            </Link>{" "}
            service.
          </p>
        </Container>
      </section>

      {/* ── WHY CONSTRUCTION DUST IS DIFFERENT ──────────────────────────── */}
      <section className="relative section-shell scroll-mt-28 overflow-hidden bg-brand-950 text-white" id="dust">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div
          className="absolute -right-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl"
          aria-hidden
        />

        <Container className="relative">
          <ServiceEditorialSplit
            src={DUST_IMAGE}
            alt="A hand coated in fine grey drywall dust sanding a wall edge during renovation work"
            width={1000}
            height={1500}
            sizes="(max-width: 1023px) 100vw, 36vw"
            aspect="aspect-[3/4]"
            variant="dark"
            imagePosition="left"
            align="center"
            columns="lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]"
            caption="Reference image. Drywall sanding is where most fine construction dust comes from."
          >
            <span className="eyebrow-light">Why It Is a Different Job</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Why Construction Dust Requires Detailed Cleaning
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Household and office dust is relatively heavy. It settles where it falls, it stays roughly where you
              expect, and a normal clean deals with it. Drywall, plaster and sanding dust behaves nothing like
              that. It is far finer, it stays suspended in the air for a long time after the work stops, and it
              drifts through doorways, along corridors and up stairwells into rooms where no work was ever done.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Because it stays airborne, it settles on every upward-facing surface rather than only the obvious
              ones. Shelf edges, the tops of door frames and cabinets, sills, ledges, trim edges, vent and register
              faces, light fixtures, handrails and the perimeter strip of a floor all collect it. Those are exactly
              the surfaces a routine clean has no reason to visit, which is why a construction clean that is really
              a regular clean under a different name gets noticed within a week.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              It also does not stop when the trades leave. Dust disturbed during a clean re-settles, and anyone
              returning for punch-list work brings more with them. That is how fine particulate behaves rather than
              a failure of the clean, and it is why timing matters here as much as thoroughness.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              The other half of the problem is what the dust is sitting on. New paint is still curing, new grout
              and sealant are still setting, new stone has its own product restrictions, and stainless, plated
              hardware and lacquered cabinetry all mark. Method matters as much as effort, which is why the order
              of work and the products used are decided by what was installed rather than by habit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={QUOTE_HREF} className="cta-gold">
                Get a Cleanup Estimate
              </Link>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── NEWLY INSTALLED FINISHES ────────────────────────────────────── */}
      <section className="section-shell bg-surface" id="finishes">
        <Container>
          <ServiceEditorialSplit
            src={HANDOVER_IMAGE}
            alt="Newly completed kitchen with white cabinetry, granite countertops, stainless appliances and new plank flooring"
            width={1400}
            height={933}
            sizes="(max-width: 1023px) 100vw, 46vw"
            aspect="aspect-[3/2]"
            imagePosition="right"
            align="center"
            caption="Reference image. New finishes are the reason method matters more than effort on a construction clean."
          >
            <span className="eyebrow">New Surfaces</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Careful Cleaning Around Newly Installed Finishes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Almost every surface on a construction clean is being cleaned for the first time, and a lot of it is
              still curing. New paint, fresh grout and recently applied sealant are all more fragile than they
              look. Stone has product restrictions. Stainless and plated hardware show every wrong cloth. Cabinetry
              finishes vary between painted, veneered and lacquered work, and they do not all behave the same way.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              So the first question on site is what was actually installed, not what the room looks like. Different
              surfaces need different methods and different products, the order of work matters, and anything a
              manufacturer or installer has specified takes priority over general practice. Where a finish is still
              curing or a treatment belongs with the installer, we say so rather than working around it.
            </p>
          </ServiceEditorialSplit>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {finishTypes.map(({ title, note }, index) => (
              <Reveal key={title} delay={(index % 5) * 0.04} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-5">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{note}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/*
            ─── IMAGE NOTES ───────────────────────────────────────────────────
            No post-construction or renovation photography exists in /public
            beyond `/home/services/post-construction.jpg`, and nothing in
            `galleryItems` (lib/site.ts) is tagged for construction work. Every
            other photo on this page is a temporary stock image, captioned
            "Reference image" so none of it reads as our work. Sources are
            documented in docs/temporary-post-construction-image-sources.md.

            Shots needed from the business, in priority order. Add them to
            /public/images/services/post-construction-renovation-cleanup/ plus
            matching `galleryItems` entries, then replace the panels above:
              1. Before/after of a room after a final construction clean
              2. Fine dust on trim, sills or cabinet tops, before and after
              3. A completed kitchen remodel after the final clean
              4. A commercial fit-out or tenant improvement, cleaned and ready
              5. Crew working a construction clean on a Seattle job
            ───────────────────────────────────────────────────────────────────
          */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="/gallery" className="cta-secondary">
              View the Results Gallery
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
            <p className="text-sm text-muted">
              Every photo in our gallery comes from a real Seattle-area job. Construction cleanup sets are still
              being added, so the reference images on this page are labelled as such.
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHEN TO SCHEDULE ────────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="scheduling">
        <Container>
          <SectionHeading
            eyebrow="Timing"
            title="When Should You Schedule Post-Construction Cleaning?"
            description="There is no universal right answer, but there is a reliable principle: clean once the dust-producing work is substantially finished, and before anything moves in on top of it."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="card flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <CalendarClock className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">The practical window</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A final construction clean generally makes most sense once sanding, cutting, grinding and
                  drilling are done, flooring is in and cabinetry and fixtures are fitted. Book it too early and
                  you pay to clean surfaces that will be dusty again the next morning. Leave it too late and the
                  clean gets compressed into a handover date with nowhere to move.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  It is also worth scheduling before the space fills up. Cleaning an empty room is faster, more
                  thorough and cheaper than cleaning the same room around furniture, stock, equipment or a tenant&apos;s
                  belongings. Once things are in, the surfaces underneath them stop being accessible.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Common dates people clean toward: before furniture or fit-out installation, before stock arrives,
                  before an owner walkthrough or final inspection, before listing photography, before a tenant
                  moves in, before a move-in date, and before an opening.
                </p>
                <p className="mt-4 border-t border-brand-100 pt-4 text-sm leading-relaxed text-muted">
                  If trades are still returning for punch-list work, the usual answer is not to wait. Do the final
                  clean when the bulk of the work is done, then add a light touch-up close to the date. It costs
                  less than a delayed handover and it holds up better than a single clean done too early.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <CheckCircle2 className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  Is your project ready for a final clean?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A quick readiness check. The more of these that are true, the more a single final clean will hold
                  rather than needing to be repeated.
                </p>
                <ul className="mt-6 grid flex-1 gap-3">
                  {readinessChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-brand-200 pt-5 text-sm leading-relaxed text-muted">
                  Not all of them true yet? Still worth talking. A rough clear-down now and a final clean later is
                  a normal way to run a project.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── SCOPE BOUNDARY: CLEANING VS DEBRIS ──────────────────────────── */}
      <section className="section-shell bg-surface" id="boundaries">
        <Container>
          <SectionHeading
            eyebrow="Scope Clarity"
            title="Post-Construction Cleaning vs. Heavy Construction Debris Removal"
            description="These two get searched for interchangeably and they are not the same service. Being clear about it up front saves everyone a wasted site visit."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <Sparkles className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">What this service covers</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Cleaning work. Everything that building work leaves on the surfaces of a property rather than
                  stacked in the middle of it.
                </p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {[
                    "Fine construction dust across accessible surfaces",
                    "Drywall, plaster, sanding and tile dust",
                    "Sawdust and light cutting debris",
                    "Grout haze, sealant residue and installation film",
                    "Labels, sticker adhesive and protective film",
                    "Accessible paint specks and handling marks",
                    "Light job-site debris and packaging in the work areas",
                    "Detail cleaning of trim, glass, cabinetry, fixtures and floors"
                  ].map((item) => (
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
                  <AlertTriangle className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">What it does not cover</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We would rather name these than let a quote request go in on the wrong assumption.
                </p>
                <ul className="mt-5 grid flex-1 gap-4">
                  {[
                    {
                      label: "Bulk construction waste",
                      note: "Drywall sheets, lumber, cut-offs, concrete, tile waste, pallets and treated material need your site disposal arrangements or a licensed disposal provider."
                    },
                    {
                      label: "Demolition and strip-out",
                      note: "We clean after building work, we do not perform it. Removing fixtures, finishes or structure stays with your contractor."
                    },
                    {
                      label: "Hazardous and regulated material",
                      note: "Asbestos, lead-contaminated material, mold remediation, chemicals, solvents and biohazard work all require licensed specialists. We do not handle any of it."
                    },
                    {
                      label: "Repair, refinishing and touch-up",
                      note: "Paint touch-up, surface repair, refinishing and punch-list work belong to the trades that did the original installation."
                    }
                  ].map(({ label, note }) => (
                    <li key={label}>
                      <p className="text-sm font-semibold text-ink">{label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{note}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-brand-100 pt-5 text-sm leading-relaxed text-muted">
                  If the project also left behind furniture, fixtures or eligible non-hazardous items that simply
                  need taking away, that is our{" "}
                  <Link
                    href="/services/junk-removal"
                    className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                  >
                    junk removal
                  </Link>{" "}
                  service, and the two are often booked together on the same property.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── QUOTE EXPECTATIONS ──────────────────────────────────────────── */}
      <section className="section-shell scroll-mt-28 bg-white" id="quote">
        <Container>
          <SectionHeading
            eyebrow="Quotes"
            title="What Shapes a Post-Construction Cleaning Quote"
            description="We do not publish square-foot rates, because two projects of identical size routinely need very different amounts of work. These are the eight things that actually move the number."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {quoteFactors.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={(index % 4) * 0.05} className="h-full">
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

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <ClipboardList className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">What to tell us when you request a quote</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                The more of this we have up front, the closer the first quote lands to the final one, and the fewer
                site visits it takes to get there.
              </p>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {quotePrepPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
              <h3 className="text-lg font-semibold text-ink">Every quote is free and in writing</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                No pricing is published here because none of it would be accurate. What you get instead is a scope
                written against your actual property, including anything that falls outside the service, with no
                obligation attached.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href={QUOTE_HREF} className="cta-primary justify-center">
                  Request a Free Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-secondary justify-center">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  Call {siteConfig.phoneDisplay}
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">{siteConfig.businessHours}</p>
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
                <span className="eyebrow-light">Why Work With Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Seattle Contractors &amp; Owners Choose Cleaning From The Heart LLC
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                A local cleaning company that treats the final clean as part of the project rather than an
                afterthought bolted onto the end of it.
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

      {/* ── LOCAL SEATTLE CONTEXT ───────────────────────────────────────── */}
      <section className="section-shell bg-white" id="seattle">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
            <div>
              <span className="eyebrow">Where We Work</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Post-Construction Cleaning Across Seattle
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                From remodeled homes and townhouses to condos, apartments, offices, retail spaces and commercial
                tenant improvements, post-construction cleaning needs vary with the property, the surfaces, the
                construction stage and the turnover timeline. The same square footage produces a very different
                job depending on which of those you are dealing with.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Seattle&apos;s housing stock pulls in two directions, and both show up in this work. Older homes
                being renovated tend to mean plaster dust, existing finishes that have to survive the clean, and
                dust migration through a property that was never sealed for it. Modern infill townhouses and
                new-build condos tend to mean multiple floors of brand-new surfaces, extensive glazing, and label
                and film removal on everything that arrived boxed.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Commercially, the pattern is tenant improvements and fit-outs: an office suite being reconfigured,
                a retail unit changing hands, a restaurant front of house being rebuilt, a mixed-use building
                refreshing its lobby and common areas. Those jobs are governed less by size than by building
                access, after-hours working and a lease or opening date that will not move.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We are based in Renton and work across Seattle and the greater Puget Sound area. Availability for a
                specific address and date is confirmed when we quote rather than assumed, because a construction
                clean has to be staffed for a fixed day rather than slotted into a route.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-surface p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Areas we regularly serve</h3>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
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

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface" id="related">
        <Container>
          <SectionHeading
            eyebrow="Related Services"
            title="Need More Than Post-Construction Cleaning?"
            description="These are the services most often booked alongside a construction clean, or instead of one when the project turns out to need something else. Same company, same point of contact."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Post-Construction Cleaning FAQs
              </h2>
              <p className="mt-4 text-base text-muted">
                What contractors, builders, property managers and homeowners ask most before booking construction
                cleanup in Seattle.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Not sure what your project needs?</p>
                <p className="mt-1 text-sm text-muted">
                  Describe the project and the date it has to be ready by, and we&apos;ll tell you plainly what
                  falls inside this service and what does not.
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

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow-light">Post-Construction Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Request a Post-Construction Cleaning Quote
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us the property, the project, the stage it has reached and the date it has to be ready by.
                  The quote is built around size, dust levels, the finishes involved, glass and cabinetry, floor
                  types, access, and whether you need one clean or a staged sequence. Free, written, no obligation.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postConstructionSchema) }}
      />
    </>
  );
}
