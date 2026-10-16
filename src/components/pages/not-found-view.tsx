"use client";

import { motion } from "framer-motion";
import { Map as MapIcon, Home, Search } from "lucide-react";
import Image from "next/image";
import { useAppStore } from "@/store/app-store";
import { getT } from "@/lib/i18n";
import { navigate } from "@/lib/hash-router";
import { Button } from "@/components/ui/button";

export function NotFoundView() {
  const lang = useAppStore((s) => s.language);
  const t = getT(lang);
  const setSearchOpen = useAppStore((s) => s.setSearchOpen);

  return (
    <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6">
      {/* Astronaut illustration */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 scale-125 rounded-full bg-primary/20 blur-3xl"
        />
        <Image
          src="/images/404-astronaut.png"
          alt="Astronaut floating in space — lost page"
          width={340}
          height={340}
          priority
          className="rounded-3xl object-contain drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-glow mt-2 bg-gradient-to-r from-primary via-fuchsia-400 to-cyan-400 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-7xl"
      >
        404
      </motion.p>

      <h1 className="mt-3 text-xl font-extrabold sm:text-2xl">{t("notFoundTitle")}</h1>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {t("notFoundDesc")}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" className="glow-primary gap-2" onClick={() => navigate("#/map")}>
          <MapIcon className="size-4.5" aria-hidden />
          {t("backToMap")}
        </Button>
        <Button size="lg" variant="outline" className="gap-2" onClick={() => navigate("#/")}>
          <Home className="size-4" aria-hidden />
          {t("navHome")}
        </Button>
        <Button size="lg" variant="ghost" className="gap-2" onClick={() => setSearchOpen(true)}>
          <Search className="size-4" aria-hidden />
          {t("navSearch")}
        </Button>
      </div>
    </div>
  );
}
