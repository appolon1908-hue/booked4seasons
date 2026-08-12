import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL||"https://booked4seasons.com"; const routes=["","/services","/request-service","/how-it-works","/service-areas","/about","/contact","/faq","/become-a-pro","/privacy","/terms"]; return [...routes.map(url=>({url:`${base}${url}`,lastModified:new Date()})),...services.map(service=>({url:`${base}/services/${service.slug}`,lastModified:new Date()}))]; }
