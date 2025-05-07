
import React from "react";

interface Project {
  title: string;
  period: string;
  description: string;
  image: string;
}

const projectsData: Project[] = [
  {
    title: "Personalized Nutritional Deficiency and Dietary Advisory System",
    period: "Aug 2024 - Dec 2024",
    description:
      "Integrated a fine-tuned T5 Transformer model with a RAG pipeline for dietary recommendations. Developed an interactive app for real-time queries and personalized advice.",    
    image: "/lovable-uploads/personal_dietician.png",
  },
  {
    title: "MiniTorch",
    period: "Aug 2023 - Dec 2023",
    description:
      "Developed a deep learning framework supporting custom tensor operations and efficient computation for educational and experimental use.",
    image: "/lovable-uploads/minitorch.png",
  },
  {
    title: "Keyphrase Extraction from Hindi Texts",
    period: "Dec 2021 - May 2022",
    description:
      "Applied multilingual knowledge distillation to align sentence embeddings. Built keyword extraction using transformers and cosine similarity.",
    image: "/lovable-uploads/keybert.png",
  },
  {
    title: "Connect 4 Game",
    period: "October 2021",
    description:
      "Designed and implemented Connect 4 with Monte Carlo Tree Search, plus Q-learning agents for AI-vs-AI battle and optimized strategies.",
    image: "/lovable-uploads/connect4.jpg",
  },
  {
    title: "3-CNF Satisfiability",
    period: "September 2021",
    description:
      "Optimized Genetic Algorithms to solve variable-clause SAT formulas. Achieved high performance by tuning for test coverage and fitness.",
    image: "/lovable-uploads/3cnf.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="card hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:-translate-y-2 hover:shadow-xl animate-pulse-glow"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 bg-secondary/50 dark:bg-secondary/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-xs text-muted-foreground mb-3">{project.period}</p>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
