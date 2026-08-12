export type PublicEventName =
  | "cta_clicked"
  | "service_viewed"
  | "form_started"
  | "form_submitted"
  | "form_failed"
  | "chat_opened"
  | "chat_lead"
  | "web_vital"
  | "client_error";

type SafeProperties = Record<string, string | number | boolean | undefined>;

const blockedKeys = /name|email|phone|address|message|description|postal|zip/i;

export function track(name: PublicEventName, properties: SafeProperties = {}) {
  if (typeof window === "undefined") return;
  const safe = Object.fromEntries(
    Object.entries(properties).filter(([key, value]) => !blockedKeys.test(key) && value !== undefined),
  );
  const event = { name, properties: safe, path: window.location.pathname, timestamp: new Date().toISOString() };
  window.dispatchEvent(new CustomEvent("booked4seasons:analytics", { detail: event }));
  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) dataLayer.push({ event: name, ...safe });
  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT?.trim();
  if (endpoint?.startsWith("https://")) navigator.sendBeacon(endpoint, JSON.stringify(event));
}
