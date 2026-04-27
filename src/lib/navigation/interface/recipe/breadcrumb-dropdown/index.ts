import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BreadcrumbDropdownRecipe
	extends StructIntersectAll<[
		ThemeAttributes<HTMLDivElement>,
		InteractionHTMLAttributes<HTMLDivElement>
	]>
{}
