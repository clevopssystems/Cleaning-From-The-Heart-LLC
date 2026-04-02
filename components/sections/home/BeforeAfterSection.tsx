import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig, beforeAfterItems } from "@/lib/site";

export function BeforeAfterSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="The Difference Is Visible"
          description="Real properties we service across Seattle. Every job follows the same standard — consistent, thorough, and verifiable."
        />
      </Container>

      {/* Full-bleed immersive cards — outside the inner container for maximum width */}
      <div className="mt-12 space-y-5">
        {beforeAfterItems.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="group relative mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-card-lg">

              {/*
                BEFORE / AFTER IMAGES
                ─────────────────────────────────────────────────────────
                Upload real photos to: /public/media/before-after/
                Recommended size per image: 1000×620px (approx 16:10)
                Naming: before-office.jpg / after-office.jpg  etc.
                ─────────────────────────────────────────────────────────
              */}
              <div className="grid grid-cols-2">

                {/* BEFORE */}
                <figure className="relative overflow-hidden border-r-2 border-white/20">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.before}
                      alt={`${item.title} before professional cleaning`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 800px"
                    />
                    {/* Dark amber-tinted overlay for "before" feel */}
                    <div className="absolute inset-0 bg-amber-950/30" aria-hidden />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-amber-950/80 via-amber-950/30 to-transparent px-5 pb-5 pt-16">
                    <span className="inline-block rounded-sm bg-amber-800/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-amber-100 backdrop-blur-sm">
                      Before
                    </span>
                  </figcaption>
                </figure>

                {/* AFTER */}
                <figure className="relative overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.after}
                      alt={`${item.title} after professional cleaning`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 800px"
                    />
                    {/* Subtle green-tinted overlay for "after" feel */}
                    <div className="absolute inset-0 bg-brand-900/15" aria-hidden />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/85 via-brand-950/30 to-transparent px-5 pb-5 pt-16">
                    <span className="inline-block rounded-sm bg-brand-700/60 px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-brand-100 backdrop-blur-sm">
                      After
                    </span>
                  </figcaption>
                </figure>

              </div>

              {/* Metadata bar */}
              <div className="flex items-center justify-between gap-4 border-t border-brand-100 bg-white px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                    {item.service}
                  </span>
                  <span className="text-sm font-semibold text-ink">{item.title}</span>
                  <span className="hidden text-xs text-muted sm:block">{item.description}</span>
                </div>
                <div className="shrink-0 text-xs font-medium text-brand-600">Seattle, WA</div>
              </div>

              {/* Center divider badge */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[calc(50%+1.25rem)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-brand-600 shadow-card-hover">
                  <span className="text-[10px] font-bold text-white">VS</span>
                </div>
              </div>

            </article>
          </Reveal>
        ))}
      </div>

      <Container>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/gallery" className="cta-secondary">
            View Full Results Gallery
          </Link>
          <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="cta-primary">
            Get a Free Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
