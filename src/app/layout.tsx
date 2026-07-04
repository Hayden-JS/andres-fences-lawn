import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { business, siteUrl } from "@/lib/business";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andres Fences & Lawn Services | Fence & Lawn Care in Austin, TX",
    template: "%s | Andres Fences & Lawn Services",
  },
  description:
    "Austin's trusted fence and lawn professionals. Fence installation, fence repair, gates, and lawn care throughout Austin, Buda, Kyle, and Central Texas. Free estimates.",
  alternates: {
    canonical: ".",
  },
  openGraph: {
    title: "Andres Fences & Lawn Services — Austin's Trusted Fence & Lawn Professionals",
    description:
      "Professional fence installation, fence repair, and lawn care throughout Austin and surrounding communities. Free estimates, honest pricing, local family business.",
    url: siteUrl,
    siteName: "Andres Fences & Lawn Services",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.addressLocality,
    addressRegion: business.addressRegion,
    postalCode: business.postalCode,
    addressCountry: "US",
  },
  areaServed: business.serviceAreas.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:30",
      closes: "16:00",
    },
  ],
  priceRange: "$$",
  url: siteUrl,
};

export default function AndresFenceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${oswald.variable} ${inter.variable} af-root antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
