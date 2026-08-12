import { Suspense } from "react";
import { RequestForm } from "@/components/RequestForm";
export const metadata = { title: "Become a Service Provider" };
export default function Page(){return <><section className="page-hero"><div className="container narrow"><p className="eyebrow">Booked4Seasons partners</p><h1>Grow your service business with us.</h1><p className="lead">We’re building a network of local service companies and professionals across multiple categories.</p></div></section><section className="section"><div className="container contact-grid"><div><h2>Partner with Booked4Seasons</h2><p>Tell us about your company, the services you offer, and the areas you serve.</p></div><Suspense fallback={<p>Loading form…</p>}><RequestForm kind="partner" /></Suspense></div></section></>}
