
import React from "react";
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
  return (
    <CommandDialog open={isOpen} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search..." />
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
