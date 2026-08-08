import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Entrance direction / style */
  variant?: RevealVariant;
  /** Extra delay in ms before animation starts */
  delay?: number;
  /** When true, children with .reveal-child stagger in */
  stagger?: boolean;
  /** Observe once (default true) */
  once?: boolean;
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal-fade",
};

/** Section-level scroll reveal with optional child stagger */
const AnimatedSection = ({
  children,
  id,
  className = "",
  variant = "up",
  delay = 0,
  stagger = false,
  once = true,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      id={id}
      ref={sectionRef}
      style={style}
      className={`w-full max-w-full reveal ${variantClass[variant]} ${
        stagger ? "stagger-children" : ""
      } ${isVisible ? "is-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
