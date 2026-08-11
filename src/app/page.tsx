import Image from "next/image";
import Cursor from "@/components/Cursor";
import Spine from "@/components/Spine";
import RevealWords, { RevealBlock } from "@/components/RevealWords";
import MagneticButton from "@/components/MagneticButton";
import { Logomark, Portrait, Monogram, QuoteMark } from "@/components/graphics";

const JANA_PHONE = "+420 775 131 787";
const JANA_HREF = "tel:+420775131787";
const PREMYSL_PHONE = "+420 605 246 080";
const PREMYSL_HREF = "tel:+420605246080";

export default function Home() {
  return (
    <>
      <Cursor />

      <div className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <Logomark />
            Zdraví života
          </div>
          <a href="#kontakt" className="brand-phone" data-cursor="hover">
            Domluvit konzultaci →
          </a>
        </div>
      </div>

      {/* HERO — text/buttons kept exactly as before; the background is the
          same site-wide cloud field now, no separate local instance */}
      <section className="hero">
        <div className="wrap">
          <RevealBlock>
            <div className="hero-eyebrow">Energie · Zdraví · Výživa</div>
          </RevealBlock>
          <RevealWords
            as="h1"
            className="hero-title"
            text="Zdraví není jen stav těla. Zdraví je způsob života."
            emphasize="způsob života"
          />
          <RevealBlock delay={0.25}>
            <p className="hero-sub">
              Věříme, že skutečné zdraví vyrůstá z rovnováhy těla, mysli, životní energie a každodenních návyků.
            </p>
            <div className="hero-cta-row">
              <MagneticButton href="#kontakt" className="hero-btn">
                Domluvit konzultaci →
              </MagneticButton>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Spine height={110} />

      {/* Bridge between hero and the profiles — no heading, just the line */}
      <section className="intro-bridge">
        <div className="wrap wrap-narrow glass glass-tight">
          <RevealBlock>
            <p className="section-sub intro-bridge-text">
              Jsme Jana Jaroš a Přemysl Jirák. Spojuje nás společná
              filozofie — vnímáme člověka jako propojený celek, ve kterém se
              vzájemně ovlivňují tělo, mysl, životní energie i každodenní
              životní styl.
            </p>
          </RevealBlock>
        </div>
      </section>

      <Spine height={110} />

      {/* 01/02 — JANA & PŘEMYSL, shared panel so they read close together */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass">
          <div className="section-grid people-pair">
            <div className="people-pair-columns section-full">
              <div className="people-profile">
                <div className="sec-head">
                  <span className="kicker">
                    Energetická a mentální rovnováha
                  </span>
                </div>
                <h2>Jana Jaroš</h2>
                <Monogram letter="J" />
                <div className="profile-centered">
                  <p>
                    Stres, emoce i životní zkušenosti ovlivňují vaši
                    energii i psychickou pohodu — často, aniž si to
                    uvědomujete. Při setkání citlivě vnímám vaše energetické
                    pole a vytvářím bezpečný prostor pro hlubší kontakt
                    sami se sebou.
                  </p>
                  <div className="profile-tags">
                    <span className="profile-tag">Energie</span>
                    <span className="profile-tag">Emoce</span>
                    <span className="profile-tag">Rovnováha</span>
                  </div>
                  <div className="profile-quote">
                    <div className="quote-mark">
                      <QuoteMark />
                    </div>
                    <p className="profile-em">
                      Věřím, že každý člověk v sobě nese schopnost
                      nacházet vlastní cestu k harmonii.
                    </p>
                  </div>
                </div>
              </div>

              <div className="people-profile">
                <div className="sec-head">
                  <span className="kicker">
                    Specializované výživové poradenství
                  </span>
                </div>
                <h2>Přemysl Jirák</h2>
                <Portrait src="/premysl.jpg" alt="Přemysl Jirák" />
                <div className="profile-centered">
                  <p>
                    Výživa, životní styl a zdraví spolu úzce souvisí —
                    správná péče o tělo umí nastartovat jeho přirozenou
                    regeneraci. Pracuji s přírodou, především s léčivými
                    houbami a bylinami z našeho regionu, a hledáme
                    společně praktické kroky k dlouhodobé vitalitě.
                  </p>
                  <div className="profile-tags">
                    <span className="profile-tag">Výživa</span>
                    <span className="profile-tag">Byliny</span>
                    <span className="profile-tag">Vitalita</span>
                  </div>
                  <div className="profile-quote">
                    <div className="quote-mark">
                      <QuoteMark />
                    </div>
                    <p className="profile-em">
                      Každý člověk je jedinečný, a proto ke každému
                      přistupuji individuálně s respektem k jeho
                      potřebám, možnostem i aktuální životní situaci.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="people-pair-outro section-full">
              <p className="section-sub">
                Přestože každý z nás pracuje jiným způsobem, spojuje nás
                společný cíl — být průvodci na cestě lidí ke zdraví,
                rovnováze a spokojenému životu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Spine height={90} />

      {/* JAK VNÍMÁME SVOU ROLI — quiet disclaimer, no glass panel */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass glass-tight disclaimer">
          <div className="disclaimer-text">
            <p>
              Nejsme náhrada lékařů, psychologů ani zdravotnických
              zařízení. Naši práci vnímáme jako doplněk v oblasti
              životního stylu, výživy, práce s energií a psychické pohody.
            </p>
            <p>
              Konzultace nenahrazují lékařskou diagnostiku ani léčbu. Při{" "}
              zdravotních obtížích vždy doporučujeme spolupracovat{" "}s
              ošetřujícím lékařem.
            </p>
          </div>
        </div>
      </section>

      <Spine height={90} />

      {/* CITÁT */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass glass-tight quote-wrap">
          <div className="quote-mark">
            <QuoteMark />
          </div>
          <p className="quote">
            „Nezaměřujte se na nezdvořilost druhých, na to, co udělali nebo
            neudělali, ale na to, co jste udělali nebo neudělali vy sami.“
          </p>
          <div className="quote-by">Buddha Šákjamuni</div>
        </div>
      </section>

      <Spine height={90} />

      {/* KONTAKT */}
      <section id="kontakt" style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass cta-inner">
          <div className="kicker">Objednání a kontakt</div>
          <h2>Budeme rádi, když se ozvete.</h2>
          <p className="section-sub">
            Termín setkání domlouváme individuálně podle vašich možností a aktuální kapacity.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-avatar">
                <span>J</span>
              </div>
              <h3>Jana Jaroš</h3>
              <div className="role">Energetická a mentální rovnováha</div>
              <div className="contact-meta">
                <div>
                  <span className="contact-meta-label">Konzultace</span>
                  <span className="contact-meta-duration">50 minut</span>
                </div>
                <div className="contact-meta-price">1 200 Kč</div>
              </div>
              <MagneticButton
                href={JANA_HREF}
                className="contact-phone"
                strength={0.12}
              >
                {JANA_PHONE} →
              </MagneticButton>
              <div className="contact-note">
                Upřednostňuje osobní setkání. Po domluvě možné i na dálku.
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-avatar">
                <Image src="/premysl.jpg" alt="" width={52} height={52} />
              </div>
              <h3>Přemysl Jirák</h3>
              <div className="role">Specializované výživové poradenství</div>
              <div className="contact-meta">
                <div>
                  <span className="contact-meta-label">Konzultace</span>
                  <span className="contact-meta-duration">50 minut</span>
                </div>
                <div className="contact-meta-price">1 200 Kč</div>
              </div>
              <MagneticButton
                href={PREMYSL_HREF}
                className="contact-phone"
                strength={0.12}
              >
                {PREMYSL_PHONE} →
              </MagneticButton>
              <div className="contact-note">
                Konzultace zaměřené na výživu, životní styl a přirozenou
                podporu zdraví.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        Těšíme se na společné setkání — Jana Jaroš a Přemysl Jirák
        <br />
        © 2026 Zdraví života. Všechna práva vyhrazena.
      </footer>
    </>
  );
}
