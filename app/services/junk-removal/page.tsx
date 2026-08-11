import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Archive,
  ArrowRight,
  Boxes,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  DoorOpen,
  HardHat,
  Home,
  Images,
  KeyRound,
  Layers,
  MapPin,
  MessageCircle,
  PackageOpen,
  Phone,
  Recycle,
  Repeat,
  ShieldCheck,
  Sofa,
  Store,
  TriangleAlert,
  Truck,
  Warehouse
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ServiceImagePanel } from "@/components/services/ServiceImagePanel";
import { ServiceEditorialSplit } from "@/components/services/ServiceEditorialSplit";
import { siteConfig, serviceAreas } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";
const PAGE_PATH = "/services/junk-removal";

const PAGE_TITLE = "Junk Removal Services Seattle, WA | Cleaning From The Heart";
const PAGE_DESCRIPTION =
  "Junk removal in Seattle for homes, offices, rental properties, and commercial cleanouts. Furniture, clutter, and eligible non-hazardous items cleared and hauled away.";

// Portrait stock photograph beside the introduction copy, not a company project
// photo — the caption says so. Served as a WebP derivative of
// `public/services/junk-removal-intro.png` (3.2 MB) because large PNGs run
// through next/image trip the AVIF-optimizer hang documented on the hero.
const OVERVIEW_IMAGE = "/images/services/junk-removal/junk-removal-intro.webp";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH
  },
  keywords: [
    "junk removal Seattle",
    "junk removal services Seattle",
    "junk hauling Seattle",
    "residential junk removal Seattle",
    "commercial junk removal Seattle",
    "furniture removal Seattle",
    "office cleanout Seattle",
    "property cleanout Seattle",
    "rental property cleanout Seattle",
    "junk pickup Seattle"
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
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Junk removal and cleaning services in Seattle, Cleaning From The Heart LLC"
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
//
// SCOPE BOUNDARY, READ BEFORE EDITING COPY ON THIS PAGE:
// This page owns junk removal, junk hauling, cleanouts, and furniture
// removal. It deliberately does NOT target post-construction or renovation
// *cleaning* language (dust, residue, final clean, surfaces), which belongs
// to /services/post-construction-renovation-cleanup. Keep the split intact.
//
// Every claim below is limited to what the business has documented
// elsewhere on the site: locally owned and family-operated, licensed and
// insured, 30+ years of Seattle cleaning experience, Mon-Sat 7 AM-7 PM,
// non-hazardous items only, free written quotes. No pricing, no same-day
// promises, no recycling or donation percentages, no truck or crew counts.
// ─────────────────────────────────────────────────────────────────────────

const glanceItems = [
  "Homes, apartments, offices, and managed properties",
  "Furniture, clutter, and eligible non-hazardous items",
  "Full cleanouts or a single item that will not fit in a car",
  "One-time removals or repeating turnover work"
];

const trustStripItems = [
  { Icon: MapPin, label: "Seattle & the greater Puget Sound area" },
  { Icon: ClipboardList, label: "Scope confirmed before we load anything" },
  { Icon: ShieldCheck, label: "Licensed and insured, non-hazardous items" },
  { Icon: MessageCircle, label: "Direct line to the owner" }
];

// Who calls, used directly under the direct-answer intro.
const whoCallsUs = [
  {
    Icon: Home,
    title: "Homeowners & Renters",
    description:
      "A garage that has filled up over ten years, a couch nobody wants, a move where half the house is not coming along."
  },
  {
    Icon: Building2,
    title: "Offices & Businesses",
    description:
      "Desks and chairs left behind after a relocation, a storage room that has become the place things go to be forgotten."
  },
  {
    Icon: KeyRound,
    title: "Property Managers",
    description:
      "Units that need clearing between tenants, common areas collecting items, buildings with a leasing date to hit."
  },
  {
    Icon: Truck,
    title: "Anyone With One Awkward Item",
    description:
      "A single wardrobe, a filing cabinet, a table nobody can lift into a car. Small jobs are still jobs worth quoting."
  }
];

// ─── What we remove ───────────────────────────────────────────────────────
const removalCategories = [
  {
    Icon: Sofa,
    title: "Household Furniture",
    description:
      "Couches, sofas, armchairs, dining tables, chairs, bed frames, dressers, bookcases, and side tables. The most common single reason people call us, and usually the item that has been sitting in the way the longest."
  },
  {
    Icon: Building2,
    title: "Office Furniture & Workspace Items",
    description:
      "Desks, task chairs, conference tables, filing cabinets, shelving units, free-standing partitions, and reception furniture. Removed as part of a full office cleanout or a piece at a time during a furniture swap."
  },
  {
    Icon: Boxes,
    title: "Household Clutter",
    description:
      "Boxes, bags of general household goods, closet and garage contents, unwanted décor, and the accumulated odds and ends that fill a room without anyone deciding they should."
  },
  {
    Icon: Layers,
    title: "Bulky Non-Hazardous Items",
    description:
      "Single items too large for a car, a curbside bin, or a stairwell without two people. Weight, size, and how the item gets out of the building are all part of what we check before quoting."
  },
  {
    Icon: Archive,
    title: "Storage Room & Storage Area Contents",
    description:
      "Garages, basements, back rooms, under-stair cupboards, and on-site storage rooms. Usually a mix of boxes, old furniture, and things kept because moving them was more effort than keeping them."
  },
  {
    Icon: DoorOpen,
    title: "Items Left After a Move or Turnover",
    description:
      "Whatever the previous occupant did not take with them, cleared with the owner's or manager's authorization so the unit can be cleaned, inspected, and re-listed."
  },
  {
    Icon: Store,
    title: "Commercial & Retail Clutter",
    description:
      "Back-of-house accumulation, old display fixtures, broken-down shelving, packaging, and general non-hazardous material building up in stockrooms and service corridors."
  },
  {
    Icon: PackageOpen,
    title: "General Eligible Unwanted Items",
    description:
      "Most non-hazardous household and workplace items fall inside the service. If something is unusual, describe it when you request the quote and we will confirm it before the date is set."
  }
];

// ─── Confirmation, kept deliberately honest ───────────────────────────────
const straightforwardItems = [
  "Furniture from homes, offices, and common areas",
  "Boxes, bags, and general non-hazardous clutter",
  "Shelving, cabinets, and free-standing storage units",
  "Items left behind in an authorized property cleanout",
  "Full-room and full-unit clearances",
  "Single awkward items that will not fit in a car"
];

const confirmFirstItems = [
  "Appliances and electronics, which we do not assume are included",
  "Mattresses and box springs, which carry their own handling rules",
  "Very heavy or high-value items such as safes, pianos, and gun cabinets",
  "Anything needing dismantling before it can leave the room",
  "Construction and renovation material such as drywall, lumber, or concrete",
  "Items in an off-site storage unit, where facility access has to be arranged"
];

// ─── Reasons an office books a cleanout ───────────────────────────────────
const officeCleanoutReasons = [
  {
    title: "Relocation",
    description:
      "The furniture that is not making the move has to be gone before the keys go back. Usually a fixed date, usually the last thing anyone plans for."
  },
  {
    title: "Downsizing",
    description:
      "Fewer desks than the last floorplan called for. What is left over becomes a storage problem within about a week of the decision being made."
  },
  {
    title: "Furniture Replacement",
    description:
      "New chairs and desks arriving on a delivery date that only works if the old ones are already out of the building."
  },
  {
    title: "Lease Turnover",
    description:
      "A suite handed back in the condition the lease describes. Clearing the space is the step before any cleaning or inspection can happen."
  },
  {
    title: "Workspace Redesign",
    description:
      "Reconfiguring a floor leaves partitions, shelving, and furniture that no longer fits the new layout, often in stages rather than all at once."
  },
  {
    title: "Closure or Consolidation",
    description:
      "A site being closed or folded into another location has to be emptied completely, on a schedule set by the landlord rather than by you."
  }
];

// ─── Property types served ────────────────────────────────────────────────
const propertiesServed = [
  { Icon: Home, label: "Houses & Townhomes" },
  { Icon: Building2, label: "Apartments & Condominiums" },
  { Icon: KeyRound, label: "Rental & Managed Properties" },
  { Icon: Building2, label: "Offices & Suites" },
  { Icon: Store, label: "Retail & Storefronts" },
  { Icon: Warehouse, label: "Warehouses & Facilities" },
  { Icon: Archive, label: "Storage Rooms & Back Rooms" },
  { Icon: Truck, label: "Commercial Buildings" }
];

// ─── Why choose us ────────────────────────────────────────────────────────
const whyChooseItems = [
  {
    Icon: MapPin,
    title: "A Local Seattle Company",
    description:
      "Locally owned and family-operated, with 30+ years of cleaning work behind the name. Not a national brand routing your call to a franchise you will never meet."
  },
  {
    Icon: Home,
    title: "Homes and Businesses Both",
    description:
      "The same team clears a two-bedroom apartment and a floor of office furniture. You are not pushed into a commercial-only quote because that is all we do."
  },
  {
    Icon: ClipboardList,
    title: "Scope Agreed in Writing First",
    description:
      "What is being removed, from where, and what falls outside the service are settled before the date is booked. No item gets discovered on the day."
  },
  {
    Icon: ShieldCheck,
    title: "A Clear Non-Hazardous Boundary",
    description:
      "We are straight about what we do not take. Hazardous, regulated, and biohazard material needs a dedicated provider, and we will say so rather than quote for it."
  },
  {
    Icon: CalendarCheck,
    title: "Scheduling Around Your Date",
    description:
      "Monday to Saturday, 7 AM to 7 PM, with commercial work arranged around operating hours where the building allows it. Removals get timed to the deadline that matters."
  },
  {
    Icon: Repeat,
    title: "One Provider for the Whole Job",
    description:
      "Junk removal sits alongside move-out cleaning, deep cleaning, and commercial cleaning, so clearing a property and cleaning it can run as one arrangement instead of two."
  }
];

// ─── Process ──────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    title: "Tell Us What Needs to Go",
    description:
      "Describe the items, the property, and roughly how much there is. Photos help more than an exact count. Mention stairs, elevators, parking, and gate codes now rather than later."
  },
  {
    number: "02",
    title: "Confirm the Service Scope",
    description:
      "We check item type, volume, access, and whether everything falls inside the non-hazardous service. Anything that needs a dedicated provider is identified here, before you plan around us."
  },
  {
    number: "03",
    title: "Removal & Hauling",
    description:
      "On the agreed date, the items in scope come out of the property and are hauled away. Floors, doorways, and shared corridors are treated with the care the building deserves."
  },
  {
    number: "04",
    title: "Final Review",
    description:
      "We walk the cleared areas with you, or send confirmation if the property is vacant, so it is clear that what was agreed is what actually left the building."
  }
];

// ─── Related services ─────────────────────────────────────────────────────
const relatedServices = [
  {
    title: "Move-In / Move-Out Cleaning",
    description:
      "Junk removal clears the property. Move-out cleaning is what happens to the empty rooms afterwards, before an inspection or a new tenant.",
    href: "/services/move-in-move-out-cleaning",
    ctaLabel: "See turnover cleaning"
  },
  {
    title: "Post-Construction & Renovation Cleanup",
    description:
      "Construction dust, residue, and fine debris on surfaces, floors, and fixtures after the building work is finished. A different job from hauling items away.",
    href: "/services/post-construction-renovation-cleanup",
    ctaLabel: "View post-construction cleanup"
  },
  {
    title: "Residential Cleaning",
    description:
      "Whole-home cleaning for Seattle houses, apartments, and rentals, booked one-time or on a repeating schedule once the clutter is gone.",
    href: "/services/residential-cleaning",
    ctaLabel: "View residential cleaning"
  },
  {
    title: "Commercial Cleaning",
    description:
      "Recurring janitorial service for offices, retail spaces, and commercial facilities, including the storage areas that fill up between visits.",
    href: "/services/commercial-cleaning",
    ctaLabel: "View commercial cleaning"
  },
  {
    title: "Deep Cleaning",
    description:
      "A detailed reset of a home or facility, most useful on the rooms that have just been emptied and can finally be reached properly.",
    href: "/services/deep-cleaning",
    ctaLabel: "Compare deep cleaning"
  },
  {
    title: "Property Management Cleaning",
    description:
      "Common areas, corridors, and unit turnovers across single buildings or full portfolios, coordinated through one point of contact.",
    href: "/industries/property-management",
    ctaLabel: "See property management cleaning"
  }
];

// ─── FAQ ──────────────────────────────────────────────────────────────────
const faqItems = [
  {
    question: "What types of junk do you remove?",
    answer:
      "Eligible non-hazardous unwanted items: household and office furniture, desks, chairs, tables, shelving, cabinets, boxes, general clutter, and bulky items that will not fit in a car or a curbside bin. That covers most of what fills a garage, a storage room, or an office being cleared. If you have something unusual, describe it when you request the quote and we will confirm whether it falls inside the service."
  },
  {
    question: "Do you provide residential junk removal in Seattle?",
    answer:
      "Yes. We remove unwanted items from houses, townhomes, apartments, and condominiums across Seattle and the surrounding area. That includes single-item furniture removal, garage and storage-area cleanouts, clearing a house before or after a move, and clutter that has built up over years. Homes and businesses are quoted the same way, based on the items, the access, and the volume involved."
  },
  {
    question: "Do you provide commercial junk removal?",
    answer:
      "Yes. Offices, retail spaces, warehouses, managed buildings, and commercial properties are all within scope. Commercial work is usually driven by a date, a relocation, a lease handback, a furniture delivery, or a floor being reconfigured, so scheduling around your operating hours and building access rules is part of the arrangement rather than an afterthought."
  },
  {
    question: "Can you remove office furniture?",
    answer:
      "Yes. Desks, task chairs, conference tables, filing cabinets, shelving, free-standing partitions, and reception furniture are all routine. What we confirm first is how the items leave the building: stair access, elevator booking, loading-dock hours, and whether anything needs dismantling before it will fit through a doorway. Those details change the time required, so they are settled at the quote stage."
  },
  {
    question: "Do you provide full office cleanouts?",
    answer:
      "Yes. A cleanout clears the agreed areas of eligible non-hazardous items so the space can be handed back, re-fitted, or cleaned. It is commonly booked around relocations, downsizing, lease turnover, and closures. We do not offer certified data destruction or electronics recycling, so anything holding company data should be handled by a specialist provider before the removal date."
  },
  {
    question: "Can you remove unwanted items from rental properties?",
    answer:
      "Yes, with authorization from the owner, property manager, or managing agent. Turnover work is one of the most common reasons we are called: a unit is vacant, items have been left behind, and there is a cleaning and re-listing date to hit. We only clear what the authorizing party has approved, and we ask for that confirmation before the visit."
  },
  {
    question: "Do you remove appliances or electronics?",
    answer:
      "Not automatically. Appliances and electronics carry handling and disposal rules of their own, so we do not include them in a standard junk removal quote. Tell us exactly what you have when requesting the quote and we will confirm whether we can take it or whether it needs a provider set up for that category. We would rather answer that before the date than on it."
  },
  {
    question: "Do you remove hazardous materials?",
    answer:
      "No. This is a non-hazardous junk removal service. Paint, solvents, fuel, chemicals, batteries, medical or biohazard waste, and regulated construction material fall outside what we handle and need a licensed disposal provider. If some of what you are clearing is hazardous and some is not, we can still take the eligible portion once the scope is confirmed."
  },
  {
    question: "What is the difference between junk removal and post-construction cleanup?",
    answer:
      "Junk removal takes objects out of a property: furniture, clutter, boxes, and bulky non-hazardous items. Post-construction and renovation cleanup is a cleaning service that deals with what building work leaves on the property: dust, residue, and fine debris across floors, surfaces, and fixtures. Some projects need both, and they are quoted separately because the work, the tools, and the finish standard are different."
  },
  {
    question: "Can junk removal be combined with move-out cleaning?",
    answer:
      "Yes, and it is usually the sensible order. Items are removed first, then the empty property is cleaned. Trying to clean around furniture that is leaving anyway means paying to clean surfaces that will be exposed later. Both can be arranged through the same point of contact, with the removal date set far enough ahead of the cleaning date to keep the sequence intact."
  }
];

// ─────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// NOTE: BreadcrumbList is emitted by the shared <Breadcrumbs> component,
// and Organization / LocalBusiness live in app/layout.tsx under
// `${SITE_URL}/#business`. Neither is repeated in this @graph.
// ─────────────────────────────────────────────────────────────────────────

const junkRemovalSchema = {
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
      name: "Junk Removal Services in Seattle",
      serviceType: "Junk Removal",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: serviceAreas.map((area) => ({ "@type": "City", name: area })),
      audience: {
        "@type": "Audience",
        audienceType:
          "Seattle-area homeowners, renters, business owners, office managers, facility managers, and property managers"
      },
      description:
        "Junk removal and hauling in Seattle for homes, apartments, offices, retail spaces, warehouses, rental properties, and managed buildings. Covers household and office furniture, general clutter, storage-area contents, bulky non-hazardous items, and authorized property cleanouts. Hazardous and regulated materials are outside the service.",
      url: `${SITE_URL}${PAGE_PATH}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Junk Removal Options",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Junk Removal",
              description:
                "Removal of unwanted furniture, household clutter, and bulky non-hazardous items from Seattle-area houses, apartments, and condominiums."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Furniture Removal",
              description:
                "Removal of couches, chairs, tables, bed frames, cabinets, shelving, and office furniture, subject to size, access, and condition."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Junk Removal",
              description:
                "Clearance of eligible non-hazardous items from offices, retail spaces, warehouses, and commercial properties in Seattle."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Office Cleanouts",
              description:
                "Clearing office furniture and workspace items during relocations, downsizing, lease turnover, and workspace reconfiguration."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Property & Rental Cleanouts",
              description:
                "Authorized cleanouts of rental units, apartments, and managed properties during tenant turnover and property transitions."
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Storage Room & Storage Area Cleanouts",
              description:
                "Clearing garages, basements, back rooms, and on-site storage areas of boxes, old furniture, and non-hazardous clutter."
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

export default function JunkRemovalPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
        <Image
          src="/services/junk-removal-hero.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/55"
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
              { label: "Junk Removal", href: PAGE_PATH }
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="eyebrow-light">Seattle Junk Removal</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Junk Removal Services in Seattle
              </h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
                Junk removal and hauling for homes, businesses, offices, rental units, and managed properties
                across Seattle. We clear eligible non-hazardous unwanted items, furniture, and clutter out of the
                agreed areas so the space can be used, cleaned, or handed over, with the scope confirmed in
                writing before anything is loaded.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
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

            <div className="card-dark">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Boxes className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">The Common Problem</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Unwanted furniture, clutter, office items, and accumulated materials take over space that has a
                better use. It happens quietly during a move, a tenant turnover, an office change, or simply years
                of a property being lived in and worked in.
              </p>
              <h2 className="mt-5 text-base font-semibold text-white">How We Help</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                We remove the eligible non-hazardous items you point at and clear the agreed areas, so the property
                is easier to use, easier to clean, and ready for whatever comes next, whether that is a new tenant,
                a new layout, or just a garage you can park in again.
              </p>
              <ul className="mt-5 grid gap-2.5 border-t border-white/10 pt-5 sm:grid-cols-2">
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

      {/* ── DIRECT ANSWER ───────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white" aria-labelledby="junk-intro-heading">
        <Container>
          <ServiceEditorialSplit
            src={OVERVIEW_IMAGE}
            alt="Crew in protective coveralls loading bagged and binned material into the back of a hauling truck on a residential Seattle street"
            width={1024}
            height={1536}
            sizes="(max-width: 1023px) 100vw, 42vw"
            aspect="none"
            columns="lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]"
            align="center"
          >
            <span className="eyebrow">What This Service Is</span>
            <h2 id="junk-intro-heading" className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Professional Junk Removal &amp; Hauling in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Cleaning From The Heart LLC provides junk removal and junk hauling throughout Seattle and the
              surrounding Puget Sound area. The service covers eligible non-hazardous unwanted items: household
              and office furniture, desks, chairs, tables, shelving, cabinets, boxes, storage-area contents, and
              general clutter from both residential and commercial properties.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The people who call are homeowners and renters clearing a garage or a house, businesses emptying an
              office or a stockroom, and property managers turning over rental units between tenants. The trigger
              is almost always a change: a move, a lease ending, a furniture replacement, a downsizing, or a
              property being prepared for someone new.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every job starts the same way, with what the items are, where they sit, and how they get out of the
              building. Hazardous and regulated material stays outside the service, and anything uncertain is
              confirmed at the quote stage rather than discovered on the day.
            </p>
          </ServiceEditorialSplit>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whoCallsUs.map(({ Icon, title, description }, index) => (
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

      {/* ── WHAT WE REMOVE ──────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="what-we-remove">
        <Container>
          <SectionHeading
            eyebrow="Scope of Work"
            title="What We Remove"
            description="Eight categories cover the overwhelming majority of what we are asked to take out of a Seattle property. All of it is non-hazardous, and all of it is confirmed against your specific list before a date is booked."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {removalCategories.map(({ Icon, title, description }, index) => (
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact#quote-form" className="cta-primary">
              Get a Free Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call Now
            </Link>
          </div>
        </Container>
      </section>

      {/* ── ITEMS REQUIRING CONFIRMATION ────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="confirm">
        <Container>
          <SectionHeading
            eyebrow="Before You Book"
            title="Not Sure If We Can Take It?"
            description="Some materials are regulated, unusually heavy, or need a provider set up specifically for them. Rather than publishing a list we cannot stand behind, here is the honest split between what is routine and what we confirm first."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <CheckCircle2 className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">Routine junk removal work</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Non-hazardous and inside the standard service. These need no special arrangement beyond access.
                </p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {straightforwardItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <ClipboardList className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">Confirmed before the date is set</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Not automatic refusals. These simply need checking against the job before anyone commits to a
                  date, because the answer depends on the item and the property.
                </p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {confirmFirstItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 rounded-3xl border border-brand-100 bg-surface px-7 py-7 md:px-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                <TriangleAlert className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">What falls outside this service entirely</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  This is a non-hazardous junk removal service. Paint, solvents, fuel, chemicals, batteries,
                  medical or biohazard waste, and regulated construction material need a licensed disposal
                  provider, and we will tell you that rather than take the job. Tell us what needs to be removed
                  when you request a quote so we can confirm whether it falls within our service scope, and if
                  only part of the load is eligible, we can still handle that part.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── RESIDENTIAL ─────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="residential">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <span className="eyebrow">For Homes &amp; Renters</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Residential Junk Removal in Seattle
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Household junk removal for houses, townhomes, apartments, and condominiums. Most residential calls
                come from one of four situations: a move where a lot is not coming along, a downsizing, a garage
                or basement that has quietly filled up, or a single piece of furniture that has been in the way
                for months because nobody could shift it.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Apartment and condo work has its own constraints, and they matter more than the volume does.
                Elevator bookings, stair-only buildings, loading zones, service-entrance hours, and how far the
                parking is from the door all change how long a removal takes. Mention those when you ask for a
                quote and the estimate will actually hold.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                You do not need a full house of items to call. Clearing one room, one garage bay, or one storage
                cupboard is a normal job, and it is often the one that makes a property usable again.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Quote My Home Cleanout
                </Link>
                <Link href="/services/residential-cleaning" className="cta-secondary">
                  Residential Cleaning
                </Link>
              </div>
            </div>

            {/*
              PHOTO SLOT (residential): no real junk-removal photography exists yet, so a
              designed checklist panel stands in rather than a stock image dressed up as
              client work. Needed shot: a Seattle-area garage or living room mid-clearance,
              items staged by the door. Swap this panel for <ServiceImagePanel> when it exists.
            */}
            <div className="rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <Home className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Common residential jobs</h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {[
                  "Garage and basement cleanouts",
                  "Whole-house clearance before or after a move",
                  "Apartment and condominium cleanouts",
                  "Single-item furniture pickups",
                  "Spare-room and closet clear-outs",
                  "Downsizing into a smaller property",
                  "Clearing a home before a listing or sale",
                  "Non-hazardous clutter from a shed or storage area"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-brand-100 pt-5 text-xs leading-relaxed text-muted">
                Serving Seattle and the surrounding Puget Sound area, Monday to Saturday.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FURNITURE REMOVAL ───────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="furniture">
        <Container>
          <SectionHeading
            eyebrow="The Most Requested Job"
            title="Furniture Removal in Seattle"
            description="Old furniture is the single most common reason people look for junk removal. It is too big for a bin, too heavy for one person, and too awkward for a car, so it sits."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <p className="text-base leading-relaxed text-muted">
                We remove couches, sofas, armchairs, dining tables, chairs, bed frames, dressers, bookcases,
                cabinets, and shelving from homes, and desks, task chairs, conference tables, filing cabinets, and
                reception furniture from workplaces. One item or a full set, residential or commercial, the process
                is the same.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Whether a specific piece can be taken depends on four things, and they are worth thinking about
                before you ask for a price: how big it is, how it gets out of the room and the building, what
                condition it is in, and whether it needs taking apart first. A sofa that came in through a window
                during a build does not leave through a doorway, and that is a scope conversation rather than a
                surprise on the day.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                A photo of the item and the route out, the stairs, the corridor, the door it has to pass through,
                tells us more than any measurement. Send those with your quote request and you will get a
                realistic answer rather than an optimistic one.
              </p>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-surface p-7 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                  <Sofa className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">What we check first</h3>
              </div>
              <dl className="mt-6 grid gap-4">
                {[
                  { term: "Size", detail: "Whether the piece clears doorways, corners, and stairwells intact." },
                  { term: "Access", detail: "Stairs, elevators, loading zones, parking distance, and building hours." },
                  { term: "Condition", detail: "Whether the item is stable enough to move safely without breaking apart." },
                  { term: "Disassembly", detail: "Whether anything has to come apart first, which changes the time needed." }
                ].map(({ term, detail }) => (
                  <div key={term}>
                    <dt className="text-sm font-semibold text-ink">{term}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* ── COMMERCIAL ──────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="commercial">
        <Container>
          <ServiceEditorialSplit
            src="/home/work/work-office-seattle.png"
            alt="Cleaning From The Heart crew working across an open-plan Seattle office floor"
            width={1268}
            height={701}
            sizes="(max-width: 1023px) 100vw, 46vw"
            aspect="aspect-[16/10]"
            imagePosition="right"
            align="center"
            caption="Our crew on a Seattle commercial job. Junk removal is quoted for the same properties we clean."
          >
            <span className="eyebrow">For Businesses &amp; Facilities</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Commercial Junk Removal in Seattle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Offices, retail spaces, restaurants, warehouses, and managed commercial buildings all reach a point
              where old furniture, fixtures, and non-hazardous material are taking up floor area that has a
              better use. Commercial junk hauling clears it on a date that works around your operations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Business removals are almost always driven by a deadline rather than by clutter alone. A lease
              handback, a furniture delivery, a floor being reconfigured, a site consolidating into another one.
              That means building access is the part that decides everything: dock hours, elevator booking,
              after-hours arrangements, and who signs us in.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                "Offices and multi-tenant suites",
                "Retail units and storefronts",
                "Warehouses and industrial facilities",
                "Managed commercial buildings",
                "Back-of-house and stockroom areas",
                "Common areas and service corridors"
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Quote a Commercial Removal
              </Link>
              <Link href="/industries/warehouses-industrial-facilities" className="cta-secondary">
                Warehouses &amp; Facilities
              </Link>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── OFFICE CLEANOUTS ────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="office-cleanouts">
        <Container>
          <SectionHeading
            eyebrow="Office Cleanouts"
            title="Office Cleanout Services in Seattle"
            description="An office cleanout clears the agreed areas of eligible non-hazardous items so the space can be handed back, re-fitted, or cleaned. Six situations account for nearly all of them."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {officeCleanoutReasons.map(({ title, description }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="card flex h-full flex-col gap-2 p-6">
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <Building2 className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">Workspace items we clear</h3>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Desks and workstations",
                  "Task and conference chairs",
                  "Conference and break-room tables",
                  "Filing cabinets and pedestals",
                  "Shelving and storage units",
                  "Free-standing partitions and screens",
                  "Reception and waiting-area furniture",
                  "Boxes, packaging, and general office clutter"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card flex flex-col">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                <ShieldCheck className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">What an office cleanout does not include</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We are not a data-destruction or electronics-recycling provider. Anything holding company or
                client data, and any IT equipment with its own disposal requirements, should be handled by a
                specialist before our visit. Fixed cubicle systems, built-in millwork, and anything requiring
                trade dismantling are assessed case by case rather than assumed to be in scope.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Once the space is empty, the cleaning is a separate booking, and usually a much easier one.{" "}
                <Link href="/services/commercial-cleaning" className="font-semibold text-brand-700 hover:text-brand-900">
                  Commercial cleaning
                </Link>{" "}
                or a{" "}
                <Link href="/services/deep-cleaning" className="font-semibold text-brand-700 hover:text-brand-900">
                  deep clean
                </Link>{" "}
                can be scheduled straight after the removal date.
              </p>
              <Link href="/industries/offices-commercial-buildings" className="cta-secondary mt-auto w-fit">
                Offices &amp; Commercial Buildings
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROPERTY MANAGERS ───────────────────────────────────────────── */}
      <section className="relative section-shell overflow-hidden bg-brand-950 text-white scroll-mt-24" id="property-managers">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] surface-grid" aria-hidden />
        <div
          className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl"
          aria-hidden
        />

        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
            <div>
              <span className="eyebrow-light">For Property Managers</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                Junk Removal for Seattle Property Managers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Turnover work runs on a calendar, not on convenience. A unit goes vacant, items are left behind,
                and the cleaning, the inspection, and the re-listing are all waiting on one thing: the property
                being empty. Clearing it is the step that unblocks the rest.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We handle authorized property cleanouts for apartment communities, condominium associations,
                rental owners, and facilities teams. Authorization matters: we clear only what the owner,
                property manager, or managing agent has approved, and we ask for that confirmation in writing
                before the visit rather than taking a verbal on the doorstep.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                For portfolios, the practical value is having one number to call for every address instead of
                sourcing a hauler per building. Removal, turnover cleaning, and common-area work can run through
                the same point of contact.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Discuss a Portfolio
                </Link>
                <Link href="/industries/property-management" className="cta-ghost">
                  Property Management Cleaning
                </Link>
              </div>
            </div>

            <div className="card-dark">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <KeyRound className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">Where managers use us most</h3>
              <ul className="mt-5 grid gap-2.5">
                {[
                  "Tenant turnover and vacant-unit clearing",
                  "Items left behind after a move-out, with authorization",
                  "Unwanted furniture from furnished units",
                  "Common-area and corridor clutter",
                  "Building storage rooms and back-of-house areas",
                  "Property transitions, sales, and handovers",
                  "Repeating turnover work across multiple addresses"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/45">
                Removals are quoted per property. Ongoing turnover arrangements are agreed in writing rather than
                sold as a package.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── APARTMENT & RENTAL CLEANOUTS ────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="rental-cleanouts">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="eyebrow">Turnovers</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Apartment &amp; Rental Property Cleanouts
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                A rental cleanout is the gap between a tenant leaving and the unit being ready. Furniture nobody
                collected, a closet that was not emptied, a balcony storage box, boxes stacked in the second
                bedroom. None of it is complicated, but all of it has to be gone before anything else on the
                turnover list can start.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Vacant is the easiest a property will ever be to work in, which is why clearing and cleaning are
                usually booked back to back. Removal first, cleaning second: it is faster, and you are not paying
                to clean around furniture that is leaving anyway.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Building rules shape the schedule more than the volume does. Elevator reservations, service-entrance
                hours, permitted loading zones, and quiet hours in residential buildings all get confirmed before
                the date is set.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  Icon: DoorOpen,
                  title: "Vacant Units",
                  body: "Everything the previous occupant left, cleared with owner or manager authorization."
                },
                {
                  Icon: Sofa,
                  title: "Furnished Rentals",
                  body: "Tired furniture swapped out between tenancies, removed before the replacements arrive."
                },
                {
                  Icon: Archive,
                  title: "Unit Storage",
                  body: "Balcony boxes, storage cages, and closets that were never fully emptied."
                },
                {
                  Icon: Boxes,
                  title: "Pre-Cleaning Prep",
                  body: "Clearing the floor so a turnover clean can actually reach every surface."
                }
              ].map(({ Icon, title, body }, index) => (
                <Reveal key={title} delay={index * 0.06}>
                  <article className="card flex h-full flex-col gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── STORAGE CLEANOUTS ───────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface scroll-mt-24" id="storage">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-white px-7 py-9 md:px-12 md:py-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
                  <Archive className="h-7 w-7 text-brand-700" aria-hidden />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Storage Room &amp; Storage Area Cleanouts
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Storage areas fill up because nobody has to look at them. An office back room, a building
                  storage cupboard, a garage, a basement, a stockroom behind a shop floor. The contents are
                  usually boxes, retired furniture, and general non-hazardous clutter that was put there
                  temporarily several years ago.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Clearing one is often the highest-value job on a property, because storage space is space you
                  already pay for. It is also the job most likely to turn up something we need to check first,
                  which is why it is worth listing what is in there when you request the quote.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-ink">Storage areas we clear</h3>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Office storage and back rooms",
                    "Commercial stockrooms",
                    "Building and common storage rooms",
                    "Residential garages and basements",
                    "Sheds and outbuildings",
                    "Under-stair and utility cupboards"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                  <p className="text-sm font-semibold text-ink">Off-site storage units</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    If your items are in a rented unit at a storage facility rather than on your own property,
                    say so when you request the quote. Facility access, hours, and permissions have to be
                    arranged before we can confirm the job.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── MOVES & TRANSITIONS ─────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="moves">
        <Container>
          <ServiceEditorialSplit
            src="/services/moveout-into.png"
            alt="Packing boxes and cleaning supplies in an empty apartment during a move-out"
            width={1122}
            height={1402}
            sizes="(max-width: 1023px) 100vw, 40vw"
            aspect="aspect-[4/5]"
            columns="lg:grid-cols-[1.15fr_0.85fr]"
            imagePosition="left"
            align="center"
          >
            <span className="eyebrow">Moves &amp; Transitions</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Junk Removal for Moves, Turnovers &amp; Property Transitions
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Moves generate the most junk of any situation we deal with, because a move is the only time anyone
              inventories everything they own. Household moves, office relocations, rental turnovers, downsizing,
              and space reconfigurations all end with a pile of things that are not going to the new place.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Sequencing matters. Removal comes first, cleaning comes second, and the two dates should not be the
              same day if the property is genuinely full. Give the removal enough room ahead of the clean and
              neither job gets rushed.
            </p>
            <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-6">
              <h3 className="text-sm font-semibold text-ink">Where the line sits</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                <strong className="font-semibold text-ink">Junk removal</strong> clears the unwanted items out of
                the property.{" "}
                <Link
                  href="/services/move-in-move-out-cleaning"
                  className="font-semibold text-brand-700 hover:text-brand-900"
                >
                  Move-in / move-out cleaning
                </Link>{" "}
                is what happens to the empty rooms afterwards, the kitchens, bathrooms, floors, and surfaces that
                get inspected before a deposit is returned or a new tenant arrives. Different jobs, commonly
                booked together, quoted separately.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Quote Removal &amp; Cleaning Together
              </Link>
            </div>
          </ServiceEditorialSplit>
        </Container>
      </section>

      {/* ── JUNK REMOVAL VS POST-CONSTRUCTION CLEANUP ───────────────────── */}
      <section className="section-shell bg-surface scroll-mt-24" id="vs-post-construction">
        <Container>
          <SectionHeading
            center
            eyebrow="Two Different Services"
            title="Junk Removal vs. Post-Construction Cleanup"
            description="These get confused constantly, and booking the wrong one wastes a day for everybody. One takes objects out of a building. The other cleans the building itself."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col rounded-3xl border border-brand-200 bg-brand-50 p-7 md:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                  <Truck className="h-6 w-6 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">Junk Removal (this service)</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Removing eligible unwanted objects from a property: furniture, clutter, boxes, workspace items,
                  storage contents, and bulky non-hazardous material. The result is an emptier space.
                </p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {[
                    "Deals with items, not surfaces",
                    "Measured in volume, access, and weight",
                    "Ends when the agreed areas are cleared",
                    "Booked for moves, turnovers, and cleanouts",
                    "Non-hazardous items only"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="card flex h-full flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100">
                  <HardHat className="h-6 w-6 text-brand-700" aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">Post-Construction &amp; Renovation Cleanup</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  A cleaning service for what building work leaves behind: construction dust, residue, and fine
                  debris across floors, surfaces, fixtures, and finished areas. The result is a clean space.
                </p>
                <ul className="mt-5 grid flex-1 gap-2.5">
                  {[
                    "Deals with dust and residue, not objects",
                    "Measured in square footage and detail level",
                    "Ends when the space is ready for handoff",
                    "Booked at the end of a build or remodel",
                    "A separate quote from any removal work"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/services/post-construction-renovation-cleanup" className="cta-secondary mt-6 w-fit">
                  View Post-Construction Cleanup
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </article>
            </Reveal>
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-brand-100 bg-white px-7 py-7 text-center md:px-10">
            <p className="text-sm leading-relaxed text-muted">
              Renovation projects often need both, in that order. If you have eligible non-hazardous items to
              clear out of a finished space, that is junk removal. If the surfaces still carry construction dust,
              that is{" "}
              <Link
                href="/services/post-construction-renovation-cleanup"
                className="font-semibold text-brand-700 hover:text-brand-900"
              >
                post-construction and renovation cleanup
              </Link>
              . Regulated construction debris, drywall, concrete, and treated lumber sits outside both and needs a
              licensed disposal provider.
            </p>
          </div>
        </Container>
      </section>

      {/* ── RESPONSIBLE HANDLING ────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-100 bg-surface px-7 py-8 md:px-10 md:py-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                <Recycle className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-ink">Responsible Handling of Removed Items</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Removed items are handled according to the agreed service scope and the applicable disposal
                  requirements for the material. We do not run a certified recycling program, an e-waste stream,
                  or a donation partnership, and we would rather say that plainly than publish a diversion figure
                  we cannot stand behind. If the destination of a particular item matters to you, raise it when
                  you request the quote and we will tell you honestly what we can and cannot commit to.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROPERTIES WE SERVE ─────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            center
            eyebrow="Properties"
            title="Junk Removal for Seattle Homes, Businesses & Managed Properties"
            description="The same service, quoted against whatever the property actually is. Access and volume change the job far more than the category does."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {propertiesServed.map(({ Icon, label }, index) => (
              <Reveal key={label} delay={index * 0.04}>
                <div className="card flex h-full flex-col items-center gap-3 p-6 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>
                  <span className="text-sm font-semibold text-ink">{label}</span>
                </div>
              </Reveal>
            ))}
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
                  Why Choose Cleaning From The Heart for Junk Removal
                </h2>
              </div>
              <p className="text-base leading-relaxed text-white/55 lg:text-right">
                A local company that already cleans these properties, quoting the clear-out honestly.
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
        </Container>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="process">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Junk Removal Process"
            description="Four steps from first message to a cleared property. Nothing is committed until the items, the access, and the price are agreed."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.07}>
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
            <div className="flex flex-col items-start gap-1">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Free Quote
              </Link>
              <span className="pl-1 text-[11px] text-muted">Takes 60 seconds · No obligation</span>
            </div>
            <Link href={siteConfig.phoneHref} className="cta-secondary">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call Now
            </Link>
          </div>
        </Container>
      </section>

      {/* ── ONE-TIME & ONGOING ──────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Frequency"
            title="One-Time & Ongoing Junk Removal"
            description="Most removals happen once. Some properties generate the same job repeatedly, and those are worth arranging rather than re-quoting every time."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card flex flex-col gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                <PackageOpen className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-ink">One-time removals</h3>
              <p className="text-sm leading-relaxed text-muted">
                A garage cleanout, a house being emptied before a sale, an office relocation, a single sofa that
                has outstayed its welcome. One job, one date, one quote. This is the majority of what we do, and
                there is no minimum commitment attached to it.
              </p>
              <ul className="mt-1 grid gap-2.5">
                {[
                  "Household and garage cleanouts",
                  "Single-item furniture pickups",
                  "Office relocations and closures",
                  "Storage room clearances"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card flex flex-col gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                <Repeat className="h-5 w-5 text-brand-700" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-ink">Repeating and account work</h3>
              <p className="text-sm leading-relaxed text-muted">
                Property managers running regular turnovers, facilities teams clearing storage on a cycle, and
                commercial accounts refreshing furniture in stages all end up needing the same thing more than
                once. That gets arranged in writing around your schedule, not sold as a subscription.
              </p>
              <ul className="mt-1 grid gap-2.5">
                {[
                  "Turnover removals across a portfolio",
                  "Periodic commercial storage clear-downs",
                  "Staged workspace reconfigurations",
                  "Removals alongside a recurring cleaning contract"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      {/*
        RESULTS SECTION, IMAGE STATUS:
        No junk-removal photography exists in /public yet, and nothing in
        `galleryItems` (lib/site.ts) is tagged for it. Deliberately no photo grid
        here rather than passing stock or cross-service images off as junk removal
        work. When real photos land, add them to `galleryItems` with a new
        "junk-removal" GalleryCategory and drop a 3-4 image grid in below.
        Shots needed, in priority order:
          1. Office furniture staged for removal (desks/chairs by a doorway)
          2. Before/after of a garage or storage room cleanout
          3. A cleared rental unit ready for turnover cleaning
          4. Furniture being carried out / loaded for hauling
      */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-surface px-7 py-9 md:px-12 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
                  <Images className="h-7 w-7 text-brand-700" aria-hidden />
                </div>
                <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  Junk Removal Results
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Our Results gallery is built entirely from real Seattle-area jobs, with nothing staged and
                  nothing borrowed. Junk removal photo sets are still being added to it, so rather than fill this
                  space with images from somewhere else, we would rather show you the standard we hold on the work
                  that is already documented there.
                </p>
              </div>
              <Link href="/gallery" className="cta-secondary shrink-0">
                View the Results Gallery
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SERVICE AREA ────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            <div>
              <span className="eyebrow">Where We Work</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Junk Removal in Seattle &amp; Nearby Areas
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                We are based in Renton and work throughout Seattle and the greater Puget Sound area. Junk removal
                is more sensitive to location than most services we offer, because distance, parking, and building
                access all feed into the time a job takes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Availability is confirmed against your address, the property type, and the scope when we quote,
                rather than assumed from a map. If you are toward the edge of the range, a quick call is worth it
                before you plan around a date.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Check Availability for Your Address
                </Link>
                <Link href="/industries-we-serve" className="cta-secondary">
                  Industries We Serve
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-100 bg-white p-7 md:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
                  <MapPin className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-ink">Areas we regularly serve</h3>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
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

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white scroll-mt-24" id="faq">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Junk Removal Questions</h2>
              <p className="mt-4 text-base text-muted">
                What homeowners, business owners, and property managers ask most before booking a removal in
                Seattle.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-surface p-5">
                <p className="text-sm font-semibold text-ink">Got an item you are unsure about?</p>
                <p className="mt-1 text-sm text-muted">
                  Describe it, or send a photo, and we&apos;ll tell you plainly whether it falls inside the
                  service.
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
          <SectionHeading
            eyebrow="Related Services"
            title="Need More Than Junk Removal?"
            description="Clearing a property and cleaning it are two jobs. These are the services most often booked either side of a removal."
          />
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
                <p className="eyebrow-light">Junk Removal in Seattle</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Need Junk Removed From Your Seattle Property?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Homeowners, business owners, office managers, and property managers are all quoted the same way.
                  Tell us what needs to be removed, where the property is, and anything we should know about
                  access. We will confirm whether the items fall within our junk removal service and set out the
                  next steps in writing.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-gold w-full justify-center">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(junkRemovalSchema) }}
      />
    </>
  );
}
