
import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="card glowing p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary dark:bg-secondary/20 rounded-full group-hover:bg-primary/10 dark:group-hover:bg-white/10 transition-colors">
                  <Mail size={20} className="text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>omgarad [at] gmail [dot] com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary dark:bg-secondary/20 rounded-full group-hover:bg-primary/10 dark:group-hover:bg-white/10 transition-colors">
                  <MapPin size={20} className="text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Atlanta, GA</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary dark:bg-secondary/20 rounded-full group-hover:bg-primary/10 dark:group-hover:bg-white/10 transition-colors">
                  <Linkedin size={20} className="text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/omkargarad/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-primary dark:hover:text-white transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary dark:bg-secondary/20 rounded-full group-hover:bg-primary/10 dark:group-hover:bg-white/10 transition-colors">
                  <Github size={20} className="text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a 
                    href="https://github.com/OMGarad" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-primary dark:hover:text-white transition-colors"
                  >
                    View my repositories
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="mailto:omgarad@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground hover:bg-background/80 dark:bg-background dark:text-foreground dark:hover:bg-background/90 transition-colors border border-primary/20 dark:border-white/10"
            >
              <Mail size={18} />
              <span>Send me a message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
