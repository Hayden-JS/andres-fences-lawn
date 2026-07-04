import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Fence Contractor & Lawn Care in Austin, TX",
  description:
    "Andres Fences & Lawn Services provides fence installation, fence repair, gates, and lawn care throughout Austin, Buda, Kyle, Round Rock, and Central Texas. Free estimates.",
  alternates: {
    canonical: ".",
  },
};

export default function Page() {
  return <HomeContent />;
}
