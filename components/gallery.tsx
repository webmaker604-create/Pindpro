import Image from "next/image"
import Link from "next/link"

const galleryItems = [
  {
    image: "/images/garage-before.jpg",
    label: "Epopõrandad garaažidesse",
    color: "bg-amber-500",
  },
  {
    image: "/images/industrial-floor.jpg",
    label: "Tööstuspõrandad",
    color: "bg-amber-500",
  },
  {
    image: "/images/commercial-floor.jpg",
    label: "Pinnatööd äripindadele",
    color: "bg-amber-500",
  },
]

export function Gallery() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-secondary md:text-3xl">
            Enne / Pärast
          </h2>
          <Link
            href="#kontakt"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Miks valida meid?
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.label}
              className="overflow-hidden rounded-xl bg-card p-2 shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-2 px-1 pb-1">
                <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                <span className="text-sm font-medium text-foreground">
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
