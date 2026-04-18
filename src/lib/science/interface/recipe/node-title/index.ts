import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ChildrenProp } from '$stylist/information/type/struct/children-prop';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { NodeTitleVariant } from '$stylist/science/type/enum/node-title-variant';

export interface NodeTitleRecipe
	extends StructIntersectAll<[Omit<ThemeAttributes<HTMLHeadingElement>, 'title' | 'onchange'>, ChildrenProp]>
{
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
