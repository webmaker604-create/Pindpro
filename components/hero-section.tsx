"use client"

import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export function HeroSection() {
  const checks = [
    "Korrektselt ette valmistahed",
    "Puhas teostus",
    "Kokkulepetest kinnipidamine",
  ]

  return (
    <div className="relative bg-slate-100">
      {/* Curved blue section container */}
      <div className="relative">
        {/* Top curved edge (outside the blue area) */}
        <div className="absolute -top-1 left-0 right-0 h-12 overflow-hidden md:h-16">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80V40C360 0 720 0 1080 20C1260 30 1380 50 1440 60V80H0Z"
              fill="#12324a"
            />
          </svg>
        </div>

        {/* Main blue section with rounded corners */}
        <div className="relative mx-4 overflow-hidden rounded-t-[2rem] bg-gradient-to-br from-[#12324a] via-[#0f2a3f] to-[#0a1f2e] pt-4 md:mx-8 md:rounded-t-[3rem] md:pt-6 lg:mx-12">
          {/* Header Navigation */}
          <header className="relative z-20 px-4 pb-4 md:px-8 lg:px-12">
            <div className="mx-auto flex max-w-[1100px] items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="PindPro logo"
                  width={180}
                  height={45}
                  priority
                />
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
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Küsi pakkumist
                </Link>
              </nav>
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-10 px-4 pb-28 pt-8 md:px-8 md:pb-36 md:pt-12 lg:px-12">
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
    </div>
  )
}
