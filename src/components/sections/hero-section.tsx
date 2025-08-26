"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PlusIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 text-primary transition-transform duration-300 group-hover:rotate-90"
    >
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Tag = ({ text, index }: { text: string; index: number }) => (
  <div 
    className="group flex items-center gap-4 whitespace-nowrap px-6 transition-all duration-300 hover:scale-110 hover:text-primary"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <PlusIcon />
    <p className="font-body text-xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-primary">
      {text}
    </p>
  </div>
);

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tags = [
    'Machine Learning',
    'Deep Learning',
    'Computer Vision',
    'NLP',
    'Data Science',
    'AI Models',
    'Python',
    'TensorFlow',
    'PyTorch',
    'Generative AI',
    'Cloud AI',
    'LLMs',
  ];

  return (
    <section
      id="hero-section"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black py-32"
    >
      {/* Enhanced marquee animation with hover effects */}
      <div className="absolute top-32 left-0 w-full overflow-hidden group/marquee" style={{ willChange: 'transform' }}>
        <div className="flex animate-marquee whitespace-nowrap group-hover/marquee:[animation-play-state:paused] transition-all duration-300">
          {[...tags, ...tags].map((tag, index) => (
            <Tag key={index} text={tag} index={index} />
          ))}
        </div>
      </div>

      <div className="container relative z-10 mt-16 flex flex-col items-center text-center">
        <div className="relative mb-[-120px] h-[400px] w-full max-w-4xl sm:h-[500px] lg:mb-[-220px] lg:h-[600px]">
          {/* Enhanced Geometric Outline with parallax */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ 
              perspective: '1200px',
              transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`
            }}
          >
            <div
              className="relative h-[300px] w-full max-w-[500px] md:h-[400px] md:max-w-[700px] lg:h-[500px] lg:max-w-[840px] group/geometric"
              style={{ transform: 'rotateX(15deg) rotateY(-25deg)', transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 border border-primary transition-all duration-500 group-hover/geometric:border-primary/70 group-hover/geometric:shadow-[0_0_50px_rgba(128,242,95,0.3)]"></div>
              <div className="absolute inset-0 border border-primary/30 transition-all duration-500 group-hover/geometric:border-primary/50" style={{ transform: 'translateZ(-80px)' }}></div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary animate-pulse"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary animate-pulse"></div>
            </div>
          </div>
          
          {/* Enhanced floating images with parallax and hover effects */}
          <div
            className={`group/image1 absolute left-[5%] top-[10%] w-[50%] md:left-[10%] md:top-[5%] md:w-[45%] transition-all duration-1000 hover:scale-110 hover:rotate-1 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{
              transform: `perspective(1200px) rotateX(10deg) rotateY(-20deg) scale(1.1) translateX(${mousePosition.x * -5}px) translateY(${mousePosition.y * -5}px)`,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              transitionDelay: '0.3s'
            }}
          >
            <Image
              src="https://framerusercontent.com/images/Wz3hFd8Q00IPgx6kaYPHaCCHOmo.png"
              alt="AI Project Visual 1"
              width={400}
              height={550}
              className="h-full w-full object-cover transition-all duration-500 group-hover/image1:brightness-110 group-hover/image1:contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image1:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div
            className={`group/image2 absolute right-[5%] top-[5%] w-[45%] md:right-[15%] md:w-[40%] transition-all duration-1000 hover:scale-110 hover:-rotate-1 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{
              transform: `perspective(1200px) rotateX(5deg) rotateY(15deg) translateZ(100px) scale(0.9) translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              transitionDelay: '0.5s'
            }}
          >
            <Image
              src="https://framerusercontent.com/images/uxNbVYg6JF1nOlix86r82F8kT0.png"
              alt="AI Project Visual 2"
              width={350}
              height={500}
              className="h-full w-full object-cover transition-all duration-500 group-hover/image2:brightness-110 group-hover/image2:contrast-110"
              priority
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/image2:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Enhanced main title with text reveal animation */}
        <h1
          className={`font-display text-[13vw] font-black uppercase leading-none text-white md:text-[12vw] lg:text-[10rem] group/title transition-all duration-1000 hover:scale-105 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{ 
            letterSpacing: '-0.02em',
            transitionDelay: '0.8s'
          }}
        >
          <span className="inline-block transition-all duration-300 hover:text-primary hover:rotate-1">
            Mayank
          </span>
          <span className="text-primary animate-pulse transition-all duration-300 hover:scale-125">*</span>
          <span className="inline-block transition-all duration-300 hover:text-primary hover:-rotate-1">
            Sharma
          </span>
        </h1>
        
        {/* Enhanced bottom section with staggered animations */}
        <div className={`mt-12 grid w-full max-w-6xl grid-cols-1 items-end gap-8 px-4 md:mt-24 md:grid-cols-3 transition-all duration-1200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '1.2s' }}>
          <div className="text-left md:col-span-1 group/desc">
            <p className="max-w-sm font-body text-lg text-muted transition-all duration-500 group-hover/desc:text-white/90 group-hover/desc:scale-105">
              Specializing in AI/ML solutions, building intelligent systems that drive innovation and transform data into actionable insights.
            </p>
          </div>
          
          <div className="flex justify-center md:col-span-1">
            <Link 
              href="/projects" 
              className="group/cta btn bg-secondary text-secondary-foreground shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:brightness-110 hover:shadow-[0_0_30px_rgba(128,242,95,0.4)] relative overflow-hidden"
            >
              <span className="relative z-10 transition-transform duration-300 group-hover/cta:scale-110">
                Our Projects
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full scale-0 group-active/cta:scale-150 transition-transform duration-200 opacity-0 group-active/cta:opacity-100"></div>
            </Link>
          </div>
          
          <div className="text-right font-body text-sm uppercase tracking-wider text-muted group/info transition-all duration-500 hover:text-primary/80">
            <p className="transition-transform duration-300 hover:translate-x-2">*ESTABLISHED — 2024</p>
            <p className="transition-transform duration-300 hover:translate-x-2">BASED IN INDIA</p>
          </div>
        </div>
      </div>

      {/* Enhanced background elements with animated gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-all duration-3000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`} style={{ 
          transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)` 
        }}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl transition-all duration-3000 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`} style={{ 
          transform: `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -15}px)` 
        }}></div>
        
        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateX(${mousePosition.x * (i + 1) * 3}px) translateY(${mousePosition.y * (i + 1) * 3}px)`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;