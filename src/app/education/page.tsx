import { Download } from "lucide-react";

export default function Education() {
    const modules = [
        {
            id: 1,
            titleEn: "Module 1: The Basics",
            titleAr: "الوحدة ١: الأساسيات",
            descEn: "Understanding the menstrual cycle, biological processes, and body changes.",
            descAr: "فهم الدورة الشهرية، والعمليات البيولوجية، وتغيرات الجسم.",
        },
        {
            id: 2,
            titleEn: "Module 2: Hygiene & Care",
            titleAr: "الوحدة ٢: النظافة والعناية",
            descEn: "Best practices for hygiene, product usage, and managing comfort.",
            descAr: "أفضل الممارسات للنظافة، واستخدام المنتجات، وإدارة الراحة.",
        },
        {
            id: 3,
            titleEn: "Module 3: Breaking Myths",
            titleAr: "الوحدة ٣: كسر الخرافات",
            descEn: "Debunking common cultural myths and stigmas surrounding menstruation.",
            descAr: "دحض الخرافات الثقافية الشائعة ووصمات العار المحيطة بالحيض.",
        },
        {
            id: 4,
            titleEn: "Module 4: Nutrition & Health",
            titleAr: "الوحدة ٤: التغذية والصحة",
            descEn: "Dietary guidelines and exercises to support hormonal health.",
            descAr: "إرشادات غذائية وتمارين لدعم الصحة الهرمونية.",
        },
        {
            id: 5,
            titleEn: "Module 5: Mental Wellbeing",
            titleAr: "الوحدة ٥: الصحة النفسية",
            descEn: "Managing emotional changes, PMS, and self-care strategies.",
            descAr: "إدارة التغيرات العاطفية، ومتلازمة ما قبل الدورة، واستراتيجيات الرعاية الذاتية.",
        },
        {
            id: 6,
            titleEn: "Module 6: Advocacy Guide",
            titleAr: "الوحدة ٦: دليل المناصرة",
            descEn: "How to talk about periods confidently and support others.",
            descAr: "كيف تتحدثين عن الدورة الشهرية بثقة وتدعمين الأخريات.",
        },
    ];

    return (
        <div className="min-h-screen bg-brand-rich-black text-white font-sans">
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    <h1 className="font-display text-[clamp(2rem,8.5vw,3.1rem)] sm:text-[clamp(2.25rem,8.5vw,3.5rem)] md:text-8xl uppercase mb-6 leading-[1] md:leading-none text-balance">
                        Educational <br /> Curriculum
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 max-w-2xl leading-relaxed">
                        Our comprehensive, bilingual guide to menstrual health. Download the modules below to start learning and teaching.
                    </p>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 group flex flex-col justify-between min-h-[260px] sm:min-h-[300px]"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="bg-white text-brand-rich-black font-bold px-3 py-1 rounded-full text-sm">
                                        PDF
                                    </span>
                                    <span className="opacity-50 font-display text-2xl">{module.id < 10 ? `0${module.id}` : module.id}</span>
                                </div>

                                <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">
                                    {module.titleEn}
                                </h3>
                                <p className="font-sans text-lg opacity-80 mb-4">
                                    {module.titleAr}
                                </p>
                                <p className="font-sans text-base opacity-70 leading-relaxed">
                                    {module.descEn}
                                </p>
                            </div>

                            <button className="mt-8 flex items-center gap-3 font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                                <span>Download</span>
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
