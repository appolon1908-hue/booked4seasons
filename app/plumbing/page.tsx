import { ServicePage } from "@/components/ServicePage";
import { serviceBySlug } from "@/lib/services";
export const metadata = { title: serviceBySlug["plumbing"].name };
export default function Page(){ return <ServicePage service={serviceBySlug["plumbing"]} />; }
