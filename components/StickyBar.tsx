import { MessageCircle, PenLine, Phone } from "lucide-react";
import { siteConfig, type Locale } from "@/site.config";
import { contactLinks } from "@/lib/site";
import type { CommonContent } from "@/content/en/common";

/** Call · WhatsApp · Message, fixed to the bottom of the screen on phones and tablets. */
export function StickyBar({ locale, common }: { locale: Locale; common: CommonContent }) {
  const links = contactLinks(locale);
  // Home page only: there is no contact page yet, so "Message" is left out.
  const single = siteConfig.homepageOnly;
  return (
    <nav className={`sticky-bar${single ? " sticky-bar--two" : ""}`} aria-label={common.stickyBar.label}>
      <a href={links.callHref} className="sticky-bar__item sticky-bar__item--call" data-track="call" data-track-place="sticky-bar">
        <Phone aria-hidden="true" size={20} strokeWidth={2.25} />
        {common.stickyBar.call}
      </a>
      <a href={links.whatsappHref} className="sticky-bar__item" data-track="whatsapp" data-track-place="sticky-bar">
        <MessageCircle aria-hidden="true" size={20} strokeWidth={2.25} />
        {common.stickyBar.whatsapp}
      </a>
      {single ? null : (
        <a href={links.messageHref} className="sticky-bar__item">
          <PenLine aria-hidden="true" size={20} strokeWidth={2.25} />
          {common.stickyBar.message}
        </a>
      )}
    </nav>
  );
}
