import { siteConfig, type Locale } from "@/site.config";

/** Wraps a description in the house placeholder format. */
export const placeholder = (description: string) => `[PLACEHOLDER: ${description}]`;

export const isPlaceholder = (value: string) => value.trim().startsWith("[PLACEHOLDER");

const digits = (value: string) => value.replace(/[^\d]/g, "");

/** Path for a page in a given language: English at the root, others under /ur, /hi, /pa. */
export function localePath(locale: Locale, path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/** Languages that are allowed to appear on the live site. */
export function liveLocales(): Locale[] {
  return (Object.keys(siteConfig.languages) as Locale[]).filter(
    (code) => siteConfig.languages[code].reviewed,
  );
}

/** Contact links. Until the numbers are set, buttons lead to the Contact page instead of breaking. */
export function contactLinks(locale: Locale) {
  const { phone, whatsapp } = siteConfig;
  const contactPage = localePath(locale, "/contact");
  return {
    callHref: phone.e164 ? `tel:${phone.e164.replace(/\s/g, "")}` : contactPage,
    whatsappHref: whatsapp.e164 ? `https://wa.me/${digits(whatsapp.e164)}` : contactPage,
    messageHref: contactPage,
    phoneDisplay: phone.display || placeholder("phone number"),
    hasPhone: Boolean(phone.e164),
    hasWhatsapp: Boolean(whatsapp.e164),
  };
}

/** "2026-01-31" -> "31 January 2026" (in the page language). */
export function formatCheckedDate(locale: Locale) {
  const raw = siteConfig.comparisonCheckedDate;
  if (!raw) return placeholder("date the comparison figures were last checked");
  const date = new Date(`${raw}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return placeholder("date the comparison figures were last checked");
  const tag = locale === "en" ? "en-GB" : locale;
  return new Intl.DateTimeFormat(tag, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}
