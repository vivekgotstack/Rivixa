import type { Metadata } from "next";
import { SectionPage } from "@/components/section-page";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Articles and company updates from Rivixa Lifesciences.",
};

export default function BlogsPage() {
  return <SectionPage title="Blogs" eyebrow="FROM RIVIXA" intro="Perspectives, stories and updates from our team." heading="Our next chapter, in words." description="New articles and company updates will be shared here. For current company or portfolio information, get in touch with our team." />;
}
