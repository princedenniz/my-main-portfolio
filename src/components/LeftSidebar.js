import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
var LeftSidebar = function () {
    return (_jsxs("aside", { className: "hidden md:flex flex-col w-1/3 h-screen bg-gray-900 text-white fixed top-0 left-0 shadow-lg", children: [_jsxs("div", { className: "flex flex-col gap-4 px-8 py-12 border-b border-gray-700", children: [_jsx("h2", { className: "font-poppins text-4xl font-bold", children: "Prince Dennis" }), _jsx("h3", { className: "text-xl font-mono text-gray-400", children: "FullStack Developer" }), _jsx("p", { className: "text-gray-500 text-sm leading-relaxed", children: "Crafting beautiful, accessible, and responsive web experiences with precision and care." })] }), _jsx("nav", { className: "flex flex-col gap-6 mt-8 px-8", children: [
                    { label: "Home", path: "/" },
                    { label: "About", path: "/about" },
                    { label: "Projects", path: "/projects" },
                    { label: "experience", path: "/experience" },
                    { label: "contact", path: "/contact" },
                ].map(function (link) { return (_jsxs(NavLink, { to: link.path, className: function (_a) {
                        var isActive = _a.isActive;
                        return "relative flex items-center text-lg font-medium transition-all duration-300 \n              ".concat(isActive ? "text-red-500" : "text-gray-400 hover:text-white");
                    }, children: [_jsx("span", { className: "absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100" }), link.label] }, link.path)); }) }), _jsx("div", { className: "mt-auto px-8 py-8 text-sm text-gray-500 border-t border-gray-700", children: _jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " Prince Dennis. ", _jsx("br", {}), "All rights reserved."] }) })] }));
};
export default LeftSidebar;
