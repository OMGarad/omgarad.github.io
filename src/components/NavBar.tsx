import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { experienceData, educationData } from "../data/portfolioData";

interface NavBarProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume-omkar-garad.pdf";
    link.download = "Omkar-Garad-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sections = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "hobbies", label: "Hobbies" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-lg font-semibold text-primary dark:text-white"
        >
          Omkar Garad
        </a>

        <div className="hidden md:flex items-center space-x-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="nav-item"
            >
              {section.label}
            </a>
          ))}
          <button 
            onClick={handleDownloadCV} 
            className="nav-item"
          >
            CV
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 ml-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors dark:bg-white/5 dark:hover:bg-white/10"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <Moon size={18} className="text-primary" />
            ) : (
              <Sun size={18} className="text-white" />
            )}
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 ml-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors dark:bg-white/5 dark:hover:bg-white/10"
            aria-label="Search"
          >
            <Search size={18} className="text-primary dark:text-white" />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors dark:bg-white/5 dark:hover:bg-white/10"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <Moon size={18} className="text-primary" />
            ) : (
              <Sun size={18} className="text-white" />
            )}
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors dark:bg-white/5 dark:hover:bg-white/10"
            aria-label="Search"
          >
            <Search size={18} className="text-primary dark:text-white" />
          </button>
          <button
            className="p-2 text-primary dark:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

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

      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Sections">
            {sections.map((section) => (
              <CommandItem
                key={section.id}
                onSelect={() => {
                  window.location.href = `#${section.id}`;
                  setIsSearchOpen(false);
                }}
              >
                {section.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Experience">
            {experienceData.map((exp) => (
              <CommandItem
                key={exp.company}
                onSelect={() => {
                  window.location.href = "#experience";
                  setIsSearchOpen(false);
                }}
              >
                {exp.position} at {exp.company}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Education">
            {educationData.map((edu) => (
              <CommandItem
                key={edu.institution}
                onSelect={() => {
                  window.location.href = "#education";
                  setIsSearchOpen(false);
                }}
              >
                {edu.degree} at {edu.institution}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
};

export default NavBar;
