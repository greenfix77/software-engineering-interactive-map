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

### ✅ Prerequisites

| Tool                          | Minimum version |
| ----------------------------- | --------------- |
| [Bun](https://bun.sh) *or* [Node.js](https://nodejs.org) | Bun 1.1 / Node 18 |
| Git                           | any recent      |

### 🐧 Installation & Run — Linux / macOS

```bash
# 0. Install prerequisites (Ubuntu/Debian)
sudo apt update && sudo apt install -y git curl unzip

# Option A — Bun (recommended, fast)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Option B — Node.js via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc && nvm install --lts
```

```bash
# 1. Clone the project
git clone https://github.com/greenfix77/software-engineering-interactive-map.git
cd software-engineering-interactive-map

# 2. Install dependencies
bun install        # or: npm install

# 3. Configure environment
cp .env.example .env

# 4. Create the SQLite database
bun run db:push    # or: npm run db:push

# 5. Start the dev server
bun run dev        # or: npm run dev  →  http://localhost:3000
```

**Production (optional):**

```bash
bun run build
bun run start      # serves the standalone build
```

### 🪟 Installation & Run — Windows

Run **PowerShell** as a normal user:

```powershell
# Option A — Bun (recommended)
powershell -c "irm bun.sh/install.ps1 | iex"

# Option B — Node.js: download & run the LTS installer from https://nodejs.org
```

```powershell
# 1. Clone the project
git clone https://github.com/greenfix77/software-engineering-interactive-map.git
cd software-engineering-interactive-map

# 2. Install dependencies
bun install        # or: npm install

# 3. Configure environment  (Windows equivalent of `cp`)
Copy-Item .env.example .env

# 4. Create the SQLite database
bun run db:push    # or: npm run db:push

# 5. Start the dev server
bun run dev        # or: npm run dev  →  http://localhost:3000
```

> **⚠️ Windows notes**
> - The bundled `dev` / `build` scripts use Unix tools (`tee`, `cp`). If you get
>   `'tee' is not recognized`, start the dev server directly instead:
>   ```powershell
>   npx next dev -p 3000
>   ```
> - Production on Windows (manual equivalent of `bun run build`):
>   ```powershell
>   npx next build
>   Copy-Item -Recurse .next/static .next/standalone/.next/
>   Copy-Item -Recurse public .next/standalone/
>   $env:NODE_ENV = "production"; node .next/standalone/server.js
>   ```
> - **WSL2 users:** simply follow the 🐧 Linux instructions inside WSL for a 1:1 experience.

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

### ✅ پیش‌نیازها

| ابزار                                              | حداقل نسخه        |
| -------------------------------------------------- | ----------------- |
| [Bun](https://bun.sh) *یا* [Node.js](https://nodejs.org) | Bun 1.1 / Node 18 |
| Git                                                | هر نسخهٔ جدید     |

### 🐧 نصب و اجرا — لینوکس / مک

```bash
# ۰. نصب پیش‌نیازها (اوبونتو/دبیان)
sudo apt update && sudo apt install -y git curl unzip

# گزینهٔ الف — Bun (پیشنهادی و سریع)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# گزینهٔ ب — Node.js از طریق nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc && nvm install --lts
```

```bash
# ۱. کلون کردن پروژه
git clone https://github.com/greenfix77/software-engineering-interactive-map.git
cd software-engineering-interactive-map

# ۲. نصب وابستگی‌ها
bun install        # یا: npm install

# ۳. تنظیم محیط
cp .env.example .env

# ۴. ساخت پایگاه‌دادهٔ SQLite
bun run db:push    # یا: npm run db:push

# ۵. اجرای سرور توسعه
bun run dev        # یا: npm run dev  →  http://localhost:3000
```

**اجرای پروداکشن (اختیاری):**

```bash
bun run build
bun run start      # سرو‌کردن نسخهٔ standalone
```

### 🪟 نصب و اجرا — ویندوز

**PowerShell** را باز کنید:

```powershell
# گزینهٔ الف — Bun (پیشنهادی)
powershell -c "irm bun.sh/install.ps1 | iex"

# گزینهٔ ب — Node.js: نصب‌کنندهٔ LTS را از https://nodejs.org دانلود و اجرا کنید
```

```powershell
# ۱. کلون کردن پروژه
git clone https://github.com/greenfix77/software-engineering-interactive-map.git
cd software-engineering-interactive-map

# ۲. نصب وابستگی‌ها
bun install        # یا: npm install

# ۳. تنظیم محیط  (معادل ویندوزیِ `cp`)
Copy-Item .env.example .env

# ۴. ساخت پایگاه‌دادهٔ SQLite
bun run db:push    # یا: npm run db:push

# ۵. اجرای سرور توسعه
bun run dev        # یا: npm run dev  →  http://localhost:3000
```

> **⚠️ نکات ویندوز**
> - اسکریپت‌های `dev` / `build` موجود در پروژه از ابزارهای یونیکسی (`tee`، `cp`) استفاده می‌کنند. اگر خطای
>   `'tee' is not recognized` گرفتید، سرور توسعه را مستقیم اجرا کنید:
>   ```powershell
>   npx next dev -p 3000
>   ```
> - اجرای پروداکشن در ویندوز (معادل دستیِ `bun run build`):
>   ```powershell
>   npx next build
>   Copy-Item -Recurse .next/static .next/standalone/.next/
>   Copy-Item -Recurse public .next/standalone/
>   $env:NODE_ENV = "production"; node .next/standalone/server.js
>   ```
> - **کاربران WSL2:** کافی است داخل WSL دستورهای 🐧 لینوکس را دنبال کنید تا تجربهٔ یکسان داشته باشید.

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
