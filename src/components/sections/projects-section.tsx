"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Filter, Code, Brain, Eye, MessageSquare, Database, Globe, Heart, DollarSign, BarChart3, Smartphone, Zap } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  category: string;
  isInDevelopment?: boolean;
}

interface ProjectCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Game System Compatibility Checker (GSCC)",
    description: "Advanced AI-powered tool that analyzes game requirements and system specifications to provide compatibility recommendations and performance predictions.",
    demoUrl: "https://iridescent-rolypoly-782dae.netlify.app/",
    tags: ["AI/ML", "Gaming", "Compatibility"],
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Attendance, Salary, PF & Performance Tracker",
    description: "Comprehensive workforce management system with AI-driven analytics for attendance tracking, salary processing, and performance evaluation.",
    demoUrl: "https://wmsms.vercel.app/",
    tags: ["Data Analytics", "HR Management", "Dashboard"],
    category: "Data Analytics"
  },
  {
    id: 3,
    title: "Moody News",
    description: "AI-powered news platform that analyzes sentiment and mood of news articles to provide emotional context and personalized content curation.",
    demoUrl: "https://moody-news.vercel.app/",
    tags: ["NLP", "Sentiment Analysis", "News"],
    category: "NLP"
  },
  {
    id: 4,
    title: "Named Entity Linking (NEL)",
    description: "Advanced NLP system for identifying and linking named entities in text to knowledge bases using state-of-the-art machine learning algorithms.",
    demoUrl: "https://nel-by-ms.netlify.app/",
    tags: ["NLP", "Entity Recognition", "Knowledge Graph"],
    category: "NLP"
  },
  {
    id: 5,
    title: "QuantumShield Firewall",
    description: "Next-generation AI-driven cybersecurity solution with quantum-resistant encryption and intelligent threat detection capabilities.",
    demoUrl: "https://fire-wall.netlify.app/",
    tags: ["Cybersecurity", "AI/ML", "Network Security"],
    category: "AI/ML"
  },
  {
    id: 6,
    title: "All Rounder API Key Generator",
    description: "Intelligent API key management system with automated generation, rotation, and security monitoring using machine learning algorithms.",
    demoUrl: "https://allrounder-api.netlify.app/",
    tags: ["Web Development", "Security", "API Management"],
    category: "Web Development"
  },
  {
    id: 7,
    title: "Traffic Management Wizard",
    description: "Smart city traffic optimization system using IoT sensors and AI algorithms to reduce congestion and improve urban mobility.",
    demoUrl: "https://gregarious-buttercream-270467.netlify.app/",
    tags: ["IoT", "Smart City", "Traffic Optimization"],
    category: "IoT"
  },
  {
    id: 8,
    title: "Text Analyzer Pro",
    description: "Comprehensive text analysis platform with sentiment analysis, readability scoring, keyword extraction, and linguistic pattern recognition.",
    demoUrl: "https://analyzetex.netlify.app/",
    tags: ["NLP", "Text Analysis", "Linguistics"],
    category: "NLP"
  },
  {
    id: 9,
    title: "CardioDetect",
    description: "Advanced deep learning system for cardiovascular disease detection using medical imaging and patient data analysis.",
    demoUrl: "https://dlqmwdpj.manus.space/",
    tags: ["Healthcare", "Deep Learning", "Medical Imaging"],
    category: "Healthcare"
  },
  {
    id: 10,
    title: "Face Mask Detection with Deep Learning",
    description: "Real-time computer vision system for detecting face mask compliance using convolutional neural networks and edge computing.",
    isInDevelopment: true,
    tags: ["Computer Vision", "Deep Learning", "Safety"],
    category: "Computer Vision"
  },
  {
    id: 11,
    title: "Customer Churn Prediction",
    description: "Machine learning model that predicts customer churn probability using behavioral analytics and predictive modeling techniques.",
    isInDevelopment: true,
    tags: ["Machine Learning", "Predictive Analytics", "Business Intelligence"],
    category: "Data Analytics"
  },
  {
    id: 12,
    title: "Music Genre Classification",
    description: "AI-powered audio analysis system that automatically classifies music genres using deep neural networks and audio feature extraction.",
    demoUrl: "#",
    tags: ["Audio Processing", "Classification", "Entertainment"],
    category: "AI/ML"
  },
  {
    id: 13,
    title: "E-Commerce Product Recommendation System",
    description: "Personalized recommendation engine using collaborative filtering and content-based algorithms to enhance shopping experiences.",
    demoUrl: "#",
    tags: ["Recommendation System", "E-Commerce", "Personalization"],
    category: "AI/ML"
  },
  {
    id: 14,
    title: "Sentiment Analysis on Social Media",
    description: "Large-scale social media sentiment analysis platform for brand monitoring and public opinion tracking across multiple platforms.",
    demoUrl: "#",
    tags: ["Social Media", "Sentiment Analysis", "Brand Monitoring"],
    category: "NLP"
  },
  {
    id: 15,
    title: "Spam Mail Analyzer",
    description: "Intelligent email filtering system using natural language processing and machine learning to detect and categorize spam messages.",
    demoUrl: "#",
    tags: ["Email Security", "Classification", "Cybersecurity"],
    category: "AI/ML"
  },
  {
    id: 16,
    title: "SmartCity IoT",
    description: "Comprehensive IoT platform for smart city management including environmental monitoring, energy optimization, and citizen services.",
    demoUrl: "#",
    tags: ["IoT", "Smart City", "Environmental Monitoring"],
    category: "IoT"
  },
  {
    id: 17,
    title: "Life Goal Unleashed (Life Pattern Analyzer)",
    description: "AI-driven personal development platform that analyzes life patterns and provides personalized goal-setting and achievement strategies.",
    demoUrl: "#",
    tags: ["Personal Development", "Pattern Analysis", "Goal Setting"],
    category: "AI/ML"
  },
  {
    id: 18,
    title: "SocialStarX",
    description: "Social media analytics and influence measurement platform using graph algorithms and engagement pattern analysis.",
    demoUrl: "#",
    tags: ["Social Analytics", "Influence Measurement", "Network Analysis"],
    category: "Data Analytics"
  },
  {
    id: 19,
    title: "ReactNative",
    description: "Cross-platform mobile application development framework with integrated AI components and real-time data synchronization.",
    demoUrl: "#",
    tags: ["Mobile Development", "Cross-Platform", "Real-Time"],
    category: "Mobile Development"
  },
  {
    id: 20,
    title: "X Analytics",
    description: "Advanced social media analytics platform with sentiment tracking, trend analysis, and competitive intelligence features.",
    demoUrl: "#",
    tags: ["Social Analytics", "Trend Analysis", "Competitive Intelligence"],
    category: "Data Analytics"
  },
  {
    id: 21,
    title: "CredWise",
    description: "AI-powered credit scoring and financial risk assessment platform using alternative data sources and machine learning algorithms.",
    demoUrl: "#",
    tags: ["Fintech", "Credit Scoring", "Risk Assessment"],
    category: "Finance"
  },
  {
    id: 22,
    title: "FintechAnalytics",
    description: "Comprehensive financial analytics platform with fraud detection, algorithmic trading, and portfolio optimization capabilities.",
    demoUrl: "#",
    tags: ["Financial Analytics", "Fraud Detection", "Trading"],
    category: "Finance"
  },
  {
    id: 23,
    title: "SalesAnalytics",
    description: "Advanced sales performance analytics with predictive modeling, lead scoring, and revenue forecasting using machine learning.",
    demoUrl: "#",
    tags: ["Sales Analytics", "Predictive Modeling", "CRM"],
    category: "Data Analytics"
  },
  {
    id: 24,
    title: "msGPT",
    description: "Custom large language model fine-tuned for specialized domains with advanced reasoning capabilities and multimodal understanding.",
    demoUrl: "#",
    tags: ["Large Language Model", "GPT", "Conversational AI"],
    category: "AI/ML"
  }
];

const categories: ProjectCategory[] = [
  { id: "all", name: "All Projects", icon: Code, color: "text-emerald-500" },
  { id: "AI/ML", name: "AI & ML", icon: Brain, color: "text-blue-500" },
  { id: "Computer Vision", name: "Computer Vision", icon: Eye, color: "text-purple-500" },
  { id: "NLP", name: "NLP", icon: MessageSquare, color: "text-green-500" },
  { id: "Data Analytics", name: "Data Analytics", icon: BarChart3, color: "text-orange-500" },
  { id: "Web Development", name: "Web Dev", icon: Globe, color: "text-cyan-500" },
  { id: "IoT", name: "IoT", icon: Zap, color: "text-yellow-500" },
  { id: "Healthcare", name: "Healthcare", icon: Heart, color: "text-red-500" },
  { id: "Finance", name: "Finance", icon: DollarSign, color: "text-indigo-500" },
  { id: "Mobile Development", name: "Mobile", icon: Smartphone, color: "text-pink-500" }
];

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [projectCount, setProjectCount] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (selectedCategory === "all") {
      setDisplayedProjects(projects);
    } else {
      setDisplayedProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setProjectCount(prev => {
          if (prev < projects.length) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return projects.length;
          }
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-600 font-semibold uppercase tracking-wider text-sm">Portfolio</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent mb-6">
            AI & ML Projects
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of cutting-edge AI, Machine Learning, and technology solutions
            that are transforming industries and solving real-world problems.
          </p>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-4 bg-emerald-50 dark:bg-emerald-950/30 px-6 py-3 rounded-full border border-emerald-200 dark:border-emerald-800"
          >
            <div className="text-2xl font-bold text-emerald-600">{projectCount}</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by Category</span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-600 shadow-lg shadow-emerald-100 dark:shadow-emerald-900/20"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border hover:border-emerald-200 dark:hover:border-emerald-800"
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? category.color : ""}`} />
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              custom={index}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-xl p-6 h-full transition-all duration-500 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-2xl hover:shadow-emerald-100/20 dark:hover:shadow-emerald-900/20 hover:-translate-y-2">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  {project.isInDevelopment ? (
                    <div className="flex items-center gap-2 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">
                      <Github className="w-3 h-3" />
                      In Development
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="inline-flex items-center gap-1 text-xs bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-900/70 transition-colors duration-300"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  )}
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md border border-border group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md border border-border">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {project.category}
                  </span>
                  
                  {project.demoUrl && project.demoUrl !== "#" && !project.isInDevelopment && (
                    <motion.div
                      className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 dark:from-emerald-950/30 dark:via-background dark:to-emerald-950/30 px-8 py-4 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-lg">
            <div className="text-sm text-muted-foreground">
              Interested in collaborating on innovative AI solutions?
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};