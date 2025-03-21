
import React from "react";
import { Code, FileCode, GitBranch, Star } from "lucide-react";

interface Project {
  title: string;
  period: string;
  technologies: string[];
  description: string[];
}

const projectsData: Project[] = [
  {
    title: "Personalized Nutritional Deficiency and Dietary Advisory System",
    period: "Aug 2024 - Dec 2024",
    technologies: ["T5 Transformer", "RAG", "FAISS", "Streamlit", "LangChain", "AWS Bedrock"],
    description: [
      "Integrated a fine-tuned T5 Transformer model with a RAG pipeline using FAISS for efficient query retrieval",
      "Developed an interactive Streamlit web application enabling real-time user queries, document uploads, and personalized dietary recommendations using LangChain and AWS Bedrock's Titan embeddings"
    ]
  },
  {
    title: "MiniTorch",
    period: "Aug 2023 - Dec 2023",
    technologies: ["Python", "Numba", "CUDA"],
    description: [
      "Developed a deep learning framework that uses efficient tensor operations to accelerate computation on CPUs and GPUs",
      "Optimized code performance by parallelizing key functions such as map, zip, reduce, and matrix multiplication"
    ]
  },
  {
    title: "Keyphrase Extraction from Hindi Texts",
    period: "Dec 2021 - May 2022",
    technologies: ["PyTorch", "Pandas", "Google Colab", "Matplotlib"],
    description: [
      "Applied multilingual knowledge distillation to train a student XLM-RoBERTa transformer model to align English and Hindi sentence embeddings from a monolingual English teacher distillBERT transformer model",
      "Extracted keywords with student model using cosine similarity between the document and N-gram word embeddings"
    ]
  },
  {
    title: "Connect 4 Game",
    period: "October 2021",
    technologies: ["Python", "Google Colab", "Matplotlib"],
    description: [
      "Implemented two versions of the Monte Carlo Tree Search (MCTS) algorithm, one with 40 simulations and another with 200 to play against each other",
      "Trained and implemented the Q-learning algorithm to win against MCTS (0-25 simulations) in the least number of moves"
    ]
  },
  {
    title: "3-CNF Satisfiability",
    period: "September 2021",
    technologies: ["Python", "Google Colab", "Matplotlib"],
    description: [
      "Modified the Genetic Algorithm to optimize 3-CNF sentence satisfiability with 50 variables and a variable number of clauses [100-300 in increments of 20]",
      "Obtained an average fitness function of 99.5% for 100 clauses and 96% for 300 clauses by fine-tuning parameters such as: increasing weights of the fitness function, lowering mutation rate and implementing elitism"
    ]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="timeline-container">
        {projectsData.map((project, index) => (
          <div key={index} className="mb-10 relative animate-fade-in-right">
            <div className={index === 0 ? "timeline-dot-active" : "timeline-dot"}></div>
            <div className="card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="text-sm text-muted-foreground">{project.period}</div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-secondary dark:bg-secondary/20 text-xs rounded-full flex items-center gap-1"
                  >
                    <Code size={12} />
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2">
                {project.description.map((desc, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <Star size={16} className="mt-1 flex-shrink-0 text-primary/70 dark:text-white/70" />
                    <span>{desc}</span>
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

export default ProjectsSection;
