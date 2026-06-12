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
    default: "Cleaning From The Heart LLC | Seattle Cleaning Services",
    template: "%s | Cleaning From The Heart LLC"
  },
  description:
    "Commercial and residential cleaning in Seattle, WA — janitorial, window cleaning, pressure washing, carpet cleaning, floor care, and move-out cleaning. 30+ years of experience.",
  keywords: [
    "Seattle cleaning services",
    "commercial cleaning Seattle",
    "residential cleaning Seattle",
    "janitorial services Seattle",
    "window cleaning Seattle",
    "pressure washing Seattle",
    "carpet cleaning Seattle",
    "floor stripping and waxing Seattle",
    "move in move out cleaning Seattle",
    "deep cleaning Seattle"
  ],
  alternates: {
    canonical: "https://cleaningfromtheheartllc.com"
  },
  openGraph: {
    title: "Cleaning From The Heart LLC | Seattle Cleaning Services",
    description:
      "Commercial and residential cleaning, window cleaning, pressure washing, carpet cleaning, floor care, and move-in/move-out services throughout Seattle. 30+ years of experience. Free quotes.",
    url: "https://cleaningfromtheheartllc.com",
    siteName: "Cleaning From The Heart LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/services/hero/hero-cleaning-team.png",
        alt: "Cleaning From The Heart LLC — Seattle Commercial & Residential Cleaning"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning From The Heart LLC | Seattle Cleaning Services",
    description:
      "Commercial and residential cleaning, window cleaning, pressure washing, carpet cleaning, and floor care throughout Seattle. 30+ years of experience.",
    images: ["/services/hero/hero-cleaning-team.png"]
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
    { "@type": "City", name: "Renton" },
    { "@type": "City", name: "Bellevue" },
    { "@type": "City", name: "Kent" },
    { "@type": "City", name: "Everett" },
    { "@type": "City", name: "Tukwila" },
    { "@type": "City", name: "Shoreline" },
    { "@type": "City", name: "Federal Way" },
    { "@type": "City", name: "Rainier" },
    { "@type": "City", name: "North Lynnwood" },
    { "@type": "City", name: "Mill Creek" },
    { "@type": "City", name: "Kirkland" },
    { "@type": "City", name: "Tacoma" },
    { "@type": "City", name: "Bothell" }
  ],
  url: "https://cleaningfromtheheartllc.com",
  openingHours: "Mo-Sa 07:00-19:00",
  priceRange: "$$",
  description:
    "Cleaning From The Heart LLC provides commercial and residential cleaning, window cleaning, pressure washing, carpet cleaning, floor stripping and waxing, move-in/move-out, and post-construction cleaning services throughout Seattle and surrounding Washington areas. 30+ years of experience.",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Cleaning", serviceType: "Commercial Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Cleaning", serviceType: "Residential Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Window Cleaning", serviceType: "Window Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pressure Washing", serviceType: "Pressure Washing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Cleaning", serviceType: "Carpet Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Floor Stripping and Waxing", serviceType: "Floor Care" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-In Move-Out Cleaning", serviceType: "Property Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning", serviceType: "Residential Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Construction Cleaning", serviceType: "Construction Cleaning" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Janitorial Services", serviceType: "Commercial Cleaning" } }
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
