# Project Worklog — Software Engineering Interactive Map

> Shared worklog for all agents. Each agent MUST read this file before starting and append its section after finishing.

---
Task ID: 0
Agent: main (orchestrator)
Task: Analyze AGENTS.md roadmap + showcase image, plan the build

Work Log:
- Read /home/z/my-project/upload/AGENTS.md fully (mission, invariants, 12 stages, 9 phases, bilingual EN/FA RTL requirement, content/UI/state separation, no heavy backend).
- Analyzed showcase image: 9 screens (map, search dialog, stage detail, topics, tools, decisions, search results, 404, mobile) — dark navy + neon accent design.
- Decided architecture: single Next.js route `/` (system constraint) with internal hash-based router (#/map, #/stages/[slug], #/tools, #/topics, #/decisions, #/search, #/architecture, #/settings, #/about). Zustand + localStorage persistence for language/theme/mode/checklist progress. Client-side search index over stages/tools/topics/decisions.
- Plan: foundation (types/i18n/store/router/theme) → stages content (main agent) → parallel content subagents (tools/topics/decisions) → shell + views → search → polish → browser verification.

Stage Summary:
- Build started from scratch; all AGENTS.md checkboxes ignored as instructed by user.
- Content targets: 12 stages + 60 tools + 60 topics + 24 decisions + 12 checklists = 168 docs, 5 content types.

---
Task ID: 3-a
Agent: content-tools subagent
Task: Populate src/content/tools/index.ts with 60 bilingual tools
Work Log:
- Read worklog.md, src/types/index.ts (Tool/ToolCategory/StageSlug authoritative) and stages/index.ts to extract all stage-referenced toolSlugs.
- Wrote 60 Tool objects into src/content/tools/index.ts, preserving the existing import, doc comment and toolBySlug helper; no extra imports, no `as const`, no per-item comments.
- All 32 stage-referenced slugs included with exact slugs (development 12, testing 7, devops 8, monitoring 7, database 5); free slots filled with real popular tools: webstorm, npm, turbo, webpack, bun, github-copilot, lighthouse, chrome-devtools, mocha, junit, k6, testcontainers, selenium, circleci, helm, loki, jaeger, pagerduty, sqlite, supabase, dbeaver.
- Bilingual content: one-sentence EN (≤14 words) + natural technical Persian (tool names kept in English, ZWNJ used, no fa field empty or identical to en).
- Ratings 4.0–4.9 (one decimal, schema range 3.5–5.0); stage assigned per most-relevant stage (figma→architecture, vscode→setup, jest→testing, docker→cicd, prometheus→monitoring, postgresql→database, argocd/helm/k8s/terraform/nginx/ansible→deployment).
- Validation: `bunx tsc --noEmit` → zero errors mentioning src/content/tools (only pre-existing examples/ + skills/ errors remain). `bun run lint` → clean, no references to src/content/tools/index.ts. Bun check script confirmed: total 60, counts dev=20/testing=12/devops=10/monitoring=10/database=8, all 39 required slugs present, no duplicate slugs, every stages toolSlug resolves via toolBySlug, no schema violations; check script not persisted (run via bun -e).
Stage Summary:
- src/content/tools/index.ts populated: 60 tools, categories exact (development 20, testing 12, devops 10, monitoring 10, database 8), total 60.
- All 32 required slugs verified present: figma, github, vscode, git, pnpm, eslint, prettier, vite, storybook, intellij, postman, insomnia | jest, vitest, cypress, playwright, testing-library, msw, sonarqube | docker, github-actions, jenkins, argocd, kubernetes, terraform, nginx, ansible | prometheus, grafana, sentry, datadog, elk, opentelemetry, newrelic | postgresql, mysql, mongodb, redis, prisma.
- tsc: PASS (no src/content/tools errors); eslint: PASS (no src/content/tools errors); stage cross-reference: PASS (all STAGES[].toolSlugs resolve).

---
Task ID: 3-b
Agent: content-topics subagent
Task: Populate src/content/topics/index.ts with 60 bilingual topics

Work Log:
- Read worklog.md, src/types/index.ts (Topic/TopicCategory authoritative) and src/content/stages/index.ts; extracted all stage-referenced topicSlugs (47 unique).
- Replaced the empty TOPICS array with 60 fully typed Topic objects; kept import + topicBySlug helper untouched (no extra imports, no as const).
- Required slugs assigned to mandated categories; free slots filled: frontend +5 (web-performance, design-systems, pwa, internationalization, motion-design), backend +3 (microservices, rate-limiting, websockets), testing +5 (performance-testing, security-testing, contract-testing, regression-testing, bdd).
- Wrote natural technical Persian titles/descriptions (Latin tech terms like React/API/State kept inside Persian text; one-sentence descriptions ≤16 words); articles ranged 6..14 per Topic schema.
- Stage assignment = where the topic is primarily taught: logging-backend→monitoring, rest-vs-graphql-topic & microservices→architecture, environment-management & version-control-strategy→setup, cost-optimization→release, technical-debt & code-review→improvement, etc.
- Validated: bunx tsc --noEmit → zero errors in src/content/topics; bun validation script → total 60, 12 per category, 47/47 required slugs, 0 duplicate slugs, 0 schema violations; bun run lint → no errors referencing src/content/topics/index.ts.
- Removed the temporary validation script from tool-results/.

Stage Summary:
- TOPICS: 60 total — frontend 12, backend 12, devops 12, testing 12, others 12 (exactly as required).
- All 47 required slugs present with correct categories (frontend 7, backend 9, devops 12, testing 7, others 12) + 13 free-slot topics = 60.
- Stage distribution: frontend 12, testing 12, backend 9, architecture 6, deployment 5, monitoring 3, database 3, cicd 3, setup 2, discovery 2, improvement 2, release 1.
- Validation: tsc clean for topics file, counts/duplicates/schema checks all pass, lint clean for topics file.

---
Task ID: 3-c
Agent: content-decisions subagent
Task: Populate src/content/decisions/index.ts with 24 bilingual decisions

Work Log:
- Read worklog.md, src/types/index.ts (Decision/DecisionOption/DecisionCategory types), and src/content/stages/index.ts to confirm the exact decision slugs stages reference.
- Wrote 24 Decision documents into DECISIONS in src/content/decisions/index.ts, keeping the existing import, JSDoc header, and decisionBySlug helper untouched (no extra imports, no `as const`).
- Category split exactly 8/8/8 (architecture/technology/process); included the 2 free technology slots: language-choice, framework-choice.
- Stage assignment aligned with stage references: monolith-vs-microservices & sql-vs-nosql-choice → architecture; server-rendering-vs-spa, state-management-choice, css-solution-choice → frontend; rest-vs-graphql, event-driven-vs-request-response, caching-strategy, orm-vs-raw-sql → backend; database-choice → database; testing-framework-choice, testing-scope → testing; branching-strategy, monorepo-vs-polyrepo, build-tool-choice, language-choice, framework-choice → setup; cicd-strategy & release-strategy → cicd; cloud-provider-choice → deployment; error-tracking-policy & oncall-policy → monitoring; documentation-strategy → discovery; code-review-policy → improvement.
- Content quality: every option has exactly 2 pros + 2 cons (≤8 words per language), Latin tech terms preserved inside Persian (REST, GraphQL, CI/CD, ADR, feature flag...), pragmatic "start with X / switch to Y when..." recommendations, natural non-translationese Persian.
- Validation: `bunx tsc --noEmit` → 0 errors in src/content/decisions (only 4 pre-existing errors in examples/ and skills/); `bun run lint` → clean, no errors referencing the decisions file.
- Structure verification script (bun): total=24, unique slugs=24, all 24 required slugs present (22 mandated + 2 free), every decision has 2-3 options, exactly 2 pros/cons per option, no empty fa fields, no pros/cons phrase over 8 words in either language.

Stage Summary:
- src/content/decisions/index.ts now exports 24 bilingual decisions: architecture=8 (monolith-vs-microservices, sql-vs-nosql-choice, event-driven-vs-request-response, rest-vs-graphql, server-rendering-vs-spa, state-management-choice, caching-strategy, monorepo-vs-polyrepo), technology=8 (language-choice, framework-choice, build-tool-choice, css-solution-choice, database-choice, orm-vs-raw-sql, testing-framework-choice, cloud-provider-choice), process=8 (documentation-strategy, branching-strategy, testing-scope, cicd-strategy, release-strategy, error-tracking-policy, oncall-policy, code-review-policy).
- All 22 stage-referenced slugs verified present; decisionBySlug resolves every one.
- Validation results: tsc clean for decisions (4 pre-existing errors elsewhere ignored), eslint clean, structural invariants (option/pros/cons counts, bilingual completeness) all pass.

---
Task ID: 1-9 (main build)
Agent: main (orchestrator)
Task: Build the complete SE Map SPA — foundation, shell, all views, search, content integration

Work Log:
- Foundation: src/types/index.ts, lib/i18n.ts (full EN/FA UI dictionary), lib/hash-router.ts (hash SPA router), store/app-store.ts (Zustand + persist: language/theme/mode/checklist/searchOpen), lib/icons.ts, lib/search.ts (scored full-text index), lib/progress.ts (derived helpers).
- Design system: globals.css rewritten — dark navy oklch tokens + light theme, bg-grid/glass/glow utilities, custom scrollbar, RTL font stack (Vazirmatn fallback), reduced-motion support.
- Content: 12 stages fully authored (bilingual, icon/color/duration/difficulty/prereqs/tags/keyPoints/flow/checklist). Content subagents filled tools (60), topics (60), decisions (24) — all stage slug references verified (0 missing). Total docs = 156 + 12 checklists = 168.
- Shell: sidebar (brand/nav/search/theme), header (4 stat chips, search trigger, mode/lang/theme switches), sticky-safe footer, mobile Sheet nav with RTL-aware slide.
- Views: Home dashboard (hero/stats/progress/stages/features/CTA), Map (serpentine 12-node roadmap with dotted connectors + legend + list mode), Stages grid, Stage Detail (breadcrumb, header w/ glow, tabs Overview/Concepts/Tools/Topics/Decisions, mini infographic Input→Process→Output, Quick Info, persisted checklist with progress, prev/next), Tools (filters+ratings+install links), Topics, Decisions (browse + guided 2-step flow + detail dialog with pros/cons/recommendation), Architecture Visualizer (layer pipeline + infra + per-layer techs), Search (cmdk dialog + full results page), Settings (lang/theme/mode/reset), About (mission/9 phases/stats/stack), 404 (AI-generated astronaut image /images/404-astronaut.png).
- Fixed: SheetContent extended with start/end sides for RTL; react-hooks lint errors (static components → StageIcon module component; setState-in-effect → useSyncExternalStore/render-time adjustment).
- Validation: bun run lint → clean; bunx tsc --noEmit → clean (project files); dev server 200.

Stage Summary:
- App fully built as single-route SPA at / with hash deep links (#/map, #/stages/[slug], #/tools, #/topics, #/decisions, #/architecture, #/search, #/settings, #/about).
- Bilingual EN (LTR, default) / FA (RTL) with dir switching applied to <html>.
- Progress persists in localStorage (zustand persist key: se-map-v1).
- Pending: Agent Browser E2E verification.

---
Task ID: 10 (E2E verification)
Agent: main (orchestrator)
Task: Agent Browser end-to-end verification of the running app

Work Log:
- Verified home renders (hero, 168+ docs stat, 5 content types, sidebar nav) — no console errors, no page errors.
- Roadmap view: serpentine 12-node map with dotted connectors, legend, Roadmap/List toggle renders correctly; mobile single-column fallback works.
- Stage detail: breadcrumb, glow header, tabs (Overview/Key Concepts/Tools 3/Topics 5/Decisions 4), mini infographic, Quick Info, checklist. Checked 2 items → progress 33% shown, persisted to localStorage ("architecture:0/1": true).
- Search dialog (/ key + header button): filter chips All 156 / Stages 12 / Tools 60 / Topics 60 / Decisions 24. FIXED: multi-term search (AND→OR scored ranking) + cmdk shouldFilter={false} so our index controls results. "react architecture" → 14 ranked results; Enter navigates to #/topics.
- Topics page: real content cards (React, TypeScript, ...) with category chips. Tools page: 60 tools, ratings, Install links, stage refs. Decisions: browse + dialog with Monolith/Modular Monolith/Microservices pros-cons + recommendation; guided 2-step flow produces recommendations.
- Architecture visualizer: Client→Frontend→Backend→Data pipeline + CI/CD→Deployment infra row + per-layer techs.
- 404 page: AI-generated astronaut image renders with glow + gradient 404 + Back to Map.
- Bilingual: switched to Persian — html dir=rtl lang=fa, entire UI mirrored (sidebar right), fluent Persian strings; light theme also verified; settings radios work (lang + mode); reset progress flow present.
- Mobile 390x844: hamburger sheet nav, compact header, 1-col cards. Footer: mt-auto sticky-bottom behavior confirmed (bodyH>winH pushes footer naturally).
- dev.log: zero runtime errors. lint: clean. tsc: clean (project files).

Stage Summary:
- App is browser-verified end-to-end in both languages, light/dark, desktop/mobile.
- Fixes applied during verification: search OR-scoring, cmdk shouldFilter=false, Sheet start/end sides, react-hooks lint compliance.
- v1.0 feature set complete per AGENTS.md scope (dashboard, map, stage detail + infographic, search, checklist/progress, modes, tech cards, architecture visualizer, decision flow, bilingual RTL/LTR, responsive, a11y basics, SEO metadata, local persistence).
