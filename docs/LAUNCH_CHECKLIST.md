# Production launch checklist

- [ ] Verify `booked4seasons.com` DNS and HTTPS.
- [ ] Configure `NEXT_PUBLIC_SITE_URL=https://booked4seasons.com`.
- [ ] Configure the real service-request/contact endpoint.
- [ ] Add the real business phone number and support email.
- [ ] Add rate limiting and anti-spam controls at form ingress.
- [ ] Replace starter Privacy and Terms content with approved legal text.
- [ ] Verify all service claims and service areas before publishing.
- [ ] Run accessibility, mobile, cross-browser, typecheck, lint, and production build checks.
- [ ] Add analytics only after privacy/consent requirements are defined.
- [ ] Add Search Console/Bing webmaster verification after public launch if desired.
