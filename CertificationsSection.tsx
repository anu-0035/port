import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import certificationsData from '../../data/certifications';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-600">Certifications</span> & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((certification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <Award size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {certification.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">
                    {certification.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Issued {certification.date} • {certification.expires ? `Expires ${certification.expires}` : 'No Expiration'}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {certification.description}
              </p>
              
              {certification.skills && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {certification.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              
              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  View Credential
                  <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;