"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type TabKey = "education" | "work" | "certs";

const tabIcons: Record<TabKey, typeof GraduationCap> = {
  education: GraduationCap,
  work: Briefcase,
  certs: Award,
};

export function Experience() {
  const { t } = useI18n();
  const [tab, setTab] = useState<TabKey>("education");

  const items = t.experience[tab];

  return (
    <section id="experience" className="snap-section py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="dot-pink" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[color:var(--muted)]">
            {t.experience.eyebrow}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl mb-8"
        >
          {t.experience.title}
        </motion.h2>

        {/* Tabs pill + count */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-1 p-1 rounded-full glass-strong">
            {(Object.keys(t.experience.tabs) as TabKey[]).map((key) => {
              const Icon = tabIcons[key];
              const active = tab === key;
              return (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all",
                    active
                      ? "bg-[color:var(--foreground)] text-[color:var(--background)]"
                      : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {t.experience.tabs[key]}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-bold text-[color:var(--muted)]">
            <span className="font-mono text-[color:var(--foreground)]">
              {String(items.length).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-[color:var(--border-strong)]" />
            <span>{t.experience.tabs[tab]}</span>
          </div>
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease }}
            className="relative pl-6 sm:pl-8 space-y-5 border-l-2 border-dashed border-[color:var(--border-strong)]"
          >
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="relative glass-strong rounded-2xl p-5"
              >
                <span className="absolute -left-[33px] sm:-left-[41px] top-6 h-4 w-4 rounded-full bg-[color:var(--pink)] border-4 border-[color:var(--background)]" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-[color:var(--muted)] opacity-60">
                      №{String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl leading-tight">
                      {item.what}
                    </h3>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-[color:var(--muted)]">
                    {item.when}
                  </span>
                </div>
                <div className="text-[13px] font-medium text-[color:var(--brown)] mb-2">
                  {item.where}
                </div>
                <p className="text-[13px] text-[color:var(--muted)] leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
