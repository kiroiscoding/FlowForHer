"use client";

import { useLanguage } from "@/context/LanguageContext";

export const MissionStatementSection = () => {
    const { language } = useLanguage();

    return (
        // Added negative margin to pull it up into the previous section
        // Changed flex alignment to center to place it "on the dome" visually
        // Added a red background layer that fills the space to ensure continuity
        <section className="relative h-screen flex items-center justify-center px-6 -mt-[60vh] pb-[20vh] z-20 pointer-events-none">
            {/* Background extension to bridge the gap between Hero dome and next section */}
            <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-brand-burgundy -z-10" />

            <div className="w-[88vw] sm:w-[80vw] max-w-4xl text-center text-brand-cream mt-20">
                <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase leading-tight mb-6 text-balance">
                    {language === "en" ? (
                        <>
                            Empowering <span className="text-brand-amber">Girls</span>. <br />
                            Transforming <span className="text-brand-amber">Lives</span>.
                        </>
                    ) : (
                        <>
                            تمكين <span className="text-brand-amber">الفتيات</span>. <br />
                            تغيير <span className="text-brand-amber">الحياة</span>.
                        </>
                    )}
                </h2>
                <p className="font-sans text-base sm:text-lg md:text-2xl opacity-90 max-w-2xl mx-auto">
                    {language === "en"
                        ? "We are dedicated to providing essential education and resources."
                        : "نحن ملتزمون بتوفير التعليم والموارد الأساسية."}
                </p>
            </div>
        </section>
    );
};
