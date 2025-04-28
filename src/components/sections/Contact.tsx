import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Volume2 } from 'lucide-react';

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    // Here you would typically send the data to a server or email service
    alert('Thank you for your message! I will get back to you as soon as possible.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 glass-card p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
                    } bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                    placeholder="John Doe"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
                    } bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                    placeholder="john@example.com"
                    {...register('email', { 
                      required: 'Email is required', 
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: 'Invalid email address' 
                      } 
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
                  } bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Project Opportunity"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-dark-600'
                  } bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Hi Anubhav, I'd like to discuss a project opportunity..."
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <button type="submit" className="btn btn-primary w-full md:w-auto">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-dark-800 dark:text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 dark:text-dark-300">Email</p>
                    <a href="mailto:anuprasad1058@gmail.com" className="text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                      anuprasad1058@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 dark:text-dark-300">Phone</p>
                    <a href="tel:+916370077612" className="text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
                      +91 6370077612
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500 dark:text-dark-300">Location</p>
                    <p className="text-dark-800 dark:text-white">
                      Rayagada, Odisha 765017, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 text-dark-800 dark:text-white">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/anu-0035" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-800 hover:bg-dark-700 dark:bg-dark-700 dark:hover:bg-dark-600 text-white p-3 rounded-full transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/anubhav-prasad" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0077B5] hover:bg-[#006399] text-white p-3 rounded-full transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-center">
              <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-full mr-4">
                <Volume2 size={20} className="text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-dark-800 dark:text-white">Quick Voice Note</h4>
                <p className="text-dark-600 dark:text-dark-200 text-sm mb-2">
                  "Hi, thanks for checking out my portfolio!"
                </p>
                <audio
                  controls
                  className="w-full h-8 mt-2"
                >
                  <source src="/hello.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;