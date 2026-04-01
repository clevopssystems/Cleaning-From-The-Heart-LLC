import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";
import { beforeAfterItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See before and after cleaning results from our Seattle cleaning services.",
  alternates: {
    canonical: "/gallery"
  }
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery"
        title="Before And After Cleaning Results"
        description="Use this page to show real project photos from commercial cleaning, carpet cleaning, and strip and wax work in Seattle."
        backgroundImage="/images/gallery-hero.png"
      />

      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {beforeAfterItems.map((item) => (
              <article key={item.title} className="card h-full">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="mt-4">
                  <Image
                    src={item.service === "Carpet Cleaning" ? item.before : item.after}
                    alt={item.title}
                    width={1400}
                    height={900}
                    className="w-full rounded-xl border border-brand-100 object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
