export default function SystemInfo() {
    return (
        <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] overflow-hidden font-mono text-sm shadow-lg mt-6">
            {/* Terminal Header */}
            <div className="bg-[var(--bg-tertiary)] px-4 py-3 border-b border-[var(--border-color)] flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <span className="ml-4 text-[var(--text-secondary)]">user@mkshaon.com: ~</span>
            </div>

            {/* Terminal Body */}
            <div className="p-8 text-[#e6edf3] font-fira-code">
                {/* Logo and Info Split */}
                <div className="flex flex-col md:flex-row gap-6 items-start">

                    {/* ASCII Logo - Arch Style (Cyan) - LARGER */}
                    <div className="text-[var(--accent-primary)] font-bold leading-none hidden md:block select-none text-[18px] flex-shrink-0">
                        <pre>{`                  -\`
                 .o+\`
                \`ooo/
               \`+oooo:
              \`+oooooo:
              -+oooooo+:
            \`/:-:++oooo+:
           \`/++++/+++++++:
          \`/++++++++++++++:
         \`/+++ooooooooooooo/\`
        ./ooosssso++osssssso+\`
       .oossssso-\`\`\`\`/ossssss+\`
      -osssssso.      :ssssssso.
     :osssssss/        osssso+++.
    /ossssssss/        +ssssooo/-
  \`/ossssso+/:-        -:/+osssso+-
 \`+sso+:-\`                 \`.-/+oso:
\`++:.                           \`-/+/
.\`                                 \`/`}</pre>
                    </div>

                    {/* Info Block - SMALLER Text */}
                    <div className="space-y-0.5 text-[11px] leading-snug w-full flex-1">
                        <div className="mb-3">
                            <span className="text-[var(--accent-primary)] font-bold">linuxiac</span>
                            <span className="text-white">@</span>
                            <span className="text-[var(--accent-primary)] font-bold">arch</span>
                            <div className="h-[1px] w-full bg-[var(--text-secondary)] mt-1 opacity-50 max-w-[240px]"></div>
                        </div>

                        <div className="grid grid-cols-[90px_1fr] gap-x-2 gap-y-0.5">
                            <span className="text-[var(--accent-primary)] font-bold">OS:</span>
                            <span>Arch Linux x86_64</span>

                            <span className="text-[var(--accent-primary)] font-bold">Host:</span>
                            <span>KVM/QEMU (Standard PC)</span>

                            <span className="text-[var(--accent-primary)] font-bold">Kernel:</span>
                            <span>6.8.8-arch1-1</span>

                            <span className="text-[var(--accent-primary)] font-bold">Uptime:</span>
                            <span>2 mins</span>

                            <span className="text-[var(--accent-primary)] font-bold">Packages:</span>
                            <span>991 (pacman), 5 (flatpak)</span>

                            <span className="text-[var(--accent-primary)] font-bold">Shell:</span>
                            <span>bash 5.2.26</span>

                            <span className="text-[var(--accent-primary)] font-bold">Resolution:</span>
                            <span>1680x1050</span>

                            <span className="text-[var(--accent-primary)] font-bold">Terminal:</span>
                            <span>kgx</span>

                            <span className="text-[var(--accent-primary)] font-bold">CPU:</span>
                            <span>AMD Ryzen 7 7700X (2)</span>

                            <span className="text-[var(--accent-primary)] font-bold">GPU:</span>
                            <span>Red Hat Virtio 1.0 GPU</span>

                            <span className="text-[var(--accent-primary)] font-bold">Memory:</span>
                            <span>1068MiB / 3900MiB</span>
                        </div>

                        {/* Color Palette */}
                        <div className="flex gap-3 mt-6 pt-2">
                            <div className="w-4 h-4 rounded bg-[#282c34]"></div>
                            <div className="w-4 h-4 rounded bg-[#e06c75]"></div>
                            <div className="w-4 h-4 rounded bg-[#98c379]"></div>
                            <div className="w-4 h-4 rounded bg-[#e5c07b]"></div>
                            <div className="w-4 h-4 rounded bg-[#61afef]"></div>
                            <div className="w-4 h-4 rounded bg-[#c678dd]"></div>
                            <div className="w-4 h-4 rounded bg-[#56b6c2]"></div>
                            <div className="w-4 h-4 rounded bg-[#abb2bf]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
