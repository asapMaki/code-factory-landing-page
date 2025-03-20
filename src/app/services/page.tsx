import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  CodeIcon,
  SmartphoneIcon,
  ServerIcon,
  PencilRulerIcon,
  GlobeIcon,
  ShieldIcon,
} from "lucide-react";
import { BentoDemo } from "@/components/bento-demo";

/**
 * Services Page Component
 * Displays all services offered by Code Factory in a visually appealing layout
 * using the BentoGrid and BentoCard components for a modern UI approach
 */
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation bar */}
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        {/* Page header section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Code Factory offers comprehensive mobile app development services to
            bring your ideas to life.
          </p>
        </div>

        {/* Core Development Services section */}
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Core Development Services
        </h2>
        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {/* iOS Development card */}
          <BentoCard
            name="iOS Development"
            className="col-span-1 md:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950/30 dark:to-blue-900/20 opacity-50"></div>
            }
            Icon={SmartphoneIcon}
            description="Native iOS app development using Swift and SwiftUI for seamless Apple ecosystem integration."
            href="/services/ios"
            cta="Learn more"
          />

          {/* Android Development card */}
          <BentoCard
            name="Android Development"
            className="col-span-1 md:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-950/30 dark:to-green-900/20 opacity-50"></div>
            }
            Icon={SmartphoneIcon}
            description="Custom Android applications built with Kotlin and Jetpack Compose for the diverse Android market."
            href="/services/android"
            cta="Learn more"
          />

          {/* Cross-Platform Apps card */}
          <BentoCard
            name="Cross-Platform Apps"
            className="col-span-1 md:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-950/30 dark:to-purple-900/20 opacity-50"></div>
            }
            Icon={CodeIcon}
            description="Efficient multi-platform development with React Native and Flutter for cost-effective solutions."
            href="/services/cross-platform"
            cta="Learn more"
          />

          {/* UI/UX Design card */}
          <BentoCard
            name="UI/UX Design"
            className="col-span-1 md:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-950/30 dark:to-pink-900/20 opacity-50"></div>
            }
            Icon={PencilRulerIcon}
            description="User-centered design processes that create intuitive, engaging, and accessible mobile experiences."
            href="/services/design"
            cta="Learn more"
          />

          {/* Backend Development card */}
          <BentoCard
            name="Backend Development"
            className="col-span-1 md:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-950/30 dark:to-amber-900/20 opacity-50"></div>
            }
            Icon={ServerIcon}
            description="Robust API development and server infrastructure to power your mobile applications."
            href="/services/backend"
            cta="Learn more"
          />

          {/* App Security card */}
          <BentoCard
            name="App Security"
            className="col-span-1 md:col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 dark:from-red-950/30 dark:to-red-900/20 opacity-50"></div>
            }
            Icon={ShieldIcon}
            description="Comprehensive security audits and implementation of best practices to protect user data."
            href="/services/security"
            cta="Learn more"
          />
        </BentoGrid>

        {/* Additional Services section */}
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Additional Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Beyond core development, we offer specialized services to enhance,
          maintain, and optimize your mobile applications.
        </p>

        {/* BentoDemo component displays additional services in a different layout */}
        <BentoDemo />
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
