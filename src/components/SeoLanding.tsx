import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Cursor from "@/components/Cursor";
import Spine from "@/components/Spine";
import { RevealBlock } from "@/components/RevealWords";
import MagneticButton from "@/components/MagneticButton";
import { Logomark, IconPin } from "@/components/graphics";
import {
  BUSINESS,
  CONSULTATION,
  SITE_NAME,
  getLandingJsonLd,
  seoPages,
  serializeJsonLd,
  type LandingFaq,
  type LandingMeta,
} from "@/lib/seo";

export type LandingSection = { h2: string; body: ReactNode };

export type LandingPage = LandingMeta & {
  /** Krátký štítek nad H1 (stejný styl jako hero na hlavní stránce). */
  eyebrow: string;
  h1: string;
  /** Název v drobečkové navigaci a v BreadcrumbList. */
  breadcrumb: string;
  intro: ReactNode;
  sections: LandingSection[];
  /** Nadpis bloku s průběhem konzultace (výchozí „Jak probíhá konzultace“). */
  consultTitle?: string;
  /** Krátký úvod do bloku s průběhem konzultace, specifický pro stránku. */
  consultIntro?: ReactNode;
  faq: LandingFaq[];
  /** Text sekce o dostupnosti ze Zlína a okolí – vlastní pro každou stránku. */
  area: ReactNode;
  ctaTitle: string;
  ctaText: string;
  /** Doplňující věta k povinnému disclaimeru (např. odkaz na psychologa). */
  disclaimerExtra?: ReactNode;
};

const PHONE_HREF = `tel:${BUSINESS.telephone}`;

export default function SeoLanding({ page }: { page: LandingPage }) {
  const related = seoPages.filter((p) => p.slug !== page.slug);
  const jsonLd = getLandingJsonLd(page);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <Cursor />

      <header className="topbar">
        <div className="topbar-inner">
          <Link href="/" className="brand brand-link" data-cursor="hover">
            <Logomark />
            {SITE_NAME}
          </Link>
          <Link href="/#kontakt" className="brand-phone" data-cursor="hover">
            Domluvit konzultaci →
          </Link>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero landing-hero">
          <div className="wrap">
            <nav aria-label="Drobečková navigace" className="landing-crumbs">
              <Link href="/" data-cursor="hover">
                {SITE_NAME}
              </Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{page.breadcrumb}</span>
            </nav>
            <RevealBlock>
              <div className="hero-eyebrow">{page.eyebrow}</div>
              <h1 className="hero-title landing-title">{page.h1}</h1>
            </RevealBlock>
            <RevealBlock delay={0.2}>
              <div className="landing-intro">{page.intro}</div>
              <div className="hero-cta-row">
                <MagneticButton href="/#kontakt" className="hero-btn">
                  Domluvit konzultaci →
                </MagneticButton>
                <a href={PHONE_HREF} className="text-link" data-cursor="hover">
                  {BUSINESS.telephoneDisplay}
                </a>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* OBSAHOVÉ SEKCE (H2 osnova) */}
        {page.sections.map((s) => (
          <div key={s.h2}>
            <Spine height={80} />
            <section className="landing-section">
              <div className="wrap wrap-narrow glass">
                <RevealBlock>
                  <article className="landing-prose">
                    <h2>{s.h2}</h2>
                    {s.body}
                  </article>
                </RevealBlock>
              </div>
            </section>
          </div>
        ))}

        <Spine height={80} />

        {/* JAK PROBÍHÁ KONZULTACE */}
        <section className="landing-section">
          <div className="wrap wrap-narrow glass">
            <RevealBlock>
              <div className="landing-prose">
                <span className="kicker">50 minut · {CONSULTATION.price.toLocaleString("cs-CZ")} Kč</span>
                <h2>{page.consultTitle ?? "Jak probíhá konzultace"}</h2>
                {page.consultIntro}
              </div>
              <ol className="timeline landing-steps">
                <li className="tstep">
                  <div className="tstep-rail">
                    <span className="tstep-dot" />
                    <span className="tstep-line" />
                  </div>
                  <div className="tstep-body">
                    <div className="tstep-index">01</div>
                    <h3>Domluva termínu po telefonu</h3>
                    <p>
                      Zavoláte na {BUSINESS.telephoneDisplay} a termín
                      domluvíme individuálně podle vašich možností a aktuální
                      kapacity. Můžete krátce naznačit, s čím přicházíte.
                    </p>
                  </div>
                </li>
                <li className="tstep">
                  <div className="tstep-rail">
                    <span className="tstep-dot" />
                    <span className="tstep-line" />
                  </div>
                  <div className="tstep-body">
                    <div className="tstep-index">02</div>
                    <h3>Setkání v délce 50 minut</h3>
                    <p>
                      Individuální konzultace trvá 50 minut. Probíhá
                      v klidném prostoru a vychází z toho, co právě
                      prožíváte – bez šablon a bez spěchu.
                    </p>
                  </div>
                </li>
                <li className="tstep">
                  <div className="tstep-rail">
                    <span className="tstep-dot" />
                  </div>
                  <div className="tstep-body">
                    <div className="tstep-index">03</div>
                    <h3>Osobně ve Zlíně, po domluvě na dálku</h3>
                    <p>
                      Setkáváme se na adrese Třída Tomáše Bati 87 ve Zlíně –
                      vchod je z boku budovy, výtahem vyjedete do 5. patra.
                      Osobní setkání upřednostňuji, po domluvě je možná
                      i konzultace na dálku.
                    </p>
                  </div>
                </li>
              </ol>
            </RevealBlock>
          </div>
        </section>

        <Spine height={80} />

        {/* FAQ */}
        <section className="landing-section" aria-labelledby="faq-title">
          <div className="wrap wrap-narrow glass">
            <RevealBlock>
              <div className="landing-prose">
                <span className="kicker">Časté otázky</span>
                <h2 id="faq-title">Na co se lidé nejčastěji ptají</h2>
              </div>
              <div className="faq-list">
                {page.faq.map((f) => (
                  <details key={f.q} className="faq-item">
                    <summary data-cursor="hover">
                      <h3>{f.q}</h3>
                    </summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </RevealBlock>
          </div>
        </section>

        <Spine height={80} />

        {/* CTA */}
        <section className="landing-section">
          <div className="wrap glass cta-inner">
            <div className="kicker">Objednání</div>
            <h2>{page.ctaTitle}</h2>
            <p className="section-sub">{page.ctaText}</p>

            <div className="contact-grid contact-grid-solo">
              <div className="contact-card">
                <div className="contact-avatar">
                  <Image src="/jana.jpg" alt="" width={52} height={52} />
                </div>
                <h3>Jana Jaroš</h3>
                <div className="role">Energetická a mentální rovnováha</div>
                <div className="contact-meta">
                  <div>
                    <span className="contact-meta-label">Konzultace</span>
                    <span className="contact-meta-duration">50 minut</span>
                  </div>
                  <div className="contact-meta-price">1 200 Kč</div>
                </div>
                <MagneticButton
                  href={PHONE_HREF}
                  className="contact-phone"
                  strength={0.12}
                >
                  {BUSINESS.telephoneDisplay} →
                </MagneticButton>
                <div className="contact-note">
                  Upřednostňuji osobní setkání. Po domluvě možné i na dálku.
                </div>
              </div>
            </div>

            <div className="landing-cta-more">
              <Link href="/#kontakt" className="text-link" data-cursor="hover">
                Kontakt a objednání na hlavní stránce →
              </Link>
            </div>

            <div className="location-block">
              <div className="location-icon">
                <IconPin />
              </div>
              <div className="location-address">
                {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality}
              </div>
              <div className="location-detail">
                Vchod z boku budovy · Výtah do 5. patra
              </div>
              <a
                href={BUSINESS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link location-link"
                data-cursor="hover"
              >
                Otevřít v mapách →
              </a>
            </div>
          </div>
        </section>

        <Spine height={80} />

        {/* DOSTUPNOST ZE ZLÍNA A OKOLÍ */}
        <section className="landing-section">
          <div className="wrap wrap-narrow glass">
            <RevealBlock>
              <div className="landing-prose">
                <h2>Dostupnost ze Zlína a okolí</h2>
                {page.area}
              </div>
            </RevealBlock>
          </div>
        </section>

        <Spine height={80} />

        {/* INTERNÍ PROLINKOVÁNÍ */}
        <section className="landing-section" aria-labelledby="related-title">
          <div className="wrap glass">
            <div className="landing-prose landing-prose-center">
              <span className="kicker">Další témata</span>
              <h2 id="related-title">Mohlo by vás zajímat</h2>
            </div>
            <ul className="landing-links">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="landing-link-card" data-cursor="hover">
                    <span className="landing-link-title">{p.title}</span>
                    <span className="landing-link-teaser">{p.teaser}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/" className="landing-link-card" data-cursor="hover">
                  <span className="landing-link-title">Zdraví života – Jana Jaroš</span>
                  <span className="landing-link-teaser">
                    Hlavní stránka: kdo jsem, moje poslání a kontakt.
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="landing-section landing-disclaimer-wrap">
          <div className="wrap wrap-narrow">
            <div className="landing-disclaimer">
              <p>
                Konzultace nenahrazují lékařskou diagnostiku, léčbu ani
                odbornou zdravotní péči. V případě zdravotních obtíží
                doporučuji vždy konzultaci s lékařem.
              </p>
              {page.disclaimerExtra}
            </div>
          </div>
        </section>
      </main>

      <footer>
        {SITE_NAME} — Jana Jaroš · {BUSINESS.address.streetAddress},{" "}
        {BUSINESS.address.postalCode} {BUSINESS.address.addressLocality} ·{" "}
        <a href={PHONE_HREF} className="footer-link">
          {BUSINESS.telephoneDisplay}
        </a>
        <br />
        © 2026 {SITE_NAME}. Všechna práva vyhrazena.
      </footer>
    </>
  );
}
