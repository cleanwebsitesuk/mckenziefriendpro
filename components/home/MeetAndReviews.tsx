import { siteConfig, type Locale } from "@/site.config";
import { localePath } from "@/lib/site";
import type { HomeContent } from "@/content/en/home";
import { Text } from "../Placeholder";
import { SiteLink } from "../SiteLink";
import { Monogram } from "../graphics/Monogram";

/** Shown only when showMeet is true in site.config.ts. */
export function MeetShehzad({ locale, content }: { locale: Locale; content: HomeContent["meet"] }) {
  if (!siteConfig.showMeet) return null;
  return (
    <section className="section" aria-labelledby="meet-title">
      <div className="container meet">
        <Monogram className="meet__monogram" initials={siteConfig.person.initials} />
        <div>
          <h2 id="meet-title" className="section__title">
            {content.heading}
          </h2>
          <p className="meet__body">
            <Text>{content.body}</Text>
          </p>
          <SiteLink href={localePath(locale, content.link.href)} className="text-link">
            {content.link.label}
          </SiteLink>
        </div>
      </div>
    </section>
  );
}

/** Shown only when showReviews is true in site.config.ts and real reviews exist. */
export function Reviews({ content }: { content: HomeContent["reviews"] }) {
  if (!siteConfig.showReviews || content.items.length === 0) return null;
  return (
    <section className="section section--tight-top" aria-labelledby="reviews-title">
      <div className="container">
        <h2 id="reviews-title" className="section__title">
          {content.heading}
        </h2>
        <ul className="reviews">
          {content.items.map((review) => (
            <li key={review.quote} className="review">
              <figure>
                <blockquote>
                  <p>
                    <Text>{review.quote}</Text>
                  </p>
                </blockquote>
                <figcaption>
                  <Text>{review.source}</Text>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
