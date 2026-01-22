
import TerminalBlock from '@/components/ui/TerminalBlock';
import { socialLinks } from '@/lib/data';
import { Briefcase, Code, GraduationCap, Heart, Terminal, Video } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-[1000px] space-y-12 mb-20">

            {/* Hero / Terminal Section */}
            <section>
                <TerminalBlock title="user@mkshaon.com:~/about">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-[var(--accent-secondary)]">
                            <span>$</span>
                            <span className="typing-effect">whoami</span>
                        </div>

                        <div className="pl-4 space-y-2 border-l-2 border-[var(--border-color)]">
                            <h1 className="text-2xl md:text-3xl font-bold text-[var(--accent-primary)] mb-2">
                                &gt; MK Shaon
                            </h1>
                            <p><span className="text-[var(--text-secondary)]">Role:</span> Full Stack Developer & Content Creator</p>
                            <p><span className="text-[var(--text-secondary)]">Location:</span> Dhaka, Bangladesh 🇧🇩</p>
                            <p><span className="text-[var(--text-secondary)]">Handle:</span> light_yagami_walter</p>
                            <p><span className="text-[var(--text-secondary)]">Mission:</span> Building tools for focus & productivity</p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--bg-tertiary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] transition-colors text-sm"
                                >
                                    <link.icon className="h-4 w-4" />
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </TerminalBlock>
            </section>

            {/* Developer Profile */}
            <section className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h2 className="flex items-center gap-2 text-2xl font-bold mb-6 text-[var(--text-primary)]">
                    <Code className="h-6 w-6 text-[var(--accent-primary)]" />
                    Developer_Profile
                </h2>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 md:p-8">
                    <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-6">
                        I am passionate about coding and creating impactful applications. My journey started with a curiosity for how things work, which led me to the world of software development. I specialize in building solutions that solve real-world problems, particularly in the realm of <span className="text-[var(--accent-primary)] font-medium">productivity and focus</span>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">Core Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Android (Java/Kotlin)'].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-[var(--bg-tertiary)] rounded-full text-sm text-[var(--accent-tertiary)] border border-[var(--border-color)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">Interests</h3>
                            <div className="flex flex-wrap gap-2">
                                {['AI/ML', 'System Design', 'UI/UX', 'Digital Wellbeing', 'Open Source'].map(interest => (
                                    <span key={interest} className="px-3 py-1 bg-[var(--bg-tertiary)] rounded-full text-sm text-[var(--text-secondary)] border border-[var(--border-color)]">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid: Education & Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education */}
                <section className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[var(--accent-tertiary)] transition-colors animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                    <div className="h-12 w-12 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center mb-4 text-[var(--accent-tertiary)]">
                        <GraduationCap className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Education Status</h2>
                    <p className="text-[var(--text-secondary)] mb-4">
                        Currently pursuing higher education in Computer Science.
                    </p>
                    <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-tertiary)]"></span>
                            Focusing on Data Structures & Algorithms
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-tertiary)]"></span>
                            Researching AI Applications
                        </li>
                    </ul>
                </section>

                {/* Content Creation */}
                <section className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-colors animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="h-12 w-12 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center mb-4 text-[#FF0000]">
                        <Video className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Content Creation</h2>
                    <p className="text-[var(--text-secondary)] mb-4">
                        Creating "Study With Me" videos and tech tutorials.
                    </p>
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <div className="px-3 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                            <span className="text-[var(--text-primary)]">26K+</span> <span className="text-[var(--text-secondary)]">Subscribers</span>
                        </div>
                        <div className="px-3 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                            <span className="text-[var(--text-primary)]">32K+</span> <span className="text-[var(--text-secondary)]">Followers</span>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}
