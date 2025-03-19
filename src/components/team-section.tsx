"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ScrollReveal from "./scroll-reveal";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "10+ years of experience in mobile app development and entrepreneurship.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  },
  {
    name: "Sarah Chen",
    role: "Lead iOS Developer",
    bio: "Expert in Swift and iOS architecture with a background in UX design.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Android Developer",
    bio: "Kotlin specialist with experience building apps for Fortune 500 companies.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    name: "Priya Patel",
    role: "UI/UX Designer",
    bio: "Award-winning designer focused on creating intuitive mobile experiences.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
  },
];

export function TeamSection() {
  return (
    <section
      className="py-20 bg-muted min-h-screen flex items-center"
      id="team"
    >
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind Code Factory's success
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-blue-100 dark:ring-blue-900 transition-all duration-300 hover:ring-blue-300 dark:hover:ring-blue-700">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
