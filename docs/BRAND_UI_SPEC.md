# Booked4Seasons Brand & UI Specification

Status: DESIGN DIRECTION — generated concept requires owner approval before being treated as final brand artwork.

## Brand

- Brand: Booked4Seasons
- Tagline: Home Services for Every Season
- Primary message: Whatever your property needs, get it booked.
- Domain: booked4seasons.com

## Approved Design Tokens (proposed)

| Token | Hex | Usage |
|---|---|---|
| Navy 900 | `#0D1B2A` | Header/footer, headings, premium dark surfaces |
| Blue 600 | `#1565C0` | Links, secondary actions, interactive accents |
| Green 500 | `#22C55E` | Primary CTA, success, seasonal brand accent |
| Amber 400 | `#FFB703` | Warm seasonal highlights |
| Cloud 50 | `#F5F7FA` | Page/section background |
| Slate 500 | `#6B7280` | Secondary copy, muted UI |
| White | `#FFFFFF` | Cards, inverse text, clean surfaces |

Typography direction: Poppins for headings and body UI, with system fallbacks.

## Logo Direction

Primary concept: a simple house/roof silhouette containing four seasonal tiles: leaf, sun, snowflake, and water/drop. Wordmark: BOOKED4SEASONS with the `4` highlighted in green. Do not put the logo on generated uniforms until final logo artwork is approved.

Required final logo exports:
- `public/images/brand/logo-primary.svg`
- `public/images/brand/logo-dark.svg`
- `public/images/brand/logo-mark.svg`
- `public/images/brand/favicon.svg`
- social/share PNG export

## Global Desktop Header

Left: Booked4Seasons logo.

Navigation:
1. Services (mega menu)
2. How It Works
3. Service Areas
4. For Professionals
5. About
6. Contact
7. Request Service — primary CTA

Services mega menu must group the canonical catalog under Home Comfort, Home & Property, Specialty, and Vehicle.

## Mobile Header

Logo left, accessible menu button right. Request Service must remain a high-priority action. Mobile menu expands the same information architecture without hiding service categories.

## Footer

Use navy background with logo/tagline plus columns for Services, Company, Help, and Contact. Do not publish invented phone numbers, addresses, ratings, review counts, licensing, insurance, customer counts, or social handles. Use verified company data only.

## Canonical Public Pages

1. `/` — Home
2. `/services` — All Services
3. `/services/hvac` — HVAC
4. `/services/plumbing` — Plumbing
5. `/services/electrical` — Electrical
6. `/services/water-heater` — Water Heater
7. `/services/ev-charger-installation` — EV Charger Installation
8. `/services/cleaning` — Cleaning
9. `/services/handyman` — Handyman
10. `/services/landscaping` — Landscaping
11. `/services/lawn-care` — Lawn Care
12. `/services/pest-control` — Pest Control
13. `/services/pool-service` — Pool Service
14. `/services/junk-removal` — Junk Removal
15. `/services/water-damage` — Water Damage
16. `/services/property-maintenance` — Property Maintenance
17. `/services/construction` — Small Projects
18. `/services/mobile-car-wash` — Mobile Car Wash
19. `/services/mobile-detailing` — Mobile Detailing
20. `/request-service` — Request Service
21. `/contact` — Contact
22. `/how-it-works` — How It Works
23. `/service-areas` — Service Areas
24. `/about` — About
25. `/faq` — FAQ
26. `/become-a-pro` — Become a Pro
27. `/privacy` — Privacy
28. `/terms` — Terms

Do not substitute unrelated services such as roofing, painting, appliance repair, garage doors, smart-home services, gift cards, or reviews into the canonical 28-page mission unless the owner explicitly expands the catalog.

## Shared Service Page Header/Hero

Every service page should use one shared data-driven template:
- breadcrumb
- service title
- concise value proposition
- primary Request Service CTA
- service-specific hero image
- popular services
- why Booked4Seasons
- how it works
- service information
- FAQ
- service-area CTA
- final Request Service CTA

## Homepage Sections

1. Header
2. Hero
3. Service search/selection
4. Popular Services
5. How It Works
6. Browse by Category
7. Why Booked4Seasons
8. Seasonal Services
9. Service Area
10. For Professionals
11. Final CTA
12. Footer

Hero image should keep the primary subject on the right 40–50% and reserve the left 45–55% for HTML headline and CTAs.

## Canonical Image Manifest

### Services
- `public/images/services/hvac.webp`
- `public/images/services/plumbing.webp`
- `public/images/services/electrical.webp`
- `public/images/services/water-heater.webp`
- `public/images/services/ev-charger.webp`
- `public/images/services/cleaning.webp`
- `public/images/services/handyman.webp`
- `public/images/services/landscaping.webp`
- `public/images/services/lawn-care.webp`
- `public/images/services/pest-control.webp`
- `public/images/services/pool-service.webp`
- `public/images/services/junk-removal.webp`
- `public/images/services/water-damage.webp`
- `public/images/services/property-maintenance.webp`
- `public/images/services/small-projects.webp`
- `public/images/services/mobile-car-wash.webp`
- `public/images/services/mobile-detailing.webp`

### Home/supporting
- `public/images/home/homepage-hero.webp`
- `public/images/home/seasonal-services.webp`
- `public/images/home/why-booked4seasons.webp`
- `public/images/company/request-service.webp`
- `public/images/company/contact.webp`
- `public/images/how-it-works/request.webp`
- `public/images/how-it-works/coordinate.webp`
- `public/images/how-it-works/service.webp`
- `public/images/company/about.webp`
- `public/images/company/become-a-pro.webp`
- `public/images/service-areas/map.webp`

Target launch library: approximately 28 images.

## Photography Rules

Natural daylight, premium but realistic residential environments, modern equipment, clean composition, diverse professionals, navy/charcoal neutral workwear, no competitor logos, no text baked into photographs, no impossible tools/hands, no fake corporate handshake imagery, and no frightening damage/pest imagery.

Master photography should be at least 2400×1600 (3:2) when practical and support 1920×1080 desktop hero, 1600×900 sections, 1200×800 service cards, 1000×1000 mobile cards, and 1080×1350 mobile hero crops. Prefer AVIF where practical with WebP fallback and use Next.js image optimization.

## Design Reference

The generated visual board is a direction reference, not a literal page inventory. It demonstrates the intended navy/blue/green/amber palette, four-season house mark, clean white service pages, shared headers, cards, mobile navigation, and dark footer. The canonical route list and service manifest in this file override any extra labels that appear in generated concept artwork.

## Implementation Rule

Keep navigation, service catalog, route metadata, image paths, headers, CTA labels, and footer groups in shared configuration/data so pages can be switched or expanded without duplicating layouts. All 17 service pages must consume one reusable service-page architecture.
