"use client";

interface BlogShareProps {
	title: string;
}

export default function BlogShare({ title }: BlogShareProps) {
	/**
	 * Safe URL getter (client-only)
	 */
	const getUrl = () => {
		if (typeof window === "undefined") return "";
		return window.location.href;
	};

	const shareOnLinkedIn = () => {
		const url = getUrl();
		if (!url) return;

		window.open(
			`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
				url
			)}`,
			"_blank",
			"noopener,noreferrer"
		);
	};

	const shareOnX = () => {
		const url = getUrl();
		if (!url) return;

		window.open(
			`https://twitter.com/intent/tweet?text=${encodeURIComponent(
				title
			)}&url=${encodeURIComponent(url)}`,
			"_blank",
			"noopener,noreferrer"
		);
	};

	const copyLink = async () => {
		try {
			const url = getUrl();
			if (!url) return;

			await navigator.clipboard.writeText(url);
		} catch (error) {
			console.error("Clipboard copy failed", error);
		}
	};

	return (
		<>
			{/* ================= Desktop Sticky Sidebar ================= */}
			<aside
				aria-label="Share article"
				className="hidden lg:flex flex-col gap-6 sticky top-32 h-fit w-16 items-center"
			>
				<p
					className="text-xs font-bold text-text-muted uppercase tracking-widest rotate-180 mb-4"
					style={{ writingMode: "vertical-rl" }}
				>
					Share
				</p>

				{/* Copy link */}
				<button
					type="button"
					aria-label="Copy article link"
					onClick={copyLink}
					className="size-10 rounded-full bg-surface-light border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm hover:shadow-md"
				>
					<span
						aria-hidden
						className="material-symbols-outlined text-xl transition-transform group-hover:scale-110"
						style={{ fontVariationSettings: "'wght' 400" }}
					>
						link
					</span>
				</button>

				{/* LinkedIn */}
				<button
					type="button"
					aria-label="Share on LinkedIn"
					onClick={shareOnLinkedIn}
					className="size-10 rounded-full bg-surface-light border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm hover:shadow-md"
				>
					<svg
						aria-hidden
						className="w-5 h-5 fill-current transition-transform group-hover:scale-110"
						viewBox="0 0 24 24"
					>
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
					</svg>
				</button>

				{/* X (Twitter) */}
				<button
					type="button"
					aria-label="Share on X"
					onClick={shareOnX}
					className="size-10 rounded-full bg-surface-light border border-border-light flex items-center justify-center text-text-muted hover:text-primary hover:border-primary transition-all shadow-sm hover:shadow-md"
				>
					<svg
						aria-hidden
						className="w-4 h-4 fill-current transition-transform group-hover:scale-110"
						viewBox="0 0 24 24"
					>
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
					</svg>
				</button>
			</aside>

			{/* ================= Mobile Floating Bar ================= */}
			<div
				aria-label="Share article"
				className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur border border-border-light rounded-full px-6 py-3 flex gap-6 shadow-2xl"
			>
				<button type="button" aria-label="Copy link" onClick={copyLink}>
					<span className="material-symbols-outlined text-slate-500 hover:text-primary">
						link
					</span>
				</button>

				<button
					type="button"
					aria-label="Share on LinkedIn"
					onClick={shareOnLinkedIn}
				>
					<span className="material-symbols-outlined text-slate-500 hover:text-primary">
						share
					</span>
				</button>

				<button type="button" aria-label="Share on X" onClick={shareOnX}>
					<span className="material-symbols-outlined text-slate-500 hover:text-primary">
						alternate_email
					</span>
				</button>
			</div>
		</>
	);
}
