export type EducationLanguage = "en" | "ar";

export type EducationStep = {
  id: string;
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
  glossaryKeys?: string[];
};

export type EducationAccordionItem = {
  id: string;
  titleEn: string;
  titleAr: string;
  bodyEn: string;
  bodyAr: string;
};

export type EducationQuizQuestion = {
  id: string;
  questionEn: string;
  questionAr: string;
  optionsEn: string[];
  optionsAr: string[];
  correctIndex: number;
  explanationEn: string;
  explanationAr: string;
};

export type EducationGlossaryEntry = {
  key: string;
  termEn: string;
  termAr: string;
  definitionEn: string;
  definitionAr: string;
};

export type EducationModule = {
  id: number;
  slug: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  /**
   * YouTube video id (the part after v=).
   * Leave null if you want to add later.
   */
  youtubeId: string | null;
  steps: EducationStep[];
  accordions: EducationAccordionItem[];
  quiz: EducationQuizQuestion[];
  glossary: EducationGlossaryEntry[];
};

// NOTE:
// These are intentionally scaffolded with solid placeholders.
// Replace the copy + youtubeId as you finalize each module.
export const EDUCATION_MODULES: EducationModule[] = [
  {
    id: 1,
    slug: "basics",
    titleEn: "Module 1: The Basics",
    titleAr: "الوحدة ١: الأساسيات",
    descEn: "Understand the menstrual cycle, what’s normal, and how the body changes.",
    descAr: "فهم الدورة الشهرية، وما هو الطبيعي، وكيف يتغير الجسم.",
    youtubeId: null,
    steps: [
      {
        id: "what-is-a-period",
        titleEn: "What is a period?",
        titleAr: "ما هي الدورة الشهرية؟",
        bodyEn:
          "A period is normal monthly bleeding from the uterus. It’s a sign the body is working as it should. Everyone’s cycle is different.",
        bodyAr:
          "الدورة الشهرية هي نزيف شهري طبيعي من الرحم. وهي علامة على أن الجسم يعمل بشكل طبيعي. تختلف الدورة من شخص لآخر.",
        glossaryKeys: ["cycle", "uterus"],
      },
      {
        id: "cycle-timeline",
        titleEn: "The cycle timeline",
        titleAr: "مراحل الدورة",
        bodyEn:
          "Cycles commonly range from about 21–35 days. Tracking helps you notice patterns and prepare for school, sports, and daily life.",
        bodyAr:
          "غالباً ما تتراوح مدة الدورة بين ٢١ و٣٥ يوماً. يساعد التتبع على ملاحظة الأنماط والاستعداد للمدرسة والرياضة والحياة اليومية.",
        glossaryKeys: ["cycle", "tracking"],
      },
      {
        id: "what-is-normal",
        titleEn: "What’s normal vs. when to ask for help",
        titleAr: "ما الطبيعي ومتى نطلب المساعدة",
        bodyEn:
          "Pain, flow, and mood changes vary. If pain is severe, bleeding is extremely heavy, or symptoms disrupt daily life, ask a trusted adult or a healthcare professional.",
        bodyAr:
          "تختلف شدة الألم وكمية النزيف وتغيرات المزاج. إذا كان الألم شديداً جداً أو كان النزيف غزيراً جداً أو أثرت الأعراض على الحياة اليومية، تحدثي مع شخص بالغ موثوق أو مختص صحي.",
      },
    ],
    accordions: [
      {
        id: "myth-1",
        titleEn: "Myth: Periods are “dirty”",
        titleAr: "خرافة: الدورة الشهرية “شيء غير نظيف”",
        bodyEn:
          "Periods are a natural body function. Stigma can keep people from getting information and care.",
        bodyAr:
          "الدورة الشهرية وظيفة طبيعية في الجسم. الوصمة قد تمنع الفتيات من الحصول على المعلومات والرعاية.",
      },
      {
        id: "tip-1",
        titleEn: "Tip: Start with a simple tracker",
        titleAr: "نصيحة: ابدئي بتتبع بسيط",
        bodyEn:
          "A calendar mark or notes app is enough. Track start date, end date, and symptoms.",
        bodyAr:
          "يكفي وضع علامة على التقويم أو استخدام تطبيق ملاحظات. تتبعي تاريخ البداية والنهاية والأعراض.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "A menstrual cycle can be different for each person.",
        questionAr: "يمكن أن تختلف الدورة الشهرية من شخص لآخر.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 0,
        explanationEn:
          "Yes—cycle length, flow, and symptoms can vary. What matters is noticing your own patterns.",
        explanationAr:
          "نعم—قد تختلف مدة الدورة وكمية النزيف والأعراض. الأهم هو ملاحظة نمطك الخاص.",
      },
    ],
    glossary: [
      {
        key: "cycle",
        termEn: "Cycle",
        termAr: "الدورة",
        definitionEn: "The repeating monthly process that prepares the body for pregnancy.",
        definitionAr: "العملية الشهرية المتكررة التي تُحضِّر الجسم للحمل.",
      },
      {
        key: "uterus",
        termEn: "Uterus",
        termAr: "الرحم",
        definitionEn: "A muscle organ where a pregnancy can grow.",
        definitionAr: "عضو عضلي يمكن أن ينمو فيه الحمل.",
      },
      {
        key: "tracking",
        termEn: "Tracking",
        termAr: "التتبع",
        definitionEn: "Recording dates/symptoms to understand patterns over time.",
        definitionAr: "تسجيل التواريخ/الأعراض لفهم الأنماط مع الوقت.",
      },
    ],
  },
  {
    id: 2,
    slug: "hygiene-and-care",
    titleEn: "Module 2: Hygiene & Care",
    titleAr: "الوحدة ٢: النظافة والعناية",
    descEn: "Practical routines, product guidance, comfort, and safety.",
    descAr: "روتين عملي، إرشادات المنتجات، الراحة، والسلامة.",
    youtubeId: null,
    steps: [
      {
        id: "products",
        titleEn: "Products and safe use",
        titleAr: "المنتجات والاستخدام الآمن",
        bodyEn:
          "Use what you have access to. Change pads regularly, wash hands, and keep supplies in a clean pouch.",
        bodyAr:
          "استخدمي ما هو متاح لكِ. غيّري الفوط بانتظام، اغسلي يديكِ، واحفظي المستلزمات في حقيبة نظيفة.",
      },
      {
        id: "comfort",
        titleEn: "Comfort strategies",
        titleAr: "استراتيجيات الراحة",
        bodyEn:
          "Warm compresses, gentle movement, hydration, and rest can help. If pain is severe, seek medical advice.",
        bodyAr:
          "قد تساعد الكمادات الدافئة والحركة الخفيفة وشرب الماء والراحة. إذا كان الألم شديداً، اطّلبي نصيحة طبية.",
      },
    ],
    accordions: [
      {
        id: "faq-privacy",
        titleEn: "FAQ: How do I manage privacy at school?",
        titleAr: "سؤال شائع: كيف أتعامل مع الخصوصية في المدرسة؟",
        bodyEn:
          "Keep a small kit (pads, wipes, spare underwear). Ask a trusted teacher or counselor where supplies are available.",
        bodyAr:
          "احتفظي بحقيبة صغيرة (فوط، مناديل، ملابس داخلية إضافية). اسألي معلمة موثوقة أو المرشدة عن توفر المستلزمات.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "Washing hands before and after changing a pad is important.",
        questionAr: "غسل اليدين قبل وبعد تغيير الفوطة مهم.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 0,
        explanationEn: "It helps prevent infections and keeps you safe and comfortable.",
        explanationAr: "يساعد على منع الالتهابات ويحافظ على السلامة والراحة.",
      },
    ],
    glossary: [
      {
        key: "hygiene",
        termEn: "Hygiene",
        termAr: "النظافة",
        definitionEn: "Practices that help keep the body clean and reduce illness.",
        definitionAr: "ممارسات تساعد على إبقاء الجسم نظيفاً وتقليل المرض.",
      },
    ],
  },
  {
    id: 3,
    slug: "breaking-myths",
    titleEn: "Module 3: Breaking Myths",
    titleAr: "الوحدة ٣: كسر الخرافات",
    descEn: "Debunk misinformation and build confidence with facts.",
    descAr: "تفنيد المعلومات الخاطئة وبناء الثقة بالحقائق.",
    youtubeId: null,
    steps: [
      {
        id: "myths",
        titleEn: "Why myths spread",
        titleAr: "لماذا تنتشر الخرافات؟",
        bodyEn:
          "When people can’t talk openly, rumors replace education. Facts protect health and dignity.",
        bodyAr:
          "عندما يصعب الحديث بصراحة، تحل الشائعات مكان التعليم. الحقائق تحمي الصحة والكرامة.",
      },
    ],
    accordions: [
      {
        id: "myth-sports",
        titleEn: "Myth: You can’t exercise on your period",
        titleAr: "خرافة: لا يمكن ممارسة الرياضة أثناء الدورة",
        bodyEn:
          "Many people can exercise safely. Listen to your body and choose gentle movement if needed.",
        bodyAr:
          "يمكن للكثيرات ممارسة الرياضة بأمان. استمعي لجسمكِ واختاري حركة خفيفة إذا لزم الأمر.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "Talking about periods can help reduce stigma.",
        questionAr: "الحديث عن الدورة الشهرية يمكن أن يقلل الوصمة.",
        optionsEn: ["Yes", "No"],
        optionsAr: ["نعم", "لا"],
        correctIndex: 0,
        explanationEn: "Accurate information replaces shame and rumors with understanding.",
        explanationAr: "المعلومات الصحيحة تستبدل العار والشائعات بالفهم.",
      },
    ],
    glossary: [],
  },
  {
    id: 4,
    slug: "nutrition-and-health",
    titleEn: "Module 4: Nutrition & Health",
    titleAr: "الوحدة ٤: التغذية والصحة",
    descEn: "Food, movement, and habits that support wellbeing during your cycle.",
    descAr: "الغذاء والحركة والعادات التي تدعم الصحة خلال الدورة.",
    youtubeId: null,
    steps: [
      {
        id: "hydration",
        titleEn: "Hydration and iron",
        titleAr: "السوائل والحديد",
        bodyEn:
          "Water supports energy. Iron-rich foods can help if you feel tired, especially with heavier bleeding.",
        bodyAr:
          "يساعد الماء على الطاقة. قد تساعد الأطعمة الغنية بالحديد إذا شعرتِ بالتعب، خصوصاً مع نزيف أغزر.",
      },
    ],
    accordions: [],
    quiz: [],
    glossary: [],
  },
  {
    id: 5,
    slug: "mental-wellbeing",
    titleEn: "Module 5: Mental Wellbeing",
    titleAr: "الوحدة ٥: الصحة النفسية",
    descEn: "Emotions, stress, PMS, and self-care strategies that actually help.",
    descAr: "المشاعر والضغط النفسي وأعراض ما قبل الدورة واستراتيجيات رعاية ذاتية مفيدة.",
    youtubeId: null,
    steps: [
      {
        id: "mood",
        titleEn: "Mood changes are real",
        titleAr: "تغيرات المزاج حقيقية",
        bodyEn:
          "Hormones can affect mood. Rest, support, and small routines can make a big difference.",
        bodyAr:
          "قد تؤثر الهرمونات على المزاج. يمكن للراحة والدعم والروتين البسيط أن يُحدث فرقاً كبيراً.",
      },
    ],
    accordions: [],
    quiz: [],
    glossary: [],
  },
  {
    id: 6,
    slug: "advocacy-guide",
    titleEn: "Module 6: Advocacy Guide",
    titleAr: "الوحدة ٦: دليل المناصرة",
    descEn: "How to speak confidently, support others, and build safer communities.",
    descAr: "كيف تتحدثين بثقة وتدعمين الأخريات وتبنين مجتمعات أكثر أماناً.",
    youtubeId: null,
    steps: [
      {
        id: "start-conversation",
        titleEn: "Start with dignity",
        titleAr: "ابدئي بالكرامة",
        bodyEn:
          "Menstrual health is a human right. Advocacy begins with language that respects the person and their needs.",
        bodyAr:
          "صحة الدورة الشهرية حق من حقوق الإنسان. تبدأ المناصرة بلغة تحترم الشخص واحتياجاته.",
      },
    ],
    accordions: [],
    quiz: [],
    glossary: [],
  },
];

export function getEducationModuleBySlug(slug: string): EducationModule | undefined {
  return EDUCATION_MODULES.find((m) => m.slug === slug);
}

export function getEducationModuleSlugs(): string[] {
  return EDUCATION_MODULES.map((m) => m.slug);
}

export function getPrevNextSlugs(slug: string): { prev: string | null; next: string | null } {
  const idx = EDUCATION_MODULES.findIndex((m) => m.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = idx > 0 ? EDUCATION_MODULES[idx - 1]!.slug : null;
  const next = idx < EDUCATION_MODULES.length - 1 ? EDUCATION_MODULES[idx + 1]!.slug : null;
  return { prev, next };
}
