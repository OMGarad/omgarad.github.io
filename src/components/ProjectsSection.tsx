
import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface Project {
  title: string;
  period: string;
  description: string;
  image: string;
  githubUrl: string; // Added GitHub URL property
}

const projectsData: Project[] = [
  {
    title: "Personalized Nutritional Deficiency and Dietary Advisory System",
    period: "Aug 2024 - Dec 2024",
    description:
      "Integrated a fine-tuned T5 Transformer model with a RAG pipeline for dietary recommendations. Developed an interactive app for real-time queries and personalized advice.",    
    image: "/lovable-uploads/rag.png",
    githubUrl: "https://github.com/OMGarad/dietary-advisor",
  },
  {
    title: "MiniTorch",
    period: "Aug 2023 - Dec 2023",
    description:
      "Developed a deep learning framework supporting custom tensor operations and efficient computation for educational and experimental use.",
    image: "/lovable-uploads/minitorch.png",
    githubUrl: "https://minitorch.github.io/",
  },
  {
    title: "Keyphrase Extraction from Hindi Texts",
    period: "Dec 2021 - May 2022",
    description:
      "Applied multilingual knowledge distillation to align sentence embeddings. Built keyword extraction using transformers and cosine similarity.",
    image: "/lovable-uploads/keyphrase.png",
    githubUrl: "https://github.com/OMGarad/Keyword-Extraction-from-Hindi-Text",
  },
  {
    title: "Connect 4 Game",
    period: "October 2021",
    description:
      "Designed and implemented Connect 4 with Monte Carlo Tree Search, plus Q-learning agents for AI-vs-AI battle and optimized strategies.",
    image: "/lovable-uploads/connect4.jpg",
    githubUrl: "https://github.com/OMGarad/Connect-4-Game",
  },
  {
    title: "3-CNF Satisfiability",
    period: "September 2021",
    description:
      "Optimized Genetic Algorithms to solve variable-clause SAT formulas. Achieved high performance by tuning for test coverage and fitness.",
    image: "/lovable-uploads/3-cnf.png",
    githubUrl: "https://github.com/OMGarad/3-CNF-Satisfiability",
  },
];

const ProjectsSection: React.FC = () => {
  // Function to handle card click and redirect to GitHub
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="card hover:shadow-lg transition-all duration-300 animate-fade-in-up hover:-translate-y-2 hover:animate-pulse-glow cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleCardClick(project.githubUrl)}
            title={`View ${project.title} on GitHub`}
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