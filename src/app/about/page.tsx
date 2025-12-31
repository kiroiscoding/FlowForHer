import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-brand-deep-burgundy text-brand-cream font-sans">

            {/* SECTION ONE: THE MOVEMENT */}
            <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 border-b border-brand-cream/10">
                <div className="max-w-6xl mx-auto">

                    {/* The Manifesto */}
                    <div className="mb-24">
                        <h1 className="font-display text-[clamp(2.75rem,12vw,4.25rem)] md:text-9xl uppercase leading-[0.9] md:leading-[0.8] mb-8 text-balance max-w-[94vw]">
                            Dignity <br /> Is Not <br /> Optional
                        </h1>
                        <p className="text-xl md:text-3xl font-light leading-relaxed max-w-3xl border-l-4 border-brand-red pl-6">
                            Menstruation is not a secret; it is a human right. We are breaking the silence in Syria to restore autonomy, hygiene, and health to a generation of women displaced by conflict.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                        {/* The Problem */}
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 text-brand-red">The Invisible Crisis</h2>
                            <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed">
                                <p>
                                    In the intersection of protracted conflict, mass displacement, and deep-seated cultural stigma, menstrual health has become a silent casualty. For thousands of women and girls in Syria, the lack of access to products is compounded by a lack of access to information.
                                </p>
                                <p>
                                    This is not just a hygiene issue; it is a barrier to education and social participation. When a natural biological process becomes a source of shame and isolation, potential is lost.
                                </p>
                            </div>
                        </div>

                        {/* The Solution */}
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 text-brand-amber">Language as Autonomy</h2>
                            <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed">
                                <p>
                                    Flow For Her is a bilingual educational platform designed to bridge the gap. By providing resources in both Arabic and English, we are not just translating words; we are translating care.
                                </p>
                                <p>
                                    We believe that understanding one's body shouldn't depend on geography or language. Our platform empowers users with the vocabulary to advocate for their own health, turning silence into specialized knowledge and fear into agency.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Ripple Effect */}
                    <div className="bg-brand-cream/5 rounded-[3rem] p-10 md:p-16">
                        <h2 className="font-display text-4xl md:text-6xl uppercase mb-6">The Ripple Effect</h2>
                        <p className="text-lg md:text-2xl leading-relaxed max-w-4xl">
                            Educating one girl does not stop with her. It transforms a family. It shifts the standards of a community. When we provide the tools for menstrual management, we are investing in the long-term public health resilience of the region. A girl who knows her rights today becomes a woman who defends the health of her community tomorrow.
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTION TWO: THE FOUNDER */}
            <section className="py-20 md:py-24 px-6 md:px-12 bg-brand-cream text-brand-deep-burgundy">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Profile Header */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            {/* Photo */}
                            <div className="aspect-[3/4] w-full max-w-sm bg-brand-deep-burgundy/10 rounded-2xl mb-8 relative overflow-hidden">
                                <Image
                                    src="/giuliana-farraj-headshot.png"
                                    alt="Giuliana Farraj headshot"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] mb-4 text-brand-red break-words">
                                Giuliana <br /> Farraj
                            </h2>
                            <p className="text-xl font-bold uppercase tracking-widest mb-2">Founder & Visionary</p>
                            <div className="flex items-start justify-between gap-6 mb-8">
                                <p className="text-lg opacity-80">
                                    Huntley High School <br /> Global Scholar
                                </p>
                                <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 -mt-6 transform -translate-x-6 md:-translate-x-4">
                                    <Image
                                        src="/IllinoisglobalScholarCertificate.png"
                                        alt="Illinois Global Scholar Certificate badge"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <a
                                href="https://global-illinois.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border-b-2 border-brand-deep-burgundy pb-1 hover:opacity-75 transition-opacity"
                            >
                                <span className="uppercase font-bold tracking-wide">Global Scholar Capstone</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="lg:col-span-7 space-y-16 lg:pt-8">

                        {/* The Vision */}
                        <div>
                            <h3 className="font-display text-4xl uppercase mb-6">Bridging Worlds</h3>
                            <p className="text-xl leading-relaxed mb-6">
                                Why does a student in the United States dedicate herself to a crisis in Syria? For Giuliana Farraj, the answer lies in the responsibility of global citizenship. She recognizes that the privilege of education carries the mandate to act.
                            </p>
                            <p className="text-xl leading-relaxed">
                                Her vision is rooted in the belief that advocacy must be specialized to be effective. It is not enough to send aid; one must build systems of understanding. Flow For Her is the manifestation of her drive to solve global inequalities through targeted, culturally competent education.
                            </p>
                        </div>

                        {/* The Capstone */}
                        <div>
                            <h3 className="font-display text-4xl uppercase mb-6">The Capstone Commitment</h3>
                            <p className="text-xl leading-relaxed">
                                This platform serves as Giuliana's Global Scholar Capstone project, the culmination of a rigorous year-long commitment to developing global competence. It represents the transition from academic study to humanitarian action—applying classroom theories of international relations and public health to a real-world, urgent context.
                            </p>
                        </div>

                        {/* Professional Path */}
                        <div className="bg-brand-deep-burgundy text-brand-cream p-10 rounded-3xl">
                            <h3 className="font-display text-3xl uppercase mb-6 text-brand-amber">Future Trajectory</h3>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0" />
                                    <span>Projected path in Global Health and International Relations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0" />
                                    <span>Dedicated to policy advocacy for displaced women and girls.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-red shrink-0" />
                                    <span>Continuing academic excellence as a representative of Huntley High School's Global Academy.</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
