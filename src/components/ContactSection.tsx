
import React from "react";
import { Mail, Linkedin, Github, FileText, MapPin, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      
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
                  <a 
                    href="mailto:omg22@cornell.edu" 
                    className="hover:text-primary dark:hover:text-white transition-colors"
                  >
                    omg22@cornell.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary dark:bg-secondary/20 rounded-full group-hover:bg-primary/10 dark:group-hover:bg-white/10 transition-colors">
                  <Phone size={20} className="text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+13322738613" 
                    className="hover:text-primary dark:hover:text-white transition-colors"
                  >
                    (332) 273-8613
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary dark:bg-secondary/20 rounded-full group-hover:bg-primary/10 dark:group-hover:bg-white/10 transition-colors">
                  <MapPin size={20} className="text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>New York, NY</p>
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
                    linkedin.com/in/omkargarad
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
                    github.com/OMGarad
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-secondary dark:bg-secondary/20 rounded-full group-hover:bg-primary/10 dark:group-hover:bg-white/10 transition-colors">
                  <FileText size={20} className="text-primary dark:text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Portfolio</p>
                  <a 
                    href="https://sites.google.com/view/omkargarad" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-primary dark:hover:text-white transition-colors"
                  >
                    sites.google.com/view/omkargarad
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <a
              href="mailto:omg22@cornell.edu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-primary dark:hover:bg-white/90 transition-colors"
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
