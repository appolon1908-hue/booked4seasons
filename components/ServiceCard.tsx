import Link from "next/link";
import type { Service } from "@/lib/services";
export function ServiceCard({service}:{service:Service}){return <article className="service-card"><p className="eyebrow">{service.category}</p><h3>{service.name}</h3><p>{service.summary}</p><div className="card-actions"><Link href={`/services/${service.slug}`}>Learn more</Link><Link href={`/request-service?service=${service.slug}`}>Request →</Link></div></article>}
