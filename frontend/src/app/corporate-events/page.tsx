import type { Metadata } from "next";
import { SectionPage } from "@/components/section-page";

export const metadata: Metadata = {
  title: "Corporate Events",
  description: "Company events and professional gatherings at Rivixa Lifesciences.",
};

export default function EventsPage() {
  return <SectionPage title="Corporate Events" eyebrow="COMING TOGETHER" intro="Company occasions and opportunities to connect." heading="Keep up with our calendar." description="Upcoming events and highlights from company gatherings will be published here. For event or collaboration enquiries, contact our team." />;
}
