import { siteConfig, type Locale } from "@/site.config";
import type { HomeContent } from "@/content/en/home";

type Props = { locale: Locale; content: HomeContent["working"] };

/** Descriptive blocks along a path line. Not numbered: the blocks come from site.config.ts. */
export function WorkingWithUs({ locale, content }: Props) {
  const blocks = siteConfig.workingWithUs[locale] ?? siteConfig.workingWithUs.en ?? [];
  return (
    <section className="section" aria-labelledby="working-title">
      <div className="container working">
        <h2 id="working-title" className="section__title working__title">
          {content.heading}
        </h2>
        <ul className="path">
          {blocks.map((block) => (
            <li key={block.lead} className="path__item">
              <h3 className="path__lead">{block.lead}</h3>
              <p>{block.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
