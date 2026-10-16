"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Home,
  Layers,
  Clock,
  Gauge,
  ListTree,
  CircleCheck,
  ArrowLeft,
  ArrowRight,
  Wrench,
  BookOpen,
  Scale,
  Lightbulb,
} from "lucide-react";
import type { Stage } from "@/types";
import { STAGES } from "@/content/stages";
import { TOOLS } from "@/content/tools";
import { TOPICS } from "@/content/topics";
import { DECISIONS } from "@/content/decisions";
import { useAppStore } from "@/store/app-store";
import { getT, tx, formatTemplate } from "@/lib/i18n";
import { navigate } from "@/lib/hash-router";
import { StageIcon } from "@/components/stage/stage-icon";
import { useProgress } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MiniInfographic } from "./mini-infographic";
import { ChecklistSection } from "./checklist-section";
import { cn } from "@/lib/utils";

function difficultyBadgeClass(d: Stage["difficulty"]) {
  return d === "beginner"
    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
    : d === "intermediate"
    ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30"
    : "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30";
}

export function StageDetail({ stage }: { stage: Stage }) {
  const lang = useAppStore((s) => s.language);
  const mode = useAppStore((s) => s.mode);
  const t = getT(lang);
  const { stageProgress } = useProgress();

  const prev = STAGES.find((s) => s.order === stage.order - 1);
  const next = STAGES.find((s) => s.order === stage.order + 1);

  const stageTopics = TOPICS.filter((tp) => stage.topicSlugs.includes(tp.slug));
  const stageTools = TOOLS.filter((tl) => stage.toolSlugs.includes(tl.slug));
  const stageDecisions = DECISIONS.filter((d) => stage.decisionSlugs.includes(d.slug));

  const pct = Math.round(stageProgress(stage) * 100);
  const defaultTab = mode === "product" ? "overview" : "overview";

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#/" className="gap-1">
              <Home className="size-3.5" aria-hidden />
              {t("navHome")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#/stages" className="gap-1">
              <Layers className="size-3.5" aria-hidden />
              {t("navStages")}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{tx(stage.title, lang)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header card */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative mt-4 overflow-hidden rounded-3xl border border-border/60 bg-card p-5 sm:p-7"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(700px 200px at 85% 0%, ${stage.color}55, transparent)` }}
        />
        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <span
              className="flex size-14 shrink-0 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${stage.color}1f`, color: stage.color, boxShadow: `0 0 24px ${stage.color}40` }}
            >
              <StageIcon name={stage.icon} className="size-7" aria-hidden />
            </span>
            <div className="min-w-0">
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                {tx(stage.title, lang)}
              </h1>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {tx(stage.description, lang)}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {stage.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-lg border border-border/60 bg-secondary/60 font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <Badge className="shrink-0 rounded-lg bg-primary/15 text-primary border border-primary/30 hover:bg-primary/15">
            {formatTemplate(t("stageNof"), { n: stage.order })}
          </Badge>
        </div>

        {/* Quick meta row */}
        <div className="relative mt-5 flex flex-wrap gap-2.5 text-xs">
          <span className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium">
            <Clock className="size-3.5 text-primary" aria-hidden />
            {t("duration")}: {tx(stage.duration, lang)}
          </span>
          <span className={cn("inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-medium", difficultyBadgeClass(stage.difficulty))}>
            <Gauge className="size-3.5" aria-hidden />
            {t("difficulty")}: {stage.difficulty === "beginner" ? t("diffBeginner") : stage.difficulty === "intermediate" ? t("diffIntermediate") : t("diffAdvanced")}
          </span>
          <span className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium">
            <ListTree className="size-3.5 text-primary" aria-hidden />
            {t("progress")}: {pct}%
          </span>
        </div>
      </motion.section>

      {/* Tabs */}
      <Tabs defaultValue={defaultTab} className="mt-6">
        <TabsList className="flex w-full flex-wrap justify-start gap-1 overflow-x-auto bg-card/60 custom-scrollbar h-auto">
          <TabsTrigger value="overview">{t("tabOverview")}</TabsTrigger>
          <TabsTrigger value="concepts">{t("tabConcepts")}</TabsTrigger>
          <TabsTrigger value="tools">{t("tabTools")} ({stageTools.length})</TabsTrigger>
          <TabsTrigger value="topics">{t("tabTopics")} ({stageTopics.length})</TabsTrigger>
          <TabsTrigger value="decisions">{t("tabDecisions")} ({stageDecisions.length})</TabsTrigger>
        </TabsList>

        {/* Overview */}
        <TabsContent value="overview" className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <p className="text-sm leading-loose text-foreground/90">
                {tx(stage.description, lang)}
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <MiniInfographic stage={stage} />
            </div>
            {mode === "product" && <ChecklistSection stage={stage} />}
          </div>

          {/* Quick Info side card */}
          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="text-sm font-bold">{t("quickInfo")}</h3>
              <dl className="mt-3 flex flex-col gap-3 text-sm">
                <div className="flex items-center justify-between gap-2">
                  <dt className="text-muted-foreground">{t("duration")}</dt>
                  <dd className="rounded-md bg-muted/60 px-2 py-0.5 text-xs font-semibold">
                    {tx(stage.duration, lang)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <dt className="text-muted-foreground">{t("difficulty")}</dt>
                  <dd className={cn("rounded-md border px-2 py-0.5 text-xs font-semibold", difficultyBadgeClass(stage.difficulty))}>
                    {stage.difficulty === "beginner" ? t("diffBeginner") : stage.difficulty === "intermediate" ? t("diffIntermediate") : t("diffAdvanced")}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">{t("prerequisites")}</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {stage.prerequisites.length === 0 ? (
                      <span className="text-xs text-muted-foreground">{t("none")}</span>
                    ) : (
                      stage.prerequisites.map((p) => {
                        const ps = STAGES.find((s) => s.slug === p);
                        if (!ps) return null;
                        return (
                          <button
                            key={p}
                            onClick={() => navigate(`#/stages/${p}`)}
                            className="rounded-lg border border-border/60 bg-muted/50 px-2 py-1 text-xs font-medium transition-colors hover:border-primary/40 hover:text-primary"
                          >
                            {ps.order}. {tx(ps.title, lang)}
                          </button>
                        );
                      })
                    )}
                  </dd>
                </div>
              </dl>
              <Button className="mt-4 w-full gap-2" onClick={() => navigate("#/tools")}>
                <Wrench className="size-4" aria-hidden />
                {t("exploreTools")}
              </Button>
            </div>

            {/* Key learning points */}
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold">
                <Lightbulb className="size-4 text-primary" aria-hidden />
                {t("keyLearningPoints")}
              </h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {stage.keyPoints.map((kp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden />
                    <span className="leading-relaxed">{tx(kp, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </TabsContent>

        {/* Key concepts */}
        <TabsContent value="concepts" className="mt-4 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="flex items-center gap-2 text-sm font-bold">
                <Lightbulb className="size-4 text-primary" aria-hidden />
                {t("keyLearningPoints")}
              </h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {stage.keyPoints.map((kp, i) => (
                  <li key={i} className="flex items-start gap-2.5 rounded-xl bg-muted/40 p-3 text-sm">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-emerald-500" aria-hidden />
                    <span className="leading-relaxed">{tx(kp, lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
            {mode === "product" && <ChecklistSection stage={stage} />}
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <MiniInfographic stage={stage} />
            </div>
          </div>
        </TabsContent>

        {/* Tools */}
        <TabsContent value="tools" className="mt-4">
          {stageTools.length === 0 ? (
            <p className="rounded-2xl border border-border/60 bg-card p-6 text-sm text-muted-foreground">{t("checklistEmpty")}</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stageTools.map((tl) => (
                <div key={tl.slug} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Wrench className="size-4 text-primary" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold">{tl.name}</p>
                    <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{tx(tl.description, lang)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Related topics */}
        <TabsContent value="topics" className="mt-4">
          {stageTopics.length === 0 ? (
            <p className="rounded-2xl border border-border/60 bg-card p-6 text-sm text-muted-foreground">{t("checklistEmpty")}</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stageTopics.map((tp) => (
                <div key={tp.slug} className="rounded-2xl border border-border/60 bg-card p-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15">
                      <BookOpen className="size-4 text-primary" aria-hidden />
                    </span>
                    <p className="truncate text-sm font-bold">{tx(tp.title, lang)}</p>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {tx(tp.description, lang)}
                  </p>
                  <p className="mt-2.5 flex items-center gap-1 text-[11px] text-muted-foreground">
                    <BookOpen className="size-3" aria-hidden />
                    {tp.articles} {t("articles")}
                  </p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Decisions */}
        <TabsContent value="decisions" className="mt-4">
          {stageDecisions.length === 0 ? (
            <p className="rounded-2xl border border-border/60 bg-card p-6 text-sm text-muted-foreground">{t("checklistEmpty")}</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {stageDecisions.map((d) => (
                <div key={d.slug} className="rounded-2xl border border-border/60 bg-card p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="flex items-center gap-2 text-sm font-bold">
                      <Scale className="size-4 text-primary" aria-hidden />
                      {tx(d.title, lang)}
                    </p>
                    <Badge variant="secondary" className="rounded-md text-[10px] uppercase">
                      {d.category === "architecture" ? t("catArchitecture") : d.category === "technology" ? t("catTechnology") : t("catProcess")}
                    </Badge>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {tx(d.description, lang)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Checklist (always visible in learning mode bottom) */}
      {mode === "learning" && (
        <div className="mt-6">
          <ChecklistSection stage={stage} />
        </div>
      )}

      {/* Prev / Next navigation */}
      <nav className="mt-6 grid gap-3 sm:grid-cols-2" aria-label={t("prevStage") + " / " + t("nextStage")}>
        {prev ? (
          <button
            onClick={() => navigate(`#/stages/${prev.slug}`)}
            className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 text-start transition-all hover:border-primary/40 outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5 rtl:rotate-180 rtl:group-hover:translate-x-0.5" aria-hidden />
            <span className="min-w-0">
              <span className="block text-[11px] text-muted-foreground">{t("prevStage")}</span>
              <span className="block truncate text-sm font-semibold">{prev.order}. {tx(prev.title, lang)}</span>
            </span>
          </button>
        ) : (
          <span />
        )}
        {next && (
          <button
            onClick={() => navigate(`#/stages/${next.slug}`)}
            className="group flex items-center justify-end gap-3 rounded-2xl border border-border/60 bg-card p-4 text-end transition-all hover:border-primary/40 outline-none focus-visible:ring-2 focus-visible:ring-ring sm:col-start-2"
          >
            <span className="min-w-0">
              <span className="block text-[11px] text-muted-foreground">{t("nextStage")}</span>
              <span className="block truncate text-sm font-semibold">{next.order}. {tx(next.title, lang)}</span>
            </span>
            <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden />
          </button>
        )}
      </nav>

      {/* Back link */}
      <div className="mt-6 text-center">
        <Button variant="ghost" className="gap-2 text-primary" onClick={() => navigate("#/map")}>
          <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          {t("backToMap")}
        </Button>
      </div>
    </div>
  );
}
