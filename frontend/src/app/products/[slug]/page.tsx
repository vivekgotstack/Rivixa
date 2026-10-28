import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPage } from "@/components/section-page";
import { ProductCatalogue } from "@/components/product-catalogue";
import { Eyebrow, PartnershipCta } from "@/components/site-sections";
import { products } from "@/lib/products";
import { FeatureGrid, Faqs, NextStep, PageIntro } from "@/components/page-sections";

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
  if (slug === "ent") return <main id="main-content">
    <PageIntro eyebrow="OUR PRODUCTS · ENT" title={<>A clear line to<br /><span>ENT enquiries.</span></>} description="Talk with Rivixa about ear, nose and throat product information, professional introductions and distribution conversations." />
    <section className="section-pad"><div className="container"><div className="section-heading"><div><p className="eyebrow">A USEFUL STARTING POINT</p><h2>Tell us what<br /><span>you need to know.</span></h2></div><p>Share the exact brand name and strength when asking about a product. If a detail is not listed, our team can help direct your question.</p></div>
      <FeatureGrid items={[
        { title: "Product information", description: "Ask about a specific product, composition, strength, dosage form or pack configuration." },
        { title: "Professional enquiries", description: "Healthcare professionals can introduce their organisation and explain the information they are looking for." },
        { title: "Distribution conversations", description: "Businesses can share their location, area of interest and the kind of partnership discussion they have in mind." },
      ]} />
    </div></section>
    <section className="section-pad section-tint"><div className="container"><Faqs title="Before you make an enquiry." items={[
      { question: "Which ENT brands are listed here?", answer: "There are no ENT-specific brands in the current online catalogue. Contact Rivixa to ask about current portfolio information." },
      { question: "What should I include in my question?", answer: "Include the exact brand name, strength and pack detail if known, plus your organisation and city. Please do not send patient records." },
      { question: "Can distributors get in touch?", answer: "Yes. Share your business name, location, relevant experience and the kind of conversation you would like to have." },
    ]} /></div></section>
    <section className="section-pad"><div className="container"><NextStep title="Have an ENT question?" description="Send the team the information you have, and specify which product details you need confirmed." href="/contact?area=ent" label="Make an ENT enquiry" /></div></section>
  </main>;
  return <SectionPage title={section.name} eyebrow="OUR PRODUCTS" intro={section.intro} heading="Speak with our portfolio team." description="For current product information, composition or availability, contact our team with the exact brand and strength." productSection />;
}
