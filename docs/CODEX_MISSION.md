# Codex Mission — Booked4Seasons public website

Maintain and improve the first production website for Booked4Seasons.

## Product goal

Make `booked4seasons.com` a fast, trustworthy, mobile-friendly entry point for customers who need local home, property, specialty, or vehicle services.

The public experience should make the brand feel simple even as the service catalog grows.

## Current priorities

1. Keep the homepage focused on service discovery and one clear CTA: **Request service**.
2. Keep `/services/[slug]` metadata-driven and SEO-friendly.
3. Maintain the categorized Services mega-menu and mobile service navigation.
4. Keep forms safe: never claim a real submission succeeded without a configured endpoint and successful response.
5. Preserve accessibility, semantic HTML, responsive behavior, and strong performance.
6. Do not introduce customer accounts, dispatch, vendor economics, or payment flows without an explicit new mission.

## Required validation before publishing

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- verify mobile navigation
- verify every service route renders
- verify sitemap and robots
- verify no secrets or production customer data are committed
