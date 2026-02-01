"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const benefits = [
    "Korrektne ettevalmistus",
    "Puhas teostus",
    "Kokkulepetest kinnipidamine",
  ]

  const trustBadges = [
    { value: "8+", label: "aastat kogemust" },
    { value: "15+", label: "teostatud projekti" },
    { value: "1-2a", label: "garantii töödele" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#12324a] via-[#0f2a3f] to-[#0a1f2e]">
      {/* Header */}
      <header className="relative z-20 border-b border-white/10 bg-[#0a1f2e]/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b9eff] to-[#1a7fd9] shadow-lg md:h-14 md:w-14">
              <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8 md:h-9 md:w-9">
                <path d="M12 22L20 14L28 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 20V28H25V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="18" y="23" width="4" height="5" rx="0.5" fill="white" fillOpacity="0.9"/>
                <path d="M8 32L14 38L34 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold tracking-tight text-white/90 md:text-3xl">PIND</span>
                <span className="text-2xl font-bold tracking-tight text-[#3b9eff] md:text-3xl">PRO</span>
              </div>
              <span className="hidden text-[9px] font-medium tracking-[0.12em] text-white/50 md:block md:text-[10px]">
                PINNATÖÖDE LAHENDUSED
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            <Link href="#teenused" className="text-base font-medium text-white/80 transition-colors hover:text-white">
              Teenused
            </Link>
            <Link href="#projektid" className="text-base font-medium text-white/80 transition-colors hover:text-white">
              Tehtud tööd
            </Link>
            <Link href="#hinnakiri" className="text-base font-medium text-white/80 transition-colors hover:text-white">
              Hinnakiri
            </Link>
            <Link href="#kontakt" className="text-base font-medium text-white/80 transition-colors hover:text-white">
              Kontakt
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#kontakt"
              className="rounded-full bg-[#2563eb] px-7 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1d4ed8] hover:shadow-xl"
            >
              KÜSI PAKKUMIST
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-white md:hidden"
            aria-label="Menüü"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0a1f2e] px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link href="#teenused" className="text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Teenused</Link>
              <Link href="#projektid" className="text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Tehtud tööd</Link>
              <Link href="#hinnakiri" className="text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Hinnakiri</Link>
              <Link href="#kontakt" className="text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
              <Link href="#kontakt" className="mt-2 rounded-full bg-[#2563eb] px-4 py-2.5 text-center font-semibold text-white" onClick={() => setMobileMenuOpen(false)}>
                KÜSI PAKKUMIST
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 pb-32 pt-10 md:pb-40 md:pt-14 lg:pt-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* Text Content */}
            <div className="text-white">
              <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Pinnatööd, mis
                <span className="block text-[#3b9eff]">kestavad</span>
              </h1>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                Teostame kauakestvaid epopõrandaid ja pinnatöid tööstushoonetele, garaažidele ja äripindadele. 
                Alates aluspinna ettevalmistusest kuni lõppviimistluseni.
              </p>

              {/* Benefits */}
              <ul className="mb-8 space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3b9eff]/20">
                      <Check className="h-3.5 w-3.5 text-[#3b9eff]" strokeWidth={3} />
                    </div>
                    <span className="font-medium text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-lg bg-[#2563eb] px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-[#1d4ed8] hover:shadow-xl"
                >
                  Küsi tasuta pakkumist
                </Link>
                <a
                  href="tel:+3725551234"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-6 py-3.5 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  <Phone className="h-4 w-4" />
                  +372 555 1234
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="text-center">
                    <div className="text-2xl font-bold text-[#3b9eff] md:text-3xl">{badge.value}</div>
                    <div className="text-xs text-white/60 md:text-sm">{badge.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10">
                <Image
                  src="/images/hero-workers.jpg"
                  alt="Epopõranda paigaldamine"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-xl md:-bottom-6 md:-left-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0f2a3d]">Tasuta ülevaatus</div>
                    <div className="text-xs text-gray-500">Kohapeal hindamine</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-full md:h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V50C360 90 720 100 1080 70C1260 55 1380 40 1440 30V100H0Z"
            fill="#f1f5f9"
          />
        </svg>
      </div>
    </section>
  )
}
