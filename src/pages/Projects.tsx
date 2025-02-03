import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      className="p-4 md:p-8 lg:p-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        My Projects
      </h1>
      <p className="mt-2 text-base sm:text-lg md:text-xl">
        Check out some of my work, including my Medicare public data project.
      </p>
    </motion.div>
  );
};

export default Projects;
