
import Link from 'next/link';
import { ArrowUpRight, Clock, Youtube, Shield, Facebook, Sun, ExternalLink } from 'lucide-react';

const iconMap: { [key: string]: any } = {
    Clock,
    Youtube,
    Shield,
    Facebook,
    Sun,
    ExternalLink
};

interface ProjectProps {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    iconName: string;
    link: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
    const Icon = iconMap[project.iconName] || ExternalLink;

    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-6 transition-all hover:border-[var(--accent-primary)] hover:shadow-lg hover:shadow-[var(--accent-primary)]/10">

            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] group-hover:bg-[var(--accent-primary)]/10 group-hover:text-[var(--accent-primary)] transition-colors">
                    <Icon className="h-6 w-6" />
                </div>
                <Link href={project.link} className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                    <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>

            {/* Content */}
            <div className="mb-4">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-[var(--accent-secondary)] font-medium mb-3">
                    {project.subtitle}
                </p>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>
            </div>

            {/* Footer */}
            <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-[var(--bg-tertiary)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-color)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Link
                    href={project.link}
                    className="inline-flex items-center text-sm font-semibold text-[var(--accent-primary)] hover:underline"
                >
                    Learn More <span className="ml-1">→</span>
                </Link>
            </div>
        </div>
    );
}
