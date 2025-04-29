import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <div className="relative w-full h-80 md:h-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Software Developer & Ethical Hacker
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer with expertise in building web applications using modern technologies. 
              With a strong foundation in JavaScript, TypeScript, and React, I create intuitive and responsive user experiences 
              that solve real-world problems.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My journey in web development began 5 years ago, and since then, I've worked on a variety of projects, 
              from e-commerce platforms to real-time dashboards. I love combining my technical skills with creative design 
              to build products that are both beautiful and functional.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Personal Information
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-medium">Name:</span> Anubhav Prasad
                  </li>
                  <li>
                    <span className="font-medium">Email:</span> anuprasad1058@gmail.com
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> Rayagada,Odisha
                  </li>
                  <li>
                    <span className="font-medium">Availability:</span> Freelance / Full-time
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Interests & Hobbies
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Open Source Contribution</li>
                  <li>UI/UX Design</li>
                  <li>Web Animation</li>
                  <li>Rock Climbing</li>
                </ul>
              </div>
            </div>
            
            <div>
              <a
                href="/path-to-your-resume.pdf" /* Update with actual resume path */
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;