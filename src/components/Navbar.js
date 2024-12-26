import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
var Navbar = function () {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleMenu = function () { return setIsOpen(!isOpen); };
    return (_jsxs("nav", { className: "fixed md:hidden top-0 left-0 w-full bg-gray-800 z-50 text-white shadow-md", children: [_jsxs("div", { className: "container mx-auto flex justify-between items-center p-4", children: [_jsx("div", { className: "text-lg font-bold", children: _jsx(Link, { to: "/", children: "PD" }) }), _jsx("button", { onClick: toggleMenu, className: "text-2xl focus:outline-none md:hidden", "aria-label": "Toggle Menu", children: isOpen ? _jsx(FaTimes, {}) : _jsx(FaBars, {}) })] }), _jsx("div", { className: "md:hidden bg-gray-800 transition-all duration-300 ease-in-out ".concat(isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0', " overflow-hidden"), children: _jsxs("ul", { className: "flex flex-col items-center gap-4 py-4", children: [_jsx("li", { children: _jsx(Link, { to: "/", className: "hover:text-red-400", onClick: toggleMenu, children: "Home" }) }), _jsx("li", { children: _jsx(Link, { to: "/about", className: "hover:text-red-400", onClick: toggleMenu, children: "About" }) }), _jsx("li", { children: _jsx(Link, { to: "/projects", className: "hover:text-red-400", onClick: toggleMenu, children: "Projects" }) }), _jsx("li", { children: _jsx(Link, { to: "/contact", className: "hover:text-red-400", onClick: toggleMenu, children: "Contact" }) }), _jsx("li", { children: _jsx(Link, { to: "/experience", className: "hover:text-red-400", onClick: toggleMenu, children: "Experence" }) })] }) })] }));
};
export default Navbar;
