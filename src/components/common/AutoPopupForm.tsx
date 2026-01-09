"use client";

import { useEffect, useRef, useState } from "react";

const POPUP_DELAYS = [15000, 30000, 60000];

export default function AutoPopupForm() {
	const [open, setOpen] = useState(false);
	const stepRef = useRef(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (sessionStorage.getItem("popup_submitted")) return;

		const schedulePopup = () => {
			const delay =
				POPUP_DELAYS[Math.min(stepRef.current, POPUP_DELAYS.length - 1)];

			timerRef.current = setTimeout(() => {
				setOpen(true);
				stepRef.current += 1;
			}, delay);
		};

		schedulePopup();

		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	const closePopup = () => {
		setOpen(false);

		if (sessionStorage.getItem("popup_submitted")) return;
		if (timerRef.current) clearTimeout(timerRef.current);

		const delay =
			POPUP_DELAYS[Math.min(stepRef.current, POPUP_DELAYS.length - 1)];

		timerRef.current = setTimeout(() => {
			setOpen(true);
			stepRef.current += 1;
		}, delay);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		sessionStorage.setItem("popup_submitted", "true");

		if (timerRef.current) clearTimeout(timerRef.current);

		setOpen(false);

		console.log("Form submitted");
	};

	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-[999] flex items-center justify-center
      bg-black/60 backdrop-blur-md px-4"
			onClick={closePopup}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="relative w-full max-w-md rounded-2xl
        border border-white/10
        bg-gradient-to-br from-[#0f172a]/95 to-[#020617]/95
        p-6 sm:p-8 shadow-2xl animate-popup"
			>
				{/* Close */}
				<button
					onClick={closePopup}
					className="absolute right-4 top-4 text-white/70 hover:text-white"
				>
					✕
				</button>

				{/* Header */}
				<h2 className="text-xl sm:text-2xl font-semibold text-white">
					Let’s Build Something Smart 🚀
				</h2>
				<p className="mt-2 text-sm text-white/70">
					Talk to our AI & Automation experts
				</p>

				{/* Form */}
				<form onSubmit={handleSubmit} className="mt-5 space-y-3 sm:space-y-4">
					<input className="input" placeholder="Full Name" required />
					<input
						className="input"
						type="email"
						placeholder="Email Address"
						required
					/>
					<input className="input" placeholder="Phone Number" />
					<textarea
						rows={3}
						className="input resize-none"
						placeholder="Tell us about your idea..."
					/>

					<button
						type="submit"
						className="w-full rounded-xl bg-gradient-to-r
            from-indigo-500 to-violet-600 py-3
            text-sm font-medium text-white hover:opacity-90 transition"
					>
						Get Free Consultation →
					</button>
				</form>

				<p className="mt-3 text-center text-xs text-white/40">
					No spam. Cancel anytime.
				</p>
			</div>
		</div>
	);
}
