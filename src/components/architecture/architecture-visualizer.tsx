"use client";

import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  LayoutDashboard,
  Server,
  Database,
  GitBranch,
  Rocket,
  ArrowRight,
  ArrowDown,
  Info,
  Wrench,
} from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { getT, tx, type TranslationKey } from "@/lib/i18n";
import { TOOLS } from "@/content/tools";
import type { ToolCategory } from "@/types";
import { cn } from "@/lib/utils";

interface Layer {
  id: string;
  icon: typeof Server;
  color: string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  techs: string[];
}

const LAYERS: Layer[] = [
  {
    id: "client",
    icon: MonitorSmartphone,
    color: "#0ea5e9",
    titleKey: "archLayerClient",
    descKey: "archClientDesc",
    techs: ["Browser", "Mobile App", "PWA"],
  },
  {
    id: "frontend",
    icon: LayoutDashboard,
    color: "#f59e0b",
    titleKey: "archLayerFrontend",
    descKey: "archFrontendDesc",
    techs: ["React", "Vue", "Next.js"],
  },
  {
    id: "backend",
    icon: Server,
    color: "#ef4444",
    titleKey: "archLayerBackend",
    descKey: "archBackendDesc",
    techs: ["Node.js", "Go", "Python"],
  },
  {
    id: "data",
    icon: Database,
    color: "#10b981",
    titleKey: "archLayerData",
    descKey: "archDataDesc",
    techs: ["PostgreSQL", "MongoDB", "Redis"],
  },
];

const INFRA: Layer[] = [
  {
    id: "cicd",
    icon: GitBranch,
    color: "#8b5cf6",
    titleKey: "archLayerCicd",
    descKey: "archInfraDesc",
    techs: ["GitHub Actions", "Docker", "Terraform"],
  },
  {
    id: "deployment",
    icon: Rocket,
    color: "#f97316",
    titleKey: "archLayerDeploy",
    descKey: "archInfraDesc",
    techs: ["Kubernetes", "Nginx", "Cloud"],
  },
];

const TOOL_LAYER_MAP: Record<string, ToolCategory[]> = {
  client: ["development"],
  frontend: ["development"],
  backend: ["development"],
  data: ["database"],
  cicd: ["devops"],
  deployment: ["devops", "monitoring"],
};

function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  return vertical ? (
    <ArrowDown className="mx-auto my-1 size-5 shrink-0 text-muted-foreground/60" aria-hidden />
  ) : (
    <ArrowRight className="hidden size-5 shrink-0 self-center text-muted-foreground/60 lg:block rtl:rotate-180" aria-hidden />
  );
}

export function ArchitectureVisualizer() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);

  const renderLayer = (l: Layer, index: number, compact = false) => {
    const Icon = l.icon;
    return (
      <motion.div
        key={l.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.08 }}
        className={cn(
          "group relative flex-1 rounded-2xl border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:shadow-lg",
          compact ? "min-w-44" : "min-w-40"
        )}
        style={{ borderColor: `${l.color}45` }}
      >
        <span
          className="mx-auto flex size-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${l.color}1f`, color: l.color, boxShadow: `0 0 18px ${l.color}33` }}
        >
          <Icon className="size-5" aria-hidden />
        </span>
        <p className="mt-2.5 text-sm font-bold">{t(l.titleKey)}</p>
        <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{t(l.descKey)}</p>
        <div className="mt-2.5 flex flex-wrap justify-center gap-1">
          {l.techs.map((tech) => (
            <span key={tech} className="rounded-md bg-muted/70 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    );
  };

  

  // Sample tools per layer for the "typical technologies" section
  const toolsFor = (id: string) => {
    const cats = TOOL_LAYER_MAP[id] ?? [];
    return TOOLS.filter((tool) => cats.includes(tool.category)).slice(0, 4);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("archTitle")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t("archSubtitle")}</p>

      {/* Diagram — main pipeline */}
      <div className="mt-6 rounded-3xl border border-border/60 bg-card/70 p-4 sm:p-6" role="img" aria-label={t("archTitle")}>
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-2">
          {LAYERS.map((l, i) => (
            <div key={l.id} className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch lg:gap-2">
              {renderLayer(l, i)}
              {i < LAYERS.length - 1 && (
                <>
                  <FlowArrow />
                  <span className="block lg:hidden"><FlowArrow vertical /></span>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Infra pipeline */}
        <div className="mt-4 border-t border-dashed border-border/60 pt-4">
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-2">
            {renderLayer(INFRA[0], 4, true)}
            <FlowArrow />
            {renderLayer(INFRA[1], 5, true)}
          </div>
        </div>
      </div>

      <p className="mt-4 flex items-start gap-2 rounded-2xl border border-primary/25 bg-primary/5 p-4 text-xs leading-relaxed text-muted-foreground">
        <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
        {t("archAgnostic")}
      </p>

      {/* Typical technologies */}
      <h2 className="mt-8 text-base font-bold">{t("archTechTitle")}</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[...LAYERS, ...INFRA].map((l) => {
          const tools = toolsFor(l.id);
          if (tools.length === 0) return null;
          const Icon = l.icon;
          return (
            <div key={`tech-${l.id}`} className="rounded-2xl border border-border/60 bg-card p-4">
              <p className="flex items-center gap-2 text-sm font-bold">
                <span className="flex size-7 items-center justify-center rounded-lg" style={{ backgroundColor: `${l.color}1f`, color: l.color }}>
                  <Icon className="size-3.5" aria-hidden />
                </span>
                {t(l.titleKey)}
              </p>
              <ul className="mt-2.5 flex flex-col gap-1.5">
                {tools.map((tool) => (
                  <li key={tool.slug} className="flex items-center justify-between gap-2 rounded-lg bg-muted/40 px-2.5 py-1.5 text-xs">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Wrench className="size-3 text-muted-foreground" aria-hidden />
                      {tool.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground">★ {tool.rating.toFixed(1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
