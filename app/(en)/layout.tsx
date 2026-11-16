import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/site.config";
import { common } from "@/content/en/common";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyBar } from "@/components/StickyBar";
import { TrackClicks } from "@/components/TrackClicks";
import { sourceSans, sourceSerif } from "../fonts";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: siteConfig.brandName, template: `%s | ${siteConfig.brandName}` },
  applicationName: siteConfig.brandName,
  formatDetection: { telephone: false },
  openGraph: { siteName: siteConfig.brandName, locale: "en_GB", type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1221",
};

/**
 * Root layout for the English pages. The translated pages get their own
 * root layout (app/(translated)/[lang]/layout.tsx) so that <html> carries
 * the right language and, for Urdu, right-to-left direction.
 */
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" dir="ltr" className={`${sourceSerif.variable} ${sourceSans.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          {common.skipLink}
        </a>
        <Header locale="en" common={common} />
        <main id="main">{children}</main>
        <Footer locale="en" common={common} />
        <StickyBar locale="en" common={common} />
        <TrackClicks />
      </body>
    </html>
  );
}
