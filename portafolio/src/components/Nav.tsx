"use client";

import { motion } from "framer-motion";
import { Home, User, Code2, FolderGit2, GraduationCap, Mail, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { useFullPage } from "./FullPage";
import { cn } from "@/lib/utils";

const items = [
  { id: "home", labelKey: "home", icon: Home },
  { id: "about", labelKey: "about", icon: User },
  { id: "stack", labelKey: "stack", icon: Code2 },
  { id: "projects", labelKey: "projects", icon: FolderGit2 },
  { id: "experience", labelKey: "experience", icon: GraduationCap },
  { id: "contact", labelKey: "contact", icon: Mail },
] as const;

export function Nav() {
  const { t } = useI18n();
  const { index, ids, goTo } = useFullPage();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="glass-strong pill flex items-center gap-1.5 px-2 py-1.5 max-w-[min(960px,calc(100vw-2rem))]">
        <button
          type="button"
          onClick={() => goTo(0)}
          className="flex items-center gap-1.5 pl-2 pr-1 text-sm font-semibold tracking-tight"
          aria-label="Home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] text-[10px] font-bold">
            AS
          </span>
          <Sparkles className="h-3.5 w-3.5 text-[color:var(--pink)] animate-soft-pulse" />
        </button>

        <div className="hidden md:flex items-center gap-0.5">
          {items.map(({ id, labelKey, icon: Icon }) => {
            const targetIdx = ids.indexOf(id);
            const active = targetIdx === index;
            return (
              <button
                key={id}
                type="button"
                onClick={() => targetIdx >= 0 && goTo(targetIdx)}
                className={cn(
                  "group flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[12px] lg:text-[13px] font-medium transition-all",
                  active
                    ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--foreground)] hover:bg-white/60",
                )}
              >
                <Icon className="h-3.5 w-3.5 opacity-80" />
                {t.nav[labelKey]}
              </button>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-1.5 pl-1">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => {
              const i = ids.indexOf("contact");
              if (i >= 0) goTo(i);
            }}
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] px-3 py-1.5 text-[12px] font-semibold hover:bg-[color:var(--brown)] transition-colors"
          >
            {t.nav.contact}
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--pink)]" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
