"use client";

import dynamic from "next/dynamic";

/**
 * Single-route SPA: the whole app is client-rendered with an internal
 * hash router (#/map, #/stages/[slug], ...) so deep links and browser
 * back/forward work while the app is served from `/`.
 */
const App = dynamic(() => import("@/components/app-router").then((m) => m.default), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <span className="size-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" aria-hidden />
    </div>
  ),
});

export default function Page() {
  return <App />;
}
