import { FC } from "react";
import RevealItem from "./RevealItem";

const ExperienceCard: FC<{
  work: Work;
  index: number;
  isExpanded: boolean;
  isActive: boolean;
  onToggle: () => void;
}> = ({ work, index, isExpanded, isActive, onToggle }) => {
  const isLeft = index % 2 === 0;

  const card = (
    <div
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl glass transition-all duration-500 ${
        isActive
          ? "border-[#0066ff]/40 shadow-[0_0_0_1px_rgba(0,102,255,0.25)]"
          : "glass-hover"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-4 sm:p-6 lg:p-7">
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass-soft flex items-center justify-center p-1.5 sm:p-2">
              <img
                src={work?.image}
                alt={work?.company}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 break-words">
              {work?.company}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 font-semibold mb-2 break-words">
              {work?.position}
            </p>
            <div className="flex flex-col xs:flex-row xs:flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
              <span className="flex items-start gap-1 min-w-0">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="break-words">{work?.location}</span>
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
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

          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
            className="flex-shrink-0 p-2.5 sm:p-2 rounded-lg glass-chip hover:border-white/20 transition-all duration-300 touch-manipulation"
          >
            <svg
              className={`w-5 h-5 text-gray-300 transition-transform duration-300 ${
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

        <div className="mb-1 sm:mb-2">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {work?.tech_stack?.map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-1 text-[11px] sm:text-xs font-medium glass-chip text-gray-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Key Projects
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {work?.projects?.map((project, projectIndex) => (
                <div
                  key={projectIndex}
                  className="p-3 sm:p-4 rounded-xl glass-soft"
                >
                  <h5 className="text-sm sm:text-base font-semibold text-gray-200 mb-1.5 sm:mb-2 break-words">
                    {project.name}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed text-justify">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const node = (
    <div
      className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 transition-all duration-500 ${
        isActive
          ? "border-[#0066ff] bg-[#0066ff] shadow-[0_0_20px_rgba(0,102,255,0.45)] scale-105"
          : "border-white/20 bg-[#050a14]"
      }`}
    >
      <img
        src={work?.image}
        alt=""
        className="h-5 w-5 sm:h-6 sm:w-6 object-contain rounded-full"
      />
    </div>
  );

  return (
    <RevealItem
      variant={isLeft ? "left" : "right"}
      index={index}
      step={80}
      className="w-full"
    >
      {/* Mobile: node left, card right */}
      <div className="relative flex gap-4 sm:gap-6 lg:hidden">
        <div className="relative z-10 flex w-10 sm:w-12 shrink-0 justify-center pt-5 sm:pt-6">
          {node}
        </div>
        <div className="min-w-0 flex-1 pb-2">{card}</div>
      </div>

      {/* Desktop: alternating left / right around center rail */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-8 xl:gap-12">
        <div className={`${isLeft ? "block" : "invisible"} pt-1`}>
          {isLeft ? card : null}
        </div>

        <div className="relative z-10 flex justify-center pt-6">{node}</div>

        <div className={`${!isLeft ? "block" : "invisible"} pt-1`}>
          {!isLeft ? card : null}
        </div>
      </div>
    </RevealItem>
  );
};

export default ExperienceCard;
