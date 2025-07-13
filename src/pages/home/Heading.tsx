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
    <div className="space-y-8 lg:space-y-10">
      {/* Greeting and Name Section */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
          Hello, I'm
        </h2>

        {/* Name with typing effect - Fixed height to prevent layout shifts */}
        <div className="flex  items-center gap-2 h-16 sm:h-20 lg:h-28">
          <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] font-bold bg-linear2 bg-clip-text text-transparent leading-none whitespace-nowrap">
            {displayedText}
          </h1>
          <span className="w-1 h-8 sm:h-10 lg:h-14 bg-gradient-to-b from-purple-500 to-pink-500 animate-pulse rounded-full flex-shrink-0"></span>
        </div>
      </div>

      {/* Description - Fixed spacing */}
      <div className="max-w-2xl">
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
          {Strings?.HomePara}
        </p>
      </div>

      {/* Tech Stack Preview - Fixed spacing */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
          React & React Native
        </span>
        <span className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300">
          Node.js & Express
        </span>
        <span className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300">
          TypeScript
        </span>
        <span className="px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300">
          PostgreSQL
        </span>
      </div>
    </div>
  );
};

export default React.memo(Heading);
