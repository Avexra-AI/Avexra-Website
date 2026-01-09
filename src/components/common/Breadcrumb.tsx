import Link from "next/link";

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav className="mb-6 text-sm text-text-muted">
			<ol className="flex flex-wrap items-center gap-1">
				{items.map((item, index) => (
					<li key={index} className="flex items-center gap-1">
						{item.href ? (
							<Link
								href={item.href}
								className="hover:text-text-primary transition-colors"
							>
								{item.label}
							</Link>
						) : (
							<span className="text-text-primary font-medium">
								{item.label}
							</span>
						)}

						{index < items.length - 1 && <span>/</span>}
					</li>
				))}
			</ol>
		</nav>
	);
}
