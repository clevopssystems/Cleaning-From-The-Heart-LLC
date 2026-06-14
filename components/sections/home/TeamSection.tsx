import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const highlights = [
  "Commercial and residential cleaning experience",
  "Direct communication, not a call center",
  "Homes, offices, schools, and commercial spaces",
  "Careful cleaning across every visit"
];

export function TeamSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.35fr]">

          {/* Left: text */}
          <Reveal>
            <div>
              <p className="eyebrow">The People Behind the Work</p>
              <h2 className="text-balance text-4xl font-bold leading-[1.12] tracking-tight text-ink md:text-5xl">
                A trusted Seattle cleaning team with <span className="text-brand-600">30+ years</span> of experience
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                Cleaning From The Heart LLC is an experienced Seattle-area cleaning company with 30+ years of
                hands-on work across homes, offices, schools, and managed properties. The team focuses on clear
                communication, careful cleaning, and reliable service without making the process complicated.
              </p>

              <ul className="mt-7 space-y-2.5 text-sm leading-relaxed text-muted">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
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
