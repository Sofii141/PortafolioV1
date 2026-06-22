"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Star,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { Github } from "./BrandIcons";
import { useFullPage } from "./FullPage";
import { CVDownload } from "./CVDownload";

const ease = [0.22, 1, 0.36, 1] as const;
const stagger = (i: number, base = 0.07, start = 0.25) => start + i * base;

function useParallax(strength = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      x.set(dx * strength);
      y.set(dy * strength);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [x, y, strength]);

  return { x: sx, y: sy };
}

export function Hero() {
  const { t } = useI18n();
  const { goTo, ids } = useFullPage();
  const parallax = useParallax(8);

  return (
    <section
      id="home"
      className="relative w-full md:h-full md:overflow-hidden px-4 sm:px-6 lg:px-10 pt-20 pb-8 sm:pt-24 sm:pb-4 flex flex-col gap-4 md:gap-0"
    >
      {/* MASTHEAD */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.05 }}
        className="flex justify-between items-center text-[10px] uppercase tracking-[0.22em] font-semibold text-[color:var(--muted)] shrink-0"
      >
        <span className="flex items-center gap-2">
          <span className="dot-pink" />
          <span>{t.hero.masthead}</span>
        </span>
        <span className="hidden sm:flex items-center gap-3">
          <span>{t.hero.issue}</span>
          <span className="font-display text-sm leading-none text-[color:var(--brown)]">·</span>
          <span>{t.hero.year}</span>
        </span>
      </motion.header>

      {/* MAIN — split: left=text/stats/CTAs, right=photo composition */}
      <main className="md:flex-1 grid grid-cols-12 gap-6 md:gap-4 lg:gap-5 items-stretch min-h-0 md:py-2 sm:py-3">
        {/* LEFT */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 flex flex-col justify-center gap-2.5 sm:gap-3 lg:gap-3.5">
          {/* Tagline pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            className="inline-flex items-center gap-1.5 chip text-[11px]"
          >
            <Sparkles className="h-3 w-3 text-[color:var(--pink)]" />
            {t.hero.tagline}
          </motion.div>

          {/* Huge name */}
          <h1
            aria-label="Ana Sofia Arango Yanza"
            className="font-display tracking-[-0.03em] leading-[0.95] text-[color:var(--foreground)]"
          >
            <span className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 md:gap-x-4">
              <RevealLine
                text="Ana"
                delay={0.25}
                className="text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[96px]"
              />
              <RevealLine
                text="Sofia"
                delay={0.4}
                italic
                className="text-[18vw] sm:text-[13vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[108px] text-[color:var(--brown)]"
              />
            </span>
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.85 }}
              className="block font-display italic text-[16px] sm:text-[20px] md:text-[22px] lg:text-[28px] tracking-tight text-[color:var(--muted)] mt-1 sm:mt-1.5"
            >
              {t.hero.surname}
            </motion.span>
          </h1>

          {/* Role + location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.95 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-[12px] text-[color:var(--muted)]"
          >
            <span className="font-medium text-[color:var(--foreground)]/80">
              {t.hero.role}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-[color:var(--pink)]" />
              Popayán, Colombia
            </span>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 1.05 }}
            className="grid grid-cols-4 gap-2 sm:gap-2.5 max-w-[560px]"
          >
            {t.hero.stats.map((s, i) => (
              <Stat key={i} stat={s} accent={i === 1} />
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 1.2 }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const i = ids.indexOf("projects");
                if (i >= 0) goTo(i);
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] px-4 sm:px-5 py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-semibold hover:bg-[color:var(--brown)] transition-all"
            >
              {t.hero.cta1}
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <CVDownload
              className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-[color:var(--border-strong)] px-4 sm:px-5 py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-semibold text-[color:var(--foreground)] hover:bg-white transition-all cursor-pointer"
            />
          </motion.div>
        </div>

        {/* RIGHT — photo composition (2 photos + magazine details) */}
        <motion.div
          style={{ x: parallax.x, y: parallax.y }}
          className="col-span-12 md:col-span-6 lg:col-span-6 relative flex justify-center items-center h-[340px] sm:h-[400px] md:h-auto"
        >
          <PhotoComposition />
        </motion.div>
      </main>

      {/* BENTO TILES STRIP (bottom) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-2.5 shrink-0 mt-4 md:mt-3">
        <StackTile delay={stagger(0)} />
        <AvailableTile delay={stagger(1)} />
        <HowTile delay={stagger(2)} />
        <ExploringTile delay={stagger(3)} />
        <div className="hidden sm:block sm:col-span-1">
          <CodeTile delay={stagger(4)} />
        </div>
      </div>
    </section>
  );
}

/* ============ Photo ============ */

function PhotoComposition() {
  const [primaryError, setPrimaryError] = useState(false);
  const [secondaryError, setSecondaryError] = useState(false);

  return (
    <div className="relative w-full h-full max-h-[460px] sm:max-h-[480px] lg:max-h-[540px] flex items-center justify-center">
      {/* Halo blob */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[110%] h-[80%] rounded-full blur-3xl opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, var(--pink-soft) 0%, transparent 65%)",
        }}
      />

      {/* Decorative back card (offset) */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 4 }}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
        className="absolute top-[6%] right-[8%] w-[72%] h-[78%] rounded-[28px] border border-[color:var(--border-strong)] bg-[color:var(--card-strong)] origin-center"
        aria-hidden
      />

      {/* ==== PRIMARY PHOTO ==== */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.55 }}
        className="relative w-[88%] h-[94%] z-10"
      >
        <div className="relative h-full w-full rounded-[24px] overflow-hidden border-[3px] border-[color:var(--foreground)]/12 shadow-2xl bg-[color:var(--background-2)]">
          {/* Fallback gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--pink-soft) 0%, var(--beige) 45%, var(--brown-soft) 100%)",
            }}
          />
          {primaryError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 z-20">
              <div className="font-script text-[80px] lg:text-[110px] leading-none text-white/95 drop-shadow-lg">
                Ana
              </div>
              <div className="font-display italic text-base lg:text-lg text-white/90 -mt-1">
                Sofia
              </div>
              <div className="mt-2 text-[9px] uppercase tracking-[0.22em] text-white/85 px-3">
                Falta /public/profile.jpeg
              </div>
            </div>
          )}

          {!primaryError && (
            <Image
              src="/profile.jpeg"
              alt="Ana Sofia Arango Yanza"
              fill
              priority
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 400px"
              className="object-cover"
              style={{ objectPosition: "50% 30%" }}
              onError={() => setPrimaryError(true)}
            />
          )}

          {/* Top gradient for label readability */}
          <div
            className="absolute inset-x-0 top-0 h-1/4 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.32), transparent)",
            }}
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            }}
          />

          {/* Top-left badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[8px] uppercase tracking-[0.18em] font-bold text-[color:var(--foreground)]">
            <span className="h-1 w-1 rounded-full bg-[color:var(--pink)]" />
            Cover
          </div>

          {/* Top-right page number */}
          <div className="absolute top-2.5 right-2.5 text-[8px] uppercase tracking-[0.2em] text-white font-bold drop-shadow-md">
            P. 01
          </div>

          {/* Bottom-left date stamp */}
          <div className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.2em] text-white font-bold drop-shadow-md">
            № 01 · COL · 2026
          </div>

          {/* Bottom-right star */}
          <div className="absolute bottom-2 right-2 h-7 w-7 rounded-full bg-white/95 flex items-center justify-center shadow-md">
            <Star className="h-3.5 w-3.5 text-[color:var(--pink)] fill-[color:var(--pink)]" />
          </div>
        </div>

        {/* Sticker top-right rotated outside the photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 10 }}
          transition={{ duration: 0.6, ease, delay: 1.2 }}
          className="absolute -top-3 -right-4 h-16 w-16 sm:h-[72px] sm:w-[72px] rounded-full bg-[color:var(--pink)] text-white flex flex-col items-center justify-center text-center shadow-xl z-30"
        >
          <Sparkles className="h-3 w-3 mb-0.5" />
          <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold leading-tight">
            Full Stack
            <br />
            + AI
          </span>
        </motion.div>

        {/* Tape strip top */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, ease, delay: 1.0 }}
          className="absolute -top-2 left-8 h-3 w-14 bg-[color:var(--beige)] origin-left -rotate-3 opacity-80 shadow-sm z-30"
        />
      </motion.div>

      {/* ==== SECONDARY POLAROID ==== */}
      <motion.div
        initial={{ opacity: 0, y: 18, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: -7 }}
        transition={{ duration: 0.9, ease, delay: 0.85 }}
        className="absolute bottom-[2%] left-[2%] z-20 w-[42%] max-w-[150px]"
      >
        <div className="relative bg-white p-1.5 pb-7 rounded-md shadow-2xl">
          <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-[color:var(--background-2)]">
            {!secondaryError && (
              <Image
                src="/profile2.jpeg"
                alt="Ana Sofia"
                fill
                sizes="150px"
                className="object-cover"
                onError={() => setSecondaryError(true)}
              />
            )}
            {secondaryError && (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--brown-soft) 0%, var(--pink-soft) 100%)",
                }}
              />
            )}
          </div>
          <div className="absolute bottom-1.5 left-0 right-0 text-center font-script text-[14px] text-[color:var(--brown)] leading-none">
            Ana Sofia
          </div>
        </div>
      </motion.div>

      {/* Tiny editorial caption — magazine feel */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 1.4 }}
        className="absolute -bottom-1 right-0 flex items-center gap-2 text-[8px] uppercase tracking-[0.22em] text-[color:var(--muted)] font-semibold"
      >
        <span className="h-px w-6 bg-[color:var(--border-strong)]" />
        <span>The Cover Shot</span>
      </motion.div>
    </div>
  );
}

/* ============ Stat ============ */

type StatT = { value: string; label: string; suffix?: string };

function Stat({ stat, accent = false }: { stat: StatT; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl px-2.5 py-2 sm:py-2.5 border ${
        accent
          ? "bg-[color:var(--pink)] text-white border-transparent shadow-md shadow-[color:var(--pink-soft)]"
          : "glass-strong"
      }`}
    >
      <div className="flex items-baseline gap-1">
        <span
          className={`font-display text-xl sm:text-2xl lg:text-[26px] leading-none tracking-tight ${
            accent ? "text-white" : "text-[color:var(--foreground)]"
          }`}
        >
          {stat.value}
        </span>
        {stat.suffix && (
          <span
            className={`text-[10px] font-medium ${
              accent ? "text-white/85" : "text-[color:var(--muted)]"
            }`}
          >
            {stat.suffix}
          </span>
        )}
      </div>
      <div
        className={`mt-0.5 text-[9px] uppercase tracking-[0.14em] font-semibold ${
          accent ? "text-white/90" : "text-[color:var(--muted)]"
        }`}
      >
        {stat.label}
      </div>
    </div>
  );
}

/* ============ Bento Tiles ============ */

function TileHeader({
  title,
  accent = false,
  dark = false,
  right,
}: {
  title: string;
  accent?: boolean;
  dark?: boolean;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-1.5">
      <div
        className={`flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] font-bold ${
          dark
            ? "text-[#e5dccf]/70"
            : accent
              ? "text-[color:var(--pink)]"
              : "text-[color:var(--muted)]"
        }`}
      >
        <span
          className={`block h-1 w-1 rounded-full ${
            dark
              ? "bg-[#ff7ac6]"
              : accent
                ? "bg-[color:var(--pink)]"
                : "bg-[color:var(--brown)]"
          }`}
        />
        {title}
      </div>
      {right}
    </div>
  );
}

function BentoCard({
  children,
  className = "",
  delay = 0,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease, delay }}
      className={`${
        dark
          ? "bg-[#1a1430]/95 border border-white/10 text-white"
          : "glass-strong"
      } rounded-2xl p-3 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* === STACK tile (improved): grid of tech chips === */

function StackTile({ delay }: { delay: number }) {
  const { t } = useI18n();
  const tiles = t.hero.tiles.stack;

  return (
    <BentoCard delay={delay} className="sm:col-span-2 md:col-span-2 row-span-1">
      <TileHeader
        title={tiles.title}
        right={
          <span className="text-[9px] text-[color:var(--muted)] font-semibold">
            {tiles.subtitle}
          </span>
        }
      />
      <div className="mt-2 flex flex-wrap gap-1">
        {tiles.items.slice(0, 12).map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease, delay: delay + 0.1 + i * 0.025 }}
            className="inline-flex items-center gap-1 rounded-md bg-white/60 border border-[color:var(--border-strong)] px-1.5 py-[3px] text-[9px] font-mono text-[color:var(--foreground)] hover:bg-[color:var(--pink)] hover:text-white hover:border-transparent transition-all cursor-default"
          >
            <span className="h-1 w-1 rounded-full bg-[color:var(--pink)]" />
            {tech}
          </motion.span>
        ))}
        {tiles.items.length > 12 && (
          <span className="inline-flex items-center px-1.5 py-[3px] text-[9px] font-mono font-semibold text-[color:var(--brown)]">
            +{tiles.items.length - 12}
          </span>
        )}
      </div>
    </BentoCard>
  );
}

function AvailableTile({ delay }: { delay: number }) {
  const { t } = useI18n();
  const tile = t.hero.tiles.open;
  return (
    <BentoCard delay={delay}>
      <TileHeader title={tile.title} accent />
      <div className="mt-2 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span className="text-[11px] font-semibold text-[color:var(--foreground)] leading-tight">
          {tile.status}
        </span>
      </div>
      <div className="mt-1.5 text-[9px] text-[color:var(--muted)] leading-snug">
        {tile.sub}
      </div>
    </BentoCard>
  );
}

function HowTile({ delay }: { delay: number }) {
  const { t } = useI18n();
  const tile = t.hero.tiles.how;
  return (
    <BentoCard delay={delay}>
      <TileHeader title={tile.title} />
      <ul className="mt-1.5 space-y-0.5">
        {tile.items.map((item, i) => (
          <li
            key={i}
            className="text-[10px] leading-tight text-[color:var(--foreground)] flex items-start gap-1"
          >
            <span className="text-[color:var(--pink)] font-bold mt-0.5">·</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}

function ExploringTile({ delay }: { delay: number }) {
  const { t } = useI18n();
  const tile = t.hero.tiles.exploring;
  return (
    <BentoCard delay={delay}>
      <TileHeader title={tile.title} />
      <div className="mt-1.5 flex flex-wrap gap-1">
        {tile.items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1 rounded-full bg-white/60 border border-[color:var(--border-strong)] px-1.5 py-[2px] text-[9px] font-medium text-[color:var(--foreground)]"
          >
            <Sparkles className="h-2 w-2 text-[color:var(--pink)]" />
            {item}
          </span>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-[9px] text-[color:var(--muted)] pt-1.5 border-t border-[color:var(--border-strong)]">
        <Github className="h-2.5 w-2.5" />
        <span>@Sofii141 · 39 repos</span>
      </div>
    </BentoCard>
  );
}

function CodeTile({ delay }: { delay: number }) {
  const { t } = useI18n();
  return (
    <BentoCard delay={delay} dark>
      <TileHeader
        title={t.hero.tiles.code.title}
        dark
        right={
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          </div>
        }
      />
      <pre className="mt-1.5 font-mono text-[9px] leading-snug text-[#e5dccf]">
        <span className="text-[#ff7ac6]">const</span>{" "}
        <span className="text-[#82d4ff]">ana</span> = {"{"}
        {"\n  "}
        <span className="text-[#c9b6ff]">role</span>:{" "}
        <span className="text-[#ffd479]">{`'Full Stack & AI'`}</span>,
        {"\n  "}
        <span className="text-[#c9b6ff]">edu</span>:{" "}
        <span className="text-[#ffd479]">{`'Sistemas · 9°'`}</span>,
        {"\n  "}
        <span className="text-[#c9b6ff]">speaks</span>: [
        <span className="text-[#ffd479]">{`'es'`}</span>,{" "}
        <span className="text-[#ffd479]">{`'en'`}</span>],
        {"\n"}
        {"}"}
      </pre>
    </BentoCard>
  );
}

/* ============ Reveal animation ============ */

function RevealLine({
  text,
  delay = 0,
  italic = false,
  className = "",
}: {
  text: string;
  delay?: number;
  italic?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`${italic ? "italic" : ""} ${className} overflow-hidden inline-block align-baseline`}
      aria-hidden="true"
    >
      <span style={{ display: "inline-block" }}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.85,
              ease,
              delay: delay + i * 0.045,
            }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}
