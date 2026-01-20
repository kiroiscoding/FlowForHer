"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

const navItems = [
    { nameEn: "About", nameAr: "من نحن", href: "/about" },
    { nameEn: "Education", nameAr: "تعليم", href: "/education" },
    { nameEn: "Resources", nameAr: "الموارد", href: "/resources" },
    { nameEn: "Contact", nameAr: "اتصل بنا", href: "/contact" },
];

export const Navbar = () => {
    const { language, toggleLanguage, direction } = useLanguage();
    const pathname = usePathname();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const normalizedPathname =
        basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;
    const [scrolled, setScrolled] = useState(false);
    const isKnownRoute =
        normalizedPathname === "/" ||
        normalizedPathname === "/about" ||
        normalizedPathname === "/education" ||
        normalizedPathname === "/resources" ||
        normalizedPathname === "/contact";
    // IMPORTANT: Don't show the intro animation on unknown routes (404),
    // otherwise the 404 page feels like a normal load-in.
    const [isIntro, setIsIntro] = useState(isKnownRoute);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Determine color based on path (simplified for now)
    const getThemeColor = (path: string) => {
        switch (path) {
            case "/about":
                return "bg-brand-deep-burgundy text-brand-cream border-brand-cream/20";
            case "/education":
                return "bg-brand-rich-black text-white border-white/20";
            case "/resources":
                return "bg-brand-amber text-brand-burgundy border-brand-burgundy/20";
            case "/contact":
                return "bg-brand-dark-green text-brand-cream border-brand-cream/20";
            default:
                return "bg-brand-burgundy text-brand-cream border-white/20";
        }
    };

    const themeClass = getThemeColor(normalizedPathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu on route change
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        // If we land on an unknown route (404), immediately disable intro.
        if (!isKnownRoute) {
            setIsIntro(false);
            document.body.style.overflow = "unset";
            return;
        }
        // Lock scroll during intro
        if (isIntro) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // End intro after delay
        const timer = setTimeout(() => {
            setIsIntro(false);
        }, 1500); // Faster intro

        return () => clearTimeout(timer);
    }, [isIntro, isKnownRoute]);

    return (
        <>
            <AnimatePresence>
                {isIntro && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-burgundy"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="relative w-full px-4 text-center">
                            <motion.div
                                layoutId="brand-logo"
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="text-brand-cream"
                            >
                                <h1 className="font-display text-[15vw] leading-none uppercase w-full text-center">
                                    {language === "en" ? "Flow for Her" : "دورتك"}
                                </h1>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.nav
                className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
                initial={{ y: 0 }}
            >
                <motion.div
                    className={twMerge(
                        "relative flex items-center justify-between px-4 md:px-6 py-3 rounded-full shadow-lg transition-all duration-500 ease-in-out backdrop-blur-md bg-opacity-90 border",
                        scrolled ? "w-[90%] md:w-[80%] lg:w-[70%]" : "w-[95%] md:w-[90%]",
                        themeClass
                    )}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: isIntro ? 0 : 1,
                        scale: isIntro ? 0.9 : 1
                    }}
                    transition={{
                        duration: 0.6,
                        delay: isIntro ? 0 : 0.1,
                        ease: "easeOut"
                    }}
                >
                    {/* Logo */}
                    <Link href="/" className="relative z-20 overflow-visible">
                        <motion.div
                            layoutId="brand-logo"
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="text-current"
                        >
                            <span className="font-display text-xl sm:text-2xl uppercase block whitespace-nowrap">
                                {language === "en" ? "Flow for Her" : "دورتك"}
                            </span>
                        </motion.div>
                    </Link>

                    {/* Links */}
                    <motion.div
                        className="hidden lg:flex items-center gap-8 font-sans font-medium text-sm tracking-wide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isIntro ? 0 : 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        {navItems.map((item) => {
                            const isActive = normalizedPathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={twMerge(
                                        "relative hover:opacity-75 transition-opacity",
                                        isActive && "opacity-100"
                                    )}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="navbar-active-underline"
                                            transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                            className="absolute left-0 right-0 -bottom-2 h-[2px] bg-current rounded-full"
                                        />
                                    )}
                                    <span className="relative z-10">{language === "en" ? item.nameEn : item.nameAr}</span>
                                </Link>
                            );
                        })}
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        className="flex items-center gap-2 sm:gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isIntro ? 0 : 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1 rounded-full border border-current text-xs font-bold uppercase hover:bg-white/20 transition-colors"
                        >
                            {language === "en" ? "AR" : "EN"}
                        </button>
                        {/* Mobile menu toggle */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen((v) => !v)}
                            className="lg:hidden p-2 rounded-full border border-current hover:bg-white/20 transition-colors"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </motion.div>

                    {/* Mobile menu */}
                    <AnimatePresence>
                        {mobileOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                className="lg:hidden absolute left-3 right-3 top-[calc(100%+10px)] rounded-3xl border border-brand-burgundy/15 bg-brand-cream text-brand-burgundy shadow-2xl overflow-hidden"
                            >
                                <div className="p-4 flex flex-col gap-3">
                                    {navItems.map((item) => {
                                        const isActive = normalizedPathname === item.href;
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                aria-current={isActive ? "page" : undefined}
                                                className={twMerge(
                                                    "relative px-4 py-3 rounded-2xl font-sans text-base font-bold hover:bg-brand-burgundy/5 transition-colors overflow-hidden",
                                                    isActive && "opacity-100"
                                                )}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="navbar-active-mobile"
                                                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                                        className="absolute inset-0 bg-brand-burgundy/10 rounded-2xl"
                                                    />
                                                )}
                                                <span className="relative z-10">{language === "en" ? item.nameEn : item.nameAr}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.nav>
        </>
    );
};
