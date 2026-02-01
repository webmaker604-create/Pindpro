import { Check } from "lucide-react"

const prices = [
  { range: "30-45 €/h", description: "limlaamad tööd" },
  { range: "45-65 €/h", description: "epopõrandad ja pinnatööd" },
]

const reasons = [
  "Professionaalne ja kiirapõhine epopõrandad",
  "Epopõrandate aring pööraem spetsialistidega",
]

export function Pricing() {
  return (
    <section id="hinnakiri" className="bg-background py-10 md:py-14">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-2xl font-bold text-secondary md:text-3xl">
              Umbkaudne tunnihind
            </h2>
            <ul className="space-y-3">
              {prices.map((price) => (
                <li key={price.range} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span className="font-semibold text-foreground">
                    {price.range}
                  </span>
                  <span className="text-muted-foreground">
                    — {price.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-4 text-xl font-bold text-secondary">
              Miks valida meid?
            </h3>
            <ul className="space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span className="text-sm text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
