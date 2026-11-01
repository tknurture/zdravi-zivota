import Link from "next/link";
import SeoLanding, { type LandingPage } from "@/components/SeoLanding";
import { landingMetadata } from "@/lib/seo";

const page: LandingPage = {
  slug: "prace-se-stresem-zlin",
  title: "Práce se stresem Zlín – konzultace pro klid | Jana Jaroš",
  description:
    "Cítíte napětí, přetížení nebo neklid? Individuální konzultace zaměřená na stres a vnitřní rovnováhu ve Zlíně i na dálku. 50 min / 1 200 Kč.",
  keywords: [
    "terapie stresu Zlín",
    "zvládání stresu Zlín",
    "jak se zbavit stresu",
    "jak zvládat stres v práci",
    "terapie proti stresu",
    "jak se zbavit napětí v těle",
    "psychické napětí",
    "mentální rovnováha",
  ],
  serviceName: "Práce se stresem a napětím ve Zlíně",
  serviceType: "Konzultace zaměřená na stres a mentální rovnováhu",
  breadcrumb: "Práce se stresem",
  eyebrow: "Stres · Napětí · Klid",
  h1: "Práce se stresem a napětím ve Zlíně",
  intro: (
    <>
      <p>
        Ráno vstáváte s myšlenkami na to, co všechno musíte stihnout, a večer
        usínáte se stejným seznamem v hlavě? Dlouhodobý stres si postupně
        bere energii, trpělivost i radost.
      </p>
      <p>
        Individuální konzultace je chvíle, kdy se zastavíte a podíváte se,
        co vás vyčerpává a kde můžete najít oporu.
      </p>
    </>
  ),
  sections: [
    {
      h2: "Jak se stres projevuje v těle, mysli a emocích",
      body: (
        <>
          <p>
            Stres sám o sobě není nepřítel – krátkodobě nás mobilizuje
            a pomáhá zvládnout náročnou situaci. Potíž nastává, když napětí
            neodchází a z výjimečného stavu se stává běžný den. Lidé to
            popisují různě:
          </p>
          <ul>
            <li>
              <strong>v těle</strong> – stažená ramena, zatnutá čelist,
              mělký dech, pocit „kamene“ v žaludku,
            </li>
            <li>
              <strong>v mysli</strong> – myšlenky, které se točí dokola,
              potíže se soustředěním, neschopnost vypnout,
            </li>
            <li>
              <strong>v emocích</strong> – podrážděnost, přecitlivělost,
              pocit, že je toho prostě moc.
            </li>
          </ul>
          <p>
            Tyto projevy jsou signálem, že vaše rovnováha potřebuje
            pozornost. Nejde o slabost ani o selhání.
          </p>
        </>
      ),
    },
    {
      h2: "Proč „jen si odpočinout“ někdy nestačí",
      body: (
        <>
          <p>
            Dovolená, prodloužený víkend, večer u filmu – to všechno pomáhá,
            ale jen do chvíle, než se vrátíte do stejného tempa. Pokud zdroj
            stresu zůstává, napětí se vrací. A často se objevuje i tehdy,
            když máte „volno“: tělo odpočívá, ale hlava pracuje dál.
          </p>
          <p>
            Proto se při konzultaci nezaměřujeme jen na to, jak se uvolnit,
            ale i na to, odkud napětí přichází. Někdy je to práce, jindy
            vztahy, nevyslovené emoce nebo vysoké nároky, které si klademe
            sami na sebe.
          </p>
        </>
      ),
    },
    {
      h2: "Jak pracuji se stresem na energetické a mentální úrovni",
      body: (
        <>
          <p>
            Při setkání citlivě vnímám energetické pole člověka a zaměřuji
            pozornost na oblasti, které mohou souviset s nerovnováhou nebo
            oslabením životní síly. Spolu pak hledáme souvislosti: jak se
            dlouhodobé napětí propisuje do vaší energie, jak ovlivňuje vaše
            prožívání a co by vám mohlo pomoci vrátit se k sobě.
          </p>
          <p>
            Nejde o hotový návod. Každé setkání vychází z vaší aktuální
            situace. Mým záměrem je vytvořit bezpečný prostor, kde můžete
            napětí pojmenovat, kde se nemusíte nikam hnát a kde můžete znovu
            ucítit vlastní <strong>mentální rovnováhu</strong>.
          </p>
        </>
      ),
    },
    {
      h2: "Co si z konzultace odnesete",
      body: (
        <>
          <p>
            Cílem není rychlá úleva, ale lepší porozumění tomu, co se ve vás
            děje. Konzultace vám může pomoci získat jasnější pohled na to, co
            vás vyčerpává, a uvědomit si, kde máte vlastní zdroje síly. Spolu
            se můžeme podívat i na drobnosti, které se dají zařadit do
            běžného dne:
          </p>
          <ul>
            <li>krátké zastavení a pár vědomých nádechů mezi úkoly,</li>
            <li>chvíle bez telefonu, hlavně večer před spaním,</li>
            <li>procházka bez cíle – třeba po zlínských lesoparcích,</li>
            <li>všímání si, kdy v těle narůstá napětí, dřív než přeroste.</li>
          </ul>
          <p>
            Jsou to obecné tipy, ne zázračné recepty. Smysl dávají hlavně
            tehdy, když víte, proč je děláte.
          </p>
        </>
      ),
    },
    {
      h2: "Stres v práci a v rodině – časté situace",
      body: (
        <>
          <p>
            Typickým příkladem je člověk, který v práci „drží všechno
            pohromadě“ a doma pak nemá sílu na nikoho, ani na sebe. Nebo
            maminka, která se stará o děti i rodiče a na vlastní potřeby
            dávno zapomněla. Či podnikatel, kterému se i o víkendu honí hlavou
            čísla.
          </p>
          <p>
            Pokud se v těchto situacích poznáváte a cítíte, že vás stres
            postupně vyčerpává, může vás zajímat i stránka{" "}
            <Link href="/vycerpani-a-vyhoreni">
              vyčerpání a ztráta energie
            </Link>
            . A pokud je za napětím hodně nevyslovených pocitů, navazuje na
            to <Link href="/prace-s-emocemi-zlin">práce s emocemi</Link>.
          </p>
        </>
      ),
    },
    {
      h2: "Kdy je namístě vyhledat lékaře nebo psychologa",
      body: (
        <>
          <p>
            Konzultace zaměřená na stres není psychoterapie ani léčba. Pokud stres
            provází dlouhodobá nespavost, bušení srdce, bolesti, úzkostné
            stavy, ztráta chuti do života nebo myšlenky na sebepoškození,
            obraťte se prosím na lékaře, psychologa či psychiatra. V akutní
            krizi můžete kdykoli zavolat na Linku první psychické pomoci
            116 123.
          </p>
          <p>
            Moje konzultace může být doplňkem k odborné péči, nikdy její
            náhradou.
          </p>
        </>
      ),
    },
  ],
  consultTitle: "Cena, místo a objednání",
  consultIntro: (
    <p>
      Konzultace zaměřená na stres trvá 50 minut a stojí 1 200 Kč. Probíhá
      osobně ve Zlíně, po domluvě také na dálku – což ocení hlavně ti, pro
      které je už samotná cesta další položkou v nabitém kalendáři.
    </p>
  ),
  faq: [
    {
      q: "Jak se zbavit stresu, když nemám čas na odpočinek?",
      a: "Začít se dá i v malém: několik vědomých nádechů mezi úkoly, krátká procházka nebo večer bez obrazovky. Pokud ale stres trvá dlouhodobě, pomůže podívat se na jeho zdroj – a právě na to je prostor při konzultaci.",
    },
    {
      q: "Jak zvládat stres v práci?",
      a: "Pomáhá všímat si, kdy napětí roste, dělat si krátké pauzy a nastavit si hranice, kolik toho opravdu zvládnete. Při konzultaci se můžeme podívat, co konkrétně vás v práci vyčerpává a kde máte vlastní zdroje síly.",
    },
    {
      q: "Jak se zbavit napětí v těle?",
      a: "Mnoha lidem pomáhá pohyb, protažení, pomalý dech a vědomé uvolnění ramen či čelisti. Dlouhodobé nebo bolestivé napětí je ale vhodné probrat s lékařem či fyzioterapeutem.",
    },
    {
      q: "Jak se uvolnit před spaním, když se mi honí hlavou myšlenky?",
      a: "Zkuste odložit telefon alespoň hodinu před spaním, sepsat si myšlenky na papír a věnovat pár minut klidnému dechu. Pokud nespavost trvá déle, obraťte se na lékaře.",
    },
    {
      q: "Pomůže jedna konzultace, nebo je potřeba více sezení?",
      a: "To je individuální a nelze to slíbit předem. Pro někoho je jedno setkání důležitým impulsem, jiní se rádi vracejí. O dalším setkání rozhodujete vy.",
    },
    {
      q: "Jaký je rozdíl mezi vaší konzultací a psychoterapií?",
      a: "Psychoterapii vede vyškolený terapeut nebo psycholog a jde o odbornou péči. Moje konzultace je zaměřená na energetickou a mentální rovnováhu a psychoterapii ani lékařskou péči nenahrazuje.",
    },
    {
      q: "Můžu přijít, i když neznám přesnou příčinu svého stresu?",
      a: "Určitě. Spousta lidí přichází jen s pocitem, že je toho moc. Hledání souvislostí je součástí setkání.",
    },
  ],
  area: (
    <>
      <p>
        Pokud bydlíte nebo pracujete ve Zlíně – třeba v Prštném, na Loukách
        nebo v Kostelci –, dá se setkání spojit s cestou z práce nebo
        s volným dopolednem. Dobře dostupné je i z okolních měst a obcí,
        jako jsou Otrokovice, Napajedla nebo Želechovice nad Dřevnicí.
      </p>
      <p>
        Pokud pracujete v Holešově či Luhačovicích a dojíždění se vám
        nevejde do týdne, zvažte <Link href="/konzultace-na-dalku">konzultaci
        na dálku</Link>.
      </p>
    </>
  ),
  ctaTitle: "Je toho na vás poslední dobou moc?",
  ctaText:
    "Zavolejte a domluvme si klidné setkání – osobně ve Zlíně, nebo na dálku.",
  disclaimerExtra: (
    <p>
      Při dlouhodobém psychickém napětí, úzkostech nebo v krizi vyhledejte
      psychologa či lékaře. Linka první psychické pomoci: 116 123.
    </p>
  ),
};

export const metadata = landingMetadata(page);

export default function Page() {
  return <SeoLanding page={page} />;
}
