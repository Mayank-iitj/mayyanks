"use client";

import Image from "next/image";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/social flex items-center justify-center w-12 h-12 rounded-full border border-border text-muted bg-card hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(128,242,95,0.3)] hover:-translate-y-1"
      aria-label="Social media link"
    >
      <span className="transition-transform duration-300 group-hover/social:scale-110">
        {icon}
      </span>
    </a>
  );
};

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="team-2" 
      className="py-[120px] bg-background text-foreground overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-center text-4xl md:text-5xl font-bold font-display uppercase tracking-wider mb-20 text-white transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          MEET<span className="text-primary animate-pulse">*</span>THE
          <span className="text-primary animate-pulse">*</span>TEAM
        </h2>

        <div className={`flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 max-w-4xl mx-auto transition-all duration-1200 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-16'
        }`}>
          <div className={`flex-shrink-0 transition-all duration-1000 delay-500 ${
            isVisible 
              ? 'opacity-100 scale-100 rotate-0' 
              : 'opacity-0 scale-75 rotate-12'
          }`}>
            <div className="group/image relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a6662235-904c-49f9-9077-9ec36bf710c8/generated_images/professional-faceless-human-avatar-for-m-666e859a-20250826073930.jpg?"
                alt="Mayank Sharma"
                width={256}
                height={256}
                className="rounded-full object-cover w-52 h-52 md:w-64 md:h-64 shadow-2xl transition-all duration-500 group-hover/image:scale-110 group-hover/image:shadow-[0_0_40px_rgba(128,242,95,0.3)] group-hover/image:brightness-110"
              />
              {/* Animated border ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover/image:border-primary/50 transition-all duration-500 group-hover/image:scale-105"></div>
              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover/image:scale-110 group-hover/image:animate-pulse transition-transform duration-500"></div>
            </div>
          </div>

          <div className={`text-center md:text-left transition-all duration-1000 delay-700 ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-16'
          }`}>
            <h3 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-2 group hover:text-primary transition-colors duration-300">
              <span className="inline-block transition-transform duration-300 hover:scale-105">Mayank</span>{" "}
              <span className="inline-block transition-transform duration-300 hover:scale-105 hover:text-primary">Sharma</span>
            </h3>
            <p className="text-xl text-muted font-body mb-1 transition-colors duration-300 hover:text-primary/80">
              AI/ML Engineer & Student
            </p>
            <p className="text-lg text-muted font-body mb-8 transition-colors duration-300 hover:text-primary/60">IIT Jodhpur</p>

            <p className="text-primary font-medium text-lg mb-4 animate-pulse">
              Want to Connect?
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <SocialLink href="#" icon={<Instagram className="h-6 w-6" />} />
              <SocialLink href="#" icon={<Linkedin className="h-6 w-6" />} />
              <SocialLink href="#" icon={<Twitter className="h-6 w-6" />} />
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl transition-all duration-2000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
          <div className={`absolute top-1/3 right-1/4 w-24 h-24 bg-primary/3 rounded-full blur-2xl transition-all duration-2000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;