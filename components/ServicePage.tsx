import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceImage, serviceImageAlt, services, type Service } from "@/lib/services";
import { legal } from "@/lib/legal";

const faqs = (service: Service) => [
  { q: `What kinds of ${service.name.toLowerCase()} requests can I submit?`, a: `${service.bullets.slice(0, 4).join(", ")}, and related requests can be described in the service form.` },
  { q: "Is service available in my area?", a: "Coverage varies by service and location. Share the service address and Booked4Seasons will confirm the appropriate next step." },
  { q: "Do I need an account to request service?", a: "No. You can send an initial service request without creating an account." },
];

export function ServicePage({service}:{service:Service}) {
  const related=services.filter((item)=>item.category===service.category&&item.slug!==service.slug).slice(0,3);
  const questions=faqs(service);
  const schemas=[
    {"@context":"https://schema.org","@type":"Service",name:`${service.name} Service Coordination`,description:service.description,url:`https://booked4seasons.com/services/${service.slug}`,broker:{"@type":"Organization",name:"Booked4Seasons",legalName:legal.operator,url:"https://booked4seasons.com"}},
    {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://booked4seasons.com"},{"@type":"ListItem",position:2,name:"Services",item:"https://booked4seasons.com/services"},{"@type":"ListItem",position:3,name:service.name,item:`https://booked4seasons.com/services/${service.slug}`}]},
    {"@context":"https://schema.org","@type":"FAQPage",mainEntity:questions.map(({q,a})=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))},
  ];
  return <>
    {schemas.map((schema,index)=><script key={index} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>)}
    <section className="service-hero"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span aria-current="page">{service.name}</span></nav><div className="service-hero-grid"><div><p className="eyebrow">{service.category} · {service.eyebrow}</p><h1>{service.name} service, made simpler.</h1><p className="lead">{service.description}</p><div className="hero-actions"><Link className="button" href={`/request-service?service=${service.slug}`}>Request {service.name}</Link><Link className="button button-secondary" href="/services">Explore services</Link></div><div className="trust-row"><span>No account required</span><span>Coverage confirmed by location</span></div></div><div className="service-hero-image"><Image src={serviceImage(service)} alt={serviceImageAlt(service)} fill priority sizes="(max-width: 900px) 100vw, 50vw"/></div></div></div></section>
    <section className="section"><div className="container split"><div><p className="eyebrow">Popular requests</p><h2>Tell us what needs attention.</h2><p className="lead">Share the details you know. Booked4Seasons will use them to coordinate the appropriate next step.</p></div><ul className="feature-list">{service.bullets.map(item=><li key={item}>{item}</li>)}</ul></div></section>
    <section className="section section-soft"><div className="container"><div className="section-heading"><div><p className="eyebrow">Why Booked4Seasons</p><h2>One familiar place to start.</h2></div></div><div className="benefit-grid benefit-grid-three"><div><strong>Simple requests</strong><p>Describe the job, location, and timing in one clear form.</p></div><div><strong>Multiple service categories</strong><p>Return for home, property, specialty, and vehicle needs.</p></div><div><strong>Local coordination</strong><p>Availability is confirmed for the requested service and location.</p></div></div></div></section>
    <section className="section section-dark"><div className="container"><p className="eyebrow">How it works</p><h2>A clear path from request to service.</h2><div className="steps"><div><span>1</span><h3>Tell us what you need</h3><p>Choose {service.name} and share useful details.</p></div><div><span>2</span><h3>Add location and timing</h3><p>Provide the address and preferred service window.</p></div><div><span>3</span><h3>We coordinate next steps</h3><p>Coverage and service details are confirmed with you.</p></div></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><p className="eyebrow">More {service.category}</p><h2>Related services</h2></div></div><div className="service-grid service-grid-three">{related.map(item=><ServiceCard key={item.slug} service={item}/>)}</div></div></section>
    <section className="section section-soft"><div className="container split"><div><p className="eyebrow">Service information</p><h2>Helpful details before you request.</h2><p>Exact scope, availability, and next steps depend on the property, requested work, and local coverage. Photos and a clear description can help us understand the request.</p><p><strong>{legal.marketplaceRule}</strong> The provider is responsible for the estimate, pricing, qualifications, permits, insurance, workmanship, safety, and service performance.</p><Link href="/service-areas">How service areas work →</Link></div><div className="faq-list">{questions.map(({q,a})=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    <section className="section"><div className="container cta"><div><p className="eyebrow">Need {service.name}?</p><h2>Whatever needs attention, get it booked.</h2><p>Send the basics. No account required.</p></div><Link className="button" href={`/request-service?service=${service.slug}`}>Request service</Link></div></section>
  </>;
}
