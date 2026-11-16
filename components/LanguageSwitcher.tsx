import { siteConfig, type Locale } from "@/site.config";
import { liveLocales, localePath } from "@/lib/site";
import type { CommonContent } from "@/content/en/common";

type Props = {
  locale: Locale;
  common: CommonContent;
  /** The current page, without any language prefix, so switching keeps the reader on the same page. */
  path?: string;
};

/**
 * Language switcher, using each language's own name.
 * It only lists languages marked `reviewed` in site.config.ts, and shows
 * nothing at all while English is the only live language.
 * (Remembering the choice and the "suggest, never redirect" prompt arrive
 * with the translations.)
 */
export function LanguageSwitcher({ locale, common, path = "/" }: Props) {
  const locales = liveLocales();
  if (locales.length < 2) return null;
  return (
    <nav className="lang-switcher" aria-label={common.languageSwitcher.label}>
      <ul>
        {locales.map((code) => {
          const language = siteConfig.languages[code];
          return (
            <li key={code}>
              <a
                href={localePath(code, path)}
                lang={code}
                dir={language.dir}
                hrefLang={code}
                aria-current={code === locale ? "true" : undefined}
                data-set-language={code}
              >
                {language.nativeName}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
