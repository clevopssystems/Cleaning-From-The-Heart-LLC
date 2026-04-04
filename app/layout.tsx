import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleaningfromtheheartllc.com"),
  title: {
    default: "Cleaning From The Heart LLC | Seattle Commercial Cleaning Services",
    template: "%s | Cleaning From The Heart LLC"
  },
  description:
    "Cleaning From The Heart LLC provides professional commercial cleaning, carpet cleaning, and floor care services throughout Seattle and the greater metro area. Insured, vetted staff, and satisfaction backed.",
  keywords: [
    "Seattle cleaning services",
    "commercial cleaning Seattle",
    "office cleaning Seattle",
    "carpet cleaning Seattle",
    "strip and wax Seattle",
    "Seattle janitorial services",
    "move in move out cleaning Seattle"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Cleaning From The Heart LLC | Seattle Commercial Cleaning",
    description:
      "Professional commercial cleaning, carpet cleaning, and floor care throughout Seattle. Insured, vetted staff. Request a free quote.",
    url: "https://cleaningfromtheheartllc.com",
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    // Place a 1200×630 image at /public/og-image.jpg to enable rich link previews.
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cleaning From The Heart LLC — Seattle Commercial Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning From The Heart LLC | Seattle Commercial Cleaning",
    description:
      "Professional commercial cleaning, carpet cleaning, and floor care throughout Seattle. Insured, vetted staff.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cleaningfromtheheartllc.com/#business",
  name: siteConfig.name,
  image: "https://cleaningfromtheheartllc.com/services/hero/hero-cleaning-team.png",
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO BOX 135",
    addressLocality: "Renton",
    addressRegion: "WA",
    postalCode: "98057",
    addressCountry: "US"
  },
  areaServed: [
    { "@type": "City", name: "Seattle" },
    { "@type": "City", name: "Bellevue" },
    { "@type": "City", name: "Renton" },
    { "@type": "City", name: "Kent" },
    { "@type": "City", name: "Tukwila" },
    { "@type": "City", name: "Tacoma" },
    { "@type": "City", name: "Kirkland" }
  ],
  url: "https://cleaningfromtheheartllc.com",
  openingHours: "Mo-Sa 07:00-19:00",
  priceRange: "$$",
  description:
    "Professional commercial cleaning, carpet cleaning, strip & wax, move-in/move-out, and post-construction cleaning services throughout Seattle and the greater metro area.",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Cleaning", serviceType: "Commercial Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Cleaning", serviceType: "Carpet Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strip and Wax", serviceType: "Floor Care" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-In Move-Out Cleaning", serviceType: "Property Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Construction Cleaning", serviceType: "Construction Cleaning" } }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <MobileStickyCta />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </body>
    </html>
  );
}
