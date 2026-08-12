# Production QA and external acceptance

## Frontend-owned checks

- All 28 required photographs are local WebP files and mapped through the image manifest.
- Required routes, service selection, menus, keyboard focus, text scaling, and chat fit are covered by browser QA.
- Privacy-safe telemetry never sends names, email, phone, addresses, ZIP codes, messages, or descriptions.
- Core Web Vitals and sanitized client-error categories can be delivered to `NEXT_PUBLIC_ANALYTICS_ENDPOINT`.
- A report-only Content Security Policy covers the known LeadConnector script, configuration, frame, image, and connection origins. Promote it to enforcement only after production violation monitoring shows no required origin is blocked.
- Images and application code remain rollback-safe through SHA-tagged frontend images.

## External acceptance still required

- Configure the Booked4Seasons avatar/logo in the HighLevel widget editor and visually approve it.
- Supply an approved HTTPS `NEXT_PUBLIC_FORM_ENDPOINT`, map `service`, `contact`, and `partner` submissions, and confirm each reaches the correct HighLevel inbox/pipeline.
- Send a real chat and confirm it reaches the intended HighLevel inbox.
- Have qualified counsel approve all legal policies and marketplace disclosures. Engineering review is not legal advice.
- Configure an external uptime monitor for `https://booked4seasons.com` and alert ownership.

No external acceptance item may be marked complete based only on frontend rendering.
