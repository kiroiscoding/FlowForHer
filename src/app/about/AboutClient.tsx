"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutClient() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const t = {
    manifestoTitle: isAr ? "الكرامة\nليست\nاختياراً" : "Dignity\nIs Not\nOptional",
    manifestoBody: isAr
      ? "الدورة الشهرية ليست سراً؛ إنها حق من حقوق الإنسان. نحن نكسر الصمت في سوريا لنستعيد الاستقلالية والنظافة والصحة لجيلٍ من النساء اللواتي شُرِّدن بسبب الصراع."
      : "Menstruation is not a secret; it is a human right. We are breaking the silence in Syria to restore autonomy, hygiene, and health to a generation of women displaced by conflict.",

    problemTitle: isAr ? "الأزمة غير المرئية" : "The Invisible Crisis",
    problemP1: isAr
      ? "عند تقاطع الصراع الممتد والنزوح الجماعي والوصمة الثقافية العميقة، أصبحت صحة الدورة الشهرية ضحية صامتة. بالنسبة لآلاف النساء والفتيات في سوريا، فإن نقص المنتجات يتضاعف بسبب نقص المعلومات."
      : "In the intersection of protracted conflict, mass displacement, and deep-seated cultural stigma, menstrual health has become a silent casualty. For thousands of women and girls in Syria, the lack of access to products is compounded by a lack of access to information.",
    problemP2: isAr
      ? "هذه ليست مشكلة نظافة فقط؛ إنها حاجز أمام التعليم والمشاركة الاجتماعية. عندما تصبح عملية بيولوجية طبيعية مصدراً للخجل والعزلة، نخسر إمكانيات كاملة."
      : "This is not just a hygiene issue; it is a barrier to education and social participation. When a natural biological process becomes a source of shame and isolation, potential is lost.",

    solutionTitle: isAr ? "اللغة كاستقلالية" : "Language as Autonomy",
    solutionP1: isAr
      ? "Flow For Her منصة تعليمية ثنائية اللغة صُممت لسدّ الفجوة. عندما نوفر الموارد بالعربية والإنجليزية، نحن لا نترجم كلمات فقط؛ نحن نترجم الرعاية."
      : "Flow For Her is a bilingual educational platform designed to bridge the gap. By providing resources in both Arabic and English, we are not just translating words; we are translating care.",
    solutionP2: isAr
      ? "نؤمن أن فهم الجسد لا يجب أن يعتمد على الجغرافيا أو اللغة. منصتنا تمنح المستخدمين مفرداتٍ للدفاع عن صحتهم، وتحول الصمت إلى معرفة متخصصة، والخوف إلى قدرة على الفعل."
      : "We believe that understanding one's body shouldn't depend on geography or language. Our platform empowers users with the vocabulary to advocate for their own health, turning silence into specialized knowledge and fear into agency.",

    rippleTitle: isAr ? "أثرٌ يمتد" : "The Ripple Effect",
    rippleBody: isAr
      ? "تثقيف فتاة واحدة لا يتوقف عندها. إنه يغير أسرة، ويحرّك معايير مجتمع. عندما نوفر أدوات إدارة الدورة الشهرية، نحن نستثمر في صمود الصحة العامة على المدى الطويل. فتاة تعرف حقوقها اليوم تصبح امرأة تدافع عن صحة مجتمعها غداً."
      : "Educating one girl does not stop with her. It transforms a family. It shifts the standards of a community. When we provide the tools for menstrual management, we are investing in the long-term public health resilience of the region. A girl who knows her rights today becomes a woman who defends the health of her community tomorrow.",

    founderName: "Giuliana Farraj",
    founderRole: isAr ? "المؤسِّسة وصاحبة الرؤية" : "Founder & Visionary",
    founderSchool: isAr ? "ثانوية هانتلي\nGlobal Scholar" : "Huntley High School\nGlobal Scholar",
    founderLink: isAr ? "مشروع التخرج — Global Scholar" : "Global Scholar Capstone",
    founderSection1Title: isAr ? "ربط العوالم" : "Bridging Worlds",
    founderSection1P1: isAr
      ? "لماذا تكرّس طالبة في الولايات المتحدة وقتها لأزمة في سوريا؟ بالنسبة لجيوليانا فرّاج، الإجابة تبدأ من مسؤولية المواطنة العالمية. إنها ترى أن امتياز التعليم يحمل واجب الفعل."
      : "Why does a student in the United States dedicate herself to a crisis in Syria? For Giuliana Farraj, the answer lies in the responsibility of global citizenship. She recognizes that the privilege of education carries the mandate to act.",
    founderSection1P2: isAr
      ? "رؤيتها قائمة على أن المناصرة يجب أن تكون متخصصة لتكون فعّالة. ليس كافياً إرسال المساعدات؛ بل يجب بناء أنظمة للفهم. Flow For Her تجسيدٌ لدافعها لمعالجة اللامساواة عبر تعليم موجَّه ومتوافق ثقافياً."
      : "Her vision is rooted in the belief that advocacy must be specialized to be effective. It is not enough to send aid; one must build systems of understanding. Flow For Her is the manifestation of her drive to solve global inequalities through targeted, culturally competent education.",
    founderSection2Title: isAr ? "التزام مشروع التخرج" : "The Capstone Commitment",
    founderSection2P: isAr
      ? "تمثل هذه المنصة مشروع تخرج جيوليانا ضمن برنامج Global Scholar، وخلاصة التزامٍ صارم امتد لعام كامل لتطوير الكفاءة العالمية. إنها انتقال من الدراسة إلى العمل الإنساني—بتطبيق مفاهيم العلاقات الدولية والصحة العامة على سياقٍ واقعي عاجل."
      : "This platform serves as Giuliana's Global Scholar Capstone project, the culmination of a rigorous year-long commitment to developing global competence. It represents the transition from academic study to humanitarian action—applying classroom theories of international relations and public health to a real-world, urgent context.",
    founderFutureTitle: isAr ? "المسار القادم" : "Future Trajectory",
    founderFuture1: isAr ? "مسار متوقع في الصحة العالمية والعلاقات الدولية." : "Projected path in Global Health and International Relations.",
    founderFuture2: isAr ? "التزام بالمناصرة السياسية للنساء والفتيات المُهجَّرات." : "Dedicated to policy advocacy for displaced women and girls.",
    founderFuture3: isAr ? "استمرار التفوق الأكاديمي ضمن Global Academy في ثانوية هانتلي." : "Continuing academic excellence as a representative of Huntley High School's Global Academy.",

    builderName: "Kerellos Abdelmalak",
    builderRole: isAr ? "مطوّر ويب وقائد تقني" : "Web Developer & Technical Lead",
    builderSchool: isAr ? "ثانوية هانتلي\nالصف الأخير" : "Huntley High School\nSenior",
    builderLink: "Kerellos.com",
    builderSection1Title: isAr ? "بُني لأجل الأثر" : "Built for Impact",
    builderSection1P1: isAr
      ? "يقود كيريلوس التنفيذ التقني خلف Flow For Her، محوِّلاً هوية بصرية جريئة إلى تجربة ويب سريعة ومتاحة وموثوقة. دوره هو هندسة منصة يمكنها التوسع مع نمو الرسالة."
      : "Kerellos leads the technical execution behind Flow For Her, translating a bold visual identity into a fast, accessible, and reliable web experience. His role is to architect a platform that can scale as the mission grows.",
    builderSection1P2: isAr
      ? "أصوله من مصر تمنحه فهماً لكيف تشكل اللغة والثقافة وإمكانية الوصول وصول التعليم فعلياً للناس. لهذا يبني هذا المشروع: لتقديم تعلم ثنائي اللغة واضح وسهل الاستخدام على أي هاتف وفي أي مكان."
      : "Originally from Egypt, he understands how language, culture, and access shape whether education actually reaches people. That proximity to the region is part of why he is building this project: to help deliver clear, bilingual learning that is easy to use on any phone, anywhere.",
    builderSection1P3: isAr
      ? "وهو أيضاً Finalist في NASA ADC 2025، ويجلب نفس التركيز على التنفيذ والتحسين والتسليم إلى رسالة تستحق جودة حقيقية، لا نموذجاً متسرعاً."
      : "He is also a NASA ADC 2025 Finalist, bringing the same competition-tested focus on execution, iteration, and delivery to a mission that deserves real quality, not a rushed prototype.",

    builderSection2Title: isAr ? "تصميمٌ مُنظَّم" : "Design, Systematized",
    builderSection2P: isAr
      ? "من ثيمات الصفحات حسب المسار إلى تنسيق الحركة، يضمن كيريلوس أن يبدو الموقع متماسكاً على كل صفحة وكل جهاز. الهدف نظام تصميم مقصود حيث الخط واللون والمسافات والحركة تعزز الثقة."
      : "From route-based theming to animation choreography, Kerellos ensures the site feels cohesive across every page and every device. The goal is a design system that reads as intentional, where typography, color, spacing, and motion reinforce trust.",

    builderFutureTitle: isAr ? "المسار القادم" : "Future Trajectory",
    builderFuture1: isAr ? "مسار هندسة كهربائية مع تركيز على بناء أنظمة تعمل في الواقع." : "Electrical Engineering track with a focus on building systems that work in the real world.",
    builderFuture2: isAr ? "مشاريع جانبية عديدة تصقل السرعة وحل المشكلات والحِرفة." : "Many side projects that sharpen speed, problem-solving, and craft.",
    builderFuture3: isAr ? "عمل موجَّه بالرسالة يحول التصميم إلى وصول—خصوصاً للتعليم والصحة." : "Mission-driven work that turns design into access, especially for education and health.",
  };

  const align = isAr ? "text-right" : "text-left";

  return (
    <div className={`min-h-screen bg-brand-deep-burgundy text-brand-cream font-sans ${align}`}>
      {/* SECTION ONE: THE MOVEMENT */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 border-b border-brand-cream/10">
        <div className="max-w-6xl mx-auto">
          {/* The Manifesto */}
          <div className="mb-24">
            <h1 className="font-display text-[clamp(2.75rem,12vw,4.25rem)] md:text-9xl uppercase leading-[0.9] md:leading-[0.8] mb-8 text-balance max-w-[94vw] whitespace-pre-line">
              {t.manifestoTitle}
            </h1>
            <p
              className={[
                "text-xl md:text-3xl font-light leading-relaxed max-w-3xl",
                isAr ? "border-r-4 pr-6" : "border-l-4 pl-6",
                "border-brand-red",
              ].join(" ")}
            >
              {t.manifestoBody}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* The Problem */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 text-brand-red">
                {t.problemTitle}
              </h2>
              <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed">
                <p>{t.problemP1}</p>
                <p>{t.problemP2}</p>
              </div>
            </div>

            {/* The Solution */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 text-brand-amber">
                {t.solutionTitle}
              </h2>
              <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed">
                <p>{t.solutionP1}</p>
                <p>{t.solutionP2}</p>
              </div>
            </div>
          </div>

          {/* The Ripple Effect */}
          <div className="bg-brand-cream/5 rounded-[3rem] p-10 md:p-16">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">{t.rippleTitle}</h2>
            <p className="text-lg md:text-2xl leading-relaxed max-w-4xl">{t.rippleBody}</p>
          </div>
        </div>
      </section>

      {/* SECTION TWO: THE FOUNDER */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-brand-cream text-brand-deep-burgundy">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Profile Header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              {/* Photo */}
              <div className="aspect-[3/4] w-full max-w-sm bg-brand-deep-burgundy/10 rounded-2xl mb-8 relative overflow-hidden">
                <Image
                  src="/giuliana-farraj-headshot.png"
                  alt={isAr ? "صورة جيوليانا فرّاج" : "Giuliana Farraj headshot"}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] mb-4 text-brand-red break-words">
                Giuliana <br /> Farraj
              </h2>
              <p className="text-xl font-bold uppercase tracking-widest mb-2">{t.founderRole}</p>
              <div className="flex items-start justify-between gap-6 mb-8">
                <p className="text-lg opacity-80 whitespace-pre-line">{t.founderSchool}</p>
                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 -mt-6 transform -translate-x-6 md:-translate-x-4">
                  <Image
                    src="/IllinoisglobalScholarCertificate.png"
                    alt={isAr ? "شارة Global Scholar" : "Illinois Global Scholar Certificate badge"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <a
                href="https://global-illinois.org/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b-2 border-brand-deep-burgundy pb-1 hover:opacity-75 transition-opacity"
              >
                <span className="uppercase font-bold tracking-wide">{t.founderLink}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-7 space-y-16 lg:pt-8">
            {/* The Vision */}
            <div>
              <h3 className="font-display text-4xl uppercase mb-6">{t.founderSection1Title}</h3>
              <p className="text-xl leading-relaxed mb-6">{t.founderSection1P1}</p>
              <p className="text-xl leading-relaxed">{t.founderSection1P2}</p>
            </div>

            {/* The Capstone */}
            <div>
              <h3 className="font-display text-4xl uppercase mb-6">{t.founderSection2Title}</h3>
              <p className="text-xl leading-relaxed">{t.founderSection2P}</p>
            </div>

            {/* Professional Path */}
            <div className="bg-brand-deep-burgundy text-brand-cream p-10 rounded-3xl">
              <h3 className="font-display text-3xl uppercase mb-6 text-brand-amber">{t.founderFutureTitle}</h3>
              <ul className="space-y-4 text-lg">
                {[t.founderFuture1, t.founderFuture2, t.founderFuture3].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION THREE: THE BUILDER */}
      <section className="py-20 md:py-24 px-6 md:px-12 border-t border-brand-cream/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Profile Header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              {/* Photo */}
              <div className="aspect-[3/4] w-full max-w-sm bg-brand-cream/10 rounded-2xl mb-8 relative overflow-hidden">
                <Image
                  src="/kerellos-abdelmalak-headshot.png"
                  alt={isAr ? "صورة كيريلوس عبد الملاك" : "Kerellos Abdelmalak headshot"}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="font-display text-[clamp(2rem,8vw,3rem)] sm:text-[clamp(1.35rem,5vw,2.2rem)] md:text-3xl lg:text-4xl uppercase leading-[0.82] mb-4 text-brand-cream break-words max-w-[15ch]">
                Kerellos <br /> Abdelmalak
              </h2>
              <p className="text-xl font-bold uppercase tracking-widest mb-2 text-brand-amber">{t.builderRole}</p>
              <div className="flex items-start justify-between gap-6 mb-8">
                <p className="text-lg opacity-80 whitespace-pre-line">{t.builderSchool}</p>
                <div className="relative w-20 h-20 md:w-20 md:h-20 shrink-0 -mt-2 transform -translate-x-6 md:-translate-x-4">
                  <Image src="/NASA_Badge.png" alt="NASA ADC badge" fill className="object-contain" />
                </div>
              </div>

              <a
                href="https://kerellos.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b-2 border-brand-cream/80 pb-1 hover:opacity-80 transition-opacity"
              >
                <span className="uppercase font-bold tracking-wide">{t.builderLink}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-7 space-y-16 lg:pt-8">
            <div>
              <h3 className="font-display text-4xl uppercase mb-6 text-brand-red">{t.builderSection1Title}</h3>
              <p className="text-xl leading-relaxed mb-6 opacity-90">{t.builderSection1P1}</p>
              <p className="text-xl leading-relaxed opacity-90">{t.builderSection1P2}</p>
              <p className="text-xl leading-relaxed opacity-90 mt-6">{t.builderSection1P3}</p>
            </div>

            <div>
              <h3 className="font-display text-3xl md:text-4xl uppercase mb-6 text-brand-amber">{t.builderSection2Title}</h3>
              <p className="text-xl leading-relaxed opacity-90">{t.builderSection2P}</p>
            </div>

            <div className="bg-brand-cream/5 p-10 rounded-3xl">
              <h3 className="font-display text-3xl uppercase mb-6 text-brand-cream">{t.builderFutureTitle}</h3>
              <ul className="space-y-4 text-lg">
                {[t.builderFuture1, t.builderFuture2, t.builderFuture3].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

