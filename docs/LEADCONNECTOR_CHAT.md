# Booked4Seasons LeadConnector Chat Widget

Widget ID: `6a7ca95093aa928cd28c82f8`

The widget is loaded once sitewide from `components/LeadConnectorChat.tsx` through `app/layout.tsx`.

## Canonical embed

```html
<script
  src="https://widgets.leadconnectorhq.com/loader.js"
  data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
  data-widget-id="6a7ca95093aa928cd28c82f8"
  data-source="WEB_USER">
</script>
```

Do not paste Markdown link syntax, escaped `<script>` tags, or bracketed URLs into production HTML.

## Booked4Seasons branding

Inside LeadConnector / HighLevel → Sites → Chat Widget → open this widget:

- Business/header name: `Booked4Seasons`
- Website/domain reference: `booked4seasons.com`
- Avatar/logo: use the approved Booked4Seasons mark from `/public/images/brand/logo-mark.svg`. If the widget editor requires PNG/JPG, export the same approved mark to a square PNG without redesigning it.
- Primary/accent color: `#22C55E`
- Secondary/active accent: `#1565C0`
- Dark/header text/surface where configurable: `#0D1B2A`
- Light background: `#FFFFFF` / `#F5F7FA`

Do not introduce any other brand name, logo, or unrelated visual system.

## Fit / responsive rules

Use the floating widget placement unless a later page-specific embedded experience is explicitly approved.

In LeadConnector's Style settings:

- keep the launcher inside the bottom-right safe area;
- avoid covering the site's primary Request Service CTA;
- keep a minimum visual gap from viewport edges on mobile;
- use the platform's responsive/mobile behavior rather than hard-coded iframe dimensions;
- test closed launcher and open conversation states at 390×844, 430px width, 768×1024, and 1440×900;
- verify the open panel never creates horizontal page overflow;
- verify keyboard focus and close/open controls work;
- verify the widget does not obscure cookie/privacy controls if those are added later.

## Optional advanced icon

LeadConnector's documented advanced configuration supports an `open-icon-url` when a `<chat-widget>` element is used. If this widget is later converted to that embed style, use a public HTTPS Booked4Seasons logo-mark URL such as `https://booked4seasons.com/images/brand/logo-mark.svg` for the open icon. Do not change embed architecture solely for this option unless tested with the active widget configuration.

## QA

Before launch:

- widget loads once, not once per page transition;
- widget ID is exactly `6a7ca95093aa928cd28c82f8`;
- no console errors caused by duplicate loader injection;
- Booked4Seasons logo/brand appears in the widget configuration;
- mobile launcher and expanded panel fit the viewport;
- widget does not cover key navigation or Request Service controls;
- chat submissions reach the intended LeadConnector conversation/inbox workflow.
