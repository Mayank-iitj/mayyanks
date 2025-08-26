"use client";

import * as React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Dr. Anya Sharma",
    title: "Professor of AI, Tech University",
    quote: "Mayank was one of the brightest students in my Advanced Machine Learning course. His final project on neural network optimization was not only technically impressive but also demonstrated a deep understanding of complex AI concepts. His problem-solving abilities are top-tier.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a6662235-904c-49f9-9077-9ec36bf710c8/generated_images/professional-faceless-human-avatar-for-t-086960d5-20250826073850.jpg?",
  },
  {
    name: "Ben Carter",
    title: "Senior Data Scientist, InnovateAI",
    quote: "I had the pleasure of collaborating with Mayank on a challenging predictive analytics project. His proficiency in Python and frameworks like TensorFlow was instrumental in our success. He consistently delivers clean, efficient code and is a creative problem-solver.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a6662235-904c-49f9-9077-9ec36bf710c8/generated_images/professional-faceless-human-avatar-for-t-ed5c4a26-20250826073859.jpg?",
  },
  {
    name: "Chloe Davis",
    title: "Product Lead, DataDriven Solutions",
    quote: "Mayank delivered an exceptional ML model for our demand forecasting needs, exceeding all our initial KPIs. His ability to translate complex business requirements into a functional, highly accurate AI solution was remarkable. Project delivery was seamless and professional.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a6662235-904c-49f9-9077-9ec36bf710c8/generated_images/professional-faceless-human-avatar-for-t-50721880-20250826073910.jpg?",
  },
  {
    name: "Michael Lee",
    title: "ML Engineer, QuantumLeap",
    quote: "Working alongside Mayank is a fantastic experience. He has a unique talent for architecting scalable AI systems and is always pushing the boundaries of what's possible. His grasp of MLOps best practices ensures our projects are robust and maintainable.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/a6662235-904c-49f9-9077-9ec36bf710c8/generated_images/professional-faceless-human-avatar-for-t-0eaf6fcf-20250826073920.jpg?",
  },
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className="bg-black py-[120px] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className={`font-display text-center text-4xl md:text-5xl font-bold uppercase tracking-[0.05em] text-white mb-20 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          CUSTOMER<span className="text-primary animate-pulse">*</span>THOUGHTS
        </h2>

        <div className={`transition-all duration-1200 delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full group"
          >
            <CarouselContent className="-ml-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className={`pl-8 md:basis-1/2 lg:basis-1/3 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex h-full">
                    <div className="group/card flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(128,242,95,0.1)] hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer backdrop-blur-sm">
                      <div className="flex items-center gap-4">
                        <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover/card:scale-110">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="h-20 w-20 rounded-full object-cover transition-all duration-300 group-hover/card:brightness-110"
                          />
                          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover/card:border-primary/30 transition-colors duration-300"></div>
                        </div>
                        <div className="font-body">
                          <p className="text-lg font-bold text-white transition-colors duration-300 group-hover/card:text-primary">{testimonial.name}</p>
                          <p className="text-sm text-muted transition-colors duration-300 group-hover/card:text-muted/80">{testimonial.title}</p>
                        </div>
                      </div>
                      <p className="font-body text-lg text-muted leading-[1.6] transition-colors duration-300 group-hover/card:text-white/90">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100 pointer-events-none"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="mt-16 flex justify-center gap-4">
              <CarouselPrevious className="relative h-16 w-16 rounded-full border border-border bg-transparent text-muted transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-[0_0_20px_rgba(128,242,95,0.3)] focus:outline-none group">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/svgs/6tTbkXggWgQCAJ4DO2QEdXXmgM-1.svg?" 
                  alt="Previous" 
                  width={24} 
                  height={24} 
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" 
                />
              </CarouselPrevious>
              <CarouselNext className="relative h-16 w-16 rounded-full border border-border bg-transparent text-muted transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-[0_0_20px_rgba(128,242,95,0.3)] focus:outline-none group">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/svgs/11KSGbIZoRSg4pjdnUoif6MKHI-2.svg?" 
                  alt="Next" 
                  width={24} 
                  height={24} 
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" 
                />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;