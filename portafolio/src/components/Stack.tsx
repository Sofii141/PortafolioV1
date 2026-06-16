"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import type { StackLevel } from "@/lib/dict";
import {
  Layout,
  Server,
  Database,
  Brain,
  Cloud,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const groupIcons: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  "Bases de datos": Database,
  Databases: Database,
  "IA & Datos": Brain,
  "AI & Data": Brain,
  "DevOps & Cloud": Cloud,
};

const levelStyles: Record<
  StackLevel,
  { dot: string; ring: string; label: string; bar: string }
> = {
  daily: {
    dot: "bg-[color:var(--pink)]",
    ring: "ring-[color:var(--pink)]/30",
    label: "text-[color:var(--pink)]",
    bar: "bg-[color:var(--pink)]",
  },
  frequent: {
    dot: "bg-[color:var(--brown)]",
    ring: "ring-[color:var(--brown)]/25",
    label: "text-[color:var(--brown)]",
    bar: "bg-[color:var(--brown-soft)]",
  },
  exploring: {
    dot: "bg-[color:var(--muted)]",
    ring: "ring-[color:var(--muted)]/20",
    label: "text-[color:var(--muted)]",
    bar: "bg-[color:var(--muted)]/60",
  },
};

export function Stack() {
  const { t } = useI18n();

  const all = t.stack.groups.flatMap((g) => g.items.map((it) => it.name));

  return (
    <section id="stack" className="snap-section py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
            {t.stack.eyebrow}
          </span>
        </motion.div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-3xl"
          >
            {t.stack.title}
          </motion.h2>
          <p className="text-[13px] text-[color:var(--muted)] max-w-sm italic font-display">
            {t.stack.lead}
          </p>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="mt-3 flex flex-wrap items-center gap-4 text-[11px]"
        >
          {(["daily", "frequent", "exploring"] as StackLevel[]).map((lv) => (
            <span
              key={lv}
              className="inline-flex items-center gap-1.5 text-[color:var(--muted)]"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${levelStyles[lv].dot}`}
              />
              <span className="uppercase tracking-[0.18em] font-semibold">
                {t.stack.legend[lv]}
              </span>
            </span>
          ))}
        </motion.div>

        {/* Marquee row */}
        <div
          className="mt-5 mb-7 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex gap-3 w-max animate-marquee">
            {[...all, ...all].map((item, i) => (
              <div
                key={i}
                className="chip whitespace-nowrap text-[12px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Category cards — redesigned */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {t.stack.groups.map((g, i) => {
            const Icon = groupIcons[g.name] || Layout;
            // Partition items by level
            type StackItem = { name: string; level: StackLevel };
            const byLevel: Record<StackLevel, StackItem[]> = {
              daily: g.items.filter((it) => it.level === "daily"),
              frequent: g.items.filter((it) => it.level === "frequent"),
              exploring: g.items.filter((it) => it.level === "exploring"),
            };
            const total = g.items.length;
            const dailyPct = (byLevel.daily.length / total) * 100;
            const frequentPct = (byLevel.frequent.length / total) * 100;
            const exploringPct = (byLevel.exploring.length / total) * 100;

            return (
              <motion.article
                key={g.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="group relative glass-strong rounded-3xl p-4 sm:p-5 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                {/* Decorative glow on hover */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(circle, var(--pink) 0%, transparent 70%)",
                  }}
                />

                {/* Header */}
                <div className="relative flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div
                        aria-hidden
                        className="absolute inset-0 rounded-2xl blur-md opacity-50"
                        style={{
                          background:
                            "linear-gradient(135deg, var(--pink) 0%, var(--brown-soft) 100%)",
                        }}
                      />
                      <div className="relative h-11 w-11 rounded-2xl bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--brown-soft)] flex items-center justify-center text-white shadow-md">
                        <Icon className="h-[18px] w-[18px]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-[17px] sm:text-lg leading-tight tracking-tight">
                        {g.name}
                      </h3>
                      <div className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[color:var(--muted)]">
                        {total} {t.stack.toolsLabel}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-tight text-[color:var(--muted)] opacity-50 mt-0.5">
                    0{i + 1}
                  </span>
                </div>

                {/* Items, grouped by level */}
                <div className="relative space-y-2">
                  {byLevel.daily.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {byLevel.daily.map((item) => (
                        <span
                          key={item.name}
                          title={t.stack.legend.daily}
                          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-semibold bg-[color:var(--pink)] text-white shadow-sm shadow-[color:var(--pink-soft)] hover:-translate-y-0.5 transition-transform"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  )}
                  {byLevel.frequent.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {byLevel.frequent.map((item) => (
                        <span
                          key={item.name}
                          title={t.stack.legend.frequent}
                          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium bg-white/70 border border-[color:var(--border-strong)] text-[color:var(--foreground)] hover:bg-white hover:border-[color:var(--brown-soft)] transition"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brown)]" />
                          {item.name}
                        </span>
                      ))}
                    </div>
                  )}
                  {byLevel.exploring.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {byLevel.exploring.map((item) => (
                        <span
                          key={item.name}
                          title={t.stack.legend.exploring}
                          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium bg-transparent border border-dashed border-[color:var(--border-strong)] text-[color:var(--muted)] hover:text-[color:var(--foreground)] hover:border-[color:var(--pink)] transition"
                        >
                          <Sparkles className="h-2.5 w-2.5 text-[color:var(--pink)]" />
                          {item.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Proficiency bar */}
                <div className="relative mt-4 pt-3 border-t border-[color:var(--border-strong)]/70">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-[color:var(--muted)]">
                      {t.stack.distribution}
                    </span>
                    <span className="text-[9px] font-mono text-[color:var(--muted)] opacity-70">
                      {byLevel.daily.length}·{byLevel.frequent.length}·
                      {byLevel.exploring.length}
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full overflow-hidden bg-[color:var(--background-2)]/60 flex">
                    {dailyPct > 0 && (
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${dailyPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.05 }}
                        className={levelStyles.daily.bar}
                      />
                    )}
                    {frequentPct > 0 && (
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${frequentPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.05 }}
                        className={levelStyles.frequent.bar}
                      />
                    )}
                    {exploringPct > 0 && (
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${exploringPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease, delay: 0.4 + i * 0.05 }}
                        className={levelStyles.exploring.bar}
                      />
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
