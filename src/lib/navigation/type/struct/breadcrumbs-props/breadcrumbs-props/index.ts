export type BreadcrumbsProps = BreadcrumbsRecipe &
	InteractionHTMLAttributes<HTMLElement> & {
		crumbs?: BreadcrumbItem[];
	};
