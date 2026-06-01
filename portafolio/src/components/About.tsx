"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Sparkles, Quote, Coffee } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="snap-section py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
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
            {t.about.eyebrow}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-[1.15fr_1fr] gap-6 md:gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              {t.about.title.split(" ").map((w, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? (
                    <span className="italic text-[color:var(--brown)]"> {w}</span>
                  ) : (
                    <>{i === 0 ? w : ` ${w}`}</>
                  )}
                </span>
              ))}
            </h2>

            <p className="mt-3 font-display italic text-lg sm:text-xl leading-snug text-[color:var(--brown)]">
              “{t.about.lead}”
            </p>

            <div className="mt-4 space-y-3 text-[13.5px] sm:text-sm leading-relaxed text-[color:var(--muted)] max-w-xl">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Values row */}
            <div className="mt-4 grid grid-cols-3 gap-2 max-w-xl">
              {t.about.values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.08 }}
                  className="rounded-xl border border-[color:var(--border-strong)] bg-white/40 backdrop-blur-sm p-2.5"
                >
                  <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[color:var(--pink)]">
                    {v.label}
                  </div>
                  <div className="mt-0.5 text-[11.5px] leading-snug text-[color:var(--foreground)]">
                    {v.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 chip">
                <Sparkles className="h-3 w-3 text-[color:var(--pink)]" />
                Open to work
              </span>
              <span className="font-script text-xl sm:text-2xl text-[color:var(--brown)] leading-none">
                {t.about.signature}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="glass-strong rounded-3xl p-5 sm:p-6 relative"
          >
            <Quote className="absolute top-5 right-5 h-8 w-8 text-[color:var(--pink-soft)]" />

            {/* Page marker */}
            <div className="absolute -top-2 left-6 px-2 py-0.5 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] text-[9px] uppercase tracking-[0.2em] font-bold">
              About · 02
            </div>

            <div className="grid grid-cols-2 gap-3">
              {t.about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl bg-white/60 border border-[color:var(--border-strong)] p-3.5"
                >
                  <div className="text-[10px] uppercase tracking-[0.15em] text-[color:var(--muted)] font-semibold">
                    {h.label}
                  </div>
                  <div className="mt-1 text-[13px] font-medium text-[color:var(--foreground)]">
                    {h.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Right now mini-tile */}
            <div className="mt-4 rounded-2xl bg-[color:var(--foreground)]/95 text-[color:var(--background)] p-3.5">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--pink-soft)]">
                  <Coffee className="h-3 w-3" />
                  {t.about.nowInto.title}
                </div>
                <span className="text-[9px] font-mono opacity-60">
                  LIVE
                </span>
              </div>
              <ul className="space-y-0.5">
                {t.about.nowInto.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[11.5px] leading-snug flex items-start gap-2 opacity-95"
                  >
                    <span className="text-[color:var(--pink-soft)] mt-0.5 font-bold">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex items-center gap-3 pt-4 border-t border-[color:var(--border-strong)]">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--brown-soft)] flex items-center justify-center text-white font-script text-xl shadow-md">
                AS
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold">Ana Sofia Arango</div>
                <div className="text-[11px] text-[color:var(--muted)]">
                  @Sofii141 · sofiaarango141@gmail.com
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
