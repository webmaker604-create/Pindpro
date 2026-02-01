import Image from "next/image"

const services = [
  {
    icon: "/images/icon-garage.svg",
    title: "Epopõrandad garaažidesse",
    description:
      "Epopõrandad garaažidesse on parim valik, kuna need on vastupidavad ja lihtsa hooldusega.",
  },
  {
    icon: "/images/icon-factory.svg",
    title: "Tööstuspõrandad",
    description:
      "Epopõrandad laohoonete ja tööstuspõrandad — kulumiskindlad ja vastupidavad.",
  },
  {
    icon: "/images/icon-commercial.svg",
    title: "Pinnatööd äripindadele",
    description:
      "Epopõrandad äripindadele on esinduslikud ja vastupidavad pinnalahendused.",
  },
]

function ServiceIcon({ type }: { type: string }) {
  if (type.includes("garage")) {
    return (
      <svg viewBox="0 0 80 60" fill="none" className="h-full w-full">
        {/* Garage floor with epoxy */}
        <rect x="5" y="35" width="70" height="20" rx="2" fill="#12324a" />
        <rect x="5" y="38" width="70" height="14" rx="1" fill="#2563eb" opacity="0.3" />
        {/* Epoxy layer lines */}
        <line x1="10" y1="42" x2="70" y2="42" stroke="#12324a" strokeWidth="1.5" />
        <line x1="10" y1="47" x2="70" y2="47" stroke="#12324a" strokeWidth="1.5" />
      </svg>
    )
  }
  if (type.includes("factory")) {
    return (
      <svg viewBox="0 0 80 60" fill="none" className="h-full w-full">
        {/* Factory building */}
        <rect x="10" y="15" width="25" height="40" fill="#12324a" />
        <rect x="40" y="25" width="30" height="30" fill="#12324a" />
        {/* Windows */}
        <rect x="15" y="20" width="6" height="8" fill="#60a5fa" />
        <rect x="24" y="20" width="6" height="8" fill="#60a5fa" />
        <rect x="15" y="32" width="6" height="8" fill="#60a5fa" />
        <rect x="24" y="32" width="6" height="8" fill="#60a5fa" />
        {/* Chimney */}
        <rect x="50" y="10" width="8" height="15" fill="#12324a" />
      </svg>
    )
  }
  // Commercial
  return (
    <svg viewBox="0 0 80 60" fill="none" className="h-full w-full">
      {/* Building outline */}
      <rect x="10" y="10" width="60" height="45" rx="2" stroke="#12324a" strokeWidth="2" fill="none" />
      {/* Grid windows */}
      <line x1="30" y1="10" x2="30" y2="55" stroke="#12324a" strokeWidth="1.5" />
      <line x1="50" y1="10" x2="50" y2="55" stroke="#12324a" strokeWidth="1.5" />
      <line x1="10" y1="25" x2="70" y2="25" stroke="#12324a" strokeWidth="1.5" />
      <line x1="10" y1="40" x2="70" y2="40" stroke="#12324a" strokeWidth="1.5" />
    </svg>
  )
}

export function Services() {
  return (
    <section id="teenused" className="bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-[1100px] px-5">
        <h2 className="mb-8 text-2xl font-bold text-[#12324a] md:text-3xl">
          Meie teenused
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-3">
                <ServiceIcon type={index === 0 ? "garage" : index === 1 ? "factory" : "commercial"} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#12324a]">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
