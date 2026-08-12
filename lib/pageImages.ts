export type ImageSlot = {
  src: string;
  alt: string;
  placement: string;
  priority?: boolean;
};

export const pageImages: Record<string, ImageSlot[]> = {
  "/": [
    {
      src: "/images/home/homepage-hero.webp",
      alt: "Professional home service technician at a well-maintained residential property",
      placement: "homepage hero",
      priority: true,
    },
    {
      src: "/images/home/seasonal-services.webp",
      alt: "Residential property care represented across changing seasons",
      placement: "seasonal services section",
    },
    {
      src: "/images/home/why-booked4seasons.webp",
      alt: "Well-cared-for home representing convenient local property services",
      placement: "why Booked4Seasons section",
    },
  ],
  "/services": [],
  "/services/hvac": [{ src: "/images/services/hvac.webp", alt: "Professional HVAC technician servicing residential air-conditioning equipment", placement: "service hero and service card", priority: true }],
  "/services/plumbing": [{ src: "/images/services/plumbing.webp", alt: "Professional plumber working beneath a modern residential sink", placement: "service hero and service card", priority: true }],
  "/services/electrical": [{ src: "/images/services/electrical.webp", alt: "Professional electrician safely servicing residential electrical equipment", placement: "service hero and service card", priority: true }],
  "/services/water-heater": [{ src: "/images/services/water-heater.webp", alt: "Technician inspecting a clean modern residential water heater", placement: "service hero and service card", priority: true }],
  "/services/ev-charger-installation": [{ src: "/images/services/ev-charger.webp", alt: "Professional installer servicing a residential Level 2 EV charger", placement: "service hero and service card", priority: true }],
  "/services/cleaning": [{ src: "/images/services/cleaning.webp", alt: "Professional residential cleaner working inside a bright modern home", placement: "service hero and service card", priority: true }],
  "/services/handyman": [{ src: "/images/services/handyman.webp", alt: "Professional handyman completing a small home repair", placement: "service hero and service card", priority: true }],
  "/services/landscaping": [{ src: "/images/services/landscaping.webp", alt: "Professional landscaper maintaining an attractive residential property", placement: "service hero and service card", priority: true }],
  "/services/lawn-care": [{ src: "/images/services/lawn-care.webp", alt: "Professional providing lawn care at a clean residential property", placement: "service hero and service card", priority: true }],
  "/services/pest-control": [{ src: "/images/services/pest-control.webp", alt: "Professional pest-control technician inspecting a residential property", placement: "service hero and service card", priority: true }],
  "/services/pool-service": [{ src: "/images/services/pool-service.webp", alt: "Pool service professional maintaining a clean residential swimming pool", placement: "service hero and service card", priority: true }],
  "/services/junk-removal": [{ src: "/images/services/junk-removal.webp", alt: "Professional crew safely removing household items from a property", placement: "service hero and service card", priority: true }],
  "/services/water-damage": [{ src: "/images/services/water-damage.webp", alt: "Restoration professional using drying and moisture equipment in a residential property", placement: "service hero and service card", priority: true }],
  "/services/property-maintenance": [{ src: "/images/services/property-maintenance.webp", alt: "Professional inspecting and maintaining a well-kept residential property", placement: "service hero and service card", priority: true }],
  "/services/construction": [{ src: "/images/services/small-projects.webp", alt: "Professional completing a small residential improvement project", placement: "service hero and service card", priority: true }],
  "/services/mobile-car-wash": [{ src: "/images/services/mobile-car-wash.webp", alt: "Professional washing a vehicle at a customer location", placement: "service hero and service card", priority: true }],
  "/services/mobile-detailing": [{ src: "/images/services/mobile-detailing.webp", alt: "Professional detailing a vehicle at a customer location", placement: "service hero and service card", priority: true }],
  "/request-service": [{ src: "/images/company/request-service.webp", alt: "Friendly service professional using a phone to coordinate a customer request", placement: "right-side hero or supporting panel" }],
  "/contact": [{ src: "/images/company/contact.webp", alt: "Friendly service coordinator ready to help a customer", placement: "contact hero or support block" }],
  "/how-it-works": [
    { src: "/images/how-it-works/request.webp", alt: "Customer submitting a home service request", placement: "step 1" },
    { src: "/images/how-it-works/coordinate.webp", alt: "Service coordinator organizing the appropriate professional", placement: "step 2" },
    { src: "/images/how-it-works/service.webp", alt: "Professional completing a requested home service", placement: "step 3" },
  ],
  "/service-areas": [{ src: "/images/service-areas/map.webp", alt: "Service area map graphic with location pins and ZIP search concept", placement: "main service-area visual" }],
  "/about": [{ src: "/images/company/about.webp", alt: "Well-cared-for residential property representing Booked4Seasons", placement: "about hero" }],
  "/faq": [],
  "/become-a-pro": [{ src: "/images/company/become-a-pro.webp", alt: "Diverse group of professional home and property service providers", placement: "become-a-pro hero" }],
  "/privacy": [],
  "/terms": [],
};

export const serviceDirectoryImagePaths = [
  "/images/services/hvac.webp",
  "/images/services/plumbing.webp",
  "/images/services/electrical.webp",
  "/images/services/water-heater.webp",
  "/images/services/ev-charger.webp",
  "/images/services/cleaning.webp",
  "/images/services/handyman.webp",
  "/images/services/landscaping.webp",
  "/images/services/lawn-care.webp",
  "/images/services/pest-control.webp",
  "/images/services/pool-service.webp",
  "/images/services/junk-removal.webp",
  "/images/services/water-damage.webp",
  "/images/services/property-maintenance.webp",
  "/images/services/small-projects.webp",
  "/images/services/mobile-car-wash.webp",
  "/images/services/mobile-detailing.webp",
] as const;
