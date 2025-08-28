"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Certificate, Star, Shield, Medal } from 'lucide-react';

interface AwardData {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: React.ComponentType<any>;
  category: string;
}

const awards: AwardData[] = [
  {
    id: '1',
    title: 'Google Cloud Professional Developer',
    organization: 'Google Cloud',
    year: '2024',
    description: 'Certified professional developer with expertise in cloud-native application development and deployment.',
    icon: Shield,
    category: 'Cloud Certification'
  },
  {
    id: '2',
    title: 'AWS Solutions Architect Associate',
    organization: 'Amazon Web Services',
    year: '2023',
    description: 'Demonstrated expertise in designing distributed systems and applications on AWS cloud platform.',
    icon: Award,
    category: 'Cloud Architecture'
  },
  {
    id: '3',
    title: 'Top Performer Award',
    organization: 'Tech Innovation Corp',
    year: '2023',
    description: 'Recognized for exceptional performance in developing scalable web applications and leading technical initiatives.',
    icon: Trophy,
    category: 'Performance Excellence'
  },
  {
    id: '4',
    title: 'Certified Kubernetes Administrator',
    organization: 'Cloud Native Computing Foundation',
    year: '2023',
    description: 'Validated skills in Kubernetes cluster administration, networking, and application deployment.',
    icon: Certificate,
    category: 'DevOps Certification'
  },
  {
    id: '5',
    title: 'Outstanding Innovation Award',
    organization: 'Digital Solutions Ltd',
    year: '2022',
    description: 'Honored for innovative contributions to microservices architecture and API development.',
    icon: Star,
    category: 'Innovation'
  },
  {
    id: '6',
    title: 'React Developer Certification',
    organization: 'Meta',
    year: '2022',
    description: 'Certified in advanced React development, state management, and modern frontend architecture.',
    icon: Medal,
    category: 'Frontend Development'
  }
];

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
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

export const AwardsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50/30 via-white to-emerald-50/20 dark:from-emerald-950/10 dark:via-background dark:to-emerald-950/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 rounded-full mb-6"
          >
            <Trophy className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Awards & 
            <span className="text-emerald-600 dark:text-emerald-400"> Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Recognition of excellence and continuous learning in software engineering, 
            cloud technologies, and innovative development practices.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awards.map((award) => {
            const IconComponent = award.icon;
            
            return (
              <motion.div
                key={award.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                      {award.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className="relative z-10 w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {award.title}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                        {award.organization}
                      </p>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Certifications", value: "6+", icon: Certificate },
            { label: "Awards Won", value: "3", icon: Trophy },
            { label: "Years Experience", value: "5+", icon: Star },
            { label: "Technologies Mastered", value: "15+", icon: Shield }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full mb-3 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/30 transition-colors duration-300">
                  <StatIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};