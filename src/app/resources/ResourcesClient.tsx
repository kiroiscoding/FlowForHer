"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type ResourceItem = { name: string; desc?: string; link: string };
type ResourceSection = { category: string; items: ResourceItem[] };

export default function ResourcesClient() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const resourcesEn: ResourceSection[] = [
    {
      category: "Organizations & NGOs",
      items: [
        {
          name: "Pride Pads Africa",
          desc: "An initiative combating period poverty through access and awareness.",
          link: "http://www.ywcaboulder.org/blog-collection/pridepads-africa-combatting-period-poverty-at-home-and-abroad",
        },
        {
          name: "The Borgen Project",
          desc: "Research and advocacy on poverty and policy—including menstrual equity.",
          link: "https://borgenproject.org/combatting-period-poverty/",
        },
        {
          name: "Period.org",
          desc: "A global movement to end period poverty and stigma.",
          link: "https://period.org/",
        },
        {
          name: "Dawrati",
          desc: "Context and reporting on period poverty in Lebanon.",
          link: "https://borgenproject.org/period-poverty-in-lebanon/",
        },
        {
          name: "The Period Project",
          desc: "Education and access initiatives supporting menstrual equity.",
          link: "https://periodproject.org/",
        },
        {
          name: "Wing Women Lebanon",
          desc: "Education and initiatives supporting menstrual health and dignity.",
          link: "https://wingwomanlebanon.com/",
        },
        {
          name: "Anera",
          desc: "Humanitarian support and development work in the Middle East.",
          link: "https://www.anera.org/",
        },
      ],
    },
    {
      category: "Research and Reports",
      items: [
        {
          name: "What is Period Poverty? (Period.org)",
          desc: "A clear explainer on what period poverty is and why it matters.",
          link: "https://period.org/periodpoverty",
        },
        {
          name: "Period Poverty – A Global Crisis (WIIS)",
          desc: "A report overview framing period poverty as a global equity and dignity issue.",
          link: "https://wiisglobal.org/period-poverty-a-global-crisis/",
        },
        {
          name: "Video: Addressing Period Poverty",
          desc: "A short video introducing the issue and why it matters.",
          link: "https://www.youtube.com/watch?v=MlXqKwVh8OU",
        },
        {
          name: "UNICEF MENA: Period Poverty (report)",
          desc: "Regional analysis and findings on period poverty across the Middle East and North Africa.",
          link: "https://www.unicef.org/mena/reports/period-poverty",
        },
      ],
    },
    {
      category: "Stigma Against Period Poverty",
      items: [
        {
          name: "Stigma and menstrual health (Archives of Public Health)",
          desc: "Research on stigma and its impact on menstrual health outcomes.",
          link: "http://archpublichealth.biomedcentral.com/articles/10.1186/s13690-025-01557-9",
        },
        {
          name: "J-PAL evaluation: addressing menstrual stigma + hygiene",
          desc: "Evidence on interventions that improve education and psychosocial wellbeing.",
          link: "http://www.povertyactionlab.org/evaluation/addressing-menstrual-stigma-and-hygiene-improve-education-and-psychosocial-well-being",
        },
      ],
    },
    {
      category: "Access to Products",
      items: [
        {
          name: "The Borgen Project: Menstrual products",
          desc: "Explains barriers to access and how product availability affects equity.",
          link: "http://borgenproject.org/menstrual-products/",
        },
        {
          name: "MEPC: Menstruation and humanitarian aid in Gaza",
          desc: "A commentary on period poverty in humanitarian contexts and aid delivery.",
          link: "https://mepc.org/commentaries/menstruation-and-humanitarian-aid-period-poverty-in-gaza/",
        },
      ],
    },
    {
      category: "Female Healthcare Workers in the Middle East",
      items: [
        {
          name: "UNFPA: female health workers in Syria",
          desc: "How women health workers are leading care for women and girls in crisis settings.",
          link: "http://www.unfpa.org/news/after-13-years-crisis-we-hear-female-health-workers-syria-leading-charge-women-and-girls",
        },
        {
          name: "PMC article (open access)",
          desc: "Open-access research relevant to women’s health work and systems under strain.",
          link: "http://pmc.ncbi.nlm.nih.gov/articles/PMC11367701/",
        },
        {
          name: "Doctors Without Borders: excluding women from medical institutes",
          desc: "How exclusion threatens the future healthcare workforce and services.",
          link: "http://www.doctorswithoutborders.org/latest/excluding-afghan-women-medical-institutes-threatens-future-health-care-country",
        },
      ],
    },
  ];

  const resourcesAr: ResourceSection[] = [
    {
      category: "منظمات وجمعيات",
      items: [
        {
          name: "Pride Pads Africa",
          desc: "مبادرة لمكافحة فقر الدورة عبر التوعية وتوسيع الوصول للمستلزمات.",
          link: "http://www.ywcaboulder.org/blog-collection/pridepads-africa-combatting-period-poverty-at-home-and-abroad",
        },
        {
          name: "The Borgen Project",
          desc: "أبحاث ومناصرة حول الفقر والسياسات—بما في ذلك العدالة في الصحة الشهرية.",
          link: "https://borgenproject.org/combatting-period-poverty/",
        },
        {
          name: "Period.org",
          desc: "حركة عالمية لإنهاء فقر الدورة والوصمة المرتبطة بها.",
          link: "https://period.org/",
        },
        {
          name: "Dawrati",
          desc: "سياق وتقارير حول فقر الدورة في لبنان.",
          link: "https://borgenproject.org/period-poverty-in-lebanon/",
        },
        {
          name: "The Period Project",
          desc: "مبادرات للتثقيف وتوفير المستلزمات لدعم العدالة الشهرية.",
          link: "https://periodproject.org/",
        },
        {
          name: "Wing Women Lebanon",
          desc: "تعليم ومبادرات لدعم صحة الدورة والكرامة.",
          link: "https://wingwomanlebanon.com/",
        },
        {
          name: "Anera",
          desc: "دعم إنساني وتنموي في الشرق الأوسط.",
          link: "https://www.anera.org/",
        },
      ],
    },
    {
      category: "أبحاث وتقارير",
      items: [
        {
          name: "What is Period Poverty? (Period.org)",
          desc: "شرح واضح: ما هو فقر الدورة ولماذا يهم.",
          link: "https://period.org/periodpoverty",
        },
        {
          name: "Period Poverty – A Global Crisis (WIIS)",
          desc: "تقرير يوضح فقر الدورة كأزمة عالمية تمس الكرامة والعدالة.",
          link: "https://wiisglobal.org/period-poverty-a-global-crisis/",
        },
        {
          name: "Video: Addressing Period Poverty",
          desc: "فيديو قصير يشرح القضية ولماذا هي مهمة.",
          link: "https://www.youtube.com/watch?v=MlXqKwVh8OU",
        },
        {
          name: "UNICEF MENA: Period Poverty (report)",
          desc: "تحليل إقليمي لواقع فقر الدورة في الشرق الأوسط وشمال أفريقيا.",
          link: "https://www.unicef.org/mena/reports/period-poverty",
        },
      ],
    },
    {
      category: "الوصمة المرتبطة بفقر الدورة",
      items: [
        {
          name: "Stigma and menstrual health (Archives of Public Health)",
          desc: "بحث حول الوصمة وتأثيرها على نتائج صحة الدورة.",
          link: "http://archpublichealth.biomedcentral.com/articles/10.1186/s13690-025-01557-9",
        },
        {
          name: "J-PAL evaluation: addressing menstrual stigma + hygiene",
          desc: "أدلة حول تدخلات تحسن التعليم والرفاه النفسي والاجتماعي.",
          link: "http://www.povertyactionlab.org/evaluation/addressing-menstrual-stigma-and-hygiene-improve-education-and-psychosocial-well-being",
        },
      ],
    },
    {
      category: "الوصول إلى المستلزمات",
      items: [
        {
          name: "The Borgen Project: Menstrual products",
          desc: "عوائق الوصول للمستلزمات وكيف يؤثر توفرها على العدالة.",
          link: "http://borgenproject.org/menstrual-products/",
        },
        {
          name: "MEPC: Menstruation and humanitarian aid in Gaza",
          desc: "مقال عن فقر الدورة في السياقات الإنسانية وتحديات المساعدات.",
          link: "https://mepc.org/commentaries/menstruation-and-humanitarian-aid-period-poverty-in-gaza/",
        },
      ],
    },
    {
      category: "عاملات الرعاية الصحية في الشرق الأوسط",
      items: [
        {
          name: "UNFPA: female health workers in Syria",
          desc: "كيف تقود العاملات الصحيات تقديم الرعاية للنساء والفتيات في الأزمات.",
          link: "http://www.unfpa.org/news/after-13-years-crisis-we-hear-female-health-workers-syria-leading-charge-women-and-girls",
        },
        {
          name: "PMC article (open access)",
          desc: "بحث مفتوح الوصول ذو صلة بواقع الأنظمة الصحية تحت الضغط.",
          link: "http://pmc.ncbi.nlm.nih.gov/articles/PMC11367701/",
        },
        {
          name: "Doctors Without Borders: excluding women from medical institutes",
          desc: "كيف يهدد الإقصاء مستقبل القوى العاملة الصحية والخدمات.",
          link: "http://www.doctorswithoutborders.org/latest/excluding-afghan-women-medical-institutes-threatens-future-health-care-country",
        },
      ],
    },
  ];

  const resources = isAr ? resourcesAr : resourcesEn;

  return (
    <div className={`min-h-screen bg-brand-amber text-brand-burgundy font-sans ${isAr ? "text-right" : "text-left"}`}>
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-20">
          <h1 className="font-display text-[clamp(2.4rem,10vw,3.8rem)] sm:text-[clamp(2.75rem,10vw,4.25rem)] md:text-8xl uppercase mb-6 leading-[0.95] md:leading-none text-balance">
            {isAr ? (
              <>
                مصادر <br /> موثوقة
              </>
            ) : (
              <>
                Trusted <br /> Resources
              </>
            )}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed font-medium">
            {isAr
              ? "منظمات وأبحاث وأدوات تدعم العدالة الشهرية، والتعليم الصحي، والعمل الإنساني."
              : "Organizations, research, and tools supporting menstrual equity, health education, and humanitarian action."}
          </p>
        </div>

        <div className="space-y-16">
          {resources.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-display text-3xl md:text-4xl uppercase mb-8 border-b-2 border-brand-burgundy/20 pb-4">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block bg-brand-cream/50 p-8 rounded-3xl hover:bg-brand-cream transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-4 gap-6">
                      <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                      <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform shrink-0" />
                    </div>
                    {item.desc && <p className="text-lg opacity-80 leading-relaxed">{item.desc}</p>}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

