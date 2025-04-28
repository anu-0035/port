import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'home', text: 'Home' },
  { id: 'about', text: 'About' },
  { id: 'skills', text: 'Skills' },
  { id: 'projects', text: 'Projects' },
  { id: 'certifications', text: 'Certifications' },
  { id: 'education', text: 'Education' },
  { id: 'video-cv', text: 'Video CV' },
  { id: 'contact', text: 'Contact' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/80 dark:bg-dark-800/80 backdrop-blur-md shadow-md py-2'
      : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="font-bold text-xl text-primary-600 dark:text-primary-400 cursor-pointer"
          >
            Anubhav<span className="text-accent-500">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link cursor-pointer"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/anu-0035" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/anubhav-prasad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-dark-600 dark:text-dark-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
        >
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link py-3 border-b border-gray-100 dark:border-dark-700 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;