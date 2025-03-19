import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroScrollDemo />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
