import { Check } from "lucide-react";
import type { Locale } from "@/site.config";
import type { CommonContent } from "@/content/en/common";
import type { HomeContent } from "@/content/en/home";
import { ContactButtons } from "../ContactButtons";
import { HeroVisual } from "./HeroVisual";

type Props = { locale: Locale; common: CommonContent; content: HomeContent["hero"] };

export function Hero({ locale, common, content }: Props) {
  return (
    <section className="hero on-navy" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 id="hero-title" className="hero__title">
            {content.titleLines.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </h1>
          <p className="hero__lead">{content.lead}</p>
          <ContactButtons locale={locale} common={common} surface="navy" place="hero" showNumber />
          <ul className="hero__trust">
            {content.trust.map((item) => (
              <li key={item}>
                <Check aria-hidden="true" size={18} strokeWidth={2.75} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual content={content.sheet} />
      </div>
    </section>
  );
}
