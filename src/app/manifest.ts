import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Jana Jaroš`,
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    lang: "cs",
    start_url: "/",
    display: "standalone",
    background_color: "#faf1de",
    theme_color: "#faf1de",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
