"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const videos = [
  { id: "UttlAKxnvYA", title: "Real job footage – cleaning service video 1" },
  { id: "ffiUceWifjw", title: "Real job footage – cleaning service video 2" },
  { id: "POvrfzrh0D4", title: "Real job footage – cleaning service video 3" },
  { id: "tO1d5ylix4Y", title: "Real job footage – cleaning service video 4" },
  { id: "h677iUp39kQ", title: "Real job footage – cleaning service video 5" },
  { id: "Ys1lYH41MUY", title: "Real job footage – cleaning service video 6" },
  { id: "_eMnExib0l8", title: "Real job footage – cleaning service video 8" },
  { id: "fkrH_lIfxIM", title: "Real job footage – cleaning service video 10" },
];

export function VideoGallerySection() {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>

        {/* Label strip */}
        <Reveal>
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px flex-1 bg-brand-100" />
            <span className="eyebrow">Real Job Footage</span>
            <div className="h-px flex-1 bg-brand-100" />
          </div>
        </Reveal>

        {/* Video grid — 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 xl:grid-cols-4">
          {videos.map((video, index) => (
            <Reveal key={video.id} delay={Math.min(index * 0.05, 0.35)}>
              <div className="group w-full overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="aspect-[9/16] w-full overflow-hidden">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA strip */}
        <Reveal delay={0.3}>
          <div className="mt-16 rounded-2xl border border-brand-100 bg-white px-8 py-10 text-center shadow-sm md:px-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Ready to get started?
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-ink md:text-3xl">
              Need a reliable cleaning team for your office or facility?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
              We serve commercial properties across the Seattle area — offices, warehouses, medical facilities, and more.
            </p>
            <div className="mt-7">
              <Link
                href="/contact#quote-form"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-brand-700 hover:shadow-md"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
