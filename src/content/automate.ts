import type { L } from "@/lib/i18n";

/* ───────── Automate UAE: AI automation landing page content ───────── */

export type AutoIcon = "agent" | "workflow" | "voice" | "social" | "docs" | "crm";

export const automate = {
  hero: {
    eyebrow: { en: "Automate UAE · AI-first automation · All 7 Emirates", ar: "أتمتة الإمارات · أتمتة بالذكاء الاصطناعي · الإمارات السبع" },
    title1: { en: "Automate UAE.", ar: "أتمتة الإمارات." },
    title2: { en: "The AI-first leap forward", ar: "القفزة نحو المستقبل" },
    title3: { en: "for UAE businesses.", ar: "لشركات الإمارات بالذكاء الاصطناعي." },
    lead: {
      en: "Nexsofture Tech designs, builds and runs AI automation for businesses across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain: autonomous AI agents, workflow automation, Arabic and English voice agents, and WhatsApp and social AI systems that work 24/7 so your team can focus on growth.",
      ar: "تصمم نكسوفتشر تك وتبني وتشغّل حلول الأتمتة بالذكاء الاصطناعي للشركات في دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين: وكلاء ذكاء اصطناعي مستقلون، وأتمتة سير العمل، ووكلاء صوتيون بالعربية والإنجليزية، وأنظمة ذكية لواتساب ووسائل التواصل تعمل على مدار الساعة ليتفرغ فريقك للنمو.",
    },
    cta: { en: "Book a free automation audit", ar: "احجز تقييم أتمتة مجاني" },
    cta2: { en: "See what we automate", ar: "اكتشف ما نؤتمته" },
  },

  vision: {
    eyebrow: { en: "Our vision", ar: "رؤيتنا" },
    title: { en: "The UAE is going AI-first. Your business should too.", ar: "الإمارات تتجه نحو الذكاء الاصطناعي أولاً، وكذلك يجب أن تفعل شركتك." },
    body: {
      en: "With the UAE National Strategy for Artificial Intelligence 2031, the country set out to lead the world in AI adoption. We believe every UAE business, from a Sharjah trading company to a Dubai scale-up, deserves the same leap. Automation is not about replacing people. It gives every employee a tireless digital workforce that handles the repetitive work in minutes, around the clock, in Arabic and English.",
      ar: "مع الاستراتيجية الوطنية للذكاء الاصطناعي 2031، وضعت الدولة هدف الريادة العالمية في تبني الذكاء الاصطناعي. ونؤمن بأن كل شركة إماراتية، من شركة تجارية في الشارقة إلى شركة ناشئة سريعة النمو في دبي، تستحق القفزة نفسها. الأتمتة لا تعني استبدال الناس، بل تمنح كل موظف قوة عمل رقمية لا تتعب، تنجز الأعمال المتكررة في دقائق وعلى مدار الساعة بالعربية والإنجليزية.",
    },
    pillars: [
      { t: { en: "Always on", ar: "يعمل دائماً" }, d: { en: "24/7/365, including weekends and Eid.", ar: "على مدار الساعة طوال العام، حتى في العطلات والأعياد." } },
      { t: { en: "Bilingual", ar: "ثنائي اللغة" }, d: { en: "Native Arabic and English, built in.", ar: "العربية والإنجليزية بشكل أصيل." } },
      { t: { en: "Human-in-the-loop", ar: "الإنسان في الحلقة" }, d: { en: "Your team approves what matters.", ar: "فريقك يعتمد ما يهم." } },
      { t: { en: "Secure by design", ar: "آمن بالتصميم" }, d: { en: "Least-privilege access, audit logs and PDPL-aware data handling.", ar: "صلاحيات محدودة وسجلات تدقيق ومعالجة بيانات متوافقة مع قانون حماية البيانات." } },
    ],
  },

  systems: {
    eyebrow: { en: "AI systems we build", ar: "أنظمة الذكاء الاصطناعي التي نبنيها" },
    title: { en: "Six systems. One automated business.", ar: "ستة أنظمة. شركة واحدة مؤتمتة." },
    items: [
      {
        icon: "agent" as AutoIcon,
        t: { en: "Autonomous AI agents", ar: "وكلاء ذكاء اصطناعي مستقلون" },
        d: {
          en: "Give an agent a goal, not a checklist. It researches, decides, uses your tools and reports back, handling internal ops or customer tasks without micromanagement.",
          ar: "امنح الوكيل هدفاً لا قائمة مهام. يبحث ويقرر ويستخدم أدواتك ويرفع التقرير، ويتولى العمليات الداخلية أو مهام العملاء دون إشراف دقيق.",
        },
        ex: { en: "e.g. an agent that qualifies every new lead, enriches it and books the meeting", ar: "مثال: وكيل يؤهل كل عميل محتمل جديد ويثري بياناته ويحجز الاجتماع" },
      },
      {
        icon: "workflow" as AutoIcon,
        t: { en: "Workflow automation", ar: "أتمتة سير العمل" },
        d: {
          en: "Trigger-based and scheduled automations that move data between your apps, generate reports, send invoices and onboard clients, done before Monday morning.",
          ar: "أتمتة مجدولة أو مرتبطة بأحداث تنقل البيانات بين تطبيقاتك وتُعد التقارير وترسل الفواتير وتستقبل العملاء الجدد، وكل ذلك قبل صباح الاثنين.",
        },
        ex: { en: "e.g. daily sales report from Shopify + Zoho to WhatsApp at 8 am", ar: "مثال: تقرير مبيعات يومي من Shopify وZoho إلى واتساب الساعة 8 صباحاً" },
      },
      {
        icon: "voice" as AutoIcon,
        t: { en: "AI voice agents", ar: "وكلاء صوتيون بالذكاء الاصطناعي" },
        d: {
          en: "Inbound and outbound AI callers that answer, qualify, remind and follow up in Arabic and English, powered by our ChatCart Pro voice engine.",
          ar: "متصلون آليون للمكالمات الواردة والصادرة يجيبون ويؤهلون ويذكّرون ويتابعون بالعربية والإنجليزية، بمحرك تشات كارت برو الصوتي.",
        },
        ex: { en: "e.g. clinic appointment reminders that cut no-shows", ar: "مثال: تذكير بمواعيد العيادة يقلل حالات عدم الحضور" },
      },
      {
        icon: "social" as AutoIcon,
        t: { en: "WhatsApp & social AI", ar: "ذكاء واتساب ووسائل التواصل" },
        d: {
          en: "AI that writes and schedules content, replies to comments and DMs, and turns conversations on WhatsApp, Instagram and TikTok into leads and orders.",
          ar: "ذكاء يكتب المحتوى ويجدوله، ويرد على التعليقات والرسائل، ويحوّل المحادثات على واتساب وإنستغرام وتيك توك إلى عملاء وطلبات.",
        },
        ex: { en: "e.g. Instagram DM → product suggestion → payment link in 30 seconds", ar: "مثال: رسالة إنستغرام ← اقتراح منتج ← رابط دفع خلال 30 ثانية" },
      },
      {
        icon: "docs" as AutoIcon,
        t: { en: "Document & finance automation", ar: "أتمتة المستندات والمالية" },
        d: {
          en: "Read invoices, receipts, Emirates IDs, trade licences and POs with AI, extract the data and push it into your accounting or ERP with approvals.",
          ar: "قراءة الفواتير والإيصالات والهويات الإماراتية والرخص التجارية وأوامر الشراء بالذكاء الاصطناعي، واستخراج البيانات وإدخالها في نظام المحاسبة أو ERP مع الموافقات.",
        },
        ex: { en: "e.g. supplier invoices auto-entered into Zoho Books / Odoo", ar: "مثال: إدخال فواتير الموردين تلقائياً في Zoho Books أو Odoo" },
      },
      {
        icon: "crm" as AutoIcon,
        t: { en: "CRM & sales automation", ar: "أتمتة المبيعات وإدارة العملاء" },
        d: {
          en: "Capture leads from every channel, score them with AI, auto-assign, follow up and forecast, built on ChatCart CRM or your existing HubSpot, Zoho or Salesforce.",
          ar: "اجمع العملاء من كل القنوات وقيّمهم بالذكاء الاصطناعي ووزّعهم وتابعهم وتوقّع المبيعات، على تشات كارت CRM أو أنظمتك الحالية HubSpot أو Zoho أو Salesforce.",
        },
        ex: { en: "e.g. no lead waits more than 60 seconds for a reply", ar: "مثال: لا ينتظر أي عميل أكثر من 60 ثانية للحصول على رد" },
      },
    ],
  },

  departments: {
    eyebrow: { en: "Use cases", ar: "حالات الاستخدام" },
    title: { en: "What gets automated, department by department.", ar: "ما الذي نؤتمته، قسماً بقسم." },
    items: [
      { t: { en: "Sales", ar: "المبيعات" }, before: { en: "Leads wait hours for a reply", ar: "العملاء ينتظرون ساعات للرد" }, after: { en: "AI replies instantly, qualifies and books", ar: "الذكاء يرد فوراً ويؤهل ويحجز" } },
      { t: { en: "Customer service", ar: "خدمة العملاء" }, before: { en: "Same 20 questions every day", ar: "الأسئلة العشرون نفسها كل يوم" }, after: { en: "AI resolves them 24/7, escalates the rest", ar: "الذكاء يجيب على مدار الساعة ويحيل الباقي" } },
      { t: { en: "Finance", ar: "المالية" }, before: { en: "Manual invoice entry & chasing", ar: "إدخال الفواتير ومتابعتها يدوياً" }, after: { en: "Auto-extraction, reminders, reconciliation", ar: "استخراج تلقائي وتذكيرات ومطابقة" } },
      { t: { en: "HR", ar: "الموارد البشرية" }, before: { en: "CV screening & onboarding paperwork", ar: "فرز السير الذاتية وأوراق التعيين" }, after: { en: "AI shortlists, onboarding runs itself", ar: "الذكاء يرشح والتعيين يسير تلقائياً" } },
      { t: { en: "Operations", ar: "العمليات" }, before: { en: "Copy-paste between systems", ar: "نسخ ولصق بين الأنظمة" }, after: { en: "Connected apps, live dashboards", ar: "تطبيقات متصلة ولوحات حية" } },
      { t: { en: "Marketing", ar: "التسويق" }, before: { en: "Posting & reporting by hand", ar: "النشر والتقارير يدوياً" }, after: { en: "AI content engine & auto-reports", ar: "محرك محتوى ذكي وتقارير تلقائية" } },
    ],
  },

  models: {
    eyebrow: { en: "Ways to work with us", ar: "طرق العمل معنا" },
    title: { en: "Pick the path that fits.", ar: "اختر المسار المناسب." },
    items: [
      { t: { en: "Automation audit", ar: "تقييم الأتمتة" }, d: { en: "A free session to map your processes and find the quickest wins and ROI.", ar: "جلسة مجانية لرسم عملياتك واكتشاف أسرع المكاسب والعائد." } },
      { t: { en: "Done-for-you systems", ar: "أنظمة جاهزة لك" }, d: { en: "We design, build, test and hand over production-ready AI systems.", ar: "نصمم ونبني ونختبر ونسلّم أنظمة ذكاء اصطناعي جاهزة للإنتاج." } },
      { t: { en: "AI ops retainer", ar: "تشغيل ذكي مستمر" }, d: { en: "We monitor, improve and add new automations every month.", ar: "نراقب ونحسّن ونضيف أتمتة جديدة كل شهر." } },
      { t: { en: "AI training & workshops", ar: "تدريب وورش الذكاء الاصطناعي" }, d: { en: "Upskill your team to use and own AI tools confidently.", ar: "طوّر مهارات فريقك لاستخدام أدوات الذكاء الاصطناعي بثقة." } },
    ],
  },

  process: {
    eyebrow: { en: "Your journey", ar: "رحلتك معنا" },
    title: { en: "From manual to autonomous in five steps.", ar: "من اليدوي إلى المستقل في خمس خطوات." },
    steps: [
      { t: { en: "Audit", ar: "التقييم" }, d: { en: "We map your workflows and spot where hours are lost.", ar: "نرسم سير عملك ونحدد أين تضيع الساعات." } },
      { t: { en: "Blueprint", ar: "المخطط" }, d: { en: "A clear plan: systems, tools, timeline and expected ROI.", ar: "خطة واضحة: الأنظمة والأدوات والجدول والعائد المتوقع." } },
      { t: { en: "Build", ar: "البناء" }, d: { en: "We build and rigorously test with your real data.", ar: "نبني ونختبر بدقة باستخدام بياناتك الحقيقية." } },
      { t: { en: "Train & launch", ar: "التدريب والإطلاق" }, d: { en: "Your team is trained; systems go live with monitoring.", ar: "ندرّب فريقك وتنطلق الأنظمة مع المراقبة." } },
      { t: { en: "Optimise", ar: "التحسين" }, d: { en: "Continuous improvement as your business grows.", ar: "تحسين مستمر مع نمو أعمالك." } },
    ],
  },

  integrations: {
    eyebrow: { en: "Integrations", ar: "التكاملات" },
    title: { en: "Works with the tools UAE businesses already use.", ar: "يعمل مع الأدوات التي تستخدمها شركات الإمارات." },
    list: [
      "WhatsApp Business", "Instagram", "TikTok", "Gmail", "Outlook", "Google Workspace", "Microsoft 365", "Zoho", "HubSpot",
      "Salesforce", "Odoo", "Shopify", "WooCommerce", "Stripe", "Telr", "Network International", "Tabby", "Slack", "Notion",
      "Airtable", "n8n", "Make", "Zapier", "OpenAI", "Claude", "Google Sheets", "Calendly", "Twilio",
    ],
  },

  calc: {
    eyebrow: { en: "Savings estimator", ar: "حاسبة التوفير" },
    title: { en: "How much could automation save you?", ar: "كم يمكن أن توفر لك الأتمتة؟" },
    people: { en: "Team members doing repetitive work", ar: "عدد الموظفين الذين يؤدون أعمالاً متكررة" },
    hours: { en: "Hours per person per week on repetitive tasks", ar: "ساعات أسبوعية لكل شخص على المهام المتكررة" },
    cost: { en: "Average hourly cost (AED)", ar: "متوسط تكلفة الساعة (درهم)" },
    hoursSaved: { en: "Hours freed per month", ar: "ساعات توفَّر شهرياً" },
    aedSaved: { en: "Estimated monthly value (AED)", ar: "القيمة الشهرية التقديرية (درهم)" },
    yearly: { en: "per year", ar: "سنوياً" },
    note: {
      en: "Estimate only: assumes 60% of repetitive work can be automated. Your free audit gives a precise figure.",
      ar: "تقدير فقط: يفترض إمكانية أتمتة 60% من العمل المتكرر. يمنحك التقييم المجاني رقماً دقيقاً.",
    },
  },

  emiratesSection: {
    eyebrow: { en: "Across every Emirate", ar: "في كل إمارة" },
    title: { en: "AI automation, wherever you do business.", ar: "أتمتة ذكية أينما كان عملك." },
  },

  faq: [
    {
      q: { en: "What is AI automation for business?", ar: "ما هي الأتمتة بالذكاء الاصطناعي للأعمال؟" },
      a: {
        en: "AI automation uses AI agents, language models and workflow tools to do repetitive business tasks automatically, such as answering customers, qualifying leads, processing invoices and generating reports, so your team spends time on higher-value work.",
        ar: "تستخدم الأتمتة بالذكاء الاصطناعي الوكلاء الأذكياء والنماذج اللغوية وأدوات سير العمل لتنفيذ المهام المتكررة تلقائياً، مثل الرد على العملاء وتأهيل العملاء المحتملين ومعالجة الفواتير وإعداد التقارير، ليتفرغ فريقك للأعمال الأعلى قيمة.",
      },
    },
    {
      q: { en: "Which company provides AI automation in the UAE?", ar: "ما الشركة التي تقدم الأتمتة بالذكاء الاصطناعي في الإمارات؟" },
      a: {
        en: "Nexsofture Tech FZ-LLC provides AI automation across all seven Emirates through its Automate UAE programme, with offices in Dubai and Ras Al Khaimah. It builds AI agents, workflow automation, Arabic/English voice agents and WhatsApp AI systems.",
        ar: "تقدم نكسوفتشر تك (منطقة حرة ذ.م.م) الأتمتة بالذكاء الاصطناعي في الإمارات السبع عبر برنامج «أتمتة الإمارات»، ولها مكاتب في دبي ورأس الخيمة. تبني وكلاء ذكاء اصطناعي وأتمتة سير العمل ووكلاء صوتيين بالعربية والإنجليزية وأنظمة واتساب الذكية.",
      },
    },
    {
      q: { en: "How much does AI automation cost in the UAE?", ar: "كم تكلفة الأتمتة بالذكاء الاصطناعي في الإمارات؟" },
      a: {
        en: "It depends on the number of workflows and integrations. Most projects start with a free audit, then a fixed-price build. Many businesses recover the cost within months through saved hours and faster sales.",
        ar: "يعتمد ذلك على عدد مسارات العمل والتكاملات. تبدأ معظم المشاريع بتقييم مجاني ثم بناء بسعر ثابت، وتسترد شركات كثيرة التكلفة خلال أشهر من خلال الساعات الموفرة والمبيعات الأسرع.",
      },
    },
    {
      q: { en: "Can AI agents work in Arabic?", ar: "هل يمكن لوكلاء الذكاء الاصطناعي العمل بالعربية؟" },
      a: { en: "Yes. Our chat and voice agents understand and respond in Arabic and English, including Gulf dialect conversations.", ar: "نعم. يفهم وكلاء المحادثة والصوت لدينا العربية والإنجليزية ويردون بهما، بما في ذلك المحادثات باللهجة الخليجية." },
    },
    {
      q: { en: "Is my business data safe?", ar: "هل بيانات شركتي آمنة؟" },
      a: {
        en: "Yes. We use least-privilege access, encrypted connections, audit logs and human approval steps, and we design systems with the UAE Personal Data Protection Law (PDPL) in mind.",
        ar: "نعم. نستخدم صلاحيات محدودة واتصالات مشفرة وسجلات تدقيق وخطوات موافقة بشرية، ونصمم الأنظمة مع مراعاة قانون حماية البيانات الشخصية في الإمارات.",
      },
    },
    {
      q: { en: "How long does it take to automate a process?", ar: "كم يستغرق أتمتة عملية ما؟" },
      a: { en: "Simple workflows go live in 1–2 weeks. Multi-system AI agents typically take 3–6 weeks including testing and training.", ar: "تنطلق مسارات العمل البسيطة خلال 1–2 أسبوع، بينما يستغرق وكلاء الذكاء متعددو الأنظمة عادةً 3–6 أسابيع شاملة الاختبار والتدريب." },
    },
  ],

  keywords: [
    "AI automation UAE", "business automation UAE", "automation company Dubai", "AI automation agency Dubai",
    "workflow automation UAE", "AI agents UAE", "RPA UAE", "AI automation Abu Dhabi", "AI automation Sharjah",
    "process automation Ras Al Khaimah", "WhatsApp automation UAE", "AI voice agent UAE",
  ],
};

/* ───────── Emirate-specific pages (local SEO) ───────── */

export type Emirate = {
  slug: string;
  name: L;
  region: string; // ISO 3166-2
  intro: L;
  sectors: L[];
  angle: L;
};

export const emirates: Emirate[] = [
  {
    slug: "dubai",
    name: { en: "Dubai", ar: "دبي" },
    region: "AE-DU",
    intro: {
      en: "Dubai moves fast, and so should your operations. From Business Bay agencies to Deira traders and JLT start-ups, we automate sales, support and back-office work so Dubai teams scale without scaling headcount. Our Dubai office in Al Nahda 2 is minutes from your team.",
      ar: "دبي تتحرك بسرعة، ويجب أن تفعل عملياتك كذلك. من وكالات الخليج التجاري إلى تجار ديرة والشركات الناشئة في أبراج بحيرات الجميرا، نؤتمت المبيعات والدعم والأعمال الإدارية لتنمو فرق دبي دون زيادة عدد الموظفين. مكتبنا في النهدة 2 قريب من فريقك.",
    },
    sectors: [
      { en: "Retail & e-commerce", ar: "التجزئة والتجارة الإلكترونية" },
      { en: "Real estate brokerages", ar: "الوساطة العقارية" },
      { en: "Hospitality & F&B", ar: "الضيافة والمطاعم" },
      { en: "Logistics & free-zone trading", ar: "الخدمات اللوجستية وتجارة المناطق الحرة" },
    ],
    angle: { en: "Built for the pace of Dubai's economic agenda.", ar: "مصمم لمواكبة وتيرة الأجندة الاقتصادية لدبي." },
  },
  {
    slug: "abu-dhabi",
    name: { en: "Abu Dhabi", ar: "أبوظبي" },
    region: "AE-AZ",
    intro: {
      en: "Abu Dhabi businesses work with demanding processes, compliance and enterprise clients. We build secure, auditable AI automation with approvals for document handling, reporting, customer service and procurement workflows.",
      ar: "تتعامل شركات أبوظبي مع عمليات دقيقة ومتطلبات امتثال وعملاء من المؤسسات الكبرى. نبني أتمتة ذكية آمنة وقابلة للتدقيق مع خطوات موافقة لمعالجة المستندات والتقارير وخدمة العملاء والمشتريات.",
    },
    sectors: [
      { en: "Healthcare & clinics", ar: "الرعاية الصحية والعيادات" },
      { en: "Energy & industrial services", ar: "الطاقة والخدمات الصناعية" },
      { en: "Education & training", ar: "التعليم والتدريب" },
      { en: "Professional services", ar: "الخدمات المهنية" },
    ],
    angle: { en: "Enterprise-grade governance with human-in-the-loop control.", ar: "حوكمة بمستوى المؤسسات مع تحكم بشري." },
  },
  {
    slug: "sharjah",
    name: { en: "Sharjah", ar: "الشارقة" },
    region: "AE-SH",
    intro: {
      en: "Sharjah's traders, manufacturers and education providers handle huge volumes of quotes, orders and enquiries. We automate quotations, order processing, WhatsApp sales and student enquiries, in Arabic and English.",
      ar: "يتعامل تجار الشارقة ومصنّعوها ومؤسساتها التعليمية مع كميات ضخمة من عروض الأسعار والطلبات والاستفسارات. نؤتمت عروض الأسعار ومعالجة الطلبات ومبيعات واتساب واستفسارات الطلاب بالعربية والإنجليزية.",
    },
    sectors: [
      { en: "Trading & wholesale", ar: "التجارة والجملة" },
      { en: "Manufacturing", ar: "التصنيع" },
      { en: "Schools & universities", ar: "المدارس والجامعات" },
      { en: "Free-zone SMEs", ar: "الشركات الصغيرة في المناطق الحرة" },
    ],
    angle: { en: "From quote to invoice without the paperwork.", ar: "من عرض السعر إلى الفاتورة دون أعمال ورقية." },
  },
  {
    slug: "ajman",
    name: { en: "Ajman", ar: "عجمان" },
    region: "AE-AJ",
    intro: {
      en: "Ajman's fast-growing SMEs need enterprise-level efficiency on an SME budget. Our ready-made automation systems let small teams answer every customer, send every invoice and follow up every lead automatically.",
      ar: "تحتاج الشركات الصغيرة والمتوسطة سريعة النمو في عجمان إلى كفاءة المؤسسات الكبرى بميزانية مناسبة. تتيح أنظمتنا الجاهزة للفرق الصغيرة الرد على كل عميل وإرسال كل فاتورة ومتابعة كل عميل محتمل تلقائياً.",
    },
    sectors: [
      { en: "SMEs & start-ups", ar: "الشركات الصغيرة والناشئة" },
      { en: "Trading", ar: "التجارة" },
      { en: "Light manufacturing", ar: "الصناعات الخفيفة" },
      { en: "Retail & services", ar: "التجزئة والخدمات" },
    ],
    angle: { en: "Big-company automation, small-business pricing.", ar: "أتمتة الشركات الكبرى بأسعار الشركات الصغيرة." },
  },
  {
    slug: "ras-al-khaimah",
    name: { en: "Ras Al Khaimah", ar: "رأس الخيمة" },
    region: "AE-RK",
    intro: {
      en: "Ras Al Khaimah is home to Nexsofture Tech's registered office in Al Hamra Industrial Zone-FZ. We help RAK manufacturers, free-zone companies and tourism businesses automate operations, bookings, supplier communication and reporting.",
      ar: "رأس الخيمة هي موطن المكتب المسجّل لنكسوفتشر تك في المنطقة الصناعية بالحمرا. نساعد المصنعين وشركات المناطق الحرة وشركات السياحة في رأس الخيمة على أتمتة العمليات والحجوزات والتواصل مع الموردين والتقارير.",
    },
    sectors: [
      { en: "Manufacturing & industrial", ar: "التصنيع والصناعة" },
      { en: "Free-zone companies", ar: "شركات المناطق الحرة" },
      { en: "Tourism & hospitality", ar: "السياحة والضيافة" },
      { en: "Construction & materials", ar: "البناء ومواد البناء" },
    ],
    angle: { en: "A local partner, registered right here in RAK.", ar: "شريك محلي مسجّل هنا في رأس الخيمة." },
  },
  {
    slug: "fujairah",
    name: { en: "Fujairah", ar: "الفجيرة" },
    region: "AE-FU",
    intro: {
      en: "Fujairah's port, logistics and tourism businesses run on schedules, documents and fast communication. We automate shipment updates, document processing, booking management and customer communication.",
      ar: "تعتمد شركات الموانئ والخدمات اللوجستية والسياحة في الفجيرة على الجداول والمستندات والتواصل السريع. نؤتمت تحديثات الشحنات ومعالجة المستندات وإدارة الحجوزات والتواصل مع العملاء.",
    },
    sectors: [
      { en: "Shipping & logistics", ar: "الشحن والخدمات اللوجستية" },
      { en: "Marine & port services", ar: "الخدمات البحرية والمينائية" },
      { en: "Tourism & resorts", ar: "السياحة والمنتجعات" },
      { en: "Trading", ar: "التجارة" },
    ],
    angle: { en: "Automation that keeps cargo, crews and guests moving.", ar: "أتمتة تُبقي الشحنات والطواقم والضيوف في حركة." },
  },
  {
    slug: "umm-al-quwain",
    name: { en: "Umm Al Quwain", ar: "أم القيوين" },
    region: "AE-UQ",
    intro: {
      en: "Umm Al Quwain's growing free-zone and SME community can now access the same AI automation as the big cities, delivered remotely or on-site, with Arabic-first support.",
      ar: "يمكن لمجتمع الشركات الصغيرة والمتوسطة ومنطقة أم القيوين الحرة المتنامي الآن الوصول إلى الأتمتة الذكية نفسها المتاحة في المدن الكبرى، عن بُعد أو في الموقع، مع دعم باللغة العربية أولاً.",
    },
    sectors: [
      { en: "Free-zone businesses", ar: "شركات المنطقة الحرة" },
      { en: "SMEs & traders", ar: "الشركات الصغيرة والتجار" },
      { en: "Tourism & leisure", ar: "السياحة والترفيه" },
      { en: "E-commerce", ar: "التجارة الإلكترونية" },
    ],
    angle: { en: "Every Emirate deserves an AI-first leap.", ar: "كل إمارة تستحق قفزة نحو الذكاء الاصطناعي." },
  },
];

export const getEmirate = (slug: string) => emirates.find((e) => e.slug === slug);
