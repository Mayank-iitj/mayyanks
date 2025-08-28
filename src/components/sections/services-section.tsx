"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Bot, 
  Database, 
  BarChart3, 
  Eye, 
  Zap, 
  MessageSquare, 
  Target,
  TrendingUp
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Custom ML models and algorithms tailored to your business needs. From predictive analytics to pattern recognition, I build intelligent systems that learn and adapt.",
    features: ["Custom Model Development", "Algorithm Optimization", "Performance Tuning"]
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Streamline your workflows with intelligent automation. I create AI-powered systems that handle repetitive tasks and make smart decisions.",
    features: ["Process Automation", "Decision Systems", "Workflow Optimization"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform raw data into actionable insights. I design robust data pipelines and infrastructure to power your AI initiatives.",
    features: ["Data Pipeline Design", "ETL Processes", "Data Architecture"]
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Forecast trends and outcomes with advanced statistical models. Make data-driven decisions with confidence using predictive insights.",
    features: ["Forecasting Models", "Risk Analysis", "Market Predictions"]
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Enable machines to see and understand visual content. From image recognition to video analysis, I create vision systems that work.",
    features: ["Image Recognition", "Object Detection", "Video Analysis"]
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Build systems that understand and generate human language. From chatbots to content analysis, I make machines communicate naturally.",
    features: ["Text Analysis", "Chatbot Development", "Language Models"]
  },
  {
    icon: Target,
    title: "AI Strategy Consulting",
    description: "Navigate your AI transformation with expert guidance. I help you identify opportunities and create actionable AI strategies.",
    features: ["AI Roadmapping", "Technology Assessment", "Implementation Planning"]
  },
  {
    icon: TrendingUp,
    title: "Model Optimization",
    description: "Maximize the performance and efficiency of your AI models. I fine-tune algorithms for speed, accuracy, and resource optimization.",
    features: ["Performance Tuning", "Model Compression", "Inference Optimization"]
  },
  {
    icon: Zap,
    title: "Real-time AI Systems",
    description: "Deploy AI solutions that work in real-time. From edge computing to live data processing, I build responsive AI applications.",
    features: ["Edge Deployment", "Real-time Processing", "Low-latency Systems"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-emerald-50/30 dark:to-emerald-950/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            AI & ML Services
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transform Your Business with{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Intelligent Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From machine learning models to AI automation, I deliver cutting-edge solutions 
            that drive real business value. Let's build the future together.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)",
                  transition: { duration: 0.3 }
                }}
                className="h-full bg-card border border-border rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700"
              >
                {/* Background Glow Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 0.1, 
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl"
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="relative z-10 w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (index * 0.1) + (featureIndex * 0.1) + 0.3
                        }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.2 }
                  }}
                  className="absolute bottom-8 right-8 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center"
                >
                  <TrendingUp className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/25"
          >
            <MessageSquare className="w-5 h-5" />
            Let's Discuss Your Project
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};