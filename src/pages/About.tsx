import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-2 text-lg">I’m a recent Purdue CS graduate passionate about AI and ML.</p>
    </motion.div>
  );
};

export default About;
