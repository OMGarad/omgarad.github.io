
import React from "react";
import EducationCard from "./EducationCard";

const educationData = [
  {
    institution: "Cornell University (Cornell Tech)",
    logo: "/lovable-uploads/8da41661-ee31-4013-8b5b-6a7d63b92fac.png",
    degree: "MS in Information Systems",
    location: "New York, NY",
    period: "August 2023 - May 2025",
    highlights: [
      "Concentration in Health Tech",
      "GPA: 3.76",
    ],
    award: "William & Barbara Dahl Master's Fellow, Merit Scholar",
  },
  {
    institution: "BITS Pilani",
    logo: "/lovable-uploads/c2c4b292-8684-448a-8822-cee12dcb44f6.png",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Goa, India",
    period: "August 2019 - May 2023",
    highlights: [
      "Minor in Data Science",
      "CGPA: 8.52/10",
    ],
    award: "Merit Scholar",
  },
];

const EducationSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);

  return (
    <section id="education" className="section fade-section !pt-6 md:!pt-10">
      <h2 className="section-title text-center">Education</h2>
      <div className="relative mx-auto max-w-5xl w-full flex flex-col">
        {/* Center vertical timeline */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/30 dark:bg-primary/20 z-0 transform -translate-x-1/2 pointer-events-none"></div>
        {/* Timeline Cards */}
        <div className="flex flex-col gap-4">
          {educationData.map((edu, idx) => {
            const side = idx % 2 === 0 ? "left" : "right";
            return (
              <div key={edu.institution} className="relative z-10 w-full flex">
                {side === "left" ? (
                  <>
                    <div className="flex-1 flex justify-end pr-4 sm:pr-8">
                      <EducationCard
                        edu={edu}
                        isActive={activeIdx === idx}
                        onHover={() => setActiveIdx(idx)}
                        onBlur={() => setActiveIdx(null)}
                        align="left"
                      />
                    </div>
                    <div className="w-0 sm:w-[28px] flex-shrink-0"></div>
                    <div className="flex-1" />
                  </>
                ) : (
                  <>
                    <div className="flex-1" />
                    <div className="w-0 sm:w-[28px] flex-shrink-0"></div>
                    <div className="flex-1 flex justify-start pl-4 sm:pl-8">
                      <EducationCard
                        edu={edu}
                        isActive={activeIdx === idx}
                        onHover={() => setActiveIdx(idx)}
                        onBlur={() => setActiveIdx(null)}
                        align="right"
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
