"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

/**
 * Official Booked4Seasons LeadConnector chat loader.
 * Widget fields, consent text, and messaging behavior are managed in the
 * approved LeadConnector widget configuration for this widget ID.
 */
const phoneFormRoutes = new Set(["/request-service", "/contact", "/become-a-pro"]);

export function LeadConnectorChat() {
  const pathname = usePathname();
  const hasFirstPartyPhoneForm = phoneFormRoutes.has(pathname);

  useEffect(() => {
    if (!hasFirstPartyPhoneForm) return;
    document.querySelectorAll("chat-widget").forEach(widget => widget.remove());
  }, [hasFirstPartyPhoneForm]);

  if (hasFirstPartyPhoneForm) return null;

  return <Script
    id="booked4seasons-leadconnector-chat"
    src="https://widgets.leadconnectorhq.com/loader.js"
    data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    data-widget-id="6a7ca95093aa928cd28c82f8"
    strategy="afterInteractive"
  />;
}
