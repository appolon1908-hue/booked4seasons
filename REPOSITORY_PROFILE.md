# Repository Profile — `booked4seasons`

## Identity

- **Repository:** `appolon1908-hue/booked4seasons`
- **Category:** Product website — seasonal home services
- **Visibility:** `public`
- **Default branch:** `main`
- **Authority:** Primary Booked4Seasons public website authority
- **Status:** Active Next.js service-discovery and lead-capture website; account, dispatch, and payment platforms are future scope.

## Purpose

Presents Booked4Seasons services, service areas, partner onboarding, legal pages, and validated lead-capture forms for home services throughout the year.

## Owns

- Public marketing and service-discovery experience
- Service, contact, and partner lead forms
- SEO, legal, content, accessibility, and responsive presentation

## Does not own

- Customer accounts, provider operations, dispatch, or payments
- Authoritative service-area or pricing rules
- Direct CRM/provider writes from the browser

## Key integrations

- Approved Booked4Seasons backend through same-origin server routes
- Middleware/Odoo lead handling where adopted
- Caddy/TLS and analytics after consent approval

## Current priorities

1. Connect forms to the authoritative backend
2. Verify legal entity and policy content
3. Add service-area validation and production evidence
4. Prepare future customer, partner, and operations surfaces as separate governed applications

## Governance and safety

- Target promotion model: `feature/docs/fix/security/upgrade -> development -> test -> staging -> production -> main`.
- Use pull requests and exact-head/merge-result validation; merging source never authorizes deployment.
- Never commit secrets, credentials, private keys, customer data, database dumps, or secret-bearing evidence.
- Production images and releases must be immutable; mutable `latest` tags are not release authority.
- Browser forms must use governed APIs and must never write directly to Odoo, n8n, or providers.
- This document does not deploy software or activate production.

## Account-wide catalog

See `appolon1908-hue/documentaions/REPOSITORY_CATALOG.md`.
