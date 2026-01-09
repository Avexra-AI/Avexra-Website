import { PortableText, PortableTextComponents } from "@portabletext/react";

interface BlogContentProps {
	content: any;
}

const components: PortableTextComponents = {
	/* ---------------- BLOCK TYPES ---------------- */

	types: {
		code: ({ value }) => (
			<div className="my-10 rounded-3xl overflow-hidden bg-white border border-border-light shadow-soft">
				<div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-border-light">
					<div className="flex gap-2">
						<div className="size-3 rounded-full bg-red-400" />
						<div className="size-3 rounded-full bg-yellow-400" />
						<div className="size-3 rounded-full bg-green-400" />
					</div>
					{value?.filename && (
						<span className="text-xs font-mono text-slate-500">
							{value.filename}
						</span>
					)}
				</div>
				<div className="p-6 overflow-x-auto custom-scrollbar bg-white">
					<pre className="font-mono text-sm leading-6 text-slate-800">
						<code>{value?.code}</code>
					</pre>
				</div>
			</div>
		),
	},

	/* ---------------- BLOCK STYLES ---------------- */
	block: {
		h2: ({ children }) => (
			<h2 className="text-2xl md:text-3xl font-bold text-text-main mt-12 mb-6">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="text-xl md:text-2xl font-bold text-text-main mt-10 mb-4">
				{children}
			</h3>
		),
		blockquote: ({ children }) => (
			<blockquote className="relative p-8 my-10 bg-white rounded-r-xl border-l-4 border-primary shadow-soft">
				<span className="absolute top-4 left-4 text-6xl text-slate-300 font-serif leading-none">
					“
				</span>
				<p className="relative left-4 z-10 text-lg font-medium italic text-slate-700">
					{children}
				</p>
			</blockquote>
		),
		normal: ({ children }) => (
			<p className="text-base md:text-lg leading-relaxed text-slate-600 mb-6">
				{children}
			</p>
		),
	},

	/* ---------------- INLINE MARKS ---------------- */
	marks: {
		strong: ({ children }) => (
			<strong className="text-text-main font-semibold">{children}</strong>
		),
		code: ({ children }) => (
			<code className="bg-blue-100 border border-blue-100 px-1.5 py-0.5 rounded text-sm text-primary font-mono">
				{children}
			</code>
		),
		link: ({ value, children }) => (
			<a
				href={value?.href}
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary font-medium underline underline-offset-4 hover:text-primary-dark transition-colors"
			>
				{children}
			</a>
		),
	},

	/* ---------------- LISTS ---------------- */
	list: {
		bullet: ({ children }) => (
			<ul className="flex flex-col gap-4 mb-10 pl-6">{children}</ul>
		),
		number: ({ children }) => (
			<ol className="flex flex-col gap-4 mb-10 list-decimal pl-6">
				{children}
			</ol>
		),
	},

	listItem: {
		bullet: ({ children }) => (
			<li className="flex gap-4 items-start">
				<span className="mt-1.5 text-primary font-bold text-sm">•</span>
				<div className="pl-1.5 text-slate-600">{children}</div>
			</li>
		),
		number: ({ children }) => (
			<li className="pl-1.5 text-slate-600 text-base md:text-lg leading-relaxed">
				{children}
			</li>
		),
	},
};

export default function BlogContent({ content }: BlogContentProps) {
	return (
		<div className="prose prose-lg prose-slate max-w-none [&_ol]:not-prose [&_ul]:not-prose">
			<PortableText value={content ?? []} components={components} />
		</div>
	);
}
