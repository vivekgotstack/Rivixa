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
import {
  Commitments,
  Eyebrow,
  PartnershipCta,
  SpecialtyCards,
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
              A focused pharmaceutical company with people at its heart.
              Exploring better care in women’s health, vision and mobility.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <Link href="/therapeutic-areas">
                  Our therapeutic areas
                  <ArrowUpRight size={18} />
                </Link>
              </Button>
              <Link href="/about" className="text-link">
                Discover Rivixa
                <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-footnote"><span>WOMEN’S HEALTH</span><span>VISION</span><span>MOBILITY</span></div>
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
          <a href="#therapeutic-areas">
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
      <section className="section-pad areas-section" id="therapeutic-areas">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>OUR THERAPEUTIC AREAS</Eyebrow>
              <h2>
                Three areas of care.
                <br />
                <span>A lifetime of difference.</span>
              </h2>
            </div>
            <p>
              Our focus brings together women’s health, eye care and
              musculoskeletal wellbeing. Explore our therapeutic areas and
              product portfolio.
            </p>
          </div>
          <SpecialtyCards />
          <div className="area-bottom">
            <span>Specialised focus. A shared commitment to life.</span>
            <Link className="text-link" href="/therapeutic-areas">
              All therapeutic areas
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="about-section section-pad">
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
              At Rivixa Lifesciences, we believe the real value of science lies
              in what it can mean for someone’s life.
            </p>
            <p>
              With our registered office in Mumbai and a branch in Lucknow,
              we’re beginning a focused journey in Gynaecology, Ophthalmology
              and Orthopedic care — shaped by responsibility, collaboration and
              compassion.
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
      <Commitments />
      <PartnershipCta />
    </main>
  );
}
