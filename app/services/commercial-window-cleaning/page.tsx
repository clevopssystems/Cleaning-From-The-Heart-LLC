import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  CalendarCheck,
  Car,
  CheckCircle2,
  ChevronDown,
  Church,
  ClipboardList,
  Dumbbell,
  GraduationCap,
  Hotel,
  KeyRound,
  Landmark,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Repeat,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Store,
  UtensilsCrossed,
  Users
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
const PAGE_PATH = "/services/commercial-window-cleaning";

const PAGE_TITLE = "Commercial Window Cleaning Seattle | Business Window Washing";
const PAGE_DESCRIPTION =
  "Commercial window cleaning in Seattle for offices, storefronts, retail spaces, restaurants, schools, and managed properties. Recurring or one-time service, quoted per property.";

export const metadata: Metadata = {
  // Brand is intentionally omitted from <title>: PAGE_TITLE already runs to 59
  // characters, and the root layout's "%s | Cleaning From The Heart LLC" template
  // would push it past the SERP truncation point. The brand stays in the JSON-LD
  // WebPage name below.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    "commercial window cleaning Seattle",
    "commercial window washing Seattle",
    "storefront window cleaning Seattle",
    "office window cleaning Seattle",
    "business window cleaning services",
    "retail window cleaning services",
    "restaurant window cleaning Seattle",
    "property management window cleaning",
    "commercial glass cleaning Seattle",
    "recurring commercial window cleaning"
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
        url: "/services/commercial-window-hero.png",
        alt: "Commercial window cleaning for Seattle offices and storefronts"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/services/commercial-window-hero.png"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Storefront, display, and street-facing glass",
  "Entry doors, lobby glass, and interior partitions",
  "Reachable exterior panes on low-rise buildings",
  "Weekly through quarterly schedules, or one-time"
];

const trustStripItems = [
  { Icon: ClipboardList, label: "Written scope and frequency" },
  { Icon: CalendarCheck, label: "Scheduled around opening hours" },
  { Icon: ShieldCheck, label: "Licensed and insured" },
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" }
];

// Why a business actually pays for this, grounded, no revenue claims.
const businessCasePoints = [
  {
    Icon: Store,
    title: "The Glass Customers Stand Closest To",
    description:
      "An entry door is touched by every person who walks in. On a street-facing storefront it is also the first surface anyone judges, and handprints read clearly from the sidewalk."
  },
  {
    Icon: Users,
    title: "What Tenants and Staff Notice",
    description:
      "Lobby glass, partitions, and conference-room panels are read as a proxy for how the building is run. They are also the surfaces nobody on your team has been asked to own."
  },
  {
    Icon: Repeat,
    title: "Never Getting to a Heavy First Clean",
    description:
      "Glass held on a schedule stays a routine job. Glass left for a couple of years becomes a project, with spotting that takes longer and does not always come back fully."
  },
  {
    Icon: CalendarCheck,
    title: "Time Off Your Staff's List",
    description:
      "Most businesses that clean their own entry glass do it inconsistently, at the end of a shift, with the wrong tools. Putting it on a schedule ends the argument about whose job it is."
  }
];

// ─── Properties and industries served ─────────────────────────────────────
const propertiesServed = [
  {
    Icon: Building2,
    title: "Offices & Corporate Buildings",
    description: "Suites, floors, lobbies, conference-room glass, and interior partitions on a set rhythm.",
    href: "/industries/offices-commercial-buildings"
  },
  {
    Icon: Store,
    title: "Storefronts & Retail Spaces",
    description: "Display windows, street-facing panes, and entry doors that take public contact daily.",
    href: "/industries/retail-stores"
  },
  {
    Icon: UtensilsCrossed,
    title: "Restaurants & Cafés",
    description: "Entry and dining-room glass, worked before opening or after close alongside the room reset.",
    href: "/services/restaurant-cleaning"
  },
  {
    Icon: GraduationCap,
    title: "Schools & Educational Facilities",
    description: "Entrances, offices, and classroom glass, scheduled around the academic calendar.",
    href: "/services/school-facility-cleaning"
  },
  {
    Icon: Church,
    title: "Churches & Places of Worship",
    description: "Entry glass, foyers, and office windows, worked around services and midweek activity.",
    href: "/industries/places-of-worship"
  },
  {
    Icon: KeyRound,
    title: "Property Management Portfolios",
    description: "Common-area and lobby glass across multiple buildings on one coordinated schedule.",
    href: "/industries/property-management"
  },
  {
    Icon: Car,
    title: "Auto Dealerships",
    description: "Showroom glass and service-entrance panes, where the glass is part of the display.",
    href: "/industries/auto-dealerships"
  },
  {
    Icon: Stethoscope,
    title: "Medical & Professional Offices",
    description: "Reception glass, entry doors, and waiting-area windows in patient-facing spaces.",
    href: "/industries/healthcare-facilities"
  },
  {
    Icon: Dumbbell,
    title: "Fitness Centers",
    description: "Studio glass, mirrors where included, and the large street-facing panes gyms are built around.",
    href: "/industries/fitness-centers"
  },
  {
    Icon: Hotel,
    title: "Hospitality Properties",
    description: "Entrances, lobbies, and ground-floor common-area glass for hotels and guest properties.",
    href: "/industries/hospitality-properties"
  },
  {
    Icon: Banknote,
    title: "Banks & Financial Institutions",
    description: "Branch entrances, teller-line glass, and street frontage held to a consistent standard.",
    href: "/industries/financial-institutions"
  },
  {
    Icon: Landmark,
    title: "Government & Public Buildings",
    description: "Public entrances and high-traffic interior glass in civic and community facilities.",
    href: "/industries/government-public-buildings"
  }
];

// ─── Scope of work ────────────────────────────────────────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Droplets",
    title: "Exterior Glass",
    summary: "Storefront, ground-level, and reachable exterior panes on low-rise buildings.",
    intro:
      "Exterior work covers the glass that can be reached safely from the ground, from a ladder, or with a water-fed pole. On a single-storey storefront that is everything. On a two- or three-storey building it is most of it, and the exceptions are identified during the walkthrough rather than discovered on the day.",
    tasks: [
      "Storefront and display-window exterior panes",
      "Ground-level exterior glass across the frontage",
      "Reachable exterior panes above ground level",
      "Exterior face of entry doors and sidelights",
      "Exterior sills, ledges, and glass edges",
      "Cobweb clearing around reachable window areas"
    ]
  },
  {
    iconName: "AppWindow",
    title: "Interior Glass",
    summary: "Interior panes, lobby glass, partitions, and office glass panels.",
    intro:
      "Interior glass is about contact and airborne film rather than weather, so it behaves differently and often needs a different frequency than the outside. It is also the half that needs building access, which is why it tends to be scheduled around opening hours or handled with a key arrangement.",
    tasks: [
      "Interior face of exterior windows",
      "Lobby, reception, and entrance-area glass",
      "Interior partitions and office glass panels",
      "Conference-room and meeting-room glass",
      "Display and merchandising glass where included",
      "Interior sills, ledges, and glass edges"
    ]
  },
  {
    iconName: "DoorOpen",
    title: "Entry & Door Glass",
    summary: "Door lites, sidelights, push plates, and the frames around them.",
    intro:
      "Entry glass is the highest-contact surface in most commercial buildings and the reason many businesses call in the first place. It is treated as its own item because it often needs a shorter cycle than the rest of the glass, and can be quoted as a standalone visit on high-traffic sites.",
    tasks: [
      "Door lites and full-glass entry doors, both faces",
      "Sidelights and transom glass beside entrances",
      "Push plates, pull bars, and handle areas",
      "Entry-door frames and kick-plate edges",
      "Vestibule and airlock glass where present",
      "Spot cleaning around the entry after the main pass"
    ]
  },
  {
    iconName: "Frame",
    title: "Frames, Sills & Detail Work",
    summary: "The surround that makes a clean pane actually read as clean.",
    intro:
      "A pane cleaned in isolation still looks wrong if the frame around it is grey and the sill is holding grit. Accessible frames, sills, and glass edges are wiped as part of the same pass rather than saved for a separate visit or an upsell.",
    tasks: [
      "Accessible window frames, inside and out",
      "Interior and exterior sills and ledges",
      "Glass edges and corner detailing",
      "Track wipe where tracks are accessible",
      "Marks and residue on the surface immediately around the glass",
      "Removal of loose debris from sill and ledge areas"
    ]
  },
  {
    iconName: "Layers",
    title: "Optional Add-Ons",
    summary: "Real work, but priced separately and confirmed before the visit.",
    intro:
      "None of the items below are assumed inside a standard commercial quote. Each one takes meaningful extra time, and some depend on what we find on site, so they are agreed and priced in advance instead of appearing as a surprise line afterwards.",
    tasks: [
      "Screen removal, washing, and refitting",
      "Detailed track cleaning beyond a routine wipe",
      "Interior glass railings, mirrors, and display cases",
      "Divided-lite and multi-pane glass priced per pane",
      "Post-construction glass with residue or stickers",
      "Skylights and overhead glass, subject to safe access"
    ]
  }
];

// ─── Storefront points ────────────────────────────────────────────────────
const storefrontPoints = [
  "Display windows, where the whole point is that customers look through them",
  "Entry-door glass and push plates, the highest-contact surface on the property",
  "Street-facing panes that take road film, rain runoff, and weather off the sidewalk",
  "Vestibule glass in double-door entries, which is easy to miss and always visible",
  "Signage-adjacent glass, kept clear so window decals and hours read cleanly",
  "A spot pass around the entry after the main work, so the last impression is the best one"
];

// ─── Office & facility points ─────────────────────────────────────────────
const officePoints = [
  "Lobby and reception glass, the first surface a visitor stands in front of",
  "Interior partitions and office glass panels between workspaces",
  "Conference-room and meeting-room glass, usually the most photographed room you have",
  "Common-area windows in shared corridors, break rooms, and stairwells",
  "Entryways, vestibules, and interior door glass throughout the floor",
  "Exterior panes on the floors that can be reached safely from outside"
];

// ─── Property management points ───────────────────────────────────────────
const propertyManagerPoints = [
  {
    title: "Common areas, not unit interiors",
    description:
      "Lobby glass, entry doors, corridor windows, mail rooms, and shared amenity spaces are the default scope on a multi-unit property. Individual unit interiors are not automatically included, they can be added, but only as a named item with access arranged per unit."
  },
  {
    title: "Turnover coordination",
    description:
      "Vacant units are the easiest window work on any property and the point where interior glass, sills, and tracks matter most for showing. Window work slots alongside a move-out clean so a single visit covers the turnover rather than two."
  },
  {
    title: "Portfolio scheduling",
    description:
      "Several buildings can run on one plan with staggered visit dates, which usually costs less per property than booking each one separately and keeps the standard consistent across the portfolio."
  },
  {
    title: "One point of contact",
    description:
      "You deal with the owner rather than a dispatch queue. Scope changes, an added building, or a tenant complaint about a specific window get handled in one conversation, and any change to the plan is confirmed in writing."
  }
];

// ─── Frequency ────────────────────────────────────────────────────────────
const frequencyOptions = [
  {
    Icon: Sparkles,
    title: "One-Time Service",
    description:
      "A single clean before an opening, an inspection, a photo shoot, a lease handover, or simply to reset glass that has been left too long. Also the usual way an account starts."
  },
  {
    Icon: Repeat,
    title: "Weekly & Biweekly",
    description:
      "Suited to entry and display glass on sites with heavy public traffic, retail frontage, cafés, gyms, and clinics where the door is in constant use."
  },
  {
    Icon: CalendarCheck,
    title: "Monthly",
    description:
      "The common middle ground for offices, professional suites, and multi-tenant lobbies. Frequent enough that no visit is ever a heavy clean."
  },
  {
    Icon: Moon,
    title: "Quarterly & Seasonal",
    description:
      "Works for buildings without street-level public traffic, and for full exterior passes on properties that keep entry glass on a shorter cycle of its own."
  }
];

const frequencyFactors = [
  "Foot traffic through the entrance and how many hands touch the door",
  "Whether the glass faces a street, a parking lot, or a sheltered courtyard",
  "Weather exposure, waterfront and roadside sites need a shorter cycle",
  "How the space is used, and whether customers or only staff see the glass",
  "The appearance standard the business or landlord wants held",
  "Budget, which often means a short cycle on entry glass and a longer one on the rest"
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Property & Scope Review",
    description:
      "We walk the building and count what is actually there: pane numbers, storeys, glass types, entry doors, partitions, and which exterior panes can be reached safely."
  },
  {
    number: "02",
    title: "Customized Quote",
    description:
      "A written scope naming the glass included, the faces covered, the frequency, the service window, and anything quoted separately, with a price against it."
  },
  {
    number: "03",
    title: "Scheduling & Access",
    description:
      "Arrival windows, keys or codes, alarm handling, parking, water access, and whether work happens during trading hours or before opening are all settled before the first visit."
  },
  {
    number: "04",
    title: "Service Completion",
    description:
      "The crew works the agreed scope in order, protecting the floor and fixtures below the glass and staying out of the way of customers and staff."
  },
  {
    number: "05",
    title: "Quality Review",
    description:
      "Glass is checked before the crew leaves, and anything that needs a second pass gets one on the spot rather than being carried to the next visit."
  },
  {
    number: "06",
    title: "Ongoing Adjustment",
    description:
      "Frequency and scope are revisited as the site changes, new tenants, a remodel, a seasonal traffic shift, and any change is confirmed in writing."
  }
];

// ─── Safety & property care ───────────────────────────────────────────────
const safetyPoints = [
  {
    Icon: ShieldCheck,
    title: "Working Within Safe Reach",
    description:
      "Exterior work is done from the ground, from a ladder, or with a water-fed pole. If a pane cannot be reached safely by those means, it is excluded from the quote and you are told which ones and why."
  },
  {
    Icon: Sparkles,
    title: "Protecting What Sits Below the Glass",
    description:
      "Interior work happens above floors, sills, display units, desks, and merchandise. Surfaces and stock below the working area are covered or moved back before anything gets wet."
  },
  {
    Icon: Users,
    title: "Working Around People",
    description:
      "On sites that stay open during service, the crew works in sections, keeps walkways clear, and stays out of customer paths rather than closing off the entrance."
  },
  {
    Icon: KeyRound,
    title: "Site-Specific Requirements",
    description:
      "Badge procedures, escort requirements, sign-in logs, restricted areas, alarm sequences, and tenant notice periods are followed as the building requires them."
  }
];

// ─── Why businesses choose us ─────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: ClipboardList,
    title: "Scope You Can Point At",
    description:
      "Which glass, which faces, how often, in what window, and what is priced separately. All of it written down before the first visit so nothing rests on a verbal understanding."
  },
  {
    Icon: CalendarCheck,
    title: "Scheduled Around Your Hours",
    description:
      "Before opening, after close, or during quiet trading, whichever the site allows. Scheduling is confirmed against staffing and building access rather than promised as open availability."
  },
  {
    Icon: Repeat,
    title: "One-Time and Recurring Both Work",
    description:
      "No requirement to sign up for a plan to get a single clean, and no penalty for starting with one visit and moving to a schedule once you have seen the result."
  },
  {
    Icon: Building2,
    title: "One Provider for the Facility",
    description:
      "Window cleaning can run on the same plan as commercial cleaning, carpet cleaning, floor care, and pressure washing, which is usually cheaper and always simpler than four vendors."
  },
  {
    Icon: Store,
    title: "Weighted to Customer-Facing Glass",
    description:
      "Entry doors, display windows, and lobby glass carry more weight than a back-corridor pane. Priority follows what your customers actually see."
  },
  {
    Icon: MessageCircle,
    title: "You Reach the Owner",
    description:
      "Joshua Alexander runs the company and answers for it. A missed pane, a changed opening time, or an added building gets sorted in one conversation."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Window Cleaning",
    description: "The main window cleaning page, covering how residential and commercial service differ.",
    href: "/services/window-cleaning",
    ctaLabel: "Back to window cleaning"
  },
  {
    title: "Commercial Cleaning",
    description: "Recurring janitorial service for offices, retail spaces, and commercial facilities.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Restaurant Cleaning",
    description: "Dining rooms, entrances, bars, and restrooms, worked between close and open.",
    href: "/services/restaurant-cleaning",
    ctaLabel: "See restaurant cleaning"
  },
  {
    title: "School & Facility Cleaning",
    description: "Classrooms, offices, restrooms, and common areas on a schedule built around the school day.",
    href: "/services/school-facility-cleaning",
    ctaLabel: "See school cleaning"
  },
  {
    title: "Commercial Deep Cleaning",
    description: "A detailed periodic reset for facilities that need more than routine janitorial service.",
    href: "/services/commercial-deep-cleaning",
    ctaLabel: "Explore deep cleaning"
  },
  {
    title: "Pressure Washing",
    description: "Building exteriors, walkways, and entry areas, normally done before the glass rather than after.",
    href: "/services/pressure-washing",
    ctaLabel: "Explore pressure washing"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What types of commercial properties do you serve?",
    answer:
      "Offices and corporate suites, storefronts and retail spaces, restaurants and cafés, schools, places of worship, medical and professional offices, fitness centers, hospitality properties, auto dealerships, banks, government and public buildings, and managed apartment or condominium communities. The common factor is that the glass is reachable from ground, ladder, or pole height rather than the building's size or sector."
  },
  {
    question: "Do you clean storefront glass?",
    answer:
      "Yes, and it is one of the most frequently requested parts of this service. A storefront visit typically covers display-window panes inside and out, the entry door on both faces, push plates and handle areas, sidelights and vestibule glass, and the frames and sills around them. High-traffic frontage is often put on a weekly or biweekly cycle because it visibly slips within days."
  },
  {
    question: "Can commercial window cleaning be scheduled regularly?",
    answer:
      "Yes. Weekly, biweekly, monthly, quarterly, seasonal, and fully customized schedules are all workable, and different parts of a property can sit on different cycles, entry glass weekly and the full building quarterly is a common arrangement. Frequency is a recommendation based on your site, not a fixed package, and it can be adjusted as traffic and seasons change."
  },
  {
    question: "Do you clean interior office glass and partitions?",
    answer:
      "Yes. Interior panes, lobby and reception glass, conference-room glass, interior partitions, office glass panels, and interior door glass are all normal scope. Interior work needs building access, so it is usually arranged around opening hours or with a key or code arrangement agreed in advance."
  },
  {
    question: "Can you work around our business hours?",
    answer:
      "In most cases, yes. Before opening and after close are the two most common windows, and quiet mid-morning or mid-afternoon periods work for some sites. What can be committed to depends on staffing, building access, and the agreed service plan, so the window is confirmed during the walkthrough rather than promised in advance. Business hours are Monday to Saturday, 7 AM to 7 PM."
  },
  {
    question: "Do you service multi-unit and managed properties?",
    answer:
      "Yes. Common-area glass, lobbies, entry doors, corridor windows, mail rooms, and shared amenity spaces, is the default scope on apartment, condominium, and mixed-use properties. Individual unit interiors are not automatically included; they can be added as a named item, but access has to be arranged per unit. Several buildings in a portfolio can run on one coordinated schedule."
  },
  {
    question: "How is commercial window cleaning priced?",
    answer:
      "Per property, after a walkthrough. The inputs are pane count, how many storeys the glass sits on, whether the work is interior, exterior, or both, how the glass is reached, the current condition, the amount of entry and detail work, any optional screen or track cleaning, and the service frequency. Recurring schedules generally price lower per visit than one-time work. Estimates are free and carry no obligation."
  },
  {
    question: "Are frames, sills, tracks, and screens included?",
    answer:
      "Accessible frames, sills, and glass edges are part of the standard pass, and tracks get a wipe where they are accessible. Detailed track cleaning and screen removal, washing, and refitting are optional add-ons priced separately, because both take real extra time. Damaged or brittle screens are pointed out rather than handled, we do not repair screens."
  },
  {
    question: "Do you offer high-rise window cleaning?",
    answer:
      "No. We do not provide high-rise window cleaning, rope-access or bosun-chair work, suspended scaffolding, or large boom-lift operations. Our commercial window service covers ground-level, ladder-height, and water-fed-pole reach on low-rise buildings, which is most Seattle storefronts, professional suites, and small office parks. If your building needs above that, we will tell you at the quote stage instead of taking on work we are not set up for."
  },
  {
    question: "Can window cleaning be combined with janitorial service?",
    answer:
      "Yes, and it is the most common arrangement for offices and facilities. Window cleaning can sit inside a commercial cleaning plan on its own frequency, glass quarterly against a nightly janitorial routine, for example, under one scope document and one point of contact. Carpet cleaning, floor care, and pressure washing can be built into the same plan."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// so it is intentionally not repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const commercialWindowSchema = {
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
      name: "Commercial Window Cleaning in Seattle",
      serviceType: "Commercial Window Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area business owners, office managers, facility managers, retail and restaurant operators, and property managers"
      },
      description:
        "Commercial window cleaning in Seattle covering storefront and display glass, entry doors and sidelights, lobby and reception glass, interior partitions and office panels, reachable exterior panes on low-rise buildings, and a detail pass on accessible frames, sills, and glass edges. Available weekly through quarterly or as one-time service.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Commercial Window Cleaning Scope",
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
      "@id": `${SITE_URL}${PAGE_PATH}#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function CommercialWindowCleaningPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative -mt-16 overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/services/commercial-window-hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/[0.65] via-black/50 to-black/30" aria-hidden />
        <div className="absolute inset-0 opacity-[0.06] surface-grid" aria-hidden />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Window Cleaning", href: "/services/window-cleaning" },
              { label: "Commercial Window Cleaning", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Commercial Window Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Commercial Window Cleaning in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Glass cleaning for offices, storefronts, retail spaces, restaurants, schools, and managed
                properties across Seattle. Display windows, entry doors, lobby glass, interior partitions, and
                reachable exterior panes, held to a written standard on a schedule built around how your building
                actually operates.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Commercial Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Licensed and insured · Locally owned · One-time or recurring service plans
              </p>
            </div>

            <div className="card-dark self-stretch bg-black/[0.45] backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Store className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">
                Where Commercial Glass Falls Behind
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Entry doors and display windows slip within days of a clean once the public is touching them,
                while nobody on staff has been given the job, the tools, or the time. The result is glass that
                is either cleaned badly and often, or properly and almost never.
              </p>
              <ul className="mt-6 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {glanceItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
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
      <section className="section-shell-tight bg-white" aria-labelledby="commercial-intro-heading">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <span className="eyebrow">What This Service Is</span>
              <h2
                id="commercial-intro-heading"
                className="text-3xl font-bold leading-tight tracking-tight md:text-4xl"
              >
                What Commercial Window Cleaning Covers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Commercial window cleaning is scheduled glass cleaning for a working building: storefront and
                display windows, entry doors, lobby glass, interior partitions, and the exterior panes that can be
                reached safely from ground, ladder, or pole height. Cleaning From The Heart LLC provides it across
                Seattle for offices, retail spaces, restaurants, schools, places of worship, medical and
                professional suites, fitness centers, hospitality properties, and managed residential buildings.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The reason businesses buy it is straightforward. Glass is the part of a building customers stand
                closest to, and handprints on an entry door register from the sidewalk. Tenants and staff read
                lobby and partition glass as a signal of how the building is run. And a pane cleaned on a schedule
                never reaches the state where it needs a heavy first clean.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                What it will not do is sell more product or make anyone work harder, and we are not going to claim
                otherwise. It keeps the customer-facing surface of your building at a defined standard, on a
                frequency you choose, without your team having to find time for it. Scope, frequency, service
                window, and price are agreed in writing after a walkthrough, because a five-pane café and a
                two-storey office park are not the same account.
              </p>
            </div>

            <ServiceImagePanel
              src="/services/Commercial-window-intro.jpg"
              alt="Commercial window cleaning in progress on a building's exterior glass."
              width={4024}
              height={6048}
              sizes="(min-width: 1024px) 44vw, 100vw"
              aspect="aspect-[4/5]"
              className="lg:sticky lg:top-28"
            />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {businessCasePoints.map(({ Icon, title, description }, index) => (
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Request a Commercial Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ── PROPERTIES & INDUSTRIES SERVED ──────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="properties">
        <Container>
          <SectionHeading
            eyebrow="Who We Clean For"
            title="Commercial Properties and Industries We Serve"
            description="Glass behaves differently in a showroom than it does in a school corridor, so the scope and frequency are set per property type. Each card below links to the wider cleaning page for that sector."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {propertiesServed.map(({ Icon, title, description, href }, index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article className="card-hover relative flex h-full flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>
                  <Link
                    href={href}
                    className="inline-flex items-center text-xs font-semibold text-brand-700 after:absolute after:inset-0 hover:text-brand-900"
                  >
                    Cleaning for this sector
                    <ArrowRight className="ml-1 h-3 w-3 shrink-0" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SCOPE OF WORK ───────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What Commercial Window Cleaning Can Include"
            description="The first four groups are standard scope on the glass named in your quote. The fifth is real work we can do, but never assumed inside a standard price, it is agreed and costed before the visit."
          />

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-5 py-2 md:px-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] rounded-3xl border border-brand-100 bg-surface px-7 py-7 md:px-10">
            <h3 className="text-base font-semibold text-ink">Reach, stated plainly</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Our commercial window work is ground-level, ladder-height, and water-fed-pole reach on low-rise
              buildings. We do not offer high-rise window cleaning, rope-access or bosun-chair work, suspended
              scaffolding, or large boom-lift operations, and glass restoration, grinding or polishing out
              scratches and etched mineral damage, is a specialist trade we do not take on. Panes outside safe
              reach are identified during the walkthrough and excluded from the quote, so you know exactly which
              glass is covered before you sign anything.
            </p>
          </div>
        </Container>
      </section>

      {/* ── STOREFRONT & RETAIL ─────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="storefront">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">Storefront & Retail</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Storefront Window Cleaning for Street-Facing Businesses
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                A storefront is the only part of a business that works while it is closed. The window does the
                selling at eight in the morning and eleven at night, and it only does that job if someone can see
                through it. Retail frontage, cafés, salons, clinics, and gyms all share the same problem: the
                door is touched by everyone and the display glass takes rain runoff and road film off the street.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Frontage on a busy block visibly slips within days, which is why it is usually the part of a
                property put on the shortest cycle. Weekly and biweekly entry-and-display visits are common, and
                where the site allows it, work is scheduled before opening so the crew is gone before the first
                customer arrives.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Store className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">What a storefront visit covers</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {storefrontPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-100 pt-5 text-sm leading-relaxed text-muted">
                Running a restaurant or café? Glass work pairs naturally with a{" "}
                <Link
                  href="/services/restaurant-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  restaurant cleaning plan
                </Link>{" "}
                on the same overnight window. Retail operators can see the wider sector page for{" "}
                <Link
                  href="/industries/retail-stores"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  retail store cleaning
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── OFFICE & FACILITY ───────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="office">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-3xl border border-brand-100 bg-surface p-7 md:p-9 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Building2 className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Glass in a working office</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {officePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-100 pt-5 text-sm leading-relaxed text-muted">
                For the full picture on workplace cleaning beyond the glass, see{" "}
                <Link
                  href="/industries/offices-commercial-buildings"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  office cleaning and janitorial services
                </Link>
                .
              </p>
            </div>

            <div className="lg:order-1">
              <span className="eyebrow">Offices & Facilities</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Office and Facility Window Cleaning
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Modern offices are full of glass that nobody has been assigned: partitions between desks,
                conference-room walls, reception screens, interior door lites, and the windows along a shared
                corridor. A janitorial routine covers floors, restrooms, and touchpoints nightly, but interior
                glass usually sits outside it, which is why it drifts.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                For office and facility managers the practical answer is a separate frequency for glass, often
                monthly or quarterly against a nightly cleaning routine, written into the same plan and the same
                scope document. That keeps one point of contact and one invoice while giving the glass a cycle
                that actually matches how quickly it shows.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Access is usually the deciding factor on timing. Some floors are easiest before staff arrive,
                others during quiet mid-afternoon hours, and secure sites may need an escort or a badge
                procedure. All of that is settled before the first visit rather than negotiated at the door.
              </p>
              <div className="mt-8">
                <Link href="/contact#quote-form" className="cta-primary">
                  Discuss a Recurring Cleaning Plan
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROPERTY MANAGERS ───────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="property-managers">
        <Container>
          <SectionHeading
            eyebrow="Property Management"
            title="Window Cleaning for Property Managers"
            description="Multi-unit and multi-building work has its own constraints: shared spaces, tenant notice, turnover deadlines, and a portfolio that has to look consistent. Here is how the scope is normally drawn."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {propertyManagerPoints.map(({ title, description }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="card flex h-full flex-col gap-3">
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid items-center gap-6 rounded-3xl border border-brand-200 bg-brand-50 px-7 py-8 md:px-10 lg:grid-cols-[1fr_auto] lg:gap-10">
            <div>
              <h3 className="text-base font-semibold text-ink">Managing residential or mixed-use buildings?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Common-area glass usually sits inside a broader property plan covering corridors, lobbies, floor
                care, and turnover cleaning. The{" "}
                <Link
                  href="/industries/property-management"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  property management cleaning page
                </Link>{" "}
                sets out how those plans are built, and{" "}
                <Link
                  href="/services/move-in-move-out-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  move-in and move-out cleaning
                </Link>{" "}
                covers the unit-turnover side.
              </p>
            </div>
            <Link href="/contact#quote-form" className="cta-primary shrink-0">
              Discuss a Portfolio Plan
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── FREQUENCY ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="frequency">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <span className="eyebrow">Frequency & Timing</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                One-Time and Recurring Service Options
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                The options below are available schedules, not fixed packages, and different parts of a property
                can sit on different cycles. Entry glass weekly with a full building pass quarterly is one of the
                most common arrangements we set up.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                What frequency actually suits your site depends on more than square footage:
              </p>
              <ul className="mt-5 grid gap-2.5">
                {frequencyFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {frequencyOptions.map(({ Icon, title, description }, index) => (
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

          <ServiceEditorialSplit
            src="/images/gallery/gallery-10.jpeg"
            alt="Water-fed pole and filtered-water system set up on a lawn at a Puget Sound property"
            width={1320}
            height={1693}
            sizes="(max-width: 1023px) 100vw, 40vw"
            aspect="aspect-[4/3]"
            objectPosition="50% 40%"
            caption="Water-fed pole equipment on a Seattle-area job, how reachable exterior panes above ground level are cleaned from below."
            imagePosition="left"
            columns="lg:grid-cols-[0.85fr_1fr]"
            className="mt-14"
          >
            <span className="eyebrow">How Exterior Glass Gets Reached</span>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              Ground, Ladder, and Pole Reach
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Most low-rise commercial exterior glass is cleaned from the ground. A water-fed pole carries
              filtered water up to the pane, which means no ladder standing over a sidewalk, no equipment blocking
              your entrance, and no lift booking for a two-storey building.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Ladders are used where a pane needs hands on it rather than a pole. Anything above safe ladder and
              pole reach is excluded and named during the walkthrough, so the quote reflects the glass we can
              genuinely deliver rather than the glass on the building.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Access details, where we can park, where water comes from, which doors we use, and who is on site
             , get settled at the same time, because those are what actually decide whether a schedule holds.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How a Commercial Account Gets Set Up"
            description="From the first call to a building on a steady rhythm. Nothing is committed until scope, access, frequency, and price are in writing."
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Schedule Business Window Cleaning
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call to Discuss Your Property
            </Link>
          </div>
        </Container>
      </section>

      {/* ── SAFETY & PROPERTY CARE ──────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <SectionHeading
            eyebrow="Safety & Property Care"
            title="How We Work On an Occupied Site"
            description="Window cleaning happens above your floors, your stock, and sometimes your customers. These are the working practices that keep it from becoming your problem."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {safetyPoints.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.06}>
                <article className="card flex h-full gap-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-[900px] text-center text-sm leading-relaxed text-muted">
            Cleaning From The Heart LLC is licensed and insured, and proof of insurance can be provided to
            building management or a property manager before service begins.
          </p>
        </Container>
      </section>

      {/* ── WHY BUSINESSES CHOOSE US ────────────────────────────────────── */}
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
                <span className="eyebrow-light">Why Businesses Work With Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Seattle Businesses Choose Us
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

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-10">
              <div className="flex flex-col items-start gap-1">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Commercial Quote
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

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Commercial Window Cleaning Questions
              </h2>
              <p className="mt-4 text-base text-muted">
                What owners, office managers, and property managers ask before putting a building on a glass
                schedule.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Question about your building?</p>
                <p className="mt-1 text-sm text-muted">
                  Send the property type, rough window count, and how many storeys, and we&apos;ll tell you
                  plainly what we can reach.
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
          <SectionHeading eyebrow="Related Services" title="Services Businesses Book Alongside Window Cleaning" />
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
                <p className="eyebrow-light">Commercial Window Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Request a Commercial Window Cleaning Quote
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  The more of the following you can tell us up front, the closer the first number will be to the
                  final one:
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {[
                    "Business name and property type",
                    "Service location and number of storeys",
                    "Approximate number of windows or panes",
                    "Interior, exterior, or both",
                    "Preferred frequency, or one-time",
                    "Access notes, parking, and hours"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-white/50">
                  Not a business?{" "}
                  <Link
                    href="/services/residential-window-cleaning"
                    className="font-semibold text-accent underline underline-offset-4 hover:text-white"
                  >
                    Residential window cleaning is here
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-gold w-full justify-center">
                    Request a Commercial Quote
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(commercialWindowSchema) }}
      />
    </>
  );
}
