"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const ExploreWork = () => {
    const { language } = useLanguage();

    const works = [
        {
            titleEn: "Our Mission",
            titleAr: "مهمتنا",
            descEn: "Fighting stigma through advocacy and community engagement.",
            descAr: "محاربة وصمة العار من خلال المناصرة والمشاركة المجتمعية.",
            href: "/about",
        },
        {
            titleEn: "Education",
            titleAr: "التعليم",
            descEn: "Workshops and resources for schools and families.",
            descAr: "ورش عمل وموارد للمدارس والأسر.",
            href: "/education",
        },
        {
            titleEn: "Resources",
            titleAr: "الموارد",
            descEn: "Real stories from women and girls across Syria.",
            descAr: "قصص حقيقية من نساء وفتيات في جميع أنحاء سوريا.",
            href: "/resources",
        },
    ];

    return (
        <section className="relative z-40 -mt-16">
            <div className="bg-brand-burgundy rounded-t-[3rem] md:rounded-t-[5rem] py-24 px-4 flex flex-col items-center">
                <div className="max-w-7xl mx-auto w-full">

                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl md:text-7xl text-brand-cream uppercase mb-4">
                            {language === "en" ? "Explore Our Work" : "استكشف عملنا"}
                        </h2>
                        <p className="font-sans text-xl text-brand-cream/80 max-w-2xl mx-auto">
                            {language === "en"
                                ? "Discover how we are making a difference on the ground."
                                : "اكتشف كيف نحدث فرقاً على أرض الواقع."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {works.map((work, index) => (
                            <Link key={index} href={work.href} className="group">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="bg-brand-cream/10 border border-brand-cream/20 rounded-3xl p-8 h-full hover:bg-brand-cream/20 transition-colors duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="font-sans text-brand-cream/60 text-sm font-bold uppercase tracking-wider">0{index + 1}</span>
                                            <ArrowUpRight className="text-brand-cream w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                                        </div>
                                        <h3 className="font-display text-3xl text-brand-cream mb-4">
                                            {language === "en" ? work.titleEn : work.titleAr}
                                        </h3>
                                        <p className="font-sans text-brand-cream/80 text-lg">
                                            {language === "en" ? work.descEn : work.descAr}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};
