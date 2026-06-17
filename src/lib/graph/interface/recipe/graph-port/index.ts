import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenPropertyType } from '$stylist/development/type/enum/property-type';
import type { TokenSize } from '$stylist/layout/type/enum/size';

/**
 * RecipeGraphPort — порт узла графа.
 */
export interface RecipeGraphPort
	extends StructIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	id?: string;
	direction?: 'input' | 'output';
	dataType?: TokenPropertyType | string;
	label?: string;
	size?: TokenSize;
	index?: number;
	connected?: boolean;
	active?: boolean;
	color?: string;
	icon?: string | Snippet;
	onConnectionStart?: (event: MouseEvent) => void;
	onConnectionEnd?: (event: MouseEvent) => void;
}
