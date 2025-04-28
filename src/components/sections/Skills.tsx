import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technicalSkills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'HTML/CSS', level: 75 },
    { name: 'MySQL', level: 85 },
    { name: 'MongoDB', level: 70 },
  ];

  const tools = [
    'Linux',
    'Git',
    'GitHub',
    'Automation Anywhere',
    'UI Path',
    'Wireshark',
    'Cisco Packet Tracer',
  ];

  const softSkills = [
    'Problem Solving',
    'Leadership',
    'Critical Thinking',
    'Time Management',
    'Adaptability',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-dark-700 dark:text-dark-100">{skill.name}</span>
                    <span className="text-primary-600 dark:text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary-500 dark:bg-primary-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span 
                    key={index}
                    className="bg-white dark:bg-dark-700 px-4 py-2 rounded-full shadow-sm text-dark-700 dark:text-dark-100 border border-gray-200 dark:border-dark-600"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white dark:bg-dark-700 p-4 rounded-lg shadow-sm border-l-4 border-accent-500 dark:border-accent-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <span className="font-medium text-dark-700 dark:text-dark-100">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;