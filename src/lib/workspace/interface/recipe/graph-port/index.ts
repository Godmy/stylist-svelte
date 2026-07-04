import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenPropertyType } from '$stylist/architecture/type/alias/property-type';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface RecipeGraphPort
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
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
