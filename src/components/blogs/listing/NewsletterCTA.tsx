"use client";

interface NewsletterCTAProps {
	onSubmit?: (email: string) => void;
}

export default function NewsletterCTA({ onSubmit }: NewsletterCTAProps) {
	return (
		<section
			aria-label="Newsletter subscription"
			className="w-full reveal-on-scroll"
		>
			<div className="relative rounded-3xl bg-slate-900 overflow-hidden px-6 py-12 lg:px-16 lg:py-16 text-center">
				{/* Background glows */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.4),transparent_50%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.2),transparent_50%)]" />

				<div className="relative z-10 max-w-2xl mx-auto space-y-6">
					<div className="inline-flex items-center justify-center size-12 rounded-full bg-white/10 backdrop-blur mb-2 ring-1 ring-white/20">
						<span className="material-symbols-outlined text-white text-2xl">
							mail
						</span>
					</div>

					<h2 className="text-3xl font-bold text-white tracking-tight">
						Stay ahead of the curve
					</h2>

					<p className="text-slate-300 text-lg">
						Join 15,000+ engineers and leaders receiving our weekly digest on AI
						architecture and automation trends.
					</p>

					<form
						className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
						onSubmit={(e) => {
							e.preventDefault();
							const email = new FormData(e.currentTarget).get(
								"email"
							) as string;
							onSubmit?.(email);
						}}
					>
						<input
							type="email"
							name="email"
							required
							aria-label="Email address"
							placeholder="Enter your email"
							className="flex-1 rounded-full px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/20 transition-all backdrop-blur-sm"
						/>

						<button
							type="submit"
							className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10"
						>
							Subscribe
						</button>
					</form>

					<p className="text-xs text-slate-500 mt-4">
						No spam. Unsubscribe anytime.
					</p>
				</div>
			</div>
		</section>
	);
}
