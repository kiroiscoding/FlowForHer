import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Flow for Her’s mission to provide Arabic–English bilingual menstrual health education focused on Syria—supporting dignity, autonomy, and period poverty awareness.",
    alternates: { canonical: "/about" },
};

export default function About() {
    return <AboutClient />;
}
