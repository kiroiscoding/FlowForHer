"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { EDUCATION_MODULES } from "@/content/educationModules";

export default function Education() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-brand-rich-black text-white font-sans">
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    <h1 className="font-display text-[clamp(2rem,8.5vw,3.1rem)] sm:text-[clamp(2.25rem,8.5vw,3.5rem)] md:text-8xl uppercase mb-6 leading-[1] md:leading-none text-balance">
                        {language === "en" ? (
                            <>
                                Educational <br /> Curriculum
                            </>
                        ) : (
                            <>
                                المنهج <br /> التعليمي
                            </>
                        )}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-light opacity-90 max-w-2xl leading-relaxed">
                        {language === "en"
                            ? "Our comprehensive, bilingual guide to menstrual health. Open a module to start learning step-by-step."
                            : "دليلك الشامل ثنائي اللغة لصحة الدورة الشهرية. افتحي أي وحدة للتعلم خطوة بخطوة."}
                    </p>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {EDUCATION_MODULES.map((module) => {
                        const titlePrimary = language === "en" ? module.titleEn : module.titleAr;
                        const titleSecondary = language === "en" ? module.titleAr : module.titleEn;
                        const descPrimary = language === "en" ? module.descEn : module.descAr;
                        return (
                            <Link
                                key={module.slug}
                                href={`/education/${module.slug}`}
                                className="bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 group flex flex-col justify-between min-h-[260px] sm:min-h-[300px]"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="bg-white text-brand-rich-black font-bold px-3 py-1 rounded-full text-sm">
                                            {language === "en" ? "MODULE" : "وحدة"}
                                        </span>
                                        <span className="opacity-50 font-display text-2xl">
                                            {module.id < 10 ? `0${module.id}` : module.id}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">
                                        {titlePrimary}
                                    </h3>
                                    <p className="font-sans text-lg opacity-80 mb-4">
                                        {titleSecondary}
                                    </p>
                                    <p className="font-sans text-base opacity-70 leading-relaxed">
                                        {descPrimary}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-3 font-bold uppercase tracking-wider text-sm group-hover:gap-4 transition-all">
                                    <span>{language === "en" ? "Open module" : "افتحي الوحدة"}</span>
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
