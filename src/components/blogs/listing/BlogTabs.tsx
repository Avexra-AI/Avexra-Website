interface BlogTabsProps {
	categories: string[];
	activeCategory: string;
	search: string;
	onCategoryChange: (category: string) => void;
	onSearchChange: (value: string) => void;
}

export default function BlogTabs({
	categories,
	activeCategory,
	search,
	onCategoryChange,
	onSearchChange,
}: BlogTabsProps) {
	if (!categories || categories.length === 0) return null;

	return (
		<section
			aria-label="Blog filters"
			className="w-full mb-12 sticky top-24 z-30"
		>
			<div className="glass-panel rounded-2xl p-2 flex flex-col md:flex-row gap-4 items-center justify-between shadow-lg shadow-slate-200/50">
				{/* Categories */}
				<div
					className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 px-2 no-scrollbar"
					role="tablist"
					aria-label="Blog categories"
				>
					{categories.map((category) => (
						<button
							key={category}
							type="button"
							role="tab"
							aria-selected={activeCategory === category}
							onClick={() => onCategoryChange(category)}
							className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
								activeCategory === category
									? "bg-primary text-white shadow-md shadow-indigo-500/20"
									: "text-slate-600 hover:bg-slate-100 hover:text-primary"
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Search */}
				<div className="relative w-full md:w-72 group">
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">
							search
						</span>
					</div>

					<input
						type="search"
						aria-label="Search blog posts"
						value={search}
						onChange={(e) => onSearchChange(e.target.value)}
						placeholder="Search topics..."
						className="block w-full pl-10 pr-3 py-2.5 border-none rounded-xl bg-slate-100/50 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm"
					/>
				</div>
			</div>
		</section>
	);
}
