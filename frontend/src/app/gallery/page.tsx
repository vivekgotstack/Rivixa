import type { Metadata } from "next";
import { PageIntro, NextStep } from "@/components/page-sections";
import { PortfolioGallery } from "@/components/portfolio-gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and moments from Rivixa Lifesciences.",
};

export default function GalleryPage() {
  return <main id="main-content">
    <PageIntro eyebrow="OUR PORTFOLIO IN VIEW" title={<>A closer look at<br /><span>the Rivixa range.</span></>} description="Explore illustrative product packaging by portfolio area. Product information and current availability should be confirmed with our team." />
    <section className="section-pad"><div className="container"><PortfolioGallery /></div></section>
    <section className="section-pad section-tint"><div className="container"><NextStep title="Need a specific composition?" description="Product labels and strengths vary. Tell us the exact brand and detail you need confirmed." href="/contact?area=general-products" label="Ask our team" /></div></section>
  </main>;
}
