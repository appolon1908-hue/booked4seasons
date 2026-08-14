# Booked4Seasons

**Home services for every season.**

Public-facing Next.js website for `booked4seasons.com`. The first release is intentionally focused on service discovery and lead capture rather than customer accounts, partner dashboards, dispatch, or payment workflows.

## Included pages

- Homepage
- All Services
- HVAC
- Cleaning
- Junk Removal
- Mobile Car Wash
- Handyman
- Plumbing
- Electrical
- Landscaping
- Request Service
- Contact
- How It Works
- Service Areas
- About
- FAQ
- Become a Pro
- Privacy
- Terms

## Stack

- Next.js App Router
- React
- TypeScript (strict)
- Responsive global CSS

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open `http://localhost:3000`.

## Forms

Set server-only `FORM_API_BASE_URL` to the approved HTTPS BREERO API origin. The browser submits to the same-domain `/api/public-forms` route, which validates the form type and forwards to the matching public API contract. No API credential or upstream address is exposed in browser configuration.

Expected payload includes `kind` (`service`, `contact`, or `partner`) plus the submitted form fields.

Do not put API secrets in `NEXT_PUBLIC_*` variables.

## Production checklist

- Configure the real form/API endpoint.
- Verify the legal name, DBA, address, support phone, and support email against authoritative business records before deployment.
- Obtain Legal/Compliance approval for production policy wording.
- Configure DNS for `booked4seasons.com`.
- Deploy behind HTTPS.
- Add analytics only after consent/privacy requirements are defined.
- Connect service-area validation to the authoritative backend when available.

## Future architecture

The repository can later expand to support:

- `app.booked4seasons.com` — customer account
- `partners.booked4seasons.com` — provider portal
- `ops.booked4seasons.com` — operations/dispatch
- FastAPI + PostgreSQL/PostGIS backend integration
