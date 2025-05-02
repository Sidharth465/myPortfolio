import React, { useEffect, useRef, useState } from "react";
import "../../index.css";
import { useNavContext } from "@library/context/NavContext";

const AnimatedSection = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { setActiveSection } = useNavContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          console.log("active section", id);
          setActiveSection((prev) => (id === undefined ? prev : id));

          // Stop observing once the element is visible by sid
          // if (sectionRef.current) {
          //   observer.unobserve(sectionRef.current);
          // }
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 } // Adjust threshold for more control
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`w-full  animated-section ${
        isVisible ? "fade-in" : "fade-out"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
