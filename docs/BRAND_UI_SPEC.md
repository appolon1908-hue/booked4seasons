# Booked4Seasons Brand & UI Specification

Status: **APPROVED BRAND DIRECTION — LOCKED FOR FRONTEND IMPLEMENTATION**

This file is the visual source of truth for Booked4Seasons. Future pages must inherit this system instead of inventing new colors, header patterns, card styles, logo treatments, or photography directions.

## 1. Brand Core

- Brand: **Booked4Seasons**
- Tagline: **Home Services for Every Season**
- Primary message: **Whatever your property needs, get it booked.**
- Domain: **booked4seasons.com**
- Brand personality: premium, modern, trustworthy, local, clean, friendly, professional, fast, simple, mobile-first.

## 2. Exact Color System

| Token | Hex | Required usage |
|---|---|---|
| `navy-900` | `#0D1B2A` | Primary headings, desktop/footer dark surfaces, strong text, icon outlines |
| `blue-600` | `#1565C0` | Links, secondary actions, selected states, utility accents |
| `green-500` | `#22C55E` | Primary CTA, Booked4Seasons `4`, positive/high-priority brand accent |
| `amber-400` | `#FFB703` | Seasonal warmth, small highlights only; never dominant CTA color |
| `cloud-50` | `#F5F7FA` | Alternate section backgrounds, muted panels |
| `slate-500` | `#6B7280` | Secondary text, metadata, subdued labels |
| `white` | `#FFFFFF` | Main canvas, cards, inverse text on dark surfaces |

### Color rules

1. Main page background is white; use Cloud only to separate sections.
2. Navy is the default heading and footer color.
3. Green is the primary conversion color. Main `Request Service` buttons use Green with accessible contrasting text.
4. Blue is for links, secondary buttons, selected/interactive utility states; do not compete with Green for primary CTAs.
5. Amber is a seasonal accent, icon tile, badge, or small decorative highlight only.
6. Do not introduce random purple, red, teal, neon, gradients, or extra brand colors unless explicitly approved.
7. Destructive/error UI may use a semantic error color from the app system, but it is not part of the visual brand palette.
8. Maintain WCAG-friendly contrast for text and controls.

## 3. Typography

Primary type direction: **Poppins** for headings and UI copy, with robust system fallbacks.

Recommended hierarchy:
- H1: 48–64px desktop, 36–44px tablet, 32–38px mobile; 700 weight.
- H2: 36–44px desktop; 700 weight.
- H3: 24–30px; 600–700 weight.
- Body large: 18–20px.
- Body: 16–18px.
- Small/meta: 13–14px.
- Buttons: 15–16px, 600 weight.

Keep line lengths readable and avoid dense enterprise-dashboard typography.

## 4. Approved Logo Direction

Primary concept: a simple house/roof silhouette containing four seasonal tiles: leaf, sun, snowflake, and water/drop. Wordmark: **BOOKED4SEASONS**, with the numeral `4` highlighted in Green `#22C55E`.

### Required logo exports

- `/public/images/brand/logo-primary.svg` — default on white/light backgrounds.
- `/public/images/brand/logo-dark.svg` — inverse/optimized version for Navy/dark surfaces.
- `/public/images/brand/logo-mark.svg` — compact house/season mark without full wordmark.
- `/public/images/brand/favicon.svg` — simplified mark for browser/app contexts.
- `/public/images/brand/social-share.png` — social/share artwork.

### Logo usage rules

1. Never recolor the logo arbitrarily.
2. Never stretch, skew, rotate, outline, bevel, shadow, or place gradients inside it.
3. Keep clear space around the mark equal to at least the height of one seasonal tile.
4. Use the full primary wordmark in desktop header and light brand placements.
5. Use the compact mark only where horizontal space is genuinely constrained.
6. Use the inverse/dark-surface version on Navy backgrounds.
7. Do not bake the logo into service photography.
8. Do not generate fake logo embroidery on uniforms unless a later approved branded-uniform image set is created.

## 5. Global Desktop Header

Left: Booked4Seasons primary logo.

Navigation order:
1. Services — mega menu
2. How It Works
3. Service Areas
4. For Professionals
5. About
6. Contact
7. Request Service — primary CTA

Header behavior:
- white/light surface by default;
- compact sticky state allowed on scroll;
- Navy text;
- Green primary CTA;
- subtle bottom border/shadow only;
- no oversized dashboard-style nav bars.

Services mega menu groups only the canonical catalog under Home Comfort, Home & Property, Specialty, and Vehicle.

## 6. Mobile Header

- compact logo/mark left;
- accessible menu button right;
- Request Service remains a high-priority action;
- collapsible categories mirror desktop information architecture;
- no hidden service categories or alternate mobile-only taxonomy.

## 7. Footer

Use Navy `#0D1B2A` background with inverse logo/tagline plus columns for Services, Company, Help, and Contact.

Never publish invented phone numbers, addresses, ratings, review counts, licensing, insurance, customer counts, awards, or social handles. Use verified company data only.

## 8. Canonical Public Pages

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

Do not substitute unrelated services such as roofing, painting, appliance repair, garage doors, smart-home services, gift cards, reviews, gutter cleaning, pressure washing, or holiday lighting unless the owner explicitly expands the catalog.

## 9. Shared Service Page Architecture

All 17 service pages use one data-driven template:
- breadcrumb;
- service hero;
- service name;
- concise value proposition;
- Request Service CTA;
- service-specific hero image;
- popular services;
- Why Booked4Seasons;
- How It Works;
- service information;
- FAQ;
- service-area CTA;
- final Request Service CTA;
- footer.

Do not create 17 independently styled service pages.

## 10. Homepage Architecture

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

Hero image: subject right 40–50%; preserve left 45–55% negative space for HTML headline, supporting copy, and CTAs.

## 11. Photography & Image Treatment

Visual language must remain consistent across all assets:
- natural daylight;
- premium but realistic American residential environments;
- modern, believable equipment;
- clean composition;
- warm-neutral treatment;
- high realism;
- professional tradespeople;
- realistic tools and hands;
- diverse people represented naturally;
- neutral navy, charcoal, or dark-gray workwear;
- no competitor logos.

Avoid:
- cartoon/3D mixtures;
- cheap stock-photo handshakes;
- cinematic darkness;
- extreme saturation;
- frightening water-damage scenes;
- macro pest imagery;
- impossible equipment or hands;
- fake testimonials or ratings baked into images;
- text embedded into photographs.

### Composition

- Major heroes: subject right 40–50%, negative space left 45–55%.
- Service cards: consistent 3:2 source crop.
- Maintain enough framing for safe 1:1 and 4:5 mobile crops.
- Faces/tools/equipment may never be cut off at common responsive breakpoints.
- Website text always remains HTML.

### Master dimensions

- Source target: 2400×1600 minimum, 3:2 when practical.
- Desktop hero crop: 1920×1080.
- Wide section: 1600×900.
- Service card: 1200×800.
- Square/mobile card: 1000×1000.
- Mobile hero: 1080×1350.
- Prefer AVIF where practical, WebP fallback.

## 12. Canonical Image Paths

### Services
- `/images/services/hvac.webp`
- `/images/services/plumbing.webp`
- `/images/services/electrical.webp`
- `/images/services/water-heater.webp`
- `/images/services/ev-charger.webp`
- `/images/services/cleaning.webp`
- `/images/services/handyman.webp`
- `/images/services/landscaping.webp`
- `/images/services/lawn-care.webp`
- `/images/services/pest-control.webp`
- `/images/services/pool-service.webp`
- `/images/services/junk-removal.webp`
- `/images/services/water-damage.webp`
- `/images/services/property-maintenance.webp`
- `/images/services/small-projects.webp`
- `/images/services/mobile-car-wash.webp`
- `/images/services/mobile-detailing.webp`

### Home/supporting
- `/images/home/homepage-hero.webp`
- `/images/home/seasonal-services.webp`
- `/images/home/why-booked4seasons.webp`
- `/images/company/request-service.webp`
- `/images/company/contact.webp`
- `/images/how-it-works/request.webp`
- `/images/how-it-works/coordinate.webp`
- `/images/how-it-works/service.webp`
- `/images/company/about.webp`
- `/images/company/become-a-pro.webp`
- `/images/service-areas/map.webp`

Target launch library: approximately 28 images. Detailed placement lives in `docs/IMAGE_PLACEMENT_MANIFEST.md` and code mapping lives in `lib/pageImages.ts`.

## 13. Component Visual Rules

### Buttons
- Primary: Green background, high-contrast text, medium radius, strong 600-weight label.
- Secondary: white/light surface with Blue or Navy border/text.
- Tertiary/text link: Blue.
- Avoid pill-shaped everything; reserve full pills for compact badges/chips.

### Cards
- White surface.
- 12–16px radius.
- Thin neutral border or very subtle shadow.
- Consistent image ratio.
- Navy title, Slate supporting text.
- No heavy glassmorphism or gradient cards.

### Sections
- Alternate White and Cloud surfaces for pacing.
- Use generous spacing rather than decorative clutter.
- Keep content width consistent across pages.

### Icons
- Clean outline style using Navy/Blue/Green.
- Seasonal accent tiles may use Green, Blue, Amber, and cool blue/snow treatment.
- Do not mix illustration packs or icon weights.

## 14. Implementation Rule

Navigation, service catalog, route metadata, image paths, header labels, CTA labels, footer groups, and brand tokens must live in shared configuration/data. Components consume those sources; pages do not fork visual constants.

All 17 service pages must consume one reusable service-page architecture. New public pages must use the same tokens and layout primitives unless a deliberate design-system change is approved.

## 15. Drift Prevention

Before merging a new page, verify:
- only approved palette is used for brand UI;
- correct logo variant is used;
- header/footer are shared components;
- image path comes from the canonical manifest/config;
- service data comes from shared catalog;
- card radius, spacing, button hierarchy, and typography follow this file;
- no unsupported trust claims are introduced;
- desktop/tablet/mobile crops pass;
- no off-catalog service appears.
