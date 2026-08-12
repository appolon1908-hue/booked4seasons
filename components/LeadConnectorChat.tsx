import Script from "next/script";

/**
 * Booked4Seasons LeadConnector chat widget.
 *
 * Widget branding (avatar/header/colors) is configured inside the
 * LeadConnector/HighLevel Chat Widget editor. Keep that editor branded to
 * Booked4Seasons and use the approved logo asset from this repository.
 */
export function LeadConnectorChat() {
  return (
    // The App Router supports beforeInteractive in the root layout. This keeps
    // the exact vendor tag in server HTML for compliance crawlers.
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      id="booked4seasons-leadconnector-chat"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a73a20197ea74e60a1c9641"
      data-source="WEB_USER"
      strategy="beforeInteractive"
    />
  );
}
