# Booked4Seasons — Image Placement Manifest

This file is the canonical handoff for which image goes on which page, where it is placed, and how it should behave responsively.

## Global Rules

- Use Next.js `Image` for all photographic assets.
- Do not bake text into photography.
- Major hero images: subject generally on right 40–50%; preserve left 45–55% negative space for HTML headline/CTA.
- Service-card images use a consistent 3:2 crop.
- Mobile crops must preserve faces, tools, equipment, and service context.
- Priority-load only the homepage hero and the primary service hero visible above the fold.
- Lazy-load below-the-fold photography.
- Use descriptive alt text.
- No third-party remote production images.

## Brand Assets

| Asset | Path | Placement |
|---|---|---|
| Primary logo | `/images/brand/logo-primary.svg` | Desktop header, light backgrounds |
| Dark/inverse logo | `/images/brand/logo-dark.svg` | Footer and dark surfaces |
| Logo mark | `/images/brand/logo-mark.svg` | Compact mobile/header contexts |
| Favicon | `/images/brand/favicon.svg` | Browser/app favicon |

## Page-by-Page Placement

| # | Route | Primary image | Placement | Notes |
|---|---|---|---|---|
| 01 | `/` | `/images/home/homepage-hero.webp` | Homepage hero | Modern cared-for home, technician/service vehicle; subject right, copy left |
| 01 | `/` | `/images/home/seasonal-services.webp` | Seasonal-services section | Visual treatment representing year-round service |
| 01 | `/` | `/images/home/why-booked4seasons.webp` | Why Booked4Seasons section | Trustworthy local-service/property lifestyle image |
| 02 | `/services` | Reuse service images | Service-card grid | No separate hero required |
| 03 | `/services/hvac` | `/images/services/hvac.webp` | Service hero + directory card | HVAC technician servicing residential AC system |
| 04 | `/services/plumbing` | `/images/services/plumbing.webp` | Service hero + directory card | Plumber beneath modern kitchen/bathroom sink |
| 05 | `/services/electrical` | `/images/services/electrical.webp` | Service hero + directory card | Electrician at safe residential panel/fixture |
| 06 | `/services/water-heater` | `/images/services/water-heater.webp` | Service hero + directory card | Clean modern water-heater installation |
| 07 | `/services/ev-charger-installation` | `/images/services/ev-charger.webp` | Service hero + directory card | Level 2 residential EV charger near garage/driveway |
| 08 | `/services/cleaning` | `/images/services/cleaning.webp` | Service hero + directory card | Professional cleaner in bright modern home |
| 09 | `/services/handyman` | `/images/services/handyman.webp` | Service hero + directory card | Small repair/installation such as fixture, door, cabinet |
| 10 | `/services/landscaping` | `/images/services/landscaping.webp` | Service hero + directory card | Attractive residential landscaping work |
| 11 | `/services/lawn-care` | `/images/services/lawn-care.webp` | Service hero + directory card | Mowing/edging a clean residential lawn |
| 12 | `/services/pest-control` | `/images/services/pest-control.webp` | Service hero + directory card | Technician inspecting property; no disturbing insect closeups |
| 13 | `/services/pool-service` | `/images/services/pool-service.webp` | Service hero + directory card | Pool professional servicing clean residential pool |
| 14 | `/services/junk-removal` | `/images/services/junk-removal.webp` | Service hero + directory card | Crew safely removing furniture/boxes/household junk |
| 15 | `/services/water-damage` | `/images/services/water-damage.webp` | Service hero + directory card | Restoration professional using drying/moisture equipment; non-catastrophic imagery |
| 16 | `/services/property-maintenance` | `/images/services/property-maintenance.webp` | Service hero + directory card | Professional inspecting/maintaining well-kept residential/rental property |
| 17 | `/services/construction` | `/images/services/small-projects.webp` | Service hero + directory card | Small residential project/renovation; avoid massive commercial-construction implication |
| 18 | `/services/mobile-car-wash` | `/images/services/mobile-car-wash.webp` | Service hero + directory card | Professional washing realistic premium vehicle at customer location |
| 19 | `/services/mobile-detailing` | `/images/services/mobile-detailing.webp` | Service hero + directory card | Mobile detailing at customer location |
| 20 | `/request-service` | `/images/company/request-service.webp` | Right-side/secondary hero panel | Friendly service professional with phone/tablet |
| 21 | `/contact` | `/images/company/contact.webp` | Contact hero/support block | Service coordinator or friendly service professional |
| 22 | `/how-it-works` | `/images/how-it-works/request.webp` | Step 1 | Customer submitting/requesting service |
| 22 | `/how-it-works` | `/images/how-it-works/coordinate.webp` | Step 2 | Coordinator matching/organizing service |
| 22 | `/how-it-works` | `/images/how-it-works/service.webp` | Step 3 | Professional completing service |
| 23 | `/service-areas` | `/images/service-areas/map.webp` | Main visual | Abstract/local map, pins, ZIP-search treatment; no fake service-boundary claims |
| 24 | `/about` | `/images/company/about.webp` | About hero | Cared-for property/home lifestyle visual |
| 25 | `/faq` | None required | Typography/accordion | Keep page lightweight |
| 26 | `/become-a-pro` | `/images/company/become-a-pro.webp` | Become-a-Pro hero | Diverse group of trades/service professionals |
| 27 | `/privacy` | None | Legal layout | No dedicated image |
| 28 | `/terms` | None | Legal layout | No dedicated image |

## Shared Header

Desktop order:

1. Booked4Seasons logo
2. Services mega menu
3. How It Works
4. Service Areas
5. For Professionals
6. About
7. Contact
8. Request Service CTA

Mobile:
- compact logo/mark left
- accessible menu button right
- Request Service remains high-priority
- collapsible service categories mirror desktop information architecture

## Shared Footer

- Brand/logo and tagline
- Services links grouped by canonical category
- Company links
- Help links
- Verified contact information only
- No fabricated customer count, ratings, licenses, insurance claims, phone, address, or social profiles

## Canonical Service Categories

### Home Comfort
HVAC, Plumbing, Electrical, Water Heater, EV Charger Installation

### Home & Property
Cleaning, Handyman, Landscaping, Lawn Care, Pest Control, Pool Service

### Specialty
Junk Removal, Water Damage, Property Maintenance, Small Projects

### Vehicle
Mobile Car Wash, Mobile Detailing

## Responsive Behavior

### Desktop — 1440×900
- Hero photography may use 16:9 or wide 3:2 crop.
- 3–4 service cards per row depending on available width.

### Tablet — 768×1024
- 2 service cards per row.
- Hero text and image may stack when needed.

### Mobile — 390×844
- 1 card per row by default.
- Never crop out service subject.
- Hero copy must remain HTML and not overlap busy image regions.

## Image QA Gate

Before marking any asset integrated:

- filename matches manifest
- path matches manifest
- image renders without broken reference
- desktop crop passes
- tablet crop passes
- mobile crop passes
- alt text is descriptive
- no competitor logo appears
- no fake Booked4Seasons uniform/logo appears unless approved final brand asset is used
- no text is baked into photography
- file size is web-appropriate
- Next.js image optimization is enabled

## Build Rule

All page/image relationships should be represented in shared data/configuration rather than duplicated page-specific markup. The 17 service pages must consume one reusable service-page template and a shared service catalog so navigation and page switching remain maintainable.
