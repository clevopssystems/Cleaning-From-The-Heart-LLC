import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const teamHighlights = [
  "Background-checked & fully insured staff",
  "Commercial-grade equipment & professional products",
  "Consistent crews, same team each visit",
  "Accountable to a structured cleaning checklist"
];

export function TeamSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.35fr]">

          {/* Left: text content */}
          <Reveal>
            <div>
              <p className="eyebrow">Our Team</p>
              <h2 className="text-balance text-4xl font-bold leading-[1.12] tracking-tight text-ink md:text-5xl">
                Professional Team.{" "}
                <span className="text-brand-600">Real Results.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                Every job is performed by our vetted, insured, and trained staff, the same team that shows up
                consistently, follows structured checklists, and takes pride in the result.
              </p>

              <ul className="mt-7 space-y-3">
                {teamHighlights.map((item) => (
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
                  About Our Team
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex justify-center">
              <figure className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
                  <Image
                    src="/about/owner/owner.jpg"
                    alt="Business owner portrait"
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
