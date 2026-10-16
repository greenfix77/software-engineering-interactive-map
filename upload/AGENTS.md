# AGENTS.md — Software Engineering Interactive Map

> **This file is part of the project codebase and is authoritative for current project state, execution rules, scope, and agent handoff.**
>
> **Core rule:** Project state is code. `AGENTS.md`, repository code, and the relevant audit must describe the same version of the project.

---

# 1. Mission

Build a modern, interactive educational/product map for software engineering that shows the complete practical journey of building and releasing a full-stack software product.

The product is not a static infographic. It is an interactive learning and execution map:

```text
MAP
 ↓
STAGE
 ↓
DEEP DIVE
```

Primary user flow:

```text
Map
 ↓
Stage
 ↓
Mini Infographic
 ↓
Topics / Tools / Checklist / Decisions
 ↓
Deep Dive
```

The goal is to finish a clearly defined **v1.0** cleanly, predictably, and without uncontrolled scope expansion.

---

# 2. Product Vision

The product should help a user understand:

- what happens during software development
- in what order major activities happen
- what each stage produces
- which technologies/tools can be used
- which decisions matter
- what must be checked before moving forward
- how the parts of a full-stack system relate to each other
- how a project moves from idea to production and continuous improvement

The experience should be:

- modern
- practical
- visual
- interactive
- understandable
- responsive
- accessible
- maintainable
- useful for both learning and real project execution

---

# 3. Product Invariants

These are project invariants. Do not change them silently.

1. The product has exactly **12 product stages**.
2. The project has exactly **9 development phases**.
3. `AGENTS.md` exists at the repository root.
4. `audits/` stores historical phase reports.
5. `AGENTS.md` reflects actual repository state.
6. Content is separated from UI.
7. State is separated from content.
8. No unnecessary backend complexity is introduced.
9. v1.0 scope remains controlled.
10. No task is marked complete without validation.
11. No phase is marked complete without its Phase Gate and audit.
12. Future features cannot silently become current scope.
13. State changes must be traceable through Git when Git is used.
14. Graphify is a context/navigation layer, not the source of project truth.
15. v1.0 is bilingual: user-selectable Persian and English, with English LTR
    (default/base) and Persian RTL. Language selection applies consistently
    across the application. No v1.0 release is declared ready until bilingual
    and RTL/LTR checks pass.

---

# 4. Product Stages — v1.0 Roadmap Invariant

Exactly these 12 stages exist in v1.0:

1. Idea & Discovery
2. System Design & Architecture
3. Development Environment Setup
4. Frontend Development
5. Backend Development
6. Database
7. Testing & Quality Assurance
8. CI/CD & Release Preparation
9. Deployment
10. Monitoring & Logging
11. Release & Growth
12. Maintenance & Continuous Improvement

Do not add, remove, merge, or reorder these stages without an explicit scope/architecture change decision.

---

# 5. v1.0 User Experience

The primary application should contain:

- Landing Dashboard
- Interactive 12-stage roadmap
- Stage Detail
- Mini Infographic
- Breadcrumb navigation
- Bilingual UI (user-selectable Persian and English)
- Search
- Progress tracking
- Checklist
- Learning Mode
- Product Mode
- Technology Cards
- Architecture Visualizer
- Decision Flow
- Responsive layouts
- Accessibility basics
- SEO basics

Expected visual direction:

- dark navy/indigo foundation
- futuristic but readable visual language
- subtle glow and neon accents
- rounded cards
- strong information hierarchy
- SVG-based visualizations where useful
- Lucide icons
- controlled motion
- Persian RTL support
- English LTR as the default/base language
- responsive desktop/tablet/mobile behavior

Avoid decorative complexity that does not improve comprehension.

---

# 6. Preferred Technology Contract

Preferred v1.0 stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion / Framer Motion
- SVG
- Lucide
- Zustand
- Zod
- JSON / MDX

This is a technology contract, not permission to add every library listed above.

Use a dependency only when it solves a real requirement.

Do not introduce:

- PostgreSQL
- Prisma
- authentication
- external APIs
- microservices
- server infrastructure
- complex backend architecture

unless a real v1 requirement proves that it is necessary.

Initial architecture:

```text
Next.js
+
Static / Local Content
+
Client State
+
Local Persistence
```

---

# 7. Core Architecture Principle

The architecture must preserve:

```text
Content ≠ UI ≠ State
```

Content describes the software-engineering knowledge.

UI renders that content.

State manages user interaction and progress.

Preferred structure:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── map/
│   ├── dashboard/
│   ├── stage/
│   ├── architecture/
│   └── ui/
├── content/
│   ├── stages/
│   ├── tools/
│   ├── topics/
│   └── decisions/
├── lib/
├── store/
├── types/
└── styles/
```

Stage content:

```text
content/stages/
  discovery/
  architecture/
  setup/
  frontend/
  backend/
  database/
  testing/
  cicd/
  deployment/
  monitoring/
  release/
  improvement/
```

Prefer data-driven rendering over duplicated page markup.

---

# 8. Exactly 9 Development Phases

The project is intentionally divided into exactly 9 phases.

```text
1. Design System + App Shell
2. Interactive Engineering Map
3. Stage Detail + Mini Infographic
4. Content Architecture + Search
5. Progress + Checklist + Modes
6. Architecture Visualizer + Decision Flow
7. Polish + Responsive + Accessibility
8. Production Readiness
9. Deployment + v1.0 Freeze
```

A phase is complete only when:

- all phase tasks are complete
- Phase Gate passes
- validation evidence exists
- no release-blocking issue remains
- `AGENTS.md` is updated
- phase audit exists
- Graphify is updated when applicable

---

# 9. PHASE 1 — Design System + App Shell

## Tasks

- [x] Setup project
- [x] Configure TypeScript
- [x] Configure Tailwind
- [x] Configure UI primitives
- [x] Establish typography
- [x] Establish spacing/design tokens
- [x] Build global layout
- [x] Build Header
- [x] Build Sidebar/navigation
- [x] Build responsive application shell
- [x] Establish dark visual system
- [x] Run typecheck
- [x] Run lint
- [x] Run build
- [x] Create phase audit

## Phase Gate

Phase 1 passes only if:

- application starts
- responsive shell works
- visual system is established
- navigation shell exists
- typecheck passes
- lint passes
- production build passes
- audit exists

---

# 10. PHASE 2 — Interactive Engineering Map

## Tasks

- [x] Build 12-stage roadmap
- [x] Build stage cards/nodes
- [x] Build visual connections
- [x] Add hover states
- [x] Add active states
- [x] Add stage navigation
- [x] Add controlled animations
- [x] Make roadmap responsive
- [x] Validate all 12 stages
- [x] Create phase audit

## Phase Gate

- all 12 stages are visible/accessible
- navigation works
- routes are valid
- responsive behavior works
- interactions are understandable
- validation passes
- audit exists

---

# 11. PHASE 3 — Stage Detail + Mini Infographic

## Tasks

- [x] Build Stage Detail page
- [x] Build stage header
- [x] Build stage overview
- [x] Build Input → Process → Output visualization
- [x] Build Mini Infographic
- [x] Build topics section
- [x] Build tools section
- [x] Build next-step navigation
- [x] Build breadcrumb
- [x] Build back navigation
- [x] Connect all 12 stages
- [x] Validate stage navigation
- [x] Create phase audit

## Phase Gate

Every stage must:

- open successfully
- contain structured content
- show meaningful stage information
- support navigation
- have valid content
- pass validation
- be covered by the audit

---

# 12. PHASE 4 — Content Architecture + Search

## Tasks

- [x] Create content files
- [x] Define content types
- [x] Define stage schema
- [x] Define tool schema
- [x] Define topic schema
- [x] Define decision schema
- [x] Separate content from UI
- [x] Build search index
- [ ] Build search UI
- [ ] Build search results
- [x] Validate content
- [ ] Validate search
- [ ] Create phase audit

## Phase Gate

- content is separate from UI
- schemas are maintainable
- search works
- content is reusable
- validation passes
- audit exists

---

# 13. PHASE 5 — Progress + Checklist + Modes

## Tasks

- [ ] Build checklist
- [ ] Build task completion state
- [ ] Build progress calculation
- [ ] Add local persistence
- [ ] Build Learning Mode
- [ ] Build Product Mode
- [ ] Build mode switching
- [ ] Build progress indicators
- [ ] Validate persistence
- [ ] Validate modes
- [ ] Confirm no server dependency
- [ ] Create phase audit

## Phase Gate

- checklist works
- progress is calculated correctly
- state persists locally
- modes work
- no backend is required
- validation passes
- audit exists

---

# 14. PHASE 6 — Architecture Visualizer + Decision Flow

## Tasks

- [ ] Build architecture overview
- [ ] Add frontend node
- [ ] Add backend node
- [ ] Add database node
- [ ] Add deployment node
- [ ] Show relationships
- [ ] Build technology cards
- [ ] Build decision flow
- [ ] Keep architecture technology-agnostic where possible
- [ ] Validate relationships
- [ ] Validate decision flow
- [ ] Create phase audit

## Phase Gate

- architecture is understandable
- relationships are visible
- decision flow is useful
- technology cards are meaningful
- no unnecessary backend architecture exists
- validation passes
- audit exists

---

# 15. PHASE 7 — Polish + Responsive + Accessibility

## Tasks

- [ ] Desktop polish
- [ ] Tablet polish
- [ ] Mobile polish
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Semantic HTML
- [ ] Accessible labels
- [ ] Reduced-motion support
- [ ] Animation refinement
- [ ] Loading states
- [ ] Empty states
- [ ] Error states
- [ ] Validate accessibility basics
- [ ] Create phase audit

## Phase Gate

- desktop works
- tablet works
- mobile works
- keyboard navigation works
- focus is visible
- semantic structure is reasonable
- reduced motion is respected
- bilingual / RTL-LTR layout works in both languages
- validation passes
- audit exists

---

# 16. PHASE 8 — Production Readiness

## Tasks

- [ ] Remove dead code
- [ ] Review dependencies
- [ ] Review routes
- [ ] Add metadata
- [ ] Add basic SEO
- [ ] Review performance
- [ ] Review error handling
- [ ] Run production build
- [ ] Perform manual QA
- [ ] Check critical user journey
- [ ] Create phase audit

## Phase Gate

- production build passes
- no critical runtime errors
- main user journey is stable
- SEO basics exist
- bilingual / RTL-LTR checks pass in both languages
- no obvious dead/debug code remains
- audit exists

---

# 17. PHASE 9 — Deployment + v1.0 Freeze

## Tasks

- [ ] Configure deployment
- [ ] Deploy production build
- [ ] Verify production URL
- [ ] Smoke-test critical routes
- [ ] Test responsive production UI
- [ ] Test progress/checklist
- [ ] Test search
- [ ] Test architecture visualizer
- [ ] Test bilingual / RTL-LTR in both languages
- [ ] Verify no blocker
- [ ] Freeze v1.0 scope
- [ ] Create final audit

## Phase Gate

- production deployment works
- critical flows work
- no release-blocking issue exists
- bilingual / RTL-LTR checks pass in both languages
- v1.0 scope is frozen
- final audit exists

---

# 18. v1.0 Scope

## Inside v1.0

### Product

- [ ] Landing Dashboard
- [ ] Interactive 12-stage roadmap
- [ ] Stage Detail
- [ ] Mini Infographic
- [ ] Breadcrumb
- [ ] Search
- [ ] Progress
- [ ] Checklist
- [ ] Learning Mode
- [ ] Product Mode
- [ ] Bilingual UI (Persian/English, RTL/LTR)
- [ ] Technology Cards
- [ ] Architecture Visualizer
- [ ] Decision Flow

### Engineering

- [ ] Responsive
- [ ] Accessibility basics
- [ ] Bilingual / RTL-LTR layout and typography
- [ ] SEO basics
- [ ] Clean architecture
- [ ] Content separated from UI
- [ ] Local persistence
- [ ] Production build
- [ ] Audit report for every completed phase
- [ ] Graphify synchronized with final code state

### Release

- [ ] Deployment configured
- [ ] Production deployment verified
- [ ] Critical flows smoke-tested
- [ ] No known release-blocking issue
- [ ] v1.0 scope frozen
- [ ] Final Phase 9 audit exists

---

# 19. Explicitly Outside v1.0

Do not implement these unless the scope is formally changed:

- social network
- community
- chat
- messaging
- payment
- marketplace
- native mobile application
- complex backend
- microservices
- complex AI agent
- recommendation engine
- custom CMS
- complex admin panel
- multi-tenant SaaS
- real-time collaboration
- full LMS

---

# 20. Future / Parking Lot

These ideas may be useful later but are not current implementation scope:

- Project generator
- Advanced AI assistance
- Recommendation engine
- User accounts
- Cloud sync
- Team collaboration
- Advanced analytics
- Admin CMS
- Community
- Native mobile application

A parking-lot item must not silently become a current task.

---

# 21. Current Project State

```text
Current Version: v0.1
Current Phase: PHASE 4
Current Task: Build search UI
Phase Status: IN PROGRESS (PHASE 4 task 9 of 12 complete: Create content files, Define content types, Define stage schema, Define tool schema, Define topic schema, Define decision schema, Separate content from UI, Build search index, Validate content)
Overall Progress: 62%
Blocked: NO
Last Updated: 2026-10-11
```

---

# 22. Phase Status

```text
[x] PHASE 1 — Design System + App Shell
[x] PHASE 2 — Interactive Engineering Map
[x] PHASE 3 — Stage Detail + Mini Infographic
[ ] PHASE 4 — Content Architecture + Search
[ ] PHASE 5 — Progress + Checklist + Modes
[ ] PHASE 6 — Architecture Visualizer + Decision Flow
[ ] PHASE 7 — Polish + Responsive + Accessibility
[ ] PHASE 8 — Production Readiness
[ ] PHASE 9 — Deployment + v1.0 Freeze
```

Only change phase status after its gate passes.

---

# 23. Project State Is Code

`AGENTS.md` is not a side document.

It is part of the source-controlled project state.

The repository must preserve consistency between:

```text
Code
+
AGENTS.md
+
audits/
+
Graphify context
```

Authority is separated by purpose:

- `AGENTS.md` is authoritative for approved scope, invariants, workflow rules,
  phase definitions, and the currently recorded project state.
- Repository code and reproducible validation evidence establish what is actually
  implemented and working.
- `audits/` is the historical record of completed phase gates; it must not be
  silently rewritten to match later code.
- Graphify is a navigation/context layer and never overrides the other sources.

When these sources disagree:

1. inspect the relevant repository code and current validation evidence;
2. consult the relevant audit for historical decisions and previously verified state;
3. distinguish an implementation defect from stale documentation;
4. update `AGENTS.md` only when current evidence supports the correction;
5. preserve historical audits and record later corrections explicitly; and
6. stop if resolving the conflict requires a human scope or architecture decision.

Graphify helps navigate and reduce context usage. It is not evidence that a feature
works and does not override project state.

---

# 24. Task Lifecycle

Every implementation task follows:

```text
INSPECT
 ↓
IMPLEMENT
 ↓
VALIDATE
 ↓
UPDATE AGENTS.md
 ↓
UPDATE GRAPHIFY
 ↓
VERIFY CONSISTENCY
 ↓
REVIEW DIFF
 ↓
HANDOFF / COMMIT
```

Never mark a task complete before validation.

Never move to the next phase merely because implementation "looks finished".

---

# 26. Test Execution and Server Lifecycle Policy

This policy defines when validation runs, how expensive checks are scheduled, and how
local development/production servers are managed. It reduces repeated setup and
browser-test stalls without weakening task completion or phase gates.

## 25.1 Three-Level Testing Strategy

Validation is organized into three levels. Select the lowest level that provides
reliable evidence for the change, and run higher levels at the appropriate milestone.

### Level 1 — Batch Validation

Run during ordinary implementation batches and after focused changes:

- typecheck
- lint
- relevant unit tests
- relevant component or integration tests that do not require a persistent server
- content/schema/data validation
- focused deterministic scripts or probes

Run only checks relevant to the changed code, plus inexpensive required regression
checks. Do not start a production server or browser merely to repeat checks that can
be established locally.

### Level 2 — Phase Validation

Run when implementation work for a phase is substantially complete and before
evaluating its Phase Gate:

- complete project typecheck and lint
- relevant full test suites
- content and route validation
- production build
- static output and generated-route checks
- focused integration checks required by that phase

A production build is not proof that browser behavior, responsive layout, or
accessibility has been verified.

### Level 3 — Final Quality Gate

Run expensive or environment-dependent checks at the appropriate phase gate,
not repeatedly after every small implementation batch:

- production-server smoke tests for required routes and critical flows
- browser E2E tests and real interaction checks
- desktop, tablet, and mobile responsive verification
- keyboard, focus, semantic, and accessibility checks
- runtime console/error checks
- bilingual Persian RTL and English LTR checks when required by the phase

The phase-specific task list and Quality Gates determine which checks are mandatory.
Deferring a check changes its execution time; it does not remove the requirement.

## 25.2 Batch Validation Rules

1. After a focused code change, run the smallest relevant deterministic checks.
2. When related tasks are implemented together, validate them as one coherent batch
   rather than repeating the same setup and test suite after every subtask.
3. Re-run checks affected by subsequent code changes. Do not rerun unrelated checks
   without a reason.
4. Record exactly which checks ran and their results.
5. A skipped, deferred, unavailable, or unrun check must never be reported as PASS.

## 25.3 Phase Validation Rules

1. Before declaring a phase ready for its gate, run the Level 2 checks required by
   that phase.
2. Run Level 3 checks once at the phase gate when those checks are required by the
   phase tasks or gate.
3. If a change after validation affects validated behavior, repeat the relevant
   check before relying on the earlier result.
4. Do not create the phase audit or mark the phase complete until every mandatory
   task and gate condition has evidence.
5. If a mandatory check cannot be completed, keep the task/phase incomplete and
   report the exact deferred or blocked check.

## 25.4 Final Quality Gate Requirements

The final quality gate is a consolidated verification point, not a reason to waive
earlier task-level validation.

At the relevant phase gate:

- execute required browser, responsive, accessibility, and runtime checks as a
  consolidated pass;
- verify the critical user journey and all routes/flows required by the phase;
- include both Persian RTL and English LTR wherever the bilingual requirement applies;
- record environment, commands, coverage, results, and limitations;
- resolve failures or leave the corresponding task and phase incomplete.

Do not claim visual, responsive, browser-interaction, or accessibility success from
typecheck, lint, build, static HTML inspection, or HTTP status alone.

## 25.5 Server Lifecycle Management

1. Prefer checks that do not require a persistent server.
2. If a server is required, first inspect whether a suitable server is already running
   and whether it serves the current build/source state.
3. Reuse a healthy server. Do not start duplicate servers or restart a healthy server
   without a concrete reason.
4. When source changes invalidate the running build, stop only the known
   project-owned process and start one replacement using the repository's documented
   command.
5. Start long-running processes so the agent can continue working; use bounded
   readiness polling and bounded request timeouts.
6. Record the process identifier, port, and base URL when useful for handoff.
7. Stop only processes positively identified as belonging to this project. Never
   terminate unrelated processes.

## 25.6 Failure and Recovery Policy

If a server, browser, or test command stalls or fails:

1. Capture available error/output and identify whether the failure is in the code,
   test, browser, server, or environment.
2. Make at most one bounded recovery attempt for the same environmental failure
   (for example, one controlled server restart or one browser relaunch).
3. Do not repeat unbounded polling, restart loops, or identical commands that have
   already failed without new evidence.
4. If recovery fails, stop troubleshooting that environment and continue with
   independent work that can be validated reliably.
5. Mark the affected check as `DEFERRED`, `BLOCKED`, or `NOT VERIFIED`, with a short
   reason and the evidence already obtained.
6. Do not convert an unavailable test into a pass, and do not bypass a mandatory
   gate. Resume the deferred check at the next appropriate gate or when the
   environment is available.

## 25.7 Reporting and Gate Integrity

Every validation handoff must distinguish:

- `PASS` — the check ran and passed;
- `FAIL` — the check ran and failed;
- `DEFERRED` — intentionally postponed to the appropriate gate;
- `BLOCKED` — attempted but prevented by a stated blocker;
- `NOT RUN` — not attempted.

Report the commands or test method, scope/coverage, result, and relevant limitations.
State whether browser-based visual verification actually ran.

A task may be marked complete only when its required validation has passed. A phase
may be marked complete, its audit created, and its status advanced only when all
phase tasks and mandatory gate checks have passed. Deferred checks remain open.
This policy changes test scheduling and server handling only; it does not reduce
the project's Definition of Done, Quality Gates, phase scope, or release requirements.

---

# 25. Session Start Protocol

Before doing work:

1. Read `AGENTS.md`.
2. Check current project state.
3. Check current phase and task.
4. Run `git status` when Git is available.
5. Check the relevant audit.
6. Check Graphify when relevant.
7. Identify the first relevant unchecked task.
8. Decide whether a sub-agent materially helps.
9. Inspect only relevant repository areas.
10. Implement only the selected task.

Do not restart completed work without evidence that it is broken.

---

# 27. Session Close Protocol

Before ending a work session:

1. Run relevant validation.
2. Update task/status checkboxes.
3. Record decisions.
4. Record blockers.
5. Run `graphify update .` when code changed.
6. Create/verify phase audit if a phase was completed.
7. Inspect the diff.
8. Verify code ↔ `AGENTS.md` ↔ audit consistency.
9. State the exact next task.

---

# 28. Agent Handoff Format

Every meaningful handoff should contain:

```text
Current Phase:
Current Task:
Completed:
Blocked:
Next Action:
Validation Performed:
Important Decisions:
Relevant Audit:
Relevant Graphify Context:
```

Do not hand off with vague statements such as "continue development".

---

# 29. Definition of Done

A task is done only when:

- implementation exists
- intended behavior works
- relevant validation passes
- no obvious regression exists
- architecture remains consistent
- no unnecessary scope was introduced
- `AGENTS.md` is updated

A phase is done only when:

- all phase tasks are complete
- Phase Gate passes
- no release-blocking issue remains
- `AGENTS.md` is updated
- audit exists and is valid
- Graphify is updated when applicable

---

# 30. Quality Gates

## Code

- typecheck
- lint
- no dead code
- no debug leftovers
- no unnecessary dependencies

## Product

- user flow is understandable
- navigation works
- responsive behavior works
- visual hierarchy is coherent

## Architecture

- content/UI/state separation
- no unnecessary backend
- no premature abstraction
- no unnecessary complexity

## Accessibility

- semantic structure
- keyboard navigation
- visible focus
- accessible labels
- reasonable motion
- reduced-motion support

## Bilingual / RTL-LTR

- language selection applies consistently across the application
- Persian (RTL) and English (LTR) both render correctly
- layout, typography, navigation, and icons respect direction
- language metadata is present

## Production

- production build
- routes work
- no critical runtime error

## Audit

- every completed phase has an audit
- audit matches implementation
- audit contains handoff information
- historical audits are not silently rewritten

---

# 31. Audit System

Every completed phase requires a Markdown audit in:

```text
audits/
```

Expected files:

```text
audits/
├── phase-01-design-system-app-shell.md
├── phase-02-interactive-engineering-map.md
├── phase-03-stage-detail-mini-infographic.md
├── phase-04-content-architecture-search.md
├── phase-05-progress-checklist-modes.md
├── phase-06-architecture-visualizer-decision-flow.md
├── phase-07-polish-responsive-accessibility.md
├── phase-08-production-readiness.md
└── phase-09-deployment-v1-freeze.md
```

Audit template:

```md
# Phase X Audit

Phase:
Status:
Date:

## Summary

## Completed Tasks

## Files Changed

## Architecture Decisions

## Validation Performed

## Tests / Build Results

## Known Limitations

## Blockers

## Scope Changes

## Important Notes for Future Agents

## Next Phase

## Handoff
```

Historical audits are project memory.

Do not rewrite historical facts to make history look cleaner.

If a later correction is required, record it as:

```text
Post-Phase Correction
```

---

# 32. Audit Reading Strategy

Do not load the entire project history for every task.

Normally read:

1. `AGENTS.md`
2. current phase audit
3. immediately previous phase audit if relevant

Read older audits only when a historical decision matters.

The purpose is to preserve context without wasting context.

---

# 33. Token / Context Efficiency

Optimize for useful engineering work per context, not blindly for minimum token count.

Rules:

- read only relevant files
- use targeted searches instead of repository dumps
- use Graphify scoped queries
- do not read `GRAPH_REPORT.md` for every task
- reuse existing components
- reuse existing types
- reuse existing utilities
- avoid speculative refactors
- avoid rebuilding working components
- summarize findings
- stop early when blocked
- do not inspect unrelated folders without a reason

Context priority:

```text
1. AGENTS.md state
2. Current task
3. Relevant Graphify subgraph
4. Direct dependencies
5. Relevant implementation files
6. Relevant audit report
7. Validation output
8. Everything else only if necessary
```

---

# 34. Sub-Agent Protocol

Sub-agents may be used when they materially reduce complexity, time, or context usage.

Good uses:

- independent repository inspection
- focused research
- UI/component inspection
- test investigation
- accessibility review
- performance review
- documentation review
- independent validation
- clearly separable implementation tasks

Do not use sub-agents for:

- trivial work
- tightly coupled work
- tasks where delegation costs more context than it saves

The main agent remains responsible for:

- scope
- architecture
- implementation
- validation
- `AGENTS.md`
- audits
- final decisions

Sub-agents must not independently redefine:

- product scope
- phase order
- technology contract
- architecture

unless that decision is explicitly delegated.

Delegation format:

```text
TASK:
GOAL:
RELEVANT FILES:
CONSTRAINTS:
EXPECTED OUTPUT:
```

Always verify sub-agent results before relying on them.

---

# 35. Graphify Integration

This project uses Graphify as a repository knowledge graph and context-reduction layer.

Graphify output may exist under:

```text
graphify-out/
```

Typical outputs:

```text
graph.html
GRAPH_REPORT.md
graph.json
```

## `/graphify`

When the user types:

```text
/graphify
```

use the installed Graphify skill or instructions before doing anything else.

## Codebase Questions

When `graphify-out/graph.json` exists, prefer:

```text
graphify query "<question>"
```

for focused repository questions.

Use:

```text
graphify path "<A>" "<B>"
```

for relationships.

Use:

```text
graphify explain "<concept>"
```

for focused concepts.

These commands should be preferred over dumping large amounts of repository content.

## Broad Navigation

If available:

```text
graphify-out/wiki/index.md
```

may be used for broad navigation.

Read:

```text
graphify-out/GRAPH_REPORT.md
```

only when:

- broad architecture review is required
- query/path/explain do not provide enough context

Do not read the complete report for every task.

## Dirty Graphify Output

Dirty or incremental Graphify files are expected after hooks or updates.

Dirty graph output is not itself a project failure.

Skip Graphify only when:

- the task is specifically about stale/incorrect Graphify output
- the user explicitly asks not to use Graphify

## After Code Changes

After meaningful code changes:

```text
graphify update .
```

Keep Graphify synchronized with the repository.

## Graphify Authority

Graphify is not the project-state authority.

If Graphify conflicts with `AGENTS.md`, repository evidence and validation must be used to resolve the discrepancy.

---

# 36. Current Graphify Knowledge

The current Graphify analysis identified these major nodes:

1. Twelve Product Stages (v1.0 roadmap invariant)
2. Mission — Software Engineering Interactive Map
3. Nine-Phase Execution Model
4. Technology Contract — Preferred v1.0 Stack
5. PHASE 1 — Design System + App Shell
6. PHASE 5 — Progress + Checklist + Modes
7. Project State Is Code rule
8. Phase Audit Reports
9. PHASE 6 — Architecture Visualizer + Decision Flow
10. Router

Important relationships include:

- Twelve Product Stages ↔ Nine-Phase Execution Model
- Mission ↔ Interactive Engineering Map
- Mission ↔ Twelve Product Stages
- PHASE 4 ↔ Content ≠ UI ≠ State
- PHASE 7 ↔ Motion / Framer Motion
- Final v1.0 Checklist ↔ Mission
- PHASE 1 ↔ quality gates and project governance
- PHASE 5 ↔ progress/state
- PHASE 6 ↔ architecture visualization

Graphify health previously showed:

- one duplicate edge collapsed
- no dangling/missing endpoints

These findings are contextual information, not a replacement for repository inspection.

---

# 37. Anti-Scope-Creep Protocol

Every new request must be classified:

```text
A. Required by current task
B. Required by current phase
C. Required by v1.0
D. Useful but not required
E. Outside v1.0
```

Only A/B/C may be automatically implemented.

D/E must go to:

```text
FUTURE / PARKING LOT
```

If a request is ambiguous and changes architecture, scope, or product behavior:

STOP and ask for human direction.

Do not silently expand the product.

---

# 38. Change Request Protocol

For changes to:

- scope
- architecture
- phase order
- technology
- product model

record:

```text
CHANGE:
WHY:
IMPACT:
AFFECTED PHASES:
AFFECTED TASKS:
```

After approval:

1. update this document
2. update affected tasks
3. record the decision in the Decisions Log
4. continue implementation

Never silently rewrite project rules.

---

## Approved Change Requests

### CR-001 — Bilingual Persian/English Support for v1.0

```text
CR-001
Status: APPROVED (user decision, 2026-10-09)

CHANGE:
v1.0 supports user-selectable Persian and English. English uses LTR; Persian
uses RTL. Language selection applies consistently across the application.

WHY:
The user explicitly approved bilingual support as a v1.0 product requirement.
The product must be usable in both languages at release.

IMPACT:
v1.0 gains a bilingual requirement without adding product stages or execution
phases. The nine-phase model is unchanged; localization readiness is folded
into existing work and bilingual release validation is added to the Phase 8
and Phase 9 gates.

AFFECTED PHASES:
- PHASE 4 — content architecture must stay localization-ready: content is
  structured data separate from UI and state, so translations slot in as
  parallel content without a broad rewrite.
- PHASE 5 — language selection and local persistence share the Zustand store
  and local-persistence mechanism already planned for progress and modes.
- PHASE 7 — responsive polish covers RTL and LTR layout, typography,
  navigation, icons, and directional diagrams in both languages.
- PHASE 8 — production readiness validates bilingual / RTL-LTR checks.
- PHASE 9 — the release gate blocks v1.0 until bilingual and RTL/LTR checks
  pass in both languages.

AFFECTED TASKS:
- PHASE 5: Build mode switching (language selection joins mode switching)
- PHASE 7: Desktop/Tablet/Mobile polish, animation refinement (both directions)
- PHASE 8: Manual QA, critical user journey (both languages)
- PHASE 9: Test bilingual / RTL-LTR in both languages (added)
- v1.0 Scope: added "Bilingual UI (Persian/English, RTL/LTR)" to Product and
  "Bilingual / RTL-LTR layout and typography" to Engineering

LANGUAGE BEHAVIOR:
English is LTR and the default/base language. Persian is RTL. Language
selection applies consistently across the application.

NOW:
Keep the architecture localization-ready. Content remains separate from UI
and state. Avoid hardcoded assumptions (hardcoded English strings in
components, fixed left/right values, icon directions baked into layout)
that would make bilingual support require a broad rewrite.

BEFORE v1.0:
Complete both translations and UI strings. Implement language selection and
persistence according to the project's architecture. Handle RTL/LTR layout,
typography, navigation, icons, and directional diagrams. Provide appropriate
language metadata. Validate both languages across all relevant routes and
screen sizes.

RELEASE GATE:
v1.0 must not be declared ready until bilingual and RTL/LTR checks pass.

SCOPE BOUNDARY:
No unrelated features or dependencies are added by this change. Bilingual
support does not introduce authentication, accounts, cloud sync, or a
complex backend. A language framework, routing scheme, or persistence
mechanism may be chosen only when the implementing phase inspects the
existing architecture and proves the choice is necessary.

PRESERVED:
- Exactly 12 product stages and 9 development phases are unchanged.
- `/map` remains the canonical roadmap route; `/stages/[id]` remains the
  canonical Stage Detail route.
- `STAGES` remains the authority for stage identity and order.
- Content ≠ UI ≠ State is preserved.
- Phase completion status is unchanged; no unfinished work is claimed
  complete.
```

---

# 39. Stop Rules

Stop and report instead of improvising if:

- scope conflicts with this document
- a major architecture decision is missing
- credentials or secrets are required
- an external service must be selected
- a destructive operation is required
- a serious regression appears
- a dependency introduces unexpected complexity
- requirements contradict this document
- the task cannot be validated reliably
- the next step requires human product judgment

When blocked, state:

```text
BLOCKER:
WHY BLOCKED:
REQUIRED DECISION / ACTION:
STATUS:
```

Current blockers:

```text
NONE
```

---

# 40. Decisions Log

Format:

```text
DATE:
DECISION:
REASON:
IMPACT:
```

Current decisions:

```text
2026-10-02

DECISION:
AGENTS.md is part of source-controlled project state.

REASON:
Prevent scope drift and preserve reliable handoff.

IMPACT:
Progress-changing code work updates AGENTS.md.
```

```text
2026-10-02

DECISION:
Exactly 9 execution phases.

REASON:
Keep project finishable and prevent endless development.

IMPACT:
Phase completion requires gate + audit.
```

```text
2026-10-02

DECISION:
audits/ stores historical phase memory.

REASON:
Future agents need recoverable context without reconstructing history.

IMPACT:
Every completed phase requires a Markdown audit.
```

```text
2026-10-02

DECISION:
Graphify is the repository knowledge-graph/context layer.

REASON:
Reduce unnecessary repository exploration and context usage.

IMPACT:
Prefer scoped Graphify queries and synchronize after meaningful code changes.
```

```text
2026-10-02

DECISION:
Next.js 15.5 App Router + React 19 + Tailwind v4 (CSS-first @theme tokens) + ESLint 9 flat config.

REASON:
Match the v1.0 technology contract (Next.js, React, TypeScript, Tailwind CSS)
with current stable releases. Tailwind v4 @theme exposes design tokens
directly to utilities (bg-surface, text-indigo, rounded-card, shadow-glow),
which keeps the dark visual system in one source of truth. `next lint` is
deprecated in Next 15.5, so ESLint runs directly (`eslint src`).

IMPACT:
Phase 1 design tokens live in src/app/globals.css. Later phases add shadcn/ui,
Motion, Lucide, Zustand, and Zod on top of this baseline.
```

```text
2026-10-02

DECISION:
No network-dependent dependencies in v1.0 (no next/font, no Google Fonts).

REASON:
The map must build and run fully offline/local.

IMPACT:
Typography uses a system font stack declared as --font-sans / --font-mono tokens.
```

```text
2026-10-02

DECISION:
Stage content is a typed content module (`src/content/stages/index.ts`), not inline page markup, and stage cards link to `/stages/<id>`.

REASON:
Preserve the Content ≠ UI ≠ State architecture (AGENTS.md section 7) so PHASE 3 stage-detail pages and PHASE 4 search can consume the same data without duplicating it.

IMPACT:
The 12 stages are defined once as a `readonly Stage[]` and rendered data-driven everywhere. Adding a field (e.g. checklist items) only touches the content module and the consuming components.
```

```text
2026-10-04

DECISION:
Stage topics are a typed `topics: string[]` field on the existing `Stage` contract in `src/content/stages/index.ts`, rendered by a stateless `TopicsSection` presentational component.

REASON:
Keep the smallest reasonable content addition and preserve Content ≠ UI ≠ State. A plain string array matches the established `StageFlow` pattern (concise parallel arrays), needs no new schema/module, and lets PHASE 4 search index the same data without duplication.

IMPACT:
Topics live with the stage content, are strongly typed (the compiler fails if a stage record omits them), and the UI component stays presentational. Later sections (tools, checklist) add their own fields rather than overloading `topics`.
```

```text
2026-10-04

DECISION:
Stage tools are a typed `tools: string[]` field on the existing `Stage` contract in `src/content/stages/index.ts`, rendered by a stateless `ToolsSection` presentational component.

REASON:
Keep the smallest reasonable content addition and preserve Content ≠ UI ≠ State. A plain string array of recognizable technology names matches the established `topics`/`StageFlow` pattern (concise parallel arrays), needs no new schema/module, and lets PHASE 4 search and the PHASE 6 technology cards index the same data without duplication. Descriptions were omitted because the tool names are self-describing at this scope and would only add maintenance risk (stale version/vendor text).

IMPACT:
Tools live with the stage content, are strongly typed (the compiler fails if a stage record omits them), and the UI component stays presentational. Tools are kept semantically distinct from `topics`: `topics` = concepts and areas to understand, `tools` = concrete technologies used to implement them. The same tool may legitimately appear on more than one stage because a technology can serve multiple stages (e.g. PostgreSQL at both backend and database).
```

```text
2026-10-04

DECISION:
Next-stage navigation is resolved by a `getNextStage(stage)` query helper next to `getStageById()` in `src/content/stages/index.ts`, and rendered by a presentational `NextStepNavigation` component that receives the resolved `Stage | null` through props.

REASON:
Preserve Content ≠ UI ≠ State and keep the canonical `STAGES` collection as the single source of truth. Matching by `number + 1` derives order from the invariant roadmap rather than array index, so the UI never holds a second stage list or routing table.

IMPACT:
The component never duplicates stage names, numbers, slugs, or categories. The final stage resolves to `null`, which renders an end-of-roadmap completion state linking back to `/map` instead of inventing a Stage 13. Stage detail pages are still pure presentational composition; adding `getNextStage` did not change routing or the 12-stage structure.
```

```text
2026-10-04

DECISION:
`Connect all 12 stages` is satisfied by the existing architecture and was closed by verification, not by new code.

REASON:
Inspection established that the complete contract already existed and was correct: `generateStaticParams()` emits exactly the 12 canonical `/stages/<id>` routes, `getStageById()` identifies the stage from the route, `getNextStage()` derives order from `number + 1` (not array index or a routing table), `NextStepNavigation` links Stages 1→12 in chain with Stage 12 rendering the `Roadmap complete` state to `/map` (no Stage 13), `Roadmap`/`StageCard` link all 12 stages into `/map`, and `BackNavigation` returns to `/map`. Every link in the chain is derived from the canonical `STAGES` collection, so there was no missing connection to implement and no second navigation model to add. Inventing a new navigation component or route would have duplicated correct functionality and expanded scope.

IMPACT:
No files changed for this task. Verified by typecheck, lint, production build (17/17 static pages, all 12 stage routes prerendered), and per-route runtime checks over the full chain. Follows the rule that a task is done only when the intended behavior works and validation passes — a task requiring no code is closed by evidence, not by a diff.
```

```text
2026-10-05

DECISION:
PHASE 3 (Stage Detail + Mini Infographic) is COMPLETE at the canonical `/stages/[id]` route, with stage content single-sourced from the `STAGES` module and `getNextStage()` deriving order from `number + 1`.

REASON:
Close the phase only after its gate passed with evidence. Every stage opens, shows structured content (header, overview, Input → Process → Output, Mini Infographic, topics, tools), and supports navigation (breadcrumb and back navigation to `/map`, next-stage chain 1→12, Stage 12 rendering the roadmap-complete state with no Stage 13). Validation: typecheck PASS, lint PASS, production build PASS (17/17 static pages, all 12 stage routes prerendered), and a live runtime chain check over all 12 routes plus `/map` and the not-found path.

IMPACT:
`AGENTS.md` advances to PHASE 4; PHASE 3 is marked COMPLETE in both the phase list and the Final v1.0 Checklist (Stage Detail, Mini Infographic, Breadcrumb checked). No source files changed for the audit task; the audit is the historical record at `audits/phase-03-stage-detail-mini-infographic.md`. Known carry-overs recorded for future agents: no Git working tree, and cosmetic Graphify skill/package version skew (neither is a project defect).
```

```text
2026-10-09

DECISION:
Per-stage detail content files (`src/content/stages/<id>.ts`) join the canonical `STAGES` collection by id only, through a typed `STAGE_DETAILS: Record<StageId, StageDetailContent>` map and a `getStageDetail()` query helper in `src/content/stages/index.ts`. The detail schema is exactly `{ stageId, outcomes, checkpoints, commonMistakes }`, authored via a `defineStageDetail()` assertion helper in `src/content/stages/details.ts`.

REASON:
Satisfies the PHASE 4 `Create content files` task and AGENTS.md section 7 (per-stage content files) while preserving the Phase 3 invariant that `STAGES` is the single source of stage identity, number, name, and order. Keying detail files by `stageId` (not by number, name, or array position) means an entry cannot silently attach to the wrong stage, and a missing or duplicate entry fails to compile against `Record<StageId, ...>` instead of silently producing `undefined`. `StageId` is derived from `STAGES` itself (`(typeof STAGES)[number]["id"]`), so the key list cannot drift from the 12-stage invariant. The detail schema was held to the one shape all 12 stages can share; stage-specific extras (e.g. a database `migrations` array) were considered and dropped as competing structures — extras belong to later Phase 4 tasks under their own schema. `defineStageDetail` types its parameter rather than the exported constant, so the compile-time check runs at each authorship site and the returned value stays inferred for later generic consumers (search index).

IMPACT:
Adds 12 detail files (one per stage) plus `details.ts` (schema + helper); `index.ts` gains `StageId`, `STAGE_DETAILS`, and `getStageDetail()`. No component, page, store, or dependency changed — Stage Detail rendering, `/map`, and bundle size (106 kB First Load JS) are byte-for-byte unchanged, verified against the live production server. `src/types/index.ts` and `src/lib/index.ts` remain placeholders: content types and schemas are explicitly later Phase 4 tasks, and no Zod schema was introduced here. No UI consumes the new content yet; search indexing and rendering are later Phase 4 tasks.
```

```text
2026-10-09

DECISION:
CR-001 is APPROVED. v1.0 is bilingual: user-selectable Persian and English, with English LTR (default/base) and Persian RTL. Language selection applies consistently across the application, and v1.0 is not declared ready until bilingual and RTL/LTR checks pass.

REASON:
The user explicitly approved bilingual support as a v1.0 product requirement. Recording it through the Change Request Protocol (AGENTS.md section 37) keeps the contract authoritative: the requirement is integrated into scope, the phase gates, the quality gates, and the release gate, instead of living as an untracked expectation.

IMPACT:
No product stages are added and the nine-phase model is unchanged. Localization readiness is folded into existing phases: PHASE 4 keeps content localization-ready, PHASE 5 pairs language selection with mode switching and local persistence, PHASE 7 covers both directions in layout/typography/navigation/icons, and PHASE 8/PHASE 9 gate the release on bilingual / RTL-LTR checks passing in both languages. v1.0 scope gains "Bilingual UI (Persian/English, RTL/LTR)" under Product and "Bilingual / RTL-LTR layout and typography" under Engineering. No dependency, routing scheme, or translation work is introduced now; nothing is implemented, and the current PHASE 4 task is untouched.
```

```text
2026-10-09

DECISION:
Content type contracts live in `src/types/index.ts`: `StageDetailContent` (the stored shape, join key `string`), `StageDetailInput` (the authoring shape, join key narrowed to `StageId`), and `StageId` derived as `(typeof STAGES)[number]["id"]`. `src/content/stages/details.ts` now re-exports those types instead of declaring them, so content, UI, and state all depend on one shape. `STAGES` is declared `as const satisfies readonly Stage[]` rather than `: readonly Stage[]`.

REASON:
Satisfies the PHASE 4 `Define content types` task while keeping `STAGES` the single source of stage identity and order — the types module derives the join-key union from the roadmap and never re-declares a stage list, id, name, or number. The `as const satisfies` change is the load-bearing part: with the old annotation the literal `id` of each entry widened to `string`, so `StageId` was `string`, `STAGE_DETAILS: Record<StageId, ...>` enforced no keys at all, and `defineStageDetail` silently accepted a detail file keyed to any string. `as const` preserves the literal union so the 12 canonical ids are a real compile-time key space; `satisfies` keeps every entry validated against the `Stage` interface so the narrowing cannot silently drop validation. Verified by a probe that assigned `"nope"` to `StageDetailInput["stageId"]` before the change (accepted) and after (rejected against the 12-id union).

IMPACT:
`src/types/index.ts` is no longer a placeholder; `src/content/stages/details.ts` and `src/content/stages/index.ts` changed only at the type layer. No component, page, store, dependency, or route changed, and the public content API (`STAGES`, `getStageById`, `getNextStage`, `getStageDetail`, `STAGE_DETAILS`, `defineStageDetail`) is unchanged in shape. Rendering and bundle size (106 kB First Load JS) are byte-for-byte identical to the Phase 3 baseline, verified against the live production server. Validation: typecheck PASS, lint PASS, build PASS (17/17 static pages, all 12 stage routes prerendered), `/` and `/map` HTTP 200, 12/12 stage routes HTTP 200 with the correct single `h1` and 5/5 content sections, 11/11 next-stage links, Stage 12 "Journey complete" state present, unknown id HTTP 404, and no type-system identifiers leaking into visible text.
```

```text
2026-10-09

DECISION:
The stage schema lives in `src/lib/index.ts` as a Zod object: `stageIdSchema` (a `z.enum` whose entries are derived from the canonical `STAGES` ids) and `stageDetailContentSchema` (`{ stageId, outcomes, checkpoints, commonMistakes }`), plus `isValidStageDetailContent()` and `parseStageDetailContent()` helpers built on `safeParse` so malformed input never throws. The schema mirrors the `StageDetailContent` contract in `src/types/index.ts` by hand rather than being generated from it, keeping both readable.

REASON:
Satisfies the PHASE 4 `Define stage schema` task and the AGENTS.md section 6 technology contract, which already lists Zod — no new dependency was introduced (zod ^4.1.9 was declared and locked at 4.6.5 before this task). The valid stage-id set is computed from `STAGES` at module load and folded into the `z.enum` entries object Zod 4 requires, so the schema cannot accept an id the roadmap does not declare and there is no second id list to keep in sync. Schemas live in `src/lib`, separate from content, UI, and state (Content ≠ UI ≠ State). No compile-time schema/contract cross-check was added: a variance probe proved such an assertion cannot fail (a schema with fewer fields still satisfies the broader contract), so it would have been dead code that only tripped the unused-var lint rule.

IMPACT:
Only `src/lib/index.ts` changed (placeholder → schema). No component, page, store, route, dependency, or content file changed, and nothing imports the module yet — search indexing and content validation are later PHASE 4 tasks — so bundle size (106 kB First Load JS) is unchanged. One environment repair was required and authorized: the on-disk zod install was missing its entire `v4/` dist directory (`node_modules/zod/v4/classic/external.*` absent, so `require('zod')` threw MODULE_NOT_FOUND) even though the published 4.6.5 tarball is intact. `npm install` did not repair it because the lockfile carries no integrity hash for zod, so the package was re-extracted from the registry tarball into `node_modules/zod`; declared (^4.1.9) and locked (4.6.5) versions are unchanged and `package.json` is byte-identical. Validation: typecheck PASS, lint PASS (no warnings), build PASS (17/17 static pages, all 12 stage routes prerendered), and a 53-assertion runtime probe — all 12 canonical ids accepted and parsed, unknown id rejected (isValid false, parse null), missing fields rejected, wrong types rejected, every malformed input returning a boolean without throwing, and unknown keys stripped rather than carried through.
```

```text
2026-10-09

DECISION:
The tool, topic, and decision schemas join `stageIdSchema` in `src/lib/index.ts`, each with a matching content-kind contract in `src/types/index.ts`: `Tool`/`ToolInput`, `Topic`/`TopicInput`, and `Decision`/`DecisionInput` (stored shape keys join on `string`; authoring shapes narrow the key to `StageId`, exactly mirroring the `StageDetailContent`/`StageDetailInput` split). Schemas: `toolSchema` (`{ id, name, stageId }`), `topicSchema` (`{ id, name, stageId }`), and `decisionSchema` (`{ id, title, stageId, options[], tradeOff, recommendation }`), each built on `safeParse` through `isValidTool()`, `isValidTopic()`, and `isValidDecision()`. A shared `nameSchema = z.string().min(1).max(120)` bounds names and ids so a label cannot be empty or unbounded.

REASON:
Satisfies the PHASE 4 `Define tool schema`, `Define topic schema`, and `Define decision schema` tasks as one coherent batch — they are the same problem (validate a content kind keyed to a stage) and share one join mechanism, so splitting them across sessions would duplicate the same derivation work three times. All reuse the existing `stageIdSchema`, whose entries are derived from canonical `STAGES`, so every record is tied to a real stage and no duplicate stage list exists anywhere. The three kinds were held to the smallest shape their consumers need: tools and topics are currently authored as plain strings on `STAGES[].tools`/`STAGES[].topics` and the record shape is what the search index and PHASE 6 technology cards require; decisions are a genuinely new content kind backing the PHASE 6 decision flow, with `options.min(1)` because a decision with no options is not a decision and a non-binding `recommendation` because the trade-off, not the default, is the decision. No Zod features beyond object/enum/array/string were introduced.

IMPACT:
`src/lib/index.ts` and `src/types/index.ts` changed only. No component, page, store, route, dependency, or existing content file changed; `STAGES`, `getStageById`, `getNextStage`, `getStageDetail`, `STAGE_DETAILS`, and `defineStageDetail` are untouched, and nothing imports the new schemas yet (search indexing is a later PHASE 4 task), so bundle size (106 kB First Load JS) is unchanged and no client boundary was added. `package.json` and `package-lock.json` are byte-identical; no dependency was added or changed. Validation: typecheck PASS, lint PASS (no warnings), build PASS (17/17 static pages, all 12 stage routes prerendered), and a 28-assertion runtime probe covering all three schemas — valid records accepted; unknown stage ids rejected; empty names, missing stageId, wrong types, empty decision options, and missing tradeOff/recommendation all rejected; every malformed input (null, undefined, number, string, array, object) returning a boolean without throwing; and a regression check that `parseStageDetailContent` and `stageIdSchema` still behave as before. `src/content/{tools,topics,decisions}/` remain empty directories: no content data was authored for these kinds in this batch because that belongs to the content tasks, not the schema tasks.
```

```text
2026-10-11

DECISION:
The tool, topic, and decision record collections are authored as one typed file per stage under `src/content/{tools,topics,decisions}/<id>.ts`, joined into `TOOLS`/`TOPICS`/`DECISIONS` `Record<StageId, ...Input[]>` maps by their parent `index.ts`, with flat `ALL_TOOLS`/`ALL_TOPICS`/`ALL_DECISIONS` exports for the search index. Tool and topic ids are derived (`defineTools`/`defineTopics` kebab-case the canonical name and scope it by stage), so there is no hand-authored id list to maintain; decision ids are authored (2 per stage, 24 total) because they name a choice rather than a label. The parent indexes also export `validateAllTools()`/`validateAllTopics()`, which assert each stage's authored list equals `STAGES[].tools`/`STAGES[].topics` element-for-element, so the richer records cannot drift from the roadmap.

REASON:
Satisfies the PHASE 4 `Separate content from UI` task and completes the content-data side of `Create content files`. The per-stage layout matches AGENTS.md section 7, and keying every record by `stageId` keeps `STAGES` the single source of stage identity (invariants 1 and 7) — no content file re-declares a stage number, name, or order. The element-for-element equality check is what makes the derived record shape safe: tools and topics already exist as plain strings on `STAGES`, so the records are a join of that canonical list to richer ids, and the validation guarantees the join is exact rather than approximate. Decisions were capped at two per stage because a decision record carries options, a trade-off, and a recommendation — more would be unreviewed volume, and the acceptance criteria never required a fixed count.

IMPACT:
Adds 12 tool files, 12 topic files, and 12 decision files, all consumed only through the three index modules. Actual counts: 60 tools, 60 topics, 24 decisions. No component, page, store, dependency, or route changed, and no UI consumes the collections yet (the search index does), so the bundle is unchanged. A static-cycle issue in the original layout was found and fixed in a separate decision below.
```

```text
2026-10-11

DECISION:
The search index lives in `src/lib/search-index.ts` as a pure, deterministic, UI-free derived collection: `SEARCH_INDEX` (168 documents) built once from `STAGES`, `STAGE_DETAILS`, `ALL_TOOLS`, `ALL_TOPICS`, and `ALL_DECISIONS`, in a fixed order (stage, stage-detail, tool, topic, decision; canonical stage order within each), with ids of the form `search:<kind>:<record-id>` and a `stageId` join key on every document. Public API: `SEARCH_INDEX`, `SEARCH_INDEX_SIZE`, `SEARCH_KINDS`, `scoreDocument()`, `searchContent(query, limit)`, `getSearchDocumentHref()`. Ranking: exact title > title substring > subtitle > keyword, with stage documents nudged above other kinds on a tie and ties broken by stage number then index position, so identical input always yields identical output order.

REASON:
Satisfies the PHASE 4 `Build search index` task. The index is derived rather than authored: it imports the canonical collections and emits documents from them, so it cannot drift from the content it searches and there is no second copy of any string. Stage documents carry name, tagline, description, topics, and tools — the fields the PHASE 3 audit handoff named as the search surface. Stage-detail documents index outcomes, checkpoints, and common mistakes so the deeper per-stage content is discoverable too. The module imports no React and no store, so the index is usable from a server component, a client component, or a script, and the search UI task can consume `searchContent()` without touching index internals.

IMPACT:
One new file. No dependency, route, component, store, or existing content file changed, and the public content API (`STAGES`, `getStageById`, `getNextStage`, `getStageDetail`, `STAGE_DETAILS`, `TOOLS`/`TOPICS`/`DECISIONS` and their `ALL_*` flat lists) is unchanged. Bundle size is unchanged (106 kB First Load JS) because nothing on a page imports the module yet. Integrity verified at runtime: 168 documents, 0 duplicate ids, 0 dangling stage references, all ids matching the deterministic scheme, kind counts 12/12/60/60/24, empty and whitespace-only queries returning `[]`, case-insensitive matching, and byte-identical result order across repeated calls. `getSearchDocumentHref()` maps a stage document to `/map` and every other kind to `/stages/<stageId>`, matching the canonical routes.
```

```text
2026-10-11

DECISION:
Content validation lives in `src/lib/content-validation.ts` as `validateContent()`, returning a `ContentValidationResult` with one entry per named check (`stage-details`, `tools-vs-roadmap`, `topics-vs-roadmap`, `tools`, `topics`, `decisions`, `search-index`) that carries `passed`, `description`, and a deterministic `issues` list, plus `passed`/`checkCount`/`passedCount`. The module is pure: it imports only schemas, content collections, and the search index, and calls no `console` or `throw` — the caller decides what a failure means.

REASON:
Satisfies the PHASE 4 `Validate content` task. Schemas answer "is this one record well-formed?"; this module answers "is the whole content layer consistent?" — every stage covered exactly once, every join key resolvable, no duplicate ids anywhere, and the derived search index in agreement with the collections it was built from. Check results are collected rather than thrown so a single problem does not hide the rest, and the probe below can assert each check independently. The search-index check (unique ids, deterministic id scheme, resolvable stage references) is included here because the index is a derived artifact that can be validated exactly like authored content.

IMPACT:
One new file; no dependency, route, component, store, or existing content file changed. Probe evidence (`scripts/validate-content.mts`, temporary, removed after verification): 7/7 checks passed with actual counts — 12 stage details, 60 tools, 60 topics, 24 decisions across 12 stages, 168 search documents; malformed and unknown-stage input rejected safely by all four schemas; and a regression pass over `getStageById`, `getStageDetail`, `getNextStage`, and `stageIdSchema`. AGENTS.md task state is updated only for the checks that actually passed.
```

```text
2026-10-11

DECISION:
The per-stage content files import their factories from leaf modules — `src/content/tools/factory.ts`, `src/content/topics/factory.ts`, `src/content/decisions/factory.ts` — and the parent `index.ts` files re-export the same names, so `defineTools`, `defineTopics`, and `defineDecision` remain public from `@/content/tools`, `@/content/topics`, and `@/content/decisions` exactly as before. Each factory imports types only and cannot participate in a content cycle.

REASON:
The pre-existing layout had every per-stage file importing `defineTools`/`defineTopics`/`defineDecision` from its own `index.ts`, while that same `index.ts` imports all 12 per-stage files back. A static cycle walk found this pattern on all 36 per-stage files (99 cycles total across the walked subgraph). The cycle was runtime-safe in practice because the factories are hoisted function declarations, and the collections did resolve correctly — this was verified by probe before any change was made, and the counts (60/60/24) and 7/7 validation result were byte-identical after the refactor. But the task explicitly required investigating circular module structure and breaking it when the dependency direction could be inverted without changing public exports, and extracting a types-only leaf does exactly that: it removes the back-edge without touching any authored record, any id, or any public name.

IMPACT:
Adds three factory files; the three `index.ts` files keep the same public exports (`defineTools`/`slugify`, `defineTopics`/`slugify`, `defineDecision`) now sourced from the leaf; and all 36 per-stage files repointed their import from `.../index` to `.../factory`. No record, id, schema, type, component, page, store, route, or dependency changed. `STAGES` remains the single source of stage identity. Verification after the change: static cycle count dropped from 99 to 27, and all 27 remaining cycles are the pre-existing `src/types/index.ts` ↔ `src/content/stages/index.ts` ↔ `src/content/stages/details.ts` ring authored by earlier completed tasks (involving `StageId` derivation and `defineStageDetail`), which was deliberately left untouched as out-of-scope for this batch. Record counts unchanged: 60 tools, 60 topics, 24 decisions, 168 search documents. Typecheck PASS, lint PASS, build PASS (17/17 static pages, 106 kB First Load JS), and content/search probe results identical to the pre-refactor run.
```

---

# 41. Final v1.0 Checklist

## Product

- [x] Landing Dashboard
- [x] Interactive 12-stage roadmap
- [x] Stage Detail
- [x] Mini Infographic
- [x] Breadcrumb
- [ ] Search
- [ ] Progress
- [ ] Checklist
- [ ] Learning Mode
- [ ] Product Mode
- [ ] Technology Cards
- [ ] Architecture Visualizer
- [ ] Decision Flow

## Engineering

- [ ] Responsive
- [ ] Accessible basics
- [ ] Bilingual / RTL-LTR layout and typography
- [ ] SEO basics
- [ ] Clean architecture
- [x] Content separated from UI
- [ ] Local persistence
- [ ] Production build
- [ ] Audit report exists for every completed phase
- [ ] Graphify synchronized with final code state

## Release

- [ ] Deployment configured
- [ ] Production deployment verified
- [ ] Critical flows smoke-tested
- [ ] No known release-blocking issue
- [ ] v1.0 scope frozen
- [ ] Final Phase 9 audit exists

---

# 42. Final Agent Instruction

Before doing any work:

```text
READ AGENTS.md
↓
CHECK TOKEN / CONTEXT NEEDS
↓
CHECK CURRENT PROJECT STATE
↓
CHECK RELEVANT AUDIT
↓
USE GRAPHIFY FOR REPOSITORY RELATIONSHIPS WHEN AVAILABLE
↓
IDENTIFY POSSIBLE SUB-AGENT WORK
↓
INSPECT ONLY RELEVANT REPOSITORY AREAS
↓
SELECT FIRST RELEVANT UNCHECKED TASK
↓
IMPLEMENT ONLY THAT TASK
↓
VALIDATE
↓
UPDATE AGENTS.md
↓
RUN graphify update . WHEN CODE CHANGED
↓
IF PHASE COMPLETE → CREATE / VERIFY PHASE AUDIT
↓
VERIFY CODE ↔ PROJECT STATE CONSISTENCY
↓
REVIEW DIFF
↓
HAND OFF CLEANLY
```

> **Most important:** Do not let code, `AGENTS.md`, and the relevant audit describe different versions of the project.

> **Second:** Do not expand the project merely because an interesting idea appears.

> **Third:** Use Graphify to reduce repository exploration and context usage, but never allow Graphify to override `AGENTS.md`.

The goal is not to build everything that could be built.

The goal is to finish the defined v1.0 product cleanly, predictably, and with enough recorded context that the next agent can continue without reconstructing the entire project history.
