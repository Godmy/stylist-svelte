import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotContent } from '$stylist/layout/interface/slot/content';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeTableCell
	extends ComputeIntersectAll<
		[SlotTheme, ILabelSlot, ICaptionSlot, HTMLAttributes<HTMLTableCellElement>, SlotContent]
	> {
	variant?: 'data' | 'header';
	align?: 'left' | 'center' | 'right';
}
