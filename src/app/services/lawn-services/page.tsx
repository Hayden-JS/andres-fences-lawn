import type { Metadata } from "next";
import LawnServicesContent from "./LawnServicesContent";

export const metadata: Metadata = {
  title: "Lawn Care & Yard Maintenance in Austin, TX",
  description:
    "Routine lawn mowing, yard cleanup, leaf removal, and mulch installation in Austin, TX and surrounding areas. Recurring and one-time service available.",
  alternates: {
    canonical: "services/lawn-services/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should lawns be mowed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During peak growing season, weekly mowing is recommended. In cooler months, bi-weekly service is usually sufficient.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer recurring service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer recurring weekly or bi-weekly lawn service as well as one-time cleanup and mulch jobs.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Austin and surrounding communities including Buda, Kyle, Manor, Pflugerville, Round Rock, Cedar Park, Georgetown, and Bastrop.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LawnServicesContent />
    </>
  );
}
