import { Check, Minus, Phone } from "lucide-react";
import type { Locale } from "@/site.config";
import { contactLinks, formatCheckedDate } from "@/lib/site";
import type { CommonContent } from "@/content/en/common";
import type { HomeContent } from "@/content/en/home";
import { Text } from "../Placeholder";

type Props = { locale: Locale; common: CommonContent; content: HomeContent["comparison"] };

/**
 * The cost comparison: the strongest section on the page.
 * Our card comes first in the markup, so it is first on phones.
 * No prices are shown for us in the MVP (showPrices is false in site.config.ts).
 */
export function CostComparison({ locale, common, content }: Props) {
  const links = contactLinks(locale);
  const [beforeDate, afterDate] = content.figuresNote.text.split("{date}");

  return (
    <section className="section comparison" aria-labelledby="comparison-title">
      <div className="container">
        <div className="comparison__head">
          <h2 id="comparison-title" className="comparison__title">
            {content.heading}
          </h2>
          <p className="comparison__intro">{content.intro}</p>
        </div>

        <div className="comparison__grid">
          <article className="compare-card compare-card--ours on-navy" aria-labelledby="compare-ours">
            <p className="compare-card__badge">{content.ours.badge}</p>
            <h3 id="compare-ours" className="compare-card__title">
              {content.ours.title}
            </h3>
            <ul className="compare-list">
              {content.ours.points.map((point) => (
                <li key={point}>
                  <Check aria-hidden="true" size={20} strokeWidth={2.75} />
                  {point}
                </li>
              ))}
            </ul>
            <a className="btn btn--primary" href={links.callHref} data-track="call" data-track-place="comparison">
              <Phone aria-hidden="true" size={20} strokeWidth={2.25} />
              {common.cta.call}
            </a>
          </article>

          <article className="compare-card" aria-labelledby="compare-lawyers">
            <h3 id="compare-lawyers" className="compare-card__title">
              {content.lawyers.title}
            </h3>
            <p className="compare-card__cost">
              <span className="compare-card__cost-label">{content.lawyers.costLabel}</span>{" "}
              <strong className="cost-figure">{content.lawyers.cost}</strong>
            </p>
            <p className="compare-card__note">{content.lawyers.note}</p>
            <ul className="compare-list">
              {content.lawyers.points.map((point) => (
                <li key={point.text}>
                  <Minus aria-hidden="true" size={20} strokeWidth={2.5} />
                  <span>
                    {point.text}
                    {point.cost ? <strong className="cost-figure">{point.cost}</strong> : null}
                  </span>
                </li>
              ))}
            </ul>
            {/* Where the figures come from: one tap away, not on show. Works without hover. */}
            <details className="figures-note">
              <summary>{content.figuresNote.label}</summary>
              <p>
                {beforeDate}
                <Text>{formatCheckedDate(locale)}</Text>
                {afterDate}
              </p>
            </details>
          </article>

          <article className="compare-card" aria-labelledby="compare-alone">
            <h3 id="compare-alone" className="compare-card__title">
              {content.alone.title}
            </h3>
            <ul className="compare-list">
              {content.alone.points.map((point) => (
                <li key={point}>
                  <Minus aria-hidden="true" size={20} strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>

      </div>
    </section>
  );
}
