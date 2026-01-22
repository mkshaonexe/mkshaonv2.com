export default function SystemInfo() {
    return (
        <div className="bg-black rounded-xl border border-[#333] overflow-hidden font-mono text-sm shadow-lg mt-6">
            {/* Terminal Header */}
            <div className="bg-[#1a1a1a] px-4 py-2 border-b border-[#333] flex items-center gap-2">
                <span className="text-[#0f0] text-xs">[root@kurisPC ~]# neofetch</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 bg-black text-white font-fira-code">
                {/* Command Prompt */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* ASCII Logo - Arch Linux style with elaborate design */}
                    <div className="text-[#0dd] font-bold leading-[1.2] select-none text-[11px] whitespace-pre">
                        {`        .o+\`
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
 .\`                                 \`/`}
                    </div>

                    {/* Info Block */}
                    <div className="space-y-0.5 text-[13px] leading-relaxed w-full">
                        <div className="mb-3">
                            <span className="text-[#0dd] font-bold">root</span>
                            <span className="text-white">@</span>
                            <span className="text-[#0dd] font-bold">PC</span>
                            <div className="h-[1px] w-full bg-[#0dd] mt-1 max-w-[400px]"></div>
                        </div>

                        <div className="grid grid-cols-[100px_1fr] gap-x-3 gap-y-0.5">
                            <span className="text-[#0dd] font-bold">OS:</span>
                            <span className="text-white">Arch Linux x86_64</span>

                            <span className="text-[#0dd] font-bold">Host:</span>
                            <span className="text-white">VirtualBox 1.2</span>

                            <span className="text-[#0dd] font-bold">Kernel:</span>
                            <span className="text-white">5.9.12-arch1-1</span>

                            <span className="text-[#0dd] font-bold">Uptime:</span>
                            <span className="text-white">30 secs</span>

                            <span className="text-[#0dd] font-bold">Packages:</span>
                            <span className="text-white">163 (pacman)</span>

                            <span className="text-[#0dd] font-bold">Shell:</span>
                            <span className="text-white">bash 5.0.18</span>

                            <span className="text-[#0dd] font-bold">Resolution:</span>
                            <span className="text-white">preferred</span>

                            <span className="text-[#0dd] font-bold">Terminal:</span>
                            <span className="text-white">/dev/tty1</span>

                            <span className="text-[#0dd] font-bold">CPU:</span>
                            <span className="text-white">Intel Pentium 3805U (1) @ 1.895GHz</span>

                            <span className="text-[#0dd] font-bold">GPU:</span>
                            <span className="text-white">00:02.0 VMware SVGA II Adapter</span>

                            <span className="text-[#0dd] font-bold">Memory:</span>
                            <span className="text-white">64MiB / 927MiB</span>
                        </div>

                        {/* Color Palette - Terminal Colors */}
                        <div className="flex gap-0 mt-4 pt-3">
                            <div className="w-12 h-6 bg-[#000000]"></div>
                            <div className="w-12 h-6 bg-[#aa0000]"></div>
                            <div className="w-12 h-6 bg-[#00aa00]"></div>
                            <div className="w-12 h-6 bg-[#aa5500]"></div>
                            <div className="w-12 h-6 bg-[#0000aa]"></div>
                            <div className="w-12 h-6 bg-[#aa00aa]"></div>
                            <div className="w-12 h-6 bg-[#00aaaa]"></div>
                            <div className="w-12 h-6 bg-[#aaaaaa]"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Command Prompt */}
                <div className="mt-4 text-[#0f0] text-xs">
                    [root@<span className="bg-[#555] px-2">████</span>PC ~]#
                </div>
            </div>
        </div>
    );
}
