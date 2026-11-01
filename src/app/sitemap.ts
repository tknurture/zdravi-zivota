import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl, seoPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl("/jana.jpg")],
    },
    ...seoPages.map((page) => ({
      url: absoluteUrl(`/${page.slug.replace(/^\/+/, "")}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
