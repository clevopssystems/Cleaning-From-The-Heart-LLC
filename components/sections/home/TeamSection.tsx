import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { teamMediaItems } from "@/lib/site";

const teamHighlights = [
  "Background-checked & fully insured staff",
  "Commercial-grade equipment & professional products",
  "Consistent crews — same team each visit",
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
                Every job is performed by our vetted, insured, and trained staff — the same team that shows up
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
                <Link href="/contact" className="cta-primary">
                  Get a Free Quote
                </Link>
                <Link href="/about" className="cta-secondary">
                  About Our Team
                </Link>
              </div>
            </div>
          </Reveal>

          {/*
            TEAM PHOTO GRID (2×2)
            ─────────────────────────────────────────────────────────────────
            To replace placeholder images:
            1. Upload square-cropped photos to /public/media/team/
            2. Update image paths in lib/site.ts → teamMediaItems
            3. Recommended: team-1.jpg through team-4.jpg, 600×600px each

            Photo suggestions:
              team-1.jpg — staff member in uniform, on-site
              team-2.jpg — professional equipment / supplies close-up
              team-3.jpg — team working in a commercial space
              team-4.jpg — completed, spotless finished result
            ─────────────────────────────────────────────────────────────────
          */}
          <div className="grid grid-cols-2 gap-3">
            {teamMediaItems.map((item, index) => (
              <Reveal key={index} delay={index * 0.07}>
                <figure className="group relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-square overflow-hidden bg-surface">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {/* Caption overlay — slides up on hover */}
                    <figcaption className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-ink/85 to-transparent px-3 pb-3 pt-8 transition-transform duration-300 group-hover:translate-y-0">
                      <span className="text-xs font-semibold text-white">{item.caption}</span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
