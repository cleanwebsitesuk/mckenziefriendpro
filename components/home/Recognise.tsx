import { FileText } from "lucide-react";
import type { Locale } from "@/site.config";
import { localePath } from "@/lib/site";
import type { HomeContent } from "@/content/en/home";
import { PageLink } from "../SiteLink";

type Props = { locale: Locale; content: HomeContent["recognise"] };

/**
 * "Is this what you're going through?" Each tile names a situation in plain
 * words and, where there is one, shows the court form number in the corner,
 * so people can spot their own case at a glance. Form numbers stay in English
 * in every language.
 */
export function Recognise({ locale, content }: Props) {
  return (
    <section className="section" aria-labelledby="recognise-title">
      <div className="container">
        <h2 id="recognise-title" className="section__title">
          {content.heading}
        </h2>
        <p className="recognise__intro">{content.intro}</p>
        <ul className="recognise-grid">
          {content.items.map((item) => (
            <li key={item.title}>
              <PageLink
                href={localePath(locale, item.href)}
                className={`recognise-card${item.code ? " recognise-card--coded" : ""}`}
              >
                <span className="recognise-card__title">{item.title}</span>
                <span className="recognise-card__text">{item.text}</span>
                {item.code ? (
                  <span className="form-code">
                    <FileText aria-hidden="true" size={15} strokeWidth={2.25} />
                    <span className="visually-hidden">{content.formLabel} </span>
                    <span lang="en" dir="ltr">
                      {item.code}
                    </span>
                  </span>
                ) : null}
              </PageLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
