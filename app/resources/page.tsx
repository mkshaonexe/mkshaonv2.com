
import { resources } from '@/lib/data';
import { ExternalLink, PenTool, BookOpen, Monitor } from 'lucide-react';
import Link from 'next/link';

const iconMap: { [key: string]: any } = {
    Development: Monitor,
    Productivity: BookOpen,
    Design: PenTool,
};

export default function ResourcesPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-[1000px] mb-20 space-y-12">

            {/* Hero */}
            <section className="text-center py-8">
                <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                    Resources
                </h1>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    A curated list of tools, apps, and platforms I use for development, productivity, and content creation.
                </p>
            </section>

            {/* Resource Categories */}
            <div className="space-y-12">
                {resources.map((category) => {
                    const Icon = iconMap[category.category] || BookOpen;

                    return (
                        <div key={category.category} className="animate-fade-in-up">
                            <div className="flex items-center gap-3 mb-6 border-b border-[var(--border-color)] pb-3">
                                <Icon className="h-6 w-6 text-[var(--accent-primary)]" />
                                <h2 className="text-2xl font-bold text-[var(--text-primary)]">{category.category}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.items.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.url}
                                        target="_blank"
                                        className="group block p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-tertiary)] hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-tertiary)] transition-colors">
                                                {item.name}
                                            </h3>
                                            <ExternalLink className="h-4 w-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-tertiary)]" />
                                        </div>
                                        <p className="text-sm text-[var(--text-secondary)]">
                                            {item.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
