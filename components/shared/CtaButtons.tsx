import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface CtaButtonsProps {
  primaryHref?: string;
  secondaryHref?: string;
  centered?: boolean;
}

export function CtaButtons({ primaryHref = siteConfig.whatsappHref, secondaryHref = siteConfig.phoneHref, centered = false }: CtaButtonsProps) {
  const isExternalPrimary = primaryHref.startsWith("http");

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${centered ? "justify-center" : ""}`}>
      <Link
        href={primaryHref}
        target={isExternalPrimary ? "_blank" : undefined}
        rel={isExternalPrimary ? "noopener noreferrer" : undefined}
        className="cta-primary"
      >
        {siteConfig.primaryCta}
      </Link>
      <Link href={secondaryHref} className="cta-secondary">
        <Phone className="mr-2 h-4 w-4" />
        {siteConfig.secondaryCta}
      </Link>
    </div>
  );
}
