import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  title: string;
  date: string;
  description: string[];
  techStack: string[];
  link: string;
  github: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Genius Review Bot",
      date: "Nov 2024",
      description: [
        "Built an automation bot to extract and respond to Google reviews using GPT",
        "Pulled shop data from Excel, processed reviews, and stored responses",
        "Improved customer engagement with smart auto-replies",
      ],
      techStack: ["RPA", "Automation Anywhere", "GPT"],
      link: "#",
      github: "#",
    },
    {
      title: "Facial Recognition Attendance System",
      date: "Sept 2024",
      description: [
        "Live face detection with 95% accuracy",
        "Haar Cascade enhanced detection reliability",
        "Average detection speed: 0.5s/frame",
      ],
      techStack: ["Python", "OpenCV"],
      link: "#",
      github: "#",
    },
    {
      title: "Network Intrusion Detection System",
      date: "Dec 2024",
      description: [
        "Real-time traffic analysis and anomaly detection",
        "Hybrid: Signature + anomaly-based techniques",
        "Logging and alerting system for packet flags",
      ],
      techStack: ["Python", "Scapy"],
      link: "#",
      github: "#",
    },
    {
      title: "Chat System",
      date: "Mar 2024",
      description: [
        "Real-time encrypted chat with Tkinter GUI",
        "Secure client-server protocol",
        "30% faster communication efficiency",
      ],
      techStack: ["Python", "Socket", "Tkinter"],
      link: "#",
      github: "#",
    },
    {
      title: "Packet Sniffer",
      date: "July 2023",
      description: [
        "Live packet capture and protocol-based filtering",
        "Export logs for offline network diagnostics",
        "Planned traffic statistics and usage graphs",
      ],
      techStack: ["Python", "Socket"],
      link: "#",
      github: "#",
    },
    {
      title: "Keylogger",
      date: "Jan 2023",
      description: [
        "Stealth mode keystroke capture tool",
        "Email reporting and background execution",
        "Designed for forensic/security testing",
      ],
      techStack: ["Python", "Linux"],
      link: "#",
      github: "#",
    },
  ];

  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-dark-800 dark:text-white">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                </div>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${expandedProject === index ? 'max-h-96' : 'max-h-16'}`}>
                  <ul className="text-dark-600 dark:text-dark-200 space-y-2 list-disc list-inside">
                    {project.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => toggleProject(index)}
                  className="text-primary-600 dark:text-primary-400 font-medium flex items-center mt-2 hover:underline"
                >
                  {expandedProject === index ? (
                    <>Show Less <ChevronUp size={16} className="ml-1" /></>
                  ) : (
                    <>Show More <ChevronDown size={16} className="ml-1" /></>
                  )}
                </button>
              </div>
              
              <div className="flex border-t border-gray-100 dark:border-dark-700 divide-x divide-gray-100 dark:divide-dark-700">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 text-center flex items-center justify-center gap-2 text-dark-600 dark:text-dark-200 hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors"
                >
                  <Github size={18} /> GitHub
                </a>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 text-center flex items-center justify-center gap-2 text-dark-600 dark:text-dark-200 hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors"
                >
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;