import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
    title: "Resources",
    description:
        "Trusted menstrual health and period poverty resources—organizations, research, and tools supporting menstrual equity in Syria and across the MENA region.",
    alternates: { canonical: "/resources" },
};

export default function Resources() {
    return <ResourcesClient />;
}
