interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export default function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	if (totalPages <= 1) return null;

	const getPages = () => {
		const pages: (number | "...")[] = [];

		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
			return pages;
		}

		pages.push(1);

		if (currentPage > 3) pages.push("...");

		const start = Math.max(2, currentPage - 1);
		const end = Math.min(totalPages - 1, currentPage + 1);

		for (let i = start; i <= end; i++) pages.push(i);

		if (currentPage < totalPages - 2) pages.push("...");

		pages.push(totalPages);

		return pages;
	};

	const pages = getPages();

	return (
		<section className="w-full flex justify-center mb-16 reveal-on-scroll delay-200">
			<nav
				aria-label="Pagination"
				className="glass-panel inline-flex items-center rounded-xl p-1 shadow-sm"
			>
				{/* Prev */}
				<button
					aria-label="Previous page"
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-primary transition-colors disabled:opacity-50"
				>
					<span
						className="material-symbols-outlined"
						style={{ fontVariationSettings: "'wght' 400" }}
					>
						chevron_left
					</span>
				</button>

				{/* Pages */}
				{pages.map((page, index) =>
					page === "..." ? (
						<span
							key={`dots-${index}`}
							aria-hidden
							className="px-3 py-2 text-slate-400"
						>
							…
						</span>
					) : (
						<button
							key={page}
							aria-current={page === currentPage ? "page" : undefined}
							onClick={() => onPageChange(page)}
							className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
								page === currentPage
									? "bg-indigo-50 text-primary font-bold"
									: "text-slate-600 hover:text-primary hover:bg-slate-50"
							}`}
						>
							{page}
						</button>
					)
				)}

				{/* Next */}
				<button
					aria-label="Next page"
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-primary transition-colors disabled:opacity-50"
				>
					<span
						className="material-symbols-outlined"
						style={{ fontVariationSettings: "'wght' 400" }}
					>
						chevron_right
					</span>
				</button>
			</nav>
		</section>
	);
}
