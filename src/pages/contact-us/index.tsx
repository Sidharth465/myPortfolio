import AnimatedSection from "@library/components/AnimatedSection";
import React from "react";

type SectionProps = {
  refProp: React.RefObject<HTMLDivElement>;
};

const ContactUs: React.FC<SectionProps> = ({ refProp }) => {
  return (
    <AnimatedSection>
      <div
        ref={refProp}
        className="flex  justify-center items-center bg-crystalblue  text-white"
      >
        Contact us
      </div>
    </AnimatedSection>
  );
};

export default ContactUs;
