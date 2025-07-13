import Avatar from "@assets/images/avatar.png";
import { FC } from "react";
import SkillsIcons from "./SkillsIcons";

const AnimatedAvatar: FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Avatar Container with Gradient Border */}
      <div className="relative group">
        {/* Gradient Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

        {/* Avatar Image */}
        <div className="relative">
          <img
            className="relative rounded-full object-contain h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 border-4 border-black shadow-2xl"
            src={Avatar}
            alt="Siddharth Verma"
          />

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Mobile Skills Icons */}
      {isMobile && (
        <div className="mt-6">
          <SkillsIcons />
        </div>
      )}

      {/* Background Animation for Desktop */}
      {!isMobile && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default AnimatedAvatar;
