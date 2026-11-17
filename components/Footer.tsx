import type { Locale } from "@/site.config";
import { siteConfig } from "@/site.config";
import { contactLinks, localePath } from "@/lib/site";
import type { CommonContent } from "@/content/en/common";
import { Logo } from "./Logo";
import { Text } from "./Placeholder";
import { SiteLink } from "./SiteLink";
import { CookieSettingsButton } from "./ConsentBanner";
import { analyticsEnabled } from "@/lib/consent";

export function Footer({ locale, common }: { locale: Locale; common: CommonContent }) {
  const { footer } = common;
  const links = contactLinks(locale);
  const pages = [...common.nav, ...footer.extraPages, common.urgentNav];
  // Home page only: no links to pages that are not built yet.
  const single = siteConfig.homepageOnly;

  return (
    <footer className="site-footer on-navy">
      <div className="container">
        <div className={`site-footer__grid${single ? " site-footer__grid--single" : ""}`}>
          <div className="site-footer__brand">
            <Logo />
            <p>{footer.coverage}</p>
            <p>{footer.availability}</p>
          </div>

          {single ? null : (
          <nav aria-labelledby="footer-pages">
            <h2 id="footer-pages" className="site-footer__heading">
              {footer.pagesHeading}
            </h2>
            <ul className="site-footer__list">
              {pages.map((item) => (
                <li key={item.href}>
                  <SiteLink href={localePath(locale, item.href)}>{item.label}</SiteLink>
                </li>
              ))}
            </ul>
          </nav>
          )}

          <div>
            <h2 className="site-footer__heading">{footer.contactHeading}</h2>
            <ul className="site-footer__list">
              <li>
                <a href={links.callHref} data-track="call" data-track-place="footer">
                  {footer.callLabel}: <Text>{links.phoneDisplay}</Text>
                </a>
              </li>
              <li>
                <a href={links.whatsappHref} data-track="whatsapp" data-track-place="footer">
                  {footer.whatsappLabel}
                </a>
              </li>
              {single ? null : (
                <li>
                  <SiteLink href={links.messageHref}>{footer.messageLabel}</SiteLink>
                </li>
              )}
            </ul>
          </div>

          <div className="site-footer__help">
            <h2 className="site-footer__heading">{footer.helpHeading}</h2>
            <p className="site-footer__emergency">{footer.emergency}</p>
            <ul className="site-footer__list site-footer__list--detailed">
              {footer.helpLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} rel="noopener noreferrer">
                    {item.label}
                  </a>
                  <span className="site-footer__detail">
                    {item.phone ? (
                      <>
                        <a href={item.phone.href}>{item.phone.display}</a>,{" "}
                      </>
                    ) : null}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__disclaimer">
          <p>{footer.disclaimer}</p>
        </div>

        <div className="site-footer__base">
          {single ? null : (
          <nav aria-label={footer.legalLabel}>
            <ul className="site-footer__legal">
              {footer.legalLinks.map((item) => (
                <li key={item.href}>
                  <SiteLink href={localePath(locale, item.href)}>{item.label}</SiteLink>
                </li>
              ))}
            </ul>
          </nav>
          )}
          {analyticsEnabled() ? <CookieSettingsButton label={footer.cookieSettings} /> : null}
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} {siteConfig.brandName}
          </p>
        </div>
      </div>
    </footer>
  );
}
