import LottieFile from "@assets/images/lottieBg.json";
import Avatar from "@assets/images/avatar.png";
import Lottie from "lottie-react";
import { FC } from "react";
import SkillsIcons from "./SkillsIcons";

const AnimatedAvatar: FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div className="relative  pb-5 sm:pb-0 w-full flex flex-col items-center justify-center">
      <img
        className="    object-contain h-[200px] sm:h-[250px]   min-w-[300px]"
        src={Avatar}
      />
      {isMobile && (
        <div className="">
          <SkillsIcons />
        </div>
      )}
    </div>
  );
};

export default AnimatedAvatar;
