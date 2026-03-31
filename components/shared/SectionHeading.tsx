interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean; // Use on dark backgrounds — switches text to white tones
}

export function SectionHeading({ eyebrow, title, description, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <span className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span> : null}
      <h2 className={`text-4xl font-bold leading-tight tracking-tight md:text-5xl ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? "text-white/65" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}