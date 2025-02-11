import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects.json");
        setProjects(response.data || []); // Ensure response.data is an array
      } catch (err) {
        setError("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-[#18191b] text-white py-20 px-6 md:px-12">
      <h2 className="text-5xl md:text-6xl font-bold text-[#FFCB2F] text-center mb-16 tracking-wider font-sans">
        My Projects
      </h2>

      {loading && <p className="text-center text-[#FFCB2F]">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Handle case if no projects are available */}
      {!loading && !error && Array.isArray(projects) && projects.length === 0 && (
        <p className="text-center text-[#FFCB2F]">No projects available.</p>
      )}

      {/* Render Projects */}
      {!loading && !error && Array.isArray(projects) && projects.length > 0 && (
        <div className="max-w-7xl mx-auto flex flex-col gap-12 ">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id || index} // Ensure each element has a unique key
              className="flex bg-[#1f1f1f] flex-col sm:flex-row p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {/* Image on the left */}
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-6 rounded-lg overflow-hidden">
                <img
                  src={project?.image || "/default-image.jpg"} // Fallback if image is missing
                  alt={project?.name || "Project Image"}
                  className="w-full p-10 h-full object-cover object-center transform transition-all duration-500 hover:scale-110"
                />
              </div>

              {/* Information on the right */}
              <div className="flex flex-col justify-between w-full sm:w-1/2">
                <h3 className="text-2xl font-semibold text-[#FFCB2F]">{project?.name || "Project Name"}</h3>
                <p className="text-gray-300 mt-2 mb-4">{project?.overview || "Description not available."}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(project?.techStack) &&
                    project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-purple-600 text-xs text-white px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                  {project?.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  )}

                  {project?.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-500 font-medium flex items-center gap-1 transition-colors duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-gray-400 hover:text-gray-500 transition-colors duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 0C5.373 0 0 5.373 0 12c0 5.25 3.438 9.69 8.207 11.268.6.111.82-.262.82-.58 0-.288-.01-1.059-.016-2.078-3.338.728-4.04-1.607-4.04-1.607-.546-1.38-1.33-1.748-1.33-1.748-1.086-.743.082-.73.082-.73 1.2.085 1.833 1.24 1.833 1.24 1.067 1.828 2.804 1.297 3.487.993.106-.773.42-1.297.763-1.597-2.669-.303-5.467-1.335-5.467-5.92 0-1.307.465-2.378 1.232-3.221-.123-.303-.534-1.522.117-3.17 0 0 1.006-.322 3.296 1.232 1.085-.302 2.246-.451 3.402-.457 1.155.006 2.317.155 3.402.457 2.289-1.554 3.295-1.232 3.295-1.232.651 1.648.24 2.869.118 3.17.767.843 1.231 1.914 1.231 3.221 0 4.597-2.803 5.615-5.481 5.918.433.373.822 1.102.822 2.223 0 1.607-.016 2.898-.016 3.293 0 .319.217.694.825.579C20.563 21.692 24 17.25 24 12c0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                      GitHub Code
                    </a>
                  )}
                </div>

                {/* Admin and Delivery Men Access */}
                {(project?.adminAccess || project?.deliveryMenAccess) && (
                  <div className="mt-4 bg-[#202020] p-4 rounded-lg">
                    {project?.adminAccess && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-[#FFCB2F]">Admin Access:</h4>
                        <p className="text-white">Email: {project.adminAccess.email}</p>
                        <p className="text-white">Password: {project.adminAccess.password}</p>
                      </div>
                    )}
                    {project?.deliveryMenAccess && (
                      <div>
                        <h4 className="font-semibold text-[#FFCB2F]">Delivery Men Access:</h4>
                        <p className="text-white">Email: {project.deliveryMenAccess.email}</p>
                        <p className="text-white">Password: {project.deliveryMenAccess.password}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Installation Instructions */}
                {project?.installation && (
                  <div className="mt-4 text-sm text-gray-400">
                    <h4 className="font-semibold text-[#FFCB2F]">Installation Instructions:</h4>
                    <p>{project.installation}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
