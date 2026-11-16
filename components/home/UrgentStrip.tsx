import { Clock } from "lucide-react";
import type { Locale } from "@/site.config";
import { contactLinks } from "@/lib/site";
import type { CommonContent } from "@/content/en/common";
import type { HomeContent } from "@/content/en/home";

type Props = { locale: Locale; common: CommonContent; content: HomeContent["urgent"] };

export function UrgentStrip({ locale, common, content }: Props) {
  const links = contactLinks(locale);
  return (
    <aside className="urgent-strip" aria-label={common.urgentNav.label}>
      <div className="container urgent-strip__inner">
        <Clock className="urgent-strip__icon" aria-hidden="true" size={28} strokeWidth={2} />
        <p>
          <strong>{content.question}</strong>{" "}
          <a href={links.callHref} data-track="call" data-track-place="urgent-strip">
            {content.action}
          </a>{" "}
          {content.reassurance}
        </p>
      </div>
    </aside>
  );
}
