
import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  sections: Array<{ id: string; label: string }>;
  handleDownloadCV: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  toggleMenu,
  closeMenu,
  sections,
  handleDownloadCV,
}) => {
  return (
    <>
      <button
        className="p-2 text-primary dark:text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed inset-0 bg-background dark:bg-background pt-20 z-30 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-lg font-medium text-primary dark:text-white hover:text-primary/80 dark:hover:text-white/80"
              onClick={closeMenu}
            >
              {section.label}
            </a>
          ))}
          <button 
            onClick={() => {
              handleDownloadCV();
              closeMenu();
            }} 
            className="text-lg font-medium text-primary dark:text-white hover:text-primary/80 dark:hover:text-white/80"
          >
            CV
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
