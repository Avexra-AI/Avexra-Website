import Image from "next/image";
import Breadcrumb from "@/components/common/Breadcrumb";

interface TitlePart {
	text: string;
	highlight?: boolean;
}

interface ServiceHeroProps {
	hero: {
		titleParts: TitlePart[];
		description: string[];
		primaryCta: string;
		secondaryCta: string;
		image?: string;
	};
	slug: string;
}

export default function ServiceHero({ hero, slug }: ServiceHeroProps) {
	const serviceTitle = hero.titleParts
		.map((p) => p.text)
		.join("")
		.trim();

	return (
		<section className="relative flex flex-col items-center justify-center min-h-[600px] py-20 px-4 overflow-hidden">
			{/* glow blobs */}
			<div className="absolute top-20 left-1/4 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-60" />
			<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/20 blur-[100px] rounded-full pointer-events-none mix-blend-multiply" />

			<div className="layout-content-container flex flex-col max-w-[1200px] w-full pt-10 z-10">
				<Breadcrumb
					items={[
						{ label: "Home", href: "/" },
						{ label: "Services", href: "/services" },
						{ label: serviceTitle },
					]}
				/>

				<div className="grid lg:grid-cols-2 gap-12 items-center mt-5">
					{" "}
					{/* LEFT */}
					<div className="flex flex-col gap-8 text-left">
						<h1 className="text-text-primary text-5xl lg:text-7xl font-black leading-[1.05] tracking-[-0.03em]">
							{hero.titleParts.map((part, i) =>
								part.highlight ? (
									<span
										key={i}
										className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim"
									>
										{part.text}
									</span>
								) : (
									<span key={i} className="block">
										{part.text}
									</span>
								)
							)}
						</h1>

						<div className="space-y-4 max-w-[620px]">
							{hero.description.map((para, i) => (
								<p
									key={i}
									className="text-slate-600 text-lg lg:text-xl font-normal leading-relaxed text-justify"
								>
									{para}
								</p>
							))}
						</div>

						<div className="flex flex-col sm:flex-row gap-4 mt-4">
							<button className="flex items-center justify-center h-12 px-8 bg-primary text-white text-base font-bold rounded-xl transition-all hover:bg-primary-dim shadow-sm">
								{hero.primaryCta}
							</button>
							<button className="flex items-center justify-center h-12 px-8 bg-white border border-border-light hover:bg-gray-50 text-text-main text-base font-medium rounded-xl transition-all shadow-sm">
								{hero.secondaryCta}
							</button>
						</div>
					</div>
					{/* RIGHT */}
					{hero.image && (
						<div className="relative hidden lg:flex items-center justify-center perspective-1000">
							<div className="relative w-full aspect-square max-w-[500px] glass-card rounded-3xl p-8 border border-white/40 shadow-2xl shadow-gray-200/50 overflow-hidden group">
								<Image
									src={hero.image}
									alt="Service visual"
									width={500}
									height={500}
									className="object-cover w-full h-full"
									priority
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
