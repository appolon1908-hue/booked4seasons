export type ServiceCategory = "Home Comfort" | "Home & Property" | "Specialty" | "Vehicle";

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  { slug: "hvac", name: "HVAC", eyebrow: "Heating & cooling", category: "Home Comfort", summary: "Heating, cooling, diagnostics, repair, and maintenance.", description: "Keep your property comfortable through every season with convenient heating and cooling service requests.", bullets: ["AC diagnostics", "AC repair", "Preventive maintenance", "Heating service", "Thermostat service", "Installation requests"] },
  { slug: "plumbing", name: "Plumbing", eyebrow: "Leaks, drains & fixtures", category: "Home Comfort", summary: "Repairs, fixtures, drains, water lines, and troubleshooting.", description: "Request local plumbing help for common repairs, replacements, drainage issues, and diagnostics.", bullets: ["Leak diagnosis", "Fixture repair", "Faucet replacement", "Drain service", "Toilet service", "General plumbing"] },
  { slug: "electrical", name: "Electrical", eyebrow: "Power & fixtures", category: "Home Comfort", summary: "Troubleshooting, fixtures, outlets, panels, and installations.", description: "Request qualified electrical service for repairs, replacements, troubleshooting, and common installations.", bullets: ["Electrical diagnostics", "Outlet and switch service", "Light fixtures", "Ceiling fans", "Breaker issues", "Installation requests"] },
  { slug: "water-heater", name: "Water Heater", eyebrow: "Hot water service", category: "Home Comfort", summary: "Water-heater diagnostics, repair, replacement, and maintenance.", description: "Get help when your hot water is unreliable, your unit is leaking, or replacement may be needed.", bullets: ["No-hot-water diagnosis", "Tank water heaters", "Tankless units", "Leak inspection", "Maintenance", "Replacement requests"] },
  { slug: "ev-charger-installation", name: "EV Charger Installation", eyebrow: "Charge at home", category: "Home Comfort", summary: "Home and property EV charging installation requests.", description: "Request an evaluation and installation for a home or commercial electric-vehicle charging setup.", bullets: ["Site evaluation", "Level 2 charger installs", "Electrical capacity review", "Dedicated circuits", "Charger replacement", "Commercial requests"] },
  { slug: "cleaning", name: "Cleaning", eyebrow: "Home & commercial", category: "Home & Property", summary: "One-time, recurring, residential, and commercial cleaning.", description: "Request dependable cleaning for homes, offices, move-ins, move-outs, and routine upkeep.", bullets: ["Home cleaning", "Office cleaning", "Deep cleaning", "Move-in / move-out", "Recurring service", "Custom cleaning requests"] },
  { slug: "handyman", name: "Handyman", eyebrow: "Repairs & upkeep", category: "Home & Property", summary: "Everyday repairs, installations, assembly, and property maintenance.", description: "Get help with the small and medium jobs that keep your property working and looking right.", bullets: ["Minor repairs", "Fixture installation", "Furniture assembly", "Door and hardware work", "Wall mounting", "General maintenance"] },
  { slug: "landscaping", name: "Landscaping", eyebrow: "Outdoor care", category: "Home & Property", summary: "Landscape cleanup, trimming, beds, and property maintenance.", description: "Keep outdoor spaces clean and maintained with flexible landscaping and yard-service requests.", bullets: ["Yard cleanup", "Trimming", "Planting requests", "Mulch and beds", "Seasonal cleanup", "General property upkeep"] },
  { slug: "lawn-care", name: "Lawn Care", eyebrow: "Routine outdoor upkeep", category: "Home & Property", summary: "Mowing, edging, seasonal cleanup, and routine lawn service.", description: "Request recurring or one-time lawn care for residential and commercial properties.", bullets: ["Lawn mowing", "Edging", "Leaf cleanup", "Seasonal service", "Recurring care", "Property cleanup"] },
  { slug: "pest-control", name: "Pest Control", eyebrow: "Protect your property", category: "Home & Property", summary: "General pest-control inspections and treatment requests.", description: "Request help identifying and addressing common household and property pest problems.", bullets: ["General pest inspection", "Ants and roaches", "Rodent concerns", "Exterior treatment", "Recurring pest service", "Commercial requests"] },
  { slug: "pool-service", name: "Pool Service", eyebrow: "Pool care", category: "Home & Property", summary: "Cleaning, maintenance, equipment checks, and seasonal pool care.", description: "Keep your pool ready with service requests for routine care, cleaning, and common equipment concerns.", bullets: ["Pool cleaning", "Water checks", "Filter service", "Equipment inspection", "Seasonal opening/closing", "Recurring service"] },
  { slug: "junk-removal", name: "Junk Removal", eyebrow: "Clear the clutter", category: "Specialty", summary: "Furniture, appliances, household junk, and property cleanup.", description: "Tell us what needs to go and where it is. We’ll help coordinate the right removal service.", bullets: ["Furniture removal", "Appliance removal", "Garage cleanup", "Property cleanouts", "Yard debris", "General junk hauling"] },
  { slug: "water-damage", name: "Water Damage", eyebrow: "Restoration requests", category: "Specialty", summary: "Water-damage response, cleanup, drying, and restoration coordination.", description: "Request help after leaks, flooding, or other water events affecting your home or property.", bullets: ["Water extraction", "Drying requests", "Damage assessment", "Moisture concerns", "Cleanup coordination", "Restoration requests"] },
  { slug: "property-maintenance", name: "Property Maintenance", eyebrow: "Ongoing property care", category: "Specialty", summary: "Flexible maintenance support for homes, rentals, and commercial properties.", description: "Coordinate recurring or one-time upkeep across multiple maintenance needs through one request.", bullets: ["Routine inspections", "Turnover maintenance", "Minor repairs", "Exterior upkeep", "Rental property support", "Custom maintenance plans"] },
  { slug: "construction", name: "Small Projects", eyebrow: "Improvements & repairs", category: "Specialty", summary: "Small construction, repair, installation, and improvement requests.", description: "Tell us about the improvement or repair project and we’ll help route the request appropriately.", bullets: ["Small renovations", "Repair projects", "Installations", "Drywall and finish work", "Exterior projects", "Custom project requests"] },
  { slug: "mobile-car-wash", name: "Mobile Car Wash", eyebrow: "We come to you", category: "Vehicle", summary: "Convenient vehicle washing at your home, office, or location.", description: "Request mobile vehicle care at home, work, or another convenient service location.", bullets: ["Exterior wash", "Interior cleaning", "Wash and vacuum", "Fleet requests", "SUV / truck service", "Recurring vehicle care"] },
  { slug: "mobile-detailing", name: "Mobile Detailing", eyebrow: "Detailed vehicle care", category: "Vehicle", summary: "Interior and exterior detailing brought to your location.", description: "Request deeper mobile vehicle care with convenient detailing at home, work, or another approved location.", bullets: ["Interior detail", "Exterior detail", "Full detail", "Seat and carpet care", "SUV / truck detailing", "Fleet detailing"] }
];

export const categories: { name: ServiceCategory; description: string }[] = [
  { name: "Home Comfort", description: "Heating, cooling, plumbing, electrical, and essential home systems." },
  { name: "Home & Property", description: "Cleaning, lawn, landscaping, pest, pool, and everyday upkeep." },
  { name: "Specialty", description: "Junk removal, water damage, property maintenance, and project work." },
  { name: "Vehicle", description: "Mobile washing and detailing that comes to your location." }
];

export const servicesByCategory = Object.fromEntries(
  categories.map((category) => [category.name, services.filter((service) => service.category === category.name)])
) as Record<ServiceCategory, Service[]>;

export const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<string, Service>;
