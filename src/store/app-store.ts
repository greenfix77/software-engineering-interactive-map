"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AppMode, Language, ThemeMode } from "@/types";

interface AppState {
  language: Language;
  theme: ThemeMode;
  mode: AppMode;
  /** key = `${stageSlug}:${itemIndex}` */
  checklist: Record<string, boolean>;
  searchOpen: boolean;

  setLanguage: (l: Language) => void;
  setTheme: (t: ThemeMode) => void;
  toggleTheme: () => void;
  setMode: (m: AppMode) => void;
  setSearchOpen: (open: boolean) => void;
  toggleChecklistItem: (key: string) => void;
  setChecklistItems: (keys: string[], value: boolean) => void;
  resetProgress: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: "en",
      theme: "dark",
      mode: "learning",
      checklist: {},
      searchOpen: false,

      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),
      setMode: (mode) => set({ mode }),
      setSearchOpen: (searchOpen) => set({ searchOpen }),
      toggleChecklistItem: (key) =>
        set((s) => ({
          checklist: { ...s.checklist, [key]: !s.checklist[key] },
        })),
      setChecklistItems: (keys, value) =>
        set((s) => {
          const next = { ...s.checklist };
          for (const k of keys) next[k] = value;
          return { checklist: next };
        }),
      resetProgress: () => set({ checklist: {} }),
    }),
    {
      name: "se-map-v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        language: state.language,
        theme: state.theme,
        mode: state.mode,
        checklist: state.checklist,
      }),
    }
  )
);
