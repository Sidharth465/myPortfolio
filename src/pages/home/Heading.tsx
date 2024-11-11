import React from "react";
import { useEffect, useState } from "react";

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
    <div className="flex   flex-col w-full h-full justify-center items-center sm:items-start ">
      <text className="text-neutralgray text-xl">Welcome to my Portfolio</text>
      <div className="flex flex-row gap-2 w-full justify-center sm:justify-start mt-5 items-center  h-[35px]">
        <text className="text-white  font-Poppins text-2xl font-bold">
          Hi! I'm{" "}
        </text>
        <span className="text-borderbg  bg-clip-text text-transparent font-poppins font-bold  text-2xl">
          {displayedText}
        </span>
        <span className="border-r-2 border-neutral-500 -ml-2 text-xl animate-blink inline-block">
          |
        </span>
      </div>
      <div className="flex  px-4 sm:px-0">
        <text className="font-light text-[15px]  text-neutralgray  font-Poppins text-start sm:text-start">
          I am a passionate final-year BTech CSE student and a versatile
          full-stack developer, crafting dynamic web experiences with React and
          building seamless mobile applications with React Native for both iOS
          and Android.
        </text>
      </div>
    </div>
  );
};

export default React.memo(Heading);
