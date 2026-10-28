import type { Metadata } from "next";
import { CareerForm } from "@/components/career-form";
import { Eyebrow } from "@/components/site-sections";
import { FeatureGrid, Faqs, PageIntro, NextStep } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Career",
  description: "Career enquiries and opportunities at Rivixa Lifesciences.",
};

export default function CareerPage() {
  return <main id="main-content">
    <PageIntro eyebrow="GROW WITH RIVIXA" title={<>Bring your perspective<br /><span>to life sciences.</span></>} description="Tell us about your experience and the work you would like to do. You can introduce yourself even when a specific opening is not listed." />
    <section className="section-pad"><div className="container career-layout">
      <div className="career-context"><Eyebrow>MAKE AN INTRODUCTION</Eyebrow><h2>Start with what<br /><span>you bring.</span></h2><p>We welcome professional introductions from people interested in contributing to Rivixa. Share your background and area of interest so the team can understand the conversation you have in mind.</p>
        <FeatureGrid items={[
          { title: "Professional relationships", description: "Experience in field sales, customer relationships or healthcare professional engagement." },
          { title: "Distribution & operations", description: "Work connected to supply, coordination, distribution or day-to-day operations." },
          { title: "Business support", description: "Skills and experience that support the practical work of a growing life sciences business." },
        ]} />
        <div className="career-process"><span className="small-label">HOW TO APPLY</span><p>Complete the form and review your draft. It opens in your email app; attach your CV there and send it to the Rivixa team. The website does not submit or store your application.</p></div>
      </div>
      <CareerForm />
    </div></section>
    <section className="section-pad section-tint"><div className="container"><Faqs items={[
      { question: "Can I introduce myself without a listed vacancy?", answer: "Yes. Use the form to share your experience and area of interest. It prepares an email for you to review and send." },
      { question: "How do I include my CV?", answer: "Add a shareable professional profile link, or attach your CV after the email draft opens. Please share only information relevant to your application." },
      { question: "Does the form send my details automatically?", answer: "No. Your information is placed in a draft on your device. It reaches Rivixa only if you choose to send the email." },
    ]} /></div></section>
    <section className="section-pad"><div className="container"><NextStep title="A different kind of enquiry?" description="For portfolio, professional or partnership conversations, the team is ready to hear from you." href="/contact" label="Contact Rivixa" /></div></section>
  </main>;
}
