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
        description="Use this page to show real project photos from commercial cleaning, carpet cleaning, and strip & wax work in Seattle."
      />

      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {beforeAfterItems.map((item) => (
              <article key={item.title} className="card">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <figure>
                    <Image src={item.before} alt={`${item.title} before`} width={500} height={360} className="rounded-xl border border-brand-100" />
                    <figcaption className="mt-2 text-xs text-muted">Before</figcaption>
                  </figure>
                  <figure>
                    <Image src={item.after} alt={`${item.title} after`} width={500} height={360} className="rounded-xl border border-brand-100" />
                    <figcaption className="mt-2 text-xs text-muted">After</figcaption>
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}