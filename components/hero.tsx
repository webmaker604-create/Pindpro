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
    <section className="relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nav via-nav-dark to-[#0d2435]" />
      
      {/* Curved bottom overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V60C240 100 480 120 720 100C960 80 1200 40 1440 60V120H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 pb-32 pt-12 md:pb-40 md:pt-16">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-5 md:flex-row md:items-center md:gap-12">
          <div className="flex-1 text-white">
            <h1 className="mb-4 text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Pinnatööd, mis
              <br />
              kestavad
            </h1>
            <p className="mb-6 text-base text-slate-200 md:text-lg">
              Teostame kauakestvaid epopõrandaid ja pinnatöid
            </p>
            <ul className="mb-8 space-y-3">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-[#4fb0ff]" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-white md:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#kontakt"
              className="inline-block rounded-lg border-2 border-white/20 bg-nav-dark/50 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-nav-dark"
            >
              Küsi pakkumist
            </Link>
          </div>
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10">
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
      </div>
    </section>
  )
}
