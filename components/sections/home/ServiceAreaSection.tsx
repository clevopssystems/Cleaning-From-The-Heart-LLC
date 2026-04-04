import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { serviceAreas, siteConfig } from "@/lib/site";

export function ServiceAreaSection() {
  return (
    <section className="section-shell-tight bg-surface">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="eyebrow">Service Areas</span>
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              Serving Seattle &amp; the Greater Metro Area
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We work with offices, commercial properties, and property managers throughout Seattle and the
              surrounding communities. Whether you&apos;re in downtown or the suburbs, we can help. Not sure if we
              cover your area? Reach out and we will confirm.
            </p>
            <Link href="/contact#quote-form" className="cta-primary mt-5 inline-flex">
              Check Availability
            </Link>
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2.5 rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm font-medium text-ink"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
