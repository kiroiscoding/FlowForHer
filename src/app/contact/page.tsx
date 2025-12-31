"use client";

import { ArrowRight, Mail, MapPin, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-brand-dark-green text-brand-cream font-sans">
            <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Info Section */}
                    <div>
                        <h1 className="font-display text-[clamp(3.25rem,14vw,5.25rem)] md:text-8xl uppercase mb-8 leading-[0.85] md:leading-none text-balance">
                            Get In <br /> Touch
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-light opacity-80 max-w-md leading-relaxed mb-12">
                            Interested in partnering, volunteering, or learning more? We'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-brand-cream p-4 rounded-full">
                                    <Mail className="w-6 h-6 text-brand-dark-green" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl uppercase mb-1">Email Us</h3>
                                    <a href="mailto:contact@flowforher.com" className="text-lg opacity-80 hover:opacity-100 transition-opacity">
                                        contact@flowforher.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-brand-cream p-4 rounded-full">
                                    <MapPin className="w-6 h-6 text-brand-dark-green" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl uppercase mb-1">Based In</h3>
                                    <p className="text-lg opacity-80">
                                        Huntley, Illinois <br />
                                        Focusing on Syria & Global Advocacy
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="bg-brand-cream p-4 rounded-full">
                                    <Instagram className="w-6 h-6 text-brand-dark-green" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl uppercase mb-1">Follow Us</h3>
                                    <a
                                        href="https://www.instagram.com/flow_for_her/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-lg opacity-80 hover:opacity-100 transition-opacity"
                                    >
                                        @flow_for_her
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-brand-cream text-brand-dark-green p-10 md:p-14 rounded-[3rem]">
                        <h2 className="font-display text-3xl uppercase mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b-2 border-brand-dark-green/20 py-3 text-xl focus:outline-none focus:border-brand-dark-green transition-colors placeholder:text-brand-dark-green/30"
                                    placeholder="Jane Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b-2 border-brand-dark-green/20 py-3 text-xl focus:outline-none focus:border-brand-dark-green transition-colors placeholder:text-brand-dark-green/30"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b-2 border-brand-dark-green/20 py-3 text-xl focus:outline-none focus:border-brand-dark-green transition-colors placeholder:text-brand-dark-green/30"
                                    placeholder="What's this regarding?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b-2 border-brand-dark-green/20 py-3 text-xl focus:outline-none focus:border-brand-dark-green transition-colors placeholder:text-brand-dark-green/30 resize-none"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <button className="w-full bg-brand-dark-green text-white font-display text-xl uppercase py-4 rounded-full hover:bg-brand-deep-burgundy transition-colors duration-300 mt-8 flex items-center justify-center gap-3 group">
                                <span>Send Message</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}
