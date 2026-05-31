"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import {
  Layout,
  Server,
  Database,
  Brain,
  Cloud,
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

export function Stack() {
  const { t } = useI18n();

  const all = t.stack.groups.flatMap((g) => g.items);

  return (
    <section id="stack" className="snap-section py-20 px-4 sm:px-6 lg:px-8">
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

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-3xl"
        >
          {t.stack.title}
        </motion.h2>

        {/* Marquee row */}
        <div
          className="mt-6 mb-8 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden"
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {t.stack.groups.map((g, i) => {
            const Icon = groupIcons[g.name] || Layout;
            return (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.06 }}
                className="glass-strong rounded-3xl p-4 sm:p-5 hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--brown-soft)] flex items-center justify-center text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-[14px]">{g.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="chip text-[11px] hover:bg-white hover:border-[color:var(--pink)] transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
