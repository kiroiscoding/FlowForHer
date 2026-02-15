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
    slug: "puberty",
    titleEn: "Episode 1: Puberty",
    titleAr: "الحلقة ١: البلوغ",
    descEn:
      "Puberty is a natural transition from childhood to adulthood. Learn what changes can happen, when they often start, and how to support yourself with confidence.",
    descAr:
      "البلوغ هو انتقال طبيعي من الطفولة إلى مرحلة أكبر. تعرّفي على التغيّرات التي قد تحدث، ومتى تبدأ عادةً، وكيف تدعمين نفسكِ بثقة.",
    youtubeId: "BpijmCd-ySw",
    steps: [
      {
        id: "what-is-puberty",
        titleEn: "What is puberty?",
        titleAr: "ما هو البلوغ؟",
        bodyEn:
          "Puberty is your body’s way of saying it’s time for change. It’s a natural process that marks the beginning of the transition from childhood to adulthood.",
        bodyAr:
          "البلوغ هو طريقة جسمكِ ليخبركِ أن وقت التغيّر قد بدأ. وهو عملية طبيعية تمثّل بداية الانتقال من الطفولة إلى مرحلة أكبر.",
        glossaryKeys: ["puberty"],
      },
      {
        id: "when-it-happens",
        titleEn: "When does it happen?",
        titleAr: "متى يحدث؟",
        bodyEn:
          "Puberty often happens between ages 8 and 14. It’s triggered by chemicals in the body called hormones, which signal different parts of the body to grow and change.",
        bodyAr:
          "غالباً ما يحدث البلوغ بين عمر ٨ و١٤ سنة. ويبدأ بسبب مواد كيميائية في الجسم تُسمّى الهرمونات، والتي تُرسل إشارات لأجزاء مختلفة من الجسم للنمو والتغيّر.",
        glossaryKeys: ["hormones"],
      },
      {
        id: "common-changes",
        titleEn: "Common changes (for everyone)",
        titleAr: "تغيّرات شائعة (لدى الجميع)",
        bodyEn:
          "People may notice increased sweating, hair growth in new places, stronger body odor, acne, and mood swings. These changes are part of growing.",
        bodyAr:
          "قد تلاحظين زيادة التعرّق، ونمو الشعر في أماكن جديدة، ورائحة جسم أقوى، وحبّ الشباب، وتقلّبات المزاج. هذه التغيّرات جزء طبيعي من النمو.",
        glossaryKeys: ["acne", "mood_swings"],
      },
      {
        id: "girls-and-boys",
        titleEn: "Changes for girls and boys",
        titleAr: "تغيّرات لدى الفتيات والفتيان",
        bodyEn:
          "Girls may develop breasts, hips may widen, and menstruation may begin. Boys may develop facial hair, voices may deepen, and muscle strength may increase.",
        bodyAr:
          "قد تنمو لدى الفتيات الثديان، وقد تتسع الوركان، وقد تبدأ الدورة الشهرية. أما الفتيان فقد ينمو شعر الوجه، ويصبح الصوت أعمق، وقد تزداد قوة العضلات.",
        glossaryKeys: ["menstruation"],
      },
    ],
    accordions: [
      {
        id: "no-right-way",
        titleEn: "There’s no “right way” to go through puberty",
        titleAr: "لا توجد “طريقة صحيحة” واحدة للبلوغ",
        bodyEn:
          "Everyone is unique. These changes can happen at different times for different people. There is no need to feel ashamed—whether you’re going through puberty or supporting someone who is.",
        bodyAr:
          "كل شخص مختلف. قد تحدث هذه التغيّرات في أوقات مختلفة للجميع. لا داعي للشعور بالخجل—سواء كنتِ تمرّين بالبلوغ أو تدعمين شخصاً يمرّ به.",
      },
      {
        id: "hygiene-tip",
        titleEn: "Tip: Take care of personal hygiene",
        titleAr: "نصيحة: اعتني بالنظافة الشخصية",
        bodyEn:
          "During puberty, sweating and body odor may increase. Regular washing, clean clothes, and deodorant (if available) can help you feel comfortable and confident.",
        bodyAr:
          "أثناء البلوغ قد يزداد التعرّق ورائحة الجسم. الاستحمام بانتظام، وارتداء ملابس نظيفة، ومزيل العرق (إن توفر) قد يساعدكِ على الشعور بالراحة والثقة.",
      },
      {
        id: "feelings-change",
        titleEn: "Tip: Your feelings may change",
        titleAr: "نصيحة: مشاعركِ قد تتغيّر",
        bodyEn:
          "Mood swings can be part of puberty. If you feel overwhelmed, talk to a trusted person. You don’t have to handle it alone.",
        bodyAr:
          "قد تكون تقلّبات المزاج جزءاً من البلوغ. إذا شعرتِ بأن الأمر صعب، تحدثي مع شخص موثوق. لستِ مضطرة للتعامل مع ذلك وحدكِ.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "Puberty is a natural process that marks a transition from childhood to adulthood.",
        questionAr: "البلوغ عملية طبيعية تمثّل بداية الانتقال من الطفولة إلى مرحلة أكبر.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 0,
        explanationEn:
          "Yes. Puberty is a normal stage of growth—your body is preparing for new changes.",
        explanationAr:
          "نعم. البلوغ مرحلة طبيعية من النمو—يستعد فيها الجسم لتغيّرات جديدة.",
      },
      {
        id: "q2",
        questionEn: "Puberty usually happens between which ages?",
        questionAr: "عادةً يحدث البلوغ بين أي الأعمار؟",
        optionsEn: ["3–6", "8–14", "15–22", "25–30"],
        optionsAr: ["٣–٦", "٨–١٤", "١٥–٢٢", "٢٥–٣٠"],
        correctIndex: 1,
        explanationEn:
          "Often between ages 8 and 14, but timing can vary from person to person.",
        explanationAr:
          "غالباً بين عمر ٨ و١٤ سنة، لكن التوقيت قد يختلف من شخص لآخر.",
      },
      {
        id: "q3",
        questionEn: "Hormones are chemicals in the body that can trigger changes during puberty.",
        questionAr: "الهرمونات هي مواد كيميائية في الجسم قد تُطلق التغيّرات أثناء البلوغ.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 0,
        explanationEn:
          "Correct. Hormones send signals that influence growth and body changes.",
        explanationAr:
          "صحيح. الهرمونات تُرسل إشارات تؤثر على النمو وتغيّرات الجسم.",
      },
      {
        id: "q4",
        questionEn: "Which of these can be a common change during puberty?",
        questionAr: "أي مما يلي قد يكون تغيراً شائعاً أثناء البلوغ؟",
        optionsEn: ["Increased sweating", "Acne", "Mood swings", "All of the above"],
        optionsAr: ["زيادة التعرّق", "حبّ الشباب", "تقلّبات المزاج", "جميع ما سبق"],
        correctIndex: 3,
        explanationEn:
          "All of these can happen. Everyone’s experience is different, and changes can come at different times.",
        explanationAr:
          "كل هذه قد تحدث. تجربة كل شخص مختلفة وقد تأتي التغيّرات في أوقات مختلفة.",
      },
      {
        id: "q5",
        questionEn: "There is only one “right” way to go through puberty.",
        questionAr: "هناك “طريقة صحيحة” واحدة فقط للمرور بمرحلة البلوغ.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 1,
        explanationEn:
          "False. People develop at different times and in different ways. There’s no need for shame.",
        explanationAr:
          "خطأ. ينمو الناس في أوقات مختلفة وبطرق مختلفة. لا داعي للشعور بالخجل.",
      },
    ],
    glossary: [
      {
        key: "puberty",
        termEn: "Puberty",
        termAr: "البلوغ",
        definitionEn:
          "A natural process when the body changes and develops as someone grows from childhood toward adulthood.",
        definitionAr:
          "عملية طبيعية يتغيّر فيها الجسم وينمو عندما ينتقل الإنسان من الطفولة نحو مرحلة أكبر.",
      },
      {
        key: "hormones",
        termEn: "Hormones",
        termAr: "الهرمونات",
        definitionEn: "Chemicals in the body that act like messengers and trigger changes.",
        definitionAr: "مواد كيميائية في الجسم تعمل كرسائل وتُطلق تغيّرات.",
      },
      {
        key: "acne",
        termEn: "Acne",
        termAr: "حبّ الشباب",
        definitionEn: "Skin breakouts that can happen during puberty due to hormone changes.",
        definitionAr: "ظهور حبوب في البشرة قد يحدث أثناء البلوغ بسبب تغيّرات الهرمونات.",
      },
      {
        key: "mood_swings",
        termEn: "Mood swings",
        termAr: "تقلّبات المزاج",
        definitionEn: "Quick changes in feelings that can happen during puberty.",
        definitionAr: "تغيّرات سريعة في المشاعر قد تحدث أثناء البلوغ.",
      },
      {
        key: "menstruation",
        termEn: "Menstruation",
        termAr: "الدورة الشهرية",
        definitionEn: "Monthly bleeding from the uterus that can begin during puberty.",
        definitionAr: "نزيف شهري من الرحم قد يبدأ خلال مرحلة البلوغ.",
      },
    ],
  },
  {
    id: 2,
    slug: "menstruation",
    titleEn: "Episode 2: Menstruation",
    titleAr: "الحلقة ٢: الدورة الشهرية",
    descEn:
      "Learn what the menstrual cycle is, the main parts of the female reproductive system, and what happens in the body month to month.",
    descAr:
      "تعرّفي على ما هي الدورة الشهرية، وأهم أجزاء الجهاز التناسلي الأنثوي، وماذا يحدث في الجسم شهراً بعد شهر.",
    youtubeId: "dRgcnrau7ic",
    steps: [
      {
        id: "what-is-cycle",
        titleEn: "What is the menstrual cycle?",
        titleAr: "ما هي الدورة الشهرية؟",
        bodyEn:
          "The menstrual cycle is a cycle that occurs every month in the female reproductive system. It often lasts about 28 days (and can commonly repeat in a 24–28 day range).",
        bodyAr:
          "الدورة الشهرية هي دورة تحدث كل شهر في الجهاز التناسلي الأنثوي. وغالباً ما تدوم حوالي ٢٨ يوماً (وقد تتكرر عادةً ضمن مدى ٢٤–٢٨ يوماً).",
        glossaryKeys: ["cycle", "menstruation"],
      },
      {
        id: "when-it-starts",
        titleEn: "When does it start?",
        titleAr: "متى تبدأ؟",
        bodyEn:
          "For many girls, the menstrual cycle begins between ages 10 and 15. Timing varies from person to person.",
        bodyAr:
          "بالنسبة لمعظم الفتيات، تبدأ الدورة الشهرية بين عمر ١٠ و١٥ سنة. وقد يختلف التوقيت من شخص لآخر.",
      },
      {
        id: "anatomy",
        titleEn: "The female reproductive system",
        titleAr: "أجزاء الجهاز التناسلي الأنثوي",
        bodyEn:
          "Key parts include: two ovaries, two fallopian tubes, one uterus, a cervix, and a vagina.",
        bodyAr:
          "تشمل الأجزاء الأساسية: مبيضين، وقناتي فالوب، ورحماً واحداً، وعنق الرحم، والمهبل.",
        glossaryKeys: ["ovary", "fallopian_tube", "uterus", "cervix", "vagina"],
      },
      {
        id: "egg-and-lining",
        titleEn: "What happens inside the body",
        titleAr: "ماذا يحدث داخل الجسم؟",
        bodyEn:
          "The uterine lining begins to grow, and an egg matures in one ovary. Around the middle of the cycle, the egg is released and travels through the fallopian tube toward the uterus.",
        bodyAr:
          "تبدأ بطانة الرحم بالنمو، وتنضج بويضة في أحد المبيضين. وفي منتصف الدورة تقريباً، تُطلق البويضة وتتحرك عبر قناة فالوب باتجاه الرحم.",
        glossaryKeys: ["uterine_lining", "egg", "ovulation"],
      },
      {
        id: "implant-or-shed",
        titleEn: "If the egg meets sperm (or not)",
        titleAr: "إذا التقت البويضة بحيوان منوي (أو لم تلتقِ)",
        bodyEn:
          "If the egg meets sperm, it can implant in the uterine lining and an embryo can begin to grow. If they don’t meet, the lining breaks down and leaves the body as menstrual blood—then the cycle repeats.",
        bodyAr:
          "إذا التقت البويضة بحيوان منوي، قد تنغرس في بطانة الرحم ويبدأ الجنين بالنمو. وإذا لم تلتقِ، تبدأ البطانة بالانفصال وتخرج من الجسم على شكل دم الدورة—ثم تتكرر الدورة.",
        glossaryKeys: ["sperm", "implantation", "embryo"],
      },
    ],
    accordions: [
      {
        id: "symptoms",
        titleEn: "Cramps, mood swings, and fatigue",
        titleAr: "المغص وتقلّبات المزاج والتعب",
        bodyEn:
          "Menstruation can cause cramps, mood swings, and fatigue. These symptoms are common, and support can help—rest, hydration, gentle movement, and talking to someone you trust.",
        bodyAr:
          "قد تسبب الدورة الشهرية مغصاً وتقلّبات مزاج وتعباً. هذه أعراض شائعة، وقد يساعد الدعم—الراحة، شرب الماء، حركة خفيفة، والحديث مع شخص موثوق.",
      },
      {
        id: "tracking",
        titleEn: "Tip: Track your cycle",
        titleAr: "نصيحة: تتبّعي دورتكِ",
        bodyEn:
          "Using a monthly calendar can help you prepare for your period and notice your patterns.",
        bodyAr:
          "استخدام تقويم شهري يساعدكِ على الاستعداد للدورة وملاحظة نمطكِ.",
      },
      {
        id: "ask-support",
        titleEn: "It’s okay to ask questions",
        titleAr: "من الطبيعي طرح الأسئلة",
        bodyEn:
          "If something is confusing or worrying, ask a friend, a trusted adult, or a health specialist.",
        bodyAr:
          "إذا كان هناك ما يربككِ أو يقلقكِ، اسألي صديقة أو شخصاً بالغاً موثوقاً أو مختصاً صحياً.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "The menstrual cycle happens every month in the female reproductive system.",
        questionAr: "تحدث الدورة الشهرية كل شهر في الجهاز التناسلي الأنثوي.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 0,
        explanationEn:
          "Correct. The cycle is a monthly process that prepares the body and repeats over time.",
        explanationAr:
          "صحيح. الدورة عملية شهرية تُحضّر الجسم وتتكرر مع الوقت.",
      },
      {
        id: "q2",
        questionEn: "Which parts are included in the female reproductive system (as described)?",
        questionAr: "أي أجزاء تُعد من الجهاز التناسلي الأنثوي (كما ورد)؟",
        optionsEn: [
          "Two ovaries, two fallopian tubes, uterus, cervix, vagina",
          "Heart, lungs, liver, kidneys",
          "Brain, eyes, ears, nose",
          "Stomach, intestines, pancreas",
        ],
        optionsAr: [
          "مبيضين، قناتي فالوب، الرحم، عنق الرحم، المهبل",
          "القلب والرئتان والكبد والكليتان",
          "الدماغ والعينان والأذنان والأنف",
          "المعدة والأمعاء والبنكرياس",
        ],
        correctIndex: 0,
        explanationEn:
          "Those are the reproductive organs mentioned in the explanation of how menstruation occurs.",
        explanationAr:
          "هذه هي الأعضاء التي ذُكرت في شرح كيفية حدوث الدورة الشهرية.",
      },
      {
        id: "q3",
        questionEn: "A menstrual cycle is always exactly 28 days for everyone.",
        questionAr: "الدورة الشهرية دائماً ٢٨ يوماً بالضبط عند الجميع.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 1,
        explanationEn:
          "False. 28 days is a common estimate, but cycles can vary (often around 24–28 days in the video).",
        explanationAr:
          "خطأ. ٢٨ يوماً تقدير شائع، لكن الدورات قد تختلف (وغالباً ضمن ٢٤–٢٨ يوماً كما ورد).",
      },
      {
        id: "q4",
        questionEn: "What happens if the egg meets sperm?",
        questionAr: "ماذا يحدث إذا التقت البويضة بحيوان منوي؟",
        optionsEn: [
          "The egg implants in the uterine lining and an embryo can grow",
          "The cycle stops forever",
          "The uterus disappears",
          "Nothing can happen",
        ],
        optionsAr: [
          "تنغرس البويضة في بطانة الرحم ويمكن أن ينمو الجنين",
          "تتوقف الدورة للأبد",
          "يختفي الرحم",
          "لا يمكن أن يحدث أي شيء",
        ],
        correctIndex: 0,
        explanationEn:
          "If fertilization happens, implantation can occur and the uterine lining helps nourish the embryo.",
        explanationAr:
          "إذا حدث الإخصاب، قد يحدث الانغراس وتساعد بطانة الرحم على تغذية الجنين.",
      },
    ],
    glossary: [
      {
        key: "ovary",
        termEn: "Ovary",
        termAr: "المبيض",
        definitionEn: "An organ that matures and releases eggs.",
        definitionAr: "عضو تنضج فيه البويضات وتُطلق منه.",
      },
      {
        key: "fallopian_tube",
        termEn: "Fallopian tube",
        termAr: "قناة فالوب",
        definitionEn: "A tube that the egg travels through toward the uterus.",
        definitionAr: "قناة تتحرك عبرها البويضة باتجاه الرحم.",
      },
      {
        key: "uterus",
        termEn: "Uterus",
        termAr: "الرحم",
        definitionEn: "A muscle organ where a pregnancy can grow.",
        definitionAr: "عضو عضلي يمكن أن ينمو فيه الحمل.",
      },
      {
        key: "cervix",
        termEn: "Cervix",
        termAr: "عنق الرحم",
        definitionEn: "The lower, narrow part of the uterus that connects to the vagina.",
        definitionAr: "الجزء السفلي الضيق من الرحم الذي يتصل بالمهبل.",
      },
      {
        key: "vagina",
        termEn: "Vagina",
        termAr: "المهبل",
        definitionEn: "A canal connecting the cervix to the outside of the body.",
        definitionAr: "قناة تصل عنق الرحم بخارج الجسم.",
      },
      {
        key: "uterine_lining",
        termEn: "Uterine lining",
        termAr: "بطانة الرحم",
        definitionEn: "The inner lining of the uterus that thickens and can later shed as a period.",
        definitionAr: "الطبقة الداخلية للرحم التي تزداد سماكتها وقد تنفصل لاحقاً في الدورة.",
      },
      {
        key: "egg",
        termEn: "Egg",
        termAr: "بويضة",
        definitionEn: "A reproductive cell that can be released from an ovary.",
        definitionAr: "خلية تناسلية يمكن أن تُطلق من المبيض.",
      },
      {
        key: "ovulation",
        termEn: "Ovulation",
        termAr: "الإباضة",
        definitionEn: "When an egg is released from an ovary.",
        definitionAr: "عندما تُطلق بويضة من المبيض.",
      },
      {
        key: "sperm",
        termEn: "Sperm",
        termAr: "حيوان منوي",
        definitionEn: "A male reproductive cell that can fertilize an egg.",
        definitionAr: "خلية تناسلية ذكرية يمكن أن تخصّب البويضة.",
      },
      {
        key: "implantation",
        termEn: "Implantation",
        termAr: "الانغراس",
        definitionEn: "When a fertilized egg attaches to the uterine lining.",
        definitionAr: "عندما تلتصق البويضة المخصبة ببطانة الرحم.",
      },
      {
        key: "embryo",
        termEn: "Embryo",
        termAr: "جنين",
        definitionEn: "Early stage of development after implantation.",
        definitionAr: "مرحلة مبكرة من التطور بعد الانغراس.",
      },
    ],
  },
  {
    id: 3,
    slug: "managing-periods",
    titleEn: "Episode 3: Managing Periods",
    titleAr: "الحلقة ٣: إدارة الدورة الشهرية",
    descEn:
      "Explore period product options, how often to change them, and practical hygiene + self-care tips to feel comfortable during your period.",
    descAr:
      "تعرّفي على خيارات منتجات الدورة الشهرية، ومتى يجب تغييرها، ونصائح للنظافة والرعاية الذاتية لتشعري بالراحة خلال الدورة.",
    youtubeId: "OPfSmAQvY9k",
    steps: [
      {
        id: "products-overview",
        titleEn: "So many options — what’s right for you?",
        titleAr: "خيارات كثيرة — ما الأنسب لكِ؟",
        bodyEn:
          "Pads, tampons, panty liners—there are many options. Each product has pros and cons. The best product is the one that feels comfortable and works for your body and your routine.",
        bodyAr:
          "فوط، سدادات قطنية، فوط يومية—هناك خيارات كثيرة. لكل منتج إيجابيات وسلبيات. الأفضل هو ما يجعلكِ مرتاحة ويناسب جسمكِ وروتينكِ.",
      },
      {
        id: "pads",
        titleEn: "Sanitary pads (disposable or reusable)",
        titleAr: "الفوط الصحية (استخدام مرة واحدة أو قابلة للغسل)",
        bodyEn:
          "Pads go inside underwear to absorb blood. Change them every 4–6 hours depending on flow. There are disposable pads and reusable pads that can be washed—often a more sustainable and cost-effective option.",
        bodyAr:
          "توضع الفوطة داخل الملابس الداخلية لامتصاص الدم. يجب تغييرها كل ٤–٦ ساعات حسب كمية النزيف. هناك فوط للاستخدام مرة واحدة وفوط قابلة للغسل—وغالباً تكون خياراً أكثر استدامة وأقل كلفة على المدى الطويل.",
        glossaryKeys: ["pad", "reusable_pad"],
      },
      {
        id: "period-underwear",
        titleEn: "Reusable period underwear",
        titleAr: "ملابس داخلية خاصة بالدورة",
        bodyEn:
          "Period underwear can have a built-in absorbent layer. Like pads, it may need changing every 4–6 hours depending on flow.",
        bodyAr:
          "قد تحتوي الملابس الداخلية الخاصة بالدورة على طبقة ماصّة مدمجة. مثل الفوط، قد تحتاج للتغيير كل ٤–٦ ساعات حسب كمية النزيف.",
        glossaryKeys: ["period_underwear"],
      },
      {
        id: "cup",
        titleEn: "Menstrual cups",
        titleAr: "كأس الحيض",
        bodyEn:
          "Menstrual cups are silicone cups. They can be emptied, cleaned, and reinserted, often every 10–12 hours (depending on flow).",
        bodyAr:
          "كأس الحيض هو كأس من السيليكون. يتم تفريغه وتنظيفه ثم إعادة إدخاله، وغالباً كل ١٠–١٢ ساعة (حسب كمية النزيف).",
        glossaryKeys: ["menstrual_cup"],
      },
      {
        id: "cotton",
        titleEn: "Cotton pads",
        titleAr: "القطن",
        bodyEn:
          "Cotton pads are a disposable option and should be changed every 4–6 hours depending on flow.",
        bodyAr:
          "القطن خيار للاستخدام مرة واحدة ويجب تغييره كل ٤–٦ ساعات حسب كمية النزيف.",
        glossaryKeys: ["cotton_pad"],
      },
    ],
    accordions: [
      {
        id: "hygiene",
        titleEn: "Personal hygiene (important)",
        titleAr: "النظافة الشخصية (مهم)",
        bodyEn:
          "Wash the genital area with warm water daily, but do not insert water into the vagina—your vagina cleans itself with natural secretions.",
        bodyAr:
          "اغسلي المنطقة التناسلية بالماء الدافئ يومياً، لكن لا تدخلي الماء إلى داخل المهبل—فهو ينظف نفسه بإفرازاته الطبيعية.",
      },
      {
        id: "preparedness",
        titleEn: "Be prepared",
        titleAr: "كوني مستعدة",
        bodyEn:
          "Try to always have period products with you so you’re prepared. It’s okay to ask for help if you need supplies.",
        bodyAr:
          "حاولي دائماً أن يكون معكِ مستلزمات الدورة لتكوني مستعدة. ومن الطبيعي طلب المساعدة إذا احتجتِ إلى مستلزمات.",
      },
      {
        id: "self-care",
        titleEn: "Comfort tips",
        titleAr: "نصائح للراحة",
        bodyEn:
          "Use a hot water bottle on your abdomen, stay active if you can, rest, and take painkillers when needed. Your period is a natural part of life—take care of yourself with love and relaxation.",
        bodyAr:
          "ضعي قِربة ماء ساخن على البطن، وكوني نشيطة إن استطعتِ، وخذي قسطاً من الراحة، وتناولي مسكناً عند الحاجة. دورتكِ جزء طبيعي من الحياة—اعتني بنفسكِ بحب وراحة.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "How often should pads usually be changed (depending on flow)?",
        questionAr: "عادةً كل كم ساعة يجب تغيير الفوط (حسب كمية النزيف)؟",
        optionsEn: ["Every 1–2 hours", "Every 4–6 hours", "Once a day", "Only when it smells"],
        optionsAr: ["كل ١–٢ ساعة", "كل ٤–٦ ساعات", "مرة يومياً", "فقط عند ظهور رائحة"],
        correctIndex: 1,
        explanationEn:
          "A common guideline is every 4–6 hours, but flow varies—change sooner if soaked or uncomfortable.",
        explanationAr:
          "إرشاد شائع هو كل ٤–٦ ساعات، لكن كمية النزيف تختلف—غيّريها أسرع إذا امتلأت أو سببت انزعاجاً.",
      },
      {
        id: "q2",
        questionEn: "Which product typically can be emptied and cleaned every 10–12 hours?",
        questionAr: "أي منتج يمكن عادةً تفريغه وتنظيفه كل ١٠–١٢ ساعة؟",
        optionsEn: ["Disposable pad", "Menstrual cup", "Cotton pad", "Panty liner"],
        optionsAr: ["فوطة للاستخدام مرة واحدة", "كأس الحيض", "قطن", "فوطة يومية"],
        correctIndex: 1,
        explanationEn:
          "Menstrual cups can often be worn longer (like 10–12 hours), but always follow the product instructions and your comfort.",
        explanationAr:
          "يمكن لكأس الحيض أن يُستخدم مدة أطول (مثل ١٠–١٢ ساعة)، لكن اتبعي تعليمات المنتج وما يناسب راحتكِ دائماً.",
      },
      {
        id: "q3",
        questionEn: "For hygiene, you should insert water inside the vagina to clean it.",
        questionAr: "للنظافة، يجب إدخال الماء إلى داخل المهبل لتنظيفه.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 1,
        explanationEn:
          "False. The vagina cleans itself with natural secretions. Wash the external genital area with warm water.",
        explanationAr:
          "خطأ. المهبل ينظف نفسه بإفرازاته الطبيعية. اغسلي المنطقة الخارجية بالماء الدافئ.",
      },
      {
        id: "q4",
        questionEn: "Which is a good comfort tip for cramps mentioned in the video?",
        questionAr: "أي نصيحة للراحة من المغص وردت في الفيديو؟",
        optionsEn: ["Hot water bottle on the abdomen", "Avoid resting completely", "Never move at all", "Only drink soda"],
        optionsAr: ["قِربة ماء ساخن على البطن", "تجنّب الراحة تماماً", "عدم الحركة إطلاقاً", "شرب المشروبات الغازية فقط"],
        correctIndex: 0,
        explanationEn:
          "Heat can help cramps. Rest, gentle activity, and pain relief when needed are also mentioned.",
        explanationAr:
          "الحرارة قد تساعد على المغص. كما ذُكرت الراحة والحركة الخفيفة ومسكنات الألم عند الحاجة.",
      },
    ],
    glossary: [
      {
        key: "pad",
        termEn: "Sanitary pad",
        termAr: "فوطة صحية",
        definitionEn: "An absorbent product placed in underwear to absorb menstrual blood.",
        definitionAr: "منتج ماص يوضع داخل الملابس الداخلية لامتصاص دم الدورة.",
      },
      {
        key: "reusable_pad",
        termEn: "Reusable pad",
        termAr: "فوطة قابلة للغسل",
        definitionEn: "A washable pad that can be reused, often more sustainable over time.",
        definitionAr: "فوطة يمكن غسلها وإعادة استخدامها، وغالباً أكثر استدامة على المدى الطويل.",
      },
      {
        key: "period_underwear",
        termEn: "Period underwear",
        termAr: "ملابس داخلية للدورة",
        definitionEn: "Underwear with an absorbent layer designed to hold menstrual blood.",
        definitionAr: "ملابس داخلية بطبقة ماصّة مصممة لامتصاص دم الدورة.",
      },
      {
        key: "menstrual_cup",
        termEn: "Menstrual cup",
        termAr: "كأس الحيض",
        definitionEn: "A silicone cup that collects menstrual blood and can be emptied and cleaned.",
        definitionAr: "كأس من السيليكون يجمع دم الدورة ويمكن تفريغه وتنظيفه.",
      },
      {
        key: "cotton_pad",
        termEn: "Cotton pad",
        termAr: "قطن",
        definitionEn: "Disposable cotton used as a period product that must be changed regularly.",
        definitionAr: "قطن للاستخدام مرة واحدة يُستخدم كمنتج للدورة ويجب تغييره بانتظام.",
      },
    ],
  },
  {
    id: 4,
    slug: "myths-and-taboos",
    titleEn: "Episode 4: Myths & Taboos",
    titleAr: "الحلقة ٤: الخرافات والمحرمات",
    descEn:
      "Let’s set the record straight. Learn common myths about menstruation, why they’re false, and how facts protect health and dignity.",
    descAr:
      "لنصحّح المفاهيم. تعرّفي على خرافات شائعة حول الدورة الشهرية، ولماذا هي غير صحيحة، وكيف تحمي الحقائق الصحة والكرامة.",
    youtubeId: "scDCUw0ZcGY",
    steps: [
      {
        id: "intro",
        titleEn: "Stop. None of that is true.",
        titleAr: "توقفي. هذا ليس صحيحاً.",
        bodyEn:
          "Many myths and taboos still exist about periods. Let’s erase common misconceptions and replace them with facts.",
        bodyAr:
          "لا تزال هناك خرافات ومحرمات كثيرة حول الدورة الشهرية. لنمحُ المفاهيم الخاطئة ونستبدلها بالحقائق.",
      },
      {
        id: "myth-1",
        titleEn: "Myth 1: Menstrual blood is “dirty”",
        titleAr: "الخرافة ١: دم الدورة “دم قذر”",
        bodyEn:
          "Truth: Menstruation is a normal, natural bodily function. Menstrual blood is just blood—and a sign your body is healthy.",
        bodyAr:
          "الحقيقة: الدورة الشهرية وظيفة طبيعية وصحية. دم الدورة هو دم طبيعي—وعلامة على أن الجسم يعمل بشكل صحي.",
        glossaryKeys: ["myth", "taboo", "stigma"],
      },
      {
        id: "myth-2",
        titleEn: "Myth 2: Starting a period means a girl is ready for marriage",
        titleAr: "الخرافة ٢: بدء الدورة يعني أن الفتاة جاهزة للزواج",
        bodyEn:
          "Truth: Menstruation does not mean someone is physically or mentally ready for marriage or pregnancy. Early pregnancy can cause serious health risks for both mother and child.",
        bodyAr:
          "الحقيقة: بدء الدورة لا يعني أن الفتاة جاهزة جسدياً أو نفسياً للزواج أو الحمل. الحمل المبكر قد يسبب مخاطر صحية خطيرة للأم والطفل.",
      },
      {
        id: "myth-3",
        titleEn: "Myth 3: Bathing stops period blood",
        titleAr: "الخرافة ٣: الاستحمام يوقف نزيف الدورة",
        bodyEn:
          "Truth: This is not true. Hygiene practices you do on normal days are still healthy during your period. Bathing can also help prevent odor.",
        bodyAr:
          "الحقيقة: هذا غير صحيح. ممارسات النظافة اليومية تبقى ضرورية وصحية أثناء الدورة. والاستحمام قد يساعد أيضاً في منع الروائح.",
      },
      {
        id: "myth-4",
        titleEn: "Myth 4: You shouldn’t exercise during your period",
        titleAr: "الخرافة ٤: لا يجب ممارسة الرياضة أثناء الدورة",
        bodyEn:
          "Truth: Movement and exercise can help relieve cramps. You don’t need to avoid activity—listen to your body and choose what feels right.",
        bodyAr:
          "الحقيقة: الحركة والرياضة قد تساعد على تخفيف المغص. لا داعي لتجنب النشاط—استمعي لجسمكِ واختاري ما يناسبكِ.",
        glossaryKeys: ["cramps"],
      },
      {
        id: "language",
        titleEn: "Call it what it is",
        titleAr: "سمّيه باسمه",
        bodyEn:
          "There’s no need to call it “the guest,” “the hidden,” or “that time of the month.” The menstrual cycle is the menstrual cycle. Naming it reduces shame.",
        bodyAr:
          "لا حاجة لتسميتها “الضيف” أو “الشيء المخفي” أو “هالأيام”. الدورة الشهرية هي الدورة الشهرية. تسميتها باسمها يقلل الخجل.",
      },
    ],
    accordions: [
      {
        id: "why-myths-harm",
        titleEn: "Why these myths are harmful",
        titleAr: "لماذا هذه الخرافات مؤذية؟",
        bodyEn:
          "Myths can create shame, block education, and pressure girls into unsafe decisions. Facts protect health, dignity, and choice.",
        bodyAr:
          "الخرافات قد تخلق شعوراً بالخجل، وتمنع التعليم، وتضغط على الفتيات لاتخاذ قرارات غير آمنة. الحقائق تحمي الصحة والكرامة والاختيار.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "Menstrual blood is “dirty blood.”",
        questionAr: "دم الدورة الشهرية “دم قذر”.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 1,
        explanationEn:
          "False. Menstruation is a natural bodily function, and menstrual blood is just blood.",
        explanationAr:
          "خطأ. الدورة وظيفة طبيعية، ودم الدورة هو دم طبيعي.",
      },
      {
        id: "q2",
        questionEn: "Starting menstruation means a girl is ready for marriage.",
        questionAr: "بدء الدورة يعني أن الفتاة جاهزة للزواج.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 1,
        explanationEn:
          "False. A period does not equal physical or mental readiness. Early pregnancy can be dangerous.",
        explanationAr:
          "خطأ. الدورة لا تعني الجاهزية الجسدية أو النفسية. الحمل المبكر قد يكون خطيراً.",
      },
      {
        id: "q3",
        questionEn: "Which statement is true?",
        questionAr: "أي عبارة صحيحة؟",
        optionsEn: [
          "Bathing during menstruation is unhealthy",
          "Exercise always makes cramps worse",
          "Bathing and gentle movement can be healthy during menstruation",
          "You should never talk about periods",
        ],
        optionsAr: [
          "الاستحمام أثناء الدورة غير صحي",
          "الرياضة دائماً تزيد المغص",
          "الاستحمام والحركة الخفيفة قد تكون صحية أثناء الدورة",
          "لا يجب الحديث عن الدورة أبداً",
        ],
        correctIndex: 2,
        explanationEn:
          "Hygiene is healthy during menstruation, and movement can help cramps. Listen to your body and choose what feels right.",
        explanationAr:
          "النظافة صحية أثناء الدورة، والحركة قد تساعد على تخفيف المغص. استمعي لجسمكِ واختاري ما يناسبكِ.",
      },
      {
        id: "q4",
        questionEn: "Using euphemisms (“the guest”) is necessary—periods shouldn’t be named.",
        questionAr: "استخدام تسميات بديلة (“الضيف”) ضروري—ولا يجب تسمية الدورة.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 1,
        explanationEn:
          "False. Naming menstruation clearly can reduce shame and make it easier to ask for help.",
        explanationAr:
          "خطأ. تسمية الدورة بوضوح قد يقلل الخجل ويسهّل طلب الدعم.",
      },
    ],
    glossary: [
      {
        key: "myth",
        termEn: "Myth",
        termAr: "خرافة",
        definitionEn: "A widely shared belief that is not true.",
        definitionAr: "اعتقاد شائع لكنه غير صحيح.",
      },
      {
        key: "taboo",
        termEn: "Taboo",
        termAr: "محرّم اجتماعي",
        definitionEn: "A topic people avoid discussing due to shame or social pressure.",
        definitionAr: "موضوع يتجنبه الناس بسبب الخجل أو ضغط المجتمع.",
      },
      {
        key: "stigma",
        termEn: "Stigma",
        termAr: "وصمة",
        definitionEn: "Shame or negative judgment that discourages people from seeking help.",
        definitionAr: "شعور بالخجل أو حكم سلبي يمنع الناس من طلب المساعدة.",
      },
      {
        key: "cramps",
        termEn: "Cramps",
        termAr: "مغص",
        definitionEn: "Pain in the lower abdomen that can happen during a period.",
        definitionAr: "ألم في أسفل البطن قد يحدث أثناء الدورة الشهرية.",
      },
    ],
  },
  {
    id: 5,
    slug: "men-can-support",
    titleEn: "Episode 5: How Men Can Support Menstruators",
    titleAr: "الحلقة ٥: كيف يمكن للرجل الدعم خلال الدورة الشهرية",
    descEn:
      "Menstruation is a human issue. Learn practical ways men can provide emotional, financial, and community support—so no one misses school or feels unsafe.",
    descAr:
      "الدورة الشهرية قضية إنسانية. تعرّف على طرق عملية يمكن للرجال من خلالها تقديم دعم عاطفي ومالي ومجتمعي—حتى لا تفوّت أي فتاة المدرسة أو تشعر بعدم الأمان.",
    youtubeId: "RE6LZIs9wkY",
    steps: [
      {
        id: "salma-story",
        titleEn: "Salma’s story (why support matters)",
        titleAr: "قصة سلمى (لماذا الدعم مهم؟)",
        bodyEn:
          "Salma dreamed of becoming an artist, but when her period started she couldn’t access menstrual products. She missed school classes and important events—like a drawing competition. Her story is one of many.",
        bodyAr:
          "كانت سلمى تحلم بأن تصبح فنانة، لكن عندما بدأت دورتها لم تستطع الحصول على مستلزمات الدورة. ففوتت حصص المدرسة وأحداثاً مهمة—مثل مسابقة رسم. قصة سلمى واحدة من قصص كثيرة.",
        glossaryKeys: ["menstrual_products", "period_poverty"],
      },
      {
        id: "emotional-support",
        titleEn: "Support type 1: Emotional support",
        titleAr: "النوع ١: الدعم العاطفي",
        bodyEn:
          "Simple actions matter: listen without judgment, avoid labeling, and ask caring questions like “How can I help you relieve the pain?” or “How does it feel?”",
        bodyAr:
          "الأفعال البسيطة تصنع فرقاً: استمع دون حكم، وتجنب الألقاب أو الوصم، واسأل أسئلة داعمة مثل: “كيف أستطيع مساعدتكِ لتخفيف الألم؟” أو “كيف تشعرين؟”.",
        glossaryKeys: ["emotional_support", "stigma"],
      },
      {
        id: "practical-support",
        titleEn: "Support type 2: Practical & financial support",
        titleAr: "النوع ٢: الدعم العملي والمالي",
        bodyEn:
          "If someone can’t afford products, buy them for them or on their behalf. Many women face harassment when buying menstrual products—men can help reduce that risk. You can also search for NGOs that provide supplies.",
        bodyAr:
          "إذا لم تستطع فتاة شراء المستلزمات، يمكنك شراؤها لها أو بالنيابة عنها. كثير من النساء يتعرضن للمضايقة عند شراء مستلزمات الدورة—ويمكن للرجال المساعدة في تقليل هذا الخطر. كما يمكنك البحث عن منظمات توفر المستلزمات.",
        glossaryKeys: ["harassment", "ngo"],
      },
      {
        id: "educate-others",
        titleEn: "Support type 3: Educate others",
        titleAr: "النوع ٣: تثقيف الآخرين",
        bodyEn:
          "Not everyone has the same knowledge about puberty and menstruation. Share accurate information, help dispel myths, and share this video with men you know as a first step.",
        bodyAr:
          "ليس لدى الجميع نفس المعرفة عما يحدث أثناء البلوغ والدورة. شارك معلومات صحيحة، وساعد في دحض الخرافات، وشارك هذا الفيديو مع الرجال الذين تعرفهم كخطوة أولى.",
      },
    ],
    accordions: [
      {
        id: "human-issue",
        titleEn: "Menstruation is a human issue",
        titleAr: "الدورة الشهرية قضية إنسانية",
        bodyEn:
          "Supporting menstruation supports education, safety, and dignity—not only for daughters or relatives, but for all women and girls.",
        bodyAr:
          "دعم الدورة الشهرية يعني دعم التعليم والسلامة والكرامة—ليس فقط للبنات أو القريبات، بل لكل النساء والفتيات.",
      },
      {
        id: "quick-checklist",
        titleEn: "Quick checklist for support",
        titleAr: "قائمة سريعة للدعم",
        bodyEn:
          "Listen. Ask how you can help. Offer to buy products. Help find support organizations. Share accurate information and challenge myths.",
        bodyAr:
          "استمع. اسأل كيف تساعد. اعرض شراء المستلزمات. ساعد في إيجاد جهات داعمة. شارك معلومات صحيحة وتحدَّ الخرافات.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "Which is an example of emotional support mentioned in the episode?",
        questionAr: "أي مثال للدعم العاطفي ورد في الحلقة؟",
        optionsEn: [
          "Telling her to stay silent",
          "Asking: “How can I help you relieve the pain?”",
          "Labeling her as “dirty”",
          "Ignoring her completely",
        ],
        optionsAr: [
          "إخبارها أن تلتزم الصمت",
          "سؤال: “كيف أستطيع مساعدتكِ لتخفيف الألم؟”",
          "وصفها بأنها “غير نظيفة”",
          "تجاهلها تماماً",
        ],
        correctIndex: 1,
        explanationEn:
          "Listening, asking caring questions, and avoiding labeling are forms of emotional support.",
        explanationAr:
          "الاستماع وطرح أسئلة داعمة وتجنب الوصم هي أشكال من الدعم العاطفي.",
      },
      {
        id: "q2",
        questionEn: "What is one practical way men can support someone who can’t afford products?",
        questionAr: "ما طريقة عملية يمكن للرجل من خلالها دعم من لا تستطيع شراء المستلزمات؟",
        optionsEn: [
          "Buy menstrual products for them or on their behalf",
          "Tell them to stop talking about it",
          "Blame them for needing supplies",
          "Make fun of them",
        ],
        optionsAr: [
          "شراء مستلزمات الدورة لها أو بالنيابة عنها",
          "إخبارها أن تتوقف عن الحديث",
          "لومها على حاجتها للمستلزمات",
          "السخرية منها",
        ],
        correctIndex: 0,
        explanationEn:
          "The episode encourages practical support too—especially for someone who can’t access products safely.",
        explanationAr:
          "تشجع الحلقة على الدعم العملي أيضاً—خصوصاً لمن لا تستطيع الحصول على المستلزمات بأمان.",
      },
      {
        id: "q3",
        questionEn: "Menstruation is only a women’s issue.",
        questionAr: "الدورة الشهرية قضية تخص النساء فقط.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 1,
        explanationEn:
          "False. The episode says menstruation is a human issue—supporting it supports education, safety, and dignity.",
        explanationAr:
          "خطأ. تقول الحلقة إن الدورة قضية إنسانية—ودعمها يعني دعم التعليم والسلامة والكرامة.",
      },
      {
        id: "q4",
        questionEn: "Why might buying products on someone’s behalf help?",
        questionAr: "لماذا قد يساعد شراء المستلزمات بالنيابة عن فتاة؟",
        optionsEn: [
          "It can reduce harassment some women face when buying products",
          "It stops periods permanently",
          "It replaces education",
          "It guarantees no cramps",
        ],
        optionsAr: [
          "قد يقلل المضايقات التي قد تتعرض لها بعض النساء عند الشراء",
          "يوقف الدورة نهائياً",
          "يستبدل التعليم",
          "يضمن عدم وجود مغص",
        ],
        correctIndex: 0,
        explanationEn:
          "The episode mentions harassment can happen when buying products, so men can help reduce risk by buying supplies.",
        explanationAr:
          "ذُكر أن المضايقة قد تحدث عند شراء المستلزمات، لذلك يمكن للرجال المساعدة بتوفيرها.",
      },
    ],
    glossary: [
      {
        key: "menstrual_products",
        termEn: "Menstrual products",
        termAr: "مستلزمات الدورة",
        definitionEn: "Items used to manage bleeding, like pads, cups, or period underwear.",
        definitionAr: "أدوات لإدارة النزيف مثل الفوط أو الكأس أو الملابس الداخلية الخاصة.",
      },
      {
        key: "period_poverty",
        termEn: "Period poverty",
        termAr: "فقر الدورة",
        definitionEn: "When someone cannot afford or access menstrual products safely.",
        definitionAr: "عندما لا تستطيع فتاة شراء أو الحصول على مستلزمات الدورة بأمان.",
      },
      {
        key: "emotional_support",
        termEn: "Emotional support",
        termAr: "الدعم العاطفي",
        definitionEn: "Listening, asking caring questions, and offering understanding without judgment.",
        definitionAr: "الاستماع وطرح أسئلة داعمة وتقديم تفهّم دون حكم.",
      },
      {
        key: "stigma",
        termEn: "Stigma",
        termAr: "وصمة",
        definitionEn: "Shame or negative judgment that discourages people from seeking help.",
        definitionAr: "شعور بالخجل أو حكم سلبي يمنع الناس من طلب المساعدة.",
      },
      {
        key: "harassment",
        termEn: "Harassment",
        termAr: "مضايقة",
        definitionEn: "Unwanted behavior that can make someone feel unsafe—sometimes faced when buying products.",
        definitionAr: "سلوك غير مرغوب قد يجعل الشخص غير آمن—وقد يحدث عند شراء المستلزمات.",
      },
      {
        key: "ngo",
        termEn: "NGO",
        termAr: "منظمة غير حكومية",
        definitionEn: "An organization that may provide support or supplies to people in need.",
        definitionAr: "منظمة قد تقدم دعماً أو مستلزمات لمن يحتاج.",
      },
    ],
  },
  {
    id: 6,
    slug: "menopause",
    titleEn: "Episode 6: Menopause",
    titleAr: "الحلقة ٦: انقطاع الطمث",
    descEn:
      "Menopause is a natural life stage. Learn what changes happen in the body, typical age ranges, common symptoms, and supportive self-care tips.",
    descAr:
      "انقطاع الطمث مرحلة طبيعية من الحياة. تعرّفي على التغيّرات التي تحدث في الجسم، والأعمار الشائعة، والأعراض المحتملة، ونصائح للرعاية الذاتية والدعم.",
    youtubeId: "WqjrpB_aAzI",
    steps: [
      {
        id: "what-is-menopause",
        titleEn: "What is menopause?",
        titleAr: "ما هو انقطاع الطمث؟",
        bodyEn:
          "Menopause is one of the most important stages in a woman’s life. If you’re going through it—or supporting someone who is—there’s no need to be afraid when you have the right information.",
        bodyAr:
          "انقطاع الطمث من أهم مراحل حياة المرأة. إذا كنتِ تمرّين بها أو تدعمين شخصاً يمرّ بها، فلا داعي للخوف عندما تكون لديكِ المعلومات الصحيحة.",
        glossaryKeys: ["menopause", "premenopause", "estrogen"],
      },
      {
        id: "eggs-and-ovaries",
        titleEn: "Egg supply and ovaries",
        titleAr: "المخزون من البويضات والمبايض",
        bodyEn:
          "A female is born with a large supply of eggs stored in the ovaries (often described as around one million). Over time, the number decreases.",
        bodyAr:
          "تولد الأنثى بمخزون كبير من البويضات مخزّن في المبايض (وغالباً ما يُذكر أنه حوالي مليون). ومع الوقت يبدأ العدد بالانخفاض.",
        glossaryKeys: ["egg", "ovary"],
      },
      {
        id: "premenopause",
        titleEn: "Premenopause (stable estrogen)",
        titleAr: "مرحلة ما قبل الانقطاع (إستروجين مستقر)",
        bodyEn:
          "Premenopause lasts until the late 30s or early 40s. Estrogen levels are generally stable during this stage.",
        bodyAr:
          "تستمر مرحلة ما قبل الانقطاع حتى أواخر الثلاثينات أو أوائل الأربعينات. تكون مستويات الإستروجين غالباً مستقرة في هذه المرحلة.",
      },
      {
        id: "perimenopause",
        titleEn: "Perimenopause (estrogen declines, ovulation becomes irregular)",
        titleAr: "ما قبل الانقطاع مباشرة (انخفاض الإستروجين وعدم انتظام الإباضة)",
        bodyEn:
          "In the late 30s or early 40s, estrogen levels begin to decline. Eggs decrease and ovulation can become irregular. This stage comes before the final menstrual cycle.",
        bodyAr:
          "في أواخر الثلاثينات أو أوائل الأربعينات تبدأ مستويات الإستروجين بالانخفاض. يقل عدد البويضات وقد تصبح الإباضة غير منتظمة. وتسبق هذه المرحلة آخر دورة شهرية.",
        glossaryKeys: ["ovulation", "perimenopause"],
      },
      {
        id: "when-menopause",
        titleEn: "When does menopause happen?",
        titleAr: "متى يحدث انقطاع الطمث؟",
        bodyEn:
          "The final menstrual cycle often happens between ages 45 and 55, with an average around 51. After 12 months without a period, menopause is officially reached.",
        bodyAr:
          "غالباً ما تحدث آخر دورة شهرية بين عمر ٤٥ و٥٥، بمتوسط حوالي ٥١. وبعد ١٢ شهراً دون دورة، يكون انقطاع الطمث قد حدث رسمياً.",
      },
      {
        id: "symptoms-and-positive",
        titleEn: "Symptoms (and positive changes)",
        titleAr: "الأعراض (وتغيّرات إيجابية)",
        bodyEn:
          "Some women may experience mood swings, depression, decreased sex drive, hot flashes, or other symptoms. Menopause is natural and can also bring positive changes—like the end of menstrual cramps.",
        bodyAr:
          "قد تعاني بعض النساء من تقلّبات المزاج أو اكتئاب أو انخفاض الرغبة الجنسية أو هبّات ساخنة أو أعراض أخرى. انقطاع الطمث طبيعي وقد يحمل تغيّرات إيجابية—مثل انتهاء مغص الدورة.",
        glossaryKeys: ["hot_flashes"],
      },
      {
        id: "tips",
        titleEn: "Supportive tips",
        titleAr: "نصائح للدعم",
        bodyEn:
          "Prioritize self-care, relax, eat a balanced diet, stay active, and don’t be afraid to ask for help. Share experiences with friends and specialists for support.",
        bodyAr:
          "أعطي الأولوية للرعاية الذاتية، واسترخي، وتناولي غذاءً متوازناً، وكوني نشيطة، ولا تخافي من طلب المساعدة. شاركي تجاربكِ مع الأصدقاء والمختصين للحصول على دعم.",
      },
    ],
    accordions: [
      {
        id: "not-decline",
        titleEn: "Menopause does not mean decline",
        titleAr: "انقطاع الطمث لا يعني التراجع",
        bodyEn:
          "Menopause is a natural stage of life. With the right information and support, people can navigate it with dignity and confidence.",
        bodyAr:
          "انقطاع الطمث مرحلة طبيعية من الحياة. ومع المعلومات الصحيحة والدعم، يمكن المرور بها بكرامة وثقة.",
      },
    ],
    quiz: [
      {
        id: "q1",
        questionEn: "Menopause is a natural life stage.",
        questionAr: "انقطاع الطمث مرحلة طبيعية من الحياة.",
        optionsEn: ["True", "False"],
        optionsAr: ["صحيح", "خطأ"],
        correctIndex: 0,
        explanationEn:
          "Correct. Menopause is a normal stage, and having accurate information can reduce fear and stigma.",
        explanationAr:
          "صحيح. انقطاع الطمث مرحلة طبيعية، والمعلومات الصحيحة تقلل الخوف والوصمة.",
      },
      {
        id: "q2",
        questionEn: "Menopause is officially reached after how long without a period?",
        questionAr: "يُعتبر انقطاع الطمث قد حدث رسمياً بعد كم مدة دون دورة؟",
        optionsEn: ["1 month", "3 months", "6 months", "12 months"],
        optionsAr: ["شهر واحد", "٣ أشهر", "٦ أشهر", "١٢ شهراً"],
        correctIndex: 3,
        explanationEn:
          "Menopause is typically defined as 12 months without a menstrual cycle.",
        explanationAr:
          "يُعرَّف انقطاع الطمث عادةً بأنه مرور ١٢ شهراً دون دورة شهرية.",
      },
      {
        id: "q3",
        questionEn: "Which age range is commonly mentioned for the final menstrual cycle?",
        questionAr: "أي مدى عمري يُذكر عادةً لآخر دورة شهرية؟",
        optionsEn: ["20–30", "30–40", "45–55", "60–70"],
        optionsAr: ["٢٠–٣٠", "٣٠–٤٠", "٤٥–٥٥", "٦٠–٧٠"],
        correctIndex: 2,
        explanationEn:
          "The episode notes the final cycle often occurs between 45 and 55, with an average around 51.",
        explanationAr:
          "تذكر الحلقة أن آخر دورة غالباً بين ٤٥ و٥٥، بمتوسط حوالي ٥١.",
      },
      {
        id: "q4",
        questionEn: "Which can be a possible menopause symptom mentioned in the episode?",
        questionAr: "أي مما يلي قد يكون عرضاً محتملاً ذُكر في الحلقة؟",
        optionsEn: ["Hot flashes", "Mood swings", "Decreased sex drive", "All of the above"],
        optionsAr: ["هبّات ساخنة", "تقلّبات المزاج", "انخفاض الرغبة الجنسية", "جميع ما سبق"],
        correctIndex: 3,
        explanationEn:
          "All of these were mentioned as possible symptoms. Experiences vary from person to person.",
        explanationAr:
          "ذُكرت كلها كأعراض محتملة. التجربة تختلف من شخص لآخر.",
      },
    ],
    glossary: [
      {
        key: "menopause",
        termEn: "Menopause",
        termAr: "انقطاع الطمث",
        definitionEn: "A life stage reached after 12 months without a menstrual cycle.",
        definitionAr: "مرحلة تُعرف بمرور ١٢ شهراً دون دورة شهرية.",
      },
      {
        key: "premenopause",
        termEn: "Premenopause",
        termAr: "ما قبل الانقطاع",
        definitionEn: "The stage before menopause when estrogen levels are generally stable.",
        definitionAr: "مرحلة تسبق الانقطاع حيث تكون مستويات الإستروجين غالباً مستقرة.",
      },
      {
        key: "perimenopause",
        termEn: "Perimenopause",
        termAr: "ما قبل الانقطاع مباشرة",
        definitionEn: "A transition stage when estrogen declines and cycles can become irregular.",
        definitionAr: "مرحلة انتقالية ينخفض فيها الإستروجين وقد تصبح الدورات غير منتظمة.",
      },
      {
        key: "estrogen",
        termEn: "Estrogen",
        termAr: "الإستروجين",
        definitionEn: "A hormone that plays a major role in reproductive health and cycles.",
        definitionAr: "هرمون يلعب دوراً أساسياً في الصحة الإنجابية والدورات.",
      },
      {
        key: "ovary",
        termEn: "Ovary",
        termAr: "المبيض",
        definitionEn: "An organ that stores eggs and can release them during ovulation.",
        definitionAr: "عضو يخزن البويضات وقد يطلقها أثناء الإباضة.",
      },
      {
        key: "egg",
        termEn: "Egg",
        termAr: "بويضة",
        definitionEn: "A reproductive cell stored in the ovaries.",
        definitionAr: "خلية تناسلية تُخزن في المبايض.",
      },
      {
        key: "ovulation",
        termEn: "Ovulation",
        termAr: "الإباضة",
        definitionEn: "When an egg is released from an ovary.",
        definitionAr: "عندما تُطلق بويضة من المبيض.",
      },
      {
        key: "hot_flashes",
        termEn: "Hot flashes",
        termAr: "هبّات ساخنة",
        definitionEn: "Sudden feelings of heat that can occur during menopause.",
        definitionAr: "شعور مفاجئ بالحرارة قد يحدث أثناء انقطاع الطمث.",
      },
    ],
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
