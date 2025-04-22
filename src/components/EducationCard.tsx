
import React from "react";
import { Award, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationCardProps {
  edu: {
    institution: string;
    logo: string;
    degree: string;
    location: string;
    period: string;
    highlights: string[];
    award?: string;
  };
  isActive: boolean;
  onHover: () => void;
  onBlur: () => void;
}

const EducationCard: React.FC<EducationCardProps> = ({
  edu,
  isActive,
  onHover,
  onBlur,
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center bg-card dark:bg-card rounded-xl border shadow-lg min-h-[120px] w-full group transition-all duration-500 cursor-pointer",
        "hover:shadow-xl"
      )}
      tabIndex={0}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
      onFocus={onHover}
      onBlur={onBlur}
    >
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute -left-7 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 shadow transition-colors duration-300",
          isActive ? "bg-accent-foreground border-primary" : "bg-background border-primary"
        )}
        aria-hidden="true"
      ></div>
      {/* Logo left */}
      <div className="flex-shrink-0 h-[90px] md:h-[120px] w-[90px] md:w-[120px] flex items-center justify-center p-2">
        <img
          src={edu.logo}
          alt={edu.institution}
          className="h-full w-full object-contain bg-white/40 dark:bg-black/30 rounded-xl"
          draggable={false}
        />
      </div>
      {/* Center text */}
      <div className="flex-1 pl-4 pr-2 py-2 flex flex-col justify-center">
        <div className="font-semibold text-lg md:text-2xl text-primary dark:text-white mb-1">
          {edu.institution}
        </div>
        <div className="font-medium text-base md:text-lg text-muted-foreground mb-2">
          {edu.degree}
        </div>
        <ul className="list-disc list-inside text-xs md:text-sm space-y-1 text-muted-foreground">
          {edu.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        {edu.award && (
          <div className="mt-2 flex items-center gap-2 text-xs md:text-sm text-primary dark:text-white/80">
            <Award size={14} />
            <span>{edu.award}</span>
          </div>
        )}
      </div>
      {/* Location/dates right */}
      <div className="flex flex-col items-end justify-center pr-4 min-w-[100px] text-xs md:text-sm text-muted-foreground">
        <div className="flex items-center gap-1 mb-1">
          <MapPin size={12} />
          <span>{edu.location}</span>
        </div>
        <div>{edu.period}</div>
      </div>
    </div>
  );
};

export default EducationCard;
