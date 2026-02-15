import type { Metadata } from "next";
import EducationClient from "./EducationClient";

export const metadata: Metadata = {
    title: "Education curriculum",
    description:
        "A bilingual (Arabic + English) step-by-step menstrual health curriculum—puberty, periods, stigma, and period poverty, with a focus on Syria.",
    alternates: { canonical: "/education" },
};

export default function EducationPage() {
    return <EducationClient />;
}
