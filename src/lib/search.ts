"use client";

import type { SearchDoc, SearchDocType, SearchResult } from "@/types";
import { STAGES } from "@/content/stages";
import { TOOLS } from "@/content/tools";
import { TOPICS } from "@/content/topics";
import { DECISIONS } from "@/content/decisions";

/**
 * Builds a lightweight in-memory search index over all content docs.
 * Content ≠ UI ≠ State: the index is derived data, rebuilt on load.
 */

let cachedIndex: SearchDoc[] | null = null;

export function buildSearchIndex(): SearchDoc[] {
  if (cachedIndex) return cachedIndex;

  const docs: SearchDoc[] = [];

  for (const s of STAGES) {
    docs.push({
      id: `stage:${s.slug}`,
      type: "stage",
      title: s.title,
      description: s.shortDescription,
      categoryLabel: `Stage ${s.order}`,
      stage: s.slug,
      badge: `Stage ${s.order}`,
      keywords: [
        s.title.en,
        s.title.fa,
        s.shortDescription.en,
        s.shortDescription.fa,
        s.description.en,
        s.description.fa,
        ...s.tags,
      ]
        .join(" ")
        .toLowerCase(),
      route: `#/stages/${s.slug}`,
    });
  }

  for (const t of TOOLS) {
    docs.push({
      id: `tool:${t.slug}`,
      type: "tool",
      title: { en: t.name, fa: t.name },
      description: t.description,
      categoryLabel: t.category,
      stage: t.stage,
      badge: t.category,
      keywords: [t.name, t.description.en, t.description.fa, t.category]
        .join(" ")
        .toLowerCase(),
      route: "#/tools",
    });
  }

  for (const t of TOPICS) {
    docs.push({
      id: `topic:${t.slug}`,
      type: "topic",
      title: t.title,
      description: t.description,
      categoryLabel: t.category,
      stage: t.stage,
      badge: t.category,
      keywords: [t.title.en, t.title.fa, t.description.en, t.description.fa, t.category]
        .join(" ")
        .toLowerCase(),
      route: "#/topics",
    });
  }

  for (const d of DECISIONS) {
    docs.push({
      id: `decision:${d.slug}`,
      type: "decision",
      title: d.title,
      description: d.description,
      categoryLabel: d.category,
      stage: d.stage,
      badge: d.category,
      keywords: [d.title.en, d.title.fa, d.description.en, d.description.fa, d.category]
        .join(" ")
        .toLowerCase(),
      route: "#/decisions",
    });
  }

  cachedIndex = docs;
  return docs;
}

/** Simple scored full-text match: prefix > word > substring. Multi-term = OR semantics, ranked by score. */
export function searchContent(query: string, type: SearchDocType | "all"): SearchResult[] {
  const q = query.trim().toLowerCase();
  const index = buildSearchIndex();
  if (!q) {
    return index
      .filter((d) => type === "all" || d.type === type)
      .map((d) => ({ ...d, score: 0 }));
  }

  const terms = q.split(/\s+/);
  const results: SearchResult[] = [];

  for (const doc of index) {
    if (type !== "all" && doc.type !== type) continue;
    const title = doc.title.en.toLowerCase() + " " + doc.title.fa.toLowerCase();
    let score = 0;
    let matchedTerms = 0;

    for (const term of terms) {
      let termScore = 0;
      if (title.startsWith(term)) termScore = 12;
      else if (title.includes(term)) termScore = 8;
      else if (doc.keywords.includes(term)) termScore = 4;
      if (termScore > 0) matchedTerms += 1;
      score += termScore;
    }

    // Boost docs that satisfy more of the query terms
    if (matchedTerms > 1) score += matchedTerms * 3;
    if (score > 0) results.push({ ...doc, score });
  }

  results.sort((a, b) => b.score - a.score);
  return results;
}

export function countByType(): Record<SearchDocType | "all", number> {
  const index = buildSearchIndex();
  const counts = { all: index.length, stage: 0, tool: 0, topic: 0, decision: 0 };
  for (const d of index) counts[d.type] += 1;
  return counts;
}

/**
 * Total docs = searchable docs (stages + tools + topics + decisions)
 * + stage checklists (the 5th content type).
 */
export const TOTAL_DOCS = () =>
  buildSearchIndex().length + STAGES.filter((s) => s.checklist.length > 0).length;
