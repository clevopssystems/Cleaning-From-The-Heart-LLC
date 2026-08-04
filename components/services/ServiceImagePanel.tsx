import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ServiceImagePanelProps {
  src: string;
  alt: string;
  /** Intrinsic width of the file on disk, used to reserve layout space. Ignored when `aspect` is "fill". */
  width: number;
  /** Intrinsic height of the file on disk, used to reserve layout space. Ignored when `aspect` is "fill". */
  height: number;
  /** Responsive `sizes` hint. Always pass one that matches the real column width. */
  sizes: string;
  /**
   * Tailwind aspect-ratio class for the rendered crop, e.g. "aspect-[4/3]".
   * Pass "none" to render the file at its own ratio with nothing cropped away ,
   * use it for before/after composites, where a crop would slice a panel in half.
   * Pass "fill" to let the photograph take the full height of whatever row it
   * sits in, use it beside a text column so the two end level. The caller owns
   * the mobile height in that case, since a stacked column has none to inherit:
   * pass something like "min-h-[22rem] lg:min-h-0" as `className`.
   */
  aspect?: string;
  /** Only the one above-the-fold hero image per page should set this. */
  priority?: boolean;
  /** Skip Next.js image optimization when a file has replaced an older asset at the same public URL. */
  unoptimized?: boolean;
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
  unoptimized = false,
  caption,
  objectPosition,
  variant = "light",
  className
}: ServiceImagePanelProps) {
  const frame =
    variant === "dark"
      ? "border-white/15 bg-white/5 shadow-card-lg"
      : "border-brand-100 bg-surface shadow-card";

  const uncropped = aspect === "none";
  const filled = aspect === "fill";

  // `fill` drops width/height on purpose: next/image rejects being given both.
  const image = filled ? (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      unoptimized={unoptimized}
      loading={priority ? undefined : "lazy"}
      className="object-cover"
      style={objectPosition ? { objectPosition } : undefined}
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      unoptimized={unoptimized}
      loading={priority ? undefined : "lazy"}
      className={cn(uncropped ? "h-auto w-full" : cn(aspect, "w-full object-cover"))}
      style={!uncropped && objectPosition ? { objectPosition } : undefined}
    />
  );

  if (!caption) {
    return (
      <div className={cn("overflow-hidden rounded-3xl border", frame, filled && "relative h-full", className)}>
        {image}
      </div>
    );
  }

  return (
    <figure className={cn("overflow-hidden rounded-3xl border", frame, filled && "flex h-full flex-col", className)}>
      {filled ? <div className="relative flex-1">{image}</div> : image}
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
