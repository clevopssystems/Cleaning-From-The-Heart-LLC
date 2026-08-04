import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building,
  Camera,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  CloudRain,
  DoorOpen,
  Home,
  Key,
  MapPin,
  MessageCircle,
  Phone,
  Repeat,
  Ruler,
  Sofa,
  Sparkles,
  SunMedium,
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
const PAGE_PATH = "/services/residential-window-cleaning";

const PAGE_TITLE = "Residential Window Cleaning Seattle | House Window Washing";
const PAGE_DESCRIPTION =
  "Residential window cleaning in Seattle for houses, condos, apartments, and townhomes. Choose interior, exterior, or complete inside-and-out service. Free quote.";

export const metadata: Metadata = {
  // Brand is intentionally omitted from <title>, see the commercial window
  // cleaning page for the reasoning. It stays in the JSON-LD WebPage name below.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    "residential window cleaning Seattle",
    "house window cleaning Seattle",
    "home window cleaning services",
    "window washing for homes Seattle",
    "professional house window cleaners Seattle",
    "inside and outside window cleaning",
    "condo window cleaning Seattle",
    "townhouse window cleaning Seattle",
    "window screen cleaning Seattle",
    "window track cleaning Seattle"
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
        url: "/images/gallery/gallery-07.jpeg",
        alt: "Residential window cleaning at a Seattle-area home"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/images/gallery/gallery-07.jpeg"]
  }
};

// ─────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Inside, outside, or the complete job",
  "Houses, condos, townhomes, and apartments",
  "Patio doors, sliders, and French-door panes",
  "Upper-floor exterior panes where access allows"
];

const trustStripItems = [
  { Icon: Home, label: "Houses, condos, townhomes & apartments" },
  { Icon: ClipboardList, label: "Written quote before we book" },
  { Icon: Repeat, label: "One-time or seasonal schedules" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// What actually comes off a home's glass.
const whatComesOff = [
  {
    Icon: DoorOpen,
    title: "Fingerprints & Palm Marks",
    description:
      "Sliders, patio doors, and anything at hand height take contact every day. In homes with kids or dogs, the bottom third of the glass is a category of its own."
  },
  {
    Icon: CloudRain,
    title: "Rain Marks & Runoff",
    description:
      "Seattle rain does not wash glass clean, it dries in streaks. The weather-facing side of a house shows it first and holds it through the whole wet season."
  },
  {
    Icon: SunMedium,
    title: "Dust, Pollen & Kitchen Film",
    description:
      "Spring pollen outside and a fine cooking film inside both dull glass slowly enough that you stop noticing, until one pane gets cleaned and the rest look grey."
  },
  {
    Icon: Sparkles,
    title: "Cobwebs & Sill Grit",
    description:
      "Frame corners, sill edges, and the underside of window ledges collect webbing and grit that stays put no matter how well the pane itself is done."
  }
];

// ─── Homes served ─────────────────────────────────────────────────────────
const homesServed = [
  {
    Icon: Home,
    title: "Single-Family Houses",
    description:
      "The most common job we take. Multi-storey homes are normal work, upper-floor exterior panes are reached from the ground with a pole where the ground and the layout allow it."
  },
  {
    Icon: Building,
    title: "Townhomes",
    description:
      "Narrow footprints, shared walls, and tall front elevations. Access from the side or rear is usually the deciding factor, so it is worth mentioning fence gates when you call."
  },
  {
    Icon: Warehouse,
    title: "Condominiums",
    description:
      "Unit interiors and any exterior glass reachable from a patio, balcony, or ground level. Building-wide exterior glass is usually the HOA's decision rather than an individual owner's."
  },
  {
    Icon: Sofa,
    title: "Apartments",
    description:
      "Interior glass, sliders, and balcony doors. Exterior panes depend entirely on the floor and the building, not every apartment window can be safely reached, and we will say so up front."
  },
  {
    Icon: Key,
    title: "Rental & Managed Homes",
    description:
      "Owner-occupied or tenanted, with the visit arranged around whoever holds access. Landlords often pair window work with a turnover clean between tenants."
  },
  {
    Icon: Camera,
    title: "Homes Being Listed for Sale",
    description:
      "Glass photographs badly when it is dirty and beautifully when it is not. Booked ahead of photo day rather than after, so the shoot benefits from it."
  }
];

// ─── Scope ────────────────────────────────────────────────────────────────
const scopeGroups: GroupedScopeItem[] = [
  {
    iconName: "Home",
    title: "Interior Window Cleaning",
    summary: "Inside faces, plus the sills, frames, and glass doors you look at every day.",
    intro:
      "Interior work covers the face of the glass you see from inside the room, along with the accessible frame and sill around it. It needs someone to let us in and rooms we can reach the windows in, so a few minutes of clearing space beforehand makes a real difference to the result.",
    tasks: [
      "Interior face of every window in the agreed scope",
      "Fingerprints, palm marks, smudges, and everyday film",
      "Interior glass on patio doors and sliders",
      "Accessible interior frames and window sills",
      "Interior glass edges and corners",
      "Interior face of entry-door glass and sidelights"
    ]
  },
  {
    iconName: "Droplets",
    title: "Exterior Window Cleaning",
    summary: "The weather side, including upper-floor panes reached from the ground.",
    intro:
      "Exterior work is the half most households cannot do themselves, and the half that needs the least from you, usually just gate access, an outdoor water tap, and somewhere to park. Reachable upper-floor panes are cleaned from the ground with a water-fed pole where the property allows it.",
    tasks: [
      "Exterior face of ground-floor windows",
      "Reachable upper-floor exterior panes",
      "Exterior glass on patio doors and sliders",
      "Exterior face of entry doors and sidelights",
      "Accessible exterior frames and sills",
      "Cobweb clearing around reachable window areas"
    ]
  },
  {
    iconName: "Blinds",
    title: "Optional Detail Services",
    summary: "Real work, priced separately and agreed before the visit rather than assumed.",
    intro:
      "Nothing in this group is automatically inside a standard house quote, because each item adds meaningful time. Mention what you want when you ask for a price and it gets built into the number, rather than turning up as an extra line afterwards.",
    tasks: [
      "Screen removal, washing, and refitting",
      "Detailed track cleaning beyond a routine wipe",
      "French-door and divided-lite panes, priced per pane",
      "Additional glass doors, storm doors, and side panels",
      "Interior mirrors and glass railings",
      "Skylights and overhead glass, subject to a look at the property"
    ]
  }
];

// ─── Interior / exterior / both, homeowner framing ────────────────────────
const serviceChoices = [
  {
    label: "Option A",
    title: "Interior Only",
    bestFor: "Rentals between tenants, condos, apartments, and homes where only the inside has gone.",
    needs: "Someone home to let us in, and clear access to each window.",
    points: [
      "Cheaper and quicker than a full job",
      "Fixes fingerprints, film, and dusty sills",
      "Does nothing about rain marks on the outside"
    ]
  },
  {
    label: "Option B",
    title: "Exterior Only",
    bestFor: "Seasonal upkeep, upper-floor panes, and homes where the inside is already handled.",
    needs: "Gate access, an outdoor tap, and somewhere to park. You do not need to be home.",
    points: [
      "Solves the height problem most households have",
      "Clears rain marks, pollen, and cobwebs",
      "Interior smudges stay exactly where they are"
    ]
  },
  {
    label: "Option C",
    title: "Inside and Out",
    bestFor: "Annual or twice-yearly resets, listings, move-ins, and anyone who wants it actually finished.",
    needs: "Access to the house and the yard, on the same visit.",
    points: [
      "The only way to know which side a mark was on",
      "Frames, sills, and edges detailed once, properly",
      "One trip, one access arrangement, one invoice"
    ]
  }
];

// ─── Tracks, frames, sills, screens ───────────────────────────────────────
const detailRealities = [
  {
    title: "A wipe is not a restoration",
    description:
      "Accessible frames and sills are wiped as part of every job. That handles dust, grit, and normal grime. It does not lift baked-on paint spatter, adhesive, construction residue, or years of mineral staining, and no amount of extra scrubbing on the day turns one into the other."
  },
  {
    title: "Deep track cleaning takes real time",
    description:
      "The runner channel under a slider collects grit, hair, and compacted debris that has to be dug out rather than wiped. On a house with several sliders that is a job of its own, which is why it is quoted as an add-on instead of being folded into the base price."
  },
  {
    title: "Screens are an add-on, and they are fragile",
    description:
      "Screen washing means removing each screen, cleaning both faces, drying it, and refitting it. Old aluminium frames and brittle mesh sometimes do not survive removal. We point out screens that look risky before touching them, and we do not repair or replace screens."
  },
  {
    title: "Mould and damage are not cleaning problems",
    description:
      "Black growth in a sill corner, rotted timber, failed seals, or the misting between double-glazed panes are building issues rather than dirt. We will tell you what we are looking at, but window cleaning does not fix any of them and we do not offer mould remediation."
  },
  {
    title: "Hard-water spotting is assessed, not promised",
    description:
      "Glass that has sat under a sprinkler head or a leaking gutter for years can carry mineral spotting etched into the surface. Some lifts with cleaning and some does not. We look at it on site and tell you honestly which one you have before quoting anything for it."
  },
  {
    title: "Scratches are permanent",
    description:
      "Marks left by construction debris, a previous scraper, or a stray branch do not come out with cleaning. Removing them is glass restoration, a grinding-and-polishing trade, and it is not part of this service."
  }
];

// ─── When to book ─────────────────────────────────────────────────────────
const bookingMoments = [
  {
    Icon: SunMedium,
    title: "Spring Cleaning",
    description:
      "The most-booked window of the year in Seattle. Once the heavy winter runoff stops and the pollen has mostly settled, glass comes clean and stays clean for months. If you only do it once a year, this is when."
  },
  {
    Icon: Users,
    title: "Before Guests Arrive",
    description:
      "Holidays, a family visit, a birthday, or a dinner where the dining room is the room. Glass is one of the few things in a house that visibly improves in a single afternoon, which is why it gets booked in the fortnight beforehand."
  },
  {
    Icon: Camera,
    title: "Before Listing a Home",
    description:
      "Clean glass reads as a well-kept house in photographs and at a showing, and it lets daylight do the work in every interior shot. Book before the photographer, not after the offers."
  },
  {
    Icon: Truck,
    title: "Moving In or Out",
    description:
      "An empty house is the easiest it will ever be to clean, and interior glass, sills, and tracks are on nearly every move-out checklist. Pairing window work with the move clean saves a second visit."
  },
  {
    Icon: CloudRain,
    title: "Seasonal Maintenance",
    description:
      "Twice a year, spring and early autumn, keeps most Seattle homes ahead of it. Once a year is enough for sheltered properties. Waterfront and roadside homes usually want more than two."
  },
  {
    Icon: Sparkles,
    title: "Alongside a Deep Clean",
    description:
      "Interior windows are one of the first things people ask to add to a residential deep clean. Running both in one visit means the glass is done after the dusting rather than before it."
  }
];

// ─── Preparing ────────────────────────────────────────────────────────────
const preparationPoints = [
  "Move fragile items, plants, and picture frames back from the sills we will be working over",
  "Open curtains and pull blinds up where you want the glass reached, we will not unhook window treatments",
  "Secure pets, especially for exterior work where gates get opened and closed",
  "Confirm who will be home, or leave a key, code, or gate arrangement in advance",
  "Point out any screens that are already bent, torn, or brittle so we leave them alone",
  "Flag hard-to-reach windows, sealed panes, or anything that has not opened in years",
  "Mention alarm sensors, film, tint, stained glass, or leaded panes so they are treated carefully",
  "Let us know where to park and where the nearest outdoor water tap is"
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us the home type and a rough window count. An exact number is not needed, a photo of the front and back of the house tells us more."
  },
  {
    number: "02",
    title: "Share Access Details",
    description:
      "Storeys, side gates, fenced yards, steep ground, decks, and anything that affects whether a pane can be reached safely from outside."
  },
  {
    number: "03",
    title: "Choose Inside, Outside, or Both",
    description:
      "The single biggest factor in what the job costs and how long it takes. Most seasonal cleans are both; interior-only and exterior-only are both perfectly normal."
  },
  {
    number: "04",
    title: "Confirm Optional Detail Work",
    description:
      "Screens, deep track cleaning, French-door panes, and any extra glass doors get named and priced now rather than discussed on the doorstep."
  },
  {
    number: "05",
    title: "Schedule the Visit",
    description:
      "A date and arrival window are agreed, along with who is home, where we park, and which water source we can use."
  },
  {
    number: "06",
    title: "Clean and Review",
    description:
      "Glass is cleaned, frames and sills wiped, and the work checked in daylight before we leave. Anything that needs a second pass gets one there and then."
  }
];

// ─── Why homeowners choose us ─────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: MapPin,
    title: "A Local Seattle Company",
    description:
      "Locally owned and family-operated. The person who quotes your house is accountable for the work done on it, not a call center three states away."
  },
  {
    Icon: Ruler,
    title: "Height Handled Properly",
    description:
      "Upper-floor exterior panes are reached from the ground with a water-fed pole where the property allows, or by ladder where a pane needs hands on it. Anything genuinely out of reach is named before you book."
  },
  {
    Icon: Sofa,
    title: "Care Inside the House",
    description:
      "Interior work happens over your floors, furniture, and window sills. Surfaces below the glass are protected or moved back before anything gets wet."
  },
  {
    Icon: ClipboardList,
    title: "No Surprise Line Items",
    description:
      "Screens, deep track work, and specialty panes are named and priced before the visit. What you agreed to is what appears on the invoice."
  },
  {
    Icon: Sparkles,
    title: "One Provider for the Whole House",
    description:
      "Window cleaning runs alongside residential cleaning, deep cleaning, carpet cleaning, and pressure washing, so a single visit can cover more than the glass."
  },
  {
    Icon: MessageCircle,
    title: "Straight Answers",
    description:
      "If spotting will not fully clear, if a screen is too brittle to remove, or if a pane cannot be reached safely, you hear it before the job rather than after."
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
    title: "Residential Cleaning",
    description: "Whole-home cleaning for Seattle-area houses, apartments, and rental properties.",
    href: "/services/residential-cleaning",
    ctaLabel: "View residential cleaning"
  },
  {
    title: "Residential Deep Cleaning",
    description: "A detailed top-to-bottom reset, with interior windows available as an add-on.",
    href: "/services/residential-deep-cleaning",
    ctaLabel: "Explore deep cleaning"
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description: "Turnover cleaning for houses, condos, and rentals, where interior glass matters most.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "See move cleaning"
  },
  {
    title: "Pressure Washing",
    description: "Siding, driveways, patios, and walkways, normally done before the glass, not after.",
    href: "/services/pressure-washing",
    ctaLabel: "Explore pressure washing"
  },
  {
    title: "Solar Panel Cleaning",
    description: "Panel surfaces cleared of dust, pollen, and debris, often booked on the same visit.",
    href: "/services/solar-panel-cleaning",
    ctaLabel: "See solar panel cleaning"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "Do you clean windows inside and outside?",
    answer:
      "Yes, and you can book either half on its own. Inside-and-out is what most homeowners choose for an annual or twice-yearly clean, because it is the only way to be sure which side a mark was on. Exterior-only is popular for seasonal upkeep and does not need you to be home. Interior-only suits condos, apartments, and rentals between tenants."
  },
  {
    question: "Are window screens included?",
    answer:
      "Screen washing is an optional add-on rather than an automatic inclusion, so mention it when you ask for a price and it gets built into the quote. Each screen has to be removed, washed on both faces, dried, and refitted, which takes real time on a house with a lot of them. Old aluminium frames and brittle mesh do not always survive removal, we point those out and leave them alone rather than risk them, and we do not repair or replace screens."
  },
  {
    question: "Do you clean window tracks?",
    answer:
      "Accessible tracks get a wipe as part of interior work. A deep track clean, digging compacted grit, hair, and debris out of slider runners, is a separate add-on, because on a house with several sliding doors it is a job in its own right. Ask for it when you request the quote so the time is allowed for."
  },
  {
    question: "Can you clean condo or apartment windows?",
    answer:
      "Yes for interior glass, sliders, and balcony doors, and for exterior panes that can be reached safely from a patio, balcony, or ground level. Whether the exterior of a specific unit can be reached depends on the floor and the building, and building-wide exterior glass is usually an HOA or management decision rather than an individual resident's. Tell us the floor and we will say honestly what is possible."
  },
  {
    question: "How often should home windows be cleaned?",
    answer:
      "Twice a year suits most Seattle homes: once in spring after the winter runoff has stopped, and once in early autumn before the rain returns. Once a year is enough for a sheltered property or where budget is the deciding factor. Waterfront homes, houses on busy roads, and properties under heavy tree cover usually want more, because exposure matters far more than the calendar does."
  },
  {
    question: "Can window cleaning be added to a deep clean?",
    answer:
      "Yes, and interior glass is one of the most common additions to a residential deep clean. Combining them into one visit is more efficient than booking separately, and the glass gets done after the dusting rather than before it. Tell us when you request the quote so both are scoped together, see our residential deep cleaning page for what that service covers on its own."
  },
  {
    question: "Do I need to be home during the appointment?",
    answer:
      "For interior work, someone needs to provide access at the start, though you do not have to stay for the whole visit. Exterior work usually only needs gate access, an outdoor water tap, and somewhere to park, so plenty of customers are out for it. Whichever applies, the access arrangement is agreed when the visit is booked rather than sorted out on the day."
  },
  {
    question: "How should I prepare for a window cleaning visit?",
    answer:
      "Move fragile items and plants back from the sills, open curtains and lift blinds where you want the glass reached, and secure pets, especially for exterior work, where gates get opened. It also helps to point out screens that are already damaged, windows that have not opened in years, and any tinted, filmed, stained, or leaded glass so it gets handled carefully."
  },
  {
    question: "Do you remove hard-water stains from glass?",
    answer:
      "Sometimes, and we will not promise it before seeing the glass. Mineral spotting from sprinklers, leaking gutters, or years of runoff sits on a spectrum: light deposits often lift with cleaning, while long-standing spotting can be etched into the glass surface and will not fully clear. We assess it on site and tell you which one you are dealing with. Glass restoration, grinding and polishing out etching and scratches, is a specialist trade we do not offer."
  },
  {
    question: "How is residential window cleaning priced?",
    answer:
      "Per house, after we understand the property. The main factors are the number of panes, how many storeys they sit on, whether you want interior, exterior, or both, how the exterior glass is reached, the current condition, the number of glass doors and divided-lite panes, and any optional screen or track work. Estimates are free, carry no obligation, and are confirmed in writing before anything is booked."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// so it is intentionally not repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const residentialWindowSchema = {
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
      name: "Residential Window Cleaning in Seattle",
      serviceType: "Residential Window Cleaning",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area homeowners, renters, condo and townhome residents, landlords, and home sellers"
      },
      description:
        "Residential window cleaning in Seattle for houses, condos, townhomes, and apartments. Covers interior glass, exterior glass, patio and slider doors, entry-door glass, and accessible frames and sills, with screen washing and detailed track cleaning available as optional add-ons.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Residential Window Cleaning Scope",
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

export default function ResidentialWindowCleaningPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />

        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Window Cleaning", href: "/services/window-cleaning" },
              { label: "Residential Window Cleaning", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow-light">Seattle Residential Window Cleaning</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Residential Window Cleaning in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                House window cleaning for homes, condos, townhomes, and apartments across the Seattle area.
                Choose interior, exterior, or the complete inside-and-out job, including patio doors and the
                upper-floor panes most households give up on. Book it once for the season or on a schedule.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Home Window Cleaning Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
              <p className="mt-5 text-sm text-white/50">
                Locally owned and family-operated · Free quotes · {siteConfig.businessHours}
              </p>
            </div>

            <ServiceImagePanel
              src="/images/gallery/gallery-07.jpeg"
              alt="Cleaning From The Heart technician washing upper-floor exterior windows at a Seattle-area house"
              width={1320}
              height={1753}
              sizes="(max-width: 1023px) 100vw, 46vw"
              aspect="aspect-[4/3]"
              objectPosition="50% 45%"
              variant="dark"
              priority
            />
          </div>

          <div className="card-dark mt-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Home className="h-6 w-6 text-accent" aria-hidden />
                </div>
                <h2 className="mt-4 text-base font-semibold text-white">Where Home Window Cleaning Stops</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Most households can manage the ground-floor glass they can reach from inside. What stops them is
                  the second storey, the panes above a deck or a sloped garden, and the runner tracks nobody has
                  looked into since moving in. That is the part worth paying for.
                </p>
              </div>
              <ul className="grid gap-2.5 border-t border-white/10 pt-5 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
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

      {/* ── DIRECT-ANSWER INTRODUCTION ──────────────────────────────────── */}
      <section className="section-shell-tight bg-white" aria-labelledby="residential-intro-heading">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
            <div>
              <span className="eyebrow">What This Service Is</span>
              <h2
                id="residential-intro-heading"
                className="text-3xl font-bold leading-tight tracking-tight md:text-4xl"
              >
                What House Window Cleaning Covers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Residential window cleaning is glass work for the place you live: the panes, the patio doors, the
                sliders, and the sills, cleaned inside, outside, or both. Cleaning From The Heart LLC does it for
                houses, condos, townhomes, and apartments across Seattle and the surrounding area.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                What comes off is rarely one thing. Inside, it is fingerprints on the slider, palm marks at dog
                height, a fine cooking film in the kitchen, and a season of dust settled along the sill. Outside,
                it is rain runoff dried in streaks down the pane, spring pollen, road film if you are near a busy
                street, and cobwebs tucked into the frame corners.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                The part most households cannot solve themselves is height. Second- and third-floor exterior panes
                are where DIY window cleaning stops, and they are the reason most people call. Where the property
                allows it, those are reached from the ground with a water-fed pole rather than putting a ladder
                somewhere it does not belong. Scope, optional extras, and price are confirmed in writing before the
                visit, so nothing on the invoice is a surprise.
              </p>
            </div>

            <ServiceImagePanel
              src="/services/house-window-intro.jpeg"
              alt="Interior and exterior house window glass cleaned to a streak-free finish."
              width={1320}
              height={1744}
              sizes="(min-width: 1024px) 44vw, 100vw"
              aspect="aspect-[4/5]"
              className="lg:sticky lg:top-28"
            />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatComesOff.map(({ Icon, title, description }, index) => (
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
              Request a Home Window Cleaning Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </Container>
      </section>

      {/* ── HOMES SERVED ────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="homes">
        <Container>
          <SectionHeading
            eyebrow="Properties We Clean"
            title="Homes and Properties We Work On"
            description="Access is what separates one home from another far more than square footage does. Here is how each property type usually works, and where the honest limits are."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homesServed.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
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

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted">
            Not every exterior pane on every building can be reached safely, particularly on upper-floor
            apartments and condos. Which of yours can be is settled before you book, not discovered on the day.
          </p>
        </Container>
      </section>

      {/* ── SCOPE ───────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="included">
        <Container>
          <SectionHeading
            center
            eyebrow="Scope of Work"
            title="What Residential Window Cleaning Can Include"
            description="The first two groups are standard on the windows in your quote. The third is real work we can do, but it is never assumed inside a standard price, it gets named and costed first."
          />

          <div className="mt-10 rounded-3xl border border-brand-100 bg-white px-5 py-2 md:px-10">
            <GroupedScopeAccordion items={scopeGroups} />
          </div>

          <div className="mx-auto mt-10 max-w-[900px] rounded-3xl border border-brand-100 bg-surface px-7 py-7 md:px-10">
            <h3 className="text-base font-semibold text-ink">What is not part of this service</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              We do not offer high-rise or rope-access window cleaning, screen repair or replacement, mould
              remediation, or glass restoration, the grinding-and-polishing trade that removes scratches and
              etched mineral damage. Gutter cleaning, roof work, and window repairs are separate trades as well.
              Where one of those is what your property actually needs, we will say so rather than take the job.
            </p>
          </div>
        </Container>
      </section>

      {/* ── INSIDE / OUTSIDE / BOTH ─────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="inside-outside">
        <Container>
          <ServiceEditorialSplit
            src="/images/gallery/gallery-08.jpeg"
            alt="Technician cleaning exterior glass and a glass balcony railing at a waterfront Seattle-area home"
            width={1320}
            height={731}
            sizes="(max-width: 1023px) 100vw, 45vw"
            aspect="aspect-[16/10]"
            imagePosition="right"
            columns="lg:grid-cols-[1fr_0.95fr]"
          >
            <span className="eyebrow">Choosing Your Service</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Interior, Exterior, or Inside and Out
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              This one decision changes the price, the length of the visit, and what you need to arrange more than
              anything else about the job. It is worth settling before you ask anyone for a number.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A useful rule of thumb: interior problems are things people touched, exterior problems are things
              the weather did. If both bother you, do both in one visit, it costs less than two separate trips
              and it is the only way to be certain which side a stubborn mark was actually on.
            </p>
          </ServiceEditorialSplit>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceChoices.map(({ label, title, bestFor, needs, points }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className="card flex h-full flex-col gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                    {label}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{title}</h3>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Best for</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">{bestFor}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">What it needs</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">{needs}</p>
                  </div>
                  <ul className="mt-auto grid gap-2 border-t border-brand-100 pt-4">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Ask About Inside-and-Outside Cleaning
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Talk It Through
            </Link>
          </div>
        </Container>
      </section>

      {/* ── TRACKS, FRAMES, SILLS & SCREENS ─────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="tracks-and-screens">
        <Container>
          <SectionHeading
            eyebrow="Tracks, Frames, Sills & Screens"
            title="The Parts Around the Glass, Explained Honestly"
            description="These are the details homeowners search for specifically, and the ones most often misunderstood before a quote. Here is what is included, what costs extra, and what cleaning genuinely cannot fix."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detailRealities.map(({ title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="card flex h-full flex-col gap-3">
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHEN TO BOOK ────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Timing"
            title="When Homeowners Book Window Cleaning"
            description="Most calls come from one of the six situations below. Recognising which one you are in usually answers both how soon to book and how often to repeat it."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {bookingMoments.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
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
        </Container>
      </section>

      {/* ── MOVE-IN / MOVE-OUT ──────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="move-in-move-out">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">Moving</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Move-In and Move-Out Window Cleaning
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                An empty property is the easiest window job there is. Nothing has to be moved, every sill is
                clear, sliders can be opened fully, and the tracks that are normally awkward to reach are wide
                open. It is also the moment glass matters most, because a vacant home is judged on detail rather
                than on how it feels to live in.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                On a move-out, interior glass, sills, and slider tracks appear on most cleaning checklists and are
                a common source of deposit disputes. On a move-in, it is simply the last time the house will be
                empty, worth using before the furniture arrives and the good access disappears.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Window work is normally booked alongside the move clean rather than as a separate visit, which
                avoids paying twice for the same trip. Landlords and property managers running unit turnovers
                usually do the same.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/services/move-in-move-out-cleaning" className="cta-primary">
                  See Move-In / Move-Out Cleaning
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-surface p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Truck className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">What a turnover visit usually covers</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {[
                  "Interior glass throughout the empty property",
                  "Patio-door and slider glass, opened fully for both faces",
                  "Sills and accessible frames cleared of grit and debris",
                  "Slider tracks, where deep track work is included in the quote",
                  "Exterior panes reachable from ground or pole height",
                  "Entry-door glass, the first thing anyone viewing the place touches"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-100 pt-5 text-sm leading-relaxed text-muted">
                Want the whole property handled at once? See{" "}
                <Link
                  href="/services/residential-deep-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  residential deep cleaning
                </Link>{" "}
                for the top-to-bottom option, or{" "}
                <Link
                  href="/services/residential-cleaning"
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-900"
                >
                  residential cleaning
                </Link>{" "}
                for ongoing home care.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="How a Home Window Cleaning Job Runs"
            description="Six steps from the first message to finished glass. Everything that affects the price is settled before a date is held."
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

      {/* ── PREPARING ───────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="preparing">
        <Container>
          <ServiceEditorialSplit
            src="/images/gallery/gallery-03.jpeg"
            alt="Cleaning From The Heart owner on site at a Seattle-area home with a ladder and water-fed pole set up"
            width={1320}
            height={1765}
            sizes="(max-width: 1023px) 100vw, 42vw"
            aspect="aspect-[4/3]"
            objectPosition="50% 35%"
            caption="A residential exterior job in the Seattle area, ladder and water-fed pole set up before work starts."
            imagePosition="left"
            columns="lg:grid-cols-[0.85fr_1fr]"
            align="start"
          >
            <span className="eyebrow">Before We Arrive</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Preparing for the Appointment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              None of this is mandatory and none of it takes long, but each item either speeds up the visit or
              prevents something going wrong. Ten minutes the night before is usually enough.
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
              If something on that list is a problem, no outdoor tap, a locked side gate, a neighbour&apos;s
              fence in the way, tell us when you book rather than on the day. Almost all of it can be worked
              around with notice.
            </p>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── WHY HOMEOWNERS CHOOSE US ────────────────────────────────────── */}
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
                <span className="eyebrow-light">Why Homeowners Work With Us</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Why Seattle Homeowners Choose Us
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
                  Schedule Residential Window Cleaning
                </Link>
                <span className="pl-1 text-[11px] text-white/35">Takes 60 seconds · No obligation</span>
              </div>
              <Link href="/services/residential-cleaning" className="cta-ghost">
                Explore Residential Cleaning
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-surface px-7 py-9 md:px-12 md:py-11">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Homes We Serve Around Seattle
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Availability depends on your location, the property, how the exterior glass is accessed, and the
                  scope you need, so coverage is confirmed when we quote rather than assumed. If you are toward the
                  edge of the areas listed, a quick call will settle it.
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
      <section className="section-shell bg-surface scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Home Window Cleaning Questions
              </h2>
              <p className="mt-4 text-base text-muted">
                What Seattle homeowners ask most before booking window cleaning for a house, condo, or townhome.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5">
                <p className="text-sm font-semibold text-ink">Question about your own home?</p>
                <p className="mt-1 text-sm text-muted">
                  Send the home type, a rough window count, and how many storeys, and we&apos;ll tell you plainly
                  what we can reach.
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
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading eyebrow="Related Services" title="Services Homeowners Book Alongside Window Cleaning" />
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
                <p className="eyebrow-light">Residential Window Cleaning in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Get a Quote for Residential Window Cleaning in Seattle
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Tell us the home type, roughly how many windows, how many storeys, and whether you want inside,
                  outside, or both. We will confirm what can be reached, what any extras cost, and what the whole
                  job comes to, in writing, with no obligation.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {["Free written quote", "One-time or seasonal", "Screens & tracks priced up front"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                        {item}
                      </li>
                    )
                  )}
                </ul>

                <p className="mt-6 text-sm text-white/50">
                  Managing a business or a portfolio instead?{" "}
                  <Link
                    href="/services/commercial-window-cleaning"
                    className="font-semibold text-accent underline underline-offset-4 hover:text-white"
                  >
                    Commercial window cleaning is here
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-gold w-full justify-center">
                    Request a Home Quote
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialWindowSchema) }}
      />
    </>
  );
}
