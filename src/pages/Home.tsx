import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      className="p-4 md:p-8 lg:p-16 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Hi, I'm Surya Suresh
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        AI & ML Enthusiast | Aspiring Software Developer | Problem Solver
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <Link 
          to="/projects" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          View My Projects
        </Link>
        <Link 
          to="/about" 
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
        >
          Learn About Me
        </Link>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a 
          href="https://github.com/surya142002" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <Github size={32} />
        </a>
        <a 
          href="https://www.linkedin.com/in/surya-suresh-506627219" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
        >
          <Linkedin size={32} />
        </a>
      </div>

    </motion.div>
  );
};

export default Home;
