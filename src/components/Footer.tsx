"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { clsx } from "clsx";

export const Footer = () => {
    const { language } = useLanguage();
    const pathname = usePathname();

    const getFooterTheme = (path: string) => {
        switch (path) {
            case "/about":
                // About page ends in cream, so let's make the footer contrast (Deep Burgundy)
                // or match the bottom. User said "changes with the main color".
                // The main color of About is Deep Burgundy.
                return "bg-brand-deep-burgundy text-brand-cream border-brand-cream/10";
            case "/education":
                return "bg-brand-rich-black text-white border-white/10";
            case "/resources":
                return "bg-brand-amber text-brand-burgundy border-brand-burgundy/10";
            case "/contact":
                return "bg-brand-dark-green text-brand-cream border-brand-cream/10";
            default:
                // Home page ends in red (Explore Work section is red)
                return "bg-brand-burgundy text-brand-cream border-brand-cream/10";
        }
    };

    const themeClass = getFooterTheme(pathname);

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
                        <Link href="/" className="font-display text-4xl md:text-5xl uppercase mb-6 block">
                            {language === "en" ? "Flow for Her" : "دورتك"}
                        </Link>
                        <p className="font-sans text-lg opacity-80 max-w-sm">
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

                    {/* Socials & Contact */}
                    <div>
                        <h3 className="font-display text-xl uppercase mb-6 opacity-60">Connect</h3>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="p-3 rounded-full border border-current hover:bg-current hover:text-inherit hover:bg-opacity-10 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 rounded-full border border-current hover:bg-current hover:text-inherit hover:bg-opacity-10 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 rounded-full border border-current hover:bg-current hover:text-inherit hover:bg-opacity-10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <a href="mailto:contact@flowforher.org" className="flex items-center gap-2 font-sans text-lg font-bold hover:gap-3 transition-all">
                            <Mail className="w-5 h-5" />
                            <span>contact@flowforher.org</span>
                        </a>
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
