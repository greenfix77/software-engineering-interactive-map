<div align="center">

# 🗺️ Software Engineering Interactive Map
### نقشهٔ تعاملی مهندسی نرم‌افزار

**English** · [فارسی](#-فارسی-)

An interactive, educational map of the **complete software-engineering product journey** — from idea to release.
نقشه‌ای تعاملی و آموزشی از **سفر کامل ساخت و انتشار یک محصول نرم‌افزاری** — از ایده تا انتشار.

</div>

---

## 🇬🇧 English

This is not a static infographic: it is an interactive **learning and execution map**.

**Primary flow:** `MAP → STAGE → DEEP DIVE`

### ✨ Features

- **Interactive roadmap map** — explore the full journey of building and shipping a full-stack product
- **Stage deep dives** — mini-infographics, checklists, and practical guidance per stage
- **Topic / Tool / Decision explorers** — curated reference content with structured details
- **Global search** — quickly jump to any stage, topic, tool, or decision
- **Progress tracking** — keep track of your learning journey
- **Architecture visualizer** — see how the pieces of a real product fit together
- **Bilingual UI (English / فارسی)** with light/dark theme support

### 🛠 Tech Stack

| Layer     | Technology                                          |
| --------- | --------------------------------------------------- |
| Framework | Next.js 16 (App Router) · React 19 · TypeScript 5  |
| Styling   | Tailwind CSS 4 · shadcn/ui · Lucide icons           |
| Database  | Prisma ORM · SQLite                                 |
| State     | Zustand · TanStack Query                            |

### 🚀 Getting Started

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

### 📁 Project Structure

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

---

## 🇮🇷 فارسی

این پروژه یک اینفوگرافیک ثابت نیست؛ یک **نقشهٔ تعاملی برای یادگیری و اجرا**ست.

**مسیر اصلی:** `نقشه ← مرحله ← تحلیل عمیق`

### ✨ امکانات

- **نقشهٔ راه‌تعاملی** — کاوش سفر کامل ساخت و انتشار یک محصول فول‌استک
- **تحلیل عمیق هر مرحله** — اینفوگرافیک‌های کوچک، چک‌لیست‌ها و راهنمایی عملی برای هر مرحله
- **کاوشگر موضوع‌ها / ابزارها / تصمیم‌ها** — محتوای مرجع منتخب با جزئیات ساخت‌یافته
- **جست‌وجوی سراسری** — پرش سریع به هر مرحله، موضوع، ابزار یا تصمیم
- **پیگیری پیشرفت** — ثبت و دنبال‌کردن مسیر یادگیری شما
- **ترسیم‌گر معماری** — دیدن اینکه قطعات یک محصول واقعی چگونه کنار هم می‌نشینند
- **رابط کاربری دو زبانه (فارسی / English)** با پشتیبانی از حالت روشن و تاریک

### 🛠 پشتهٔ فناوری

| لایه        | فناوری                                              |
| ----------- | --------------------------------------------------- |
| فریم‌ورک    | Next.js 16 (App Router) · React 19 · TypeScript 5  |
| استایل      | Tailwind CSS 4 · shadcn/ui · آیکون‌های Lucide       |
| پایگاه‌داده | Prisma ORM · SQLite                                 |
| مدیریت حالت | Zustand · TanStack Query                            |

### 🚀 شروع سریع

```bash
# ۱. نصب وابستگی‌ها
bun install   # یا: npm install

# ۲. تنظیم محیط
cp .env.example .env

# ۳. ساخت پایگاه‌دادهٔ SQLite
bun run db:push

# ۴. اجرای سرور توسعه
bun run dev   # → http://localhost:3000
```

### 📁 ساختار پروژه

```
src/
├── app/            # نقطهٔ ورود App Router در Next.js
├── components/     # کامپوننت‌های رابط کاربری (نقشه، جزئیات مرحله، صفحات، جست‌وجو)
├── content/        # داده‌های منتخب: موضوع‌ها، مرحله‌ها، ابزارها، تصمیم‌ها
├── lib/            # ابزارهای کمکی (جست‌وجو، پیشرفت، hash router، i18n، دیتابیس)
├── store/          # وضعیت سمت کلاینت با Zustand
└── types/          # تایپ‌های مشترک TypeScript
prisma/schema.prisma  # اسکیمای پایگاه‌داده
upload/AGENTS.md      # سند محصول و نقشهٔ راه
```

---

<div align="center">

📄 License — all rights reserved © 2025 · built for educational purposes.
مجوز — تمامی حقوق محفوظ است © ۲۰۲۵ · ساخته‌شده برای اهداف آموزشی.

</div>
