# Booked4Seasons public form API contract

The public frontend has no bundled backend. Forms remain fail-closed until an approved HTTPS endpoint is supplied at build time as `NEXT_PUBLIC_FORM_ENDPOINT`.

The frontend sends `POST` JSON with no credentials and a 12-second timeout. The payload contains `kind` (`service`, `contact`, or `partner`) plus the named form fields. Any non-2xx response, network failure, or timeout is treated as failure; the UI never reports storage unless the endpoint returns success.

The future endpoint must validate all fields server-side, apply abuse and rate controls, define CORS for `https://booked4seasons.com`, avoid returning sensitive errors, and return 2xx only after durable acceptance. No endpoint is configured in production today.
