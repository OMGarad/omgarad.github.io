
import React from "react";
import { Code, Database, Server } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C++", "C", "Java", "SQL"]
  },
  {
    title: "Tools and Frameworks",
    icon: Server,
    skills: [
      "PyTorch", "TensorFlow", "Pandas", "Azure Databricks", 
      "AWS", "GCP", "Spark", "Kafka", "Hadoop", 
      "Docker", "Git", "MLOps (MLflow, CI/CD)", "Tableau", "Agile Methodologies"
    ]
  }
];

const TechnicalSkills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="card">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Database size={20} className="text-primary/70 dark:text-white/70" />
          Technical Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-2 mb-3">
                <category.icon size={18} className="text-primary/70 dark:text-white/70" />
                <h4 className="font-medium">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-secondary dark:bg-secondary/20 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
