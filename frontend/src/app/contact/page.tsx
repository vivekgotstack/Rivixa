import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/site-sections";
import { ContactForm } from "@/components/contact-form";
import { company } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with Rivixa Lifesciences for professional enquiries, portfolio information and partnerships. Find our Mumbai and Lucknow offices.",
};
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ area?: string }>;
}) {
  const { area } = await searchParams;
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
            {[
              {
                title: "Registered office",
                city: "Mumbai",
                address: company.registeredOffice,
              },
              {
                title: "Branch office",
                city: "Lucknow",
                address: company.branchOffice,
              },
            ].map((o) => (
              <address className="office" key={o.city}>
                <MapPin size={21} strokeWidth={1.5} />
                <div>
                  <span>{o.title}</span>
                  <h3>{o.city}</h3>
                  <p>{o.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.address)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View location
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </address>
            ))}
          </div>
          <ContactForm area={area} />
        </div>
      </section>
    </main>
  );
}
