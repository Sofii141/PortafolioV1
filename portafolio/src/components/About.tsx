"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Sparkles, Quote } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="snap-section py-20 px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
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

            <div className="mt-6 space-y-4 text-[15px] sm:text-base leading-relaxed text-[color:var(--muted)] max-w-xl">
              {t.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 chip">
              <Sparkles className="h-3 w-3 text-[color:var(--pink)]" />
              Open to work
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="glass-strong rounded-3xl p-6 sm:p-7 relative"
          >
            <Quote className="absolute top-5 right-5 h-8 w-8 text-[color:var(--pink-soft)]" />

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

            <div className="mt-5 flex items-center gap-3 pt-5 border-t border-[color:var(--border-strong)]">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[color:var(--pink)] to-[color:var(--brown-soft)] flex items-center justify-center text-white font-script text-xl">
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
