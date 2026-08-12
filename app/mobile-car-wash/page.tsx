import { ServicePage } from "@/components/ServicePage";
import { serviceBySlug } from "@/lib/services";
export const metadata = { title: serviceBySlug["mobile-car-wash"].name };
export default function Page(){ return <ServicePage service={serviceBySlug["mobile-car-wash"]} />; }
