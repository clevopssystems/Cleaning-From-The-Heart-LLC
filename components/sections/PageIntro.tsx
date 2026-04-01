import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { CtaButtons } from "@/components/shared/CtaButtons";

interface PageIntroProps {
  title: string;
  description: string;
  eyebrow?: string;
  backgroundImage?: string;
}

export function PageIntro({ title, description, eyebrow, backgroundImage }: PageIntroProps) {
  return (
    <section className="relative -mt-16 overflow-hidden bg-hero-glow text-white">
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
      ) : null}
      <div className="absolute inset-0 bg-ink/65" aria-hidden />
      <div className="absolute inset-0 opacity-20 surface-grid" aria-hidden />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" aria-hidden />
      <Container className="relative section-shell">
        <div className="max-w-3xl">
          {eyebrow ? <span className="eyebrow-light">{eyebrow}</span> : null}
          <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
      </Container>
    </section>
  );
}
