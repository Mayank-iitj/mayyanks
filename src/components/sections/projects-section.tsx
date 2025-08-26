"use client";

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Game System Compatibility Checker",
    subtitle: "GSCC",
    description: "Tool for gamers to check if their system can handle the latest games. Enter your specs to analyze compatibility and avoid buying games your PC can't run.",
    demoLink: "https://iridescent-rolypoly-782dae.netlify.app/",
    tags: ["Gaming", "System Analysis", "Compatibility"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/images/VSgmTjB3esAIEBsN8zmH3e0KUEo-15.png?"
  },
  {
    title: "Attendance & Performance Tracker",
    subtitle: "Workforce Management", 
    description: "Comprehensive app for workforce management—track attendance, manage salaries/payroll, PF contributions, and monitor performance metrics in real time.",
    demoLink: "https://wmsms.vercel.app/",
    tags: ["HR Management", "Analytics", "Real-time"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/images/EvCKA7o2VdatFHO6aOdjbIXWTEU-16.png?"
  },
  {
    title: "Moody News",
    subtitle: "Personalized News",
    description: "Get headlines and news stories tailored to your current mood for a personalized and engaging information experience.",
    demoLink: "https://moody-news.vercel.app/",
    tags: ["News", "AI", "Personalization"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/images/TeLjhJiSPxgMNWneUa2e2Zo-17.png?"
  },
  {
    title: "Named Entity Linking",
    subtitle: "NEL System",
    description: "AI system that links entities (people, places, organizations) in text to database entries, enabling smarter search and data insights.",
    demoLink: "https://nel-by-ms.netlify.app/",
    tags: ["NLP", "AI", "Data Linking"],
    image: "https://framerusercontent.com/images/Wz3hFd8Q00IPgx6kaYPHaCCHOmo.png"
  },
  {
    title: "QuantumShield Firewall",
    subtitle: "Network Security",
    description: "Advanced network firewall providing robust protection, real-time threat detection, seamless integration, and user-friendly security for digital assets.",
    demoLink: "https://fire-wall.netlify.app/",
    tags: ["Security", "Firewall", "Real-time"],
    image: "https://framerusercontent.com/images/uxNbVYg6JF1nOlix86r82F8kT0.png"
  },
  {
    title: "All Rounder API Key Generator",
    subtitle: "Developer Tools",
    description: "Quickly generates secure API keys for developers, ensuring ease of setup and improved project security.",
    demoLink: "https://allrounder-api.netlify.app/",
    tags: ["API", "Security", "Developer Tools"],
    image: "https://framerusercontent.com/images/BvzncGBbb6FIgtrlaloObIiG2cY.png"
  },
  {
    title: "Traffic Management Wizard",
    subtitle: "Smart City",
    description: "Smart city traffic management with real-time analytics using signals, cameras, and data to reduce congestion and improve transportation.",
    demoLink: "https://gregarious-buttercream-270467.netlify.app/",
    tags: ["IoT", "Traffic", "Smart City"],
    image: "https://framerusercontent.com/images/HowmrQKMjv4J2RQAp5h9XISrO0E.jpg"
  },
  {
    title: "Text Analyzer Pro",
    subtitle: "Writing Assistant",
    description: "Text improvement tool offering feedback on readability, grammar, and style; valuable for students, professionals, and writers.",
    demoLink: "https://analyzetex.netlify.app/",
    tags: ["NLP", "Writing", "Analysis"],
    image: "https://framerusercontent.com/images/OWRKyo7wdaCEBYCGswlPbEYfsDE.jpg"
  },
  {
    title: "CardioDetect",
    subtitle: "Health AI",
    description: "AI-driven early cancer detection via heartbeat analysis. Uses pattern recognition algorithms to identify health risks and improve diagnostics.",
    demoLink: "https://dlqmwdpj.manus.space/",
    tags: ["Healthcare", "AI", "Diagnostics"],
    image: "https://framerusercontent.com/images/bHoMJycEVIqbQuBZGPglGrRGd0.png"
  },
  {
    title: "Face Mask Detection with Deep Learning",
    subtitle: "Computer Vision",
    description: "Computer vision system using MobileNetV2 to detect face masks in images and video. High accuracy in classifying 'With Mask' and 'Without Mask'.",
    demoLink: null,
    tags: ["Deep Learning", "Computer Vision", "MobileNetV2"],
    image: "https://framerusercontent.com/images/yX9Gl8pNA4l5Vs5YOVxoGyoFYWU.png"
  },
  {
    title: "Customer Churn Prediction",
    subtitle: "ML Pipeline",
    description: "ML pipeline for predicting customer churn in telecom. Used ensemble models (Random Forest, XGBoost), 85%+ accuracy, actionable business insights.",
    demoLink: null,
    tags: ["Machine Learning", "XGBoost", "Business Analytics"],
    image: "https://framerusercontent.com/images/bJwEJr6t7QDk4iUVUFjAxTz5TLs.png"
  },
  {
    title: "Music Genre Classification",
    subtitle: "Audio AI",
    description: "Audio classification model (CNNs, LSTMs) to identify music genres from raw audio. Extracted MFCCs, deployed as a web app.",
    demoLink: "#",
    tags: ["CNN", "LSTM", "Audio Processing"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/images/j81hNjMX2g5xuwiXlJUK8leOn8-24.png?"
  },
  {
    title: "E-Commerce Product Recommendation System",
    subtitle: "Hybrid Recommender",
    description: "Hybrid recommendation engine (collaborative + content-based) suggesting products based on user history and features. Improved engagement by 20% in A/B testing.",
    demoLink: "#",
    tags: ["Recommendation", "Collaborative", "E-commerce"],
    image: "https://framerusercontent.com/images/96Z6IpQA2x5XwidjMZuMofmk.png"
  },
  {
    title: "Sentiment Analysis on Social Media",
    subtitle: "BERT Classification",
    description: "Real-time sentiment analysis pipeline using BERT for tweet classification (positive, negative, neutral). Trend visualization for marketing insights.",
    demoLink: "#",
    tags: ["BERT", "NLP", "Social Media"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/images/eXmDMzjaPw3mPB3gWgVxlv0WjQ.png"
  },
  {
    title: "Spam Mail Analyzer",
    subtitle: "Security Tool",
    description: "Tool for filtering spam emails by analyzing sender, subject, and content. Helps maintain a cleaner inbox, reduces phishing/malware.",
    demoLink: "#",
    tags: ["Security", "Email", "Classification"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/images/4GRQXILMZys5PdVn4VHjCVkJ17w.png"
  },
  {
    title: "SmartCity IoT",
    subtitle: "Urban Analytics",
    description: "IoT integration in urban environments (traffic, waste, transport) for smarter resource management and real-time analytics. PC-optimized.",
    demoLink: "#",
    tags: ["IoT", "Smart City", "Analytics"],
    image: "https://framerusercontent.com/images/Wz3hFd8Q00IPgx6kaYPHaCCHOmo.png"
  },
  {
    title: "Life Goal Unleashed",
    subtitle: "Life Pattern Analyzer",
    description: "Analyzes user habits/routines, providing tailored personal growth insights and productivity improvements.",
    demoLink: "#",
    tags: ["Analytics", "Personal Growth", "Productivity"],
    image: "https://framerusercontent.com/images/uxNbVYg6JF1nOlix86r82F8kT0.png"
  },
  {
    title: "SocialStarX",
    subtitle: "Social Automation",
    description: "Social media automation tool for scheduling posts, managing accounts, analytics, and growing online presence.",
    demoLink: "#",
    tags: ["Automation", "Social Media", "Analytics"],
    image: "https://framerusercontent.com/images/BvzncGBbb6FIgtrlaloObIiG2cY.png"
  },
  {
    title: "ReactNative",
    subtitle: "Mobile Framework",
    description: "Mobile app framework to build cross-platform apps using JavaScript and React, featuring hot-reloading and native-like performance.",
    demoLink: "#",
    tags: ["React Native", "Mobile", "Cross-platform"],
    image: "https://framerusercontent.com/images/HowmrQKMjv4J2RQAp5h9XISrO0E.jpg"
  },
  {
    title: "X Analytics",
    subtitle: "Market Intelligence",
    description: "Market analysis tool for business insights into trends and consumer behavior; advanced analytics, visualizations, decision-making support.",
    demoLink: "#",
    tags: ["Analytics", "Market Research", "Business Intelligence"],
    image: "https://framerusercontent.com/images/OWRKyo7wdaCEBYCGswlPbEYfsDE.jpg"
  },
  {
    title: "CredWise",
    subtitle: "Credit Predictor",
    description: "AI-powered credit card approval predictor with personalized recommendations, helping users understand eligibility and navigate credit.",
    demoLink: "#",
    tags: ["AI", "Credit Scoring", "Finance"],
    image: "https://framerusercontent.com/images/bHoMJycEVIqbQuBZGPglGrRGd0.png"
  },
  {
    title: "FintechAnalytics",
    subtitle: "Data Exploration",
    description: "Exploratory data analysis tool for summarizing and visualizing datasets, uncovering patterns and insights for analysts.",
    demoLink: "#",
    tags: ["Data Science", "Fintech", "Visualization"],
    image: "https://framerusercontent.com/images/yX9Gl8pNA4l5Vs5YOVxoGyoFYWU.png"
  },
  {
    title: "SalesAnalytics",
    subtitle: "Sales Dashboard",
    description: "Dashboard for collecting, analyzing, and interpreting sales data to optimize sales strategies and drive growth.",
    demoLink: "#",
    tags: ["Sales", "Dashboard", "Analytics"],
    image: "https://framerusercontent.com/images/bJwEJr6t7QDk4iUVUFjAxTz5TLs.png"
  },
  {
    title: "msGPT",
    subtitle: "AI Assistant",
    description: "Advanced AI assistant for content generation, answering questions, and providing reliable, quick support using language models.",
    demoLink: "#",
    tags: ["AI", "GPT", "Assistant"],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a6662235-904c-49f9-9077-9ec36bf710c8-designcube-framer-ai/assets/images/j81hNjMX2g5xuwiXlJUK8leOn8-24.png?"
  }
];

export default function ProjectsSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(projects.length).fill(false));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
            }, index * 50); // Reduced delay for larger grid
          }
        },
        { threshold: 0.1 } // Reduced threshold for better performance
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse delay-300"></div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-4 tracking-tight">
            OUR*PROJECTS
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Innovative AI/ML solutions and applications that solve real-world problems
          </p>
          <div className="mt-4 text-primary font-medium">
            {projects.length} Projects • AI/ML • Data Science • Web Development
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(128,242,95,0.15)] ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-muted text-sm mb-4 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                {project.demoLink && project.demoLink !== "#" ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-black rounded-full text-sm font-medium transition-all duration-300 group-hover:scale-105"
                  >
                    <ExternalLink size={14} />
                    View Demo
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-muted rounded-full text-sm">
                    <Github size={14} />
                    In Development
                  </div>
                )}
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-all duration-500"></div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/10 to-primary/20 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
            <span className="text-white font-medium">Explore {projects.length}+ AI/ML Projects</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 border border-primary/20 rounded-full animate-pulse delay-300"></div>
    </section>
  );
}