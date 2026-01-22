import Link from 'next/link';
import { Settings } from 'lucide-react';

export default function GithubActivity() {
    return (
        <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] overflow-hidden">
            {/* Window Header */}
            <div className="bg-[var(--bg-tertiary)] px-4 py-3 border-b border-[var(--border-color)] flex items-center justify-between">
                <span className="font-mono text-sm text-[var(--text-secondary)]">Developer_Profile</span>
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
            </div>

            <div className="p-6">
                <div className="flex flex-col gap-6">

                    {/* Top Section: Avatar + Title + Settings */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* ASCII Avatar - Hoodie Guy */}
                        <div className="w-32 flex-shrink-0 text-[var(--accent-secondary)] font-mono text-[10px] leading-[10px] whitespace-pre select-none">
                            {`
       .---.
      /     \\
     |  o o  |
     |   ^   |
      \\ '—' /
       '---'
      /|   |\\
     / |   | \\
    /  |   |  \\
   /   |   |   \\
  /    |___|    \\
 (____/     \\____)
                    `}
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[var(--accent-secondary)] font-bold text-xl">&lt;/&gt;</span>
                                <h2 className="text-xl font-bold text-[var(--text-primary)]">GitHub Activity</h2>
                            </div>

                            <div className="text-[var(--text-secondary)] text-sm mb-4">540 Contributions</div>
                            <div className="text-[var(--text-secondary)] text-xs mb-4">Dec 2, 2024 - Dec 2, 2025</div>

                            {/* Year Selector */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-[var(--accent-secondary)] text-black text-xs font-bold rounded">2025</span>
                                <span className="px-3 py-1 text-[var(--text-secondary)] text-xs hover:text-[var(--text-primary)] cursor-pointer">2024</span>
                                <span className="px-3 py-1 text-[var(--text-secondary)] text-xs hover:text-[var(--text-primary)] cursor-pointer">2023</span>
                                <div className="flex-1"></div>
                                <Settings className="w-4 h-4 text-[var(--text-secondary)] cursor-pointer hover:text-[var(--text-primary)]" />
                            </div>
                        </div>
                    </div>

                    {/* Contribution Graph */}
                    {/* 
                Generating a grid closer to the image look.
                7 rows (days), ~50 cols (weeks).
             */}
                    <div className="w-full overflow-x-auto">
                        <div className="flex gap-1 min-w-max">
                            {Array.from({ length: 40 }).map((_, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                                        // Randomly assign intensity based on reference image "green" look
                                        const rand = Math.random();
                                        let colorClass = 'bg-[var(--bg-tertiary)]'; // default empty
                                        if (rand > 0.85) colorClass = 'bg-[#3fb950]'; // bright green
                                        else if (rand > 0.7) colorClass = 'bg-[#2ea043]'; // mid green
                                        else if (rand > 0.5) colorClass = 'bg-[#0e4429]'; // dark green

                                        return <div key={dayIndex} className={`w-3 h-3 rounded-sm ${colorClass}`}></div>
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mt-2">
                        <Link href="#" className="hover:text-[var(--accent-tertiary)]">Learn how we count contributions ↗</Link>
                        <div className="flex items-center gap-1">
                            <span>Less</span>
                            <div className="w-3 h-3 bg-[var(--bg-tertiary)] rounded-sm"></div>
                            <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
                            <div className="w-3 h-3 bg-[#2ea043] rounded-sm"></div>
                            <div className="w-3 h-3 bg-[#3fb950] rounded-sm"></div>
                            <span>More</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
