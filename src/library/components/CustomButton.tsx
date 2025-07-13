import { LoadingSvg } from "@library/utils/Svgs";
import React from "react";

type ButtonProps = {
  IconLeft?: React.ComponentType;
  className?: string;
  processing?: boolean;
  title: string;
  onClick?: () => void;
};

const CustomButton = ({
  IconLeft,
  title,
  processing = false,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      style={{ pointerEvents: processing ? "none" : "auto" }}
      className={`group relative flex items-center justify-center w-full sm:w-auto min-w-[200px] sm:min-w-[250px] h-12 sm:h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 active:scale-95 ${className}`}
      onClick={onClick}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>

      {/* Content */}
      <div className="relative flex items-center justify-center w-full gap-3 px-4">
        {processing ? (
          <div className="flex items-center justify-center gap-3">
            <LoadingSvg />
            <span className="text-white font-semibold text-sm sm:text-base">
              Processing...
            </span>
          </div>
        ) : (
          <>
            {IconLeft && (
              <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-12">
                  <IconLeft />
                </div>
              </div>
            )}

            {/* Title */}
            <span className="text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 group-hover:translate-x-1">
              {title}
            </span>
          </>
        )}
      </div>
    </button>
  );
};

export default CustomButton;
