
import React from "react";
import { Award, MapPin } from "lucide-react";

interface EducationItem {
  institution: string;
  logo: string;
  degree: string;
  location: string;
  period: string;
  highlights: string[];
  award?: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Cornell University (Cornell Tech)",
    logo: "/lovable-uploads/8da41661-ee31-4013-8b5b-6a7d63b92fac.png",
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
    logo: "/lovable-uploads/c2c4b292-8684-448a-8822-cee12dcb44f6.png",
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
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-primary/80 dark:text-white/80">{edu.degree}</p>
                  </div>
                  <div className="p-2 bg-white dark:bg-white/90 rounded-full">
                    <img src={edu.logo} alt={edu.institution} className="h-12 w-12 object-contain" />
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="text-muted-foreground">{edu.period}</div>
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
      </div>
    </section>
  );
};

export default EducationSection;
