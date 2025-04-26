import {
  AndroidStudio,
  CssIcon,
  ExpressIcon,
  Git,
  HtmlIcon,
  JsIcon,
  NodejsIcon,
  PostgreIcon,
  ReactIcon,
  ReduxIcon,
  TailwindCssIcon,
  Typescript,
  Xcode,
} from "@assets/index";
import AnimatedSection from "@library/components/AnimatedSection";

const skills = [
  { name: "React", icon: ReactIcon },
  { name: "Xcode", icon: Xcode },
  { name: "Android Studio", icon: AndroidStudio },
  { name: "Redux", icon: ReduxIcon },
  { name: "Git", icon: Git },
  { name: "Tailwind CSS", icon: TailwindCssIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "PostgreSQL", icon: PostgreIcon },
  { name: "TypeScript", icon: Typescript },
  { name: "HTML", icon: HtmlIcon },
  { name: "CSS", icon: CssIcon },
  { name: "JavaScript", icon: JsIcon },
];

const SkillsCard = () => {
  return (
    <AnimatedSection>
      <div className="grid grid-cols-3 gap-x-4 gap-y-8">
        {skills?.map((skill) => (
          <div key={skill.name} className="flex  flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="h-[100px] w-[100px]  mb-2"
            />
            <p className="text-lg font-bold text-white dark:text-gray-200 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default SkillsCard;
