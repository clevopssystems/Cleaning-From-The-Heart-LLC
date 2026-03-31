import type { Metadata } from "next";
import { HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Cleaning From The Heart LLC and our commitment to reliable cleaning in Seattle.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="Built On Care, Consistency, And Professional Standards"
        description="Cleaning From The Heart LLC is a Seattle-based cleaning company focused on dependable service, strong communication, and spotless results."
      />

      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="card">
              <HeartHandshake className="h-7 w-7 text-brand-600" />
              <h2 className="mt-4 text-xl font-semibold">People-First Service</h2>
              <p className="mt-2 text-sm text-muted">We treat every property with care and every client relationship with respect.</p>
            </article>
            <article className="card">
              <Sparkles className="h-7 w-7 text-brand-600" />
              <h2 className="mt-4 text-xl font-semibold">Reliable Quality</h2>
              <p className="mt-2 text-sm text-muted">Clear scopes, repeatable checklists, and quality follow-through you can count on.</p>
            </article>
            <article className="card">
              <MapPin className="h-7 w-7 text-brand-600" />
              <h2 className="mt-4 text-xl font-semibold">Seattle Local</h2>
              <p className="mt-2 text-sm text-muted">We know Seattle properties and local expectations for clean, professional spaces.</p>
            </article>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">Our Approach</h2>
              <p className="mt-4 text-base text-muted">
                We focus on long-term cleaning partnerships, not one-off transactions. That means responsive communication,
                practical scheduling, and results that help your property make a better first impression every day.
              </p>
              <p className="mt-4 text-base text-muted">
                If you currently rely on referrals or social media to find a cleaner, we make onboarding simple with a direct quote process,
                clear service plans, and dependable follow-through.
              </p>
            </div>

            <aside className="card h-fit">
              <h3 className="text-lg font-semibold">Add Your Real Brand Story Here</h3>
              <p className="mt-3 text-sm text-muted">
                Replace this section with your founding story, team background, certifications, and mission details.
                Authentic local story content increases conversion trust and About-page engagement.
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}