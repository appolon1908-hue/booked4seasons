import { ServicePage } from "@/components/ServicePage";
import { serviceBySlug } from "@/lib/services";
export const metadata = { title: serviceBySlug["landscaping"].name };
export default function Page(){ return <ServicePage service={serviceBySlug["landscaping"]} />; }
