# MASTER_MISSION=booked4seasons.com_COMPLETE_PUBLIC_FRONTEND_ALL_PAGES_IMAGES_LINKS_BUTTONS_AND_LAUNCH

Repository: `appolon1908-hue/booked4seasons`
Domain: `booked4seasons.com`
Production frontend server: `49.12.145.107`
Scope: **PUBLIC FRONTEND ONLY**
Brand: **Booked4Seasons**

This is the single authoritative completion mission for `booked4seasons.com`. Continue until every public frontend item below is complete or a real external blocker exists. Do not stop for routine confirmation.

## 1. Identity lock — non-negotiable

The only website/domain identity for this mission is:

- Brand: `Booked4Seasons`
- Domain: `booked4seasons.com`
- Repository: `appolon1908-hue/booked4seasons`
- Production frontend server: `49.12.145.107`

Do not introduce any unrelated project, company, campaign, codename, or legacy mission name into UI copy, source comments, documentation, metadata, SEO, image names, components, Docker files, deployment files, reports, or completion output.

When naming the master mission, always use exactly:

`MASTER_MISSION=booked4seasons.com_COMPLETE_PUBLIC_FRONTEND_ALL_PAGES_IMAGES_LINKS_BUTTONS_AND_LAUNCH`

## 2. Read first — source of truth

Before changing UI or imagery, read and obey:

1. `docs/BRAND_UI_SPEC.md`
2. `docs/IMAGE_PLACEMENT_MANIFEST.md`
3. `docs/CODEX_BRAND_IMPLEMENTATION.md`
4. `lib/brand.ts`
5. `lib/pageImages.ts`
6. `lib/services.ts`

If concept artwork, old copy, old routes, old server information, or old mission text conflicts with these files, the canonical Booked4Seasons documentation wins.

## 3. Final objective

Deliver a premium, clean, friendly, local, trustworthy, modern, mobile-first `booked4seasons.com` public website where:

- all 28 canonical public pages render;
- all 17 canonical service routes render from shared service architecture;
- all required production images are present and displayed in their documented slots;
- every internal URL resolves;
- every CTA and button performs a real intentional action;
- header, mega-menu, mobile navigation, and footer work on all pages;
- forms behave honestly and never fake successful submission;
- SEO metadata, sitemap, robots, structured data, accessibility, responsive behavior, and performance are production-ready;
- `npm run typecheck`, `npm run lint`, `npm run build`, visual QA, and the production Docker build pass;
- the frontend remains compatible with deployment to `49.12.145.107`.

Primary message: **Whatever your property needs, get it booked.**
Tagline: **Home Services for Every Season.**
Primary CTA: **Request Service**
Secondary CTA: **Explore Services**

## 4. Hard scope boundary

Do not build or deploy backend, database, authentication, payments, customer portal, provider portal, operations portal, dispatch, CRM, workers, queues, or unrelated services.

Do not add off-catalog services. The canonical service catalog is exactly the 17 services in `lib/services.ts`.

## 5. Canonical public routes — all must work

1. `/`
2. `/services`
3. `/services/hvac`
4. `/services/plumbing`
5. `/services/electrical`
6. `/services/water-heater`
7. `/services/ev-charger-installation`
8. `/services/cleaning`
9. `/services/handyman`
10. `/services/landscaping`
11. `/services/lawn-care`
12. `/services/pest-control`
13. `/services/pool-service`
14. `/services/junk-removal`
15. `/services/water-damage`
16. `/services/property-maintenance`
17. `/services/construction`
18. `/services/mobile-car-wash`
19. `/services/mobile-detailing`
20. `/request-service`
21. `/contact`
22. `/how-it-works`
23. `/service-areas`
24. `/about`
25. `/faq`
26. `/become-a-pro`
27. `/privacy`
28. `/terms`

Maintain existing legitimate Booked4Seasons policy routes/aliases if already implemented, but do not let them replace or break the canonical 28-page target.

## 6. Global navigation and link contract

Desktop header order:

- Booked4Seasons logo → `/`
- Services mega-menu → canonical service links + `/services`
- How It Works → `/how-it-works`
- Service Areas → `/service-areas`
- For Professionals → `/become-a-pro`
- About → `/about`
- Contact → `/contact`
- Request Service → `/request-service`

Mobile navigation must expose the same information architecture through accessible expandable service groups.

Audit every `<Link>`, `<a>`, button, form submit, card action, hero CTA, footer link, breadcrumb, category link, service link, FAQ-related CTA, provider CTA, and contact action. There must be no dead controls, `href="#"`, placeholder URLs, accidental 404s, or buttons with no behavior.

Buttons that navigate must use real routes. External contact actions must use verified `mailto:`/`tel:`/approved URLs only. Buttons that submit forms must expose pending/error state and must not report success unless the configured endpoint returns success.

## 7. Image completion mission

Use the exact canonical paths from `lib/pageImages.ts` and `docs/IMAGE_PLACEMENT_MANIFEST.md`.

Required launch photography/artwork slots:

### Home
- `/images/home/homepage-hero.webp`
- `/images/home/seasonal-services.webp`
- `/images/home/why-booked4seasons.webp`

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

### Company / process / service areas
- `/images/company/request-service.webp`
- `/images/company/contact.webp`
- `/images/how-it-works/request.webp`
- `/images/how-it-works/coordinate.webp`
- `/images/how-it-works/service.webp`
- `/images/company/about.webp`
- `/images/company/become-a-pro.webp`
- `/images/service-areas/map.webp`

FAQ, Privacy, and Terms intentionally require no dedicated photography.

Also retain approved Booked4Seasons brand assets under `/images/brand/`.

For every image:

- render through `next/image` when photographic;
- use meaningful alt text;
- define responsive `sizes`;
- preserve aspect ratio and avoid layout shift;
- priority-load only critical above-fold imagery;
- lazy-load below-fold imagery;
- verify desktop/tablet/mobile crops;
- never use remote random stock URLs;
- never bake page headings or CTA text into photography;
- never change canonical filenames to make code easier.

If an image binary is genuinely missing, create/use one intentional local branded placeholder while preserving the final canonical path and report the exact missing asset. Never redesign the page around a missing asset.

## 8. Homepage completion

Required order:

1. Header
2. Hero
3. Popular Services
4. How Booked4Seasons Works
5. Browse Services by Category
6. Why Booked4Seasons
7. Seasonal Services
8. Trust / Customer Confidence
9. Service Areas
10. For Professionals
11. FAQ Preview
12. Final Request Service CTA
13. Footer

Hero primary CTA → `/request-service`.
Hero secondary CTA → `/services`.
Popular service cards and category links must resolve to correct routes.

## 9. Services directory and reusable service pages

`/services` must display all 17 services grouped into exactly four categories: Home Comfort, Home & Property, Specialty, Vehicle.

Each card must contain image, category, service name, description, Learn More, and Request Service.

Do not build 17 independent page designs. All service pages must continue to use one shared data-driven template from `lib/services.ts`.

Every service page must include:

- breadcrumb;
- service hero image;
- service name/value proposition;
- Request Service CTA with service query preselection;
- common requests;
- How It Works;
- Why Booked4Seasons;
- service information;
- service-area information/link;
- FAQ;
- related services;
- final Request Service CTA;
- shared footer.

## 10. Conversion/company pages

### `/request-service`
Use `/images/company/request-service.webp`. Keep the frontend request form complete and accessible. If no approved endpoint exists, live submission is unavailable and the UI must say so honestly.

### `/contact`
Use `/images/company/contact.webp`. Provide real paths for Request Service, Customer Support, Become a Professional, and contact form actions.

### `/how-it-works`
Use the three canonical process images and the four-step process: tell us what you need, choose service/location, coordination, service handled.

### `/service-areas`
Use `/images/service-areas/map.webp`. Do not invent geographic coverage boundaries.

### `/about`
Use `/images/company/about.webp` and explain the Booked4Seasons coordination model clearly.

### `/become-a-pro`
Use `/images/company/become-a-pro.webp`. Informational/provider-interest page only; no provider portal.

### `/faq`, `/privacy`, `/terms`
Keep lightweight, accessible, readable, and free from unnecessary photography.

## 11. Brand system

Use the exact approved system from `lib/brand.ts` / `docs/BRAND_UI_SPEC.md`:

- Navy `#0D1B2A`
- Blue `#1565C0`
- Green `#22C55E`
- Amber `#FFB703`
- Cloud `#F5F7FA`
- Slate `#6B7280`
- White `#FFFFFF`

Do not introduce a second visual language. Header, footer, cards, buttons, image treatment, spacing, radii, typography, and surfaces must remain consistent page to page.

## 12. Accessibility and responsive QA

Required:

- semantic landmarks;
- skip navigation;
- keyboard-accessible mega-menu/mobile menu/accordions;
- visible focus states;
- correct labels and form errors;
- sufficient contrast;
- reduced-motion support where relevant;
- large tap targets;
- no horizontal overflow.

Test at minimum: 375, 430, 768, 1024, 1280, 1440, and 1920 widths. Explicit QA snapshots/checks must include 390×844, 768×1024, and 1440×900.

## 13. SEO / metadata / URLs

Every canonical public page requires unique title, unique description, canonical URL on `https://booked4seasons.com`, correct H1 hierarchy, and appropriate Open Graph metadata.

Service pages must have service-specific metadata and valid breadcrumb/service/FAQ structured data where factual.

Audit and correct `app/sitemap.ts` and `app/robots.ts`. Sitemap must use `https://booked4seasons.com` as the canonical public origin, include every published canonical route, and contain no broken URLs.

## 14. Forms

Validate required fields, show accessible errors/pending state, prevent duplicate submission, and preserve service query preselection from service CTAs.

`NEXT_PUBLIC_FORM_ENDPOINT` is the only approved public endpoint configuration. If it is absent or fails, show an honest unavailable/error state. Never show fake success.

## 15. Performance

Use Next/Image, responsive sizes, optimized fonts, lazy loading, minimal client JavaScript, and code splitting. Avoid massive source images, heavy animation frameworks, page-builder dependencies, and unnecessary client components.

## 16. Build / Docker / launch validation

Run and fix until passing:

```bash
npm ci
npm run typecheck
npm run lint
npm run build
npm run test:visual
```

Then validate the frontend Docker build using the repository's canonical frontend-only Docker deployment setup for production server `49.12.145.107`. Do not add a backend container.

Perform a route/link/image audit after build. Treat any broken internal route, image reference, header/footer control, service CTA, or mobile navigation behavior as a launch blocker.

## 17. Required final audit

Return the following exact matrix with PASS/FAIL/NO/values filled in:

```text
BOOKED4SEASONS_PUBLIC_FRONTEND

MASTER_MISSION=booked4seasons.com_COMPLETE_PUBLIC_FRONTEND_ALL_PAGES_IMAGES_LINKS_BUTTONS_AND_LAUNCH
BRAND=Booked4Seasons
DOMAIN=booked4seasons.com
REPOSITORY=appolon1908-hue/booked4seasons
PRODUCTION_FRONTEND_SERVER=49.12.145.107

PRIMARY_PAGE_COUNT=28
SERVICE_PAGE_COUNT=17
SERVICE_CATEGORY_COUNT=4

BRAND_SPEC=
IMAGE_MANIFEST=

HOMEPAGE=
SERVICES_DIRECTORY=

HVAC=
PLUMBING=
ELECTRICAL=
WATER_HEATER=
EV_CHARGER_INSTALLATION=
CLEANING=
HANDYMAN=
LANDSCAPING=
LAWN_CARE=
PEST_CONTROL=
POOL_SERVICE=
JUNK_REMOVAL=
WATER_DAMAGE=
PROPERTY_MAINTENANCE=
SMALL_PROJECTS=
MOBILE_CAR_WASH=
MOBILE_DETAILING=

REQUEST_SERVICE=
CONTACT=
HOW_IT_WORKS=
SERVICE_AREAS=
ABOUT=
FAQ=
BECOME_A_PRO=
PRIVACY=
TERMS=

DESKTOP_HEADER=
SERVICES_MEGA_MENU=
MOBILE_HEADER=
MOBILE_NAVIGATION=
FOOTER=

ALL_INTERNAL_LINKS=
ALL_BUTTONS=
ALL_CTAS=
FORMS=
LIVE_FORM_SUBMISSION=

SEO=
SITEMAP=
ROBOTS=
STRUCTURED_DATA=
ACCESSIBILITY=

DESKTOP_QA=
TABLET_QA=
MOBILE_QA=

EXPECTED_IMAGES=28
PRESENT_IMAGES=
MISSING_IMAGES=
BROKEN_IMAGE_REFERENCES=

NEXT_BUILD=
TYPESCRIPT=
LINT=
VISUAL_QA=
DOCKER_BUILD=

BACKEND_CREATED=NO
DATABASE_CREATED=NO
PAYMENTS_CREATED=NO

FINAL_STATUS=
```

Only use `FINAL_STATUS=PASS_BOOKED4SEASONS_PUBLIC_FRONTEND_COMPLETE` when all canonical pages, required images, links, buttons, navigation, SEO, accessibility, responsive QA, Next build, TypeScript, lint, and Docker checks pass.

If everything except genuinely missing final image binaries passes, use `FINAL_STATUS=PASS_BOOKED4SEASONS_FRONTEND_COMPLETE_AWAITING_IMAGES` and list the exact missing files.

## 18. Non-negotiable finish rule

Do not stop after creating layouts. Do not stop after adding images. Do not stop after fixing routes. Continue through full QA and build validation. The mission is complete only when the entire public frontend behaves as one coherent `booked4seasons.com` website and the final matrix is returned.
