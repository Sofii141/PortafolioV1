"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { useFullPage } from "./FullPage";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

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
  const [open, setOpen] = useState(false);

  // Close drawer on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close drawer when active section changes (after click)
  useEffect(() => {
    setOpen(false);
  }, [index]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-4"
      >
        <nav className="glass-strong pill flex items-center gap-1.5 px-2 py-1.5 max-w-[min(960px,calc(100vw-1.5rem))]">
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

          {/* Desktop nav items */}
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

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--foreground)] text-[color:var(--background)]"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu — backdrop + drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 md:hidden bg-[color:var(--foreground)]/35 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menú principal"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.32, ease }}
              className="fixed top-[68px] left-3 right-3 z-50 md:hidden glass-strong rounded-3xl p-3 shadow-2xl"
            >
              <ul className="flex flex-col gap-1">
                {items.map(({ id, labelKey, icon: Icon }, i) => {
                  const targetIdx = ids.indexOf(id);
                  const active = targetIdx === index;
                  return (
                    <motion.li
                      key={id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease, delay: 0.05 + i * 0.04 }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          if (targetIdx >= 0) goTo(targetIdx);
                          setOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-[14px] font-semibold transition-all",
                          active
                            ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                            : "text-[color:var(--foreground)] hover:bg-white/60",
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="h-4 w-4 opacity-80" />
                          {t.nav[labelKey]}
                        </span>
                        <span className="text-[10px] font-mono opacity-60">
                          0{i + 1}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-3 pt-3 border-t border-[color:var(--border-strong)] flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)] font-semibold">
                  Ana Sofia · 2026
                </span>
                <span className="dot-pink" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
