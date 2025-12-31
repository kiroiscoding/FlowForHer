"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export const ImpactSection = () => {
    const { language } = useLanguage();

    const stats = [
        {
            value: language === "en" ? "50+" : "٥٠+",
            label: language === "en" ? "Days of school missed annually" : "يوم دراسي ضائع سنوياً",
            color: "bg-brand-red text-white",
        },
        {
            value: language === "en" ? "80%" : "٨٠٪",
            label: language === "en" ? "Lack access to products" : "يفتقرن للمنتجات الصحية",
            color: "bg-brand-amber text-brand-burgundy",
        },
        {
            value: language === "en" ? "1 in 3" : "١ من ٣",
            label: language === "en" ? "Feel shame regarding periods" : "يشعرن بالخجل",
            color: "bg-brand-burgundy text-brand-cream", // Changed to burgundy/cream for contrast against white
        },
    ];

    return (
        // Adjusted negative margin to bring the white section closer to the mission statement
        // but now safely sitting on the red background we added in MissionStatementSection
        <section className="relative z-30 -mt-[10vh] pb-8">
            {/* Rounded white container that overlaps or sits directly under the previous section */}
            <div className="bg-brand-cream rounded-t-[3rem] md:rounded-t-[5rem] pt-24 pb-20 px-4 flex flex-col items-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Main Statement Block */}
                        <div className="lg:col-span-3 mb-16 text-center">
                            <h2 className="font-display text-5xl md:text-7xl text-brand-burgundy uppercase mb-4">
                                {language === "en" ? "The Silent Crisis" : "الأزمة الصامتة"}
                            </h2>
                            <p className="font-sans text-xl text-brand-burgundy/80 max-w-3xl mx-auto">
                                {language === "en"
                                    ? "Menstrual stigma and lack of access are holding girls back in Syria."
                                    : "وصمة العار ونقص الموارد يعيقان الفتيات في سوريا."}
                            </p>
                        </div>

                        {/* Stat Blocks */}
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className={`p-8 md:p-12 rounded-3xl ${stat.color} flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:min-h-[400px] hover:scale-105 transition-transform duration-300 shadow-xl`}
                            >
                                <span className="font-display text-7xl md:text-9xl mb-4 block">
                                    {stat.value}
                                </span>
                                <span className="font-sans text-xl md:text-2xl font-bold uppercase tracking-wide">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};
