"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.hero-container')?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: e.clientX - centerX,
          y: e.clientY - centerY,
        });
        
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-emerald-50/20 dark:to-emerald-950/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-teal-600/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-emerald-500/20 to-green-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100/80 dark:bg-emerald-900/30 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50 mb-8"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2" />
          <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-emerald-600 to-emerald-800 bg-clip-text text-transparent leading-tight"
            variants={floatingVariants}
            animate="animate"
          >
            Hi, I'm{" "}
            <motion.span
              className="relative inline-block"
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.5 },
              }}
            >
              Mayank Sharma
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle with Typewriter Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Crafting digital experiences through{" "}
            <motion.span
              className="text-emerald-600 dark:text-emerald-400 font-semibold"
              animate={{
                color: ["#059669", "#10b981", "#34d399", "#059669"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              innovative design
            </motion.span>
            {" "}and{" "}
            <motion.span
              className="text-emerald-600 dark:text-emerald-400 font-semibold"
              animate={{
                color: ["#34d399", "#059669", "#10b981", "#34d399"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              cutting-edge technology
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Full-stack developer and UI/UX designer passionate about creating beautiful, 
          functional, and user-centered digital products that make a difference.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "0%" : "-100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            className="group px-8 py-4 bg-background border-2 border-emerald-200 dark:border-emerald-800 text-foreground rounded-xl font-semibold text-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              <Download size={20} />
              Download CV
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Mail, href: "mailto:hello@mayanksharma.dev", label: "Email" },
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-background/80 backdrop-blur-sm border border-border rounded-xl hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <Icon 
                size={24} 
                className="text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" 
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};