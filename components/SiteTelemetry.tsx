"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";
import { track } from "@/lib/analytics";

export function SiteTelemetry() {
  const pathname = usePathname();

  useReportWebVitals((metric) => {
    track("web_vital", { metric: metric.name, value: Math.round(metric.value), rating: metric.rating });
  });

  useEffect(() => {
    if (pathname.startsWith("/services/")) track("service_viewed", { service: pathname.split("/").pop() || "unknown" });
  }, [pathname]);

  useEffect(() => {
    const click = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-analytics], a[href='/request-service'], a[href^='/request-service?']");
      if (target) track("cta_clicked", { cta: target.dataset.analytics || "request_service" });
    };
    const reportError = () => track("client_error", { category: "runtime" });
    const reportRejection = () => track("client_error", { category: "promise" });
    document.addEventListener("click", click);
    window.addEventListener("error", reportError);
    window.addEventListener("unhandledrejection", reportRejection);

    let chatButton: Element | null = null;
    const attachChat = () => {
      const button = document.querySelector("chat-widget")?.shadowRoot?.querySelector("#lc_text-widget--btn");
      if (button && button !== chatButton) {
        chatButton = button;
        button.addEventListener("click", () => track("chat_opened"), { once: true });
      }
    };
    const timer = window.setInterval(attachChat, 1_000);
    attachChat();
    return () => {
      document.removeEventListener("click", click);
      window.removeEventListener("error", reportError);
      window.removeEventListener("unhandledrejection", reportRejection);
      window.clearInterval(timer);
    };
  }, []);

  return null;
}
