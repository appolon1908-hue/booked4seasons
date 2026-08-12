import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/ServicePage";
import { serviceBySlug, services } from "@/lib/services";

export function generateStaticParams(){ return services.map(({slug})=>({slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const service=serviceBySlug[slug]; if(!service)return {}; const title=`${service.name} Services`; return {title,description:service.description,alternates:{canonical:`/services/${service.slug}`},openGraph:{title:`${title} | Booked4Seasons`,description:service.description,url:`/services/${service.slug}`,type:"website",images:[{url:`/images/services/${service.slug==="ev-charger-installation"?"ev-charger":service.slug==="construction"?"small-projects":service.slug}.webp`,alt:service.name}]}}; }
export default async function Page({params}:{params:Promise<{slug:string}>}){ const {slug}=await params; const service=serviceBySlug[slug]; if(!service)notFound(); return <ServicePage service={service}/>; }
