import { Check, Clock, Shield, Thermometer, Users, Wrench } from "lucide-react"
import Link from "next/link"

const pricingTiers = [
  {
    title: "Erakliendi põrandad",
    price: "alates 29",
    unit: "€/m²",
    description: "Garaažid, keldrid ja väiksemad pinnad koduseks kasutuseks",
    system: "Epoksiidkate 2-3mm",
    features: [
      "Mehaaniline aluspinna lihvimine",
      "Praimer + epoksiidkate (2-3 mm)",
      "Vastupidav ja kergesti hooldatav pind",
      "Libisemiskindel viimistlus (valikuline)",
      "Teostusaeg 1-2 päeva",
    ],
    note: "Optimeeritud koduseks kasutuseks, ei sisalda tööstuslikku armeerimist",
  },
  {
    title: "Tööstuspõrandad",
    price: "alates 35",
    unit: "€/m²",
    description: "Raske koormuse süsteem 500+ m² pindadele",
    system: "Kvartsliivaga armeeritud epoksiid",
    features: [
      "Professionaalne aluspinna ettevalmistus",
      "Praimer + kvartsliivaga armeeritud kiht",
      "Kulumiskindel epoksiidviimistlus",
      "Keemiakindlus ja lihtne hooldus",
      "Töö ka nädalavahetustel (kokkuleppel)",
    ],
    popular: true,
  },
  {
    title: "Akrüülpõrandad (MMA)",
    price: "alates 45",
    unit: "€/m²",
    description: "Kiirkivistuv süsteem, kasutatav juba 1-2 tunni pärast",
    system: "Metüülmetakrülaat (MMA)",
    features: [
      "Kiire kivistumine (kõndimiskindel 30-60 min)",
      "Sobib paigaldamiseks ka madalatel temperatuuridel",
      "Minimaalne tööseisak",
      "Keemiliselt vastupidav viimistlus",
      "Tööstuslik kasutuskoormus",
    ],
  },
  {
    title: "Betooni lihvimine",
    price: "alates 18",
    unit: "€/m²",
    description: "Ettevalmistus kattele, mitte poleerimine",
    system: "Mehaaniline teemantlihvimine",
    features: [
      "Vana katte/värvi eemaldus",
      "Pinna profileerimine uuele kattele",
      "Pragude ja aukude parandus",
      "Tolmuvaba töö (tööstuslik imeja)",
      "Sobib iga järgneva kattesüsteemiga",
    ],
  },
]

const whyUs = [
  {
    icon: <Thermometer className="h-6 w-6" />,
    title: "Töötingimuste kontroll",
    description: "Kontrollime enne paigaldust niiskust, temperatuuri ja keskkonnatingimusi",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "1-2 aastat garantiid",
    description: "Garantii pikkus sõltub süsteemist ja töötingimustest",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Oma meeskond",
    description: "Kõik tööd teostame ise, ilma alltöövõtjateta",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Kvaliteetmaterjalid",
    description: "Kasutame ainult tõestatud tootjate materjale",
  },
]

export function Pricing() {
  return (
    <section id="hinnakiri" className="relative bg-white py-16 md:py-24">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-[#2563eb]/5 blur-3xl" />
        <div className="absolute -right-20 bottom-40 h-72 w-72 rounded-full bg-[#0f2a3d]/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-[#0f2a3d] md:text-4xl">
            Orienteeruvad hinnad
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Hinnad on orienteeruvad. Täpne maksumus selgub aluspinna seisukorra, valitud süsteemi ja pinna suuruse põhjal.
            Pakume tasuta objekti ülevaatust ja personaalset pakkumist.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
            Orienteeruvad hinnad eeldavad korrektset aluspinna ettevalmistust ja kvaliteetset põrandasüsteemi.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg ${
                tier.popular ? "border-[#2563eb] ring-2 ring-[#2563eb]/20" : "border-gray-200"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2563eb] px-4 py-1 text-xs font-semibold text-white">
                  Populaarne
                </div>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#0f2a3d]">{tier.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{tier.description}</p>
                {tier.system && (
                  <p className="mt-2 inline-block rounded-full bg-[#0f2a3d]/10 px-3 py-1 text-xs font-medium text-[#0f2a3d]">
                    {tier.system}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#0f2a3d]">{tier.price}</span>
                <span className="ml-1 text-gray-500">{tier.unit}</span>
              </div>
              <ul className="mb-6 flex-grow space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              {tier.note && (
                <p className="mb-4 text-xs italic text-gray-400">{tier.note}</p>
              )}
              <Link
                href="#kontakt"
                className={`mt-auto block rounded-lg py-3 text-center font-semibold transition-all ${
                  tier.popular
                    ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
                    : "bg-slate-100 text-[#0f2a3d] hover:bg-slate-200"
                }`}
              >
                Küsi pakkumist
              </Link>
            </div>
          ))}
        </div>

        {/* Why Us */}
        <div className="rounded-2xl bg-[#0f2a3d] p-8 md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
            Miks valida PindPro?
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b9eff]/20 text-[#3b9eff]">
                  {item.icon}
                </div>
                <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
