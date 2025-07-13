import AnimatedSection from "@library/components/AnimatedSection";
import { Strings as data } from "@utils/constants";
import React, { useState } from "react";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categoryMap = (category: string) => {
    if (category.toLowerCase().includes("web")) return "Web";
    return "Mobile";
  };

  const categories = ["All", "Mobile", "Web"];

  // Filter projects by new category
  const filteredProjects =
    selectedCategory === "All"
      ? data?.projectsData
      : data?.projectsData?.filter(
          (project) => categoryMap(project.category) === selectedCategory
        );

  return (
    <AnimatedSection id="projects">
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear2 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A showcase of my recent projects, demonstrating my skills in
              full-stack development, mobile applications, and innovative
              solutions
            </p>

            {/* Project Stats */}
            <div className="flex justify-center mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent">
                    {data?.projectsData?.length || 0}
                  </div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent">
                    {categories.length - 1}
                  </div>
                  <div className="text-sm text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent">
                    {data?.projectsData?.reduce(
                      (acc, project) => acc + project.tech_stack.length,
                      0
                    ) || 0}
                  </div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent">
                    3
                  </div>
                  <div className="text-sm text-gray-400">Companies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                      : "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-600/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects?.map((project) => (
              <div
                key={project.id}
                className="group relative"
                onClick={() =>
                  setSelectedProject(
                    selectedProject === project.id ? null : project.id
                  )
                }
              >
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full cursor-pointer">
                  {/* Visit Site Button (top-right) */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 z-10 px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-blue-500/30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Site
                    </a>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center p-2">
                          <img
                            src={project.image}
                            alt={project.company}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white mb-1 truncate">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">
                          {project.company}
                        </p>
                        <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300">
                          {project.category}
                        </div>
                      </div>
                    </div>

                    {/* Duration */}
                    {/* <p className="text-xs text-gray-500 mb-4">
                      {project.duration}
                    </p> */}

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-300 mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech_stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-md border border-gray-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech_stack.length > 4 && (
                          <span className="px-2 py-1 text-xs font-medium bg-gray-800/50 text-gray-400 rounded-md border border-gray-600/30">
                            +{project.tech_stack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex justify-center items-center gap-2">
                      {/* Expand/Collapse Arrow */}
                      <svg
                        className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${
                          selectedProject === project.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Expanded Content */}
                    {selectedProject === project.id && (
                      <div className="mt-4 pt-4 border-t border-gray-700/50">
                        <h4 className="text-sm font-semibold text-white mb-3">
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-xs text-gray-400">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {(!filteredProjects || filteredProjects.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
