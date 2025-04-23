
import React, { useState } from "react";
import EducationCard from "./EducationCard";
import { educationData } from "../data/portfolioData";

const EducationSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="education" className="section fade-section !pt-6 md:!pt-10">
      <h2 className="section-title text-left max-w-5xl mx-auto w-full pl-4">Education</h2>
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
                        setActive={(state) => {
                          setActiveIdx(state ? idx : null);
                        }}
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
                        setActive={(state) => {
                          setActiveIdx(state ? idx : null);
                        }}
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
