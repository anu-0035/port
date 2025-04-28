import React from 'react';
import { Heart, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark-900 py-8 border-t border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-dark-600 dark:text-dark-300 mb-4 flex items-center justify-center">
            Crafted with <Heart size={16} className="mx-1 text-red-500" /> and 
            <Coffee size={16} className="mx-1 text-amber-600" /> by Anubhav Prasad
          </p>
          <p className="text-sm text-dark-500 dark:text-dark-400">
            &copy; {currentYear} Anubhav Prasad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;