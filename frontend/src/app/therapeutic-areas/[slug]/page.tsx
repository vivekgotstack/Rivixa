import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { specialties } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Eyebrow, PartnershipCta } from "@/components/site-sections";
import { ProductCatalogue } from "@/components/product-catalogue";
import { products } from "@/lib/products";
export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = specialties.find((s) => s.slug === slug);
  return { title: s?.name || "Therapeutic Area", description: s?.description };
}
export default async function SpecialtyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = specialties.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <main id="main-content">
      <nav aria-label="Breadcrumb" className="container breadcrumbs">
        <Link href="/">Home</Link>
        <ChevronRight size={12} />
        <Link href="/therapeutic-areas">Therapeutic areas</Link>
        <ChevronRight size={12} />
        <span>{s.name}</span>
      </nav>
      <section className={`specialty-detail specialty-${s.slug}`}>
        <div className="container detail-grid">
          <div>
            <Eyebrow>{s.label}</Eyebrow>
            <h1>{s.name}</h1>
            <h2>{s.tagline}</h2>
            <p>{s.intro}</p>
            <Button asChild size="lg">
              <Link href={`/contact?area=${s.slug}`}>
                Make a professional enquiry
                <ArrowUpRight size={17} />
              </Link>
            </Button>
            <div style={{ marginTop: 20 }}>
              <a href="#products" className="text-link">Browse products <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="detail-image">
            <Image
              src={s.image}
              alt={s.alt}
              fill
              sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1400px) 44vw, 563px"
              preload
              placeholder="blur"
            />
            <span className="detail-image-label">OUR FOCUS / {s.number}</span>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <Eyebrow>A CLOSER LOOK</Eyebrow>
          <div className="section-heading">
            <h2>
              Understanding what matters
              <br />
              <span>in {s.name.toLowerCase()}.</span>
            </h2>
            <p>{s.description}</p>
          </div>
          <div className="focus-grid">
            {s.topics.map((t, i) => (
              <article key={t.title}>
                <span>0{i + 1}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
          <ProductCatalogue products={products.filter((p) => p.areas.includes(s.slug))} area={s.name} />
          <div className="portfolio-callout">
            <div>
              <h3>Looking for portfolio information?</h3>
              <p>
                Our team can help with current product information and
                professional enquiries.
              </p>
            </div>
            <Link href={`/contact?area=${s.slug}`} className="text-link">
              Connect with us
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="other-areas">
            <span>EXPLORE OUR OTHER AREAS</span>
            {specialties
              .filter((item) => item.slug !== s.slug)
              .map((item) => (
                <Link href={`/therapeutic-areas/${item.slug}`} key={item.slug}>
                  {item.name}
                  <ArrowUpRight size={19} />
                </Link>
              ))}
          </div>
        </div>
      </section>
      <PartnershipCta />
    </main>
  );
}
