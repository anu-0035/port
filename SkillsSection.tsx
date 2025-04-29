import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../../data/skills';

const SkillsSection = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set to stay current with the latest technologies and best practices.
          </p>
        </motion.div>

        {skillsData.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
            >
              {category.category}
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-medium text-center">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;