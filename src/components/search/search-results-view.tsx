"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Layers, Wrench, BookOpen, Scale, ChevronRight, SearchX } from "lucide-react";
import type { SearchDocType } from "@/types";
import { useAppStore } from "@/store/app-store";
import { getT, tx } from "@/lib/i18n";
import { useHashRoute, navigate } from "@/lib/hash-router";
import { searchContent, countByType } from "@/lib/search";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const typeIcons: Record<SearchDocType, typeof Layers> = {
  stage: Layers,
  tool: Wrench,
  topic: BookOpen,
  decision: Scale,
};

export function SearchResultsView() {
  const route = useHashRoute();
  const lang = useAppStore((s) => s.language);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);
  const t = getT(lang);
  const routeQuery = route.query.get("q") ?? "";
  const routeType = (route.query.get("type") as SearchDocType | "all") ?? "all";

  // Derive local input state from route, adjusting during render when route changes
  const [query, setQuery] = useState(routeQuery);
  const [type, setType] = useState<SearchDocType | "all">(routeType);
  const [prevRoute, setPrevRoute] = useState(route.raw);
  if (prevRoute !== route.raw) {
    setPrevRoute(route.raw);
    setQuery(routeQuery);
    setType(routeType);
  }
  const counts = useMemo(() => countByType(), []);

  const results = useMemo(() => searchContent(query, type), [query, type]);

  const typeLabel = (tp: SearchDocType | "all") =>
    tp === "all"
      ? t("searchAll")
      : tp === "stage"
      ? t("searchStages")
      : tp === "tool"
      ? t("searchTools")
      : tp === "topic"
      ? t("searchTopics")
      : t("searchDecisions");

  const updateRoute = (q: string, tp: SearchDocType | "all") => {
    navigate(`#/search?q=${encodeURIComponent(q)}&type=${tp}`);
  };

  const docTypeName = (tp: SearchDocType) =>
    tp === "stage" ? t("searchTypeStage") : tp === "tool" ? t("searchTypeTool") : tp === "topic" ? t("searchTypeTopic") : t("searchTypeDecision");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("searchResultsTitle")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {results.length} {t("searchResultsFor")}{" "}
        <span className="font-bold text-foreground">“{query}”</span>
      </p>

      {/* Live search input */}
      <form
        className="relative mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          updateRoute(query, type);
        }}
        role="search"
      >
        <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => updateRoute(query, type)}
          placeholder={t("searchPlaceholder")}
          className="h-11 rounded-xl bg-card ps-10"
          aria-label={t("searchPlaceholder")}
        />
      </form>

      {/* Type chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2" role="tablist" aria-label={t("searchDialogTitle")}>
        {(["all", "stage", "tool", "topic", "decision"] as const).map((tp) => (
          <button
            key={tp}
            role="tab"
            aria-selected={type === tp}
            onClick={() => {
              setType(tp);
              updateRoute(query, tp);
            }}
            className={cn(
              "rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring",
              type === tp
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border/60 bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {typeLabel(tp)} <span className="opacity-60">{counts[tp]}</span>
          </button>
        ))}
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-border/60 bg-card p-12 text-center">
          <SearchX className="mx-auto size-10 text-muted-foreground/40" aria-hidden />
          <p className="mt-4 text-base font-bold">{t("searchEmptyTitle")}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t("searchEmptyDesc")}</p>
          <button
            onClick={() => setSearchOpen(true)}
            className="mt-4 text-xs font-semibold text-primary underline-offset-4 hover:underline"
          >
            {t("searchHint")}
          </button>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-2.5">
          {results.map((r, i) => {
            const Icon = typeIcons[r.type];
            return (
              <motion.button
                key={r.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.2) }}
                onClick={() => navigate(r.route)}
                className="group flex items-start gap-3.5 rounded-2xl border border-border/60 bg-card p-4 text-start transition-all hover:border-primary/40 hover:shadow-md outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="truncate text-sm font-bold">{tx(r.title, lang)}</span>
                    <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      {docTypeName(r.type)}
                    </span>
                    {r.badge && (
                      <span className="text-[10px] uppercase tracking-wide text-muted-foreground/70">
                        {r.badge}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {tx(r.description, lang)}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-1 rounded-lg border border-border/60 px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                  {t("view")}
                  <ChevronRight className="size-3 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden />
                </span>
              </motion.button>
            );
          })}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {t("showing")} {results.length} {t("results")}
      </p>
    </div>
  );
}
