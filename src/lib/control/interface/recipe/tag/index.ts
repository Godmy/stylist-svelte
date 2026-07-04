import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';

export interface RecipeTag
	extends ComputeIntersectAll<[SlotTheme, SlotChildren, HTMLAttributes<HTMLSpanElement>]> {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
	closable?: boolean;
	onClose?: () => void;
	text?: string;
	icon?: Snippet;
	content?: Snippet;
}
