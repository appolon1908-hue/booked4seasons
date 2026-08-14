import Image from "next/image";
import Link from "next/link";
import { servicesByCategory } from "@/lib/services";
import { legal } from "@/lib/legal";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid footer-grid-wide">
      <div>
        <Link className="brand footer-brand brand-logo" href="/" aria-label="Booked4Seasons home"><Image src="/images/brand/logo-dark.svg" alt="Booked4Seasons" width={270} height={48}/></Link>
        <p>Home services for every season.</p><p>{legal.platformDescription}</p>
        <p><strong>{legal.operatorLine}</strong><br/>20633 Longenbaugh Rd<br/>Cypress, TX 77433<br/><a href={`mailto:${legal.supportEmail}`}>{legal.supportEmail}</a><br/><a href={legal.supportPhoneHref}>{legal.supportPhone}</a></p>
      </div>
      <div><h3>Home Comfort</h3>{servicesByCategory["Home Comfort"].map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}</div>
      <div><h3>Home & Property</h3>{servicesByCategory["Home & Property"].map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}</div>
      <div><h3>Specialty & Vehicle</h3>{[...servicesByCategory.Specialty, ...servicesByCategory.Vehicle].map(service => <Link key={service.slug} href={`/services/${service.slug}`}>{service.name}</Link>)}</div>
      <div><h3>Company</h3><Link href="/how-it-works">How it works</Link><Link href="/service-areas">Service areas</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link><Link href="/become-a-pro">For professionals</Link><Link className="footer-cta" href="/request-service">Request service →</Link></div>
    </div>
    <div className="container footer-disclosure"><p>{legal.marketplaceRule}</p></div>
    <div className="container copyright"><span>© 2026 {legal.operator}.</span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/sms-terms">SMS Terms</Link><Link href="/cookies">Cookies</Link><Link href="/communications-preferences">Communication preferences</Link><Link href="/privacy-choices">Privacy choices</Link><Link href="/refund-cancellation">Refunds & cancellations</Link><Link href="/service-fulfillment">Service fulfillment</Link><Link href="/provider-standards">Provider standards</Link><Link href="/accessibility">Accessibility</Link><CookiePreferencesButton className="footer-link-button"/></div>
  </footer>;
}
