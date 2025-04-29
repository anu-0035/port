import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const projectData = projects.find(p => p.id === id);
      setProject(projectData);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-24 px-4 sm:px-6 lg:px-8"
    >
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to portfolio
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-10">
        <div className="relative h-96 md:h-[32rem] bg-gray-200 dark:bg-gray-700">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
              {project.title}
            </h1>
            
            <div className="flex space-x-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <Github size={18} className="mr-2" />
                  GitHub
                </a>
              )}
              
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, index: number) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="prose max-w-none dark:prose-invert">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
            
            {project.features && (
              <>
                <h2>Key Features</h2>
                <ul>
                  {project.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            
            {project.challenges && (
              <>
                <h2>Challenges & Solutions</h2>
                <p>{project.challenges}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;