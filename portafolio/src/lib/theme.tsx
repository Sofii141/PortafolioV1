"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { defaultThemeId, themes, type Theme } from "./themes";

type Ctx = {
  themeId: string;
  theme: Theme;
  themes: Theme[];
  setThemeId: (id: string) => void;
};

const ThemeContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "portafolio-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  root.dataset.theme = theme.id;
  root.style.colorScheme = theme.isDark ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = useState<string>(defaultThemeId);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && themes.some((t) => t.id === stored)) {
      setThemeIdState(stored);
    }
  }, []);

  useEffect(() => {
    const t = themes.find((th) => th.id === themeId) ?? themes[0];
    applyTheme(t);
  }, [themeId]);

  const setThemeId = (id: string) => {
    setThemeIdState(id);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, id);
    }
  };

  const theme = useMemo(
    () => themes.find((t) => t.id === themeId) ?? themes[0],
    [themeId],
  );

  return (
    <ThemeContext.Provider value={{ themeId, theme, themes, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
