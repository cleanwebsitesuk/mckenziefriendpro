import { Check, FileText } from "lucide-react";
import type { HomeContent } from "@/content/en/home";
import { Chairs } from "../graphics/Chairs";

/**
 * The hero visual. A "ready for court" checklist on a small stack of papers,
 * showing at a glance what people get, with the form numbers they will
 * recognise. The signature two chairs sit on the corner.
 * The words are real text (not part of an image), so they translate and
 * flip to right-to-left with the rest of the page.
 */
export function HeroVisual({ content }: { content: HomeContent["hero"]["sheet"] }) {
  return (
    <div className="hero__visual">
      <div className="case-stack">
        <div className="case-sheet">
          <p className="case-sheet__title">{content.title}</p>
          <ul>
            {content.items.map((item) => (
              <li key={item.text}>
                <span className="tick-list__mark tick-list__mark--yes">
                  <Check aria-hidden="true" size={16} strokeWidth={3} />
                </span>
                <span>
                  {item.text}
                  {item.codes.length > 0 ? (
                    <span className="case-sheet__codes">
                      {item.codes.map((code) => (
                        <span key={code} className="form-code" lang="en" dir="ltr">
                          <FileText aria-hidden="true" size={15} strokeWidth={2.25} />
                          {code}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="case-stack__chairs" aria-hidden="true">
          <Chairs plain />
        </div>
      </div>
    </div>
  );
}
