"use client";

import { useState } from "react";
import { toPng } from "html-to-image";

/**
 * LinkedIn banner — 1584 × 396 px (4:1)
 *
 * Visit /banner in the dev server, click the "Download PNG" button
 * to export a pixel-perfect 1584×396 PNG ready to upload to LinkedIn.
 *
 * The profile picture on LinkedIn covers the bottom-left ~280×280 area on desktop,
 * so all key content lives on the right + top (safe area respected).
 */
export default function BannerPage() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    const node = document.getElementById("linkedin-banner");
    if (!node) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(node, {
        width: 1584,
        height: 396,
        pixelRatio: 2, // export at 2x for crisp result (3168×792)
        cacheBust: true,
        skipFonts: false,
      });
      const link = document.createElement("a");
      link.download = "linkedin-banner-ana-sofia.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Export failed", err);
      alert("No se pudo exportar. Mira la consola.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[color:var(--background)] flex flex-col items-center justify-center gap-6 p-6">
      {/* Download button */}
      <div className="flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="px-5 py-2.5 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] font-semibold text-sm shadow-lg hover:bg-[color:var(--brown)] transition disabled:opacity-50"
        >
          {downloading ? "Generando…" : "↓ Descargar PNG (1584×396)"}
        </button>
        <p className="text-[11px] text-[color:var(--muted)] font-mono uppercase tracking-[0.18em]">
          Click → se descarga listo para subir a LinkedIn
        </p>
      </div>

      {/* Banner preview */}
      <div
        id="linkedin-banner"
        className="relative overflow-hidden shadow-2xl"
        style={{
          width: 1584,
          height: 396,
          background:
            "linear-gradient(135deg, #fff1eb 0%, #ffd4c2 55%, #ffb59c 100%)",
        }}
      >
        {/* Warm coral glow top-right */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: 720,
            height: 720,
            right: -220,
            top: -320,
            background:
              "radial-gradient(circle, rgba(255,122,92,0.32) 0%, transparent 60%)",
            filter: "blur(40px)",
          }}
        />

        {/* Soft pink glow bottom-left for depth */}
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: 500,
            height: 500,
            left: -150,
            bottom: -250,
            background:
              "radial-gradient(circle, rgba(255,79,106,0.18) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />

        {/* Decorative grid lines — very subtle */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #3a1a17 1px, transparent 1px), linear-gradient(to bottom, #3a1a17 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* TOP STRIP — editorial markers */}
        <div className="absolute top-7 left-12 right-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-full font-bold text-[11px]"
              style={{ background: "#3a1a17", color: "#fff1eb" }}
            >
              AS
            </span>
            <span
              className="font-mono text-[11px] uppercase tracking-[0.24em]"
              style={{ color: "#7a4a3f" }}
            >
              Issue 01 · 2026
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.24em]"
              style={{ color: "#7a4a3f" }}
            >
              Popayán, CO · ES / EN
            </span>
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{
                background: "#ff4f6a",
                boxShadow: "0 0 0 4px rgba(255,79,106,0.22)",
              }}
            />
          </div>
        </div>

        {/* MAIN CONTENT — centered horizontally, weighted right */}
        <div
          className="absolute"
          style={{ left: 340, right: 80, top: 110, bottom: 70 }}
        >
          <div className="grid grid-cols-[1.1fr_auto_1fr] gap-10 items-center h-full">
            {/* LEFT: Name + role */}
            <div>
              <h1
                className="font-display tracking-tight leading-[0.95]"
                style={{
                  fontSize: 76,
                  color: "#3a1a17",
                  fontFamily: "var(--font-display), serif",
                }}
              >
                Ana Sofia <em style={{ color: "#9b3a3a" }}>Arango</em>
              </h1>
              <div className="mt-3">
                <div
                  className="font-mono text-[13px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: "#3a1a17" }}
                >
                  Systems Engineering Student (8th sem.)
                </div>
                <div
                  className="mt-1.5 font-mono text-[12px] uppercase tracking-[0.22em]"
                  style={{ color: "#7a4a3f" }}
                >
                  Frontend · Backend · AI
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div
              aria-hidden
              style={{
                width: 1,
                height: 140,
                background:
                  "linear-gradient(180deg, transparent, rgba(120,45,30,0.3), transparent)",
              }}
            />

            {/* RIGHT: Quote */}
            <div>
              <div
                className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3 inline-flex items-center gap-2"
                style={{ color: "#ff4f6a" }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "#ff4f6a" }}
                />
                Manifesto
              </div>
              <blockquote
                className="italic leading-[1.1] tracking-tight"
                style={{
                  fontSize: 32,
                  color: "#3a1a17",
                  fontFamily: "var(--font-display), serif",
                }}
              >
                <span style={{ color: "#ff4f6a" }}>“</span>
                AI doesn&apos;t replace creativity—it amplifies it.
                <span style={{ color: "#ff4f6a" }}>”</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP — tagline */}
        <div className="absolute bottom-7 left-12 right-12 flex items-center justify-between">
          <span
            className="font-mono text-[11px] uppercase tracking-[0.24em]"
            style={{ color: "#7a4a3f" }}
          >
            React · Next.js · Spring · LLMs
          </span>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.24em]"
            style={{ color: "#7a4a3f" }}
          >
            github / sofii141 · open to work
          </span>
        </div>
      </div>

      {/* Helper hint */}
      <div className="mt-4 max-w-[640px] text-center">
        <p className="text-[12px] text-[color:var(--muted)] leading-relaxed">
          El círculo de tu foto de perfil tapa la esquina inferior izquierda
          en LinkedIn — por eso todo el contenido importante está al centro
          y a la derecha del banner.
        </p>
      </div>
    </div>
  );
}
