const priceItems = [
  { price: "30-45 €/h", label: "limlaamad tööd" },
  { price: "45-65 €/h", label: "epopõrandatööd, etsing, kruntmine" },
]

const whyUsItems = [
  "Professionaalne meeskond ja kvaliteetsed materjalid",
  "Epopõrandad, mis on vastupidavad ja kestavad",
]

export function Pricing() {
  return (
    <section id="hinnakiri" className="py-8 md:py-12">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-2xl font-bold text-secondary md:text-3xl">
              Umbkaudne tunnihind
            </h2>
            <ul className="space-y-3">
              {priceItems.map((item) => (
                <li key={item.price} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span className="text-foreground">
                    <span className="font-semibold">{item.price}</span> -{" "}
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-secondary">
              Miks valida meid?
            </h3>
            <ul className="space-y-3">
              {whyUsItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
