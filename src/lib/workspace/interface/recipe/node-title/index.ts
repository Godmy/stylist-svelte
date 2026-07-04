import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { NodeTitleVariant } from '$stylist/architecture/type/alias/node-title-variant';

export interface RecipeNodeTitle
	extends ComputeIntersectAll<
		[SlotTheme, Omit<HTMLAttributes<HTMLHeadingElement>, 'title' | 'onchange'>, SlotChildren]
	> {
	title?: string;
	variant?: NodeTitleVariant;
	size?: TokenSize;
	selected?: boolean;
	editable?: boolean;
	color?: string;
	icon?: string | Snippet;
	trailingIcon?: string | Snippet;
	onchange?: (value: string) => void;
}

