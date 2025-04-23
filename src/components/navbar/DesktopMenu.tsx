
import React from "react";

interface DesktopMenuProps {
  sections: Array<{ id: string; label: string }>;
  handleDownloadCV: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ sections, handleDownloadCV }) => {
  return (
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
    </div>
  );
};

export default DesktopMenu;
