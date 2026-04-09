import type { Snippet } from 'svelte';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { BreadcrumbsRecipe } from '$stylist/navigation/interface/recipe/breadcrumbs';

export type BreadcrumbItem = {
	label: string;
	href?: string;
};

export type BreadcrumbsProps = BreadcrumbsRecipe &
	InteractionHTMLAttributes<HTMLElement> & {
		crumbs?: BreadcrumbItem[];
	};
