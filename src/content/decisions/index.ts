import type { Decision } from "@/types";

/**
 * 24 decisions across 3 categories (architecture 8, technology 8, process 8).
 * Populated by content pipeline.
 */
export const DECISIONS: Decision[] = [
  // ─── Architecture (8) ────────────────────────────────────────────────────
  {
    slug: "monolith-vs-microservices",
    title: { en: "Monolith vs Microservices", fa: "مونولیت در برابر میکروسرویس‌ها" },
    category: "architecture",
    description: {
      en: "How to structure the deployment topology of your backend: one deployable unit or many independent services.",
      fa: "چگونگی ساختاردهی توپولوژی استقرار بک‌اند: یک واحد استقراری یا سرویس‌های مستقل متعدد.",
    },
    stage: "architecture",
    options: [
      {
        name: "Monolith",
        description: {
          en: "Single deployable application containing all business modules.",
          fa: "یک اپلیکیشن تک‌واحدی که همه ماژول‌های کسب‌وکار را در بر می‌گیرد.",
        },
        pros: [
          { en: "Simple deploy and debugging", fa: "استقرار و دیباگ ساده" },
          { en: "No network overhead between modules", fa: "بدون سربار شبکه بین ماژول‌ها" },
        ],
        cons: [
          { en: "Scales only as a whole", fa: "مقیاس‌پذیری فقط به‌صورت یکجا" },
          { en: "Large codebase slows teams down", fa: "کدبیس بزرگ تیم‌ها را کند می‌کند" },
        ],
      },
      {
        name: "Modular Monolith",
        description: {
          en: "Strictly separated modules inside one deployable unit.",
          fa: "ماژول‌های کاملاً جدا و مرزبندی‌شده در یک واحد استقرار.",
        },
        pros: [
          { en: "Clear boundaries with simple deployment", fa: "مرزهای شفاف با استقرار ساده" },
          { en: "Easier later extraction to services", fa: "استخراج سرویس‌ها در آینده آسان‌تر" },
        ],
        cons: [
          { en: "Needs strict module discipline", fa: "نیاز به انضباط ساختاری بالا" },
          { en: "One shared runtime and failure domain", fa: "نقطه شکست مشترک در یک فرآیند" },
        ],
      },
      {
        name: "Microservices",
        description: {
          en: "Independent services owning their own data and deployment.",
          fa: "سرویس‌های مستقل که داده و استقرار خودشان را دارند.",
        },
        pros: [
          { en: "Independent scaling and deployment per service", fa: "مقیاس‌پذیری و استقرار مستقل هر سرویس" },
          { en: "Technology freedom per team", fa: "آزادی انتخاب فناوری برای هر تیم" },
        ],
        cons: [
          { en: "Distributed complexity and operational overhead", fa: "پیچیدگی توزیع‌شده و سربار عملیاتی" },
          { en: "Data consistency becomes hard", fa: "سازگاری داده‌ها دشوار می‌شود" },
        ],
      },
    ],
    recommendation: {
      en: "Start with a modular monolith and extract microservices only when team size, scaling needs, or deployment autonomy genuinely demand it.",
      fa: "با یک مونولیت ماژولار شروع کنید و فقط وقتی اندازه تیم، نیاز به مقیاس یا استقلال استقرار واقعاً اقتضا کند، میکروسرویس استخراج کنید.",
    },
  },
  {
    slug: "sql-vs-nosql-choice",
    title: { en: "SQL vs NoSQL Choice", fa: "انتخاب SQL در برابر NoSQL" },
    category: "architecture",
    description: {
      en: "Choosing the data paradigm — relational, document, or key-value — before locking in a concrete engine.",
      fa: "انتخاب پارادایم داده — رابطه‌ای، سند یا کلید-مقدار — پیش از قطعی‌کردن موتور مشخص.",
    },
    stage: "architecture",
    options: [
      {
        name: "Relational (SQL)",
        description: {
          en: "Structured schema with joins, constraints, and ACID transactions.",
          fa: "اسکیمای ساختاریافته با join، constraint و تراکنش ACID.",
        },
        pros: [
          { en: "Strong consistency and ACID transactions", fa: "سازگاری قوی و تراکنش‌های ACID" },
          { en: "Mature tooling and query power", fa: "ابزارهای بالغ و قدرت کوئری بالا" },
        ],
        cons: [
          { en: "Schema changes require migrations", fa: "تغییر اسکیما نیازمند migration است" },
          { en: "Horizontal scaling is harder", fa: "مقیاس‌پذیری افقی دشوارتر است" },
        ],
      },
      {
        name: "Document (NoSQL)",
        description: {
          en: "Flexible JSON-like documents such as MongoDB.",
          fa: "سندهای JSON مانند با ساختار انعطاف‌پذیر، مثل MongoDB.",
        },
        pros: [
          { en: "Flexible schema fits evolving products", fa: "اسکیمای انعطاف‌پذیر برای محصول در حال تغییر" },
          { en: "Documents map naturally to code objects", fa: "سند به شیء کد طبیعی نگاشت می‌شود" },
        ],
        cons: [
          { en: "Weaker multi-entity transaction support", fa: "پشتیبانی تراکنش چندموجودیتی ضعیف‌تر" },
          { en: "Joins across entities get awkward", fa: "join بین موجودیت‌ها ناهموار می‌شود" },
        ],
      },
      {
        name: "Key-Value (NoSQL)",
        description: {
          en: "Ultra-fast lookups by key such as Redis or DynamoDB.",
          fa: "خواندن فوق‌سریع با کلید، مثل Redis یا DynamoDB.",
        },
        pros: [
          { en: "Extremely fast at massive scale", fa: "سرعت بسیار بالا در مقیاس عظیم" },
          { en: "Trivially sharded data model", fa: "مدل داده به‌سادگی shard می‌شود" },
        ],
        cons: [
          { en: "No rich queries or joins", fa: "بدون کوئری غنی یا join" },
          { en: "Usually a complement, not core store", fa: "بیشتر مکمل است تا مخزن اصلی" },
        ],
      },
    ],
    recommendation: {
      en: "Default to relational SQL; reach for NoSQL only when your access patterns, scale, or data shape genuinely diverge from relational modeling.",
      fa: "پیش‌فرضتان SQL رابطه‌ای باشد؛ NoSQL را فقط وقتی سراغ بگیرید که الگوی دسترسی، مقیاس یا شکل داده واقعاً با مدل‌سازی رابطه‌ای نمی‌سازد.",
    },
  },
  {
    slug: "event-driven-vs-request-response",
    title: { en: "Event-Driven vs Request-Response", fa: "رویدادمحور در برابر درخواست-پاسخ" },
    category: "architecture",
    description: {
      en: "Whether services talk synchronously over request-response or asynchronously through queues and event streams.",
      fa: "اینکه سرویس‌ها به‌صورت هم‌زمان با request-response گفت‌وگو کنند یا ناهم‌زمان از طریق صف‌ها و استریم رویداد.",
    },
    stage: "backend",
    options: [
      {
        name: "Request-Response",
        description: {
          en: "Caller waits synchronously until the service answers.",
          fa: "فراخوان تا رسیدن پاسخ سرویس، هم‌زمان منتظر می‌ماند.",
        },
        pros: [
          { en: "Easy to reason about and debug", fa: "استدلال و دیباگ آسان" },
          { en: "Immediate results for clients", fa: "نتیجه فوری برای کلاینت‌ها" },
        ],
        cons: [
          { en: "Tight coupling, cascading failures", fa: "جفت‌شدگی تنگاتنگ و خرابی آبشاری" },
          { en: "Slow consumers block the flow", fa: "مصرف‌کننده کند جریان را مسدود می‌کند" },
        ],
      },
      {
        name: "Message Queue",
        description: {
          en: "Tasks are dispatched to queues and processed asynchronously.",
          fa: "کارها به صف سپرده می‌شوند و ناهم‌زمان پردازش می‌گیرند.",
        },
        pros: [
          { en: "Absorbs traffic spikes naturally", fa: "جذب طبیعی جهش‌های ترافیک" },
          { en: "Built-in retries and isolation", fa: "retry و ایزوله‌سازی داخلی" },
        ],
        cons: [
          { en: "Eventual consistency complicates logic", fa: "سازگاری نهایی منطق را پیچیده می‌کند" },
          { en: "More infrastructure to operate", fa: "زیرساخت بیشتری برای نگهداری" },
        ],
      },
      {
        name: "Event Streaming",
        description: {
          en: "Durable event log fanned out to many consumers, e.g. Kafka.",
          fa: "گزارش رویداد ماندگار که به مصرف‌کننده‌های متعدد توزیع می‌شود، مثل Kafka.",
        },
        pros: [
          { en: "Replayable history of all events", fa: "تاریخچه رویدادها قابل replay" },
          { en: "Fan-out to many independent consumers", fa: "fan-out به چند مصرف‌کننده مستقل" },
        ],
        cons: [
          { en: "Ordering and idempotency are hard", fa: "ترتیب و idempotency دشوار است" },
          { en: "Heavy ops burden for small teams", fa: "بار عملیاتی سنگین برای تیم‌های کوچک" },
        ],
      },
    ],
    recommendation: {
      en: "Keep user-facing reads and writes synchronous with request-response, add queues for slow side effects, and adopt Kafka-style streaming only when replay or fan-out truly matters.",
      fa: "خواندن و نوشتن روبه‌کاربر را هم‌زمان با request-response نگه دارید، برای کارهای جانبی کند صف اضافه کنید و استریمینگ از نوع Kafka را فقط وقتی replay یا fan-out واقعاً مهم است به کار ببرید.",
    },
  },
  {
    slug: "rest-vs-graphql",
    title: { en: "REST vs GraphQL", fa: "REST در برابر GraphQL" },
    category: "architecture",
    description: {
      en: "The API style you expose to clients: resource-oriented REST, flexible GraphQL, or high-performance gRPC.",
      fa: "سبک APIای که به کلاینت‌ها ارائه می‌دهید: REST منبع‌محور، GraphQL انعطاف‌پذیر یا gRPC پرسرعت.",
    },
    stage: "backend",
    options: [
      {
        name: "REST",
        description: {
          en: "Resource-based HTTP APIs with standard verbs and cache semantics.",
          fa: "APIهای مبتنی بر منبع با فعل‌های استاندارد و معناشناسی کش HTTP.",
        },
        pros: [
          { en: "Simple, universal, cache-friendly", fa: "ساده، فراگیر و سازگار با کش" },
          { en: "Huge ecosystem and tooling", fa: "اکوسیستم و ابزارهای گسترده" },
        ],
        cons: [
          { en: "Over-fetching and under-fetching across clients", fa: "واکشی کمتر یا بیشتر از نیاز" },
          { en: "Many endpoints to version and maintain", fa: "نسخه‌بندی و نگهداری انبوه اندپوینت‌ها" },
        ],
      },
      {
        name: "GraphQL",
        description: {
          en: "Single endpoint with client-defined queries over a typed schema.",
          fa: "یک اندپوینت با کوئری‌های سمت کلاینت روی اسکیمای تایپ‌دار.",
        },
        pros: [
          { en: "Clients fetch exactly what they need", fa: "کلاینت دقیقاً همان داده لازم را می‌گیرد" },
          { en: "Typed self-documenting schema", fa: "اسکیمای تایپ‌دار و خودتوصیف‌گر" },
        ],
        cons: [
          { en: "Caching and rate-limiting get complex", fa: "کش و rate-limiting پیچیده می‌شود" },
          { en: "Query cost and N+1 need guarding", fa: "هزینه کوئری و مشکل N+1 نیازمند مراقبت" },
        ],
      },
      {
        name: "gRPC",
        description: {
          en: "Contract-first RPC over HTTP/2 using protobuf.",
          fa: "RPC قرارداد-اول روی HTTP/2 با protobuf.",
        },
        pros: [
          { en: "Very fast binary serialization", fa: "سریال‌سازی باینری بسیار سریع" },
          { en: "Ideal for internal service-to-service calls", fa: "ایده‌آل برای ارتباط داخلی سرویس‌ها" },
        ],
        cons: [
          { en: "Weak browser support without proxies", fa: "پشتیبانی مرورگر بدون پروکسی ضعیف" },
          { en: "Steeper learning curve, less cacheable", fa: "منحنی یادگیری سخت‌تر و کش‌ناپذیرتر" },
        ],
      },
    ],
    recommendation: {
      en: "Expose REST publicly by default, add GraphQL when multiple clients need flexible queries, and use gRPC for internal service-to-service performance.",
      fa: "به‌صورت پیش‌فرض REST عمومی ارائه دهید، وقتی چند کلاینت به کوئری انعطاف‌پذیر نیاز دارند GraphQL اضافه کنید و برای کارایی ارتباط داخلی سرویس‌ها gRPC را به کار ببرید.",
    },
  },
  {
    slug: "server-rendering-vs-spa",
    title: { en: "Server Rendering vs SPA", fa: "رندر سمت سرور در برابر SPA" },
    category: "architecture",
    description: {
      en: "Where your UI gets rendered: on the server for speed and SEO, or in the browser as a SPA.",
      fa: "رندر UI کجا انجام شود: روی سرور برای سرعت و سئو، یا در مرورگر به‌شکل SPA.",
    },
    stage: "frontend",
    options: [
      {
        name: "SPA",
        description: {
          en: "One HTML shell; JavaScript renders everything in the browser.",
          fa: "یک پوسته HTML؛ همه‌چیز با JavaScript در مرورگر رندر می‌شود.",
        },
        pros: [
          { en: "Rich app-like interactivity", fa: "تعامل غنی و اپ‌مانند" },
          { en: "Cheap static hosting and deploys", fa: "هاست استاتیک ارزان و ساده" },
        ],
        cons: [
          { en: "Slow first render on weak devices", fa: "رندر اولیه کند روی دستگاه‌های ضعیف" },
          { en: "SEO needs extra work", fa: "سئو نیازمند کار اضافه" },
        ],
      },
      {
        name: "SSR / SSG",
        description: {
          en: "HTML rendered per request on the server or at build time.",
          fa: "HTML به‌ازای هر درخواست روی سرور یا هنگام build رندر می‌شود.",
        },
        pros: [
          { en: "Fast first paint, strong SEO", fa: "اولین رندر سریع و سئوی قوی" },
          { en: "Ideal for content-driven products", fa: "ایده‌آل برای محصولات محتامحور" },
        ],
        cons: [
          { en: "Server cost and latency per request", fa: "هزینه و تأخیر سرور در هر درخواست" },
          { en: "Hydration complexity and framework lock-in", fa: "پیچیدگی هیدریشن و قفل‌شدگی به فریم‌ورک" },
        ],
      },
      {
        name: "MPA",
        description: {
          en: "Classic server templates; each navigation loads a full page.",
          fa: "قالب‌های کلاسیک سرور؛ هر ناوبری یک صفحه کامل بار می‌کند.",
        },
        pros: [
          { en: "Simplest possible mental model", fa: "ساده‌ترین مدل ذهنی ممکن" },
          { en: "Works without heavy JavaScript", fa: "بدون JavaScript سنگین کار می‌کند" },
        ],
        cons: [
          { en: "Full reloads break app-like UX", fa: "ریلود کامل، تجربه اپ‌مانند را می‌شکند" },
          { en: "Duplicated rendering logic across pages", fa: "تکرار منطق رندر در صفحات" },
        ],
      },
    ],
    recommendation: {
      en: "Pick SSR/SSG for SEO-sensitive or content-heavy products, a plain SPA for authenticated dashboards, and MPA for simple content sites.",
      fa: "برای محصولات حساس به سئو یا محتامحور SSR/SSG، برای داشبوردهای پشت لاگین SPA ساده و برای سایت‌های محتوایی ساده MPA را انتخاب کنید.",
    },
  },
  {
    slug: "state-management-choice",
    title: { en: "State Management Choice", fa: "انتخاب روش مدیریت State" },
    category: "architecture",
    description: {
      en: "How client state is organized: a server-state library, a lightweight store, or a full global store.",
      fa: "state کلاینت چگونه سازمان می‌یابد: کتابخانه state سرور، استور سبک یا استور سراسری کامل.",
    },
    stage: "frontend",
    options: [
      {
        name: "TanStack Query",
        description: {
          en: "Dedicated server-state cache; local and URL state cover the rest.",
          fa: "کش اختصاصی state سرور؛ بقیه state به URL و کامپوننت واگذار می‌شود.",
        },
        pros: [
          { en: "Eliminates manual loading and error state", fa: "حذف کدهای دستی loading و خطا" },
          { en: "Built-in caching, refetching, deduplication", fa: "کش، refetch و deduplication داخلی" },
        ],
        cons: [
          { en: "Not for complex client UI state", fa: "برای state پیچیده UI طراحی نشده" },
          { en: "New mental model for juniors", fa: "مدل ذهنی تازه برای تازه‌کارها" },
        ],
      },
      {
        name: "Zustand",
        description: {
          en: "Tiny hook-based store with near-zero boilerplate.",
          fa: "استور کوچک مبتنی بر هوک با تقریباً صفر boilerplate.",
        },
        pros: [
          { en: "Minimal boilerplate, easy adoption", fa: "boilerplate حداقلی و پذیرش آسان" },
          { en: "Perfectly sized for small apps", fa: "اندازه ایده‌آل برای اپ‌های کوچک" },
        ],
        cons: [
          { en: "No enforced structure at scale", fa: "بدون ساختار اجباری در مقیاس بزرگ" },
          { en: "Smaller middleware ecosystem than Redux", fa: "اکوسیستم middleware کوچک‌تر از Redux" },
        ],
      },
      {
        name: "Redux Toolkit",
        description: {
          en: "Opinionated global store with devtools and middleware ecosystem.",
          fa: "استور سراسری منسجم با devtools و اکوسیستم middleware.",
        },
        pros: [
          { en: "Predictable single source of truth", fa: "منبع حقیقت واحد و قابل پیش‌بینی" },
          { en: "Excellent devtools and middleware ecosystem", fa: "devtools و اکوسیستم middleware عالی" },
        ],
        cons: [
          { en: "More boilerplate for simple apps", fa: "boilerplate بیشتر برای اپ‌های ساده" },
          { en: "Overkill when server state dominates", fa: "وقتی state سرور غالب است زائد" },
        ],
      },
    ],
    recommendation: {
      en: "Start with TanStack Query for server state plus Zustand or Context for the remainder; introduce Redux Toolkit only when shared UI state grows genuinely complex.",
      fa: "برای state سرور با TanStack Query شروع کنید و برای بقیه از Zustand یا Context بهره ببرید؛ Redux Toolkit را فقط وقتی state مشترک UI واقعاً پیچیده شد معرفی کنید.",
    },
  },
  {
    slug: "caching-strategy",
    title: { en: "Caching Strategy", fa: "استراتژی کش" },
    category: "architecture",
    description: {
      en: "Which layers cache data — CDN, Redis, or write-through — to cut latency and database load.",
      fa: "کدام لایه‌ها داده را کش می‌کنند — CDN، Redis یا write-through — تا تأخیر و بار پایگاه داده کم شود.",
    },
    stage: "backend",
    options: [
      {
        name: "Cache-Aside (Redis)",
        description: {
          en: "Application checks the cache first, then falls back to the database.",
          fa: "اپ اول کش را چک می‌کند و در نبود داده به پایگاه داده برمی‌گردد.",
        },
        pros: [
          { en: "Only requested data is cached", fa: "فقط داده درخواستی کش می‌شود" },
          { en: "Degrades gracefully when cache fails", fa: "با خرابی کش به‌آرامی افت می‌کند" },
        ],
        cons: [
          { en: "First request always misses", fa: "درخواست اول همیشه miss می‌خورد" },
          { en: "Stale data needs TTL and invalidation", fa: "داده کهنه نیازمند TTL و invalidation" },
        ],
      },
      {
        name: "CDN + HTTP Cache",
        description: {
          en: "Edge caches full responses using cache headers.",
          fa: "کش لبه‌ای با هدرهای cache پاسخ‌های کامل را نگه می‌دارد.",
        },
        pros: [
          { en: "Huge latency wins near users", fa: "کاهش عظیم تأخیر نزدیک کاربر" },
          { en: "Shields origin from traffic spikes", fa: "سرور مبدأ را از جهش ترافیک می‌پوشاند" },
        ],
        cons: [
          { en: "Hard for personalized dynamic data", fa: "برای داده دینامیک شخصی‌سازی‌شده سخت" },
          { en: "Invalidation is notoriously tricky", fa: "invalidation به‌طور معروف دردسرساز است" },
        ],
      },
      {
        name: "Write-Through",
        description: {
          en: "Every write updates cache and database together.",
          fa: "هر نوشتن، هم‌زمان کش و پایگاه داده را به‌روزرسانی می‌کند.",
        },
        pros: [
          { en: "Cache stays consistently fresh", fa: "کش همیشه به‌روز و تازه" },
          { en: "Reads never miss", fa: "خواندن‌ها هرگز miss نمی‌شوند" },
        ],
        cons: [
          { en: "Write latency and cost increase", fa: "تأخیر و هزینه نوشتن بیشتر" },
          { en: "Unused data pollutes the cache", fa: "داده بی‌مصرف کش را شلوغ می‌کند" },
        ],
      },
    ],
    recommendation: {
      en: "Layer your caching: CDN for public static responses, cache-aside with Redis for hot database reads — with explicit TTLs and invalidation rules from day one.",
      fa: "کش را لایه‌ای بسازید: CDN برای پاسخ‌های استاتیک و عمومی، cache-aside با Redis برای خواندن‌های پرتکرار پایگاه داده — با TTL شفاف و قواعد invalidation از روز اول.",
    },
  },
  {
    slug: "monorepo-vs-polyrepo",
    title: { en: "Monorepo vs Polyrepo", fa: "مونوریپو در برابر پلی‌ریپو" },
    category: "architecture",
    description: {
      en: "Whether all projects share one repository with shared packages or each lives in its own repo.",
      fa: "همه پروژه‌ها در یک مخزن با پکیج‌های مشترک باشند یا هر کدام مخزن خودشان را داشته باشند.",
    },
    stage: "setup",
    options: [
      {
        name: "Monorepo",
        description: {
          en: "All projects and shared packages live in one repository.",
          fa: "همه پروژه‌ها و پکیج‌های مشترک در یک مخزن زندگی می‌کنند.",
        },
        pros: [
          { en: "Atomic changes across projects", fa: "تغییرات اتمیک روی چند پروژه" },
          { en: "One toolchain, one CI setup", fa: "یک toolchain و یک CI" },
        ],
        cons: [
          { en: "CI slows without task caching", fa: "بدون کش تسک، CI کند می‌شود" },
          { en: "Access control is all-or-nothing", fa: "کنترل دسترسی همه‌یاهیچ است" },
        ],
      },
      {
        name: "Polyrepo",
        description: {
          en: "Each service or app has its own repository and pipeline.",
          fa: "هر سرویس یا اپ مخزن و پایپ‌لاین خودش را دارد.",
        },
        pros: [
          { en: "Clear ownership and permissions", fa: "مالکیت و دسترسی شفاف" },
          { en: "Small, fast, independent CI", fa: "CI کوچک، سریع و مستقل" },
        ],
        cons: [
          { en: "Shared code needs versioned packages", fa: "کد مشترک نیازمند پکیج نسخه‌دار" },
          { en: "Cross-repo changes are painful", fa: "تغییرات میان‌مخزنی دردناک است" },
        ],
      },
    ],
    recommendation: {
      en: "Small teams usually win with a monorepo plus task caching; split toward polyrepo when ownership boundaries or compliance requirements harden.",
      fa: "تیم‌های کوچک معمولاً با مونوریپو به‌همراه کش تسک برنده می‌شوند؛ وقتی مرزهای مالکیت یا الزامات انطباقی سخت‌تر شد، به سمت پلی‌ریپو تفکیک کنید.",
    },
  },

  // ─── Technology (8) ──────────────────────────────────────────────────────
  {
    slug: "language-choice",
    title: { en: "Programming Language Choice", fa: "انتخاب زبان برنامه‌نویسی" },
    category: "technology",
    description: {
      en: "The primary backend language: staying on TypeScript end-to-end, or adding Go or Python where they shine.",
      fa: "زبان اصلی بک‌اند: ماندن روی TypeScript در کل استک، یا افزودن Go و Python جایی که می‌درخشند.",
    },
    stage: "setup",
    options: [
      {
        name: "TypeScript / Node.js",
        description: {
          en: "One language shared across frontend, backend, and tooling.",
          fa: "یک زبان مشترک میان فرانت‌اند، بک‌اند و ابزارها.",
        },
        pros: [
          { en: "End-to-end types across the stack", fa: "تایپ‌های end-to-end در کل استک" },
          { en: "Shared code, huge ecosystem", fa: "کد مشترک و اکوسیستم عظیم" },
        ],
        cons: [
          { en: "Runtime performance ceiling", fa: "سقف کارایی در runtime" },
          { en: "Async pitfalls under heavy load", fa: "تله‌های async در بار سنگین" },
        ],
      },
      {
        name: "Go",
        description: {
          en: "Simple compiled language built for services and CLIs.",
          fa: "زبان کامپایلی ساده که برای سرویس‌ها و CLI ساخته شده.",
        },
        pros: [
          { en: "Fast binaries with small memory", fa: "باینری سریع با حافظه کم" },
          { en: "Excellent concurrency primitives", fa: "پایه‌های هم‌زمانی عالی" },
        ],
        cons: [
          { en: "Less expressive for domain modeling", fa: "بیان‌پذیری کمتر در مدل‌سازی دامنه" },
          { en: "Smaller web framework ecosystem", fa: "اکوسیستم فریم‌ورک وب کوچک‌تر" },
        ],
      },
      {
        name: "Python",
        description: {
          en: "Dominant language for data, ML, and scripting.",
          fa: "زبان مسلط در داده، ML و اسکریپت‌نویسی.",
        },
        pros: [
          { en: "Unmatched data and ML libraries", fa: "کتابخانه‌های داده و ML بی‌رقیب" },
          { en: "Fast prototyping, easy hiring", fa: "نمونه‌سازی سریع و استخدام آسان" },
        ],
        cons: [
          { en: "Slower runtime, GIL limits", fa: "runtime کندتر و محدودیت GIL" },
          { en: "Optional typing gets inconsistent", fa: "تایپ اختیاری و ناهمگون می‌شود" },
        ],
      },
    ],
    recommendation: {
      en: "Default to TypeScript/Node.js when one team owns frontend and backend; add Go for high-throughput services and Python where data or ML is the product.",
      fa: "وقتی یک تیم مسئول فرانت‌اند و بک‌اند است، پیش‌فرضتان TypeScript/Node.js باشد؛ برای سرویس‌های پربازده Go و جایی که داده یا ML محصول است Python را اضافه کنید.",
    },
  },
  {
    slug: "framework-choice",
    title: { en: "Framework Choice", fa: "انتخاب فریم‌ورک" },
    category: "technology",
    description: {
      en: "The full-stack meta-framework that anchors your product: Next.js, Nuxt, or SvelteKit.",
      fa: "فریم‌ورک متای فول‌استکی که پایه محصول شماست: Next.js، Nuxt یا SvelteKit.",
    },
    stage: "setup",
    options: [
      {
        name: "Next.js",
        description: {
          en: "React meta-framework with SSR, SSG, and React Server Components.",
          fa: "فریم‌ورک متای React با SSR، SSG و React Server Components.",
        },
        pros: [
          { en: "Huge ecosystem and hiring pool", fa: "اکوسیستم بزرگ و بازار کار خوب" },
          { en: "Flexible rendering per route", fa: "رندر انعطاف‌پذیر برای هر مسیر" },
        ],
        cons: [
          { en: "Frequent paradigm shifts (RSC)", fa: "تغییر پارادایم پرتکرار (RSC)" },
          { en: "Complex caching semantics", fa: "معناشناسی پیچیده کش" },
        ],
      },
      {
        name: "Nuxt",
        description: {
          en: "Vue meta-framework with strong conventions and built-in server routes.",
          fa: "فریم‌ورک متای Vue با قراردادهای قوی و مسیرهای سرور داخلی.",
        },
        pros: [
          { en: "Great DX with Vue conventions", fa: "تجربه توسعه عالی با قراردادهای Vue" },
          { en: "Built-in server routes and modules", fa: "مسیرهای سرور و ماژول‌های داخلی" },
        ],
        cons: [
          { en: "Smaller ecosystem than React", fa: "اکوسیستم کوچک‌تر از React" },
          { en: "Fewer specialist hires available", fa: "نیروی متخصص کمتر در بازار" },
        ],
      },
      {
        name: "SvelteKit",
        description: {
          en: "Compiler-based framework producing minimal runtime code.",
          fa: "فریم‌ورک کامپایلری که کمترین کد runtime تولید می‌کند.",
        },
        pros: [
          { en: "Tiny bundles, great performance", fa: "باندل کوچک و کارایی عالی" },
          { en: "Clean, readable component model", fa: "مدل کامپوننت تمیز و خوانا" },
        ],
        cons: [
          { en: "Smallest ecosystem and job market", fa: "کوچک‌ترین اکوسیستم و بازار کار" },
          { en: "Fewer third-party component libraries", fa: "کتابخانه کامپوننت ثالث کمتر" },
        ],
      },
    ],
    recommendation: {
      en: "Choose Next.js for React teams and hiring depth, Nuxt if your team prefers Vue, and SvelteKit for performance-critical products with small teams — then stop switching.",
      fa: "برای تیم‌های React و عمق نیروی کار Next.js را برگزینید، اگر تیم Vue را می‌پسندد Nuxt و برای محصولات حساس به کارایی با تیم کوچک SvelteKit — و بعد دیگر عوضش نکنید.",
    },
  },
  {
    slug: "build-tool-choice",
    title: { en: "Build Tool Choice", fa: "انتخاب ابزار Build" },
    category: "technology",
    description: {
      en: "The bundler and dev-server tooling your JavaScript stack builds and serves with.",
      fa: "ابزار باندل و سرور توسعه‌ای که استک JavaScript شما با آن بیلد و سرو می‌شود.",
    },
    stage: "setup",
    options: [
      {
        name: "Vite",
        description: {
          en: "Native-ESM dev server with esbuild, Rollup for production builds.",
          fa: "سرور توسعه بر بستر ESM با esbuild و باندل Rollup برای production.",
        },
        pros: [
          { en: "Instant dev server and HMR", fa: "سرور توسعه و HMR آنی" },
          { en: "Sane defaults, tiny config", fa: "پیش‌فرض‌های منطقی و پیکربندی حداقلی" },
        ],
        cons: [
          { en: "Younger plugin ecosystem than Webpack", fa: "اکوسیستم پلاگین جوان‌تر از Webpack" },
          { en: "Dev and build pipelines diverge", fa: "خط لوله dev و build ناهمگون" },
        ],
      },
      {
        name: "Webpack",
        description: {
          en: "Battle-tested bundler with the deepest loader ecosystem.",
          fa: "باندلر آزموده با عمیق‌ترین اکوسیستم loader.",
        },
        pros: [
          { en: "Extremely flexible and configurable", fa: "انعطاف و پیکربندی‌پذیری بسیار بالا" },
          { en: "Mature ecosystem for legacy setups", fa: "اکوسیستم بالغ برای پروژه‌های قدیمی" },
        ],
        cons: [
          { en: "Slow builds on large apps", fa: "بیلد کند در اپ‌های بزرگ" },
          { en: "Config complexity and boilerplate", fa: "پیچیدگی پیکربندی و boilerplate" },
        ],
      },
      {
        name: "Turbopack",
        description: {
          en: "Rust-based incremental bundler built for Next.js.",
          fa: "باندلر افزایشی مبتنی بر Rust که برای Next.js ساخته شده.",
        },
        pros: [
          { en: "Very fast incremental rebuilds", fa: "ری‌بیلد افزایشی بسیار سریع" },
          { en: "Zero-config inside Next.js", fa: "بدون پیکربندی در Next.js" },
        ],
        cons: [
          { en: "Next.js-centric with young ecosystem", fa: "محوریت Next.js و اکوسیستم جوان" },
          { en: "Limited custom loader support", fa: "پشتیبانی محدود از loader سفارشی" },
        ],
      },
    ],
    recommendation: {
      en: "Pick Vite for new SPAs and libraries, stay on Webpack for legacy setups, and use Turbopack when you are already committed to Next.js.",
      fa: "برای SPA و کتابخانه‌های تازه Vite را انتخاب کنید، روی Webpack فقط برای پروژه‌های قدیمی بمانید و اگر با Next.js پیش می‌روید از Turbopack استفاده کنید.",
    },
  },
  {
    slug: "css-solution-choice",
    title: { en: "CSS Styling Solution", fa: "راهکار استایل‌دهی CSS" },
    category: "technology",
    description: {
      en: "How styles are written and scoped: utility classes, CSS Modules, or CSS-in-JS.",
      fa: "استایل‌ها چگونه نوشته و scoped می‌شوند: کلاس‌های utility، CSS Modules یا CSS-in-JS.",
    },
    stage: "frontend",
    options: [
      {
        name: "Tailwind CSS",
        description: {
          en: "Utility classes composed directly in the markup.",
          fa: "کلاس‌های utility که مستقیم در مارکاپ ترکیب می‌شوند.",
        },
        pros: [
          { en: "Fast iteration, no naming debates", fa: "تکرار سریع و بی‌بحثِ نام‌گذاری" },
          { en: "Tiny production CSS when purged", fa: "CSS تولیدی بسیار کوچک با purge" },
        ],
        cons: [
          { en: "Noisy class strings in JSX", fa: "رشته‌کلاس‌های شلوغ در JSX" },
          { en: "Design tokens need upfront config", fa: "توکن‌های طراحی نیازمند پیکربندی اولیه" },
        ],
      },
      {
        name: "CSS Modules",
        description: {
          en: "Locally scoped class names generated per file.",
          fa: "نام کلاس‌های محلی و scoped که برای هر فایل تولید می‌شود.",
        },
        pros: [
          { en: "Scoped styles with zero runtime", fa: "استایل scoped و بدون runtime" },
          { en: "Plain CSS you already know", fa: "CSS ساده‌ای که می‌شناسید" },
        ],
        cons: [
          { en: "Sharing tokens gets manual", fa: "اشتراک توکن‌ها دستی می‌شود" },
          { en: "More files and indirection", fa: "فایل‌ها و واسطه‌های بیشتر" },
        ],
      },
      {
        name: "styled-components",
        description: {
          en: "Component-scoped styles written in JavaScript with runtime theming.",
          fa: "استایل‌های scoped در سطح کامپوننت با تم runtime در JavaScript.",
        },
        pros: [
          { en: "Styles co-located with components", fa: "استایل در کنار خود کامپوننت" },
          { en: "Dynamic theming via props", fa: "تم دینامیک با props" },
        ],
        cons: [
          { en: "Runtime cost and bundle weight", fa: "هزینه runtime و وزن باندل" },
          { en: "Friction with Server Components", fa: "اصطکاک با Server Components" },
        ],
      },
    ],
    recommendation: {
      en: "Tailwind is the pragmatic default for new products; CSS Modules suits design-system-heavy teams, and CSS-in-JS only where dynamic theming truly demands it.",
      fa: "Tailwind پیش‌فرض عمل‌گرایانه محصول تازه است؛ CSS Modules برای تیم‌های design-system‌محور مناسب است و CSS-in-JS فقط جایی که تم دینامیک واقعاً لازم است.",
    },
  },
  {
    slug: "database-choice",
    title: { en: "Database Engine Choice", fa: "انتخاب موتور پایگاه داده" },
    category: "technology",
    description: {
      en: "The concrete database engine to run your primary datastore on.",
      fa: "موتور مشخص پایگاه داده‌ای که مخزن اصلی داده شما روی آن اجرا می‌شود.",
    },
    stage: "database",
    options: [
      {
        name: "PostgreSQL",
        description: {
          en: "Advanced relational engine with rich types and extensions.",
          fa: "موتور رابطه‌ای پیشرفته با تایپ‌ها و افزونه‌های غنی.",
        },
        pros: [
          { en: "Rich types, JSONB, and extensions", fa: "تایپ‌های غنی، JSONB و افزونه‌ها" },
          { en: "Excellent defaults for most apps", fa: "پیش‌فرض‌های عالی برای اکثر اپ‌ها" },
        ],
        cons: [
          { en: "Connections need pooling at scale", fa: "در مقیاس بالا کانکشن نیازمند pooling" },
          { en: "Read scale-out requires extra setup", fa: "مقیاس خواندنی نیازمند تنظیم اضافه" },
        ],
      },
      {
        name: "MySQL",
        description: {
          en: "Widely hosted relational engine that is simple to operate.",
          fa: "موتور رابطه‌ای رایج که به‌سادگی راه‌اندازی و نگهداری می‌شود.",
        },
        pros: [
          { en: "Ubiquitous hosting and team familiarity", fa: "هاست فراگیر و آشنایی تیم‌ها" },
          { en: "Proven, simple replication", fa: "replication ساده و آزموده" },
        ],
        cons: [
          { en: "Fewer advanced features than Postgres", fa: "ویژگی‌های پیشرفته کمتر از Postgres" },
          { en: "Weaker JSON and extension story", fa: "پشتیبانی JSON و افزونه ضعیف‌تر" },
        ],
      },
      {
        name: "MongoDB",
        description: {
          en: "Document store with flexible schemas and horizontal sharding.",
          fa: "مخزن سند با اسکیمای انعطاف‌پذیر و sharding افقی.",
        },
        pros: [
          { en: "Flexible documents for evolving models", fa: "سندهای انعطاف‌پذیر برای مدل‌های متغیر" },
          { en: "Horizontal sharding built-in", fa: "sharding افقی داخلی" },
        ],
        cons: [
          { en: "Joins and multi-doc transactions weaker", fa: "join و تراکنش چندسندی ضعیف‌تر" },
          { en: "Relational habits don't transfer", fa: "عادت‌های رابطه‌ای منتقل نمی‌شود" },
        ],
      },
    ],
    recommendation: {
      en: "PostgreSQL is the safe default for new products; choose MySQL for existing operational familiarity and MongoDB only when documents genuinely model your domain.",
      fa: "برای محصول جدید PostgreSQL انتخاب مطمئن است؛ MySQL را برای آشنایی عملیاتی موجود و MongoDB را فقط وقتی مدل سند واقعاً با دامنه شما می‌سازد انتخاب کنید.",
    },
  },
  {
    slug: "orm-vs-raw-sql",
    title: { en: "ORM vs Raw SQL", fa: "ORM در برابر SQL خام" },
    category: "technology",
    description: {
      en: "How application code talks to the database: typed ORM, query builder, or hand-written SQL.",
      fa: "کد اپلیکیشن چگونه با پایگاه داده صحبت می‌کند: ORM تایپ‌دار، query builder یا SQL دست‌نویس.",
    },
    stage: "backend",
    options: [
      {
        name: "ORM (Prisma / Drizzle)",
        description: {
          en: "Models map to tables; queries and migrations are typed.",
          fa: "مدل‌ها به جدول نگاشت می‌شوند؛ کوئری و migration تایپ‌دار است.",
        },
        pros: [
          { en: "Type-safe queries and migrations", fa: "کوئری و migration تایپ‌سیف" },
          { en: "Faster CRUD feature development", fa: "توسعه سریع‌تر فیچرهای CRUD" },
        ],
        cons: [
          { en: "Complex queries become awkward", fa: "کوئری‌های پیچیده ناهموار می‌شوند" },
          { en: "Hidden N+1 performance traps", fa: "دام‌های پنهان کارایی N+1" },
        ],
      },
      {
        name: "Query Builder (Knex)",
        description: {
          en: "Composable SQL in code without full object mapping.",
          fa: "ساخت SQL ترکیب‌شدنی در کد، بدون نگاشت کامل شیء.",
        },
        pros: [
          { en: "Composable SQL without heavy mapping", fa: "SQL ترکیب‌شدنی بدون نگاشت سنگین" },
          { en: "Lightweight with predictable behavior", fa: "سبک با رفتار قابل پیش‌بینی" },
        ],
        cons: [
          { en: "No domain models or types", fa: "بدون مدل دامنه یا تایپ" },
          { en: "Team must know SQL well", fa: "تیم باید SQL خوب بلد باشد" },
        ],
      },
      {
        name: "Raw SQL",
        description: {
          en: "Hand-written SQL inside repositories and migrations.",
          fa: "SQL دست‌نویس داخل ریپازیتوری‌ها و migrationها.",
        },
        pros: [
          { en: "Full SQL power and tuning", fa: "تمام قدرت SQL و تنظیم دقیق" },
          { en: "No abstraction leaks", fa: "بدون نشت انتزاع" },
        ],
        cons: [
          { en: "No compile-time safety", fa: "بدون ایمنی زمان کامپایل" },
          { en: "Manual row-to-object mapping", fa: "نگاشت دستی ردیف به شیء" },
        ],
      },
    ],
    recommendation: {
      en: "Default to a typed ORM like Prisma or Drizzle for CRUD-heavy services, and drop to query builders or raw SQL inside repositories for hot, complex queries.",
      fa: "برای سرویس‌های مبتنی بر CRUD پیش‌فرضتان ORM تایپ‌دار مثل Prisma یا Drizzle باشد و برای کوئری‌های داغ و پیچیده، داخل ریپازیتوری به query builder یا SQL خام بروید.",
    },
  },
  {
    slug: "testing-framework-choice",
    title: { en: "Testing Framework Choice", fa: "انتخاب فریم‌ورک تست" },
    category: "technology",
    description: {
      en: "The test runner and E2E tooling that anchors your automated test suite.",
      fa: "رانر تست و ابزار E2Eای که مجموعه تست خودکار شما بر آن استوار می‌شود.",
    },
    stage: "testing",
    options: [
      {
        name: "Vitest",
        description: {
          en: "Vite-native unit test runner with a Jest-compatible API.",
          fa: "رانر تست واحد بومی Vite با API سازگار با Jest.",
        },
        pros: [
          { en: "Blazing watch mode with Vite", fa: "حالت watch فوق‌سریع با Vite" },
          { en: "Shares config with your app", fa: "اشتراک پیکربندی با خود اپ" },
        ],
        cons: [
          { en: "Younger ecosystem than Jest", fa: "اکوسیستم جوان‌تر از Jest" },
          { en: "Awkward outside Vite-based projects", fa: "خارج از پروژه‌های Vite ناهموار" },
        ],
      },
      {
        name: "Jest",
        description: {
          en: "The long-standing standard JavaScript test runner.",
          fa: "رانر تست استاندارد و دیرینه JavaScript.",
        },
        pros: [
          { en: "Huge ecosystem and documentation", fa: "اکوسیستم و مستندات عظیم" },
          { en: "Works in any JS setup", fa: "سازگار با هر استک JS" },
        ],
        cons: [
          { en: "Slower on large codebases", fa: "کندتر در کدبیس‌های بزرگ" },
          { en: "ESM and TS config friction", fa: "دردسر پیکربندی ESM و TS" },
        ],
      },
      {
        name: "Playwright",
        description: {
          en: "Cross-browser E2E and component testing by Microsoft.",
          fa: "تست E2E و کامپوننت چندمرورگری از مایکروسافت.",
        },
        pros: [
          { en: "Reliable auto-waiting in real browsers", fa: "انتظار خودکار مطمئن روی مرورگر واقعی" },
          { en: "Traces, screenshots, parallelism built-in", fa: "trace، اسکرین‌شات و موازی‌سازی داخلی" },
        ],
        cons: [
          { en: "Slower than unit tests", fa: "کندتر از تست واحد" },
          { en: "Needs browser infrastructure in CI", fa: "نیازمند زیرساخت مرورگر در CI" },
        ],
      },
    ],
    recommendation: {
      en: "Use Vitest for units in Vite projects (Jest elsewhere) and add Playwright as a thin layer of critical E2E flows — not as full coverage.",
      fa: "در پروژه‌های Vite برای تست واحد Vitest را برگزینید (در بقیه Jest) و برای لایه‌ای نازک از مسیرهای بحرانی E2E، Playwright اضافه کنید — نه پوشش کامل.",
    },
  },
  {
    slug: "cloud-provider-choice",
    title: { en: "Cloud Provider Choice", fa: "انتخاب ارائه‌دهنده ابری" },
    category: "technology",
    description: {
      en: "Which cloud platform hosts your infrastructure — or whether a PaaS shields you from it.",
      fa: "کدام پلتفرم ابری زیرساخت شما را میزبانی می‌کند — یا اینکه PaaS شما را از آن دور نگه می‌دارد.",
    },
    stage: "deployment",
    options: [
      {
        name: "AWS",
        description: {
          en: "Broadest managed-service catalog and largest market share.",
          fa: "گسترده‌ترین کاتالوگ خدمات مدیریت‌شده و بزرگ‌ترین سهم بازار.",
        },
        pros: [
          { en: "Deepest managed service catalog", fa: "گسترده‌ترین کاتالوگ خدمات مدیریت‌شده" },
          { en: "Mature ecosystem and hiring pool", fa: "اکوسیستم بالغ و بازار نیروی خوب" },
        ],
        cons: [
          { en: "Complex pricing and IAM", fa: "قیمت‌گذاری و IAM پیچیده" },
          { en: "Surprise bills are easy", fa: "خطر قبض‌های غافلگیرکننده همیشه هست" },
        ],
      },
      {
        name: "GCP",
        description: {
          en: "Strong data, container, and networking stack.",
          fa: "استک قوی در داده، کانتینر و شبکه.",
        },
        pros: [
          { en: "Excellent Kubernetes and data tooling", fa: "ابزارهای Kubernetes و داده عالی" },
          { en: "Cleaner IAM and networking defaults", fa: "پیش‌فرض‌های IAM و شبکه تمیزتر" },
        ],
        cons: [
          { en: "Smaller regional coverage", fa: "پوشش منطقه‌ای کمتر" },
          { en: "Frequent product deprecations", fa: "منسوخ‌شدن پرتکرار سرویس‌ها" },
        ],
      },
      {
        name: "Azure",
        description: {
          en: "Deep enterprise and Microsoft-ecosystem integration.",
          fa: "یکپارچگی عمیق با سازمان‌ها و اکوسیستم مایکروسافت.",
        },
        pros: [
          { en: "Best for .NET and enterprises", fa: "بهترین گزینه برای .NET و سازمان‌ها" },
          { en: "Strong hybrid and AD integration", fa: "یکپارچگی قوی hybrid و AD" },
        ],
        cons: [
          { en: "Inconsistent service quality across regions", fa: "کیفیت ناهمگون سرویس‌ها بین regionها" },
          { en: "Documentation often lags services", fa: "مستندات اغلب از خدمات عقب‌تر است" },
        ],
      },
    ],
    recommendation: {
      en: "Choose based on team experience and where your users are; avoid multi-cloud by default, and let a PaaS like Vercel or Render front the hyperscaler for small teams.",
      fa: "انتخاب را بر تجربه تیم و موقعیت جغرافیایی کاربران بنا کنید؛ به‌صورت پیش‌فرض از multi-cloud پرهیز کنید و برای تیم‌های کوچک، هایپراسکیلر را پشت PaaSایی مثل Vercel یا Render پنهان کنید.",
    },
  },

  // ─── Process (8) ─────────────────────────────────────────────────────────
  {
    slug: "documentation-strategy",
    title: { en: "Documentation Strategy", fa: "استراتژی مستندسازی" },
    category: "process",
    description: {
      en: "Where team knowledge lives: docs-as-code, a wiki, ADRs and runbooks — or a blend.",
      fa: "دانش تیم کجا زندگی می‌کند: docs-as-code، ویکی، ADR و runbook — یا ترکیبی از آن‌ها.",
    },
    stage: "discovery",
    options: [
      {
        name: "Docs-as-Code",
        description: {
          en: "Docs live in the repository and get reviewed like code.",
          fa: "مستندات در مخزن زندگی می‌کنند و مثل کد بازبینی می‌شوند.",
        },
        pros: [
          { en: "Versioned and reviewed with code", fa: "نسخه‌دار و بازبینی‌شده همراه کد" },
          { en: "Stays close to the source", fa: "نزدیک به خود منبع می‌ماند" },
        ],
        cons: [
          { en: "Discoverability needs good tooling", fa: "یافتن‌پذیری نیازمند ابزار مناسب" },
          { en: "Non-developers rarely contribute", fa: "غیربرنامه‌نویس‌ها به‌ندرت مشارکت می‌کنند" },
        ],
      },
      {
        name: "Wiki",
        description: {
          en: "Central collaborative space for specs and guides.",
          fa: "فضای اشتراکی مرکزی برای specها و راهنماها.",
        },
        pros: [
          { en: "Easy editing for all roles", fa: "ویرایش آسان برای همه نقش‌ها" },
          { en: "Great for product and process docs", fa: "عالی برای مستندات محصول و فرایند" },
        ],
        cons: [
          { en: "Drifts out of sync with code", fa: "از کد عقب می‌ماند" },
          { en: "Ownership often unclear", fa: "مالکیت اغلب مبهم است" },
        ],
      },
      {
        name: "ADRs + Runbooks",
        description: {
          en: "Decision records plus operational runbooks for incidents.",
          fa: "ثبت تصمیم‌ها به‌همراه runbookهای عملیاتی برای حوادث.",
        },
        pros: [
          { en: "Captures the why, not just what", fa: "چرایی تصمیم‌ها را ثبت می‌کند" },
          { en: "Perfect for incidents and on-call", fa: "برای حادثه و آنکال عالی" },
        ],
        cons: [
          { en: "Discipline required to write", fa: "نیازمند انضباط در نوشتن" },
          { en: "Narrow scope, not full docs", fa: "دامنه محدود، نه مستندات کامل" },
        ],
      },
    ],
    recommendation: {
      en: "Combine approaches: docs-as-code READMEs and ADRs per repository, plus a wiki for cross-team specs — and give every document a named owner.",
      fa: "رویکردها را ترکیب کنید: README و ADR داخل هر مخزن به سبک docs-as-code، به‌علاوه ویکی برای specهای میان‌تیمی — و برای هر سند یک مالک مشخص تعیین کنید.",
    },
  },
  {
    slug: "branching-strategy",
    title: { en: "Branching Strategy", fa: "استراتژی شاخه‌بندی" },
    category: "process",
    description: {
      en: "How code moves from a developer's machine to main: trunk-based, GitHub Flow, or GitFlow.",
      fa: "کد چگونه از سیستم توسعه‌دهنده به main می‌رسد: trunk-based، GitHub Flow یا GitFlow.",
    },
    stage: "setup",
    options: [
      {
        name: "Trunk-Based",
        description: {
          en: "Everyone merges small changes into main daily.",
          fa: "همه روزانه تغییرات کوچک را به main ادغام می‌کنند.",
        },
        pros: [
          { en: "Tiny diffs, fast reviews", fa: "تغییرات کوچک و بازبینی سریع" },
          { en: "Continuous integration by default", fa: "یکپارچه‌سازی پیوسته به‌صورت پیش‌فرض" },
        ],
        cons: [
          { en: "Needs feature flag discipline", fa: "نیازمند انضباط feature flag" },
          { en: "Demands solid automated tests", fa: "تست خودکار محکم لازم دارد" },
        ],
      },
      {
        name: "GitHub Flow",
        description: {
          en: "Short-lived branches, PR to main, deploy after merge.",
          fa: "شاخه‌های کوتاه‌عمر، PR به main و استقرار پس از merge.",
        },
        pros: [
          { en: "Simple, review-friendly workflow", fa: "گردش کار ساده و ریویوپسند" },
          { en: "Works well with preview deploys", fa: "سازگار با استقرار preview" },
        ],
        cons: [
          { en: "Stale branches when PRs linger", fa: "شاخه‌های کهنه با PRهای ماندگار" },
          { en: "Main must stay deployable", fa: "main باید همیشه قابل استقرار بماند" },
        ],
      },
      {
        name: "GitFlow",
        description: {
          en: "Long-lived develop, release, and hotfix branch structure.",
          fa: "ساختار شاخه‌های دیرپای develop، release و hotfix.",
        },
        pros: [
          { en: "Explicit release and hotfix flow", fa: "جریان شفاف release و hotfix" },
          { en: "Suits versioned shipped software", fa: "مناسب نرم‌افزار نسخه‌دار و منتشرشده" },
        ],
        cons: [
          { en: "Heavy merge overhead for web apps", fa: "سربار سنگین merge برای اپ وب" },
          { en: "Delays feedback and integration", fa: "تأخیر در بازخورد و یکپارچه‌سازی" },
        ],
      },
    ],
    recommendation: {
      en: "Use trunk-based or GitHub Flow for continuously deployed web products; keep GitFlow only for versioned, on-prem, or fixed-cadence software.",
      fa: "برای محصولات وب با استقرار پیوسته trunk-based یا GitHub Flow را انتخاب کنید؛ GitFlow را فقط برای نرم‌افزارهای نسخه‌دار، on-prem یا با سیکل انتشار ثابت نگه دارید.",
    },
  },
  {
    slug: "testing-scope",
    title: { en: "Testing Scope", fa: "دامنه تست" },
    category: "process",
    description: {
      en: "The shape and balance of your test suite: pyramid, critical-path focus, or E2E-heavy.",
      fa: "شکل و توازن مجموعه تست شما: هرم، تمرکز بر مسیرهای بحرانی یا تکیه سنگین بر E2E.",
    },
    stage: "testing",
    options: [
      {
        name: "Test Pyramid",
        description: {
          en: "Many units, some integration, few E2E tests.",
          fa: "تست واحد فراوان، integration متوسط و E2E اندک.",
        },
        pros: [
          { en: "Fast feedback, cheap maintenance", fa: "بازخورد سریع و نگهداری ارزان" },
          { en: "Failures pinpoint exact causes", fa: "خطا دقیقاً علت را نشان می‌دهد" },
        ],
        cons: [
          { en: "Mocks can drift from reality", fa: "mockها ممکن است از واقعیت جدا شوند" },
          { en: "Slower to set up initially", fa: "راه‌اندازی اولیه کند حس می‌شود" },
        ],
      },
      {
        name: "Critical-Path Only",
        description: {
          en: "Focused tests on revenue and core user flows.",
          fa: "تست متمرکز روی جریان‌های درآمدی و کاربری اصلی.",
        },
        pros: [
          { en: "High value per test written", fa: "ارزش بالا برای هر تست" },
          { en: "Small suite stays fast and green", fa: "مجموعه کوچک، سریع و پایدار" },
        ],
        cons: [
          { en: "Regressions slip into edge cases", fa: "پسرفت در موارد مرزی می‌لغزد" },
          { en: "Confidence gaps as app grows", fa: "شکاف اطمینان با رشد اپ" },
        ],
      },
      {
        name: "Heavy E2E",
        description: {
          en: "Most coverage comes from full-browser scenarios.",
          fa: "بیشتر پوشش از سناریوهای کامل مرورگر می‌آید.",
        },
        pros: [
          { en: "Tests real user behavior", fa: "رفتار واقعی کاربر را می‌سنجد" },
          { en: "No mocking of internals", fa: "بدون mock کردن جزئیات داخلی" },
        ],
        cons: [
          { en: "Flaky, slow, expensive to run", fa: "flaky، کند و گران" },
          { en: "Failure diagnosis takes ages", fa: "عیب‌یابی خطاها بسیار طولانی" },
        ],
      },
    ],
    recommendation: {
      en: "Aim for a pragmatic pyramid: dense unit and integration tests, plus a small set of E2E tests covering signup, checkout, and other critical flows.",
      fa: "به هرمی عمل‌گرایانه برسید: تست واحد و integration متراکم، به‌علاوه مجموعه کوچکی تست E2E برای ثبت‌نام، پرداخت و سایر جریان‌های بحرانی.",
    },
  },
  {
    slug: "cicd-strategy",
    title: { en: "CI/CD Strategy", fa: "استراتژی CI/CD" },
    category: "process",
    description: {
      en: "The CI/CD platform and pipeline model that builds, tests, and ships every change.",
      fa: "پلتفرم CI/CD و مدل پایپ‌لاینی که هر تغییر را بیلد، تست و منتشر می‌کند.",
    },
    stage: "cicd",
    options: [
      {
        name: "GitHub Actions",
        description: {
          en: "YAML pipelines tightly integrated with GitHub.",
          fa: "پایپ‌لاین‌های YAML با یکپارچگی نزدیک به GitHub.",
        },
        pros: [
          { en: "Zero setup for GitHub repos", fa: "بدون راه‌اندازی برای مخازن GitHub" },
          { en: "Huge marketplace of reusable actions", fa: "مارکت‌پلیس بزرگ اکشن‌های قابل استفاده مجدد" },
        ],
        cons: [
          { en: "Minute costs grow with scale", fa: "هزینه دقیقه‌ای با مقیاس زیاد می‌شود" },
          { en: "Matrix debugging can be painful", fa: "دیباگ ماتریس‌ها دردناک است" },
        ],
      },
      {
        name: "GitLab CI",
        description: {
          en: "Built-in pipelines with a containers-first model.",
          fa: "پایپ‌لاین‌های داخلی با مدل کانتینر-محور.",
        },
        pros: [
          { en: "First-class runner flexibility", fa: "انعطاف درجه‌یک در runnerها" },
          { en: "One platform for the whole lifecycle", fa: "یک پلتفرم برای کل چرخه حیات" },
        ],
        cons: [
          { en: "Locks you into GitLab", fa: "وابستگی به GitLab" },
          { en: "Less familiar config syntax", fa: "سینتکس پیکربندی کمتر آشنا" },
        ],
      },
      {
        name: "Jenkins",
        description: {
          en: "Self-hosted automation server, fully customizable.",
          fa: "سرور اتوماسیون self-hosted با سفارشی‌سازی کامل.",
        },
        pros: [
          { en: "Total control and customization", fa: "کنترل و سفارشی‌سازی کامل" },
          { en: "No per-minute compute billing", fa: "بدون صورتحساب دقیقه‌ای" },
        ],
        cons: [
          { en: "You own plugin and security upkeep", fa: "نگهداری پلاگین و امنیت با شماست" },
          { en: "Heavy maintenance for small teams", fa: "نگهداری سنگین برای تیم‌های کوچک" },
        ],
      },
    ],
    recommendation: {
      en: "Start with the CI native to your hosting platform (GitHub Actions or GitLab CI); move to self-hosted runners or Jenkins only when cost, compliance, or scale forces it.",
      fa: "با CI بومی پلتفرم میزبان خود شروع کنید (GitHub Actions یا GitLab CI)؛ فقط وقتی هزینه، انطباق یا مقیاس ایجاب کرد به runnerهای self-hosted یا Jenkins بروید.",
    },
  },
  {
    slug: "release-strategy",
    title: { en: "Release Strategy", fa: "استراتژی انتشار" },
    category: "process",
    description: {
      en: "How releases reach users: continuous deployment, batched release trains, or progressive canary rollouts.",
      fa: "انتشارها چگونه به کاربران می‌رسند: انتشار پیوسته، release train دسته‌ای یا rollout تدریجی canary.",
    },
    stage: "cicd",
    options: [
      {
        name: "Continuous Deployment",
        description: {
          en: "Every green merge ships automatically to users.",
          fa: "هر merge سبز به‌طور خودکار برای کاربران منتشر می‌شود.",
        },
        pros: [
          { en: "Tiny batches, fast feedback", fa: "دسته‌های کوچک و بازخورد سریع" },
          { en: "No release-day anxiety", fa: "بدون اضطراب روز انتشار" },
        ],
        cons: [
          { en: "Demands strong automated tests", fa: "نیازمند تست‌های خودکار قوی" },
          { en: "Feature flags required for WIP", fa: "برای کار نیمه‌کاره feature flag لازم است" },
        ],
      },
      {
        name: "Release Train",
        description: {
          en: "Fixed-cadence batched releases, e.g. every two weeks.",
          fa: "انتشارهای دسته‌ای با سیکل ثابت، مثلاً دوهفته‌ای.",
        },
        pros: [
          { en: "Predictable schedule for stakeholders", fa: "زمان‌بندی قابل پیش‌بینی برای ذی‌نفعان" },
          { en: "Batching simplifies marketing and support", fa: "دسته‌بندی، بازاریابی و پشتیبانی را ساده می‌کند" },
        ],
        cons: [
          { en: "Bigger, riskier releases", fa: "انتشارهای بزرگ‌تر و پرریسک‌تر" },
          { en: "Value waits on main", fa: "ارزش آماده روی main منتظر می‌ماند" },
        ],
      },
      {
        name: "Canary / Progressive",
        description: {
          en: "Ship to a small traffic slice, then expand gradually.",
          fa: "انتشار به بخش کوچکی از ترافیک و گسترش تدریجی.",
        },
        pros: [
          { en: "Tiny blast radius", fa: "شعاع خرابی بسیار کوچک" },
          { en: "Metrics-driven rollback decisions", fa: "rollback بر اساس متریک‌ها" },
        ],
        cons: [
          { en: "Needs infra and metric plumbing", fa: "نیازمند زیرساخت و متریک" },
          { en: "Long tail of mixed versions", fa: "دوره طولانی نسخه‌های ترکیبی" },
        ],
      },
    ],
    recommendation: {
      en: "Continuous deployment with feature flags is the modern default for web apps; add canary releases for risky changes and reserve release trains for external cadence requirements.",
      fa: "انتشار پیوسته با feature flag پیش‌فرض مدرن اپ‌های وب است؛ برای تغییرات پرریسک canary اضافه کنید و release train را برای الزامات بیرونی نگه دارید.",
    },
  },
  {
    slug: "error-tracking-policy",
    title: { en: "Error Tracking Policy", fa: "سیاست ردیابی خطا" },
    category: "process",
    description: {
      en: "How production errors are captured, grouped, alerted on, and owned.",
      fa: "خطاهای production چگونه ثبت، گروه‌بندی، هشدار و مالکیت‌بندی می‌شوند.",
    },
    stage: "monitoring",
    options: [
      {
        name: "Sentry (SaaS)",
        description: {
          en: "Exception aggregation with stack traces and alerting.",
          fa: "تجمیع استثناها با stack trace و هشداردهی.",
        },
        pros: [
          { en: "Rich stack traces and grouping", fa: "stack trace غنی و گروه‌بندی خوب" },
          { en: "Fast setup, low maintenance", fa: "راه‌اندازی سریع و نگهداری کم" },
        ],
        cons: [
          { en: "Costs scale with event volume", fa: "هزینه با حجم رویداد بالا می‌رود" },
          { en: "Data leaves your infrastructure", fa: "داده از زیرساخت شما خارج می‌شود" },
        ],
      },
      {
        name: "Self-Hosted Tracker",
        description: {
          en: "Sentry-compatible stack inside your own VPC.",
          fa: "استک سازگار با Sentry داخل VPC اختصاصی شما.",
        },
        pros: [
          { en: "Full data control and privacy", fa: "کنترل کامل داده و حریم خصوصی" },
          { en: "No per-event pricing", fa: "بدون قیمت‌گذاری بر رویداد" },
        ],
        cons: [
          { en: "You own upgrades and scaling", fa: "ارتقا و مقیاس‌پذیری با شماست" },
          { en: "Slower to get new features", fa: "دسترسی دیرتر به ویژگی‌های تازه" },
        ],
      },
      {
        name: "Logs-First (Grafana)",
        description: {
          en: "Structured logs queried and alerted via Grafana/ELK.",
          fa: "لاگ‌های ساختاریافته با کوئری و هشدار از طریق Grafana/ELK.",
        },
        pros: [
          { en: "Logging infrastructure already exists", fa: "زیرساخت لاگ از قبل موجود" },
          { en: "Flexible queries across all events", fa: "کوئری انعطاف‌پذیر روی همه رویدادها" },
        ],
        cons: [
          { en: "Weaker exception grouping UX", fa: "گروه‌بندی خطا ضعیف‌تر است" },
          { en: "Noisy until queries are tuned", fa: "تا تنظیم کوئری پرسر‌وصدا است" },
        ],
      },
    ],
    recommendation: {
      en: "Adopt a dedicated tracker like Sentry early, wire it to alerts with clear ownership, and review top error groups weekly; self-host only for strict compliance.",
      fa: "از اوایل کار یک ردیاب اختصاصی مثل Sentry راه بیندازید، آن را با مالکیت شفاف به هشدارها گره بزنید و هر هفته گروه‌های اصلی خطا را مرور کنید؛ self-host را فقط برای انطباق سخت‌گیرانه انتخاب کنید.",
    },
  },
  {
    slug: "oncall-policy",
    title: { en: "On-Call Policy", fa: "سیاست آنکال" },
    category: "process",
    description: {
      en: "Who responds when production breaks outside working hours — and how the burden is shared.",
      fa: "وقتی production خارج از ساعات کاری از کار می‌افتد چه کسی پاسخگوست — و بار آن چگونه تقسیم می‌شود.",
    },
    stage: "monitoring",
    options: [
      {
        name: "Primary / Secondary",
        description: {
          en: "Weekly primary engineer with a backup escalation layer.",
          fa: "مهندس primary هفتگی با پشتیبان و زنجیره escalation.",
        },
        pros: [
          { en: "Clear ownership during incidents", fa: "مالکیت شفاف در حوادث" },
          { en: "Escalation path prevents burnout", fa: "زنجیره escalation از فرسودگی می‌کاهد" },
        ],
        cons: [
          { en: "Nights and weekends get interrupted", fa: "شب‌ها و آخر هفته‌ها مختل می‌شود" },
          { en: "Needs pay or comp-time policy", fa: "نیازمند سیاست جبران یا مرخصی" },
        ],
      },
      {
        name: "Business-Hours Only",
        description: {
          en: "Alerts handled during work hours; automation covers the rest.",
          fa: "هشدارها در ساعات کاری رسیدگی و بقیه با اتوماسیون پوشش داده می‌شود.",
        },
        pros: [
          { en: "Sustainable for early-stage teams", fa: "پایدار برای تیم‌های تازه‌کار" },
          { en: "Forces resilient automation early", fa: "اتوماسیون تاب‌آور را زود تحمیل می‌کند" },
        ],
        cons: [
          { en: "Overnight incidents stay uncovered", fa: "حوادث شبانه بی‌پاسخ می‌مانند" },
          { en: "Not viable for strict SLAs", fa: "برای SLAهای سخت مناسب نیست" },
        ],
      },
      {
        name: "Follow-the-Sun",
        description: {
          en: "Rotation hands off across global time zones.",
          fa: "شیفت‌ها میان مناطق زمانی جهانی دست‌به‌دست می‌شوند.",
        },
        pros: [
          { en: "No team is always awake", fa: "هیچ تیمی همیشه بیدار نمی‌ماند" },
          { en: "Faster 24-hour response", fa: "پاسخ سریع‌تر در شبانه‌روز" },
        ],
        cons: [
          { en: "Needs distributed teams and handoffs", fa: "نیازمند تیم‌های پراکنده و تحویل شیفت" },
          { en: "Context loss between shifts", fa: "افت زمینه بین شیفت‌ها" },
        ],
      },
    ],
    recommendation: {
      en: "Early teams should run business-hours alerting with solid auto-remediation; adopt primary/secondary rotations once real SLAs exist — and compensate for on-call burden.",
      fa: "تیم‌های نوپا با هشدار در ساعات کاری و خودترمیمی مطمئن شروع کنند؛ وقتی SLA واقعی شکل گرفت، شیفت primary/secondary بگذارید — و برای بار آنکال جبران در نظر بگیرید.",
    },
  },
  {
    slug: "code-review-policy",
    title: { en: "Code Review Policy", fa: "سیاست بازبینی کد" },
    category: "process",
    description: {
      en: "The review gate every change passes: human approvals, pairing, or automation-first.",
      fa: "دروازه بازبینی‌ای که هر تغییر از آن می‌گذرد: تأیید انسانی، pair programming یا اتوماسیون‌محور.",
    },
    stage: "improvement",
    options: [
      {
        name: "Single-Approval PR",
        description: {
          en: "Every change needs one human approval before merge.",
          fa: "هر تغییر پیش از merge یک تأیید انسانی می‌گیرد.",
        },
        pros: [
          { en: "Catches issues, spreads knowledge", fa: "کشف خطا و انتقال دانش" },
          { en: "Cheap quality gate for every change", fa: "دروازه کیفیت ارزان برای هر تغییر" },
        ],
        cons: [
          { en: "Review latency blocks delivery", fa: "تأخیر ریویو تحویل را می‌بندد" },
          { en: "Rubber-stamping under deadline pressure", fa: "تأیید شتاب‌زده زیر فشار ددلاین" },
        ],
      },
      {
        name: "Pair Programming",
        description: {
          en: "Code written jointly; review happens live.",
          fa: "کد به‌صورت مشترک نوشته می‌شود و ریویو همان‌جا انجام می‌گیرد.",
        },
        pros: [
          { en: "Instant feedback, deep context", fa: "بازخورد فوری و زمینه عمیق" },
          { en: "Strong knowledge sharing", fa: "اشتراک دانش قوی" },
        ],
        cons: [
          { en: "Costly for small teams", fa: "برای تیم‌های کوچک پرهزینه" },
          { en: "Scheduling overhead across time zones", fa: "سربار زمان‌بندی بین مناطق زمانی" },
        ],
      },
      {
        name: "Automated-First",
        description: {
          en: "CI, linters, and AI review replace most human review.",
          fa: "CI، لینتر و بازبینی AI جایگزین بیشتر ریویوی انسانی می‌شود.",
        },
        pros: [
          { en: "Fastest path to merge", fa: "سریع‌ترین مسیر تا merge" },
          { en: "Consistent style and safety checks", fa: "بررسی یکنواخت سبک و ایمنی" },
        ],
        cons: [
          { en: "Misses design-level flaws", fa: "نقص‌های سطح طراحی را نمی‌بیند" },
          { en: "Trust must build over time", fa: "اعتماد باید تدریجی ساخته شود" },
        ],
      },
    ],
    recommendation: {
      en: "Require one human approval for risky areas and rely on automation for the rest; use pairing for onboarding and complex design, and keep PRs small so reviews stay fast.",
      fa: "برای حوزه‌های پرریسک یک تأیید انسانی بخواهید و بقیه را به اتوماسیون بسپارید؛ برای onboarding و طراحی‌های پیچیده از pair programming استفاده کنید و PRها را کوچک نگه دارید تا ریویو سریع بماند.",
    },
  },
];

export const decisionBySlug = (slug: string): Decision | undefined =>
  DECISIONS.find((d) => d.slug === slug);
