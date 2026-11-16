import { Menu as MenuIcon, Phone, X } from "lucide-react";
import type { Locale } from "@/site.config";
import { contactLinks, localePath } from "@/lib/site";
import type { CommonContent } from "@/content/en/common";
import { siteConfig } from "@/site.config";
import { ContactButtons } from "./ContactButtons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MenuBehaviour } from "./MenuBehaviour";
import { SiteLink } from "./SiteLink";

type Props = { locale: Locale; common: CommonContent; path?: string };

export function Header({ locale, common, path = "/" }: Props) {
  const links = contactLinks(locale);
  const homeLabel = `${siteConfig.brandName}, ${common.homeLabel}`;
  // Home page only: no menu or page links, just the logo and the call button.
  const single = siteConfig.homepageOnly;

  return (
    <header className="site-header on-navy">
      <div className="container site-header__inner">
        <SiteLink href={localePath(locale, "/")} className="site-header__logo" aria-label={homeLabel}>
          <Logo />
        </SiteLink>

        {single ? null : (
          <>
        <nav className="site-nav" aria-label={common.navLabel}>
          <ul>
            {common.nav.map((item) => (
              <li key={item.href}>
                <SiteLink href={localePath(locale, item.href)}>{item.label}</SiteLink>
              </li>
            ))}
          </ul>
        </nav>
          </>
        )}

        <div className="site-header__actions">
          <div className="site-header__lang">
            <LanguageSwitcher locale={locale} common={common} path={path} />
          </div>
          <a className={`btn btn--primary btn--compact site-header__call${single ? " site-header__call--always" : ""}`} href={links.callHref} data-track="call" data-track-place="header">
            <Phone aria-hidden="true" size={18} strokeWidth={2.25} />
            {common.cta.call}
          </a>

          {single ? null : (
            <>
          {/* Full-screen menu for phones and tablets. Built on <details>, so it opens without JavaScript. */}
          <details className="menu" data-menu>
            <summary className="menu__toggle">
              <MenuIcon className="menu__icon-open" aria-hidden="true" size={26} />
              <X className="menu__icon-close" aria-hidden="true" size={26} />
              <span className="visually-hidden">{common.menu.label}</span>
            </summary>
            <div className="menu__panel">
              <div className="menu__logo" aria-hidden="true">
                <Logo />
              </div>
              <nav aria-label={common.menu.navLabel}>
                <ul className="menu__list">
                  {common.nav.map((item) => (
                    <li key={item.href}>
                      <SiteLink href={localePath(locale, item.href)}>{item.label}</SiteLink>
                    </li>
                  ))}
                  <li>
                    <SiteLink href={localePath(locale, common.urgentNav.href)} className="menu__urgent">
                      {common.urgentNav.label}
                    </SiteLink>
                  </li>
                </ul>
              </nav>
              <LanguageSwitcher locale={locale} common={common} path={path} />
              <ContactButtons locale={locale} common={common} surface="navy" place="menu" />
            </div>
          </details>
            </>
          )}
        </div>
      </div>
      {single ? null : <MenuBehaviour />}
    </header>
  );
}
