import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, PartnershipCta, SpecialtyCards } from "@/components/site-sections";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Rivixa’s product categories and visit each page for portfolio information.",
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      <section className="page-intro">
        <div className="container">
          <Eyebrow>OUR PRODUCTS</Eyebrow>
          <h1>Explore our portfolio.<br /><span>Find your area of care.</span></h1>
          <p>Select a category to view its products and find out more.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SpecialtyCards />
          <div className="additional-product-sections">
            <Link href="/products/general-products"><span>General Products</span><ArrowUpRight size={22} /></Link>
            <Link href="/products/ent"><span>ENT</span><ArrowUpRight size={22} /></Link>
          </div>
          <p className="portfolio-note">For current portfolio information and professional enquiries, please connect with our team.</p>
        </div>
      </section>
      <PartnershipCta />
    </main>
  );
}
