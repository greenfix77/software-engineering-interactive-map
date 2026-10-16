"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, ExternalLink, Wrench } from "lucide-react";
import { TOOLS } from "@/content/tools";
import { STAGES } from "@/content/stages";
import type { ToolCategory } from "@/types";
import { useAppStore } from "@/store/app-store";
import { getT, tx } from "@/lib/i18n";
import { categoryIcons } from "@/lib/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CATEGORIES: (ToolCategory | "all")[] = ["all", "development", "testing", "devops", "monitoring", "database"];

const catColor: Record<ToolCategory, string> = {
  development: "#8b5cf6",
  testing: "#06b6d4",
  devops: "#22c55e",
  monitoring: "#0ea5e9",
  database: "#f59e0b",
};

export function ToolsView() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<ToolCategory | "all">("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: TOOLS.length };
    for (const tool of TOOLS) c[tool.category] = (c[tool.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter((tool) => {
      if (cat !== "all" && tool.category !== cat) return false;
      if (!q) return true;
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.description.en.toLowerCase().includes(q) ||
        tool.description.fa.toLowerCase().includes(q)
      );
    });
  }, [query, cat]);

  const catLabel = (c: ToolCategory | "all") =>
    c === "all"
      ? t("all")
      : c === "development"
      ? "Development"
      : c === "testing"
      ? "Testing"
      : c === "devops"
      ? "DevOps"
      : c === "monitoring"
      ? "Monitoring"
      : "Database";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("toolsTitle")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t("toolsSubtitle")}</p>

      {/* Search */}
      <div className="relative mt-5">
        <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("toolsSearchPlaceholder")}
          className="h-11 rounded-xl bg-card ps-10"
          aria-label={t("toolsSearchPlaceholder")}
        />
      </div>

      {/* Category chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2" role="tablist" aria-label={t("category")}>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring",
              cat === c
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border/60 bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {catLabel(c)} <span className="opacity-60">{counts[c] ?? 0}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-border/60 bg-card p-10 text-center">
          <Wrench className="mx-auto size-8 text-muted-foreground/50" aria-hidden />
          <p className="mt-3 text-sm font-semibold">{t("searchEmptyTitle")}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t("searchEmptyDesc")}</p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool, i) => {
            const Icon = categoryIcons.tool[tool.category] ?? Wrench;
            const stage = STAGES.find((s) => s.slug === tool.stage);
            const color = catColor[tool.category];
            return (
              <motion.div
                key={tool.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${color}1f`, color, boxShadow: `0 0 14px ${color}30` }}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{tool.name}</p>
                    <p className="text-[11px] font-medium text-muted-foreground">{catLabel(tool.category)}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 rounded-lg bg-muted/60 px-2 py-1 text-xs font-bold">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
                    {tool.rating.toFixed(1)}
                  </span>
                </div>
                <p className="mt-3 line-clamp-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {tx(tool.description, lang)}
                </p>
                <div className="mt-3 flex items-center justify-between gap-2">
                  {stage ? (
                    <span className="truncate text-[10px] font-medium text-muted-foreground/80">
                      {t("stage")}: {stage.order}. {tx(stage.title, lang)}
                    </span>
                  ) : (
                    <span />
                  )}
                  <Button variant="secondary" size="sm" className="h-8 shrink-0 gap-1.5 rounded-lg text-xs" asChild>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" aria-label={`${t("install")} ${tool.name}`}>
                      {t("install")}
                      <ExternalLink className="size-3" aria-hidden />
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {t("showing")} {filtered.length} {t("of")} {TOOLS.length} {t("toolCount")}
      </p>
    </div>
  );
}
