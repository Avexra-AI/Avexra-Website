"use client";

import { useState } from "react";

interface BlogInlineCTAProps {
	title: string;
	description: string;
	buttonText: string;
	onSubmit?: (email: string) => void;
}

export default function BlogInlineCTA({
	title,
	description,
	buttonText,
	onSubmit,
}: BlogInlineCTAProps) {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!email) return;

		onSubmit?.(email);
		setSubmitted(true);
		setEmail("");
	};

	return (
		<section
			aria-label="Newsletter subscription"
			className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 relative overflow-hidden group shadow-soft"
		>
			{/* Glow blob */}
			<div
				aria-hidden="true"
				className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"
			/>

			<div className="relative z-10">
				<div className="flex items-start justify-between gap-6 flex-wrap">
					{/* Content */}
					<div className="max-w-md">
						<h3 className="text-2xl font-bold text-text-main mb-2">{title}</h3>

						<p className="text-slate-600 mb-6">{description}</p>

						<form
							onSubmit={handleSubmit}
							className="flex gap-3 flex-wrap sm:flex-nowrap"
						>
							<input
								type="email"
								aria-label="Email address"
								placeholder="work@company.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								disabled={submitted}
								required
								className="bg-white border border-border-light text-text-main rounded-2xl px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-full sm:w-64 placeholder-slate-400 shadow-sm disabled:opacity-60"
							/>

							<button
								type="submit"
								disabled={submitted}
								className="bg-primary hover:bg-primary-dark disabled:bg-primary/70 text-white font-bold rounded-2xl px-6 py-2.5 transition-colors whitespace-nowrap shadow-lg shadow-primary/25"
							>
								{submitted ? "Subscribed ✓" : buttonText}
							</button>
						</form>
					</div>

					{/* Icon */}
					<div className="hidden sm:block">
						<div className="size-14 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-primary shadow-sm">
							<span
								aria-hidden="true"
								className="material-symbols-outlined text-3xl"
								style={{ fontVariationSettings: "'wght' 400" }}
							>
								mail
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
