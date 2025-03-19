"use client";

import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import ScrollReveal from "./scroll-reveal";

const projects = [
  {
    title: "HealthTrack Pro",
    description:
      "A comprehensive health monitoring app with personalized insights and tracking capabilities.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["iOS", "Android", "Healthcare"],
  },
  {
    title: "FinFlow",
    description:
      "Personal finance management app with budgeting tools and investment tracking.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["iOS", "Fintech", "Analytics"],
  },
  {
    title: "DeliverEase",
    description:
      "On-demand delivery platform connecting local businesses with customers.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
    tags: ["Android", "Logistics", "Maps API"],
  },
  {
    title: "SocialConnect",
    description:
      "Community platform for connecting like-minded individuals through shared interests.",
    image:
      "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=800&q=80",
    tags: ["iOS", "Android", "Social"],
  },
];

export function PortfolioSection() {
  return (
    <section
      className="py-20 min-h-screen flex items-center bg-gradient-to-b from-background to-muted"
      id="portfolio"
    >
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful mobile applications
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                <div className="w-full overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
