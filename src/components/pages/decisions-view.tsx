"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Scale,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { DECISIONS } from "@/content/decisions";
import { STAGES } from "@/content/stages";
import type { Decision, DecisionCategory } from "@/types";
import { useAppStore } from "@/store/app-store";
import { getT, tx } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { categoryIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

const CATEGORIES: (DecisionCategory | "all")[] = ["all", "architecture", "technology", "process"];

const catColor: Record<DecisionCategory, string> = {
  architecture: "#3b82f6",
  technology: "#8b5cf6",
  process: "#22c55e",
};

/** Guided decision-flow questions per category. */
function flowSecondQuestion(cat: DecisionCategory): { q: string; options: { label: string; hintSlugs: string[] }[] } {
  const lang = useAppStore.getState().language;
  if (cat === "architecture") {
    return {
      q: getT(lang)("flowQ2Architecture"),
      options: [
        { label: "Solo / small team, early product", hintSlugs: ["monolith-vs-microservices", "monorepo-vs-polyrepo", "server-rendering-vs-spa"] },
        { label: "Growing team, multiple products/teams", hintSlugs: ["monolith-vs-microservices", "event-driven-vs-request-response", "caching-strategy"] },
        { label: "Data-heavy or high-traffic system", hintSlugs: ["caching-strategy", "sql-vs-nosql-choice", "event-driven-vs-request-response"] },
      ],
    };
  }
  if (cat === "technology") {
    return {
      q: getT(lang)("flowQ2Technology"),
      options: [
        { label: "Language / framework", hintSlugs: ["language-choice", "framework-choice", "build-tool-choice"] },
        { label: "Database & data access", hintSlugs: ["database-choice", "orm-vs-raw-sql", "sql-vs-nosql-choice"] },
        { label: "UI, testing or cloud tooling", hintSlugs: ["css-solution-choice", "testing-framework-choice", "cloud-provider-choice"] },
      ],
    };
  }
  return {
    q: getT(lang)("flowQ2Process"),
    options: [
      { label: "Building & shipping code", hintSlugs: ["branching-strategy", "code-review-policy", "cicd-strategy"] },
      { label: "Releasing to users", hintSlugs: ["release-strategy", "cicd-strategy", "error-tracking-policy"] },
      { label: "Operating & maintaining", hintSlugs: ["oncall-policy", "error-tracking-policy", "documentation-strategy"] },
    ],
  };
}

function DecisionDialog({ decision, onClose }: { decision: Decision | null; onClose: () => void }) {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  if (!decision) return null;
  const stage = STAGES.find((s) => s.slug === decision.stage);

  return (
    <Dialog open={!!decision} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[85vh] overflow-y-auto custom-scrollbar max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-start">
            <Scale className="size-5 shrink-0 text-primary" aria-hidden />
            {tx(decision.title, lang)}
          </DialogTitle>
          <DialogDescription className="text-start">
            {tx(decision.description, lang)}
            {stage && (
              <span className="mt-2 block text-[11px] text-muted-foreground">
                {t("decisionFor")}: {stage.order}. {tx(stage.title, lang)}
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 sm:grid-cols-2">
          {decision.options.map((opt) => (
            <div key={opt.name} className="rounded-2xl border border-border/60 bg-muted/30 p-4">
              <p className="text-sm font-bold">{opt.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{tx(opt.description, lang)}</p>
              <div className="mt-3">
                <p className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <ThumbsUp className="size-3" aria-hidden /> Pros
                </p>
                <ul className="mt-1 flex flex-col gap-1">
                  {opt.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-emerald-500/70" aria-hidden />
                      {tx(p, lang)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2.5">
                <p className="flex items-center gap-1 text-[11px] font-bold text-rose-600 dark:text-rose-400">
                  <ThumbsDown className="size-3" aria-hidden /> Cons
                </p>
                <ul className="mt-1 flex flex-col gap-1">
                  {opt.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-[11px] text-muted-foreground">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-rose-400" aria-hidden />
                      {tx(c, lang)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4">
          <p className="flex items-center gap-1.5 text-xs font-bold text-primary">
            <Compass className="size-3.5" aria-hidden />
            {t("flowRecommendation")}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed">{tx(decision.recommendation, lang)}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function DecisionsView() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<DecisionCategory | "all">("all");
  const [tab, setTab] = useState<"browse" | "flow">("browse");
  const [open, setOpen] = useState<Decision | null>(null);
  const [flowCat, setFlowCat] = useState<DecisionCategory | null>(null);
  const [flowOpt, setFlowOpt] = useState<number | null>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: DECISIONS.length };
    for (const d of DECISIONS) c[d.category] = (c[d.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return DECISIONS.filter((d) => {
      if (cat !== "all" && d.category !== cat) return false;
      if (!q) return true;
      return (
        d.title.en.toLowerCase().includes(q) ||
        d.title.fa.includes(q) ||
        d.description.en.toLowerCase().includes(q) ||
        d.description.fa.includes(q)
      );
    });
  }, [query, cat]);

  const catLabel = (c: DecisionCategory | "all") =>
    c === "all" ? t("all") : c === "architecture" ? t("catArchitecture") : c === "technology" ? t("catTechnology") : t("catProcess");

  // Guided flow state
  const secondQ = flowCat ? flowSecondQuestion(flowCat) : null;
  const flowResults =
    secondQ && flowOpt !== null
      ? DECISIONS.filter((d) => secondQ.options[flowOpt].hintSlugs.includes(d.slug))
      : [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("decisionsTitle")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("decisionsSubtitle")}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1 rounded-xl border border-border/60 bg-card p-1" role="tablist" aria-label={t("decisionsTitle")}>
          {(
            [
              { id: "browse", label: t("browse") },
              { id: "flow", label: t("guidedFlow") },
            ] as const
          ).map((v) => (
            <button
              key={v.id}
              role="tab"
              aria-selected={tab === v.id}
              onClick={() => setTab(v.id)}
              className={cn(
                "rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                tab === v.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {tab === "browse" ? (
        <>
          <div className="relative mt-5">
            <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("decisionsSearchPlaceholder")}
              className="h-11 rounded-xl bg-card ps-10"
              aria-label={t("decisionsSearchPlaceholder")}
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
              <Scale className="mx-auto size-8 text-muted-foreground/50" aria-hidden />
              <p className="mt-3 text-sm font-semibold">{t("searchEmptyTitle")}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t("searchEmptyDesc")}</p>
            </div>
          ) : (
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((d, i) => {
                const Icon = categoryIcons.decision[d.category];
                const color = catColor[d.category];
                return (
                  <motion.button
                    key={d.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i * 0.03, 0.3) }}
                    onClick={() => setOpen(d)}
                    className="group rounded-2xl border border-border/60 bg-card p-4 text-start transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}1f`, color }}>
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <Badge variant="secondary" className="rounded-md text-[10px] font-semibold uppercase" style={{ color, backgroundColor: `${color}1a` }}>
                        {catLabel(d.category)}
                      </Badge>
                    </div>
                    <p className="mt-3 line-clamp-1 text-sm font-bold">{tx(d.title, lang)}</p>
                    <p className="mt-1.5 line-clamp-3 min-h-12 text-xs leading-relaxed text-muted-foreground">
                      {tx(d.description, lang)}
                    </p>
                    <p className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-primary">
                      {d.options.length} {t("decisionOptions")}
                      <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden />
                    </p>
                  </motion.button>
                );
              })}
            </div>
          )}
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {t("showing")} {filtered.length} {t("of")} {DECISIONS.length} {t("decisionCount")}
          </p>
        </>
      ) : (
        /* ---------- Guided decision flow ---------- */
        <div className="mx-auto mt-6 max-w-2xl">
          <div className="rounded-3xl border border-border/60 bg-card p-6 sm:p-8">
            {/* Step 1 */}
            <div className={cn(flowCat && "opacity-50 transition-opacity")}>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-[10px]">1</span>
                {t("flowPickCategory")}
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {(["architecture", "technology", "process"] as DecisionCategory[]).map((c) => {
                  const Icon = categoryIcons.decision[c];
                  return (
                    <button
                      key={c}
                      onClick={() => { setFlowCat(c); setFlowOpt(null); }}
                      className={cn(
                        "rounded-xl border p-3 text-start transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        flowCat === c ? "border-primary/50 bg-primary/10" : "border-border/60 hover:border-primary/30 hover:bg-muted/40"
                      )}
                    >
                      <Icon className="size-4" style={{ color: catColor[c] }} aria-hidden />
                      <p className="mt-2 text-sm font-semibold">{catLabel(c)}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 */}
            {secondQ && (
              <div className="mt-6 border-t border-border/60 pt-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-[10px]">2</span>
                  {secondQ.q}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {secondQ.options.map((o, i) => (
                    <button
                      key={i}
                      onClick={() => setFlowOpt(i)}
                      className={cn(
                        "flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-start text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        flowOpt === i ? "border-primary/50 bg-primary/10" : "border-border/60 hover:border-primary/30 hover:bg-muted/40"
                      )}
                    >
                      {o.label}
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground rtl:rotate-180" aria-hidden />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Result */}
            {flowResults.length > 0 && (
              <div className="mt-6 border-t border-border/60 pt-6">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
                  <CheckCircle2 className="size-4" aria-hidden />
                  {t("flowRecommendation")}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {flowResults.map((d) => (
                    <button
                      key={d.slug}
                      onClick={() => setOpen(d)}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-start transition-all hover:border-emerald-500/50 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-bold">{tx(d.title, lang)}</span>
                        <span className="mt-0.5 block truncate text-[11px] text-muted-foreground">{tx(d.description, lang)}</span>
                      </span>
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden />
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">{t("flowResultHint")}</p>
              </div>
            )}

            {(flowCat || flowOpt !== null) && (
              <Button
                variant="ghost"
                size="sm"
                className="mt-5 gap-1.5 text-muted-foreground"
                onClick={() => { setFlowCat(null); setFlowOpt(null); }}
              >
                <RotateCcw className="size-3.5" aria-hidden />
                {t("flowRestart")}
              </Button>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">{t("flowIntro")}</p>
        </div>
      )}

      <DecisionDialog decision={open} onClose={() => setOpen(null)} />
    </div>
  );
}
