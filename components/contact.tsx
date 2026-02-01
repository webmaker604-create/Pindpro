import Link from "next/link"

export function Contact() {
  return (
    <section id="kontakt" className="py-10 md:py-14">
      <div className="mx-auto max-w-[1100px] px-5 text-center">
        <h2 className="mb-3 text-2xl font-bold text-secondary md:text-3xl">
          Võta ühendust
        </h2>
        <p className="mb-5 text-muted-foreground">
          Saadame kiire pakkumise — kirjuta või helista
        </p>
        <Link
          href="mailto:info@pindpro.ee"
          className="inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-primary"
        >
          info@pindpro.ee
        </Link>
      </div>
    </section>
  )
}
