import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { VideoGallerySection } from "@/components/sections/home/VideoGallerySection";

export const metadata: Metadata = {
  title: "Video Gallery | Watch Our Cleaning Team in Action",
  description:
    "Watch real on-site footage from our Seattle commercial cleaning jobs — offices, carpet cleaning, strip & wax, and more.",
  alternates: {
    canonical: "/videos",
  },
};

export default function VideosPage() {
  return (
    <>
      {/* Page hero — dark, consistent with site style */}
      <section className="relative bg-ink text-white">
        <div className="absolute inset-0 opacity-[0.05] surface-grid" aria-hidden />
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-3xl" aria-hidden />

        <Container className="relative py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow-light">Real Job Footage</span>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              See Our Team in Action
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
              Unedited, on-site footage from real commercial cleaning jobs across Seattle.
              No staging, no filters — just the quality of our work.
            </p>
          </div>
        </Container>
      </section>

      <VideoGallerySection />
    </>
  );
}
