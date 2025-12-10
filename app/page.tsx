import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Benefits from '@/components/sections/Benefits'
import KeySellingPoints from '@/components/sections/KeySellingPoints'
import CareerPathways from '@/components/sections/CareerPathways'
import ExperienceShowcase from '@/components/sections/ExperienceShowcase'
import Testimonials from '@/components/sections/Testimonials'
import Accommodation from '@/components/sections/Accommodation'
import Stats from '@/components/sections/Stats'
import Video from '@/components/sections/Video'
import SpecialOfferBanner from '@/components/sections/SpecialOfferBanner'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/sections/Footer'
import CookieConsent from '@/components/CookieConsent'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Benefits />
      <KeySellingPoints />
      <CareerPathways />
      <ExperienceShowcase />
      <Testimonials />
      <Accommodation />
      <Stats />
      <Video />
      <FinalCTA />
      <Footer />
      <SpecialOfferBanner />
      <CookieConsent />
    </main>
  )
}

