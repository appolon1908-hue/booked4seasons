import Link from "next/link";
import { legal } from "@/lib/legal";
import { policyEffectiveDate, policyVersion } from "@/lib/compliance";

export function PolicyPage({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="section"><article className="container legal">
    <p className="eyebrow">Effective and last updated {policyEffectiveDate} · Version {policyVersion}</p>
    <h1>{title}</h1>
    {children}
    <h2>Contact</h2>
    <p>{legal.operator}<br/><a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a><br/><a href={legal.supportPhoneHref}>{legal.supportPhone}</a></p>
    <nav className="related-policies" aria-label="Related policies">
      <Link href="/terms">Terms</Link><Link href="/privacy">Privacy</Link><Link href="/sms-terms">SMS Terms</Link>
      <Link href="/communications-preferences">Communication preferences</Link><Link href="/cookies">Cookies</Link><Link href="/refund-cancellation">Refunds and cancellations</Link>
    </nav>
  </article></section>;
}
