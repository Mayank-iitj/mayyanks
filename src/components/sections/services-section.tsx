"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, 
  BarChart3, 
  Globe, 
  Smartphone, 
  Palette, 
  Users 
} from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Brain,
    title: "AI/ML Development",
    description: "Cutting-edge artificial intelligence and machine learning solutions to automate processes and drive intelligent decision-making for your business."
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence solutions tailored to your needs."
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest technologies, ensuring optimal performance and exceptional user experiences."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless functionality across iOS and Android devices."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetic excellence with intuitive functionality to create memorable digital experiences."
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Strategic technology consulting to help you navigate digital transformation and optimize your business processes for maximum efficiency."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8
    }
  }
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-chart-1 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden"
              >
                <div className="relative bg-card border border-border rounded-xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card via-card to-accent/10">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-chart-1/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-1 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      {/* Icon background glow */}
                      <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-primary to-chart-1 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed group-hover:text-card-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Border animation */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary to-chart-1 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[2px] rounded-[10px] bg-card"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};