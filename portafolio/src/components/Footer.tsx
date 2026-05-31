"use client";

import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--border-strong)] pt-6">
        <div className="flex items-center gap-2">
          <span className="font-script text-2xl text-[color:var(--brown)]">
            Ana Sofia
          </span>
          <span className="text-[11px] text-[color:var(--muted)]">
            © {year}. {t.footer.rights}
          </span>
        </div>
        <div className="text-[11px] text-[color:var(--muted)]">
          {t.footer.built}
        </div>
      </div>
    </footer>
  );
}
