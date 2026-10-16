"use client";

import { useEffect } from "react";
import { useAppStore } from "@/store/app-store";

/**
 * Syncs persisted store state to the DOM:
 * - theme -> `dark` class on <html>
 * - language -> `lang` + `dir` attributes (Persian = RTL)
 * Runs client-side only; the app itself is client-rendered.
 */
export function AppEffects() {
  const theme = useAppStore((s) => s.theme);
  const language = useAppStore((s) => s.language);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  return null;
}
