import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Trophy, Calendar } from 'lucide-react';
import coCurricularsData from '../../data/coCurriculars';

const CoCurricularsSection = () => {
  // Helper function to get icon based on type
  const getIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return <Trophy size={24} className="text-purple-600 dark:text-purple-400" />;
      case 'coding-challenge':
        return <Code size={24} className="text-green-600 dark:text-green-400" />;
      case 'community':
        return <Users size={24} className="text-orange-600 dark:text-orange-400" />;
      default:
        return <Calendar size={24} className="text-blue-600 dark:text-blue-400" />;
    }
  };

  // Helper function to get color based on type
  const getColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200';
      case 'coding-challenge':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200';
      case 'community':
        return 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200';
      default:
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200';
    }
  };

  return (
    <section id="co-curriculars" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Co-<span className="text-blue-600">Curriculars</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hackathons, coding challenges, and community involvements that have enriched my technical skills and network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coCurricularsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="flex items-center p-6 border-b border-gray-100 dark:border-gray-700">
                <div className={`p-3 rounded-full mr-4 ${getColor(item.type).split(' ').slice(0, 2).join(' ')}`}>
                  {getIcon(item.type)}
                </div>
                
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${getColor(item.type)}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.organization} • {item.date}
                  </p>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                
                {item.achievements && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Achievements
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {item.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {item.link && (
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    View More Details →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoCurricularsSection;