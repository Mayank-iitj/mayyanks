"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, Star, Medal, Crown, Zap } from 'lucide-react';

interface Award {
  id: string;
  title: string;
  year: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  badge?: string;
}

const awards: Award[] = [
  {
    id: '1',
    title: 'AI Excellence Award',
    year: '2024',
    description: 'Recognition for outstanding innovation in artificial intelligence and machine learning solutions',
    icon: Crown,
    gradient: 'from-yellow-400 via-orange-500 to-red-500',
    glowColor: 'shadow-yellow-500/25',
    badge: 'LATEST'
  },
  {
    id: '2',
    title: 'Best Innovation in ML',
    year: '2023',
    description: 'Awarded for breakthrough developments in machine learning algorithms and applications',
    icon: Zap,
    gradient: 'from-blue-400 via-purple-500 to-indigo-600',
    glowColor: 'shadow-blue-500/25'
  },
  {
    id: '3',
    title: 'Top 10 AI Startups',
    year: '2023',
    description: 'Selected as one of the most promising AI startups driving industry transformation',
    icon: Trophy,
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    glowColor: 'shadow-emerald-500/25'
  },
  {
    id: '4',
    title: 'Industry Recognition Award',
    year: '2022',
    description: 'Recognized by industry leaders for exceptional contribution to AI advancement',
    icon: Medal,
    gradient: 'from-purple-400 via-pink-500 to-rose-500',
    glowColor: 'shadow-purple-500/25'
  },
  {
    id: '5',
    title: 'Client Choice Award',
    year: '2024',
    description: 'Voted by clients as the preferred partner for AI and machine learning solutions',
    icon: Star,
    gradient: 'from-amber-400 via-yellow-500 to-orange-500',
    glowColor: 'shadow-amber-500/25',
    badge: 'POPULAR'
  },
  {
    id: '6',
    title: 'Technical Excellence Certification',
    year: '2023',
    description: 'Certified for maintaining highest standards in technical implementation and delivery',
    icon: Award,
    gradient: 'from-indigo-400 via-blue-500 to-cyan-500',
    glowColor: 'shadow-indigo-500/25'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const iconVariants = {
  rest: { 
    scale: 1, 
    rotate: 0,
    y: 0
  },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: { 
    scale: 0.95,
    rotate: -5
  }
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowVariants = {
  rest: {
    boxShadow: "0 0 0 rgba(0,0,0,0)"
  },
  hover: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.4)",
      "0 0 20px rgba(59, 130, 246, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const AwardsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            animate={floatingVariants.animate}
            className="inline-block mb-4"
          >
            <Trophy className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-4">
            Awards & Recognition
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Celebrating our achievements and commitment to excellence in artificial intelligence and innovation
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            
            return (
              <motion.div
                key={award.id}
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
                initial="rest"
                className="group relative"
              >
                {/* Background glow effect */}
                <motion.div
                  variants={glowVariants}
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Card */}
                <div className={`relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 h-full transition-all duration-500 group-hover:border-primary/30 ${award.glowColor} group-hover:shadow-2xl`}>
                  
                  {/* Badge */}
                  {award.badge && (
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                    >
                      {award.badge}
                    </motion.div>
                  )}

                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <motion.div
                      variants={iconVariants}
                      className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${award.gradient} p-4 shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>
                    
                    {/* Floating particles */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                      className="absolute inset-0 w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 blur-sm"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <motion.h3 
                      className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {award.title}
                    </motion.h3>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold px-4 py-2 rounded-full text-sm border border-primary/20"
                    >
                      {award.year}
                    </motion.div>
                    
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {award.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.8, ease: "easeOut" }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${award.gradient} rounded-b-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "6+", label: "Major Awards", delay: 1 },
              { number: "4", label: "Years of Excellence", delay: 1.2 },
              { number: "100%", label: "Industry Recognition", delay: 1.4 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: stat.delay, type: "spring", stiffness: 100 }}
                className="bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: stat.delay + 0.3, duration: 1 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};