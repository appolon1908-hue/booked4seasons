# Booked4Seasons — Codex Brand Implementation Contract

This file tells Codex how to implement the approved Booked4Seasons visual system without drifting from the brand.

## Source of Truth

Codex must read these files before changing public frontend UI:

1. `docs/BRAND_UI_SPEC.md`
2. `docs/IMAGE_PLACEMENT_MANIFEST.md`
3. `lib/brand.ts`
4. `lib/pageImages.ts`
5. `lib/services.ts`

If generated concept art conflicts with these files, these files win.

## Mission Boundary

Public frontend only. Do not add backend architecture, authentication, payments, CRM, dispatch, scheduling backends, dashboards, or unrelated service categories.

## Brand Tokens

Never hard-code alternate brand hex values in random components.

Use the values from `lib/brand.ts`:
- Navy `#0D1B2A`
- Blue `#1565C0`
- Green `#22C55E`
- Amber `#FFB703`
- Cloud `#F5F7FA`
- Slate `#6B7280`
- White `#FFFFFF`

Expose these as CSS custom properties in the global stylesheet and consume the variables in components. If Tailwind is later introduced, map the same values into theme tokens rather than replacing them.

Recommended CSS variables:

```css
:root {
  --b4s-navy-900: #0D1B2A;
  --b4s-blue-600: #1565C0;
  --b4s-green-500: #22C55E;
  --b4s-amber-400: #FFB703;
  --b4s-cloud-50: #F5F7FA;
  --b4s-slate-500: #6B7280;
  --b4s-white: #FFFFFF;
}
```

## Required Shared Components

Codex should build or retain reusable components for:

- `SiteHeader`
- `DesktopMegaMenu`
- `MobileNavigation`
- `SiteFooter`
- `PrimaryButton`
- `SecondaryButton`
- `ServiceCard`
- `ServiceHero`
- `SectionHeader`
- `ServiceCategorySection`
- `HowItWorksSteps`
- `ServiceAreaCta`
- `FinalRequestCta`
- `ServicePageTemplate`

Do not duplicate headers, footers, buttons, cards, or service templates page by page.

## Header Contract

Desktop order is fixed:

1. Logo
2. Services mega menu
3. How It Works
4. Service Areas
5. For Professionals
6. About
7. Contact
8. Request Service CTA

The menu uses only the 17 canonical services from `lib/services.ts`.

Mobile must expose the same navigation and service groups through an accessible collapsible menu. The primary Request Service action must remain easy to reach.

## Footer Contract

Navy background. Use verified data only. Required groups:

- Brand/tagline
- Services
- Company
- Help
- Contact

Do not invent phone numbers, email addresses, street addresses, social profiles, ratings, badges, customer counts, insurance claims, or licenses.

## Page/Image Contract

Never invent image paths inside page components. Read image slots from `lib/pageImages.ts` and refer to `docs/IMAGE_PLACEMENT_MANIFEST.md` for composition intent.

`/services` does not require a separate hero image; it reuses canonical service photography in the service-card grid.

FAQ, Privacy, and Terms do not require dedicated photography.

## Image Rendering

Use Next.js `Image` for photography.

- Homepage hero: `priority`.
- Above-the-fold service hero: priority may be used.
- Below-the-fold assets: lazy load.
- Define responsive `sizes` values.
- Preserve aspect ratio and avoid layout shift.
- Keep HTML text out of image files.
- Use the descriptive alt text from `lib/pageImages.ts` unless context requires a more precise accessible description.

## Service Page Architecture

All 17 service routes must resolve into one reusable `ServicePageTemplate` driven by `lib/services.ts` and the route image mapping.

Required order:

1. Breadcrumb
2. Service Hero
3. Popular Services
4. Why Booked4Seasons
5. How It Works
6. Service Information
7. FAQ
8. Service Area CTA
9. Final Request Service CTA
10. Footer

Do not build 17 independent visual layouts.

## Homepage Architecture

Required order:

1. Header
2. Hero
3. Service search / selection
4. Popular Services
5. How It Works
6. Browse by Category
7. Why Booked4Seasons
8. Seasonal Services
9. Service Area
10. For Professionals
11. Final CTA
12. Footer

## Responsive Rules

QA at minimum:
- 1440×900 desktop
- 768×1024 tablet
- 390×844 mobile

Desktop service cards: 3–4 per row depending on available width.
Tablet: 2 per row.
Mobile: 1 per row by default.

Hero layout may stack on tablet/mobile when needed. Never overlay text on a busy image region or crop away faces, tools, vehicles, or relevant service equipment.

## Visual Drift Prohibitions

Codex must not:

- add unrelated services;
- introduce new brand colors;
- use gradient-heavy SaaS visuals;
- use glassmorphism as a main style;
- use dashboard/sidebar patterns for public pages;
- use mismatched icon packs;
- add fake testimonials or ratings;
- add remote stock-image URLs in production;
- bake headings or CTA copy into photography;
- create page-specific headers or footers;
- add giant decorative animations that compromise performance;
- substitute generated concept-board labels for canonical route/service names.

## Git-Facing Structure

Expected structure:

```text
app/
components/
lib/
  brand.ts
  pageImages.ts
  services.ts
public/
  images/
    brand/
    home/
    services/
    how-it-works/
    company/
    service-areas/
docs/
  BRAND_UI_SPEC.md
  IMAGE_PLACEMENT_MANIFEST.md
  CODEX_BRAND_IMPLEMENTATION.md
```

The public image folders may exist as placeholders until final binary assets are supplied. Page markup must target the canonical paths now so image replacement does not require redesign.

## Definition of Done for Brand Implementation

Before marking the frontend visually complete:

- all 28 canonical routes exist;
- all 17 service routes use shared architecture;
- desktop mega menu works;
- mobile navigation works;
- header/footer use shared brand config;
- global CSS exposes exact brand tokens;
- all page imagery resolves through canonical paths;
- no broken images;
- no off-catalog service names;
- no fabricated trust claims;
- responsive QA passes;
- TypeScript passes;
- production Next.js build passes;
- Docker build passes when deployment files are in scope.

If final binary image assets are still missing, Codex should report `FRONTEND_COMPLETE_AWAITING_FINAL_IMAGE_ASSETS` rather than inventing replacements.
