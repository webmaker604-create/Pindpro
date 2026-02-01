import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Services } from "../components/services"
import { Gallery } from "../components/gallery"
import { Pricing } from "../components/pricing"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
