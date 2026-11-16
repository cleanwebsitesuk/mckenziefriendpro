import localFont from "next/font/local";

/**
 * Fonts are served from this site, not from Google: faster on phones and no
 * visitor data sent to a third party. Both are SIL Open Font Licence.
 *
 * The Urdu, Hindi and Punjabi fonts (Noto Nastaliq Urdu, Noto Sans
 * Devanagari, Noto Sans Gurmukhi) are added with the translated pages, so
 * English pages never download them.
 */
export const sourceSerif = localFont({
  src: "./fonts/source-serif-4-latin-wght-normal.woff2",
  weight: "200 900",
  style: "normal",
  display: "swap",
  variable: "--font-source-serif",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const sourceSans = localFont({
  src: "./fonts/source-sans-3-latin-wght-normal.woff2",
  weight: "200 900",
  style: "normal",
  display: "swap",
  variable: "--font-source-sans",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});
