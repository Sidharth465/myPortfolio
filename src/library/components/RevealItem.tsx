import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Variant = "up" | "left" | "right" | "scale" | "fade";

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  /** Stagger index (0, 1, 2…) */
  index?: number;
  /** Base delay between items in ms */
  step?: number;
}

const variantClass: Record<Variant, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal-fade",
};

/** Per-item scroll reveal — great for cards in a grid */
export default function RevealItem({
  children,
  className = "",
  variant = "up",
  index = 0,
  step = 70,
}: RevealItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
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
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = {
    "--reveal-delay": `${Math.min(index, 8) * step}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${variantClass[variant]} ${
        isVisible ? "is-in" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
