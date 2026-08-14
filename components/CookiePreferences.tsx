"use client";
import { useEffect, useState } from "react";
import { LeadConnectorChat } from "@/components/LeadConnectorChat";

type Choice = "all" | "necessary" | null;
const storageKey = "b4s-cookie-preferences-v1";

export function CookiePreferences() {
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Choice;
    const initialize = window.setTimeout(() => { if (saved === "all" || saved === "necessary") setChoice(saved); else setOpen(true); }, 0);
    const handler = () => setOpen(true);
    window.addEventListener("booked4seasons:cookie-preferences", handler);
    return () => { window.clearTimeout(initialize); window.removeEventListener("booked4seasons:cookie-preferences", handler); };
  }, []);
  function save(value: Exclude<Choice, null>) { localStorage.setItem(storageKey, value); setChoice(value); setOpen(false); }
  return <>{choice === "all" && <LeadConnectorChat />}{open && <aside className="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
    <h2 id="cookie-title">Your privacy choices</h2>
    <p>Necessary storage supports core site operation. The optional support-chat widget loads only if you accept functional cookies. We do not load advertising trackers.</p>
    <div className="cookie-actions"><button className="button" onClick={()=>save("all")}>Accept all</button><button className="button button-secondary" onClick={()=>save("necessary")}>Reject nonessential</button><a href="/cookies">Cookie notice</a></div>
  </aside>}</>;
}
