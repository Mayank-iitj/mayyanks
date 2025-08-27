"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Lightbulb, Zap, Target, Users, Award } from "lucide-react";

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
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

  const cardHoverVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About DesignCube
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Main Description */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                DesignCube is at the forefront of artificial intelligence and machine learning innovation, 
                crafting intelligent solutions that transform how businesses operate and grow. We specialize 
                in developing cutting-edge AI systems, predictive analytics platforms, and automated 
                workflows that drive efficiency and unlock new possibilities.
              </p>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* AI Expertise Card */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <motion.div
                variants={iconHoverVariants}
                whileHover="hover"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <Brain className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                AI & Machine Learning
              </h3>
              <p className="text-muted-foreground">
                Deep expertise in neural networks, deep learning, and advanced algorithms 
                that power intelligent decision-making systems.
              </p>
            </motion.div>

            {/* Innovation Card */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <motion.div
                variants={iconHoverVariants}
                whileHover="hover"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <Lightbulb className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Innovative Solutions
              </h3>
              <p className="text-muted-foreground">
                Creative problem-solving approaches that combine cutting-edge technology 
                with practical business applications.
              </p>
            </motion.div>

            {/* Performance Card */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <motion.div
                variants={iconHoverVariants}
                whileHover="hover"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <Zap className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                High Performance
              </h3>
              <p className="text-muted-foreground">
                Optimized systems that deliver exceptional speed, reliability, 
                and scalability for enterprise-grade applications.
              </p>
            </motion.div>

            {/* Strategic Focus Card */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <motion.div
                variants={iconHoverVariants}
                whileHover="hover"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <Target className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Strategic Vision
              </h3>
              <p className="text-muted-foreground">
                Data-driven insights and strategic planning that align technology 
                solutions with long-term business objectives.
              </p>
            </motion.div>

            {/* Client-Focused Card */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <motion.div
                variants={iconHoverVariants}
                whileHover="hover"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <Users className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Client-Centered
              </h3>
              <p className="text-muted-foreground">
                Collaborative partnerships focused on understanding unique challenges 
                and delivering tailored AI solutions.
              </p>
            </motion.div>

            {/* Excellence Card */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <motion.div
                variants={iconHoverVariants}
                whileHover="hover"
                className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
              >
                <Award className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Proven Excellence
              </h3>
              <p className="text-muted-foreground">
                Track record of successful implementations and measurable results 
                across diverse industries and use cases.
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's explore how AI and machine learning can revolutionize your operations, 
                enhance decision-making, and unlock new growth opportunities.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};