
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { MapPin } from "lucide-react";

const experienceData = [
  {
    company: "Honeywell",
    companyLogo: "/lovable-uploads/dc30d013-8bf1-48fb-bc9d-960e56c76dff.png",
    position: "AI/ML Intern",
    location: "Atlanta, GA",
    period: "May 2024 - Aug 2024",
    description:
      "I was an AI/ML Intern at Honeywell, a Fortune 100 company and global leader in building technologies and industrial automation. Based in their Atlanta location, in the heart of Tech Square, I was the sole intern in the Connected Power team, as part of Honeywell Building Technologies' (HBT) Building Automation division. My primary responsibility was to design and develop a comprehensive data and machine learning pipeline aimed at developing models for smart sockets to reduce building electrical consumption by 35%. I was also featured internationally on Honeywell's website for National Interns Day.",
  },
  {
    company: "UGent LT3",
    companyLogo: "/lovable-uploads/8bb54a9e-ad73-4808-adc4-7c2a9ee5648e.png",
    position: "NLP Research Intern",
    location: "Ghent, Belgium",
    period: "Aug 2022 - Jan 2023",
    description:
      "As part of my academic journey, I had the privilege of conducting my undergraduate thesis at the esteemed Ghent University as part of Language and Translation Technology (LT³). Founded in 2006, LT³ is a renowned research group within the Department of Translation, Interpreting and Communication, specializing in various facets of Natural Language Processing (NLP) through a corpus-based inductive approach. During my time with LT³, I designed and implemented a multilingual complex Named Entity Recognition (NER) system capable of identifying intricate and short-context named entities across four different languages under the supervision of Prof. Dr. Els Lefever.",
  },
  {
    company: "IBM",
    companyLogo: "/lovable-uploads/cb964b1f-6b1c-47d0-89ac-af891a0a3be9.png",
    position: "Machine Learning Intern",
    location: "Bangalore, India",
    period: "May 2022 - Aug 2022",
    description:
      "As part of their prestigious Extreme Blue program, I was selected to be a Summer 2022 Machine Learning Intern at IBM, a global technology leader and Fortune 100 company known for innovation and excellence in software and hardware solutions. Based out of the IBM Bangalore office, located in the heart of Bangalore's tech hub, I was the sole ML Intern on my project where I was tasked to develop the full ML pipeline to predict the efficacy of new business opportunities to generate revenue. My cross-functional team GSI Engagement Efficacy Prediction delivered the final product as a proof of concept.",
  },
];

const ExperienceSection: React.FC = () => {
  // Manage which card is "clicked open"
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  // For timeline dot highlight on hover
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  return (
    <section id="experience" className="section fade-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline-container pb-8">
        {experienceData.map((exp, idx) => (
          <div
            key={exp.company}
            className="mb-10 relative animate-fade-in-right"
          >
            <ExperienceCard
              exp={exp}
              isActive={activeIdx === idx}
              setActive={(state) => {
                setActiveIdx(state ? idx : null);
              }}
              onHover={() => setHoveredIdx(idx)}
              onBlur={() => setHoveredIdx(null)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
