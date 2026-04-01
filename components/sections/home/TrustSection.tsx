import { ShieldCheck, Star, MapPin, Clock, ClipboardCheck, Users, Quote } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonialPlaceholders } from "@/lib/site";

const trustBadges = [
  { label: "Fully Insured", sub: "Licensed & bonded on every job", icon: ShieldCheck },
  { label: "Vetted Staff", sub: "Background-checked professionals", icon: Users },
  { label: "Satisfaction Backed", sub: "We make it right, every time", icon: Star },
  { label: "Flexible Scheduling", sub: "Evenings, mornings & weekends", icon: Clock },
  { label: "Detailed Process", sub: "Structured checklists per visit", icon: ClipboardCheck },
  { label: "Seattle-Based", sub: "Locally owned and operated", icon: MapPin }
];

export function TrustSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why Seattle Trusts Us"
          title="A Professional Cleaning Partner, Not Just a Vendor"
          description="We hold ourselves to commercial-grade standards on every job, whether it's a weekly office contract or a one-time deep clean."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.map((badge, index) => (
            <Reveal key={badge.label} delay={index * 0.06}>
              <div className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-surface p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                  <badge.icon className="h-5 w-5 text-brand-700" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{badge.label}</p>
                  <p className="mt-0.5 text-xs text-muted">{badge.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-brand-100 bg-gradient-to-b from-surface to-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">Client Reviews</p>
              <p className="mt-1 text-xl font-semibold text-ink md:text-2xl">What Clients Say</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5">
              <div className="flex items-center gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={`review-badge-star-${i}`} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
              </div>
              <span className="text-xs font-semibold text-ink">Rated 5.0 for service consistency</span>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonialPlaceholders.map((item, index) => (
              <Reveal key={`${item.name}-${item.role}`} delay={index * 0.08}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="pointer-events-none absolute -right-3 -top-3 rounded-full bg-brand-50 p-3 text-brand-200" aria-hidden>
                    <Quote className="h-5 w-5" />
                  </div>

                  <div className="mb-4 flex items-center gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={`star-${item.role}-${i}`} className="h-3.5 w-3.5 fill-current" aria-hidden />
                    ))}
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-muted">&ldquo;{item.quote}&rdquo;</p>

                  <div className="mt-5 flex items-center gap-3 border-t border-brand-100 pt-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-tight text-ink">{item.name}</p>
                      <p className="mt-0.5 text-xs text-muted">{item.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
