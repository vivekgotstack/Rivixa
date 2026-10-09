import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/site-sections";
import { company } from "@/lib/site";

const resources = [
  {
    number: "01",
    title: "Explore the product portfolio",
    description: "Browse our brands, compositions and pack details in one place.",
    href: "/products",
    link: "View products",
  },
  {
    number: "02",
    title: "Ask about a product",
    description: "Contact us for current product information, availability and portfolio enquiries.",
    href: "/contact",
    link: "Make an enquiry",
  },
  {
    number: "03",
    title: "Discuss a partnership",
    description: "For distributors and organisations interested in working with Rivixa. Tell us about your business and the markets you serve.",
    href: "/contact",
    link: "Start a conversation",
  },
];

export function ProfessionalResources() {
  return (
    <section className="professional-section section-pad" aria-labelledby="professional-heading">
      <div className="container professional-grid">
        <div className="professional-intro">
          <Eyebrow>FOR PROFESSIONALS & PARTNERS</Eyebrow>
          <h2 id="professional-heading">The information you need.<br /><span>A team you can reach.</span></h2>
          <p>Find product details, ask a question or explore a working relationship with our team.</p>
          <div className="professional-note">
            <span>WHEN YOU GET IN TOUCH</span>
            <p>Include the product name, your organisation and the details of your enquiry to help us understand what you need.</p>
          </div>
        </div>
        <div className="professional-resources">
          {resources.map((resource) => (
            <article className="professional-resource" key={resource.number}>
              <span className="resource-number">{resource.number}</span>
              <div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link href={resource.href} className="text-link">{resource.link}<ArrowUpRight size={17} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MumbaiOffice() {
  return (
    <section className="home-office-section section-pad" aria-labelledby="office-heading">
      <div className="container home-office-grid">
        <div className="home-office-intro">
          <Eyebrow>OUR REGISTERED OFFICE</Eyebrow>
          <h2 id="office-heading">Based in Mumbai.<br /><span>Open to conversation.</span></h2>
          <p>For product enquiries, company information and professional collaboration, connect directly with Rivixa Lifesciences.</p>
          <Link href="/contact" className="text-link">Contact our team<ArrowUpRight size={17} /></Link>
        </div>
        <div className="home-office-details">
          <address>
            <MapPin size={24} strokeWidth={1.5} aria-hidden="true" />
            <div>
              <span className="office-label">MUMBAI · MAHARASHTRA</span>
              <h3>Rivixa Lifesciences</h3>
              <p>{company.registeredOffice}</p>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.registeredOffice)}`} target="_blank" rel="noreferrer" className="text-link">View location<ArrowUpRight size={15} /></a>
            </div>
          </address>
          <a className="home-office-email" href={`mailto:${company.email}`}>
            <Mail size={21} strokeWidth={1.5} aria-hidden="true" />
            <span><span className="office-label">EMAIL OUR TEAM</span><span>{company.email}</span></span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
