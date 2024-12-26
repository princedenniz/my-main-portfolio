import React from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-1/3 h-screen bg-gray-900 text-white fixed top-0 left-0 shadow-lg">
      {/* Branding Section */}
      <div className="flex flex-col gap-4 px-8 py-12 border-b border-gray-700">
        <h2 className="font-poppins text-4xl font-bold">Prince Dennis</h2>
        <h3 className="text-xl font-mono text-gray-400">FullStack Developer</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Crafting beautiful, accessible, and responsive web experiences with precision and care.
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 mt-8 px-8">
        {[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
          { label: "Projects", path: "/projects" },
          { label: "experience", path: "/experience" },
          { label: "contact", path: "/contact" },
        ].map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `relative flex items-center text-lg font-medium transition-all duration-300 
              ${isActive ? "text-red-500" : "text-gray-400 hover:text-white"}`
            }
          >
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100"></span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="mt-auto px-8 py-8 text-sm text-gray-500 border-t border-gray-700">
        <p>
          © {new Date().getFullYear()} Prince Dennis. <br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default LeftSidebar;
