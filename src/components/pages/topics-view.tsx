"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import { TOPICS } from "@/content/topics";
import { STAGES } from "@/content/stages";
import type { TopicCategory } from "@/types";
import { useAppStore } from "@/store/app-store";
import { getT, tx } from "@/lib/i18n";
import { categoryIcons } from "@/lib/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CATEGORIES: (TopicCategory | "all")[] = ["all", "frontend", "backend", "devops", "testing", "others"];

const catColor: Record<TopicCategory, string> = {
  frontend: "#f59e0b",
  backend: "#ef4444",
  devops: "#22c55e",
  testing: "#06b6d4",
  others: "#a855f7",
};

export function TopicsView() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<TopicCategory | "all">("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: TOPICS.length };
    for (const topic of TOPICS) c[topic.category] = (c[topic.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOPICS.filter((topic) => {
      if (cat !== "all" && topic.category !== cat) return false;
      if (!q) return true;
      return (
        topic.title.en.toLowerCase().includes(q) ||
        topic.title.fa.includes(q) ||
        topic.description.en.toLowerCase().includes(q) ||
        topic.description.fa.includes(q)
      );
    });
  }, [query, cat]);

  const catLabel = (c: TopicCategory | "all") =>
    c === "all" ? t("all") : c === "frontend" ? "Frontend" : c === "backend" ? "Backend" : c === "devops" ? "DevOps" : c === "testing" ? "Testing" : "Others";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("topicsTitle")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t("topicsSubtitle")}</p>

      <div className="relative mt-5">
        <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("topicsSearchPlaceholder")}
          className="h-11 rounded-xl bg-card ps-10"
          aria-label={t("topicsSearchPlaceholder")}
        />
      </div>

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

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-border/60 bg-card p-10 text-center">
          <BookOpen className="mx-auto size-8 text-muted-foreground/50" aria-hidden />
          <p className="mt-3 text-sm font-semibold">{t("searchEmptyTitle")}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t("searchEmptyDesc")}</p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((topic, i) => {
            const Icon = categoryIcons.topic[topic.category];
            const color = catColor[topic.category];
            const stage = STAGES.find((s) => s.slug === topic.stage);
            return (
              <motion.div
                key={topic.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                className="group rounded-2xl border border-border/60 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${color}1f`, color, boxShadow: `0 0 14px ${color}30` }}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{tx(topic.title, lang)}</p>
                    <p className="text-[11px] font-medium text-muted-foreground">{catLabel(topic.category)}</p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 min-h-8 text-xs leading-relaxed text-muted-foreground">
                  {tx(topic.description, lang)}
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="size-3" aria-hidden />
                    {topic.articles} {t("articles")}
                  </span>
                  {stage && (
                    <span className="truncate">
                      {stage.order}. {tx(stage.title, lang)}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-muted-foreground">
        {t("showing")} {filtered.length} {t("of")} {TOPICS.length} {t("topicCount")}
      </p>
    </div>
  );
}
