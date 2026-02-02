import Link from "next/link"

export const metadata = {
  title: "Privaatsuspoliitika ja Tingimused | PindPro",
  description: "PindPro privaatsuspoliitika ja kasutustingimused",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-[#0f2a3d] py-6">
        <div className="mx-auto max-w-4xl px-4">
          <Link href="/" className="text-xl font-bold text-white">
            <span className="text-white/90">PIND</span>
            <span className="text-[#3b9eff]">PRO</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-12">
        <Link href="/" className="mb-8 inline-flex items-center text-sm text-[#2563eb] hover:underline">
          ← Tagasi avalehele
        </Link>

        {/* Privacy Policy */}
        <section className="mb-16">
          <h1 className="mb-6 text-3xl font-bold text-[#0f2a3d]">Privaatsuspoliitika</h1>
          <p className="mb-6 text-sm text-gray-500">Viimati uuendatud: 2026</p>
          
          <div className="space-y-8 text-gray-700">
            <p>
              PindPro OÜ (edaspidi "PindPro", "meie") peab oluliseks oma klientide ja veebilehe külastajate privaatsust. 
              Käesolev privaatsuspoliitika selgitab, milliseid isikuandmeid me kogume, kuidas neid kasutame ja millised on sinu õigused.
            </p>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">1. Milliseid andmeid me kogume</h2>
              <p className="mb-2">Kogume ainult andmeid, mis on vajalikud teenuse osutamiseks ja suhtlemiseks:</p>
              <ul className="ml-4 list-disc space-y-1 text-gray-600">
                <li>Nimi</li>
                <li>Telefoninumber</li>
                <li>E-posti aadress</li>
                <li>Objekti asukoht ja pinna suurus (m²)</li>
                <li>Töö teostamise soovitud ajakava</li>
                <li>Muu info, mille kasutaja vabatahtlikult päringuvormis edastab</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">2. Kuidas me andmeid kogume</h2>
              <ul className="ml-4 list-disc space-y-1 text-gray-600">
                <li>Hinnapäringu või kontaktivormi täitmisel</li>
                <li>E-posti või telefoni teel meiega ühendust võttes</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">3. Milleks me andmeid kasutame</h2>
              <p className="mb-2">Isikuandmeid kasutatakse:</p>
              <ul className="ml-4 list-disc space-y-1 text-gray-600">
                <li>Hinnapakkumise koostamiseks</li>
                <li>Kliendiga ühenduse võtmiseks</li>
                <li>Tööde planeerimiseks ja teostamiseks</li>
                <li>Kliendisuhtluse ja teenuse kvaliteedi parandamiseks</li>
              </ul>
              <p className="mt-3">
                Me ei kasuta isikuandmeid turunduseks ilma sinu nõusolekuta ega edasta neid kolmandatele osapooltele, 
                välja arvatud seadusest tulenevatel juhtudel.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">4. Andmete säilitamine</h2>
              <p>
                Säilitame isikuandmeid ainult nii kaua, kui see on vajalik eesmärkide täitmiseks või seadusest tulenevate kohustuste täitmiseks.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">5. Andmete turvalisus</h2>
              <p>
                Rakendame mõistlikke tehnilisi ja organisatsioonilisi meetmeid, et kaitsta isikuandmeid volitamata juurdepääsu, muutmise või avalikustamise eest.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">6. Sinu õigused</h2>
              <p className="mb-2">Sul on õigus:</p>
              <ul className="ml-4 list-disc space-y-1 text-gray-600">
                <li>Küsida ligipääsu oma isikuandmetele</li>
                <li>Nõuda andmete parandamist või kustutamist</li>
                <li>Piirata andmete töötlemist</li>
                <li>Esitada vastuväiteid</li>
              </ul>
              <p className="mt-3">
                Vastavate soovidega palume ühendust võtta aadressil <a href="mailto:info@pindpro.ee" className="text-[#2563eb] hover:underline">info@pindpro.ee</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section>
          <h1 className="mb-6 text-3xl font-bold text-[#0f2a3d]">Kasutustingimused</h1>
          <p className="mb-6 text-gray-600">
            Käesolevad tingimused reguleerivad PindPro veebilehe ja teenuste kasutamist.
          </p>

          <div className="space-y-8 text-gray-700">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">1. Üldtingimused</h2>
              <p>
                PindPro veebilehel esitatud hinnad ja kirjeldused on informatiivsed. 
                Täpne hind ja töö sisu selgitatakse välja pärast objekti ülevaatust ja kokkulepet kliendiga.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">2. Hinnad ja pakkumised</h2>
              <ul className="ml-4 list-disc space-y-2 text-gray-600">
                <li>Kõik hinnad veebilehel on orienteeruvad ja esitatud ilma käibemaksuta, kui ei ole märgitud teisiti.</li>
                <li>Lõplik hind sõltub aluspinna seisukorrast, valitud süsteemist, töötingimustest ja pinna suurusest.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">3. Töötingimused</h2>
              <p className="mb-2">Enne tööde alustamist hindab PindPro:</p>
              <ul className="ml-4 list-disc space-y-1 text-gray-600">
                <li>Aluspinna seisukorda ja niiskust</li>
                <li>Ümbritsevat temperatuuri ja õhuniiskust</li>
                <li>Muid tehnilisi tingimusi vastavalt kasutatavale materjalile</li>
              </ul>
              <p className="mt-3">
                Kui tingimused ei vasta nõuetele, on PindProl õigus tööde alustamine edasi lükata või pakkuda alternatiivset lahendust.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">4. Garantii</h2>
              <p className="mb-3">Garantii kehtib vastavalt kokkulepitud põrandasüsteemile ja töötingimustele.</p>
              <p className="mb-2">Garantii ei kata kahjustusi, mis on tekkinud:</p>
              <ul className="ml-4 list-disc space-y-1 text-gray-600">
                <li>Ebaõige kasutuse või hoolduse tõttu</li>
                <li>Mehaaniliste või keemiliste kahjustuste tõttu, mis ei vasta kokkulepitud koormusele</li>
                <li>Kolmandate isikute sekkumise tagajärjel</li>
              </ul>
              <p className="mt-3">
                Garantii täpne ulatus ja kestus fikseeritakse hinnapakkumises või lepingus.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">5. Vastutus</h2>
              <p>
                PindPro vastutab tööde kvaliteedi eest kokkulepitud ulatuses. 
                Kaudsete kahjude eest (nt tootmisseisak) vastutust ei kanta, kui ei ole eraldi kokku lepitud.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-semibold text-[#0f2a3d]">6. Vaidluste lahendamine</h2>
              <p>
                Kõik vaidlused püütakse lahendada läbirääkimiste teel. 
                Kokkuleppe mittesaavutamisel lahendatakse vaidlus vastavalt Eesti Vabariigi seadustele.
              </p>
            </div>

            <div className="rounded-lg bg-slate-100 p-6">
              <p className="text-gray-600">
                Kui sul on küsimusi privaatsuspoliitika või tingimuste kohta, võta meiega ühendust: {" "}
                <a href="mailto:info@pindpro.ee" className="font-medium text-[#2563eb] hover:underline">info@pindpro.ee</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-gray-200 bg-white py-6">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PindPro OÜ. Kõik õigused kaitstud.
        </div>
      </footer>
    </div>
  )
}
