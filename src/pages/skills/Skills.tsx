import {
  AndroidStudio,
  AwsIcon,
  CssIcon,
  CursorIcon,
  ExpressIcon,
  FirebaseIcon,
  Git,
  HtmlIcon,
  java,
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
import RevealItem from "@library/components/RevealItem";
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
  { name: "Java", icon: java },
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
  const renderSkillGroup = (
    title: string,
    skills: typeof frontendSkills,
    index: number
  ) => (
    <RevealItem
      key={title}
      variant="scale"
      index={index}
      step={110}
      className="w-full min-w-0 h-full"
    >
      <div className="group relative h-full">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl glass glass-hover transition-all duration-500 h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-4 sm:p-6 h-full">
            <div className="text-center mb-5 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {title}
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-white/20 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="group/skill min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl glass-chip hover:border-white/20 transition-all duration-300 hover:bg-gradient-to-br hover:from-white/5 hover:to-transparent">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center p-1 flex-shrink-0">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[11px] sm:text-sm lg:text-base font-medium text-white group-hover/skill:text-gray-300 transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealItem>
  );

  return (
    <AnimatedSection id="skills" variant="fade" stagger>
      <Page showBottomDivider={false} className="min-h-[100svh] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16 space-y-3 sm:space-y-4">
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gradient px-2 reveal-child"
              style={{ ["--reveal-i" as string]: 0 }}
            >
              Skills & Expertise
            </h1>
            <p
              className="text-sm sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2 reveal-child"
              style={{ ["--reveal-i" as string]: 1 }}
            >
              Here are the technologies and tools I've been working with to
              create amazing digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {renderSkillGroup("Frontend", frontendSkills, 0)}
            {renderSkillGroup("Backend", backendSkills, 1)}
            {renderSkillGroup("Tools & Others", otherSkills, 2)}
          </div>

          <RevealItem
            variant="fade"
            index={3}
            className="mt-10 sm:mt-16 text-center px-2"
          >
            <div className="inline-flex max-w-full items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full glass-chip">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300 text-left">
                Continuously learning and exploring new technologies
              </span>
            </div>
          </RevealItem>
        </div>
      </Page>
    </AnimatedSection>
  );
};

export default SkillsCard;
