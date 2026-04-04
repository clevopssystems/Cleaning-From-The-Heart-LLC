import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { workGalleryItems } from "@/lib/site";

export function WorkInActionSection() {
  const [featured, ...rest] = workGalleryItems;

  return (
    <section className="section-shell bg-surface">
      <Container>

        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Real Work</span>
              <h2 className="text-4xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
                See Our Work in Action
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-right">
              Every job is approached with the same consistency and care, whether it&apos;s routine cleaning or
              a full floor restoration.
            </p>
          </div>
        </Reveal>

        {/*
          ASYMMETRIC GALLERY GRID
          ─────────────────────────────────────────────────────────────────────
          Featured image (left, tall) + 3 smaller images stacked on the right.
          Upload photos to /public/home/work/ and update lib/site.ts.
          ─────────────────────────────────────────────────────────────────────
        */}
        <div className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr] md:grid-rows-[auto] lg:gap-5">

          {/* Featured — tall left column */}
          {featured && (
            <Reveal delay={0.04}>
              <article className="group relative h-full min-h-[320px] overflow-hidden rounded-2xl shadow-card md:row-span-2">
                <div className="relative h-full min-h-[320px] overflow-hidden md:min-h-[500px]">
                  <Image
                    src={featured.image}
                    alt={`${featured.service}, ${featured.location}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" aria-hidden />
                  <div className="absolute inset-0 bg-ink/20 transition-opacity duration-500 group-hover:bg-ink/5" aria-hidden />

                  {/* Service badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 backdrop-blur-sm shadow-sm">
                      {featured.service}
                    </span>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                    <p className="text-base font-semibold text-white">{featured.title}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-white/65">
                      <MapPin className="h-3 w-3 shrink-0" aria-hidden />
                      {featured.location}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          )}

          {/* Smaller images — right column, 3 rows */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {rest.map((item, index) => (
              <Reveal key={item.title} delay={(index + 1) * 0.07}>
                <article className="group relative overflow-hidden rounded-2xl shadow-card">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.service}, ${item.location}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-ink/20 transition-opacity duration-300 group-hover:bg-ink/5" aria-hidden />

                    {/* Service badge */}
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 backdrop-blur-sm shadow-sm">
                        {item.service}
                      </span>
                    </div>

                    {/* Caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-4 pt-10">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="flex items-center gap-1 text-[11px] text-white/65">
                        <MapPin className="h-3 w-3 shrink-0" aria-hidden />
                        {item.location}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

        </div>

        {/* Footer link */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              View Full Results Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
