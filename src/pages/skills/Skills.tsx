import {
  AndroidStudio,
  AwsIcon,
  CssIcon,
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
];

const SkillsCard: FC = () => {
  const renderSkillGroup = (
    title: string,
    skills: typeof frontendSkills,
    className: string = "w-full md:w-[48%] lg:w-[30%]"
  ) => (
    <div className={`mb-2 ${className}`}>
      <div className="rounded-lg p-[2px] bg-linear2">
        <div className="flex flex-col h-full p-4 bg-black rounded-md shadow-lg items-center justify-start backdrop-opacity-10 backdrop-blur-md">
          <h2 className="text-xl text-white dark:text-gray-300 mb-4 text-center">
            {title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 p-2 border rounded-lg min-w-[130px] justify-center"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 md:w-7 md:h-7"
                />
                <p className="text-sm  text-white dark:text-gray-200 text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatedSection id="skills">
      <Page
        showBottomDivider={false}
        className="flex flex-col items-center  w-full h-full px-4"
      >
        <div className="mb-4 flex text-center flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl text-transparent bg-linear2 font-bold bg-clip-text">
            Skills
          </h1>
          <h1 className="text-sm sm:text-lg text-gray-400">
            Here are some of my technical skills I’ve been working with.
          </h1>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex  flex-wrap gap-6 px-2 justify-center items-end w-full max-w-[1200px]">
            {renderSkillGroup("Frontend", frontendSkills)}
            {renderSkillGroup("Backend", backendSkills)}
            {renderSkillGroup("Others", otherSkills)}
          </div>
        </div>
      </Page>
    </AnimatedSection>
  );
};

export default SkillsCard;
