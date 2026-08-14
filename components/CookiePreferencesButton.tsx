"use client";
export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  return <button type="button" className={className} onClick={()=>window.dispatchEvent(new Event("booked4seasons:cookie-preferences"))}>Cookie preferences</button>;
}
