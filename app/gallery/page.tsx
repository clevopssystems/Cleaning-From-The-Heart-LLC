import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { galleryImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery — Real Cleaning Results",
  description:
    "Browse real before and after photos from our commercial cleaning, carpet cleaning, and floor restoration work across Seattle.",
  alternates: {
    canonical: "/gallery",
  },
};

// ─── Image orientation map ────────────────────────────────────────────────────
// Based on actual file dimensions (inspected at build time).
// Portrait:  gallery-01 to 07, 09, 10, 11  (ratio 0.56–0.78)
// Landscape: gallery-08                     (ratio 1.81)
// Square:    gallery-12, 13, 14–20          (ratio ≈ 1.0)

export default function GalleryPage() {
  const imgs = galleryImages.map((g) => g.src);

  return (
    <>
      <PageIntro
        eyebrow="Our Work"
        title="Real Cleaning Results"
        description="Every photo is a real property we serviced across Seattle and the surrounding metro. The same standard applies on every job, every time."
        backgroundImage="/gallery/hero/gallery-hero.png"
      />

      {/* Stats strip */}
      <div className="border-b border-brand-100 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 py-6 sm:gap-16">
            {[
              { value: "20+", label: "Project Photos" },
              { value: "100%", label: "Real Client Work" },
              { value: "Seattle", label: "& Greater Metro" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-brand-700">{value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Gallery — editorial layout ──────────────────────────────────────── */}
      <section className="section-shell bg-white">
        <Container>

          {/* Section heading */}
          <div className="mb-14 text-center">
            <span className="eyebrow">Results Gallery</span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
              The Difference Is Visible
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">

            {/*
              ── Row 1: Portrait trio (imgs 0–2, ratio ≈ 0.56–0.75)
              Three equal portrait columns — bold, editorial opening.
            */}
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              <Card src={imgs[0]} priority aspect="aspect-[3/4]" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[1]} priority aspect="aspect-[3/4]" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[2]} aspect="aspect-[3/4]" sizes="(max-width: 640px) 33vw, 28vw" />
            </div>

            {/*
              ── Row 2: Portrait quartet (imgs 3–6, ratio ≈ 0.57–0.76)
              Four columns desktop, two columns mobile — dense, visually rich.
            */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
              <Card src={imgs[3]} aspect="aspect-[3/4]" sizes="(max-width: 640px) 50vw, 25vw" />
              <Card src={imgs[4]} aspect="aspect-[3/4]" sizes="(max-width: 640px) 50vw, 25vw" />
              <Card src={imgs[5]} aspect="aspect-[3/4]" sizes="(max-width: 640px) 50vw, 25vw" />
              <Card src={imgs[6]} aspect="aspect-[3/4]" sizes="(max-width: 640px) 50vw, 25vw" />
            </div>

            {/*
              ── Row 3: Full-width landscape hero (img 7, ratio 1.81)
              The only landscape image — used as a dramatic cinematic break.
            */}
            <Card
              src={imgs[7]}
              aspect="aspect-[21/8] sm:aspect-[21/7]"
              sizes="100vw"
            />

            {/*
              ── Row 4: Portrait trio (imgs 8–10, ratio ≈ 0.59–0.78)
            */}
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              <Card src={imgs[8]} aspect="aspect-[3/4]" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[9]} aspect="aspect-[3/4]" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[10]} aspect="aspect-[3/4]" sizes="(max-width: 640px) 33vw, 28vw" />
            </div>

            {/*
              ── Row 5: Near-square trio (imgs 11–13, ratio ≈ 1.0)
              Transition from portraits into the square section.
            */}
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              <Card src={imgs[11]} aspect="aspect-[4/3]" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[12]} aspect="aspect-[4/3]" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[13]} aspect="aspect-[4/3]" sizes="(max-width: 640px) 33vw, 28vw" />
            </div>

            {/*
              ── Row 6: Square trio (imgs 14–16, ratio 1.0)
              Perfect 1:1 containers — no cropping at all.
            */}
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              <Card src={imgs[14]} aspect="aspect-square" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[15]} aspect="aspect-square" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[16]} aspect="aspect-square" sizes="(max-width: 640px) 33vw, 28vw" />
            </div>

            {/*
              ── Row 7: Final square trio (imgs 17–19, ratio 1.0)
            */}
            <div className="grid grid-cols-3 gap-4 sm:gap-5">
              <Card src={imgs[17]} aspect="aspect-square" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[18]} aspect="aspect-square" sizes="(max-width: 640px) 33vw, 28vw" />
              <Card src={imgs[19]} aspect="aspect-square" sizes="(max-width: 640px) 33vw, 28vw" />
            </div>

          </div>
        </Container>
      </section>

      {/* CTA strip */}
      <section className="bg-brand-700 py-16">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready for Results Like These?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-brand-100">
              Every job in this gallery started with a free quote. Reach out and
              we&apos;ll assess your space, give you a clear price, and get
              started.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact#quote-form"
                className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-sm transition-all hover:bg-brand-50 hover:shadow-md"
              >
                Get a Free Quote
              </Link>
              <Link
                href="tel:+12068508484"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Call 206-850-8484
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

// ─── Gallery Card ─────────────────────────────────────────────────────────────

function Card({
  src,
  priority = false,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 640px) 100vw, 50vw",
}: {
  src: string;
  priority?: boolean;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-stone-100 ${aspect}`}
    >
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
