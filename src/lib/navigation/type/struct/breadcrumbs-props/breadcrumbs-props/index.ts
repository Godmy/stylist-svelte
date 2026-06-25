import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeBreadcrumbs } from '$stylist/navigation/interface/recipe/breadcrumbs';
import type { BreadcrumbItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-item';

export type BreadcrumbsProps = RecipeBreadcrumbs &
	HTMLAttributes<HTMLElement> & SlotInteraction & {
		crumbs?: BreadcrumbItem[];
		activeId?: string;
		onNavigate?: (id: string) => void;
	};
