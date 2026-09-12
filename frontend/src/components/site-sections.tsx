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
  Sparkles,
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
              Let’s move healthcare
              <br />
              forward. <span>Together.</span>
            </h2>
            <p>
              Meaningful progress starts with a conversation. Let’s connect.
            </p>
          </div>
          <Button asChild className="button-mint">
            <Link href="/contact">
              Partner with Rivixa
              <ArrowUpRight size={18} />
            </Link>
          </Button>
          <HeartHandshake
            className="cta-decoration"
            aria-hidden="true"
            strokeWidth={0.7}
          />
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
      title: "Quality as a mindset",
      text: "Our ambition is to make quality a consideration in every decision, every collaboration and every step forward.",
    },
    {
      icon: Microscope,
      number: "02",
      title: "A scientific outlook",
      text: "We believe meaningful healthcare progress begins with curiosity, informed thinking and a willingness to keep learning.",
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
              Grounded in purpose.
              <br />
              <span>Guided by care.</span>
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
          <Sparkles size={16} />
          <span>
            A shared ambition: thoughtful healthcare, meaningful human impact.
          </span>
        </div>
      </div>
    </section>
  );
}
