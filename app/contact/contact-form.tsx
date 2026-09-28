"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "../components";

export default function ContactForm() {
  const [draft, setDraft] = useState<{ url: string; body: string } | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) || "").trim();
    const name = field("name");
    const email = field("email");
    const message = field("message");
    if (!name || !email || !message) {
      setError("Please enter your name, business email, and a message. Fields cannot contain only spaces.");
      return;
    }
    const subject = field("subject") || "Website enquiry";
    const body = `Name: ${name}\nBusiness email: ${email}\nOrganisation: ${field("organisation") || "Not provided"}\n\n${message}`;
    setDraft({ url: `mailto:info@florezatechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, body });
    setError("");
    setCopied(false);
  }

  async function copyMessage() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopied(true);
    } catch {
      setError("Copy is unavailable in this browser. Select the message below and copy it manually.");
    }
  }

  return <div className="message-panel"><h2>Send Us a Message</h2><p>Tell us about your project or enquiry. Our team is ready to engage.</p><form onSubmit={prepareMessage} onChange={() => { setDraft(null); setError(""); setCopied(false); }}><div className="form-grid"><div className="form-field"><label htmlFor="contact-name">Full name <span>*</span></label><input id="contact-name" name="name" placeholder="Full name" autoComplete="name" required maxLength={100} /></div><div className="form-field"><label htmlFor="contact-email">Business email <span>*</span></label><input id="contact-email" name="email" type="email" placeholder="Business email address" autoComplete="email" required maxLength={254} /></div><div className="form-field"><label htmlFor="contact-organisation">Organisation</label><input id="contact-organisation" name="organisation" placeholder="Organisation name" autoComplete="organization" maxLength={150} /></div><div className="form-field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" placeholder="Subject" maxLength={150} /></div><div className="form-field full-width"><label htmlFor="contact-message">Message <span>*</span></label><textarea id="contact-message" name="message" placeholder="Tell us about your project or enquiry" required minLength={10} maxLength={3000} rows={7} /></div></div><p className="form-note" id="email-workflow">This form prepares an email draft. Review and send it from your email app.</p><button type="submit" className="button button-gold" aria-describedby="email-workflow">Prepare Message <Icon name="arrow" /></button></form>{error && <p className="form-error" role="alert">{error}</p>}{draft && <section className="draft-panel" aria-label="Prepared email"><p role="status">Your email draft is ready. Your message has not been sent.</p><pre>{draft.body}</pre><div className="draft-actions"><a className="button button-gold" href={draft.url}><Icon name="mail" />Open Email Draft</a><button className="button button-subtle" type="button" onClick={copyMessage}>{copied ? "Message Copied" : "Copy Message"}</button></div><p className="form-note">If you do not have an email app configured, copy the message and email it to <a href="mailto:info@florezatechnologies.com">info@florezatechnologies.com</a>.</p>{copied && <span className="visually-hidden" role="status">Message copied to clipboard.</span>}</section>}</div>;
}
