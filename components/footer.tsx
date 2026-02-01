import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0a1f2e] py-10">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <Image
            src="/images/pindpro-logo.png"
            alt="PindPro"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
          
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#teenused" className="text-sm text-white/70 hover:text-white">
              Teenused
            </Link>
            <Link href="#hinnakiri" className="text-sm text-white/70 hover:text-white">
              Hinnakiri
            </Link>
            <Link href="#kontakt" className="text-sm text-white/70 hover:text-white">
              Kontakt
            </Link>
          </nav>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} PindPro — Pinnatööde lahendused. Kõik õigused kaitstud.
          </p>
        </div>
      </div>
    </footer>
  )
}
