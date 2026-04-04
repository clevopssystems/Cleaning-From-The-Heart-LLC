import Link from "next/link";
import { Phone } from "lucide-react";
import { Users, ClipboardCheck, CalendarCheck, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig, whyChooseUs } from "@/lib/site";

const iconMap: Record<string, LucideIcon> = {
  Users,
  ClipboardCheck,
  CalendarCheck,
  MessageCircle,
  MapPin,
  ShieldCheck
};

export function WhyChooseUsSection() {
  return (
    <section className="relative section-shell overflow-hidden bg-brand-950 text-white">
      <div className="absolute inset-0 opacity-[0.08] surface-grid pointer-events-none" aria-hidden />
      <div className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

      <Container className="relative">

        {/* Header */}
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="eyebrow-light">Why Clients Stay With Us</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Built Around the Things Other Companies Get Wrong
              </h2>
            </div>
            <p className="text-base leading-relaxed text-white/55 lg:text-right">
              Consistency. Communication. Accountability. Most cleaning vendors fail on at least one of
              these. We&apos;ve made all three non-negotiable.
            </p>
          </div>
        </Reveal>

        {/* Editorial list — replaces 6-card grid */}
        <div className="mt-12 divide-y divide-white/10">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.iconName] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="group grid gap-5 py-8 transition-colors duration-200 sm:grid-cols-[2.5rem_1fr_1.6fr] sm:gap-8">

                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors duration-300 group-hover:bg-white/15">
                    <Icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>

                  {/* Title */}
                  <div className="flex items-center">
                    <h3 className="text-base font-bold uppercase tracking-widest text-white">{item.title}</h3>
                  </div>

                  {/* Description */}
                  <div className="flex items-center sm:border-l sm:border-white/10 sm:pl-8">
                    <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTAs */}
        <Reveal delay={0.35}>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-10">
            <div className="flex flex-col items-start gap-1">
              <Link href="/contact#quote-form" className="cta-gold">
                {siteConfig.primaryCta}
              </Link>
              <span className="pl-1 text-[11px] text-white/35">Takes 60 seconds · No obligation</span>
            </div>
            <Link href={siteConfig.phoneHref} className="cta-ghost">
              <Phone className="mr-2 h-4 w-4" aria-hidden />
              {siteConfig.secondaryCta}
            </Link>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
