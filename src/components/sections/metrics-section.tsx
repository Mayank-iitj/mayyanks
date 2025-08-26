"use client";

import { useEffect, useRef, useState } from 'react';

const metrics = [
  { number: 25, suffix: '+', label: 'AI/ML Projects Completed', description: 'Innovative solutions delivered' },
  { number: 95, suffix: '%', label: 'Model Accuracy Achieved', description: 'Consistently high performance' },
  { number: 3, suffix: '+', label: 'Years of Experience', description: 'In AI and machine learning' },
  { number: 500, suffix: 'K+', label: 'Data Points Processed', description: 'Across various domains' },
  { number: 12, suffix: '+', label: 'Technologies Mastered', description: 'Python, TensorFlow, PyTorch, etc.' },
  { number: 100, suffix: '%', label: 'Client Satisfaction', description: 'Delivering beyond expectations' },
];

function AnimatedCounter({ 
  target, 
  suffix, 
  duration = 2000,
  isVisible 
}: { 
  target: number; 
  suffix: string; 
  duration?: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOut);
      
      countRef.current = current;
      setCount(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, duration, isVisible]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function MetricsSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(metrics.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }, index * 150); // Staggered animation
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
            KEY*METRICS
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Measurable achievements and milestones in AI/ML development and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(128,242,95,0.15)] ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)'
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold font-display text-primary mb-2 leading-none group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter 
                    target={metric.number} 
                    suffix={metric.suffix}
                    isVisible={visibleItems[index]}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {metric.label}
                </h3>
                <p className="text-muted group-hover:text-white transition-colors duration-300">
                  {metric.description}
                </p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-all duration-500"></div>
              
              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-primary/20 rounded-full animate-pulse delay-300"></div>
      </div>
    </section>
  );
}