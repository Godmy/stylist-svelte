import type { SlotAutoComplete } from '$stylist/search/interface/slot/auto-complete';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText as ICaptionSlot } from '$stylist/typography/interface/slot/text';
import type { SlotIcon as IIconSlot } from '$stylist/svg/interface/slot/icon';
import type { SlotText as ILabelSlot } from '$stylist/typography/interface/slot/text';

export interface RecipeAutoComplete
	extends ComputeIntersectAll<
		[
			SlotAutoComplete,
			SlotTheme,
			ILabelSlot,
			ICaptionSlot,
			IIconSlot,
			HTMLAttributes<HTMLInputElement>
		]
	> {}
