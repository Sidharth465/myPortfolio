import Avatar from "@assets/images/professional_image.webp";
import { FC } from "react";
import SkillsIcons from "./SkillsIcons";

const AnimatedAvatar: FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066ff]/15 blur-[70px] sm:h-[22rem] sm:w-[22rem]"
        aria-hidden
      />

      <div className="relative">
        <img
          className="relative h-36 w-36 xs:h-44 xs:w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56 xl:h-64 xl:w-64 rounded-full object-cover object-top border border-white/10 shadow-2xl"
          src={Avatar}
          alt="Siddharth Verma"
        />
      </div>

      <div className="mt-5 sm:mt-6 w-full max-w-xs sm:max-w-sm lg:hidden px-2">
        <SkillsIcons />
      </div>
    </div>
  );
};

export default AnimatedAvatar;
