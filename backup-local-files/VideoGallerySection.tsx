"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const allVideos = [
  { id: "UttlAKxnvYA", title: "Real job footage – cleaning service video 1" },
  { id: "ffiUceWifjw", title: "Real job footage – cleaning service video 2" },
  { id: "POvrfzrh0D4", title: "Real job footage – cleaning service video 3" },
  { id: "tO1d5ylix4Y", title: "Real job footage – cleaning service video 4" },
  { id: "h677iUp39kQ", title: "Real job footage – cleaning service video 5" },
  { id: "Ys1lYH41MUY", title: "Real job footage – cleaning service video 6" },
  { id: "D8dRkeuDv1Y", title: "Real job footage – cleaning service video 7" },
  { id: "_eMnExib0l8", title: "Real job footage – cleaning service video 8" },
  { id: "PGRAmhxB-Bs", title: "Real job footage – cleaning service video 9" },
  { id: "fkrH_lIfxIM", title: "Real job footage – cleaning service video 10" },
];

function VideoCard({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/5">
      <div className="relative aspect-[9/16] w-full">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
          title={title}
          style={{ border: 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function VideoGallerySection() {
  const [videos, setVideos] = useState<typeof allVideos>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unavailable = new Set<string>();
    let remaining = allVideos.length;

    function finish() {
      remaining--;
      if (remaining === 0) {
        setVideos(allVideos.filter((v) => !unavailable.has(v.id)));
        setReady(true);
      }
    }

    allVideos.forEach(({ id }) => {
      const img = new Image();
      img.onload = () => {
        // YouTube returns a 120×90 grey placeholder when a video is unavailable
        if (img.naturalWidth <= 120) {
          unavailable.add(id);
        }
        finish();
      };
      img.onerror = () => {
        unavailable.add(id);
        finish();
      };
      // mqdefault is 320×180 for live videos, 120×90 placeholder for removed ones
      img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
    });
  }, []);

  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>

        {/* Video grid — 1 col → 2 col → 3 col → 4 col */}
        {ready && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {videos.map((video, index) => (
              <Reveal key={video.id} delay={Math.min(index * 0.05, 0.35)}>
                <VideoCard id={video.id} title={video.title} />
              </Reveal>
            ))}
          </div>
        )}

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
