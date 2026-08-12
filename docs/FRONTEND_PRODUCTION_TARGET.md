# Booked4Seasons Frontend Production Target

This document is the authoritative production target for the Booked4Seasons public frontend.

## Production server

- Server IP: `49.12.145.107`
- Canonical domain: `booked4seasons.com`
- Secondary domain: `www.booked4seasons.com`
- Scope: frontend only

## Required DNS

```text
A
Host: @
Value: 49.12.145.107
TTL: 600

CNAME
Host: www
Value: booked4seasons.com
TTL: 600
```

Expected resolution:

```text
booked4seasons.com -> 49.12.145.107
www.booked4seasons.com -> booked4seasons.com -> 49.12.145.107
```

## Deployment target

```text
Repository: appolon1908-hue/booked4seasons
Branch: main
Server: 49.12.145.107
Deployment root: /opt/booked4seasons
Container: booked4seasons-frontend
Docker network: booked4seasons-frontend
Canonical URL: https://booked4seasons.com
```

## Frontend-only rule

Do not deploy or create any backend, database, payment service, CRM, customer portal, provider portal, operations portal, worker service, or message queue as part of this frontend deployment.

## Required traffic flow

```text
GitHub
  -> appolon1908-hue/booked4seasons
  -> 49.12.145.107
  -> /opt/booked4seasons
  -> Docker
  -> booked4seasons-frontend
  -> reverse proxy
  -> HTTPS
  -> booked4seasons.com
```

Any deployment documentation or automation that references a different Booked4Seasons frontend production IP should be treated as stale and corrected to `49.12.145.107`.
