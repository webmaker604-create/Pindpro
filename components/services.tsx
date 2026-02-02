import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Epoksiidpõrandad",
    description: "Vastupidavad ja keemiliselt kindlad põrandakatted tööstusele, garaažidele ja äripindadele. Isetasanduvad ja dekoratiivsed lahendused.",
    features: ["Keemiakindel", "Vastupidav", "Lihtne hooldada"],
    cta: "Uuri, kas sobib sulle",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="6" y="28" width="36" height="8" rx="2" fill="#3b9eff" fillOpacity="0.2" stroke="#3b9eff" strokeWidth="2"/>
        <rect x="10" y="20" width="28" height="8" fill="#3b9eff" fillOpacity="0.1" stroke="#3b9eff" strokeWidth="1.5"/>
        <path d="M8 28V36M16 28V36M24 28V36M32 28V36M40 28V36" stroke="#3b9eff" strokeWidth="1" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    title: "Tööstuspõrandad",
    description: "Ülitugevad põrandakatted ladudele, tootmishoonetele ja logistikakeskustele. Taluvad rasket koormust ja intensiivset liiklust.",
    features: ["Raske koormus", "Kulumiskindel", "Pikk eluiga"],
    cta: "Küsi kiiret hinnangut",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="4" y="32" width="40" height="6" rx="1" fill="#3b9eff" fillOpacity="0.2" stroke="#3b9eff" strokeWidth="2"/>
        <rect x="8" y="18" width="12" height="14" rx="1" stroke="#3b9eff" strokeWidth="2"/>
        <rect x="28" y="18" width="12" height="14" rx="1" stroke="#3b9eff" strokeWidth="2"/>
        <path d="M14 10V18M34 10V18" stroke="#3b9eff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="8" r="2" fill="#3b9eff"/>
        <circle cx="34" cy="8" r="2" fill="#3b9eff"/>
      </svg>
    ),
  },
  {
    title: "Garaažipõrandad",
    description: "Vastupidavad ja esteetilised lahendused eragaraažidele ja parklatele. Õli- ja kemikaalikindlad, libisemiskindlad pinnad.",
    features: ["Õlikindel", "Libisemiskindel", "Esteetiline"],
    cta: "Küsi tasuta konsultatsiooni",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <path d="M6 20L24 8L42 20V40H6V20Z" stroke="#3b9eff" strokeWidth="2" fill="#3b9eff" fillOpacity="0.1"/>
        <rect x="18" y="28" width="12" height="12" fill="#3b9eff" fillOpacity="0.2" stroke="#3b9eff" strokeWidth="2"/>
        <path d="M18 34H30" stroke="#3b9eff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Betoonpõrandad",
    description: "Täisteenus betoonpõrandale: remondime, kaitseme ja viimistleme. Pragude parandus, pinna tugevdamine ja kaitsekiht ühes paketis.",
    features: ["Remont", "Kaitse", "Viimistlus"],
    cta: "Saa personaalne hinnang",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="6" y="28" width="36" height="10" rx="2" fill="#3b9eff" fillOpacity="0.15" stroke="#3b9eff" strokeWidth="2"/>
        <path d="M10 28V22H38V28" stroke="#3b9eff" strokeWidth="2"/>
        <path d="M18 22V16M30 22V16" stroke="#3b9eff" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 16H34" stroke="#3b9eff" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="12" r="3" fill="#3b9eff" fillOpacity="0.3" stroke="#3b9eff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Betooni lihvimine",
    description: "Betoonpõrandate lihvimine ja poleerimine. Eemaldame vana katte, tasandame ja valmistame aluspinna ette uue katte jaoks.",
    features: ["Tasandamine", "Poleerimine", "Ettevalmistus"],
    cta: "Küsi pakkumist",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <circle cx="24" cy="28" r="14" fill="#3b9eff" fillOpacity="0.1" stroke="#3b9eff" strokeWidth="2"/>
        <circle cx="24" cy="28" r="8" stroke="#3b9eff" strokeWidth="1.5" strokeDasharray="4 2"/>
        <circle cx="24" cy="28" r="3" fill="#3b9eff"/>
        <path d="M24 8V14" stroke="#3b9eff" strokeWidth="2" strokeLinecap="round"/>
        <rect x="22" y="4" width="4" height="6" rx="1" fill="#3b9eff"/>
      </svg>
    ),
  },
  {
    title: "Aluspinna ettevalmistus",
    description: "Professionaalne aluspinna ettevalmistus: pragude parandus, niiskuse kontroll, praimeerimine ja tasandamine.",
    features: ["Pragude remont", "Niiskuskontroll", "Praimer"],
    cta: "Uuri lähemalt",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <rect x="6" y="30" width="36" height="10" rx="2" fill="#3b9eff" fillOpacity="0.1" stroke="#3b9eff" strokeWidth="2"/>
        <path d="M12 30V24C12 22 14 20 18 20" stroke="#3b9eff" strokeWidth="2"/>
        <path d="M24 30V18" stroke="#3b9eff" strokeWidth="2" strokeDasharray="4 2"/>
        <path d="M36 30V24C36 22 34 20 30 20" stroke="#3b9eff" strokeWidth="2"/>
        <circle cx="18" cy="14" r="4" fill="#3b9eff" fillOpacity="0.3" stroke="#3b9eff" strokeWidth="1.5"/>
        <circle cx="30" cy="14" r="4" fill="#3b9eff" fillOpacity="0.3" stroke="#3b9eff" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Akrüülpõrandad (MMA)",
    description: "Kiirkivistuvad akrüülpõrandad, mis on valmis kasutamiseks juba 2 tunni pärast. Ideaalne, kui tootmine ei tohi seisma jääda.",
    features: ["Kiire kivinemine", "Töötab külmas", "24/7 paigaldus"],
    cta: "Kas see sobib mulle?",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
        <path d="M24 6L28 18H40L30 26L34 38L24 30L14 38L18 26L8 18H20L24 6Z" fill="#3b9eff" fillOpacity="0.2" stroke="#3b9eff" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="teenused" className="bg-slate-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-[#0f2a3d] md:text-4xl">
            Meie teenused
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Pakume täislahendusi alates aluspinna ettevalmistusest kuni lõppviimistluseni. 
            Kõik tööd teostame ise, ilma alltöövõtjateta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#3b9eff]/30 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-4 h-14 w-14 rounded-xl bg-slate-50 p-3">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-bold text-[#0f2a3d]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-4 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-[#3b9eff]/10 px-3 py-1 text-xs font-medium text-[#2563eb]"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563eb] transition-colors hover:text-[#1d4ed8]"
              >
                {service.cta || "Küsi pakkumist"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Pole kindel, milline lahendus sobib? Aitame valida!
          </p>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-lg bg-[#0f2a3d] px-8 py-4 font-semibold text-white transition-all hover:bg-[#1a3a52]"
          >
            Küsi tasuta konsultatsiooni
          </Link>
        </div>
      </div>
    </section>
  )
}
