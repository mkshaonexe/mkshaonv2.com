
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts } from '@/lib/data';
import { Search } from 'lucide-react';

export default function BlogButton() {
    // Get the latest post as featured
    const featuredPost = blogPosts[0];
    const regularPosts = blogPosts.slice(1);

    const categories = ['All Posts', 'Technology', 'AI & ML', 'Productivity', 'Tutorials', 'Personal'];

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1240px] mb-20">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Blog</h1>
                    <p className="text-[var(--text-secondary)]">Thoughts on technology, productivity, and learning.</p>
                </div>

                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-tertiary)] transition-colors"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-[var(--text-secondary)]" />
                </div>
            </div>

            {/* Featured Post (Coming soon: Layout specialized for hero post) */}
            {/* For now we stick to grid for uniformity but we could make the first one take full width */}

            {/* Categories */}
            <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
                {categories.map((cat, idx) => (
                    <button
                        key={cat}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
              ${idx === 0
                                ? 'bg-[var(--accent-primary)] text-black'
                                : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Render Featured Post first */}
                <div className="lg:col-span-2">
                    <BlogCard post={featuredPost} />
                </div>
                <div>
                    {/* Sidebar or just a regular post slot for now? Let's just put the next post here */}
                    <BlogCard post={regularPosts[0]} />
                </div>

                {/* Remaining posts */}
                {regularPosts.slice(1).map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>

        </div>
    );
}
