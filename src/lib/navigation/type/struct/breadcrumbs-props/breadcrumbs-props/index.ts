import type { InteractionHTMLAttributes } from '$stylist/interaction';
import type { BreadcrumbsRecipe } from '$stylist/navigation/interface/recipe/breadcrumbs';
import type { BreadcrumbItem } from '../breadcrumb-item';

export type BreadcrumbsProps = BreadcrumbsRecipe &
	InteractionHTMLAttributes<HTMLElement> & {
		crumbs?: BreadcrumbItem[];
		activeId?: string;
		onNavigate?: (id: string) => void;
	};
