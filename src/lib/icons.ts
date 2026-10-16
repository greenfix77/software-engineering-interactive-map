import {
  Lightbulb,
  DraftingCompass,
  TerminalSquare,
  MonitorSmartphone,
  Server,
  Database,
  FlaskConical,
  GitBranch,
  Rocket,
  Activity,
  TrendingUp,
  RefreshCcw,
  Code2,
  Wrench,
  BookOpen,
  Scale,
  type LucideIcon,
} from "lucide-react";

/** Stage icons keyed by lucide icon name used in stage content. */
export const stageIcons: Record<string, LucideIcon> = {
  Lightbulb,
  DraftingCompass,
  TerminalSquare,
  MonitorSmartphone,
  Server,
  Database,
  FlaskConical,
  GitBranch,
  Rocket,
  Activity,
  TrendingUp,
  RefreshCcw,
};

export { Code2 };

export function getStageIcon(name: string): LucideIcon {
  return stageIcons[name] ?? Code2;
}

/** Fallback icon for content cards by category. */
export const categoryIcons = {
  tool: {
    development: Wrench,
    testing: FlaskConical,
    devops: GitBranch,
    monitoring: Activity,
    database: Database,
  } as Record<string, LucideIcon>,
  topic: {
    frontend: MonitorSmartphone,
    backend: Server,
    devops: GitBranch,
    testing: FlaskConical,
    others: BookOpen,
  } as Record<string, LucideIcon>,
  decision: {
    architecture: DraftingCompass,
    technology: Wrench,
    process: Scale,
  } as Record<string, LucideIcon>,
};
