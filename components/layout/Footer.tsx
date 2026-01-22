import Link from 'next/link';
import { Facebook, Youtube, Instagram, Github, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">MK Shaon</h3>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Personal portfolio and blog comprising technology, productivity, and life.
                        </p>
                        <Link href="/about" className="text-sm text-[var(--accent-tertiary)] hover:underline">
                            Learn more about me →
                        </Link>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            {['About Me', 'My Projects', 'Blog', 'Resources', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">Topics</h3>
                        <ul className="space-y-2">
                            {['Technology', 'AI & Machine Learning', 'Productivity', 'Tutorials', 'Personal'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider">Connect</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="text-[var(--text-secondary)] hover:text-[#FF0000] transition-colors"><Youtube className="h-5 w-5" /></Link>
                            <Link href="#" className="text-[var(--text-secondary)] hover:text-[#1877F2] transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="text-[var(--text-secondary)] hover:text-[#E4405F] transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"><Github className="h-5 w-5" /></Link>
                            <Link href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent-tertiary)] transition-colors"><Mail className="h-5 w-5" /></Link>
                        </div>

                        <div className="pt-4">
                            <h4 className="text-xs font-semibold text-[var(--text-secondary)] mb-2">NEWSLETTER</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-[var(--bg-element)] border border-[var(--border-color)] text-sm rounded px-3 py-2 w-full focus:outline-none focus:border-[var(--accent-primary)]"
                                />
                                <button className="bg-[var(--accent-primary)] text-black font-medium text-xs px-3 py-2 rounded hover:opacity-90">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[var(--text-secondary)]">
                        © 2025 MK Shaon. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-[var(--text-secondary)]">
                        <Link href="#" className="hover:text-[var(--text-primary)]">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[var(--text-primary)]">Terms</Link>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] opacity-60">
                        Made with ❤️ in Bangladesh
                    </p>
                </div>
            </div>
        </footer>
    );
}
