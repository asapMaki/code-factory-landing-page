"use client";

import { Smartphone, Code, Zap, Shield } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

const services = [
  {
    icon: Smartphone,
    title: "iOS & Android Development",
    description:
      "Native and cross-platform mobile applications built for performance and user experience.",
  },
  {
    icon: Code,
    title: "Custom App Solutions",
    description:
      "Tailored mobile applications designed to meet your specific business requirements.",
  },
  {
    icon: Zap,
    title: "App Performance Optimization",
    description:
      "Enhance your existing apps with improved speed, reliability, and user experience.",
  },
  {
    icon: Shield,
    title: "Secure Development",
    description:
      "Industry-leading security practices to protect your app and user data.",
  },
];

export function ServicesSection() {
  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center"
      id="services"
    >
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive mobile development solutions to bring your
              vision to life
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="mb-4 text-blue-600 dark:text-blue-400">
                  <service.icon size={48} className="animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
