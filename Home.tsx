import React from 'react';
import { motion } from 'framer-motion';

// Sections
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import CoCurricularsSection from '../components/sections/CoCurricularsSection';
import ContactSection from '../components/sections/ContactSection';
import VideoSection from '../components/sections/VideoSection';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <CoCurricularsSection />
      <VideoSection />
      <ContactSection />
    </motion.main>
  );
};

export default Home;