import { Armchair, ChevronRight, FileCheck, FileSearch, Files, ReceiptPoundSterling, type LucideIcon } from "lucide-react";
import { siteConfig, type Locale } from "@/site.config";
import { localePath } from "@/lib/site";
import type { HomeContent } from "@/content/en/home";
import { PageLink } from "../SiteLink";
import { Documents } from "../graphics/Documents";

const icons: Record<string, LucideIcon> = {
  forms: FileCheck,
  documents: Files,
  factFinding: FileSearch,
  onTheDay: Armchair,
  civil: ReceiptPoundSterling,
};

type Props = { locale: Locale; content: HomeContent["help"] };

export function HelpCards({ locale, content }: Props) {
  return (
    <section className="section" aria-labelledby="help-title">
      <div className="container">
        <h2 id="help-title" className="section__title">
          {content.heading}
        </h2>
        <ul className="help-grid">
          {content.cards.map((card) => {
            const Icon = icons[card.icon] ?? FileCheck;
            return (
              <li key={card.href}>
                <PageLink href={localePath(locale, card.href)} className="help-card">
                  <span className="help-card__icon">
                    <Icon aria-hidden="true" size={26} strokeWidth={1.9} />
                  </span>
                  <span className="help-card__body">
                    <span className="help-card__title">{card.title}</span>
                    <span className="help-card__text">{card.text}</span>
                  </span>
                  {siteConfig.homepageOnly ? null : <ChevronRight className="help-card__chevron" aria-hidden="true" size={22} />}
                </PageLink>
              </li>
            );
          })}
          <li className="help-grid__graphic" aria-hidden="true">
            <Documents />
          </li>
        </ul>
      </div>
    </section>
  );
}
