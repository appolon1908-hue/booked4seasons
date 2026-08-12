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

Set `NEXT_PUBLIC_FORM_ENDPOINT` to the HTTPS endpoint that should receive JSON form submissions. Until this is configured, forms remain in safe demo mode and clearly tell the user that live submission is not configured.

Expected payload includes `kind` (`service`, `contact`, or `partner`) plus the submitted form fields.

Do not put API secrets in `NEXT_PUBLIC_*` variables.

## Production checklist

- Configure the real form/API endpoint.
- Add production phone number and support email.
- Replace starter Privacy and Terms pages with approved legal text.
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
