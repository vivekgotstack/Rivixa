import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bone,
  Eye,
  Heart,
  HeartHandshake,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { specialties } from "@/lib/site";
export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
export function SpecialtyCards() {
  const icons = { heart: Heart, eye: Eye, bone: Bone };
  return (
    <div className="specialty-grid">
      {specialties.map((s) => {
        const Icon = icons[s.icon];
        return (
          <Link
            href={`/therapeutic-areas/${s.slug}`}
            key={s.slug}
            className={`specialty-card specialty-${s.slug}`}
          >
            <div className="specialty-photo">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) 33vw, 411px"
                placeholder="blur"
              />
              <span className="specialty-number">{s.number} /</span>
              <span className="specialty-icon">
                <Icon size={23} strokeWidth={1.5} />
              </span>
            </div>
            <div className="specialty-content">
              <span className="small-label">{s.label}</span>
              <div className="specialty-title">
                <h3>{s.name}</h3>
                <span className="round-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <p>{s.description}</p>
              <span className="text-link">
                Explore products & care
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
export function PartnershipCta() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="partnership-cta">
          <div>
            <Eyebrow light>BETTER, TOGETHER</Eyebrow>
            <h2>
              Better care begins
              <br />
              <span>with a conversation.</span>
            </h2>
            <p>
              For healthcare professionals, distributors and partners.
              Connect with our team.
            </p>
          </div>
          <Button asChild className="button-ice">
            <Link href="/contact">
              Partner with Rivixa
              <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
export function Commitments() {
  const items = [
    {
      icon: ShieldCheck,
      number: "01",
      title: "Responsibility in every decision",
      text: "Quality is a priority in how we choose our partners, develop our portfolio and approach our work.",
    },
    {
      icon: Microscope,
      number: "02",
      title: "A scientific outlook",
      text: "We listen to healthcare professionals and continue to learn from the needs of clinical practice.",
    },
    {
      icon: HeartHandshake,
      number: "03",
      title: "People at the centre",
      text: "Behind every healthcare need is a person. Their wellbeing gives our work its purpose and our partnerships their meaning.",
    },
  ];
  return (
    <section className="commitment-section section-pad" id="our-commitment">
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow>THE RIVIXA COMMITMENT</Eyebrow>
            <h2>
              Our principles.
              <br />
              <span>Our responsibility.</span>
            </h2>
          </div>
          <p>
            What we believe shapes how we move forward.
            <br />
            These are the principles behind our ambition.
          </p>
        </div>
        <div className="commitment-grid">
          {items.map((item) => (
            <article key={item.title}>
              <div className="commitment-top">
                <item.icon size={32} strokeWidth={1.4} />
                <span>{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="commitment-note">
          <span>
            A shared ambition: thoughtful healthcare, meaningful human impact.
          </span>
        </div>
      </div>
    </section>
  );
}
