import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Camera, MapPin, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { ResultsGallery } from "@/components/sections/gallery/ResultsGallery";
import { galleryItems, galleryCategories, siteConfig } from "@/lib/site";

const SITE_URL = "https://www.cleaningfromtheheartllc.com";

export const metadata: Metadata = {
  title: { absolute: "Cleaning Results Gallery | Cleaning From The Heart LLC Seattle" },
  description:
    "View real cleaning results from Cleaning From The Heart LLC, including floor care, window cleaning, exterior cleaning, residential cleaning, school cleaning, and commercial cleaning across Seattle and surrounding areas.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Cleaning Results Gallery | Cleaning From The Heart LLC Seattle",
    description:
      "Real cleaning work across Seattle and surrounding areas: floor care, window cleaning, exterior cleaning, residential, school, and commercial cleaning.",
    url: `${SITE_URL}/gallery`,
    type: "website",
    images: [
      {
        url: "/images/gallery/gallery-19.jpg",
        alt: "Real cleaning results from Cleaning From The Heart LLC in the Seattle area"
      }
    ]
  }
};

// Short trust points shown in the intro band before the gallery.
const trustPoints = [
  { icon: Camera, label: "Real project photos" },
  { icon: MapPin, label: "Seattle-area cleaning work" },
  { icon: Sparkles, label: "Residential, commercial, and exterior services" }
];

// Internal links connecting the proof above to the services that produce it.
// Slugs come straight from the service routes in lib/site.ts.
const serviceLinkGroups = [
  {
    heading: "Need floor care?",
    links: [
      { label: "Strip & Wax", href: "/services/strip-and-wax" },
      { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
      { label: "Commercial Cleaning", href: "/services/commercial-cleaning" }
    ]
  },
  {
    heading: "Need exterior or window cleaning?",
    links: [
      { label: "Pressure Washing", href: "/services/pressure-washing" },
      { label: "Window Cleaning", href: "/services/window-cleaning" },
      { label: "Solar Panel Cleaning", href: "/services/solar-panel-cleaning" }
    ]
  },
  {
    heading: "Need commercial or school cleaning?",
    links: [
      { label: "Commercial Cleaning", href: "/services/commercial-cleaning" },
      { label: "School & Educational Facility Cleaning", href: "/services/school-facility-cleaning" },
      { label: "Post-Construction & Renovation Cleanup", href: "/services/post-construction-renovation-cleanup" }
    ]
  },
  {
    heading: "Need home or move cleaning?",
    links: [
      { label: "Residential Cleaning", href: "/services/residential-cleaning" },
      { label: "Residential Deep Cleaning", href: "/services/residential-deep-cleaning" },
      { label: "Move-In / Move-Out Cleaning", href: "/services/move-in-move-out-cleaning" }
    ]
  }
];

const galleryFaqs = [
  {
    question: "Are these real Cleaning From The Heart LLC project photos?",
    answer:
      "Yes. The gallery shows real cleaning work completed for Seattle-area homes, commercial spaces, schools, and exterior properties."
  },
  {
    question: "What types of cleaning work are shown?",
    answer:
      "The gallery includes examples of floor care, strip and wax work, window cleaning, exterior cleaning, pressure washing, residential cleaning, and commercial cleaning."
  },
  {
    question: "Do you provide similar cleaning services in Seattle?",
    answer:
      "Yes. Cleaning From The Heart LLC provides residential, commercial, office, school, exterior, and specialty cleaning services across Seattle and surrounding areas."
  },
  {
    question: "Can I request a quote for a job like one shown here?",
    answer:
      "Yes. You can request a free quote and share the type of cleaning work you need. We will help match your property with the right service."
  },
  {
    question: "Do you work with offices, schools, and property managers?",
    answer:
      "Yes. We provide cleaning services for offices, schools, managed properties, commercial facilities, homes, and move-in or move-out spaces."
  },
  {
    question: "Will more project photos be added later?",
    answer:
      "Yes. As more work photos become available, the gallery can be updated with additional examples of real cleaning results."
  }
];

const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/gallery#webpage`,
      url: `${SITE_URL}/gallery`,
      name: "Cleaning Results Gallery",
      description:
        "Real cleaning results from Cleaning From The Heart LLC across Seattle and surrounding areas, including floor care, window cleaning, exterior cleaning, residential cleaning, school cleaning, and commercial cleaning.",
      about: { "@id": `${SITE_URL}/#business` },
      isPartOf: { "@id": `${SITE_URL}/#business` },
      mainEntity: { "@id": `${SITE_URL}/gallery#imagegallery` }
    },
    {
      "@type": "ImageGallery",
      "@id": `${SITE_URL}/gallery#imagegallery`,
      name: "Cleaning From The Heart LLC Results Gallery",
      image: galleryItems.map((item) => ({
        "@type": "ImageObject",
        contentUrl: `${SITE_URL}${item.src}`,
        caption: item.caption,
        name: item.tag
      }))
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/gallery#faq`,
      mainEntity: galleryFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ]
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Work"
        title="Real Cleaning Results Across Seattle and Surrounding Areas"
        description="Every photo shows real property service work completed across Seattle and the surrounding metro. Browse examples of floor care, window cleaning, exterior cleaning, and detailed property cleaning."
        backgroundImage="/gallery/hero/gallery-hero.png"
      />

      {/* Stats strip */}
      <div className="border-b border-brand-100 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 py-6 sm:gap-16">
            {[
              { value: "20+", label: "Project Photos" },
              { value: "100%", label: "Real Work Photos" },
              { value: "Seattle", label: "& Surrounding Areas" }
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-brand-700">{value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Trust intro ─────────────────────────────────────────────────────── */}
      <section className="section-shell-tight bg-surface">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Real Work Proof</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              See the Cleaning Work Before You Call
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              These photos show real cleaning work from homes, offices, schools, exterior properties,
              and commercial spaces. Use the gallery to see examples of the services Cleaning From The
              Heart LLC provides across the Seattle area.
            </p>
          </div>

          <ul className="mx-auto mt-8 flex max-w-3xl flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm font-medium text-ink shadow-sm"
              >
                <Icon className="h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── Gallery ─────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="mb-10 text-center">
            <span className="eyebrow">Results Gallery</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-ink md:text-5xl">
              The Difference Is Visible
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              Filter by the type of work you need. Each photo is real cleaning work completed across
              Seattle and the surrounding metro.
            </p>
          </div>

          <ResultsGallery items={galleryItems} categories={galleryCategories} />
        </Container>
      </section>

      {/* ── Related services ────────────────────────────────────────────────── */}
      <section className="section-shell bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Connect the Proof to a Service</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              Find the Service Behind the Work You Saw
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Every photo above connects to a service we provide across the Seattle area. Explore the
              service that matches the result you need.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {serviceLinkGroups.map((group) => (
              <article
                key={group.heading}
                className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card"
              >
                <h3 className="text-base font-semibold text-ink">{group.heading}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center rounded-full border border-brand-100 bg-surface px-3.5 py-1.5 text-sm font-medium text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Proof-to-quote CTA ──────────────────────────────────────────────── */}
      <section className="bg-brand-700 py-16">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Want Results Like These for Your Property?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-brand-100">
              Tell us what type of property you need cleaned and which service you are interested in.
              We will help you choose the right cleaning option and provide a clear quote.
            </p>
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:justify-center">
              <Link
                href="/contact#quote-form"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-sm transition-all hover:bg-brand-50 hover:shadow-md sm:w-auto"
              >
                Get a Free Quote
              </Link>
              <Link
                href={siteConfig.phoneHref}
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                Call {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Common Questions</span>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
              Questions About Our Cleaning Results
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Quick answers about the real cleaning work shown above and how to request similar results.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {galleryFaqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-brand-100 bg-surface p-6 shadow-card"
              >
                <h3 className="text-base font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/contact#quote-form" className="cta-primary w-full sm:w-auto">
              Get a Free Quote
            </Link>
            <Link href={siteConfig.phoneHref} className="cta-secondary w-full sm:w-auto">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              Call Now
            </Link>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
    </>
  );
}
