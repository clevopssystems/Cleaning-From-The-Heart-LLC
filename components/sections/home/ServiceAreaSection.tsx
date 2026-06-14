import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { serviceAreas, siteConfig } from "@/lib/site";

export function ServiceAreaSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>

        {/* SEO heading */}
        <div className="mb-10">
          <span className="eyebrow">Service Areas</span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            Cleaning Services in Seattle, WA and Surrounding Areas
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">

          {/* Left: SEO copy */}
          <div className="prose prose-sm max-w-none text-muted">
            <p className="text-base leading-relaxed text-muted">
              Cleaning From The Heart LLC provides professional cleaning services throughout Seattle and the
              greater Washington area. We serve homeowners, offices, commercial properties, schools, and property
              managers in Seattle, Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way, Rainier,
              North Lynnwood, Mill Creek, and surrounding communities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our services include commercial cleaning, janitorial services, residential cleaning, deep cleaning,
              window cleaning, solar panel cleaning, pressure washing, carpet cleaning, floor stripping and waxing,
              move-in and move-out cleaning, and post-construction cleaning. Whether you need a one-time deep
              clean or recurring scheduled service, we offer flexible plans for homes and businesses of all sizes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              With 30+ years of cleaning experience and a commitment to real results, Cleaning From The Heart LLC
              is the trusted choice for Seattle-area cleaning needs. Not sure if we cover your location? Reach
              out and we will confirm availability.
            </p>
            <div className="mt-6">
              <Link href="/contact#quote-form" className="cta-primary inline-flex">
                Check Availability &amp; Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Right: City grid */}
          <ul className="grid gap-2.5 sm:grid-cols-2 content-start">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm font-medium text-ink"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom tagline */}
        <p className="mt-8 text-sm text-muted">
          {siteConfig.name} · {siteConfig.address} · {siteConfig.phoneDisplay} · {siteConfig.businessHours}
        </p>

      </Container>
    </section>
  );
}
