import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const ProjectCard = ({ project, setSelectedProject }) => {
  return (
    <div className="bg-[#0B0B0B] text-white rounded-xl shadow-lg p-6 transition-all hover:shadow-2xl hover:scale-105">
      <img
        src={project?.image}
        alt={project?.name}
        className="w-full h-52 object-cover rounded-lg"
      />

      <h3 className="text-2xl font-semibold mt-4">{project.name}</h3>
      <p className="text-gray-400 mt-2">{project.shortDescription}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-purple-600 text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 flex items-center gap-1"
        >
          <FaExternalLinkAlt /> Live
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 flex items-center gap-1"
        >
          <FaGithub /> GitHub
        </a>
        <button
          onClick={() => setSelectedProject(project)}
          className="bg-[#FFCB2F] text-[#18191b] px-6 py-3 rounded-lg font-bold hover:bg-[#2D2D2D] transition duration-300"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
