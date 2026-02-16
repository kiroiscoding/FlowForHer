import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact Flow for Her for partnerships, volunteering, or questions about Arabic–English bilingual menstrual health education and period poverty awareness.",
    alternates: { canonical: "/contact" },
};

export default function ContactPage() {
    return <ContactClient />;
}
