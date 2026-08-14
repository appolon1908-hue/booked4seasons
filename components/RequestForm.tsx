"use client";

import { FormEvent, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitPublicForm, type PublicFormKind } from "@/lib/formApi";
import { policyVersion, providerAuthorization, requestableServices, smsDisclosure, usStates } from "@/lib/compliance";
import { track } from "@/lib/analytics";

const preferenceMap: Record<string, string> = { Email: "email", "Phone call": "phone", "Text message": "text" };

export function RequestForm({ kind }: { kind: PublicFormKind }) {
  const params = useSearchParams();
  const preset = params.get("service") || "";
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("We could not deliver your request. Your entries are still available above. Please review them and try again.");
  const startedAt = useRef(0);
  const trackedStart = useRef(false);
  const submissionKey = useRef<string | null>(null);
  function start() { if (!trackedStart.current) { trackedStart.current = true; startedAt.current = Date.now(); track("form_started", { form: kind }); } }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (status === "sending" || status === "ok") return;
    const form = event.currentTarget; const raw = Object.fromEntries(new FormData(form).entries());
    if (raw.website) return;
    if (kind === "service" && raw.contactPreference === "Text message" && raw.smsConsent !== "yes") {
      form.querySelector<HTMLInputElement>('input[name="smsConsent"]')?.focus();
      setErrorMessage("To use Text message as your contact preference, check the optional SMS consent box or choose Email or Phone call.");
      setStatus("error"); return;
    }
    if (!startedAt.current || Date.now() - startedAt.current < 1500) { setStatus("error"); return; }
    setStatus("sending"); submissionKey.current ||= crypto.randomUUID();
    const now = new Date();
    const common = { source_url: window.location.href, language: navigator.language, customer_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      transactional_contact_allowed: true, marketing_consent: false, sms_consent: raw.smsConsent === "yes", email_consent: false,
      consent_timestamp: now.toISOString(), consent_source: `web:${policyVersion}`, policy_version: policyVersion, company: "" };
    let payload: Record<string, unknown> & { kind: PublicFormKind };
    if (kind === "service") payload = { kind, ...common, name: `${raw.firstName} ${raw.lastName}`.trim(), email: raw.email, phone: raw.phone,
      service_slug: raw.service, service_description: raw.message, address_line1: raw.address, city: raw.city, state: raw.state, postal_code: raw.postalCode,
      requested_date: raw.preferredDate, requested_timing: raw.preferredTime, contact_preference: preferenceMap[String(raw.contactPreference)] || "email" };
    else if (kind === "contact") payload = { kind, ...common, name: `${raw.firstName} ${raw.lastName}`.trim(), email: raw.email, phone: raw.phone,
      category: "general", subject: "Website contact request", message: raw.message };
    else payload = { kind, ...common, business_name: raw.company, contact_name: `${raw.firstName} ${raw.lastName}`.trim(), email: raw.email, phone: raw.phone,
      service_categories: [String(raw.service)], city: raw.city || "Not supplied", state: raw.state || "TX", postal_code: raw.postalCode || "00000", notes: raw.message };
    try { await submitPublicForm(payload, submissionKey.current); form.reset(); submissionKey.current = null; setStatus("ok"); track("form_submitted", { form: kind }); }
    catch { setErrorMessage("We could not deliver your request. Your entries are still available above. Please review them and try again."); setStatus("error"); track("form_failed", { form: kind, reason: "transport" }); }
  }

  return <form className="request-form" onSubmit={submit} onFocusCapture={start} noValidate={false}>
    <label className="form-honeypot" aria-hidden="true">Leave this field blank<input name="website" tabIndex={-1} autoComplete="off" /></label>
    {kind === "service" && <><h2 className="form-title">Request Service</h2><p className="required-note" aria-label="Fields marked with an asterisk are required.">Fields marked <span aria-hidden="true">*</span> are required.</p></>}
    <div className="form-grid">
      <label>First name{kind === "service" && <span aria-hidden="true">*</span>}<input name="firstName" required maxLength={80} autoComplete="given-name" /></label>
      <label>Last name{kind === "service" && <span aria-hidden="true">*</span>}<input name="lastName" required maxLength={80} autoComplete="family-name" /></label>
      <label>Email address{kind === "service" && <span aria-hidden="true">*</span>}<input name="email" type="email" required autoComplete="email" /></label>
      <label>Mobile telephone number{kind === "service" && <span aria-hidden="true">*</span>}<input name="phone" type="tel" required minLength={7} maxLength={40} autoComplete="tel" />{kind === "service" && <small>Providing your mobile number does not enroll you in text messaging. SMS messages will be sent only if you select Text Message as your contact preference and check the optional SMS consent box below.</small>}</label>
      {kind !== "contact" && <label className="span-2">Service category{kind === "service" && <span aria-hidden="true">*</span>}<select name="service" defaultValue={preset} required><option value="">Choose a service</option>{requestableServices.map(([slug,name])=><option key={slug} value={slug}>{name}</option>)}</select></label>}
      {kind === "service" && <>
        <label className="span-2">Street address<span aria-hidden="true">*</span><input name="address" required minLength={3} maxLength={240} autoComplete="street-address" /></label>
        <label>City<span aria-hidden="true">*</span><input name="city" required minLength={2} maxLength={120} autoComplete="address-level2" /></label>
        <label>State<span aria-hidden="true">*</span><select name="state" required defaultValue=""><option value="">Choose a state</option>{usStates.map(([code,name])=><option key={code} value={code}>{name}</option>)}</select></label>
        <label>ZIP code<span aria-hidden="true">*</span><input name="postalCode" pattern="[0-9]{5}(-[0-9]{4})?" inputMode="numeric" required autoComplete="postal-code" /></label>
        <label>Preferred date<span aria-hidden="true">*</span><input name="preferredDate" type="date" required /></label>
        <label>Preferred time<span aria-hidden="true">*</span><select name="preferredTime" required defaultValue=""><option value="">Choose a time</option><option>7:00 AM–10:00 AM</option><option>10:00 AM–1:00 PM</option><option>1:00 PM–4:00 PM</option><option>4:00 PM–7:00 PM</option></select></label>
        <label className="span-2">Contact preference<span aria-hidden="true">*</span><select name="contactPreference" required><option value="Email">Email</option><option value="Phone call">Phone call</option><option value="Text message">Text message — requires optional SMS consent below</option></select></label>
      </>}
      {kind === "partner" && <><label className="span-2">Company name<input name="company" required autoComplete="organization" /></label><label>City<input name="city" required /></label><label>State<select name="state" required defaultValue=""><option value="">Choose a state</option>{usStates.map(([code,name])=><option key={code} value={code}>{name}</option>)}</select></label><label>ZIP code<input name="postalCode" required pattern="[0-9]{5}(-[0-9]{4})?" /></label></>}
      <label className="span-2">{kind === "partner" ? "Tell us about your company" : kind === "contact" ? "How can we help?" : <>Service description<span aria-hidden="true">*</span></>}<textarea name="message" minLength={kind === "contact" ? 10 : 5} maxLength={4000} rows={5} required /></label>
    </div>
    {kind === "service" && <>
      <section className="form-disclosure important-notice"><h3>Important: A request is not a confirmed appointment</h3><p>Submitting this form does not guarantee provider availability, assignment, pricing, or appointment confirmation. If service coverage or provider capacity is unavailable, your request will remain pending for manual dispatch. Booked4Seasons will notify you if an independent provider becomes available.</p></section>
      <section className="form-disclosure"><h3>Required service-request authorization</h3><label className="consent-check"><input name="providerAuthorization" type="checkbox" required /><span>{providerAuthorization}</span></label></section>
    </>}
    <section className="form-disclosure"><h3>Optional SMS consent</h3><label className="consent-check"><input name="smsConsent" type="checkbox" value="yes" /><span>{smsDisclosure} See our <a href="/sms-terms" target="_blank">SMS Terms</a> and <a href="/privacy" target="_blank">Privacy Policy</a>.</span></label></section>
    <section className="form-disclosure"><h3>Terms acknowledgement</h3><label className="consent-check"><input name="termsAcknowledgement" type="checkbox" required /><span>I agree to the <a href="/terms" target="_blank">Terms and Conditions</a> and acknowledge the <a href="/privacy" target="_blank">Privacy Policy</a>.</span></label></section>
    {kind === "service" && <section className="form-disclosure payment-notice"><h3>Payment and pricing notice</h3><p>No online payment is required or collected through this form. All service work is quote-required. The final scope, schedule, availability, and price are agreed upon with the selected independent service provider.</p></section>}
    <button className="button" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>{status === "sending" ? "Sending…" : kind === "partner" ? "Apply to become a provider" : kind === "contact" ? "Send message" : "Request service"}</button>
    <div aria-live="polite" role="status">{status === "ok" && <p className="form-success">{kind === "service" ? "Your service request has been received. This is not yet a confirmed appointment. Booked4Seasons will contact you after provider availability has been reviewed." : "Your message has been received."}</p>}{status === "error" && <p className="form-error">{errorMessage}</p>}</div>
  </form>;
}
