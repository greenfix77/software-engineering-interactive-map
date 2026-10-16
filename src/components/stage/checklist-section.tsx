"use client";

import { toast } from "@/hooks/use-toast";
import { CheckCircle2, ListChecks, Trash2 } from "lucide-react";
import type { Stage } from "@/types";
import { useAppStore } from "@/store/app-store";
import { getT, tx } from "@/lib/i18n";
import { stageChecklistKeys } from "@/lib/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

/** Interactive, locally-persisted stage checklist. */
export function ChecklistSection({ stage }: { stage: Stage }) {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const checklist = useAppStore((s) => s.checklist);
  const toggleChecklistItem = useAppStore((s) => s.toggleChecklistItem);
  const setChecklistItems = useAppStore((s) => s.setChecklistItems);

  const keys = stageChecklistKeys(stage);
  const done = keys.filter((k) => checklist[k]).length;
  const pct = keys.length ? Math.round((done / keys.length) * 100) : 0;
  const allDone = keys.length > 0 && done === keys.length;

  const markAll = () => {
    setChecklistItems(keys, true);
    if (!allDone) {
      toast({ title: t("stageCompletedToast"), description: tx(stage.title, lang) });
    }
  };

  const resetAll = () => setChecklistItems(keys, false);

  return (
    <section
      className={cn(
        "rounded-2xl border bg-card p-5 transition-colors",
        allDone ? "border-emerald-500/40" : "border-border/60"
      )}
      aria-label={t("checklistTitle")}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className={cn("flex size-9 items-center justify-center rounded-xl", allDone ? "bg-emerald-500/15 text-emerald-500" : "bg-primary/15 text-primary")}>
            <ListChecks className="size-4.5" aria-hidden />
          </span>
          <div>
            <h3 className="text-sm font-bold">{t("checklistTitle")}</h3>
            <p className="text-[11px] text-muted-foreground">{t("checklistDesc")}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn("text-lg font-extrabold", allDone && "text-emerald-500")}>{pct}%</span>
          <Button variant="ghost" size="sm" onClick={markAll} className="gap-1.5 text-xs" disabled={allDone}>
            <CheckCircle2 className="size-3.5" aria-hidden />
            {t("markAllDone")}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 text-muted-foreground hover:text-destructive"
            onClick={resetAll}
            aria-label={t("resetProgress")}
          >
            <Trash2 className="size-3.5" aria-hidden />
          </Button>
        </div>
      </div>

      <Progress value={pct} className={cn("mt-3 h-2", allDone && "[&>div]:bg-emerald-500")} aria-label={t("progress")} />

      <ul className="mt-4 flex max-h-96 flex-col gap-1 overflow-y-auto pe-1 custom-scrollbar">
        {stage.checklist.map((item, i) => {
          const key = `${stage.slug}:${i}`;
          const checked = !!checklist[key];
          return (
            <li key={item.id}>
              <label
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-xl px-3 py-2.5 transition-colors",
                  checked ? "bg-emerald-500/8" : "hover:bg-muted/60"
                )}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => toggleChecklistItem(key)}
                  className="mt-0.5"
                  aria-label={tx(item.label, lang)}
                />
                <span
                  className={cn(
                    "text-sm leading-relaxed transition-colors",
                    checked ? "text-muted-foreground line-through decoration-emerald-500/60" : "text-foreground"
                  )}
                >
                  {tx(item.label, lang)}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
      {stage.checklist.length === 0 && (
        <p className="mt-3 text-xs text-muted-foreground">{t("checklistEmpty")}</p>
      )}
    </section>
  );
}
