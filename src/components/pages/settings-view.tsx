"use client";

import {
  Globe,
  Moon,
  GraduationCap,
  Rocket,
  DatabaseBackup,
  HardDriveDownload,
  Languages,
  Palette,
  Target,
} from "lucide-react";
import { useAppStore } from "@/store/app-store";
import { getT } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

export function SettingsView() {
  const lang = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);
  const mode = useAppStore((s) => s.mode);
  const setMode = useAppStore((s) => s.setMode);
  const resetProgress = useAppStore((s) => s.resetProgress);
  const t = getT(lang);
  const { overallProgress, completedStages } = useProgress();
  const pct = Math.round(overallProgress() * 100);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("settingsTitle")}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{t("settingsSubtitle")}</p>

      <div className="mt-6 flex flex-col gap-4">
        {/* Language */}
        <section className="rounded-2xl border border-border/60 bg-card p-5" aria-labelledby="set-lang">
          <h2 id="set-lang" className="flex items-center gap-2 text-sm font-bold">
            <Languages className="size-4 text-primary" aria-hidden />
            {t("language")}
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">{t("settingsLanguageDesc")}</p>
          <RadioGroup
            value={lang}
            onValueChange={(v) => setLanguage(v as "en" | "fa")}
            className="mt-3 grid gap-2 sm:grid-cols-2"
          >
            {(
              [
                { value: "en", label: t("english"), sub: "LTR — English" },
                { value: "fa", label: t("persian"), sub: "RTL — فارسی" },
              ] as const
            ).map((o) => (
              <Label
                key={o.value}
                htmlFor={`lang-${o.value}`}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-all",
                  lang === o.value ? "border-primary/50 bg-primary/10" : "border-border/60 hover:bg-muted/40"
                )}
              >
                <RadioGroupItem value={o.value} id={`lang-${o.value}`} />
                <span>
                  <span className="block text-sm font-semibold">{o.label}</span>
                  <span className="block text-[11px] text-muted-foreground">{o.sub}</span>
                </span>
              </Label>
            ))}
          </RadioGroup>
        </section>

        {/* Theme */}
        <section className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card p-5" aria-labelledby="set-theme">
          <div>
            <h2 id="set-theme" className="flex items-center gap-2 text-sm font-bold">
              <Palette className="size-4 text-primary" aria-hidden />
              {t("theme")}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">{t("settingsThemeDesc")}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2.5">
            <Moon className={cn("size-4", theme === "dark" ? "text-primary" : "text-muted-foreground/50")} aria-hidden />
            <Switch
              checked={theme === "light"}
              onCheckedChange={(v) => setTheme(v ? "light" : "dark")}
              aria-label={t("theme")}
            />
            <span className={cn("text-xs font-semibold", theme === "light" ? "text-primary" : "text-muted-foreground/50")}>
              {t("light")}
            </span>
          </div>
        </section>

        {/* Mode */}
        <section className="rounded-2xl border border-border/60 bg-card p-5" aria-labelledby="set-mode">
          <h2 id="set-mode" className="flex items-center gap-2 text-sm font-bold">
            <Target className="size-4 text-primary" aria-hidden />
            {t("mode")}
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">{t("settingsModeDesc")}</p>
          <RadioGroup
            value={mode}
            onValueChange={(v) => setMode(v as "learning" | "product")}
            className="mt-3 grid gap-2 sm:grid-cols-2"
          >
            {(
              [
                { value: "learning", label: t("modeLearning"), desc: t("modeLearningDesc"), icon: GraduationCap },
                { value: "product", label: t("modeProduct"), desc: t("modeProductDesc"), icon: Rocket },
              ] as const
            ).map((o) => (
              <Label
                key={o.value}
                htmlFor={`mode-${o.value}`}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-all",
                  mode === o.value ? "border-primary/50 bg-primary/10" : "border-border/60 hover:bg-muted/40"
                )}
              >
                <RadioGroupItem value={o.value} id={`mode-${o.value}`} className="mt-0.5" />
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 text-sm font-semibold">
                    <o.icon className="size-3.5 text-primary" aria-hidden />
                    {o.label}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">{o.desc}</span>
                </span>
              </Label>
            ))}
          </RadioGroup>
        </section>

        {/* Progress */}
        <section className="rounded-2xl border border-border/60 bg-card p-5" aria-labelledby="set-progress">
          <h2 id="set-progress" className="flex items-center gap-2 text-sm font-bold">
            <DatabaseBackup className="size-4 text-primary" aria-hidden />
            {t("settingsProgress")}
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{t("settingsProgressDesc")}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold">
              <HardDriveDownload className="size-3.5 text-primary" aria-hidden />
              {t("settingsStorage")}: localStorage
            </span>
            <span className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold">
              {t("overallProgress")}: {pct}% · {completedStages}/12 {t("statusCompleted")}
            </span>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="mt-4 gap-2">
                <DatabaseBackup className="size-4" aria-hidden />
                {t("resetProgress")}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t("resetConfirm")}</AlertDialogTitle>
                <AlertDialogDescription>{t("settingsResetDesc")}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{t("all")}</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    resetProgress();
                    toast({ title: t("resetDone") });
                  }}
                >
                  {t("resetProgress")}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      </div>
    </div>
  );
}
