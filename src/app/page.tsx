import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";

/**
 * Main landing page component for Code Factory
 * Assembles all sections of the landing page in the correct order
 */
export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Navigation bar with logo and menu */}
      <Navbar />

      {/* Hero section with animated scroll effect */}
      <HeroScrollDemo />

      {/* Services offered by Code Factory */}
      <ServicesSection />

      {/* Portfolio showcasing previous work */}
      <PortfolioSection />

      {/* Team members section */}
      <TeamSection />

      {/* Contact form section */}
      <ContactSection />

      {/* Footer with additional links and information */}
      <Footer />
    </div>
  );
}
