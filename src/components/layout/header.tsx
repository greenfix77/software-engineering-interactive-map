"use client";

import {
  Search,
  Menu,
  Globe,
  Moon,
  Sun,
  Layers,
  ListOrdered,
  FileText,
  FolderTree,
  GraduationCap,
  Rocket,
} from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { getT } from "@/lib/i18n";
import { TOTAL_DOCS } from "@/lib/search";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface StatItem {
  icon: typeof Layers;
  value: string;
  key: "statStages" | "statPhases" | "statDocs" | "statTypes";
}

export function Header({ onOpenMobileNav }: { onOpenMobileNav: () => void }) {
  const lang = useAppStore((s) => s.language);
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const mode = useAppStore((s) => s.mode);
  const setMode = useAppStore((s) => s.setMode);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);
  const t = getT(lang);

  const docCount = TOTAL_DOCS();

  const stats: StatItem[] = [
    { icon: Layers, value: "12", key: "statStages" },
    { icon: ListOrdered, value: "9", key: "statPhases" },
    { icon: FileText, value: docCount ? `${docCount}+` : "168+", key: "statDocs" },
    { icon: FolderTree, value: "5", key: "statTypes" },
  ];

  return (
    <header
      className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border/60 bg-background/80 px-4 backdrop-blur-lg md:px-6"
      role="banner"
    >
      {/* Mobile nav trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onOpenMobileNav}
        aria-label="Open navigation"
      >
        <Menu className="size-5" aria-hidden />
      </Button>

      {/* Stat chips — hidden on small screens */}
      <div className="hidden min-w-0 flex-1 items-center gap-2 xl:gap-3 lg:flex" role="list" aria-label={t("headerMotto")}>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.key}
              role="listitem"
              className="glass flex items-center gap-2.5 rounded-xl px-3 py-1.5"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15">
                <Icon className="size-4 text-primary" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">{s.value} {t(s.key)}</span>
                <span className="block text-[10px] text-muted-foreground">{t(`${s.key}Sub` as "statStagesSub")}</span>
              </span>
            </div>
          );
        })}
        <p className="ms-auto hidden max-w-52 text-end text-xs leading-snug text-muted-foreground 2xl:block">
          {t("headerMotto")}
        </p>
      </div>

      {/* Right actions */}
      <div className="ms-auto flex items-center gap-2 lg:ms-0">
        {/* Search trigger */}
        <button
          onClick={() => setSearchOpen(true)}
          className="glass group flex h-10 min-w-0 items-center gap-2 rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-64"
          aria-keyshortcuts="/"
          aria-label={t("searchPlaceholder")}
        >
          <Search className="size-4 shrink-0" aria-hidden />
          <span className="hidden min-w-0 flex-1 truncate text-start sm:block">
            {t("searchPlaceholder")}
          </span>
          <kbd className="hidden shrink-0 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono sm:block">
            /
          </kbd>
        </button>

        {/* Mode switch (Learning / Product) */}
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-10 shrink-0"
                onClick={() => setMode(mode === "learning" ? "product" : "learning")}
                aria-label={`${t("mode")}: ${mode === "learning" ? t("modeLearning") : t("modeProduct")}`}
              >
                {mode === "learning" ? (
                  <GraduationCap className="size-5" aria-hidden />
                ) : (
                  <Rocket className="size-5" aria-hidden />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              {t("mode")}: {mode === "learning" ? t("modeLearning") : t("modeProduct")}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Language switch */}
        <Button
          variant="outline"
          size="sm"
          className="h-10 shrink-0 gap-1.5 px-3 font-semibold"
          onClick={() => setLanguage(lang === "en" ? "fa" : "en")}
          aria-label={t("language")}
        >
          <Globe className="size-4" aria-hidden />
          <span className={cn("text-xs uppercase", lang === "fa" && "font-mono")}>
            {lang === "en" ? "EN" : "فا"}
          </span>
        </Button>

        {/* Theme switch */}
        <Button
          variant="outline"
          size="icon"
          className="size-10 shrink-0"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={t("theme")}
        >
          {theme === "dark" ? <Sun className="size-5" aria-hidden /> : <Moon className="size-5" aria-hidden />}
        </Button>
      </div>
    </header>
  );
}
