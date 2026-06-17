import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { NodeTitleVariant } from '$stylist/graph/type/enum/node-title-variant';

export interface RecipeNodeTitle
	extends StructIntersectAll<
		[SlotTheme, Omit<HTMLAttributes<HTMLHeadingElement>, 'title' | 'onchange'>, ChildrenProp]
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
