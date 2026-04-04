import Link from "next/link";
import { ArrowRight, Users, ClipboardList, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const pillars = [
  {
    number: "01",
    icon: Users,
    title: "Fixed Crew. Every Visit.",
    detail:
      "You are assigned the same team for every job. They learn your facility, your preferences, and your standards. Quality stays consistent because it is always the same people.",
    outcome: "No strangers in your space"
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Written Checklist. Every Job.",
    detail:
      "Every visit follows a property-specific written checklist. Not a generic list from a manual. Your list, built around your space. Every item checked. Nothing forgotten.",
    outcome: "Nothing missed, ever"
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Direct Line. Same Day.",
    detail:
      "You communicate directly with the people doing the work. One contact. Same-day response. No ticket system, no franchise support line, no waiting three days for a reply.",
    outcome: "Answers within the same day"
  }
];

export function SystemAdvantageSection() {
  return (
    <section className="section-shell bg-white">
      <Container>

        {/* Header */}
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="eyebrow">How We Operate</span>
              <h2 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[3.5rem]">
                The System That Makes Inconsistency Impossible
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted lg:text-right lg:text-base">
              Most cleaning companies fail at the same three things. We rebuilt our entire operation around
              making sure those failures cannot happen here.
            </p>
          </div>
        </Reveal>

        {/* Visual step grid */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-brand-100 bg-surface md:grid md:grid-cols-3 md:divide-x md:divide-brand-100">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.number} delay={index * 0.09}>
                <div className="group relative flex flex-col gap-5 p-8 transition-colors duration-300 hover:bg-white lg:p-10 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-brand-100 md:[&:not(:last-child)]:border-b-0">

                  {/* Icon row */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="font-heading text-5xl font-bold leading-none tracking-tight text-brand-100 transition-colors duration-300 group-hover:text-brand-200">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-ink">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {pillar.detail}
                    </p>
                  </div>

                  {/* Outcome tag */}
                  <div className="mt-auto">
                    <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {pillar.outcome}
                    </span>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-100 pt-8">
            <div className="flex flex-col items-start gap-1">
              <Link
                href="/contact#quote-form"
                className="cta-primary"
              >
                Get a Free Quote
              </Link>
              <span className="pl-1 text-[11px] text-muted">Takes 60 seconds · No obligation</span>
            </div>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              Learn About Our Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
