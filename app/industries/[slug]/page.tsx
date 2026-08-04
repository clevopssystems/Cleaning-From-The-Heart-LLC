import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Phone,
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig, getServiceBySlug, whyChooseUs } from "@/lib/site";
import { getIndustryBySlug, getIndustryByAnySlug, getIndustryPageSlugs, industryProcessSteps } from "@/lib/industries";

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

const genericScheduleOptions = [
  { title: "Daily Service", description: "For high-traffic, customer-facing spaces that need attention every business day." },
  { title: "Several Visits Per Week", description: "A middle-ground cadence for busier facilities that don't quite need daily service." },
  { title: "Weekly Cleaning", description: "The standard cadence for lower-traffic offices and facilities." },
  { title: "Before-Opening or After-Hours", description: "Service scheduled around your hours so cleaning never interrupts operations." },
  { title: "Periodic Maintenance", description: "Floor care and deeper resets scheduled on a less frequent, recurring basis." }
];

interface IndustryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getIndustryPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry || !industry.page) {
    return { title: "Industry Not Found" };
  }

  const canonical = `/industries/${industry.slug}`;
  const { metaTitle, metaDescription } = industry.page;

  return {
    // `absolute` opts out of the root layout's "%s | Cleaning From The Heart LLC"
    // template, every industry metaTitle already carries the brand suffix, so
    // without this the rendered <title> repeats the brand twice.
    title: { absolute: metaTitle },
    description: metaDescription,
    alternates: { canonical },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `${SITE_URL}${canonical}`,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/services/hero/hero-cleaning-team.png",
          alt: `${industry.name} cleaning in Seattle, Cleaning From The Heart LLC`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ["/services/hero/hero-cleaning-team.png"]
    }
  };
}

export default async function IndustryDetailPage({ params }: IndustryDetailPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry || !industry.page) {
    notFound();
  }

  const { page } = industry;
  const Icon = iconMap[industry.iconName] ?? Building2;
  const introImage =
    industry.slug === "offices-commercial-buildings"
      ? {
          src: "/services/office intro.png",
          alt: "Bright office conference room with a long table and teal chairs",
          width: 1086,
          height: 1448
        }
      : {
          src: "/services/intro/intro-image.png",
          alt: `Commercial cleaning equipment staged in a building lobby for ${industry.name.toLowerCase()} cleaning`,
          width: 900,
          height: 1125
        };

  const relatedServices = page.relatedServiceSlugs.map((serviceSlug) => getServiceBySlug(serviceSlug)).filter(Boolean);
  const relatedIndustries = page.relatedIndustrySlugs
    .map((relSlug) => getIndustryByAnySlug(relSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Industries We Serve", href: "/industries-we-serve" },
    { label: industry.name, href: `/industries/${industry.slug}` }
  ];

  // BreadcrumbList is emitted by the shared <Breadcrumbs> component below.
  // To avoid duplicate or incomplete breadcrumb entities, this page schema
  // intentionally does not define or separately reference another BreadcrumbList.
  const industrySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/industries/${industry.slug}#webpage`,
        name: page.metaTitle,
        description: page.metaDescription,
        url: `${SITE_URL}/industries/${industry.slug}`,
        about: { "@id": `${SITE_URL}/#business` }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/industries/${industry.slug}#service`,
        name: page.h1,
        serviceType: `${industry.name} Cleaning`,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "AdministrativeArea", name: "King County" },
          { "@type": "City", name: "Seattle" },
          { "@type": "City", name: "Bellevue" },
          { "@type": "City", name: "Renton" },
          { "@type": "City", name: "Kent" },
          { "@type": "City", name: "Tukwila" },
          { "@type": "City", name: "Everett" },
          { "@type": "City", name: "Shoreline" },
          { "@type": "City", name: "Federal Way" },
          { "@type": "City", name: "Kirkland" },
          { "@type": "City", name: "Redmond" },
          { "@type": "City", name: "Burien" },
          { "@type": "City", name: "SeaTac" },
          { "@type": "City", name: "Mercer Island" },
          { "@type": "City", name: "Tacoma" },
          { "@type": "City", name: "Bothell" }
        ],
        description: page.metaDescription,
        url: `${SITE_URL}/industries/${industry.slug}`
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/industries/${industry.slug}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      }
    ]
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 overflow-hidden bg-ink text-white">
        {industry.slug === "offices-commercial-buildings" ? (
          <Image
            src="/services/office-hero.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-video absolute inset-0 h-full w-full object-cover"
            aria-hidden
          >
            <source src="/home/hero/hero-bg.mp4" type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-ink/65" aria-hidden />
        <div className="absolute inset-0 opacity-20 surface-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-transparent" aria-hidden />
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
        <Container className="relative section-shell-tight pt-24">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="eyebrow-light">{page.heroLabel}</span>
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">{page.h1}</h1>
              <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">{page.heroIntro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Free Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>
            <div className="card-dark hidden h-fit lg:block">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-semibold text-white">Areas Commonly Included</h2>
              <ul className="mt-3 space-y-2">
                {page.areasIncluded.slice(0, 6).map((area) => (
                  <li key={area} className="flex items-start gap-2 text-sm text-white/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── DIRECT-ANSWER SUMMARY ───────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_38%] lg:gap-14">
            <SectionHeading eyebrow="Our Approach" title="Cleaning Support Built Around Your Facility" description={page.directAnswer} />
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-brand-100 shadow-card lg:mx-0 lg:max-w-none">
              <Image
                src={introImage.src}
                alt={introImage.alt}
                width={introImage.width}
                height={introImage.height}
                className="aspect-[4/5] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── INDUSTRY-SPECIFIC PRIORITIES ────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading
            eyebrow="What We Focus On"
            title={`Cleaning Priorities for ${industry.name}`}
            description="These are the areas and details that differ most for this industry."
          />
          {/* Editorial two-column rows instead of a card grid: the descriptions are
              full sentences, so they read better as prose with a hairline rule
              between items than as ragged boxes. */}
          <div className="mt-10 border-t border-brand-100/80">
            {page.priorities.map((priority, index) => (
              <article
                key={priority.title}
                className="grid gap-2 border-b border-brand-100/80 py-6 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12 md:py-7"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-semibold tabular-nums text-brand-600/70" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-ink">{priority.title}</h3>
                </div>
                <p className="text-[15px] leading-relaxed text-muted md:max-w-[70ch]">{priority.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROPERTY TYPES ───────────────────────────────────────────────── */}
      {page.propertyTypes && page.propertyTypes.length > 0 ? (
        <section className="section-shell-tight bg-white">
          <Container>
            <SectionHeading
              eyebrow="Property Types"
              title="Property Types We Support"
              description="Cleaning plans are built for the way each property type is actually used and accessed."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.propertyTypes.map((type) => (
                <article key={type.title} className="card flex h-full flex-col gap-2">
                  <h3 className="text-sm font-semibold text-ink">{type.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{type.description}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* ── AREAS INCLUDED + SCHEDULES ───────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Scope</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">Areas That May Be Included</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                A starting point for what a customized plan typically covers. Final scope depends on the
                walkthrough, property requirements, frequency, and access, and is confirmed in a written proposal.
              </p>
              {page.areaGroups && page.areaGroups.length > 0 ? (
                <div className="mt-6 space-y-5">
                  {page.areaGroups.map((group) => (
                    <div key={group.title}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{group.title}</p>
                      <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {group.items.map((area) => (
                          <div key={area} className="flex items-start gap-2 rounded-xl border border-brand-100 bg-white px-3.5 py-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                            <span className="text-sm font-medium text-ink">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {page.areasIncluded.map((area) => (
                    <div key={area} className="flex items-start gap-2 rounded-xl border border-brand-100 bg-white px-3.5 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      <span className="text-sm font-medium text-ink">{area}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <span className="eyebrow">Scheduling</span>
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">Recommended Cleaning Schedules</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{page.scheduleNote}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {genericScheduleOptions.map((option) => (
                  <div key={option.title} className="rounded-xl border border-brand-100 bg-white p-4">
                    <p className="text-sm font-semibold text-ink">{option.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CLEANING SERVICES ───────────────────────────────────────────── */}
      {page.cleaningServiceGroups && page.cleaningServiceGroups.length > 0 ? (
        <section className="section-shell-tight bg-white">
          <Container>
            <SectionHeading
              eyebrow="Cleaning Services"
              title="Cleaning Services That Support Your Property"
              description="Recurring service maintains shared spaces week to week; periodic services handle turnovers and less frequent needs."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {page.cleaningServiceGroups.map((group) => (
                <article key={group.title} className="card flex h-full flex-col gap-3">
                  <h3 className="text-base font-semibold text-ink">{group.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{group.description}</p>
                  <ul className="mt-1 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* ── RELATED CLEANING SERVICES ────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading eyebrow="Related Services" title="Related Cleaning Services" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {relatedServices.map((service) => (
              <article key={service!.slug} className="card-hover flex h-full flex-col gap-3">
                <h3 className="text-sm font-semibold text-ink">{service!.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{service!.shortDescription}</p>
                <Link
                  href={`/services/${service!.slug}`}
                  className="mt-auto inline-flex items-center pt-1 text-sm font-semibold text-brand-700 hover:text-brand-900"
                >
                  {service!.title}
                  <ArrowRight className="ml-1 h-3.5 w-3.5" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Getting Started" />
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {industryProcessSteps.map((step, index) => (
              <li key={step.title} className="card">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Step {index + 1}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── WHY CLEANING FROM THE HEART LLC ─────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <SectionHeading eyebrow="Why Choose Us" title="Why Cleaning From The Heart LLC" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whyChooseUs.slice(0, 4).map((item) => (
              <article key={item.title} className="card flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-white">
        <Container>
          <SectionHeading eyebrow="Common Questions" title={`${industry.name} Cleaning FAQs`} />
          <div className="mt-8 space-y-3">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group overflow-hidden rounded-2xl border border-brand-100 bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-ink transition-colors hover:text-brand-700">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-200 group-open:rotate-180" aria-hidden />
                </summary>
                <div className="border-t border-brand-100 bg-surface px-5 py-4">
                  <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RELATED INDUSTRIES ──────────────────────────────────────────── */}
      {relatedIndustries.length > 0 ? (
        <section className="section-shell-tight bg-surface">
          <Container>
            <SectionHeading eyebrow="Related Industries" title="You May Also Be Looking For" />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedIndustries.map((related) => {
                const RelatedIcon = iconMap[related.iconName] ?? Building2;
                return (
                  <Link
                    key={related.slug}
                    href={related.href}
                    className="card-hover flex items-center gap-3 !p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                      <RelatedIcon className="h-5 w-5 text-brand-700" aria-hidden />
                    </div>
                    <span className="text-sm font-semibold text-ink">{related.name} Cleaning</span>
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-brand-700" aria-hidden />
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
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
                Tell us about your facility and we'll schedule a walkthrough, confirm scope, and send a written,
                no-obligation proposal.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/contact#quote-form" className="cta-gold">
                  Request a Free Quote
                </Link>
                <Link href="/industries-we-serve" className="cta-ghost">
                  View All Industries
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }} />
    </>
  );
}
