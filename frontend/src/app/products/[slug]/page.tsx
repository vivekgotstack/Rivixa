import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPage } from "@/components/section-page";
import { ProductCatalogue } from "@/components/product-catalogue";
import { Eyebrow, PartnershipCta } from "@/components/site-sections";
import { products } from "@/lib/products";

const sections = [
  { slug: "general-products", name: "General Products", intro: "Explore our tablets, capsules and nutritional supplements. Find product details and contact our team for current availability." },
  { slug: "ent", name: "ENT", intro: "Ear, nose and throat portfolio enquiries." },
];

export function generateStaticParams() {
  return sections.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const section = sections.find((item) => item.slug === slug);
  return { title: section?.name ?? "Products", description: section?.intro };
}

export default async function ProductSectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = sections.find((item) => item.slug === slug);
  if (!section) notFound();
  const sectionProducts = products.filter((product) => product.areas.includes(slug));
  if (sectionProducts.length > 0) {
    return (
      <main id="main-content">
        <section className="page-intro">
          <div className="container">
            <Eyebrow>OUR PRODUCTS</Eyebrow>
            <h1>{section.name}</h1>
            <p>{section.intro}</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="container">
            <ProductCatalogue products={sectionProducts} area={section.name} />
          </div>
        </section>
        <PartnershipCta />
      </main>
    );
  }
  return <SectionPage title={section.name} eyebrow="OUR PRODUCTS" intro={section.intro} heading="Speak with our portfolio team." description="Details for this product section will be added here. For current product information and availability, please contact our team." productSection />;
}
