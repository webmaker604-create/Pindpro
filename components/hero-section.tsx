"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Icon - Square with house and checkmark */}
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 md:h-14 md:w-14"
      >
        {/* Rounded square background */}
        <rect x="2" y="2" width="56" height="56" rx="12" fill="url(#iconGradient)" stroke="#5cb8ff" strokeWidth="2" />
        {/* House roof shape */}
        <path d="M18 32L30 20L42 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* House body hint */}
        <path d="M22 30V40H38V30" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Windows */}
        <rect x="26" y="33" width="8" height="7" rx="1" fill="white" fillOpacity="0.9" />
        {/* Checkmark */}
        <path d="M15 48L22 55L45 32" stroke="#5cb8ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="iconGradient" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b9eff" />
            <stop offset="1" stopColor="#1e7fd9" />
          </linearGradient>
        </defs>
      </svg>
      {/* Text part */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight">
          <span className="text-2xl font-bold text-white/80 md:text-3xl">PIND</span>
          <span className="text-2xl font-bold text-[#3b9eff] md:text-3xl">PRO</span>
        </div>
        <span className="text-[9px] font-semibold tracking-[0.2em] text-white/60 md:text-[10px]">
          PINNATOODE LAHENDUSED
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
