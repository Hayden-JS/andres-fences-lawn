import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Project Gallery | Fence & Lawn Work in Austin, TX",
  description:
    "Browse recent fence installations, fence repairs, gates, and lawn maintenance projects completed by Andres Fences & Lawn Services across Central Texas.",
  alternates: {
    canonical: "gallery/",
  },
};

export default function Page() {
  return <GalleryContent />;
}
