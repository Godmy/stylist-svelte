import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeGraphvizDirectedEdge
	extends ComputeIntersectAll<
		[
			SlotTheme,
			Omit<ComputeIntersectAll<[SlotTheme, ILabelSlot, HTMLAttributes<SVGPathElement>]>, 'style'>
		]
	> {
	id?: string;
	sourceX?: number;
	sourceY?: number;
	targetX?: number;
	targetY?: number;
	color?: string;
	width?: number;
	style?: 'solid' | 'dashed' | 'dotted';
}
