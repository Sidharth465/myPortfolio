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

const icons = [
  ReactIcon,
  Xcode,
  AndroidStudio,
  ReduxIcon,
  Git,
  TailwindCssIcon,
  NodejsIcon,
  ExpressIcon,
  PostgreIcon,
  Typescript,
  HtmlIcon,
  CssIcon,
  JsIcon,
];

const SkillsIcons = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4 mt-2 items-center">
      {icons.map((icon, i) => (
        <img
          key={i}
          className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
          src={icon}
          alt=""
        />
      ))}
    </div>
  );
};

export default SkillsIcons;
