import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md fixed w-full z-10 top-0 left-0 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Surya Suresh</h1>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 dark:bg-gray-900"
        >
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
          <Link to="/projects" className="block px-4 py-2 hover:bg-gray-700">Projects</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
