import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl, seoPages } from "@/lib/seo";

// Bump when page content changes; a per-build date makes Google ignore lastmod.
const LAST_UPDATED = new Date("2026-11-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl("/jana.jpg")],
    },
    ...seoPages.map((page) => ({
      url: absoluteUrl(`/${page.slug.replace(/^\/+/, "")}`),
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
