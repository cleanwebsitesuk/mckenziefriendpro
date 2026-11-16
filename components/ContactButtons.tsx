import { MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/site.config";
import { contactLinks } from "@/lib/site";
import type { CommonContent } from "@/content/en/common";

type Props = {
  locale: Locale;
  common: CommonContent;
  /** "navy" when the buttons sit on a navy background, "light" on white. */
  surface?: "navy" | "light";
  /** Where on the page the buttons are, for conversion tracking. */
  place: string;
  /** Also print the phone number beside the buttons (hidden on phones, where the button dials). */
  showNumber?: boolean;
};

/** The two main actions, always in the same order: call first, WhatsApp second. */
export function ContactButtons({ locale, common, surface = "navy", place, showNumber = false }: Props) {
  const links = contactLinks(locale);
  return (
    <div className="cta-row">
      <a className="btn btn--primary" href={links.callHref} data-track="call" data-track-place={place}>
        <Phone aria-hidden="true" size={20} strokeWidth={2.25} />
        {common.cta.call}
      </a>
      <a
        className={`btn ${surface === "navy" ? "btn--outline-light" : "btn--outline"}`}
        href={links.whatsappHref}
        data-track="whatsapp"
        data-track-place={place}
      >
        <MessageCircle aria-hidden="true" size={20} strokeWidth={2.25} />
        {common.cta.whatsapp}
      </a>
      {showNumber && links.hasPhone ? (
        <p className="cta-row__number">
          {common.cta.orCall}{" "}
          <a href={links.callHref} data-track="call" data-track-place={`${place}-number`}>
            {links.phoneDisplay}
          </a>
        </p>
      ) : null}
    </div>
  );
}
