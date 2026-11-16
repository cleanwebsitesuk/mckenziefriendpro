import { Check } from "lucide-react";
import type { HomeContent } from "@/content/en/home";

/**
 * What a McKenzie Friend does, framed as the bridge between going to court
 * alone and hiring a legal team. Two positive lists: the work we do, and how
 * the client stays in control (they check, they sign, they speak).
 */
export function Role({ content }: { content: HomeContent["role"] }) {
  const lists = [
    { label: content.doLabel, items: content.do },
    { label: content.controlLabel, items: content.control },
  ];

  return (
    <section className="section" aria-labelledby="role-title">
      <div className="container">
        <div className="role">
          <div className="role__intro">
            <h2 id="role-title" className="section__title">
              {content.heading}
            </h2>
            <p className="role__lead">{content.lead}</p>
          </div>

          <div className="role__lists">
            {lists.map((list) => (
              <div key={list.label}>
                <h3 className="role__label">{list.label}</h3>
                <ul className="tick-list">
                  {list.items.map((item) => (
                    <li key={item}>
                      <span className="tick-list__mark tick-list__mark--yes">
                        <Check aria-hidden="true" size={16} strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
