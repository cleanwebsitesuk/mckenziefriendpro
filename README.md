# McKenzie Friend Pro: website

The website for mckenziefriend.pro, built with Next.js for GitHub + Vercel.

**Status: home page only.** The English home page is live-ready for phones and desktop. `homepageOnly` in `site.config.ts` keeps it a single page. The other pages, the contact form, the legal pages and the Urdu, Hindi and Punjabi versions come later.

## Run it

You need Node.js 20 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run placeholders # list everything that still needs real content
npm run typecheck
```

## Put it on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose "Add New… → Project" and import the repository.
3. Accept the defaults (framework: Next.js). No environment variables are needed.
4. Add the domain `mckenziefriend.pro` under Project → Settings → Domains.

Every page is pre-rendered as static HTML, so the site is fast and cheap to host.

## The one settings file: `site.config.ts`

| Setting | What it does |
| --- | --- |
| `brandName` | The name used in the logo, footer, page titles and schema. |
| `phone.e164`, `phone.display` | The number call buttons dial, and how it is written on the page. |
| `whatsapp.e164` | The number the WhatsApp buttons open. |
| `email` | Public contact email. |
| `homepageOnly` | `true` for launch. The site is a single page: no menu, no links to pages that are not built yet. Set to `false` when the other pages exist. |
| `showPrices` | `false` for the MVP. Nothing on the site shows a price while this is off. |
| `showReviews` | `false` for now. The "What clients say" section appears only when this is `true` and real reviews are in `content/en/home.ts`. |
| `showFaqs` | `false` for now. Set to `true` to bring back "Common questions" on the home page, along with its FAQ schema. |
| `showMeet` | `false` for now. Set to `true` to show "Meet Shazad" on the home page once his introduction is written. |
| `languages.*.reviewed` | A translation stays hidden until its flag is set to `true` by Shazad or a native speaker. |
| `comparisonCheckedDate` | The date in the cost-comparison footnote ("Figures checked …"), as `YYYY-MM-DD`. |
| `workingWithUs` | The "What working with us looks like" blocks. Edit, reorder, add or remove. |
| `analytics` | `ga4Id` is the GA4 measurement ID. Leave it empty to switch analytics and the cookie banner off. |

If the phone or WhatsApp number is ever removed, the buttons fall back to `/contact` instead of a broken link.

## Where the words live

- `content/en/home.ts`: the home page.
- `content/en/common.ts`: navigation, buttons, footer, helplines, the footer disclaimer.
- `site.config.ts`: the "working with us" blocks.

Text marked `APPROVED COPY` in those files is used exactly as supplied. Please do not reword it without sign-off. Text marked `REVISED` was changed at Shazad's request during review (16 November 2026), with the old wording noted beside it. Anything written as `[PLACEHOLDER: …]` shows on the page in a yellow dashed box so it cannot be missed.

## How the project is laid out

```
app/
  (en)/layout.tsx      English shell: <html lang>, header, footer, sticky bar
  (en)/page.tsx        Home page: sections in order, meta tags, schema
  (en)/not-found.tsx   404 page
  fonts/               Source Serif 4 and Source Sans 3 (self-hosted, OFL)
  sitemap.ts, robots.ts, icon.svg
components/
  Header, Footer, StickyBar, ContactButtons, LanguageSwitcher, Logo …
  home/                One file per home-page section
  graphics/            The SVG graphics set (see below)
content/en/            All English copy
lib/                   Links, dates, schema
styles/
  tokens.css           Colours, type, spacing, with the colour rules written down
  base.css             Type, links, buttons, helpers
  layout.css           Header, menu, footer, sticky bar
  home.css             Home-page sections
scripts/list-placeholders.mjs
site.config.ts
```

## Rules the code follows (from the brief)

- **Role.** We never say "represent you", "act for you" or "speak for you", and never call ourselves lawyers. The footer disclaimer is on every page.
- **Tone on the role.** The home page presents the McKenzie Friend as the bridge between going to court alone and hiring a legal team. It does not suggest a solicitor or barrister is the better choice. What the client does themselves (speaking, signing) is described as staying in control.
- **Claims.** No "cheapest", "No.1", "leading", success rates or guarantees. Scope is England and Wales only.
- **Prices and fees.** Nothing is said about prices, quotes or fee structure until fees are set. `showPrices` is the switch for later. "Free" is used only for the first call.
- **Reviews.** The section is hidden until genuine, anonymised reviews are supplied. No review or rating schema until then.
- **Colour.** Navy leads. Aqua and sky are accents and are never text on white. Dark red appears only on competitor cost figures (and, later, form errors).
- **Graphics.** Flat SVG only. No photographs, stock images, AI images or people. No gavels, scales, columns or handshakes.

## Graphics set (so far)

All in `components/graphics/`, drawn as inline SVG so they add no extra downloads:

| Graphic | File | Used |
| --- | --- | --- |
| Logo: two rounded bars + serif wordmark | `components/Logo.tsx`, `app/icon.svg` | Header, menu, footer, favicon |
| Two chairs side by side ("beside you") | `Chairs.tsx` | Hero, on the corner of the "Ready for court" sheet |
| "Ready for court" sheet on stacked papers | `components/home/HeroVisual.tsx` + CSS | Hero |
| Stacked documents with a tick | `Documents.tsx` | What we help with (tablet and desktop) |
| Speech bubbles in four scripts | `SpeechBubbles.tsx` | Languages band |
| Clock with a moon | `ClockMoon.tsx` | Final call to action |
| "SA" monogram | `Monogram.tsx` | Meet Shazad |
| Path line | CSS in `styles/home.css` | What working with us looks like |

Still to draw, with the pages that use them: form with ticks, magnifier over a document, shield, England and Wales map pin, and the stage graphics for Family court help.

The words اردو, हिंदी and ਪੰਜਾਬੀ in the speech bubbles are stored as outlines (`scriptWords.ts`), shaped from Noto Nastaliq Urdu, Noto Sans Devanagari and Noto Sans Gurmukhi. They look right on every device, and English pages never download those fonts.

Icons are from Lucide (`lucide-react`).

## Phones first

- Designed from 360px up, with no sideways scrolling (also checked at 320px).
- The headline and both buttons are on the first screen at 360 × 640.
- Buttons and stand-alone links are at least 48px tall. Body text is 16px or larger.
- Sticky bottom bar: Call · WhatsApp · Message (hidden on desktop).
- Full-screen menu built on `<details>`, so it opens even if JavaScript fails. JavaScript adds Escape-to-close and keeps the keyboard inside the open menu.
- Nothing relies on hover.

## Accessibility (WCAG 2.2 AA)

- One `h1`, ordered headings, landmarks, a skip link, visible keyboard focus on every surface.
- Colour contrast checked for every text and background pair in `tokens.css`.
- Expanding items (the menu, "About these figures", and the FAQs when shown) are native `<details>` elements.
- Motion is limited to small state changes and is switched off for people who ask for reduced motion.
- Automated check (axe-core, WCAG 2.2 AA rules): no issues on the home page at phone and desktop sizes, or with the menu open. A manual screen-reader pass is still worth doing before launch.

## SEO

- Unique title and description, canonical URL, Open Graph tags.
- `sitemap.xml` and `robots.txt` (add each new page to `app/sitemap.ts`).
- Schema on the home page: `ProfessionalService` (with 24/7 opening hours) and `Person` (Shazad Akhtar). `FAQPage` is added only while the questions are visible (`showFaqs`). Deliberately not `LegalService` or `Attorney`.
- hreflang tags are added with the translated pages.

## Translations (next stage)

The structure is ready:

- English lives at `/`. Urdu, Hindi and Punjabi will live at `/ur/`, `/hi/`, `/pa/`, in their own root layout (`app/(translated)/[lang]/layout.tsx`) so `<html>` carries the right language and, for Urdu, right-to-left direction.
- Every component takes its words from a content file, so a translation is a copy of `content/en/` in the new language.
- The stylesheets use logical properties (start/end, not left/right), so the Urdu layout flips without a second stylesheet.
- The header switcher (`LanguageSwitcher.tsx`) lists languages by their own names and only shows those marked `reviewed`. With English alone it shows nothing.

## Analytics and cookies

Google Analytics 4 is loaded directly with `gtag.js`. There is no Tag Manager.
The measurement ID is in `site.config.ts` under `analytics.ga4Id`. Empty it to
switch analytics and the cookie banner off.

**Nothing loads from Google until a visitor accepts.**

- A small script in `<head>` (`lib/consent.ts`) runs first. It sets Google Consent Mode v2 defaults to "denied" and reads the visitor's saved choice.
- The banner (`components/ConsentBanner.tsx`, wording in `content/en/common.ts`) asks once: "Is it okay if we use cookies?". "Accept" and "No thanks" are the same size and style, as UK guidance expects. "More info" explains that the cookies come from Google and how long they last.
- Accept: consent is updated to `analytics_storage: granted`, then `gtag/js` is appended and the page view is sent. No thanks: nothing loads, and any `_ga` cookies are deleted.
- The choice is kept in the browser for 12 months, then the banner asks again. Raise `CONSENT_VERSION` in `lib/consent.ts` to ask everyone again (for example if you add advertising tags).
- "Cookie settings" in the footer reopens the banner, so people can change their mind.
- Advertising signals (`ad_storage`, `ad_user_data`, `ad_personalization`) stay denied. Accepting only switches on `analytics_storage`. If you add Google Ads or remarketing, the banner wording and the consent update both need changing first, and `CONSENT_VERSION` must be raised so everyone is asked again.

### Events

Calls and WhatsApp taps are sent as GA4 events (`components/TrackClicks.tsx`):

- `call_click`, with a `click_location` parameter
- `whatsapp_click`, with a `click_location` parameter

`click_location` is one of: `header`, `hero`, `hero-number`, `urgent-strip`,
`comparison`, `final-cta`, `final-cta-number`, `sticky-bar`, `footer` (and
`menu` once the menu is switched back on).

A tap is only sent while `<html data-consent="granted">`, so taps made before
the visitor accepts are dropped rather than sent later.

In GA4, mark `call_click` and `whatsapp_click` as key events under
Admin -> Events.

## Privacy

With analytics accepted, Google Analytics processes visitors' usage data on the business's behalf, so the site needs a privacy notice before or soon after launch. The contact form (later) will collect the minimum, with no uploads.
