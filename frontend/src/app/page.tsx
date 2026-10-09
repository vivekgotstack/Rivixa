import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfficeEditorial } from "@/components/homepage-resources";
import {
  Commitments,
  Eyebrow,
  PartnershipCta,
} from "@/components/site-sections";
import scienceHero from "../../public/images/science-hero.webp";
import patientCare from "../../public/images/patient-care.jpg";
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Eyebrow>RIVIXA LIFESCIENCES · INDIA</Eyebrow>
            <h1>
              Focused on care.
              <br />
              Committed to <span>life.</span>
            </h1>
            <p>
              A pharmaceutical company guided by science, responsibility
              and the needs of healthcare professionals.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <Link href="/products">
                  Explore our products
                  <ArrowUpRight size={18} />
                </Link>
              </Button>
              <Link href="/about" className="text-link">
                Discover Rivixa
                <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-footnote"><span>SCIENCE</span><span>QUALITY</span><span>CARE</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <Image
                src={scienceHero}
                alt="A scientist using a precision pipette in a bright life-sciences laboratory"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                preload
                placeholder="blur"
              />
              <div className="hero-photo-shade" />
            </div>
            <div className="hero-editorial-caption"><span>01 / OUR OUTLOOK</span><p>Scientific thinking.<br />Human understanding.</p></div>
          </div>
        </div>
        <div className="container hero-bottom">
          <a href="#about-rivixa">
            Discover our world
            <ArrowDown size={15} />
          </a>
          <span>RIVIXA LIFESCIENCES PRIVATE LIMITED</span>
        </div>
      </section>
      <div className="values-strip">
        <div className="container values-inner">
          <span>
            <Microscope size={21} strokeWidth={1.5} />A scientific outlook
          </span>
          <span>
            <ShieldCheck size={21} strokeWidth={1.5} />A commitment to quality
          </span>
          <span>
            <HeartHandshake size={21} strokeWidth={1.5} />A people-first purpose
          </span>
        </div>
      </div>
      <section className="about-section section-pad" id="about-rivixa">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-photo">
              <Image
                src={patientCare}
                alt="A doctor and patient in conversation during a consultation"
                fill
                sizes="(max-width: 700px) calc(100vw - 57px), (max-width: 1400px) 43vw, 550px"
                placeholder="blur"
              />
            </div>
            <div className="about-image-caption">
              <span className="caption-line" />
              <span>Every possibility begins with a person.</span>
            </div>
          </div>
          <div className="about-copy">
            <Eyebrow>GET TO KNOW RIVIXA</Eyebrow>
            <h2>
              Behind the science,
              <br />
              <span>there is always a person.</span>
            </h2>
            <p>
              Based in Mumbai, Rivixa Lifesciences works with healthcare
              professionals and partners to build a focused, responsible
              pharmaceutical portfolio.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Our story & purpose
                <ArrowUpRight size={17} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <Commitments compact />
      <OfficeEditorial />
      <PartnershipCta />
    </main>
  );
}
