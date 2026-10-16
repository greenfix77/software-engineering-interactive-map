"use client";

import {
  Info,
  Target,
  ListOrdered,
  FileText,
  Code2,
  ShieldCheck,
  Layers,
  Wrench,
  BookOpen,
  Scale,
  ListChecks,
} from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { getT } from "@/lib/i18n";
import { TOTAL_DOCS } from "@/lib/search";


const DEV_PHASES = [
  "Design System + App Shell",
  "Interactive Engineering Map",
  "Stage Detail + Mini Infographic",
  "Content Architecture + Search",
  "Progress + Checklist + Modes",
  "Architecture Visualizer + Decision Flow",
  "Polish + Responsive + Accessibility",
  "Production Readiness",
  "Deployment + v1.0 Freeze",
];

export function AboutView() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const docCount = TOTAL_DOCS();

  const stats = [
    { icon: Layers, label: t("statStages"), value: "12" },
    { icon: ListOrdered, label: t("statPhases"), value: "9" },
    { icon: Wrench, label: t("searchTools"), value: "60" },
    { icon: BookOpen, label: t("searchTopics"), value: "60" },
    { icon: Scale, label: t("searchDecisions"), value: "24" },
    { icon: ListChecks, label: t("checklist"), value: "12" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("aboutTitle")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t("aboutSubtitle")}</p>

      {/* Mission */}
      <section className="mt-6 rounded-3xl border border-border/60 bg-card p-6" aria-labelledby="about-mission">
        <h2 id="about-mission" className="flex items-center gap-2 text-base font-bold">
          <Target className="size-4.5 text-primary" aria-hidden />
          {t("aboutMissionTitle")}
        </h2>
        <p className="mt-3 text-sm leading-loose text-foreground/90">{t("aboutMission")}</p>
        <p className="mt-3 flex items-start gap-2 rounded-xl bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
          {t("aboutDisclaimer")}
        </p>
      </section>

      {/* Content stats */}
      <section className="mt-6" aria-labelledby="about-stats">
        <h2 id="about-stats" className="flex items-center gap-2 text-base font-bold">
          <FileText className="size-4.5 text-primary" aria-hidden />
          {t("aboutStatsTitle")}
        </h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-2xl border border-border/60 bg-card p-3.5 text-center">
                <Icon className="mx-auto size-4.5 text-primary" aria-hidden />
                <p className="mt-2 text-xl font-extrabold">{s.value}</p>
                <p className="text-[11px] text-muted-foreground">{s.label}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {docCount}+ {t("statDocs")} — {t("statDocsSub")}
        </p>
      </section>

      {/* 9 phases */}
      <section className="mt-6" aria-labelledby="about-phases">
        <h2 id="about-phases" className="flex items-center gap-2 text-base font-bold">
          <ListOrdered className="size-4.5 text-primary" aria-hidden />
          {t("aboutPhasesTitle")}
        </h2>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {DEV_PHASES.map((p, i) => (
            <li key={p} className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-card px-3.5 py-2.5 text-xs font-medium">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-[11px] font-bold text-primary">
                {i + 1}
              </span>
              {p}
            </li>
          ))}
        </ol>
      </section>

      {/* Tech stack */}
      <section className="mt-6 rounded-3xl border border-border/60 bg-card p-6" aria-labelledby="about-tech">
        <h2 id="about-tech" className="flex items-center gap-2 text-base font-bold">
          <Code2 className="size-4.5 text-primary" aria-hidden />
          {t("aboutTechTitle")}
        </h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Zustand", "Framer Motion", "Lucide Icons", "cmdk"].map((tech) => (
            <span key={tech} className="rounded-lg border border-border/60 bg-muted/50 px-3 py-1.5 text-xs font-semibold">
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-emerald-500" aria-hidden />
          {t("settingsProgressDesc")}
        </p>
      </section>
    </div>
  );
}
