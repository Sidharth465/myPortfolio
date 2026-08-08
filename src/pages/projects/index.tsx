import { appstore, playstore } from "@assets/index";
import AnimatedSection from "@library/components/AnimatedSection";
import RevealItem from "@library/components/RevealItem";
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

  const filteredProjects =
    selectedCategory === "All"
      ? data?.projectsData
      : data?.projectsData?.filter(
          (project) => categoryMap(project.category) === selectedCategory
        );

  return (
    <AnimatedSection id="projects" variant="fade" stagger>
      <div className="min-h-[100svh] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gradient px-2 reveal-child"
              style={{ ["--reveal-i" as string]: 0 }}
            >
              Featured Projects
            </h1>
            <p
              className="text-sm sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 reveal-child"
              style={{ ["--reveal-i" as string]: 1 }}
            >
              A showcase of my recent projects, demonstrating my skills in
              full-stack development, mobile applications, and innovative
              solutions
            </p>

            <div
              className="flex justify-center mt-6 sm:mt-8 reveal-child"
              style={{ ["--reveal-i" as string]: 2 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-lg sm:max-w-none">
                <div className="text-center glass-soft rounded-xl p-3 sm:bg-transparent sm:border-transparent sm:p-0">
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    {data?.projectsData?.length || 0}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center glass-soft rounded-xl p-3 sm:bg-transparent sm:border-transparent sm:p-0">
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    {categories.length - 1}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Categories
                  </div>
                </div>
                <div className="text-center glass-soft rounded-xl p-3 sm:bg-transparent sm:border-transparent sm:p-0">
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    {data?.projectsData?.reduce(
                      (acc, project) => acc + project.tech_stack.length,
                      0
                    ) || 0}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Technologies
                  </div>
                </div>
                <div className="text-center glass-soft rounded-xl p-3 sm:bg-transparent sm:border-transparent sm:p-0">
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    3
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Companies
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex justify-center mb-8 sm:mb-12 reveal-child"
            style={{ ["--reveal-i" as string]: 3 }}
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 touch-manipulation ${
                    selectedCategory === category
                      ? "bg-[#0066ff] text-white shadow-lg"
                      : "glass-chip text-gray-300 hover:text-white hover:border-white/15"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects?.map((project, i) => (
              <RevealItem
                key={project.id}
                variant="up"
                index={i}
                step={80}
                className="min-w-0 h-full"
              >
                <div
                  className="group relative min-w-0 h-full"
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id
                    )
                  }
                >
                  <div className="relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl glass glass-hover transition-all duration-500 h-full cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-4 sm:p-6 h-full flex flex-col">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl glass-soft flex items-center justify-center p-1.5 sm:p-2">
                            <img
                              src={project.image}
                              alt={project.company}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0 pr-1">
                          <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 sm:mb-1 break-words">
                            {project.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 mb-2 break-words">
                            {project.company}
                          </p>
                          <div className="inline-flex items-center px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-gray-300">
                            {project.category}
                          </div>
                        </div>
                      </div>

                      {(project.link ||
                        project.appStore ||
                        project.playStore) && (
                        <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 text-[11px] sm:text-xs font-semibold bg-[#0066ff] text-white rounded-full border border-white/10 touch-manipulation"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Visit Site
                            </a>
                          )}
                          {project.appStore && (
                            <a
                              href={project.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex p-1.5 glass-chip rounded-lg touch-manipulation"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="App Store"
                            >
                              <img
                                src={appstore}
                                alt=""
                                className="h-5 w-5 object-contain"
                              />
                            </a>
                          )}
                          {project.playStore && (
                            <a
                              href={project.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex p-1.5 glass-chip rounded-lg touch-manipulation"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="Play Store"
                            >
                              <img
                                src={playstore}
                                alt=""
                                className="h-5 w-5 object-contain"
                              />
                            </a>
                          )}
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 flex-1 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-3 sm:mb-4">
                        <h4 className="text-[11px] sm:text-xs font-semibold text-gray-300 mb-2">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech_stack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium glass-chip text-gray-300 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech_stack.length > 4 && (
                            <span className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium glass-chip text-gray-400 rounded-md">
                              +{project.tech_stack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-center items-center gap-2 pt-1">
                        <svg
                          className={`w-5 h-5 text-gray-300 transition-transform duration-300 ${
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

                      {selectedProject === project.id && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                          <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 sm:mb-3">
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                                <span className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
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
              </RevealItem>
            ))}
          </div>

          {(!filteredProjects || filteredProjects.length === 0) && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-base sm:text-lg">
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
