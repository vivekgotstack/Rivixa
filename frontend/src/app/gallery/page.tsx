import type { Metadata } from "next";
import { SectionPage } from "@/components/section-page";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and moments from Rivixa Lifesciences.",
};

export default function GalleryPage() {
  return <SectionPage title="Gallery" eyebrow="LIFE AT RIVIXA" intro="A place for the people and moments behind our work." heading="Moments worth sharing." description="Photos from our team, activities and company gatherings will be added here as they become available." />;
}
