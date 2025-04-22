
import React from "react";
import Layout from "../components/Layout";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import HobbiesSection from "../components/HobbiesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FadeSection from "../components/FadeSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="pt-4 md:pt-12 flex flex-col gap-2 w-full max-w-full">
        <FadeSection>
          <AboutSection />
        </FadeSection>
        <FadeSection>
          <ExperienceSection />
        </FadeSection>
        <FadeSection>
          <EducationSection />
        </FadeSection>
        <FadeSection>
          <ProjectsSection />
        </FadeSection>
        <FadeSection>
          <HobbiesSection />
        </FadeSection>
        <FadeSection>
          <ContactSection />
        </FadeSection>
        <FadeSection>
          <Footer />
        </FadeSection>
      </div>
    </Layout>
  );
};

export default Index;
