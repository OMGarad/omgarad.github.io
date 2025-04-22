
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import HobbiesSection from "../components/HobbiesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("fade-out");
          } else {
            // Only fade out elements that have already faded in
            if (entry.target.classList.contains("fade-in")) {
              entry.target.classList.add("fade-out");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    // Target all sections
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
      // Set initial state
      section.classList.add("opacity-0");
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Layout>
      <div className="pt-20 w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <HobbiesSection />
        <ContactSection />
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
