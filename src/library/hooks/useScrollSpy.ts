import { useEffect, useRef } from "react";

const SECTION_IDS = [
  "home",
  "experience",
  "skills",
  "projects",
  "contactus",
] as const;

/**
 * Keeps navbar highlight in sync while scrolling up/down.
 * Picks the section whose top has most recently crossed below the navbar.
 */
export function useScrollSpy(
  setActiveSection: (id: string) => void,
  enabled = true
) {
  const setRef = useRef(setActiveSection);
  setRef.current = setActiveSection;

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const header = document.querySelector("header");
      const offset = (header?.offsetHeight ?? 64) + 24;
      const marker = window.scrollY + offset;

      let current: string = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }

      // Near bottom of page → force last section
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 8) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }

      setRef.current(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);
}
