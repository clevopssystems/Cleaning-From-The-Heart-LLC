import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";

const previewVideos = [
  { id: "UttlAKxnvYA", title: "On-site cleaning job footage – office deep clean" },
  { id: "ffiUceWifjw", title: "On-site cleaning job footage – commercial space" },
  { id: "POvrfzrh0D4", title: "On-site cleaning job footage – carpet cleaning" },
  { id: "tO1d5ylix4Y", title: "On-site cleaning job footage – strip and wax" },
];

function VideoCard({ id, title }: { id: string; title: string }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg">
      <div className="relative w-full aspect-[16/9] overflow-hidden">
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

export function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.05] surface-grid" aria-hidden />
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-3xl" aria-hidden />

      <div className="relative py-20 md:py-28">
        <Container>

          {/* Header */}
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow-light">In Action</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Watch How We Work
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                  Real footage from actual jobs — no staging, no filters.
                </p>
              </div>
              <Link
                href="/contact#quote-form"
                className="group hidden items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80 sm:flex"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </Reveal>

          {/* 4-video grid — 1 col mobile / 2 col tablet / 4 col desktop */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {previewVideos.map((video, index) => (
              <Reveal key={video.id} delay={Math.min(index * 0.07, 0.28)}>
                <VideoCard id={video.id} title={video.title} />
              </Reveal>
            ))}
          </div>

          {/* View More button */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/videos"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                See Full Video Gallery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </Reveal>

        </Container>
      </div>

    </section>
  );
}
