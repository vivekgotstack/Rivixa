"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { company, specialties } from "@/lib/site";
export function ContactForm() {
  const area = useSearchParams().get("area") ?? undefined;
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(
    null,
  );
  const [consent, setConsent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [consentError, setConsentError] = useState(false);
  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setConsentError(true);
      return;
    }
    const data = new FormData(e.currentTarget);
    const subject = `Rivixa enquiry: ${data.get("area")}`;
    const body = `Hello Rivixa team,\n\n${String(data.get("message")).trim()}\n\nName: ${String(data.get("name")).trim()}\nEmail: ${data.get("email")}\nOrganisation: ${String(data.get("organisation")).trim() || "Not provided"}\nArea of interest: ${data.get("area")}\n`;
    setDraft({ subject, body });
    setCopied(false);
    setCopyError(false);
  }
  async function copy() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${company.email}\nSubject: ${draft.subject}\n\n${draft.body}`,
      );
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <>
      <form className="contact-form" onSubmit={prepare}>
        <div className="form-heading">
          <h2>Let’s start a conversation.</h2>
          <p>Tell us a little about yourself and how we can help.</p>
        </div>
        <div className="form-row">
          <div className="field">
            <Label htmlFor="name">
              Full name <span>*</span>
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              autoComplete="name"
              required
              maxLength={100}
              pattern=".*\S.*"
            />
          </div>
          <div className="field">
            <Label htmlFor="email">
              Email address <span>*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@organisation.com"
              required
              maxLength={200}
            />
          </div>
        </div>
        <div className="field">
          <Label htmlFor="organisation">
            Organisation <span className="optional">(optional)</span>
          </Label>
          <Input
            id="organisation"
            name="organisation"
            autoComplete="organization"
            placeholder="Hospital, practice or company"
            maxLength={150}
          />
        </div>
        <div className="field">
          <Label htmlFor="area">
            Area of interest <span>*</span>
          </Label>
          <select
            name="area"
            id="area"
            defaultValue={specialties.find((s) => s.slug === area)?.name || ""}
            required
          >
            <option value="" disabled>
              Select an area of interest
            </option>
            {specialties.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Partnership opportunity</option>
            <option>General enquiry</option>
          </select>
        </div>
        <div className="field">
          <Label htmlFor="message">
            Your message <span>*</span>
          </Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Tell us about your enquiry…"
            required
            rows={4}
            maxLength={2000}
            minLength={10}
          />
          <span className="field-hint">
            Please keep your message to professional enquiries and avoid sharing
            patient information.
          </span>
        </div>
        <div className="consent-row">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(value) => {
              setConsent(value === true);
              setConsentError(false);
            }}
            aria-invalid={consentError}
            aria-describedby={consentError ? "consent-error" : undefined}
          />
          <Label htmlFor="consent">
            I understand how my enquiry is handled as described in the{" "}
            <Link href="/privacy">privacy information</Link>.
          </Label>
        </div>
        {consentError && (
          <p role="alert" id="consent-error" className="form-error">
            Please acknowledge the privacy information to continue.
          </p>
        )}
        <Button type="submit" size="lg" className="submit-button">
          Prepare my enquiry
          <ArrowUpRight size={18} />
        </Button>
        <p className="form-note">
          <Mail size={14} />
          Review your enquiry, then send it using your email app.
        </p>
      </form>
      <Dialog
        open={!!draft}
        onOpenChange={(open) => {
          if (!open) setDraft(null);
        }}
      >
        <DialogContent className="enquiry-dialog">
          <DialogHeader>
            <DialogTitle>Your enquiry is ready to review</DialogTitle>
            <DialogDescription>
              Nothing has been sent yet. Open your email app to send this
              enquiry to {company.email}, or copy the draft.
            </DialogDescription>
          </DialogHeader>
          <div className="draft-preview">
            <strong>{draft?.subject}</strong>
            <pre>{draft?.body}</pre>
          </div>
          <div className="draft-actions">
            <Button asChild>
              <a
                href={
                  draft
                    ? `mailto:${company.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`
                    : undefined
                }
              >
                Open email app
                <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button variant="outline" onClick={copy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Draft copied" : "Copy draft"}
            </Button>
          </div>
          {copyError && (
            <p role="alert" className="field-hint">
              Copy is unavailable. Select the draft above and copy it manually.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
