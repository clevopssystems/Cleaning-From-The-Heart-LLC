import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { workGalleryItems } from "@/lib/site";

export function WorkInActionSection() {
  if (workGalleryItems.length === 0) return null;

  // work-4 (index 3) is the only landscape image — use it as the hero
  // work-1,2,3 (indices 0-2) are portrait — trio below
  // work-5,6 (indices 4-5) close out the section
  const hero = workGalleryItems[3] ?? workGalleryItems[0];
  const trio = workGalleryItems.slice(0, 3);
  const tail = workGalleryItems.slice(4, 6);

  return (
    <section className="section-shell bg-surface">
      <Container>

        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Our Work</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                Real Cleaning Results
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
              Every photo is a real job we completed. The same standard applies to every property we touch.
            </p>
          </div>
        </Reveal>

        {/* Hero — the landscape image leads with impact */}
        <Reveal delay={0.04}>
          <WorkCard
            src={hero.image}
            priority
            aspect="aspect-[21/9] sm:aspect-[21/8]"
            sizes="100vw"
            className="mt-10"
          />
        </Reveal>

        {/* Portrait trio — work-1, 2, 3 */}
        {trio.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-4 sm:gap-5">
            {trio.map((item, i) => (
              <Reveal key={item.image} delay={0.08 + i * 0.06}>
                <WorkCard
                  src={item.image}
                  aspect="aspect-[3/4]"
                  sizes="(max-width: 640px) 33vw, 28vw"
                />
              </Reveal>
            ))}
          </div>
        )}

        {/* Tail — work-5 (portrait) + work-6 (square) */}
        {tail.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-5">
            {tail.map((item, i) => (
              <Reveal key={item.image} delay={0.26 + i * 0.06}>
                <WorkCard
                  src={item.image}
                  aspect="aspect-[3/4] sm:aspect-[4/3]"
                  sizes="(max-width: 640px) 50vw, 45vw"
                />
              </Reveal>
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <Reveal delay={0.38}>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              View Full Results Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <span className="text-xs text-muted">20+ real project photos</span>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}

// ─── Work Card ─────────────────────────────────────────────────────────────────

function WorkCard({
  src,
  priority = false,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 640px) 100vw, 50vw",
  className = "",
}: {
  src: string;
  priority?: boolean;
  aspect?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl bg-stone-100 ${aspect} ${className}`}>
      <Image
        src={src}
        alt="Professional cleaning result"
        fill
        priority={priority}
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        sizes={sizes}
      />
      <div
        className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.06]"
        aria-hidden
      />
    </article>
  );
}
