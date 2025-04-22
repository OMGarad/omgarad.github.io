
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
    <section id="education" className="section fade-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline-container pb-8">
        {educationData.map((edu, idx) => (
          <div
            key={edu.institution}
            className="mb-10 relative animate-fade-in-right"
            onMouseEnter={() => setActiveIdx(idx)}
            onMouseLeave={() => setActiveIdx(null)}
            onFocus={() => setActiveIdx(idx)}
            onBlur={() => setActiveIdx(null)}
            tabIndex={0}
          >
            <EducationCard
              edu={edu}
              isActive={activeIdx === idx}
              onHover={() => setActiveIdx(idx)}
              onBlur={() => setActiveIdx(null)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
