import Link from "next/link";
import { Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

export function StrongCtaSection() {
  return (
    <section className="section-shell bg-ink text-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />
          <div className="relative max-w-3xl">
            <p className="eyebrow-light">Ready to Get Started?</p>
            <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Get a Clean, Professional Space Without the Hassle
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
              Request a free quote today. We&apos;ll review your space, confirm the scope, and build a cleaning plan
              that fits your schedule and your standards. No vague pricing, no runaround.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="cta-gold">
                Request a Free Quote
              </Link>
              <Link href={siteConfig.phoneHref} className="cta-ghost">
                <Phone className="mr-2 h-4 w-4" aria-hidden />
                {siteConfig.phoneDisplay}
              </Link>
            </div>
            <p className="mt-5 text-xs text-white/40">
              Serving Seattle, Bellevue, Renton, Kent, Tukwila, Tacoma &amp; surrounding areas.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
