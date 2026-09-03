import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Cross,
  Heart,
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
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Eyebrow>SCIENCE WITH PURPOSE. CARE WITH HEART.</Eyebrow>
            <h1>
              Advancing science.
              <br />
              Caring for <span>life.</span>
            </h1>
            <p>
              Inspired by people. Driven by possibility. We’re building a
              healthier tomorrow through a focused commitment to life sciences.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <Link href="/therapeutic-areas">
                  Explore our therapeutic areas
                  <ArrowUpRight size={18} />
                </Link>
              </Button>
              <Link href="/about" className="text-link">
                Discover Rivixa
                <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-footnote">
              <span className="hero-footnote-icon">
                <HeartHandshake size={20} strokeWidth={1.5} />
              </span>
              <span>
                Three areas of focus.
                <br />
                <strong>One purpose. Better lives.</strong>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo">
              <Image
                src="/images/doctor-consultation.jpg"
                alt="A healthcare professional in a bright clinical setting"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                priority
              />
              <div className="hero-photo-shade" />
            </div>
            <Cross
              className="hero-cross"
              size={62}
              strokeWidth={1}
              aria-hidden="true"
            />
            <div className="hero-image-label">
              <span />
              <span>THE HUMAN SIDE OF SCIENCE</span>
            </div>
            <div className="hero-float">
              <span className="float-icon">
                <Heart size={25} strokeWidth={1.5} />
              </span>
              <div>
                At the heart of what we do.<strong>People. Always.</strong>
              </div>
              <span className="float-dot" />
            </div>
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
                Focused expertise.
                <br />
                <span>Meaningful possibilities.</span>
              </h2>
            </div>
            <p>
              Our journey begins with three areas of care.
              <br />
              Each distinct. All connected by a commitment
              <br className="desktop-break" /> to people and their wellbeing.
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
                src="/images/patient-care.jpg"
                alt="A doctor and patient in conversation during a consultation"
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
            <div className="about-image-caption">
              <span className="caption-line" />
              <span>Every possibility begins with a person.</span>
            </div>
            <div className="about-stamp">
              <span>OUR PURPOSE</span>
              <HeartHandshake size={35} strokeWidth={1.25} />
              <strong>Better lives.</strong>
            </div>
          </div>
          <div className="about-copy">
            <Eyebrow>GET TO KNOW RIVIXA</Eyebrow>
            <h2>
              A new perspective.
              <br />A deeply human
              <br />
              <span>purpose.</span>
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
