import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { Snippet } from 'svelte';
export interface RecipeUserCardProps
	extends ComputeIntersectAll<[LayoutHTMLAttributes<HTMLDivElement>]> {
	user?: {
		id: string;
		name: string;
		email?: string;
		avatar?: string;
		role?: string;
		title?: string;
		actions?: Snippet;
	};
	size?: (typeof TOKEN_SIZE)[number];
	showEmail?: boolean;
	showRole?: boolean;
}
