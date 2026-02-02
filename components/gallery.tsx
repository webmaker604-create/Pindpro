import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    image: "/images/turquoise-floor.jpg",
    title: "Tehnikaruum",
    type: "Epoksiidpõrand",
    area: "85 m²",
    solution: "Türkiissinine epoksiidkate veekaitsega viimistlusega",
  },
  {
    image: "/images/industrial-polished.jpg",
    title: "Logistikakeskus",
    type: "Tööstuspõrand",
    area: "2500 m²",
    solution: "Kvartsliivaga armeeritud epoksiidsüsteem raskele koormusele",
  },
  {
    image: "/images/epoxy-garage.jpg",
    title: "Eragaraaž",
    type: "Epoksiidpõrand",
    area: "120 m²",
    solution: "Ebatasane aluspind - tasandatud lihvimise ja epoksiid-täitmisega",
  },
  {
    image: "/images/preparation.jpg",
    title: "Aluspinna ettevalmistus",
    type: "Betooni lihvimine",
    area: "180 m²",
    solution: "Mehaaniline teemantlihvimine tehtud + lisatud primer koos liivaga. Üleliigse liiva eemaldamine.",
  },
  {
    image: "/images/primer-work.jpg",
    title: "Tööstushoone",
    type: "Praimeerimine",
    area: "350 m²",
    solution: "Aluspinna praimeerimine ja kvartsliiva paigaldus",
  },
]

const measurementImages = [
  {
    image: "/images/temp-meter.jpg",
    title: "Temperatuuri kontroll",
    description: "Pinna temperatuur 7.8°C",
  },
  {
    image: "/images/humidity-meter.jpg",
    title: "Niiskuse kontroll",
    description: "Õhuniiskus 55.7%, temperatuur 16.3°C",
  },
  {
    image: "/images/moisture-meter.jpg",
    title: "Betooni niiskus",
    description: "Niiskusmõõtur näitab 74.8",
  },
]

export function Gallery() {
  return (
    <section id="projektid" className="relative bg-gradient-to-b from-slate-50 to-slate-100 py-16 md:py-24">
      {/* Decorative element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#2563eb]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#0f2a3d]/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-[#0f2a3d] md:text-4xl">
              Tehtud tööd
            </h2>
            <p className="text-gray-600">
              Valik meie viimaste projektide hulgast
            </p>
          </div>
          <Link
            href="#kontakt"
            className="rounded-full bg-[#2563eb] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1d4ed8]"
          >
            Vaata kõiki projekte
          </Link>
        </div>

        {/* Measurement Section */}
        <div className="mb-16">
          <h3 className="mb-6 text-xl font-bold text-[#0f2a3d]">
            Niiskuse ja temperatuuri kontroll enne pinna teostust
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {measurementImages.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-sm font-semibold text-[#0f2a3d]">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-[#3b9eff] px-3 py-1 text-xs font-medium text-white">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-[#0f2a3d]">
                  {project.title}
                </h3>
                <p className="mb-3 text-xs text-[#2563eb]">
                  {project.solution}
                </p>
                <div className="text-sm text-gray-600">
                  <span className="font-medium text-[#0f2a3d]">{project.area}</span>
                  <span className="ml-1">pindala</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
