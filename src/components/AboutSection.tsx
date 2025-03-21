
import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const AboutSection: React.FC = () => {
  const profileImageUrl = "/lovable-uploads/53008bc9-6171-403b-977e-1822e27342b8.png";

  return (
    <section id="about" className="section">
      <div className="flex flex-col md:flex-row md:items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="w-60 h-60 overflow-hidden rounded-full border-2 border-primary/10 dark:border-white/10 shadow-xl glowing">
              <img
                src={profileImageUrl}
                alt="Omkar Garad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="mb-6">
            <div className="h-12 overflow-hidden">
              <h1 className="typing-animation text-3xl md:text-4xl font-bold">
                Hi, my name is Omkar Garad!
              </h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            I'm a Data Science and AI enthusiast currently pursuing my MS in Information Systems at Cornell Tech. 
            With a background in Computer Science, I'm passionate about applying machine learning techniques to 
            solve complex problems in health tech and other domains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary/70 dark:text-white/70" />
              <span>New York, NY | US Citizen</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary/70 dark:text-white/70" />
              <span>332-273-8613</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary/70 dark:text-white/70" />
              <a href="mailto:omg22@cornell.edu" className="hover:text-primary dark:hover:text-white">
                omg22@cornell.edu
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github size={16} className="text-primary/70 dark:text-white/70" />
              <a 
                href="https://github.com/OMGarad" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary dark:hover:text-white"
              >
                github.com/OMGarad
              </a>
            </div>
            <div className="flex items-center gap-2 col-span-1 md:col-span-2">
              <Linkedin size={16} className="text-primary/70 dark:text-white/70" />
              <a 
                href="https://www.linkedin.com/in/omkargarad/" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-primary dark:hover:text-white"
              >
                linkedin.com/in/omkargarad
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
