import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Fence & Lawn Services in Austin, TX",
  description:
    "Andres Fences & Lawn Services offers fence installation, fence repair, gates, and lawn care throughout Austin, Buda, Kyle, and Central Texas. Free estimates.",
  alternates: {
    canonical: "services/",
  },
};

export default function Page() {
  return <ServicesContent />;
}
