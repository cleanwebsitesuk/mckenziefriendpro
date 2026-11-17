import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export const dynamic = "force-static";

/**
 * Only pages that exist are listed. Add each page here as it is built;
 * translated versions are added (with hreflang alternates) once their
 * language is marked reviewed in site.config.ts.
 */
const pages = ["/", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
