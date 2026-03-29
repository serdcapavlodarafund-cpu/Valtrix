import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { GlobalCoverage } from "@/components/global-coverage"
import { HowItWorks } from "@/components/how-it-works"
import { AmlCompliance } from "@/components/aml-compliance"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GlobalCoverage />
      <HowItWorks />
      <AmlCompliance />
      <ContactSection />
      <Footer />
    </main>
  )
}
