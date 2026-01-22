
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Eye } from 'lucide-react';

interface BlogPostProps {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    views: string;
    image: string;
}

export default function BlogCard({ post }: { post: BlogPostProps }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block h-full">
            <div className="h-full overflow-hidden rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all hover:border-[var(--accent-tertiary)] hover:translate-y-[-4px] hover:shadow-xl">

                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="inline-block rounded-md bg-[var(--bg-primary)]/80 backdrop-blur-sm px-2 py-1 text-xs font-medium text-[var(--accent-tertiary)] border border-[var(--border-color)]">
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                    <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)] mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                        </div>
                    </div>

                    <h3 className="line-clamp-2 text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-tertiary)] transition-colors">
                        {post.title}
                    </h3>

                    <p className="line-clamp-3 text-sm text-[var(--text-secondary)] mb-4 flex-grow">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-4 mt-auto">
                        <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                                MK
                            </div>
                            <span className="text-xs font-medium text-[var(--text-primary)]">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                            <Eye className="h-3 w-3" />
                            {post.views}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
