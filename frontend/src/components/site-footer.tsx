import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Brand } from "@/components/brand";
import { company } from "@/lib/site";
import { sectionLinks } from "@/lib/navigation";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand light />
            <p>
              Science with purpose.
              <br />
              Care with heart. A healthier tomorrow.
            </p>
            <span className="footer-location">
              <MapPin size={15} />
              Mumbai, India
            </span>
          </div>
          <div>
            <h3>Discover Rivixa</h3>
            <Link href="/about">About us</Link>
            <Link href="/products">Products</Link>
            <Link href="/#our-commitment">Our commitment</Link>
            <Link href="/contact">Contact us</Link>
          </div>
          <div>
            <h3>More from Rivixa</h3>
            {sectionLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
          <div className="footer-contact">
            <h3>Start a conversation</h3>
            <p>
              For professional enquiries
              <br />
              and partnership opportunities.
            </p>
            <a href={`mailto:${company.email}`} className="footer-email">
              <Mail size={16} />
              {company.email}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="footer-legal">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <Link href="/privacy">
            Privacy & website information
            <ArrowUpRight size={12} />
          </Link>
        </div>
        <div className="footer-cin">CIN: {company.cin}</div>
      </div>
    </footer>
  );
}
