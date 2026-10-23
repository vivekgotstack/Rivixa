import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site-sections";
import helpPortrait from "../../public/images/help-portrait.jpg";

export function HelpBanner() {
  return (
    <section className="help-section" aria-labelledby="help-heading">
      <div className="container">
        <div className="help-banner">
          <div className="help-copy">
            <Eyebrow>NEED HELP?</Eyebrow>
            <h2 id="help-heading">We are here to help.</h2>
            <p>For product information, professional enquiries and partnerships, connect with Rivixa.</p>
            <Button asChild size="lg"><Link href="/contact">Contact Us Now</Link></Button>
          </div>
          <div className="help-photo">
            <Image src={helpPortrait} alt="" fill sizes="(max-width: 700px) calc(100vw - 40px), 48vw" placeholder="blur" />
          </div>
        </div>
      </div>
    </section>
  );
}
