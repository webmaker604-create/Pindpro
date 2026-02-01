"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="kontakt" className="bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="rounded-2xl bg-gradient-to-br from-[#12324a] to-[#0a1f2e] p-8 text-white md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Võta ühendust
            </h2>
            <p className="mb-8 text-white/70">
              Küsi tasuta hinnapakkumist — vastame kiiresti!
            </p>
            
            <div className="mb-8 grid gap-6 sm:grid-cols-3">
              <a
                href="tel:+37255555555"
                className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 transition-colors hover:bg-white/20"
              >
                <Phone className="h-6 w-6 text-[#60a5fa]" />
                <span className="text-sm font-medium">+372 5555 5555</span>
              </a>
              <a
                href="mailto:info@pindpro.ee"
                className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4 transition-colors hover:bg-white/20"
              >
                <Mail className="h-6 w-6 text-[#60a5fa]" />
                <span className="text-sm font-medium">info@pindpro.ee</span>
              </a>
              <div className="flex flex-col items-center gap-2 rounded-xl bg-white/10 p-4">
                <MapPin className="h-6 w-6 text-[#60a5fa]" />
                <span className="text-sm font-medium">Tallinn, Eesti</span>
              </div>
            </div>

            <a
              href="mailto:info@pindpro.ee"
              className="inline-block rounded-full bg-[#2563eb] px-8 py-3 font-semibold text-white transition-all hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/30"
            >
              Küsi pakkumist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
