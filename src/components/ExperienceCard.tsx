
import React from "react";
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
  isHovered: boolean;
  setActive: (active: boolean) => void;
  onHover: () => void;
  onBlur: () => void;
  align: "left" | "right";
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  exp,
  isActive,
  isHovered,
  setActive,
  onHover,
  onBlur,
  align,
}) => {
  // Expanded if hovered or clicked (active)
  const expanded = isActive || isHovered;
  // Card flip/expand logic
  function handleClick() {
    setActive(!isActive);
  }

  // Timeline dot is highlighted if expanded
  return (
    <div
      className={cn(
        "relative flex items-stretch group w-full max-w-[470px] sm:max-w-[460px] md:max-w-[500px] xl:max-w-[600px] transition-all duration-500",
        align === "left" ? "justify-end" : "justify-start"
      )}
      tabIndex={0}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
      onFocus={onHover}
      onBlur={onBlur}
      onClick={handleClick}
      aria-expanded={expanded}
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
            expanded
              ? "bg-accent-foreground border-primary"
              : "bg-background border-primary"
          )}
        />
      </div>
      {/* Card */}
      <div
        className={cn(
          "relative transition-all duration-500 transform rounded-xl border bg-card dark:bg-card shadow-lg group overflow-hidden hover:shadow-xl cursor-pointer flex",
          expanded ? "w-[350px] md:w-[500px] xl:w-[600px] min-h-[210px]" : "w-[270px] md:w-[350px] xl:w-[390px] min-h-[170px]"
        )}
        style={{ minHeight: expanded ? 210 : 170 }}
      >
        {!expanded || !isActive ? (
          <div className="flex flex-row items-stretch w-full h-full">
            {/* Company image (almost full height and left side) */}
            <div className="flex-shrink-0 flex items-center justify-center bg-white/30 dark:bg-black/20 rounded-l-xl w-[90px] md:w-[130px] xl:w-[180px] min-h-[170px] md:min-h-[210px] overflow-hidden">
              <img
                src={exp.companyLogo}
                alt={exp.company}
                className="object-contain h-full w-full transition-all rounded-l-xl"
                draggable={false}
              />
            </div>
            {/* Info right */}
            <div className="flex flex-col justify-center p-4 gap-2 w-full min-w-0">
              <div className="font-bold text-lg md:text-2xl xl:text-3xl text-primary dark:text-white truncate">
                {exp.position}
              </div>
              <div className="font-semibold text-base md:text-lg text-muted-foreground truncate">
                {exp.company}
              </div>
              <div className="flex gap-2 flex-wrap mt-2 text-xs md:text-sm text-muted-foreground">
                <span>{exp.location}</span>
                <span>{exp.period}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full p-6">
            <div className="text-sm md:text-base text-muted-foreground whitespace-pre-line">
              {exp.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
