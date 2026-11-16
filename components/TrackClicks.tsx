"use client";

import { useEffect } from "react";
import { siteConfig } from "@/site.config";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

/** Send one conversion event. Does nothing until an analytics provider is switched on in site.config.ts. */
export function track(event: "call" | "whatsapp" | "form", place?: string) {
  if (siteConfig.analytics.provider === "none") return;
  window.plausible?.(event, place ? { props: { place } } : undefined);
}

/**
 * Listens for taps on anything marked data-track="call" or "whatsapp"
 * and records them as conversions. No cookies, no personal data.
 */
export function TrackClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const el = (event.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!el) return;
      track(el.dataset.track as "call" | "whatsapp" | "form", el.dataset.trackPlace);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
