
import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface Course {
  term: string;
  courses: string[];
}

interface EducationCardProps {
  edu: {
    institution: string;
    logo: string;
    degree: string;
    location: string;
    period: string;
    highlights: string[];
    award?: string;
    teaching?: string[];
    courses?: Course[];
  };
  isActive: boolean;
  setActive: (active: boolean) => void;
  align: "left" | "right";
}

const EducationCard: React.FC<EducationCardProps> = ({
  edu,
  isActive,
  setActive,
  align,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const showDetails = isActive;

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
            showDetails
              ? "bg-accent-foreground border-primary"
              : "bg-background border-primary"
          )}
        />
      </div>

      <div
        className={cn(
          "relative w-full transition-all duration-500 transform rounded-xl border bg-card dark:bg-card shadow-lg hover:shadow-xl cursor-pointer overflow-hidden flex",
          isHovered && !isActive ? "hover:-translate-y-2 animate-pulse-glow" : "",
          showDetails ? "min-h-[400px] z-10" : "min-h-[220px]"
        )}
      >
        {!showDetails ? (
          <div className="flex flex-row items-stretch w-full h-full">
            {/* Institution logo */}
            <div className="flex-shrink-0 flex items-center justify-center bg-white/30 dark:bg-black/20 rounded-l-xl w-[220px] overflow-hidden">
              <img
                src={edu.logo}
                alt={edu.institution}
                className="object-contain h-full w-full transition-all rounded-l-xl p-4"
                draggable={false}
              />
            </div>
            {/* Info right */}
            <div className="flex flex-col justify-center p-6 gap-2 w-full min-w-0">
              <div className="font-bold text-2xl xl:text-3xl text-primary dark:text-white">
                {edu.institution}
              </div>
              <div className="font-semibold text-lg xl:text-xl text-muted-foreground">
                {edu.degree}
              </div>
              <div className="flex flex-col gap-1 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
                <div>{edu.period}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full h-full p-8 overflow-y-auto">
            {/* Base information */}
            <div className="mb-6">
              <h3 className="font-bold text-xl text-primary dark:text-white mb-2">
                Highlights
              </h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              {edu.award && (
                <p className="mt-2 text-primary dark:text-white/80">{edu.award}</p>
              )}
            </div>

            {/* Teaching Experience */}
            {edu.teaching && edu.teaching.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-xl text-primary dark:text-white mb-2">
                  Teaching Experience
                </h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {edu.teaching.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Relevant Coursework */}
            {edu.courses && edu.courses.length > 0 && (
              <div>
                <h3 className="font-bold text-xl text-primary dark:text-white mb-2">
                  Relevant Coursework
                </h3>
                {edu.courses.map((term, idx) => (
                  <div key={idx} className="mb-4">
                    <h4 className="font-semibold text-lg text-primary dark:text-white/90 mb-2">
                      {term.term}
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {term.courses.map((course, courseIdx) => (
                        <li key={courseIdx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
