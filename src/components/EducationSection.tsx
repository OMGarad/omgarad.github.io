
import React, { useState } from "react";
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
    teaching: [
      "NCCY 5010: Data Analytics and Modeling (Fall 2023)",
      "TECH 5110: Early Adopters (Spring 2024)",
    ],
    courses: [
      {
        term: "Spring 2024 (ongoing)",
        courses: [
          "CS 4670: Computer Vision",
          "CS 5304: Data Science in the Wild",
          "INFO 5375: Machine Learning for Health",
        ],
      },
      {
        term: "Fall 2023",
        courses: [
          "CS 5781: Machine Learning Engineering",
          "INFO 5600: AI for Healthcare",
          "CS 5112: Algorithms and Data Structures for Applications",
          "CS 5682: HCI and Design",
        ],
      },
    ],
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
    teaching: [
      "CS F320: Foundations of Data Science, CSIS Department (Spring 2023)",
      "MEL G642: VLSI Architectures (Masters Level Course), EE Department (Spring 2022)",
      "CS F214: Logic in Computer Science, CSIS Department (Fall 2021)",
    ],
    courses: [
      {
        term: "Spring 2023",
        courses: ["Applied Statistical Methods"],
      },
      {
        term: "Spring 2022",
        courses: [
          "BITS F464: Machine Learning",
          "CS F320: Foundations of Data Science",
          "CS F303: Computer Networks",
          "CS F363: Compiler Construction",
          "CS F364: Design and Analysis of Algorithms",
        ],
      },
      {
        term: "Fall 2021",
        courses: [
          "CS F429: Natural Language Processing",
          "CS F407: Artificial Intelligence",
          "CS F372: Operating Systems",
          "CS F351: Theory of Computation",
          "CS F342: Computer Architecture",
          "CS F301: Principles of Programming Languages",
        ],
      },
      {
        term: "Spring 2021",
        courses: [
          "CS F211: Data Structures and Algorithms",
          "CS F212: Database Systems",
          "CS F241: Microprocessors and Interfacing",
        ],
      },
      {
        term: "Fall 2020",
        courses: [
          "CS F213: Object Oriented Programming",
          "CS F214: Logic in Computer Science",
          "CS F222: Discrete Structures for Computer Science",
        ],
      },
    ],
  },
];

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
