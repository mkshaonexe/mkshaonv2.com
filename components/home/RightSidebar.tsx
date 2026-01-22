import Link from 'next/link';
import { Star, Shield, Youtube, Clock, ExternalLink } from 'lucide-react';

export default function RightSidebar() {
    return (
        <div className="w-full space-y-6">

            {/* Recent Projects */}
            <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] p-5">
                <div className="flex items-center gap-2 mb-6">
                    <Star className="w-4 h-4 text-[var(--accent-primary)] fill-current" />
                    <h3 className="font-bold text-[var(--text-primary)]">Recent Projects</h3>
                </div>

                <ul className="space-y-4">
                    {[
                        { name: 'Social Sentry', icon: Shield, color: 'text-blue-500' },
                        { name: 'MyTube', icon: Youtube, color: 'text-red-500' },
                        { name: 'PVC-Perseverance', icon: Clock, color: 'text-cyan-500' }
                    ].map((project) => (
                        <li key={project.name} className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-8 h-8 rounded-full bg-[#21262d] flex items-center justify-center border border-[var(--border-color)] group-hover:border-[var(--text-secondary)] transition-colors">
                                <project.icon className={`w-4 h-4 ${project.color}`} />
                            </div>
                            <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                                {project.name}
                            </span>
                        </li>
                    ))}
                </ul>

                <Link href="/projects" className="flex items-center justify-end gap-1 mt-6 text-xs text-[var(--accent-primary)] hover:underline">
                    <span>View all projects</span>
                    <ExternalLink className="w-3 h-3" />
                </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    {['Latest Blog Post', 'Resume / CV', 'Tech Stack', 'Collaborations'].map((link) => (
                        <li key={link}>
                            <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors block py-1">
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Ad Placeholder */}
            <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] p-4 h-[200px] flex items-center justify-center">
                <div className="w-full h-full border-2 border-dashed border-[var(--border-color)] rounded-lg flex items-center justify-center">
                    <span className="text-xs text-[var(--text-secondary)]">Advertisement</span>
                </div>
            </div>

        </div>
    );
}
