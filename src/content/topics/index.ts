import type { Topic } from "@/types";

/**
 * 60 topics across 5 categories (frontend 12, backend 12, devops 12,
 * testing 12, others 12). Populated by content pipeline.
 */
export const TOPICS: Topic[] = [
  // ─── Frontend (12) ───────────────────────────────────────────────────────
  {
    slug: "react",
    title: { en: "React", fa: "ری‌اکت" },
    category: "frontend",
    description: {
      en: "A component-based JavaScript library for building declarative, interactive user interfaces at scale.",
      fa: "کتابخانه جاوااسکریپت کامپوننت‌محور برای ساخت رابط‌های کاربری اعلانی و تعاملی در مقیاس بزرگ.",
    },
    stage: "frontend",
    articles: 10,
  },
  {
    slug: "typescript",
    title: { en: "TypeScript", fa: "تایپ‌اسکریپت" },
    category: "frontend",
    description: {
      en: "JavaScript with a static type system that catches bugs early and keeps big codebases maintainable.",
      fa: "جاوااسکریپت با تایپ استاتیک که باگ‌ها را زود می‌گیرد و کدبیس بزرگ را قابل‌نگهداری می‌کند.",
    },
    stage: "frontend",
    articles: 9,
  },
  {
    slug: "component-design",
    title: { en: "Component Design", fa: "طراحی کامپوننت" },
    category: "frontend",
    description: {
      en: "Principles for designing reusable, composable components with clear props and responsibilities.",
      fa: "اصل‌هایی برای طراحی کامپوننت‌های قابل‌استفاده‌مجدد و ترکیب‌پذیر با props شفاف و مسئولیت مشخص.",
    },
    stage: "frontend",
    articles: 8,
  },
  {
    slug: "state-management",
    title: { en: "State Management", fa: "مدیریت State" },
    category: "frontend",
    description: {
      en: "Organizing client, server and URL state so data flows predictably through the application.",
      fa: "سازمان‌دهی state سمت کلاینت، سرور و URL تا جریان داده در اپلیکیشن قابل‌پیش‌بینی باشد.",
    },
    stage: "frontend",
    articles: 11,
  },
  {
    slug: "css-architecture",
    title: { en: "CSS Architecture", fa: "معماری CSS" },
    category: "frontend",
    description: {
      en: "Structuring styles with modern approaches like utility classes, CSS Modules and design tokens.",
      fa: "ساختاردهی استایل‌ها با رویکردهای مدرن مثل کلاس‌های utility، CSS Modules و توکن‌های طراحی.",
    },
    stage: "frontend",
    articles: 7,
  },
  {
    slug: "accessibility",
    title: { en: "Accessibility (a11y)", fa: "دسترس‌پذیری" },
    category: "frontend",
    description: {
      en: "Building interfaces everyone can use, following WCAG, semantic HTML and keyboard-first thinking.",
      fa: "ساخت رابط‌هایی که همه بتوانند استفاده کنند، با رعایت WCAG، HTML معنایی و تفکر کیبورد-محور.",
    },
    stage: "frontend",
    articles: 8,
  },
  {
    slug: "forms-validation",
    title: { en: "Forms & Validation", fa: "فرم‌ها و اعتبارسنجی" },
    category: "frontend",
    description: {
      en: "Building accessible, resilient forms with client and server validation and good error UX.",
      fa: "ساخت فرم‌های دسترس‌پذیر و مقاوم با اعتبارسنجی سمت کلاینت و سرور و تجربه خطای خوب.",
    },
    stage: "frontend",
    articles: 7,
  },
  {
    slug: "web-performance",
    title: { en: "Web Performance", fa: "کارایی وب" },
    category: "frontend",
    description: {
      en: "Measuring and improving Core Web Vitals like loading speed, interactivity and visual stability.",
      fa: "سنجش و بهبود Core Web Vitals مثل سرعت بارگذاری، تعامل‌پذیری و پایداری بصری.",
    },
    stage: "frontend",
    articles: 10,
  },
  {
    slug: "design-systems",
    title: { en: "Design Systems", fa: "سیستم‌های طراحی" },
    category: "frontend",
    description: {
      en: "Shared libraries of components, tokens and guidelines that keep UI consistent across products.",
      fa: "کتابخانه‌های مشترک کامپوننت، توکن و راهنما که UI را در همه محصولات یکدست نگه می‌دارند.",
    },
    stage: "frontend",
    articles: 8,
  },
  {
    slug: "pwa",
    title: { en: "Progressive Web Apps", fa: "اپ‌های وب پیش‌رونده (PWA)" },
    category: "frontend",
    description: {
      en: "Installable web apps with offline support, service workers and native-like experiences.",
      fa: "اپ‌های وب قابل‌نصب با پشتیبانی آفلاین، سرویس‌ورکرها و تجربه‌ای شبیه اپ‌های نیتیو.",
    },
    stage: "frontend",
    articles: 6,
  },
  {
    slug: "internationalization",
    title: { en: "Internationalization (i18n)", fa: "بین‌المللی‌سازی (i18n)" },
    category: "frontend",
    description: {
      en: "Preparing apps for multiple languages, RTL layouts, locales and culturally correct formats.",
      fa: "آماده‌سازی اپ برای زبان‌های چندگانه، چیدمان RTL، لوکال‌ها و قالب‌های درست فرهنگی.",
    },
    stage: "frontend",
    articles: 6,
  },
  {
    slug: "motion-design",
    title: { en: "Motion Design", fa: "طراحی حرکت" },
    category: "frontend",
    description: {
      en: "Purposeful animation and transitions that guide attention and improve perceived performance.",
      fa: "انیمیشن و ترنزیشن هدفمند که توجه را هدایت و کارایی احساس‌شده را بهتر می‌کند.",
    },
    stage: "frontend",
    articles: 6,
  },

  // ─── Backend (12) ────────────────────────────────────────────────────────
  {
    slug: "rest-api",
    title: { en: "REST API Design", fa: "طراحی REST API" },
    category: "backend",
    description: {
      en: "Designing predictable, resource-oriented HTTP APIs with proper verbs, status codes and versioning.",
      fa: "طراحی APIهای HTTP منبع‌محور و قابل‌پیش‌بینی با فعل‌ها، کدهای وضعیت و نسخه‌بندی درست.",
    },
    stage: "backend",
    articles: 11,
  },
  {
    slug: "graphql",
    title: { en: "GraphQL", fa: "GraphQL" },
    category: "backend",
    description: {
      en: "A query language for APIs that lets clients request exactly the data they need.",
      fa: "زبان کوئری برای APIها که به کلاینت اجازه می‌دهد دقیقاً داده‌ای را که نیاز دارد بگیرد.",
    },
    stage: "backend",
    articles: 9,
  },
  {
    slug: "authentication",
    title: { en: "Authentication", fa: "احراز هویت" },
    category: "backend",
    description: {
      en: "Verifying user identity with sessions, JWT, OAuth and MFA while keeping credentials safe.",
      fa: "تأیید هویت کاربر با session، JWT، OAuth و MFA، همراه با امن نگه‌داشتن اطلاعات ورود.",
    },
    stage: "backend",
    articles: 10,
  },
  {
    slug: "authorization",
    title: { en: "Authorization", fa: "مجوزدهی" },
    category: "backend",
    description: {
      en: "Controlling what authenticated users may do with RBAC, ABAC and resource-level permissions.",
      fa: "کنترل اینکه کاربر احراز هویت‌شده چه کارهایی می‌تواند بکند، با RBAC و دسترسی‌های سطح منبع.",
    },
    stage: "backend",
    articles: 8,
  },
  {
    slug: "caching",
    title: { en: "Caching", fa: "کش" },
    category: "backend",
    description: {
      en: "Storing computed results in fast layers to cut latency and database load.",
      fa: "ذخیره نتایج محاسبه‌شده در لایه‌های سریع برای کاهش تأخیر و بار پایگاه داده.",
    },
    stage: "backend",
    articles: 9,
  },
  {
    slug: "message-queues",
    title: { en: "Message Queues", fa: "صف‌های پیام" },
    category: "backend",
    description: {
      en: "Decoupling services with async messaging via Kafka, RabbitMQ or cloud queues for reliability.",
      fa: "جداکردن سرویس‌ها با پیام‌رسانی ناهمگام از طریق Kafka یا RabbitMQ برای قابلیت اطمینان.",
    },
    stage: "backend",
    articles: 8,
  },
  {
    slug: "nodejs",
    title: { en: "Node.js", fa: "Node.js" },
    category: "backend",
    description: {
      en: "The JavaScript runtime powering event-driven, non-blocking backend services and tooling.",
      fa: "ران‌تایم جاوااسکریپت که سرویس‌های بک‌اند رویدادمحور و غیرمسدودشونده را قدرت می‌بخشد.",
    },
    stage: "backend",
    articles: 9,
  },
  {
    slug: "logging-backend",
    title: { en: "Backend Logging", fa: "لاگ‌گیری بک‌اند" },
    category: "backend",
    description: {
      en: "Structured, leveled logging with correlation IDs so production issues can be traced fast.",
      fa: "لاگ ساختاریافته و سطح‌بندی‌شده با correlation ID تا مشکلات پروداکشن سریع ردیابی شوند.",
    },
    stage: "monitoring",
    articles: 7,
  },
  {
    slug: "rest-vs-graphql-topic",
    title: { en: "REST vs GraphQL", fa: "REST در مقابل GraphQL" },
    category: "backend",
    description: {
      en: "Choosing between REST and GraphQL by weighing flexibility, caching, tooling and team familiarity.",
      fa: "انتخاب میان REST و GraphQL با سنجش انعطاف، کش، ابزارها و آشنایی تیم.",
    },
    stage: "architecture",
    articles: 7,
  },
  {
    slug: "microservices",
    title: { en: "Microservices", fa: "میکروسرویس‌ها" },
    category: "backend",
    description: {
      en: "Splitting a system into small, independently deployable services with clear ownership boundaries.",
      fa: "تقسیم سیستم به سرویس‌های کوچک و مستقل که جداگانه دیپلوی می‌شوند و مرز مالکیت شفاف دارند.",
    },
    stage: "architecture",
    articles: 10,
  },
  {
    slug: "rate-limiting",
    title: { en: "Rate Limiting", fa: "محدودسازی نرخ" },
    category: "backend",
    description: {
      en: "Protecting APIs from abuse and overload by throttling requests per client and endpoint.",
      fa: "محافظت از APIها در برابر سوءاستفاده و فشار، با محدودکردن درخواست‌ها به‌ازای هر کلاینت.",
    },
    stage: "backend",
    articles: 6,
  },
  {
    slug: "websockets",
    title: { en: "WebSockets", fa: "وب‌سوکت‌ها" },
    category: "backend",
    description: {
      en: "Real-time, full-duplex communication between client and server for chat, feeds and live updates.",
      fa: "ارتباط بلادرنگ و دوطرفه بین کلاینت و سرور برای چت، فید و به‌روزرسانی‌های زنده.",
    },
    stage: "backend",
    articles: 7,
  },

  // ─── DevOps (12) ─────────────────────────────────────────────────────────
  {
    slug: "ci-cd",
    title: { en: "CI/CD", fa: "یکپارچه‌سازی و تحویل مستمر" },
    category: "devops",
    description: {
      en: "Automated pipelines that build, test and deliver every change safely and repeatedly.",
      fa: "پایپ‌لاین‌های خودکاری که هر تغییر را ایمن و تکرارپذیر بیلد، تست و تحویل می‌دهند.",
    },
    stage: "cicd",
    articles: 11,
  },
  {
    slug: "containerization",
    title: { en: "Containerization", fa: "کانتینری‌سازی" },
    category: "devops",
    description: {
      en: "Packaging apps with their dependencies into portable containers using Docker and OCI images.",
      fa: "بسته‌بندی اپ‌ها به‌همراه وابستگی‌ها در کانتینرهای قابل‌حمل با Docker و ایمیج‌های OCI.",
    },
    stage: "cicd",
    articles: 9,
  },
  {
    slug: "gitops",
    title: { en: "GitOps", fa: "GitOps" },
    category: "devops",
    description: {
      en: "Managing infrastructure and deployments declaratively with Git as the single source of truth.",
      fa: "مدیریت اعلانی زیرساخت و دیپلای‌ها با Git به‌عنوان تنها منبع حقیقت.",
    },
    stage: "cicd",
    articles: 7,
  },
  {
    slug: "orchestration",
    title: { en: "Container Orchestration", fa: "ارکستراسیون کانتینر" },
    category: "devops",
    description: {
      en: "Scheduling and scaling containers across clusters with Kubernetes for resilience and automation.",
      fa: "زمان‌بندی و مقیاس‌دهی کانتینرها روی کلاسترها با Kubernetes برای تاب‌آوری و خودکارسازی.",
    },
    stage: "deployment",
    articles: 10,
  },
  {
    slug: "iac",
    title: { en: "Infrastructure as Code", fa: "زیرساخت به‌عنوان کد (IaC)" },
    category: "devops",
    description: {
      en: "Provisioning infrastructure through versioned code with Terraform or Pulumi instead of manual steps.",
      fa: "فراهم‌کردن زیرساخت با کد نسخه‌دار مثل Terraform به‌جای مراحل دستی.",
    },
    stage: "deployment",
    articles: 8,
  },
  {
    slug: "cloud-services",
    title: { en: "Cloud Services", fa: "سرویس‌های ابری" },
    category: "devops",
    description: {
      en: "Leveraging managed compute, storage and networking from AWS, GCP or Azure wisely.",
      fa: "استفاده هوشمندانه از سرویس‌های مدیریتی محاسبه، ذخیره‌سازی و شبکه در AWS، GCP یا Azure.",
    },
    stage: "deployment",
    articles: 9,
  },
  {
    slug: "blue-green-deployment",
    title: { en: "Blue-Green Deployment", fa: "استقرار آبی-سبز" },
    category: "devops",
    description: {
      en: "Running two identical environments and switching traffic instantly for zero-downtime releases.",
      fa: "اجرای دو محیط یکسان و سوییچ لحظه‌ای ترافیک برای انتشار بدون قطعی سرویس.",
    },
    stage: "deployment",
    articles: 6,
  },
  {
    slug: "canary-release",
    title: { en: "Canary Release", fa: "انتشار قناری" },
    category: "devops",
    description: {
      en: "Shipping new versions to a small slice of traffic first, watching metrics before full rollout.",
      fa: "عرضه نسخه جدید ابتدا به بخش کوچکی از ترافیک و بررسی متریک‌ها پیش از انتشار کامل.",
    },
    stage: "deployment",
    articles: 7,
  },
  {
    slug: "environment-management",
    title: { en: "Environment Management", fa: "مدیریت محیط‌ها" },
    category: "devops",
    description: {
      en: "Keeping dev, staging and production consistent through configuration, parity and secrets handling.",
      fa: "یکدست‌نگه‌داشتن محیط‌های توسعه، استیجینگ و پروداکشن با پیکربندی و مدیریت امن secrets.",
    },
    stage: "setup",
    articles: 7,
  },
  {
    slug: "infrastructure-monitoring",
    title: { en: "Infrastructure Monitoring", fa: "پایش زیرساخت" },
    category: "devops",
    description: {
      en: "Collecting metrics, logs and traces from servers and networks to spot problems early.",
      fa: "جمع‌آوری متریک، لاگ و trace از سرورها و شبکه‌ها برای یافتن زودهنگام مشکلات.",
    },
    stage: "monitoring",
    articles: 9,
  },
  {
    slug: "incident-management",
    title: { en: "Incident Management", fa: "مدیریت حوادث" },
    category: "devops",
    description: {
      en: "Responding to outages with clear roles, on-call rotations, runbooks and blameless postmortems.",
      fa: "پاسخ به قطعی‌ها با نقش‌های شفاف، شیفت آن‌کال، ران‌بوک و پس‌مرتوم بدون سرزنش.",
    },
    stage: "monitoring",
    articles: 8,
  },
  {
    slug: "version-control-strategy",
    title: { en: "Version Control Strategy", fa: "استراتژی کنترل نسخه" },
    category: "devops",
    description: {
      en: "Branching models, commit conventions and review flows that keep collaboration clean as teams grow.",
      fa: "مدل‌های برنچینگ، قواعد کامیت و جریان ریویو که همکاری تیمی را تمیز و منظم نگه می‌دارند.",
    },
    stage: "setup",
    articles: 8,
  },

  // ─── Testing (12) ────────────────────────────────────────────────────────
  {
    slug: "unit-testing",
    title: { en: "Unit Testing", fa: "تست یونیت" },
    category: "testing",
    description: {
      en: "Testing small pieces of logic in isolation so regressions surface within seconds.",
      fa: "تست قطعه‌های کوچک منطق به‌صورت مجزا تا رگرسیون‌ها ظرف چند ثانیه آشکار شوند.",
    },
    stage: "testing",
    articles: 10,
  },
  {
    slug: "integration-testing",
    title: { en: "Integration Testing", fa: "تست یکپارچه" },
    category: "testing",
    description: {
      en: "Verifying that modules, databases and services work together correctly at their boundaries.",
      fa: "صحه‌گذاری بر همکاری درست ماژول‌ها، پایگاه داده و سرویس‌ها در مرزهایشان.",
    },
    stage: "testing",
    articles: 8,
  },
  {
    slug: "e2e-testing",
    title: { en: "End-to-End Testing", fa: "تست انتها-به-انتها" },
    category: "testing",
    description: {
      en: "Automating real user journeys in a browser to catch issues no lower test level can.",
      fa: "خودکارسازی مسیرهای واقعی کاربر در مرورگر برای یافتن مشکلاتی که لایه‌های پایین‌تر نمی‌بینند.",
    },
    stage: "testing",
    articles: 8,
  },
  {
    slug: "tdd",
    title: { en: "Test-Driven Development", fa: "توسعه آزمون‌محور (TDD)" },
    category: "testing",
    description: {
      en: "Writing the failing test first, then the code, then refactoring with confidence.",
      fa: "نخست نوشتن تست شکست‌خورده، سپس کد و بعد ریفکتور با خیال راحت.",
    },
    stage: "testing",
    articles: 7,
  },
  {
    slug: "test-pyramids",
    title: { en: "Test Pyramid", fa: "هرم تست" },
    category: "testing",
    description: {
      en: "Balancing unit, integration and end-to-end tests for fast, reliable and affordable coverage.",
      fa: "توازن میان تست یونیت، یکپارچه و E2E برای پوششی سریع، مطمئن و به‌صرفه.",
    },
    stage: "testing",
    articles: 6,
  },
  {
    slug: "mocking",
    title: { en: "Mocking & Test Doubles", fa: "ماکینگ و جایگزین‌های تست" },
    category: "testing",
    description: {
      en: "Replacing dependencies with fakes and stubs to isolate the code under test.",
      fa: "جایگزین‌کردن وابستگی‌ها با فیک و استاب برای منزوی‌کردن کدِ تحت تست.",
    },
    stage: "testing",
    articles: 7,
  },
  {
    slug: "test-coverage",
    title: { en: "Test Coverage", fa: "پوشش تست" },
    category: "testing",
    description: {
      en: "Measuring how much code tests exercise, and using the number as a signal, not a goal.",
      fa: "سنجش میزان کدی که تست‌ها پوشش می‌دهند و استفاده از آن به‌عنوان سیگنال، نه هدف.",
    },
    stage: "testing",
    articles: 6,
  },
  {
    slug: "performance-testing",
    title: { en: "Performance Testing", fa: "تست کارایی" },
    category: "testing",
    description: {
      en: "Load, stress and soak testing to know your limits before your users find them.",
      fa: "تست بار، فشار و ماندگاری برای شناخت محدودیت‌ها پیش از آنکه کاربران آن‌ها را کشف کنند.",
    },
    stage: "testing",
    articles: 7,
  },
  {
    slug: "security-testing",
    title: { en: "Security Testing", fa: "تست امنیتی" },
    category: "testing",
    description: {
      en: "Hunting vulnerabilities with SAST, DAST, dependency audits and penetration testing.",
      fa: "شکار آسیب‌پذیری‌ها با SAST، DAST، ممیزی وابستگی‌ها و تست نفوذ.",
    },
    stage: "testing",
    articles: 7,
  },
  {
    slug: "contract-testing",
    title: { en: "Contract Testing", fa: "تست قرارداد" },
    category: "testing",
    description: {
      en: "Verifying provider-consumer API agreements so service integrations never break silently.",
      fa: "صحه‌گذاری بر قرارداد API بین مصرف‌کننده و تولیدکننده تا اتصال سرویس‌ها بی‌سروصدا نشکند.",
    },
    stage: "testing",
    articles: 6,
  },
  {
    slug: "regression-testing",
    title: { en: "Regression Testing", fa: "تست رگرسیون" },
    category: "testing",
    description: {
      en: "Re-running test suites after changes to confirm nothing previously working has broken.",
      fa: "اجرای دوباره سوئیت تست‌ها پس از تغییرها تا مطمئن شوید چیزی از قبل خراب نشده.",
    },
    stage: "testing",
    articles: 6,
  },
  {
    slug: "bdd",
    title: { en: "Behavior-Driven Development", fa: "توسعه رفتارمحور (BDD)" },
    category: "testing",
    description: {
      en: "Writing executable specifications in Given/When/Then language shared by devs and stakeholders.",
      fa: "نوشتن مشخصات اجراپذیر با زبان Given/When/Then که توسعه‌دهنده و ذی‌نفع هر دو بفهمند.",
    },
    stage: "testing",
    articles: 6,
  },

  // ─── Others (12) ─────────────────────────────────────────────────────────
  {
    slug: "agile-methodologies",
    title: { en: "Agile Methodologies", fa: "متدولوژی‌های چابک" },
    category: "others",
    description: {
      en: "Iterative delivery with Scrum and Kanban that embraces change and feedback loops.",
      fa: "تحویل تکرارشونده با اسکرام و کانبان که تغییر و حلقه‌های بازخورد را می‌پذیرد.",
    },
    stage: "discovery",
    articles: 8,
  },
  {
    slug: "documentation",
    title: { en: "Documentation", fa: "مستندسازی" },
    category: "others",
    description: {
      en: "Writing READMEs, ADRs and runbooks that let people act without asking you.",
      fa: "نوشتن README، ADR و ران‌بوکی که دیگران بدون پرسیدن از شما بتوانند کارشان را بکنند.",
    },
    stage: "discovery",
    articles: 8,
  },
  {
    slug: "domain-driven-design",
    title: { en: "Domain-Driven Design", fa: "طراحی دامنه‌محور (DDD)" },
    category: "others",
    description: {
      en: "Modeling software around business concepts, bounded contexts and a shared ubiquitous language.",
      fa: "مدل‌سازی نرم‌افزار بر پایه مفاهیم کسب‌وکار، بافت‌های محدود و زبان مشترک دامنه.",
    },
    stage: "architecture",
    articles: 9,
  },
  {
    slug: "system-design-basics",
    title: { en: "System Design Basics", fa: "مبانی طراحی سیستم" },
    category: "others",
    description: {
      en: "Thinking in components, data flows, trade-offs and bottlenecks before writing any code.",
      fa: "تفکر در کامپوننت‌ها، جریان داده، تریدآف‌ها و گلوگاه‌ها پیش از نوشتن هر خط کد.",
    },
    stage: "architecture",
    articles: 10,
  },
  {
    slug: "clean-architecture",
    title: { en: "Clean Architecture", fa: "معماری تمیز" },
    category: "others",
    description: {
      en: "Isolating business rules from frameworks and details so they stay testable and durable.",
      fa: "جداسازی قواعد کسب‌وکار از فریم‌ورک‌ها و جزئیات تا تست‌پذیر و ماندگار بمانند.",
    },
    stage: "architecture",
    articles: 8,
  },
  {
    slug: "scalability-patterns",
    title: { en: "Scalability Patterns", fa: "الگوهای مقیاس‌پذیری" },
    category: "others",
    description: {
      en: "Horizontal scaling, sharding, load balancing and queueing to grow beyond a single box.",
      fa: "مقیاس افقی، شاردینگ، توزیع بار و صف برای رشد فراتر از یک سرور تنها.",
    },
    stage: "architecture",
    articles: 9,
  },
  {
    slug: "sql-vs-nosql",
    title: { en: "SQL vs NoSQL", fa: "SQL در مقابل NoSQL" },
    category: "others",
    description: {
      en: "Choosing between relational guarantees and flexible schemas based on data shape and access.",
      fa: "انتخاب میان تضمین‌های رابطه‌ای و اسکیمای انعطاف‌پذیر بر اساس شکل داده و نحوه دسترسی.",
    },
    stage: "database",
    articles: 8,
  },
  {
    slug: "database-indexing",
    title: { en: "Database Indexing", fa: "ایندکس‌گذاری پایگاه داده" },
    category: "others",
    description: {
      en: "Designing B-tree and composite indexes so frequent queries stop scanning whole tables.",
      fa: "طراحی ایندکس‌های B-tree و ترکیبی تا کوئری‌های پرتکرار کل جدول را اسکن نکنند.",
    },
    stage: "database",
    articles: 8,
  },
  {
    slug: "acid-transactions",
    title: { en: "ACID Transactions", fa: "تراکنش‌های ACID" },
    category: "others",
    description: {
      en: "Ensuring multi-step operations stay atomic, consistent, isolated and durable under failures.",
      fa: "تضمین اتمیک، سازگار، ایزوله و ماندگار بودن عملیات چندمرحله‌ای در برابر خطا.",
    },
    stage: "database",
    articles: 7,
  },
  {
    slug: "cost-optimization",
    title: { en: "Cost Optimization", fa: "بهینه‌سازی هزینه" },
    category: "others",
    description: {
      en: "Right-sizing infrastructure, trimming waste and tracking spend as the product scales.",
      fa: "تنظیم زیرساخت در اندازه درست، حذف اتلاف و پایش هزینه همگام با رشد محصول.",
    },
    stage: "release",
    articles: 6,
  },
  {
    slug: "technical-debt",
    title: { en: "Technical Debt", fa: "بدهی فنی" },
    category: "others",
    description: {
      en: "Recognizing, measuring and deliberately repaying shortcuts before they compound into crises.",
      fa: "شناسایی، سنجش و بازپرداخت آگاهانه میان‌برها پیش از آنکه به بحران تبدیل شوند.",
    },
    stage: "improvement",
    articles: 8,
  },
  {
    slug: "code-review",
    title: { en: "Code Review", fa: "بازبینی کد" },
    category: "others",
    description: {
      en: "Kind, thorough peer review that spreads knowledge and catches defects before merge.",
      fa: "بازبینی همتای مهربان و دقیق که دانش را پخش و عیب‌ها را پیش از merge می‌گیرد.",
    },
    stage: "improvement",
    articles: 7,
  },
];

export const topicBySlug = (slug: string): Topic | undefined =>
  TOPICS.find((t) => t.slug === slug);
