import type { Metadata } from "next";
import { SectionPage } from "@/components/section-page";

export const metadata: Metadata = {
  title: "Career",
  description: "Career enquiries and opportunities at Rivixa Lifesciences.",
};

export default function CareerPage() {
  return <SectionPage title="Career" eyebrow="GROW WITH RIVIXA" intro="Bring your perspective to a company focused on care." heading="Let’s begin a conversation." description="Current openings will be listed here when available. To enquire about opportunities with Rivixa, introduce yourself to our team." actionLabel="Make a career enquiry" />;
}
