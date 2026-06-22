"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  /** Trigger button classes */
  className?: string;
  /** Full-width layout (Contact card) vs inline pill (Hero) */
  full?: boolean;
  /** Where the popover opens relative to the button */
  align?: "left" | "right";
  /** Open upward instead of downward */
  up?: boolean;
};

export function CVDownload({ className, full = false, align = "left", up = false }: Props) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const options = [
    { code: "es", label: t.contact.cvLang.es, href: "/cv-es.pdf" },
    { code: "en", label: t.contact.cvLang.en, href: "/cv-en.pdf" },
  ];

  return (
    <div className={`relative ${full ? "w-full" : "inline-block"}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={className}
      >
        {full ? (
          <>
            <span className="flex items-center gap-2.5">
              <Download className="h-4 w-4" />
              {t.contact.cv}
            </span>
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </>
        ) : (
          <>
            <Download className="h-3.5 w-3.5" />
            {t.hero.cta2}
          </>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: up ? 8 : -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: up ? 8 : -8, scale: 0.96 }}
            transition={{ duration: 0.2, ease }}
            className={[
              "absolute z-50 w-48 glass-strong rounded-2xl p-2 shadow-2xl",
              up ? "bottom-full mb-2" : "top-full mt-2",
              align === "right" ? "right-0" : "left-0",
            ].join(" ")}
          >
            <div className="px-2 py-1.5 text-[10px] uppercase tracking-[0.18em] font-bold text-[color:var(--muted)]">
              {t.contact.cvLang.prompt}
            </div>
            {options.map((opt) => (
              <a
                key={opt.code}
                href={opt.href}
                download
                onClick={() => setOpen(false)}
                role="menuitem"
                className="flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-[13px] font-semibold text-[color:var(--foreground)] hover:bg-white/70 transition"
              >
                <span className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase text-[color:var(--pink)] font-bold">
                    {opt.code}
                  </span>
                  {opt.label}
                </span>
                <Download className="h-3.5 w-3.5 text-[color:var(--muted)]" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
