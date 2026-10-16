"use client";

import type { Stage, StageStatus } from "@/types";
import { STAGES } from "@/content/stages";
import { useAppStore } from "@/store/app-store";

/** Pure helpers derived from store state (no side effects). */

export function stageChecklistKeys(stage: Stage): string[] {
  return stage.checklist.map((_, i) => `${stage.slug}:${i}`);
}

export function stageCompletedCount(
  stage: Stage,
  checklist: Record<string, boolean>
): number {
  return stageChecklistKeys(stage).filter((k) => checklist[k]).length;
}

export function stageProgress(
  stage: Stage,
  checklist: Record<string, boolean>
): number {
  if (stage.checklist.length === 0) return 0;
  return stageCompletedCount(stage, checklist) / stage.checklist.length;
}

export function stageStatus(
  stage: Stage,
  checklist: Record<string, boolean>
): StageStatus {
  const total = stage.checklist.length;
  const done = stageCompletedCount(stage, checklist);
  if (total > 0 && done === total) return "completed";
  if (done > 0) return "in-progress";
  return "upcoming";
}

export function overallProgress(checklist: Record<string, boolean>): number {
  const totalItems = STAGES.reduce((acc, s) => acc + s.checklist.length, 0);
  if (totalItems === 0) return 0;
  let done = 0;
  for (const s of STAGES) done += stageCompletedCount(s, checklist);
  return done / totalItems;
}

/** Hook: reactive progress helpers bound to the store. */
export function useProgress() {
  const checklist = useAppStore((s) => s.checklist);
  return {
    checklist,
    stageProgress: (s: Stage) => stageProgress(s, checklist),
    stageStatus: (s: Stage) => stageStatus(s, checklist),
    overallProgress: () => overallProgress(checklist),
    completedStages: STAGES.filter((s) => stageStatus(s, checklist) === "completed")
      .length,
  };
}
