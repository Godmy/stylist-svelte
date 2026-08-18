import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotBadge } from '$stylist/layout/interface/slot/badge';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeNumberFlow
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotBadge, HTMLAttributes<HTMLDivElement>]> {
	value?: number;
	locales?: Intl.LocalesArgument;
	format?: Intl.NumberFormatOptions;
	prefix?: string;
	suffix?: string;
}
