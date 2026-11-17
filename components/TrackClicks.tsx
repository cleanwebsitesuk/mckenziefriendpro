"use client";

import { useEffect } from "react";

type Conversion = "call" | "whatsapp" | "form";

const eventNames: Record<Conversion, string> = {
  call: "call_click",
  whatsapp: "whatsapp_click",
  form: "form_submit",
};

/**
 * Sends one conversion to GA4, e.g.
 *   gtag("event", "call_click", { click_location: "hero" })
 * Nothing is sent unless the visitor has accepted analytics cookies, which
 * the head script records as <html data-consent="granted">. Taps made before
 * that are dropped rather than queued, so nothing is sent later on.
 */
export function track(kind: Conversion, place?: string) {
  if (document.documentElement.getAttribute("data-consent") !== "granted") return;
  window.gtag?.("event", eventNames[kind], { click_location: place ?? "unknown" });
}

/** Listens for taps on anything marked data-track="call" or "whatsapp" and records them. */
export function TrackClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const el = (event.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!el) return;
      track(el.dataset.track as Conversion, el.dataset.trackPlace);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
