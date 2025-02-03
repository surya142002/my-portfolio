import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gray-400 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;