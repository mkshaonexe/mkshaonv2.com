import { Mail, Send } from 'lucide-react';

export default function ContactWidget() {
    return (
        <div className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-color)] overflow-hidden">
            <div className="p-4 border-b border-[var(--border-color)] flex items-center gap-3">
                <div className="p-2 bg-[var(--bg-tertiary)] rounded-full">
                    <Mail className="w-5 h-5 text-[var(--accent-primary)]" />
                </div>
                <div>
                    <h3 className="font-bold text-[var(--text-primary)]">Get in Touch</h3>
                    <p className="text-xs text-[var(--text-secondary)]">Send me a message</p>
                </div>
            </div>

            <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Your name (optional)"
                        className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-sm rounded-lg p-3 w-full focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] transition-colors"
                    />
                    <input
                        type="email"
                        placeholder="Your email (optional)"
                        className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-sm rounded-lg p-3 w-full focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] transition-colors"
                    />
                </div>
                <textarea
                    rows={3}
                    placeholder="Write your message here..."
                    className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-sm rounded-lg p-3 w-full focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] transition-colors resize-none"
                ></textarea>

                <div className="flex justify-end">
                    <button className="flex items-center gap-2 bg-[var(--accent-primary)] text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
