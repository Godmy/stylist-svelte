/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { ColorItem } from './color-item';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { HTMLAttributes } from 'svelte/elements';
import type { ColorItem } from '$stylist/input/type/struct/color-palette-color-item';

export interface ColorPaletteProps extends HTMLAttributes<HTMLDivElement> {
	colors: ColorItem[];
	title?: string;
	showLabels?: boolean;
	showValues?: boolean;
	columns?: number;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	onValueInput?: (color: ColorItem) => void;
	onValueChange?: (color: ColorItem) => void;
}