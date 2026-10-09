import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site-sections";

export function SectionPage({
  title, eyebrow, intro, heading, description, actionLabel = "Contact our team", productSection = false,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  heading: string;
  description: string;
  actionLabel?: string;
  productSection?: boolean;
}) {
  return (
    <main id="main-content">
      <section className="page-intro">
        <div className="container">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container section-update">
          <div className="section-update-label">{productSection ? "PORTFOLIO INFORMATION" : "STAY CONNECTED"}</div>
          <div className="section-update-copy">
            <h2>{heading}</h2>
            <p>{description}</p>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">{actionLabel}<ArrowUpRight size={17} /></Link>
            </Button>
            {productSection && <Link className="text-link section-back-link" href="/products">All product categories<ArrowRight size={17} /></Link>}
          </div>
        </div>
      </section>
    </main>
  );
}
