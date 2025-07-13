import {
  AndroidStudio,
  AwsIcon,
  CssIcon,
  CursorIcon,
  ExpressIcon,
  FirebaseIcon,
  Git,
  HtmlIcon,
  JsIcon,
  NodejsIcon,
  PostgreIcon,
  PostmanIcon,
  ReactIcon,
  ReduxIcon,
  TailwindCssIcon,
  Typescript,
  VscodoeIcon,
  Xcode,
} from "@assets/index";
import AnimatedSection from "@library/components/AnimatedSection";
import Page from "@library/components/Page";
import { FC } from "react";

const frontendSkills = [
  { name: "React", icon: ReactIcon },
  { name: "React-Native", icon: ReactIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "Tailwind CSS", icon: TailwindCssIcon },
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
  { name: "JavaScript", icon: JsIcon },
  { name: "TypeScript", icon: Typescript },
];

const backendSkills = [
  { name: "Node.js", icon: NodejsIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "AWS", icon: AwsIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "PostgreSQL", icon: PostgreIcon },
];

const otherSkills = [
  { name: "Git", icon: Git },
  { name: "Xcode", icon: Xcode },
  { name: "Android Studio", icon: AndroidStudio },
  { name: "Postman", icon: PostmanIcon },
  { name: "VS Code", icon: VscodoeIcon },
  { name: "Cursor", icon: CursorIcon },
];

const SkillsCard: FC = () => {
  const renderSkillGroup = (title: string, skills: typeof frontendSkills) => (
    <div className="w-full lg:w-[32%] mb-8">
      <div className="group relative h-full">
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative p-6 h-full">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold bg-linear2 bg-clip-text text-transparent mb-2">
                {title}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-700/50 border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center p-1 flex-shrink-0">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-white group-hover/skill:text-purple-300 transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatedSection id="skills">
      <Page showBottomDivider={false} className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-linear2 bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Here are the technologies and tools I've been working with to
              create amazing digital experiences
            </p>
          </div>

          {/* Skills Grid */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {renderSkillGroup("Frontend", frontendSkills)}
            {renderSkillGroup("Backend", backendSkills)}
            {renderSkillGroup("Tools & Others", otherSkills)}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">
                Continuously learning and exploring new technologies
              </span>
            </div>
          </div>
        </div>
      </Page>
    </AnimatedSection>
  );
};

export default SkillsCard;
