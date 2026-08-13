import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { RequestForm } from "@/components/RequestForm";

export const metadata={title:"Contact",description:"Contact Booked4Seasons for service coordination, support, billing, or business inquiries.",alternates:{canonical:"/contact"}};

export default function Page(){return <>
  <section className="page-hero"><div className="container page-hero-grid"><div><p className="eyebrow">Contact Booked4Seasons</p><h1>How can we help?</h1><p className="lead">Need service, have a coordination question, or want to work with us? Reach us directly or send a message.</p><div className="hero-actions"><a className="button button-primary" href="mailto:support@booked4seasons.com">Email support</a><a className="button button-secondary" href="tel:+17543341625">Call +1 (754) 334-1625</a></div></div><div className="page-hero-image"><Image src="/images/company/contact.webp" alt="Customer service coordinator helping with a home-service request" fill priority sizes="(max-width: 900px) 100vw, 45vw"/></div></div></section>
  <section className="section"><div className="container contact-grid"><div><h2>Choose the right path</h2><div className="contact-choice"><h3>Request a service</h3><p>Need work at your home, property, or vehicle? We help coordinate requests with independent providers.</p><Link href="/request-service">Request service →</Link></div><div className="contact-choice"><h3>Customer support</h3><p>For scheduling, communications, cancellation, refund, or dispute intake:</p><p><a href="mailto:support@booked4seasons.com">support@booked4seasons.com</a><br/><a href="tel:+17543341625">+1 (754) 334-1625</a></p><p><Link href="/refund-policy">Refund & return policy →</Link><br/><Link href="/cancellation-policy">Cancellation policy →</Link></p></div><div className="contact-choice"><h3>Become a professional</h3><p>Own or operate an independent local service business?</p><Link href="/become-a-pro">Apply to work with us →</Link></div></div><Suspense fallback={<div className="request-form" aria-busy="true">Loading form…</div>}><RequestForm kind="contact"/></Suspense></div></section>
</>}
