import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Building2,
  ChefHat,
  GraduationCap,
  KeyRound,
  UtensilsCrossed,
  Home,
  HardHat,
  Droplets,
  Sparkles,
  CalendarCheck,
  Layers,
  Brush,
  Zap,
  Truck,
  Sun,
  Car,
  Trash2,
  type LucideIcon
} from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seattle Cleaning Services",
  description:
    "Explore Seattle cleaning services from Cleaning From The Heart LLC, including commercial cleaning, residential cleaning, office cleaning, school cleaning, deep cleaning, window cleaning, pressure washing, and more.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Seattle Cleaning Services | Cleaning From The Heart LLC",
    description:
      "Commercial, residential, exterior, and specialty cleaning services for Seattle-area offices, homes, schools, and commercial properties. 30+ years of experience.",
    url: "https://www.cleaningfromtheheartllc.com/services",
    type: "website"
  }
};

// ─── Service card copy (short, specific blurbs per service) ──────────────────
// Titles and links are kept in sync with lib/site.ts via slug.
type ServiceCard = { slug: string; title: string; blurb: string; icon: LucideIcon };

const commercialGroup: ServiceCard[] = [
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    icon: Building2,
    blurb:
      "Reliable recurring and one-time cleaning for offices, retail spaces, and commercial properties across Seattle."
  },
  {
    slug: "school-facility-cleaning",
    title: "School & Educational Facility Cleaning",
    icon: GraduationCap,
    blurb:
      "Cleaning support for schools, classrooms, offices, restrooms, and shared spaces where safety and consistency matter."
  },
  {
    slug: "restaurant-cleaning",
    title: "Restaurant Cleaning",
    icon: UtensilsCrossed,
    blurb:
      "Whole-restaurant cleaning for dining rooms, entrances, bars, restrooms, and staff areas, scheduled between close and open."
  },
  {
    slug: "restaurant-kitchen-cleaning",
    title: "Restaurant Kitchen Cleaning",
    icon: ChefHat,
    blurb:
      "Back-of-house detail for commercial kitchens: prep surfaces, kitchen floors, grease-prone areas, and equipment exteriors."
  },
  {
    slug: "strip-and-wax",
    title: "Strip & Wax",
    icon: Layers,
    blurb:
      "Floor stripping and waxing that restores a clean, protected, professional shine to commercial hard floors."
  },
  {
    slug: "carpet-cleaning",
    title: "Carpet Cleaning",
    icon: Brush,
    blurb:
      "Deep extraction cleaning that lifts embedded dirt, stains, and odor from office and commercial carpet."
  },
  {
    slug: "window-glass-cleaning",
    title: "Window & Glass Cleaning",
    icon: Sparkles,
    blurb:
      "Streak-free interior and exterior glass cleaning for storefronts, offices, and commercial buildings."
  }
];

const residentialGroup: ServiceCard[] = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    icon: Home,
    blurb:
      "Professional home cleaning for Seattle-area homeowners, renters, and property managers, from routine upkeep to detailed cleanups."
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    icon: Zap,
    blurb:
      "A thorough top-to-bottom reset for homes and businesses that need more than routine cleaning. Compare residential and commercial options."
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    icon: Truck,
    blurb:
      "Detailed turnover cleaning that prepares homes and rentals for new occupants and final inspections."
  }
];

const exteriorGroup: ServiceCard[] = [
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    icon: Droplets,
    blurb:
      "Exterior pressure washing that lifts dirt, algae, and buildup from concrete, walkways, and building surfaces."
  },
  {
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning",
    icon: Sun,
    blurb:
      "Careful exterior cleaning that removes dust, pollen, and debris from residential and commercial panels."
  },
  {
    slug: "parking-lot-exterior-maintenance",
    title: "Parking Lot & Exterior Maintenance",
    icon: Car,
    blurb:
      "Routine upkeep for parking lots, entryways, and perimeter areas that keeps your property presentable."
  },
  {
    slug: "junk-removal",
    title: "Junk Removal",
    icon: Trash2,
    blurb:
      "Fast removal of non-hazardous junk and unwanted items so your space is clear and ready to use."
  },
  {
    slug: "post-construction-renovation-cleanup",
    title: "Post-Construction & Renovation Cleanup",
    icon: HardHat,
    blurb:
      "Detailed cleanup that clears dust, debris, and residue so finished spaces are ready for handoff."
  }
];

// Conversion cards used to balance uneven rows (see Task 5).
type ConversionCard = { title: string; body: string; cta: string };

const notSureCard: ConversionCard = {
  title: "Not Sure Which Service You Need?",
  body: "Tell us about your property and we will recommend the right cleaning option.",
  cta: "Request a Quote"
};

const recurringCard: ConversionCard = {
  title: "Need Recurring Cleaning?",
  body: "Ask about weekly, bi-weekly, monthly, or custom cleaning schedules for your property.",
  cta: "Plan My Cleaning"
};

const whoWeHelp = [
  {
    icon: Building2,
    title: "Offices & Commercial Buildings",
    description: "Cleaning for workspaces, lobbies, restrooms, breakrooms, and shared areas."
  },
  {
    icon: GraduationCap,
    title: "Schools & Educational Facilities",
    description: "Cleaning support for classrooms, offices, restrooms, halls, and high-use areas."
  },
  {
    icon: KeyRound,
    title: "Property Managers",
    description: "Move-out, recurring, turnover, exterior, and specialty cleaning for managed properties."
  },
  {
    icon: Home,
    title: "Homeowners & Renters",
    description: "Residential, deep cleaning, move-in, and move-out cleaning for homes and apartments."
  },
  {
    icon: HardHat,
    title: "Construction & Renovation Projects",
    description: "Post-construction cleanup to help spaces feel ready for handoff or occupancy."
  },
  {
    icon: Droplets,
    title: "Exterior Property Care",
    description:
      "Pressure washing, parking lot upkeep, window cleaning, solar panel cleaning, and exterior maintenance."
  }
];

const servicesFaqs = [
  {
    question: "What cleaning services does Cleaning From The Heart LLC offer?",
    answer:
      "We provide commercial cleaning, residential cleaning, office cleaning, school cleaning, carpet cleaning, floor care, window cleaning, pressure washing, move-in and move-out cleaning, deep cleaning, solar panel cleaning, junk removal, and post-construction cleanup."
  },
  {
    question: "Do you provide commercial cleaning in Seattle?",
    answer:
      "Yes. We provide commercial cleaning for offices, retail spaces, schools, commercial properties, and managed facilities across Seattle and surrounding areas."
  },
  {
    question: "Do you offer residential cleaning?",
    answer:
      "Yes. We provide residential cleaning, deep cleaning, and move-in or move-out cleaning for Seattle-area homes, apartments, and rental properties."
  },
  {
    question: "Can I request recurring cleaning?",
    answer:
      "Yes. Depending on your property and schedule, we can discuss recurring cleaning options such as weekly, bi-weekly, monthly, or custom service plans."
  },
  {
    question: "Do you clean schools and educational facilities?",
    answer:
      "Yes. We provide cleaning support for schools, classrooms, offices, restrooms, shared spaces, and educational facilities."
  },
  {
    question: "How do I request a quote?",
    answer:
      "You can request a free quote through the website or call Cleaning From The Heart LLC directly at (206) 850-8484."
  }
];

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/services#webpage`,
      url: `${SITE_URL}/services`,
      name: "Seattle Cleaning Services | Cleaning From The Heart LLC",
      description:
        "Commercial, residential, exterior, and specialty cleaning services from Cleaning From The Heart LLC, a locally owned, family-operated Seattle cleaning company with 30+ years of experience.",
      about: { "@id": `${SITE_URL}/#business` },
      isPartOf: { "@id": `${SITE_URL}/#business` }
    },
    ...services.map((service) => ({
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      url: `${SITE_URL}/services/${service.slug}`,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: { "@type": "City", name: "Seattle" }
    })),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/services#faq`,
      mainEntity: servicesFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

// Whole-card-clickable service card. The "Learn More" link is stretched across
// the card via an ::after overlay; "Request Quote" sits above it with z-10.
function ServiceCardItem({ card }: { card: ServiceCard }) {
  const Icon = card.icon;
  return (
    <article className="card-hover relative flex h-full flex-col">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
          <Icon className="h-5 w-5 text-brand-700" aria-hidden />
        </div>
        <h3 className="mt-1 text-lg font-semibold text-ink">{card.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{card.blurb}</p>
      <div className="mt-auto flex items-center justify-between gap-4 border-t border-brand-100 pt-4 sm:border-0 sm:pt-6">
        <Link
          href={`/services/${card.slug}`}
          className="inline-flex items-center py-1 text-sm font-semibold text-brand-700 after:absolute after:inset-0 hover:text-brand-600"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
        </Link>
        <Link
          href="/contact#quote-form"
          className="relative z-10 rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50 sm:px-0 sm:py-1 sm:text-muted sm:hover:bg-transparent sm:hover:text-brand-700"
        >
          Request Quote
        </Link>
      </div>
    </article>
  );
}

function ConversionCardItem({ card }: { card: ConversionCard }) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7 shadow-card">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
        <Sparkles className="h-5 w-5 text-brand-700" aria-hidden />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{card.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
      <Link
        href="/contact#quote-form"
        className="cta-primary mt-6 w-full justify-center text-sm"
      >
        {card.cta}
      </Link>
    </article>
  );
}

function ServiceGroup({
  id,
  eyebrow,
  title,
  intro,
  cards,
  conversionCard,
  image,
  imageAlt,
  reverse = false
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: ServiceCard[];
  conversionCard?: ConversionCard;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={reverse ? "lg:order-2" : undefined}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
        </div>
        <div className={reverse ? "lg:order-1" : undefined}>
          <div className="relative overflow-hidden rounded-2xl border border-brand-100 shadow-card">
            <Image
              src={image}
              alt={imageAlt}
              width={720}
              height={480}
              className="aspect-[3/2] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Reveal key={card.slug} delay={index * 0.05}>
            <ServiceCardItem card={card} />
          </Reveal>
        ))}
        {conversionCard ? (
          <Reveal delay={cards.length * 0.05}>
            <ConversionCardItem card={conversionCard} />
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title={
          <>
            <span className="sm:hidden">Seattle Cleaning Services for Homes, Offices &amp; Businesses</span>
            <span className="hidden sm:inline">
              Seattle Cleaning Services for Homes, Offices, Schools, and Commercial Properties
            </span>
          </>
        }
        description="Choose the cleaning service your property needs and request a quote in minutes. Cleaning From The Heart LLC helps Seattle-area clients keep offices, homes, schools, and commercial spaces clean, safe, and ready to use."
        backgroundImage="/services/hero/hero-cleaning-team.png"
      />

      {/* ─── Intro ─────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text + trust points */}
            <div>
              <span className="eyebrow">Full-Service Cleaning</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Professional Cleaning Services Across Seattle and Surrounding Areas
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Cleaning From The Heart LLC provides commercial, residential, exterior, and specialty cleaning
                services for Seattle-area properties. Whether you manage an office, school, rental property,
                commercial space, or home, our team helps you choose the right cleaning plan and keeps the
                process simple.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  "30+ years of cleaning experience",
                  "Locally owned and family-operated",
                  "Free quotes for Seattle-area properties"
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-brand-100 bg-surface px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                    <span className="text-sm font-medium text-ink">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image card */}
            {/*
              INTRO IMAGE
              ──────────────────────────────────────────────────────────
              Paste your PNG here: /public/services/intro/intro-image.png
              Recommended size: 760 x 620px (or any 4:3 / 5:6 image).
              Update the `alt` text below to describe the new photo.
              ──────────────────────────────────────────────────────────
            */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-card">
                <Image
                  src="/services/intro/intro-image.png"
                  alt="Professional cleaning service for a Seattle-area property"
                  width={760}
                  height={620}
                  className="aspect-[4/3] w-full object-cover lg:aspect-[5/6]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-4 -left-4 hidden items-center gap-3 rounded-2xl border border-brand-100 bg-white px-4 py-3 shadow-card sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100">
                  <Sparkles className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">30+ Years of Experience</p>
                  <p className="text-xs text-muted">Locally owned and family-operated</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only quick jump to service categories */}
          <div className="mx-auto mt-8 max-w-3xl md:hidden">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
              Jump to Services
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Commercial", href: "#commercial" },
                { label: "Residential", href: "#residential" },
                { label: "Exterior", href: "#exterior" },
                { label: "FAQ", href: "#faq" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Service Groups ────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="space-y-16 md:space-y-20">
            <ServiceGroup
              id="commercial"
              eyebrow="Commercial & Facility Cleaning"
              title="Cleaning for Offices, Schools, and Commercial Facilities"
              intro="Reliable cleaning for offices, schools, restaurants, retail spaces, managed properties, and commercial facilities that need consistent care. Restaurant cleaning covers the dining room and guest-facing areas; restaurant kitchen cleaning is the back-of-house service."
              cards={commercialGroup}
              conversionCard={recurringCard}
              image="/home/services/commercial-cleaning.jpg"
              imageAlt="Commercial and office cleaning service in Seattle"
            />
            <ServiceGroup
              id="residential"
              eyebrow="Residential & Move Cleaning"
              title="Home, Deep, and Move-In / Move-Out Cleaning"
              intro="Detailed home cleaning for Seattle-area homeowners, renters, landlords, and property managers preparing spaces for daily living, move-in, or move-out."
              cards={residentialGroup}
              image="/home/services/full-home-cleaning.jpg"
              imageAlt="Residential home cleaning service in Seattle"
              reverse
            />
            <ServiceGroup
              id="exterior"
              eyebrow="Exterior & Specialty Cleaning"
              title="Exterior, Project, and Specialty Cleaning Services"
              intro="Exterior and project-based cleaning services that help properties look clean, safe, and ready for clients, tenants, guests, or handoff."
              cards={exteriorGroup}
              conversionCard={notSureCard}
              image="/home/services/pressure-wash.jpg"
              imageAlt="Exterior pressure washing service in Seattle"
            />
          </div>
        </Container>
      </section>

      {/* ─── Who We Help ───────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Who We Help</span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Cleaning Services Built for Different Property Types
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              From offices and schools to homes, rentals, and post-construction spaces, Cleaning From The Heart
              LLC helps Seattle-area clients keep properties clean, organized, and ready for use.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whoWeHelp.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="card-hover flex h-full flex-col gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                    <item.icon className="h-6 w-6 text-brand-700" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Mid-page CTA ──────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white px-8 py-14 md:px-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/10 blur-3xl" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="eyebrow">Get Started</span>
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  Need Help Choosing the Right Cleaning Service?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Tell us about your property, schedule, and cleaning needs. We will help you choose the right
                  service and provide a clear quote.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[200px]">
                <div className="flex flex-col items-start gap-1">
                  <Link href="/contact#quote-form" className="cta-primary w-full justify-center">
                    Get a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-muted">Free quote · No obligation.</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-secondary w-full justify-center">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    Call Now
                  </Link>
                  <span className="pl-1 text-[11px] text-muted">
                    {siteConfig.phoneDisplay} · Mon-Sat, 7 AM to 7 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Work Proof Strip ──────────────────────────────────── */}
      {/*
        Images below are real work photos from /public/images/results/our-work/.
        To swap in newer photos later, replace the files in that folder or update
        the `src` paths here. Keep alt text descriptive and Seattle-focused.
      */}
      <section className="section-shell bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Work</span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              See the Work Before You Call
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              A quick look at the kind of cleaning work we help with across Seattle-area homes, offices, schools,
              and commercial properties.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: "/images/results/our-work/work-1.jpeg", alt: "Seattle commercial cleaning work" },
              { src: "/images/results/our-work/work-2.jpeg", alt: "Office cleaning service in Seattle" },
              { src: "/images/results/our-work/work-3.jpeg", alt: "Window and glass cleaning in Seattle" },
              { src: "/images/results/our-work/work-4.jpeg", alt: "Floor care and cleaning service" }
            ].map((img, index) => (
              <Reveal key={img.src} delay={index * 0.06}>
                <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-card">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105 lg:aspect-[4/5]"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted">
            Want to see more?{" "}
            <Link href="/gallery" className="font-semibold text-brand-700 hover:text-brand-600">
              View our full results gallery
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <section id="faq" className="section-shell bg-surface scroll-mt-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Common Questions</span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Questions About Our Seattle Cleaning Services
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Quick answers about the cleaning services we provide, where we work, and how to request a quote
              across Seattle and the surrounding area.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {servicesFaqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.05}>
                <article className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
                  <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white px-6 py-8 text-center">
            <CalendarCheck className="h-6 w-6 text-brand-600" aria-hidden />
            <p className="text-base font-semibold text-ink">Ready to get a clear quote for your property?</p>
            <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/contact#quote-form" className="cta-primary w-full sm:w-auto">
                Get a Free Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-secondary w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
