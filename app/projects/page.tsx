
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data';
import { Sparkles, Layers } from 'lucide-react';

export default function ProjectsPage() {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1240px] space-y-16 mb-20">

            {/* Hero Section */}
            <section className="text-center py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-tertiary)] mb-4">
                    My Projects
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Building tools for focus, productivity, and distraction-free learning that help people reclaim their time.
                </p>
            </section>

            {/* Featured Projects */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[var(--accent-primary)]/10 rounded-lg">
                        <Sparkles className="h-6 w-6 text-[var(--accent-primary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)]">Featured Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            {/* All Projects */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[var(--accent-tertiary)]/10 rounded-lg">
                        <Layers className="h-6 w-6 text-[var(--accent-tertiary)]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)]">All Projects</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

        </div>
    );
}
