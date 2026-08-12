import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';
export interface RecipeBreadcrumbs
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotIcon, HTMLAttributes<HTMLElement>]> {}
