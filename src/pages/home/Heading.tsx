import React, { useEffect, useState } from "react";
import { Strings } from "@utils/constants";

const Heading = () => {
  const words = ["Siddharth Verma.", "Full-Stack Developer."];
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isErasing) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsErasing(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
        if (displayedText === currentWord) {
          setTimeout(() => setIsErasing(true), 1200);
        }
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, currentWordIndex]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center sm:items-start px-4 md:px-8 lg:px-12 py-8">
      {/* Typing Effect */}
      <div className="flex flex-col sm:flex-row gap-2 w-full justify-center sm:justify-start mt-5 items-center min-h-[40px]">
        <span className="text-white text-lg sm:text-3xl  font-semibold font-poppins">
          Hi! I'm{" "}
        </span>
        <div className="flex items-center">
          <span className="text-borderbg text-lg sm:text-3xl  font-bold font-poppins bg-clip-text bg-linear2 text-transparent">
            {displayedText}
          </span>
          <span className="border-r-2 border-neutral-500 text-xl animate-blink ml-1">
            |
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="max-w-[600px] text-white opacity-80 text-sm sm:text-xl font-light font-poppins sm:text-start text-left mt-4">
        {Strings?.HomePara}
      </p>
    </div>
  );
};

export default React.memo(Heading);
