import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { videoFeatures } from "@/lib/site";

export function VideoSection() {
  return (
    <section className="relative section-shell overflow-hidden bg-ink text-white">

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] surface-grid" aria-hidden />

      {/* Decorative glow — top-right */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

      {/* Decorative glow — bottom-left */}
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" aria-hidden />

      <Container className="relative">
        <SectionHeading
          eyebrow="In Action"
          title="Watch How We Transform Spaces"
          description="See the difference our team makes — from walk-in to walk-out. Real jobs, real results."
          center
          light
        />

        {/*
          VIDEO PLACEHOLDERS
          ─────────────────────────────────────────────────────────────────────
          To activate real videos:
          STEP 1 — Upload a thumbnail image (still frame):
                   /public/media/videos/video-thumb-1.jpg  (1280×720px)
          STEP 2 — Upload your video file:
                   /public/media/videos/office-transformation.mp4 (< 30MB)
          STEP 3 — In lib/site.ts → videoFeatures, update thumbnail and videoSrc.
          STEP 4 — Optionally replace the <Image> with a <video> element below.

          For embedded YouTube/Vimeo: replace the Image + play button overlay
          with an <iframe> pointing to your video embed URL.
          ─────────────────────────────────────────────────────────────────────
        */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videoFeatures.map((video, index) => (
            <Reveal key={video.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/8">

                {/* Thumbnail area */}
                <div className="relative aspect-video overflow-hidden">

                  {/* Thumbnail image — replace src with real video still */}
                  <Image
                    src={video.thumbnail}
                    alt={`${video.title} — cleaning process video`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Dark scrim — lightens on hover to suggest interactivity */}
                  <div className="absolute inset-0 bg-ink/45 transition-opacity duration-300 group-hover:bg-ink/25" aria-hidden />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500">
                      <Play className="ml-0.5 h-6 w-6 text-white" fill="currentColor" aria-hidden />
                    </div>
                  </div>

                  {/* Duration badge — bottom-right */}
                  <div className="absolute bottom-3 right-3">
                    <span className="rounded bg-black/60 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* Video info */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-white">{video.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{video.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
