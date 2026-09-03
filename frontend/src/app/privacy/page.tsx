import type { Metadata } from "next";
import { Eyebrow } from "@/components/site-sections";
import { company } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy & Website Information" };
export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="page-intro">
        <div className="container">
          <Eyebrow>WEBSITE INFORMATION</Eyebrow>
          <h1>
            Privacy &<br />
            <span>your enquiries.</span>
          </h1>
        </div>
      </section>
      <article className="container legal-copy section-pad">
        <h2>How the enquiry form works</h2>
        <p>
          This website prepares an email draft on your device. Entering
          information in the form or selecting “Prepare my enquiry” does not
          send it to Rivixa. You choose whether to send the draft through your
          email application. “Copy draft” copies the information to your
          device’s clipboard.
        </p>
        <h2>Information you choose to share</h2>
        <p>
          The form asks for your name, email, area of interest and message, with
          an optional organisation name. If you send an email, its content is
          shared with Rivixa through your chosen email provider. Please do not
          include patient records or sensitive medical information.
        </p>
        <h2>Website storage</h2>
        <p>
          This frontend does not include advertising trackers or a
          form-submission database. Form values remain in the current page’s
          memory and are not intentionally saved to browser storage. Your
          browser, hosting service and email provider may handle technical
          information under their own policies.
        </p>
        <h2>About the information on this website</h2>
        <p>
          This website introduces the company and its areas of focus. It is not
          medical advice and does not provide product prescribing information.
          Please consult a qualified healthcare professional about medical
          decisions. Photographs are representative stock imagery.
        </p>
        <h2>Contact</h2>
        <p>
          For questions about your enquiry, contact{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
        <p>
          {company.name}
          <br />
          {company.registeredOffice}
          <br />
          CIN: {company.cin}
        </p>
      </article>
    </main>
  );
}
