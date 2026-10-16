"use client";

import type { LucideIcon } from "lucide-react";
import { stageIcons, Code2 } from "@/lib/icons";

/**
 * Module-level component that renders a stage's lucide icon by name.
 * Declared outside render so icon identity stays stable across renders
 * (satisfies react-hooks/static-components).
 */
export function StageIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon: LucideIcon = stageIcons[name] ?? Code2;
  return <Icon className={className} aria-hidden />;
}
