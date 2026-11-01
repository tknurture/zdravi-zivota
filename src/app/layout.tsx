import type { Metadata, Viewport } from "next";
import { Newsreader, Inter } from "next/font/google";
import AuraField from "@/components/AuraField";
import {
  BUSINESS,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  KEYWORDS,
  LOCALE,
  PERSON,
  SITE_NAME,
  SITE_URL,
  getSiteJsonLd,
  serializeJsonLd,
} from "@/lib/seo";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  axes: ["opsz"],
  style: ["normal", "italic"],
  weight: "variable",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: KEYWORDS,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: SITE_NAME,
  category: "health",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    address: false,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: LOCALE,
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": BUSINESS.geoRegion,
    "geo.placename": BUSINESS.address.addressLocality,
    "geo.position": `${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`,
    ICBM: `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf1de",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${display.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(getSiteJsonLd()) }}
        />
        <AuraField />
        <div className="grain" aria-hidden="true" />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
