import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export function BrandStatementSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-36 lg:py-44">

      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.05] surface-grid" aria-hidden />

      {/* Right-side glow */}
      <div
        className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-brand-600/12 blur-3xl"
        aria-hidden
      />
      {/* Left-side accent glow */}
      <div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        aria-hidden
      />

      {/*
        NO Container — this section intentionally breaks the grid.
        Inner content uses its own max-width and padding.
      */}
      <div className="relative mx-auto max-w-[90rem] px-6 sm:px-10 lg:px-16">

        {/* Eyebrow */}
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80">
            Cleaning From The Heart LLC · Seattle, WA
          </p>
        </Reveal>

        {/* Giant stacked words */}
        <div className="mt-5 overflow-hidden">
          <Reveal delay={0.04}>
            <p className="font-heading text-[4.5rem] font-bold leading-[0.92] tracking-tight text-white sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
              Clean.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-heading text-[4.5rem] font-bold leading-[0.92] tracking-tight text-accent sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
              Reliable.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-heading text-[4.5rem] font-bold leading-[0.92] tracking-tight text-white/18 sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
              Guaranteed.
            </p>
          </Reveal>
        </div>

        {/* Bottom row */}
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-8 border-t border-white/10 pt-10 md:mt-14 md:pt-14">
            <p className="max-w-lg text-base leading-relaxed text-white/45 md:text-lg">
              Every Seattle business we serve gets the same outcome, every week: spotless spaces,
              the same trusted team, and a vendor they never have to think about again.
            </p>
            <div className="flex flex-col items-start gap-1.5">
              <Link
                href="/contact#quote-form"
                className="cta-gold inline-flex items-center"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
              <span className="pl-1 text-[11px] text-white/30">
                Takes 60 seconds · No obligation
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
