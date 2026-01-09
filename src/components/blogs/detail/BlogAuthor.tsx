import Image from "next/image";
import Link from "next/link";

interface BlogAuthorProps {
	author: {
		name: string;
		bio?: string;
		image?: string;
		profileUrl?: string;
		twitterUrl?: string;
	};
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
	const initial = author.name?.charAt(0).toUpperCase();

	return (
		<section
			aria-label="Author information"
			className="mt-12 pt-10 border-t border-slate-300 flex items-center gap-6"
		>
			{/* Avatar */}
			{author.image?.trim() ? (
				<Image
					src={author.image}
					alt={author.name}
					width={80}
					height={80}
					className="rounded-full border border-border-light object-cover shadow-sm"
				/>
			) : (
				<div className="size-20 rounded-full bg-primary/10 text-primary border border-slate-200 flex items-center justify-center font-bold text-2xl shadow-sm">
					{initial}
				</div>
			)}

			<div className="flex-1">
				<h4 className="text-lg font-bold text-text-main mb-1">{author.name}</h4>

				{author.bio && (
					<p className="text-sm text-slate-600 mb-3">{author.bio}</p>
				)}

				<div className="flex gap-4">
					{author.profileUrl && (
						<Link
							href={author.profileUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs font-bold text-primary hover:underline uppercase tracking-wide"
						>
							View Profile
						</Link>
					)}

					{author.twitterUrl && (
						<Link
							href={author.twitterUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs font-bold text-primary hover:underline uppercase tracking-wide"
						>
							Twitter
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
