import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenSize } from '$stylist/layout/type/enum/size';

/**
 * RecipeGraphNode — узел графа.
 */
export interface RecipeGraphNode
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	id: string;
	x: number;
	y: number;
	label?: string;
	type?: string;
	interactive?: boolean;
	size?: TokenSize;
	color?: string;
	selected?: boolean;
}
