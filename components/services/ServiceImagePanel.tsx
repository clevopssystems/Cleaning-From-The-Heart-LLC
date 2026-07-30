import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ServiceImagePanelProps {
  src: string;
  alt: string;
  /** Intrinsic width of the file on disk — used to reserve layout space. */
  width: number;
  /** Intrinsic height of the file on disk — used to reserve layout space. */
  height: number;
  /** Responsive `sizes` hint. Always pass one that matches the real column width. */
  sizes: string;
  /** Tailwind aspect-ratio class for the rendered crop, e.g. "aspect-[4/3]". */
  aspect?: string;
  /** Only the one above-the-fold hero image per page should set this. */
  priority?: boolean;
  /** Optional neutral caption. Never describe stock imagery as company work. */
  caption?: string;
  /** `object-position` override for crops that would otherwise lose the subject. */
  objectPosition?: string;
  /** Frame styling: light sections use the card border, dark sections a white hairline. */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Framed photograph used across the service pages. Matches the existing card
 * treatment (rounded-3xl, brand-100 hairline, shadow-card) so photography sits
 * in the same visual system as the cards and accordions around it.
 */
export function ServiceImagePanel({
  src,
  alt,
  width,
  height,
  sizes,
  aspect = "aspect-[4/3]",
  priority = false,
  caption,
  objectPosition,
  variant = "light",
  className
}: ServiceImagePanelProps) {
  const frame =
    variant === "dark"
      ? "border-white/15 bg-white/5 shadow-card-lg"
      : "border-brand-100 bg-surface shadow-card";

  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={cn(aspect, "w-full object-cover")}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );

  if (!caption) {
    return <div className={cn("overflow-hidden rounded-3xl border", frame, className)}>{image}</div>;
  }

  return (
    <figure className={cn("overflow-hidden rounded-3xl border", frame, className)}>
      {image}
      <figcaption
        className={cn(
          "px-5 py-3.5 text-xs leading-relaxed",
          variant === "dark" ? "text-white/60" : "border-t border-brand-100 bg-white text-muted"
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
