"use client";

import { Button } from "./ui/button";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector(".hero-parallax");
      if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-parallax min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-bottom">
          Transforming Ideas Into Powerful Mobile Apps
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-slide-bottom animate-delay-200">
          Code Factory delivers cutting-edge mobile solutions that drive
          business growth and user engagement.
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto animate-scale animate-delay-400"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
