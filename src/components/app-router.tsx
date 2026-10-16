"use client";

import { useEffect, useSyncExternalStore } from "react";
import { STAGES, stageBySlug } from "@/content/stages";
import { TOPICS } from "@/content/topics";
import { TOOLS } from "@/content/tools";
import { DECISIONS } from "@/content/decisions";
import { useHashRoute } from "@/lib/hash-router";
import { AppShell } from "@/components/layout/app-shell";
import { AppEffects } from "@/components/layout/app-effects";
import { SearchDialog } from "@/components/search/search-dialog";
import { HomeView } from "@/components/pages/home-view";
import { MapView } from "@/components/map/roadmap-view";
import { StagesView } from "@/components/pages/stages-view";
import { StageDetail } from "@/components/stage/stage-detail";
import { ToolsView } from "@/components/pages/tools-view";
import { TopicsView } from "@/components/pages/topics-view";
import { DecisionsView } from "@/components/pages/decisions-view";
import { ArchitectureVisualizer } from "@/components/architecture/architecture-visualizer";
import { SearchResultsView } from "@/components/search/search-results-view";
import { SettingsView } from "@/components/pages/settings-view";
import { AboutView } from "@/components/pages/about-view";
import { NotFoundView } from "@/components/pages/not-found-view";

function LoadingSplash() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <span className="size-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" aria-hidden />
        <p className="text-sm font-medium text-muted-foreground">SE Map</p>
      </div>
    </div>
  );
}

function Router() {
  const route = useHashRoute();
  const seg = route.segments;

  // Route resolution
  if (seg.length === 0) return <HomeView />;

  switch (seg[0]) {
    case "map":
      return <MapView />;
    case "stages": {
      if (seg.length === 1) return <StagesView />;
      const stage = stageBySlug(seg[1]);
      return stage ? <StageDetail stage={stage} /> : <NotFoundView />;
    }
    case "tools":
      return <ToolsView />;
    case "topics":
      return <TopicsView />;
    case "decisions":
      return <DecisionsView />;
    case "architecture":
      return <ArchitectureVisualizer />;
    case "search":
      return <SearchResultsView />;
    case "settings":
      return <SettingsView />;
    case "about":
      return <AboutView />;
    default:
      return <NotFoundView />;
  }
}

const emptySubscribe = () => () => {};

export default function App() {
  // Hydration-safe mounted flag (no setState-in-effect)
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Validate content coverage once on load (dev console only)
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const missing = STAGES.flatMap((s) => [
        ...s.topicSlugs.filter((t) => !TOPICS_OK.has(t)),
        ...s.toolSlugs.filter((t) => !TOOLS_OK.has(t)),
        ...s.decisionSlugs.filter((t) => !DECISIONS_OK.has(t)),
      ]);
      if (missing.length > 0) {
        console.warn("[SE Map] Missing content refs:", missing);
      }
    }
  }, []);

  if (!mounted) return <LoadingSplash />;

  return (
    <>
      <AppEffects />
      <AppShell>
        <Router />
      </AppShell>
      <SearchDialog />
    </>
  );
}

// Content reference sets for dev-time validation
const TOPICS_OK = new Set(TOPICS.map((t) => t.slug));
const TOOLS_OK = new Set(TOOLS.map((t) => t.slug));
const DECISIONS_OK = new Set(DECISIONS.map((d) => d.slug));
