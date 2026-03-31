import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface CtaButtonsProps {
  primaryHref?: string;
  secondaryHref?: string;
  centered?: boolean;
}

export function CtaButtons({ primaryHref = "/contact", secondaryHref = siteConfig.phoneHref, centered = false }: CtaButtonsProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${centered ? "justify-center" : ""}`}>
      <Link href={primaryHref} className="cta-primary">
        {siteConfig.primaryCta}
      </Link>
      <Link href={secondaryHref} className="cta-secondary">
        <Phone className="mr-2 h-4 w-4" />
        {siteConfig.secondaryCta}
      </Link>
    </div>
  );
}