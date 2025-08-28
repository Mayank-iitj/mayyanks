"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TrendingUp, CheckCircle, Zap, Award, Target, Users } from "lucide-react";

interface MetricCardProps {
  icon: React.ComponentType<any>;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  delay?: number;
}

const MetricCard = ({ icon: Icon, value, suffix = "", label, description, delay = 0 }: MetricCardProps) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Animate counter
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, controls, value]);

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
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.8,
        delay: delay + 0.2,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-800"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <motion.div
        variants={iconVariants}
        initial="hidden"
        animate={controls}
        className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors duration-300"
      >
        <Icon className="w-8 h-8" />
      </motion.div>

      {/* Counter */}
      <div className="relative mb-4">
        <motion.div 
          className="text-4xl font-bold text-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {count}{suffix}
        </motion.div>
      </div>

      {/* Label */}
      <motion.h3 
        className="relative text-xl font-semibold text-foreground mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: delay + 0.6 }}
      >
        {label}
      </motion.h3>

      {/* Description */}
      <motion.p 
        className="relative text-sm text-muted-foreground leading-relaxed"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: delay + 0.8 }}
      >
        {description}
      </motion.p>

      {/* Hover effect line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 w-0 group-hover:w-full transition-all duration-500 ease-out"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: delay + 1 }}
      />
    </motion.div>
  );
};

const metrics = [
  {
    icon: TrendingUp,
    value: 40,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered projects across web development, mobile apps, and enterprise solutions",
    delay: 0
  },
  {
    icon: CheckCircle,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently exceeding client expectations with high-quality deliverables and timely completion",
    delay: 0.1
  },
  {
    icon: Zap,
    value: 50,
    suffix: "%",
    label: "Performance Boost",
    description: "Average improvement in application performance through optimization and best practices",
    delay: 0.2
  },
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "Deep expertise in modern technologies including React, Next.js, Node.js, and cloud platforms",
    delay: 0.3
  },
  {
    icon: Target,
    value: 99,
    suffix: "%",
    label: "Code Accuracy",
    description: "Maintaining exceptional code quality through rigorous testing and code review processes",
    delay: 0.4
  },
  {
    icon: Users,
    value: 25,
    suffix: "+",
    label: "Happy Clients",
    description: "Building lasting relationships with clients ranging from startups to enterprise companies",
    delay: 0.5
  }
];

export const MetricsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Delivering{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Exceptional Results
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Proven track record of excellence in software development, with a focus on innovation, 
            quality, and client satisfaction across diverse industries and technologies.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              description={metric.description}
              delay={metric.delay}
            />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};