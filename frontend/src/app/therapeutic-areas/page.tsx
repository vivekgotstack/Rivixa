import type { Metadata } from "next";
import {
  Eyebrow,
  PartnershipCta,
  SpecialtyCards,
} from "@/components/site-sections";
export const metadata: Metadata = {
  title: "Therapeutic Areas",
  description:
    "Explore Rivixa’s three areas of focus: Gynaecology, Ophthalmology and Orthopedic care.",
};
export default function AreasPage() {
  return (
    <main id="main-content">
      <section className="page-intro">
        <div className="container">
          <Eyebrow>OUR THERAPEUTIC AREAS</Eyebrow>
          <h1>
            Three areas of focus.
            <br />
            <span>One human purpose.</span>
          </h1>
          <p>
            Different needs. A shared ambition to support the future of
            healthcare.
            <br />
            Discover where our journey begins.
          </p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <SpecialtyCards />
          <p className="portfolio-note">
            For current portfolio information and professional enquiries, please
            connect with our team.
          </p>
        </div>
      </section>
      <PartnershipCta />
    </main>
  );
}
