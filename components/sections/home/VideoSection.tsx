import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { videoFeatures } from "@/lib/site";

export function VideoSection() {
  const [primary, secondary] = videoFeatures;

  return (
    <section className="relative overflow-hidden bg-ink text-white">

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.05] surface-grid" aria-hidden />
      <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-3xl" aria-hidden />

      {/* Section heading — inside Container */}
      <div className="relative pt-20 md:pt-28">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow-light">In Action</span>
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Watch How We Work
                </h2>
              </div>
              <Link
                href="/contact"
                className="group hidden items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80 sm:flex"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>

      {/*
        PRIMARY VIDEO — truly full-bleed, no Container.
        This video spans edge-to-edge of the viewport.
        ──────────────────────────────────────────────────────────────
        To activate:
                          1. Upload thumbnail:  /public/home/videos/video-thumb-1.jpg (1280×720px)
                          2. Upload video file: /public/home/videos/office-transformation.mp4
        3. Update videoFeatures[0].thumbnail and .videoSrc in lib/site.ts
        ──────────────────────────────────────────────────────────────
      */}
      {primary && (
        <Reveal delay={0.05}>
          <div className="group relative mt-8 w-full cursor-pointer overflow-hidden">
            <div className="relative aspect-video w-full max-h-[85vh]">
              <Image
                src={primary.thumbnail}
                alt={`${primary.title} — cleaning process video`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                sizes="100vw"
              />

              {/* Bottom gradient for text legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
                aria-hidden
              />
              {/* Hover-lightening overlay */}
              <div
                className="absolute inset-0 bg-ink/25 transition-opacity duration-500 group-hover:bg-ink/10"
                aria-hidden
              />

              {/* Centered play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/25 bg-brand-600 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-white/50 group-hover:bg-brand-500 md:h-28 md:w-28">
                  <Play
                    className="ml-1 h-8 w-8 text-white md:h-11 md:w-11"
                    fill="currentColor"
                    aria-hidden
                  />
                </div>
              </div>

              {/* Bottom-left: duration badge + title + description */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-10 md:pb-10 lg:px-16">
                <span className="inline-block rounded bg-brand-600/70 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {primary.duration}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  {primary.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-white/65 md:text-base">
                  {primary.description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/*
        SECONDARY VIDEO — split layout inside Container
        ──────────────────────────────────────────────────────────────
                          Upload thumbnail: /public/home/videos/video-thumb-2.jpg
        ──────────────────────────────────────────────────────────────
      */}
      {secondary && (
        <div className="relative pb-20 pt-4 md:pb-28">
          <Container>
            <Reveal delay={0.1}>
              <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-10 lg:gap-14">

                {/* Secondary video card */}
                <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={secondary.thumbnail}
                      alt={`${secondary.title} — cleaning process video`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 55vw"
                    />
                    <div
                      className="absolute inset-0 bg-ink/45 transition-opacity duration-300 group-hover:bg-ink/25"
                      aria-hidden
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500">
                        <Play
                          className="ml-0.5 h-5 w-5 text-white"
                          fill="currentColor"
                          aria-hidden
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                        {secondary.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text — vertically centered */}
                <div className="flex flex-col justify-center">
                  <span className="eyebrow-light">Process Walkthrough</span>
                  <h3 className="text-2xl font-bold text-white md:text-3xl">{secondary.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-base">
                    {secondary.description}
                  </p>
                  <div className="mt-7 flex flex-col items-start gap-1.5">
                    <Link
                      href="/contact"
                      className="cta-gold"
                    >
                      Get a Free Quote
                    </Link>
                    <span className="pl-1 text-[11px] text-white/35">
                      Takes 60 seconds · No obligation
                    </span>
                  </div>
                </div>

              </div>
            </Reveal>
          </Container>
        </div>
      )}

    </section>
  );
}
