import AnimatedSection from "@library/components/AnimatedSection";
import ExperienceCard from "@library/components/ExperienceCard";
import { useTimelineProgress } from "@library/hooks/useTimelineProgress";
import { Strings as data } from "@utils/constants";
import React, { useRef, useState } from "react";

const Experience: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const workItems = data?.work ?? [];
  const { progress, activeIndex } = useTimelineProgress(
    timelineRef,
    workItems.length
  );

  return (
    <AnimatedSection id="experience" variant="fade" stagger>
      <div className="min-h-[100svh] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gradient px-2 reveal-child"
              style={{ ["--reveal-i" as string]: 0 }}
            >
              Work Experience
            </h1>
            <p
              className="text-sm sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 reveal-child"
              style={{ ["--reveal-i" as string]: 1 }}
            >
              My journey through various companies and projects, gaining
              valuable experience in full-stack development
            </p>

            <div
              className="flex justify-center mt-6 sm:mt-8 reveal-child"
              style={{ ["--reveal-i" as string]: 2 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-lg sm:max-w-none">
                <div className="text-center glass-soft rounded-xl p-3 sm:p-0 sm:bg-transparent sm:border-0 sm:backdrop-filter-none">
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    {workItems.length || 0}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Companies
                  </div>
                </div>
                <div className="text-center glass-soft rounded-xl p-3 sm:p-0 sm:bg-transparent sm:border-0">
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    2+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Years</div>
                </div>
                <div className="text-center glass-soft rounded-xl p-3 sm:p-0 sm:bg-transparent sm:border-0">
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    {workItems.reduce(
                      (acc, work) => acc + work.projects.length,
                      0
                    ) || 0}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center glass-soft rounded-xl p-3 sm:p-0 sm:bg-transparent sm:border-0">
                  <div className="text-xl sm:text-3xl font-bold text-white">
                    {workItems.reduce(
                      (acc, work) => acc + work.tech_stack.length,
                      0
                    ) || 0}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    Technologies
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Mobile rail (left) */}
            <div
              className="pointer-events-none absolute top-5 bottom-5 left-5 sm:left-6 w-0.5 -translate-x-1/2 lg:hidden"
              aria-hidden
            >
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <div
                className="absolute top-0 left-0 w-full origin-top rounded-full bg-[#0066ff] shadow-[0_0_12px_rgba(0,102,255,0.35)]"
                style={{
                  height: `${progress * 100}%`,
                  transition: "height 80ms linear",
                }}
              />
            </div>

            {/* Desktop rail (center) */}
            <div
              className="pointer-events-none absolute top-6 bottom-6 left-1/2 hidden w-0.5 -translate-x-1/2 lg:block"
              aria-hidden
            >
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <div
                className="absolute top-0 left-0 w-full origin-top rounded-full bg-[#0066ff] shadow-[0_0_12px_rgba(0,102,255,0.35)]"
                style={{
                  height: `${progress * 100}%`,
                  transition: "height 80ms linear",
                }}
              />
            </div>

            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              {workItems.map((work, index) => (
                <ExperienceCard
                  key={work.company}
                  work={work}
                  index={index}
                  isActive={index <= activeIndex}
                  isExpanded={selectedCompany === work.company}
                  onToggle={() =>
                    setSelectedCompany(
                      selectedCompany === work.company ? null : work.company
                    )
                  }
                />
              ))}
            </div>

            {workItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-base sm:text-lg">
                  Loading experience data...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
