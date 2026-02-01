"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Shield with tools */}
      <div className="relative h-12 w-10 md:h-14 md:w-12">
        <svg viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          {/* Shield background */}
          <path
            d="M24 2L4 10V26C4 40 24 54 24 54C24 54 44 40 44 26V10L24 2Z"
            fill="#1e4a6e"
            stroke="#5cb8ff"
            strokeWidth="2"
          />
          {/* Roller tool */}
          <rect x="14" y="18" width="12" height="6" rx="1" fill="white" />
          <rect x="18" y="24" width="4" height="12" fill="white" />
          <rect x="16" y="34" width="8" height="3" rx="1" fill="white" />
          {/* Brush strokes */}
          <path d="M30 20L36 14" stroke="#5cb8ff" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 24L38 18" stroke="#5cb8ff" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 28L36 22" stroke="#5cb8ff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      {/* Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="text-xl font-bold tracking-tight text-white md:text-2xl">PIND</span>
          <span className="text-xl font-bold tracking-tight text-[#5cb8ff] md:text-2xl">PRO</span>
        </div>
        <span className="text-[8px] font-medium tracking-[0.15em] text-white/70 md:text-[9px]">
          PINNATÖÖDE LAHENDUSED
        </span>
      </div>
    </div>
  )
}

export function HeroSection() {
  const checks = [
    "Korrektselt ette valmistahed",
    "Puhas teostus",
    "Kokkulepetest kinnipidamine",
  ]

  return (
    <div className="relative">
      {/* Full-width blue section */}
      <div className="relative bg-gradient-to-br from-[#12324a] via-[#0f2a3f] to-[#0a1f2e]">
        {/* Header Navigation with subtle border */}
        <header className="relative z-20 border-b border-white/10 bg-[#0d2235]/50">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8 md:py-5">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <nav className="flex items-center gap-4 md:gap-6">
              <Link
                href="#teenused"
                className="hidden text-sm font-medium text-white/90 transition-colors hover:text-white sm:block"
              >
                Teenused
              </Link>
              <Link
                href="#hinnakiri"
                className="hidden text-sm font-medium text-white/90 transition-colors hover:text-white sm:block"
              >
                Hinnakiri
              </Link>
              <Link
                href="#kontakt"
                className="rounded-full bg-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
              >
                Küsi pakkumist
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 px-5 pb-32 pt-10 md:px-8 md:pb-40 md:pt-14">
          <div className="mx-auto flex max-w-[1100px] flex-col gap-8 md:flex-row md:items-center md:gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-white">
              <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Pinnatööd, mis
                <br />
                kestavad
              </h1>
              <p className="mb-6 text-base text-slate-300 md:text-lg">
                Teostame kauakestvaid epopõrandaid ja pinnatöid
              </p>
              <ul className="mb-8 space-y-3">
                {checks.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#5cb8ff]" strokeWidth={2.5} />
                    <span className="text-sm font-medium md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Image */}
            <div className="flex flex-1 justify-center md:justify-end">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
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
        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28">
          <svg
            viewBox="0 0 1440 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 100V50C240 90 480 100 720 85C960 70 1200 40 1440 50V100H0Z"
              fill="#f1f5f9"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
