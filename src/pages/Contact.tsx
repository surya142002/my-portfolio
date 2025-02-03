import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      className="p-4 md:p-8 lg:p-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Get in Touch
      </h1>
      
      {/* Contact Info Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail size={24} />
          <a href="mailto:surya142002@gmail.com" className="text-lg sm:text-xl hover:text-blue-500 transition-colors">
            surya142002@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Github size={24} />
          <a href="https://github.com/surya142002" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl hover:text-blue-500 transition-colors">
            GitHub
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Linkedin size={24} />
          <a href="https://www.linkedin.com/in/surya-suresh-506627219" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl hover:text-blue-500 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <form
        action="https://formspree.io/f/xyzkjoqg" 
        method="POST"
        className="mt-8 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
