
import React from "react";
import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import HobbiesSection from "../components/HobbiesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import TechnicalSkills from "../components/TechnicalSkills";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20">
        <AboutSection />
        <TechnicalSkills />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <HobbiesSection />
        <ContactSection />
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
