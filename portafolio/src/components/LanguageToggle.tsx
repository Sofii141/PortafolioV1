"use client";

import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full bg-white/60 p-0.5 border border-[color:var(--border-strong)] backdrop-blur",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={cn(
            "px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full transition-all",
            locale === l
              ? "bg-[color:var(--pink)] text-white shadow"
              : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
