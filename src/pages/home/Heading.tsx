import React, { useEffect, useState } from "react";
import { Strings } from "@utils/constants";

const Heading = () => {
  const words = ["Sidharth Verma.", "Full-Stack Developer."];
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isErasing) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsErasing(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }, 200);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        if (displayedText === currentWord) {
          setTimeout(() => setIsErasing(true), 1000); // Pause before erasing
        }
      }, 200);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, currentWordIndex]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center sm:items-start  ">
      {/* Welcome Text */}
      <h2 className=" bg-clip-text bg-linear text-transparent  mt-5  sm:mt-0 text-3xl  text-center">
        Welcome to my Portfolio
      </h2>

      {/* Typing Effect */}
      <div className="flex flex-col sm:flex-row gap-2 w-full justify-center sm:justify-start mt-5 items-center min-h-[35px]">
        <span className="text-white  text-xl sm:text-xl md:text-2xl font-bold font-poppins">
          Hi! I'm{" "}
        </span>
        <div className="flex items-center">
          <span className="text-borderbg text-xl  bg-clip-text bg-linear text-transparent sm:text-xl md:text-2xl font-bold font-poppins">
            {displayedText}
          </span>
          <span className="border-r-2 border-neutral-500 text-xl animate-blink ">
            |
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="max-w-[500px] text-white opacity-80 text-base font-light font-poppins sm:text-start text-center mt-4">
        {Strings?.HomePara}
      </p>
    </div>
  );
};

export default React.memo(Heading);
