
import React, { useState, useEffect } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { experienceData, educationData } from "@/data/portfolioData";

interface SearchDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  sections: Array<{ id: string; label: string }>;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ isOpen, onOpenChange, sections }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Remove highlights when dialog closes
  useEffect(() => {
    if (!isOpen) {
      removeHighlights();
      setSearchQuery("");
    }
  }, [isOpen]);

  const removeHighlights = () => {
    const highlights = document.querySelectorAll('mark');
    highlights.forEach(highlight => {
      const text = highlight.textContent || '';
      highlight.replaceWith(text);
    });
  };

  const highlightText = (text: string) => {
    removeHighlights();
    if (!text) return;

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          if (node.parentElement?.tagName === 'SCRIPT') return NodeFilter.FILTER_REJECT;
          if (node.parentElement?.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
          if (node.parentElement?.tagName === 'MARK') return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const regex = new RegExp(text, 'gi');
    let node;
    while (node = walker.nextNode()) {
      const matches = node.textContent?.match(regex);
      if (matches) {
        const span = document.createElement('mark');
        span.style.backgroundColor = 'yellow';
        span.style.color = 'black';
        const newText = node.textContent?.replace(regex, match => `<mark>${match}</mark>`);
        const temp = document.createElement('div');
        temp.innerHTML = newText || '';
        while (temp.firstChild) {
          node.parentNode?.insertBefore(temp.firstChild, node);
        }
        node.parentNode?.removeChild(node);
      }
    }
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    highlightText(value);
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="Search..." 
        value={searchQuery}
        onValueChange={handleSearch}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Sections">
          {sections.map((section) => (
            <CommandItem
              key={section.id}
              onSelect={() => {
                window.location.href = `#${section.id}`;
                onOpenChange(false);
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
                onOpenChange(false);
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
                onOpenChange(false);
              }}
            >
              {edu.degree} at {edu.institution}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
