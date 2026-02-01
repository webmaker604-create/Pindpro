import Image from "next/image"
import Link from "next/link"

const galleryItems = [
  {
    image: "/images/garage-before.jpg",
    label: "Epopõrandad garaažidesse",
  },
  {
    image: "/images/industrial-floor.jpg",
    label: "Tööstuspõrandad",
  },
  {
    image: "/images/commercial-floor.jpg",
    label: "Pinnatööd äripindadele",
  },
]

export function Gallery() {
  return (
    <section className="bg-slate-100 py-10 md:py-14">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-[#12324a] md:text-3xl">
            Enne / Pärast
          </h2>
          <Link
            href="#kontakt"
            className="rounded-full bg-[#2563eb] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/25"
          >
            Miks valida meid?
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.label}
              className="group overflow-hidden rounded-xl bg-white p-3 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-2.5 px-1 pb-1">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span className="text-sm font-medium text-[#12324a]">
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
