import { useEffect, useState, type RefObject } from "react";

type TimelineProgress = {
  progress: number;
  activeIndex: number;
};

/**
 * Scroll-linked vertical timeline progress.
 * Progress is 0–1 based on how far the viewport center has traveled
 * through the timeline container. activeIndex maps progress to item count.
 */
export function useTimelineProgress(
  containerRef: RefObject<HTMLElement | null>,
  itemCount: number
): TimelineProgress {
  const [state, setState] = useState<TimelineProgress>({
    progress: 0,
    activeIndex: 0,
  });

  useEffect(() => {
    const node = containerRef.current;
    if (!node || itemCount <= 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setState({ progress: 1, activeIndex: itemCount - 1 });
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewCenter = window.innerHeight * 0.45;
      const start = rect.top;
      const end = rect.bottom;
      const span = Math.max(end - start, 1);

      // 0 when center hits top of timeline, 1 when center hits bottom
      const raw = (viewCenter - start) / span;
      const progress = Math.min(1, Math.max(0, raw));
      const activeIndex = Math.min(
        itemCount - 1,
        Math.max(0, Math.floor(progress * itemCount))
      );

      setState((prev) => {
        if (
          Math.abs(prev.progress - progress) < 0.002 &&
          prev.activeIndex === activeIndex
        ) {
          return prev;
        }
        return { progress, activeIndex };
      });
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
  }, [containerRef, itemCount]);

  return state;
}
