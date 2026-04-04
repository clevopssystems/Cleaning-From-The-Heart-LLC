import Link from "next/link";
import { BadgeCheck, RefreshCw, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/lib/site";

const guaranteePoints = [
  {
    icon: BadgeCheck,
    title: "Issue found within 24 hours?",
    description:
      "Tell us within 24 hours of your service. We schedule a return visit and correct it — no extra charge, no debate."
  },
  {
    icon: RefreshCw,
    title: "We come back and fix it.",
    description:
      "No back-and-forth. We return, we fix it, we follow up. Your satisfaction is the baseline — not a bonus."
  },
  {
    icon: MessageCircle,
    title: "Reach us directly. Same day.",
    description:
      "No call center, no ticketing system. You contact us directly and hear back the same day, every time."
  }
];

export function GuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.07] surface-grid" aria-hidden />

      {/* Decorative glows */}
      <div className="absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent/8 blur-3xl" aria-hidden />

      {/* Large watermark — purely decorative, sets the tone */}
      <div
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-end pr-6 md:pr-16"
        aria-hidden
      >
        <span className="font-heading text-[14rem] font-bold leading-none tracking-tight text-white/[0.025] md:text-[20rem] lg:text-[26rem]">
          100%
        </span>
      </div>

      <Container className="relative">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">

          {/* Left — large number + statement */}
          <Reveal>
            <div>
              <span className="eyebrow-light">Our Promise to You</span>

              {/* Display number */}
              <p className="font-heading text-7xl font-bold leading-none tracking-tight text-white md:text-8xl lg:text-9xl">
                100%
              </p>

              <h2 className="mt-5 text-2xl font-bold leading-snug text-white md:text-3xl">
                Satisfaction guaranteed on every visit. No fine print.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/55">
                We stand behind our work completely. If a visit doesn&apos;t meet the standard we agreed on,
                we don&apos;t argue about it. We come back and fix it. That&apos;s the deal, every time.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-start">
                <div className="flex flex-col items-start gap-1">
                  <Link
                    href="/contact"
                    className="cta-gold"
                  >
                    Get a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-white/30">Takes 60 seconds · No obligation</span>
                </div>
                <Link href={siteConfig.phoneHref} className="cta-ghost">
                  <Phone className="mr-2 h-4 w-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right — editorial divided list, no cards */}
          <div className="divide-y divide-white/10">
            {guaranteePoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.09}>
                <div className="flex gap-5 py-8 first:pt-0 last:pb-0">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/30">
                    <point.icon className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{point.description}</p>
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
