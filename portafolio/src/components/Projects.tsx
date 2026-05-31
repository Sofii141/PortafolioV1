"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import { Github } from "./BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;

// Gradient backgrounds for placeholder previews
const previewGradients = [
  "linear-gradient(135deg, #ff2ea8 0%, #ffb6dd 100%)",
  "linear-gradient(135deg, #b88b6a 0%, #e8c9a0 100%)",
  "linear-gradient(135deg, #6b4423 0%, #b88b6a 50%, #ff2ea8 100%)",
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
              className="group glass-strong rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden"
                style={{ background: previewGradients[i % previewGradients.length] }}
              >
                <div
                  className="absolute inset-0 opacity-50 mix-blend-soft-light"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 20%, white 0%, transparent 40%)",
                  }}
                />
                <div className="absolute top-3 left-3 chip text-[10px]">
                  0{i + 1}
                </div>
                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  <a
                    href="#"
                    aria-label={t.projects.viewCode}
                    className="h-8 w-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-[color:var(--foreground)] transition"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    aria-label={t.projects.liveDemo}
                    className="h-8 w-8 rounded-full bg-[color:var(--pink)] text-white flex items-center justify-center hover:scale-105 transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-display text-2xl leading-tight tracking-tight group-hover:text-[color:var(--pink)] transition-colors">
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
