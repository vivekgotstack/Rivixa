import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Commitments,
  Eyebrow,
  PartnershipCta,
} from "@/components/site-sections";
import patientCare from "../../../public/images/patient-care.jpg";
export const metadata: Metadata = {
  title: "About Rivixa",
  description:
    "Meet Rivixa Lifesciences, with a registered office in Mumbai, a branch in Lucknow and a focus on three areas of healthcare.",
};
export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-intro">
        <div className="container">
          <Eyebrow>OUR STORY & PURPOSE</Eyebrow>
          <h1>
            Inspired by science.
            <br />
            <span>Connected by care.</span>
          </h1>
          <p>A new journey in life sciences. A clear sense of purpose.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container about-grid">
          <div className="about-page-image">
            <Image
              src={patientCare}
              alt="A healthcare professional listening to a patient"
              fill
              sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1400px) 45vw, 575px"
              preload
              placeholder="blur"
            />
          </div>
          <div className="about-copy">
            <Eyebrow>MEET RIVIXA</Eyebrow>
            <h2>
              Life sciences.
              <br />
              <span>With life at the centre.</span>
            </h2>
            <p>
              Rivixa Lifesciences Private Limited is beginning its journey with
              a focused ambition: to bring a thoughtful, responsible perspective
              to healthcare.
            </p>
            <p>
              Our initial focus spans Gynaecology, Ophthalmology and Orthopedic
              care. We believe that listening to healthcare professionals,
              understanding people’s needs and building meaningful
              collaborations are essential to moving forward.
            </p>
            <p>
              Our purpose is simple: to keep people and their wellbeing at the
              heart of the work we aspire to do.
            </p>
          </div>
        </div>
      </section>
      <Commitments />
      <section className="section-pad">
        <div className="container presence-section">
          <div>
            <Eyebrow>ROOTED IN INDIA</Eyebrow>
            <h2>
              Two cities.
              <br />
              <span>One shared direction.</span>
            </h2>
            <p>
              Our registered office in Mumbai and branch in Lucknow form the
              starting point of our journey.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Find our offices
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="city-grid">
            <div>
              <MapPin />
              <span>REGISTERED OFFICE</span>
              <h3>Mumbai</h3>
              <p>Maharashtra, India</p>
            </div>
            <div>
              <MapPin />
              <span>BRANCH OFFICE</span>
              <h3>Lucknow</h3>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
      </section>
      <PartnershipCta />
    </main>
  );
}
