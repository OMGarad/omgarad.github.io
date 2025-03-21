
import React from "react";
import { Briefcase, Building, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  companyLogo: string;
  position: string;
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
    period: "Aug 2022 - Jan 2023",
    description: "As part of my academic journey, I had the privilege of conducting my undergraduate thesis at the esteemed Ghent University as part of Language and Translation Technology (LT³). Founded in 2006, LT³ is a renowned research group within the Department of Translation, Interpreting and Communication, specializing in various facets of Natural Language Processing (NLP) through a corpus-based inductive approach. During my time with LT³, I designed and implemented a multilingual complex Named Entity Recognition (NER) system capable of identifying intricate and short-context named entities across four different languages under the supervision of Prof. Dr. Els Lefever."
  },
  {
    company: "IBM",
    companyLogo: "/lovable-uploads/cb964b1f-6b1c-47d0-89ac-af891a0a3be9.png",
    position: "Machine Learning Intern",
    period: "May 2022 - Aug 2022",
    description: "As part of their prestigious Extreme Blue program, I was selected to be a Summer 2022 Machine Learning Intern at IBM, a global technology leader and Fortune 100 company known for innovation and excellence in software and hardware solutions. Based out of the IBM Bangalore office, located in the heart of Bangalore's tech hub, I was the sole ML Intern on my project where I was tasked to develop the full ML pipeline to predict the efficacy of new business opportunities to generate revenue. My cross-functional team GSI Engagement Efficacy Prediction delivered the final product as a proof of concept."
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="timeline-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="mb-10 relative animate-fade-in-right">
            <div className={index === 0 ? "timeline-dot-active" : "timeline-dot"}></div>
            <div className="card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-primary/80 dark:text-white/80">
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <img src={exp.companyLogo} alt={exp.company} className="h-16 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-sm mb-4">{exp.description}</p>
              {exp.link && (
                <a 
                  href={exp.link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm text-primary dark:text-blue-400 hover:underline"
                >
                  {exp.link.text}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
