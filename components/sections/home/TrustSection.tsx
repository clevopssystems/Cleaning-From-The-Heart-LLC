import Link from "next/link";
import { Star, MapPin, Clock, ClipboardCheck, Award } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const trustBadges = [
  {
    label: "30+ Years of Experience",
    sub: "Built on decades of hands-on cleaning work. We have cleaned homes, offices, schools, and commercial spaces across the Seattle area.",
    icon: Award
  },
  {
    label: "Seattle-Owned Business",
    sub: "A local team with local accountability. Not a franchise, not a national chain — a Seattle-area business that knows these properties.",
    icon: MapPin
  },
  {
    label: "We Make It Right",
    sub: "If a visit doesn't meet the standard we agreed on, we come back and correct it. That's how we operate on every job.",
    icon: Star
  },
  {
    label: "After-Hours Scheduling",
    sub: "We work evenings, early mornings, and weekends so your home or business is never disrupted.",
    icon: Clock
  },
  {
    label: "Written Cleaning Checklists",
    sub: "Every visit follows a written, property-specific checklist. No shortcuts, nothing skipped.",
    icon: ClipboardCheck
  },
  {
    label: "Commercial + Residential",
    sub: "We serve offices, commercial spaces, schools, property managers, and homeowners throughout the Seattle area.",
    icon: MapPin
  }
];

export function TrustSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <SectionHeading
          eyebrow="Built on 30+ Years of Cleaning Experience"
          title="A Cleaning Partner You Can Count On"
          description="Cleaning From The Heart LLC helps Seattle-area homeowners, offices, schools, commercial properties, and property managers keep their spaces clean, safe, and ready for daily use."
        />

        {/* Trust badge grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Reveal key={badge.label} delay={index * 0.07}>
                <article className="group flex h-full flex-col gap-5 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50/60 to-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 transition-colors duration-300 group-hover:bg-brand-200">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold leading-snug text-ink">
                      {badge.label}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {badge.sub}
                    </p>
                  </div>

                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Google rating trust block */}
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl border border-brand-100 bg-gradient-to-b from-surface to-white p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">Customer Reviews</p>
                <p className="mt-1 text-xl font-semibold text-ink md:text-2xl">Rated 5.0 on Google</p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5">
                <div className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={`rating-star-${i}`} className="h-3.5 w-3.5 fill-current" aria-hidden />
                  ))}
                </div>
                <span className="text-xs font-semibold text-ink">5.0 · Google Rating</span>
              </div>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
              Real Seattle-area customers leave reviews on our Google Business Profile. Visit Google to read what property managers, homeowners, offices, and businesses say about our cleaning service.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact#quote-form" className="cta-primary">
                Get a Free Quote
              </Link>
              <Link href="/gallery" className="cta-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
