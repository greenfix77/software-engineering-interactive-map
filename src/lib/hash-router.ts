"use client";

import { useCallback, useEffect, useState } from "react";

export interface RouteInfo {
  /** segments after "#/", e.g. "#/stages/architecture" -> ["stages","architecture"] */
  segments: string[];
  query: URLSearchParams;
  raw: string; // e.g. "/stages/architecture?q=react"
}

function parseHash(): RouteInfo {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  const [path, qs] = hash.split("?");
  const segments = path.split("/").filter(Boolean);
  return { segments, query: new URLSearchParams(qs ?? ""), raw: path };
}

export function useHashRoute(): RouteInfo {
  const [route, setRoute] = useState<RouteInfo>(() =>
    typeof window === "undefined"
      ? { segments: [], query: new URLSearchParams(), raw: "/" }
      : parseHash()
  );

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      // Scroll to top on navigation for consistent UX
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function navigate(to: string) {
  const target = to.startsWith("#") ? to : `#${to.startsWith("/") ? to : `/${to}`}`;
  if (window.location.hash === target) {
    // force re-render / scroll top when navigating to the same route
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    window.location.hash = target;
  }
}

export function useNavigate() {
  return useCallback((to: string) => navigate(to), []);
}
