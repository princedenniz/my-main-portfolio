import React from "react";

const Experience = () => {
  const experiences = [
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

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-right text-red-500">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md bg-white hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {experience.role} at {experience.company}
            </h3>
            <p className="text-gray-600">{experience.date}</p>
            <p className="text-gray-600">{experience.location}</p>
            <h4 className="text-lg font-semibold mt-2">Tech Stack:</h4>
            <ul className="flex flex-wrap gap-2 mt-1">
              {experience.stack.map((tech, idx) => (
                <li
                  key={idx}
                  className="px-2 py-1 bg-gray-200 text-red-600 rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mt-3">Responsibilities:</h4>
            <ul className="list-disc pl-5 mt-1">
              {experience.responsibilities.map((task, idx) => (
                <li key={idx} className="text-gray-700">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
