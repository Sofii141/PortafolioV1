"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import {
  Mail,
  Download,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  Globe,
  Languages,
  Zap,
} from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

const ease = [0.22, 1, 0.36, 1] as const;
const EMAIL = "sofiaarango141@gmail.com";

export function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const availabilityRows = [
    { icon: Globe, label: t.contact.availability.timezone },
    { icon: Clock, label: t.contact.availability.hours },
    { icon: Zap, label: t.contact.availability.response },
    { icon: Languages, label: t.contact.availability.languages },
  ];

  return (
    <section id="contact" className="snap-section py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="glass-strong rounded-[36px] p-8 sm:p-12 lg:p-14 relative overflow-hidden"
        >
          {/* Decorative blob */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,46,168,0.45) 0%, transparent 70%)",
            }}
          />

          {/* Page marker */}
          <div className="absolute top-5 right-5 hidden sm:flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] font-bold text-[color:var(--muted)]">
            <span className="h-px w-6 bg-[color:var(--border-strong)]" />
            Pág. 06 · Final
          </div>

          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 items-start">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="dot-pink" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[color:var(--muted)]">
                  {t.contact.eyebrow}
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {t.contact.title.split(" ").map((w, i, arr) => (
                  <span key={i}>
                    {i === arr.length - 1 ? (
                      <span className="italic text-[color:var(--brown)]"> {w}</span>
                    ) : (
                      <>{i === 0 ? w : ` ${w}`}</>
                    )}
                  </span>
                ))}
              </h2>
              <p className="mt-4 text-[15px] text-[color:var(--muted)] leading-relaxed max-w-lg">
                {t.contact.subtitle}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 border border-[color:var(--border-strong)] pl-4 pr-1 py-1">
                <Mail className="h-3.5 w-3.5 text-[color:var(--pink)]" />
                <span className="text-[13px] font-mono">{EMAIL}</span>
                <button
                  onClick={copy}
                  className="ml-1 h-7 w-7 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] flex items-center justify-center hover:bg-[color:var(--brown)] transition"
                  aria-label={t.contact.copy}
                >
                  {copied ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
              {copied && (
                <span className="ml-3 text-[12px] text-[color:var(--pink)] font-semibold">
                  {t.contact.copied}
                </span>
              )}

              {/* Availability card */}
              <div className="mt-7 rounded-2xl bg-white/55 border border-[color:var(--border-strong)] backdrop-blur-sm p-4 max-w-lg">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-[color:var(--pink)]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                    </span>
                    {t.contact.availability.title}
                  </div>
                  <span className="text-[9px] font-mono text-[color:var(--muted)] opacity-60">
                    LIVE
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {availabilityRows.map((row, i) => {
                    const Icon = row.icon;
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-[12px] text-[color:var(--foreground)]"
                      >
                        <Icon className="h-3.5 w-3.5 text-[color:var(--brown)] flex-shrink-0" />
                        <span className="leading-tight">{row.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 font-script text-2xl sm:text-3xl text-[color:var(--brown)] leading-none">
                {t.contact.signature}
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-between gap-3 rounded-2xl bg-[color:var(--pink)] text-white px-5 py-4 font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-[color:var(--pink-soft)]"
              >
                <span className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4" />
                  {t.contact.email}
                </span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/cv.pdf"
                download
                className="group flex items-center justify-between gap-3 rounded-2xl bg-white/80 border border-[color:var(--border-strong)] px-5 py-4 font-semibold hover:bg-white transition"
              >
                <span className="flex items-center gap-2.5">
                  <Download className="h-4 w-4" />
                  {t.contact.cv}
                </span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://github.com/Sofii141"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-2 rounded-2xl bg-white/70 border border-[color:var(--border-strong)] px-4 py-3.5 font-semibold hover:bg-white transition"
                >
                  <span className="flex items-center gap-2 text-[13px]">
                    <Github className="h-4 w-4" />
                    {t.contact.github}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ana-sofia-arango-yanza-029310368/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-2 rounded-2xl bg-white/70 border border-[color:var(--border-strong)] px-4 py-3.5 font-semibold hover:bg-white transition"
                >
                  <span className="flex items-center gap-2 text-[13px]">
                    <Linkedin className="h-4 w-4" />
                    {t.contact.linkedin}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </div>

              {/* Mini footer inside the card */}
              <div className="pt-3 mt-3 border-t border-[color:var(--border-strong)] flex items-center justify-between text-[10px] text-[color:var(--muted)]">
                <span className="font-mono">{t.footer.version}</span>
                <span>{t.footer.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
