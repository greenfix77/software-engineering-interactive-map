"use client";

import { motion } from "framer-motion";
import { ChevronRight, CircleCheck, CircleDot, Circle } from "lucide-react";
import { STAGES } from "@/content/stages";
import { useAppStore } from "@/store/app-store";
import { getT, tx, formatTemplate } from "@/lib/i18n";
import { navigate } from "@/lib/hash-router";
import { useProgress } from "@/lib/progress";
import { StageIcon } from "@/components/stage/stage-icon";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function StagesView() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const { stageProgress, stageStatus: statusOf } = useProgress();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("navStages")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{formatTemplate(t("stageNof"), { n: 12 })} — {t("mapSubtitle")}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {STAGES.map((s, i) => {
          const status = statusOf(s);
          const pct = Math.round(stageProgress(s) * 100);
          return (
            <motion.button
              key={s.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              onClick={() => navigate(`#/stages/${s.slug}`)}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 text-start transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, ${s.color}66, transparent 55%)` }} />
              <div className="relative flex items-start gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${s.color}1f`, color: s.color, boxShadow: `0 0 16px ${s.color}30` }}>
                  <StageIcon name={s.icon} className="size-5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-bold">
                      <span className="text-muted-foreground">{s.order}.</span> {tx(s.title, lang)}
                    </p>
                    {status === "completed" ? (
                      <CircleCheck className="size-4 shrink-0 text-emerald-500" aria-label={t("statusCompleted")} />
                    ) : status === "in-progress" ? (
                      <CircleDot className="size-4 shrink-0 text-amber-500" aria-label={t("statusInProgress")} />
                    ) : (
                      <Circle className="size-4 shrink-0 text-muted-foreground/40" aria-label={t("statusUpcoming")} />
                    )}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {tx(s.shortDescription, lang)}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <Badge variant="secondary" className="rounded-md text-[10px] font-medium">
                      {tx(s.duration, lang)}
                    </Badge>
                    <Badge variant="secondary" className="rounded-md text-[10px] font-medium">
                      {s.difficulty === "beginner" ? t("diffBeginner") : s.difficulty === "intermediate" ? t("diffIntermediate") : t("diffAdvanced")}
                    </Badge>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Progress value={pct} className="h-1.5 flex-1" aria-label={t("progress")} />
                    <span className="text-[10px] font-semibold text-muted-foreground">{pct}%</span>
                  </div>
                </div>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
