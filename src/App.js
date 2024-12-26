import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
var App = function () {
    return (_jsx(Router, { children: _jsxs("div", { className: "flex flex-col md:flex-row min-h-screen", children: [_jsx("div", { className: "w-full md:w-1/4 lg:w-1/5 bg-gray-800 text-white fixed md:relative z-10", children: _jsx(LeftSidebar, {}) }), _jsxs("div", { className: "flex-1 ml-0 md:ml-[25%] lg:ml-[20%]", children: [_jsx(Navbar, {}), _jsx("main", { className: "p-4", children: _jsx(AppRoutes, {}) })] })] }) }));
};
export default App;
