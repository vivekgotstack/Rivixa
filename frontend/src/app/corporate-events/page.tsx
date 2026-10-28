import type { Metadata } from "next";
import { PageIntro, FeatureGrid, Faqs, NextStep } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Corporate Events",
  description: "Company events and professional gatherings at Rivixa Lifesciences.",
};

export default function EventsPage() {
  return <main id="main-content">
    <PageIntro eyebrow="CORPORATE & PROFESSIONAL EVENTS" title={<>Good work begins<br /><span>with a conversation.</span></>} description="Connect with Rivixa about professional gatherings, industry introductions and opportunities to meet our team." />
    <section className="section-pad"><div className="container"><div className="section-heading"><div><p className="eyebrow">WAYS TO CONNECT</p><h2>Bring the right people<br /><span>into the room.</span></h2></div><p>Share the context and purpose of your event or proposed meeting. The team can understand your invitation and discuss a suitable next step.</p></div>
      <FeatureGrid items={[
        { title: "Event invitations", description: "Send the date, location, organiser and intended audience when inviting Rivixa to a professional gathering." },
        { title: "Industry conversations", description: "Introduce a conference, association or professional forum relevant to life sciences and healthcare." },
        { title: "Meet the team", description: "Suggest a meeting purpose and preferred format for a conversation with Rivixa." },
      ]} />
      <div className="event-brief"><span className="small-label">A USEFUL EVENT BRIEF</span><ul><li>Event name, organiser and audience</li><li>Date, location or online format</li><li>Why the event may be relevant to Rivixa</li><li>Your role and the best way to reach you</li></ul></div>
    </div></section>
    <section className="section-pad section-tint"><div className="container"><Faqs items={[
      { question: "Where can I find the upcoming event calendar?", answer: "No public event schedule is listed at present. Contact the team with an invitation or event details for a direct conversation." },
      { question: "Can I invite Rivixa to a healthcare or industry event?", answer: "Yes. Include the organiser, audience, date, venue and what you would like the team to consider." },
      { question: "Can I propose a meeting instead?", answer: "Yes. Share your organisation, the meeting purpose and a few suitable times through the contact form." },
    ]} /></div></section>
    <section className="section-pad"><div className="container"><NextStep title="Planning a professional gathering?" description="Send the event details and your preferred way to continue." href="/contact?area=events" label="Start a conversation" /></div></section>
  </main>;
}
