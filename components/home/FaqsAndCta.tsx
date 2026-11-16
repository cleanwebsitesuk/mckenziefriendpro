import { Plus } from "lucide-react";
import { siteConfig, type Locale } from "@/site.config";
import { localePath } from "@/lib/site";
import type { CommonContent } from "@/content/en/common";
import type { HomeContent } from "@/content/en/home";
import { ContactButtons } from "../ContactButtons";
import { SiteLink } from "../SiteLink";
import { ClockMoon } from "../graphics/ClockMoon";

/** Shown only when showFaqs is true in site.config.ts. */
export function Faqs({ locale, content }: { locale: Locale; content: HomeContent["faqs"] }) {
  if (!siteConfig.showFaqs) return null;
  return (
    <section className="section" aria-labelledby="faqs-title">
      <div className="container faqs">
        <h2 id="faqs-title" className="section__title">
          {content.heading}
        </h2>
        <div className="faqs__list">
          {content.items.map((faq) => (
            <details key={faq.question} className="faq">
              <summary>
                <h3>{faq.question}</h3>
                <Plus className="faq__icon" aria-hidden="true" size={24} />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
          <p className="faqs__more">
            <SiteLink href={localePath(locale, content.more.href)} className="text-link">
              {content.more.label}
            </SiteLink>
          </p>
        </div>
      </div>
    </section>
  );
}

type CtaProps = { locale: Locale; common: CommonContent; content: HomeContent["finalCta"] };

export function FinalCta({ locale, common, content }: CtaProps) {
  return (
    <section className="band band--cta on-navy" aria-labelledby="final-cta-title">
      <div className="container final-cta">
        <div>
          <h2 id="final-cta-title" className="band__title">
            {content.heading}
          </h2>
          <p className="band__body">{content.body}</p>
          <ContactButtons locale={locale} common={common} surface="navy" place="final-cta" showNumber />
        </div>
        <ClockMoon className="final-cta__graphic" />
      </div>
    </section>
  );
}
