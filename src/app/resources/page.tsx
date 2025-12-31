import { ArrowUpRight } from "lucide-react";

export default function Resources() {
    const resources = [
        {
            category: "International Organizations",
            items: [
                { name: "UNFPA - Menstrual Health", desc: "Global data and standards for menstrual health management.", link: "#" },
                { name: "Save the Children Syria", desc: "Emergency relief and support for children in conflict zones.", link: "#" },
                { name: "Period.org", desc: "Advocacy movement to end period poverty and stigma.", link: "#" },
            ]
        },
        {
            category: "Regional Support",
            items: [
                { name: "Syrian American Medical Society", desc: "Medical relief and healthcare development in Syria.", link: "#" },
                { name: "Basmeh & Zeitooneh", desc: "Relief and development for marginalized communities.", link: "#" },
            ]
        },
        {
            category: "Educational Tools",
            items: [
                { name: "Menstrual Hygiene Day", desc: "Advocacy materials and global campaign resources.", link: "#" },
                { name: "The Cup Effect", desc: "Education on sustainable menstrual products.", link: "#" },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-brand-amber text-brand-burgundy font-sans">
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto">

                <div className="mb-20">
                    <h1 className="font-display text-[clamp(2.4rem,10vw,3.8rem)] sm:text-[clamp(2.75rem,10vw,4.25rem)] md:text-8xl uppercase mb-6 leading-[0.95] md:leading-none text-balance">
                        Trusted <br /> Resources
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed font-medium">
                        A curated list of organizations, reports, and tools supporting menstrual equity and humanitarian aid.
                    </p>
                </div>

                <div className="space-y-16">
                    {resources.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="font-display text-3xl md:text-4xl uppercase mb-8 border-b-2 border-brand-burgundy/20 pb-4">
                                {section.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.items.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.link}
                                        className="group block bg-brand-cream/50 p-8 rounded-3xl hover:bg-brand-cream transition-colors duration-300"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-display text-xl leading-tight">{item.name}</h3>
                                            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                                        </div>
                                        <p className="text-lg opacity-80 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
