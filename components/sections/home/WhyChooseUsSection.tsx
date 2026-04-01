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
    <section className="section-shell bg-brand-600 text-white">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 surface-grid pointer-events-none" aria-hidden />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-light">Why Choose Us</span>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            The Difference Between a Cleaning Company and a Cleaning Partner
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            Built for accountability, consistency, and direct communication, the three things most cleaning
            companies consistently fail to deliver.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.iconName] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="card-dark-hover flex h-full flex-col gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <Icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="cta-gold">
            {siteConfig.primaryCta}
          </Link>
          <Link href={siteConfig.phoneHref} className="cta-ghost">
            <Phone className="mr-2 h-4 w-4" aria-hidden />
            {siteConfig.secondaryCta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
