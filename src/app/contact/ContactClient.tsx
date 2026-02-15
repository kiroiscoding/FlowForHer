"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Instagram } from "lucide-react";

export default function ContactClient() {
    const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
        setErrorMessage("");

        if (!FORMSPREE_ENDPOINT) {
            setStatus("error");
            setErrorMessage("Form is not configured yet. Please try again in a moment.");
            return;
        }

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    _replyto: form.email,
                    _subject: form.subject || "Flow For Her — Contact Form",
                    message: form.message,
                }),
            });

            const data = (await res.json().catch(() => null)) as { error?: string } | null;

            if (!res.ok) {
                throw new Error(data?.error || "Failed to send message. Please try again.");
            }

            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            setStatus("error");
            setErrorMessage(err instanceof Error ? err.message : "Failed to send message.");
        }
    }

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
                        {!FORMSPREE_ENDPOINT && (
                            <div className="mb-6 rounded-2xl border border-brand-dark-green/20 bg-white/60 px-5 py-4">
                                <p className="font-bold">Contact form is being set up.</p>
                                <p className="opacity-80">Please check back shortly.</p>
                            </div>
                        )}
                        {status === "success" && (
                            <div className="mb-6 rounded-2xl border border-brand-dark-green/20 bg-white/60 px-5 py-4">
                                <p className="font-bold">Message sent.</p>
                                <p className="opacity-80">We’ll get back to you as soon as possible.</p>
                            </div>
                        )}
                        {status === "error" && (
                            <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-50 px-5 py-4 text-red-700">
                                <p className="font-bold">Message not sent.</p>
                                <p className="opacity-90">{errorMessage}</p>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={onSubmit}>
                            {/* Honeypot (spam trap) */}
                            <input
                                type="text"
                                name="_gotcha"
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={(e) => setForm((v) => ({ ...v, name: e.target.value }))}
                                    className="select-text w-full bg-transparent border-b-2 border-brand-dark-green/20 py-3 text-xl focus:outline-none focus:border-brand-dark-green transition-colors placeholder:text-brand-dark-green/30"
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                                    className="select-text w-full bg-transparent border-b-2 border-brand-dark-green/20 py-3 text-xl focus:outline-none focus:border-brand-dark-green transition-colors placeholder:text-brand-dark-green/30"
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={(e) => setForm((v) => ({ ...v, subject: e.target.value }))}
                                    className="select-text w-full bg-transparent border-b-2 border-brand-dark-green/20 py-3 text-xl focus:outline-none focus:border-brand-dark-green transition-colors placeholder:text-brand-dark-green/30"
                                    placeholder="What's this regarding?"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={form.message}
                                    onChange={(e) => setForm((v) => ({ ...v, message: e.target.value }))}
                                    className="select-text w-full bg-transparent border-b-2 border-brand-dark-green/20 py-3 text-xl focus:outline-none focus:border-brand-dark-green transition-colors placeholder:text-brand-dark-green/30 resize-none"
                                    placeholder="How can we help?"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending" || !FORMSPREE_ENDPOINT}
                                className="w-full bg-brand-dark-green text-white font-display text-xl uppercase py-4 rounded-full hover:bg-brand-deep-burgundy transition-colors duration-300 mt-8 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:hover:bg-brand-dark-green disabled:cursor-not-allowed"
                            >
                                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

