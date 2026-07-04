import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Free Fence & Lawn Estimate in Austin, TX",
  description:
    "Request a free estimate from Andres Fences & Lawn Services. Serving Austin, Buda, Kyle, Round Rock, and Central Texas. Call (512) 999-5356.",
  alternates: {
    canonical: "contact/",
  },
};

export default function Page() {
  return <ContactContent />;
}
