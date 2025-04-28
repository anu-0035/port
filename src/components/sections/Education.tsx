import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

interface Education {
  institution: string;
  location: string;
  degree: string;
  score: string;
  date: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education: Education[] = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "B.Tech Computer Science and Engineering",
      score: "CGPA: 8.32",
      date: "2021 - 2025",
    },
    {
      institution: "Lakshmipat Singhania Public School",
      location: "Odisha, India",
      degree: "Class XII (CBSE)",
      score: "95%",
      date: "2019 - 2021",
    },
    {
      institution: "Lakshmipat Singhania Public School",
      location: "Odisha, India",
      degree: "Class X (CBSE)",
      score: "89.6%",
      date: "2019",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-primary-200 dark:bg-primary-900/30 transform md:translate-x-[-50%]"></div>
          
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-16 md:pr-0 pl-12' : 'md:mr-auto md:pr-16 md:pl-0 pl-12'
              } md:w-1/2 w-full`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-[-8px] w-6 h-6 bg-primary-500 dark:bg-primary-600 rounded-full z-10 flex items-center justify-center">
                <GraduationCap size={14} className="text-white" />
              </div>
              
              {/* Content card */}
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-dark-800 dark:text-white mb-2">{edu.institution}</h3>
                <p className="text-dark-600 dark:text-dark-200 mb-1">{edu.location}</p>
                <p className="text-dark-700 dark:text-dark-100 font-medium">{edu.degree}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-primary-600 dark:text-primary-400 font-medium">{edu.score}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{edu.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;