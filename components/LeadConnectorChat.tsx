"use client";

import { FormEvent, useId, useRef, useState } from "react";
import { submitPublicForm } from "@/lib/formApi";
import { policyVersion } from "@/lib/compliance";
import { track } from "@/lib/analytics";

const chatSmsDisclosure = "By checking this optional box, I agree to receive recurring service-related SMS messages from Booked4Seasons, operated by Codestra LLC, at the mobile number provided, concerning this support inquiry and related service coordination. Message frequency varies. Message and data rates may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of requesting services.";

export function LeadConnectorChat() {
  const titleId = useId();
  const statusId = useId();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const submissionKey = useRef<string | null>(null);

  function toggle() {
    setOpen(value => {
      if (!value) track("chat_opened");
      return !value;
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "ok") return;
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    if (raw.website) return;
    if (raw.smsConsent === "yes" && !String(raw.phone || "").trim()) {
      const phone = form.querySelector<HTMLInputElement>('input[name="phone"]');
      phone?.setCustomValidity("Enter a mobile number to record optional SMS consent.");
      phone?.reportValidity();
      phone?.addEventListener("input", () => phone.setCustomValidity(""), { once: true });
      return;
    }
    setStatus("sending");
    submissionKey.current ||= crypto.randomUUID();
    const now = new Date();
    try {
      await submitPublicForm({
        kind: "contact",
        name: String(raw.name || "").trim(),
        email: String(raw.email || "").trim(),
        phone: String(raw.phone || "").trim(),
        category: "chat_support",
        subject: "Website chat inquiry",
        message: String(raw.message || "").trim(),
        source_url: window.location.href,
        language: navigator.language,
        customer_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        transactional_contact_allowed: true,
        marketing_consent: false,
        sms_consent: raw.smsConsent === "yes",
        sms_delivery_enabled: false,
        email_consent: false,
        consent_timestamp: now.toISOString(),
        consent_source: `web-chat:${policyVersion}`,
        policy_version: policyVersion,
        company: "",
      }, submissionKey.current);
      form.reset();
      submissionKey.current = null;
      setStatus("ok");
      track("form_submitted", { form: "chat" });
    } catch {
      setStatus("error");
      track("form_failed", { form: "chat", reason: "transport" });
    }
  }

  return <div className="b4s-chat">
    {open && <section className="b4s-chat-panel" role="dialog" aria-modal="false" aria-labelledby={titleId}>
      <header><div><p>Booked4Seasons</p><h2 id={titleId}>How can we help?</h2></div><button type="button" className="b4s-chat-close" onClick={toggle} aria-label="Close Booked4Seasons chat">×</button></header>
      {status === "ok" ? <div className="b4s-chat-result" id={statusId} role="status"><h3>Message received</h3><p>Thank you. This does not confirm an appointment. Our team will review your message.</p><button type="button" className="button" onClick={() => { setStatus("idle"); setOpen(false); }}>Close</button></div> : <form onSubmit={submit} aria-describedby={statusId}>
        <label className="form-honeypot" aria-hidden="true">Leave this field blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label>Name<input name="name" autoComplete="name" required maxLength={120} /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
        <label>Mobile telephone number <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label>How can we help?<textarea name="message" required minLength={10} maxLength={2000} rows={4} /></label>
        <label className="b4s-chat-consent"><input name="smsConsent" type="checkbox" value="yes" /><span>{chatSmsDisclosure} See our <a href="https://booked4seasons.com/sms-terms" target="_blank" rel="noreferrer">SMS Terms</a> and <a href="https://booked4seasons.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>.</span></label>
        <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
        <p id={statusId} className={status === "error" ? "form-error" : "b4s-chat-note"} role="status">{status === "error" ? "Your message could not be delivered. Please try again or use our Contact page." : "SMS consent is optional. SMS sending remains disabled until the messaging campaign is approved."}</p>
      </form>}
    </section>}
    <button type="button" className="b4s-chat-launcher" onClick={toggle} aria-expanded={open} aria-label={open ? "Close Booked4Seasons chat" : "Open Booked4Seasons chat"}><span aria-hidden="true">{open ? "×" : "💬"}</span><strong>{open ? "Close" : "Chat"}</strong></button>
  </div>;
}
