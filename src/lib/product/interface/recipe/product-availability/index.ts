import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeProductAvailability
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	available?: boolean;
	stock?: number;
	location?: string;
	estimatedRestock?: string;
	onNotifyMe?: () => void;
	className?: string;
}
