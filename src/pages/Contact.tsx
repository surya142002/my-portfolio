import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <p className="mt-2 text-lg">Feel free to reach out to me at surya142002@gmail.com.</p>
    </motion.div>
  );
};

export default Contact;
