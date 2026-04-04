/**
 * NodeTitle — заголовок узла..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IIconSlot        (information) — icon (Icon)
 */
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ChildrenProp } from '$stylist/information/type/struct/common';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type NodeTitleVariant = 'default' | 'selected' | 'error' | 'warning';

export type NodeTitleRecipe = Omit<ThemeAttributes<HTMLHeadingElement>, 'title' | 'onchange'> &
	ChildrenProp & {
		title?: string;
		variant?: NodeTitleVariant;
		size?: TokenSize;
		selected?: boolean;
		editable?: boolean;
		color?: string;
		icon?: string | Snippet;
		trailingIcon?: string | Snippet;
		onchange?: (value: string) => void;
	};
