"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-gradient-to-r from-nav to-nav-dark py-4">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="PindPro logo"
            width={180}
            height={45}
            priority
          />
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="#teenused"
            className="hidden text-sm font-semibold text-[#e6f0fb] hover:text-white sm:block"
          >
            Teenused
          </Link>
          <Link
            href="#hinnakiri"
            className="hidden text-sm font-semibold text-[#e6f0fb] hover:text-white sm:block"
          >
            Hinnakiri
          </Link>
          <Link
            href="#kontakt"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Küsi pakkumist
          </Link>
        </nav>
      </div>
    </header>
  )
}
