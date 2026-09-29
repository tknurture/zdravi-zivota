import Image from "next/image";
import Cursor from "@/components/Cursor";
import Spine from "@/components/Spine";
import RevealWords, { RevealBlock } from "@/components/RevealWords";
import MagneticButton from "@/components/MagneticButton";
import { Logomark, Portrait, Monogram, QuoteMark, IconPin } from "@/components/graphics";

const JANA_PHONE = "+420 775 131 787";
const JANA_HREF = "tel:+420775131787";
const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=T%C5%99%C3%ADda%20Tom%C3%A1%C5%A1e%20Bati%2087%2C%20Zl%C3%ADn";

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
            <div className="hero-eyebrow">Energie · Zdraví</div>
          </RevealBlock>
          <RevealWords
            as="h1"
            className="hero-title"
            text="Zdraví není jen stav těla. Zdraví je způsob života."
            emphasize="způsob života"
          />
          <RevealBlock delay={0.25}>
            <p className="hero-sub">
              Věřím, že skutečné zdraví vyrůstá z rovnováhy těla, mysli, životní energie a každodenních návyků.
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

      {/* O NÁS — the expanded philosophy/mission intro from the client's
          copy; previously just the one bridging sentence now used in
          "Kdo jsme" below. */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass glass-tight">
          <RevealBlock>
            <span className="kicker section-kicker">O mně</span>
            <p className="philosophy-lead philosophy-lead-wide">
              Každý člověk je jedinečný, stejně jako jeho cesta
              k rovnováze a zdraví.
            </p>
            <div className="philosophy-text">
              <p>
                Někdy se však vlivem stresu, životních změn, dlouhodobého
                napětí nebo zdravotních obtíží dostáváme do období, kdy
                ztrácíme kontakt sami se sebou a přirozenou životní
                rovnováhou.
              </p>
              <p>
                Ve Zdraví života pomáhám lidem lépe porozumět
                souvislostem mezi energií a psychickou pohodou.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Spine height={90} />

      {/* JANA — solo profile */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass">
          <div className="people-profile">
            <div className="sec-head">
              <span className="kicker">
                Energetická a mentální rovnováha
              </span>
            </div>
            <h2>Jana Jaroš</h2>
            <Portrait src="/jana.jpg" alt="Jana Jaroš" />
            <div className="profile-centered">
              <p className="profile-lead">
                Ve své práci podporuji lidi na cestě k větší
                energetické a mentální rovnováze. Pomáhám jim lépe
                porozumět tomu, jak stres, emoce, životní zkušenosti
                a vnitřní nastavení mohou ovlivňovat jejich energii,
                psychickou pohodu i celkovou kvalitu života.
              </p>
              <p>
                Při setkání citlivě vnímám energetické pole člověka.
                To mi umožňuje zaměřit pozornost na oblasti, které
                mohou souviset s energetickou nerovnováhou, oslabením
                životní síly nebo ztrátou vnitřní harmonie.
              </p>
              <p>
                Každé setkání je jedinečné a vychází
                z aktuálních potřeb člověka, jeho životní situace
                a toho, s čím přichází.
              </p>
              <p>
                Mým záměrem je vytvořit bezpečný a laskavý
                prostor, ve kterém může člověk znovu navázat hlubší
                kontakt sám se sebou, posílit důvěru ve vlastní
                intuici a objevit své přirozené zdroje vnitřní síly
                a rovnováhy.
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
                  Věřím, že každý člověk v sobě nese schopnost
                  nacházet vlastní cestu k harmonii. Někdy jen
                  potřebuje klidný prostor, podporu a nový pohled,
                  aby mohl znovu vnímat svou sílu, možnosti a životní
                  energii.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Spine height={90} />

      {/* MOJE POSLÁNÍ */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap wrap-narrow glass glass-tight">
          <RevealBlock>
            <span className="kicker section-kicker">Moje poslání</span>
            <div className="philosophy-text">
              <p>
                Věřím, že každý z nás v sobě má vlastní zdroje síly
                a potenciál pro zdraví, rovnováhu a spokojený život.
              </p>
              <p>
                Nechci rozhodovat za vás ani přebírat odpovědnost
                za vaše zdraví. Mým přáním je být průvodcem na cestě
                k lepšímu porozumění sobě samým.
              </p>
              <p>
                Sdílím své zkušenosti, ukazuji možné souvislosti
                a pomáhám objevovat vlastní zdroje síly a zdraví.
              </p>
              <p>
                Mé konzultace nenahrazují lékařskou diagnostiku,
                léčbu ani odbornou zdravotní péči. V případě
                zdravotních obtíží doporučuji vždy konzultaci
                s lékařem.
              </p>
            </div>
          </RevealBlock>
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
          <h2>Chcete lépe porozumět tomu, co vám vaše tělo říká?</h2>
          <p className="section-sub">
            Termín setkání si domluvíme individuálně podle vašich možností a aktuální kapacity.
          </p>

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
                href={JANA_HREF}
                className="contact-phone"
                strength={0.12}
              >
                {JANA_PHONE} →
              </MagneticButton>
              <div className="contact-note">
                Upřednostňuje osobní setkání. Po domluvě možné i na dálku.
              </div>
            </div>
          </div>

          <div className="location-block">
            <div className="location-icon">
              <IconPin />
            </div>
            <div className="location-address">Třída Tomáše Bati 87, Zlín</div>
            <div className="location-detail">
              Vchod z boku budovy · Výtah do 5. patra
            </div>
            <a
              href={MAPS_HREF}
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

      <footer>
        Těším se na naše setkání — Jana Jaroš
        <br />
        © 2026 Zdraví života. Všechna práva vyhrazena.
      </footer>
    </>
  );
}
