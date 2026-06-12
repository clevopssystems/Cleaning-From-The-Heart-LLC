import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { workGalleryItems } from "@/lib/site";

const altTexts = [
  "Cleaning From The Heart LLC — professional cleaning result in Seattle, WA",
  "Commercial floor cleaning completed by Cleaning From The Heart LLC near Seattle",
  "Residential cleaning work by Cleaning From The Heart LLC in the Seattle area",
  "Cleaning From The Heart LLC — office and commercial space cleaning in Seattle",
  "Move-out cleaning service completed by Cleaning From The Heart LLC near Seattle",
  "Post-construction and deep cleaning service by Cleaning From The Heart LLC in Seattle"
];

export function WorkInActionSection() {
  if (workGalleryItems.length === 0) return null;

  return (
    <section id="work-gallery" className="section-shell bg-surface">
      <Container>

        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Our Work</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                See the Work Before You Call
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                Real photos from cleaning jobs, floor care, windows, and completed work across the Seattle area.
              </p>
            </div>
            <Link
              href="/gallery"
              className="group hidden shrink-0 items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900 sm:inline-flex"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>

        {/* Uniform 3-column grid — no complex layout, no whitespace gaps */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {workGalleryItems.map((item, i) => (
            <Reveal key={item.image} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-2xl bg-stone-100 aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={altTexts[i] ?? "Cleaning From The Heart LLC professional cleaning result in Seattle, WA"}
                  fill
                  priority={i < 3}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.06]"
                  aria-hidden
                />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Mobile CTA */}
        <Reveal delay={0.3}>
          <div className="mt-7 flex flex-wrap items-center gap-4">
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
