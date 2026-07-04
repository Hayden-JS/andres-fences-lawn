import type { Metadata } from "next";
import FenceServicesContent from "./FenceServicesContent";

export const metadata: Metadata = {
  title: "Fence Installation & Repair in Austin, TX",
  description:
    "Wood, cedar, privacy, and decorative fence installation and repair in Austin, TX. Gates, post repair, chain link, ranch, and commercial fencing. Free estimates.",
  alternates: {
    canonical: "services/fence-services/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a fence cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fence pricing depends on the material, fence height, total linear footage, gate count, and site conditions. We provide a free, no-obligation on-site estimate for an exact price.",
      },
    },
    {
      "@type": "Question",
      name: "How long does installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential wood or cedar fence installations are completed in 1-3 days depending on fence length, terrain, and weather.",
      },
    },
    {
      "@type": "Question",
      name: "What type of wood lasts longest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cedar naturally resists rot, insects, and warping better than pine and holds up well in Central Texas heat. Pressure-treated pine is a more budget-friendly alternative.",
      },
    },
    {
      "@type": "Question",
      name: "Do permits apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permit requirements vary by city and county across the Austin area. We are familiar with local requirements and can help determine what applies to your property.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Fence Installation and Repair",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Andres Fences & Lawn Services",
  },
  areaServed: "Austin, TX",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FenceServicesContent />
    </>
  );
}
