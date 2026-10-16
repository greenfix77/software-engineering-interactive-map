/**
 * Core content & app types — Software Engineering Interactive Map
 * Architecture invariant: Content ≠ UI ≠ State
 * All human-facing content is bilingual: { en, fa }
 */

export type Language = "en" | "fa";
export type ThemeMode = "dark" | "light";
export type AppMode = "learning" | "product";

/** A bilingual string pair. English is the base language (LTR), Persian is RTL. */
export interface LocalizedText {
  en: string;
  fa: string;
}

/** Stage status derived from checklist completion. */
export type StageStatus = "completed" | "in-progress" | "upcoming";

/** The 12 canonical product stages (v1.0 roadmap invariant). */
export const STAGE_SLUGS = [
  "discovery",
  "architecture",
  "setup",
  "frontend",
  "backend",
  "database",
  "testing",
  "cicd",
  "deployment",
  "monitoring",
  "release",
  "improvement",
] as const;

export type StageSlug = (typeof STAGE_SLUGS)[number];

export interface StageChecklistItem {
  id: string;
  label: LocalizedText;
}

export interface Stage {
  slug: StageSlug;
  order: number; // 1..12
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  icon: string; // lucide icon name (mapped in lib/icons.ts)
  color: string; // hex accent color for glows / gradients
  duration: LocalizedText;
  difficulty: "beginner" | "intermediate" | "advanced";
  prerequisites: StageSlug[]; // stage slugs
  tags: string[]; // short keyword badges (EN, shown in both languages)
  keyPoints: LocalizedText[]; // key learning points (5-6)
  flow: {
    input: LocalizedText;
    process: LocalizedText;
    output: LocalizedText;
  };
  topicSlugs: string[]; // related topics (from content/topics)
  toolSlugs: string[]; // related tools (from content/tools)
  decisionSlugs: string[]; // related decisions (from content/decisions)
  checklist: StageChecklistItem[]; // 5-8 actionable items
}

export type ToolCategory =
  | "development"
  | "testing"
  | "devops"
  | "monitoring"
  | "database";

export interface Tool {
  slug: string;
  name: string;
  category: ToolCategory;
  description: LocalizedText;
  rating: number; // 0..5 (one decimal)
  stage: StageSlug; // primary stage this tool belongs to
  url: string; // official website
}

export type TopicCategory =
  | "frontend"
  | "backend"
  | "devops"
  | "testing"
  | "others";

export interface Topic {
  slug: string;
  title: LocalizedText;
  category: TopicCategory;
  description: LocalizedText;
  stage: StageSlug; // primary stage this topic is taught in
  articles: number; // number of linked articles (6..14)
}

export type DecisionCategory = "architecture" | "technology" | "process";

export interface DecisionOption {
  name: string;
  description: LocalizedText;
  pros: LocalizedText[];
  cons: LocalizedText[];
}

export interface Decision {
  slug: string;
  title: LocalizedText;
  category: DecisionCategory;
  description: LocalizedText;
  stage: StageSlug; // stage where this decision typically happens
  options: DecisionOption[]; // 2-3 options
  recommendation: LocalizedText; // pragmatic guidance text
}

/** Search document types. */
export type SearchDocType = "stage" | "tool" | "topic" | "decision";

export interface SearchDoc {
  id: string;
  type: SearchDocType;
  title: LocalizedText;
  description: LocalizedText;
  categoryLabel: string; // e.g. "Frontend", "DevOps", stage title fallback
  stage?: StageSlug;
  badge?: string; // extra badge text (e.g. category)
  keywords: string; // lowercase concat for matching
  route: string; // hash route e.g. "#/stages/discovery"
}

export interface SearchResult extends SearchDoc {
  score: number;
}
