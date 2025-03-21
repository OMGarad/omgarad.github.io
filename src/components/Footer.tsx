
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Omkar Garad. All rights reserved.
        </p>
        
        <div className="mt-4 md:mt-0">
          <ul className="flex items-center space-x-6">
            <li>
              <a 
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary dark:hover:text-white transition-colors"
              >
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
