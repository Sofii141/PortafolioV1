"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ArrowUpRight, FolderGit2, Sparkles, Lock } from "lucide-react";
import { Github } from "./BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

// Gradient backgrounds for placeholder previews — soft, editorial
const previewGradients = [
  "linear-gradient(135deg, #ff2ea8 0%, #ffb6dd 60%, #fff6e6 100%)",
  "linear-gradient(135deg, #b88b6a 0%, #e8c9a0 50%, #fff6e6 100%)",
  "linear-gradient(135deg, #6b4423 0%, #b88b6a 45%, #ff7ac6 100%)",
];

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="snap-section py-20 px-4 sm:px-6 lg:px-8">
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
            {t.projects.eyebrow}
          </span>
        </motion.div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-2xl"
          >
            {t.projects.title}
          </motion.h2>
          <p className="text-[14px] text-[color:var(--muted)] max-w-md">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {t.projects.placeholderProjects.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group glass-strong rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all"
            >
              {/* Browser chrome */}
              <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-[color:var(--border-strong)] bg-white/50">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-2 text-center text-[9px] font-mono text-[color:var(--muted)] truncate">
                  preview.reserved/{String(i + 1).padStart(2, "0")}
                </div>
                <Lock className="h-2.5 w-2.5 text-[color:var(--muted)]" />
              </div>

              {/* Preview area */}
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{ background: previewGradients[i % previewGradients.length] }}
              >
                {/* Soft highlight */}
                <div
                  className="absolute inset-0 opacity-50 mix-blend-soft-light"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, white 0%, transparent 40%)",
                  }}
                />

                {/* Dotted reserved grid overlay */}
                <div
                  className="absolute inset-4 rounded-2xl border-2 border-dashed border-white/40"
                  aria-hidden
                />

                {/* Number stamp */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[9px] uppercase tracking-[0.18em] font-bold text-[color:var(--foreground)]">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--pink)]" />
                  Vol. 0{i + 1}
                </div>

                {/* Reserved badge */}
                <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[color:var(--foreground)]/85 backdrop-blur text-[9px] uppercase tracking-[0.18em] font-bold text-[color:var(--background)]">
                  <Lock className="h-2.5 w-2.5" />
                  {t.projects.reservedLabel}
                </div>

                {/* Center sparkle watermark */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                  <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                    <Sparkles className="h-4 w-4 text-[color:var(--pink)]" />
                  </div>
                  <div className="mt-2 font-display italic text-white/95 text-base sm:text-lg drop-shadow">
                    {p.kind}
                  </div>
                  <div className="mt-0.5 text-[9px] uppercase tracking-[0.22em] text-white/85 font-bold drop-shadow">
                    {t.projects.comingLabel}
                  </div>
                </div>

                {/* Faux barcode */}
                <div className="absolute bottom-3 left-3 flex items-end gap-[2px] opacity-70">
                  {[3, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1].map((w, ix) => (
                    <span
                      key={ix}
                      style={{ width: `${w}px`, height: "12px" }}
                      className="bg-white"
                    />
                  ))}
                </div>

                {/* Disabled actions placeholder */}
                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  <span
                    aria-label={t.projects.viewCode}
                    title={t.projects.viewCode}
                    className="h-8 w-8 rounded-full bg-white/80 flex items-center justify-center text-[color:var(--foreground)]/50 cursor-not-allowed"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </span>
                  <span
                    aria-label={t.projects.liveDemo}
                    title={t.projects.liveDemo}
                    className="h-8 w-8 rounded-full bg-[color:var(--pink)]/40 text-white/80 flex items-center justify-center cursor-not-allowed"
                  >
                    <Lock className="h-3 w-3" />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--pink)]">
                  {p.kind}
                </div>
                <h3 className="mt-1 font-display text-2xl leading-tight tracking-tight group-hover:text-[color:var(--pink)] transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-[13px] text-[color:var(--muted)] leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="chip text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.a
          href="https://github.com/Sofii141"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] px-5 py-3 text-sm font-semibold hover:bg-[color:var(--brown)] transition-all"
        >
          <FolderGit2 className="h-4 w-4" />
          {t.projects.seeAllOnGithub}
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
