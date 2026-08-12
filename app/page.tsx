import Link from "next/link";
import { categories, services, servicesByCategory } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";

const popularSlugs = ["hvac", "cleaning", "plumbing", "junk-removal", "handyman", "landscaping", "electrical", "mobile-car-wash"];
const popular = popularSlugs.map((slug) => services.find((service) => service.slug === slug)!).filter(Boolean);

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Home, property & vehicle services</p>
          <h1>Whatever your property needs, <em>get it booked.</em></h1>
          <p className="lead">Heating. Cooling. Cleaning. Plumbing. Landscaping and more. Start one simple request with Booked4Seasons and we’ll help coordinate the right next step.</p>
          <div className="hero-actions"><Link className="button" href="/request-service">Request service</Link><Link className="button button-secondary" href="/services">Explore services</Link></div>
          <div className="trust-row"><span>No account required</span><span>Multiple service categories</span><span>Simple request process</span></div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel-title"><p className="eyebrow">What do you need help with?</p><span>Choose a popular service</span></div>
          {popular.slice(0,6).map(service=><Link key={service.slug} href={`/services/${service.slug}`}><span><strong>{service.name}</strong><small>{service.eyebrow}</small></span><b>→</b></Link>)}
          <Link className="hero-panel-all" href="/services"><strong>View all {services.length} services</strong><b>→</b></Link>
        </div>
      </div>
    </section>
    <section className="service-strip"><div className="container service-strip-inner">{categories.map(category=><Link key={category.name} href={`/services#${category.name.toLowerCase().replaceAll(" ","-").replace("&-","")}`}><strong>{category.name}</strong><span>{servicesByCategory[category.name].length} services</span></Link>)}</div></section>
    <section className="section">
      <div className="container"><div className="section-heading"><div><p className="eyebrow">Popular services</p><h2>One place for the jobs that keep life moving.</h2></div><Link href="/services">See every service →</Link></div><div className="service-grid">{popular.map(service=><ServiceCard key={service.slug} service={service}/>)}</div></div>
    </section>
    <section className="section section-dark"><div className="container"><div className="section-heading"><div><p className="eyebrow">How Booked4Seasons works</p><h2>Request it. We help coordinate it.</h2></div></div><div className="steps"><div><span>1</span><h3>Choose a service</h3><p>Tell us the type of work you need.</p></div><div><span>2</span><h3>Share the details</h3><p>Add your location, timing, and a description of the job.</p></div><div><span>3</span><h3>Get the next step</h3><p>We confirm coverage and coordinate your request.</p></div></div></div></section>
    <section className="section section-soft"><div className="container split"><div><p className="eyebrow">Built around convenience</p><h2>Stop starting a new search for every property need.</h2></div><div className="benefit-grid"><div><strong>Multiple service categories</strong><p>From home systems to outdoor care and mobile vehicle service.</p></div><div><strong>Simple guest requests</strong><p>Start without creating an account.</p></div><div><strong>Local service coordination</strong><p>Coverage is confirmed based on your location and requested service.</p></div><div><strong>One recognizable brand</strong><p>Come back to Booked4Seasons when the next job comes up.</p></div></div></div></section>
    <section className="section"><div className="container cta"><div><p className="eyebrow">Ready when you are</p><h2>What needs to get done?</h2><p className="lead">Send a service request and tell us the basics.</p></div><Link className="button" href="/request-service">Request service</Link></div></section>
  </>;
}
