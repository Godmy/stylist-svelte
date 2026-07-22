import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeBreadcrumbs } from '$stylist/navigation/interface/recipe/breadcrumbs';
import type { BreadcrumbItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-item';

export type BreadcrumbsProps = RecipeBreadcrumbs &
	HTMLAttributes<HTMLElement> & {
		crumbs?: BreadcrumbItem[];
		activeId?: string;
		onNavigate?: (id: string) => void;
	};
