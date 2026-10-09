import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/site-sections";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with Rivixa Lifesciences for professional enquiries, portfolio information and partnerships. Find our registered office in Mumbai.",
};
export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="page-intro contact-intro">
        <div className="container">
          <Eyebrow>LET’S CONNECT</Eyebrow>
          <h1>
            Good conversations.
            <br />
            <span>Greater possibilities.</span>
          </h1>
          <p>
            For healthcare professionals, potential partners and those who share
            our purpose.
          </p>
        </div>
      </section>
      <section className="section-pad contact-section">
        <div className="container contact-grid">
          <div className="contact-details">
            <div className="direct-contact">
              <span className="contact-detail-icon">
                <Mail size={24} strokeWidth={1.5} />
              </span>
              <h2>A direct line to our team.</h2>
              <p>
                For company information, portfolio enquiries
                <br />
                and professional collaboration.
              </p>
              <a href={`mailto:${company.email}`}>
                {company.email}
                <ArrowUpRight size={17} />
              </a>
            </div>
            <address className="office">
              <MapPin size={21} strokeWidth={1.5} />
              <div>
                <span>Registered office</span>
                <h3>Mumbai</h3>
                <p>{company.registeredOffice}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.registeredOffice)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View location
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </address>
          </div>
          <Suspense fallback={<p>Loading enquiry form…</p>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
