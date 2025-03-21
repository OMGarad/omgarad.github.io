
import React from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  highlights: string[];
  award?: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Cornell University (Cornell Tech)",
    degree: "MS in Information Systems",
    location: "New York, NY",
    period: "August 2023 - May 2025",
    highlights: [
      "Concentration in Health Tech",
      "GPA: 3.76"
    ],
    award: "William & Barbara Dahl Master's Fellow, Merit Scholar"
  },
  {
    institution: "BITS Pilani",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Goa, India",
    period: "August 2019 - May 2023",
    highlights: [
      "Minor in Data Science",
      "CGPA: 8.52/10"
    ],
    award: "Merit Scholar"
  }
];

const relevantCourses = [
  "Deep Learning", "Computer Vision", "Machine Learning", "Artificial Intelligence", 
  "Foundations of Data Science", "Natural Language Processing", "Applied Statistical Methods", 
  "Data Structures & Algorithms", "Database Systems"
];

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

      <div className="timeline-container pb-8">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-10 relative animate-fade-in-right">
            <div className={index === 0 ? "timeline-dot-active" : "timeline-dot"}></div>
            <div className="card mb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{edu.institution}</h3>
                  <p className="text-primary/80 dark:text-white/80">{edu.degree}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <span>{edu.location}</span>
                  </div>
                  <div>{edu.period}</div>
                </div>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                {edu.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
              {edu.award && (
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Award size={16} className="text-primary/70 dark:text-white/70" />
                  <span className="font-medium">{edu.award}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="relative animate-fade-in-right">
          <div className="timeline-dot"></div>
          <div className="card">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen size={20} className="text-primary/70 dark:text-white/70" />
              <h3 className="text-lg font-semibold">Relevant Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {relevantCourses.map((course, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-secondary dark:bg-secondary/20 text-sm rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
