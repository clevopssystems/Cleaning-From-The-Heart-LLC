import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  KeyRound,
  Banknote,
  Landmark,
  GraduationCap,
  Church,
  ShoppingBag,
  Car,
  Hotel,
  Dumbbell,
  HeartPulse,
  Warehouse,
  ChefHat,
  ListChecks,
  Phone
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig, services, getServiceBySlug } from "@/lib/site";
import { industries } from "@/lib/industries";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  KeyRound,
  Banknote,
  Landmark,
  GraduationCap,
  Church,
  ShoppingBag,
  Car,
  Hotel,
  Dumbbell,
  HeartPulse,
  Warehouse,
  ChefHat
};

const pageTitle = "Commercial Cleaning by Industry in Seattle | Cleaning From The Heart LLC";
const pageDescription =
  "Explore customized commercial cleaning services for offices, schools, healthcare facilities, retail stores, fitness centers, managed properties and other Seattle-area facilities.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/industries-we-serve"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/industries-we-serve`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Cleaning From The Heart LLC — Commercial Cleaning by Industry in Seattle"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/services/hero/hero-cleaning-team.png"]
  }
};

const planFactors = [
  "Facility type",
  "Property size & square footage",
  "Foot traffic & occupancy",
  "Operating hours & shift schedule",
  "Flooring & surface materials",
  "Number of restrooms",
  "Public vs. employee areas",
  "Required service frequency",
  "Site access & security procedures",
  "Client priorities & periodic maintenance"
];

// Relevant existing service pages linked from the hub — real routes only.
const relatedServiceSlugs = [
  "commercial-cleaning",
  "window-glass-cleaning",
  "carpet-cleaning",
  "strip-and-wax",
  "pressure-washing",
  "school-facility-cleaning",
  "restaurant-kitchen-cleaning"
] as const;

// BreadcrumbList is emitted by the shared <Breadcrumbs> component below.
// To avoid duplicate or incomplete breadcrumb entities, this page schema
// intentionally does not define or separately reference another BreadcrumbList.
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/industries-we-serve#webpage`,
  name: pageTitle,
  description: pageDescription,
  url: `${SITE_URL}/industries-we-serve`,
  about: { "@id": `${SITE_URL}/#business` },
  isPartOf: { "@type": "WebSite", url: SITE_URL, name: siteConfig.name }
};

export default function IndustriesHubPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-ink text-white">
        <Image
          src="/industries-we-serve.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-ink/70" aria-hidden />
        <div className="absolute inset-0 opacity-20 surface-grid" aria-hidden />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries We Serve", href: "/industries-we-serve" }
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <span className="eyebrow-light">Industries We Serve</span>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
              Commercial Cleaning by Industry in Seattle
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
              Every facility type carries its own traffic patterns, surfaces, schedules, and priorities. Rather than
              one standard package, cleaning plans are shaped around how your specific building actually operates,
              from a single office suite to a multi-property portfolio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#quote-form" className="cta-gold">
                Request a Customized Quote
              </Link>
              <Link href="#directory" className="cta-ghost">
                Explore Industries
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── DIRECT-ANSWER INTRO ─────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="A Cleaning Plan Built Around Your Facility"
            description="We don't sell one commercial cleaning package and apply it everywhere. Every account starts with a walkthrough where we look at your facility type, square footage, foot traffic, and operating hours, then build a written scope of work around what we actually find. A retail store scheduled overnight has different priorities than a branch office cleaned discreetly between customer visits, and a multi-property portfolio needs one consistent point of contact instead of a separate conversation for every address. That written scope becomes the checklist your crew follows every visit, and it can be adjusted as your facility's needs change."
          />
        </Container>
      </section>

      {/* ── FULL INDUSTRY DIRECTORY ─────────────────────────────────────── */}
      <section id="directory" className="section-shell bg-surface scroll-mt-24">
        <Container>
          <SectionHeading
            eyebrow="All Industries"
            title="Browse Commercial Cleaning by Industry"
            description="Every industry we serve, in one place. Select yours for a closer look at how a cleaning plan is typically scoped."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:[&>*:last-child:nth-child(3n+1)]:col-start-2">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.iconName] ?? Building2;
              return (
                <Reveal key={industry.slug} delay={(index % 3) * 0.06}>
                  <article className="card flex h-full flex-col gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100">
                      <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <h3 className="text-base font-semibold leading-snug text-ink">{industry.name}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-muted">{industry.hubDescription}</p>
                    <Link
                      href={industry.href}
                      className="mt-auto inline-flex items-center pt-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
                    >
                      {industry.carouselLinkLabel}
                      <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── HOW CLEANING PLANS DIFFER BY FACILITY ───────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <span className="eyebrow">What Shapes Your Plan</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                How Cleaning Plans Differ by Facility
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                No two facilities are scoped the same way. These are the factors we walk through with you before
                writing a cleaning plan.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {planFactors.map((factor) => (
                <div key={factor} className="flex items-start gap-2 rounded-xl border border-brand-100 bg-surface px-3.5 py-3">
                  <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  <span className="text-sm font-medium text-ink">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── RELATED SERVICES ─────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Related Cleaning Services"
            title="Core Services Behind Every Industry Plan"
            description="Industry-specific plans are built from these underlying commercial cleaning services."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:[&>*:last-child:nth-child(3n+1)]:col-start-2">
            {relatedServiceSlugs.map((slug) => {
              const service = getServiceBySlug(slug) ?? services[0];
              return (
                <article key={slug} className="card-hover flex h-full flex-col gap-3">
                  <h3 className="text-base font-semibold leading-snug text-ink">{service.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto inline-flex items-center pt-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
                  >
                    {service.title} Services
                    <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="section-shell bg-ink text-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 text-center md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow-light">Get Started</span>
              <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                Request a Walkthrough & Tailored Cleaning Plan
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                Tell us about your facility and we'll schedule a walkthrough, confirm scope, and send a written
                proposal built around your industry, size, and schedule.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Free Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  );
}
