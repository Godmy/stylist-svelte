import type { Snippet } from 'svelte';
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenPropertyType } from '$stylist/development/type/enum/property-type';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphPortRecipe extends StructIntersectAll<[ThemeAttributes<HTMLDivElement>]> {
	id?: string;
	direction?: 'input' | 'output';
	dataType?: TokenPropertyType | string;
	label?: string;
	size?: TokenSize;
	index?: number;
	connected?: boolean;
	active?: boolean;
	color?: string;
	icon?: string | Snippet;
	onConnectionStart?: (event: MouseEvent) => void;
	onConnectionEnd?: (event: MouseEvent) => void;
}
