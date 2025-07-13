import { FC } from "react";
import AnimatedSection from "./AnimatedSection";

const ExperienceCard: FC<{
  work: Work;
  isLast: boolean;
  index: number;
  isMobile: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ work, index, isMobile, isLast, isExpanded, onToggle }) => {
  const isEven = index % 2 === 0;

  return (
    <AnimatedSection key={work?.company}>
      <div
        className={`${
          isMobile ? "w-full" : "flex items-center gap-8 lg:gap-16"
        }`}
      >
        {/* Content - Full width on mobile, flex on desktop */}
        <div
          className={`${isMobile ? "w-full" : "flex-1"} ${
            isMobile ? "" : isEven ? "order-1" : "order-3"
          }`}
        >
          <div className="group relative">
            {/* Card Container */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center p-2">
                      <img
                        src={work?.image}
                        alt={work?.company}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold bg-linear2 bg-clip-text text-transparent mb-1">
                      {work?.company}
                    </h3>
                    <p className="text-lg sm:text-xl text-white font-semibold mb-2">
                      {work?.position}
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {work?.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {work?.duration}
                      </span>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={onToggle}
                    className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group-hover:from-purple-500/30 group-hover:to-pink-500/30"
                  >
                    <svg
                      className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
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
                  </button>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {work?.tech_stack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects Section */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Projects
                    </h4>
                    <div className="space-y-4">
                      {work?.projects?.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="p-4 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-700/30 border border-gray-600/30"
                        >
                          <h5 className="text-base font-semibold text-purple-300 mb-2">
                            {project.name}
                          </h5>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Node for Desktop Only */}
        {!isMobile && (
          <div className="flex-shrink-0 order-2 relative">
            {/* Timeline Node */}
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <img
                    src={work?.image}
                    alt={work?.company}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>

              {/* Connecting Lines */}
              {!isLast && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-purple-500 to-pink-500"></div>
              )}
            </div>
          </div>
        )}

        {/* Empty Space for Desktop Layout */}
        {!isMobile && (
          <div className={`flex-1 ${isEven ? "order-3" : "order-1"}`}></div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default ExperienceCard;
