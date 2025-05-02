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
  console.log("processing", processing);
  return (
    <div
      style={{ pointerEvents: processing ? "none" : "auto" }}
      className={`group  relative flex items-center w-[150px] h-[40px] sm:h-[50px] sm:w-[250px] bg-linear2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {/* Icon Section */}
      {processing ? (
        <div className=" relative flex  w-full justify-center items-center">
          <LoadingSvg />
        </div>
      ) : (
        <>
          {IconLeft && (
            <div className="absolute   w-[55%] group-hover:bg-black group-hover:bg-opacity-50 flex items-center  justify-center h-full  group-hover:translate-x-0 group-hover:w-full  origin-left transition-all duration-300 ease-in-out">
              <IconLeft />
            </div>
          )}

          {/* Title Section */}
          <span className="flex pl-[25px] w-full items-center justify-center sm:text-xl text-white font-semibold transition-all duration-300 ease-in-out group-hover:text-transparent">
            {title}
          </span>
        </>
      )}
    </div>
  );
};

export default CustomButton;
