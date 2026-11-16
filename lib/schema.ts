import { siteConfig, type Locale } from "@/site.config";
import type { HomeContent } from "@/content/en/home";
import { localePath } from "./site";

const languagesSpoken = ["English", "Urdu", "Hindi", "Punjabi", "Potohari"];

/**
 * Structured data for the home page: the business (ProfessionalService),
 * the person (Shehzad Akhtar) and, when shown, the FAQs. Deliberately not "LegalService"
 * or "Attorney": we are not a law firm. No prices, ratings or reviews are
 * included until real ones exist.
 */
export function homeSchema(locale: Locale, home: HomeContent) {
  const { siteUrl, brandName, person, phone, email } = siteConfig;
  const pageUrl = `${siteUrl}${localePath(locale, "/")}`;
  const businessId = `${siteUrl}/#business`;
  const personId = `${siteUrl}/#shehzad-akhtar`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: brandName,
        url: siteUrl,
        description: home.meta.description,
        areaServed: [
          { "@type": "Country", name: "England" },
          { "@type": "Country", name: "Wales" },
        ],
        availableLanguage: languagesSpoken,
        // Available 24 hours a day, 7 days a week.
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        founder: { "@id": personId },
        ...(phone.e164 ? { telephone: phone.e164 } : {}),
        ...(email ? { email } : {}),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: person.name,
        jobTitle: "McKenzie Friend",
        worksFor: { "@id": businessId },
        knowsLanguage: languagesSpoken,
      },
      // The FAQ schema is only published while the questions are visible on the page.
      ...(siteConfig.showFaqs
        ? [
          {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faqs`,
            mainEntity: home.faqs.items.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
          ]
        : []),
    ],
  };
}
