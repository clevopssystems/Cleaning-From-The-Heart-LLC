import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { beforeAfterItems } from "@/lib/site";

export function BeforeAfterSection() {
  if (beforeAfterItems.length === 0) return null;

  return (
    <section className="section-shell bg-white">
      <Container>
        <SectionHeading
          eyebrow="Before & After"
          title="The Difference Is Visible"
          description="Real properties we service across Seattle. Every job follows the same standard — consistent, thorough, and verifiable."
        />
      </Container>

      <Container>
        <div className="mt-10 space-y-6">
        {beforeAfterItems.map((item, index) => (
          <Reveal key={item.before} delay={index * 0.06}>
            <article className="group relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-[0_6px_32px_rgba(0,0,0,0.09)] ring-1 ring-black/5">

              <div className="grid grid-cols-2">

                {/* BEFORE */}
                <figure className="relative overflow-hidden">
                  <div
                    className={`relative overflow-hidden bg-stone-100 ${
                      item.portrait ? "aspect-[4/5]" : "aspect-[3/2]"
                    }`}
                  >
                    <Image
                      src={item.before}
                      alt="Before professional cleaning"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 50vw, 480px"
                    />
                    {/* Bottom scrim for badge legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" aria-hidden />
                  </div>
                  <div className="absolute left-3 bottom-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" aria-hidden />
                      Before
                    </span>
                  </div>
                </figure>

                {/* AFTER */}
                <figure className="relative overflow-hidden border-l-2 border-white/50">
                  <div
                    className={`relative overflow-hidden bg-stone-100 ${
                      item.portrait ? "aspect-[4/5]" : "aspect-[3/2]"
                    }`}
                  >
                    <Image
                      src={item.after}
                      alt="After professional cleaning"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 50vw, 480px"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" aria-hidden />
                  </div>
                  <div className="absolute left-3 bottom-3 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-700/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-200" aria-hidden />
                      After
                    </span>
                  </div>
                </figure>

              </div>

              {/* VS divider */}
              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/90 bg-white/20 shadow-xl backdrop-blur-lg">
                  <span className="text-[11px] font-black tracking-tight text-white drop-shadow-md">VS</span>
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
          <Link href="/contact#quote-form" className="cta-primary">
            Get a Free Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
