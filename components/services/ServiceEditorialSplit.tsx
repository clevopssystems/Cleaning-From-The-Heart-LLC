import { ServiceImagePanel, type ServiceImagePanelProps } from "./ServiceImagePanel";
import { cn } from "@/lib/utils";

interface ServiceEditorialSplitProps extends Omit<ServiceImagePanelProps, "className"> {
  /** Which side the photograph sits on at `lg` and up. Mobile always stacks content first. */
  imagePosition?: "left" | "right";
  /** Grid template for the two columns at `lg` and up. */
  columns?: string;
  /** Vertical alignment of the two columns. "stretch" ends them level — pair it with `aspect="fill"`. */
  align?: "center" | "start" | "stretch";
  /** The text column: heading, copy, lists, CTAs. */
  children: React.ReactNode;
  /** Extra classes for the grid wrapper. */
  className?: string;
  /** Extra classes for the image frame. */
  imageClassName?: string;
}

/**
 * Two-column image-and-content layout used by the restaurant service pages.
 *
 * On mobile the heading/copy always comes first and the photograph follows, so
 * the reading order stays logical regardless of which side the image is on at
 * desktop width.
 */
export function ServiceEditorialSplit({
  imagePosition = "right",
  columns = "lg:grid-cols-2",
  align = "center",
  children,
  className,
  imageClassName,
  ...imageProps
}: ServiceEditorialSplitProps) {
  const imageFirstOnDesktop = imagePosition === "left";

  return (
    <div
      className={cn(
        "grid gap-10 lg:gap-14",
        columns,
        align === "center" ? "lg:items-center" : align === "start" ? "lg:items-start" : "lg:items-stretch",
        className
      )}
    >
      <div className={cn("min-w-0", imageFirstOnDesktop ? "order-1 lg:order-2" : "order-1")}>{children}</div>
      <ServiceImagePanel
        {...imageProps}
        className={cn(imageFirstOnDesktop ? "order-2 lg:order-1" : "order-2", imageClassName)}
      />
    </div>
  );
}
