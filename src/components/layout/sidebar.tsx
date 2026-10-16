"use client";

import {
  Home,
  Map as MapIcon,
  Layers,
  Wrench,
  BookOpen,
  Scale,
  Search,
  Settings,
  Info,
  Moon,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useHashRoute, navigate } from "@/lib/hash-router";
import { useAppStore } from "@/store/app-store";
import { getT } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  route: string;
  icon: typeof Home;
  key: TranslationKey;
  matchPrefix?: string;
}

const MAIN_NAV: NavItem[] = [
  { route: "#/", icon: Home, key: "navHome", matchPrefix: "home" },
  { route: "#/map", icon: MapIcon, key: "navMap", matchPrefix: "map" },
  { route: "#/stages", icon: Layers, key: "navStages", matchPrefix: "stages" },
  { route: "#/tools", icon: Wrench, key: "navTools", matchPrefix: "tools" },
  { route: "#/topics", icon: BookOpen, key: "navTopics", matchPrefix: "topics" },
  { route: "#/decisions", icon: Scale, key: "navDecisions", matchPrefix: "decisions" },
  { route: "#/architecture", icon: Search, key: "navArchitecture", matchPrefix: "architecture" },
];

const SYSTEM_NAV: NavItem[] = [
  { route: "#/settings", icon: Settings, key: "navSettings", matchPrefix: "settings" },
  { route: "#/about", icon: Info, key: "navAbout", matchPrefix: "about" },
];

function isActive(item: NavItem, segments: string[]): boolean {
  const first = segments[0] ?? "";
  if (item.matchPrefix === "home") return first === "";
  if (item.matchPrefix === "map") return first === "map";
  if (item.matchPrefix === "stages") return first === "stages";
  return first === item.matchPrefix;
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const route = useHashRoute();
  const lang = useAppStore((s) => s.language);
  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);
  const t = getT(lang);

  const go = (r: string) => {
    navigate(r);
    onNavigate?.();
  };

  const renderItem = (item: NavItem) => {
    const active = isActive(item, route.segments);
    const Icon = item.icon;
    return (
      <button
        key={item.route}
        onClick={() => go(item.route)}
        aria-current={active ? "page" : undefined}
        className={cn(
          "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring",
          active
            ? "bg-primary/15 text-primary shadow-[inset_0_0_0_1px] shadow-primary/25"
            : "text-muted-foreground hover:bg-accent hover:text-foreground"
        )}
      >
        <Icon
          className={cn(
            "size-[18px] shrink-0 transition-colors",
            active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
          )}
          aria-hidden
        />
        <span className="truncate">{t(item.key)}</span>
      </button>
    );
  };

  return (
    <div className="flex h-full flex-col gap-6 p-4">
      {/* Brand */}
      <button
        onClick={() => go("#/")}
        className="flex items-center gap-3 rounded-xl px-2 py-2 text-start outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={t("navHome")}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-cyan-400 glow-primary">
          <MapIcon className="size-5 text-primary-foreground" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-base font-bold tracking-tight">
            {t("appName")}
          </span>
          <span className="block truncate text-[11px] text-muted-foreground">
            {t("appTagline")}
          </span>
        </span>
      </button>

      {/* Main nav */}
      <nav aria-label={t("navSections")} className="flex flex-col gap-1">
        <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          {t("navSections")}
        </p>
        {MAIN_NAV.map(renderItem)}
        <button
          onClick={() => {
            useAppStore.getState().setSearchOpen(true);
            onNavigate?.();
          }}
          className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Search className="size-[18px] shrink-0 text-muted-foreground group-hover:text-foreground" aria-hidden />
          <span className="flex-1 truncate text-start">{t("navSearch")}</span>
          <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground lg:inline">
            /
          </kbd>
        </button>
      </nav>

      <div className="mt-auto flex flex-col gap-1">
        <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          {t("navSystem")}
        </p>
        {SYSTEM_NAV.map(renderItem)}

        {/* Theme toggle (also shown in the showcase sidebar) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="group mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={t("theme")}
            >
              {theme === "dark" ? (
                <Moon className="size-[18px] text-muted-foreground group-hover:text-foreground" aria-hidden />
              ) : (
                <Sun className="size-[18px] text-muted-foreground group-hover:text-foreground" aria-hidden />
              )}
              <span className="flex-1 truncate text-start">{theme === "dark" ? t("dark") : t("light")}</span>
              <span
                className={cn(
                  "relative inline-flex h-4 w-8 shrink-0 items-center rounded-full transition-colors",
                  theme === "dark" ? "bg-primary" : "bg-muted-foreground/40"
                )}
              >
                <span
                  className={cn(
                    "absolute top-0.5 size-3 rounded-full bg-white transition-all",
                    theme === "dark" ? "start-4.5" : "start-0.5"
                  )}
                />
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" side="top">
            <DropdownMenuItem onClick={toggleTheme}>
              {theme === "dark" ? (
                <><Sun className="me-2 size-4" aria-hidden /> {t("light")}</>
              ) : (
                <><Moon className="me-2 size-4" aria-hidden /> {t("dark")}</>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <p className="mt-2 px-3 text-[10px] leading-relaxed text-muted-foreground/50">
          SE Map {t("appVersion")}
        </p>
      </div>
    </div>
  );
}
