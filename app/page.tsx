import { HeroSection } from "../components/hero-section"
import { Services } from "../components/services"
import { Gallery } from "../components/gallery"
import { Pricing } from "../components/pricing"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <Services />
        <Gallery />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
