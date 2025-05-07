
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  exp: {
    company: string;
    companyLogo: string;
    position: string;
    location: string;
    period: string;
    description: string;
  };
  isActive: boolean;
  setActive: (active: boolean) => void;
  align: "left" | "right";
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  exp,
  isActive,
  setActive,
  align,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const showDescription = isActive;

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={cn(
        "relative flex items-stretch group w-full max-w-[600px] transition-all duration-500",
        align === "left" ? "justify-end" : "justify-start"
      )}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline dot in the center */}
      <div
        className={cn(
          "absolute z-20 top-1/2 -translate-y-1/2",
          align === "left" ? "-right-8 sm:-right-[38px]" : "-left-8 sm:-left-[38px]"
        )}
      >
        <span
          className={cn(
            "h-5 w-5 rounded-full border-2 shadow transition-colors duration-300 block",
            showDescription
              ? "bg-accent-foreground border-primary"
              : "bg-background border-primary"
          )}
        />
      </div>

      <div
        className={cn(
          "relative w-full transition-all duration-500 transform rounded-xl border bg-card dark:bg-card shadow-lg hover:shadow-xl cursor-pointer overflow-hidden flex min-h-[220px]",
          isHovered && !isActive ? "hover:-translate-y-2 animate-pulse-glow" : "",
          isActive ? "z-10" : ""
        )}
      >
        {!showDescription ? (
          <div className="flex flex-row items-stretch w-full h-full">
            {/* Company image */}
            <div className="flex-shrink-0 flex items-center justify-center bg-white/30 dark:bg-black/20 rounded-l-xl w-[220px] overflow-hidden">
              <img
                src={exp.companyLogo}
                alt={exp.company}
                className="object-contain h-full w-full transition-all rounded-l-xl p-4"
                draggable={false}
              />
            </div>
            {/* Info right */}
            <div className="flex flex-col justify-center p-6 gap-2 w-full min-w-0">
              <div className="font-bold text-2xl xl:text-3xl text-primary dark:text-white">
                {exp.position}
              </div>
              <div className="font-semibold text-lg xl:text-xl text-muted-foreground">
                {exp.company}
              </div>
              <div className="flex flex-col gap-1 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
                <div>{exp.period}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full p-8">
            <div className="text-base text-muted-foreground whitespace-pre-line">
              {exp.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
