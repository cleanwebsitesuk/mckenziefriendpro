"use client";

import { useEffect } from "react";

type Conversion = "call" | "whatsapp" | "form";

const eventNames: Record<Conversion, string> = {
  call: "call_click",
  whatsapp: "whatsapp_click",
  form: "form_submit",
};

/**
 * Records one conversion in the Google Tag Manager data layer, e.g.
 *   { event: "call_click", click_location: "hero" }
 * Events are only sent on to Google if the visitor accepted analytics
 * cookies: until then Tag Manager isn't loaded and the events go nowhere.
 * See the README for the matching trigger and GA4 tag in Tag Manager.
 */
export function track(kind: Conversion, place?: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventNames[kind], click_location: place ?? "unknown" });
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
