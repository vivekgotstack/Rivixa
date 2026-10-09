import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site-sections";
import indiaOffice from "../../public/images/india-office.jpg";

export function OfficeEditorial() {
  return (
    <section className="office-editorial section-pad" aria-labelledby="office-heading">
      <div className="container office-editorial-grid">
        <div className="office-editorial-copy">
          <Eyebrow>PROFESSIONAL CONNECTIONS</Eyebrow>
          <h2 id="office-heading">Rooted in Mumbai.<br /><span>Working together.</span></h2>
          <p>For healthcare professionals, distributors and partners. Connect with our team for product information and collaboration.</p>
          <div className="office-editorial-actions">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact our team<ArrowUpRight size={17} /></Link>
            </Button>
            <Link href="/products" className="text-link">View products<ArrowUpRight size={17} /></Link>
          </div>
          <span className="office-editorial-location"><MapPin size={16} strokeWidth={1.5} />Mumbai, Maharashtra · India</span>
        </div>
        <figure className="office-editorial-figure">
          <div className="office-editorial-photo">
            <Image src={indiaOffice} alt="A compact office with a desk, visitor chairs and plants in Punjab, India; representative photography" fill sizes="(max-width: 850px) calc(100vw - 40px), 50vw" placeholder="blur" />
          </div>
          <figcaption>Representative office photograph · India</figcaption>
        </figure>
      </div>
    </section>
  );
}
