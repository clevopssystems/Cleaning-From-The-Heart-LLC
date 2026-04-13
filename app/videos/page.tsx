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
      {/* Page hero — dark, consistent with site VideoSection */}
      <section className="relative -mt-16 overflow-hidden bg-ink text-white">
        {/* Decorative layers */}
        <div className="absolute inset-0 opacity-[0.05] surface-grid" aria-hidden />
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-600/10 blur-3xl" aria-hidden />
        <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />

        <Container className="relative pb-16 pt-36 md:pb-20 md:pt-44">
          <div className="max-w-2xl">
            <span className="eyebrow-light">Real Job Footage</span>
            <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">
              See Our Team in Action
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
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
