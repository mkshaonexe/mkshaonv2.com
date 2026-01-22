import Link from 'next/link';
import { Search, Bell } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--bg-primary)]/60">
            <div className="container mx-auto max-w-[1440px] flex h-[70px] items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-[var(--accent-primary)] hover:opacity-80 transition-opacity">
                        MK Shaon
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {[
                        { name: 'Home', href: '/', active: true },
                        { name: 'About Me', href: '/about' },
                        { name: 'My Projects', href: '/projects' },
                        { name: 'Blog', href: '/blog' },
                        { name: 'Resources', href: '/resources' },
                        { name: 'Contact', href: '/contact' },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors relative py-6
                ${item.active
                                    ? 'text-[var(--accent-primary)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent-primary)]'
                                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Search Bar (Visual) */}
                    <div className="hidden lg:flex items-center gap-2 text-sm group cursor-pointer">
                        <Search className="h-4 w-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                        <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">Search</span>
                        <kbd className="hidden xl:inline-flex h-5 items-center gap-1 rounded bg-[#21262d] border border-[var(--border-color)] px-1.5 font-mono text-[10px] font-medium text-[var(--text-secondary)] ml-1">
                            <span className="text-xs">⌘</span> K
                        </kbd>
                    </div>

                    <button className="relative p-2 hover:bg-[var(--bg-tertiary)] rounded-full transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <Bell className="h-5 w-5" />
                    </button>

                    {/* Profile Picture */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[1px] cursor-pointer">
                        <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                            {/* Placeholder for Profile Img */}
                            <div className="w-full h-full bg-[#1F2937] flex items-center justify-center">
                                <span className="text-xs">🤠</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
