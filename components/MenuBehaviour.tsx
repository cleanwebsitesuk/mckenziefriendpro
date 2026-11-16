"use client";

import { useEffect } from "react";

/**
 * Small extras for the full-screen menu, which already opens and closes
 * without JavaScript: Escape closes it, choosing a link closes it, and the
 * page behind it is taken out of reach of the keyboard and screen readers
 * while it is open.
 */
export function MenuBehaviour() {
  useEffect(() => {
    const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
    if (!menu) return;
    const summary = menu.querySelector("summary");
    const behind = () => document.querySelectorAll<HTMLElement>("main, .site-footer, .sticky-bar, .site-header__logo, .urgent-link");

    const onToggle = () => behind().forEach((el) => (el.inert = menu.open));
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        summary?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest("a")) menu.open = false;
    };
    // Close the menu if the window grows to the desktop layout.
    const desktop = window.matchMedia("(min-width: 64em)");
    const onDesktop = () => {
      if (desktop.matches) menu.open = false;
    };

    menu.addEventListener("toggle", onToggle);
    menu.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      menu.removeEventListener("toggle", onToggle);
      menu.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, []);

  return null;
}
