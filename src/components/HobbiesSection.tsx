
import React from "react";
import { Camera, Music, Book, Globe, Code } from "lucide-react";

interface Hobby {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const hobbyData: Hobby[] = [
  {
    icon: Camera,
    title: "Photography",
    description: "I enjoy capturing moments with my camera, especially landscape and street photography."
  },
  {
    icon: Music,
    title: "Music",
    description: "I love exploring different genres of music and attending live concerts when possible."
  },
  {
    icon: Book,
    title: "Reading",
    description: "I'm an avid reader, particularly interested in science fiction and technical books."
  },
  {
    icon: Globe,
    title: "Traveling",
    description: "Exploring new places and experiencing different cultures is something I'm passionate about."
  },
  {
    icon: Code,
    title: "Side Projects",
    description: "I enjoy working on personal coding projects to learn new technologies and frameworks."
  }
];

const HobbiesSection: React.FC = () => {
  return (
    <section id="hobbies" className="section">
      <h2 className="section-title">Hobbies & Interests</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbyData.map((hobby, index) => (
          <div key={index} className="card hover:-translate-y-1 transition-transform animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-secondary dark:bg-secondary/20 rounded-full mb-4">
                <hobby.icon size={24} className="text-primary dark:text-white" />
              </div>
              <h3 className="text-lg font-medium mb-2">{hobby.title}</h3>
              <p className="text-sm text-muted-foreground">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbiesSection;
