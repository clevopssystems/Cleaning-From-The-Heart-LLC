import { ShieldCheck, Star, MapPin, Clock, ClipboardCheck, Users, Quote, BadgeCheck } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonialPlaceholders } from "@/lib/site";

const trustBadges = [
  {
    label: "Fully Insured",
    sub: "Licensed, bonded and insured on every job. You are protected from day one.",
    icon: ShieldCheck
  },
  {
    label: "Background-Checked Staff",
    sub: "Every team member passes a full background check before setting foot in your property.",
    icon: Users
  },
  {
    label: "100% Satisfaction Backed",
    sub: "If something is not right, we return and fix it. No extra charge, no debate.",
    icon: Star
  },
  {
    label: "After-Hours Scheduling",
    sub: "We work evenings, early mornings and weekends so your operation is never disrupted.",
    icon: Clock
  },
  {
    label: "Checklist-Backed Process",
    sub: "Every visit follows a written, property-specific checklist. No shortcuts, nothing skipped.",
    icon: ClipboardCheck
  },
  {
    label: "Seattle-Owned & Operated",
    sub: "A local team with local accountability. Not a franchise. Not a call center.",
    icon: MapPin
  }
];

export function TrustSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why Seattle Trusts Us"
          title="A Cleaning Partner You Can Stop Thinking About"
          description="We handle the details so you don't have to. Consistent results, direct communication, and a team that shows up prepared every single time."
        />

        {/* Satisfaction guarantee banner */}
        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-brand-200 bg-gradient-to-r from-brand-50 to-white p-6 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <BadgeCheck className="h-7 w-7" aria-hidden />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Our Guarantee</p>
              <p className="mt-1 text-lg font-semibold text-ink">
                If something isn&apos;t right, we come back and fix it. No extra charge.
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Every job is backed by our satisfaction guarantee. If you identify an issue within 24 hours of
                service, we schedule a return visit and correct it. No debates, no invoices, no excuses.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Trust badge grid — 1 col mobile / 2 col tablet / 3 col desktop */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <Reveal key={badge.label} delay={index * 0.07}>
                <article className="group flex h-full flex-col gap-5 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50/60 to-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover">

                  {/* Circular icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 transition-colors duration-300 group-hover:bg-brand-200">
                    <Icon className="h-5 w-5 text-brand-700" aria-hidden />
                  </div>

                  {/* Text */}
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

        {/* Testimonials */}
        <div className="mt-16 rounded-3xl border border-brand-100 bg-gradient-to-b from-surface to-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-700">Client Reviews</p>
              <p className="mt-1 text-xl font-semibold text-ink md:text-2xl">What Seattle Clients Are Saying</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5">
              <div className="flex items-center gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={`review-badge-star-${i}`} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
              </div>
              <span className="text-xs font-semibold text-ink">5.0 · Verified client reviews</span>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonialPlaceholders.map((item, index) => (
              <Reveal key={`${item.name}-${item.role}`} delay={index * 0.08}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="pointer-events-none absolute -right-3 -top-3 rounded-full bg-brand-50 p-3 text-brand-200" aria-hidden>
                    <Quote className="h-5 w-5" />
                  </div>

                  <div className="mb-3 flex items-center gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={`star-${item.role}-${i}`} className="h-3.5 w-3.5 fill-current" aria-hidden />
                    ))}
                  </div>

                  {"service" in item && (
                    <span className="mb-3 inline-block self-start rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-700">
                      {item.service}
                    </span>
                  )}

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
