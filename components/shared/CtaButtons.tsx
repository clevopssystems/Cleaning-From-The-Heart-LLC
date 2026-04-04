import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function CtaButtons({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${centered ? "justify-center" : ""}`}>
      <Link href="/contact" className="cta-primary">
        {siteConfig.primaryCta}
      </Link>
      <Link href={siteConfig.phoneHref} className="cta-secondary">
        <Phone className="mr-2 h-4 w-4" />
        {siteConfig.secondaryCta}
      </Link>
    </div>
  );
}
