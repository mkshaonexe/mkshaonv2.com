
import React from 'react';

interface TerminalBlockProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
}

export default function TerminalBlock({ title = 'user@mkshaon.com:~', children, className = '' }: TerminalBlockProps) {
    return (
        <div className={`overflow-hidden rounded-xl bg-[#0d1117] border border-[#30363d] shadow-xl ${className}`}>
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between bg-[#161b22] px-4 py-3 border-b border-[#30363d]">
                <div className="text-xs font-mono text-[#7d8590] opacity-80 select-none">
                    {title}
                </div>
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" /> {/* Red */}
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" /> {/* Yellow */}
                    <div className="h-3 w-3 rounded-full bg-[#27c93f]" /> {/* Green */}
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm md:text-base text-[#e6edf3]">
                {children}
            </div>
        </div>
    );
}
