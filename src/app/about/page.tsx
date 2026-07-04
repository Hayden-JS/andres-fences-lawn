import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Local Fence & Lawn Company in Austin, TX",
  description:
    "Andres Fences & Lawn Services is a locally owned, family-run fence and lawn care company serving Austin, TX with honest pricing and reliable craftsmanship.",
  alternates: {
    canonical: "about/",
  },
};

export default function Page() {
  return <AboutContent />;
}
