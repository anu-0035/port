import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import VideoCV from './components/sections/VideoCV';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatePresence>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <VideoCV />
          <Contact />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;