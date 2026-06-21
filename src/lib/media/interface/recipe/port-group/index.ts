import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenRelationship } from '$stylist/architecture/type/enum/relationship';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export interface RecipePortGroup
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLDivElement>]> {
	title?: string;
	direction?: TokenRelationship;
	portSize?: TokenSize;
	showLabels?: boolean;
	compact?: boolean;
	divider?: boolean;
}
