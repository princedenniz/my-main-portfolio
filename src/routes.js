import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
var AppRoutes = function () {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "/experience", element: _jsx(Experience, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) })] }));
};
export default AppRoutes;
