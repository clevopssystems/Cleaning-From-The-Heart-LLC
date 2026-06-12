import Link from "next/link";
import { Phone, CheckCircle2 } from "lucide-react";
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
                <p className="eyebrow-light">Ready to Get Started?</p>
                <h2 className="mt-1 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Ready for a Cleaner Space?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
                  Whether you need office cleaning, home cleaning, window cleaning, floor care, or a move-out
                  clean, Cleaning From The Heart LLC is ready to help. Request a free quote and we&apos;ll get
                  back to you within 24 hours.
                </p>

                <ul className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  {[
                    "Written quote within 24 hours",
                    "Commercial & residential cleaning",
                    "30+ Years of professional cleaning experience"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm text-white/50">
                  Serving Seattle, Renton, Bellevue, Kent, Everett, Tukwila, Shoreline, Federal Way &amp; surrounding areas.
                </p>
              </div>

              {/* CTA block */}
              <div className="flex flex-col gap-3 lg:min-w-[220px]">
                <div className="flex flex-col items-start gap-1">
                  <Link
                    href="/contact#quote-form"
                    className="cta-gold w-full justify-center"
                  >
                    Get a Free Quote
                  </Link>
                  <span className="pl-1 text-[11px] text-white/40">Free · No obligation</span>
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
          </div>
        </div>
      </Container>
    </section>
  );
}
