
import React from "react";

interface Project {
  title: string;
  period: string;
  description: string;
  image: string;
}

// Using placeholder images for now
const projectsData: Project[] = [
  {
    title: "Personalized Nutritional Deficiency and Dietary Advisory System",
    period: "Aug 2024 - Dec 2024",
    description: "Integrated a fine-tuned T5 Transformer model with a RAG pipeline using FAISS for efficient query retrieval. Developed an interactive Streamlit web application enabling real-time user queries, document uploads, and personalized dietary recommendations using LangChain and AWS Bedrock's Titan embeddings.",
    image: "/placeholder.svg"
  },
  {
    title: "MiniTorch",
    period: "Aug 2023 - Dec 2023",
    description: "Developed a deep learning framework that uses efficient tensor operations to accelerate computation on CPUs and GPUs. Optimized code performance by parallelizing key functions such as map, zip, reduce, and matrix multiplication.",
    image: "/placeholder.svg"
  },
  {
    title: "Keyphrase Extraction from Hindi Texts",
    period: "Dec 2021 - May 2022",
    description: "Applied multilingual knowledge distillation to train a student XLM-RoBERTa transformer model to align English and Hindi sentence embeddings from a monolingual English teacher distillBERT transformer model. Extracted keywords with student model using cosine similarity between the document and N-gram word embeddings.",
    image: "/placeholder.svg"
  },
  {
    title: "Connect 4 Game",
    period: "October 2021",
    description: "Implemented two versions of the Monte Carlo Tree Search (MCTS) algorithm, one with 40 simulations and another with 200 to play against each other. Trained and implemented the Q-learning algorithm to win against MCTS (0-25 simulations) in the least number of moves.",
    image: "/placeholder.svg"
  },
  {
    title: "3-CNF Satisfiability",
    period: "September 2021",
    description: "Modified the Genetic Algorithm to optimize 3-CNF sentence satisfiability with 50 variables and a variable number of clauses [100-300 in increments of 20]. Obtained an average fitness function of 99.5% for 100 clauses and 96% for 300 clauses by fine-tuning parameters.",
    image: "/placeholder.svg"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="card hover:shadow-lg transition-all duration-200 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4 bg-secondary/50 dark:bg-secondary/20">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
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
