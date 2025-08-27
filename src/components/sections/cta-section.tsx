"use client";

import React, { useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Copy, CheckCircle, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export const CTASection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [emailCopied, setEmailCopied] = useState({ email1: false, email2: false });
  const [isLoading, setIsLoading] = useState({ journey: false, consultation: false });

  const copyToClipboard = useCallback(async (email: string, type: 'email1' | 'email2') => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setEmailCopied(prev => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }, []);

  const handleCTAClick = useCallback((type: 'journey' | 'consultation') => {
    setIsLoading(prev => ({ ...prev, [type]: true }));
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    setTimeout(() => {
      setIsLoading(prev => ({ ...prev, [type]: false }));
    }, 1500);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-chart-1/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-chart-2/20 to-chart-4/20 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20"
        variants={floatingVariants}
        animate="animate"
      >
        <Sparkles size={24} />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-chart-1/30"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <TrendingUp size={28} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 text-chart-3/25"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Zap size={26} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight"
              whileInView={{ scale: [0.95, 1] }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Unlock the power of AI and machine learning to revolutionize your operations, 
              enhance customer experiences, and drive unprecedented growth.
            </motion.p>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 py-8"
          >
            {[
              { icon: Users, label: "50+ Happy Clients", color: "text-chart-1" },
              { icon: TrendingUp, label: "200% ROI Average", color: "text-chart-2" },
              { icon: Zap, label: "24/7 Support", color: "text-chart-4" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              onClick={() => handleCTAClick('journey')}
              disabled={isLoading.journey}
              className="group relative bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg overflow-hidden min-w-[200px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-chart-1"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20"
                animate={{ 
                  background: ["radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative flex items-center gap-2">
                {isLoading.journey ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Start Your AI Journey
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              onClick={() => handleCTAClick('consultation')}
              disabled={isLoading.consultation}
              className="group relative border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-w-[200px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                {isLoading.consultation ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Schedule Consultation
                  </>
                )}
              </div>
            </motion.button>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 pt-8 border-t border-border/50"
          >
            <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
            
            {/* Email Addresses */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {[
                { email: "ms1591934@gmail.com", type: "email1" as const },
                { email: "b24bs1555@iitj.ac.in", type: "email2" as const }
              ].map(({ email, type }) => (
                <motion.button
                  key={email}
                  onClick={() => copyToClipboard(email, type)}
                  className="group flex items-center gap-3 bg-card hover:bg-accent px-4 py-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  <span className="text-sm font-medium">{email}</span>
                  {emailCopied[type] ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {[
                { name: "Instagram", url: "https://instagram.com/designcube", icon: "📷" },
                { name: "LinkedIn", url: "https://linkedin.com/in/designcube", icon: "💼" },
                { name: "X/Twitter", url: "https://twitter.com/designcube", icon: "🐦" }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};