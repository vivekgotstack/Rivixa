import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPage } from "@/components/section-page";

const sections = [
  { slug: "general-products", name: "General Products", intro: "General product and portfolio information." },
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
  return <SectionPage title={section.name} eyebrow="OUR PRODUCTS" intro={section.intro} heading="Speak with our portfolio team." description="Details for this product section will be added here. For current product information and availability, please contact our team." productSection />;
}
