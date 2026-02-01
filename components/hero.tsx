import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export function Hero() {
  const checks = [
    "Korrektselt ettevalmistused",
    "Puhas teostus",
    "Kokkulepetest kinnipidamine",
  ]

  return (
    <section className="bg-gradient-to-b from-nav to-nav-dark py-12 md:py-16">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-5 md:flex-row md:items-center md:gap-12">
        <div className="flex-1 text-white">
          <h1 className="mb-3 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Pinnatööd, mis kestavad
          </h1>
          <p className="mb-5 text-base opacity-95 md:text-lg">
            Teostame kauakestvaid epopõrandaid ja pinnatöid
          </p>
          <ul className="mb-6 space-y-2">
            {checks.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded bg-accent/20">
                  <Check className="h-3.5 w-3.5 text-accent" />
                </span>
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#kontakt"
            className="inline-block rounded-lg bg-primary px-5 py-2.5 font-semibold text-white transition-colors hover:bg-accent"
          >
            Küsi pakkumist
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="/images/hero-workers.jpg"
              alt="Töötajad epopõrandat paigaldamas"
              width={520}
              height={380}
              className="h-auto w-full max-w-[520px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
