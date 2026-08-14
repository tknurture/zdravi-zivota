import Image from "next/image";
import Cursor from "@/components/Cursor";
import Spine from "@/components/Spine";
import RevealWords, { RevealBlock } from "@/components/RevealWords";
import MagneticButton from "@/components/MagneticButton";
import { Logomark, Portrait, Monogram, QuoteMark, IconPin } from "@/components/graphics";

const JANA_PHONE = "+420 775 131 787";
const JANA_HREF = "tel:+420775131787";
const PREMYSL_PHONE = "+420 605 246 080";
const PREMYSL_HREF = "tel:+420605246080";
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

      {/* O NÁS — the expanded philosophy/mission intro from the client's
          copy; previously just the one bridging sentence now used in
          "Kdo jsme" below. */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap wrap-narrow glass glass-tight">
          <RevealBlock>
            <span className="kicker section-kicker">O nás</span>
            <p className="philosophy-lead">
              Každý člověk je jedinečný. Stejně jedinečná je i jeho
              cesta k rovnováze a zdraví.
            </p>
            <div className="philosophy-text">
              <p>
                Každý člověk má svůj jedinečný příběh, vlastní zkušenosti
                i svůj osobní potenciál. Někdy se však vlivem stresu,
                životních změn, dlouhodobého napětí nebo zdravotních obtíží
                dostáváme do období, kdy ztrácíme kontakt sami se sebou,
                se svou energií a přirozenou životní rovnováhou.
              </p>
              <p>
                Ve Zdraví života pomáháme lidem lépe porozumět
                souvislostem mezi energií, psychickou pohodou, životním
                stylem a výživou. Nechceme rozhodovat za druhé ani
                přebírat odpovědnost za jejich život. Naším přáním je být
                průvodci na jejich vlastní cestě — předávat zkušenosti,
                ukazovat možné souvislosti a podporovat každého člověka
                při objevování jeho vlastních zdrojů síly, zdraví
                a vitality.
              </p>
              <p>
                Věříme, že největší potenciál ke zdraví, rovnováze
                a spokojenému životu se nachází uvnitř každého z nás.
              </p>
            </div>
          </RevealBlock>
        </div>
      </section>

      <Spine height={110} />

      {/* KDO JSME — intro line before the two profiles */}
      <section className="intro-bridge">
        <div className="wrap wrap-narrow glass glass-tight">
          <RevealBlock>
            <span className="kicker section-kicker">Kdo jsme</span>
            <p className="section-sub intro-bridge-text">
              Jsme Jana Jaroš a Přemysl Jirák. Spojuje nás společná
              filozofie — vnímáme člověka jako propojený celek, ve kterém
              se vzájemně ovlivňují tělo, mysl, životní energie
              i každodenní životní styl. Každý z nás přináší
              do společné práce svůj vlastní přístup, zkušenosti
              i pohled.
            </p>
          </RevealBlock>
        </div>
      </section>

      <Spine height={90} />

      {/* 01/02 — JANA & PŘEMYSL, shared panel so they read close together */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass">
          <div className="section-grid people-pair">
            <div className="people-pair-columns section-full">
              <div className="people-profile">
                <div className="sec-head">
                  <span className="kicker">
                    Energetická a mentální rovnováha
                  </span>
                </div>
                <h2>Jana Jaroš</h2>
                <Monogram letter="J" />
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

              <div className="people-profile">
                <div className="sec-head">
                  <span className="kicker">
                    Specializované výživové poradenství
                  </span>
                </div>
                <h2>Přemysl Jirák</h2>
                <Portrait src="/premysl.jpg" alt="Přemysl Jirák" />
                <div className="profile-centered">
                  <p className="profile-lead">
                    Ve své práci pomáhám lidem lépe porozumět
                    souvislostem mezi výživou, životním stylem
                    a celkovým zdravím. Věřím, že péče o tělo,
                    vhodně zvolené stravovací návyky a podpora
                    přirozených regeneračních schopností organismu mohou
                    být důležitou součástí cesty k větší vitalitě
                    a životní rovnováze.
                  </p>
                  <p>
                    Zaměřuji se na výživu v souvislostech
                    s prevencí civilizačních onemocnění, podporou
                    organismu a hledáním individuálních možností, které
                    odpovídají potřebám konkrétního člověka.
                  </p>
                  <p>
                    Pracuji s přírodními produkty a specializuji se
                    především na léčivé houby a byliny z našeho
                    regionu. Věřím, že příroda nabízí mnoho cenných
                    možností, jak citlivě podpořit přirozené procesy
                    v organismu.
                  </p>
                  <p>
                    Pomáhám lidem hledat souvislosti mezi jejich
                    stravovacími návyky, stavem střevního mikrobiomu,
                    životním stylem a celkovou vitalitou. Společně
                    hledáme praktické kroky, které mohou přispět
                    k lepšímu porozumění vlastnímu tělu a dlouhodobé
                    péči o zdraví.
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
                      Každý člověk je jedinečný, a proto ke každému
                      přistupuji individuálně s respektem k jeho
                      potřebám, možnostem i aktuální životní situaci.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="people-pair-outro section-full">
              <p className="section-sub">
                Přestože každý z nás pracuje jiným způsobem, spojuje nás
                společný cíl — být průvodci na cestě lidí ke zdraví,
                rovnováze a spokojenému životu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Spine height={90} />

      {/* NAŠE POSLÁNÍ — new section, not previously on the page */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap wrap-narrow glass glass-tight">
          <RevealBlock>
            <span className="kicker section-kicker">Naše poslání</span>
            <div className="philosophy-text">
              <p>
                Naším cílem není rozhodovat za druhé ani přebírat
                odpovědnost za jejich život.
              </p>
              <p>
                Naším cílem je předávat informace, sdílet zkušenosti
                a pomáhat lidem nacházet souvislosti, které mohou vést
                k hlubšímu porozumění sobě samým, svému tělu i vlastním
                potřebám.
              </p>
              <p>
                Věříme, že skutečná změna začíná ve chvíli, kdy
                člověk převezme odpovědnost za svůj život, uvěří
                ve své schopnosti a rozhodne se aktivně podílet
                na své cestě ke zdraví a spokojenosti.
              </p>
              <p>
                My můžeme nabídnout podporu, zkušenosti a nový pohled.
                Můžeme ukázat možné souvislosti a být průvodci
                na určité části cesty. Skutečná síla ke změně však
                vždy vychází z člověka samotného.
              </p>
            </div>
            <p className="mission-close">
              Protože zdraví není jen stav těla.
              <br />
              Zdraví je <span className="accent-em">způsob života</span>.
            </p>
          </RevealBlock>
        </div>
      </section>

      <Spine height={90} />

      {/* JAK VNÍMÁME SVOU ROLI — expanded disclaimer, still quiet/small-print */}
      <section style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="wrap glass glass-tight disclaimer">
          <span className="kicker section-kicker">Jak vnímáme svou roli</span>
          <div className="disclaimer-text">
            <p>
              Nevystupujeme jako náhrada lékařů, psychologů ani
              zdravotnických zařízení. Respektujeme význam odborné
              zdravotní péče a naši práci vnímáme jako možný doplněk
              v oblasti životního stylu, výživy, práce s energií
              a psychické pohody.
            </p>
            <p>
              Naše individuální konzultace nenahrazují lékařskou
              diagnostiku, léčbu ani odbornou zdravotní péči.
              V případě zdravotních obtíží doporučujeme vždy
              spolupracovat s ošetřujícím lékařem a řídit se jeho
              doporučeními.
            </p>
          </div>
          <p className="section-sub disclaimer-note">
            Věříme, že propojení odborné zdravotní péče, kvalitního
            životního stylu, práce na sobě a porozumění vlastním
            potřebám může člověku pomoci na cestě k větší rovnováze,
            vitalitě a spokojenému životu.
          </p>
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
        Těšíme se na společné setkání — Jana Jaroš a Přemysl Jirák
        <br />
        © 2026 Zdraví života. Všechna práva vyhrazena.
      </footer>
    </>
  );
}
