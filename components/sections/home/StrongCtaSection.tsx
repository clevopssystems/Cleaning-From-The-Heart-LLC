import Link from "next/link";
import { Phone, CalendarCheck, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

export function StrongCtaSection() {
  return (
    <section className="section-shell bg-ink text-white">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/25 to-transparent px-8 py-14 md:px-14 md:py-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden />

          <div className="relative">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              {/* Copy */}
              <div className="max-w-2xl">
                {/* Urgency signal */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5">
                  <Clock className="h-3.5 w-3.5 text-accent" aria-hidden />
                  <span className="text-xs font-semibold text-accent">
                    Spots are filling fast this month
                  </span>
                </div>

                <p className="eyebrow-light">Ready to Get Started?</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Get a Professionally Clean Space Without the Headaches
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Request a free quote today. We&apos;ll review your space, confirm scope and pricing, and send
                  you a written proposal within 24 hours. No vague estimates, no pressure, no obligation.
                </p>

                {/* Feature list */}
                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {[
                    "Written quote within 24 hours",
                    "Flexible service options, including custom contracts",
                    "Satisfaction guaranteed on every visit"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CalendarCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm text-white/50">
                  Need ongoing service? Ask about a custom cleaning contract for your property.
                </p>
              </div>

              {/* CTA block */}
              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link
                    href="/contact#quote-form"
                    className="cta-gold w-full justify-center"
                  >
                    Request a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Takes 60 seconds · No obligation</span>
                </div>
                <div className="flex flex-col items-start gap-1">
                  <Link href={siteConfig.phoneHref} className="cta-ghost w-full justify-center">
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Mon–Sat · 7 AM – 7 PM</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-white/30">
              Serving Seattle, Bellevue, Renton, Kent, Tukwila, Tacoma &amp; surrounding areas.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
