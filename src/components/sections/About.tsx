import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Trophy, Languages } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Problem Solver',
      description: 'Solved 500+ Leetcode & 300+ GFG problems with efficient algorithms',
    },
    {
      icon: <Brain size={24} />,
      title: 'Technical Skills',
      description: 'Experienced in backend development, automation, RPA, and cybersecurity',
    },
    {
      icon: <Trophy size={24} />,
      title: 'Academic Excellence',
      description: 'Final-year B.Tech (CSE) student at LPU with CGPA 8.32',
    },
    {
      icon: <Languages size={24} />,
      title: 'Language Skills',
      description: 'German language proficiency (A2 certified)',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          About Me
        </motion.h2>

        <div className="max-w-3xl mx-auto mb-16">
          <motion.p 
            className="text-lg text-dark-600 dark:text-dark-100 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a Computer Science and Engineering student at Lovely Professional University with a passion 
            for building scalable backend systems, automating processes, and exploring cybersecurity. 
            I enjoy solving complex problems and creating efficient solutions that make a difference.
          </motion.p>
          <motion.p 
            className="text-lg text-dark-600 dark:text-dark-100"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My journey in tech began with a curiosity about how systems work, which led me to explore 
            automation, network security, and software development. I'm particularly interested in RPA bots, 
            backend architecture, and building secure, efficient systems. When not coding, I participate 
            in hackathons, coding contests, and CTFs to continuously improve my skills.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 flex items-start gap-4"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark-800 dark:text-white">{item.title}</h3>
                <p className="text-dark-600 dark:text-dark-100">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;