import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'medicare-data',
    title: 'Medicare Data Project',
    description: 'A full-stack app for exploring Medicare datasets.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: '/images/medicare.png',
  },
  {
    id: 'object-detection',
    title: 'Object Detection AI',
    description: 'Using YOLO and Roboflow to detect assignment similarities and prevent cheating.',
    tech: ['Python', 'YOLO', 'Roboflow'],
    image: '/images/object-detection.png',
  },
  {
    id: 'pacman-ai',
    title: 'Pac-Man AI',
    description: 'An AI-driven Pac-Man game using classical search algorithms.',
    tech: ['Python'],
    image: '/images/pacman.png',
  },
  {
    id: 'my-shell',
    title: 'My Shell',
    description: 'A custom shell built in C and C++ for systems programming.',
    tech: ['C', 'C++'],
    image: '/images/shell.png',
  },
  {
    id: 'memory-allocator',
    title: 'Memory Allocator',
    description: 'Created a custom memory allocator in C and C++.',
    tech: ['C', 'C++'],
    image: '/images/memory-allocator.png',
  },
  {
    id: 'chatroom',
    title: 'Java Chatroom',
    description: 'A chatroom application using Java and Java graphics.',
    tech: ['Java'],
    image: '/images/chatroom.png',
  },
  {
    id: 'merck-data-viz',
    title: 'Data Visualization',
    description: 'bio-wearables data visualization project using R Shiny dashboards for Merck.',
    tech: ['R', 'Shiny'],
    image: '/images/merck.png',
  },
  {
    id: 'battleship',
    title: 'Battleship Game',
    description: 'Java-based Battleship game.',
    tech: ['Java'],
    image: '/images/battleship.png',
  }
];

const Projects = () => {
  return (
    <motion.div
      className="p-4 md:p-8 lg:p-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;