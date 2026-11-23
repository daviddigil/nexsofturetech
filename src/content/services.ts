import type { L } from "@/lib/i18n";

export type ServiceIcon = "web" | "app" | "marketing" | "uiux" | "branding" | "graphic" | "courses";

export type Service = {
  slug: string;
  icon: ServiceIcon;
  name: L;
  tagline: L;
  summary: L;
  description: L;
  deliverables: L[];
  tech: string[];
  faq: { q: L; a: L }[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    icon: "web",
    name: { en: "Website Development", ar: "تطوير المواقع الإلكترونية" },
    tagline: { en: "Fast, beautiful websites that rank and convert.", ar: "مواقع سريعة وجميلة تتصدر نتائج البحث وتحقق المبيعات." },
    summary: {
      en: "Nexsofture Tech builds custom, SEO-ready websites for UAE businesses, from corporate sites and landing pages to e-commerce stores and web apps, in Arabic and English.",
      ar: "تبني نكسوفتشر تك مواقع مخصصة جاهزة لمحركات البحث للشركات في الإمارات، من مواقع الشركات وصفحات الهبوط إلى المتاجر الإلكترونية وتطبيقات الويب، بالعربية والإنجليزية.",
    },
    description: {
      en: "We design and engineer websites that load in under a second, look stunning on every screen and are structured for Google, Bing and AI search engines. Every site is bilingual-ready, accessible and easy for your team to update.",
      ar: "نصمم ونطوّر مواقع تُحمَّل في أقل من ثانية، وتبدو مذهلة على كل شاشة، ومهيكلة لمحركات Google وBing ومحركات البحث بالذكاء الاصطناعي. كل موقع جاهز للغتين وسهل الوصول وسهل التحديث لفريقك.",
    },
    deliverables: [
      { en: "Corporate & brand websites", ar: "مواقع الشركات والعلامات التجارية" },
      { en: "E-commerce stores", ar: "المتاجر الإلكترونية" },
      { en: "Landing pages for campaigns", ar: "صفحات هبوط للحملات" },
      { en: "Custom web applications & portals", ar: "تطبيقات ويب وبوابات مخصصة" },
      { en: "Arabic RTL & multilingual sites", ar: "مواقع عربية ومتعددة اللغات" },
      { en: "Technical SEO & Core Web Vitals", ar: "تحسين تقني لمحركات البحث ومؤشرات الأداء" },
    ],
    tech: ["Next.js", "React", "WordPress", "Shopify", "Tailwind CSS", "Node.js"],
    faq: [
      { q: { en: "How long does a website take to build?", ar: "كم يستغرق بناء موقع إلكتروني؟" }, a: { en: "A brand website typically takes 3–6 weeks; e-commerce and web apps take 6–12 weeks depending on scope.", ar: "يستغرق موقع العلامة التجارية عادةً 3–6 أسابيع، والمتاجر وتطبيقات الويب 6–12 أسبوعاً حسب النطاق." } },
      { q: { en: "Do you build Arabic websites?", ar: "هل تبنون مواقع باللغة العربية؟" }, a: { en: "Yes. We build fully right-to-left Arabic and bilingual Arabic/English websites.", ar: "نعم. نبني مواقع عربية كاملة من اليمين إلى اليسار ومواقع ثنائية اللغة." } },
    ],
    keywords: ["web development company Dubai", "website design UAE", "e-commerce website Dubai", "Arabic website development"],
  },
  {
    slug: "app-development",
    icon: "app",
    name: { en: "App Development", ar: "تطوير التطبيقات" },
    tagline: { en: "iOS, Android and cross-platform apps people love.", ar: "تطبيقات iOS وAndroid ومتعددة المنصات يحبها المستخدمون." },
    summary: {
      en: "Nexsofture Tech designs and develops native and cross-platform mobile apps for iOS and Android, with AI features, secure backends and UAE payment integrations.",
      ar: "تصمم نكسوفتشر تك وتطوّر تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS وAndroid، مع مزايا الذكاء الاصطناعي وخوادم آمنة وتكامل مع بوابات الدفع الإماراتية.",
    },
    description: {
      en: "From MVP to scale, we take your app from idea to the App Store and Google Play. We handle product strategy, UX, engineering, APIs, admin dashboards and post-launch support.",
      ar: "من النسخة الأولى إلى التوسع، ننقل تطبيقك من الفكرة إلى App Store وGoogle Play. نتولى استراتيجية المنتج وتجربة المستخدم والتطوير والواجهات البرمجية ولوحات التحكم والدعم بعد الإطلاق.",
    },
    deliverables: [
      { en: "iOS & Android apps", ar: "تطبيقات iOS وAndroid" },
      { en: "Flutter & React Native", ar: "Flutter وReact Native" },
      { en: "AI-powered app features", ar: "مزايا مدعومة بالذكاء الاصطناعي" },
      { en: "Backend, APIs & admin panels", ar: "الخوادم والواجهات البرمجية ولوحات التحكم" },
      { en: "Payment & map integrations", ar: "تكامل الدفع والخرائط" },
      { en: "App Store launch & maintenance", ar: "النشر على المتاجر والصيانة" },
    ],
    tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
    faq: [
      { q: { en: "How much does an app cost in the UAE?", ar: "كم تبلغ تكلفة تطبيق في الإمارات؟" }, a: { en: "It depends on features and platforms. We offer fixed-scope MVP packages and give a detailed quote after a free consultation.", ar: "يعتمد ذلك على المزايا والمنصات. نقدّم باقات نسخة أولى بنطاق محدد وعرض سعر مفصل بعد استشارة مجانية." } },
      { q: { en: "Do you build both iOS and Android?", ar: "هل تبنون لنظامي iOS وAndroid؟" }, a: { en: "Yes. We typically use Flutter or React Native to ship both from one codebase.", ar: "نعم. نستخدم عادةً Flutter أو React Native لإطلاق النظامين من قاعدة برمجية واحدة." } },
    ],
    keywords: ["app development company UAE", "mobile app developers Dubai", "Flutter developers UAE", "iOS app development Dubai"],
  },
  {
    slug: "digital-marketing",
    icon: "marketing",
    name: { en: "Digital Marketing", ar: "التسويق الرقمي" },
    tagline: { en: "Growth marketing powered by data and AI.", ar: "تسويق نمو مدعوم بالبيانات والذكاء الاصطناعي." },
    summary: {
      en: "Nexsofture Tech provides performance-driven digital marketing in the UAE, covering SEO, AI search optimisation, Google and Meta ads, social media and WhatsApp marketing.",
      ar: "تقدم نكسوفتشر تك تسويقاً رقمياً قائماً على الأداء في الإمارات يشمل تحسين محركات البحث، والتحسين لمحركات البحث بالذكاء الاصطناعي، وإعلانات Google وMeta، ووسائل التواصل، والتسويق عبر واتساب.",
    },
    description: {
      en: "We help you get found on Google, cited by ChatGPT and Perplexity, and chosen by customers. Every campaign is tracked end-to-end so you know exactly what each dirham returns.",
      ar: "نساعدك على الظهور في Google والاستشهاد بك في ChatGPT وPerplexity واختيارك من العملاء. نتتبع كل حملة من البداية إلى النهاية لتعرف بالضبط عائد كل درهم.",
    },
    deliverables: [
      { en: "SEO & local SEO (Google Business Profile)", ar: "تحسين محركات البحث والبحث المحلي" },
      { en: "AI search optimisation (AIO / GEO)", ar: "التحسين لمحركات البحث بالذكاء الاصطناعي" },
      { en: "Google & Meta ads", ar: "إعلانات Google وMeta" },
      { en: "Social media management", ar: "إدارة وسائل التواصل الاجتماعي" },
      { en: "WhatsApp & email campaigns", ar: "حملات واتساب والبريد الإلكتروني" },
      { en: "Analytics & conversion tracking", ar: "التحليلات وتتبع التحويلات" },
    ],
    tech: ["Google Ads", "Meta Ads", "GA4", "Search Console", "HubSpot", "WhatsApp Business"],
    faq: [
      { q: { en: "What is AI search optimisation?", ar: "ما هو التحسين لمحركات البحث بالذكاء الاصطناعي؟" }, a: { en: "It's structuring your content and data so AI assistants such as ChatGPT, Google AI Overviews and Perplexity understand and recommend your business.", ar: "هو هيكلة محتواك وبياناتك لتفهمها المساعدات الذكية مثل ChatGPT وملخصات Google الذكية وPerplexity وتوصي بنشاطك." } },
      { q: { en: "How soon will I see results?", ar: "متى سأرى النتائج؟" }, a: { en: "Paid ads can drive leads within days; SEO typically shows strong results in 3–6 months.", ar: "قد تجلب الإعلانات المدفوعة عملاء خلال أيام، بينما تظهر نتائج تحسين محركات البحث عادةً خلال 3–6 أشهر." } },
    ],
    keywords: ["digital marketing agency Dubai", "SEO company UAE", "Google Ads UAE", "social media marketing Dubai"],
  },
  {
    slug: "ui-ux-design",
    icon: "uiux",
    name: { en: "UI/UX Design", ar: "تصميم واجهات وتجربة المستخدم" },
    tagline: { en: "Interfaces that feel effortless.", ar: "واجهات تبدو سهلة بلا عناء." },
    summary: {
      en: "Nexsofture Tech delivers research-led UI/UX design for websites, apps and SaaS products, including user research, wireframes, interactive prototypes and design systems.",
      ar: "تقدم نكسوفتشر تك تصميم واجهات وتجربة مستخدم قائماً على البحث للمواقع والتطبيقات ومنتجات SaaS، يشمل أبحاث المستخدمين والمخططات الأولية والنماذج التفاعلية وأنظمة التصميم.",
    },
    description: {
      en: "Inspired by Apple's Human Interface Guidelines, we craft clean, intuitive and accessible experiences. Click a working prototype before a single line of code is written.",
      ar: "مستوحاة من إرشادات Apple، نصنع تجارب نظيفة وبديهية وسهلة الوصول. جرّب نموذجاً تفاعلياً قبل كتابة سطر برمجي واحد.",
    },
    deliverables: [
      { en: "User research & journeys", ar: "أبحاث المستخدمين ورحلاتهم" },
      { en: "Wireframes & information architecture", ar: "المخططات الأولية وبنية المعلومات" },
      { en: "High-fidelity UI in Figma", ar: "واجهات عالية الدقة على Figma" },
      { en: "Interactive prototypes", ar: "نماذج تفاعلية" },
      { en: "Design systems & tokens", ar: "أنظمة التصميم ورموزه" },
      { en: "Usability testing", ar: "اختبارات قابلية الاستخدام" },
    ],
    tech: ["Figma", "FigJam", "Framer", "Protopie", "Maze"],
    faq: [
      { q: { en: "Do you design for Arabic users?", ar: "هل تصممون للمستخدمين العرب؟" }, a: { en: "Yes. We design mirrored RTL layouts and Arabic typography from the start, not as an afterthought.", ar: "نعم. نصمم تخطيطات من اليمين إلى اليسار وخطوطاً عربية منذ البداية، وليس كإضافة لاحقة." } },
    ],
    keywords: ["UI UX design agency Dubai", "app design UAE", "product design studio UAE"],
  },
  {
    slug: "branding",
    icon: "branding",
    name: { en: "Branding", ar: "بناء الهوية التجارية" },
    tagline: { en: "Brands built to stand out and scale.", ar: "علامات تجارية مصممة للتميز والنمو." },
    summary: {
      en: "Nexsofture Tech creates brand identities for UAE startups and SMEs, covering strategy, naming, logo design, visual identity, brand guidelines and launch assets.",
      ar: "تصنع نكسوفتشر تك هويات تجارية للشركات الناشئة والصغيرة والمتوسطة في الإمارات، تشمل الاستراتيجية والتسمية وتصميم الشعار والهوية البصرية ودليل الهوية ومواد الإطلاق.",
    },
    description: {
      en: "A great brand is a system, not just a logo. We define your positioning, voice and visual language, then deliver a complete toolkit from stationery to social templates to app icons.",
      ar: "العلامة التجارية الناجحة نظام متكامل وليست مجرد شعار. نحدد تموضعك وصوتك ولغتك البصرية، ثم نسلّمك مجموعة أدوات كاملة من القرطاسية إلى قوالب التواصل الاجتماعي وأيقونات التطبيقات.",
    },
    deliverables: [
      { en: "Brand strategy & positioning", ar: "استراتيجية العلامة وتموضعها" },
      { en: "Naming & tagline", ar: "التسمية والشعار اللفظي" },
      { en: "Logo & visual identity", ar: "الشعار والهوية البصرية" },
      { en: "Brand guidelines book", ar: "دليل الهوية التجارية" },
      { en: "Stationery & merchandise", ar: "القرطاسية والمنتجات الترويجية" },
      { en: "Arabic & English logotypes", ar: "شعارات نصية عربية وإنجليزية" },
    ],
    tech: ["Illustrator", "Figma", "Photoshop", "Blender"],
    faq: [
      { q: { en: "Do you design bilingual logos?", ar: "هل تصممون شعارات ثنائية اللغة؟" }, a: { en: "Yes. We create matching Arabic and English logotypes so your brand feels native in both.", ar: "نعم. نصمم شعارات نصية عربية وإنجليزية متناسقة لتبدو علامتك أصيلة باللغتين." } },
    ],
    keywords: ["branding agency Dubai", "logo design UAE", "brand identity design Dubai"],
  },
  {
    slug: "graphic-design",
    icon: "graphic",
    name: { en: "Graphic Design", ar: "التصميم الجرافيكي" },
    tagline: { en: "Visuals that stop the scroll.", ar: "تصاميم توقف التمرير." },
    summary: {
      en: "Nexsofture Tech offers graphic design in the UAE for social media, advertising, print, packaging, presentations and motion graphics.",
      ar: "تقدم نكسوفتشر تك خدمات التصميم الجرافيكي في الإمارات لوسائل التواصل والإعلانات والمطبوعات والتغليف والعروض التقديمية والرسوم المتحركة.",
    },
    description: {
      en: "On-brand creative at the speed of social. Our designers produce campaign visuals, print collateral and motion content, ready to send straight to Quick Print UAE.",
      ar: "تصاميم متوافقة مع علامتك بسرعة وسائل التواصل. ينتج مصممونا مواد الحملات والمطبوعات والمحتوى المتحرك، جاهزة للإرسال مباشرة إلى كويك برنت الإمارات.",
    },
    deliverables: [
      { en: "Social media creatives", ar: "تصاميم وسائل التواصل" },
      { en: "Ad banners & campaign visuals", ar: "إعلانات ومواد الحملات" },
      { en: "Print, brochures & packaging", ar: "المطبوعات والكتيبات والتغليف" },
      { en: "Pitch decks & presentations", ar: "العروض التقديمية" },
      { en: "Motion graphics & reels", ar: "الرسوم المتحركة والريلز" },
      { en: "Illustrations & icons", ar: "الرسوم التوضيحية والأيقونات" },
    ],
    tech: ["Photoshop", "Illustrator", "After Effects", "Figma", "Canva"],
    faq: [
      { q: { en: "Do you offer monthly design retainers?", ar: "هل تقدمون باقات تصميم شهرية؟" }, a: { en: "Yes. Monthly retainers give you a dedicated designer and fast turnaround.", ar: "نعم. تمنحك الباقات الشهرية مصمماً مخصصاً وتسليماً سريعاً." } },
    ],
    keywords: ["graphic design Dubai", "social media design UAE", "packaging design UAE"],
  },
  {
    slug: "courses",
    icon: "courses",
    name: { en: "Courses & Training", ar: "الدورات والتدريب" },
    tagline: { en: "Learn AI, design and development from builders.", ar: "تعلّم الذكاء الاصطناعي والتصميم والبرمجة من صنّاعها." },
    summary: {
      en: "Nexsofture Tech runs practical courses and corporate training in the UAE on AI tools, web development, UI/UX design, digital marketing and no-code, taught by people who ship real products.",
      ar: "تقدم نكسوفتشر تك دورات عملية وتدريباً للشركات في الإمارات حول أدوات الذكاء الاصطناعي وتطوير المواقع وتصميم الواجهات والتسويق الرقمي والبرمجة بدون كود، يقدمها من يطلقون منتجات حقيقية.",
    },
    description: {
      en: "Hands-on, project-based learning for individuals and teams. Upskill your workforce in generative AI, or launch a new career in tech with mentorship and a portfolio you can show.",
      ar: "تعلّم عملي قائم على المشاريع للأفراد والفرق. طوّر مهارات موظفيك في الذكاء الاصطناعي التوليدي، أو ابدأ مسيرة جديدة في التقنية مع إرشاد وملف أعمال تعرضه.",
    },
    deliverables: [
      { en: "AI for business workshops", ar: "ورش الذكاء الاصطناعي للأعمال" },
      { en: "Web & app development bootcamps", ar: "معسكرات تطوير المواقع والتطبيقات" },
      { en: "UI/UX design courses", ar: "دورات تصميم الواجهات وتجربة المستخدم" },
      { en: "Digital marketing training", ar: "تدريب التسويق الرقمي" },
      { en: "Corporate team upskilling", ar: "تطوير مهارات فرق الشركات" },
      { en: "Certificates & mentorship", ar: "شهادات وإرشاد" },
    ],
    tech: ["ChatGPT", "Claude", "Figma", "Next.js", "Google Ads"],
    faq: [
      { q: { en: "Are courses online or in person?", ar: "هل الدورات عبر الإنترنت أم حضورية؟" }, a: { en: "Both. We run live online cohorts and in-person workshops in the UAE, plus private corporate sessions.", ar: "كلاهما. نقدم دفعات مباشرة عبر الإنترنت وورشاً حضورية في الإمارات، إلى جانب جلسات خاصة للشركات." } },
    ],
    keywords: ["AI course Dubai", "web development course UAE", "UI UX course Dubai", "corporate AI training UAE"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
