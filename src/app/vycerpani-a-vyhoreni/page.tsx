import Link from "next/link";
import SeoLanding, { type LandingPage } from "@/components/SeoLanding";
import { landingMetadata } from "@/lib/seo";

const page: LandingPage = {
  slug: "vycerpani-a-vyhoreni",
  title: "Vyčerpání a ztráta energie – konzultace Zlín | Jana Jaroš",
  description:
    "Cítíte se vyčerpaní a bez energie? Konzultace pro podporu energetické a mentální rovnováhy ve Zlíně. Nenahrazuje lékařskou péči. 50 min / 1 200 Kč.",
  keywords: [
    "ztráta energie",
    "ztráta životní energie",
    "vyčerpání",
    "psychická únava",
    "emoční vyčerpání",
    "vyhoření příznaky",
    "jak obnovit životní energii",
    "jak si dobít energii",
    "nedostatek energie",
    "energetický upír",
  ],
  serviceName: "Konzultace při vyčerpání a ztrátě energie",
  serviceType: "Konzultace energetické a mentální rovnováhy při vyčerpání",
  breadcrumb: "Vyčerpání a ztráta energie",
  eyebrow: "Únava · Vyčerpání · Životní energie",
  h1: "Vyčerpání a ztráta energie: když docházejí síly",
  intro: (
    <>
      <p>
        Jsou období, kdy i obyčejný den působí jako výstup na horu. Ráno se
        nechce vstávat, věci, které dřív bavily, ztrácejí barvu, a místo
        odpočinku přichází jen další únava.
      </p>
      <p>
        Pokud to znáte, nejste v tom sami. Tato stránka je o tom, jak
        vyčerpání poznat, kdy hledat lékaře a jak může konzultace podpořit
        návrat k rovnováze.
      </p>
    </>
  ),
  sections: [
    {
      h2: "Psychická únava a emoční vyčerpání: jak je poznat",
      body: (
        <>
          <p>
            Fyzická únava obvykle odezní po dobrém spánku. U{" "}
            <strong>psychické únavy</strong> a <strong>emočního vyčerpání</strong>{" "}
            je to jinak – člověk se vyspí, a přesto se necítí odpočatě. Lidé
            často popisují:
          </p>
          <ul>
            <li>pocit, že nemají z čeho brát, i když „nic zvláštního“ nedělali,</li>
            <li>menší trpělivost s blízkými a rychlejší podráždění,</li>
            <li>potíže se soustředěním a rozhodováním,</li>
            <li>úbytek radosti z věcí, které je dříve těšily,</li>
            <li>potřebu se stáhnout a s nikým nemluvit.</li>
          </ul>
          <p>
            Takový stav lze vnímat jako <strong>ztrátu životní energie</strong>:
            vnitřní zásoba, ze které běžně čerpáme, je na dně a nestíhá se
            doplňovat.
          </p>
        </>
      ),
    },
    {
      h2: "Vyhoření – varovné signály, které nepodceňovat",
      body: (
        <>
          <p>
            O vyhoření se mluví hlavně v souvislosti s prací, ale může se
            týkat i péče o rodinu, mateřské dovolené nebo dlouhodobé péče
            o blízkého. Mezi často zmiňované <strong>příznaky vyhoření</strong>{" "}
            patří dlouhodobé vyčerpání, odstup a cynismus vůči tomu, co dřív
            dávalo smysl, a pocit, že už nic nezvládáte.
          </p>
          <p>
            Tyto signály stojí za to brát vážně. Vyhoření není něco, co by
            se dalo „přechodit“, a jeho posouzení patří odborníkovi –
            praktickému lékaři, psychologovi nebo psychiatrovi.
          </p>
        </>
      ),
    },
    {
      h2: "Nejdřív lékař: kdy únavu nechat vyšetřit",
      body: (
        <>
          <p>
            Únava bez zjevné příčiny může mít i zdravotní důvod – například
            potíže se štítnou žlázou, nedostatek železa nebo jiná onemocnění.
            Proto platí jednoduché pravidlo: pokud jste dlouhodobě unavení,
            začněte u svého praktického lékaře.
          </p>
          <p>
            Pokud máte pocit, že ztrácíte chuť do života, nebo se objevují
            myšlenky na sebepoškození, neváhejte a obraťte se na odbornou
            pomoc ještě dnes. Linka první psychické pomoci je dostupná na
            čísle 116 123, v ohrožení života volejte 112.
          </p>
          <p>
            Energetická konzultace může přijít na řadu jako doplněk, až když
            máte zdravotní stránku ošetřenou.
          </p>
        </>
      ),
    },
    {
      h2: "Kam odtéká energie",
      body: (
        <>
          <p>
            Energii nespotřebovává jen práce. Ubírají ji i vztahy, ve kterých
            neustále dáváme a málo dostáváme, nevyřešené konflikty, starosti,
            které nosíme v hlavě, nebo nároky, které si klademe sami na sebe.
          </p>
          <p>
            Lidově se mluví o <strong>energetických upírech</strong> – lidech,
            po jejichž společnosti se cítíme vyčerpaní. Nemusí jít o zlý
            úmysl; často jde spíš o vztahy, ve kterých chybí hranice. Často
            pomůže už samotné uvědomění, s kým a v jakých situacích se
            energie ztrácí.
          </p>
        </>
      ),
    },
    {
      h2: "Jak konzultace podporuje návrat rovnováhy",
      body: (
        <>
          <p>
            Při setkání citlivě vnímám energetické pole a zaměřuji pozornost
            na oblasti, které mohou souviset s oslabením životní síly.
            Společně pak hledáme souvislosti mezi tím, jak se cítíte, a tím,
            co se ve vašem životě děje.
          </p>
          <p>
            Nejsem tu proto, abych rozhodovala za vás. Mým přáním je, abyste
            odcházeli s lepším porozuměním sami sobě a s pocitem, že
            v sobě máte zdroje, ke kterým se dá vrátit. Pokud je za
            vyčerpáním hlavně dlouhodobý tlak, navazuje na to stránka{" "}
            <Link href="/prace-se-stresem-zlin">práce se stresem</Link>.
          </p>
        </>
      ),
    },
    {
      h2: "Drobné kroky, jak si každý den dobít energii",
      body: (
        <>
          <p>
            Velké změny nejdou udělat přes noc. Drobné kroky ale ano.
            Inspirací může být:
          </p>
          <ul>
            <li>pravidelný spánek a večery, které nejsou jen „dodělávání“,</li>
            <li>chvíle venku – třeba procházka v přírodě okolo Zlína,</li>
            <li>říkat „ne“ věcem, které vás dlouhodobě vysávají,</li>
            <li>čas s lidmi, po kterých se cítíte lehčí, ne těžší,</li>
            <li>malé radosti, které nemají žádný „užitek“.</li>
          </ul>
        </>
      ),
    },
  ],
  consultTitle: "Objednání a cena",
  consultIntro: (
    <p>
      Když je energie na dně, i objednání může působit jako další úkol.
      Proto je to jednoduché: stačí zavolat. Konzultace trvá 50 minut
      a stojí 1 200 Kč.
    </p>
  ),
  faq: [
    {
      q: "Jaké jsou příznaky vyhoření?",
      a: "Často se zmiňuje dlouhodobé vyčerpání, odstup a ztráta smyslu v tom, co člověk dělá, a pocit snížené výkonnosti. Posouzení vyhoření ale patří lékaři nebo psychologovi.",
    },
    {
      q: "Jak poznám psychickou únavu od fyzické?",
      a: "Fyzická únava obvykle odezní po odpočinku a spánku. Psychická únava často přetrvává i po odpočinku a projevuje se hlavně na soustředění, náladě a chuti do věcí. Hranice ale není ostrá, a pokud únava trvá, poraďte se s lékařem.",
    },
    {
      q: "Únava bez zjevné příčiny – co dělat?",
      a: "Začněte u praktického lékaře a nechte se vyšetřit. Únava může mít zdravotní příčinu, kterou je důležité vyloučit. Konzultace může být doplňkem až potom.",
    },
    {
      q: "Co je energetický upír a jak se před ním chránit?",
      a: "Tak se lidově říká lidem nebo vztahům, po kterých se cítíme vyčerpaní. Pomáhá všímat si, kde energie odtéká, a nastavovat si jasnější hranice.",
    },
    {
      q: "Jak obnovit životní energii?",
      a: "Základem je dostatek spánku, pohyb, čas venku a omezení toho, co vás dlouhodobě vysává. Při konzultaci se můžeme podívat, kam vaše energie odtéká a kde máte vlastní zdroje síly.",
    },
    {
      q: "Můžete mi pomoci s vyhořením?",
      a: "Vyhoření nediagnostikuji ani neléčím. Konzultace může podpořit vaši energetickou a mentální rovnováhu jako doplněk k péči lékaře či psychologa, ne jako její náhrada.",
    },
    {
      q: "Jak rychle se lidé po konzultaci cítí lépe?",
      a: "To nelze slíbit. Každý člověk prožívá setkání jinak a výsledek nikdy negarantuji. Smysl konzultace vidím hlavně v lepším porozumění sobě samým.",
    },
  ],
  area: (
    <>
      <p>
        Pokud bydlíte ve Zlíně nebo v okolních obcích – například
        v Mladcové, Lužkovicích, Lukově nebo Březnici –, máte to na
        konzultaci kousek. Krátká cesta je výhodou: když je energie na dně,
        každá hodina za volantem navíc se počítá.
      </p>
      <p>
        Pro ty, kdo bydlí dál – třeba ve Vsetíně, Valašských Kloboukách nebo
        Uherském Brodě – nebo se cítí příliš unavení na cestování, je po
        domluvě možná{" "}
        <Link href="/konzultace-na-dalku">konzultace na dálku</Link>.
      </p>
    </>
  ),
  ctaTitle: "Potřebujete se zastavit a nadechnout?",
  ctaText:
    "Stačí jeden telefonát. Termín domluvíme podle vašich možností.",
  disclaimerExtra: (
    <p>
      Dlouhodobou únavu vždy nejprve konzultujte s lékařem. Pokud ztrácíte
      chuť do života nebo jste v krizi, volejte Linku první psychické pomoci
      116 123 nebo tísňovou linku 112.
    </p>
  ),
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <SeoLanding page={page} />;
}
