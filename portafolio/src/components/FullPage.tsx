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

export function FullPage({
  children,
  ids: idsProp,
}: {
  children: ReactNode;
  ids?: string[];
}) {
  // Collect children as array, extract ids from props (or explicit prop)
  const childArr = useMemo(
    () => Children.toArray(children).filter(isValidElement) as ReactElement[],
    [children],
  );

  const ids = useMemo(
    () =>
      idsProp ??
      childArr.map((c) => {
        const props = c.props as { id?: string };
        return props.id ?? "";
      }),
    [childArr, idsProp],
  );

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportH, setViewportH] = useState(800);
  const lockedUntil = useRef<number>(0);
  const wheelAccumRef = useRef<number>(0);
  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect mobile/tablet — fall back to natural scrolling
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    onChange(mq);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Track viewport height for px-based carousel translation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => setViewportH(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobileRef = useRef(false);
  useEffect(() => {
    isMobileRef.current = isMobile;
  }, [isMobile]);

  const goTo = useCallback(
    (target: number | string, _dir?: Direction) => {
      void _dir;

      const targetIdx =
        typeof target === "string"
          ? ids.findIndex((id) => id === target)
          : target;

      if (targetIdx < 0 || targetIdx >= childArr.length) return;

      // On mobile: scroll the section into view; the IntersectionObserver will sync index
      if (isMobileRef.current && typeof window !== "undefined") {
        const id = ids[targetIdx];
        const el = id ? document.getElementById(id) : null;
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      const now = Date.now();
      if (now < lockedUntil.current) return;

      setIndex((prev) => {
        if (targetIdx === prev) return prev;
        lockedUntil.current = now + TRANSITION_MS;
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

  // Sync URL hash whenever index changes (deferred to avoid Router updates during render)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = ids[index];
    if (!id) return;
    if (location.hash.slice(1) === id) return;
    const handle = setTimeout(() => {
      history.replaceState(null, "", `#${id}`);
    }, 0);
    return () => clearTimeout(handle);
  }, [index, ids]);

  // Wheel, touch, keyboard, hashchange listeners (desktop only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobile) return;

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
  }, [goTo, ids, index, childArr.length, isMobile]);

  // Mobile-only: track active section via IntersectionObserver so Nav/SideDots stay in sync
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isMobile) return;

    const sections = ids
      .map((id) => (id ? document.getElementById(id) : null))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = (visible.target as HTMLElement).id;
          const idx = ids.indexOf(id);
          if (idx >= 0) setIndex(idx);
        }
      },
      { threshold: [0.35, 0.55, 0.75] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isMobile, ids]);

  const value = useMemo<Ctx>(
    () => ({ index, count: childArr.length, ids, goTo }),
    [index, childArr.length, ids, goTo],
  );

  return (
    <FullPageContext.Provider value={value}>
      <Nav />
      <SideDots />
      <ThemeSwitcher />
      {isMobile ? (
        <div
          className="relative w-full"
          data-fp-mode="mobile"
          aria-roledescription="stack"
        >
          {childArr.map((child, i) => (
            <div key={i} className="w-full relative">
              {child}
            </div>
          ))}
        </div>
      ) : (
        <div
          className="fixed inset-0 overflow-hidden touch-pan-y"
          aria-roledescription="carousel"
        >
          <motion.div
            className="absolute top-0 left-0 w-full will-change-transform"
            initial={false}
            animate={{ y: -index * viewportH }}
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

          <TransitionEffects index={index} count={childArr.length} />
        </div>
      )}
    </FullPageContext.Provider>
  );
}

/* ============ Transition Effects ============ */
/* Isolated component — only re-renders when index changes, doesn't disturb the carousel motion.div */
function TransitionEffects({ index, count }: { index: number; count: number }) {
  return (
    <>
      {/* Color wash overlay — flashes pink on every change */}
      <motion.div
        key={`wash-${index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.55, 0] }}
        transition={{
          duration: TRANSITION_MS / 1000,
          ease,
          times: [0, 0.45, 1],
        }}
        className="pointer-events-none fixed inset-0 z-30 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, color-mix(in srgb, var(--pink) 70%, transparent) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Editorial slide bar — sweeps thin pink line across viewport */}
      <motion.div
        key={`sweep-${index}`}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{
          duration: TRANSITION_MS / 1000,
          ease,
          times: [0, 0.35, 1],
        }}
        className="pointer-events-none fixed top-1/2 left-0 right-0 z-30 h-px origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--pink) 90%, transparent) 50%, transparent)",
        }}
        aria-hidden
      />

      {/* Section counter badge — slides in from edge */}
      <motion.div
        key={`label-${index}`}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: [0, 1, 1, 0], x: [24, 0, 0, 24] }}
        transition={{
          duration: (TRANSITION_MS + 400) / 1000,
          ease,
          times: [0, 0.25, 0.8, 1],
        }}
        className="pointer-events-none fixed top-1/2 -translate-y-1/2 right-12 z-30 hidden lg:flex items-center gap-2"
        aria-hidden
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted)]">
          0{index + 1} / 0{count}
        </span>
        <span className="h-px w-8 bg-[color:var(--border-strong)]" />
      </motion.div>
    </>
  );
}
