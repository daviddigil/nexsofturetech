import type { L } from "@/lib/i18n";

export type Post = {
  slug: string;
  date: string; // ISO
  readMin: number;
  tag: L;
  title: L;
  excerpt: L;
  sections: { h: L; p: L[] }[];
};

export const posts: Post[] = [
  {
    slug: "ai-whatsapp-agents-uae-businesses",
    date: "2026-11-01",
    readMin: 5,
    tag: { en: "AI Agents", ar: "وكلاء الذكاء الاصطناعي" },
    title: {
      en: "Why every UAE business needs an AI WhatsApp agent in 2027",
      ar: "لماذا تحتاج كل شركة في الإمارات إلى وكيل واتساب ذكي في 2027",
    },
    excerpt: {
      en: "WhatsApp is where UAE customers already are. Here's how AI agents turn it into a 24/7 sales and support channel.",
      ar: "واتساب هو المكان الذي يتواجد فيه عملاء الإمارات بالفعل. إليك كيف يحوّله وكلاء الذكاء الاصطناعي إلى قناة مبيعات ودعم على مدار الساعة.",
    },
    sections: [
      {
        h: { en: "Customers message first", ar: "العملاء يراسلون أولاً" },
        p: [
          { en: "In the UAE, WhatsApp is the default way customers ask about prices, availability and bookings. When a business replies hours later, the sale often goes to a competitor who replied in minutes.", ar: "في الإمارات، يُعد واتساب الطريقة الافتراضية التي يسأل بها العملاء عن الأسعار والتوفر والحجوزات. وعندما ترد الشركة بعد ساعات، تذهب الصفقة غالباً إلى منافس رد خلال دقائق." },
        ],
      },
      {
        h: { en: "What an AI agent actually does", ar: "ماذا يفعل الوكيل الذكي فعلياً" },
        p: [
          { en: "A modern AI agent, like the one in ChatCart Pro, is trained on your catalogue, prices and policies. It answers questions in Arabic or English, recommends products, creates orders and payment links, books appointments and hands over to a human when needed.", ar: "يُدرَّب الوكيل الذكي الحديث، مثل الموجود في تشات كارت برو، على منتجاتك وأسعارك وسياساتك. يجيب عن الأسئلة بالعربية أو الإنجليزية، ويقترح المنتجات، وينشئ الطلبات وروابط الدفع، ويحجز المواعيد، ويحوّل المحادثة إلى موظف عند الحاجة." },
        ],
      },
      {
        h: { en: "Getting started", ar: "كيف تبدأ" },
        p: [
          { en: "Start with your top 20 customer questions, connect the official WhatsApp Business Platform and measure response time and conversion. Most businesses see results in the first month.", ar: "ابدأ بأكثر 20 سؤالاً يطرحها عملاؤك، واربط منصة واتساب للأعمال الرسمية، وقِس زمن الاستجابة ومعدل التحويل. ترى معظم الشركات نتائج في الشهر الأول." },
        ],
      },
    ],
  },
  {
    slug: "seo-for-ai-search-uae",
    date: "2026-10-15",
    readMin: 6,
    tag: { en: "Marketing", ar: "التسويق" },
    title: {
      en: "SEO in the age of AI search: getting your UAE business cited by ChatGPT and Google AI",
      ar: "تحسين محركات البحث في عصر البحث الذكي: كيف يستشهد ChatGPT وGoogle بنشاطك في الإمارات",
    },
    excerpt: {
      en: "AI assistants now answer questions before users click. Here's how to structure your website so they recommend you.",
      ar: "تجيب المساعدات الذكية الآن عن الأسئلة قبل أن ينقر المستخدم. إليك كيف تهيكل موقعك لتوصي بك.",
    },
    sections: [
      {
        h: { en: "From ten blue links to one answer", ar: "من عشرة روابط إلى إجابة واحدة" },
        p: [
          { en: "Google AI Overviews, ChatGPT search and Perplexity summarise the web into a single answer. Being one of the few sources they cite is the new page one.", ar: "تلخّص ملخصات Google الذكية وبحث ChatGPT وPerplexity الويب في إجابة واحدة. وأن تكون من المصادر القليلة التي تستشهد بها هو الصفحة الأولى الجديدة." },
        ],
      },
      {
        h: { en: "Five practical steps", ar: "خمس خطوات عملية" },
        p: [
          { en: "Write answer-first content. Add structured data (Organization, LocalBusiness, FAQ). Publish an llms.txt file. Keep your Google Business Profile complete. Earn mentions on trusted UAE directories and media.", ar: "اكتب محتوى يبدأ بالإجابة. أضف البيانات المنظمة (المؤسسة، النشاط المحلي، الأسئلة الشائعة). انشر ملف llms.txt. حافظ على اكتمال ملفك في Google Business. واحصل على إشارات في الأدلة والوسائل الإعلامية الإماراتية الموثوقة." },
        ],
      },
    ],
  },
  {
    slug: "cashless-tipping-hospitality-uae",
    date: "2026-09-28",
    readMin: 4,
    tag: { en: "Hospitality", ar: "الضيافة" },
    title: {
      en: "Cashless tipping: how UAE restaurants are winning back staff tips",
      ar: "الإكراميات غير النقدية: كيف تستعيد مطاعم الإمارات إكراميات موظفيها",
    },
    excerpt: {
      en: "Fewer guests carry cash, and tips are disappearing. QR and NFC tipping fix that in seconds.",
      ar: "عدد أقل من الضيوف يحملون النقود، والإكراميات تختفي. إكراميات QR وNFC تحل ذلك في ثوانٍ.",
    },
    sections: [
      {
        h: { en: "The problem", ar: "المشكلة" },
        p: [
          { en: "Card and phone payments are now the norm across the UAE. Without cash, guests who want to tip often simply can't, and staff motivation suffers.", ar: "أصبح الدفع بالبطاقة والهاتف هو القاعدة في الإمارات. ومن دون نقود، لا يستطيع الضيوف الراغبون في تقديم الإكرامية فعل ذلك غالباً، فتتأثر معنويات الموظفين." },
        ],
      },
      {
        h: { en: "The fix", ar: "الحل" },
        p: [
          { en: "With TapyTips, each staff member has a QR code or NFC tag. Guests tip with Apple Pay or Google Pay in seconds, leave a rating and managers get real-time service insights.", ar: "مع تابي تيبس، يحصل كل موظف على رمز QR أو بطاقة NFC. يقدّم الضيوف الإكرامية عبر Apple Pay أو Google Pay في ثوانٍ ويتركون تقييماً، ويحصل المديرون على رؤى فورية عن الخدمة." },
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
