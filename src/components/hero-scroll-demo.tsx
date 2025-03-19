"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Button } from "./ui/button";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground">
              Transforming Ideas Into <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-600 dark:text-blue-400">
                Powerful Mobile Apps
              </span>
            </h1>
            <p className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto text-muted-foreground">
              Code Factory delivers cutting-edge mobile solutions that drive
              business growth and user engagement.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto animate-scale animate-delay-400"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </Button>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=80"
          alt="Code Factory Mobile App Development"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
