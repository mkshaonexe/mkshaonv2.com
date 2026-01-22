
import { blogPosts, socialLinks } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Eye, Facebook, Share2, Twitter, Linkedin } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: Props) {
    // In a real app, you'd fetch data here. For now we find in mock data.
    // Note: params is a promise in newer Next.js versions but here we assume Page props standard.
    // Actually, let's treat it as standard Server Component for now.
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        // For development robustness if standard notFound is tricky in static export without config
        return <div className="p-20 text-center">Post not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1000px] mb-20">

            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] mb-8 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-10 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-[var(--bg-tertiary)] rounded-full text-xs font-medium text-[var(--accent-secondary)] mb-4 border border-[var(--border-color)]">
                    {post.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-[var(--text-secondary)] border-b border-[var(--border-color)] pb-8">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs text-white font-bold">
                            MK
                        </div>
                        <span className="font-medium text-[var(--text-primary)]">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views} views
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-12 border border-[var(--border-color)]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                {/* Main Content */}
                <article className="md:col-span-8 prose prose-invert prose-lg max-w-none">
                    {/* In a real app we would parse markdown here. For this demo we just render styled blocks. */}
                    <div className="whitespace-pre-line text-[var(--text-secondary)] leading-relaxed">
                        {post.content.split('##').map((section, idx) => {
                            if (idx === 0) return <p key={idx}>{section}</p>;
                            const [title, ...body] = section.split('\n');
                            return (
                                <div key={idx} className="mb-8">
                                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 mt-8">{title}</h2>
                                    <p>{body.join('\n')}</p>
                                </div>
                            );
                        })}
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="md:col-span-4 space-y-8">

                    {/* Share Card */}
                    <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 sticky top-24">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-4">Share this article</h3>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-full bg-[var(--bg-tertiary)] hover:bg-[#1877F2]/20 hover:text-[#1877F2] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-full bg-[var(--bg-tertiary)] hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition-colors">
                                <Twitter className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-full bg-[var(--bg-tertiary)] hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-full bg-[var(--bg-tertiary)] hover:bg-[var(--text-primary)]/20 hover:text-[var(--text-primary)] transition-colors">
                                <Share2 className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Tags */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-3">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </aside>

            </div>

        </div>
    );
}
