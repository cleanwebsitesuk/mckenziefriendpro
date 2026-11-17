"use client";

import { useEffect, useRef, useState } from "react";
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  OPEN_CONSENT_EVENT,
} from "@/lib/consent";
import type { CommonContent } from "@/content/en/common";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __mfpLoadGa?: () => void;
  }
}

/** Removes Google Analytics cookies (_ga, _ga_XXXX, _gid) on this domain and its parent. */
function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((part) => part.split("=")[0].trim())
    .filter((name) => /^(_ga|_gid|_gat)/.test(name));
  const host = location.hostname;
  const parts = host.split(".");
  const domains = ["", host];
  for (let i = 1; i < parts.length - 1; i++) domains.push(`.${parts.slice(i).join(".")}`);
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

function saveChoice(choice: Choice) {
  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ v: CONSENT_VERSION, t: Date.now(), analytics: choice }),
    );
  } catch {
    // Private browsing can block storage. The choice still applies to this visit.
  }
}

/**
 * The cookie banner. It is in the page from the start but stays hidden
 * (by CSS) unless <html data-consent="unset">, which the head script sets
 * when the visitor hasn't chosen yet. Accept and Reject are the same size
 * and style, so neither is the "easy" option.
 */
export function ConsentBanner({ content }: { content: CommonContent["consent"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const [previous, setPrevious] = useState<Choice | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);

  // Keep focused elements from hiding behind the banner (WCAG 2.4.11).
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--consent-h", `${el.offsetHeight}px`);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // "Cookie settings" in the footer reopens the banner.
  useEffect(() => {
    const open = (event: Event) => {
      const current = document.documentElement.getAttribute("data-consent");
      setPrevious(current === "granted" || current === "denied" ? current : null);
      returnFocus.current = (event as CustomEvent<HTMLElement | null>).detail ?? null;
      document.documentElement.setAttribute("data-consent", "unset");
      requestAnimationFrame(() => titleRef.current?.focus());
    };
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  const choose = (choice: Choice) => {
    saveChoice(choice);
    window.gtag?.("consent", "update", { analytics_storage: choice });
    if (choice === "granted") {
      window.__mfpLoadGa?.();
    } else {
      clearAnalyticsCookies();
    }
    document.documentElement.setAttribute("data-consent", choice);
    setMoreOpen(false);
    returnFocus.current?.focus();
    returnFocus.current = null;
  };

  return (
    <div ref={ref} className="consent" role="region" aria-labelledby="consent-title">
      <h2 id="consent-title" className="consent__title" tabIndex={-1} ref={titleRef}>
        {content.title}
      </h2>
      <p className="consent__body">{content.body}</p>
      {previous ? (
        <p className="consent__status">{previous === "granted" ? content.statusAccepted : content.statusRejected}</p>
      ) : null}
      <p id="consent-more" className="consent__more" hidden={!moreOpen}>
        {content.more} <a href="/privacy">{content.privacyLink}</a>
      </p>
      <div className="consent__actions">
        <button
          type="button"
          className="consent__more-toggle"
          aria-expanded={moreOpen}
          aria-controls="consent-more"
          onClick={() => setMoreOpen((open) => !open)}
        >
          {content.moreLabel}
        </button>
        <button type="button" className="btn btn--navy" onClick={() => choose("granted")}>
          {content.accept}
        </button>
        <button type="button" className="btn btn--navy" onClick={() => choose("denied")}>
          {content.reject}
        </button>
      </div>
    </div>
  );
}

/** Footer button that reopens the cookie banner. Hidden when JavaScript is off (nothing loads then anyway). */
export function CookieSettingsButton({ label, className = "cookie-settings" }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={(event) =>
        window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT, { detail: event.currentTarget }))
      }
    >
      {label}
    </button>
  );
}
