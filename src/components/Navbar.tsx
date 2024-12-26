import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed md:hidden top-0 left-0 w-full bg-gray-800 z-50 text-white shadow-md">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand / Logo */}
        <div className="text-lg font-bold">
          <Link to="/">PD</Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li>
            <Link to="/" className="hover:text-red-400" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-400" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-red-400" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-400" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-red-400" onClick={toggleMenu}>
              Experence
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
