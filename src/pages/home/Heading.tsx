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
    <div className="space-y-4 sm:space-y-5 lg:space-y-6 w-full min-w-0">
      <div className="space-y-2 sm:space-y-3">
        <h2 className="text-base sm:text-xl lg:text-2xl font-playfair text-gray-300 font-medium">
          Hello, I&apos;m
        </h2>

        <div className="flex items-start sm:items-center gap-2 min-h-[2.75rem] sm:min-h-[3.5rem] lg:min-h-[4.25rem]">
          <h1 className="font-playfair text-[clamp(1.5rem,6vw,3.25rem)] font-bold text-gradient leading-tight break-words hyphens-none">
            {displayedText}
            <span className="ml-1 inline-block w-0.5 sm:w-1 h-[0.9em] align-[-0.1em] bg-white/20 animate-pulse rounded-full" />
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto lg:mx-0 w-full">
        <p className="text-sm sm:text-base lg:text-lg text-justify text-gray-300 leading-loose tracking-wide">
          {Strings?.HomePara}
        </p>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
        <span className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-sm glass-chip rounded-full text-gray-300">
          React & React Native
        </span>
        <span className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-sm glass-chip rounded-full text-gray-300">
          Node.js & Express
        </span>
        <span className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-sm glass-chip rounded-full text-gray-300">
          TypeScript
        </span>
        <span className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-sm glass-chip rounded-full text-gray-300">
          PostgreSQL
        </span>
      </div>
    </div>
  );
};

export default React.memo(Heading);
