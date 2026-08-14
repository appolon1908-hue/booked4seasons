/**
 * Official Booked4Seasons LeadConnector chat loader.
 * Widget fields, consent text, and messaging behavior are managed in the
 * approved LeadConnector widget configuration for this widget ID.
 */
export function LeadConnectorChat() {
  return <Script
    id="booked4seasons-leadconnector-chat"
    src="https://widgets.leadconnectorhq.com/loader.js"
    data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    data-widget-id="6a7ca95093aa928cd28c82f8"
    data-source="WEB_USER"
    strategy="afterInteractive"
  />;
}
import Script from "next/script";
