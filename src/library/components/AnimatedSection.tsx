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
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { setActiveSection } = useNavContext();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (id) setActiveSection(id);
        } else {
          if (!isMobile) setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [id, setActiveSection, isMobile]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`w-full animated-section ${
        isVisible ? "fade-in" : "fade-out"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
