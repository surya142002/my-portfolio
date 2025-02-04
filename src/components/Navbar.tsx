import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default dark mode enabled
  const menuRef = useRef(null); // Ref to detect outside clicks

  // Force dark mode on first load unless a preference is stored
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (!storedTheme) {
      setDarkMode(true);  // Default to dark mode if no preference is stored
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      if (storedTheme === 'dark') {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Save preference when toggling dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
      setIsOpen(false); // Close menu if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md fixed w-full z-10 top-0 left-0 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Surya Suresh</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/projects" className="hover:text-gray-400">Projects</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 dark:bg-gray-900"
        >
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Dark Mode Toggle in Mobile Menu */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center space-x-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
