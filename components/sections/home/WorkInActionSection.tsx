import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { workGalleryItems } from "@/lib/site";

export function WorkInActionSection() {
  return (
    <section className="section-shell bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Real Work"
          title="See Our Work in Action"
          description="From routine commercial cleaning to detailed floor restoration — every job is approached with the same consistency and care."
          center
        />

        {/*
          WORK GALLERY GRID
          ─────────────────────────────────────────────────────────────────────
          To replace a placeholder image:
          1. Upload your photo to /public/media/work/{filename}.jpg
          2. Update the image path in lib/site.ts → workGalleryItems
          3. The placeholder SVG will be replaced automatically

          Recommended image size: 800×600px (4:3 ratio)
          Format: JPEG or WebP, compressed for web
          ─────────────────────────────────────────────────────────────────────
        */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workGalleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="card-media group">

                {/* Image area with hover zoom */}
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.service} — ${item.location}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Service badge — top-left overlay */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 backdrop-blur-sm shadow-sm">
                      {item.service}
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4">
                  <p className="text-sm font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                    <MapPin className="h-3 w-3 shrink-0" aria-hidden />
                    {item.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/gallery" className="cta-secondary">
            View Full Gallery
          </Link>
        </div>
      </Container>
    </section>
  );
}
