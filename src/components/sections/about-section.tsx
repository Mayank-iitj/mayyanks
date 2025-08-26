import React from 'react';

// Data for the "About Us" section, tailored to Mayank's profile.
// The order is 4, 3, 2, 1 to match the visual design of the original site.
const aboutData = [
  {
    number: "04",
    title: "Expertise in AI & Data",
    description:
      "Showcasing expertise in the full lifecycle of data science and AI development, from data wrangling to the deployment of sophisticated models.",
  },
  {
    number: "03",
    title: "Innovative Machine Learning",
    description:
      "Adopting an innovative approach to machine learning, focused on creating novel solutions that tackle complex, real-world challenges effectively.",
  },
  {
    number: "02",
    title: "Passion for AI Tools",
    description:
      "Fueled by a deep passion for the latest AI tools and technologies, turning complex problems into elegant, intelligent solutions.",
  },
  {
    number: "01",
    title: "Foundation at IIT Jodhpur",
    description:
      "Currently a BS AIDE student at IIT Jodhpur, building a strong academic foundation and hands-on skills in artificial intelligence.",
  },
];

type AboutCardProps = {
  number: string;
  title: string;
  description: string;
};

// Re-usable card component for the grid items. Kept in the same file for simplicity.
const AboutCard = ({ number, title, description }: AboutCardProps) => {
  return (
    <div className="flex flex-col items-start gap-6 border-l border-border pl-10">
      <p className="font-display text-[72px] font-bold leading-none text-primary">{number}</p>
      <h3 className="font-display text-2xl font-medium text-foreground">{title}</h3>
      <p className="font-body text-lg text-muted">{description}</p>
    </div>
  );
};

// The main About Section component
const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-[120px]">
      <div className="container">
        <h2 className="text-center font-display text-[36px] font-bold uppercase tracking-[0.05em] text-foreground">
            ABOUT*US
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {aboutData.map((item) => (
            <AboutCard key={item.number} number={item.number} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;