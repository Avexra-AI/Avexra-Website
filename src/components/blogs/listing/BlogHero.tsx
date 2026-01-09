interface BlogHeroProps {
	title: string;
	subtitle: string;
}

export default function BlogHero({ title, subtitle }: BlogHeroProps) {
	const words = title.trim().split(" ");
	const firstWord = words[0];
	const restWords = words.slice(1).join(" ");

	return (
		<header
			aria-label="Blog page introduction"
			className="text-center mb-16 reveal-on-scroll"
		>
			<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
				<span className="text-primary">{firstWord}</span>
				{restWords && <span className="text-slate-900"> {restWords}</span>}
			</h1>

			<p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
		</header>
	);
}
