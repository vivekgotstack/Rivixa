import type { Metadata } from "next";
import { ArticleCards, PageIntro } from "@/components/page-sections";
import { NextStep } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Articles and company updates from Rivixa Lifesciences.",
};

export default function BlogsPage() {
  return <main id="main-content">
    <PageIntro eyebrow="IDEAS & INFORMATION" title={<>Thoughtful reading.<br /><span>Useful next steps.</span></>} description="Clear introductions to our portfolio, company focus and professional conversations." />
    <section className="section-pad"><div className="container"><ArticleCards /></div></section>
    <section className="section-pad section-tint"><div className="container"><NextStep title="Looking for product information?" description="Send the team the exact brand and strength, and tell them what detail you need confirmed." href="/contact?area=general-products" label="Make a product enquiry" /></div></section>
  </main>;
}
