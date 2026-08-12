import { ServicePage } from "@/components/ServicePage";
import { serviceBySlug } from "@/lib/services";
export const metadata = { title: serviceBySlug["junk-removal"].name };
export default function Page(){ return <ServicePage service={serviceBySlug["junk-removal"]} />; }
