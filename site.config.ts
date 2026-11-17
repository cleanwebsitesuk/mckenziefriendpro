/**
 * McKenzie Friend Pro: the one settings file.
 *
 * Everything a non-developer is likely to change lives here: contact details,
 * the brand name, the price switch, which translations are live, the
 * "working with us" blocks and the date the cost comparison was last checked.
 *
 * Anything left empty shows on the site as a clearly marked [PLACEHOLDER].
 * Run `npm run placeholders` to list what is still missing.
 */

export type Locale = "en" | "ur" | "hi" | "pa";

export const siteConfig = {
  brandName: "McKenzie Friend Pro",
  siteUrl: "https://mckenziefriend.pro",

  person: {
    name: "Shazad Akhtar",
    firstName: "Shazad",
    initials: "SA",
  },

  /**
   * Phone. `e164` is the dial-able number (e.g. "+447700900123"),
   * `display` is how it is written on the page (e.g. "07700 900 123").
   * While empty, call buttons fall back to the Contact page.
   */
  phone: {
    e164: "+447908078852",
    display: "07908 078852",
  },

  /** WhatsApp number in international format, e.g. "+447700900123". */
  whatsapp: {
    e164: "+447908078852",
  },

  /** Public contact email. Leave empty until it exists: the privacy page and footer leave it out. */
  email: "",

  /**
   * The company behind the trading name. UK law requires these details on
   * the website (footer, every page) and they are used on the privacy page.
   * The name is written exactly as it appears at Companies House.
   */
  company: {
    legalName: "MCKENZIEFRIEND AI LTD",
    number: "17362145",
    registeredIn: "England and Wales",
    registeredOffice: "64 Lincoln Street, Birmingham, England, B12 9EX",
    icoReference: "ZC207595",
  },

  /**
   * Prices. The MVP shows no prices anywhere. Leave this false until fees
   * are published; the comparison section and (later) a fees page read it.
   * Wording rule for now: the fee structure is not set, so the site says
   * nothing about quotes, prices or how fees work. The only cost statement is
   * that the first call is free.
   */
  showPrices: false,

  /**
   * Home page only. While true, the site is a single page: the menu, the
   * footer page and legal links, and "Message" in the sticky bar are hidden,
   * and the tiles and cards on the home page are not links. Set to false once
   * the other pages are built.
   */
  homepageOnly: true,

  /**
   * Reviews. The "What clients say" section stays off the site until this is
   * true AND genuine, anonymised reviews have been added to the content files.
   */
  showReviews: false,

  /** "Meet Shazad" on the home page. Hidden for now; set to true once his introduction is written. */
  showMeet: false,

  /**
   * Common questions. Hidden from the home page for now. Set to true to show
   * the section again (the FAQ schema for search engines follows this switch).
   */
  showFaqs: false,

  /**
   * Languages. A translation stays completely hidden (no page, no switcher
   * entry, no hreflang) until `reviewed` is set to true by Shazad or a
   * native speaker. English is always on.
   */
  languages: {
    en: { nativeName: "English", dir: "ltr", reviewed: true },
    ur: { nativeName: "اردو", dir: "rtl", reviewed: false },
    hi: { nativeName: "हिंदी", dir: "ltr", reviewed: false },
    pa: { nativeName: "ਪੰਜਾਬੀ", dir: "ltr", reviewed: false },
  } satisfies Record<Locale, { nativeName: string; dir: "ltr" | "rtl"; reviewed: boolean }>,

  /**
   * The date the cost-comparison figures were last checked against their
   * sources, as "YYYY-MM-DD". Shown in the footnote under the comparison.
   * Leave empty until someone has actually checked them.
   */
  comparisonCheckedDate: "2026-11-16",

  /**
   * "What working with us looks like": descriptive blocks, not numbered
   * steps. Edit, reorder, add or remove freely. One list per language.
   * (Changed during review: block 1 no longer says "honestly ... whether we
   * can help", and the block about cost was removed until fees are set.)
   */
  workingWithUs: {
    en: [
      {
        lead: "It starts with a conversation.",
        body: "Call or message us, whenever suits you. Tell us what's happening in your own words and in your own language. We'll listen, and we'll explain how we can help.",
      },
      {
        lead: "We prepare your case together.",
        body: "We help you make sense of the paperwork, fill in the right forms and put your statement and documents in order. You stay in control. It's your case, set out clearly.",
      },
      {
        lead: "We're beside you on the day.",
        body: "You won't walk into court alone. We sit with you, take notes and quietly help you keep on track.",
      },
      {
        lead: "And we're still here afterwards.",
        body: "We'll go through what the judge decided and what it means, and help you plan the next step.",
      },
    ],
  } as Partial<Record<Locale, { lead: string; body: string }[]>>,

  /**
   * Analytics: Google Analytics 4, loaded directly (no Tag Manager). Nothing
   * loads from Google until a visitor accepts analytics cookies in the banner
   * (see lib/consent.ts). Leave ga4Id empty to switch analytics and the cookie
   * banner off completely.
   * Call and WhatsApp taps are sent as GA4 events "call_click" and
   * "whatsapp_click", each with a "click_location" parameter
   * (see components/TrackClicks.tsx and the README).
   */
  analytics: {
    ga4Id: "G-RYSL9YJTCN",
  },
};

export type SiteConfig = typeof siteConfig;
