
import React, { useState, useEffect } from "react";
import MobileMenu from "./navbar/MobileMenu";
import ThemeToggle from "./navbar/ThemeToggle";
import SearchButton from "./navbar/SearchButton";
import SearchDialog from "./navbar/SearchDialog";
import DesktopMenu from "./navbar/DesktopMenu";

interface NavBarProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

        <DesktopMenu sections={sections} handleDownloadCV={handleDownloadCV} />

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <SearchButton onClick={() => setIsSearchOpen(true)} />
          <MobileMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
            sections={sections}
            handleDownloadCV={handleDownloadCV}
          />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <SearchButton onClick={() => setIsSearchOpen(true)} />
        </div>

        <SearchDialog
          isOpen={isSearchOpen}
          onOpenChange={setIsSearchOpen}
          sections={sections}
        />
      </nav>
    </header>
  );
};

export default NavBar;
