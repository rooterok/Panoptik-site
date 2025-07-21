import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AdvantagesSection from "@/components/advantages-section"
import PopularSolutions from "@/components/popular-solutions"
import HowWeWork from "@/components/how-we-work"
import QuickCalculator from "@/components/quick-calculator"
import TestimonialsSection from "@/components/testimonials-section"
import PartnersSection from "@/components/partners-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />
        <PopularSolutions />
        <HowWeWork />
        <QuickCalculator />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
