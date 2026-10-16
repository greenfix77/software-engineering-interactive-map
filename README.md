# Software Engineering Interactive Map 🗺️

An interactive, educational map of the **complete software-engineering product journey** — from idea to release. This is not a static infographic: it is an interactive learning and execution map.

**Primary flow:** `MAP → STAGE → DEEP DIVE`

## ✨ Features

- **Interactive roadmap map** — explore the full journey of building and shipping a full-stack product
- **Stage deep dives** — mini-infographics, checklists, and practical guidance per stage
- **Topic / Tool / Decision explorers** — curated reference content with structured details
- **Global search** — quickly jump to any stage, topic, tool, or decision
- **Progress tracking** — keep track of your learning journey
- **Architecture visualizer** — see how the pieces of a real product fit together
- **i18n-ready UI** with light/dark theme support

## 🛠 Tech Stack

| Layer     | Technology                                  |
| --------- | ------------------------------------------- |
| Framework | Next.js 16 (App Router) · React 19 · TypeScript 5 |
| Styling   | Tailwind CSS 4 · shadcn/ui · Lucide icons   |
| Database  | Prisma ORM · SQLite                         |
| State     | Zustand · TanStack Query                    |

## 🚀 Getting Started

```bash
# 1. Install dependencies
bun install   # or: npm install

# 2. Configure environment
cp .env.example .env

# 3. Create the SQLite database
bun run db:push

# 4. Start the dev server
bun run dev   # → http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/            # Next.js App Router entry
├── components/     # UI components (map, stage detail, pages, search, layout)
├── content/        # Curated data: topics, stages, tools, decisions
├── lib/            # Helpers (search, progress, hash router, i18n, db)
├── store/          # Zustand client state
└── types/          # Shared TypeScript types
prisma/schema.prisma  # Database schema
upload/AGENTS.md      # Product spec & roadmap
```

## 📄 License

All rights reserved © 2025 — built for educational purposes.
