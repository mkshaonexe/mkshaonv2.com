
import { Facebook, Github, Instagram, Mail, Youtube } from 'lucide-react';

export const socialLinks = [
    { name: 'YouTube', href: 'https://youtube.com/@mkshaon7', icon: Youtube, color: '#FF0000' },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, color: '#1877F2' },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram, color: '#E4405F' },
    { name: 'GitHub', href: 'https://github.com/mkshaon', icon: Github, color: '#181717' },
    { name: 'Email', href: 'mailto:contact@mkshaon.com', icon: Mail, color: '#EA4335' },
];

export const projects = [
    {
        slug: 'pvc-perseverance',
        title: 'PVC-Perseverance',
        subtitle: 'Advanced Pomodoro Timer',
        description: 'Comprehensive Pomodoro timer app with auto-save, analytics, and full customization built by MKShaon for focused, distraction-free studying.',
        tags: ['Android', 'Pomodoro', 'Productivity', 'Focus'],
        iconName: 'Clock', // We'll handle icons dynamically in the component
        link: '#',
        featured: true,
    },
    {
        slug: 'no-shorts-yt',
        title: 'No-Shorts-No-Distraction-YT',
        subtitle: 'YouTube Focus Extension',
        description: 'Browser extension that blocks ads, YouTube shorts, feed, and turns off autoplay recommendations and suggestions for distraction-free viewing.',
        tags: ['Browser Extension', 'Productivity', 'Focus'],
        iconName: 'Youtube',
        link: '#',
        featured: true,
    },
    {
        slug: 'social-sentry',
        title: 'Social Sentry',
        subtitle: 'Social Media Focus Tool',
        description: 'Android app that helps block distracting content on social media platforms, specifically Reels, Shorts, and Stories features using Android\'s accessibility services.',
        tags: ['Android', 'Accessibility', 'Productivity'],
        iconName: 'Shield',
        link: '#',
        featured: true,
    },
    {
        slug: 'no-reels-fb',
        title: 'No-reels-no-Distraction-Fb',
        subtitle: 'Facebook Focus Tool',
        description: 'Block reels and distracting content on Facebook to regain your focus.',
        tags: ['Browser Extension', 'Facebook', 'Productivity'],
        iconName: 'Facebook',
        link: '#',
        featured: false,
    },
    {
        slug: 'morning-study',
        title: 'Morning Study Sessions',
        subtitle: 'Live Study Companion',
        description: 'Join thousands of students in daily morning study sessions to boost productivity.',
        tags: ['Community', 'Live', 'Study'],
        iconName: 'Sun',
        link: '#',
        featured: false,
    },
];

export const blogPosts = [
    {
        slug: 'future-of-ai-in-2025',
        title: 'The Future of AI in 2025: Trends to Watch',
        excerpt: 'Artificial Intelligence is evolving rapidly. Here are the top trends that will define the tech landscape in 2025 and beyond.',
        content: `
      ## Introduction
      Artificial Intelligence is evolving at an unprecedented pace...
      
      ## 1. Generative AI Everywhere
      From coding to art, generative AI is becoming embedded in our daily workflows...
      
      ## 2. AI in Healthcare
      Personalized medicine is becoming a reality thanks to AI...
      
      ## Conclusion
      The future is bright, but we must navigate the ethical challenges ahead.
    `,
        category: 'AI & Machine Learning',
        author: 'MK Shaon',
        date: 'Dec 15, 2024',
        readTime: '5 min read',
        views: '1.2K',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop',
        tags: ['AI', 'Future', 'Tech'],
        featured: true,
    },
    {
        slug: 'mastering-pomodoro',
        title: 'Mastering the Pomodoro Technique for Deep Work',
        excerpt: 'Learn how to effectively use the Pomodoro technique to maintain focus and avoid burnout during long study sessions.',
        content: '...',
        category: 'Productivity',
        author: 'MK Shaon',
        date: 'Nov 28, 2024',
        readTime: '4 min read',
        views: '850',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2940&auto=format&fit=crop',
        tags: ['Productivity', 'Study', 'Focus'],
        featured: false,
    },
    {
        slug: 'nextjs-14-guide',
        title: 'Getting Started with Next.js 14 and Server Actions',
        excerpt: 'A comprehensive guide to building modern web applications with Next.js 14, covering App Router and Server Actions.',
        content: '...',
        category: 'Web Development',
        author: 'MK Shaon',
        date: 'Oct 10, 2024',
        readTime: '8 min read',
        views: '2.5K',
        image: 'https://images.unsplash.com/photo-1618477247222-ac5913054f90?q=80&w=2831&auto=format&fit=crop',
        tags: ['Next.js', 'React', 'Coding'],
        featured: false,
    },
    {
        slug: 'student-life-balance',
        title: 'Balancing Coding, Content Creation, and Studies',
        excerpt: 'My personal journey and tips on how to manage multiple passions without compromising on academic performance.',
        content: '...',
        category: 'Student Life',
        author: 'MK Shaon',
        date: 'Sep 05, 2024',
        readTime: '6 min read',
        views: '3.1K',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop',
        tags: ['Life', 'Balance', 'Student'],
        featured: false,
    },
];

export const resources = [
    {
        category: 'Development',
        items: [
            { name: 'VS Code', description: 'The best code editor for web development.', url: 'https://code.visualstudio.com' },
            { name: 'Cursor', description: 'AI-first code editor.', url: 'https://cursor.sh' },
            { name: 'Vercel', description: 'Platform for frontend frameworks and static sites.', url: 'https://vercel.com' },
        ]
    },
    {
        category: 'Productivity',
        items: [
            { name: 'Notion', description: 'All-in-one workspace.', url: 'https://notion.so' },
            { name: 'Obsidian', description: 'A second brain, for you, forever.', url: 'https://obsidian.md' },
            { name: 'Pomofocus', description: 'Customizable Pomodoro timer.', url: 'https://pomofocus.io' },
        ]
    },
    {
        category: 'Design',
        items: [
            { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://figma.com' },
            { name: 'Coolors', description: 'The super fast color palettes generator.', url: 'https://coolors.co' },
            { name: 'Lucide', description: 'Beautiful & consistent icons.', url: 'https://lucide.dev' },
        ]
    },
];
