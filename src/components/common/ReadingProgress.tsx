"use client";

import { useEffect, useRef, useState } from "react";

export default function ReadingProgress() {
	const [progress, setProgress] = useState(0);
	const ticking = useRef(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!ticking.current) {
				window.requestAnimationFrame(() => {
					const scrollTop = window.scrollY;
					const docHeight =
						document.documentElement.scrollHeight - window.innerHeight;

					const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

					setProgress(percent);
					ticking.current = false;
				});

				ticking.current = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
			<div
				className="h-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-[width] duration-150 ease-out"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
}
