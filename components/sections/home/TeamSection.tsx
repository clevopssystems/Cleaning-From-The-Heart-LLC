import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const highlights = [
  "30+ years of hands-on cleaning experience",
  "Dependable communication, direct contact always",
  "Commercial and residential cleaning across the Seattle area",
  "Care and attention to detail on every job"
];

export function TeamSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.35fr]">

          {/* Left: text */}
          <Reveal>
            <div>
              <p className="eyebrow">Real Cleaning. Real People.</p>
              <h2 className="text-balance text-4xl font-bold leading-[1.12] tracking-tight text-ink md:text-5xl">
                Real Cleaning.{" "}
                <span className="text-brand-600">Real People.</span>{" "}
                Real Results.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                Cleaning From The Heart LLC is built on hands-on service, dependable communication, and decades
                of cleaning experience. From offices and commercial properties to homes, schools, windows,
                carpets, and floor care, the work is done with care and attention to detail.
              </p>

              <ul className="mt-7 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact#quote-form" className="cta-primary">
                  Get a Free Quote
                </Link>
                <Link href="/about" className="cta-secondary">
                  About Us
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right: owner photo */}
          <Reveal delay={0.1}>
            <div className="flex justify-center">
              <figure className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
                  <Image
                    src="/about/owner/owner.jpg"
                    alt="Cleaning From The Heart LLC owner — professional cleaning service in Seattle, WA"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 40vw"
                    priority
                  />
                </div>
              </figure>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
