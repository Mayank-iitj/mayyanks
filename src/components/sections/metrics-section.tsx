"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { TrendingUp, Target, Clock, Database, Wrench, Heart, CheckCircle, Users } from 'lucide-react';

interface Metric {
  id: string;
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const metrics: Metric[] = [
  {
    id: 'projects',
    icon: TrendingUp,
    value: 25,
    suffix: '+',
    label: 'AI/ML Projects',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'accuracy',
    icon: Target,
    value: 95,
    suffix: '%',
    label: 'Model Accuracy',
    color: 'from-green-400 to-green-600'
  },
  {
    id: 'experience',
    icon: Clock,
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'datapoints',
    icon: Database,
    value: 500,
    suffix: 'K+',
    label: 'Data Points',
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'technologies',
    icon: Wrench,
    value: 12,
    suffix: '+',
    label: 'Technologies',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 'satisfaction',
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    color: 'from-pink-400 to-pink-600'
  }
];

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  duration?: number;
  delay?: number;
}

const AnimatedCounter = ({ value, suffix, duration = 2, delay = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now() + delay * 1000;
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        if (now < startTime) {
          requestAnimationFrame(updateCount);
          return;
        }

        const progress = Math.min((now - startTime) / (endTime - startTime), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * value);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, value, duration, delay, hasAnimated]);

  return (
    <span ref={ref} className="font-bold">
      {count}{suffix}
    </span>
  );
};

interface MetricCardProps {
  metric: Metric;
  index: number;
}

const MetricCard = ({ metric, index }: MetricCardProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

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
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  const Icon = metric.icon;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">
        {/* Gradient glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
        
        {/* Icon with gradient background */}
        <div className={`relative w-12 h-12 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Counter */}
        <div className="relative">
          <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
            <AnimatedCounter 
              value={metric.value} 
              suffix={metric.suffix}
              delay={index * 0.1}
            />
          </div>
          
          {/* Label */}
          <p className="text-muted-foreground font-medium">
            {metric.label}
          </p>
        </div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const MetricsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <CheckCircle className="w-4 h-4" />
            Proven Results
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-4">
            Success by the Numbers
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional AI solutions with measurable impact and client success
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.id} metric={metric} index={index} />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.6, delay: 0.8, ease: "easeOut" }
            }
          }}
          className="flex items-center justify-center mt-16"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-sm">Trusted by leading organizations worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};