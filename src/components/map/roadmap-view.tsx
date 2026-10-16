"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ChevronRight,
  CircleCheck,
  CircleDot,
  Circle,
  LayoutGrid,
  List as ListIcon,
} from "lucide-react";
import { STAGES } from "@/content/stages";
import type { Stage } from "@/types";
import { useAppStore } from "@/store/app-store";
import { getT, tx } from "@/lib/i18n";
import { navigate } from "@/lib/hash-router";
import { useProgress } from "@/lib/progress";
import { StageIcon } from "@/components/stage/stage-icon";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const LAST_IN_ROW = [3, 6, 9, 12]; // 1-based order positions at row end (3-col grid)
const WRAP_FROM = [3, 6, 9]; // cards whose flow wraps to the next row
const WRAP_TO = [4, 7, 10]; // cards receiving the wrap connection

function StatusIcon({ status, className }: { status: string; className?: string }) {
  if (status === "completed")
    return <CircleCheck className={cn("size-4 text-emerald-500", className)} aria-hidden />;
  if (status === "in-progress")
    return <CircleDot className={cn("size-4 text-amber-500", className)} aria-hidden />;
  return <Circle className={cn("size-4 text-muted-foreground/40", className)} aria-hidden />;
}

function StageNode({ stage, index }: { stage: Stage; index: number }) {
  const lang = useAppStore((s) => s.language);
  const { checklist, stageProgress, stageStatus: statusOf } = useProgress();
  const t = getT(lang);
  const status = statusOf(stage);
  const pct = Math.round(stageProgress(stage) * 100);

  const isLastInRow = LAST_IN_ROW.includes(stage.order);
  const isWrapFrom = WRAP_FROM.includes(stage.order);
  const isWrapTo = WRAP_TO.includes(stage.order);

  return (
    <motion.button
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      onClick={() => navigate(`#/stages/${stage.slug}`)}
      aria-label={`${stage.order}. ${tx(stage.title, lang)}`}
      className={cn(
        "group relative rounded-2xl border border-border/60 bg-card/90 p-4 text-start shadow-sm backdrop-blur transition-all outline-none",
        "hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring",
        isLastInRow && "lg:after:hidden"
      )}
    >
      {/* horizontal connector into the next card of this row (decorative, lg+) */}
      {!isLastInRow && (
        <span
          aria-hidden
          className="connector-line absolute start-full top-1/2 z-10 hidden h-px w-[26px] lg:block"
        />
      )}
      {/* wrap connector: stub below outer edge */}
      {isWrapFrom && (
        <span
          aria-hidden
          className="absolute end-3 top-full hidden h-6 border-e-2 border-dotted border-primary/40 lg:block"
        />
      )}
      {/* wrap receiver: stub above start edge */}
      {isWrapTo && (
        <span
          aria-hidden
          className="absolute bottom-full start-3 hidden h-6 border-s-2 border-dotted border-primary/40 lg:block"
        />
      )}

      <div className="flex items-start gap-3">
        <span
          className="relative flex size-11 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
          style={{
            backgroundColor: `${stage.color}1f`,
            color: stage.color,
            boxShadow: `0 0 18px ${stage.color}33`,
          }}
        >
          <StageIcon name={stage.icon} className="size-5" aria-hidden />
          <span
            className="absolute -top-1.5 -start-1.5 flex size-5 items-center justify-center rounded-full border border-border bg-background text-[10px] font-bold"
            aria-hidden
          >
            {stage.order}
          </span>
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 truncate text-sm font-bold">
            {tx(stage.title, lang)}
            <StatusIcon status={status} className="size-3.5 shrink-0" />
          </p>
          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
            {tx(stage.shortDescription, lang)}
          </p>
        </div>
      </div>
      {/* progress micro-bar */}
      <div className="mt-3 flex items-center gap-2">
        <Progress value={pct} className="h-1.5 flex-1" aria-label={t("progress")} />
        <span className="w-8 text-end text-[10px] font-semibold text-muted-foreground">{pct}%</span>
      </div>
    </motion.button>
  );
}

function StageRow({ stage }: { stage: Stage }) {
  const lang = useAppStore((s) => s.language);
  const { stageProgress, stageStatus: statusOf } = useProgress();
  const status = statusOf(stage);
  const pct = Math.round(stageProgress(stage) * 100);

  return (
    <button
      onClick={() => navigate(`#/stages/${stage.slug}`)}
      className="group flex w-full items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 text-start transition-all hover:border-primary/40 hover:shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl font-bold" style={{ backgroundColor: `${stage.color}1f`, color: stage.color }}>
        {stage.order}
      </span>
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${stage.color}1a`, color: stage.color }}
      >
        <StageIcon name={stage.icon} className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2 truncate text-sm font-bold">
          {tx(stage.title, lang)}
          <StatusIcon status={status} />
        </span>
        <span className="mt-0.5 block truncate text-xs text-muted-foreground">
          {tx(stage.shortDescription, lang)}
        </span>
      </span>
      <span className="hidden w-36 shrink-0 items-center gap-2 sm:flex">
        <Progress value={pct} className="h-1.5" aria-label={tx(stage.title, lang)} />
        <span className="w-8 text-end text-[10px] font-semibold text-muted-foreground">{pct}%</span>
      </span>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden />
    </button>
  );
}

export function MapView() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);
  const { checklist, stageStatus: statusOf } = useProgress();
  const [view, setView] = useState<"roadmap" | "list">("roadmap");

  const legend = [
    { label: t("statusCompleted"), icon: <CircleCheck className="size-3.5 text-emerald-500" aria-hidden /> },
    { label: t("statusInProgress"), icon: <CircleDot className="size-3.5 text-amber-500" aria-hidden /> },
    { label: t("statusUpcoming"), icon: <Circle className="size-3.5 text-muted-foreground/50" aria-hidden /> },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("mapTitle")}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{t("mapSubtitle")}</p>
        </div>
        <div
          className="flex shrink-0 items-center gap-1 rounded-xl border border-border/60 bg-card p-1"
          role="tablist"
          aria-label={t("mapTitle")}
        >
          {(
            [
              { id: "roadmap", label: t("roadmapView"), icon: LayoutGrid },
              { id: "list", label: t("listView"), icon: ListIcon },
            ] as const
          ).map((v) => (
            <button
              key={v.id}
              role="tab"
              aria-selected={view === v.id}
              onClick={() => setView(v.id)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
                view === v.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <v.icon className="size-3.5" aria-hidden />
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search bar (opens full search) */}
      <button
        onClick={() => setSearchOpen(true)}
        className="glass mt-5 flex h-11 w-full items-center gap-3 rounded-xl px-4 text-sm text-muted-foreground transition-colors hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={t("mapSearchPlaceholder")}
      >
        <Search className="size-4 shrink-0" aria-hidden />
        <span className="flex-1 truncate text-start">{t("mapSearchPlaceholder")}</span>
        <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-mono sm:block">
          /
        </kbd>
      </button>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 rounded-xl border border-border/60 bg-card/60 px-4 py-2.5" aria-label={t("legend")}>
        {legend.map((l) => (
          <span key={l.label} className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
            {l.icon}
            {l.label}
          </span>
        ))}
      </div>

      {/* Content */}
      {view === "roadmap" ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8" role="list">
          {STAGES.map((s, i) => (
            <div key={s.slug} role="listitem">
              <StageNode stage={s} index={i} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3" role="list">
          {STAGES.map((s) => (
            <div key={s.slug} role="listitem">
              <StageRow stage={s} />
            </div>
          ))}
        </div>
      )}

      {/* a11y: reflect statuses for screen readers */}
      <p className="sr-only">
        {STAGES.map((s) => `${s.order}. ${tx(s.title, lang)}: ${
          statusOf(s) === "completed"
            ? t("statusCompleted")
            : statusOf(s) === "in-progress"
            ? t("statusInProgress")
            : t("statusUpcoming")
        }`).join(", ")}
      </p>
    </div>
  );
}
