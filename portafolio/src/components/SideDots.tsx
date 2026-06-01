"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { useFullPage } from "./FullPage";

const labelMap: Record<string, "home" | "about" | "stack" | "projects" | "experience" | "contact"> = {
  home: "home",
  about: "about",
  stack: "stack",
  projects: "projects",
  experience: "experience",
  contact: "contact",
};

export function SideDots() {
  const { t } = useI18n();
  const { index, ids, goTo } = useFullPage();

  return (
    <nav
      aria-label="Section navigation"
      className="hidden md:flex fixed right-2 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2.5 sm:gap-3"
    >
      {ids.map((id, i) => {
        const isActive = index === i;
        const labelKey = labelMap[id];
        const label = labelKey ? t.nav[labelKey] : id;
        return (
          <button
            key={id || i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={label}
            aria-current={isActive ? "true" : undefined}
            className="group relative flex items-center"
          >
            <span
              className={cn(
                "absolute right-full mr-3 px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap pointer-events-none transition-all",
                "bg-[color:var(--foreground)] text-[color:var(--background)]",
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
              )}
            >
              {label}
            </span>

            <span
              className={cn(
                "block rounded-full transition-all duration-300 border",
                isActive
                  ? "h-7 w-2.5 bg-[color:var(--pink)] border-transparent shadow-[0_0_0_4px_rgba(255,46,168,0.18)]"
                  : "h-2.5 w-2.5 bg-white/70 border-[color:var(--border-strong)] group-hover:bg-white",
              )}
            />
          </button>
        );
      })}
    </nav>
  );
}
