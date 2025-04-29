import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Variants for animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20 dark:opacity-10"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundSize: '400% 400%',
            backgroundImage: 'radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center md:text-left md:max-w-3xl">
          <motion.div
            custom={0}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-3">
              Hello, I'm
            </h3>
          </motion.div>
          
          <motion.div
            custom={1}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Anubhav Prasad
            </h1>
          </motion.div>
          
          <motion.div
            custom={2}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Software Developer & Ethical Hacker
            </h2>
          </motion.div>
          
          <motion.div
            custom={3}
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
              I build exceptional and accessible digital experiences for the web.
              Focused on creating products that are inclusive, performant, and delightful.
            </p>
          </motion.div>
          
          <motion.div
            custom={4}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors w-full sm:w-auto text-center"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="flex justify-center md:justify-start mt-10 space-x-6"
          >
            <a 
              href="https://github.com/anu-0035" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/anubhav-prasad-279bbb251/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:your.anuprasad1058@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: 'loop' 
        }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default HeroSection;