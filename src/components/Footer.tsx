"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { clsx } from "clsx";
import { Instagram, Mail } from "lucide-react";

export const Footer = () => {
    const { language } = useLanguage();
    const pathname = usePathname();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const normalizedPathname =
        basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;

    const getFooterTheme = (path: string) => {
        if (path.startsWith("/about")) {
            // About page ends in cream, so let's make the footer contrast (Deep Burgundy)
            // The main color of About is Deep Burgundy.
            return "bg-brand-deep-burgundy text-brand-cream border-brand-cream/10";
        }
        if (path.startsWith("/education")) return "bg-brand-rich-black text-white border-white/10";
        if (path.startsWith("/resources")) return "bg-brand-amber text-brand-burgundy border-brand-burgundy/10";
        if (path.startsWith("/contact")) return "bg-brand-dark-green text-brand-cream border-brand-cream/10";
        // Home page ends in red (Explore Work section is red)
        return "bg-brand-burgundy text-brand-cream border-brand-cream/10";
    };

    const themeClass = getFooterTheme(normalizedPathname);

    const links = [
        { nameEn: "About", nameAr: "من نحن", href: "/about" },
        { nameEn: "Education", nameAr: "تعليم", href: "/education" },
        { nameEn: "Resources", nameAr: "الموارد", href: "/resources" },
        { nameEn: "Contact", nameAr: "اتصل بنا", href: "/contact" },
    ];

    return (
        <footer className={clsx("py-20 px-6 md:px-12 transition-colors duration-500", themeClass)}>
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-display text-3xl sm:text-4xl md:text-5xl uppercase mb-6 block">
                            {language === "en" ? "Flow for Her" : "دورتك"}
                        </Link>
                        <p className="font-sans text-base sm:text-lg opacity-80 max-w-sm">
                            {language === "en"
                                ? "Empowering women and girls in Syria through education, advocacy, and dignity."
                                : "تمكين النساء والفتيات في سوريا من خلال التعليم والمناصرة والكرامة."}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-display text-xl uppercase mb-6 opacity-60">Sitemap</h3>
                        <ul className="space-y-4 font-sans text-lg font-medium">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:opacity-70 transition-opacity">
                                        {language === "en" ? link.nameEn : link.nameAr}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-display text-xl uppercase mb-6 opacity-60">Connect</h3>
                        <div className="space-y-4 font-sans text-lg font-medium">
                            <a
                                href="mailto:contact@flowforher.com"
                                className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="select-text">contact@flowforher.com</span>
                            </a>
                            <a
                                href="https://www.instagram.com/flow_for_her/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity"
                            >
                                <Instagram className="w-5 h-5" />
                                <span className="select-text">@flow_for_her</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-current border-opacity-20 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60 text-sm font-sans">
                    <p>
                        &copy; {new Date().getFullYear()} Flow For Her. {language === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                        <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};
