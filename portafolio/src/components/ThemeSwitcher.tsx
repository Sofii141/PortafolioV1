"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Palette, Check, X } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function ThemeSwitcher() {
  const { theme, themes, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click + escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
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

  return (
    <div className="fixed left-3 sm:left-5 bottom-4 sm:bottom-5 z-50" ref={panelRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Cambiar paleta de colores"
        aria-expanded={open}
        className="glass-strong rounded-full h-11 w-11 sm:h-12 sm:w-12 flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${theme.swatch.from} 0%, ${theme.swatch.via ?? theme.swatch.from} 50%, ${theme.swatch.to} 100%)`,
        }}
      >
        <Palette
          className="h-4 w-4 sm:h-5 sm:w-5"
          style={{ color: "var(--foreground)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.25, ease }}
            className="absolute left-0 bottom-full mb-3 w-[300px] sm:w-[340px] glass-strong rounded-2xl p-3 sm:p-4 shadow-2xl"
            role="dialog"
            aria-label="Paletas disponibles"
          >
            <div className="flex items-start justify-between gap-2 mb-3 px-1">
              <div>
                <h3 className="font-display text-lg leading-tight">
                  Paleta de colores
                </h3>
                <p className="text-[11px] text-[color:var(--muted)] mt-0.5">
                  Click en una para probarla en vivo.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="h-6 w-6 rounded-full bg-white/40 hover:bg-white/80 flex items-center justify-center transition flex-shrink-0"
              >
                <X className="h-3 w-3" style={{ color: "var(--foreground)" }} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pr-1" data-fp-scroll="true">
              {themes.map((t) => {
                const active = t.id === theme.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setThemeId(t.id)}
                    className={cn(
                      "group relative text-left rounded-xl p-2 border transition-all overflow-hidden",
                      active
                        ? "border-[color:var(--pink)] shadow-[0_0_0_3px_rgba(255,46,168,0.15)]"
                        : "border-[color:var(--border-strong)] hover:border-[color:var(--brown-soft)]",
                    )}
                    style={{
                      background:
                        "color-mix(in srgb, var(--card-strong) 70%, transparent)",
                    }}
                    aria-pressed={active}
                  >
                    {/* Color preview strip */}
                    <div
                      className="h-12 w-full rounded-lg mb-2 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${t.swatch.from} 0%, ${t.swatch.via ?? t.swatch.from} 50%, ${t.swatch.to} 100%)`,
                      }}
                    >
                      {/* Accent dot */}
                      <span
                        className="absolute right-1.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white/80"
                        style={{ background: t.swatch.accent }}
                      />
                      {active && (
                        <span className="absolute left-1.5 top-1.5 h-5 w-5 rounded-full bg-white/90 flex items-center justify-center">
                          <Check className="h-3 w-3 text-[color:var(--pink)]" />
                        </span>
                      )}
                    </div>
                    <div className="px-0.5">
                      <div className="text-[12px] font-semibold leading-tight" style={{ color: "var(--foreground)" }}>
                        {t.name}
                      </div>
                      <div className="text-[10px] mt-0.5" style={{ color: "var(--muted)" }}>
                        {t.tagline}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
