import React from 'react';

const servicesData = [
  {
    title: "Machine Learning Model Development",
    description: "Crafting tailored algorithms and models to solve complex problems and drive predictive insights.",
  },
  {
    title: "Computer Vision Systems",
    description: "Developing advanced systems for image recognition, object detection, and video analysis.",
  },
  {
    title: "Natural Language Processing",
    description: "Building applications that understand, interpret, and generate human language.",
  },
  {
    title: "Deep Learning Solutions",
    description: "Implementing cutting-edge neural networks for tasks requiring high levels of abstraction.",
  },
  {
    title: "Data Analysis & Visualization",
    description: "Transforming raw data into actionable insights and compelling visual stories.",
  },
  {
    title: "AI Model Deployment",
    description: "Seamlessly integrating and scaling AI models into production environments for real-world impact.",
  },
  {
    title: "Predictive Analytics",
    description: "Leveraging historical data to forecast future trends and business outcomes with high accuracy.",
  },
  {
    title: "Neural Networks",
    description: "Designing and optimizing custom neural network architectures for specialized tasks.",
  },
  {
    title: "MLOps",
    description: "Streamlining the machine learning lifecycle from development to deployment and monitoring.",
  },
  {
    title: "AI Consulting",
    description: "Providing expert strategic guidance to help businesses leverage AI for competitive advantage.",
  },
  {
    title: "Research & Development",
    description: "Pushing the boundaries of AI through innovative research and experimentation with novel techniques.",
  },
  {
    title: "Custom AI Solutions",
    description: "Building bespoke AI systems from the ground up to address unique business challenges.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background py-[120px]">
      <div className="container mx-auto px-6">
        <h2 className="mb-[80px] text-center font-display text-4xl font-bold uppercase tracking-[0.05em] text-foreground">
          SERVICES
        </h2>

        <div className="mx-auto flex max-w-[1008px] flex-col gap-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-8 border-b border-border pb-12 last:border-b-0 last:pb-0 md:flex-row md:justify-between"
            >
              <div className="flex-shrink-0 md:w-[320px]">
                <div className="flex flex-col gap-4">
                  <p className="font-display text-5xl font-bold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-4xl font-medium text-foreground">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex-1 md:max-w-[480px] md:pt-[74px]">
                <p className="font-body text-lg leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;