import type { Metadata } from "next";
import { common } from "@/content/en/common";
import { home } from "@/content/en/home";
import { homeSchema } from "@/lib/schema";
import { CostComparison } from "@/components/home/CostComparison";
import { Faqs, FinalCta } from "@/components/home/FaqsAndCta";
import { HelpCards } from "@/components/home/HelpCards";
import { Hero } from "@/components/home/Hero";
import { Role } from "@/components/home/Role";
import { LanguagesBand } from "@/components/home/LanguagesBand";
import { MeetShazad, Reviews } from "@/components/home/MeetAndReviews";
import { Recognise } from "@/components/home/Recognise";
import { UrgentStrip } from "@/components/home/UrgentStrip";
import { WorkingWithUs } from "@/components/home/WorkingWithUs";
import "@/styles/home.css";

const locale = "en" as const;

export const metadata: Metadata = {
  title: { absolute: home.meta.title },
  description: home.meta.description,
  alternates: { canonical: "/" },
  openGraph: { title: home.meta.title, description: home.meta.description, url: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema(locale, home)).replace(/</g, "\\u003c") }}
      />
      <Hero locale={locale} common={common} content={home.hero} />
      <UrgentStrip locale={locale} common={common} content={home.urgent} />
      <Recognise locale={locale} content={home.recognise} />
      <HelpCards locale={locale} content={home.help} />
      <Role content={home.role} />
      <LanguagesBand content={home.languages} />
      <WorkingWithUs locale={locale} content={home.working} />
      <CostComparison locale={locale} common={common} content={home.comparison} />
      <MeetShazad locale={locale} content={home.meet} />
      <Reviews content={home.reviews} />
      <Faqs locale={locale} content={home.faqs} />
      <FinalCta locale={locale} common={common} content={home.finalCta} />
    </>
  );
}
