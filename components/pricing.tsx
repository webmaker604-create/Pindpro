const prices = [
  { range: "30-45 €/h", description: "limlaamad tööd" },
  { range: "45-65 €/h", description: "epopõrandad ja pinnatööd" },
  { range: "Projekti hind", description: "sõltub pinna suurusest ja seisukorrast" },
]

const reasons = [
  "Professionaalne ja kiire epopõrandate paigaldus",
  "Epopõrandate aring koos spetsialistidega",
  "Kasutame kvaliteetseid materjale",
  "Anname tööle garantii",
]

export function Pricing() {
  return (
    <section id="hinnakiri" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Pricing */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-[#12324a] md:text-3xl">
              Umbkaudne tunnihind
            </h2>
            <ul className="space-y-4">
              {prices.map((price) => (
                <li key={price.range} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <div>
                    <span className="font-semibold text-[#12324a]">
                      {price.range}
                    </span>
                    <span className="text-slate-600">
                      {" "}— {price.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Why choose us */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <h3 className="mb-5 text-xl font-bold text-[#12324a] md:text-2xl">
              Miks valida meid?
            </h3>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-amber-500" />
                  <span className="text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
