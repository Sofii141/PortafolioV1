"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ArrowUpRight, FolderGit2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Github } from "./BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

// Gradient backgrounds for the preview area — soft, editorial
const previewGradients = [
  "linear-gradient(135deg, #ff2ea8 0%, #ffb6dd 60%, #fff6e6 100%)",
  "linear-gradient(135deg, #6b4423 0%, #b88b6a 45%, #ff7ac6 100%)",
  "linear-gradient(135deg, #b88b6a 0%, #e8c9a0 50%, #fff6e6 100%)",
  "linear-gradient(135deg, #ff7a5c 0%, #ffb6dd 55%, #fff6e6 100%)",
  "linear-gradient(135deg, #9b3a3a 0%, #d4856b 50%, #ffd4c2 100%)",
  "linear-gradient(135deg, #ff2ea8 0%, #b88b6a 60%, #e8c9a0 100%)",
];

// Pretty-print a URL for the browser chrome bar
function prettyUrl(p: { demo?: string; repo?: string }) {
  const raw = p.demo || p.repo || "";
  return raw.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function Projects() {
  const { t } = useI18n();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = first ? first.offsetWidth : 340;
    const gap = 16;
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="projects" className="snap-section py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="dot-pink" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[color:var(--muted)]">
            {t.projects.eyebrow}
          </span>
        </motion.div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight max-w-2xl"
          >
            {t.projects.title}
          </motion.h2>
          <div className="flex flex-col gap-3 max-w-md">
            <p className="text-[14px] text-[color:var(--muted)]">
              {t.projects.subtitle}
            </p>
            {/* Arrow controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCards(-1)}
                aria-label="Anterior"
                className="h-10 w-10 rounded-full glass-strong flex items-center justify-center hover:bg-white hover:-translate-x-0.5 transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCards(1)}
                aria-label="Siguiente"
                className="h-10 w-10 rounded-full glass-strong flex items-center justify-center hover:bg-white hover:translate-x-0.5 transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal carousel */}
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          data-fp-scroll="true"
        >
          {t.projects.featured.map((p, i) => {
            const primary = p.demo || p.repo;
            return (
              <motion.article
                key={p.name}
                data-card
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.07 }}
                className="group glass-strong rounded-3xl overflow-hidden flex flex-col shrink-0 w-[280px] sm:w-[320px] snap-start hover:-translate-y-1 hover:shadow-2xl transition-all"
              >
                {/* Browser chrome */}
                <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-[color:var(--border-strong)] bg-white/50">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 mx-2 text-center text-[9px] font-mono text-[color:var(--muted)] truncate">
                    {prettyUrl(p)}
                  </div>
                  <ArrowUpRight className="h-2.5 w-2.5 text-[color:var(--muted)]" />
                </div>

                {/* Preview area */}
                <div
                  className="relative aspect-[16/9] overflow-hidden"
                  style={{ background: previewGradients[i % previewGradients.length] }}
                >
                  <div
                    className="absolute inset-0 opacity-50 mix-blend-soft-light"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, white 0%, transparent 40%)",
                    }}
                  />

                  {/* Number stamp */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[9px] uppercase tracking-[0.18em] font-bold text-[color:var(--foreground)]">
                    <span className="h-1 w-1 rounded-full bg-[color:var(--pink)]" />
                    Vol. 0{i + 1}
                  </div>

                  {/* Highlight badge */}
                  {p.highlight && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[color:var(--foreground)]/85 backdrop-blur text-[9px] uppercase tracking-[0.18em] font-bold text-[color:var(--background)]">
                      {p.highlight}
                    </div>
                  )}

                  {/* Center label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                    <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Sparkles className="h-4 w-4 text-[color:var(--pink)]" />
                    </div>
                    <div className="mt-2 font-display italic text-white/95 text-base sm:text-lg drop-shadow">
                      {p.kind}
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

                  {/* Action links */}
                  <div className="absolute bottom-3 right-3 flex gap-1.5">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} — ${t.projects.viewCode}`}
                        title={t.projects.viewCode}
                        className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-[color:var(--foreground)] shadow-sm hover:bg-white hover:scale-110 transition"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.name} — ${t.projects.liveDemo}`}
                        title={t.projects.liveDemo}
                        className="h-8 w-8 rounded-full bg-[color:var(--pink)] text-white flex items-center justify-center shadow-sm hover:scale-110 transition"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--pink)]">
                    {p.kind}
                  </div>
                  <h3 className="mt-1 font-display text-2xl leading-tight tracking-tight">
                    <a
                      href={primary}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[color:var(--pink)] transition-colors"
                    >
                      {p.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-[12.5px] text-[color:var(--muted)] leading-relaxed flex-1 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="chip text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}

          {/* Trailing spacer so last card isn't flush to edge */}
          <div className="shrink-0 w-1" aria-hidden />
        </div>

        <motion.a
          href="https://github.com/Sofii141"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] px-5 py-3 text-sm font-semibold hover:bg-[color:var(--brown)] transition-all"
        >
          <FolderGit2 className="h-4 w-4" />
          {t.projects.seeAllOnGithub}
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
