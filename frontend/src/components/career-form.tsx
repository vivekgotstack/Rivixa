"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { company } from "@/lib/site";
import { careerInterests } from "@/lib/resources";

export function CareerForm() {
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "").trim();
    const subject = `Career introduction: ${value("interest")} — ${value("name")}`;
    const body = `Hello Rivixa team,\n\nI would like to introduce myself for a career conversation.\n\nName: ${value("name")}\nEmail: ${value("email")}\nPhone: ${value("phone")}\nCurrent city: ${value("city")}\nArea of interest: ${value("interest")}\nExperience: ${value("experience")}\nQualification: ${value("qualification") || "Not provided"}\nAvailability / notice period: ${value("availability")}\nCV / professional profile: ${value("resume") || "I will attach my CV to this email."}\n\nAbout me:\n${value("message")}\n\nI have read the website privacy information and am sharing these details for a career enquiry.\n`;
    setCopyState("idle");
    setDraft({ subject, body });
  }

  async function copy() {
    if (!draft) return;
    try { await navigator.clipboard.writeText(`To: ${company.email}\nSubject: ${draft.subject}\n\n${draft.body}`); setCopyState("copied"); }
    catch { setCopyState("error"); }
  }

  return <>
    <form className="contact-form career-form" onSubmit={prepare}>
      <div className="form-heading"><span className="small-label">YOUR NEXT CHAPTER</span><h2>Introduce yourself.</h2><p>Share your experience and where you would like to contribute. Fields marked * are required.</p></div>
      <fieldset><legend>01 / Your details</legend>
        <div className="form-row">
          <div className="field"><Label htmlFor="career-name">Full name *</Label><Input id="career-name" name="name" autoComplete="name" placeholder="Your full name" required maxLength={100} pattern=".*\S.*" /></div>
          <div className="field"><Label htmlFor="career-email">Email address *</Label><Input id="career-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={200} /></div>
        </div>
        <div className="form-row">
          <div className="field"><Label htmlFor="career-phone">Phone number *</Label><Input id="career-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required pattern="[+()0-9 .-]{7,24}" maxLength={24} title="Enter a phone number using digits, spaces, +, brackets or hyphens." /></div>
          <div className="field"><Label htmlFor="career-city">Current city *</Label><Input id="career-city" name="city" autoComplete="address-level2" placeholder="City, state" required maxLength={100} pattern=".*\S.*" /></div>
        </div>
      </fieldset>
      <fieldset><legend>02 / Your experience</legend>
        <div className="form-row">
          <div className="field"><Label htmlFor="career-interest">Area of interest *</Label><select id="career-interest" name="interest" required defaultValue=""><option value="" disabled>Select an area</option>{careerInterests.map(interest => <option key={interest}>{interest}</option>)}</select></div>
          <div className="field"><Label htmlFor="career-experience">Professional experience *</Label><select id="career-experience" name="experience" required defaultValue=""><option value="" disabled>Select experience</option>{["Student / graduate", "Less than 1 year", "1–3 years", "3–5 years", "5–10 years", "10+ years"].map(value => <option key={value}>{value}</option>)}</select></div>
        </div>
        <div className="form-row">
          <div className="field"><Label htmlFor="career-qualification">Qualification <span className="optional">(optional)</span></Label><Input id="career-qualification" name="qualification" placeholder="Degree or relevant qualification" maxLength={150} /></div>
          <div className="field"><Label htmlFor="career-availability">Availability / notice period *</Label><select id="career-availability" name="availability" required defaultValue=""><option value="" disabled>Select availability</option>{["Immediately", "Within 30 days", "Within 60 days", "Within 90 days", "To be discussed"].map(value => <option key={value}>{value}</option>)}</select></div>
        </div>
      </fieldset>
      <fieldset><legend>03 / Your introduction</legend>
        <div className="field"><Label htmlFor="career-resume">CV or professional profile link <span className="optional">(optional)</span></Label><Input id="career-resume" name="resume" type="url" placeholder="https://…" maxLength={400} aria-describedby="career-resume-help" /><span className="field-hint" id="career-resume-help">Add a shareable link, or attach your CV when sending the email. Make sure your link can be opened by the recipient.</span></div>
        <div className="field"><Label htmlFor="career-message">Tell us about yourself *</Label><Textarea id="career-message" name="message" placeholder="Your relevant experience, strengths and the work you would like to do…" required minLength={20} maxLength={1500} rows={5} /><span className="field-hint">20–1,500 characters. Please leave out identity documents, financial details and medical information.</span></div>
      </fieldset>
      <div className="career-consent"><input type="checkbox" id="career-consent" name="consent" required /><label htmlFor="career-consent">I have read the <Link href="/privacy">privacy information</Link> and am sharing these details for a career enquiry.</label></div>
      <Button type="submit" size="lg" className="submit-button">Review my application<ArrowUpRight size={18} /></Button>
      <p className="form-note"><Mail size={14} />Review your details, then send your application using your email app.</p>
    </form>
    <Dialog open={!!draft} onOpenChange={open => { if (!open) setDraft(null); }}><DialogContent className="enquiry-dialog"><DialogHeader><DialogTitle>Review your career introduction</DialogTitle><DialogDescription>Nothing has been sent yet. Open your email app, attach your CV if needed, and send the application to {company.email}.</DialogDescription></DialogHeader><div className="draft-preview"><strong>{draft?.subject}</strong><pre>{draft?.body}</pre></div><div className="draft-actions"><Button asChild><a href={draft ? `mailto:${company.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}` : undefined}>Open email app<ArrowUpRight size={16} /></a></Button><Button variant="outline" onClick={copy}>{copyState === "copied" ? <Check size={16} /> : <Copy size={16} />}{copyState === "copied" ? "Application copied" : "Copy application"}</Button></div><p className="field-hint" role="status">{copyState === "error" ? "Copy is unavailable. You can select the draft above and copy it manually." : "You can close this review to edit your details. Your application is sent only when you send the email."}</p></DialogContent></Dialog>
  </>;
}
