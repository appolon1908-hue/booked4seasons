"use client";
import { useEffect, useState } from "react";

type Choice = "all" | "necessary" | null;
const storageKey = "b4s-cookie-preferences-v1";

export function CookiePreferences() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Choice;
    const initialize = window.setTimeout(() => { if (saved !== "all" && saved !== "necessary") setOpen(true); }, 0);
    const handler = () => setOpen(true);
    window.addEventListener("booked4seasons:cookie-preferences", handler);
    return () => { window.clearTimeout(initialize); window.removeEventListener("booked4seasons:cookie-preferences", handler); };
  }, []);
  function save(value: Exclude<Choice, null>) { localStorage.setItem(storageKey, value); setOpen(false); }
  return <>{open && <aside className="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-title">
    <h2 id="cookie-title">Your privacy choices</h2>
    <p>Necessary storage supports core site operation. We do not load advertising trackers. You can change this preference at any time.</p>
    <div className="cookie-actions"><button className="button" onClick={()=>save("all")}>Accept all</button><button className="button button-secondary" onClick={()=>save("necessary")}>Reject nonessential</button><a href="/cookies">Cookie notice</a></div>
  </aside>}</>;
}
