import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, PlaySquare } from 'lucide-react';

const VideoCV: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="video-cv" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-800 dark:to-dark-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Video CV
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9 relative bg-dark-700 rounded-xl overflow-hidden">
              {/* Placeholder for video - replace with actual YouTube embed or video player */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <Video size={48} className="text-primary-400 mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Coming Soon</h3>
                <p className="text-gray-300 max-w-md">
                  My video introduction is currently in production. 
                  Check back soon to learn more about my journey and projects!
                </p>
                <button className="mt-6 btn btn-primary">
                  <PlaySquare size={18} /> Get Notified
                </button>
              </div>
              
              {/* Video border glow effect */}
              <div className="absolute inset-0 border-4 border-primary-400/30 rounded-xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-lg font-medium text-dark-700 dark:text-dark-100">
              "Let's create something amazing together!"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoCV;