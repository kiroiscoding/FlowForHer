"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
    const { language } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Animate height to fill screen
    const height = useTransform(scrollYProgress, [0, 0.6], ["35vh", "150vh"]);

    // Flatten the curve as it expands to become a full background
    const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"]);

    // Fade out the text so it doesn't clash with the filling red background
    const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

    // Fade out the arrow as user scrolls
    const arrowOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        // Increase container height to give scroll room for the animation
        <section ref={containerRef} className="relative h-[150vh] bg-brand-cream overflow-clip">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">

                {/* Foreground content */}
                <motion.div
                    className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center"
                    style={{ opacity: textOpacity, scale: textScale }}
                >
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.8] text-brand-burgundy mb-6 text-center w-full max-w-[90vw]">
                        {language === "en" ? (
                            <>
                                Breaking <br /> Menstrual <br /> Stigma
                            </>
                        ) : (
                            <>
                                كسر <br /> وصمة <br /> العار
                            </>
                        )}
                    </h1>
                    <p className="font-sans text-xl md:text-2xl text-brand-burgundy/80 max-w-2xl mx-auto">
                        {language === "en"
                            ? "A bilingual educational platform for menstrual health in Syria."
                            : "منصة تعليمية ثنائية اللغة للصحة الدورية في سوريا."}
                    </p>
                </motion.div>

                {/* Animated Dome */}
                <motion.div
                    aria-hidden
                    style={{ height, borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius }}
                    className="absolute left-0 right-0 bottom-[-10vh] bg-brand-burgundy z-0 flex items-start justify-center pt-8"
                >
                    {/* Scroll Indicator */}
                    <motion.div
                        style={{ opacity: arrowOpacity }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-10 h-10 text-brand-cream/80" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
