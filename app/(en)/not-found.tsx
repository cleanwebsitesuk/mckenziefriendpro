import type { Metadata } from "next";
import { common } from "@/content/en/common";
import { ContactButtons } from "@/components/ContactButtons";
import { SiteLink } from "@/components/SiteLink";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="band on-navy">
      <div className="container">
        <h1 className="band__title">We can't find that page</h1>
        <p className="band__body">
          The link may be old, or the page may have moved. You can go back to the{" "}
          <SiteLink href="/">home page</SiteLink>, or speak to us now.
        </p>
        <ContactButtons locale="en" common={common} surface="navy" place="not-found" />
      </div>
    </section>
  );
}
