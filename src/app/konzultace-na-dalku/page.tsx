import Link from "next/link";
import SeoLanding, { type LandingPage } from "@/components/SeoLanding";
import { landingMetadata } from "@/lib/seo";

const page: LandingPage = {
  slug: "konzultace-na-dalku",
  title: "Energetická konzultace na dálku | Jana Jaroš, Zlín",
  description:
    "Nemůžete přijet do Zlína? Konzultace energetické a mentální rovnováhy je po domluvě možná i na dálku. 50 min / 1 200 Kč. Tel. 775 131 787.",
  keywords: [
    "energetická konzultace na dálku",
    "práce s energií na dálku",
    "energetická rovnováha na dálku",
    "Jana Jaroš",
  ],
  serviceName: "Energetická konzultace na dálku",
  serviceType: "Konzultace energetické a mentální rovnováhy na dálku",
  breadcrumb: "Konzultace na dálku",
  eyebrow: "Na dálku · Po domluvě",
  h1: "Konzultace na dálku – rovnováha odkudkoli",
  intro: (
    <>
      <p>
        Ne každý má možnost přijet do Zlína. Někomu to nedovolí vzdálenost,
        jinému pracovní rozvrh, malé děti nebo zdravotní stav.
      </p>
      <p>
        Proto je po domluvě možná i{" "}
        <strong>energetická konzultace na dálku</strong> – se stejnou
        pozorností a péčí jako osobní setkání.
      </p>
    </>
  ),
  sections: [
    {
      h2: "Jak funguje konzultace na dálku",
      body: (
        <>
          <p>
            Lidé, kteří o práci s energií slyší poprvé, se často ptají, jak
            může fungovat, když nesedíme v jedné místnosti. Mnozí to hledají
            pod označením „léčení energií na dálku“. Já mluvím o{" "}
            <strong>práci s energií na dálku</strong>: nejde o léčbu, ale
            o konzultaci zaměřenou na energetickou a mentální rovnováhu.
          </p>
          <p>
            Při konzultaci se na vás naladím a citlivě vnímám vaše
            energetické pole, stejně jako při osobním setkání. To, co vnímám,
            s vámi sdílím a společně hledáme souvislosti s tím, co právě
            prožíváte. Rozhovor tvoří přirozenou součást setkání.
          </p>
          <p>
            Zda pro vás bude vhodnější osobní setkání, nebo setkání na dálku,
            si můžeme v klidu probrat už při objednání.
          </p>
        </>
      ),
    },
    {
      h2: "Pro koho je konzultace na dálku vhodná",
      body: (
        <>
          <ul>
            <li>
              pro lidi, kteří bydlí mimo Zlín a cesta by pro ně byla
              náročná,
            </li>
            <li>
              pro časově vytížené, kterým se do týdne nevejde dojíždění,
            </li>
            <li>pro rodiče malých dětí, kteří nemají hlídání,</li>
            <li>
              pro ty, kterým zdravotní stav nebo omezená pohyblivost
              cestování ztěžuje,
            </li>
            <li>
              pro klienty, kteří už osobně byli a chtějí navázat bez cesty.
            </li>
          </ul>
          <p>
            Pokud je to ale pro vás možné, osobní setkání upřednostňuji.
            I samotný moment, kdy na chvíli opustíte běžné prostředí
            a přijdete do klidného prostoru, může být pro setkání přínosem.
          </p>
        </>
      ),
    },
    {
      h2: "Průběh a technické požadavky",
      body: (
        <>
          <p>
            Konkrétní podobu konzultace na dálku si domluvíme při objednání.
            Technicky toho moc nepotřebujete:
          </p>
          <ul>
            <li>telefon nebo zařízení s připojením k internetu,</li>
            <li>
              klidné místo, kde vás 50 minut nikdo nebude rušit,
            </li>
            <li>případně sluchátka, aby se vám lépe soustředilo,</li>
            <li>chvíli času po konzultaci jen pro sebe.</li>
          </ul>
          <p>
            Prostředí, ve kterém jste, hraje velkou roli. Vypněte si
            upozornění, zavřete dveře a dopřejte si prostor, jako byste
            k někomu přišli osobně.
          </p>
        </>
      ),
    },
    {
      h2: "Platba a objednání",
      body: (
        <>
          <p>
            Individuální konzultace trvá 50 minut a stojí 1 200 Kč. Termín
            i způsob platby u konzultace na dálku si domluvíme při objednání
            po telefonu na čísle +420 775 131 787.
          </p>
          <p>
            Pokud nevíte, zda je konzultace pro vás, klidně se zeptejte
            při telefonátu. Nemusíte mít předem jasno v tom, co přesně
            potřebujete.
          </p>
        </>
      ),
    },
    {
      h2: "Rozdíl oproti osobní konzultaci",
      body: (
        <>
          <p>
            Obsahově vychází konzultace na dálku ze stejného přístupu jako
            setkání ve Zlíně: citlivé vnímání energetického pole, hledání
            souvislostí a bezpečný prostor pro to, s čím přicházíte. Rozdíl
            je hlavně v prostředí – o klidné místo se v tomto případě
            postaráte sami.
          </p>
          <p>
            Témata mohou být stejná jako při osobní konzultaci: od{" "}
            <Link href="/prace-se-stresem-zlin">stresu a napětí</Link> přes{" "}
            <Link href="/vycerpani-a-vyhoreni">vyčerpání a ztrátu energie</Link>{" "}
            až po <Link href="/prace-s-emocemi-zlin">práci s emocemi</Link>.
            Pokud chcete přijet osobně, podívejte se na stránku{" "}
            <Link href="/energeticka-terapie-zlin">
              energetická terapie Zlín
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  consultTitle: "Jak probíhá konzultace – osobně i na dálku",
  consultIntro: (
    <p>
      Objednání je stejné, ať přijedete, nebo se spojíme na dálku. Rozdíl
      je jen v posledním kroku.
    </p>
  ),
  faq: [
    {
      q: "Jak může konzultace fungovat na dálku?",
      a: "Při konzultaci se na vás naladím a vnímám vaše energetické pole stejně jako při osobním setkání. Co vnímám, s vámi sdílím a společně hledáme souvislosti. Nejde o léčbu, ale o konzultaci zaměřenou na energetickou a mentální rovnováhu.",
    },
    {
      q: "Co potřebuji ke konzultaci na dálku?",
      a: "Telefon nebo zařízení s připojením k internetu, klidné místo, kde vás 50 minut nikdo nebude rušit, a chvíli času pro sebe po konzultaci. Konkrétní podobu hovoru domluvíme při objednání.",
    },
    {
      q: "Jak a kdy se platí?",
      a: "Termín i způsob platby u konzultace na dálku si domluvíme při objednání po telefonu.",
    },
    {
      q: "Je konzultace na dálku stejně dlouhá a za stejnou cenu?",
      a: "Individuální konzultace trvá 50 minut a stojí 1 200 Kč. Podrobnosti ke konzultaci na dálku si potvrdíme při objednání.",
    },
    {
      q: "Mohu kombinovat osobní a vzdálená sezení?",
      a: "Po domluvě to možné je. Jakou kombinaci zvolit, probereme při objednání po telefonu.",
    },
    {
      q: "Jak se objednat?",
      a: "Zavolejte na +420 775 131 787. Termín domluvíme individuálně podle vašich možností a aktuální kapacity.",
    },
  ],
  area: (
    <>
      <p>
        Ze Zlína a blízkého okolí – z Otrokovic, Napajedel, Vizovic nebo
        Fryštáku – je nejjednodušší přijet osobně. Konzultace na dálku se
        hodí hlavně pro ty, kdo bydlí ve vzdálenějších částech Zlínského
        kraje, třeba ve Valašském Meziříčí, Uherském Brodě nebo
        Brumově-Bylnici.
      </p>
      <p>
        Spojit se ale můžeme i tehdy, když bydlíte mimo Zlínský kraj.
      </p>
    </>
  ),
  ctaTitle: "Chcete se spojit na dálku?",
  ctaText:
    "Zavolejte a domluvme si termín i podobu konzultace, která vám bude vyhovovat.",
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <SeoLanding page={page} />;
}
