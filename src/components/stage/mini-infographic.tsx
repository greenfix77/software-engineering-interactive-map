"use client";

import { ArrowRight, Inbox, Cog, PackageCheck } from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { getT, tx } from "@/lib/i18n";
import type { Stage } from "@/types";

/** Mini Infographic: Input → Process → Output flow visualization. */
export function MiniInfographic({ stage }: { stage: Stage }) {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);

  const steps = [
    { icon: Inbox, label: t("flowInput"), text: tx(stage.flow.input, lang), color: "#3b82f6" },
    { icon: Cog, label: t("flowProcess"), text: tx(stage.flow.process, lang), color: stage.color },
    { icon: PackageCheck, label: t("flowOutput"), text: tx(stage.flow.output, lang), color: "#10b981" },
  ];

  return (
    <div role="img" aria-label={t("flowTitle")}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {t("flowTitle")}
      </p>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex flex-1 flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <div
                className="relative flex-1 rounded-2xl border border-border/60 bg-card p-4 transition-transform hover:-translate-y-0.5"
                style={{ borderColor: `${s.color}45` }}
              >
                <span
                  className="flex size-9 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${s.color}1f`, color: s.color }}
                >
                  <Icon className="size-4.5" aria-hidden />
                </span>
                <p className="mt-2.5 text-xs font-bold uppercase tracking-wide" style={{ color: s.color }}>
                  {s.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  className="mx-auto size-5 shrink-0 rotate-90 text-muted-foreground/60 sm:rotate-0 rtl:-rotate-90 rtl:sm:rotate-180"
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
