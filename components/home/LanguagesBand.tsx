import type { HomeContent } from "@/content/en/home";
import { SpeechBubbles } from "../graphics/SpeechBubbles";

export function LanguagesBand({ content }: { content: HomeContent["languages"] }) {
  return (
    <section className="band on-navy" aria-labelledby="languages-title">
      <div className="container band__grid">
        <div>
          <h2 id="languages-title" className="band__title">
            {content.heading}
          </h2>
          {/* The wrapper hides the separator dot wherever a language starts a new line. */}
          <div className="language-list">
            <ul>
              {content.list.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
          <p className="band__body">{content.body}</p>
        </div>
        <SpeechBubbles className="band__graphic" label={content.graphicAlt} />
      </div>
    </section>
  );
}
