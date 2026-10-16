"use client";

import { motion } from "framer-motion";
import {
  Map as MapIcon,
  Search,
  ArrowRight,
  Layers,
  ListOrdered,
  FileText,
  FolderTree,
  Sparkles,
  Zap,
  MonitorSmartphone,
  Moon,
  Accessibility,
  Languages,
  Rocket,
  CircleCheck,
  CircleDot,
  Circle,
  GraduationCap,
} from "lucide-react";
import { STAGES } from "@/content/stages";
import { useAppStore } from "@/store/app-store";
import { getT, tx, formatTemplate } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/i18n";
import { navigate } from "@/lib/hash-router";
import { useProgress, stageStatus } from "@/lib/progress";
import { TOTAL_DOCS } from "@/lib/search";
import { StageIcon } from "@/components/stage/stage-icon";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

function StatusDot({ status }: { status: "completed" | "in-progress" | "upcoming" }) {
  if (status === "completed")
    return <CircleCheck className="size-4 text-emerald-500" aria-label="completed" />;
  if (status === "in-progress")
    return <CircleDot className="size-4 text-amber-500" aria-label="in progress" />;
  return <Circle className="size-4 text-muted-foreground/50" aria-label="upcoming" />;
}

export function HomeView() {
  const lang = useAppStore((s) => s.language);
  const mode = useAppStore((s) => s.mode);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);
  const { checklist, overallProgress, stageProgress } = useProgress();
  const t = getT(lang);
  const docCount = TOTAL_DOCS();

  const pct = Math.round(overallProgress() * 100);
  const nextStage =
    STAGES.find((s) => stageStatus(s, checklist) === "in-progress") ??
    STAGES.find((s) => stageStatus(s, checklist) === "upcoming") ??
    STAGES[0];

  const stats = [
    { icon: Layers, value: "12", label: t("statStages"), sub: t("statStagesSub") },
    { icon: ListOrdered, value: "9", label: t("statPhases"), sub: t("statPhasesSub") },
    { icon: FileText, value: docCount ? `${docCount}+` : "168+", label: t("statDocs"), sub: t("statDocsSub") },
    { icon: FolderTree, value: "5", label: t("statTypes"), sub: t("statTypesSub") },
  ];

  const features: { icon: typeof Zap; title: TranslationKey; desc: TranslationKey }[] = [
    { icon: Sparkles, title: "featureModernTitle", desc: "featureModernDesc" },
    { icon: Zap, title: "featureSearchTitle", desc: "featureSearchDesc" },
    { icon: MonitorSmartphone, title: "featureResponsiveTitle", desc: "featureResponsiveDesc" },
    { icon: Moon, title: "featureThemeTitle", desc: "featureThemeDesc" },
    { icon: Accessibility, title: "featureAccessibleTitle", desc: "featureAccessibleDesc" },
    { icon: Languages, title: "featureBilingualTitle", desc: "featureBilingualDesc" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Hero */}
      <motion.section
        {...fadeUp}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-primary/12 via-card to-card p-6 text-center sm:p-10 lg:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 start-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl rtl:translate-x-1/2"
        />
        <span className="relative inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Sparkles className="size-3.5" aria-hidden />
          {t("appVersion")} — {t("appTagline")}
        </span>
        <h1 className="relative mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {t("homeHeroTitle")}
        </h1>
        <p className="relative mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t("homeHeroDesc")}
        </p>
        <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="glow-primary gap-2" onClick={() => navigate("#/map")}>
            <MapIcon className="size-5" aria-hidden />
            {t("startJourney")}
          </Button>
          <Button size="lg" variant="outline" className="gap-2" onClick={() => setSearchOpen(true)}>
            <Search className="size-4" aria-hidden />
            {t("navSearch")}
          </Button>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4" aria-label="Stats">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="rounded-2xl border border-border/60 bg-card p-4"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/15">
                <Icon className="size-4.5 text-primary" aria-hidden />
              </span>
              <p className="mt-3 text-2xl font-extrabold tracking-tight">
                {s.value} <span className="text-sm font-semibold text-muted-foreground">{s.label}</span>
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.sub}</p>
            </motion.div>
          );
        })}
      </section>

      {/* Progress + next stage */}
      <section className="mt-6 grid gap-4 lg:grid-cols-3" aria-label={t("homeProgressTitle")}>
        <div className="rounded-2xl border border-border/60 bg-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="flex items-center gap-2 text-base font-bold">
                <GraduationCap className="size-4.5 text-primary" aria-hidden />
                {t("homeProgressTitle")}
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">{t("homeProgressDesc")}</p>
            </div>
            <span className="text-2xl font-extrabold text-primary">{pct}%</span>
          </div>
          <Progress value={pct} className="mt-4 h-2.5" aria-label={t("overallProgress")} />
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {(["completed", "in-progress", "upcoming"] as const).map((st) => {
              const count = STAGES.filter((s) => stageStatus(s, checklist) === st).length;
              return (
                <div key={st} className="rounded-xl bg-muted/50 p-2.5">
                  <p className="text-lg font-bold">{count}</p>
                  <p className="flex items-center justify-center gap-1 text-[11px] text-muted-foreground">
                    <StatusDot status={st} />
                    {st === "completed" ? t("statusCompleted") : st === "in-progress" ? t("statusInProgress") : t("statusUpcoming")}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continue card */}
        <button
          onClick={() => navigate(`#/stages/${nextStage.slug}`)}
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 text-start transition-all hover:border-primary/40 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring outline-none"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-15 transition-opacity group-hover:opacity-25"
            style={{ background: `radial-gradient(circle at 85% 15%, ${nextStage.color}, transparent 60%)` }}
          />
          <p className="relative text-xs font-medium text-muted-foreground">{t("continueLearning")}</p>
          <p className="relative mt-2 flex items-center gap-2 text-lg font-bold">
            <span
              className="flex size-9 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${nextStage.color}22`, color: nextStage.color }}
            >
              <StageIcon name={nextStage.icon} className="size-4.5" aria-hidden />
            </span>
            {nextStage.order}. {tx(nextStage.title, lang)}
          </p>
          <p className="relative mt-1.5 line-clamp-2 text-xs text-muted-foreground">
            {tx(nextStage.shortDescription, lang)}
          </p>
          <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            {Math.round(stageProgress(nextStage) * 100)}% · {formatTemplate(t("stageNof"), { n: nextStage.order })}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden />
          </span>
        </button>
      </section>

      {/* All stages mini-grid */}
      <section className="mt-8" aria-label={t("homeStagesTitle")}>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-bold">{t("homeStagesTitle")}</h2>
          <Button variant="ghost" size="sm" className="gap-1.5 text-primary" onClick={() => navigate("#/map")}>
            {t("viewAll")}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {STAGES.map((s) => {
            const st = stageStatus(s, checklist);
            return (
              <button
                key={s.slug}
                onClick={() => navigate(`#/stages/${s.slug}`)}
                className={cn(
                  "group rounded-2xl border border-border/60 bg-card p-4 text-start transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  mode === "product" && "p-3.5"
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex size-8 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${s.color}20`, color: s.color }}
                  >
                    <StageIcon name={s.icon} className="size-4" aria-hidden />
                  </span>
                  <StatusDot status={st} />
                </div>
                <p className="mt-2.5 truncate text-sm font-semibold">
                  <span className="text-muted-foreground">{s.order}.</span> {tx(s.title, lang)}
                </p>
                <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                  {tx(s.shortDescription, lang)}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="mt-10" aria-label={t("homeFeaturesTitle")}>
        <h2 className="mb-3 text-base font-bold">{t("homeFeaturesTitle")}</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Icon className="size-4.5 text-primary" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold">{t(f.title)}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t(f.desc)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10" aria-label={t("homeCtaTitle")}>
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-r from-primary/20 via-primary/10 to-cyan-400/15 p-6 sm:p-8">
          <div aria-hidden className="pointer-events-none absolute -bottom-16 end-10 size-48 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <Rocket className="size-5 text-primary" aria-hidden />
                {t("homeCtaTitle")}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{t("homeCtaDesc")}</p>
            </div>
            <Button size="lg" className="glow-primary shrink-0 gap-2" onClick={() => navigate("#/map")}>
              {t("homeCtaButton")}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
