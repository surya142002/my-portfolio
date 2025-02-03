import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold">Welcome to My Portfolio!</h1>
      <p className="mt-2 text-lg">Explore my projects and learn more about me.</p>
    </motion.div>
  );
};

export default Home;
