import AnimatedSection from "@library/components/AnimatedSection";
import ExperienceCard from "@library/components/ExperienceCard";
import { Strings as data } from "@utils/constants";
import React, { useState } from "react";

const Experience: React.FC<{
  isMobile: boolean;
}> = ({ isMobile }) => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  return (
    <AnimatedSection id="experience">
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear2 bg-clip-text text-transparent">
              Work Experience
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              My journey through various companies and projects, gaining
              valuable experience in full-stack development
            </p>

            {/* Experience Stats */}
            <div className="flex justify-center mt-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent">
                    {data?.work?.length || 0}
                  </div>
                  <div className="text-sm text-gray-400">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent">
                    2+
                  </div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent">
                    {data?.work?.reduce(
                      (acc, work) => acc + work.projects.length,
                      0
                    ) || 0}
                  </div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-linear2 bg-clip-text text-transparent">
                    {data?.work?.reduce(
                      (acc, work) => acc + work.tech_stack.length,
                      0
                    ) || 0}
                  </div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line - Only show on desktop */}
            {!isMobile && (
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            )}

            {/* Experience Cards */}
            <div className="space-y-8 lg:space-y-12">
              {data?.work?.map((work, index) => (
                <ExperienceCard
                  key={work.company}
                  work={work}
                  index={index}
                  isMobile={isMobile}
                  isLast={data?.work?.length - 1 === index}
                  isExpanded={selectedCompany === work.company}
                  onToggle={() =>
                    setSelectedCompany(
                      selectedCompany === work.company ? null : work.company
                    )
                  }
                />
              ))}
            </div>

            {/* Fallback if no data */}
            {(!data?.work || data.work.length === 0) && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
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
