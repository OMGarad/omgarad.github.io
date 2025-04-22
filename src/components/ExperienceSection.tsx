
import React, { useState } from "react";
import { MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  companyLogo: string;
  position: string;
  location: string;
  period: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

const experienceData: ExperienceItem[] = [
  {
    company: "Honeywell",
    companyLogo: "/lovable-uploads/dc30d013-8bf1-48fb-bc9d-960e56c76dff.png",
    position: "AI/ML Intern",
    location: "Atlanta, GA",
    period: "May 2024 - Aug 2024",
    description: "I was an AI/ML Intern at Honeywell, a Fortune 100 company and global leader in building technologies and industrial automation. Based in their Atlanta location, in the heart of Tech Square, I was the sole intern in the Connected Power team, as part of Honeywell Building Technologies' (HBT) Building Automation division. My primary responsibility was to design and develop a comprehensive data and machine learning pipeline aimed at developing models for smart sockets to reduce building electrical consumption by 35%. I was also featured internationally on Honeywell's website for National Interns Day.",
    link: {
      text: "Check out the post here",
      url: "https://www.honeywell.com/us/en/news/2024/07/interns-get-inspired-by-automation-the-future-of-aviation-and-energy-transition?utm_source=linkedin-or&utm_medium=social&utm_campaign=24-corp-ww-always_on&utm_term=intern-day&utm_content=jul-no-cr"
    }
  },
  {
    company: "UGent LT3",
    companyLogo: "/lovable-uploads/8bb54a9e-ad73-4808-adc4-7c2a9ee5648e.png",
    position: "NLP Research Intern",
    location: "Ghent, Belgium",
    period: "Aug 2022 - Jan 2023",
    description: "As part of my academic journey, I had the privilege of conducting my undergraduate thesis at the esteemed Ghent University as part of Language and Translation Technology (LT³). Founded in 2006, LT³ is a renowned research group within the Department of Translation, Interpreting and Communication, specializing in various facets of Natural Language Processing (NLP) through a corpus-based inductive approach. During my time with LT³, I designed and implemented a multilingual complex Named Entity Recognition (NER) system capable of identifying intricate and short-context named entities across four different languages under the supervision of Prof. Dr. Els Lefever."
  },
  {
    company: "IBM",
    companyLogo: "/lovable-uploads/cb964b1f-6b1c-47d0-89ac-af891a0a3be9.png",
    position: "Machine Learning Intern",
    location: "Bangalore, India",
    period: "May 2022 - Aug 2022",
    description: "As part of their prestigious Extreme Blue program, I was selected to be a Summer 2022 Machine Learning Intern at IBM, a global technology leader and Fortune 100 company known for innovation and excellence in software and hardware solutions. Based out of the IBM Bangalore office, located in the heart of Bangalore's tech hub, I was the sole ML Intern on my project where I was tasked to develop the full ML pipeline to predict the efficacy of new business opportunities to generate revenue. My cross-functional team GSI Engagement Efficacy Prediction delivered the final product as a proof of concept."
  }
];

const ExperienceSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleCardHover = (index: number, isHovering: boolean) => {
    // Only apply hover effect if the card isn't already flipped from clicking
    if (!flippedCards[index]) {
      const card = document.getElementById(`exp-card-${index}`);
      if (card) {
        if (isHovering) {
          card.classList.add('is-flipped');
        } else {
          card.classList.remove('is-flipped');
        }
      }
    }
  };

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline-container">
        {experienceData.map((exp, index) => (
          <div 
            key={index} 
            className={`mb-10 relative animate-fade-in-right`}
            onMouseEnter={() => handleCardHover(index, true)}
            onMouseLeave={() => handleCardHover(index, false)}
          >
            <div 
              className={`absolute -left-[9px] h-4 w-4 rounded-full bg-background border-2 border-primary shadow-sm transition-colors duration-300 ${
                flippedCards[index] ? "bg-accent-foreground" : "hover:bg-accent-foreground"
              }`}
            ></div>
            
            <div 
              id={`exp-card-${index}`}
              className={`card-container ${flippedCards[index] ? 'is-flipped' : ''}`}
              onClick={() => handleCardFlip(index)}
            >
              {/* Front of card */}
              <div className="card-face card-front">
                <div className="flex h-full">
                  <div className="w-1/3 flex items-center justify-center p-2 bg-white dark:bg-white/10 rounded-l-xl">
                    <img 
                      src={exp.companyLogo} 
                      alt={exp.company} 
                      className="w-full h-auto max-h-32 object-contain" 
                    />
                  </div>
                  
                  <div className="w-2/3 flex flex-col justify-center p-4">
                    <div className="mb-1">
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="font-semibold text-primary/80 dark:text-white/80">{exp.company}</p>
                    </div>
                    
                    <div className="text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1 mb-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div>{exp.period}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="card-face card-back">
                <div className="p-6 h-full flex flex-col justify-center">
                  <p className="text-sm">{exp.description}</p>
                  {exp.link && (
                    <a 
                      href={exp.link.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm text-primary dark:text-blue-400 hover:underline mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {exp.link.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
