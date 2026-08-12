# Booked4Seasons architecture

## Current scope

The first release is one public Next.js application for `booked4seasons.com`.

It is intentionally optimized for:

- service discovery
- SEO-friendly service landing pages
- contact and service-request lead capture
- service-area messaging
- provider applications

It does not yet contain customer accounts, vendor job operations, dispatch, payments, or internal admin.

## Service architecture

The public catalog is metadata-driven from `lib/services.ts` and grouped into:

- Home Comfort
- Home & Property
- Specialty
- Vehicle

Canonical service landing pages live at `/services/[slug]`. Existing top-level service pages remain available as compatibility routes for the original launch catalog.

## Future boundary

The public website should eventually submit to a FastAPI backend. PostgreSQL/PostGIS can remain the authoritative store for service areas and operational records.

Future applications may be separated into:

- `app.booked4seasons.com`
- `partners.booked4seasons.com`
- `ops.booked4seasons.com`

Do not add these applications until the public acquisition and service-request loop is proven.
