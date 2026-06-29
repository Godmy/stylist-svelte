import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSoftwareBadge } from '$stylist/information/type/alias/software-badge';

export interface RecipeNpmBadge
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	type?: TokenSoftwareBadge;
	label?: string;
	value?: string;
	link?: string;
}
