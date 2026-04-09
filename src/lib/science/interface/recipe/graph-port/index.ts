/**
 * GraphPort — порт узла графа..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IStatusSlot        (information) — status (Status)
 */
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenPropertyType } from '$stylist/information/type/enum/property-type';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface GraphPortState {
	connected?: boolean;
	active?: boolean;
	hovered?: boolean;
}

export interface GraphPortDimensions {
	width: number;
	height: number;
	hitArea: number;
}

export interface GraphPortRecipe extends ThemeAttributes<HTMLDivElement> {
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
