import { Play, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';

export default function MusicWidget() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['On My Way', 'Faded'].map((song, idx) => (
                <div key={idx} className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] p-4 flex gap-4 items-center">
                    {/* Album Art Placeholder */}
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex-shrink-0 animate-pulse"></div>

                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-[var(--text-primary)] truncate">{song}</h4>
                        <p className="text-xs text-[var(--text-secondary)]">Alan Walker • Dance</p>

                        <div className="mt-2 flex items-center justify-between">
                            <div className="flex gap-2">
                                <SkipBack className="w-4 h-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer" />
                                <Play className="w-4 h-4 text-[var(--text-primary)] fill-current cursor-pointer" />
                                <SkipForward className="w-4 h-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer" />
                            </div>
                            <div className="text-[10px] text-[var(--text-secondary)] font-mono">1:45 / 3:13</div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-2 h-1 w-full bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                            <div className="h-full bg-[var(--accent-primary)] w-[40%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
