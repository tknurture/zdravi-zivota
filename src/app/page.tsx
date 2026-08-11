import Image from "next/image";
import Cursor from "@/components/Cursor";
import ScrollBolt from "@/components/ScrollBolt";
import RevealWords, { RevealBlock } from "@/components/RevealWords";
import MagneticButton from "@/components/MagneticButton";
import { Logomark, Portrait } from "@/components/graphics";

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

      {/* HERO */}
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
        <div className="scroll-cue">
          <span className="scroll-cue-line" />
        </div>
      </section>

      <ScrollBolt>
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
                <div className="people-profile-spacer" aria-hidden="true" />
                <div className="profile-centered">
                  <p>
                    Stres. Emoce. Životní zkušenosti. Všechno to ovlivňuje
                    vaši energii i psychickou pohodu — často, aniž si to
                    uvědomujete.
                  </p>
                  <p>
                    Při setkání citlivě vnímám vaše energetické pole. Každé
                    setkání je jedinečné — vychází z toho, s čím právě
                    přicházíte.
                  </p>
                  <p>
                    Vytvářím bezpečný, laskavý prostor, ve kterém můžete
                    znovu navázat hlubší kontakt sami se sebou.
                  </p>
                  <p className="profile-em">
                    „Věřím, že každý člověk v sobě nese schopnost nacházet
                    vlastní cestu k harmonii.“
                  </p>
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
                    Výživa, životní styl a zdraví spolu úzce souvisí.
                    Správná péče o tělo umí nastartovat jeho přirozenou
                    regeneraci.
                  </p>
                  <p>
                    Pracuji s přírodou — především s léčivými houbami a bylinami z našeho regionu.
                  </p>
                  <p>
                    Společně hledáme praktické kroky k lepšímu porozumění
                    vašemu tělu a dlouhodobé vitalitě.
                  </p>
                  <p className="profile-em">
                    „Každý člověk je jedinečný, a proto ke každému
                    přistupuji individuálně s respektem k jeho potřebám,
                    možnostem i aktuální životní situaci.“
                  </p>
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

      {/* CITÁT */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass glass-tight quote-wrap">
          <p className="quote">
            „Nezaměřujte se na nezdvořilost druhých, na to, co udělali nebo
            neudělali, ale na to, co jste udělali nebo neudělali vy sami.“
          </p>
          <div className="quote-by">Buddha Šákjamuni</div>
        </div>
      </section>

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
      </ScrollBolt>

      <footer>
        Těšíme se na společné setkání — Jana Jaroš a Přemysl Jirák
        <br />
        © 2026 Zdraví života. Všechna práva vyhrazena.
      </footer>
    </>
  );
}
