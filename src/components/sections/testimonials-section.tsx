"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: {
    color: string;
    initials: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Solutions",
    content: "The attention to detail and innovative approach exceeded our expectations. The project was delivered on time with exceptional quality that transformed our user experience.",
    rating: 5,
    avatar: {
      color: "bg-emerald-500",
      initials: "SC"
    }
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CTO",
    company: "Digital Dynamics",
    content: "Outstanding technical expertise and creative problem-solving. The solution not only met our requirements but also provided insights we hadn't considered.",
    rating: 5,
    avatar: {
      color: "bg-emerald-600",
      initials: "MR"
    }
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Design Director",
    company: "Creative Studios Inc",
    content: "Exceptional collaboration and communication throughout the project. The final deliverable was polished, professional, and exactly what we envisioned.",
    rating: 5,
    avatar: {
      color: "bg-emerald-400",
      initials: "EW"
    }
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "StartUp Innovate",
    content: "Incredible value and expertise. The strategic insights and implementation quality helped us launch our product successfully in a competitive market.",
    rating: 5,
    avatar: {
      color: "bg-emerald-700",
      initials: "DK"
    }
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "Global Enterprises",
    content: "Professional, reliable, and results-driven. The project management was seamless, and the outcome significantly improved our operational efficiency.",
    rating: 5,
    avatar: {
      color: "bg-emerald-500",
      initials: "LT"
    }
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-emerald-500 text-emerald-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-white dark:bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-emerald-100 dark:border-emerald-900/20 relative overflow-hidden">
                  {/* Background Quote Icon */}
                  <div className="absolute top-6 right-8 opacity-10">
                    <Quote className="w-24 h-24 text-emerald-500" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div
                        className={`${testimonials[currentIndex].avatar.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg`}
                      >
                        {testimonials[currentIndex].avatar.initials}
                      </div>

                      {/* Client Details */}
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-muted-foreground">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-card shadow-lg rounded-full p-3 text-emerald-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 border border-emerald-100 dark:border-emerald-900/20 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-card shadow-lg rounded-full p-3 text-emerald-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 border border-emerald-100 dark:border-emerald-900/20 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-emerald-500 scale-125"
                  : "bg-emerald-200 hover:bg-emerald-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            {isAutoPlaying ? "Auto-playing testimonials" : "Hover to pause auto-play"}
          </p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              50+
            </div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              98%
            </div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              100+
            </div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};