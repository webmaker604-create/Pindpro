import { Check, Clock, Shield, Users, Wrench } from "lucide-react"
import Link from "next/link"

const pricingTiers = [
  {
    title: "Garaažipõrandad",
    price: "alates 35",
    unit: "€/m²",
    description: "Eragaraažid ja väiksemad pinnad",
    features: [
      "Aluspinna ettevalmistus",
      "Praimer + epoksiidkate",
      "Kuni 50m² projektid",
      "2-3 päeva teostusaeg",
    ],
  },
  {
    title: "Tööstuspõrandad",
    price: "alates 28",
    unit: "€/m²",
    description: "Laod, tootmishooned, logistika",
    features: [
      "Täispakett ettevalmistusest viimistluseni",
      "Raske koormuse kate",
      "Suured pinnad 500+ m²",
      "Individuaalne ajakava",
    ],
    popular: true,
  },
  {
    title: "Betooni lihvimine",
    price: "alates 18",
    unit: "€/m²",
    description: "Ettevalmistus ja poleerimine",
    features: [
      "Vana katte eemaldus",
      "Tasandamine",
      "Pragude parandus",
      "Ettevalmistus uueks katteks",
    ],
  },
]

const whyUs = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "5 aastat garantiid",
    description: "Anname kõikidele töödele garantii",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Kiire teostus",
    description: "Peame kinni kokkulepitud tähtaegadest",
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
    <section id="hinnakiri" className="bg-slate-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-[#0f2a3d] md:text-4xl">
            Orienteeruvad hinnad
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Täpne hind sõltub aluspinna seisukorrast, valitud süsteemist ja pinna suurusest. 
            Küsi tasuta kohapealset ülevaatust ja personaalset pakkumist.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-lg ${
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
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#0f2a3d]">{tier.price}</span>
                <span className="ml-1 text-gray-500">{tier.unit}</span>
              </div>
              <ul className="mb-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#kontakt"
                className={`block rounded-lg py-3 text-center font-semibold transition-all ${
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
