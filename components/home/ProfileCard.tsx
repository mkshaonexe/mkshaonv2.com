import Link from 'next/link';
import { Youtube, Facebook, Instagram, Send, Github, Mail, MapPin, MessageSquare, Monitor } from 'lucide-react';

export default function ProfileCard() {
    return (
        <div className="w-full bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] overflow-hidden shadow-sm">

            <div className="p-6 flex flex-col items-center">
                {/* Profile Image with Gradient Border */}
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-[var(--accent-primary)] to-[var(--accent-tertiary)] w-36 h-36 mb-4">
                    <div className="w-full h-full rounded-full bg-[var(--bg-secondary)] p-1 overflow-hidden relative">
                        {/* Replace with actual image later */}
                        <div className="w-full h-full rounded-full bg-[#2a2a2a] flex items-center justify-center">
                            <span className="text-4xl">😎</span>
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)]">MK Shaon</h2>

                    <p className="text-sm text-[var(--text-secondary)]">
                        Personal • Content Creator • Developer • Entrepreneur
                    </p>

                    <div className="flex items-center justify-center gap-1 text-[var(--text-secondary)] text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>Dhaka, Bangladesh</span>
                    </div>

                    <Link href="#" className="block text-[var(--accent-primary)] text-sm hover:underline">
                        @light_yagami_walter
                    </Link>
                </div>

                {/* Action Buttons (Stats) */}
                <div className="grid grid-cols-2 gap-3 w-full mt-6">
                    <Link href="#" className="flex items-center justify-center gap-2 bg-[#21262d] hover:bg-[#30363d] py-2 px-4 rounded-lg border border-[var(--border-color)] transition-colors group">
                        <Youtube className="w-5 h-5 text-[#FF0000]" />
                        <span className="font-bold text-[var(--text-primary)]">26K</span>
                    </Link>
                    <Link href="#" className="flex items-center justify-center gap-2 bg-[#21262d] hover:bg-[#30363d] py-2 px-4 rounded-lg border border-[var(--border-color)] transition-colors group">
                        <Facebook className="w-5 h-5 text-[#1877F2]" />
                        <span className="font-bold text-[var(--text-primary)]">32K</span>
                    </Link>
                </div>

                {/* Social Icons Row */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                    <Link href="#" className="w-10 h-10 rounded-full bg-[#21262d] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all">
                        <Facebook className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-[#21262d] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all">
                        <Youtube className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-[#21262d] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all">
                        <Instagram className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-[#21262d] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all">
                        <Send className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-[#21262d] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all">
                        <MessageSquare className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-[#21262d] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all">
                        <Mail className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
