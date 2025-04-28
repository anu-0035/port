import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  org: string;
  date: string;
  link: string;
}

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications: Certification[] = [
    {
      title: "Advanced Computer Networks",
      org: "NPTEL (IIT Kharagpur)",
      date: "April 2024",
      link: "#",
    },
    {
      title: "Ethical Hacking Essentials",
      org: "EC-Council (Coursera)",
      date: "February 2024",
      link: "#",
    },
    {
      title: "Social Network Analysis",
      org: "NPTEL (IIT Madras)",
      date: "December 2023",
      link: "#",
    },
    {
      title: "Generative AI with LLMs",
      org: "Coursera",
      date: "October 2023",
      link: "#",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="card p-6 flex flex-col items-center text-center hover:border-primary-400 hover:border border-transparent transition-all"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full mb-4">
                <Award size={32} className="text-primary-600 dark:text-primary-400" />
              </div>
              
              <h3 className="text-lg font-semibold text-dark-800 dark:text-white mb-2">{cert.title}</h3>
              <p className="text-dark-600 dark:text-dark-200 mb-1">{cert.org}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{cert.date}</p>
              
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center text-primary-600 dark:text-primary-400 hover:underline"
              >
                View Certificate <ExternalLink size={16} className="ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;