import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { quoteHref } from "@/lib/quote-form";

/**
 * Shared primary/secondary CTA pair. Pass `quoteTarget` to preselect a service
 * in the quote form, otherwise the CTA points at the plain quote form.
 */
export function CtaButtons({
  centered = false,
  quoteTarget
}: {
  centered?: boolean;
  quoteTarget?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${centered ? "justify-center" : ""}`}>
      <Link href={quoteTarget ?? quoteHref()} className="cta-primary w-full sm:w-auto">
        {siteConfig.primaryCta}
      </Link>
      <Link href={siteConfig.phoneHref} className="cta-secondary w-full sm:w-auto">
        <Phone className="mr-2 h-4 w-4" />
        {siteConfig.secondaryCta}
      </Link>
    </div>
  );
}
