/**
 * Sdílené SEO konstanty a JSON-LD pro web Zdraví života.
 * Údaje (NAP) musí 1:1 odpovídat textům na webu a Google Business Profile.
 * Otevírací dobu, recenze ani hodnocení sem nedoplňovat, dokud nejsou ověřené.
 */

import type { Metadata } from "next";

export const SITE_URL = "https://www.zdravizivota.cz";
export const SITE_NAME = "Zdraví života";
export const LOCALE = "cs_CZ";

export const DEFAULT_TITLE =
  "Zdraví života — Jana Jaroš | Energetická rovnováha Zlín";
export const DEFAULT_DESCRIPTION =
  "Jana Jaroš, Zlín: individuální konzultace pro energetickou a mentální rovnováhu. 50 minut za 1 200 Kč, osobně na tř. Tomáše Bati 87 nebo na dálku.";

export const KEYWORDS = [
  "energetická rovnováha Zlín",
  "mentální rovnováha Zlín",
  "energetická konzultace Zlín",
  "Jana Jaroš",
  "Zdraví života",
  "práce s energií Zlín",
  "psychická pohoda",
  "stres a emoce",
  "konzultace na dálku",
  "Zlínský kraj",
];

export const PERSON = {
  name: "Jana Jaroš",
  jobTitle: "Energetická a mentální rovnováha",
  image: "/jana.jpg",
} as const;

export const BUSINESS = {
  name: SITE_NAME,
  telephone: "+420775131787",
  telephoneDisplay: "+420 775 131 787",
  address: {
    streetAddress: "Třída Tomáše Bati 87",
    addressLocality: "Zlín",
    postalCode: "760 01",
    addressRegion: "Zlínský kraj",
    addressCountry: "CZ",
  },
  /** Vstup z boku budovy, výtahem do 5. patra. */
  accessNote: "Vchod z boku budovy, výtahem do 5. patra.",
  /** Souřadnice budovy tř. Tomáše Bati 87 (OpenStreetMap / Nominatim). */
  geo: { latitude: 49.2258, longitude: 17.6753 },
  geoRegion: "CZ-72",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=T%C5%99%C3%ADda%20Tom%C3%A1%C5%A1e%20Bati%2087%2C%20Zl%C3%ADn",
} as const;

export const CONSULTATION = {
  name: "Individuální konzultace — energetická a mentální rovnováha",
  durationMinutes: 50,
  /** ISO 8601 */
  duration: "PT50M",
  price: 1200,
  priceCurrency: "CZK",
  description:
    "Individuální setkání (50 minut) zaměřené na energetickou a mentální rovnováhu. Osobně ve Zlíně nebo po domluvě na dálku.",
} as const;

export const AREA_SERVED = [
  "Zlín",
  "Otrokovice",
  "Vizovice",
  "Napajedla",
  "Fryšták",
  "Holešov",
  "Luhačovice",
  "Uherské Hradiště",
  "Kroměříž",
] as const;
export const AREA_REGION = "Zlínský kraj";

/**
 * SEO landing stránky. Čte je sitemap.ts i šablona SeoLanding
 * (interní prolinkování). Každá stránka nastavuje vlastní
 * `alternates.canonical` přes landingMetadata().
 */
export type SeoPageLink = {
  slug: string;
  /** Krátký název pro odkazy a drobečkovou navigaci. */
  title: string;
  /** Jedna věta pro kartu v interním prolinkování. */
  teaser: string;
};

export const seoPages: SeoPageLink[] = [
  {
    slug: "energeticka-terapie-zlin",
    title: "Energetická terapie Zlín",
    teaser:
      "Co je energetická konzultace, pro koho je a jak vnímám energetické pole člověka.",
  },
  {
    slug: "prace-se-stresem-zlin",
    title: "Práce se stresem",
    teaser:
      "Napětí, přetížení a neklid – jak se stresem pracovat v těle, mysli i v emocích.",
  },
  {
    slug: "vycerpani-a-vyhoreni",
    title: "Vyčerpání a ztráta energie",
    teaser:
      "Když docházejí síly: psychická únava, varovné signály vyhoření a kdy jít nejdřív k lékaři.",
  },
  {
    slug: "prace-s-emocemi-zlin",
    title: "Práce s emocemi",
    teaser:
      "Potlačené emoce, pocit zablokování a cesta k vnitřnímu klidu a harmonii.",
  },
  {
    slug: "energeticka-ocista-a-harmonizace",
    title: "Energetická harmonizace a očista",
    teaser:
      "Energetické pole člověka, pocit zablokování a jak harmonizace probíhá.",
  },
  {
    slug: "konzultace-na-dalku",
    title: "Konzultace na dálku",
    teaser:
      "Nemůžete přijet do Zlína? Jak probíhá konzultace na dálku a jak se objednat.",
  },
];

export const absoluteUrl = (path = "/") =>
  new URL(path, SITE_URL).toString();

export const ID = {
  website: `${SITE_URL}/#website`,
  business: `${SITE_URL}/#business`,
  person: `${SITE_URL}/#jana-jaros`,
  service: `${SITE_URL}/#konzultace`,
};

/** Kompletní JSON-LD graf pro web (LocalBusiness + Person + Service + WebSite). */
export function getSiteJsonLd() {
  const areaServed = [
    ...AREA_SERVED.map((name) => ({ "@type": "City", name })),
    { "@type": "AdministrativeArea", name: AREA_REGION },
  ];

  const offer = {
    "@type": "Offer",
    price: CONSULTATION.price,
    priceCurrency: CONSULTATION.priceCurrency,
    availability: "https://schema.org/InStock",
    url: absoluteUrl("/#kontakt"),
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: CONSULTATION.price,
      priceCurrency: CONSULTATION.priceCurrency,
      referenceQuantity: {
        "@type": "QuantitativeValue",
        value: CONSULTATION.durationMinutes,
        unitCode: "MIN",
      },
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ID.website,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "cs-CZ",
        publisher: { "@id": ID.business },
      },
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": ID.business,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        image: absoluteUrl(PERSON.image),
        telephone: BUSINESS.telephone,
        priceRange: `${CONSULTATION.price} Kč`,
        currenciesAccepted: "CZK",
        address: {
          "@type": "PostalAddress",
          ...BUSINESS.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        hasMap: BUSINESS.mapUrl,
        areaServed,
        founder: { "@id": ID.person },
        employee: { "@id": ID.person },
        makesOffer: { "@id": ID.service },
        knowsLanguage: "cs",
      },
      {
        "@type": "Person",
        "@id": ID.person,
        name: PERSON.name,
        jobTitle: PERSON.jobTitle,
        image: absoluteUrl(PERSON.image),
        telephone: BUSINESS.telephone,
        url: SITE_URL,
        worksFor: { "@id": ID.business },
        workLocation: { "@id": ID.business },
      },
      {
        "@type": "Service",
        "@id": ID.service,
        name: CONSULTATION.name,
        serviceType: "Konzultace energetické a mentální rovnováhy",
        description: CONSULTATION.description,
        provider: { "@id": ID.business },
        areaServed,
        availableChannel: [
          {
            "@type": "ServiceChannel",
            name: "Osobně ve Zlíně",
            serviceLocation: { "@id": ID.business },
            servicePhone: BUSINESS.telephone,
          },
          {
            "@type": "ServiceChannel",
            name: "Na dálku (po domluvě)",
            servicePhone: BUSINESS.telephone,
          },
        ],
        offers: offer,
      },
    ],
  };
}

/** Bezpečná serializace JSON-LD (escapuje `<` kvůli XSS). */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/* ---------- landing stránky: metadata + JSON-LD ---------- */

export type LandingFaq = { q: string; a: string };

export type LandingMeta = {
  slug: string;
  /** Kompletní <title> (bez šablony z layoutu). */
  title: string;
  description: string;
  keywords: string[];
  /** Název služby pro schema.org Service. */
  serviceName: string;
  serviceType: string;
};

/** Sdílený OG obrázek (src/app/opengraph-image.tsx). Page-level openGraph
 *  nahrazuje zděděný souborový obrázek, proto ho landing stránky uvádějí výslovně. */
const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Jana Jaroš — Zdraví života, energetická a mentální rovnováha, Zlín",
};

const landingPath = (slug: string) => `/${slug.replace(/^\/+/, "")}`;

/** Metadata pro landing stránku – vlastní canonical, OG i Twitter. */
export function landingMetadata(page: LandingMeta): Metadata {
  const path = landingPath(page.slug);
  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: LOCALE,
      siteName: SITE_NAME,
      url: path,
      title: page.title,
      description: page.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}

/** WebPage + Service + BreadcrumbList + FAQPage, navázané na @id z getSiteJsonLd(). */
export function getLandingJsonLd(
  page: LandingMeta & { h1: string; breadcrumb: string; faq: LandingFaq[] },
) {
  const url = absoluteUrl(landingPath(page.slug));
  const areaServed = [
    ...AREA_SERVED.map((name) => ({ "@type": "City", name })),
    { "@type": "AdministrativeArea", name: AREA_REGION },
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.title,
        headline: page.h1,
        description: page.description,
        inLanguage: "cs-CZ",
        isPartOf: { "@id": ID.website },
        about: { "@id": `${url}#service` },
        author: { "@id": ID.person },
        publisher: { "@id": ID.business },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: absoluteUrl(PERSON.image),
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceName,
        serviceType: page.serviceType,
        description: page.description,
        url,
        provider: { "@id": ID.business },
        isRelatedTo: { "@id": ID.service },
        areaServed,
        offers: {
          "@type": "Offer",
          price: CONSULTATION.price,
          priceCurrency: CONSULTATION.priceCurrency,
          url: absoluteUrl("/#kontakt"),
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE_NAME,
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.breadcrumb,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
