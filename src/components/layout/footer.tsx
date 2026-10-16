"use client";

import { Github, Map as MapIcon } from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { getT } from "@/lib/i18n";
import { navigate } from "@/lib/hash-router";

export function Footer() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);

  return (
    <footer
      className="mt-auto border-t border-border/60 bg-background/60 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-start">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-cyan-400">
            <MapIcon className="size-4 text-primary-foreground" aria-hidden />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{t("appName")} <span className="text-muted-foreground">{t("appVersion")}</span></p>
            <p className="text-xs text-muted-foreground">{t("footerTagline")}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground sm:items-end">
          <p>{t("footerBuiltWith")}</p>
          <button
            onClick={() => navigate("#/about")}
            className="inline-flex items-center gap-1.5 underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            <Github className="size-3.5" aria-hidden />
            {t("navAbout")}
          </button>
        </div>
      </div>
    </footer>
  );
}
