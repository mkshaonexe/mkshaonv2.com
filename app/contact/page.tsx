
import { socialLinks } from '@/lib/data';
import { Mail, MapPin, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-[1000px] mb-20">

            <section className="text-center py-8 mb-8">
                <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                    Get in Touch
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
                    Have a question or want to work together? Feel free to drop me a message.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Contact Info */}
                <div className="md:col-span-5 space-y-8">
                    <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6">
                        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Contact Information</h3>

                        <div className="space-y-4">
                            <a href="mailto:contact@mkshaon.com" className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                                <div className="h-10 w-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">Email</p>
                                    <p className="text-sm">contact@mkshaon.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                                <div className="h-10 w-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[var(--text-primary)]">Location</p>
                                    <p className="text-sm">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-4">Connect on Social</h3>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
                                >
                                    <link.icon className="h-4 w-4" />
                                    <span className="text-sm font-medium">{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="md:col-span-7">
                    <form className="space-y-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)]">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-[var(--text-primary)]">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="What is this about?"
                                className="w-full px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)]">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Your message here..."
                                className="w-full px-4 py-2 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-[var(--accent-primary)] text-black font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            <Send className="h-4 w-4" />
                            Send Message
                        </button>
                        <p className="text-xs text-center text-[var(--text-secondary)] mt-4">
                            I'll try my best to get back to you within 24 hours.
                        </p>
                    </form>
                </div>

            </div>
        </div>
    );
}
