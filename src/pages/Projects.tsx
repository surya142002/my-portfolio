import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Projects = () => {
  const projects = projectsData.projects;

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
              {/* Project Image (Only if Available) */}
              {project.images && project.images.length > 0 && (
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-56 object-cover rounded-lg mb-4" 
                />
              )}

              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">{project.shortDescription}</p>

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
