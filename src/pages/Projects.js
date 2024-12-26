import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import campipalImg from "../assets/campip-IMG.png";
import gymImg from "../assets/gym.png";
import goMobileImg from "../assets/goMobiles-pic-portfolio.png";
import slatyImg from "../assets/slaty-pic-for-potfolio.png";
import lemi from "../assets/socilmedi.png";
var projects = [
    {
        projectName: "Campipal",
        projectImage: campipalImg, // Replace with your image URL
        projectGitRepo: "https://github.com/yourusername/project-one",
        projectLink: "#", // Replace with your live project link
        aboutProject: "An innovative platform designed to enhance student engagement and collaboration, built using React. As one of the frontend developers, I contributed to creating an intuitive and responsive user interface, implementing features that support seamless communication, resource sharing, and interactive learning experiences. The app fosters a vibrant digital environment for students to connect and grow academically.",
        tools: ["React", "Express", "MongoDB"],
    },
    {
        projectName: "GYM-Website",
        projectImage: gymImg, // Replace with your image URL
        projectGitRepo: "https://github.com/princedenniz/My-Gym-site",
        projectLink: "https://my-gym-site.vercel.app/", // Replace with your live project link
        aboutProject: "A modern and dynamic website built with React for a gym center.",
        tools: ["vUE", "Material UI"],
    },
    {
        projectName: "Slaty-Waitlist",
        projectImage: slatyImg, // Replace with your image URL
        projectGitRepo: "https://github.com/princedenniz/slaty",
        projectLink: "https://slaty.vercel.app/", // Replace with your live project link
        aboutProject: "A dynamic waitlist management application built with Express.js and React. The app allows users to sign up and join a waitlist, generate personalized referral links, and track their position on the leaderboard based on referrals. It features an admin dashboard for monitoring user activities, managing referrals, and optimizing user engagement. Designed with a responsive UI and efficient backend, the app ensures seamless user experience and scalability.",
        tools: ["React", "Redux", "Express.js", "MongoDB"],
    },
    {
        projectName: "LAMA",
        projectImage: lemi, // Replace with your image URL
        projectGitRepo: "https://github.com/princedenniz/slaty",
        projectLink: "https://social-app-neon.vercel.app/", // Replace with your live project link
        aboutProject: ".",
        tools: ["React", "Material UI"],
    },
    {
        projectName: "Go-mobilez Platform",
        projectImage: goMobileImg, // Replace with your image URL
        projectGitRepo: "https://github.com/princedenniz/go_mobile-site",
        projectLink: "https://go-mobile-site-princedennizs-projects.vercel.app/", // Replace with your live project link
        aboutProject: "Project Three is an e-commerce platform that allows users to browse and purchase products online. It includes features like secure payment, shopping cart, and product search.",
        tools: ["React"],
    },
    // Add more projects as needed
];
var Projects = function () {
    return (_jsxs("div", { id: 'projects', className: "p-6 md:p-12 pt-60", children: [_jsx("h2", { className: "text-4xl font-bold text-red-500 text-center md:text-right mb-8", children: "My Projects" }), _jsx("div", { className: "space-y-8", children: projects.map(function (project, index) { return (_jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center md:items-left md:justify-start bg-white shadow-lg rounded-lg overflow-hidden p-4", children: [_jsx("img", { src: project.projectImage, alt: project.projectName, className: "w-48 h-48 object-cover rounded-lg md:mr-6" }), _jsxs("div", { className: "flex flex-col text-center md:text-left", children: [_jsx("h3", { className: "text-2xl font-semibold", children: project.projectName }), _jsx("p", { className: "text-gray-600 mt-2", children: project.aboutProject }), _jsxs("div", { className: "mt-4 text-center flex flex-col items-center md:items-start", children: [_jsx("strong", { className: "text-gray-800", children: "Tools:" }), _jsx("ul", { className: "flex flex-wrap gap-2 mt-2", children: project.tools.map(function (tool, index) { return (_jsx("li", { className: "text-sm text-gray-500 text-center", children: tool }, index)); }) })] }), _jsxs("div", { className: "flex justify-center md:justify-start gap-4 mt-4", children: [_jsx("a", { href: project.projectGitRepo, target: "_blank", rel: "noopener noreferrer", className: "text-red-600 hover:underline", children: "GitHub Repo" }), _jsx("a", { href: project.projectLink, target: "_blank", rel: "noopener noreferrer", className: "text-red-600 hover:underline", children: "Live Site" })] })] })] }, index)); }) })] }));
};
export default Projects;
