import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Experience = function () {
    var experiences = [
        {
            company: "Campipal.",
            role: "Frontend Developer (Intern)",
            date: "Jan 2020 - Dec 2022",
            location: "Lagos Nigeria (Remote)",
            stack: ["React", "TypeScript", "Tailwind CSS"],
            responsibilities: [
                "Developed and maintained user-facing features for the company's web platform.",
                "Collaborated with backend developers to integrate APIs.",
                "Optimized applications for performance and scalability."
            ]
        },
        {
            company: "Slaty.",
            role: "Full Stack Developer",
            date: "September 2024 - Dec 2024",
            location: "Akwaibom Nigeria (Remote)",
            stack: ["Node.js", "Express", "MongoDB", "Tailwind"],
            responsibilities: [
                "Built RESTful APIs for waitlist.",
                "Designed and implemented responsive web interfaces.",
                "Maintained and enhanced existing projects for better user experience."
            ]
        },
        {
            company: "Pertinence Place",
            role: "Frontend Developer",
            date: "Jun 2023 - Feb 2024",
            location: "Lagos, Nigeria",
            stack: ["Vue.js, Material UI"],
            responsibilities: [
                "Assisted in building and debugging web applications.",
                "Collaborated with senior developers to understand system architecture.",
            ]
        }
    ];
    return (_jsxs("div", { className: "max-w-4xl mx-auto py-8 px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-6 text-center md:text-right text-red-500", children: "Experience" }), _jsx("div", { className: "space-y-6", children: experiences.map(function (experience, index) { return (_jsxs("div", { className: "p-4 border rounded-md shadow-md bg-white hover:shadow-lg transition duration-300", children: [_jsxs("h3", { className: "text-xl font-semibold text-gray-800", children: [experience.role, " at ", experience.company] }), _jsx("p", { className: "text-gray-600", children: experience.date }), _jsx("p", { className: "text-gray-600", children: experience.location }), _jsx("h4", { className: "text-lg font-semibold mt-2", children: "Tech Stack:" }), _jsx("ul", { className: "flex flex-wrap gap-2 mt-1", children: experience.stack.map(function (tech, idx) { return (_jsx("li", { className: "px-2 py-1 bg-gray-200 text-red-600 rounded", children: tech }, idx)); }) }), _jsx("h4", { className: "text-lg font-semibold mt-3", children: "Responsibilities:" }), _jsx("ul", { className: "list-disc pl-5 mt-1", children: experience.responsibilities.map(function (task, idx) { return (_jsx("li", { className: "text-gray-700", children: task }, idx)); }) })] }, index)); }) })] }));
};
export default Experience;
