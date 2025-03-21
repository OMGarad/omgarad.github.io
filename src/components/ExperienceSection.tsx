
import React from "react";
import { Briefcase, Building, Calendar, MousePointerClick } from "lucide-react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "Honeywell",
    position: "AI/ML Intern",
    period: "May 2024 - Aug 2024",
    responsibilities: [
      "Trained multiclass classification models on time-series electrical data from power sockets to identify connected devices",
      "Engineered scalable data pipeline in Azure Databricks, incorporating lagged features to generate multiple Delta Live Tables",
      "Identified the optimal time window for the models to have maximum prediction certainty, achieving average macro-F1 scores of DNN: 89%, LSTM: 95%, xLSTM: 97%, 1-D CNN: 90%, XGBoost: 87%, Random Forest: 83%",
      "Utilized MLflow to track model artifacts, manage experiments, and ensure reproducibility across model versions",
      "Collaborated with the Connected Power team to achieve a 35% increase in smart building energy savings"
    ]
  },
  {
    company: "UGent LT3",
    position: "NLP Research Intern",
    period: "Aug 2022 - Jan 2023",
    responsibilities: [
      "Research group at Ghent University that conducts fundamental research on different aspects of Natural Language Processing",
      "Developed a joint-learning system for complex and short-context multilingual named entity recognition (NER)",
      "Fine-tuned multiple language-specific XLM-RoBERTa models, a transformer-based LLM, to detect the domain of named entities after detecting the span, and deployed domain-based XGBoost models to identify fine-grained tags",
      "Obtained average macro-F1 scores for English: 80.3%, Hindi: 76.3%, Farsi: 73%, Bangla: 71.6%",
      "Created custom data preprocessing scripts to handle large-scale text datasets in the above languages effectively"
    ]
  },
  {
    company: "IBM",
    position: "Machine Learning Intern",
    period: "May 2022 - Aug 2022",
    responsibilities: [
      "Built a scalable machine learning pipeline as sole ML intern in cross-functional team: GSI Engagement Efficacy Prediction",
      "Developed and presented the final product as a proof of concept to demonstrate feasibility and gain stakeholder buy-in",
      "Trained an XGBoost classification model to predict the likelihood of business opportunities to generate revenue, achieving an F1 score of 86%, and integrated SHAP for explainability"
    ]
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
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <div className="flex items-center gap-2 text-primary/80 dark:text-white/80">
                    <Building size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <MousePointerClick size={16} className="mt-1 flex-shrink-0 text-primary/70 dark:text-white/70" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
