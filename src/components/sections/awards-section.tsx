import React from 'react';

// Define the type for an award item
type Award = {
  title: string;
  date: string;
  description: string;
};

// Custom content for Mayank's AI/ML journey as per instructions
const awardsData: Award[] = [
  {
    title: "Director's Merit Award",
    date: 'May 2024',
    description:
      'Awarded at IIT Jodhpur for outstanding academic performance, achieving a CGPA of 9.5+ in the B.Tech program specializing in Artificial Intelligence and Data Science.',
  },
  {
    title: "Kaggle 'Tabular Playground' Winner",
    date: 'March 2023',
    description:
      'Achieved 1st place in the Kaggle Tabular Playground Series, developing a novel gradient boosting model that outperformed over 2,000 international competitors.',
  },
  {
    title: 'Best B.Tech Project in AI',
    date: 'April 2024',
    description:
      "Recognized for the final year project on 'Real-time Emotion Detection using Convolutional Neural Networks', praised for its high accuracy and practical applications.",
  },
  {
    title: 'Deep Learning Specialization',
    date: 'December 2022',
    description:
      'Completed the comprehensive 5-course specialization by DeepLearning.AI, mastering foundations of deep learning, CNNs, RNNs, and hyperparameter tuning.',
  },
  {
    title: 'ICPC Regional Finalist',
    date: 'November 2022',
    description:
      'Qualified and competed in the ACM-ICPC Asia West Regional Finals, demonstrating exceptional problem-solving and algorithmic skills.',
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="bg-background text-foreground py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl font-bold uppercase tracking-wider">
              AWARDS
            </h2>
          </div>
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              {awardsData.map((award, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 py-10 border-b border-border first:pt-0 last:pb-0 last:border-b-0"
                >
                  <div className="md:col-span-1">
                    <h3 className="font-display text-2xl font-medium">
                      {award.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      {award.date}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-muted">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;