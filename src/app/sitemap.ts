import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { PRODUCT_PAGES } from "@/data/productPages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...PRODUCT_PAGES.map((p) => ({
      url: `${SITE.url}/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
