import { Warehouse, Factory, Building2 } from "lucide-react"

const services = [
  {
    icon: Warehouse,
    title: "Epopõrandad garaažidesse",
    description:
      "Epopõrandad garaažidesse on parim valik, kuna need on vastupidavad ja lihtsa hooldusega.",
  },
  {
    icon: Factory,
    title: "Tööstuspõrandad",
    description:
      "Epopõrandad laohoonete ja tööstuspõrandad — kulumiskindlad ja vastupidavad.",
  },
  {
    icon: Building2,
    title: "Pinnatööd äripindadele",
    description:
      "Epopõrandad äripindadele on esinduslikud ja vastupidavad pinnalahendused.",
  },
]

export function Services() {
  return (
    <section id="teenused" className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-[1100px] px-5">
        <h2 className="mb-8 text-2xl font-bold text-nav md:text-3xl">
          Meie teenused
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-background">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
