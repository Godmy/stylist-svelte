import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotIcon } from '$stylist/svg/interface/slot/icon';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { SlotProductOption } from '$stylist/product/interface/slot/product-option';

export interface RecipeProductSort
	extends ComputeIntersectAll<[SlotTheme, SlotText, SlotIcon, HTMLAttributes<HTMLDivElement>]> {
	options?: SlotProductOption[];
	selectedOption?: string;
	onValueChange?: (option: string) => void;
}
