import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a1f2e] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#3b9eff] to-[#1a7fd9]">
                <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6">
                  <path d="M12 22L20 14L28 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 20V28H25V20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 32L14 38L34 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-white/90">PIND</span>
                <span className="text-xl font-bold text-[#3b9eff]">PRO</span>
              </div>
            </div>
            <p className="max-w-sm text-sm text-white/60">
              Professionaalsed pinnatööde lahendused tööstushoonetele, garaažidele ja äripindadele. 
              Alates aluspinna ettevalmistusest kuni lõppviimistluseni.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Teenused</h4>
            <ul className="space-y-2">
              <li><Link href="#teenused" className="text-sm text-white/60 hover:text-white">Epoksiidpõrandad</Link></li>
              <li><Link href="#teenused" className="text-sm text-white/60 hover:text-white">Tööstuspõrandad</Link></li>
              <li><Link href="#teenused" className="text-sm text-white/60 hover:text-white">Garaažipõrandad</Link></li>
              <li><Link href="#teenused" className="text-sm text-white/60 hover:text-white">Betooni lihvimine</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+37254567790" className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                  <Phone className="h-4 w-4" />
                  +372 5456 7790
                </a>
              </li>
              <li>
                <a href="mailto:info@pindpro.ee" className="flex items-center gap-2 text-sm text-white/60 hover:text-white">
                  <Mail className="h-4 w-4" />
                  info@pindpro.ee
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="h-4 w-4" />
                  Töötame üle Eesti
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} PindPro OÜ. Kõik õigused kaitstud.
            </p>
            <div className="flex gap-6">
              <Link href="/privaatsus" className="text-sm text-white/50 hover:text-white">Privaatsuspoliitika</Link>
              <Link href="/privaatsus#tingimused" className="text-sm text-white/50 hover:text-white">Tingimused</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
