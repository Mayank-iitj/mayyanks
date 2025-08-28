"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Award, Users, Lightbulb } from "lucide-react";

const aboutData = {
  intro: {
    title: "About Mayank Sharma",
    description: "Passionate Full Stack Developer with expertise in modern web technologies and a keen eye for creating exceptional digital experiences.",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "50+" },
      { label: "Technologies Mastered", value: "20+" },
      { label: "Happy Clients", value: "30+" }
    ]
  },
  cards: [
    {
      icon: Code2,
      title: "Technical Expertise",
      description: "Proficient in React, Next.js, Node.js, TypeScript, and modern web development frameworks. Experienced in building scalable applications with clean, maintainable code.",
      skills: ["React & Next.js", "TypeScript", "Node.js", "Database Design", "Cloud Deployment"]
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "5+ years of experience delivering high-quality web solutions for startups and enterprises. Specialized in full-stack development and system architecture.",
      skills: ["Full-Stack Development", "System Architecture", "API Design", "Performance Optimization", "DevOps"]
    },
    {
      icon: Users,
      title: "Leadership & Collaboration",
      description: "Strong team player with experience leading development teams and mentoring junior developers. Excellent communication and project management skills.",
      skills: ["Team Leadership", "Mentoring", "Agile Methodology", "Client Communication", "Code Reviews"]
    },
    {
      icon: Lightbulb,
      title: "Innovation & Problem Solving",
      description: "Creative problem-solver who loves tackling complex challenges and implementing innovative solutions. Always staying updated with the latest industry trends.",
      skills: ["Creative Solutions", "Research & Development", "Technical Strategy", "Performance Analysis", "Continuous Learning"]
    }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 dark:from-emerald-950/20 dark:via-background dark:to-teal-950/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {aboutData.intro.title}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {aboutData.intro.description}
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {aboutData.intro.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-white/60 dark:bg-card/40 backdrop-blur-sm border border-emerald-100 dark:border-emerald-900/30 shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {aboutData.cards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 rounded-3xl bg-white/80 dark:bg-card/60 backdrop-blur-sm border border-emerald-100/50 dark:border-emerald-900/30 shadow-xl hover:shadow-2xl transition-all duration-500">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-6 shadow-lg"
                    >
                      <IconComponent className="w-7 h-7" />
                    </motion.div>

                    {/* Content */}
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
                      whileHover={{ x: 2 }}
                    >
                      {card.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-muted-foreground leading-relaxed mb-6"
                      variants={itemVariants}
                    >
                      {card.description}
                    </motion.p>

                    {/* Skills Tags */}
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                    >
                      {card.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 text-xs md:text-sm font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 transition-colors duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Hover Effect Border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-emerald-500/0 group-hover:border-emerald-500/20 transition-all duration-500"
                      whileHover={{ 
                        boxShadow: "0 0 0 1px rgba(16, 185, 129, 0.1), 0 25px 50px -12px rgba(16, 185, 129, 0.25)" 
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <span>Let's Work Together</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                →
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};