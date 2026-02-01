"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, Menu, X } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const checks = [
    "Korrektselt ette valmistused",
    "Puhas teostus",
    "Kokkulepetest kinnipidamine",
  ]

  return (
    <div className="relative">
      {/* Full-width blue section */}
      <div className="relative bg-gradient-to-br from-[#12324a] via-[#0f2a3f] to-[#0a1f2e]">
        {/* Header Navigation */}
        <header className="relative z-20 border-b border-white/10">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8 md:py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/pindpro-logo.png"
                alt="PindPro - Pinnatoode Lahendused"
                width={180}
                height={50}
                className="h-12 w-auto md:h-14"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="#teenused"
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                Teenused
              </Link>
              <Link
                href="#hinnakiri"
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                Hinnakiri
              </Link>
              <Link
                href="#kontakt"
                className="rounded-full bg-[#2563eb] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/25"
              >
                KÜSI PAKKUMIST
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="border-t border-white/10 bg-[#0a1f2e] px-5 py-4 md:hidden">
              <nav className="flex flex-col gap-4">
                <Link
                  href="#teenused"
                  className="text-sm font-medium text-white/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Teenused
                </Link>
                <Link
                  href="#hinnakiri"
                  className="text-sm font-medium text-white/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hinnakiri
                </Link>
                <Link
                  href="#kontakt"
                  className="rounded-full bg-[#2563eb] px-6 py-2.5 text-center text-sm font-semibold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  KÜSI PAKKUMIST
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Content */}
        <div className="relative z-10 px-5 pb-28 pt-8 md:px-8 md:pb-36 md:pt-12 lg:pt-16">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
            {/* Left side - Text content */}
            <div className="flex-1 text-white">
              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                Pinnatööd, mis
                <br />
                kestavad
              </h1>
              <p className="mb-6 text-base text-white/70 md:text-lg">
                Teostame kauakestvaid epopõrandaid ja pinnatöid
              </p>
              <ul className="space-y-3">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#60a5fa]" strokeWidth={2.5} />
                    <span className="text-sm font-medium md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Image */}
            <div className="flex flex-1 justify-center md:justify-end">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
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

        {/* Bottom curved edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80V30C360 70 720 80 1080 50C1260 35 1380 25 1440 30V80H0Z"
              fill="#f1f5f9"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
