"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Info */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-[#0f2a3d] md:text-4xl">
              Küsi tasuta pakkumist
            </h2>
            <p className="mb-8 text-gray-600">
              Täida vorm ja võtame sinuga ühendust 24 tunni jooksul. 
              Pakume tasuta kohapealset ülevaatust ja konsultatsiooni.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:+3725551234"
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-slate-50 p-4 transition-colors hover:border-[#3b9eff]/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b9eff]/10 text-[#2563eb]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Helista meile</div>
                  <div className="font-semibold text-[#0f2a3d]">+372 555 1234</div>
                </div>
              </a>

              <a
                href="mailto:info@pindpro.ee"
                className="flex items-center gap-4 rounded-xl border border-gray-200 bg-slate-50 p-4 transition-colors hover:border-[#3b9eff]/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b9eff]/10 text-[#2563eb]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Saada e-mail</div>
                  <div className="font-semibold text-[#0f2a3d]">info@pindpro.ee</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3b9eff]/10 text-[#2563eb]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Asukoht</div>
                  <div className="font-semibold text-[#0f2a3d]">Töötame üle Eesti</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#0f2a3d]">Päring saadetud!</h3>
                <p className="text-gray-600">Võtame teiega ühendust esimesel võimalusel.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#0f2a3d]">
                      Nimi *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#0f2a3d] outline-none transition-colors focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                      placeholder="Teie nimi"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#0f2a3d]">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#0f2a3d] outline-none transition-colors focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                      placeholder="+372 ..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#0f2a3d]">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#0f2a3d] outline-none transition-colors focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                    placeholder="teie@email.ee"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="area" className="mb-2 block text-sm font-medium text-[#0f2a3d]">
                      Pinna suurus (m²)
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#0f2a3d] outline-none transition-colors focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                      placeholder="nt. 100"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="mb-2 block text-sm font-medium text-[#0f2a3d]">
                      Asukoht
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#0f2a3d] outline-none transition-colors focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                    >
                      <option value="">Vali asukoht</option>
                      <option value="harjumaa">Harjumaa</option>
                      <option value="hiiumaa">Hiiumaa</option>
                      <option value="ida-virumaa">Ida-Virumaa</option>
                      <option value="jogevamaa">Jõgevamaa</option>
                      <option value="jarvamaa">Järvamaa</option>
                      <option value="laanemaa">Läänemaa</option>
                      <option value="laane-virumaa">Lääne-Virumaa</option>
                      <option value="polvamaa">Põlvamaa</option>
                      <option value="parnumaa">Pärnumaa</option>
                      <option value="raplamaa">Raplamaa</option>
                      <option value="saaremaa">Saaremaa</option>
                      <option value="tartumaa">Tartumaa</option>
                      <option value="valgamaa">Valgamaa</option>
                      <option value="viljandimaa">Viljandimaa</option>
                      <option value="vorumaa">Võrumaa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-[#0f2a3d]">
                    Teenus
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#0f2a3d] outline-none transition-colors focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                  >
                    <option value="">Vali teenus</option>
                    <option value="epoxy">Epoksiidpõrand</option>
                    <option value="industrial">Tööstuspõrand</option>
                    <option value="garage">Garaažipõrand</option>
                    <option value="concrete">Betoonpõrand (remont/kaitse/viimistlus)</option>
                    <option value="grinding">Betooni lihvimine</option>
                    <option value="acrylic">Akrüülpõrand (MMA)</option>
                    <option value="other">Muu</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-[#0f2a3d]">
                    Millal soovite tööd teostada?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#0f2a3d] outline-none transition-colors focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                  >
                    <option value="">Vali ajakava</option>
                    <option value="asap">Esimesel võimalusel</option>
                    <option value="1-2weeks">1-2 nädala jooksul</option>
                    <option value="month">Kuu aja jooksul</option>
                    <option value="later">Hiljem / pole kindel</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#0f2a3d]">
                    Kirjeldus
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#0f2a3d] outline-none transition-colors focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
                    placeholder="Kirjeldage oma projekti..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2563eb] py-4 font-semibold text-white transition-all hover:bg-[#1d4ed8]"
                >
                  <Send className="h-4 w-4" />
                  Saada päring
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
