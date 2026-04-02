import Link from "next/link";
import { BadgeCheck, RefreshCw, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/site";

const guaranteePoints = [
  {
    icon: BadgeCheck,
    title: "Issue Identified Within 24 Hours?",
    description:
      "Contact us within 24 hours of your service and we will schedule a return visit to correct any missed area or quality concern, at no additional charge."
  },
  {
    icon: RefreshCw,
    title: "We Return and Make It Right",
    description:
      "No back-and-forth, no extra invoices. We come back, we fix it, and we follow up. Your satisfaction isn't a bonus. It's the baseline we hold ourselves to."
  },
  {
    icon: MessageCircle,
    title: "Direct Line to Our Team",
    description:
      "You won't be routed to a call center or ticketing system. You reach us directly, get a real response, and we act on it the same day."
  }
];

export function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 surface-grid" aria-hidden />

      {/* Decorative glows */}
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
      <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — headline */}
          <Reveal>
            <div>
              <span className="eyebrow-light">Our Promise to You</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                100% Satisfaction Guarantee on Every Visit
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                We stand behind our work completely. If a visit doesn&apos;t meet the standard we agreed on,
                we don&apos;t argue about it. We come back and fix it. That&apos;s the deal, every time, no fine print.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="cta-gold">
                  Get a Free Quote
                </Link>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right — guarantee points */}
          <div className="flex flex-col gap-5">
            {guaranteePoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/40">
                    <point.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{point.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
