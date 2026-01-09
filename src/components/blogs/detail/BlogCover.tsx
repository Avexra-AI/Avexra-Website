import Image from "next/image";

interface BlogCoverProps {
	image?: string;
	alt?: string;
}

export default function BlogCover({ image, alt = "" }: BlogCoverProps) {
	if (!image?.trim()) return null;

	return (
		<section className="w-full max-w-[960px] px-6 md:px-10">
			<div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10 group shadow-soft border border-border-light">
				{/* Dark gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 z-10" />

				<Image
					src={image}
					alt={alt}
					fill
					priority
					className="object-cover transform transition-transform duration-700 group-hover:scale-105"
				/>
			</div>
		</section>
	);
}
