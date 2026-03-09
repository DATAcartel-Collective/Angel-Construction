import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { LeadCaptureSection } from "@/components/landing/lead-capture-section"
import { StatsSection } from "@/components/landing/stats-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="relative h-screen overflow-y-auto snap-mandatory scroll-smooth">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Scroll Snap Sections */}
      <HeroSection />
      <ServicesSection />
      <LeadCaptureSection />
      <StatsSection />
      <Footer />
    </main>
  )
}
