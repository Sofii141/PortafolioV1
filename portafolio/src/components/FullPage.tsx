"use client";

import {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { SideDots } from "./SideDots";
import { ThemeSwitcher } from "./ThemeSwitcher";

type Direction = "next" | "prev";

type Ctx = {
  index: number;
  count: number;
  ids: string[];
  goTo: (target: number | string, dir?: Direction) => void;
};

const FullPageContext = createContext<Ctx | null>(null);

export function useFullPage() {
  const ctx = useContext(FullPageContext);
  if (!ctx) throw new Error("useFullPage must be used inside <FullPage>");
  return ctx;
}

const TRANSITION_MS = 800;
const WHEEL_THRESHOLD = 10;
const TOUCH_THRESHOLD = 55;
const ease = [0.83, 0, 0.17, 1] as const;

export function FullPage({ children }: { children: ReactNode }) {
  // Collect children as array, extract ids from props
  const childArr = useMemo(
    () => Children.toArray(children).filter(isValidElement) as ReactElement[],
    [children],
  );

  const ids = useMemo(
    () =>
      childArr.map((c) => {
        const props = c.props as { id?: string };
        return props.id ?? "";
      }),
    [childArr],
  );

  const [index, setIndex] = useState(0);
  const lockedUntil = useRef<number>(0);
  const wheelAccumRef = useRef<number>(0);
  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (target: number | string, _dir?: Direction) => {
      void _dir;
      const now = Date.now();
      if (now < lockedUntil.current) return;

      const targetIdx =
        typeof target === "string"
          ? ids.findIndex((id) => id === target)
          : target;

      if (targetIdx < 0 || targetIdx >= childArr.length) return;

      setIndex((prev) => {
        if (targetIdx === prev) return prev;
        lockedUntil.current = now + TRANSITION_MS;

        // Sync URL hash without scroll jump
        const id = ids[targetIdx];
        if (id && typeof window !== "undefined") {
          history.replaceState(null, "", `#${id}`);
        }
        return targetIdx;
      });
    },
    [childArr.length, ids],
  );

  // Initialize from URL hash
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = location.hash.slice(1);
    if (!id) return;
    const idx = ids.findIndex((i) => i === id);
    if (idx > 0) {
      setIndex(idx);
    }
  }, [ids]);

  // Wheel, touch, keyboard, hashchange listeners
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SCROLL_EDGE_TOLERANCE = 2;
    const SCROLLABLE_MIN_OVERFLOW = 80;
    const isScrollableY = (el: HTMLElement) => {
      // Treat as truly "scrollable" only if there's enough overflow to be meaningful
      // and the element opts in via data-fp-scroll. Tiny incidental overflow (a few
      // pixels from rounding) should not block fullpage navigation.
      if (el.dataset?.fpScroll !== "true") return false;
      const style = getComputedStyle(el);
      const oy = style.overflowY;
      if (oy !== "auto" && oy !== "scroll") return false;
      return el.scrollHeight - el.clientHeight > SCROLLABLE_MIN_OVERFLOW;
    };

    const handleWheel = (e: WheelEvent) => {
      // If the event originates inside a scrollable element that isn't at its edge,
      // let the user scroll within it.
      const target = e.target as HTMLElement | null;
      if (target && target instanceof HTMLElement) {
        let el: HTMLElement | null = target;
        while (el && el !== document.body) {
          if (isScrollableY(el)) {
            const atTop = el.scrollTop <= SCROLL_EDGE_TOLERANCE;
            const atBottom =
              Math.ceil(el.scrollTop + el.clientHeight) >=
              el.scrollHeight - SCROLL_EDGE_TOLERANCE;
            if (e.deltaY > 0 && !atBottom) return;
            if (e.deltaY < 0 && !atTop) return;
            break;
          }
          el = el.parentElement;
        }
      }

      // Accumulate to allow trackpad bursts
      wheelAccumRef.current += e.deltaY;
      if (wheelTimerRef.current) clearTimeout(wheelTimerRef.current);
      wheelTimerRef.current = setTimeout(() => {
        wheelAccumRef.current = 0;
      }, 160);

      if (Math.abs(wheelAccumRef.current) < WHEEL_THRESHOLD) return;
      const dir: Direction = wheelAccumRef.current > 0 ? "next" : "prev";
      wheelAccumRef.current = 0;
      goTo(dir === "next" ? index + 1 : index - 1, dir);
    };

    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartedInScrollable = false;
    let scrollableEl: HTMLElement | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      touchStartedInScrollable = false;
      scrollableEl = null;
      let el = e.target as HTMLElement | null;
      while (el && el !== document.body) {
        if (isScrollableY(el)) {
          touchStartedInScrollable = true;
          scrollableEl = el;
          break;
        }
        el = el.parentElement;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const endX = e.changedTouches[0].clientX;
      const dy = touchStartY - endY;
      const dx = touchStartX - endX;
      if (Math.abs(dy) < TOUCH_THRESHOLD) return;
      if (Math.abs(dx) > Math.abs(dy)) return; // horizontal swipe — ignore

      if (touchStartedInScrollable && scrollableEl) {
        const atTop = scrollableEl.scrollTop <= SCROLL_EDGE_TOLERANCE;
        const atBottom =
          Math.ceil(scrollableEl.scrollTop + scrollableEl.clientHeight) >=
          scrollableEl.scrollHeight - SCROLL_EDGE_TOLERANCE;
        if (dy > 0 && !atBottom) return;
        if (dy < 0 && !atTop) return;
      }

      const dir: Direction = dy > 0 ? "next" : "prev";
      goTo(dir === "next" ? index + 1 : index - 1, dir);
    };

    const handleKey = (e: KeyboardEvent) => {
      // Ignore when typing in inputs
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        goTo(index + 1, "next");
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goTo(index - 1, "prev");
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0, "prev");
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(childArr.length - 1, "next");
      }
    };

    const handleHash = () => {
      const id = location.hash.slice(1);
      if (!id) return;
      const idx = ids.findIndex((i) => i === id);
      if (idx >= 0) goTo(idx);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("hashchange", handleHash);
    };
  }, [goTo, ids, index, childArr.length]);

  const value = useMemo<Ctx>(
    () => ({ index, count: childArr.length, ids, goTo }),
    [index, childArr.length, ids, goTo],
  );

  return (
    <FullPageContext.Provider value={value}>
      <Nav />
      <SideDots />
      <ThemeSwitcher />
      <div
        className="fixed inset-0 overflow-hidden touch-pan-y"
        aria-roledescription="carousel"
      >
        <motion.div
          className="absolute top-0 left-0 w-full will-change-transform"
          animate={{ y: `-${(index * 100) / childArr.length}%` }}
          transition={{ duration: TRANSITION_MS / 1000, ease }}
          style={{ height: `${childArr.length * 100}%` }}
        >
          {childArr.map((child, i) => (
            <div
              key={i}
              className="h-[100svh] w-full relative"
              aria-hidden={i !== index}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    </FullPageContext.Provider>
  );
}
