"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Search, Layers, Wrench, BookOpen, Scale, CornerDownLeft } from "lucide-react";
import type { SearchDocType } from "@/types";
import { useAppStore } from "@/store/app-store";
import { getT, tx } from "@/lib/i18n";
import { searchContent, countByType } from "@/lib/search";
import { navigate } from "@/lib/hash-router";
import { cn } from "@/lib/utils";

const typeIcons: Record<SearchDocType, typeof Layers> = {
  stage: Layers,
  tool: Wrench,
  topic: BookOpen,
  decision: Scale,
};

export function SearchDialog() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const searchOpen = useAppStore((s) => s.searchOpen);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<SearchDocType | "all">("all");
  const counts = useMemo(() => countByType(), []);

  useEffect(() => {
    if (!searchOpen) {
      // reset after close animation
      const id = setTimeout(() => {
        setQuery("");
        setType("all");
      }, 200);
      return () => clearTimeout(id);
    }
  }, [searchOpen]);

  const results = useMemo(() => searchContent(query, type).slice(0, 12), [query, type]);

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

  const go = (route: string) => {
    setSearchOpen(false);
    navigate(route);
  };

  const submitFullSearch = () => {
    go(`#/search?q=${encodeURIComponent(query)}&type=${type}`);
  };

  return (
    <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
      {/* Type filter chips */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-border px-3 pb-2.5 pt-1" role="tablist" aria-label={t("searchDialogTitle")}>
        {(["all", "stage", "tool", "topic", "decision"] as const).map((tp) => (
          <button
            key={tp}
            role="tab"
            aria-selected={type === tp}
            onClick={() => setType(tp)}
            className={cn(
              "rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
              type === tp
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-transparent bg-muted/50 text-muted-foreground hover:text-foreground"
            )}
          >
            {typeLabel(tp)} <span className="opacity-60">{counts[tp]}</span>
          </button>
        ))}
      </div>

      <CommandInput
        placeholder={t("searchPlaceholder")}
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="max-h-80 custom-scrollbar">
        <CommandEmpty>
          <div className="py-6 text-center">
            <Search className="mx-auto size-6 text-muted-foreground/50" aria-hidden />
            <p className="mt-2 text-sm font-medium">{t("searchEmptyTitle")}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t("searchEmptyDesc")}</p>
          </div>
        </CommandEmpty>
        {results.length > 0 && (
          <CommandGroup heading={`${t("showing")} ${Math.min(results.length, 12)} ${t("of")} ${searchContent(query, type).length} ${t("results")}`}>
            {results.map((r) => {
              const Icon = typeIcons[r.type];
              return (
                <CommandItem
                  key={r.id}
                  value={`${r.title.en} ${r.title.fa} ${r.id}`}
                  onSelect={() => go(r.route)}
                  className="gap-3 rounded-xl"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="truncate text-sm font-semibold">{tx(r.title, lang)}</span>
                      <span className="shrink-0 rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        {r.type === "stage" ? t("searchTypeStage") : r.type === "tool" ? t("searchTypeTool") : r.type === "topic" ? t("searchTypeTopic") : t("searchTypeDecision")}
                      </span>
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                      {tx(r.description, lang)}
                    </span>
                  </span>
                  {r.badge && (
                    <span className="hidden shrink-0 text-[10px] uppercase text-muted-foreground/70 sm:block">
                      {r.badge}
                    </span>
                  )}
                  <CornerDownLeft className="hidden size-3.5 shrink-0 text-muted-foreground/50 sm:block" aria-hidden />
                </CommandItem>
              );
            })}
          </CommandGroup>
        )}
      </CommandList>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-[11px] text-muted-foreground">
        <span className="hidden sm:block">{t("searchHint")}</span>
        <button
          onClick={submitFullSearch}
          className="ms-auto flex items-center gap-1 font-semibold text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {t("viewAll")}
          <Search className="size-3" aria-hidden />
        </button>
      </div>
    </CommandDialog>
  );
}
