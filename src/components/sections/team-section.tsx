"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  skills: string[];
  experience: string;
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamMember: TeamMember = {
  name: "Mayank Sharma",
  title: "Founder & AI Engineer",
  description: "Passionate AI engineer and entrepreneur with a vision to democratize artificial intelligence. Leading innovative projects that bridge the gap between cutting-edge research and practical applications.",
  skills: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "PyTorch", "Natural Language Processing"],
  experience: "5+ years in AI/ML development",
  social: {
    instagram: "https://instagram.com/mayyanks",
    linkedin: "https://linkedin.com/in/mayank-iitj",
    twitter: "https://twitter.com/mayyankks"
  }
};

export const TeamSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet the Founder
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Team Member Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="max-w-md w-full"
          >
            <div className="bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Content Section */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {teamMember.name}
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    {teamMember.title}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {teamMember.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-card-foreground mb-3">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {teamMember.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-card-foreground">Experience: </span>
                    {teamMember.experience}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                  {teamMember.social.instagram && (
                    <motion.a
                      href={teamMember.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </motion.a>
                  )}
                  {teamMember.social.linkedin && (
                    <motion.a
                      href={teamMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  {teamMember.social.twitter && (
                    <motion.a
                      href={teamMember.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};