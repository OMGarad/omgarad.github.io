
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

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
  onHover: () => void;
  onBlur: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  exp,
  isActive,
  setActive,
  onHover,
  onBlur,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // Handle hover/focus for timeline dot coloring
  function handleMouseEnter() {
    setIsHovered(true);
    onHover();
  }
  function handleMouseLeave() {
    setIsHovered(false);
    onBlur();
  }
  // Handle click to flip/expand
  function handleClick() {
    setActive(!isActive);
  }

  // Animate expand/flip: 'expanded' when hovered OR clicked
  const expanded = isActive || isHovered;

  return (
    <div
      className={cn(
        "relative flex transition-all duration-500 ease-in-out",
        expanded
          ? "z-10"
          : "z-0"
      )}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      onClick={handleClick}
      aria-expanded={expanded}
    >
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute -left-7 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 shadow transition-colors duration-300",
          expanded
            ? "bg-accent-foreground border-primary"
            : "bg-background border-primary"
        )}
        aria-hidden="true"
      ></div>
      {/* Card */}
      <div
        className={cn(
          "flex w-full bg-card dark:bg-card rounded-xl border shadow-lg cursor-pointer group overflow-hidden min-h-[180px] md:min-h-[210px] transition-all duration-500 ease-in-out",
          expanded ? "md:w-[680px] w-full" : "md:w-[520px] w-full"
        )}
        style={{ minHeight: 160 }}
      >
        {/* Company Image (left) */}
        <div
          className={cn(
            "flex-shrink-0 flex items-center justify-center transition-all",
            expanded
              ? "w-1/3 md:w-1/3"
              : "w-1/4 md:w-[140px]"
          )}
        >
          <img
            src={exp.companyLogo}
            alt={exp.company}
            className={cn(
              "object-contain h-full w-full bg-white/40 dark:bg-black/30 rounded-xl transition-all duration-500",
              expanded
                ? "scale-105"
                : "scale-100"
            )}
            style={{ maxHeight: 160, minHeight: 90 }}
            draggable={false}
          />
        </div>

        {/* Flippable/Expandable Card Content */}
        <div
          className={cn(
            "flex-1 p-5 md:p-6 flex items-center transition-all duration-500",
            expanded ? "bg-muted/40" : ""
          )}
        >
          {/* Front Side */}
          {!expanded || !isActive ? (
            <div className="flex flex-col w-full h-full justify-center">
              <div>
                <div className="font-bold text-base md:text-2xl text-primary dark:text-white mb-1">
                  {exp.position}
                </div>
                <div className="font-semibold text-md md:text-lg text-muted-foreground mb-2">
                  {exp.company}
                </div>
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground flex flex-wrap gap-4">
                <span>
                  {exp.location}
                </span>
                <span>
                  {exp.period}
                </span>
              </div>
            </div>
          ) : (
            // Back/Expanded Side
            <div className="flex flex-col justify-center w-full h-full">
              <div className="text-sm md:text-base text-muted-foreground whitespace-pre-line">
                {exp.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
