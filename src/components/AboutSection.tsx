
import React from "react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const AboutSection: React.FC = () => {
  const profileImageUrl = "lovable-uploads/profile_picture.jpeg";

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume-omkar-garad.pdf";
    link.download = "Omkar-Garad-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="section">
      <div className="flex flex-col md:flex-row md:items-center gap-12">
        <div className="md:w-1/3 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-60 h-60 overflow-hidden rounded-full border-2 border-primary/10 dark:border-white/10 shadow-xl glowing">
              <img
                src={profileImageUrl}
                alt="Omkar Garad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            <a 
              href="https://www.linkedin.com/in/omkargarad/" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-secondary dark:bg-secondary/20 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md hover:ring-2 hover:ring-primary dark:hover:ring-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-primary dark:text-white" />
            </a>
            <a 
              href="mailto:omgarad@gmail.com" 
              className="p-3 bg-secondary dark:bg-secondary/20 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md hover:ring-2 hover:ring-primary dark:hover:ring-white"
              aria-label="Email"
            >
              <Mail size={24} className="text-primary dark:text-white" />
            </a>
            <a 
              href="https://github.com/OMGarad" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-secondary dark:bg-secondary/20 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md hover:ring-2 hover:ring-primary dark:hover:ring-white"
              aria-label="GitHub"
            >
              <Github size={24} className="text-primary dark:text-white" />
            </a>
            <button
              onClick={handleDownloadCV}
              className="p-3 bg-secondary dark:bg-secondary/20 rounded-full hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-md hover:ring-2 hover:ring-primary dark:hover:ring-white"
              aria-label="Download CV"
            >
              <FileText size={24} className="text-primary dark:text-white" />
            </button>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="mb-6">
            <div className="h-12 overflow-hidden">
              <h1 className="typing-animation text-3xl md:text-4xl font-bold">
                Hi, my name is Omkar Garad! 👋
              </h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            I'm an AI enthusiast currently pursuing my masters at Cornell. 
            With a background in Computer Science and Data Science, I'm passionate about applying machine learning techniques to 
            solve complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
