import AnimatedSection from "@library/components/AnimatedSection";
import React from "react";

type SectionProps = {
  refProp: React.RefObject<HTMLDivElement>;
};

const Experience: React.FC<SectionProps> = ({ refProp }) => {
  return (
    <AnimatedSection>
      <div
        ref={refProp}
        className="flex  bg-pink-400 justify-center items-center text-white"
      >
        Experience
      </div>
    </AnimatedSection>
  );
};

export default Experience;
