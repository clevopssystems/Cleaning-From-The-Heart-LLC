import Image from "next/image";
import Link from "next/link";
import { ArrowLeftRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { beforeAfterItems } from "@/lib/site";

export function BeforeAfterSection() {
  return (
    <section className="section-shell bg-white">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="The Difference We Make, Visible"
          description="Real results from real properties we service in Seattle. Replace placeholder images with actual job photos before launch."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {beforeAfterItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">

                {/* Card header */}
                <div className="border-b border-brand-50 px-6 py-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="inline-flex rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                        {item.service}
                      </span>
                      <h3 className="mt-2 text-base font-semibold leading-snug">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{item.description}</p>
                    </div>
                    <div className="shrink-0 rounded-full bg-brand-600/10 p-2">
                      <ArrowLeftRight className="h-3.5 w-3.5 text-brand-600" aria-hidden />
                    </div>
                  </div>
                </div>

                {/*
                  BEFORE / AFTER IMAGES
                  ───────────────────────────────────────────────────────────
                  Naming convention:
                    before-office.jpg    after-office.jpg
                    before-carpet.jpg    after-carpet.jpg
                    before-floor.jpg     after-floor.jpg

                  Upload location: /public/media/before-after/
                  Recommended size: 600×450px (4:3 ratio) per image
                  ───────────────────────────────────────────────────────────
                */}
                <div className="relative grid grid-cols-2">

                  {/* BEFORE image */}
                  <figure className="relative overflow-hidden border-r border-brand-100">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.before}
                        alt={`${item.title}, before professional cleaning`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 50vw, 200px"
                      />
                    </div>
                    {/* Before label — gradient overlay */}
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-950/75 to-transparent px-3 pb-2.5 pt-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-100">Before</span>
                    </figcaption>
                  </figure>

                  {/* AFTER image */}
                  <figure className="relative overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.after}
                        alt={`${item.title}, after professional cleaning`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 50vw, 200px"
                      />
                    </div>
                    {/* After label — gradient overlay */}
                    <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-900/75 to-transparent px-3 pb-2.5 pt-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-100">After</span>
                    </figcaption>
                  </figure>

                  {/* Center divider badge */}
                  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-100 bg-white shadow-card-hover">
                      <ArrowLeftRight className="h-3 w-3 text-brand-600" aria-hidden />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/gallery" className="cta-secondary">
            View Full Results Gallery
          </Link>
          <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="cta-primary">
            Get a Free Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
