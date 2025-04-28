import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, FileText, Video, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-900 dark:to-dark-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-2">
              Hi, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-dark-800 dark:text-white">
              Anubhav Prasad 👋
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-xl md:text-2xl font-medium text-dark-600 dark:text-dark-100 h-16">
              <TypeAnimation
                sequence={[
                  'Automation Enthusiast',
                  1500,
                  'Backend Developer',
                  1500,
                  'Cybersecurity Explorer',
                  1500,
                  'Problem Solver',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent-600 dark:text-accent-400"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg max-w-2xl mb-10 text-dark-600 dark:text-dark-100"
          >
            Final-year Computer Science student at LPU with a passion for building 
            automated solutions, secure systems, and elegant backends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a href="/resume.pdf" className="btn btn-primary">
              <FileText size={18} /> Download Resume
            </a>
            <Link 
              to="video-cv"
              smooth={true}
              duration={800}
              className="btn btn-secondary"
            >
              <Video size={18} /> Watch Video CV
            </Link>
            <Link 
              to="contact"
              smooth={true}
              duration={800}
              className="btn btn-secondary"
            >
              <Mail size={18} /> Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <Link to="about" smooth={true} duration={800}>
          <ChevronDown size={32} className="text-primary-500 animate-bounce-slow" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;