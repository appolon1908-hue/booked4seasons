import { Suspense } from "react";
import { RequestForm } from "@/components/RequestForm";
export const metadata = { title: "Request Service" };
export default function Page(){return <><section className="page-hero"><div className="container narrow"><p className="eyebrow">Request service</p><h1>Tell us what you need.</h1><p className="lead">Share the basics and we’ll help coordinate the next step.</p></div></section><section className="section"><div className="container narrow"><Suspense fallback={<p>Loading form…</p>}><RequestForm kind="service" /></Suspense></div></section></>}
